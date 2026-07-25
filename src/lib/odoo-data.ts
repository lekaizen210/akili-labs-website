import type { Localized } from "@/lib/i18n-content";

export const odooPhases = [
  {
    phase: { fr: "1. Initialisation", en: "1. Initialization" },
    content: { fr: "Kick-off, paramétrage de l'environnement, plan projet", en: "Kick-off, environment setup, project plan" },
    livrable: { fr: "Charte de projet", en: "Project charter" },
  },
  {
    phase: { fr: "2. Analyse", en: "2. Analysis" },
    content: { fr: "Ateliers métier, spécifications détaillées", en: "Business workshops, detailed specifications" },
    livrable: { fr: "Spécifications fonctionnelles validées", en: "Approved functional specifications" },
  },
  {
    phase: { fr: "3. Configuration", en: "3. Configuration" },
    content: { fr: "Paramétrage des modules, développements spécifiques", en: "Module configuration, custom development" },
    livrable: { fr: "Solution configurée et testée", en: "Configured and tested solution" },
  },
  {
    phase: { fr: "4. Recette & Formation", en: "4. UAT & Training" },
    content: { fr: "Tests utilisateurs (UAT), formation des équipes", en: "User acceptance testing (UAT), team training" },
    livrable: { fr: "PV de recette, supports de formation", en: "Acceptance report, training materials" },
  },
  {
    phase: { fr: "5. Go-live & Suivi", en: "5. Go-Live & Follow-up" },
    content: { fr: "Bascule en production, support post-démarrage", en: "Production cutover, post-launch support" },
    livrable: { fr: "Rapport de clôture, plan de maintenance", en: "Closure report, maintenance plan" },
  },
] satisfies { phase: Localized; content: Localized; livrable: Localized }[];

export const odooModuleCategories = [
  {
    category: { fr: "Gestion commerciale", en: "Sales & Commercial Management" },
    modules: [
      { label: { fr: "CRM", en: "CRM" }, icon: "crm" },
      { label: { fr: "Ventes", en: "Sales" }, icon: "sale" },
      { label: { fr: "Point de Vente (PoS)", en: "Point of Sale (PoS)" }, icon: "point_of_sale" },
      { label: { fr: "eCommerce", en: "eCommerce" }, icon: "website_sale" },
    ],
  },
  {
    category: { fr: "Gestion financière & comptable", en: "Financial & Accounting Management" },
    modules: [
      { label: { fr: "Comptabilité OHADA/SYSCOHADA", en: "OHADA/SYSCOHADA Accounting" }, icon: "account_accountant" },
      { label: { fr: "Facturation", en: "Invoicing" }, icon: "account" },
      { label: { fr: "Trésorerie", en: "Treasury" }, icon: "account_batch_payment" },
      { label: { fr: "Fiscalité locale", en: "Local Tax Compliance" }, icon: "l10n" },
    ],
  },
  {
    category: { fr: "Achats & Logistique", en: "Purchasing & Logistics" },
    modules: [
      { label: { fr: "Achats", en: "Purchase" }, icon: "purchase" },
      { label: { fr: "Stocks & Inventaire", en: "Inventory" }, icon: "stock" },
      { label: { fr: "Logistique", en: "Logistics" }, icon: "stock_barcode" },
    ],
  },
  {
    category: { fr: "Ressources Humaines", en: "Human Resources" },
    modules: [
      { label: { fr: "Employés", en: "Employees" }, icon: "hr" },
      { label: { fr: "Paie (CNPS, CGRAE)", en: "Payroll (CNPS, CGRAE)" }, icon: "hr_payroll" },
      { label: { fr: "Congés & Absences", en: "Time Off" }, icon: "hr_holidays" },
      { label: { fr: "Recrutement", en: "Recruitment" }, icon: "hr_recruitment" },
      { label: { fr: "Évaluations", en: "Appraisals" }, icon: "hr_appraisal" },
    ],
  },
  {
    category: { fr: "Gestion de projet & Services", en: "Project & Services Management" },
    modules: [
      { label: { fr: "Projets", en: "Project" }, icon: "project" },
      { label: { fr: "Feuilles de temps", en: "Timesheets" }, icon: "hr_timesheet" },
      { label: { fr: "Helpdesk", en: "Helpdesk" }, icon: "helpdesk" },
    ],
  },
  {
    category: { fr: "Production & Maintenance", en: "Production & Maintenance" },
    modules: [
      { label: { fr: "Fabrication (MRP)", en: "Manufacturing (MRP)" }, icon: "mrp" },
      { label: { fr: "Maintenance (GMAO)", en: "Maintenance (CMMS)" }, icon: "mrp_maintenance" },
      { label: { fr: "PLM", en: "PLM" }, icon: "mrp_plm" },
    ],
  },
  {
    category: { fr: "Marketing & Communication", en: "Marketing & Communication" },
    modules: [
      { label: { fr: "Email Marketing", en: "Email Marketing" }, icon: "mass_mailing" },
      { label: { fr: "Automatisation marketing", en: "Marketing Automation" }, icon: "marketing_automation" },
      { label: { fr: "Enquêtes", en: "Surveys" }, icon: "survey" },
    ],
  },
] satisfies { category: Localized; modules: { label: Localized; icon: string }[] }[];

export const odooServiceBlocks = [
  {
    title: { fr: "Développements spécifiques", en: "Custom Development" },
    icon: "Code2",
    items: [
      { fr: "Modules Odoo sur mesure (Python/XML)", en: "Custom Odoo modules (Python/XML)" },
      { fr: "Rapports personnalisés (QWeb, XLSX, PDF)", en: "Custom reports (QWeb, XLSX, PDF)" },
      { fr: "Tableaux de bord métier (KPI, BI)", en: "Business dashboards (KPIs, BI)" },
      { fr: "Intégrations API tierces (REST, XML-RPC, webhooks)", en: "Third-party API integrations (REST, XML-RPC, webhooks)" },
      { fr: "Connexion Mobile Money (Wave, Orange Money, MTN MoMo)", en: "Mobile Money connectors (Wave, Orange Money, MTN MoMo)" },
      { fr: "Portails clients et fournisseurs", en: "Customer and supplier portals" },
    ] satisfies Localized[],
  },
  {
    title: { fr: "Migration & Upgrade", en: "Migration & Upgrade" },
    icon: "RefreshCw",
    items: [
      { fr: "Migration depuis Odoo 12/14/15/16 → 19", en: "Migration from Odoo 12/14/15/16 → 19" },
      { fr: "Migration depuis Sage, CEGID, Dynamics, SAP B1", en: "Migration from Sage, CEGID, Dynamics, SAP B1" },
      { fr: "Audit et nettoyage des données", en: "Data audit and cleansing" },
      { fr: "Plan de continuité de service (zéro interruption)", en: "Service continuity plan (zero downtime)" },
    ] satisfies Localized[],
  },
  {
    title: { fr: "Formation & montée en compétences", en: "Training & Upskilling" },
    icon: "GraduationCap",
    items: [
      { fr: "Formation utilisateurs finaux (par profil métier)", en: "End-user training (by business role)" },
      { fr: "Formation administrateurs", en: "Administrator training" },
      { fr: "Formation développeurs (Python/Odoo, OWL/QWeb)", en: "Developer training (Python/Odoo, OWL/QWeb)" },
      { fr: "Ateliers de renforcement post go-live", en: "Post-go-live reinforcement workshops" },
    ] satisfies Localized[],
  },
] satisfies { title: Localized; icon: string; items: Localized[] }[];

export const odooHostingModes = [
  {
    mode: { fr: "Odoo.sh (Cloud officiel)", en: "Odoo.sh (Official Cloud)" },
    description: { fr: "Hébergement géré par Odoo SA, mises à jour automatiques", en: "Hosting managed by Odoo SA, automatic updates" },
    fit: { fr: "Entreprises souhaitant déléguer l'infrastructure", en: "Companies wanting to outsource infrastructure" },
  },
  {
    mode: { fr: "Cloud privé AKILI Labs", en: "AKILI Labs Private Cloud" },
    description: { fr: "Serveurs dédiés hébergés en Afrique (Abidjan)", en: "Dedicated servers hosted in Africa (Abidjan)" },
    fit: { fr: "Organisations sensibles à la souveraineté des données", en: "Organizations focused on data sovereignty" },
  },
  {
    mode: { fr: "On-premise", en: "On-Premise" },
    description: { fr: "Installation sur vos propres serveurs", en: "Installed on your own servers" },
    fit: { fr: "Entreprises avec politique IT interne stricte", en: "Companies with strict internal IT policies" },
  },
  {
    mode: { fr: "Hybride", en: "Hybrid" },
    description: { fr: "Combinaison cloud + on-premise par entité", en: "Cloud + on-premise combination per entity" },
    fit: { fr: "Groupes multi-sites et multi-pays", en: "Multi-site, multi-country groups" },
  },
] satisfies { mode: Localized; description: Localized; fit: Localized }[];

export const odooSupportTiers = [
  {
    level: { fr: "Essentiel", en: "Essential" },
    content: {
      fr: "Corrections des anomalies bloquantes, mises à jour réglementaires de paie pour les 5 pays, support par email, 4h/mois de TMA applicative.",
      en: "Blocking issue fixes, statutory payroll updates for 5 countries, email support, 4h/month of TMA.",
    },
    slaBlocking: "24h",
    slaSecondaryLabel: { fr: "Mineur : ", en: "Minor: " },
    slaSecondary: { fr: "5 jours ouvrés", en: "5 business days" },
  },
  {
    level: { fr: "Standard", en: "Standard" },
    content: {
      fr: "Inclus Essentiel + corrections des anomalies majeures, 8h/mois de TMA applicative, rapport trimestriel de suivi et mise à disposition de ressource sur site (1 jour/mois).",
      en: "Includes Essential + major issue fixes, 8h/month of TMA, quarterly follow-up report, and on-site resource availability (1 day/month).",
    },
    slaBlocking: "4h",
    slaSecondaryLabel: { fr: "Majeur : ", en: "Major: " },
    slaSecondary: { fr: "24h", en: "24h" },
  },
  {
    level: { fr: "Premium", en: "Premium" },
    content: {
      fr: "Inclus Standard + évolutions mineures, 16h/mois de TMA applicative, revue de sécurité semestrielle, support prioritaire et mise à disposition de ressource sur site (4 jours/mois).",
      en: "Includes Standard + minor enhancements, 16h/month of TMA, semi-annual security review, priority support, and on-site resource availability (4 days/month).",
    },
    slaBlocking: "2h",
    slaSecondaryLabel: { fr: "Majeur : ", en: "Major: " },
    slaSecondary: { fr: "8h", en: "8h" },
  },
] satisfies {
  level: Localized;
  content: Localized;
  slaBlocking: string;
  slaSecondaryLabel: Localized;
  slaSecondary: Localized;
}[];

export const odooSectorUseCases = [
  {
    sector: { fr: "Commerce & Distribution", en: "Trade & Distribution" },
    constraint: {
      fr: "Le stock multi-entrepôts et le point de vente ne tolèrent aucune interruption : PoS en mode dégradé, inventaires fiables, marges suivies en temps réel.",
      en: "Multi-warehouse inventory and point of sale cannot tolerate downtime: PoS in degraded mode, reliable inventory counts, margins tracked in real time.",
    },
    useCases: [
      { label: { fr: "CRM", en: "CRM" }, icon: "crm" },
      { label: { fr: "Ventes", en: "Sales" }, icon: "sale" },
      { label: { fr: "Achats", en: "Purchase" }, icon: "purchase" },
      { label: { fr: "Stock multi-entrepôts", en: "Multi-warehouse Inventory" }, icon: "stock" },
      { label: { fr: "PoS", en: "PoS" }, icon: "point_of_sale" },
    ],
  },
  {
    sector: { fr: "Industrie & Fabrication", en: "Industry & Manufacturing" },
    constraint: {
      fr: "La production s'arrête quand la maintenance improvise : ordres de fabrication, GMAO préventive et traçabilité qualité sur une seule plateforme.",
      en: "Production stalls when maintenance is improvised: manufacturing orders, preventive CMMS, and quality traceability on a single platform.",
    },
    useCases: [
      { label: { fr: "Production (MRP)", en: "Manufacturing (MRP)" }, icon: "mrp" },
      { label: { fr: "Maintenance (GMAO)", en: "Maintenance (CMMS)" }, icon: "mrp_maintenance" },
      { label: { fr: "Stock", en: "Inventory" }, icon: "stock" },
      { label: { fr: "Achats", en: "Purchase" }, icon: "purchase" },
      { label: { fr: "Qualité", en: "Quality" }, icon: "quality_control" },
    ],
  },
  {
    sector: { fr: "Finance & Microfinance", en: "Finance & Microfinance" },
    constraint: {
      fr: "Le régulateur ne négocie pas : comptabilité OHADA auditable, trésorerie consolidée, reporting réglementaire produit dans les délais.",
      en: "The regulator does not negotiate: auditable OHADA accounting, consolidated treasury, regulatory reporting delivered on time.",
    },
    useCases: [
      { label: { fr: "Comptabilité OHADA", en: "OHADA Accounting" }, icon: "account_accountant" },
      { label: { fr: "Facturation", en: "Invoicing" }, icon: "account" },
      { label: { fr: "Trésorerie", en: "Treasury" }, icon: "account_batch_payment" },
      { label: { fr: "Reporting réglementaire", en: "Regulatory Reporting" }, icon: "spreadsheet_dashboard" },
    ],
  },
  {
    sector: { fr: "BTP & Immobilier", en: "Construction & Real Estate" },
    constraint: {
      fr: "La rentabilité se joue chantier par chantier : suivi de projets, facturation à l'avancement, achats et stocks rattachés aux affaires.",
      en: "Profitability is decided site by site: project tracking, progress billing, and purchasing and inventory tied to each job.",
    },
    useCases: [
      { label: { fr: "Projets", en: "Project" }, icon: "project" },
      { label: { fr: "Maintenance", en: "Maintenance" }, icon: "maintenance" },
      { label: { fr: "Achats", en: "Purchase" }, icon: "purchase" },
      { label: { fr: "Stock", en: "Inventory" }, icon: "stock" },
      { label: { fr: "Facturation à l'avancement", en: "Progress Billing" }, icon: "account" },
      { label: { fr: "Comptabilité", en: "Accounting" }, icon: "account_accountant" },
    ],
  },
  {
    sector: { fr: "Services & Consulting", en: "Services & Consulting" },
    constraint: {
      fr: "Le temps est la matière première : feuilles de temps, facturation des missions et rentabilité par client sans ressaisie.",
      en: "Time is the raw material: timesheets, engagement billing, and per-client profitability without re-entering data.",
    },
    useCases: [
      { label: { fr: "Projets", en: "Project" }, icon: "project" },
      { label: { fr: "Feuilles de temps", en: "Timesheets" }, icon: "hr_timesheet" },
      { label: { fr: "Facturation", en: "Invoicing" }, icon: "account" },
      { label: { fr: "Comptabilité", en: "Accounting" }, icon: "account_accountant" },
      { label: { fr: "CRM", en: "CRM" }, icon: "crm" },
      { label: { fr: "Ventes", en: "Sales" }, icon: "sale" },
    ],
  },
  {
    sector: { fr: "ONG & Secteur Public", en: "NGOs & Public Sector" },
    constraint: {
      fr: "Les bailleurs exigent la traçabilité : budgets par projet, achats conformes aux procédures, reporting bailleurs à valeur probante.",
      en: "Donors demand traceability: per-project budgets, procurement-compliant purchasing, and audit-ready donor reporting.",
    },
    useCases: [
      { label: { fr: "Projets", en: "Project" }, icon: "project" },
      { label: { fr: "Budgets", en: "Budgets" }, icon: "account" },
      { label: { fr: "Achats", en: "Purchase" }, icon: "purchase" },
      { label: { fr: "Stock", en: "Inventory" }, icon: "stock" },
      { label: { fr: "RH", en: "HR" }, icon: "hr" },
      { label: { fr: "Reporting bailleurs", en: "Donor Reporting" }, icon: "spreadsheet_dashboard" },
    ],
  },
] satisfies { sector: Localized; constraint: Localized; useCases: { label: Localized; icon: string }[] }[];

export const odooSectorsSecondary = {
  fr: "Nous intervenons également en Santé & Pharmacie (traçabilité, péremption), Enseignement & Formation (eLearning, inscriptions) et Agro-alimentaire (FEFO, qualité).",
  en: "We also work in Healthcare & Pharmacy (traceability, expiry tracking), Education & Training (eLearning, enrollment), and Food & Agribusiness (FEFO, quality).",
} satisfies Localized;

export const odooConformitePiliers = [
  {
    title: { fr: "Comptabilité SYSCOHADA révisé", en: "Revised SYSCOHADA Accounting" },
    desc: {
      fr: "Plan comptable OHADA, états financiers réglementaires (Bilan, Compte de résultat, TAFIRE), journaux et liasses adaptés aux exigences des cabinets d'audit de la zone.",
      en: "OHADA chart of accounts, statutory financial statements (Balance Sheet, Income Statement, TAFIRE), journals and reporting packages that meet regional audit firm requirements.",
    },
  },
  {
    title: { fr: "Paie & social multi-pays", en: "Multi-country Payroll & Labor Compliance" },
    desc: {
      fr: "Cotisations CNPS/CGRAE, ITS, règles du droit du travail ivoirien et sous-régional ; mises à jour réglementaires de paie couvertes par nos contrats de support.",
      en: "CNPS/CGRAE contributions, ITS, Ivorian and regional labor law rules; statutory payroll updates covered by our support contracts.",
    },
  },
  {
    title: { fr: "Paiements & Mobile Money", en: "Payments & Mobile Money" },
    desc: {
      fr: "Connecteurs Wave, Orange Money, MTN MoMo ; rapprochement bancaire avec les banques de la place ; encaissements en XOF réconciliés sans ressaisie.",
      en: "Wave, Orange Money, and MTN MoMo connectors; bank reconciliation with local banks; XOF receipts reconciled without manual re-entry.",
    },
  },
  {
    title: { fr: "Contraintes d'infrastructure", en: "Infrastructure Constraints" },
    desc: {
      fr: "Architectures tolérantes aux coupures de connectivité, modes dégradés pour les points de vente, hébergement local possible.",
      en: "Architectures resilient to connectivity outages, degraded modes for points of sale, local hosting available.",
    },
  },
] satisfies { title: Localized; desc: Localized }[];

export const odooWhyUs = [
  {
    title: { fr: "Expertise terrain africaine", en: "On-the-Ground African Expertise" },
    desc: {
      fr: "OHADA, contraintes bancaires locales, Mobile Money, multilinguisme, instabilité réseau — conçu pour ce contexte, pas malgré lui.",
      en: "OHADA, local banking constraints, Mobile Money, multilingual environments, unstable networks — built for this context, not despite it.",
    },
  },
  {
    title: { fr: "Couverture fonctionnelle complète", en: "Complete Functional Coverage" },
    desc: {
      fr: "Du CRM à la GMAO, de la paie CNPS au reporting SYSCOHADA, sur une seule plateforme.",
      en: "From CRM to CMMS, from CNPS payroll to SYSCOHADA reporting, on a single platform.",
    },
  },
  {
    title: { fr: "Équipe expérimentée", en: "Experienced Team" },
    desc: {
      fr: "11+ ans d'expérience Odoo en Afrique, en Europe et au Moyen-Orient.",
      en: "11+ years of Odoo experience across Africa, Europe, and the Middle East.",
    },
  },
  {
    title: { fr: "Transparence et maîtrise des coûts", en: "Transparency and Cost Control" },
    desc: {
      fr: "Community 100% open source. Enterprise à tarifs adaptés. Pas de surcoûts cachés.",
      en: "Community edition 100% open source. Enterprise at fair pricing. No hidden costs.",
    },
  },
  {
    title: { fr: "Présence locale, vision globale", en: "Local Presence, Global Vision" },
    desc: {
      fr: "Basés à Abidjan, actifs sur toute la zone UEMOA/CEDEAO.",
      en: "Based in Abidjan, active across the UEMOA/ECOWAS zone.",
    },
  },
] satisfies { title: Localized; desc: Localized }[];

export const odooKpis = [
  { value: "100%", label: { fr: "des incidents critiques (P1) résolus dans les délais", en: "of critical incidents (P1) resolved on time" } },
  { value: "95%", label: { fr: "minimum d'incidents majeurs (P2) résolus à temps", en: "minimum of major incidents (P2) resolved on time" } },
  { value: "100%", label: { fr: "des projets avec transfert de compétences", en: "of projects with full knowledge transfer" } },
  { value: "11+", label: { fr: "ans d'expérience ERP", en: "years of ERP experience" } },
  { value: "6", label: { fr: "pays d'intervention (UEMOA/CEDEAO)", en: "countries served (UEMOA/ECOWAS)" } },
] satisfies { value: string; label: Localized }[];

export const odooResources = [
  {
    title: { fr: "Odoo Community vs Enterprise : comment choisir ?", en: "Odoo Community vs Enterprise: How to Choose?" },
    type: { fr: "Guide", en: "Guide" },
    desc: { fr: "Les différences clés et les critères de choix.", en: "Key differences and decision criteria." },
  },
  {
    title: { fr: "Les 10 questions à poser avant de démarrer un projet Odoo", en: "10 Questions to Ask Before Starting an Odoo Project" },
    type: { fr: "Checklist", en: "Checklist" },
    desc: { fr: "Un outil pratique pour cadrer votre projet.", en: "A practical tool to scope your project." },
  },
  {
    title: { fr: "Migration d'un ERP propriétaire vers Odoo", en: "Migrating from a Proprietary ERP to Odoo" },
    type: { fr: "Étude de cas", en: "Case Study" },
    desc: { fr: "Le parcours de migration d'une PME ouest-africaine, étape par étape.", en: "A step-by-step migration journey for a West African SME." },
  },
  {
    title: { fr: "Odoo et SYSCOHADA : paramétrer la comptabilité pour l'Afrique", en: "Odoo and SYSCOHADA: Configuring Accounting for Africa" },
    type: { fr: "Webinar", en: "Webinar" },
    desc: { fr: "60 minutes de démonstration en conditions réelles.", en: "60 minutes of live, real-world demonstration." },
  },
] satisfies { title: Localized; type: Localized; desc: Localized }[];

export const odooFaqs = [
  {
    question: { fr: "Odoo est-il adapté aux PME africaines ?", en: "Is Odoo suitable for African SMEs?" },
    answer: {
      fr: "Oui. Odoo est conçu pour s'adapter à toutes les tailles d'entreprises. La version Community (gratuite) convient parfaitement aux PME qui démarrent. La version Enterprise apporte des fonctionnalités avancées (reporting, studio, IoT) pour les organisations plus matures.",
      en: "Yes. Odoo is designed to scale to businesses of any size. The Community edition (free) is a great fit for SMEs just starting out. The Enterprise edition adds advanced features (reporting, Studio, IoT) for more mature organizations.",
    },
  },
  {
    question: { fr: "Quelle est la durée moyenne d'un projet Odoo ?", en: "How long does a typical Odoo project take?" },
    answer: {
      fr: "Un projet standard (3 à 5 modules) se déploie en 8 à 16 semaines. Les projets complexes (multi-sites, nombreux développements spécifiques) peuvent nécessiter 6 à 12 mois. Nous établissons un planning détaillé dès la phase de cadrage.",
      en: "A standard project (3 to 5 modules) is deployed in 8 to 16 weeks. Complex projects (multi-site, extensive custom development) can take 6 to 12 months. We build a detailed schedule during the scoping phase.",
    },
  },
  {
    question: { fr: "Peut-on intégrer Odoo avec des outils déjà en place ?", en: "Can Odoo be integrated with our existing tools?" },
    answer: {
      fr: "Oui. Odoo dispose d'une API ouverte (REST + XML-RPC) qui permet de le connecter à pratiquement n'importe quel système : solutions bancaires, Mobile Money, logiciels métier spécifiques, plateformes e-commerce, outils BI, etc.",
      en: "Yes. Odoo has an open API (REST + XML-RPC) that lets it connect to virtually any system: banking solutions, Mobile Money, specialized business software, e-commerce platforms, BI tools, and more.",
    },
  },
  {
    question: { fr: "Odoo respecte-t-il les normes comptables OHADA/SYSCOHADA ?", en: "Does Odoo comply with OHADA/SYSCOHADA accounting standards?" },
    answer: {
      fr: "Oui. AKILI Labs a développé une expertise spécifique sur la configuration du module Comptabilité d'Odoo pour respecter le Plan Comptable OHADA (SYSCOHADA révisé), incluant les états financiers réglementaires (Bilan, Compte de résultat, TAFIRE).",
      en: "Yes. AKILI Labs has developed specific expertise in configuring Odoo's Accounting module to comply with the OHADA chart of accounts (revised SYSCOHADA), including statutory financial statements (Balance Sheet, Income Statement, TAFIRE).",
    },
  },
  {
    question: { fr: "Qu'est-ce que le support post go-live inclut ?", en: "What does post-go-live support include?" },
    answer: {
      fr: "Nos contrats de support couvrent : correction des anomalies, assistance utilisateurs, mises à jour de sécurité, évolutions mineures et formations ponctuelles. Consultez notre grille tarifaire ou contactez-nous pour un devis personnalisé.",
      en: "Our support contracts cover: issue resolution, user assistance, security updates, minor enhancements, and one-off training sessions. Check our pricing grid or contact us for a tailored quote.",
    },
  },
  {
    question: { fr: "Proposez-vous des formations en dehors d'Abidjan ?", en: "Do you offer training outside Abidjan?" },
    answer: {
      fr: "Oui. Nous intervenons sur toute la zone UEMOA/CEDEAO (Dakar, Bamako, Lomé, Cotonou, Ouagadougou, Niamey…) et proposons également des formations à distance via visioconférence.",
      en: "Yes. We operate across the entire UEMOA/ECOWAS zone (Dakar, Bamako, Lomé, Cotonou, Ouagadougou, Niamey…) and also offer remote training via video conference.",
    },
  },
] satisfies { question: Localized; answer: Localized }[];
