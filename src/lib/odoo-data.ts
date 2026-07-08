export const odooPhases = [
  { phase: "1. Initialisation", content: "Kick-off, paramétrage de l'environnement, plan projet", livrable: "Charte de projet" },
  { phase: "2. Analyse", content: "Ateliers métier, spécifications détaillées", livrable: "Spécifications fonctionnelles validées" },
  { phase: "3. Configuration", content: "Paramétrage des modules, développements spécifiques", livrable: "Solution configurée et testée" },
  { phase: "4. Recette & Formation", content: "Tests utilisateurs (UAT), formation des équipes", livrable: "PV de recette, supports de formation" },
  { phase: "5. Go-live & Suivi", content: "Bascule en production, support post-démarrage", livrable: "Rapport de clôture, plan de maintenance" },
];

export const odooModuleCategories = [
  { category: "Gestion commerciale", modules: ["CRM", "Ventes", "Point de Vente (PoS)", "eCommerce"] },
  { category: "Gestion financière & comptable", modules: ["Comptabilité OHADA/SYSCOHADA", "Facturation", "Trésorerie", "Fiscalité locale"] },
  { category: "Achats & Logistique", modules: ["Achats", "Stocks & Inventaire", "Logistique"] },
  { category: "Ressources Humaines", modules: ["Employés", "Paie (CNPS, CGRAE)", "Congés & Absences", "Recrutement", "Évaluations"] },
  { category: "Gestion de projet & Services", modules: ["Projets", "Feuilles de temps", "Helpdesk"] },
  { category: "Production & Maintenance", modules: ["Fabrication (MRP)", "Maintenance (GMAO)", "PLM"] },
  { category: "Marketing & Communication", modules: ["Email Marketing", "Automatisation marketing", "Enquêtes"] },
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
      "Migration depuis Odoo 12/14/15/16 → 17",
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
    useCases: [
      { label: "CRM", icon: "crm" },
      { label: "Ventes", icon: "sale" },
      { label: "Achats", icon: "purchase" },
      { label: "Stock multi-entrepôts", icon: "stock" },
      { label: "PoS", icon: "point_of_sale" },
    ],
  },
  {
    sector: "BTP & Immobilier",
    useCases: [
      { label: "Projets", icon: "project" },
      { label: "Maintenance", icon: "maintenance" },
      { label: "Achats", icon: "purchase" },
      { label: "Facturation à l'avancement", icon: "account" },
    ],
  },
  {
    sector: "Industrie & Fabrication",
    useCases: [
      { label: "Production (MRP)", icon: "mrp" },
      { label: "Maintenance (GMAO)", icon: "mrp_maintenance" },
      { label: "Stock", icon: "stock" },
      { label: "Qualité", icon: "quality_control" },
    ],
  },
  {
    sector: "Services & Consulting",
    useCases: [
      { label: "Projets", icon: "project" },
      { label: "Feuilles de temps", icon: "hr_timesheet" },
      { label: "Facturation", icon: "account" },
      { label: "CRM", icon: "crm" },
    ],
  },
  {
    sector: "Finance & Microfinance",
    useCases: [
      { label: "Comptabilité OHADA", icon: "account_accountant" },
      { label: "Trésorerie", icon: "account_batch_payment" },
      { label: "Reporting réglementaire", icon: "spreadsheet_dashboard" },
    ],
  },
  {
    sector: "Santé & Pharmacie",
    useCases: [
      { label: "Stocks médicaux", icon: "stock" },
      { label: "Traçabilité", icon: "product_expiry" },
      { label: "Facturation patients", icon: "account" },
    ],
  },
  {
    sector: "Enseignement & Formation",
    useCases: [
      { label: "eLearning", icon: "website_slides" },
      { label: "Inscriptions", icon: "event" },
      { label: "Facturation", icon: "account" },
      { label: "RH", icon: "hr" },
    ],
  },
  {
    sector: "Agro-alimentaire",
    useCases: [
      { label: "Traçabilité (FEFO)", icon: "product_expiry" },
      { label: "Production", icon: "mrp" },
      { label: "Qualité", icon: "quality_control" },
      { label: "Achats", icon: "purchase" },
    ],
  },
  {
    sector: "ONG & Secteur Public",
    useCases: [
      { label: "Projets", icon: "project" },
      { label: "Budgets", icon: "account" },
      { label: "Achats", icon: "purchase" },
      { label: "RH", icon: "hr" },
      { label: "Reporting bailleurs", icon: "spreadsheet_dashboard" },
    ],
  },
];

export const odooWhyUs = [
  { title: "Expertise terrain africaine", desc: "OHADA, contraintes bancaires locales, Mobile Money, multilinguisme, instabilité réseau — conçu pour ce contexte, pas malgré lui." },
  { title: "Couverture fonctionnelle complète", desc: "Du CRM à la GMAO, de la paie CNPS au reporting SYSCOHADA, sur une seule plateforme." },
  { title: "Équipe certifiée et expérimentée", desc: "11+ ans d'expérience Odoo en Afrique, en Europe et au Moyen-Orient." },
  { title: "Transparence et maîtrise des coûts", desc: "Community 100% open source. Enterprise à tarifs adaptés. Pas de surcoûts cachés." },
  { title: "Présence locale, vision globale", desc: "Basés à Abidjan, actifs sur toute la zone UEMOA/CEDEAO." },
];

export const odooKpis = [
  { value: "11+", label: "ans d'expérience ERP" },
  { value: "50+", label: "projets Odoo livrés" },
  { value: "8", label: "secteurs d'activité couverts" },
  { value: "6", label: "pays d'intervention (UEMOA/CEDEAO)" },
  { value: "100%", label: "des projets avec transfert de compétences" },
];

export const odooResources = [
  { title: "Odoo Community vs Enterprise : comment choisir ?", type: "Guide", desc: "Les différences clés et les critères de choix." },
  { title: "Les 10 questions à poser avant de démarrer un projet Odoo", type: "Checklist", desc: "Un outil pratique pour cadrer votre projet." },
  { title: "Migration d'un ERP propriétaire vers Odoo 17", type: "Étude de cas", desc: "Comment une PME ivoirienne a réduit ses coûts IT de 40%." },
  { title: "Odoo et SYSCOHADA : paramétrer la comptabilité pour l'Afrique", type: "Webinar", desc: "60 minutes de démonstration en conditions réelles." },
];

export const odooFaqs = [
  { question: "Odoo est-il adapté aux PME africaines ?", answer: "Oui. Odoo est conçu pour s'adapter à toutes les tailles d'entreprises. La version Community (gratuite) convient parfaitement aux PME qui démarrent. La version Enterprise apporte des fonctionnalités avancées (reporting, studio, IoT) pour les organisations plus matures." },
  { question: "Quelle est la durée moyenne d'un projet Odoo ?", answer: "Un projet standard (3 à 5 modules) se déploie en 8 à 16 semaines. Les projets complexes (multi-sites, nombreux développements spécifiques) peuvent nécessiter 6 à 12 mois. Nous établissons un planning détaillé dès la phase de cadrage." },
  { question: "Peut-on intégrer Odoo avec des outils déjà en place ?", answer: "Oui. Odoo dispose d'une API ouverte (REST + XML-RPC) qui permet de le connecter à pratiquement n'importe quel système : solutions bancaires, Mobile Money, logiciels métier spécifiques, plateformes e-commerce, outils BI, etc." },
  { question: "Odoo respecte-t-il les normes comptables OHADA/SYSCOHADA ?", answer: "Oui. AKILI Labs a développé une expertise spécifique sur la configuration du module Comptabilité d'Odoo pour respecter le Plan Comptable OHADA (SYSCOHADA révisé), incluant les états financiers réglementaires (Bilan, Compte de résultat, TAFIRE)." },
  { question: "Qu'est-ce que le support post go-live inclut ?", answer: "Nos contrats de support couvrent : correction des anomalies, assistance utilisateurs, mises à jour de sécurité, évolutions mineures et formations ponctuelles. Consultez notre grille tarifaire ou contactez-nous pour un devis personnalisé." },
  { question: "Proposez-vous des formations en dehors d'Abidjan ?", answer: "Oui. Nous intervenons sur toute la zone UEMOA/CEDEAO (Dakar, Bamako, Lomé, Cotonou, Ouagadougou, Niamey…) et proposons également des formations à distance via visioconférence." },
];
