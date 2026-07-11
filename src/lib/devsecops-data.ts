// Contenu source : content/marketing/drafts/2026-07-11_devsecops-page-content-v2.md
// Replis appliqués (cf. tableau "Prérequis de publication" du draft) :
// - SLA TMA affichés comme engagements contractuels (statut exact dans les
//   procédures internes), pas comme résultats historiques ;
// - catégorie Supervision omise de la stack tant que non confirmée ;
// - formulation réglementaire générique (pas de citation nominative BCEAO/CIMA
//   avant validation juridique) ;
// - sections Cas client et Équipe exclues tant que le contenu réel n'est pas validé.

export const dsPhases = [
  {
    phase: "1. Audit de maturité",
    content:
      "État des lieux de l'infrastructure, des processus de livraison et des pratiques de sécurité.",
    livrable: "Diagnostic DevSecOps et plan d'industrialisation priorisé",
  },
  {
    phase: "2. Fondations de livraison continue",
    content:
      "Automatisation des tests et des déploiements sur un périmètre pilote.",
    livrable: "Pipelines opérationnels — erreurs détectées en minutes",
  },
  {
    phase: "3. Conteneurisation & infrastructure en code",
    content:
      "Environnements empaquetés et infrastructure versionnée, reconstruisible à l'identique.",
    livrable: "Environnements DEV/QA/PROD reproductibles et alignés",
  },
  {
    phase: "4. Sécurité intégrée",
    content:
      "Analyses de vulnérabilités et de qualité de code automatisées, gestion des secrets, durcissement.",
    livrable: "Contrôles de sécurité exécutés à chaque livraison",
  },
  {
    phase: "5. Supervision & maintien en condition",
    content:
      "Métriques, alertes, journalisation centralisée, transfert de compétences.",
    livrable: "Tableau de bord d'exploitation, équipes autonomes",
  },
];

export const dsDomains = [
  {
    title: "Intégration & livraison continues",
    icon: "GitBranch",
    desc: "Détectez les erreurs en minutes, pas en production : tests automatisés à chaque modification, livraisons en heures plutôt qu'en semaines.",
    tools: "GitLab CI/CD, GitHub Actions",
  },
  {
    title: "Conteneurisation & orchestration",
    icon: "Boxes",
    desc: "Des environnements identiques du développement à la production : déploiements reproductibles, services isolés, montée en charge maîtrisée.",
    tools: "Docker, Kubernetes",
  },
  {
    title: "Infrastructure en code",
    icon: "FileCode2",
    desc: "Votre infrastructure décrite dans des fichiers versionnés : reproductible, auditable, déployable en minutes.",
    tools: "Terraform, Ansible",
  },
  {
    title: "Analyse de sécurité automatisée",
    icon: "ShieldCheck",
    desc: "Vulnérabilités et dette technique détectées à chaque livraison — avant d'atteindre vos utilisateurs.",
    tools: "OWASP, SonarQube",
  },
  {
    title: "Supervision & observabilité",
    icon: "Activity",
    desc: "Sachez ce qui se passe avant vos utilisateurs : métriques, alertes et journaux centralisés.",
    tools: "",
  },
];

export const dsStack = [
  { category: "CI/CD", items: ["GitLab CI/CD", "GitHub Actions"] },
  { category: "Conteneurs & orchestration", items: ["Docker", "Kubernetes"] },
  { category: "Infrastructure as Code", items: ["Terraform", "Ansible"] },
  { category: "Sécurité & qualité", items: ["OWASP", "SonarQube"] },
  { category: "Cloud", items: ["AWS", "Google Cloud", "Azure", "OVH", "On-premise Linux"] },
];

export const dsServices = [
  {
    title: "Formation & transfert de compétences",
    desc: "Vos équipes opèrent les pipelines et l'infrastructure en autonomie ; le prestataire ne doit pas devenir une dépendance.",
  },
  {
    title: "Migration vers le cloud",
    desc: "Une trajectoire raisonnée vers le cloud ou l'hybride, selon vos contraintes de coûts, de connectivité et de souveraineté.",
  },
  {
    title: "Régie & TMA applicative",
    desc: "Renfort d'experts au sein de vos équipes, ou maintenance de vos plateformes avec des engagements contractuels : incidents critiques (P1) résolus à 100% dans les délais, incidents majeurs (P2) à 95% et plus.",
  },
  {
    title: "Intégration à l'existant",
    desc: "Vos pipelines s'intègrent aux outils en place — dépôts de code, Odoo ERP, applications métier — sans big bang.",
  },
];

export const dsSecuritePillars = [
  {
    title: "Environnements cloisonnés",
    desc: "DEV, QA/staging et PROD séparés, accès production restreint, revues de code obligatoires avant fusion — les standards que nous appliquons à nos propres projets.",
  },
  {
    title: "Secrets & accès",
    desc: "Gestion centralisée des secrets, principe du moindre privilège, journalisation des accès aux environnements sensibles.",
  },
  {
    title: "Souveraineté & hébergement",
    desc: "Cloud public, privé ou on-premise : un choix raisonné selon la sensibilité des données et les exigences de vos tutelles.",
  },
];

export const dsApproach = [
  {
    title: "Commencer petit, prouver vite",
    desc: "Un périmètre pilote qui livre en continu vaut mieux qu'un chantier de deux ans : la valeur se démontre en semaines.",
  },
  {
    title: "La sécurité dès la conception",
    desc: "Les contrôles vivent dans la chaîne de livraison, pas dans un audit annuel : chaque modification est testée, analysée, tracée.",
  },
  {
    title: "Réalisme UEMOA",
    desc: "Connectivité variable, coûts cloud en devises, équipes restreintes : nos architectures fonctionnent dans votre contexte, pas seulement en démonstration.",
  },
  {
    title: "Transfert de compétences",
    desc: "Vos équipes opèrent la plateforme en autonomie après notre accompagnement.",
  },
];

export const dsSectorUseCases = [
  {
    sector: "Finance & Institutions",
    icon: "Landmark",
    useCases: "Pipelines audités, séparation stricte des environnements, traçabilité des déploiements exigée par les régulateurs",
  },
  {
    sector: "Commerce & Distribution",
    icon: "ShoppingBag",
    useCases: "Haute disponibilité des plateformes de vente, montée en charge saisonnière, déploiements sans interruption de service",
  },
  {
    sector: "Télécoms & Utilities",
    icon: "Radio",
    useCases: "Observabilité des services critiques, alerting proactif, automatisation des opérations récurrentes",
  },
  {
    sector: "Secteur public",
    icon: "Building2",
    useCases: "Hébergement souverain, environnements reproductibles, transfert de compétences aux équipes internes",
  },
  {
    sector: "Industrie",
    icon: "Factory",
    useCases: "Intégration continue des applications métier, supervision des systèmes de production",
  },
  {
    sector: "Santé",
    icon: "HeartPulse",
    useCases: "Cloisonnement des données sensibles, contrôle des accès, journalisation à valeur probante",
  },
];

export const dsWhyUs = [
  {
    title: "Expertise terrain africaine",
    desc: "Connectivité variable, coûts cloud en devises, équipes IT restreintes : nos plateformes sont conçues pour ce contexte, pas malgré lui.",
  },
  {
    title: "Vision de bout en bout",
    desc: "Du diagnostic de maturité à l'exploitation quotidienne, un seul interlocuteur responsable sur toute la chaîne.",
  },
  {
    title: "Équipe expérimentée",
    desc: "11+ ans d'expérience en systèmes d'information en Afrique, en Europe et au Moyen-Orient.",
  },
  {
    title: "Nous appliquons ce que nous vendons",
    desc: "Git, revues de code, environnements séparés, pipelines automatisés : les standards que nous déployons chez nos clients sont ceux de nos propres projets.",
  },
  {
    title: "Présence locale, vision régionale",
    desc: "Basés à Abidjan, actifs sur toute la zone UEMOA/CEDEAO.",
  },
];

// Deux engagements SLA de la practice (procédures TMA internes) + trois
// chiffres d'entreprise déjà validés.
export const dsKpis = [
  { value: "100%", label: "des incidents critiques (P1) dans les délais — engagement SLA" },
  { value: "95%", label: "des incidents majeurs (P2) dans les délais, au minimum — engagement SLA" },
  { value: "11+", label: "ans d'expérience" },
  { value: "6", label: "pays d'intervention (UEMOA/CEDEAO)" },
  { value: "100%", label: "des projets avec transfert de compétences" },
];

export const dsResources = [
  { title: "CI/CD : par où commencer quand on déploie encore à la main ?", type: "Guide", desc: "Le chemin réaliste vers la livraison continue." },
  { title: "Les questions à se poser avant de migrer vers Kubernetes", type: "Checklist", desc: "Évaluer si l'orchestration est le bon choix." },
  { title: "Sécuriser sa chaîne de livraison : les contrôles essentiels", type: "Guide", desc: "Les contrôles qui comptent, sans usine à gaz." },
  { title: "Infrastructure as Code en pratique", type: "Webinar", desc: "Démonstration en conditions réelles." },
];

// Reprises verbatim de src/app/faq/page.tsx (catégorie "DevSecOps").
export const dsFaqs = [
  {
    question: "Qu'est-ce que le DevSecOps ?",
    answer:
      "Le DevSecOps intègre la sécurité à chaque étape du cycle de développement logiciel : conception, code, tests, déploiement, production. Contrairement à l'approche traditionnelle où la sécurité intervient en fin de projet, le DevSecOps détecte les vulnérabilités tôt, réduit les coûts de correction et renforce la confiance des clients et partenaires.",
  },
  {
    question: "Pourquoi conteneuriser mes applications avec Docker ?",
    answer:
      "Docker encapsule une application avec toutes ses dépendances dans un conteneur portable. Résultat : environnements identiques du développement à la production, déploiements reproductibles, isolation des services et montée en charge facilitée. Associé à Kubernetes, il permet de gérer des dizaines de services de façon automatisée, avec 10× moins de temps de déploiement.",
  },
  {
    question: "Qu'est-ce que l'Infrastructure as Code (IaC) ?",
    answer:
      "L'IaC consiste à décrire et provisionner votre infrastructure (serveurs, réseaux, bases de données) via des fichiers de code versionné (Terraform, Ansible). Vos environnements deviennent reproductibles, auditables et déployables en minutes. DEV, QA et PROD sont toujours alignés, éliminant les bugs liés aux différences de configuration.",
  },
  {
    question: "Quelle est la différence entre CI et CD ?",
    answer:
      "La CI (Intégration Continue) automatise tests et compilation à chaque commit de code : les erreurs sont détectées en moins de 10 minutes. La CD (Déploiement Continu) pousse automatiquement le code validé vers les environnements cibles. Ensemble, CI/CD réduisent les délais de livraison de semaines à heures tout en maintenant la qualité.",
  },
];
