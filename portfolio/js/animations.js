/**
 * animations.js
 * ------------------------------------------------------------------
 * Efeitos de scroll: header com fundo ao rolar, e revelação de
 * elementos (livros e blocos genéricos com a classe .reveal) usando
 * IntersectionObserver — leve e sem custo de performance.
 * ------------------------------------------------------------------
 */

(function () {
  "use strict";

  // ---------- Header muda de aparência ao rolar ----------
  const header = document.getElementById("siteHeader");

  function updateHeaderState() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  window.addEventListener("scroll", updateHeaderState, { passive: true });
  updateHeaderState();

  // ---------- Revelação genérica (.reveal) ----------
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );

  function observeReveals(root = document) {
    root.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
      revealObserver.observe(el);
    });
  }

  // ---------- Livros entrando na estante (efeito escalonado) ----------
  const bookObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          bookObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  function observeBooks(root = document) {
    root.querySelectorAll(".book:not(.is-visible)").forEach((book, index) => {
      book.style.transitionDelay = `${Math.min(index * 70, 400)}ms`;
      bookObserver.observe(book);
    });
  }

  // Expostas globalmente para serem chamadas depois que main.js
  // renderizar os livros dinamicamente.
  window.PortfolioAnimations = { observeReveals, observeBooks };

  document.addEventListener("DOMContentLoaded", () => {
    observeReveals(document);
  });
})();
