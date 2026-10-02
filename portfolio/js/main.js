/**
 * main.js
 * ------------------------------------------------------------------
 * Lógica principal do site:
 *  - Renderiza a estante de livros a partir de js/projects.js
 *  - Controla a abertura/fechamento do modal de detalhes do projeto
 *  - Controla o menu mobile
 *  - Renderiza a estante de habilidades
 *  - Trata o envio do formulário de contato (front-end, ver nota abaixo)
 * ------------------------------------------------------------------
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    renderBookshelf();
    renderSkillShelf();
    setupMobileNav();
    setupModal();
    setupContactForm();
    document.getElementById("year").textContent = new Date().getFullYear();
  });

  // ------------------------------------------------------------------
  // Biblioteca de projetos
  // ------------------------------------------------------------------
  function renderBookshelf() {
    const shelf = document.getElementById("bookshelf");
    if (!shelf || typeof PROJECTS === "undefined") return;

   shelf.innerHTML =
      PROJECTS.map(
        (project) => `
        <button
          class="book"
          role="listitem"
          data-project-id="${project.id}"
          style="--book-cover:${project.cover.coverBg}; --book-spine:${project.cover.spine};"
          aria-haspopup="dialog"
        >
          <div class="book__hover-panel">${project.shortDesc}</div>
          <p class="book__spine-label">${project.category}</p>
          <h3 class="book__title">${project.title}</h3>
          <p class="book__meta">${project.tech.slice(0, 3).join(" · ")}</p>
         <span class="book__status status-projeto status-projeto-${project.id}">
            ${project.status}
         </span>
        </button>
      `
      ).join("");

    shelf.querySelectorAll(".book[data-project-id]").forEach((bookEl) => {
      bookEl.addEventListener("click", () => {
        const project = PROJECTS.find((p) => p.id === bookEl.dataset.projectId);
        if (project) openBookModal(project);
      });
    });

    if (window.PortfolioAnimations) {
      window.PortfolioAnimations.observeBooks(shelf);
    }
  }

  // ------------------------------------------------------------------
  // Estante de habilidades
  // ------------------------------------------------------------------
  const SKILLS = [
    "HTML", "CSS", "JavaScript", "React", "Python", "Flask",
    "Git", "GitHub", "APIs REST", "Banco de dados", "Integrações com IA",
  ];

  function renderSkillShelf() {
    const shelf = document.getElementById("skillShelf");
    if (!shelf) return;

    shelf.innerHTML = SKILLS.map(
      (skill) => `
        <li class="skill-book reveal">
          <span class="skill-book__name">${skill}</span>
        </li>
      `
    ).join("");

    if (window.PortfolioAnimations) {
      window.PortfolioAnimations.observeReveals(shelf);
    }
  }

  // ------------------------------------------------------------------
  // Modal — abertura do livro com detalhes do projeto
  // ------------------------------------------------------------------
  let lastFocusedElement = null;

  function setupModal() {
    const modal = document.getElementById("bookModal");
    if (!modal) return;

    modal.querySelectorAll("[data-close-modal]").forEach((el) => {
      el.addEventListener("click", closeBookModal);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("is-open")) {
        closeBookModal();
      }
    });
  }

  function openBookModal(project) {

  const modal = document.getElementById("bookModal");

  if (!modal) return;
  const openBook = document.getElementById("openBook"); 
  openBook.className = `open-book open-book-${project.id}`;

  // Cores personalizadas do interior de cada livro
  if (project.inside) {

    modal.style.setProperty("--book-inside-bg", project.inside.background);
    modal.style.setProperty("--book-inside-left", project.inside.leftPage);
    modal.style.setProperty("--book-inside-text", project.inside.text);
    modal.style.setProperty("--book-inside-muted", project.inside.mutedText);
    modal.style.setProperty("--book-inside-accent", project.inside.accent);

  }

  lastFocusedElement = document.activeElement;

  document.getElementById("modalCategory").textContent = project.category;

  document.getElementById("modalTitle").textContent = project.title;

  const modalStatus = document.getElementById("modalStatus");

  modalStatus.textContent = `Status: ${project.status}`;

  modalStatus.className = `open-book__status status-projeto-${project.id}`;

  document.getElementById("modalProblem").textContent = project.problem;

  document.getElementById("modalSolution").textContent = project.solution;

  document.getElementById("modalTech").innerHTML = project.tech
    .map(t => `<li>${t}</li>`)
    .join("");

  document.getElementById("modalFeatures").innerHTML = project.features
    .map(f => `<li>${f}</li>`)
    .join("");

  const demoLink = document.getElementById("modalDemo");
  const githubLink = document.getElementById("modalGithub");

  // Links
  demoLink.href = project.demo;
  githubLink.href = project.github;

  // Classes específicas de cada projeto
  demoLink.className = `btn btn--primary btn-projeto-${project.id}`;
  githubLink.className = `btn btn--ghost btn-projeto-${project.id}`;

  // Abre o modal
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelector(".book-modal__close").focus();
}
  function closeBookModal() {
    const modal = document.getElementById("bookModal");
    if (!modal) return;

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (lastFocusedElement) lastFocusedElement.focus();
  }

  // ------------------------------------------------------------------
  // Modal — "Sobre mim" como livro (mesmo comportamento do modal de
  // projetos, reaproveitando as classes .book-modal / .open-book-like
  // já existentes; o conteúdo em si usa as classes .about__* originais).
  // ------------------------------------------------------------------

  // ------------------------------------------------------------------
  // Menu mobile
  // ------------------------------------------------------------------
  function setupMobileNav() {
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ------------------------------------------------------------------
  // Formulário de contato
  // Front-end apenas por enquanto. Estrutura preparada para integração
  // futura: troque o conteúdo do bloco marcado abaixo por uma chamada
  // real (ex. EmailJS, endpoint próprio, ou outra API).
  // ------------------------------------------------------------------
function setupContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      status.textContent = "Preencha todos os campos antes de enviar.";
      return;
    }

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const whatsappNumber = "5551993373155";

    const whatsappMessage = `Olá, Gabriel!

Nome: ${name}

E-mail: ${email}

Mensagem:

${message}`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    status.textContent = "Abrindo o WhatsApp...";

    window.open(whatsappURL, "_blank");

    form.reset();
  });
}

})();