import type { Localized } from "@/lib/i18n-content";

export const biProofStats = [
  { value: "11+", label: { fr: "ans d'expérience data", en: "years of data experience" }, highlight: false },
  { value: "6", label: { fr: "pays UEMOA/CEDEAO", en: "UEMOA/ECOWAS countries" }, highlight: false },
  {
    value: "100%",
    label: {
      fr: "des projets livrés avec transfert de compétences",
      en: "of projects delivered with skills transfer",
    },
    highlight: true,
  },
] satisfies { value: string; label: Localized; highlight: boolean }[];

export const biServices = [
  {
    title: { fr: "Cadrage & schéma directeur data", en: "Data Scoping & Master Plan" },
    icon: "Compass",
    desc: {
      fr: "Inventaire de vos sources (ERP, Excel, caisses, Mobile Money), définition des indicateurs qui comptent pour votre comité, feuille de route priorisée par valeur.",
      en: "Inventory of your sources (ERP, Excel, cash registers, Mobile Money), definition of the KPIs that matter to your committee, and a roadmap prioritized by value.",
    },
    livrable: { fr: "Dictionnaire d'indicateurs + roadmap", en: "KPI dictionary + roadmap" },
  },
  {
    title: { fr: "Entrepôt de données & flux", en: "Data Warehouse & Data Flows" },
    icon: "Database",
    desc: {
      fr: "Consolidation automatique et historisée de vos systèmes dans un entrepôt unique, avec règles de qualité à l'entrée. Vos données vous appartiennent, hébergées où vous le décidez.",
      en: "Automatic, historized consolidation of your systems into a single data warehouse, with quality rules at intake. Your data belongs to you, hosted wherever you decide.",
    },
    livrable: { fr: "Entrepôt documenté + flux de nuit supervisés", en: "Documented data warehouse + supervised nightly flows" },
  },
  {
    title: { fr: "Tableaux de bord & reporting", en: "Dashboards & Reporting" },
    icon: "LayoutDashboard",
    desc: {
      fr: "Dashboards direction, finance, commerce et opérations ; états réglementaires et exports comité générés depuis les mêmes données.",
      en: "Management, finance, sales, and operations dashboards; regulatory statements and committee exports generated from the same data.",
    },
    livrable: { fr: "Dashboards en production + exports automatisés", en: "Dashboards in production + automated exports" },
  },
  {
    title: { fr: "Adoption & autonomie", en: "Adoption & Autonomy" },
    icon: "GraduationCap",
    desc: {
      fr: "Formation de vos équipes à l'exploration des données, transfert de compétences, support TMA. Objectif assumé : que vous n'ayez plus besoin de nous pour un nouvel indicateur.",
      en: "Training your teams in data exploration, skills transfer, TMA (application maintenance) support. Our stated goal: you no longer need us to build a new KPI.",
    },
    livrable: { fr: "Équipe autonome + documentation", en: "Autonomous team + documentation" },
  },
] satisfies { title: Localized; icon: string; desc: Localized; livrable: Localized }[];

export const biReglementaire = [
  {
    title: { fr: "États périodiques du régulateur", en: "Periodic Regulatory Statements" },
    desc: {
      fr: "Pour les banques et SFD : les états exigés par la BCEAO et la Commission Bancaire, générés depuis l'entrepôt avec piste d'audit, selon votre agrément et vos obligations.",
      en: "For banks and MFIs: the statements required by the BCEAO and the Banking Commission, generated from the data warehouse with an audit trail, in line with your license and obligations.",
    },
  },
  {
    title: { fr: "Liasse & annexes OHADA", en: "OHADA Reporting Package & Annexes" },
    desc: {
      fr: "Les mêmes données que la comptabilité, jamais une ressaisie parallèle : ce que le commissaire aux comptes voit est ce que le comité voit.",
      en: "The same data as accounting, never a parallel re-entry: what the statutory auditor sees is what the committee sees.",
    },
  },
  {
    title: { fr: "Reporting bailleurs & maison-mère", en: "Donor & Parent Company Reporting" },
    desc: {
      fr: "Formats imposés (Excel, XML) produits automatiquement aux échéances, sans mobiliser une équipe pendant une semaine.",
      en: "Mandated formats (Excel, XML) produced automatically at each deadline, without tying up a team for a week.",
    },
  },
] satisfies { title: Localized; desc: Localized }[];

export const biPhases = [
  {
    phase: { fr: "1. Cadrage", en: "1. Scoping" },
    duration: { fr: "2 semaines", en: "2 weeks" },
    content: {
      fr: "Ateliers indicateurs avec la direction, inventaire des sources, dictionnaire v1.",
      en: "KPI workshops with management, source inventory, v1 dictionary.",
    },
    livrable: { fr: "Roadmap priorisée", en: "Prioritized roadmap" },
  },
  {
    phase: { fr: "2. Socle & premier flux", en: "2. Foundation & First Data Flow" },
    duration: { fr: "2 semaines", en: "2 weeks" },
    content: {
      fr: "Entrepôt monté, première source branchée (l'ERP en général), qualité mesurée.",
      en: "Data warehouse set up, first source connected (usually the ERP), quality measured.",
    },
    livrable: { fr: "Données de nuit fiables", en: "Reliable nightly data" },
  },
  {
    phase: { fr: "3. Premiers dashboards", en: "3. First Dashboards" },
    duration: { fr: "2 semaines", en: "2 weeks" },
    content: {
      fr: "Les deux écrans qui font gagner le comité suivant ; recette avec les utilisateurs réels.",
      en: "The two screens that make the next committee meeting a win; acceptance testing with real users.",
    },
    livrable: { fr: "Mise en production", en: "Go-live" },
  },
  {
    phase: { fr: "4. Extension & autonomie", en: "4. Expansion & Autonomy" },
    duration: { fr: "sprints de 2 sem.", en: "2-week sprints" },
    content: {
      fr: "Nouvelles sources, nouveaux écrans, formation ; le périmètre s'ajuste à chaque démo.",
      en: "New sources, new screens, training; the scope adjusts at every demo.",
    },
    livrable: { fr: "Équipe autonome", en: "Autonomous team" },
  },
] satisfies { phase: Localized; duration: Localized; content: Localized; livrable: Localized }[];

export const biSectors = [
  {
    sector: { fr: "Banque & Microfinance", en: "Banking & Microfinance" },
    icon: "Landmark",
    useCases: {
      fr: "Suivi du portefeuille à risque au jour, états régulateur",
      en: "Daily portfolio-at-risk tracking, regulator statements",
    },
    benefit: { fr: "Provisions anticipées, reporting produit à l'heure", en: "Provisions anticipated, reporting delivered on time" },
  },
  {
    sector: { fr: "Distribution & Négoce", en: "Retail & Trading" },
    icon: "ShoppingBag",
    useCases: { fr: "Marge par agence et par produit, suivi des remises", en: "Margin by branch and by product, discount tracking" },
    benefit: { fr: "Remises sous contrôle, ruptures anticipées", en: "Discounts under control, stock-outs anticipated" },
  },
  {
    sector: { fr: "Industrie & Agro", en: "Industry & Agribusiness" },
    icon: "Factory",
    useCases: { fr: "Rendement par ligne et par site, coûts matière", en: "Yield by line and by site, raw material costs" },
    benefit: { fr: "Écarts vus à la semaine, pas au bilan", en: "Variances seen weekly, not at year-end" },
  },
  {
    sector: { fr: "Services & BTP", en: "Services & Construction" },
    icon: "HardHat",
    useCases: { fr: "Rentabilité par affaire et par chantier", en: "Profitability by contract and by site" },
    benefit: { fr: "Dérives détectées avant la fin du projet", en: "Overruns detected before project close" },
  },
  {
    sector: { fr: "Secteur public & Bailleurs", en: "Public Sector & Donors" },
    icon: "Building2",
    useCases: { fr: "Suivi d'indicateurs de programmes", en: "Program KPI tracking" },
    benefit: { fr: "Reporting bailleurs automatisé", en: "Automated donor reporting" },
  },
  {
    sector: { fr: "Télécoms & Mobile Money", en: "Telecoms & Mobile Money" },
    icon: "Radio",
    useCases: { fr: "Réconciliation des volumes de transactions", en: "Reconciliation of transaction volumes" },
    benefit: { fr: "Écarts détectés dès le lendemain", en: "Discrepancies detected the next day" },
  },
] satisfies { sector: Localized; icon: string; useCases: Localized; benefit: Localized }[];

export const biWhyUs = [
  {
    title: { fr: "On connaît vos systèmes de départ", en: "We Know Your Starting Systems" },
    desc: {
      fr: "Intégrateur Odoo et développeur métier : nous savons brancher un entrepôt sur l'existant réel (ERP, Excel, caisses), pas sur un SI idéal.",
      en: "Odoo integrator and business software developer: we know how to connect a data warehouse to your real-world systems (ERP, Excel, cash registers), not to an idealized IT setup.",
    },
  },
  {
    title: { fr: "Le réglementaire régional en natif", en: "Regional Regulation, Built In" },
    desc: {
      fr: "SYSCOHADA, exigences BCEAO, formats bailleurs : le contexte UEMOA n'est pas une adaptation, c'est notre terrain.",
      en: "SYSCOHADA, BCEAO requirements, donor formats: the UEMOA context isn't an add-on for us, it's our home ground.",
    },
  },
  {
    title: { fr: "Open source d'abord", en: "Open Source First" },
    desc: {
      fr: "Pas de licence par utilisateur qui explose quand toute l'entreprise veut voir les chiffres. Vos données et vos outils vous appartiennent.",
      en: "No per-user licensing that spirals out of control when the whole company wants to see the numbers. Your data and your tools belong to you.",
    },
  },
  {
    title: { fr: "L'autonomie comme livrable", en: "Autonomy as a Deliverable" },
    desc: {
      fr: "Transfert de compétences systématique : votre équipe crée ses propres indicateurs à la fin du projet.",
      en: "Systematic skills transfer: your team builds its own KPIs by the end of the project.",
    },
  },
] satisfies { title: Localized; desc: Localized }[];

export const biStack = [
  {
    category: { fr: "Entrepôt & bases", en: "Warehouse & Databases" },
    items: ["PostgreSQL", "Data Warehouse", "Data Lake"] as (string | Localized)[],
  },
  {
    category: { fr: "Flux & transformation", en: "Data Flows & Transformation" },
    items: [
      "Airflow",
      "dbt",
      "Airbyte",
      { fr: "Connecteurs Odoo", en: "Odoo connectors" },
      { fr: "Connecteurs Mobile Money", en: "Mobile Money connectors" },
    ] as (string | Localized)[],
  },
  {
    category: { fr: "Restitution", en: "Reporting" },
    items: ["Metabase", "Apache Superset", "Power BI", "Grafana"] as (string | Localized)[],
  },
  {
    category: { fr: "Qualité & supervision", en: "Quality & Monitoring" },
    items: [
      { fr: "Tests dbt", en: "dbt tests" },
      { fr: "Alerting e-mail & mobile", en: "Email & mobile alerting" },
      { fr: "Journalisation des flux", en: "Data flow logging" },
    ] as (string | Localized)[],
  },
  {
    category: { fr: "Hébergement", en: "Hosting" },
    items: ["On-premise", { fr: "Cloud UEMOA", en: "UEMOA cloud" }, { fr: "Cloud européen", en: "European cloud" }] as (
      | string
      | Localized
    )[],
  },
] satisfies { category: Localized; items: (string | Localized)[] }[];

export const biFaqs = [
  {
    question: { fr: "Faut-il déjà un ERP pour faire de la BI ?", en: "Do we already need an ERP to do BI?" },
    answer: {
      fr: "Non. Beaucoup de nos clients démarrent avec Excel et des caisses. L'entrepôt consolide ce qui existe ; l'ERP peut venir après, et s'y branchera.",
      en: "No. Many of our clients start with Excel and cash registers. The data warehouse consolidates what already exists; an ERP can come later and connect to it.",
    },
  },
  {
    question: { fr: "Nos fichiers Excel sont notre historique. On les perd ?", en: "Our Excel files are our historical record. Do we lose them?" },
    answer: {
      fr: "Non : ils deviennent une source officielle, chargée et historisée. Vous arrêtez simplement de les consolider à la main.",
      en: "No: they become an official source, loaded and historized. You simply stop consolidating them by hand.",
    },
  },
  {
    question: { fr: "Combien de temps avant le premier résultat ?", en: "How long before the first result?" },
    answer: {
      fr: "Les trois premières phases de notre démarche mènent au premier tableau de bord en production en six semaines, sous réserve du cadrage initial : un interlocuteur métier disponible et l'accès aux systèmes sources. Pas d'effet tunnel de dix-huit mois.",
      en: "The first three phases of our approach lead to the first dashboard in production within six weeks, provided the initial scoping conditions are met: an available business contact and access to source systems. No eighteen-month tunnel effect.",
    },
  },
  {
    question: { fr: "Power BI, Metabase, Superset : que choisir ?", en: "Power BI, Metabase, Superset: which one should we choose?" },
    answer: {
      fr: "Celui que vos équipes adopteront. Notre biais : open source pour éviter les licences par utilisateur ; Power BI si votre parc est déjà Microsoft 365. Le choix se fait au cadrage, sur vos usages réels.",
      en: "Whichever your teams will actually adopt. Our default: open source, to avoid per-user licensing; Power BI if your environment is already Microsoft 365. The choice is made during scoping, based on your real usage.",
    },
  },
  {
    question: { fr: "Qui voit quoi dans les tableaux de bord ?", en: "Who sees what in the dashboards?" },
    answer: {
      fr: "Les droits suivent votre organigramme : un directeur d'agence voit son agence, la direction générale voit tout. Chaque consultation est journalisée.",
      en: "Access rights follow your org chart: a branch manager sees their branch, senior management sees everything. Every access is logged.",
    },
  },
  {
    question: { fr: "Et si nos données sont de mauvaise qualité ?", en: "What if our data is poor quality?" },
    answer: {
      fr: "C'est le cas de tout le monde au départ. Les contrôles d'entrée rendent les problèmes visibles et corrigeables : c'est le premier bénéfice du projet, avant même les tableaux de bord.",
      en: "That's everyone's starting point. Intake checks make problems visible and fixable: it's the project's first benefit, even before the dashboards.",
    },
  },
] satisfies { question: Localized; answer: Localized }[];

/*
 * Ressources (thought leadership) — section prête mais NON publiée :
 * règle éditoriale = ne l'afficher qu'avec au moins un contenu réel téléchargeable.
 * À produire : guide « Les 12 indicateurs d'un comité de direction UEMOA »,
 * article « Le vrai coût du reporting Excel », checklist « Reporting BCEAO ».
 */
export const biResources = [
  {
    title: {
      fr: "Les 12 indicateurs que tout comité de direction UEMOA devrait suivre",
      en: "The 12 KPIs Every UEMOA Executive Committee Should Track",
    },
    type: { fr: "Guide", en: "Guide" },
    desc: { fr: "Téléchargement gratuit.", en: "Free download." },
  },
  {
    title: {
      fr: "Pourquoi vos rapports Excel vous coûtent plus cher qu'un entrepôt de données",
      en: "Why Your Excel Reports Cost More Than a Data Warehouse",
    },
    type: { fr: "Point de vue", en: "Viewpoint" },
    desc: { fr: "Article de fond.", en: "In-depth article." },
  },
  {
    title: {
      fr: "Reporting réglementaire : la checklist de production sans stress",
      en: "Regulatory Reporting: The Stress-Free Production Checklist",
    },
    type: { fr: "Checklist", en: "Checklist" },
    desc: { fr: "Pour banques et SFD.", en: "For banks and MFIs." },
  },
] satisfies { title: Localized; type: Localized; desc: Localized }[];
