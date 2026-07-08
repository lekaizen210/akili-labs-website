export const iaProofStats = [
  { value: "11+", label: "ans d'expérience", highlight: false },
  { value: "30+", label: "projets data & IA livrés", highlight: false },
  { value: "6", label: "pays UEMOA/CEDEAO", highlight: false },
  { value: "-28%", label: "d'impayés chez un client microfinance (scoring ML)", highlight: true },
];

export const iaValueProps = [
  { title: "Productivité", desc: "Automatiser les tâches répétitives libère du temps pour la création de valeur." },
  { title: "Précision", desc: "Des décisions basées sur les données plutôt que sur l'intuition seule." },
  { title: "Scalabilité", desc: "Servir 100 clients ou 100 000 avec la même infrastructure." },
  { title: "Compétitivité", desc: "Anticiper les tendances du marché avant vos concurrents." },
  { title: "Inclusion", desc: "Des solutions qui fonctionnent en français, dioula, hausa, twi, wolof — pas uniquement en anglais." },
];

export const iaDomains = [
  {
    id: "llm",
    title: "IA Générative & Grands Modèles de Langage (LLM)",
    icon: "MessagesSquare",
    items: [
      "Chatbots et assistants métier — un agent conversationnel formé sur votre documentation interne qui répond 24h/24 à vos clients et équipes",
      "RAG (Retrieval-Augmented Generation) — des systèmes qui interrogent vos bases de données internes et produisent des réponses précises et contextualisées",
      "Assistants de rédaction automatisée — génération de rapports, comptes rendus, fiches produits, communications commerciales",
      "Support multilingue — dialoguer en français, anglais et langues locales africaines",
    ],
    tech: ["OpenAI API (GPT-4o)", "Meta LLaMA 3", "Mistral AI", "LangChain", "LlamaIndex", "Ollama", "HuggingFace"],
  },
  {
    id: "ml",
    title: "Machine Learning & Modèles Prédictifs",
    icon: "TrendingUp",
    items: [
      "Prévision de la demande — anticiper les ventes par produit, par région, par saison",
      "Scoring de crédit et détection de fraude — évaluer le risque client en temps réel à partir de données transactionnelles Mobile Money inclus (chez un client microfinance : -28% d'impayés)",
      "Maintenance prédictive — détecter les pannes de machines avant qu'elles surviennent",
      "Segmentation client — clustering automatique pour des campagnes marketing ultra-ciblées",
      "Churn prediction — identifier les clients sur le point de vous quitter",
    ],
    tech: ["Python", "scikit-learn", "XGBoost", "LightGBM", "TensorFlow", "PyTorch", "MLflow"],
  },
  {
    id: "cv",
    title: "Computer Vision",
    icon: "ScanEye",
    items: [
      "Contrôle qualité automatisé — détection de défauts sur une ligne de production agro-alimentaire, textile ou industrielle",
      "Reconnaissance de documents — traitement automatique des pièces d'identité, reçus Mobile Money, bons de livraison",
      "Agriculture de précision — analyse de drones pour détecter les maladies des cultures, estimer les rendements",
      "Surveillance intelligente — analyse de flux vidéo, détection d'intrusions, comptage de personnes",
    ],
    tech: ["OpenCV", "YOLO v8/v9", "TensorFlow Lite", "Roboflow"],
  },
  {
    id: "nlp",
    title: "Traitement du Langage Naturel (NLP) & Langues Africaines",
    icon: "Languages",
    items: [
      "Analyse de sentiment — monitorer la réputation de votre marque sur les réseaux sociaux en temps réel",
      "Classification automatique — trier des milliers de tickets support, emails, formulaires",
      "Extraction d'informations — lire automatiquement des contrats, appels d'offres, rapports",
      "Speech-to-text — transcription des réunions, appels clients, messages vocaux WhatsApp",
    ],
    note: "Notre spécificité : fine-tuning de modèles NLP sur des données africaines — mélanges de langues (français + dioula, français + wolof) — pour des résultats réels sur le terrain.",
    tech: ["HuggingFace Transformers", "spaCy", "Whisper", "Masakhane NLP", "AfroNLP"],
  },
  {
    id: "data-eng",
    title: "Data Engineering & MLOps",
    icon: "Database",
    items: [
      "Audit et cartographie de vos données — identifier ce que vous avez, ce qui manque, ce qui est fiable",
      "Pipelines de données (ETL/ELT) — collecter, nettoyer, transformer depuis toutes vos sources (ERP, CRM, Mobile Money, IoT)",
      "Data Warehouse & Data Lake — architecture moderne pour des analyses rapides et fiables",
      "MLOps — déploiement continu des modèles, monitoring de la dérive, réentraînement automatique",
    ],
    tech: ["Apache Spark", "dbt", "Airbyte", "Apache Kafka", "MLflow", "Evidently AI", "Docker", "Kubernetes"],
  },
  {
    id: "bi",
    title: "Business Intelligence Augmentée",
    icon: "BarChart3",
    items: [
      "Dashboards intelligents — alertes automatiques sur les anomalies (ventes en chute, stock critique, retard de paiement)",
      "Rapports automatisés — génération et envoi automatique selon une fréquence définie",
      "Analyse des causes racines — l'IA identifie les facteurs explicatifs d'une variation de performance",
      "Self-service analytics — vos équipes posent des questions en langage naturel et obtiennent des graphiques en temps réel",
    ],
    tech: ["Power BI", "Metabase", "Apache Superset", "dbt", "OpenAI API (text-to-SQL)"],
  },
];

export const iaSectorUseCases = [
  { sector: "Commerce & Distribution", icon: "ShoppingBag", useCases: "Prévision demande, recommandation produit, chatbot", benefit: "Réduction ruptures de stock, hausse du panier moyen" },
  { sector: "Finance & Microfinance", icon: "Landmark", useCases: "Scoring crédit, détection fraude, analyse portefeuille", benefit: "Réduction impayés, octroi de crédit plus rapide" },
  { sector: "Agro-alimentaire", icon: "Wheat", useCases: "Contrôle qualité visuel, prévision récoltes, traçabilité", benefit: "Réduction des pertes, conformité export" },
  { sector: "Santé & Pharmacie", icon: "HeartPulse", useCases: "Aide au diagnostic, stocks médicaux prédictifs, triage", benefit: "Meilleure prise en charge, optimisation coûts" },
  { sector: "BTP & Immobilier", icon: "HardHat", useCases: "Suivi chantier par drone, estimation coûts, maintenance", benefit: "Réduction dépassements de budget et de délais" },
  { sector: "Télécoms & Utilities", icon: "Radio", useCases: "Prédiction churn, maintenance réseau, chatbot support", benefit: "Fidélisation clients, réduction pannes" },
  { sector: "RH & Recrutement", icon: "Users", useCases: "Screening CV, prédiction turnover, analyse engagement", benefit: "Réduction temps de recrutement, rétention talents" },
  { sector: "Logistique & Transport", icon: "Truck", useCases: "Optimisation itinéraires, prévision délais, anomalies", benefit: "Réduction coûts transport, ponctualité" },
  { sector: "ONG & Secteur Public", icon: "HandHeart", useCases: "Analyse données terrain, ciblage bénéficiaires", benefit: "Efficacité des programmes, transparence" },
];

export const iaPhases = [
  { phase: "1. Exploration & Cadrage", duration: "2–4 semaines", content: "Ateliers de découverte, audit des données, identification des cas d'usage à fort ROI.", livrable: "Rapport de cadrage avec recommandations priorisées" },
  { phase: "2. Proof of Concept", duration: "4–8 semaines", content: "Prototype fonctionnel sur périmètre limité, entraînement du modèle sur vos données réelles, évaluation des performances.", livrable: "POC validé avec métriques documentées" },
  { phase: "3. Industrialisation", duration: "6–16 semaines", content: "Développement de l'interface ou API, pipeline de données complet, tests de charge et sécurité, intégration avec vos systèmes existants.", livrable: "Solution déployée et documentée" },
  { phase: "4. Déploiement & Formation", duration: "2–4 semaines", content: "Mise en production, formation des utilisateurs et administrateurs, mise en place du monitoring.", livrable: "Solution en production + équipes formées" },
  { phase: "5. MCO & Amélioration continue", duration: "ongoing", content: "Monitoring des performances, réentraînement périodique, évolutions fonctionnelles, reporting mensuel.", livrable: "Feuille de route évolutive" },
];

export const iaWhyUs = [
  {
    title: "Souveraineté des données",
    desc: "Vos données ne servent jamais à entraîner un modèle tiers. Architectures on-premise, cloud privé ou hybride : vos données sensibles ne quittent pas votre périmètre de contrôle.",
  },
  {
    title: "Ancrage africain, expertise globale",
    desc: "Nos experts comprennent les réalités du terrain : qualité des données, connectivité variable, langues locales, contraintes réglementaires CEDEAO/OHADA. Nous adaptons, nous n'importons pas.",
  },
  {
    title: "Business First",
    desc: "Nous démarrons par votre problème métier, pas par la technologie. Chaque projet commence par : quel impact concret attendez-vous dans 6 mois ?",
  },
  {
    title: "Couverture complète",
    desc: "De la collecte de données brutes au dashboard de décision, nous couvrons toute la chaîne sans dépendance à un seul outil ou cloud provider.",
  },
  {
    title: "Double expertise ERP + IA",
    desc: "Rareté sur le marché africain : nous connectons votre solution IA à votre Odoo, votre CRM ou votre système bancaire sans friction.",
  },
];

export const iaKpis = [
  { value: "11+", label: "ans d'expérience en transformation digitale" },
  { value: "30+", label: "projets data & IA livrés" },
  { value: "9", label: "secteurs d'activité couverts" },
  { value: "6", label: "pays d'intervention (UEMOA/CEDEAO)" },
  { value: "4", label: "langues africaines intégrées dans nos modèles NLP" },
];

export const iaStack = [
  { category: "Langages & Frameworks", items: ["Python", "R", "SQL", "FastAPI", "Streamlit"] },
  { category: "ML & Deep Learning", items: ["scikit-learn", "XGBoost", "LightGBM", "TensorFlow", "PyTorch"] },
  { category: "IA Générative & LLM", items: ["OpenAI API", "Meta LLaMA 3", "Mistral AI", "LangChain", "LlamaIndex", "HuggingFace", "Ollama"] },
  { category: "Computer Vision", items: ["OpenCV", "YOLO v8/v9", "TensorFlow Lite", "Roboflow"] },
  { category: "NLP Africain", items: ["HuggingFace", "Whisper", "Masakhane", "AfroNLP"] },
  { category: "Data Engineering", items: ["Apache Spark", "dbt", "Airbyte", "Apache Kafka", "Airflow"] },
  { category: "MLOps", items: ["MLflow", "Evidently AI", "Docker", "Kubernetes"] },
  { category: "Business Intelligence", items: ["Power BI", "Metabase", "Apache Superset", "Looker Studio"] },
  { category: "Cloud", items: ["AWS", "Google Cloud", "Azure", "OVH", "On-premise Linux"] },
];

export const iaFaqs = [
  { question: "L'IA va-t-elle remplacer mes équipes ?", answer: "Non. L'IA excelle dans les tâches répétitives et volumineuses. Elle libère vos équipes pour des missions à forte valeur : relation client, créativité, décision stratégique. Les projets IA les plus réussis sont ceux où l'humain reste au centre." },
  { question: "Nos données sont-elles en sécurité ?", answer: "Absolument. Chiffrement des données en transit et au repos, contrôle d'accès strict, anonymisation, architecture déployable entièrement on-premise. Vos données ne quittent pas vos serveurs si vous l'exigez, et ne servent jamais à entraîner un modèle tiers." },
  { question: "Avons-nous assez de données pour commencer ?", answer: "Souvent oui. Lors du cadrage, nous auditons vos données existantes et définissons le minimum viable pour un POC probant. Dans certains cas, une phase de structuration des données précède l'IA." },
  { question: "Quel est le coût d'un projet IA ?", answer: "Il varie selon la complexité. Un chatbot simple peut démarrer en quelques semaines pour un budget accessible. Nous fournissons une estimation détaillée après la phase de cadrage, sans engagement de votre part." },
  { question: "Combien de temps pour voir des résultats ?", answer: "Un POC produit ses premiers résultats en 4 à 8 semaines. Le ROI positif est typiquement observable dans les 6 à 12 mois suivant le déploiement." },
  { question: "Pouvez-vous former nos équipes internes ?", answer: "Oui, c'est une priorité. Sensibilisation IA pour les dirigeants, formation pratique pour les équipes IT, montée en compétences data science pour vos développeurs. L'objectif : votre autonomie complète." },
];

export const iaResources = [
  { title: "L'IA en pratique pour les entreprises africaines — par où commencer ?", type: "Guide", desc: "20 pages, téléchargement gratuit." },
  { title: "Comment une institution de microfinance a réduit ses impayés de 28% grâce au Machine Learning", type: "Étude de cas", desc: "Retour d'expérience détaillé." },
  { title: "IA Générative & Entreprise : ce qui marche vraiment en 2026", type: "Webinar", desc: "Replay disponible sur demande." },
  { title: "Les 10 questions à poser avant de lancer un projet IA", type: "Checklist", desc: "Évaluer votre maturité data." },
];
