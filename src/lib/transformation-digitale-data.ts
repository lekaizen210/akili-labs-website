// Contenu source : content/marketing/drafts/2026-07-11_transformation-digitale-page-content-v2.md
// Règle de publication : les sections Cas client et Équipe sont exclues tant que
// le contenu réel (résultats validés, portraits, accords) n'est pas fourni.

export const tdPhases = [
  {
    phase: "1. Audit de l'existant",
    content:
      "Cartographie des processus, des systèmes et des flux d'information ; identification des points de friction et des gains rapides.",
    livrable: "Diagnostic SI et cartographie des processus",
  },
  {
    phase: "2. Schéma Directeur Informatique",
    content:
      "Priorisation des chantiers par impact métier, faisabilité et contrainte budgétaire ; trajectoire pluriannuelle chiffrée.",
    livrable: "SDI validé et feuille de route pluriannuelle",
  },
  {
    phase: "3. Urbanisation & choix des outils",
    content:
      "Architecture cible interopérable ; sélection outillée des solutions (GED, BPM, ERP…) sur critères objectifs.",
    livrable: "Architecture SI cible et dossier de choix documenté",
  },
  {
    phase: "4. Déploiement",
    content:
      "Mise en œuvre des chantiers prioritaires : dématérialisation, automatisation, intégrations.",
    livrable: "Solutions déployées, testées et recettées",
  },
  {
    phase: "5. Pilotage & adoption",
    content:
      "Conduite du changement, formation, suivi d'indicateurs d'usage et d'impact.",
    livrable: "Tableau de bord de pilotage, équipes autonomes",
  },
];

export const tdDomains = [
  {
    title: "Audit des systèmes d'information",
    icon: "SearchCheck",
    desc: "Sachez exactement où vous en êtes : forces, risques et gains rapides de votre SI, noir sur blanc.",
  },
  {
    title: "Schéma Directeur Informatique",
    icon: "Map",
    desc: "Investissez dans le bon ordre : une trajectoire SI priorisée par impact métier, pas par effet de mode.",
  },
  {
    title: "Urbanisation du SI",
    icon: "Network",
    desc: "Mettez fin aux silos : des applications qui communiquent, une architecture qui absorbe la croissance.",
  },
  {
    title: "Dématérialisation",
    icon: "ScanLine",
    desc: "Libérez-vous du papier : des circuits de traitement raccourcis et des documents retrouvés en secondes, pas en jours.",
  },
  {
    title: "Gestion Électronique des Documents (GED)",
    icon: "FolderLock",
    desc: "Sécurisez votre patrimoine documentaire : classement, indexation, contrôle d'accès et conformité aux obligations légales de conservation.",
  },
  {
    title: "Business Process Management (BPM)",
    icon: "Workflow",
    desc: "Automatisez vos circuits de validation : approbations, notifications et escalades tracées de bout en bout.",
  },
  {
    title: "Gouvernance SI",
    icon: "ShieldCheck",
    desc: "Gardez la maîtrise : pilotage, sécurité et conformité de votre système d'information dans la durée.",
  },
];

export const tdServices = [
  {
    title: "Conduite du changement",
    desc: "Vos équipes n'adhèrent pas par décret. Communication, ateliers utilisateurs et plan d'adoption transforment la résistance en appropriation.",
  },
  {
    title: "Formation",
    desc: "Vos équipes internes deviennent autonomes sur les nouveaux processus et outils — le prestataire ne doit pas devenir une dépendance.",
  },
  {
    title: "Pilotage par indicateurs",
    desc: "Vous savez à tout moment ce que la transformation produit : avancement des chantiers, usage réel des outils, impacts mesurés.",
  },
  {
    title: "Intégration à l'existant",
    desc: "Vos nouveaux outils (GED, BPM) dialoguent avec les systèmes en place — notamment Odoo ERP lorsque l'organisation en est équipée — au lieu d'ajouter un silo de plus.",
  },
];

export const tdGouvernancePillars = [
  {
    title: "Conformité réglementaire",
    desc: "Obligations de conservation, exigences OHADA, réglementations nationales de protection des données personnelles : intégrées au cadrage, pas rattrapées après coup.",
  },
  {
    title: "Souveraineté et hébergement",
    desc: "Choix d'hébergement raisonné — local, régional ou cloud — selon la sensibilité des données et les exigences de vos tutelles.",
  },
  {
    title: "Sécurité et traçabilité",
    desc: "Contrôle d'accès, journalisation, archivage à valeur probante : votre patrimoine documentaire résiste à un audit.",
  },
];

export const tdApproach = [
  {
    title: "Diagnostic avant solution",
    desc: "Aucun outil n'est recommandé avant d'avoir compris les processus réels et les contraintes métier.",
  },
  {
    title: "Priorisation par impact",
    desc: "Chaque chantier est classé selon sa valeur métier et sa faisabilité, pas selon les effets de mode technologiques.",
  },
  {
    title: "Réalisme UEMOA",
    desc: "Connectivité variable, budgets en XAF, cadre OHADA : la feuille de route est exécutable dans votre contexte, pas théorique.",
  },
  {
    title: "Transfert de compétences",
    desc: "Vos équipes pilotent la transformation de manière autonome après notre accompagnement.",
  },
];

export const tdSectorUseCases = [
  {
    sector: "Commerce & Distribution",
    icon: "ShoppingBag",
    useCases: "Dématérialisation des bons de commande, GED contrats fournisseurs, automatisation du cycle de facturation",
  },
  {
    sector: "BTP & Immobilier",
    icon: "HardHat",
    useCases: "GED dossiers de chantier et permis, BPM circuits de validation d'avenants",
  },
  {
    sector: "Finance & Institutions",
    icon: "Landmark",
    useCases: "Gouvernance SI et conformité, dématérialisation des dossiers clients, archivage légal sécurisé",
  },
  {
    sector: "Santé",
    icon: "HeartPulse",
    useCases: "Dématérialisation des dossiers patients, traçabilité des accès documentaires",
  },
  {
    sector: "Secteur public",
    icon: "Building2",
    useCases: "Schéma Directeur Informatique, urbanisation du SI, dématérialisation des procédures administratives",
  },
  {
    sector: "Industrie",
    icon: "Factory",
    useCases: "BPM processus qualité et maintenance, intégration SI production/gestion",
  },
];

export const tdWhyUs = [
  {
    title: "Expertise terrain africaine",
    desc: "OHADA, contraintes budgétaires locales, connectivité variable : nos feuilles de route sont conçues pour ce contexte, pas malgré lui.",
  },
  {
    title: "Vision de bout en bout",
    desc: "De l'audit initial au pilotage post-déploiement, un seul interlocuteur responsable sur toute la chaîne.",
  },
  {
    title: "Équipe expérimentée",
    desc: "11+ ans d'expérience en systèmes d'information en Afrique, en Europe et au Moyen-Orient.",
  },
  {
    title: "Indépendance de conseil",
    desc: "Le diagnostic précède toujours l'outil ; nous ne vendons pas une licence, nous construisons votre trajectoire.",
  },
  {
    title: "Présence locale, vision régionale",
    desc: "Basés à Abidjan, actifs sur toute la zone UEMOA/CEDEAO.",
  },
];

// Repli documenté : chiffres d'entreprise déjà validés, en attendant
// la consolidation des chiffres propres à la practice.
export const tdKpis = [
  { value: "11+", label: "ans d'expérience" },
  { value: "50+", label: "projets livrés" },
  { value: "8", label: "secteurs d'activité couverts" },
  { value: "6", label: "pays d'intervention (UEMOA/CEDEAO)" },
  { value: "100%", label: "des projets avec transfert de compétences" },
];

export const tdResources = [
  { title: "Schéma Directeur Informatique : par où commencer ?", type: "Guide", desc: "Cadrer sa trajectoire SI avant d'investir." },
  { title: "Les questions à se poser avant de lancer une dématérialisation", type: "Checklist", desc: "Évaluer votre maturité documentaire." },
  { title: "GED et obligations de conservation : ce que dit le cadre OHADA", type: "Guide", desc: "Conformité documentaire en zone UEMOA." },
  { title: "Cartographier ses processus avant d'automatiser", type: "Webinar", desc: "La méthode pas à pas, en conditions réelles." },
];

// Reprises verbatim de src/app/faq/page.tsx (catégorie "Transformation Digitale").
export const tdFaqs = [
  {
    question: "Par où commencer sa transformation digitale ?",
    answer:
      "La transformation digitale commence par un audit de l'existant : cartographie des processus, identification des points de friction et des gains potentiels. AKILI Labs réalise un Schéma Directeur Informatique (SDI) qui priorise les chantiers selon leur impact métier et leur faisabilité, en tenant compte des contraintes budgétaires UEMOA.",
  },
  {
    question: "Qu'est-ce qu'une GED (Gestion Électronique des Documents) ?",
    answer:
      "Une GED numérise, classe, indexe et contrôle l'accès aux documents d'entreprise. Elle élimine les archives papier, accélère la recherche documentaire et sécurise les données. En zone UEMOA, elle est particulièrement utile pour les dossiers clients, RH et comptables soumis à des obligations légales de conservation.",
  },
  {
    question: "Comment choisir un partenaire IT en Afrique de l'Ouest ?",
    answer:
      "Un bon partenaire IT en Afrique de l'Ouest doit maîtriser le contexte local : réglementations OHADA, connectivité variable, contraintes budgétaires en XAF. Vérifiez les références dans votre secteur, la capacité de support post-déploiement, la présence locale pour les interventions sur site et les certifications techniques de l'équipe.",
  },
  {
    question: "Qu'est-ce qu'un BPM et à quoi sert-il ?",
    answer:
      "Le BPM (Business Process Management) modélise, automatise et optimise les processus métier. Il cartographie les flux de travail, identifie les goulots d'étranglement et implémente des workflows automatisés : approbations, notifications, escalades. Résultat : des processus plus rapides, traçables et moins dépendants des personnes clés.",
  },
];
