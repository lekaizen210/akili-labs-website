export const biProofStats = [
  { value: "11+", label: "ans d'expérience data", highlight: false },
  { value: "6", label: "pays UEMOA/CEDEAO", highlight: false },
  { value: "100%", label: "des projets livrés avec transfert de compétences", highlight: true },
];

export const biServices = [
  {
    title: "Cadrage & schéma directeur data",
    icon: "Compass",
    desc: "Inventaire de vos sources (ERP, Excel, caisses, Mobile Money), définition des indicateurs qui comptent pour votre comité, feuille de route priorisée par valeur.",
    livrable: "Dictionnaire d'indicateurs + roadmap",
  },
  {
    title: "Entrepôt de données & flux",
    icon: "Database",
    desc: "Consolidation automatique et historisée de vos systèmes dans un entrepôt unique, avec règles de qualité à l'entrée. Vos données vous appartiennent, hébergées où vous le décidez.",
    livrable: "Entrepôt documenté + flux de nuit supervisés",
  },
  {
    title: "Tableaux de bord & reporting",
    icon: "LayoutDashboard",
    desc: "Dashboards direction, finance, commerce et opérations ; états réglementaires et exports comité générés depuis les mêmes données.",
    livrable: "Dashboards en production + exports automatisés",
  },
  {
    title: "Adoption & autonomie",
    icon: "GraduationCap",
    desc: "Formation de vos équipes à l'exploration des données, transfert de compétences, support TMA. Objectif assumé : que vous n'ayez plus besoin de nous pour un nouvel indicateur.",
    livrable: "Équipe autonome + documentation",
  },
];

export const biReglementaire = [
  {
    title: "États périodiques du régulateur",
    desc: "Pour les banques et SFD : les états exigés par la BCEAO et la Commission Bancaire, générés depuis l'entrepôt avec piste d'audit, selon votre agrément et vos obligations.",
  },
  {
    title: "Liasse & annexes OHADA",
    desc: "Les mêmes données que la comptabilité, jamais une ressaisie parallèle : ce que le commissaire aux comptes voit est ce que le comité voit.",
  },
  {
    title: "Reporting bailleurs & maison-mère",
    desc: "Formats imposés (Excel, XML) produits automatiquement aux échéances, sans mobiliser une équipe pendant une semaine.",
  },
];

export const biPhases = [
  {
    phase: "1. Cadrage",
    duration: "2 semaines",
    content: "Ateliers indicateurs avec la direction, inventaire des sources, dictionnaire v1.",
    livrable: "Roadmap priorisée",
  },
  {
    phase: "2. Socle & premier flux",
    duration: "2 semaines",
    content: "Entrepôt monté, première source branchée (l'ERP en général), qualité mesurée.",
    livrable: "Données de nuit fiables",
  },
  {
    phase: "3. Premiers dashboards",
    duration: "2 semaines",
    content: "Les deux écrans qui font gagner le comité suivant ; recette avec les utilisateurs réels.",
    livrable: "Mise en production",
  },
  {
    phase: "4. Extension & autonomie",
    duration: "sprints de 2 sem.",
    content: "Nouvelles sources, nouveaux écrans, formation ; le périmètre s'ajuste à chaque démo.",
    livrable: "Équipe autonome",
  },
];

export const biSectors = [
  {
    sector: "Banque & Microfinance",
    icon: "Landmark",
    useCases: "Suivi du portefeuille à risque au jour, états régulateur",
    benefit: "Provisions anticipées, reporting produit à l'heure",
  },
  {
    sector: "Distribution & Négoce",
    icon: "ShoppingBag",
    useCases: "Marge par agence et par produit, suivi des remises",
    benefit: "Remises sous contrôle, ruptures anticipées",
  },
  {
    sector: "Industrie & Agro",
    icon: "Factory",
    useCases: "Rendement par ligne et par site, coûts matière",
    benefit: "Écarts vus à la semaine, pas au bilan",
  },
  {
    sector: "Services & BTP",
    icon: "HardHat",
    useCases: "Rentabilité par affaire et par chantier",
    benefit: "Dérives détectées avant la fin du projet",
  },
  {
    sector: "Secteur public & Bailleurs",
    icon: "Building2",
    useCases: "Suivi d'indicateurs de programmes",
    benefit: "Reporting bailleurs automatisé",
  },
  {
    sector: "Télécoms & Mobile Money",
    icon: "Radio",
    useCases: "Réconciliation des volumes de transactions",
    benefit: "Écarts détectés dès le lendemain",
  },
];

export const biWhyUs = [
  {
    title: "On connaît vos systèmes de départ",
    desc: "Intégrateur Odoo et développeur métier : nous savons brancher un entrepôt sur l'existant réel (ERP, Excel, caisses), pas sur un SI idéal.",
  },
  {
    title: "Le réglementaire régional en natif",
    desc: "SYSCOHADA, exigences BCEAO, formats bailleurs : le contexte UEMOA n'est pas une adaptation, c'est notre terrain.",
  },
  {
    title: "Open source d'abord",
    desc: "Pas de licence par utilisateur qui explose quand toute l'entreprise veut voir les chiffres. Vos données et vos outils vous appartiennent.",
  },
  {
    title: "L'autonomie comme livrable",
    desc: "Transfert de compétences systématique : votre équipe crée ses propres indicateurs à la fin du projet.",
  },
];

export const biStack = [
  { category: "Entrepôt & bases", items: ["PostgreSQL", "Data Warehouse", "Data Lake"] },
  { category: "Flux & transformation", items: ["Airflow", "dbt", "Airbyte", "Connecteurs Odoo & Mobile Money"] },
  { category: "Restitution", items: ["Metabase", "Apache Superset", "Power BI", "Grafana"] },
  { category: "Qualité & supervision", items: ["Tests dbt", "Alerting e-mail & mobile", "Journalisation des flux"] },
  { category: "Hébergement", items: ["On-premise", "Cloud UEMOA", "Cloud européen"] },
];

export const biFaqs = [
  {
    question: "Faut-il déjà un ERP pour faire de la BI ?",
    answer:
      "Non. Beaucoup de nos clients démarrent avec Excel et des caisses. L'entrepôt consolide ce qui existe ; l'ERP peut venir après, et s'y branchera.",
  },
  {
    question: "Nos fichiers Excel sont notre historique. On les perd ?",
    answer:
      "Non : ils deviennent une source officielle, chargée et historisée. Vous arrêtez simplement de les consolider à la main.",
  },
  {
    question: "Combien de temps avant le premier résultat ?",
    answer:
      "Les trois premières phases de notre démarche mènent au premier tableau de bord en production en six semaines, sous réserve du cadrage initial : un interlocuteur métier disponible et l'accès aux systèmes sources. Pas d'effet tunnel de dix-huit mois.",
  },
  {
    question: "Power BI, Metabase, Superset : que choisir ?",
    answer:
      "Celui que vos équipes adopteront. Notre biais : open source pour éviter les licences par utilisateur ; Power BI si votre parc est déjà Microsoft 365. Le choix se fait au cadrage, sur vos usages réels.",
  },
  {
    question: "Qui voit quoi dans les tableaux de bord ?",
    answer:
      "Les droits suivent votre organigramme : un directeur d'agence voit son agence, la direction générale voit tout. Chaque consultation est journalisée.",
  },
  {
    question: "Et si nos données sont de mauvaise qualité ?",
    answer:
      "C'est le cas de tout le monde au départ. Les contrôles d'entrée rendent les problèmes visibles et corrigeables : c'est le premier bénéfice du projet, avant même les tableaux de bord.",
  },
];

/*
 * Ressources (thought leadership) — section prête mais NON publiée :
 * règle éditoriale = ne l'afficher qu'avec au moins un contenu réel téléchargeable.
 * À produire : guide « Les 12 indicateurs d'un comité de direction UEMOA »,
 * article « Le vrai coût du reporting Excel », checklist « Reporting BCEAO ».
 */
export const biResources = [
  {
    title: "Les 12 indicateurs que tout comité de direction UEMOA devrait suivre",
    type: "Guide",
    desc: "Téléchargement gratuit.",
  },
  {
    title: "Pourquoi vos rapports Excel vous coûtent plus cher qu'un entrepôt de données",
    type: "Point de vue",
    desc: "Article de fond.",
  },
  {
    title: "Reporting réglementaire : la checklist de production sans stress",
    type: "Checklist",
    desc: "Pour banques et SFD.",
  },
];
