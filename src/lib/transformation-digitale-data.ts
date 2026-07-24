// Contenu source : content/marketing/drafts/2026-07-11_transformation-digitale-page-content-v2.md
// Règle de publication : les sections Cas client et Équipe sont exclues tant que
// le contenu réel (résultats validés, portraits, accords) n'est pas fourni.

import type { Localized } from "@/lib/i18n-content";

export const tdPhases = [
  {
    phase: { fr: "1. Audit de l'existant", en: "1. Audit of the Current State" },
    content: {
      fr: "Cartographie des processus, des systèmes et des flux d'information ; identification des points de friction et des gains rapides.",
      en: "Mapping of processes, systems, and information flows; identification of friction points and quick wins.",
    },
    livrable: { fr: "Diagnostic SI et cartographie des processus", en: "IS diagnostic and process mapping" },
  },
  {
    phase: { fr: "2. Schéma Directeur Informatique", en: "2. IT Master Plan" },
    content: {
      fr: "Priorisation des chantiers par impact métier, faisabilité et contrainte budgétaire ; trajectoire pluriannuelle chiffrée.",
      en: "Prioritization of initiatives by business impact, feasibility, and budget constraints; costed multi-year roadmap.",
    },
    livrable: { fr: "SDI validé et feuille de route pluriannuelle", en: "Approved IT Master Plan and multi-year roadmap" },
  },
  {
    phase: { fr: "3. Urbanisation & choix des outils", en: "3. IS Architecture Planning & Tool Selection" },
    content: {
      fr: "Architecture cible interopérable ; sélection outillée des solutions (GED, BPM, ERP…) sur critères objectifs.",
      en: "Interoperable target architecture; objective, criteria-based selection of tools such as EDM (Electronic Document Management), BPM, and ERP.",
    },
    livrable: { fr: "Architecture SI cible et dossier de choix documenté", en: "Target IS architecture and documented tool-selection file" },
  },
  {
    phase: { fr: "4. Déploiement", en: "4. Deployment" },
    content: {
      fr: "Mise en œuvre des chantiers prioritaires : dématérialisation, automatisation, intégrations.",
      en: "Rollout of priority initiatives: paperless workflows, automation, integrations.",
    },
    livrable: { fr: "Solutions déployées, testées et recettées", en: "Solutions deployed, tested, and accepted" },
  },
  {
    phase: { fr: "5. Pilotage & adoption", en: "5. Monitoring & Adoption" },
    content: {
      fr: "Conduite du changement, formation, suivi d'indicateurs d'usage et d'impact.",
      en: "Change management, training, tracking of usage and impact indicators.",
    },
    livrable: { fr: "Tableau de bord de pilotage, équipes autonomes", en: "Monitoring dashboard, self-sufficient teams" },
  },
] satisfies { phase: Localized; content: Localized; livrable: Localized }[];

export const tdDomains = [
  {
    title: { fr: "Audit des systèmes d'information", en: "Information Systems Audit" },
    icon: "SearchCheck",
    desc: {
      fr: "Sachez exactement où vous en êtes : forces, risques et gains rapides de votre SI, noir sur blanc.",
      en: "Know exactly where you stand: your IS's strengths, risks, and quick wins, spelled out in black and white.",
    },
  },
  {
    title: { fr: "Schéma Directeur Informatique", en: "IT Master Plan" },
    icon: "Map",
    desc: {
      fr: "Investissez dans le bon ordre : une trajectoire SI priorisée par impact métier, pas par effet de mode.",
      en: "Invest in the right order: an IS roadmap prioritized by business impact, not by technology trends.",
    },
  },
  {
    title: { fr: "Urbanisation du SI", en: "IS Architecture Planning" },
    icon: "Network",
    desc: {
      fr: "Mettez fin aux silos : des applications qui communiquent, une architecture qui absorbe la croissance.",
      en: "Put an end to silos: applications that talk to each other, an architecture that absorbs growth.",
    },
  },
  {
    title: { fr: "Dématérialisation", en: "Paperless Workflows" },
    icon: "ScanLine",
    desc: {
      fr: "Libérez-vous du papier : des circuits de traitement raccourcis et des documents retrouvés en secondes, pas en jours.",
      en: "Free yourself from paper: shorter processing cycles and documents found in seconds, not days.",
    },
  },
  {
    // « GED » développé une première fois dans tdPhases (phase 3, rendue avant ce domaine) ;
    // occurrence suivante ici → sigle seul, conformément au glossaire.
    title: { fr: "Gestion Électronique des Documents (GED)", en: "EDM" },
    icon: "FolderLock",
    desc: {
      fr: "Sécurisez votre patrimoine documentaire : classement, indexation, contrôle d'accès et conformité aux obligations légales de conservation.",
      en: "Secure your document assets: classification, indexing, access control, and compliance with statutory retention requirements.",
    },
  },
  {
    title: { fr: "Business Process Management (BPM)", en: "Business Process Management (BPM)" },
    icon: "Workflow",
    desc: {
      fr: "Automatisez vos circuits de validation : approbations, notifications et escalades tracées de bout en bout.",
      en: "Automate your approval workflows: approvals, notifications, and escalations tracked end to end.",
    },
  },
  {
    title: { fr: "Gouvernance SI", en: "IT Governance" },
    icon: "ShieldCheck",
    desc: {
      fr: "Gardez la maîtrise : pilotage, sécurité et conformité de votre système d'information dans la durée.",
      en: "Stay in control: governance, security, and compliance of your information system over the long term.",
    },
  },
] satisfies { title: Localized; icon: string; desc: Localized }[];

export const tdServices = [
  {
    title: { fr: "Conduite du changement", en: "Change Management" },
    desc: {
      fr: "Vos équipes n'adhèrent pas par décret. Communication, ateliers utilisateurs et plan d'adoption transforment la résistance en appropriation.",
      en: "Your teams don't buy in by decree. Communication, user workshops, and an adoption plan turn resistance into ownership.",
    },
  },
  {
    title: { fr: "Formation", en: "Training" },
    desc: {
      fr: "Vos équipes internes deviennent autonomes sur les nouveaux processus et outils — le prestataire ne doit pas devenir une dépendance.",
      en: "Your internal teams become self-sufficient on the new processes and tools — the provider should never become a dependency.",
    },
  },
  {
    title: { fr: "Pilotage par indicateurs", en: "Indicator-Driven Monitoring" },
    desc: {
      fr: "Vous savez à tout moment ce que la transformation produit : avancement des chantiers, usage réel des outils, impacts mesurés.",
      en: "You know at all times what the transformation is delivering: initiative progress, actual tool usage, measured impact.",
    },
  },
  {
    title: { fr: "Intégration à l'existant", en: "Integration with Existing Systems" },
    desc: {
      fr: "Vos nouveaux outils (GED, BPM) dialoguent avec les systèmes en place — notamment Odoo ERP lorsque l'organisation en est équipée — au lieu d'ajouter un silo de plus.",
      en: "Your new tools (EDM, BPM) talk to the systems already in place — including Odoo ERP where the organization runs it — instead of adding one more silo.",
    },
  },
] satisfies { title: Localized; desc: Localized }[];

export const tdGouvernancePillars = [
  {
    title: { fr: "Conformité réglementaire", en: "Regulatory Compliance" },
    desc: {
      fr: "Obligations de conservation, exigences OHADA, réglementations nationales de protection des données personnelles : intégrées au cadrage, pas rattrapées après coup.",
      en: "Retention obligations, OHADA requirements, national personal data protection regulations: built into scoping, not patched in afterward.",
    },
  },
  {
    title: { fr: "Souveraineté et hébergement", en: "Sovereignty and Hosting" },
    desc: {
      fr: "Choix d'hébergement raisonné — local, régional ou cloud — selon la sensibilité des données et les exigences de vos tutelles.",
      en: "A reasoned hosting choice — local, regional, or cloud — based on data sensitivity and your regulators' requirements.",
    },
  },
  {
    title: { fr: "Sécurité et traçabilité", en: "Security and Traceability" },
    desc: {
      fr: "Contrôle d'accès, journalisation, archivage à valeur probante : votre patrimoine documentaire résiste à un audit.",
      en: "Access control, logging, legally admissible archiving: your document assets hold up under audit.",
    },
  },
] satisfies { title: Localized; desc: Localized }[];

export const tdApproach = [
  {
    title: { fr: "Diagnostic avant solution", en: "Diagnosis Before Solution" },
    desc: {
      fr: "Aucun outil n'est recommandé avant d'avoir compris les processus réels et les contraintes métier.",
      en: "No tool is recommended before we understand the real processes and business constraints.",
    },
  },
  {
    title: { fr: "Priorisation par impact", en: "Impact-Based Prioritization" },
    desc: {
      fr: "Chaque chantier est classé selon sa valeur métier et sa faisabilité, pas selon les effets de mode technologiques.",
      en: "Every initiative is ranked by business value and feasibility, not by technology trends.",
    },
  },
  {
    title: { fr: "Réalisme UEMOA", en: "UEMOA Realism" },
    desc: {
      fr: "Connectivité variable, budgets en XAF, cadre OHADA : la feuille de route est exécutable dans votre contexte, pas théorique.",
      en: "Variable connectivity, budgets in XAF, the OHADA framework: the roadmap is executable in your context, not theoretical.",
    },
  },
  {
    title: { fr: "Transfert de compétences", en: "Knowledge Transfer" },
    desc: {
      fr: "Vos équipes pilotent la transformation de manière autonome après notre accompagnement.",
      en: "Your teams steer the transformation independently after our engagement ends.",
    },
  },
] satisfies { title: Localized; desc: Localized }[];

export const tdSectorUseCases = [
  {
    sector: { fr: "Commerce & Distribution", en: "Trade & Distribution" },
    icon: "ShoppingBag",
    useCases: {
      fr: "Dématérialisation des bons de commande, GED contrats fournisseurs, automatisation du cycle de facturation",
      en: "Paperless purchase orders, EDM for supplier contracts, automated invoicing cycle",
    },
  },
  {
    sector: { fr: "BTP & Immobilier", en: "Construction & Real Estate" },
    icon: "HardHat",
    useCases: {
      fr: "GED dossiers de chantier et permis, BPM circuits de validation d'avenants",
      en: "EDM for project files and permits, BPM workflows for amendment approvals",
    },
  },
  {
    sector: { fr: "Finance & Institutions", en: "Finance & Institutions" },
    icon: "Landmark",
    useCases: {
      fr: "Gouvernance SI et conformité, dématérialisation des dossiers clients, archivage légal sécurisé",
      en: "IT governance and compliance, paperless customer files, secure legal archiving",
    },
  },
  {
    sector: { fr: "Santé", en: "Healthcare" },
    icon: "HeartPulse",
    useCases: {
      fr: "Dématérialisation des dossiers patients, traçabilité des accès documentaires",
      en: "Paperless patient records, document access traceability",
    },
  },
  {
    sector: { fr: "Secteur public", en: "Public Sector" },
    icon: "Building2",
    useCases: {
      fr: "Schéma Directeur Informatique, urbanisation du SI, dématérialisation des procédures administratives",
      en: "IT Master Plan, IS architecture planning, paperless administrative procedures",
    },
  },
  {
    sector: { fr: "Industrie", en: "Industry" },
    icon: "Factory",
    useCases: {
      fr: "BPM processus qualité et maintenance, intégration SI production/gestion",
      en: "BPM for quality and maintenance processes, production/management IS integration",
    },
  },
] satisfies { sector: Localized; icon: string; useCases: Localized }[];

export const tdWhyUs = [
  {
    title: { fr: "Expertise terrain africaine", en: "On-the-Ground African Expertise" },
    desc: {
      fr: "OHADA, contraintes budgétaires locales, connectivité variable : nos feuilles de route sont conçues pour ce contexte, pas malgré lui.",
      en: "OHADA, local budget constraints, variable connectivity: our roadmaps are designed for this context, not despite it.",
    },
  },
  {
    title: { fr: "Vision de bout en bout", en: "End-to-End Vision" },
    desc: {
      fr: "De l'audit initial au pilotage post-déploiement, un seul interlocuteur responsable sur toute la chaîne.",
      en: "From the initial audit to post-deployment monitoring, a single accountable point of contact across the entire chain.",
    },
  },
  {
    title: { fr: "Équipe expérimentée", en: "Experienced Team" },
    desc: {
      fr: "11+ ans d'expérience en systèmes d'information en Afrique, en Europe et au Moyen-Orient.",
      en: "11+ years of information systems experience across Africa, Europe, and the Middle East.",
    },
  },
  {
    title: { fr: "Indépendance de conseil", en: "Independent Advice" },
    desc: {
      fr: "Le diagnostic précède toujours l'outil ; nous ne vendons pas une licence, nous construisons votre trajectoire.",
      en: "Diagnosis always comes before the tool; we don't sell a license, we build your roadmap.",
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

// Repli documenté : chiffres d'entreprise déjà validés, en attendant
// la consolidation des chiffres propres à la practice.
export const tdKpis = [
  { value: "11+", label: { fr: "ans d'expérience", en: "years of experience" } },
  { value: "50+", label: { fr: "projets livrés", en: "projects delivered" } },
  { value: "8", label: { fr: "secteurs d'activité couverts", en: "industries covered" } },
  { value: "6", label: { fr: "pays d'intervention (UEMOA/CEDEAO)", en: "countries served (UEMOA/ECOWAS)" } },
  { value: "100%", label: { fr: "des projets avec transfert de compétences", en: "of projects with full knowledge transfer" } },
] satisfies { value: string; label: Localized }[];

export const tdResources = [
  {
    title: { fr: "Schéma Directeur Informatique : par où commencer ?", en: "IT Master Plan: Where to Start?" },
    type: { fr: "Guide", en: "Guide" },
    desc: { fr: "Cadrer sa trajectoire SI avant d'investir.", en: "Scope your IS roadmap before you invest." },
  },
  {
    title: {
      fr: "Les questions à se poser avant de lancer une dématérialisation",
      en: "Questions to Ask Before Launching a Paperless Workflow Initiative",
    },
    type: { fr: "Checklist", en: "Checklist" },
    desc: { fr: "Évaluer votre maturité documentaire.", en: "Assess your document management maturity." },
  },
  {
    title: {
      fr: "GED et obligations de conservation : ce que dit le cadre OHADA",
      en: "EDM and Retention Obligations: What the OHADA Framework Requires",
    },
    type: { fr: "Guide", en: "Guide" },
    desc: { fr: "Conformité documentaire en zone UEMOA.", en: "Document compliance across the UEMOA zone." },
  },
  {
    title: { fr: "Cartographier ses processus avant d'automatiser", en: "Mapping Your Processes Before Automating" },
    type: { fr: "Webinar", en: "Webinar" },
    desc: { fr: "La méthode pas à pas, en conditions réelles.", en: "The step-by-step method, in real-world conditions." },
  },
] satisfies { title: Localized; type: Localized; desc: Localized }[];

// Reprises verbatim de src/app/faq/page.tsx (catégorie "Transformation Digitale").
export const tdFaqs = [
  {
    question: { fr: "Par où commencer sa transformation digitale ?", en: "Where should you start your digital transformation?" },
    answer: {
      fr: "La transformation digitale commence par un audit de l'existant : cartographie des processus, identification des points de friction et des gains potentiels. AKILI Labs réalise un Schéma Directeur Informatique (SDI) qui priorise les chantiers selon leur impact métier et leur faisabilité, en tenant compte des contraintes budgétaires UEMOA.",
      en: "Digital transformation starts with an audit of your current state: process mapping, and identification of friction points and potential gains. AKILI Labs builds an IT Master Plan that prioritizes initiatives by business impact and feasibility, factoring in UEMOA budget constraints.",
    },
  },
  {
    // Question et réponse volontairement explicites en anglais (« EDM (Electronic Document
    // Management) ») malgré l'occurrence antérieure sur la page : une question de FAQ est
    // indexée et peut s'afficher seule dans les résultats de recherche via le balisage
    // FAQPage JSON-LD, hors contexte des sections précédentes.
    question: {
      fr: "Qu'est-ce qu'une GED (Gestion Électronique des Documents) ?",
      en: "What is an EDM (Electronic Document Management) system?",
    },
    answer: {
      fr: "Une GED numérise, classe, indexe et contrôle l'accès aux documents d'entreprise. Elle élimine les archives papier, accélère la recherche documentaire et sécurise les données. En zone UEMOA, elle est particulièrement utile pour les dossiers clients, RH et comptables soumis à des obligations légales de conservation.",
      en: "An EDM system digitizes, classifies, indexes, and controls access to a company's documents. It eliminates paper archives, speeds up document search, and secures data. Across the UEMOA zone, it is especially useful for customer, HR, and accounting records subject to statutory retention requirements.",
    },
  },
  {
    question: { fr: "Comment choisir un partenaire IT en Afrique de l'Ouest ?", en: "How do you choose an IT partner in West Africa?" },
    answer: {
      fr: "Un bon partenaire IT en Afrique de l'Ouest doit maîtriser le contexte local : réglementations OHADA, connectivité variable, contraintes budgétaires en XAF. Vérifiez les références dans votre secteur, la capacité de support post-déploiement, la présence locale pour les interventions sur site et les certifications techniques de l'équipe.",
      en: "A good IT partner in West Africa must master the local context: OHADA regulations, variable connectivity, budget constraints in XAF. Check references in your sector, post-deployment support capacity, local presence for on-site interventions, and the team's technical certifications.",
    },
  },
  {
    question: { fr: "Qu'est-ce qu'un BPM et à quoi sert-il ?", en: "What is a BPM, and what is it used for?" },
    answer: {
      fr: "Le BPM (Business Process Management) modélise, automatise et optimise les processus métier. Il cartographie les flux de travail, identifie les goulots d'étranglement et implémente des workflows automatisés : approbations, notifications, escalades. Résultat : des processus plus rapides, traçables et moins dépendants des personnes clés.",
      en: "BPM (Business Process Management) models, automates, and optimizes business processes. It maps workflows, identifies bottlenecks, and implements automated workflows: approvals, notifications, escalations. The result: faster, traceable processes that depend less on key individuals.",
    },
  },
] satisfies { question: Localized; answer: Localized }[];
