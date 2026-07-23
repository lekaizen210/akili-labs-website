export const expertises = [
  {
    slug: "transformation-digitale",
    href: "/expertises/transformation-digitale",
    icon: "Layers",
    title: "Transformation Digitale",
    subtitle: "Modernisez vos processus métiers",
    description:
      "Nous accompagnons les organisations dans la digitalisation et l'optimisation de leurs processus — du schéma directeur à la dématérialisation.",
    services: [
      "Audit des systèmes d'information",
      "Schéma Directeur Informatique",
      "Urbanisation du SI",
      "Dématérialisation",
      "Gestion Électronique des Documents (GED)",
      "Business Process Management (BPM)",
      "Gouvernance SI",
    ],
    color: "#1A2B3C",
  },
  {
    slug: "erp",
    href: "/expertises/odoo",
    icon: "Database",
    title: "ERP",
    subtitle: "Intégrez les meilleures solutions ERP",
    description:
      "Odoo, SAP, Oracle, Sage — nous intégrons et personnalisons les solutions ERP adaptées à vos besoins, avec un focus sur la conformité OHADA.",
    services: [
      "Analyse des besoins",
      "Paramétrage et configuration",
      "Développements spécifiques",
      "Migration de données",
      "Formation utilisateurs",
      "Support et maintenance (TMA)",
    ],
    color: "#FF5500",
    featured: true,
  },
  {
    slug: "intelligence-artificielle",
    href: "/expertises/intelligence-artificielle",
    icon: "Brain",
    title: "Intelligence Artificielle",
    subtitle: "Exploitez la puissance de l'IA",
    description:
      "IA Générative, Agents IA, OCR intelligent, NLP — nous développons des solutions IA sur mesure qui automatisent et amplifient vos capacités.",
    services: [
      "IA Générative & LLM privés",
      "Agents IA autonomes",
      "Chatbots intelligents",
      "OCR Intelligent",
      "Traitement Automatique du Langage (NLP)",
      "Analyse prédictive & RAG",
    ],
    color: "#1A2B3C",
    featured: true,
  },
  {
    slug: "devsecops",
    href: "/expertises/devsecops",
    icon: "Shield",
    title: "DevSecOps",
    subtitle: "Industrialisez votre développement",
    description:
      "CI/CD, Docker, Kubernetes, IaC — nous intégrons la sécurité dès la conception et industrialisons vos pipelines de livraison logicielle.",
    services: [
      "CI/CD (GitLab CI/CD, GitHub Actions)",
      "Conteneurisation Docker & Kubernetes",
      "Infrastructure as Code",
      "Sécurité OWASP & SonarQube",
      "Monitoring & Observabilité",
    ],
    color: "#FF5500",
  },
  {
    slug: "developpement-metiers",
    href: "/expertises/developpement-metiers",
    icon: "Code2",
    title: "Développement Métiers",
    subtitle: "Des solutions sur mesure",
    description:
      "Applications web, mobile, APIs, microservices — nous concevons des plateformes métiers adaptées à vos processus les plus spécifiques.",
    services: [
      "Applications Web & Mobile",
      "Portails collaboratifs",
      "APIs REST & Microservices",
      "Plateformes métiers",
    ],
    color: "#1A2B3C",
  },
  {
    slug: "business-intelligence",
    href: "/expertises/business-intelligence",
    icon: "BarChart3",
    title: "Business Intelligence",
    subtitle: "Transformez vos données en décisions",
    description:
      "Power BI, Grafana, Data Warehouse — nous aidons les organisations à construire leurs tableaux de bord et à piloter par la donnée.",
    services: [
      "Microsoft Power BI",
      "Grafana & Dashboards temps réel",
      "Data Warehouse & Data Lake",
      "PostgreSQL Analytics",
    ],
    color: "#FF5500",
  },
];

export const sectors = [
  { name: "Administration publique", icon: "Building2" },
  { name: "Banque & Assurance", icon: "Landmark" },
  { name: "Agro-industrie", icon: "Wheat" },
  { name: "Télécommunications", icon: "Radio" },
  { name: "Santé", icon: "HeartPulse" },
  { name: "Éducation", icon: "GraduationCap" },
  { name: "Industrie", icon: "Factory" },
  { name: "Commerce", icon: "ShoppingBag" },
  { name: "Énergie", icon: "Zap" },
  { name: "Logistique", icon: "Truck" },
];

export const references = [
  {
    slug: "integration-erp-agroalimentaire",
    client: "Groupe Agroalimentaire CI",
    sector: "Agro-industrie",
    expertise: "ERP",
    title: "Intégration Odoo Enterprise — Gestion comptable & stocks",
    summary:
      "Déploiement d'Odoo Enterprise pour la gestion comptable OHADA, la gestion des stocks multi-entrepôts et la paie de 200 employés.",
    result: "ROI atteint en 14 mois",
    technologies: ["Odoo Enterprise", "PostgreSQL", "Docker"],
    year: "2024",
  },
  {
    slug: "plateforme-ia-banque",
    client: "Banque régionale UEMOA",
    sector: "Banque & Assurance",
    expertise: "Intelligence Artificielle",
    title: "Plateforme OCR & analyse documentaire",
    summary:
      "Développement d'une solution OCR intelligente pour l'analyse automatique des dossiers de crédit, réduisant le délai de traitement de 72h à 4h.",
    result: "−94% de délai de traitement",
    technologies: ["Python", "Tesseract OCR", "LLM privé", "FastAPI"],
    year: "2025",
  },
  {
    slug: "devsecops-telecom",
    client: "Opérateur Télécom Afrique de l'Ouest",
    sector: "Télécommunications",
    expertise: "DevSecOps",
    title: "Pipeline CI/CD & infrastructure cloud",
    summary:
      "Mise en place d'un pipeline CI/CD complet avec GitLab, Docker, Kubernetes sur AWS, avec intégration SonarQube et scans OWASP automatisés.",
    result: "Déploiements 10× plus rapides",
    technologies: ["GitLab CI/CD", "Kubernetes", "AWS", "SonarQube"],
    year: "2025",
  },
];

export const stats = [
  { value: "50+", label: "Projets livrés" },
  { value: "10+", label: "Années d'expertise" },
  { value: "15+", label: "Secteurs couverts" },
  { value: "8", label: "Pays UEMOA" },
];

export const approach = [
  { step: 1, title: "Analyse des besoins", icon: "Search" },
  { step: 2, title: "Audit de l'existant", icon: "ClipboardList" },
  { step: 3, title: "Conception solution", icon: "PenTool" },
  { step: 4, title: "Développement", icon: "Code2" },
  { step: 5, title: "Tests & Validation", icon: "CheckCircle" },
  { step: 6, title: "Déploiement", icon: "Rocket" },
  { step: 7, title: "Formation", icon: "GraduationCap" },
  { step: 8, title: "Support continu", icon: "Headphones" },
];

export const values = [
  { name: "Excellence", icon: "Star", desc: "Nous visons la perfection dans chaque livrable." },
  { name: "Innovation", icon: "Lightbulb", desc: "Nous adoptons les technologies d'avant-garde." },
  { name: "Confiance", icon: "Shield", desc: "Transparence et honnêteté dans chaque engagement." },
  { name: "Collaboration", icon: "Users", desc: "Nous travaillons avec vous, pas pour vous." },
  { name: "Engagement", icon: "Target", desc: "Nos promesses sont tenues, sans exception." },
  { name: "Sécurité", icon: "Lock", desc: "La cybersécurité est au cœur de nos pratiques." },
  { name: "Qualité", icon: "Award", desc: "Nos standards dépassent les attentes du marché." },
  { name: "Performance", icon: "TrendingUp", desc: "Chaque solution est conçue pour performer." },
];

export const team = [
  {
    initiales: "JA",
    nom: "Jonathan Arra",
    titre: "Fondateur & Directeur Général",
    bio: "Expert en transformation digitale et intégration ERP, Jonathan pilote la stratégie d'AKILI Labs avec plus de 10 ans d'expérience sur la zone UEMOA.",
    expertises: ["ERP Odoo", "Transformation Digitale", "Stratégie SI"],
    linkedin: "",
    couleur: "#1A2B3C",
  },
  {
    initiales: "ERP",
    nom: "Pôle ERP & Odoo",
    titre: "Intégration, paramétrage et support",
    bio: "Consultants fonctionnels et développeurs Odoo mobilisés sur l'analyse métier, la configuration, les développements spécifiques, la migration et la formation.",
    expertises: ["Odoo", "OHADA", "SIRH", "TMA"],
    linkedin: "",
    couleur: "#FF5500",
  },
  {
    initiales: "IA",
    nom: "Pôle IA & Data",
    titre: "Automatisation, OCR et aide à la décision",
    bio: "Ingénieurs data et IA spécialisés dans les cas d'usage utiles aux métiers : OCR documentaire, agents IA, RAG, tableaux de bord et analyse prédictive.",
    expertises: ["IA générative", "OCR", "Python", "RAG"],
    linkedin: "",
    couleur: "#1A2B3C",
  },
  {
    initiales: "OPS",
    nom: "Pôle DevSecOps",
    titre: "CI/CD, cloud, sécurité et exploitation",
    bio: "Ingénieurs DevSecOps chargés d'industrialiser les déploiements, sécuriser les pipelines et mettre en place le monitoring des environnements clients.",
    expertises: ["GitLab CI/CD", "Docker", "Kubernetes", "Monitoring"],
    linkedin: "",
    couleur: "#FF5500",
  },
  {
    initiales: "PM",
    nom: "Pôle Projets & Qualité",
    titre: "Pilotage, recette et satisfaction client",
    bio: "Chefs de projet et analystes QA garants du cadrage, du suivi, de la recette, de la documentation et de la qualité des livraisons.",
    expertises: ["Gestion projet", "Recette UAT", "Documentation", "Qualité"],
    linkedin: "",
    couleur: "#1A2B3C",
  },
  {
    initiales: "AM",
    nom: "Pôle Conseil & Avant-vente",
    titre: "Cadrage, propositions et accompagnement métier",
    bio: "Consultants avant-vente et experts métier mobilisés pour analyser les besoins, qualifier les opportunités et construire des propositions adaptées.",
    expertises: ["Audit", "Appels d'offres", "Architecture SI", "Conseil"],
    linkedin: "",
    couleur: "#FF5500",
  },
];

export const blogPosts = [
  {
    slug: "pourquoi-odoo-en-afrique",
    title: "Pourquoi Odoo s'impose comme le choix ERP de référence en Afrique de l'Ouest",
    excerpt:
      "Flexibilité, coût total de possession, conformité OHADA — les raisons qui font d'Odoo l'ERP le plus adopté par les entreprises de la zone UEMOA.",
    category: "ERP",
    date: "2026-06-15",
    readTime: "8 min",
    tag: "ERP",
  },
  {
    slug: "ia-generative-entreprises-africaines",
    title: "IA Générative pour les entreprises africaines : opportunités et précautions",
    excerpt:
      "GPT-4, Claude, Mistral — comment choisir et déployer un LLM privé sécurisé pour votre organisation sans exposer vos données métier.",
    category: "Intelligence Artificielle",
    date: "2026-06-05",
    readTime: "12 min",
    tag: "IA",
  },
  {
    slug: "cicd-gitlab-guide-pratique",
    title: "CI/CD avec GitLab CI : guide pratique pour les équipes DevOps en 2026",
    excerpt:
      "Pipeline complet, tests automatisés, déploiement continu sur Kubernetes — un guide pas à pas pour industrialiser vos livraisons logicielles.",
    category: "DevSecOps",
    date: "2026-05-20",
    readTime: "15 min",
    tag: "DevSecOps",
  },
];
