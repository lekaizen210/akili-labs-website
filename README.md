# AKILI Labs Website

Site vitrine officiel d'AKILI Labs, société de conseil IT et intégrateur ERP Odoo basée en Côte d'Ivoire, avec un positionnement sur la zone UEMOA/OHADA.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

Le serveur de développement démarre par défaut sur `http://localhost:3000`.

## Structure

```text
src/
├── app/                 Pages App Router
├── components/          Composants UI et sections
│   ├── home/
│   ├── layout/
│   └── carrieres/
└── lib/
    ├── data.ts          Contenus éditoriaux structurés
    └── utils.ts
```

## Contenus À Maintenir

Les contenus métiers sont centralisés principalement dans `src/lib/data.ts` :

- expertises ;
- secteurs ;
- références ;
- statistiques ;
- équipe / pôles ;
- articles de blog.

Avant publication, vérifier que les références, coordonnées, liens sociaux et profils publics sont validés par la Direction Générale.

## Formulaires

Les formulaires Contact et Carrières ouvrent actuellement un email prérempli :

- `contact@akililabs.io`
- `rh@akililabs.com`

Pour une mise en production plus robuste, ajouter une API route ou connecter un service d'email/CRM, puis remplacer le flux `mailto:`.

## Identité Visuelle

Palette AKILI Labs :

- Bleu marine : `#1A2B3C`
- Orange AKILI : `#FF5500`
- Bleu clair : `#E8F0FE`
- Gris texte : `#374151`
- Bordures : `#D9E2EC`

## Déploiement

Points à vérifier avant livraison :

- `npm run lint`
- `npm run build`
- coordonnées réelles ;
- liens sociaux réels ;
- politique de confidentialité et mentions légales ;
- sitemap et robots ;
- favicon et images Open Graph.
