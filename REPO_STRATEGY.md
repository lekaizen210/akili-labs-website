# Stratégie de Gestion de Repository — AKILI Labs Website

> **Version :** 1.0.0 | **Date :** 2026-06-29 | **Auteur :** AKILI Labs  
> **Classification :** Usage interne — Décision d'architecture DevOps

---

## Table des matières

1. [Analyse du projet actuel](#1-analyse-du-projet-actuel)
2. [Structuration GitHub](#2-structuration-github)
3. [Structuration GitLab](#3-structuration-gitlab)
4. [Comparatif GitHub vs GitLab](#4-comparatif-github-vs-gitlab)
5. [Recommandation pour AKILI Labs](#5-recommandation-pour-akili-labs)

---

## 1. Analyse du projet actuel

### État des lieux

| Composant | Statut | Observation |
|-----------|--------|-------------|
| Framework | Next.js 16 + React 19 + TypeScript | Aucun framework de test installé |
| CI/CD | `.github/workflows/deploy.yml` | Build + push GHCR + deploy SSH (mono-job) |
| Container | Dockerfile multi-stage ✔ | Image runner ~250 MB |
| Branches | Aucune stratégie définie | Travail direct sur `main` probable |
| Secrets | Non documentés | `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY`, `VPS_PORT` |
| Tests | Absents | ESLint + TypeScript uniquement |
| GHCR | Utilisé en production | `ghcr.io/<owner>/akili-labs-website` |
| Environnements | 1 seul (production) | Preprod non encore branché |

### Points forts actuels

- Pipeline Docker fonctionnel avec cache GitHub Actions (`type=gha`)
- Nginx durci avec TLS, rate-limiting et headers de sécurité
- Healthcheck post-déploiement intégré au workflow
- `.dockerignore` correct, Dockerfile non-root

### Lacunes identifiées

- Pas de workflow CI séparé (lint + tsc) pour les PRs
- Pas de protection de branche sur `main`
- Pas de templates PR / Issues
- Pas de configuration Dependabot
- Pas de workflow de preprod distinct
- Pas de pipeline GitLab (si migration envisagée)

---

## 2. Structuration GitHub

### 2.1 Arborescence complète des fichiers DevOps

```
akili-labs-website/
│
├── .github/
│   ├── workflows/
│   │   ├── ci.yml                    ← Lint + TypeScript (sur PR)
│   │   ├── deploy-preprod.yml        ← Build + deploy preprod (sur develop)
│   │   └── deploy-prod.yml           ← Build + deploy prod (sur tag v*)
│   │
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md             ← Template de bug
│   │   └── feature_request.md        ← Template de fonctionnalité
│   │
│   ├── PULL_REQUEST_TEMPLATE.md      ← Template de PR
│   ├── CODEOWNERS                    ← Propriétaires de code
│   └── dependabot.yml                ← Mises à jour auto des dépendances
│
├── .github/ (déjà existant)
│   └── workflows/
│       └── deploy.yml                ← (à refactorer — voir §2.3)
│
├── docker-compose.yml
├── docker-compose.prod.yml
├── Dockerfile
├── nginx/nginx.conf
├── ARCHITECTURE.md
├── REPO_STRATEGY.md                  ← Ce fichier
└── src/
```

### 2.2 Stratégie de branches

```
main ─────────────────────────────────────────── (protégée, production)
  │
  └── develop ──────────────────────────────────── (intégration, preprod)
        │
        ├── feature/hero-animation
        ├── feature/blog-cms
        ├── hotfix/nginx-rate-limit
        └── chore/dependabot-updates
```

**Règles de protection de branche `main` (à configurer sur GitHub) :**
- ✔ Require pull request review (1 approbateur minimum)
- ✔ Require status checks : `ci / lint-typecheck`
- ✔ Require branches to be up to date before merge
- ✔ Restrict deletions
- ✔ Require signed commits (optionnel mais recommandé)

**Règles de protection de branche `develop` :**
- ✔ Require pull request review (pas d'approbateur obligatoire)
- ✔ Require status checks : `ci / lint-typecheck`

### 2.3 Workflows GitHub Actions

**Décomposition recommandée des jobs :**

```
Push sur feature/* ou develop (PR ouverte)
  └─► ci.yml
        ├── lint       (ESLint core-web-vitals)
        └── typecheck  (tsc --noEmit)

Push sur develop (merge)
  └─► deploy-preprod.yml
        ├── lint
        ├── typecheck
        ├── build-docker → push ghcr :preprod-<sha>
        └── deploy-preprod → SSH VPS preprod

Tag v* sur main
  └─► deploy-prod.yml
        ├── build-docker → push ghcr :<version> + :latest
        └── deploy-prod → SSH VPS production
            └── healthcheck post-déploiement
```

### 2.4 Secrets GitHub à configurer

| Secret | Valeur | Environnement |
|--------|--------|---------------|
| `VPS_HOST` | IP ou domaine du VPS | production, preprod |
| `VPS_USER` | Utilisateur SSH deploy | production, preprod |
| `VPS_SSH_KEY` | Clé privée SSH (PEM) | production, preprod |
| `VPS_PORT` | Port SSH (défaut: 22) | production, preprod |
| `PREPROD_HOST` | IP ou domaine preprod | preprod |
| `PREPROD_USER` | Utilisateur SSH preprod | preprod |
| `PREPROD_SSH_KEY` | Clé privée SSH preprod | preprod |
| `SLACK_WEBHOOK` | Webhook Slack (optionnel) | tous |

> `GITHUB_TOKEN` est automatiquement fourni par Actions — ne pas le créer manuellement.

### 2.5 Dependabot

Le fichier `.github/dependabot.yml` ci-joint configure :
- Mises à jour npm (dépendances Next.js, React, Framer Motion) — hebdomadaire
- Mises à jour des actions GitHub — hebdomadaire
- Mises à jour Docker (images de base) — mensuelle

---

## 3. Structuration GitLab

### 3.1 Arborescence complète des fichiers DevOps

```
akili-labs-website/
│
├── .gitlab-ci.yml                    ← Pipeline principal
│
├── .gitlab/
│   ├── merge_request_templates/
│   │   └── Default.md                ← Template de Merge Request
│   └── issue_templates/
│       ├── Bug.md                    ← Template de bug
│       └── Feature.md                ← Template de fonctionnalité
│
├── docker-compose.yml
├── docker-compose.prod.yml
├── Dockerfile
├── nginx/nginx.conf
└── src/
```

### 3.2 Stratégie de branches (identique)

```
main ───────────────────────────────────────── (protégée, production)
  │
  └── develop ──────────────────────────────── (intégration, preprod)
        │
        ├── feature/hero-animation
        ├── feature/blog-cms
        ├── hotfix/nginx-rate-limit
        └── chore/dep-updates
```

**Règles à configurer sur GitLab (Settings → Repository → Protected Branches) :**

| Branche | Merge autorisé | Push autorisé | Force-push |
|---------|----------------|---------------|------------|
| `main` | Maintainers | No one | Non |
| `develop` | Developers + Maintainers | Developers + Maintainers | Non |

### 3.3 Structure du pipeline `.gitlab-ci.yml`

```
Push feature/* (MR ouverte)
  └─► stage: validate
        ├── job: lint
        └── job: typecheck

Push develop (merge MR)
  └─► stage: validate → build → deploy
        ├── lint
        ├── typecheck
        ├── build-docker → push GitLab Registry :preprod-<sha>
        └── deploy-preprod

Tag v* sur main
  └─► stage: validate → build → deploy → notify
        ├── lint + typecheck
        ├── build-docker → push :v* + :latest
        ├── deploy-production (environment: production)
        └── notify-slack (optionnel)
```

### 3.4 Variables GitLab à configurer

*Settings → CI/CD → Variables*

| Variable | Type | Environnement | Description |
|----------|------|---------------|-------------|
| `VPS_HOST` | Variable | All | IP/domaine VPS prod |
| `VPS_USER` | Variable | All | Utilisateur SSH |
| `VPS_SSH_KEY` | File | All | Clé privée SSH (PEM) |
| `VPS_PORT` | Variable | All | Port SSH |
| `PREPROD_HOST` | Variable | preprod | IP/domaine VPS preprod |
| `CI_REGISTRY_USER` | Auto | — | Fourni par GitLab |
| `CI_REGISTRY_PASSWORD` | Auto | — | Fourni par GitLab |
| `CI_REGISTRY_IMAGE` | Auto | — | `registry.gitlab.com/<user>/<repo>` |

> GitLab fournit `CI_REGISTRY_*` automatiquement — aucun secret à créer pour le registry.

### 3.5 GitLab Environments

À configurer dans *Operate → Environments* :

| Environnement | URL | Protection | Déclencheur |
|---------------|-----|------------|-------------|
| `preprod` | `https://preprod.akililabs.com` | Developers | Push `develop` |
| `production` | `https://akililabs.com` | Maintainers | Tag `v*` |

---

## 4. Comparatif GitHub vs GitLab

### 4.1 Vue d'ensemble

| Critère | GitHub | GitLab | Avantage |
|---------|--------|--------|----------|
| **Popularité / notoriété** | N°1 mondial | N°2 | GitHub |
| **Interface utilisateur** | Moderne, intuitive | Complète mais dense | GitHub |
| **CI/CD natif** | GitHub Actions | GitLab CI/CD | Égalité |
| **Container Registry** | GHCR (gratuit) | GitLab Registry (gratuit) | Égalité |
| **Intégration existante** | ✔ Déjà utilisé (GHCR) | Nécessite migration | **GitHub** |
| **Option self-hosted** | GitHub Enterprise (payant) | GitLab CE (gratuit !) | **GitLab** |
| **Sécurité applicative** | Dependabot, CodeQL | SAST, DAST, Container Scan | GitLab |
| **Gestion de projets** | Issues + Projects | Issues + Boards + Roadmap | GitLab |
| **Pages statiques** | GitHub Pages (gratuit) | GitLab Pages (gratuit) | Égalité |
| **Wikis** | Wiki intégré | Wiki + Pages intégrés | GitLab |

---

### 4.2 CI/CD en détail

| Fonctionnalité CI/CD | GitHub Actions | GitLab CI/CD |
|----------------------|---------------|--------------|
| **Syntaxe** | YAML — jobs indépendants | YAML — stages séquentiels |
| **Marketplace d'actions** | ✔ +30 000 actions disponibles | ✗ Catalogue plus limité |
| **Cache** | `actions/cache@v4` | Cache automatique par clé |
| **Artifacts** | `actions/upload-artifact` | `artifacts:` intégré |
| **Environnements** | Environments avec gates | Environments avec stop action |
| **Runners self-hosted** | ✔ GitHub-hosted + self-hosted | ✔ GitLab-hosted + self-hosted |
| **Minutes gratuites (free)** | 2 000 min/mois | 400 min/mois |
| **Parallel jobs (free)** | Jusqu'à 20 jobs | 1 seul job simultané |
| **Secrets niveaux** | Org / Repo / Environnement | Groupe / Projet / Environnement |
| **Variables protégées** | Environments | Protected variables |

> **Point critique pour AKILI Labs :** 400 min/mois GitLab Free est insuffisant pour un pipeline Docker.  
> Build Docker (~3-4 min) + deploy = ~8 min/push → 50 déploiements/mois max avant dépassement.

---

### 4.3 Sécurité

| Fonctionnalité Sécurité | GitHub | GitLab |
|-------------------------|--------|--------|
| **Scan dépendances** | Dependabot (gratuit) | GitLab Dependency Scanning (Ultimate) |
| **Analyse de code statique** | CodeQL (gratuit publics, payant privés) | SAST intégré (Ultimate) |
| **Scan de secrets** | Secret scanning (gratuit) | Secret Detection (gratuit ✔) |
| **Scan conteneurs** | — | Container Scanning (Ultimate) |
| **DAST** | — | DAST (Ultimate) |
| **Audit log** | ✔ Org level | ✔ Groupe level |
| **2FA obligatoire** | ✔ | ✔ |
| **Signed commits** | ✔ | ✔ |

> Pour le plan Free/Pro, **GitHub est plus généreux** sur la sécurité (Dependabot + CodeQL gratuits).  
> GitLab nécessite Ultimate (~99$/user/mois) pour SAST complet.

---

### 4.4 Tarifs

| Plan | GitHub | GitLab |
|------|--------|--------|
| **Gratuit** | Repos publics illimités, 2 000 min CI, GHCR inclus | 400 min CI, 5 GB storage |
| **Pro / Premium** | $4/user/mois | $29/user/mois |
| **Team / Ultimate** | $4/user/mois | $99/user/mois |
| **Self-hosted** | GitHub Enterprise (payant) | **GitLab CE gratuit** ✔ |

---

### 4.5 Contexte Afrique de l'Ouest

| Critère contextuel | GitHub | GitLab |
|--------------------|--------|--------|
| **Latence registry** | GHCR (AWS US-East) | GitLab.com (GCP US) |
| **Self-hosted possible** | Coûteux | ✔ GitLab CE sur VPS local |
| **Souveraineté des données** | Données chez Microsoft (US) | Self-hosted = données en Côte d'Ivoire |
| **Conformité RGPD/données clients** | Acceptable | Meilleur si self-hosted |
| **Visibilité client (portfolio)** | github.com — reconnu mondialement | gitlab.com — moins connu des non-tech |
| **Présentation AO** | "Code sur GitHub" = crédibilité | "Code sur GitLab CE auto-hébergé" = souveraineté |

---

### 4.6 Matrice de décision pondérée

| Critère | Poids | GitHub (note/5) | GitLab (note/5) |
|---------|-------|----------------|----------------|
| Intégration existante | 25% | 5 (GHCR déjà utilisé) | 2 (migration) |
| CI/CD minutes gratuites | 20% | 5 (2000 min) | 2 (400 min) |
| Facilité d'utilisation | 15% | 5 | 3 |
| Sécurité plan gratuit | 15% | 4 (Dependabot) | 3 |
| Option self-hosted futur | 10% | 2 | 5 (CE gratuit) |
| Souveraineté données | 10% | 2 | 5 (si self-hosted) |
| Écosystème / marketplace | 5% | 5 | 3 |
| **TOTAL PONDÉRÉ** | **100%** | **4.25 / 5** | **2.9 / 5** |

---

## 5. Recommandation pour AKILI Labs

### Décision recommandée : **GitHub (court terme) → GitLab CE self-hosted (moyen terme)**

#### Phase 1 — Court terme (maintenant → 6 mois) : **GitHub**

**Pourquoi :** Le projet est déjà connecté à GHCR. Migrer vers GitLab maintenant ajouterait de la friction sans bénéfice immédiat. Les 2 000 minutes CI/mois suffisent largement pour l'équipe actuelle.

Actions à réaliser :
- [ ] Refactorer `deploy.yml` en 3 workflows distincts (ci / preprod / prod)
- [ ] Ajouter protection de branche sur `main` et `develop`
- [ ] Configurer Dependabot (fichier fourni dans ce repo)
- [ ] Ajouter templates PR et Issues
- [ ] Créer l'environnement GitHub `preprod`

#### Phase 2 — Moyen terme (6-12 mois) : **GitLab CE self-hosted (optionnel)**

**Pourquoi envisager la migration :**
- Si le nombre de projets clients augmente → GitLab CE offre un contrôle total
- Souveraineté des données : héberger le SCM sur un VPS en Côte d'Ivoire ou en Europe
- Présenter aux clients institutionnels une infrastructure "on-premise" renforce la confiance
- GitLab CE inclut : CI/CD, registry, wikis, issues, MR, pages — tout gratuit

**Architecture GitLab CE self-hosted recommandée :**

```
VPS dédié GitLab (4 vCPU, 8 GB RAM, 100 GB SSD)
├── GitLab CE (Docker)
├── GitLab Runner (Docker executor)
├── PostgreSQL (intégré)
├── Redis (intégré)
└── Nginx reverse proxy + Let's Encrypt
    └── git.akililabs.com
```

#### Ce qu'il ne faut PAS faire

- ✗ Migrer vers GitLab maintenant sans préparation (risque de casser le pipeline actuel)
- ✗ Héberger le code sur GitLab.com ET GitHub en parallèle (confusion, dette)
- ✗ Rester sur un mono-workflow `deploy.yml` qui mélange CI et CD

---

*Document maintenu par AKILI Labs — Pôle Architecture & DevOps*  
*Confidentiel — AKILI Labs — www.akililabs.com*
