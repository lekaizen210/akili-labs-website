import type { Localized } from "@/lib/i18n-content";

// Contenu source : content/marketing/drafts/2026-07-11_developpement-metiers-page-content-v2.md
// Replis appliqués (cf. "Prérequis de publication" du draft) :
// - section Stack coupée (technologies mobiles/Node non confirmées) ;
// - sections Réalisations, Cas client et Équipe exclues tant que le contenu
//   réel (captures autorisées, résultats validés, portraits) n'est pas fourni ;
// - réversibilité formulée « prévue au contrat » (repli juridique) ;
// - SLA TMA repris tels que publiés dans la FAQ du site (P1 sous 4h, P2 sous
//   24h, 100% sur 12 mois) — l'arbitrage avec la formulation des procédures
//   internes (« délais contractuels ») reste à trancher côté AKILI Labs.

export const dmPhases = [
  {
    phase: { fr: "1. Cadrage & spécifications", en: "1. Scoping & Specifications" },
    content: {
      fr: "Ateliers avec vos équipes métier, formalisation des processus et des règles de gestion.",
      en: "Workshops with your business teams, formalizing processes and business rules.",
    },
    livrable: {
      fr: "Spécifications fonctionnelles validées",
      en: "Validated functional specifications",
    },
  },
  {
    phase: { fr: "2. Conception UX & architecture", en: "2. UX Design & Architecture" },
    content: {
      fr: "Maquettes des écrans clés, architecture technique, choix technologiques argumentés.",
      en: "Mockups of key screens, technical architecture, and justified technology choices.",
    },
    livrable: {
      fr: "Maquettes validées et dossier d'architecture",
      en: "Validated mockups and architecture document",
    },
  },
  {
    phase: { fr: "3. Développement itératif", en: "3. Iterative Development" },
    content: {
      fr: "Sprints de 2 semaines, démonstrations régulières, ajustements au fil de l'eau.",
      en: "2-week sprints, regular demonstrations, ongoing adjustments.",
    },
    livrable: {
      fr: "Incréments fonctionnels testés à chaque sprint",
      en: "Tested functional increments at every sprint",
    },
  },
  {
    phase: { fr: "4. Recette & formation", en: "4. Acceptance Testing & Training" },
    content: {
      fr: "Tests utilisateurs (UAT) sur environnement dédié, formation des équipes.",
      en: "User acceptance testing (UAT) on a dedicated environment, team training.",
    },
    livrable: {
      fr: "PV de recette, supports de formation",
      en: "Acceptance test report, training materials",
    },
  },
  {
    phase: { fr: "5. Mise en production & TMA", en: "5. Go-Live & TMA" },
    content: {
      fr: "Déploiement, période de stabilisation, bascule en maintenance avec engagements de service.",
      en: "Deployment, stabilization period, transition to maintenance with service commitments.",
    },
    livrable: {
      fr: "Application en production, contrat TMA",
      en: "Application in production, TMA (application maintenance) contract",
    },
  },
] satisfies { phase: Localized; content: Localized; livrable: Localized }[];

export const dmDomains = [
  {
    title: { fr: "Applications Web & Mobile", en: "Web & Mobile Applications" },
    icon: "MonitorSmartphone",
    desc: {
      fr: "Vos équipes et vos clients accèdent à vos services où qu'ils soient — conçu pour fonctionner même en connectivité variable.",
      en: "Your teams and customers access your services wherever they are — built to work even with variable connectivity.",
    },
  },
  {
    title: { fr: "Portails collaboratifs", en: "Collaborative Portals" },
    icon: "Users",
    desc: {
      fr: "Un point d'entrée unique pour vos employés, partenaires ou adhérents : fin des allers-retours d'emails et des documents introuvables.",
      en: "A single entry point for your employees, partners, or members: no more endless email chains and missing documents.",
    },
  },
  {
    title: { fr: "APIs REST & Microservices", en: "REST APIs & Microservices" },
    icon: "Cable",
    desc: {
      fr: "Vos systèmes se parlent enfin : fin de la double saisie, données cohérentes partout, intégrations qui survivent aux évolutions.",
      en: "Your systems finally talk to each other: no more double entry, consistent data everywhere, and integrations that survive change.",
    },
  },
  {
    title: { fr: "Plateformes métiers", en: "Business Platforms" },
    icon: "LayoutDashboard",
    desc: {
      fr: "L'outil complet qui épouse votre processus de bout en bout — pas l'inverse.",
      en: "The complete tool that fits your process end to end — not the other way around.",
    },
  },
] satisfies { title: Localized; icon: string; desc: Localized }[];

// Cœur de la v2 : chaque cause de dérapage reçoit une réponse tirée des
// procédures internes.
export const dmStandards = [
  {
    cause: { fr: "Le périmètre qui gonfle en silence.", en: "Scope that quietly creeps." },
    title: { fr: "Validation écrite", en: "Written Sign-Off" },
    desc: {
      fr: "Toute modification de périmètre est chiffrée et validée par écrit avant implémentation — votre budget ne bouge jamais sans votre signature.",
      en: "Every scope change is costed and approved in writing before implementation — your budget never moves without your signature.",
    },
  },
  {
    cause: { fr: "L'effet tunnel — six mois sans rien voir.", en: "The tunnel effect — six months with nothing to show." },
    title: { fr: "Sprints de 2 semaines", en: "2-Week Sprints" },
    desc: {
      fr: "Démonstration à chaque itération : vous voyez la valeur avancer et vous corrigez tôt, quand c'est encore peu coûteux.",
      en: "A demo at every iteration: you see the value build and correct course early, while it's still inexpensive to do so.",
    },
  },
  {
    cause: {
      fr: "La qualité invisible jusqu'au premier bug en production.",
      en: "Quality that stays invisible until the first bug hits production.",
    },
    title: { fr: "Qualité mesurée", en: "Measured Quality" },
    desc: {
      fr: "Tests automatisés (objectif ≥ 70% de couverture), revues de code systématiques et recette formelle sur environnement dédié avant tout déploiement.",
      en: "Automated tests (target ≥ 70% coverage), systematic code reviews, and formal acceptance testing on a dedicated environment before every deployment.",
    },
  },
  {
    cause: { fr: "La dépendance au prestataire.", en: "Vendor dependency." },
    title: { fr: "Le code vous appartient", en: "The Code Is Yours" },
    desc: {
      fr: "Code source versionné, documentation et accès livrés : vous pouvez confier la suite à nous, à vos équipes ou à un tiers.",
      en: "Versioned source code, documentation, and access are all delivered to you: you can hand the next phase to us, your own teams, or a third party.",
    },
  },
] satisfies { cause: Localized; title: Localized; desc: Localized }[];

export const dmServices = [
  {
    title: { fr: "TMA — maintenance applicative", en: "TMA — Application Maintenance" },
    desc: {
      fr: "Surveillance proactive, correctifs et évolutions mineures avec engagements contractuels : incidents critiques (P1) résolus sous 4h, majeurs (P2) sous 24h — 100% de respect des SLA P1 sur les 12 derniers mois.",
      en: "Proactive monitoring, fixes, and minor enhancements under contractual commitments: critical incidents (P1) resolved within 4 hours, major incidents (P2) within 24 hours — 100% SLA compliance on P1 over the past 12 months.",
    },
  },
  {
    title: { fr: "Régie ou forfait", en: "Staff Augmentation or Fixed-Price" },
    desc: {
      fr: "Renfort de développeurs au taux journalier dans vos équipes, ou projet au forfait avec périmètre contractualisé — selon votre mode de pilotage.",
      en: "Developer reinforcement at a daily rate within your teams, or a fixed-price project with a contractually defined scope — depending on how you prefer to manage delivery.",
    },
  },
  {
    title: { fr: "Évolutions continues", en: "Continuous Enhancements" },
    desc: {
      fr: "Votre métier évolue, votre plateforme suit : backlog d'évolutions priorisé avec vos équipes, livré par sprints.",
      en: "Your business evolves, your platform keeps pace: an enhancement backlog prioritized with your teams, delivered sprint by sprint.",
    },
  },
  {
    title: { fr: "Intégration à votre SI", en: "Integration with Your IT System" },
    desc: {
      fr: "Vos applications dialoguent avec l'existant — Odoo ERP, systèmes bancaires, outils métiers — via des APIs documentées.",
      en: "Your applications talk to your existing systems — Odoo ERP, banking systems, business tools — through documented APIs.",
    },
  },
] satisfies { title: Localized; desc: Localized }[];

export const dmApproach = [
  {
    title: { fr: "Sur mesure seulement là où ça différencie", en: "Custom-Built Only Where It Differentiates You" },
    desc: {
      fr: "Si un standard éprouvé couvre le besoin, nous vous le disons — c'est la doctrine qui protège votre budget.",
      en: "If a proven standard covers the need, we tell you so — it's the doctrine that protects your budget.",
    },
  },
  {
    title: { fr: "Le métier avant le code", en: "The Business Before the Code" },
    desc: {
      fr: "Aucune ligne de code avant d'avoir compris vos processus réels : les ateliers métier fondent tout le projet.",
      en: "No line of code before we understand your actual processes: business workshops are the foundation of every project.",
    },
  },
  {
    title: { fr: "Sobriété technique", en: "Technical Restraint" },
    desc: {
      fr: "Des technologies éprouvées et dimensionnées à votre contexte — pas de sur-ingénierie qui coûte cher à maintenir.",
      en: "Proven technologies, sized to your context — no over-engineering that costs a fortune to maintain.",
    },
  },
  {
    title: { fr: "Réversibilité totale", en: "Full Reversibility" },
    desc: {
      fr: "Code documenté, versionné et livré : votre plateforme vous appartient, sans dépendance forcée au prestataire.",
      en: "Documented, versioned code delivered to you: your platform is yours, with no forced dependency on the provider.",
    },
  },
] satisfies { title: Localized; desc: Localized }[];

export const dmSectorUseCases = [
  {
    sector: { fr: "Finance & Institutions", en: "Finance & Institutions" },
    icon: "Landmark",
    useCases: {
      fr: "Portails clients, workflows de traitement de dossiers, intégrations aux systèmes bancaires",
      en: "Customer portals, case-processing workflows, integrations with banking systems",
    },
  },
  {
    sector: { fr: "Commerce & Distribution", en: "Trade & Distribution" },
    icon: "ShoppingBag",
    useCases: {
      fr: "Applications de force de vente, suivi de tournées, portails fournisseurs",
      en: "Sales force applications, route tracking, supplier portals",
    },
  },
  {
    sector: { fr: "Agro-industrie", en: "Agribusiness" },
    icon: "Wheat",
    useCases: {
      fr: "Suivi de production et de collecte, traçabilité des lots, applications terrain",
      en: "Production and collection tracking, batch traceability, field applications",
    },
  },
  {
    sector: { fr: "Secteur public & institutions", en: "Public Sector & Institutions" },
    icon: "Building2",
    useCases: {
      fr: "Téléprocédures, portails usagers, plateformes de gestion interne",
      en: "Online administrative procedures, citizen portals, internal management platforms",
    },
  },
  {
    sector: { fr: "Santé", en: "Healthcare" },
    icon: "HeartPulse",
    useCases: {
      fr: "Applications de suivi patient, portails de rendez-vous, tableaux de bord d'activité",
      en: "Patient tracking applications, appointment portals, activity dashboards",
    },
  },
  {
    sector: { fr: "Télécoms & Services", en: "Telecoms & Services" },
    icon: "Radio",
    useCases: {
      fr: "Portails self-service, outils d'exploitation, intégrations multi-systèmes",
      en: "Self-service portals, operations tools, multi-system integrations",
    },
  },
] satisfies { sector: Localized; icon: string; useCases: Localized }[];

export const dmWhyUs = [
  {
    title: { fr: "Expertise terrain africaine", en: "On-the-Ground African Expertise" },
    desc: {
      fr: "Connectivité variable, usages mobiles d'abord, contraintes budgétaires en XAF : nos applications sont conçues pour ce contexte, pas malgré lui.",
      en: "Variable connectivity, mobile-first usage, budget constraints in XAF: our applications are designed for this context, not despite it.",
    },
  },
  {
    title: { fr: "Vision de bout en bout", en: "End-to-End Vision" },
    desc: {
      fr: "Du cadrage métier à la TMA, un seul interlocuteur responsable sur tout le cycle de vie de votre application.",
      en: "From business scoping to TMA, a single point of accountability across your application's entire lifecycle.",
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
    title: { fr: "Standards vérifiables", en: "Verifiable Standards" },
    desc: {
      fr: "Tests ≥ 70%, revues de code, environnements séparés, code livré : la qualité se constate, elle ne se promet pas.",
      en: "Tests ≥ 70%, code reviews, separate environments, code delivered: quality is demonstrated, not promised.",
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

// Trois chiffres de practice (FAQ publiée + procédures internes) et deux
// chiffres d'entreprise déjà validés.
export const dmKpis = [
  {
    value: "4h",
    label: {
      fr: "délai de résolution des incidents critiques (P1) en TMA",
      en: "resolution time for critical incidents (P1) under TMA",
    },
  },
  {
    value: "100%",
    label: { fr: "de respect des SLA P1 sur les 12 derniers mois", en: "SLA P1 compliance over the past 12 months" },
  },
  {
    value: "70%+",
    label: {
      fr: "de couverture de tests visée sur les projets applicatifs",
      en: "test coverage targeted on application projects",
    },
  },
  { value: "11+", label: { fr: "ans d'expérience", en: "years of experience" } },
  { value: "6", label: { fr: "pays d'intervention (UEMOA/CEDEAO)", en: "countries served (UEMOA/ECOWAS)" } },
] satisfies { value: string; label: Localized }[];

export const dmResources = [
  {
    title: {
      fr: "Sur mesure ou logiciel du marché : la grille de décision",
      en: "Custom-built or off-the-shelf: the decision framework",
    },
    type: { fr: "Guide", en: "Guide" },
    desc: { fr: "La doctrine appliquée à votre cas, sans parti pris.", en: "The doctrine applied to your case, without bias." },
  },
  {
    title: {
      fr: "Les questions à se poser avant de lancer un développement sur mesure",
      en: "Questions to ask before starting a custom development project",
    },
    type: { fr: "Checklist", en: "Checklist" },
    desc: { fr: "Évaluer le besoin, le budget et les risques.", en: "Assess the need, the budget, and the risks." },
  },
  {
    title: {
      fr: "Cahier des charges d'application métier : ce qui doit y figurer",
      en: "Business application specifications: what needs to be included",
    },
    type: { fr: "Guide", en: "Guide" },
    desc: { fr: "Le socle d'un projet qui ne dérape pas.", en: "The foundation of a project that doesn't go off the rails." },
  },
  {
    title: {
      fr: "Du processus papier à l'application mobile : retour d'expérience",
      en: "From paper process to mobile app: a case study",
    },
    type: { fr: "Webinar", en: "Webinar" },
    desc: { fr: "Démonstration en conditions réelles.", en: "A real-world demonstration." },
  },
] satisfies { title: Localized; type: Localized; desc: Localized }[];

export const dmFaqs = [
  // Reprises verbatim de src/app/faq/page.tsx (catégorie "AKILI Labs").
  {
    question: {
      fr: "Proposez-vous de la TMA (maintenance applicative) ?",
      en: "Do you offer TMA (application maintenance)?",
    },
    answer: {
      fr: "Oui. AKILI Labs assure la TMA de vos systèmes avec SLA contractuels : incidents P1 résolus sous 4h, P2 sous 24h. Nos contrats TMA incluent surveillance proactive, mises à jour de sécurité, correctifs Odoo, évolutions mineures et un chef de projet dédié. Taux de respect des SLA P1 : 100 % sur les 12 derniers mois.",
      en: "Yes. AKILI Labs provides TMA for your systems under contractual SLAs: P1 incidents resolved within 4 hours, P2 within 24 hours. Our TMA contracts include proactive monitoring, security updates, Odoo fixes, minor enhancements, and a dedicated project manager. P1 SLA compliance rate: 100% over the past 12 months.",
    },
  },
  {
    question: { fr: "Quelle est votre approche tarifaire ?", en: "What is your pricing approach?" },
    answer: {
      fr: "Nos prestations sont proposées en régie (taux journalier) ou au forfait. Pour les projets ERP, nous proposons des plans CAPEX (investissement initial) ou OPEX (abonnement mensuel) adaptés aux contraintes de trésorerie des organisations UEMOA. La consultation initiale est gratuite et sans engagement. Devis sous 5 jours ouvrés.",
      en: "Our services are offered on a Staff Augmentation basis (daily rate) or fixed-price. For ERP projects, we offer CAPEX (upfront investment) or OPEX (monthly subscription) plans suited to the cash-flow constraints of UEMOA organizations. The initial consultation is free and comes with no obligation. Quote within 5 business days.",
    },
  },
  // Nouvelles questions (validées dans le draft v2 avec formulation de repli
  // juridique « prévue au contrat ») — à reporter dans /faq (catégorie
  // "Développement Métiers") après validation.
  {
    question: {
      fr: "Sur mesure ou logiciel du marché : comment choisir ?",
      en: "Custom-built or off-the-shelf: how do you choose?",
    },
    answer: {
      fr: "La règle simple : si le besoin est standard (comptabilité, paie, CRM), un logiciel éprouvé comme Odoo est plus rapide et moins cher. Si le processus est différenciant — celui qui fait votre spécificité — le sur mesure devient rationnel : l'outil épouse le processus au lieu de le déformer. Lors du cadrage gratuit, nous vous disons honnêtement dans quel cas vous êtes, y compris quand la bonne réponse est un logiciel du marché.",
      en: "The simple rule: if the need is standard (accounting, payroll, CRM), a proven package like Odoo is faster and cheaper. If the process is what differentiates you, custom development becomes the rational choice: the tool fits the process instead of distorting it. During the free scoping session, we tell you honestly which case you're in — including when the right answer is off-the-shelf software.",
    },
  },
  {
    question: { fr: "Le code source m'appartient-il ?", en: "Do I own the source code?" },
    answer: {
      fr: "Oui. En fin de projet, vous recevez le code source complet, versionné et documenté, ainsi que les accès à l'ensemble des environnements. Vous pouvez confier la maintenance à AKILI Labs, à vos équipes internes ou à un autre prestataire : la réversibilité est prévue au contrat.",
      en: "Yes. At the end of the project, you receive the complete source code, versioned and documented, along with access to all environments. You can hand off maintenance to AKILI Labs, your internal teams, or another provider: reversibility is built into the contract.",
    },
  },
] satisfies { question: Localized; answer: Localized }[];
