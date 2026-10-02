/**
 * projects.js
 * ------------------------------------------------------------------
 * Fonte única de dados dos projetos do portfólio.
 * ------------------------------------------------------------------
 */

const PROJECTS = [

  {
    id: "new",
    title: "New Life Style",
    category: "E-commerce",
    status: "Concluído",
    tech: ["Flask", "SQLAlchemy", "Jinja2", "Mercado Pago", "EmailJS"],

    demo: "https://projeto-loja-virtual.onrender.com",
    github: "https://github.com/GabrielPorcela/Projeto-Loja-Virtual",

    cover: {
      spine: "#0d1220",
      coverBg: "#090e18",
      accent: "#072f80"
    },

    inside: {
      background: "#b7bae4",
      leftPage: "#b7bae4",
      text: "#1f39af",
      mutedText: "#000000",
      accent: "#1f39af"
    },

    shortDesc: "Loja virtual",

    problem:
      "O cliente estava começando um novo negócio e precisava, depois de ter os produtos no instagram, um site para profiossionalizar o negócio.",

    solution:
      "Com base no problema, foi criado uma loja virtual completa com modais estilo Mercado Livre, com painel administrativo para a adição, alteração e remoção dos produtos dinamicamente.",

   features: [
    "Catálogo de produtos organizado por categorias",
    "Checkout integrado ao WhatsApp e Mercado Pago",
    "Confirmação automática de pedidos por e-mail",
    "Painel administrativo para gerenciamento de produtos e pedidos",
    "Dashboard com métricas de faturamento, ticket médio e produtos mais vendidos",
    "Upload e otimização automática de imagens com Pillow",
    "Galeria de produtos com suporte a imagens e vídeos",
    "Backend desenvolvido em Python com Flask",
    "Banco de dados SQLite",
    "Interface responsiva para desktop e dispositivos móveis"
],

    image: "assets/images/project-loja-virtual.svg"
  },

  {
    id: "barber",
    title: "Agente de IA para Barbearia",
    category: "Automação & IA",
    status: "Em desenvolvimento",
    tech: ["Flask", "SQLite", "OpenAI API", "WhatsApp Cloud API"],

    demo: "https://agente-barbearia-1.onrender.com/admin/servicos",
    github: "https://github.com/GabrielPorcela/Agente-Barbearia",

    cover: {
      spine: "#361717",
      coverBg: "#361414",
      accent: "#282c29"
    },

    inside: {
      background: "#77817d",
      leftPage: "#778817d",
      text: "#2e2828",
      mutedText: "#f1e9e9",
      accent: "#2e2828"
    },

    shortDesc: "Atendimento e agendamento com IA.",

    problem:
      "Ao cortar o cabelo na minha barbearia, identifiquei uma oportunidade. Para agendar o serviço, o barbeiro recebia meu contato pelo WhatsApp e tinha que, manualmente, ver os horários disponíveis e confirmar o serviço.",

    solution:
      "Ao identificar a oportunidade, comecei o desenvolvimento de uma IA que é integrada ao WhatsApp, faz o agendamento , adiciona na agenda e o barbeiro verifica pelo painel admin.",

    features: [
      "Integração com WhatsApp Cloud API para atendimento automatizado",
      "Webhook seguro com validação HMAC-SHA256",
      "IA para interpretação e classificação da intenção das mensagens",
      "Identificação de solicitações de agendamento, consulta e cancelamento",
      "Agendamento automático de serviços conforme disponibilidade",
      "Persistência de clientes, serviços e agendamentos com SQLAlchemy",
      "Painel administrativo para gerenciamento de serviços e acompanhamento da agenda",
      "Respostas automáticas geradas por IA",
      "Validação de horários para evitar conflitos de agendamento",
      "Backend desenvolvido em Python com Flask"
],

    image: "assets/images/project-agente-ia.svg"
  },

  {
    id: "beleza",
    title: "Mega Hair Store",
    category: "E-commerce",
    status: "Em desenvolvimento",
    tech: ["HTML", "CSS", "JavaScript", "WhatsApp API"],

    demo: "https://gabrielporcela.github.io/Projeto-Seibel-Mega-Hair/",
    github: "https://github.com/GabrielPorcela/Projeto-Seibel-Mega-Hair",

    cover: {
      spine: "#302c0c",
      coverBg: "#29250a",
      accent: "#9a69ca"
    },

    inside: {
      background: "#524e37",
      leftPage: "#524e37",
      text: "#b4943d",
      mutedText: "#bebaad",
      accent: "#b4943d"
    },

    shortDesc: "Landing Page de salão de beleza.",

    problem:
      "Em um salão de beleza identifiquei que tinham uma bela estrutura, porém sem uma página de divulgação de seus serviços especializados em Mega Hair.",

    solution:
      "Identificado o problema, comecei o desenvolvimento de uma Landing Page para esse salão especializado em Mega Hair. Com base no layout e nome da empresa, criei toda a estilização da página.",

    features: [
      "Landing Page desenvolvida para divulgação de serviços de Mega Hair",
      "Apresentação dos principais serviços e especialidades do salão",
      "Galeria visual para destacar resultados e trabalhos realizados",
      "Seção de informações sobre o salão e seus diferenciais",
      "Call-to-actions estratégicos para contato e agendamento",
      "Integração com WhatsApp para facilitar o contato com clientes",
      "Design responsivo para desktop, tablet e dispositivos móveis",
      "Interface desenvolvida com foco em apresentação e conversão"
],

    image: "assets/images/project-mega-hair.svg"
  },

  {
    id: "ugc",
    title: "UGC Creator Portfolio",
    category: "Portfólio",
    status: "Em desenvolvimento",
    tech: ["HTML", "CSS", "JavaScript"],

    demo: "https://gabrielporcela.github.io/Portifolio-Dani/",
    github: "https://github.com/GabrielPorcela/Portifolio-Dani",

    cover: {
      spine: "#351b35",
      coverBg: "#291529",
      accent: "#cc0404"
    },

    inside: {
      background: "#d3b2d1",
      leftPage: "#d3b2d1",
      text: "#b31e83",
      mutedText: "#000000",
      accent: "#b31e83"
    },

    shortDesc: "Portfólio profissional para criador(a) de conteúdo UGC.",

    problem:
      "Para criadores de conteúdo UGC não dependerem apenas de redes sociais, era necessário uma outra forma de divulgar melhor o seu trabalho (como vídeos e fotos). ",

    solution:
      "Criei um site portifólio para que o trabalho de um criador UGC fosse melhor divulgado. Com sessões para vídeos, fotos, valores, objetivos de vídeos alcançados, marcas que foram feitas parcerias e mais detalhes sobre o serviço a ser prestado.",

    features: [
      "Portfólio profissional para apresentação de trabalhos UGC",
      "Seção de vídeos e fotos para divulgação do conteúdo produzido",
      "Organização dos trabalhos por categorias",
      "Apresentação de marcas e parcerias realizadas",
      "Seção de valores e informações sobre os serviços",
      "Apresentação de objetivos e resultados alcançados",
      "Call-to-actions estratégicos para contratação e contato",
      "Layout totalmente responsivo para dispositivos móveis",
      "Animações de scroll reveal para uma experiência mais dinâmica",
      "Desenvolvimento sem frameworks pesados, priorizando performance"
],

    image: "assets/images/project-ugc.svg"
  },

   {
    id: "personal-trainer",
    title: "Personal Trainer",
    category: "Site Institucional",
    status: "Concluído",
    tech: ["HTML", "CSS", "JavaScript"],

    demo:   "https://gabrielporcela.github.io/Projeto-Pagina-Treino/",
    github: "https://github.com/GabrielPorcela/Projeto-Pagina-Treino",

    cover: {
      spine: "#15233f",
      coverBg: "#111d35",
      accent: "#7a0e0e"
    },

    inside: {
      background: "#434349",
      leftPage: "#434349",
      text: "#a4b1eb",
      mutedText: "#d1d0d4",
      accent: "#a4b1eb"
    },

    shortDesc: "Site para divulgar e contratar o serviço de um personal trainer",

    problem:
      "Pensando em divulgar os serviços de um personal trainer e meus aprendizados, tive a ideia de um site em html, css e javascript puro.",

    solution:
      "Depois de ter tido a ideia, fiz o código praticando o que aprendi com os cursos feitos até aquele momento e os melhorando com partes com IA.",

    features: [
  "Apresentação profissional do personal trainer",
  "Apresentação dos serviços e modalidades de treinamento",
  "Seção com informações sobre o treinamento e seus benefícios",
  "Call-to-action para contratação e contato",
  "Layout responsivo para dispositivos móveis",
  "Interface desenvolvida com HTML, CSS e JavaScript puro",
  "Estrutura visual voltada para o segmento fitness",
  "Organização das informações em seções de fácil navegação",
  "Animações e efeitos visuais para melhorar a experiência do usuário",
  "Projeto desenvolvido como prática dos conhecimentos adquiridos em HTML, CSS e JavaScript"
],

    image: "assets/images/project-ugc.svg"
  },
  
  {
  id: "projeto-rh",
  title: "Projeto Recursos Humanos",
  category: "Site Institucional",
  status: "Concluído",

  tech: ["HTML", "CSS", "JavaScript"],

  demo: "https://gabrielporcela.github.io/Projeto-RH/",
  github: "https://github.com/GabrielPorcela/Projeto-RH",

  cover: {
    spine: "#2b2f30",
    coverBg: "#232627",
    accent: "#10202b"
  },

  inside: {
    background: "#031929",
    leftPage: "#031929",
    text: "#c9a15a",
    mutedText: "#ffffff",
    accent: "#c9a15a"
  },

  shortDesc: "Site institucional desenvolvido para apresentação da DAM Terceirização.",

  problem:
    "A DAM Terceirização precisava de uma presença digital profissional para apresentar seus serviços, transmitir credibilidade e facilitar o contato com potenciais clientes.",

  solution:
    "Desenvolvi um site institucional para apresentar a empresa, seus serviços e diferenciais de forma organizada, com uma interface profissional e responsiva.",

  features: [
    "Apresentação institucional da empresa",
    "Apresentação dos serviços oferecidos",
    "Seção de diferenciais da empresa",
    "Informações para contato e solicitação de atendimento",
    "Call-to-actions para facilitar o contato",
    "Layout responsivo para dispositivos móveis",
    "Interface desenvolvida com HTML, CSS e JavaScript",
    "Estrutura focada em apresentação profissional e conversão"
  ],

  image: "assets/images/project-sobre-mim.svg"
},
{
  id: "projeto-hora",
  title: "Projeto Hora do Dia",
  category: "Site Teste",
  status: "Concluído",

  tech: ["HTML", "CSS", "JavaScript"],

  demo: "https://gabrielporcela.github.io/Projeto-Hora-Do-Dia/",
  github: "https://github.com/GabrielPorcela/Projeto-Hora-Do-Dia",

  cover: {
    spine: "#0c330e",
    coverBg: "#043006",
    accent: "#10202b"
  },

  inside: {
    background: "#224124",
    leftPage: "#224124",
    text: "#b8790d",
    mutedText: "#ffffff",
    accent: "#b8790d"
  },

  shortDesc: "Página interativa desenvolvida durante o curso de JavaScript.",

problem:
  "Durante o curso de JavaScript, após várias aulas e exercícios, foi proposto o desafio de desenvolver uma página que alterasse seu conteúdo visual de acordo com o horário do dia.",

solution:
  "Para solucionar o desafio, desenvolvi uma página que identifica o período do dia e altera a imagem exibida entre manhã, tarde e noite. Além da imagem, o plano de fundo também é alterado para acompanhar visualmente cada período.",

features: [
  "Alteração da imagem de acordo com o horário do dia",
  "Identificação dos períodos da manhã, tarde e noite",
  "Alteração dinâmica do plano de fundo",
  "Interface desenvolvida com HTML, CSS e JavaScript",
  "Manipulação de elementos da página com JavaScript",
  "Projeto desenvolvido como exercício prático durante o curso de JavaScript",
  "Aplicação de conhecimentos de lógica e programação web"
],
  image: "assets/images/project-sobre-mim.svg"
},
{
  id: "projeto-manga",
  title: "Projeto Mangá",
  category: "Landing Page inspirada em um mangá",
  status: "Em desenvolvimento",

  tech: ["HTML", "CSS", "JavaScript"],

  demo: "https://gabrielporcela.github.io/Projeto-Manga/",
  github: "https://github.com/GabrielPorcela/Projeto-Manga",

  cover: {
    spine: "#5c2708",
    coverBg: "#4b1f05",
    accent: "#10202b"
  },

  inside: {
    background: "#111111",
    leftPage: "#111111",
    text: "#ad250d",
    mutedText: "#ffffff",
    accent: "#ad250d"
  },

  shortDesc: "Landing page conceitual para um estúdio brasileiro de mangá.",

  problem:
    "Criar uma landing page com identidade visual inspirada no universo dos mangás, capaz de apresentar um estúdio, sua proposta, suas obras e seus canais de contato de forma marcante.",

  solution:
    "Desenvolvi uma landing page responsiva para um estúdio fictício de mangá, utilizando uma identidade visual inspirada em publicações japonesas, com tipografia de impacto, contrastes fortes, elementos gráficos e seções organizadas para apresentar a marca, sua missão, catálogo de obras e contato.",

  features: [
    "Hero section com apresentação do estúdio",
    "Identidade visual inspirada em mangás",
    "Seção institucional sobre o estúdio",
    "Apresentação da missão e proposta da marca",
    "Catálogo visual com diferentes obras",
    "Cards individuais para apresentação das obras",
    "Seção de contato com call-to-action",
    "Links para redes sociais",
    "Menu de navegação responsivo",
    "Menu mobile com botão hambúrguer",
    "Animações de entrada durante a navegação",
    "Layout responsivo para dispositivos móveis",
    "Estrutura desenvolvida com HTML, CSS e JavaScript",
    "Recursos de acessibilidade e navegação por teclado"
  ],

  image: "assets/images/project-manga.svg"
}
];