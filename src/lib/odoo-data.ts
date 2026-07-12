export const odooPhases = [
  { phase: "1. Initialisation", content: "Kick-off, paramétrage de l'environnement, plan projet", livrable: "Charte de projet" },
  { phase: "2. Analyse", content: "Ateliers métier, spécifications détaillées", livrable: "Spécifications fonctionnelles validées" },
  { phase: "3. Configuration", content: "Paramétrage des modules, développements spécifiques", livrable: "Solution configurée et testée" },
  { phase: "4. Recette & Formation", content: "Tests utilisateurs (UAT), formation des équipes", livrable: "PV de recette, supports de formation" },
  { phase: "5. Go-live & Suivi", content: "Bascule en production, support post-démarrage", livrable: "Rapport de clôture, plan de maintenance" },
];

export const odooModuleCategories = [
  {
    category: "Gestion commerciale",
    modules: [
      { label: "CRM", icon: "crm" },
      { label: "Ventes", icon: "sale" },
      { label: "Point de Vente (PoS)", icon: "point_of_sale" },
      { label: "eCommerce", icon: "website_sale" },
    ],
  },
  {
    category: "Gestion financière & comptable",
    modules: [
      { label: "Comptabilité OHADA/SYSCOHADA", icon: "account_accountant" },
      { label: "Facturation", icon: "account" },
      { label: "Trésorerie", icon: "account_batch_payment" },
      { label: "Fiscalité locale", icon: "l10n" },
    ],
  },
  {
    category: "Achats & Logistique",
    modules: [
      { label: "Achats", icon: "purchase" },
      { label: "Stocks & Inventaire", icon: "stock" },
      { label: "Logistique", icon: "stock_barcode" },
    ],
  },
  {
    category: "Ressources Humaines",
    modules: [
      { label: "Employés", icon: "hr" },
      { label: "Paie (CNPS, CGRAE)", icon: "hr_payroll" },
      { label: "Congés & Absences", icon: "hr_holidays" },
      { label: "Recrutement", icon: "hr_recruitment" },
      { label: "Évaluations", icon: "hr_appraisal" },
    ],
  },
  {
    category: "Gestion de projet & Services",
    modules: [
      { label: "Projets", icon: "project" },
      { label: "Feuilles de temps", icon: "hr_timesheet" },
      { label: "Helpdesk", icon: "helpdesk" },
    ],
  },
  {
    category: "Production & Maintenance",
    modules: [
      { label: "Fabrication (MRP)", icon: "mrp" },
      { label: "Maintenance (GMAO)", icon: "mrp_maintenance" },
      { label: "PLM", icon: "mrp_plm" },
    ],
  },
  {
    category: "Marketing & Communication",
    modules: [
      { label: "Email Marketing", icon: "mass_mailing" },
      { label: "Automatisation marketing", icon: "marketing_automation" },
      { label: "Enquêtes", icon: "survey" },
    ],
  },
];

export const odooServiceBlocks = [
  {
    title: "Développements spécifiques",
    icon: "Code2",
    items: [
      "Modules Odoo sur mesure (Python/XML)",
      "Rapports personnalisés (QWeb, XLSX, PDF)",
      "Tableaux de bord métier (KPI, BI)",
      "Intégrations API tierces (REST, XML-RPC, webhooks)",
      "Connexion Mobile Money (Wave, Orange Money, MTN MoMo)",
      "Portails clients et fournisseurs",
    ],
  },
  {
    title: "Migration & Upgrade",
    icon: "RefreshCw",
    items: [
      "Migration depuis Odoo 12/14/15/16 → 19",
      "Migration depuis Sage, CEGID, Dynamics, SAP B1",
      "Audit et nettoyage des données",
      "Plan de continuité de service (zéro interruption)",
    ],
  },
  {
    title: "Formation & montée en compétences",
    icon: "GraduationCap",
    items: [
      "Formation utilisateurs finaux (par profil métier)",
      "Formation administrateurs",
      "Formation développeurs (Python/Odoo, OWL/QWeb)",
      "Ateliers de renforcement post go-live",
    ],
  },
];

export const odooHostingModes = [
  { mode: "Odoo.sh (Cloud officiel)", description: "Hébergement géré par Odoo SA, mises à jour automatiques", fit: "Entreprises souhaitant déléguer l'infrastructure" },
  { mode: "Cloud privé AKILI Labs", description: "Serveurs dédiés hébergés en Afrique (Abidjan)", fit: "Organisations sensibles à la souveraineté des données" },
  { mode: "On-premise", description: "Installation sur vos propres serveurs", fit: "Entreprises avec politique IT interne stricte" },
  { mode: "Hybride", description: "Combinaison cloud + on-premise par entité", fit: "Groupes multi-sites et multi-pays" },
];

export const odooSupportTiers = [
  {
    level: "Essentiel",
    content:
      "Corrections des anomalies bloquantes, mises à jour réglementaires de paie pour les 5 pays, support par email, 4h/mois de TMA applicative.",
    slaBlocking: "24h",
    slaSecondaryLabel: "Mineur",
    slaSecondary: "5 jours ouvrés",
  },
  {
    level: "Standard",
    content:
      "Inclus Essentiel + corrections des anomalies majeures, 8h/mois de TMA applicative, rapport trimestriel de suivi et mise à disposition de ressource sur site (1 jour/mois).",
    slaBlocking: "4h",
    slaSecondaryLabel: "Majeur",
    slaSecondary: "24h",
  },
  {
    level: "Premium",
    content:
      "Inclus Standard + évolutions mineures, 16h/mois de TMA applicative, revue de sécurité semestrielle, support prioritaire et mise à disposition de ressource sur site (4 jours/mois).",
    slaBlocking: "2h",
    slaSecondaryLabel: "Majeur",
    slaSecondary: "8h",
  },
];

export const odooSectorUseCases = [
  {
    sector: "Commerce & Distribution",
    constraint:
      "Le stock multi-entrepôts et le point de vente ne tolèrent aucune interruption : PoS en mode dégradé, inventaires fiables, marges suivies en temps réel.",
    useCases: [
      { label: "CRM", icon: "crm" },
      { label: "Ventes", icon: "sale" },
      { label: "Achats", icon: "purchase" },
      { label: "Stock multi-entrepôts", icon: "stock" },
      { label: "PoS", icon: "point_of_sale" },
    ],
  },
  {
    sector: "Industrie & Fabrication",
    constraint:
      "La production s'arrête quand la maintenance improvise : ordres de fabrication, GMAO préventive et traçabilité qualité sur une seule plateforme.",
    useCases: [
      { label: "Production (MRP)", icon: "mrp" },
      { label: "Maintenance (GMAO)", icon: "mrp_maintenance" },
      { label: "Stock", icon: "stock" },
      { label: "Achats", icon: "purchase" },
      { label: "Qualité", icon: "quality_control" },
    ],
  },
  {
    sector: "Finance & Microfinance",
    constraint:
      "Le régulateur ne négocie pas : comptabilité OHADA auditable, trésorerie consolidée, reporting réglementaire produit dans les délais.",
    useCases: [
      { label: "Comptabilité OHADA", icon: "account_accountant" },
      { label: "Facturation", icon: "account" },
      { label: "Trésorerie", icon: "account_batch_payment" },
      { label: "Reporting réglementaire", icon: "spreadsheet_dashboard" },
    ],
  },
  {
    sector: "BTP & Immobilier",
    constraint:
      "La rentabilité se joue chantier par chantier : suivi de projets, facturation à l'avancement, achats et stocks rattachés aux affaires.",
    useCases: [
      { label: "Projets", icon: "project" },
      { label: "Maintenance", icon: "maintenance" },
      { label: "Achats", icon: "purchase" },
      { label: "Stock", icon: "stock" },
      { label: "Facturation à l'avancement", icon: "account" },
      { label: "Comptabilité", icon: "account_accountant" },
    ],
  },
  {
    sector: "Services & Consulting",
    constraint:
      "Le temps est la matière première : feuilles de temps, facturation des missions et rentabilité par client sans ressaisie.",
    useCases: [
      { label: "Projets", icon: "project" },
      { label: "Feuilles de temps", icon: "hr_timesheet" },
      { label: "Facturation", icon: "account" },
      { label: "Comptabilité", icon: "account_accountant" },
      { label: "CRM", icon: "crm" },
      { label: "Ventes", icon: "sale" },
    ],
  },
  {
    sector: "ONG & Secteur Public",
    constraint:
      "Les bailleurs exigent la traçabilité : budgets par projet, achats conformes aux procédures, reporting bailleurs à valeur probante.",
    useCases: [
      { label: "Projets", icon: "project" },
      { label: "Budgets", icon: "account" },
      { label: "Achats", icon: "purchase" },
      { label: "Stock", icon: "stock" },
      { label: "RH", icon: "hr" },
      { label: "Reporting bailleurs", icon: "spreadsheet_dashboard" },
    ],
  },
];

export const odooSectorsSecondary =
  "Nous intervenons également en Santé & Pharmacie (traçabilité, péremption), Enseignement & Formation (eLearning, inscriptions) et Agro-alimentaire (FEFO, qualité).";

export const odooConformitePiliers = [
  {
    title: "Comptabilité SYSCOHADA révisé",
    desc: "Plan comptable OHADA, états financiers réglementaires (Bilan, Compte de résultat, TAFIRE), journaux et liasses adaptés aux exigences des cabinets d'audit de la zone.",
  },
  {
    title: "Paie & social multi-pays",
    desc: "Cotisations CNPS/CGRAE, ITS, règles du droit du travail ivoirien et sous-régional ; mises à jour réglementaires de paie couvertes par nos contrats de support.",
  },
  {
    title: "Paiements & Mobile Money",
    desc: "Connecteurs Wave, Orange Money, MTN MoMo ; rapprochement bancaire avec les banques de la place ; encaissements en XOF réconciliés sans ressaisie.",
  },
  {
    title: "Contraintes d'infrastructure",
    desc: "Architectures tolérantes aux coupures de connectivité, modes dégradés pour les points de vente, hébergement local possible.",
  },
];

export const odooWhyUs = [
  { title: "Expertise terrain africaine", desc: "OHADA, contraintes bancaires locales, Mobile Money, multilinguisme, instabilité réseau — conçu pour ce contexte, pas malgré lui." },
  { title: "Couverture fonctionnelle complète", desc: "Du CRM à la GMAO, de la paie CNPS au reporting SYSCOHADA, sur une seule plateforme." },
  { title: "Équipe expérimentée", desc: "11+ ans d'expérience Odoo en Afrique, en Europe et au Moyen-Orient." },
  { title: "Transparence et maîtrise des coûts", desc: "Community 100% open source. Enterprise à tarifs adaptés. Pas de surcoûts cachés." },
  { title: "Présence locale, vision globale", desc: "Basés à Abidjan, actifs sur toute la zone UEMOA/CEDEAO." },
];

export const odooKpis = [
  { value: "100%", label: "des incidents critiques (P1) résolus dans les délais" },
  { value: "95%", label: "minimum d'incidents majeurs (P2) résolus à temps" },
  { value: "100%", label: "des projets avec transfert de compétences" },
  { value: "11+", label: "ans d'expérience ERP" },
  { value: "6", label: "pays d'intervention (UEMOA/CEDEAO)" },
];

export const odooResources = [
  { title: "Odoo Community vs Enterprise : comment choisir ?", type: "Guide", desc: "Les différences clés et les critères de choix." },
  { title: "Les 10 questions à poser avant de démarrer un projet Odoo", type: "Checklist", desc: "Un outil pratique pour cadrer votre projet." },
  { title: "Migration d'un ERP propriétaire vers Odoo", type: "Étude de cas", desc: "Le parcours de migration d'une PME ouest-africaine, étape par étape." },
  { title: "Odoo et SYSCOHADA : paramétrer la comptabilité pour l'Afrique", type: "Webinar", desc: "60 minutes de démonstration en conditions réelles." },
];

export const odooFaqs = [
  { question: "Odoo est-il adapté aux PME africaines ?", answer: "Oui. Odoo est conçu pour s'adapter à toutes les tailles d'entreprises. La version Community (gratuite) convient parfaitement aux PME qui démarrent. La version Enterprise apporte des fonctionnalités avancées (reporting, studio, IoT) pour les organisations plus matures." },
  { question: "Quelle est la durée moyenne d'un projet Odoo ?", answer: "Un projet standard (3 à 5 modules) se déploie en 8 à 16 semaines. Les projets complexes (multi-sites, nombreux développements spécifiques) peuvent nécessiter 6 à 12 mois. Nous établissons un planning détaillé dès la phase de cadrage." },
  { question: "Peut-on intégrer Odoo avec des outils déjà en place ?", answer: "Oui. Odoo dispose d'une API ouverte (REST + XML-RPC) qui permet de le connecter à pratiquement n'importe quel système : solutions bancaires, Mobile Money, logiciels métier spécifiques, plateformes e-commerce, outils BI, etc." },
  { question: "Odoo respecte-t-il les normes comptables OHADA/SYSCOHADA ?", answer: "Oui. AKILI Labs a développé une expertise spécifique sur la configuration du module Comptabilité d'Odoo pour respecter le Plan Comptable OHADA (SYSCOHADA révisé), incluant les états financiers réglementaires (Bilan, Compte de résultat, TAFIRE)." },
  { question: "Qu'est-ce que le support post go-live inclut ?", answer: "Nos contrats de support couvrent : correction des anomalies, assistance utilisateurs, mises à jour de sécurité, évolutions mineures et formations ponctuelles. Consultez notre grille tarifaire ou contactez-nous pour un devis personnalisé." },
  { question: "Proposez-vous des formations en dehors d'Abidjan ?", answer: "Oui. Nous intervenons sur toute la zone UEMOA/CEDEAO (Dakar, Bamako, Lomé, Cotonou, Ouagadougou, Niamey…) et proposons également des formations à distance via visioconférence." },
];
