import type { Localized } from "@/lib/i18n-content";

export const iaProofStats = [
  { value: "11+", label: { fr: "ans d'expérience", en: "years of experience" }, highlight: false },
  { value: "30+", label: { fr: "projets data & IA livrés", en: "data & AI projects delivered" }, highlight: false },
  { value: "6", label: { fr: "pays UEMOA/CEDEAO", en: "UEMOA/ECOWAS countries" }, highlight: false },
  {
    value: "-28%",
    label: { fr: "d'impayés chez un client microfinance (scoring ML)", en: "in unpaid loans for a microfinance client (ML scoring)" },
    highlight: true,
  },
] satisfies { value: string; label: Localized; highlight: boolean }[];

export const iaValueProps = [
  {
    title: { fr: "Productivité", en: "Productivity" },
    desc: {
      fr: "Les tâches répétitives (saisie, tri, reporting) absorbées par la machine ; vos équipes sur la relation client et la décision.",
      en: "Repetitive tasks (data entry, sorting, reporting) absorbed by the machine; your teams freed up for customer relationships and decision-making.",
    },
  },
  {
    title: { fr: "Précision", en: "Precision" },
    desc: {
      fr: "Des décisions fondées sur vos données réelles — transactions, Mobile Money, historique terrain — plutôt que sur l'intuition seule.",
      en: "Decisions grounded in your actual data — transactions, Mobile Money, field history — rather than intuition alone.",
    },
  },
  {
    title: { fr: "Scalabilité", en: "Scalability" },
    desc: {
      fr: "Servir 100 ou 100 000 clients avec la même infrastructure : le levier des marchés en croissance rapide.",
      en: "Serve 100 or 100,000 customers with the same infrastructure: the lever for fast-growing markets.",
    },
  },
  {
    title: { fr: "Inclusion", en: "Inclusion" },
    desc: {
      fr: "Des solutions qui fonctionnent en français, dioula, hausa, twi, wolof — pas uniquement en anglais.",
      en: "Solutions that work in French, Dioula, Hausa, Twi, Wolof — not just English.",
    },
  },
] satisfies { title: Localized; desc: Localized }[];

export const iaDomains = [
  {
    id: "llm",
    title: { fr: "IA Générative & Grands Modèles de Langage (LLM)", en: "Generative AI & Large Language Models (LLM)" },
    icon: "MessagesSquare",
    items: [
      {
        fr: "Chatbots et assistants métier — un agent conversationnel formé sur votre documentation interne qui répond 24h/24 à vos clients et équipes",
        en: "Chatbots and business assistants — a conversational agent trained on your internal documentation that answers your customers and teams around the clock",
      },
      {
        fr: "RAG (Retrieval-Augmented Generation) — des systèmes qui interrogent vos bases de données internes et produisent des réponses précises et contextualisées",
        en: "RAG (Retrieval-Augmented Generation) — systems that query your internal databases and produce precise, contextualized answers",
      },
      {
        fr: "Assistants de rédaction automatisée — génération de rapports, comptes rendus, fiches produits, communications commerciales",
        en: "Automated drafting assistants — generating reports, meeting minutes, product sheets, sales communications",
      },
      {
        fr: "Support multilingue — dialoguer en français, anglais et langues locales africaines",
        en: "Multilingual support — conversing in French, English, and local African languages",
      },
    ] satisfies Localized[],
    tech: ["OpenAI API (GPT-4o)", "Meta LLaMA 3", "Mistral AI", "LangChain", "LlamaIndex", "Ollama", "HuggingFace"],
  },
  {
    id: "ml",
    title: { fr: "Machine Learning & Modèles Prédictifs", en: "Machine Learning & Predictive Models" },
    icon: "TrendingUp",
    items: [
      {
        fr: "Prévision de la demande — anticiper les ventes par produit, par région, par saison",
        en: "Demand forecasting — anticipating sales by product, region, and season",
      },
      {
        fr: "Scoring de crédit et détection de fraude — évaluer le risque client en temps réel à partir de données transactionnelles Mobile Money inclus (chez un client microfinance : -28% d'impayés)",
        en: "Credit scoring and fraud detection — assessing customer risk in real time from transactional data, Mobile Money included (for a microfinance client: -28% in unpaid loans)",
      },
      {
        fr: "Maintenance prédictive — détecter les pannes de machines avant qu'elles surviennent",
        en: "Predictive maintenance — detecting machine failures before they happen",
      },
      {
        fr: "Segmentation client — clustering automatique pour des campagnes marketing ultra-ciblées",
        en: "Customer segmentation — automatic clustering for ultra-targeted marketing campaigns",
      },
      {
        fr: "Churn prediction — identifier les clients sur le point de vous quitter",
        en: "Churn prediction — identifying customers about to leave",
      },
    ] satisfies Localized[],
    tech: ["Python", "scikit-learn", "XGBoost", "LightGBM", "TensorFlow", "PyTorch", "MLflow"],
  },
  {
    id: "cv",
    title: { fr: "Computer Vision", en: "Computer Vision" },
    icon: "ScanEye",
    items: [
      {
        fr: "Contrôle qualité automatisé — détection de défauts sur une ligne de production agro-alimentaire, textile ou industrielle",
        en: "Automated quality control — defect detection on a food-processing, textile, or industrial production line",
      },
      {
        fr: "Reconnaissance de documents — traitement automatique des pièces d'identité, reçus Mobile Money, bons de livraison",
        en: "Document recognition — automatic processing of ID documents, Mobile Money receipts, delivery notes",
      },
      {
        fr: "Agriculture de précision — analyse de drones pour détecter les maladies des cultures, estimer les rendements",
        en: "Precision agriculture — drone imagery analysis to detect crop diseases and estimate yields",
      },
      {
        fr: "Surveillance intelligente — analyse de flux vidéo, détection d'intrusions, comptage de personnes",
        en: "Smart surveillance — video stream analysis, intrusion detection, people counting",
      },
    ] satisfies Localized[],
    tech: ["OpenCV", "YOLO v8/v9", "TensorFlow Lite", "Roboflow"],
  },
  {
    id: "nlp",
    title: { fr: "Traitement du Langage Naturel (NLP) & Langues Africaines", en: "Natural Language Processing (NLP) & African Languages" },
    icon: "Languages",
    items: [
      {
        fr: "Analyse de sentiment — monitorer la réputation de votre marque sur les réseaux sociaux en temps réel",
        en: "Sentiment analysis — monitoring your brand's reputation on social media in real time",
      },
      {
        fr: "Classification automatique — trier des milliers de tickets support, emails, formulaires",
        en: "Automatic classification — sorting thousands of support tickets, emails, forms",
      },
      {
        fr: "Extraction d'informations — lire automatiquement des contrats, appels d'offres, rapports",
        en: "Information extraction — automatically reading contracts, tenders, reports",
      },
      {
        fr: "Speech-to-text — transcription des réunions, appels clients, messages vocaux WhatsApp",
        en: "Speech-to-text — transcription of meetings, customer calls, WhatsApp voice messages",
      },
    ] satisfies Localized[],
    note: {
      fr: "Notre spécificité : fine-tuning de modèles NLP sur des données africaines — mélanges de langues (français + dioula, français + wolof) — pour des résultats réels sur le terrain.",
      en: "Our specialty: fine-tuning NLP models on African data — mixed languages (French + Dioula, French + Wolof) — for results that hold up in the field.",
    },
    tech: ["HuggingFace Transformers", "spaCy", "Whisper", "Masakhane NLP", "AfroNLP"],
  },
  {
    id: "data-eng",
    title: { fr: "Data Engineering & MLOps", en: "Data Engineering & MLOps" },
    icon: "Database",
    items: [
      {
        fr: "Audit et cartographie de vos données — identifier ce que vous avez, ce qui manque, ce qui est fiable",
        en: "Data audit and mapping — identifying what you have, what's missing, what's reliable",
      },
      {
        fr: "Pipelines de données (ETL/ELT) — collecter, nettoyer, transformer depuis toutes vos sources (ERP, CRM, Mobile Money, IoT)",
        en: "Data pipelines (ETL/ELT) — collecting, cleaning, and transforming data from all your sources (ERP, CRM, Mobile Money, IoT)",
      },
      {
        fr: "Data Warehouse & Data Lake — architecture moderne pour des analyses rapides et fiables",
        en: "Data Warehouse & Data Lake — modern architecture for fast, reliable analytics",
      },
      {
        fr: "MLOps — déploiement continu des modèles, monitoring de la dérive, réentraînement automatique",
        en: "MLOps — continuous model deployment, drift monitoring, automatic retraining",
      },
    ] satisfies Localized[],
    tech: ["Apache Spark", "dbt", "Airbyte", "Apache Kafka", "MLflow", "Evidently AI", "Docker", "Kubernetes"],
  },
  {
    id: "bi",
    title: { fr: "Business Intelligence Augmentée", en: "Augmented Business Intelligence" },
    icon: "BarChart3",
    items: [
      {
        fr: "Dashboards intelligents — alertes automatiques sur les anomalies (ventes en chute, stock critique, retard de paiement)",
        en: "Smart dashboards — automatic alerts on anomalies (falling sales, critical stock, payment delays)",
      },
      {
        fr: "Rapports automatisés — génération et envoi automatique selon une fréquence définie",
        en: "Automated reports — generation and delivery on a defined schedule",
      },
      {
        fr: "Analyse des causes racines — l'IA identifie les facteurs explicatifs d'une variation de performance",
        en: "Root cause analysis — AI identifies the factors behind a change in performance",
      },
      {
        fr: "Self-service analytics — vos équipes posent des questions en langage naturel et obtiennent des graphiques en temps réel",
        en: "Self-service analytics — your teams ask questions in natural language and get real-time charts",
      },
    ] satisfies Localized[],
    tech: ["Power BI", "Metabase", "Apache Superset", "dbt", "OpenAI API (text-to-SQL)"],
  },
] satisfies { id: string; title: Localized; icon: string; items: Localized[]; note?: Localized; tech: string[] }[];

export const iaSectorUseCases = [
  {
    sector: { fr: "Commerce & Distribution", en: "Trade & Distribution" },
    icon: "ShoppingBag",
    useCases: { fr: "Prévision demande, recommandation produit, chatbot", en: "Demand forecasting, product recommendation, chatbot" },
    benefit: { fr: "Réduction ruptures de stock, hausse du panier moyen", en: "Fewer stockouts, higher average basket size" },
  },
  {
    sector: { fr: "Finance & Microfinance", en: "Finance & Microfinance" },
    icon: "Landmark",
    useCases: { fr: "Scoring crédit, détection fraude, analyse portefeuille", en: "Credit scoring, fraud detection, portfolio analysis" },
    benefit: { fr: "Réduction impayés, octroi de crédit plus rapide", en: "Fewer unpaid loans, faster credit approval" },
  },
  {
    sector: { fr: "Agro-alimentaire", en: "Food & Agriculture" },
    icon: "Wheat",
    useCases: { fr: "Contrôle qualité visuel, prévision récoltes, traçabilité", en: "Visual quality control, harvest forecasting, traceability" },
    benefit: { fr: "Réduction des pertes, conformité export", en: "Reduced losses, export compliance" },
  },
  {
    sector: { fr: "Santé & Pharmacie", en: "Healthcare & Pharmacy" },
    icon: "HeartPulse",
    useCases: { fr: "Aide au diagnostic, stocks médicaux prédictifs, triage", en: "Diagnostic support, predictive medical stock, triage" },
    benefit: { fr: "Meilleure prise en charge, optimisation coûts", en: "Better patient care, cost optimization" },
  },
  {
    sector: { fr: "BTP & Immobilier", en: "Construction & Real Estate" },
    icon: "HardHat",
    useCases: { fr: "Suivi chantier par drone, estimation coûts, maintenance", en: "Drone-based site monitoring, cost estimation, maintenance" },
    benefit: { fr: "Réduction dépassements de budget et de délais", en: "Fewer budget and schedule overruns" },
  },
  {
    sector: { fr: "Télécoms & Utilities", en: "Telecoms & Utilities" },
    icon: "Radio",
    useCases: { fr: "Prédiction churn, maintenance réseau, chatbot support", en: "Churn prediction, network maintenance, support chatbot" },
    benefit: { fr: "Fidélisation clients, réduction pannes", en: "Customer retention, fewer outages" },
  },
  {
    sector: { fr: "RH & Recrutement", en: "HR & Recruitment" },
    icon: "Users",
    useCases: { fr: "Screening CV, prédiction turnover, analyse engagement", en: "Resume screening, turnover prediction, engagement analysis" },
    benefit: { fr: "Réduction temps de recrutement, rétention talents", en: "Shorter hiring time, talent retention" },
  },
  {
    sector: { fr: "Logistique & Transport", en: "Logistics & Transport" },
    icon: "Truck",
    useCases: { fr: "Optimisation itinéraires, prévision délais, anomalies", en: "Route optimization, lead-time forecasting, anomaly detection" },
    benefit: { fr: "Réduction coûts transport, ponctualité", en: "Lower transport costs, on-time performance" },
  },
  {
    sector: { fr: "ONG & Secteur Public", en: "NGOs & Public Sector" },
    icon: "HandHeart",
    useCases: { fr: "Analyse données terrain, ciblage bénéficiaires", en: "Field data analysis, beneficiary targeting" },
    benefit: { fr: "Efficacité des programmes, transparence", en: "Program effectiveness, transparency" },
  },
] satisfies { sector: Localized; icon: string; useCases: Localized; benefit: Localized }[];

export const iaPhases = [
  {
    phase: { fr: "1. Exploration & Cadrage", en: "1. Discovery & Scoping" },
    duration: { fr: "2–4 semaines", en: "2–4 weeks" },
    content: {
      fr: "Ateliers de découverte, audit des données, identification des cas d'usage à fort ROI.",
      en: "Discovery workshops, data audit, identification of high-ROI use cases.",
    },
    livrable: { fr: "Rapport de cadrage avec recommandations priorisées", en: "Scoping report with prioritized recommendations" },
  },
  {
    phase: { fr: "2. Proof of Concept", en: "2. Proof of Concept" },
    duration: { fr: "4–8 semaines", en: "4–8 weeks" },
    content: {
      fr: "Prototype fonctionnel sur périmètre limité, entraînement du modèle sur vos données réelles, évaluation des performances.",
      en: "Functional prototype on a limited scope, model training on your real data, performance evaluation.",
    },
    livrable: { fr: "POC validé avec métriques documentées", en: "Validated POC with documented metrics" },
  },
  {
    phase: { fr: "3. Industrialisation", en: "3. Industrialization" },
    duration: { fr: "6–16 semaines", en: "6–16 weeks" },
    content: {
      fr: "Développement de l'interface ou API, pipeline de données complet, tests de charge et sécurité, intégration avec vos systèmes existants.",
      en: "Interface or API development, complete data pipeline, load and security testing, integration with your existing systems.",
    },
    livrable: { fr: "Solution déployée et documentée", en: "Deployed and documented solution" },
  },
  {
    phase: { fr: "4. Déploiement & Formation", en: "4. Deployment & Training" },
    duration: { fr: "2–4 semaines", en: "2–4 weeks" },
    content: {
      fr: "Mise en production, formation des utilisateurs et administrateurs, mise en place du monitoring.",
      en: "Production rollout, training for users and administrators, monitoring setup.",
    },
    livrable: { fr: "Solution en production + équipes formées", en: "Solution in production + trained teams" },
  },
  {
    phase: { fr: "5. MCO & Amélioration continue", en: "5. Operations & Continuous Improvement" },
    duration: { fr: "ongoing", en: "ongoing" },
    content: {
      fr: "Monitoring des performances, réentraînement périodique, évolutions fonctionnelles, reporting mensuel.",
      en: "Performance monitoring, periodic retraining, functional enhancements, monthly reporting.",
    },
    livrable: { fr: "Feuille de route évolutive", en: "Evolving roadmap" },
  },
] satisfies { phase: Localized; duration: Localized; content: Localized; livrable: Localized }[];

export const iaWhyUs = [
  {
    title: { fr: "Souveraineté des données", en: "Data Sovereignty" },
    desc: {
      fr: "Vos données restent chez vous et n'entraînent jamais un modèle tiers.",
      en: "Your data stays with you and never trains a third-party model.",
    },
  },
  {
    title: { fr: "Ancrage africain, expertise globale", en: "African Roots, Global Expertise" },
    desc: {
      fr: "Nos experts comprennent les réalités du terrain : qualité des données, connectivité variable, langues locales, contraintes réglementaires CEDEAO/OHADA. Nous adaptons, nous n'importons pas.",
      en: "Our experts understand realities on the ground: data quality, variable connectivity, local languages, ECOWAS/OHADA regulatory constraints. We adapt — we don't import.",
    },
  },
  {
    title: { fr: "Business First", en: "Business First" },
    desc: {
      fr: "Nous démarrons par votre problème métier, pas par la technologie. Chaque projet commence par : quel impact concret attendez-vous dans 6 mois ?",
      en: "We start with your business problem, not the technology. Every project begins with one question: what concrete impact do you expect in 6 months?",
    },
  },
  {
    title: { fr: "Couverture complète", en: "Full-Chain Coverage" },
    desc: {
      fr: "De la collecte de données brutes au dashboard de décision, nous couvrons toute la chaîne sans dépendance à un seul outil ou cloud provider.",
      en: "From raw data collection to decision dashboards, we cover the entire chain without dependency on a single tool or cloud provider.",
    },
  },
  {
    title: { fr: "Double expertise ERP + IA", en: "Dual ERP + AI Expertise" },
    desc: {
      fr: "Rareté sur le marché africain : nous connectons votre solution IA à votre Odoo, votre CRM ou votre système bancaire sans friction.",
      en: "Rare in the African market: we connect your AI solution to your Odoo, your CRM, or your banking system, frictionlessly.",
    },
  },
] satisfies { title: Localized; desc: Localized }[];

export const iaKpis = [
  { value: "11+", label: { fr: "ans d'expérience en transformation digitale", en: "years of experience in digital transformation" } },
  { value: "30+", label: { fr: "projets data & IA livrés", en: "data & AI projects delivered" } },
  { value: "9", label: { fr: "secteurs d'activité couverts", en: "sectors covered" } },
  { value: "6", label: { fr: "pays d'intervention (UEMOA/CEDEAO)", en: "countries served (UEMOA/ECOWAS)" } },
  {
    value: "4",
    label: {
      fr: "langues africaines dans nos modèles NLP (dioula, hausa, twi, wolof)",
      en: "African languages in our NLP models (Dioula, Hausa, Twi, Wolof)",
    },
  },
] satisfies { value: string; label: Localized }[];

export const iaStack = [
  { category: { fr: "Langages & Frameworks", en: "Languages & Frameworks" }, items: ["Python", "R", "SQL", "FastAPI", "Streamlit"] },
  { category: { fr: "ML & Deep Learning", en: "ML & Deep Learning" }, items: ["scikit-learn", "XGBoost", "LightGBM", "TensorFlow", "PyTorch"] },
  {
    category: { fr: "IA Générative & LLM", en: "Generative AI & LLM" },
    items: ["OpenAI API", "Meta LLaMA 3", "Mistral AI", "LangChain", "LlamaIndex", "HuggingFace", "Ollama"],
  },
  { category: { fr: "Computer Vision", en: "Computer Vision" }, items: ["OpenCV", "YOLO v8/v9", "TensorFlow Lite", "Roboflow"] },
  { category: { fr: "NLP Africain", en: "African NLP" }, items: ["HuggingFace", "Whisper", "Masakhane", "AfroNLP"] },
  { category: { fr: "Data Engineering", en: "Data Engineering" }, items: ["Apache Spark", "dbt", "Airbyte", "Apache Kafka", "Airflow"] },
  { category: { fr: "MLOps", en: "MLOps" }, items: ["MLflow", "Evidently AI", "Docker", "Kubernetes"] },
  { category: { fr: "Business Intelligence", en: "Business Intelligence" }, items: ["Power BI", "Metabase", "Apache Superset", "Looker Studio"] },
  { category: { fr: "Cloud", en: "Cloud" }, items: ["AWS", "Google Cloud", "Azure", "OVH", "On-premise Linux"] },
] satisfies { category: Localized; items: string[] }[];

export const iaFaqs = [
  {
    question: { fr: "L'IA va-t-elle remplacer mes équipes ?", en: "Will AI replace my teams?" },
    answer: {
      fr: "Non. L'IA excelle dans les tâches répétitives et volumineuses. Elle libère vos équipes pour des missions à forte valeur : relation client, créativité, décision stratégique. Les projets IA les plus réussis sont ceux où l'humain reste au centre.",
      en: "No. AI excels at repetitive, high-volume tasks. It frees your teams for high-value work: customer relationships, creativity, strategic decisions. The most successful AI projects are the ones where people stay at the center.",
    },
  },
  {
    question: { fr: "Nos données sont-elles en sécurité ?", en: "Is our data secure?" },
    answer: {
      fr: "Absolument. Chiffrement des données en transit et au repos, contrôle d'accès strict, anonymisation, architecture déployable entièrement on-premise. Vos données ne quittent pas vos serveurs si vous l'exigez, et ne servent jamais à entraîner un modèle tiers.",
      en: "Absolutely. Data encryption in transit and at rest, strict access control, anonymization, an architecture that can be deployed fully on-premise. Your data never leaves your servers if you require it, and never trains a third-party model.",
    },
  },
  {
    question: { fr: "Avons-nous assez de données pour commencer ?", en: "Do we have enough data to get started?" },
    answer: {
      fr: "Souvent oui. Lors du cadrage, nous auditons vos données existantes et définissons le minimum viable pour un POC probant. Dans certains cas, une phase de structuration des données précède l'IA.",
      en: "Often, yes. During scoping, we audit your existing data and define the minimum viable dataset for a convincing POC. In some cases, a data structuring phase precedes the AI work.",
    },
  },
  {
    question: { fr: "Quel est le coût d'un projet IA ?", en: "What does an AI project cost?" },
    answer: {
      fr: "Il varie selon la complexité. Un chatbot simple peut démarrer en quelques semaines pour un budget accessible. Nous fournissons une estimation détaillée après la phase de cadrage, sans engagement de votre part.",
      en: "It varies with complexity. A simple chatbot can get started within a few weeks for an accessible budget. We provide a detailed estimate after the scoping phase, with no commitment on your part.",
    },
  },
  {
    question: { fr: "Combien de temps pour voir des résultats ?", en: "How long before we see results?" },
    answer: {
      fr: "Un POC produit ses premiers résultats en 4 à 8 semaines. Le ROI positif est typiquement observable dans les 6 à 12 mois suivant le déploiement.",
      en: "A POC delivers its first results in 4 to 8 weeks. Positive ROI is typically observable within 6 to 12 months of deployment.",
    },
  },
  {
    question: { fr: "Pouvez-vous former nos équipes internes ?", en: "Can you train our internal teams?" },
    answer: {
      fr: "Oui, c'est une priorité. Sensibilisation IA pour les dirigeants, formation pratique pour les équipes IT, montée en compétences data science pour vos développeurs. L'objectif : votre autonomie complète.",
      en: "Yes, it's a priority. AI awareness sessions for leadership, hands-on training for IT teams, data science upskilling for your developers. The goal: your complete autonomy.",
    },
  },
] satisfies { question: Localized; answer: Localized }[];

export const iaResources = [
  {
    title: {
      fr: "L'IA en pratique pour les entreprises africaines — par où commencer ?",
      en: "AI in Practice for African Businesses — Where to Start?",
    },
    type: { fr: "Guide", en: "Guide" },
    desc: { fr: "20 pages, téléchargement gratuit.", en: "20 pages, free download." },
  },
  {
    title: {
      fr: "Comment une institution de microfinance a réduit ses impayés de 28% grâce au Machine Learning",
      en: "How a Microfinance Institution Cut Unpaid Loans by 28% with Machine Learning",
    },
    type: { fr: "Étude de cas", en: "Case Study" },
    desc: { fr: "Retour d'expérience détaillé.", en: "Detailed case debrief." },
  },
  {
    title: { fr: "IA Générative & Entreprise : ce qui marche vraiment en 2026", en: "Generative AI & Business: What Actually Works in 2026" },
    type: { fr: "Webinar", en: "Webinar" },
    desc: { fr: "Replay disponible sur demande.", en: "Replay available on request." },
  },
  {
    title: { fr: "Les 10 questions à poser avant de lancer un projet IA", en: "10 Questions to Ask Before Launching an AI Project" },
    type: { fr: "Checklist", en: "Checklist" },
    desc: { fr: "Évaluer votre maturité data.", en: "Assess your data maturity." },
  },
] satisfies { title: Localized; type: Localized; desc: Localized }[];
