import type { Localized } from "@/lib/i18n-content";

export const expertises = [
  {
    slug: "transformation-digitale",
    href: "/expertises/transformation-digitale",
    icon: "Layers",
    title: { fr: "Transformation Digitale", en: "Digital Transformation" },
    subtitle: {
      fr: "Modernisez vos processus métiers",
      en: "Modernize your business processes",
    },
    description: {
      fr: "Nous accompagnons les organisations dans la digitalisation et l'optimisation de leurs processus — du schéma directeur à la dématérialisation.",
      en: "We help organizations digitize and optimize their processes — from IT Master Plans to paperless workflows.",
    },
    services: [
      { fr: "Audit des systèmes d'information", en: "Information systems audit" },
      { fr: "Schéma Directeur Informatique", en: "IT Master Plan" },
      { fr: "Urbanisation du SI", en: "IS urbanization" },
      { fr: "Dématérialisation", en: "Document digitization" },
      { fr: "Gestion Électronique des Documents (GED)", en: "Electronic Document Management (EDM)" },
      { fr: "Business Process Management (BPM)", en: "Business Process Management (BPM)" },
      { fr: "Gouvernance SI", en: "IS governance" },
    ] satisfies Localized[],
    color: "#1A2B3C",
  },
  {
    slug: "erp",
    href: "/expertises/odoo",
    icon: "Database",
    title: { fr: "ERP", en: "ERP" },
    subtitle: {
      fr: "Intégrez les meilleures solutions ERP",
      en: "Integrate the best ERP solutions",
    },
    description: {
      fr: "Odoo, SAP, Oracle, Sage — nous intégrons et personnalisons les solutions ERP adaptées à vos besoins, avec un focus sur la conformité OHADA.",
      en: "Odoo, SAP, Oracle, Sage — we integrate and customize ERP solutions tailored to your needs, with a focus on OHADA compliance.",
    },
    services: [
      { fr: "Analyse des besoins", en: "Needs analysis" },
      { fr: "Paramétrage et configuration", en: "Setup & configuration" },
      { fr: "Développements spécifiques", en: "Custom development" },
      { fr: "Migration de données", en: "Data migration" },
      { fr: "Formation utilisateurs", en: "User training" },
      { fr: "Support et maintenance (TMA)", en: "Support and maintenance (TMA — application maintenance)" },
    ] satisfies Localized[],
    color: "#FF5500",
    featured: true,
  },
  {
    slug: "intelligence-artificielle",
    href: "/expertises/intelligence-artificielle",
    icon: "Brain",
    title: { fr: "Intelligence Artificielle", en: "Artificial Intelligence" },
    subtitle: {
      fr: "Exploitez la puissance de l'IA",
      en: "Harness the power of AI",
    },
    description: {
      fr: "IA Générative, Agents IA, OCR intelligent, NLP — nous développons des solutions IA sur mesure qui automatisent et amplifient vos capacités.",
      en: "Generative AI, AI agents, intelligent OCR, NLP — we build custom AI solutions that automate and amplify your capabilities.",
    },
    services: [
      { fr: "IA Générative & LLM privés", en: "Generative AI & private LLMs" },
      { fr: "Agents IA autonomes", en: "Autonomous AI agents" },
      { fr: "Chatbots intelligents", en: "Intelligent chatbots" },
      { fr: "OCR Intelligent", en: "Intelligent OCR" },
      { fr: "Traitement Automatique du Langage (NLP)", en: "Natural Language Processing (NLP)" },
      { fr: "Analyse prédictive & RAG", en: "Predictive analytics & RAG" },
    ] satisfies Localized[],
    color: "#1A2B3C",
    featured: true,
  },
  {
    slug: "devsecops",
    href: "/expertises/devsecops",
    icon: "Shield",
    title: { fr: "DevSecOps", en: "DevSecOps" },
    subtitle: {
      fr: "Industrialisez votre développement",
      en: "Industrialize your development",
    },
    description: {
      fr: "CI/CD, Docker, Kubernetes, IaC — nous intégrons la sécurité dès la conception et industrialisons vos pipelines de livraison logicielle.",
      en: "CI/CD, Docker, Kubernetes, IaC — we build security in from the design phase and industrialize your software delivery pipelines.",
    },
    services: [
      { fr: "CI/CD (GitLab CI/CD, GitHub Actions)", en: "CI/CD (GitLab CI/CD, GitHub Actions)" },
      { fr: "Conteneurisation Docker & Kubernetes", en: "Docker & Kubernetes containerization" },
      { fr: "Infrastructure as Code", en: "Infrastructure as Code" },
      { fr: "Sécurité OWASP & SonarQube", en: "OWASP & SonarQube security" },
      { fr: "Monitoring & Observabilité", en: "Monitoring & observability" },
    ] satisfies Localized[],
    color: "#FF5500",
  },
  {
    slug: "developpement-metiers",
    href: "/expertises/developpement-metiers",
    icon: "Code2",
    title: { fr: "Développement Métiers", en: "Business Application Development" },
    subtitle: {
      fr: "Des solutions sur mesure",
      en: "Tailor-made solutions",
    },
    description: {
      fr: "Applications web, mobile, APIs, microservices — nous concevons des plateformes métiers adaptées à vos processus les plus spécifiques.",
      en: "Web and mobile applications, APIs, microservices — we design business platforms tailored to your most specific processes.",
    },
    services: [
      { fr: "Applications Web & Mobile", en: "Web & mobile applications" },
      { fr: "Portails collaboratifs", en: "Collaborative portals" },
      { fr: "APIs REST & Microservices", en: "REST APIs & microservices" },
      { fr: "Plateformes métiers", en: "Business platforms" },
    ] satisfies Localized[],
    color: "#1A2B3C",
  },
  {
    slug: "business-intelligence",
    href: "/expertises/business-intelligence",
    icon: "BarChart3",
    title: { fr: "Business Intelligence", en: "Business Intelligence" },
    subtitle: {
      fr: "Transformez vos données en décisions",
      en: "Turn your data into decisions",
    },
    description: {
      fr: "Power BI, Grafana, Data Warehouse — nous aidons les organisations à construire leurs tableaux de bord et à piloter par la donnée.",
      en: "Power BI, Grafana, Data Warehouse — we help organizations build their dashboards and drive decisions with data.",
    },
    services: [
      { fr: "Microsoft Power BI", en: "Microsoft Power BI" },
      { fr: "Grafana & Dashboards temps réel", en: "Grafana & real-time dashboards" },
      { fr: "Data Warehouse & Data Lake", en: "Data Warehouse & Data Lake" },
      { fr: "PostgreSQL Analytics", en: "PostgreSQL Analytics" },
    ] satisfies Localized[],
    color: "#FF5500",
  },
];

export const sectors = [
  { name: { fr: "Administration publique", en: "Public Administration" }, icon: "Building2" },
  { name: { fr: "Banque & Assurance", en: "Banking & Insurance" }, icon: "Landmark" },
  { name: { fr: "Agro-industrie", en: "Agribusiness" }, icon: "Wheat" },
  { name: { fr: "Télécommunications", en: "Telecommunications" }, icon: "Radio" },
  { name: { fr: "Santé", en: "Healthcare" }, icon: "HeartPulse" },
  { name: { fr: "Éducation", en: "Education" }, icon: "GraduationCap" },
  { name: { fr: "Industrie", en: "Industry" }, icon: "Factory" },
  { name: { fr: "Commerce", en: "Trade" }, icon: "ShoppingBag" },
  { name: { fr: "Énergie", en: "Energy" }, icon: "Zap" },
  { name: { fr: "Logistique", en: "Logistics" }, icon: "Truck" },
] satisfies { name: Localized; icon: string }[];

export const references = [
  {
    slug: "integration-erp-agroalimentaire",
    client: { fr: "Groupe Agroalimentaire CI", en: "Ivorian Agri-food Group" },
    sector: { fr: "Agro-industrie", en: "Agribusiness" },
    expertise: { fr: "ERP", en: "ERP" },
    title: {
      fr: "Intégration Odoo Enterprise — Gestion comptable & stocks",
      en: "Odoo Enterprise Integration — Accounting & Inventory Management",
    },
    summary: {
      fr: "Déploiement d'Odoo Enterprise pour la gestion comptable OHADA, la gestion des stocks multi-entrepôts et la paie de 200 employés.",
      en: "Deployment of Odoo Enterprise for OHADA-compliant accounting, multi-warehouse inventory management, and payroll for 200 employees.",
    },
    result: { fr: "ROI atteint en 14 mois", en: "ROI achieved in 14 months" },
    technologies: ["Odoo Enterprise", "PostgreSQL", "Docker"] satisfies (string | Localized)[],
    year: "2024",
  },
  {
    slug: "plateforme-ia-banque",
    client: { fr: "Banque régionale UEMOA", en: "Regional bank in the UEMOA zone" },
    sector: { fr: "Banque & Assurance", en: "Banking & Insurance" },
    expertise: { fr: "Intelligence Artificielle", en: "Artificial Intelligence" },
    title: {
      fr: "Plateforme OCR & analyse documentaire",
      en: "OCR & Document Analysis Platform",
    },
    summary: {
      fr: "Développement d'une solution OCR intelligente pour l'analyse automatique des dossiers de crédit, réduisant le délai de traitement de 72h à 4h.",
      en: "Development of an intelligent OCR solution for automated credit file analysis, reducing processing time from 72 hours to 4 hours.",
    },
    result: { fr: "−94% de délai de traitement", en: "−94% processing time" },
    technologies: [
      "Python",
      "Tesseract OCR",
      { fr: "LLM privé", en: "Private LLM" },
      "FastAPI",
    ] satisfies (string | Localized)[],
    year: "2025",
  },
  {
    slug: "devsecops-telecom",
    client: { fr: "Opérateur Télécom Afrique de l'Ouest", en: "West African Telecom Operator" },
    sector: { fr: "Télécommunications", en: "Telecommunications" },
    expertise: { fr: "DevSecOps", en: "DevSecOps" },
    title: {
      fr: "Pipeline CI/CD & infrastructure cloud",
      en: "CI/CD Pipeline & Cloud Infrastructure",
    },
    summary: {
      fr: "Mise en place d'un pipeline CI/CD complet avec GitLab, Docker, Kubernetes sur AWS, avec intégration SonarQube et scans OWASP automatisés.",
      en: "Implementation of a complete CI/CD pipeline with GitLab, Docker, and Kubernetes on AWS, including SonarQube integration and automated OWASP scans.",
    },
    result: { fr: "Déploiements 10× plus rapides", en: "10× faster deployments" },
    technologies: ["GitLab CI/CD", "Kubernetes", "AWS", "SonarQube"] satisfies (string | Localized)[],
    year: "2025",
  },
];

export const stats = [
  { value: "50+", label: { fr: "Projets livrés", en: "Projects delivered" } },
  { value: "10+", label: { fr: "Années d'expertise", en: "Years of expertise" } },
  { value: "15+", label: { fr: "Secteurs couverts", en: "Sectors covered" } },
  { value: "8", label: { fr: "Pays UEMOA", en: "UEMOA countries" } },
] satisfies { value: string; label: Localized }[];

export const approach = [
  { step: 1, title: { fr: "Analyse des besoins", en: "Needs analysis" }, icon: "Search" },
  { step: 2, title: { fr: "Audit de l'existant", en: "Existing systems audit" }, icon: "ClipboardList" },
  { step: 3, title: { fr: "Conception solution", en: "Solution design" }, icon: "PenTool" },
  { step: 4, title: { fr: "Développement", en: "Development" }, icon: "Code2" },
  { step: 5, title: { fr: "Tests & Validation", en: "Testing & Validation" }, icon: "CheckCircle" },
  { step: 6, title: { fr: "Déploiement", en: "Deployment" }, icon: "Rocket" },
  { step: 7, title: { fr: "Formation", en: "Training" }, icon: "GraduationCap" },
  { step: 8, title: { fr: "Support continu", en: "Ongoing support" }, icon: "Headphones" },
] satisfies { step: number; title: Localized; icon: string }[];

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
    title: {
      fr: "Pourquoi Odoo s'impose comme le choix ERP de référence en Afrique de l'Ouest",
      en: "Why Odoo Is Becoming the Go-To ERP Choice in West Africa",
    },
    excerpt: {
      fr: "Flexibilité, coût total de possession, conformité OHADA — les raisons qui font d'Odoo l'ERP le plus adopté par les entreprises de la zone UEMOA.",
      en: "Flexibility, total cost of ownership, OHADA compliance — the reasons why Odoo has become the most widely adopted ERP among businesses in the UEMOA zone.",
    },
    category: { fr: "ERP", en: "ERP" },
    date: "2026-06-15",
    readTime: "8 min",
    tag: { fr: "ERP", en: "ERP" },
  },
  {
    slug: "ia-generative-entreprises-africaines",
    title: {
      fr: "IA Générative pour les entreprises africaines : opportunités et précautions",
      en: "Generative AI for African Businesses: Opportunities and Precautions",
    },
    excerpt: {
      fr: "GPT-4, Claude, Mistral — comment choisir et déployer un LLM privé sécurisé pour votre organisation sans exposer vos données métier.",
      en: "GPT-4, Claude, Mistral — how to choose and deploy a secure private LLM for your organization without exposing your business data.",
    },
    category: { fr: "Intelligence Artificielle", en: "Artificial Intelligence" },
    date: "2026-06-05",
    readTime: "12 min",
    tag: { fr: "IA", en: "AI" },
  },
  {
    slug: "cicd-gitlab-guide-pratique",
    title: {
      fr: "CI/CD avec GitLab CI : guide pratique pour les équipes DevOps en 2026",
      en: "CI/CD with GitLab CI: A Practical Guide for DevOps Teams in 2026",
    },
    excerpt: {
      fr: "Pipeline complet, tests automatisés, déploiement continu sur Kubernetes — un guide pas à pas pour industrialiser vos livraisons logicielles.",
      en: "Full pipeline, automated testing, continuous deployment on Kubernetes — a step-by-step guide to industrializing your software delivery.",
    },
    category: { fr: "DevSecOps", en: "DevSecOps" },
    date: "2026-05-20",
    readTime: "15 min",
    tag: { fr: "DevSecOps", en: "DevSecOps" },
  },
];
