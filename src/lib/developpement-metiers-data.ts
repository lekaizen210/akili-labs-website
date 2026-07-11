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
    phase: "1. Cadrage & spécifications",
    content:
      "Ateliers avec vos équipes métier, formalisation des processus et des règles de gestion.",
    livrable: "Spécifications fonctionnelles validées",
  },
  {
    phase: "2. Conception UX & architecture",
    content:
      "Maquettes des écrans clés, architecture technique, choix technologiques argumentés.",
    livrable: "Maquettes validées et dossier d'architecture",
  },
  {
    phase: "3. Développement itératif",
    content:
      "Sprints de 2 semaines, démonstrations régulières, ajustements au fil de l'eau.",
    livrable: "Incréments fonctionnels testés à chaque sprint",
  },
  {
    phase: "4. Recette & formation",
    content:
      "Tests utilisateurs (UAT) sur environnement dédié, formation des équipes.",
    livrable: "PV de recette, supports de formation",
  },
  {
    phase: "5. Mise en production & TMA",
    content:
      "Déploiement, période de stabilisation, bascule en maintenance avec engagements de service.",
    livrable: "Application en production, contrat TMA",
  },
];

export const dmDomains = [
  {
    title: "Applications Web & Mobile",
    icon: "MonitorSmartphone",
    desc: "Vos équipes et vos clients accèdent à vos services où qu'ils soient — conçu pour fonctionner même en connectivité variable.",
  },
  {
    title: "Portails collaboratifs",
    icon: "Users",
    desc: "Un point d'entrée unique pour vos employés, partenaires ou adhérents : fin des allers-retours d'emails et des documents introuvables.",
  },
  {
    title: "APIs REST & Microservices",
    icon: "Cable",
    desc: "Vos systèmes se parlent enfin : fin de la double saisie, données cohérentes partout, intégrations qui survivent aux évolutions.",
  },
  {
    title: "Plateformes métiers",
    icon: "LayoutDashboard",
    desc: "L'outil complet qui épouse votre processus de bout en bout — pas l'inverse.",
  },
];

// Cœur de la v2 : chaque cause de dérapage reçoit une réponse tirée des
// procédures internes.
export const dmStandards = [
  {
    cause: "Le périmètre qui gonfle en silence.",
    title: "Validation écrite",
    desc: "Toute modification de périmètre est chiffrée et validée par écrit avant implémentation — votre budget ne bouge jamais sans votre signature.",
  },
  {
    cause: "L'effet tunnel — six mois sans rien voir.",
    title: "Sprints de 2 semaines",
    desc: "Démonstration à chaque itération : vous voyez la valeur avancer et vous corrigez tôt, quand c'est encore peu coûteux.",
  },
  {
    cause: "La qualité invisible jusqu'au premier bug en production.",
    title: "Qualité mesurée",
    desc: "Tests automatisés (objectif ≥ 70% de couverture), revues de code systématiques et recette formelle sur environnement dédié avant tout déploiement.",
  },
  {
    cause: "La dépendance au prestataire.",
    title: "Le code vous appartient",
    desc: "Code source versionné, documentation et accès livrés : vous pouvez confier la suite à nous, à vos équipes ou à un tiers.",
  },
];

export const dmServices = [
  {
    title: "TMA — maintenance applicative",
    desc: "Surveillance proactive, correctifs et évolutions mineures avec engagements contractuels : incidents critiques (P1) résolus sous 4h, majeurs (P2) sous 24h — 100% de respect des SLA P1 sur les 12 derniers mois.",
  },
  {
    title: "Régie ou forfait",
    desc: "Renfort de développeurs au taux journalier dans vos équipes, ou projet au forfait avec périmètre contractualisé — selon votre mode de pilotage.",
  },
  {
    title: "Évolutions continues",
    desc: "Votre métier évolue, votre plateforme suit : backlog d'évolutions priorisé avec vos équipes, livré par sprints.",
  },
  {
    title: "Intégration à votre SI",
    desc: "Vos applications dialoguent avec l'existant — Odoo ERP, systèmes bancaires, outils métiers — via des APIs documentées.",
  },
];

export const dmApproach = [
  {
    title: "Sur mesure seulement là où ça différencie",
    desc: "Si un standard éprouvé couvre le besoin, nous vous le disons — c'est la doctrine qui protège votre budget.",
  },
  {
    title: "Le métier avant le code",
    desc: "Aucune ligne de code avant d'avoir compris vos processus réels : les ateliers métier fondent tout le projet.",
  },
  {
    title: "Sobriété technique",
    desc: "Des technologies éprouvées et dimensionnées à votre contexte — pas de sur-ingénierie qui coûte cher à maintenir.",
  },
  {
    title: "Réversibilité totale",
    desc: "Code documenté, versionné et livré : votre plateforme vous appartient, sans dépendance forcée au prestataire.",
  },
];

export const dmSectorUseCases = [
  {
    sector: "Finance & Institutions",
    icon: "Landmark",
    useCases: "Portails clients, workflows de traitement de dossiers, intégrations aux systèmes bancaires",
  },
  {
    sector: "Commerce & Distribution",
    icon: "ShoppingBag",
    useCases: "Applications de force de vente, suivi de tournées, portails fournisseurs",
  },
  {
    sector: "Agro-industrie",
    icon: "Wheat",
    useCases: "Suivi de production et de collecte, traçabilité des lots, applications terrain",
  },
  {
    sector: "Secteur public & institutions",
    icon: "Building2",
    useCases: "Téléprocédures, portails usagers, plateformes de gestion interne",
  },
  {
    sector: "Santé",
    icon: "HeartPulse",
    useCases: "Applications de suivi patient, portails de rendez-vous, tableaux de bord d'activité",
  },
  {
    sector: "Télécoms & Services",
    icon: "Radio",
    useCases: "Portails self-service, outils d'exploitation, intégrations multi-systèmes",
  },
];

export const dmWhyUs = [
  {
    title: "Expertise terrain africaine",
    desc: "Connectivité variable, usages mobiles d'abord, contraintes budgétaires en XAF : nos applications sont conçues pour ce contexte, pas malgré lui.",
  },
  {
    title: "Vision de bout en bout",
    desc: "Du cadrage métier à la TMA, un seul interlocuteur responsable sur tout le cycle de vie de votre application.",
  },
  {
    title: "Équipe expérimentée",
    desc: "11+ ans d'expérience en systèmes d'information en Afrique, en Europe et au Moyen-Orient.",
  },
  {
    title: "Standards vérifiables",
    desc: "Tests ≥ 70%, revues de code, environnements séparés, code livré : la qualité se constate, elle ne se promet pas.",
  },
  {
    title: "Présence locale, vision régionale",
    desc: "Basés à Abidjan, actifs sur toute la zone UEMOA/CEDEAO.",
  },
];

// Trois chiffres de practice (FAQ publiée + procédures internes) et deux
// chiffres d'entreprise déjà validés.
export const dmKpis = [
  { value: "4h", label: "délai de résolution des incidents critiques (P1) en TMA" },
  { value: "100%", label: "de respect des SLA P1 sur les 12 derniers mois" },
  { value: "70%+", label: "de couverture de tests visée sur les projets applicatifs" },
  { value: "11+", label: "ans d'expérience" },
  { value: "6", label: "pays d'intervention (UEMOA/CEDEAO)" },
];

export const dmResources = [
  { title: "Sur mesure ou logiciel du marché : la grille de décision", type: "Guide", desc: "La doctrine appliquée à votre cas, sans parti pris." },
  { title: "Les questions à se poser avant de lancer un développement sur mesure", type: "Checklist", desc: "Évaluer le besoin, le budget et les risques." },
  { title: "Cahier des charges d'application métier : ce qui doit y figurer", type: "Guide", desc: "Le socle d'un projet qui ne dérape pas." },
  { title: "Du processus papier à l'application mobile : retour d'expérience", type: "Webinar", desc: "Démonstration en conditions réelles." },
];

export const dmFaqs = [
  // Reprises verbatim de src/app/faq/page.tsx (catégorie "AKILI Labs").
  {
    question: "Proposez-vous de la TMA (maintenance applicative) ?",
    answer:
      "Oui. AKILI Labs assure la TMA de vos systèmes avec SLA contractuels : incidents P1 résolus sous 4h, P2 sous 24h. Nos contrats TMA incluent surveillance proactive, mises à jour de sécurité, correctifs Odoo, évolutions mineures et un chef de projet dédié. Taux de respect des SLA P1 : 100 % sur les 12 derniers mois.",
  },
  {
    question: "Quelle est votre approche tarifaire ?",
    answer:
      "Nos prestations sont proposées en régie (taux journalier) ou au forfait. Pour les projets ERP, nous proposons des plans CAPEX (investissement initial) ou OPEX (abonnement mensuel) adaptés aux contraintes de trésorerie des organisations UEMOA. La consultation initiale est gratuite et sans engagement. Devis sous 5 jours ouvrés.",
  },
  // Nouvelles questions (validées dans le draft v2 avec formulation de repli
  // juridique « prévue au contrat ») — à reporter dans /faq (catégorie
  // "Développement Métiers") après validation.
  {
    question: "Sur mesure ou logiciel du marché : comment choisir ?",
    answer:
      "La règle simple : si le besoin est standard (comptabilité, paie, CRM), un logiciel éprouvé comme Odoo est plus rapide et moins cher. Si le processus est différenciant — celui qui fait votre spécificité — le sur mesure devient rationnel : l'outil épouse le processus au lieu de le déformer. Lors du cadrage gratuit, nous vous disons honnêtement dans quel cas vous êtes, y compris quand la bonne réponse est un logiciel du marché.",
  },
  {
    question: "Le code source m'appartient-il ?",
    answer:
      "Oui. En fin de projet, vous recevez le code source complet, versionné et documenté, ainsi que les accès à l'ensemble des environnements. Vous pouvez confier la maintenance à AKILI Labs, à vos équipes internes ou à un autre prestataire : la réversibilité est prévue au contrat.",
  },
];
