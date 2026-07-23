# Design — Site bilingue FR/EN avec next-intl

**Date :** 2026-07-22
**Statut :** Validé par le client (Jonathan)
**Périmètre :** Tout le site akili-labs-website

## Contexte et décisions actées

Le site AKILI Labs (Next.js 16, App Router, ~30 pages) est aujourd'hui 100 % francophone,
avec les textes répartis entre les composants (en dur) et les fichiers de données
`src/lib/*-data.ts`. Décisions validées avec l'utilisateur :

| Décision | Choix |
|----------|-------|
| Langues | Français (défaut) + Anglais |
| Stratégie d'URL | FR à la racine (URLs inchangées), EN sous préfixe `/en/` |
| Slugs | Slugs français conservés sous `/en/` (`/en/a-propos`, `/en/expertises`…) |
| Périmètre | Tout le site (toutes les pages, y compris blog, FAQ, légal) |
| Traductions | Produites par Claude (anglais B2B conseil IT), relues par l'utilisateur |
| Bascule de langue | Sélecteur manuel FR/EN uniquement — aucune redirection automatique navigateur |
| Bibliothèque | next-intl |
| Domaine canonique | **https://akililabs.io** (corriger le `akililabs.com` actuel au passage) |

## 1. Routing et structure des fichiers

- Toutes les pages migrent de `src/app/...` vers `src/app/[locale]/...`.
- Config next-intl : `defaultLocale: "fr"`, `locales: ["fr", "en"]`,
  `localePrefix: "as-needed"` → le français reste servi sans préfixe
  (`akililabs.io/expertises/odoo`), l'anglais sous `/en/`
  (`akililabs.io/en/expertises/odoo`).
- `src/middleware.ts` (fourni par next-intl) résout la locale. Pas de détection
  `Accept-Language` : la racine sert toujours le français.
- Restent hors `[locale]` : `robots.ts`, `sitemap.ts`, assets statiques.
- `not-found.tsx` et `loading.tsx` migrent dans `[locale]`.

## 2. Organisation des traductions

Deux sources de contenu, deux traitements :

### 2.1 Textes en dur dans les composants

Extraits vers `messages/fr.json` et `messages/en.json`, organisés par namespace
calqué sur l'arborescence des composants : `Navbar`, `Footer`, `Home.hero`,
`Odoo.faq`, `Carrieres`, etc.

**Contrainte de non-régression :** le français extrait est strictement identique
au texte actuel — zéro changement visuel sur le site FR.

### 2.2 Fichiers de données (`src/lib/*-data.ts`)

Ces fichiers mêlent structure (slugs, couleurs, icônes) et contenu textuel.
Les champs textuels deviennent bilingues : `{ fr: "...", en: "..." }`.
Un helper `localize(data, locale)` résout la langue au moment du rendu.
La structure (slugs, couleurs, icônes, ordre) reste unique et partagée.

### 2.3 Style des traductions anglaises

Anglais professionnel B2B (ton conseil IT / intégrateur ERP). Termes conservés
tels quels : Odoo, OHADA, UEMOA, DevSecOps, TMA (expliquer « TMA » à la première
occurrence par « application maintenance »), noms propres, sigles de modules.

## 3. Composants

- Composants serveur : `getTranslations()` ; composants clients : `useTranslations()`.
- Tous les liens internes (`next/link`) passent au `Link` de next-intl
  (préfixe `/en` automatique en contexte anglais) : Navbar, Footer, CTA, cartes…
- `<html lang>` devient dynamique (`fr` / `en`).

## 4. Sélecteur de langue

Composant `LanguageSwitcher` (« FR | EN ») :

- Emplacements : Navbar desktop, menu mobile, rappel dans le Footer.
- Comportement : bascule vers **la même page** dans l'autre langue
  (`usePathname` + `router.replace` de next-intl), jamais vers l'accueil.
- Style charte graphique : texte gris `#374151`, langue active en Bleu Marine
  `#1A2B3C` avec accent Orange `#FF5500`.

## 5. SEO bilingue

- `generateMetadata` dépendant de la locale : titres/descriptions traduits sous `/en/`.
- `hreflang` via `alternates.languages` sur chaque page : `fr`, `en`,
  `x-default` → version française.
- `sitemap.ts` : chaque URL + sa jumelle `/en/` avec annotations `alternates`.
- `BASE_URL` corrigé partout : `https://akililabs.io` (layout, sitemap, robots).

## 6. Gestion des erreurs et cas limites

- Locale inconnue (`/de/...`) → 404 via `notFound()`.
- Clé de traduction manquante en EN → fallback configuré sur le français
  (jamais de clé brute affichée, jamais d'échec de build pour clé manquante).

## 7. Vérification

1. `npm run build` sans erreur (le build statique compile les deux langues).
2. Contrôle visuel FR : non-régression, rendu identique à l'actuel.
3. Contrôle visuel EN sur les pages clés via le serveur local.
4. Vérification des balises `hreflang` et du sitemap générés.

**Workflow :** tout en local sur une branche `feature-i18n`. Aucun push sur
`develop` sans validation explicite de l'utilisateur.
