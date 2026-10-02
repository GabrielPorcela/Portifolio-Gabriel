# Portfólio — A Biblioteca de Projetos

Portfólio pessoal de Gabriel Silva, construído com HTML, CSS e JavaScript
puro (sem frameworks e sem etapa de build). O conceito visual é o de uma
biblioteca: cada projeto é representado como um livro em uma estante.

## Estrutura do projeto

```
/
├── index.html              # Página única com todas as seções
├── README.md
├── assets/
│   ├── images/              # Capas de projeto e imagem de Open Graph (SVG placeholder)
│   ├── icons/                # Favicon (SVG placeholder)
│   └── documents/            # Coloque aqui o curriculo.pdf
├── css/
│   ├── style.css              # Tokens de design + todos os componentes
│   └── responsive.css         # Breakpoints (tablet e mobile)
└── js/
    ├── projects.js             # Dados dos projetos (fonte única de verdade)
    ├── animations.js           # Scroll reveal e estado do header
    └── main.js                 # Renderização, modal, menu mobile, formulário
```

## Como rodar localmente

Não há dependências para instalar. Basta servir a pasta com qualquer
servidor estático, por exemplo:

```bash
cd portfolio
python3 -m http.server 8000
```

Depois abra `http://localhost:8000` no navegador.

(Abrir o `index.html` diretamente com duplo clique também funciona, mas
servir via HTTP evita eventuais bloqueios de CORS caso você adicione
fetch/integrações no futuro.)

## Como adicionar um novo projeto

Você **não precisa mexer no HTML nem no CSS**. Basta abrir
`js/projects.js` e copiar um dos objetos existentes dentro do array
`PROJECTS`, colar no final e preencher os campos:

```js
{
  id: "meu-novo-projeto",
  title: "Nome do Projeto",
  category: "Categoria",
  status: "Concluído",
  tech: ["Tecnologia 1", "Tecnologia 2"],
  cover: { spine: "#8a6a2f", coverBg: "#12213a", accent: "#c9a15a" },
  shortDesc: "Descrição curta que aparece no hover.",
  problem: "Qual problema o projeto resolve.",
  solution: "Como o projeto resolve esse problema.",
  features: ["Funcionalidade 1", "Funcionalidade 2"],
  image: "assets/images/meu-projeto.svg",
  demoUrl: "DEMO_URL_AQUI",
  githubUrl: "GITHUB_URL_AQUI",
}
```

O livro na estante e o modal de detalhes são gerados automaticamente a
partir desse array (veja `renderBookshelf()` em `js/main.js`).

## Como substituir os links placeholder

Procure por `GITHUB_URL_AQUI` e `DEMO_URL_AQUI` em `js/projects.js` e
substitua pelos links reais de cada projeto. Os links de contato
(`LINKEDIN_URL_AQUI`, e-mail e WhatsApp) estão no final de `index.html`,
na seção `#contato`.

## Como adicionar o currículo em PDF

Salve o arquivo como `assets/documents/curriculo.pdf`. O botão "Baixar
currículo" na seção de currículo já aponta para esse caminho.

## Como colocar o projeto no GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Primeiro commit: portfólio biblioteca"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```

## Como publicar no Render

1. Acesse [render.com](https://render.com) e crie uma conta (ou faça login).
2. Clique em **New +** → **Static Site**.
3. Conecte sua conta do GitHub e selecione o repositório do portfólio.
4. Configure:
   - **Build Command:** deixe em branco (não há build)
   - **Publish directory:** `.` (raiz do projeto)
5. Clique em **Create Static Site**.
6. O Render vai gerar uma URL pública (ex.
   `https://seu-portfolio.onrender.com`) — cada novo `git push` na branch
   principal atualiza o site automaticamente.

## Notas

- Os textos de "Sobre mim" e "Currículo" contêm trechos marcados como
  `[Edite: ...]` — foram deixados propositalmente para você preencher com
  informações reais (nenhuma experiência foi inventada).
- As imagens de capa dos projetos e o favicon são placeholders em SVG.
  Substitua os arquivos em `assets/images/` e `assets/icons/` por
  imagens reais quando desejar.
