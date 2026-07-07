# Page "Expertise Odoo" — Design

Date : 2026-07-07
Statut : Approuvé (architecture) — en attente de revue de la spec complète

## Contexte

Le site `akili-labs-website` (Next.js 16 App Router, Tailwind 4, Framer Motion) dispose déjà d'une fiche expertise générique "ERP" (slug `erp`, via `src/app/expertises/[slug]/page.tsx`) qui couvre Odoo/SAP/Oracle/Sage avec un template court (services + CTA). Le contenu Odoo fourni par l'utilisateur est beaucoup plus riche (9 sections : hero, problématique, expertise détaillée, méthodologie, secteurs, différenciateurs, chiffres clés, ressources, FAQ, CTA final) et mérite sa propre page.

Décisions déjà validées avec l'utilisateur :
- Route dédiée `/expertises/odoo`, distincte de la fiche générique `erp`.
- Animations en Framer Motion (déjà utilisé partout sur le site), pas d'ajout de GSAP.
- Maillage : uniquement un lien depuis la fiche `/expertises/erp` vers `/expertises/odoo`. Pas d'ajout à la nav principale, au footer, ni à la homepage.
- Section "Ressources" (guide, checklist, étude de cas, webinar) : cartes non-cliquables "bientôt disponible", aucun contenu factice.

## Arborescence des fichiers

```
src/lib/odoo-data.ts                      (nouveau — données structurées de la page)
src/app/expertises/odoo/page.tsx          (nouveau — route + metadata + JSON-LD)
src/components/odoo/OdooHero.tsx          (nouveau)
src/components/odoo/OdooIntro.tsx         (nouveau)
src/components/odoo/OdooImplementation.tsx (nouveau)
src/components/odoo/OdooModules.tsx       (nouveau)
src/components/odoo/OdooServices.tsx      (nouveau)
src/components/odoo/OdooHostingSupport.tsx (nouveau)
src/components/odoo/OdooApproach.tsx      (nouveau)
src/components/odoo/OdooSectors.tsx       (nouveau)
src/components/odoo/OdooWhyUs.tsx         (nouveau)
src/components/odoo/OdooStats.tsx         (nouveau)
src/components/odoo/OdooResources.tsx     (nouveau)
src/components/odoo/OdooFaq.tsx           (nouveau)
src/components/odoo/OdooCtaFinal.tsx      (nouveau)
src/app/expertises/[slug]/page.tsx        (modifié — ajout CTA conditionnel vers /expertises/odoo)
```

Composants réutilisés tels quels (aucune modification) :
- `src/components/ui/PageHero.tsx` (+ `HeroHighlight`)
- `src/components/ui/motion-primitives.tsx` (`FadeUp`, `StaggerContainer`, `StaggerItem`, variants)
- `src/lib/utils.ts` (`cn`)

## Modèle de données (`src/lib/odoo-data.ts`)

```typescript
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
  { title: "Développements spécifiques", icon: "Code2", items: [
    "Modules Odoo sur mesure (Python/XML)",
    "Rapports personnalisés (QWeb, XLSX, PDF)",
    "Tableaux de bord métier (KPI, BI)",
    "Intégrations API tierces (REST, XML-RPC, webhooks)",
    "Connexion Mobile Money (Wave, Orange Money, MTN MoMo)",
    "Portails clients et fournisseurs",
  ]},
  { title: "Migration & Upgrade", icon: "RefreshCw", items: [
    "Migration depuis Odoo 12/14/15/16 → 17",
    "Migration depuis Sage, CEGID, Dynamics, SAP B1",
    "Audit et nettoyage des données",
    "Plan de continuité de service (zéro interruption)",
  ]},
  { title: "Formation & montée en compétences", icon: "GraduationCap", items: [
    "Formation utilisateurs finaux (par profil métier)",
    "Formation administrateurs",
    "Formation développeurs (Python/Odoo, OWL/QWeb)",
    "Ateliers de renforcement post go-live",
  ]},
];

export const odooHostingModes = [
  { mode: "Odoo.sh (Cloud officiel)", description: "Hébergement géré par Odoo SA, mises à jour automatiques", fit: "Entreprises souhaitant déléguer l'infrastructure" },
  { mode: "Cloud privé AKILI Labs", description: "Serveurs dédiés hébergés en Afrique (Abidjan)", fit: "Organisations sensibles à la souveraineté des données" },
  { mode: "On-premise", description: "Installation sur vos propres serveurs", fit: "Entreprises avec politique IT interne stricte" },
  { mode: "Hybride", description: "Combinaison cloud + on-premise par entité", fit: "Groupes multi-sites et multi-pays" },
];

export const odooSupportTiers = [
  { level: "Support Standard", content: "Assistance par tickets, documentation, correctifs", delay: "48h ouvrées" },
  { level: "Support Prioritaire", content: "Hotline dédiée, intervention sous 4h, mises à jour régulières", delay: "4h ouvrées" },
  { level: "Support Full-Service", content: "MCO complète, évolutions, formations incluses, bilan mensuel", delay: "1h ouvrée" },
];

export const odooSectorUseCases = [
  { sector: "Commerce & Distribution", useCases: "CRM, Ventes, Achats, Stock multi-entrepôts, PoS" },
  { sector: "BTP & Immobilier", useCases: "Projets, Maintenance, Achats, Facturation à l'avancement" },
  { sector: "Industrie & Fabrication", useCases: "Production (MRP), Maintenance (GMAO), Stock, Qualité" },
  { sector: "Services & Consulting", useCases: "Projets, Feuilles de temps, Facturation, CRM" },
  { sector: "Finance & Microfinance", useCases: "Comptabilité OHADA, Trésorerie, Reporting réglementaire" },
  { sector: "Santé & Pharmacie", useCases: "Stocks médicaux, Traçabilité, Facturation patients" },
  { sector: "Enseignement & Formation", useCases: "eLearning, Inscriptions, Facturation, RH" },
  { sector: "Agro-alimentaire", useCases: "Traçabilité (FEFO), Production, Qualité, Achats" },
  { sector: "ONG & Secteur Public", useCases: "Projets, Budgets, Achats, RH, Reporting bailleurs" },
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
```

## Détail des composants

### `OdooHero.tsx`
Réutilise `PageHero` (badge, title avec `HeroHighlight` sur "Odoo", subtitle). Passe en `children` deux CTA :
- `Link` primaire → `/contact` : "Demander une démo gratuite"
- `a` secondaire → `#ressources` (scroll ancre vers `OdooResources`) : "Voir nos ressources Odoo"

(Le libellé évite de promettre un téléchargement immédiat puisque les ressources listées en section 7 sont des teasers "bientôt disponible", cf. `OdooResources.tsx` ci-dessous — pas de contradiction entre le CTA et le contenu réel.)

### `OdooIntro.tsx`
Section 1. Texte de la problématique + mise en avant du chiffre "12 millions d'utilisateurs / 180 pays" dans un encadré (`bg-[#E8F0FE]`, bordure gauche `#1A2B3C`, cf. charte "Encadrés/Information"). Animation `FadeUp`.

### `OdooImplementation.tsx`
Section 2.1 (texte cadrage, liste à puces) + 2.2 : tableau des 5 phases (`odooPhases`). Sur mobile, le tableau devient une liste de cartes empilées (`sm:` breakpoint) plutôt qu'un tableau scrollable, pour lisibilité. Animation : `StaggerContainer`/`StaggerItem` par ligne.

### `OdooModules.tsx`
Grille de cartes par catégorie (`odooModuleCategories`), 2 colonnes sur desktop. Chaque carte liste ses modules en tags. `StaggerContainer` avec `stagger={0.08}`.

### `OdooServices.tsx`
3 cartes (`odooServiceBlocks`) : Dev spécifiques, Migration & Upgrade, Formation. Icônes `lucide-react` (Code2, RefreshCw, GraduationCap — déjà des dépendances existantes du projet). `StaggerContainer`.

### `OdooHostingSupport.tsx`
Deux tableaux côte à côte en desktop (`grid lg:grid-cols-2`), empilés en mobile : hébergement (`odooHostingModes`) et support (`odooSupportTiers`). En-tête bleu marine, lignes alternées, cohérent avec la charte "Tableaux".

### `OdooApproach.tsx`
Section 3, les 3 principes (Comprendre avant de configurer / Livrer par itération / Transférer les compétences). Numéros 1/2/3 en gros caractères orange, animation `scaleInVariants` sur les numéros + `FadeUp` sur le texte, décalage `-=0.2` équivalent via `delayChildren` du `StaggerContainer`.

### `OdooSectors.tsx`
Tableau `odooSectorUseCases` (9 lignes), même format que les autres tableaux. Sur mobile, cartes empilées.

### `OdooWhyUs.tsx`
5 cartes différenciateurs (`odooWhyUs`), grille responsive, `StaggerContainer`.

### `OdooStats.tsx`
Section 6, 5 KPI (`odooKpis`). Compteur animé : **duplication volontaire** du hook `useCountUp` déjà présent dans `StatsSection.tsx` (pas d'extraction en hook partagé — la logique fait ~15 lignes, le risque de casser `StatsSection` en la modifiant n'est pas justifié pour ce gain). `IntersectionObserver` + `motion.div` identiques au pattern existant.

### `OdooResources.tsx`
`id="ressources"` (cible de l'ancre du Hero). 4 cartes (`odooResources`) non cliquables : `opacity-75`, `cursor-default`, badge "Bientôt disponible" en haut à droite de chaque carte (fond `#FFF4E5`, texte `#FF5500`, cohérent avec charte "Attention"). Pas de `<Link>` ni `href`.

### `OdooFaq.tsx`
Accordéon local allégé (pas le composant global `FaqAccordion` — pas de recherche/filtre catégorie pertinent pour 6 questions d'un seul thème). Reprend le style visuel de `AccordionItem` (bouton, chevron rotatif, `AnimatePresence` + `height: auto`) mais sans les props `category`/filtrage. Un seul état `openIndex` (accordéon à ouverture unique) au lieu d'un état par item, pour un comportement plus net sur une liste courte.

### `OdooCtaFinal.tsx`
Section 9, reprend le style visuel de `CTABanner` (fond bleu marine, radial-gradient orange, `FadeUp`). Contenu : titre "Prêt à transformer votre gestion avec Odoo ?", 4 bullets "ce que vous obtenez" (analyse maturité, recommandation modules, estimation délais/budget, réponses techniques), CTA unique → `/contact` : "Planifier un échange gratuit".

## Page principale (`src/app/expertises/odoo/page.tsx`)

- `generateMetadata` : title "Expertise Odoo ERP en Afrique de l'Ouest — AKILI Labs", description orientée OHADA/UEMOA, `canonical: https://akililabs.com/expertises/odoo`, OpenGraph + Twitter avec `/logo-akili.png` (même pattern que `[slug]/page.tsx`).
- JSON-LD :
  - `Service` (reprend la structure de `[slug]/page.tsx`, `serviceType: "Odoo ERP"`, `hasOfferCatalog` alimenté par les modules d'`odooModuleCategories` aplatis)
  - `BreadcrumbList` (Accueil → Expertises → Odoo)
  - `FAQPage` à partir d'`odooFaqs` (cf. pattern de `/faq/page.tsx`)
- Compose les 12 sections dans l'ordre du contenu source (Hero → Intro → Implementation → Modules → Services → HostingSupport → Approach → Sectors → WhyUs → Stats → Resources → Faq → CtaFinal).

## Modification de `src/app/expertises/[slug]/page.tsx`

Dans le bloc "Why us" (colonne droite de la section Services), ajout conditionnel :

```tsx
{exp.slug === "erp" && (
  <div className="bg-white border border-[#D9E2EC] rounded-2xl p-7 text-center">
    <h3 className="font-bold text-[#1A2B3C] mb-2">Vous utilisez ou envisagez Odoo ?</h3>
    <p className="text-sm text-[#374151] mb-5">
      Découvrez notre expertise Odoo en détail : modules, méthodologie, hébergement et support.
    </p>
    <Link
      href="/expertises/odoo"
      className="inline-flex items-center gap-2 px-6 py-3 border border-[#1A2B3C] text-[#1A2B3C] font-semibold rounded-xl hover:bg-[#1A2B3C] hover:text-white transition-colors"
    >
      Explorer l'expertise Odoo <ArrowRight size={15} />
    </Link>
  </div>
)}
```

Placé entre le bloc "Pourquoi AKILI Labs ?" et le bloc CTA existant.

## Accessibilité & responsive

- Tous les tableaux ont un fallback carte empilée en dessous de `sm`.
- L'accordéon FAQ utilise `aria-expanded`, `aria-controls`, navigation clavier native (boutons).
- Contrastes conformes à la charte (texte gris `#374151` sur fond blanc/bleu clair, texte blanc sur bleu marine).
- Toutes les icônes décoratives `aria-hidden="true"`.

## Hors périmètre

- Pas de modification de la nav principale (`Navbar.tsx`), du `Footer.tsx`, ni de la homepage.
- Pas d'ajout de GSAP ni d'autre dépendance.
- Pas de contenu réel pour les 4 ressources (guide/checklist/étude de cas/webinar) — cartes teaser uniquement.
- Pas de modification de `src/lib/data.ts` (le tableau `expertises` existant, slug `erp`, reste inchangé).
