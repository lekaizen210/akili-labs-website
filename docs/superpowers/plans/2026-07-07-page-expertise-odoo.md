# Page Expertise Odoo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Créer une page `/expertises/odoo` dédiée et détaillée sur akili-labs-website, distincte de la fiche générique `/expertises/erp`.

**Architecture:** Une page Next.js App Router composée de 13 composants de section (dossier `src/components/odoo/`), alimentés par un fichier de données centralisé (`src/lib/odoo-data.ts`), suivant exactement les patterns déjà en place dans `src/components/home/` et `src/components/faq/`. Un ajout ciblé sur `src/app/expertises/[slug]/page.tsx` relie la fiche ERP générique à cette nouvelle page.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript strict, Tailwind CSS 4, Framer Motion, lucide-react.

## Global Constraints

- Aucune nouvelle dépendance (pas de GSAP) — Framer Motion uniquement, réutilisant les primitives de `src/components/ui/motion-primitives.tsx`.
- Palette imposée : Bleu Marine `#1A2B3C`, Orange `#FF5500`, Fond bleu clair `#E8F0FE`, Texte `#374151`, Bordures `#D9E2EC` (charte AKILI Labs).
- Tous les tableaux ont un fallback carte empilée en dessous du breakpoint `sm`.
- Toutes les icônes décoratives portent `aria-hidden="true"`.
- Aucune modification de `src/components/layout/Navbar.tsx`, `src/components/layout/Footer.tsx`, `src/app/page.tsx` (homepage), ni de `src/lib/data.ts`.
- Aucun contenu factice cliquable pour la section Ressources — cartes non cliquables uniquement.
- Pas de framework de test dans ce repo (pas de Jest/Vitest/Playwright) : la vérification par tâche se fait via `npx tsc --noEmit` (le projet a `"strict": true`) et `npx eslint <fichier>`. La vérification finale se fait via `npm run build` + contrôle visuel au navigateur (`npm run dev`).
- Ne jamais committer `sshpass_1.09-1_amd64.deb` (fichier non tracké préexistant, sans rapport avec ce travail).
- Ne jamais pousser sur `develop` sans validation explicite de l'utilisateur (commits locaux uniquement).

---

### Task 1: Fichier de données `odoo-data.ts`

**Files:**
- Create: `src/lib/odoo-data.ts`

**Interfaces:**
- Produces: `odooPhases`, `odooModuleCategories`, `odooServiceBlocks`, `odooHostingModes`, `odooSupportTiers`, `odooSectorUseCases`, `odooWhyUs`, `odooKpis`, `odooResources`, `odooFaqs` — tous des tableaux constants exportés, consommés par les Tasks 3 à 15.

- [ ] **Step 1: Écrire le fichier de données**

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

- [ ] **Step 2: Vérifier le typage**

Run: `npx tsc --noEmit`
Expected: aucune erreur liée à `src/lib/odoo-data.ts` (le fichier n'est pas encore importé nulle part, donc aucune erreur possible sur ce fichier isolé — vérifie juste qu'il n'y a pas de syntaxe TS invalide).

- [ ] **Step 3: Commit**

```bash
git add src/lib/odoo-data.ts
git commit -m "feat(odoo): ajouter les données structurées de la page Expertise Odoo"
```

---

### Task 2: `OdooHero.tsx`

**Files:**
- Create: `src/components/odoo/OdooHero.tsx`

**Interfaces:**
- Consumes: `PageHero` (default export) et `HeroHighlight` (named export) de `@/components/ui/PageHero` — props `{ badge: string; title: React.ReactNode; subtitle: React.ReactNode; children?: React.ReactNode }`.
- Produces: `OdooHero` (default export, composant sans props), consommé par Task 15.

- [ ] **Step 1: Écrire le composant**

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero, { HeroHighlight } from "@/components/ui/PageHero";

export default function OdooHero() {
  return (
    <PageHero
      badge="Expertise Odoo ERP"
      title={
        <>
          <span className="text-white">Déployez </span>
          <HeroHighlight>Odoo</HeroHighlight>
          <span className="text-white">. Transformez votre entreprise.</span>
        </>
      }
      subtitle={
        <>
          AKILI Labs accompagne les PME et grandes organisations d&apos;Afrique de l&apos;Ouest dans
          l&apos;implémentation, la personnalisation et l&apos;optimisation de l&apos;ERP Odoo — du cadrage
          métier jusqu&apos;à la mise en production et au-delà.
        </>
      }
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 px-7 py-4 bg-[#FF5500] text-white font-semibold rounded-xl hover:bg-[#e04d00] transition-colors shadow-lg shadow-orange-900/20"
        >
          Demander une démo gratuite
          <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </Link>
        <a
          href="#ressources"
          className="inline-flex items-center gap-2 px-7 py-4 text-white/80 hover:text-white border border-white/20 rounded-xl font-medium transition-all hover:border-white/40"
        >
          Voir nos ressources Odoo
        </a>
      </div>
    </PageHero>
  );
}
```

- [ ] **Step 2: Vérifier**

Run: `npx eslint src/components/odoo/OdooHero.tsx && npx tsc --noEmit`
Expected: 0 erreur.

- [ ] **Step 3: Commit**

```bash
git add src/components/odoo/OdooHero.tsx
git commit -m "feat(odoo): ajouter le hero de la page Expertise Odoo"
```

---

### Task 3: `OdooIntro.tsx`

**Files:**
- Create: `src/components/odoo/OdooIntro.tsx`

**Interfaces:**
- Consumes: `FadeUp` de `@/components/ui/motion-primitives` — props `{ children: React.ReactNode; className?: string; delay?: number }`.
- Produces: `OdooIntro` (default export), consommé par Task 15.

- [ ] **Step 1: Écrire le composant**

```tsx
"use client";

import { FadeUp } from "@/components/ui/motion-primitives";

export default function OdooIntro() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F0FE] text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
            ■ Pourquoi Odoo
          </div>
        </FadeUp>
        <FadeUp delay={0.08}>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C] mb-6">
            Pourquoi les entreprises africaines choisissent Odoo
          </h2>
        </FadeUp>
        <FadeUp delay={0.14}>
          <p className="text-[#374151] leading-relaxed mb-6">
            Gérer une entreprise en croissance avec des outils dispersés — tableaux Excel, logiciels de
            comptabilité isolés, CRM sans connexion à la supply chain — coûte du temps, de l&apos;argent et
            des opportunités manquées.
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <div className="bg-[#E8F0FE] border-l-4 border-[#1A2B3C] rounded-r-xl p-6 mb-6">
            <p className="text-[#1A2B3C] font-bold text-lg mb-1">Odoo change la donne.</p>
            <p className="text-[#374151] leading-relaxed">
              Avec plus de <strong>12 millions d&apos;utilisateurs dans 180 pays</strong>, Odoo est
              aujourd&apos;hui la suite ERP open source la plus adoptée au monde. Elle réunit dans une
              seule plateforme tous les processus de votre entreprise : ventes, achats, stocks,
              comptabilité, RH, production et bien plus encore.
            </p>
          </div>
        </FadeUp>
        <FadeUp delay={0.26}>
          <p className="text-[#374151] leading-relaxed">
            Chez AKILI Labs, nous ne nous contentons pas d&apos;installer Odoo. Nous le configurons,
            l&apos;adaptons et le faisons vivre selon <strong>votre réalité métier africaine</strong> :
            contextes OHADA/SYSCOHADA, spécificités fiscales locales, multilinguisme, et contraintes de
            connectivité.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Vérifier**

Run: `npx eslint src/components/odoo/OdooIntro.tsx && npx tsc --noEmit`
Expected: 0 erreur.

- [ ] **Step 3: Commit**

```bash
git add src/components/odoo/OdooIntro.tsx
git commit -m "feat(odoo): ajouter la section problématique de la page Odoo"
```

---

### Task 4: `OdooImplementation.tsx`

**Files:**
- Create: `src/components/odoo/OdooImplementation.tsx`

**Interfaces:**
- Consumes: `odooPhases` de `@/lib/odoo-data` (type `{ phase: string; content: string; livrable: string }[]`) ; `StaggerContainer`/`StaggerItem` de `@/components/ui/motion-primitives`.
- Produces: `OdooImplementation` (default export), consommé par Task 15.

- [ ] **Step 1: Écrire le composant**

```tsx
"use client";

import { CheckCircle } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { odooPhases } from "@/lib/odoo-data";

const cadrageItems = [
  "Audit de l'existant et cartographie des processus (as-is / to-be)",
  "Analyse des besoins fonctionnels et techniques",
  "Définition du périmètre et priorisation des modules",
  "Rédaction du cahier des charges et des spécifications fonctionnelles",
  "Estimation de charge et planification du projet (plan de charge détaillé)",
  "Accompagnement à la décision : Odoo Community vs Enterprise",
];

export default function OdooImplementation() {
  return (
    <section className="py-20 bg-[#E8F0FE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
          ■ Conseil & Implémentation
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C] mb-4">Conseil & Cadrage</h2>
        <p className="text-[#374151] mb-8 max-w-2xl">
          Avant d&apos;écrire la moindre ligne de configuration, nous comprenons votre métier.
        </p>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16" stagger={0.06}>
          {cadrageItems.map((item) => (
            <StaggerItem key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#D9E2EC]">
              <CheckCircle size={18} className="text-[#FF5500] mt-0.5 shrink-0" aria-hidden="true" />
              <span className="text-sm text-[#374151]">{item}</span>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <h3 className="text-xl sm:text-2xl font-black text-[#1A2B3C] mb-2">
          Notre approche en 5 phases
        </h3>
        <p className="text-[#374151] mb-8 max-w-2xl">
          Nous déployons Odoo selon une méthodologie structurée et éprouvée, inspirée des meilleures
          pratiques internationales.
        </p>

        <div className="hidden sm:block overflow-x-auto rounded-2xl border border-[#D9E2EC]">
          <table className="w-full text-left bg-white">
            <thead>
              <tr className="bg-[#1A2B3C] text-white">
                <th className="px-5 py-4 text-sm font-semibold">Phase</th>
                <th className="px-5 py-4 text-sm font-semibold">Contenu</th>
                <th className="px-5 py-4 text-sm font-semibold">Livrable</th>
              </tr>
            </thead>
            <tbody>
              {odooPhases.map((p, i) => (
                <tr key={p.phase} className={i % 2 === 0 ? "bg-white" : "bg-[#E8F0FE]"}>
                  <td className="px-5 py-4 text-sm font-bold text-[#1A2B3C] align-top">{p.phase}</td>
                  <td className="px-5 py-4 text-sm text-[#374151] align-top">{p.content}</td>
                  <td className="px-5 py-4 text-sm text-[#374151] align-top">{p.livrable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <StaggerContainer className="sm:hidden space-y-4" stagger={0.08}>
          {odooPhases.map((p) => (
            <StaggerItem key={p.phase} className="bg-white rounded-xl border border-[#D9E2EC] p-5">
              <div className="font-bold text-[#1A2B3C] mb-2">{p.phase}</div>
              <div className="text-sm text-[#374151] mb-2">{p.content}</div>
              <div className="text-xs text-[#FF5500] font-semibold">→ {p.livrable}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Vérifier**

Run: `npx eslint src/components/odoo/OdooImplementation.tsx && npx tsc --noEmit`
Expected: 0 erreur.

- [ ] **Step 3: Commit**

```bash
git add src/components/odoo/OdooImplementation.tsx
git commit -m "feat(odoo): ajouter la section cadrage et phases d'implémentation"
```

---

### Task 5: `OdooModules.tsx`

**Files:**
- Create: `src/components/odoo/OdooModules.tsx`

**Interfaces:**
- Consumes: `odooModuleCategories` de `@/lib/odoo-data` (type `{ category: string; modules: string[] }[]`).
- Produces: `OdooModules` (default export), consommé par Task 15.

- [ ] **Step 1: Écrire le composant**

```tsx
"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { odooModuleCategories } from "@/lib/odoo-data";

export default function OdooModules() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F0FE] text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
          ■ Modules Odoo maîtrisés
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C] mb-8">
          Nous intervenons sur l&apos;ensemble des modules de la suite Odoo
        </h2>
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-5" stagger={0.08}>
          {odooModuleCategories.map((cat) => (
            <StaggerItem key={cat.category} className="bg-[#E8F0FE] rounded-2xl p-6 border border-[#D9E2EC]">
              <h3 className="font-bold text-[#1A2B3C] mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.modules.map((m) => (
                  <span key={m} className="px-3 py-1.5 bg-white text-xs font-medium text-[#374151] rounded-lg border border-[#D9E2EC]">
                    {m}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Vérifier**

Run: `npx eslint src/components/odoo/OdooModules.tsx && npx tsc --noEmit`
Expected: 0 erreur.

- [ ] **Step 3: Commit**

```bash
git add src/components/odoo/OdooModules.tsx
git commit -m "feat(odoo): ajouter la grille des modules Odoo par catégorie"
```

---

### Task 6: `OdooServices.tsx`

**Files:**
- Create: `src/components/odoo/OdooServices.tsx`

**Interfaces:**
- Consumes: `odooServiceBlocks` de `@/lib/odoo-data` (type `{ title: string; icon: "Code2" | "RefreshCw" | "GraduationCap"; items: string[] }[]`).
- Produces: `OdooServices` (default export), consommé par Task 15.

- [ ] **Step 1: Écrire le composant**

```tsx
"use client";

import { Code2, RefreshCw, GraduationCap, CheckCircle } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { odooServiceBlocks } from "@/lib/odoo-data";

const icons = { Code2, RefreshCw, GraduationCap } as const;

export default function OdooServices() {
  return (
    <section className="py-20 bg-[#E8F0FE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
          ■ Au-delà du standard
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C] mb-10">
          Développements spécifiques, migration & formation
        </h2>
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6" stagger={0.1}>
          {odooServiceBlocks.map((block) => {
            const Icon = icons[block.icon as keyof typeof icons];
            return (
              <StaggerItem key={block.title} className="bg-white rounded-2xl p-6 border border-[#D9E2EC]">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#1A2B3C] mb-5">
                  <Icon size={20} className="text-white" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-[#1A2B3C] mb-4">{block.title}</h3>
                <ul className="space-y-2.5">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#374151]">
                      <CheckCircle size={14} className="text-[#FF5500] mt-0.5 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Vérifier**

Run: `npx eslint src/components/odoo/OdooServices.tsx && npx tsc --noEmit`
Expected: 0 erreur.

- [ ] **Step 3: Commit**

```bash
git add src/components/odoo/OdooServices.tsx
git commit -m "feat(odoo): ajouter la section dev specifiques, migration et formation"
```

---

### Task 7: `OdooHostingSupport.tsx`

**Files:**
- Create: `src/components/odoo/OdooHostingSupport.tsx`

**Interfaces:**
- Consumes: `odooHostingModes` (`{ mode: string; description: string; fit: string }[]`) et `odooSupportTiers` (`{ level: string; content: string; delay: string }[]`) de `@/lib/odoo-data`.
- Produces: `OdooHostingSupport` (default export), consommé par Task 15.

- [ ] **Step 1: Écrire le composant**

```tsx
import { odooHostingModes, odooSupportTiers } from "@/lib/odoo-data";

export default function OdooHostingSupport() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F0FE] text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
          ■ Hébergement & Support
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C] mb-10">
          Un mode de déploiement et un support adaptés à vos contraintes
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-[#1A2B3C] mb-4">Hébergement & Infrastructure</h3>
            <div className="hidden sm:block overflow-x-auto rounded-2xl border border-[#D9E2EC]">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#1A2B3C] text-white">
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide">Mode</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide">Adapté pour</th>
                  </tr>
                </thead>
                <tbody>
                  {odooHostingModes.map((h, i) => (
                    <tr key={h.mode} className={i % 2 === 0 ? "bg-white" : "bg-[#E8F0FE]"}>
                      <td className="px-4 py-3 align-top">
                        <div className="text-sm font-bold text-[#1A2B3C]">{h.mode}</div>
                        <div className="text-xs text-[#374151] mt-1">{h.description}</div>
                      </td>
                      <td className="px-4 py-3 text-sm text-[#374151] align-top">{h.fit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="sm:hidden space-y-3">
              {odooHostingModes.map((h) => (
                <div key={h.mode} className="bg-white rounded-xl border border-[#D9E2EC] p-4">
                  <div className="text-sm font-bold text-[#1A2B3C]">{h.mode}</div>
                  <div className="text-xs text-[#374151] mt-1 mb-2">{h.description}</div>
                  <div className="text-xs text-[#FF5500] font-semibold">→ {h.fit}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-[#1A2B3C] mb-4">Support & Maintenance</h3>
            <div className="hidden sm:block overflow-x-auto rounded-2xl border border-[#D9E2EC]">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#1A2B3C] text-white">
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide">Niveau</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide">Délai</th>
                  </tr>
                </thead>
                <tbody>
                  {odooSupportTiers.map((s, i) => (
                    <tr key={s.level} className={i % 2 === 0 ? "bg-white" : "bg-[#E8F0FE]"}>
                      <td className="px-4 py-3 align-top">
                        <div className="text-sm font-bold text-[#1A2B3C]">{s.level}</div>
                        <div className="text-xs text-[#374151] mt-1">{s.content}</div>
                      </td>
                      <td className="px-4 py-3 text-sm font-semibold text-[#FF5500] align-top">{s.delay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="sm:hidden space-y-3">
              {odooSupportTiers.map((s) => (
                <div key={s.level} className="bg-white rounded-xl border border-[#D9E2EC] p-4">
                  <div className="text-sm font-bold text-[#1A2B3C]">{s.level}</div>
                  <div className="text-xs text-[#374151] mt-1 mb-2">{s.content}</div>
                  <div className="text-xs font-semibold text-[#FF5500]">Délai : {s.delay}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Vérifier**

Run: `npx eslint src/components/odoo/OdooHostingSupport.tsx && npx tsc --noEmit`
Expected: 0 erreur.

- [ ] **Step 3: Commit**

```bash
git add src/components/odoo/OdooHostingSupport.tsx
git commit -m "feat(odoo): ajouter les tableaux hebergement et support"
```

---

### Task 8: `OdooApproach.tsx`

**Files:**
- Create: `src/components/odoo/OdooApproach.tsx`

**Interfaces:**
- Consumes: `StaggerContainer`/`StaggerItem` de `@/components/ui/motion-primitives`.
- Produces: `OdooApproach` (default export), consommé par Task 15.

**Note de conception :** la spec envisageait une animation `scaleInVariants` distincte sur les numéros 1/2/3. Simplification volontaire ici : on utilise le même `StaggerItem` (variants `staggerItemVariants`, fade+translation) pour l'ensemble du bloc numéro+titre+texte, ce qui évite de dupliquer la logique d'animation pour un gain visuel marginal.

- [ ] **Step 1: Écrire le composant**

```tsx
"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";

const principles = [
  {
    n: "1",
    title: "Comprendre avant de configurer",
    desc: "Chaque entreprise est unique. Nous consacrons le temps nécessaire à comprendre vos processus, vos contraintes et vos objectifs avant toute action technique.",
  },
  {
    n: "2",
    title: "Livrer de la valeur par itération",
    desc: "Plutôt qu'un déploiement monolithique risqué, nous privilégions des mises en production progressives — par module ou par entité — pour garantir une adoption fluide et un retour sur investissement rapide.",
  },
  {
    n: "3",
    title: "Transférer les compétences",
    desc: "Notre mission est de vous rendre autonome. À l'issue de chaque projet, vos équipes doivent être capables de gérer, faire évoluer et enrichir leur Odoo sans dépendance permanente à un prestataire.",
  },
];

export default function OdooApproach() {
  return (
    <section className="py-20 bg-[#1A2B3C]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full mb-6 border border-white/20">
          <span className="text-[#FF5500]">■</span> Notre méthodologie
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
          Une approche centrée sur la valeur métier
        </h2>
        <p className="text-white/70 mb-12 max-w-2xl">
          Chez AKILI Labs, nous refusons le modèle &laquo; installer et partir &raquo;.
        </p>
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8" stagger={0.15}>
          {principles.map((p) => (
            <StaggerItem key={p.n}>
              <div className="text-5xl font-black text-[#FF5500] mb-4">{p.n}</div>
              <h3 className="font-bold text-white mb-3">{p.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{p.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Vérifier**

Run: `npx eslint src/components/odoo/OdooApproach.tsx && npx tsc --noEmit`
Expected: 0 erreur.

- [ ] **Step 3: Commit**

```bash
git add src/components/odoo/OdooApproach.tsx
git commit -m "feat(odoo): ajouter la section methodologie (3 principes)"
```

---

### Task 9: `OdooSectors.tsx`

**Files:**
- Create: `src/components/odoo/OdooSectors.tsx`

**Interfaces:**
- Consumes: `odooSectorUseCases` de `@/lib/odoo-data` (type `{ sector: string; useCases: string }[]`).
- Produces: `OdooSectors` (default export), consommé par Task 15.

- [ ] **Step 1: Écrire le composant**

```tsx
import { odooSectorUseCases } from "@/lib/odoo-data";

export default function OdooSectors() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F0FE] text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
          ■ Secteurs d&apos;intervention
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C] mb-10">
          Odoo pour tous les secteurs
        </h2>
        <div className="hidden sm:block overflow-x-auto rounded-2xl border border-[#D9E2EC]">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#1A2B3C] text-white">
                <th className="px-5 py-4 text-sm font-semibold">Secteur</th>
                <th className="px-5 py-4 text-sm font-semibold">Cas d&apos;usage prioritaires</th>
              </tr>
            </thead>
            <tbody>
              {odooSectorUseCases.map((s, i) => (
                <tr key={s.sector} className={i % 2 === 0 ? "bg-white" : "bg-[#E8F0FE]"}>
                  <td className="px-5 py-4 text-sm font-bold text-[#1A2B3C] align-top whitespace-nowrap">{s.sector}</td>
                  <td className="px-5 py-4 text-sm text-[#374151] align-top">{s.useCases}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="sm:hidden space-y-3">
          {odooSectorUseCases.map((s) => (
            <div key={s.sector} className="bg-[#E8F0FE] rounded-xl p-4 border border-[#D9E2EC]">
              <div className="text-sm font-bold text-[#1A2B3C] mb-1">{s.sector}</div>
              <div className="text-xs text-[#374151]">{s.useCases}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Vérifier**

Run: `npx eslint src/components/odoo/OdooSectors.tsx && npx tsc --noEmit`
Expected: 0 erreur.

- [ ] **Step 3: Commit**

```bash
git add src/components/odoo/OdooSectors.tsx
git commit -m "feat(odoo): ajouter le tableau des secteurs d'intervention"
```

---

### Task 10: `OdooWhyUs.tsx`

**Files:**
- Create: `src/components/odoo/OdooWhyUs.tsx`

**Interfaces:**
- Consumes: `odooWhyUs` de `@/lib/odoo-data` (type `{ title: string; desc: string }[]`).
- Produces: `OdooWhyUs` (default export), consommé par Task 15.

- [ ] **Step 1: Écrire le composant**

```tsx
"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { odooWhyUs } from "@/lib/odoo-data";

export default function OdooWhyUs() {
  return (
    <section className="py-20 bg-[#E8F0FE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
          ■ Ce qui nous distingue
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C] mb-10">
          Pourquoi choisir AKILI Labs
        </h2>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
          {odooWhyUs.map((w) => (
            <StaggerItem key={w.title} className="bg-white rounded-2xl p-6 border border-[#D9E2EC]">
              <h3 className="font-bold text-[#1A2B3C] mb-2">{w.title}</h3>
              <p className="text-sm text-[#374151] leading-relaxed">{w.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Vérifier**

Run: `npx eslint src/components/odoo/OdooWhyUs.tsx && npx tsc --noEmit`
Expected: 0 erreur.

- [ ] **Step 3: Commit**

```bash
git add src/components/odoo/OdooWhyUs.tsx
git commit -m "feat(odoo): ajouter la section differenciateurs AKILI Labs"
```

---

### Task 11: `OdooStats.tsx`

**Files:**
- Create: `src/components/odoo/OdooStats.tsx`

**Interfaces:**
- Consumes: `odooKpis` de `@/lib/odoo-data` (type `{ value: string; label: string }[]`).
- Produces: `OdooStats` (default export), consommé par Task 15.

**Note de conception :** le hook `useCountUp` est dupliqué depuis `src/components/home/StatsSection.tsx` (≈15 lignes) plutôt qu'extrait en hook partagé — évite de modifier un composant existant qui fonctionne, pour un gain de réutilisation marginal (2 call sites).

- [ ] **Step 1: Écrire le composant**

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { odooKpis } from "@/lib/odoo-data";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function useCountUp(target: string, inView: boolean) {
  const [current, setCurrent] = useState("0");
  const numericPart = parseInt(target.replace(/\D/g, ""), 10);
  const suffix = target.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 60;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / total;
      const val = Math.round(numericPart * Math.min(progress, 1));
      setCurrent(`${val}${suffix}`);
      if (frame >= total) clearInterval(timer);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, numericPart, suffix]);

  return current;
}

function KpiItem({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const animated = useCountUp(value, inView);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.45, ease }}
        className="text-4xl lg:text-5xl font-black text-[#FF5500] mb-1 tabular-nums"
      >
        {inView ? animated : "0"}
      </motion.div>
      <div className="text-sm font-medium text-[#374151]">{label}</div>
    </div>
  );
}

export default function OdooStats() {
  return (
    <section className="py-16 bg-white border-y border-[#D9E2EC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-black text-[#1A2B3C] mb-12">
          AKILI Labs en chiffres
        </h2>
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-5 gap-8" stagger={0.12} delay={0.05}>
          {odooKpis.map((k) => (
            <StaggerItem key={k.label}>
              <KpiItem value={k.value} label={k.label} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Vérifier**

Run: `npx eslint src/components/odoo/OdooStats.tsx && npx tsc --noEmit`
Expected: 0 erreur.

- [ ] **Step 3: Commit**

```bash
git add src/components/odoo/OdooStats.tsx
git commit -m "feat(odoo): ajouter les chiffres cles avec compteur anime"
```

---

### Task 12: `OdooResources.tsx`

**Files:**
- Create: `src/components/odoo/OdooResources.tsx`

**Interfaces:**
- Consumes: `odooResources` de `@/lib/odoo-data` (type `{ title: string; type: string; desc: string }[]`).
- Produces: `OdooResources` (default export), consommé par Task 15. Expose `id="ressources"`, cible de l'ancre `#ressources` du CTA de `OdooHero`.

- [ ] **Step 1: Écrire le composant**

```tsx
"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { odooResources } from "@/lib/odoo-data";

export default function OdooResources() {
  return (
    <section id="ressources" className="py-20 bg-[#E8F0FE] scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
          ■ Ressources & Contenus
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C] mb-10">
          Approfondissez votre connaissance d&apos;Odoo
        </h2>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5" stagger={0.08}>
          {odooResources.map((r) => (
            <StaggerItem
              key={r.title}
              className="relative bg-white rounded-2xl p-6 border border-[#D9E2EC] opacity-75 cursor-default"
            >
              <span className="absolute top-4 right-4 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide rounded-full bg-[#FFF4E5] text-[#FF5500]">
                Bientôt disponible
              </span>
              <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-full bg-[#E8F0FE] text-[#1A2B3C] mb-3">
                {r.type}
              </span>
              <h3 className="font-bold text-[#1A2B3C] mb-2 pr-24">{r.title}</h3>
              <p className="text-sm text-[#374151]">{r.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Vérifier**

Run: `npx eslint src/components/odoo/OdooResources.tsx && npx tsc --noEmit`
Expected: 0 erreur.

- [ ] **Step 3: Commit**

```bash
git add src/components/odoo/OdooResources.tsx
git commit -m "feat(odoo): ajouter la section ressources (teasers bientot disponible)"
```

---

### Task 13: `OdooFaq.tsx`

**Files:**
- Create: `src/components/odoo/OdooFaq.tsx`

**Interfaces:**
- Consumes: `odooFaqs` de `@/lib/odoo-data` (type `{ question: string; answer: string }[]`) ; `cn` de `@/lib/utils`.
- Produces: `OdooFaq` (default export), consommé par Task 15.

- [ ] **Step 1: Écrire le composant**

```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { odooFaqs } from "@/lib/odoo-data";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function OdooFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F0FE] text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
          ■ FAQ
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C] mb-10">
          Questions fréquentes sur Odoo
        </h2>
        <div className="space-y-3">
          {odooFaqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.question} className="border border-[#D9E2EC] rounded-2xl overflow-hidden bg-white">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={`odoo-faq-panel-${i}`}
                  className={cn(
                    "w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200",
                    open ? "bg-[#1A2B3C]" : "bg-white hover:bg-[#F7F9FF]"
                  )}
                >
                  <span className={cn("text-sm sm:text-base font-semibold leading-snug", open ? "text-white" : "text-[#1A2B3C]")}>
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.22, ease }}
                    className={cn("shrink-0", open ? "text-white/70" : "text-[#374151]")}
                  >
                    <ChevronDown size={18} aria-hidden="true" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="content"
                      id={`odoo-faq-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { type: "spring", stiffness: 400, damping: 40 },
                        opacity: { duration: open ? 0.25 : 0.15, ease },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-4 border-t border-[#D9E2EC]">
                        <p className="text-[#374151] text-sm leading-relaxed">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Vérifier**

Run: `npx eslint src/components/odoo/OdooFaq.tsx && npx tsc --noEmit`
Expected: 0 erreur.

- [ ] **Step 3: Commit**

```bash
git add src/components/odoo/OdooFaq.tsx
git commit -m "feat(odoo): ajouter l'accordeon FAQ dedie a la page Odoo"
```

---

### Task 14: `OdooCtaFinal.tsx`

**Files:**
- Create: `src/components/odoo/OdooCtaFinal.tsx`

**Interfaces:**
- Consumes: `FadeUp` de `@/components/ui/motion-primitives`.
- Produces: `OdooCtaFinal` (default export), consommé par Task 15.

- [ ] **Step 1: Écrire le composant**

```tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/ui/motion-primitives";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const benefits = [
  "Analyse rapide de votre maturité digitale",
  "Recommandation des modules Odoo prioritaires pour votre secteur",
  "Estimation indicative de délais et de budget",
  "Réponse à vos questions techniques et fonctionnelles",
];

export default function OdooCtaFinal() {
  return (
    <section className="py-20 bg-[#1A2B3C] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(255,85,0,0.12) 0%, transparent 60%)" }}
        aria-hidden="true"
      />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Prêt à transformer votre gestion avec <span className="text-[#FF5500]">Odoo ?</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">
            Nos experts sont disponibles pour analyser votre contexte et vous proposer la feuille de
            route Odoo la mieux adaptée à votre organisation.
          </p>
        </FadeUp>
        <FadeUp delay={0.18}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-10 max-w-xl mx-auto">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-white/80">
                <span className="text-[#FF5500] font-bold">✓</span> {b}
              </li>
            ))}
          </ul>
        </FadeUp>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.26, ease }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="inline-block"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#FF5500] text-white font-semibold rounded-xl hover:bg-[#e04d00] transition-colors shadow-lg shadow-orange-900/30"
          >
            Planifier un échange gratuit
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Vérifier**

Run: `npx eslint src/components/odoo/OdooCtaFinal.tsx && npx tsc --noEmit`
Expected: 0 erreur.

- [ ] **Step 3: Commit**

```bash
git add src/components/odoo/OdooCtaFinal.tsx
git commit -m "feat(odoo): ajouter le CTA final de la page Odoo"
```

---

### Task 15: Page `src/app/expertises/odoo/page.tsx`

**Files:**
- Create: `src/app/expertises/odoo/page.tsx`

**Interfaces:**
- Consumes: les 13 composants par défaut des Tasks 2–14 (`OdooHero`, `OdooIntro`, `OdooImplementation`, `OdooModules`, `OdooServices`, `OdooHostingSupport`, `OdooApproach`, `OdooSectors`, `OdooWhyUs`, `OdooStats`, `OdooResources`, `OdooFaq`, `OdooCtaFinal`) ; `odooModuleCategories` et `odooFaqs` de `@/lib/odoo-data`.
- Produces: route `/expertises/odoo`, consommée par le lien ajouté dans Task 16.

- [ ] **Step 1: Écrire la page**

```tsx
import type { Metadata } from "next";
import OdooHero from "@/components/odoo/OdooHero";
import OdooIntro from "@/components/odoo/OdooIntro";
import OdooImplementation from "@/components/odoo/OdooImplementation";
import OdooModules from "@/components/odoo/OdooModules";
import OdooServices from "@/components/odoo/OdooServices";
import OdooHostingSupport from "@/components/odoo/OdooHostingSupport";
import OdooApproach from "@/components/odoo/OdooApproach";
import OdooSectors from "@/components/odoo/OdooSectors";
import OdooWhyUs from "@/components/odoo/OdooWhyUs";
import OdooStats from "@/components/odoo/OdooStats";
import OdooResources from "@/components/odoo/OdooResources";
import OdooFaq from "@/components/odoo/OdooFaq";
import OdooCtaFinal from "@/components/odoo/OdooCtaFinal";
import { odooModuleCategories, odooFaqs } from "@/lib/odoo-data";

const BASE_URL = "https://akililabs.com";
const url = `${BASE_URL}/expertises/odoo`;

export const metadata: Metadata = {
  title: "Expertise Odoo ERP en Afrique de l'Ouest — AKILI Labs",
  description:
    "Implémentation, personnalisation et optimisation de l'ERP Odoo pour les entreprises d'Afrique de l'Ouest. Conformité OHADA/SYSCOHADA. Consultation initiale gratuite.",
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    title: "Expertise Odoo ERP — AKILI Labs Côte d'Ivoire",
    description:
      "Déployez Odoo. Transformez votre entreprise. Expertise Odoo complète pour la zone UEMOA/OHADA.",
    images: [{ url: "/logo-akili.png", width: 1600, height: 893, alt: "AKILI Labs — Expertise Odoo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expertise Odoo ERP — AKILI Labs",
    description: "Implémentation et personnalisation Odoo pour l'Afrique de l'Ouest.",
    images: ["/logo-akili.png"],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": url,
  name: "Expertise Odoo ERP",
  description: "Implémentation, personnalisation et optimisation de l'ERP Odoo, avec conformité OHADA/SYSCOHADA.",
  url,
  provider: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "AKILI Labs",
  },
  areaServed: ["Côte d'Ivoire", "Sénégal", "Mali", "Burkina Faso", "Niger", "Togo", "Bénin", "Guinée-Bissau"],
  serviceType: "Odoo ERP",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Modules Odoo",
    itemListElement: odooModuleCategories
      .flatMap((cat) => cat.modules)
      .map((m, i) => ({
        "@type": "Offer",
        position: i + 1,
        name: m,
        offeredBy: { "@id": `${BASE_URL}/#organization` },
      })),
  },
  availableLanguage: ["French"],
  termsOfService: `${BASE_URL}/contact`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Expertises", item: `${BASE_URL}/expertises` },
    { "@type": "ListItem", position: 3, name: "Odoo", item: url },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${url}#faq`,
  mainEntity: odooFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function OdooExpertisePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <OdooHero />
      <OdooIntro />
      <OdooImplementation />
      <OdooModules />
      <OdooServices />
      <OdooHostingSupport />
      <OdooApproach />
      <OdooSectors />
      <OdooWhyUs />
      <OdooStats />
      <OdooResources />
      <OdooFaq />
      <OdooCtaFinal />
    </>
  );
}
```

- [ ] **Step 2: Vérifier le build**

Run: `npm run build`
Expected: build réussi, la sortie liste une route statique `/expertises/odoo` (○ ou ● selon la légende Next.js), aucune erreur TypeScript ni ESLint bloquante.

- [ ] **Step 3: Commit**

```bash
git add src/app/expertises/odoo/page.tsx
git commit -m "feat(odoo): assembler la page /expertises/odoo avec metadata et JSON-LD"
```

---

### Task 16: Lien depuis la fiche ERP générique

**Files:**
- Modify: `src/app/expertises/[slug]/page.tsx` (bloc "Why us" de la colonne droite, section Services, entre le `div` "Pourquoi AKILI Labs ?" et le `div` CTA existant — actuellement autour des lignes 145-157 selon l'état actuel du fichier).

**Interfaces:**
- Consomme la route produite par Task 15 (`/expertises/odoo`) via un `Link` Next.js. Aucune nouvelle interface produite.

- [ ] **Step 1: Ajouter le bloc conditionnel**

Dans `src/app/expertises/[slug]/page.tsx`, repérer ce bloc existant :

```tsx
            {/* Why us */}
            <div className="bg-[#E8F0FE] rounded-2xl p-7">
              <h3 className="font-bold text-[#1A2B3C] mb-3">Pourquoi AKILI Labs ?</h3>
              <div className="space-y-2 text-sm text-[#374151]">
                <div className="flex items-center gap-2"><span className="text-[#FF5500] font-bold">→</span> Expertise prouvée sur la zone UEMOA</div>
                <div className="flex items-center gap-2"><span className="text-[#FF5500] font-bold">→</span> Connaissance des contraintes réglementaires OHADA</div>
                <div className="flex items-center gap-2"><span className="text-[#FF5500] font-bold">→</span> Équipe certifiée et formée aux dernières technologies</div>
                <div className="flex items-center gap-2"><span className="text-[#FF5500] font-bold">→</span> Support et accompagnement post-déploiement</div>
                <div className="flex items-center gap-2"><span className="text-[#FF5500] font-bold">→</span> Méthodologie éprouvée sur 50+ projets</div>
              </div>
            </div>
            {/* CTA */}
```

Le remplacer par (ajout du bloc conditionnel juste après le `div` "Why us", avant le commentaire `{/* CTA */}`) :

```tsx
            {/* Why us */}
            <div className="bg-[#E8F0FE] rounded-2xl p-7">
              <h3 className="font-bold text-[#1A2B3C] mb-3">Pourquoi AKILI Labs ?</h3>
              <div className="space-y-2 text-sm text-[#374151]">
                <div className="flex items-center gap-2"><span className="text-[#FF5500] font-bold">→</span> Expertise prouvée sur la zone UEMOA</div>
                <div className="flex items-center gap-2"><span className="text-[#FF5500] font-bold">→</span> Connaissance des contraintes réglementaires OHADA</div>
                <div className="flex items-center gap-2"><span className="text-[#FF5500] font-bold">→</span> Équipe certifiée et formée aux dernières technologies</div>
                <div className="flex items-center gap-2"><span className="text-[#FF5500] font-bold">→</span> Support et accompagnement post-déploiement</div>
                <div className="flex items-center gap-2"><span className="text-[#FF5500] font-bold">→</span> Méthodologie éprouvée sur 50+ projets</div>
              </div>
            </div>
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
                  Explorer l&apos;expertise Odoo <ArrowRight size={15} />
                </Link>
              </div>
            )}
            {/* CTA */}
```

`Link` et `ArrowRight` sont déjà importés en haut du fichier (lignes 2 et 3) — aucun nouvel import requis.

- [ ] **Step 2: Vérifier**

Run: `npx eslint "src/app/expertises/[slug]/page.tsx" && npx tsc --noEmit`
Expected: 0 erreur.

Run: `npm run dev` puis ouvrir `http://localhost:3000/expertises/erp` et `http://localhost:3000/expertises/intelligence-artificielle` dans un navigateur.
Expected: le bloc "Vous utilisez ou envisagez Odoo ?" apparaît uniquement sur `/expertises/erp`, pas sur les autres fiches (ex. `intelligence-artificielle`). Le lien mène vers `/expertises/odoo`.

- [ ] **Step 3: Commit**

```bash
git add "src/app/expertises/[slug]/page.tsx"
git commit -m "feat(erp): relier la fiche ERP generique a la page Expertise Odoo dediee"
```

---

### Task 17: Vérification finale end-to-end

**Files:** aucun (vérification uniquement)

- [ ] **Step 1: Build complet**

Run: `npm run build`
Expected: 0 erreur, route `/expertises/odoo` listée dans la sortie du build.

- [ ] **Step 2: Lint complet**

Run: `npm run lint`
Expected: 0 erreur (warnings seuls tolérés s'il y en a déjà ailleurs dans le projet avant ce travail).

- [ ] **Step 3: Vérification visuelle au navigateur**

Run: `npm run dev`

Ouvrir `http://localhost:3000/expertises/odoo` et vérifier :
- Les 13 sections s'affichent dans l'ordre (Hero → Intro → Implementation → Modules → Services → HostingSupport → Approach → Sectors → WhyUs → Stats → Resources → Faq → CtaFinal).
- Le CTA "Voir nos ressources Odoo" du hero scrolle bien jusqu'à la section Ressources (`#ressources`).
- Les animations au scroll (fade-up, stagger) se déclenchent sans à-coups.
- Le compteur des chiffres clés s'anime à l'entrée dans le viewport.
- L'accordéon FAQ s'ouvre/se ferme correctement, un seul item ouvert à la fois.
- Les tableaux (phases, secteurs, hébergement, support) basculent en cartes empilées en réduisant la largeur de la fenêtre sous 640px (breakpoint `sm`).
- Les 4 cartes Ressources affichent bien le badge "Bientôt disponible" et ne sont pas cliquables.

Ouvrir `http://localhost:3000/expertises/erp` et vérifier le nouveau bloc "Vous utilisez ou envisagez Odoo ?" et son lien vers `/expertises/odoo`.

- [ ] **Step 4: Vérifier le JSON-LD**

Run: `curl -s http://localhost:3000/expertises/odoo | grep -o '"@type":"[A-Za-z]*"'`
Expected: la sortie contient `"@type":"Service"`, `"@type":"Organization"`, `"@type":"OfferCatalog"`, `"@type":"Offer"` (plusieurs), `"@type":"BreadcrumbList"`, `"@type":"ListItem"` (×3), `"@type":"FAQPage"`, `"@type":"Question"` (×6), `"@type":"Answer"` (×6).

- [ ] **Step 5: Commit final (si des ajustements ont été faits pendant la vérification)**

```bash
git status
git add -A -- ':!sshpass_1.09-1_amd64.deb'
git commit -m "fix(odoo): ajustements suite a la verification visuelle"
```

(Ne committer que si des changements existent réellement — sinon, sauter cette étape.)
