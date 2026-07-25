import type { Localized } from "@/lib/i18n-content";

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
    phase: { fr: "1. Audit de maturité", en: "1. Maturity Audit" },
    content: {
      fr: "État des lieux de l'infrastructure, des processus de livraison et des pratiques de sécurité.",
      en: "Assessment of your infrastructure, delivery processes, and security practices.",
    },
    livrable: {
      fr: "Diagnostic DevSecOps et plan d'industrialisation priorisé",
      en: "DevSecOps diagnostic and prioritized industrialization plan",
    },
  },
  {
    phase: { fr: "2. Fondations de livraison continue", en: "2. Continuous Delivery Foundations" },
    content: {
      fr: "Automatisation des tests et des déploiements sur un périmètre pilote.",
      en: "Automation of testing and deployments on a pilot scope.",
    },
    livrable: {
      fr: "Pipelines opérationnels — erreurs détectées en minutes",
      en: "Operational pipelines — errors detected in minutes",
    },
  },
  {
    phase: { fr: "3. Conteneurisation & infrastructure en code", en: "3. Containerization & Infrastructure as Code" },
    content: {
      fr: "Environnements empaquetés et infrastructure versionnée, reconstruisible à l'identique.",
      en: "Packaged environments and versioned infrastructure, rebuildable identically.",
    },
    livrable: {
      fr: "Environnements DEV/QA/PROD reproductibles et alignés",
      en: "Reproducible, aligned DEV/QA/PROD environments",
    },
  },
  {
    phase: { fr: "4. Sécurité intégrée", en: "4. Integrated Security" },
    content: {
      fr: "Analyses de vulnérabilités et de qualité de code automatisées, gestion des secrets, durcissement.",
      en: "Automated vulnerability and code quality analysis, secrets management, hardening.",
    },
    livrable: {
      fr: "Contrôles de sécurité exécutés à chaque livraison",
      en: "Security controls run on every release",
    },
  },
  {
    phase: { fr: "5. Supervision & maintien en condition", en: "5. Monitoring & Operational Maintenance" },
    content: {
      fr: "Métriques, alertes, journalisation centralisée, transfert de compétences.",
      en: "Metrics, alerts, centralized logging, knowledge transfer.",
    },
    livrable: {
      fr: "Tableau de bord d'exploitation, équipes autonomes",
      en: "Operations dashboard, autonomous teams",
    },
  },
] satisfies { phase: Localized; content: Localized; livrable: Localized }[];

export const dsDomains = [
  {
    title: { fr: "Intégration & livraison continues", en: "Continuous Integration & Delivery" },
    icon: "GitBranch",
    desc: {
      fr: "Détectez les erreurs en minutes, pas en production : tests automatisés à chaque modification, livraisons en heures plutôt qu'en semaines.",
      en: "Catch errors in minutes, not in production: automated tests on every change, releases in hours rather than weeks.",
    },
    tools: { fr: "GitLab CI/CD, GitHub Actions", en: "GitLab CI/CD, GitHub Actions" },
  },
  {
    title: { fr: "Conteneurisation & orchestration", en: "Containerization & Orchestration" },
    icon: "Boxes",
    desc: {
      fr: "Des environnements identiques du développement à la production : déploiements reproductibles, services isolés, montée en charge maîtrisée.",
      en: "Identical environments from development to production: reproducible deployments, isolated services, controlled scaling.",
    },
    tools: { fr: "Docker, Kubernetes", en: "Docker, Kubernetes" },
  },
  {
    title: { fr: "Infrastructure en code", en: "Infrastructure as Code" },
    icon: "FileCode2",
    desc: {
      fr: "Votre infrastructure décrite dans des fichiers versionnés : reproductible, auditable, déployable en minutes.",
      en: "Your infrastructure described in versioned files: reproducible, auditable, deployable in minutes.",
    },
    tools: { fr: "Terraform, Ansible", en: "Terraform, Ansible" },
  },
  {
    title: { fr: "Analyse de sécurité automatisée", en: "Automated Security Analysis" },
    icon: "ShieldCheck",
    desc: {
      fr: "Vulnérabilités et dette technique détectées à chaque livraison — avant d'atteindre vos utilisateurs.",
      en: "Vulnerabilities and technical debt caught on every release — before they reach your users.",
    },
    tools: { fr: "OWASP, SonarQube", en: "OWASP, SonarQube" },
  },
  {
    title: { fr: "Supervision & observabilité", en: "Monitoring & Observability" },
    icon: "Activity",
    desc: {
      fr: "Sachez ce qui se passe avant vos utilisateurs : métriques, alertes et journaux centralisés.",
      en: "Know what's happening before your users do: metrics, alerts, and centralized logs.",
    },
    tools: { fr: "", en: "" },
  },
] satisfies { title: Localized; icon: string; desc: Localized; tools: Localized }[];

export const dsStack = [
  {
    category: { fr: "CI/CD", en: "CI/CD" },
    items: ["GitLab CI/CD", "GitHub Actions"],
  },
  {
    category: { fr: "Conteneurs & orchestration", en: "Containers & Orchestration" },
    items: ["Docker", "Kubernetes"],
  },
  {
    category: { fr: "Infrastructure as Code", en: "Infrastructure as Code" },
    items: ["Terraform", "Ansible"],
  },
  {
    category: { fr: "Sécurité & qualité", en: "Security & Quality" },
    items: ["OWASP", "SonarQube"],
  },
  {
    category: { fr: "Cloud", en: "Cloud" },
    items: ["AWS", "Google Cloud", "Azure", "OVH", "On-premise Linux"],
  },
] satisfies { category: Localized; items: string[] }[];

export const dsServices = [
  {
    title: { fr: "Formation & transfert de compétences", en: "Training & Knowledge Transfer" },
    desc: {
      fr: "Vos équipes opèrent les pipelines et l'infrastructure en autonomie ; le prestataire ne doit pas devenir une dépendance.",
      en: "Your teams operate the pipelines and infrastructure independently; the provider should never become a dependency.",
    },
  },
  {
    title: { fr: "Migration vers le cloud", en: "Cloud Migration" },
    desc: {
      fr: "Une trajectoire raisonnée vers le cloud ou l'hybride, selon vos contraintes de coûts, de connectivité et de souveraineté.",
      en: "A carefully planned path to the cloud or a hybrid setup, based on your cost, connectivity, and sovereignty constraints.",
    },
  },
  {
    title: { fr: "Régie & TMA applicative", en: "Staff Augmentation & TMA (Application Maintenance)" },
    desc: {
      fr: "Renfort d'experts au sein de vos équipes, ou maintenance de vos plateformes avec des engagements contractuels : incidents critiques (P1) résolus à 100% dans les délais, incidents majeurs (P2) à 95% et plus.",
      en: "Expert reinforcement within your teams, or platform maintenance under contractual commitments: critical incidents (P1) resolved on time 100% of the time, major incidents (P2) 95% or more.",
    },
  },
  {
    title: { fr: "Intégration à l'existant", en: "Integration with Existing Systems" },
    desc: {
      fr: "Vos pipelines s'intègrent aux outils en place — dépôts de code, Odoo ERP, applications métier — sans big bang.",
      en: "Your pipelines integrate with your existing tools — code repositories, Odoo ERP, business applications — with no big-bang rollout.",
    },
  },
] satisfies { title: Localized; desc: Localized }[];

export const dsSecuritePillars = [
  {
    title: { fr: "Environnements cloisonnés", en: "Segregated Environments" },
    desc: {
      fr: "DEV, QA/staging et PROD séparés, accès production restreint, revues de code obligatoires avant fusion — les standards que nous appliquons à nos propres projets.",
      en: "Separate DEV, QA/staging, and PROD environments, restricted production access, mandatory code reviews before merging — the standards we apply to our own projects.",
    },
  },
  {
    title: { fr: "Secrets & accès", en: "Secrets & Access" },
    desc: {
      fr: "Gestion centralisée des secrets, principe du moindre privilège, journalisation des accès aux environnements sensibles.",
      en: "Centralized secrets management, least-privilege principle, logging of access to sensitive environments.",
    },
  },
  {
    title: { fr: "Souveraineté & hébergement", en: "Sovereignty & Hosting" },
    desc: {
      fr: "Cloud public, privé ou on-premise : un choix raisonné selon la sensibilité des données et les exigences de vos tutelles.",
      en: "Public cloud, private cloud, or on-premise: a deliberate choice based on data sensitivity and your oversight bodies' requirements.",
    },
  },
] satisfies { title: Localized; desc: Localized }[];

export const dsApproach = [
  {
    title: { fr: "Commencer petit, prouver vite", en: "Start Small, Prove Fast" },
    desc: {
      fr: "Un périmètre pilote qui livre en continu vaut mieux qu'un chantier de deux ans : la valeur se démontre en semaines.",
      en: "A pilot scope that delivers continuously beats a two-year overhaul: value is demonstrated in weeks.",
    },
  },
  {
    title: { fr: "La sécurité dès la conception", en: "Security by Design" },
    desc: {
      fr: "Les contrôles vivent dans la chaîne de livraison, pas dans un audit annuel : chaque modification est testée, analysée, tracée.",
      en: "Controls live in the CI/CD pipeline, not in an annual audit: every change is tested, analyzed, and tracked.",
    },
  },
  {
    title: { fr: "Réalisme UEMOA", en: "UEMOA Realism" },
    desc: {
      fr: "Connectivité variable, coûts cloud en devises, équipes restreintes : nos architectures fonctionnent dans votre contexte, pas seulement en démonstration.",
      en: "Variable connectivity, cloud costs in foreign currency, small teams: our architectures work in your context, not just in demos.",
    },
  },
  {
    title: { fr: "Transfert de compétences", en: "Knowledge Transfer" },
    desc: {
      fr: "Vos équipes opèrent la plateforme en autonomie après notre accompagnement.",
      en: "Your teams operate the platform independently once our engagement ends.",
    },
  },
] satisfies { title: Localized; desc: Localized }[];

export const dsSectorUseCases = [
  {
    sector: { fr: "Finance & Institutions", en: "Finance & Institutions" },
    icon: "Landmark",
    useCases: {
      fr: "Pipelines audités, séparation stricte des environnements, traçabilité des déploiements exigée par les régulateurs",
      en: "Audited pipelines, strict environment separation, deployment traceability required by regulators",
    },
  },
  {
    sector: { fr: "Commerce & Distribution", en: "Trade & Distribution" },
    icon: "ShoppingBag",
    useCases: {
      fr: "Haute disponibilité des plateformes de vente, montée en charge saisonnière, déploiements sans interruption de service",
      en: "High availability for sales platforms, seasonal scaling, zero-downtime deployments",
    },
  },
  {
    sector: { fr: "Télécoms & Utilities", en: "Telecoms & Utilities" },
    icon: "Radio",
    useCases: {
      fr: "Observabilité des services critiques, alerting proactif, automatisation des opérations récurrentes",
      en: "Observability for critical services, proactive alerting, automation of recurring operations",
    },
  },
  {
    sector: { fr: "Secteur public", en: "Public Sector" },
    icon: "Building2",
    useCases: {
      fr: "Hébergement souverain, environnements reproductibles, transfert de compétences aux équipes internes",
      en: "Sovereign hosting, reproducible environments, knowledge transfer to internal teams",
    },
  },
  {
    sector: { fr: "Industrie", en: "Industry" },
    icon: "Factory",
    useCases: {
      fr: "Intégration continue des applications métier, supervision des systèmes de production",
      en: "Continuous integration of business applications, monitoring of production systems",
    },
  },
  {
    sector: { fr: "Santé", en: "Healthcare" },
    icon: "HeartPulse",
    useCases: {
      fr: "Cloisonnement des données sensibles, contrôle des accès, journalisation à valeur probante",
      en: "Segregation of sensitive data, access control, evidentiary-grade logging",
    },
  },
] satisfies { sector: Localized; icon: string; useCases: Localized }[];

export const dsWhyUs = [
  {
    title: { fr: "Expertise terrain africaine", en: "On-the-Ground African Expertise" },
    desc: {
      fr: "Connectivité variable, coûts cloud en devises, équipes IT restreintes : nos plateformes sont conçues pour ce contexte, pas malgré lui.",
      en: "Variable connectivity, cloud costs in foreign currency, small IT teams: our platforms are designed for this context, not despite it.",
    },
  },
  {
    title: { fr: "Vision de bout en bout", en: "End-to-End Vision" },
    desc: {
      fr: "Du diagnostic de maturité à l'exploitation quotidienne, un seul interlocuteur responsable sur toute la chaîne.",
      en: "From the maturity audit to day-to-day operations, a single point of accountability across the whole chain.",
    },
  },
  {
    title: { fr: "Équipe expérimentée", en: "Experienced Team" },
    desc: {
      fr: "11+ ans d'expérience en systèmes d'information en Afrique, en Europe et au Moyen-Orient.",
      en: "11+ years of experience in information systems across Africa, Europe, and the Middle East.",
    },
  },
  {
    title: { fr: "Nous appliquons ce que nous vendons", en: "We Practice What We Sell" },
    desc: {
      fr: "Git, revues de code, environnements séparés, pipelines automatisés : les standards que nous déployons chez nos clients sont ceux de nos propres projets.",
      en: "Git, code reviews, separate environments, automated pipelines: the standards we deploy for our clients are the ones we apply to our own projects.",
    },
  },
  {
    title: { fr: "Présence locale, vision régionale", en: "Local Presence, Regional Vision" },
    desc: {
      fr: "Basés à Abidjan, actifs sur toute la zone UEMOA/CEDEAO.",
      en: "Based in Abidjan, active across the entire UEMOA/ECOWAS zone.",
    },
  },
] satisfies { title: Localized; desc: Localized }[];

// Deux engagements SLA de la practice (procédures TMA internes) + trois
// chiffres d'entreprise déjà validés.
export const dsKpis = [
  {
    value: "100%",
    label: {
      fr: "des incidents critiques (P1) dans les délais — engagement SLA",
      en: "of critical incidents (P1) resolved on time — SLA commitment",
    },
  },
  {
    value: "95%",
    label: {
      fr: "des incidents majeurs (P2) dans les délais, au minimum — engagement SLA",
      en: "of major incidents (P2) resolved on time, at minimum — SLA commitment",
    },
  },
  { value: "11+", label: { fr: "ans d'expérience", en: "years of experience" } },
  { value: "6", label: { fr: "pays d'intervention (UEMOA/CEDEAO)", en: "countries served (UEMOA/ECOWAS)" } },
  {
    value: "100%",
    label: { fr: "des projets avec transfert de compétences", en: "of projects include knowledge transfer" },
  },
] satisfies { value: string; label: Localized }[];

export const dsResources = [
  {
    title: {
      fr: "CI/CD : par où commencer quand on déploie encore à la main ?",
      en: "CI/CD: where to start when you're still deploying by hand?",
    },
    type: { fr: "Guide", en: "Guide" },
    desc: { fr: "Le chemin réaliste vers la livraison continue.", en: "A realistic path to continuous delivery." },
  },
  {
    title: {
      fr: "Les questions à se poser avant de migrer vers Kubernetes",
      en: "Questions to ask before migrating to Kubernetes",
    },
    type: { fr: "Checklist", en: "Checklist" },
    desc: { fr: "Évaluer si l'orchestration est le bon choix.", en: "Assess whether orchestration is the right choice." },
  },
  {
    title: {
      fr: "Sécuriser sa chaîne de livraison : les contrôles essentiels",
      en: "Securing your CI/CD pipeline: the essential controls",
    },
    type: { fr: "Guide", en: "Guide" },
    desc: { fr: "Les contrôles qui comptent, sans usine à gaz.", en: "The controls that matter, without over-engineering." },
  },
  {
    title: { fr: "Infrastructure as Code en pratique", en: "Infrastructure as Code in practice" },
    type: { fr: "Webinar", en: "Webinar" },
    desc: { fr: "Démonstration en conditions réelles.", en: "A real-world demonstration." },
  },
] satisfies { title: Localized; type: Localized; desc: Localized }[];

// Reprises verbatim de src/app/faq/page.tsx (catégorie "DevSecOps").
export const dsFaqs = [
  {
    question: { fr: "Qu'est-ce que le DevSecOps ?", en: "What is DevSecOps?" },
    answer: {
      fr: "Le DevSecOps intègre la sécurité à chaque étape du cycle de développement logiciel : conception, code, tests, déploiement, production. Contrairement à l'approche traditionnelle où la sécurité intervient en fin de projet, le DevSecOps détecte les vulnérabilités tôt, réduit les coûts de correction et renforce la confiance des clients et partenaires.",
      en: "DevSecOps integrates security into every stage of the software development lifecycle: design, code, testing, deployment, production. Unlike the traditional approach where security is addressed at the end of a project, DevSecOps catches vulnerabilities early, reduces remediation costs, and strengthens the trust of clients and partners.",
    },
  },
  {
    question: { fr: "Pourquoi conteneuriser mes applications avec Docker ?", en: "Why containerize my applications with Docker?" },
    answer: {
      fr: "Docker encapsule une application avec toutes ses dépendances dans un conteneur portable. Résultat : environnements identiques du développement à la production, déploiements reproductibles, isolation des services et montée en charge facilitée. Associé à Kubernetes, il permet de gérer des dizaines de services de façon automatisée, avec 10× moins de temps de déploiement.",
      en: "Docker packages an application with all its dependencies into a portable container. The result: identical environments from development to production, reproducible deployments, service isolation, and easier scaling. Paired with Kubernetes, it lets you manage dozens of services in an automated way, with 10× less deployment time.",
    },
  },
  {
    question: { fr: "Qu'est-ce que l'Infrastructure as Code (IaC) ?", en: "What is Infrastructure as Code (IaC)?" },
    answer: {
      fr: "L'IaC consiste à décrire et provisionner votre infrastructure (serveurs, réseaux, bases de données) via des fichiers de code versionné (Terraform, Ansible). Vos environnements deviennent reproductibles, auditables et déployables en minutes. DEV, QA et PROD sont toujours alignés, éliminant les bugs liés aux différences de configuration.",
      en: "IaC means describing and provisioning your infrastructure (servers, networks, databases) through versioned code files (Terraform, Ansible). Your environments become reproducible, auditable, and deployable in minutes. DEV, QA, and PROD stay aligned, eliminating bugs caused by configuration drift.",
    },
  },
  {
    question: { fr: "Quelle est la différence entre CI et CD ?", en: "What's the difference between CI and CD?" },
    answer: {
      fr: "La CI (Intégration Continue) automatise tests et compilation à chaque commit de code : les erreurs sont détectées en moins de 10 minutes. La CD (Déploiement Continu) pousse automatiquement le code validé vers les environnements cibles. Ensemble, CI/CD réduisent les délais de livraison de semaines à heures tout en maintenant la qualité.",
      en: "CI (Continuous Integration) automates testing and builds on every code commit: errors are caught in under 10 minutes. CD (Continuous Deployment) automatically pushes validated code to target environments. Together, CI/CD cuts delivery times from weeks to hours while maintaining quality.",
    },
  },
] satisfies { question: Localized; answer: Localized }[];
