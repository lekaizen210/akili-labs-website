# Document d'Architecture — AKILI Labs Website

> **Classification :** Confidentiel — Usage interne  
> **Version :** 1.0.0  
> **Date :** 2026-06-29  
> **Auteur :** AKILI Labs — Pôle Architecture & DevOps  
> **Statut :** Approuvé

---

## Table des matières

1. [Vue d'ensemble](#1-vue-densemble)
2. [Stack technique](#2-stack-technique)
3. [Environnements](#3-environnements)
4. [Architecture des conteneurs](#4-architecture-des-conteneurs)
5. [Couche Reverse Proxy (Nginx)](#5-couche-reverse-proxy-nginx)
6. [Stratégie de cache](#6-stratégie-de-cache)
7. [Sécurité](#7-sécurité)
8. [Pipeline CI/CD](#8-pipeline-cicd)
9. [Observabilité & Monitoring](#9-observabilité--monitoring)
10. [Scalabilité & Évolutions](#10-scalabilité--évolutions)
11. [Décisions d'Architecture (ADR)](#11-décisions-darchitecture-adr)
12. [Procédures Opérationnelles](#12-procédures-opérationnelles)

---

## 1. Vue d'ensemble

Le site vitrine d'AKILI Labs est une application **Next.js 16 (App Router)** rendue en mode hybride SSG/SSR, exposée via un reverse proxy **Nginx** avec TLS terminé en amont. L'application est conteneurisée via **Docker** et orchestrée avec **Docker Compose**.

### Schéma d'architecture global

```
                           ┌─────────────────────────────────────────────────┐
                           │                   Internet                       │
                           └────────────────────┬────────────────────────────┘
                                                │ HTTPS :443 / HTTP :80
                           ┌────────────────────▼────────────────────────────┐
                           │              VPS Ubuntu 22.04 LTS                │
                           │                                                   │
                           │  ┌─────────────────────────────────────────────┐ │
                           │  │         Docker Network : public              │ │
                           │  │                                               │ │
                           │  │  ┌──────────────────────────────────────┐   │ │
                           │  │  │  Container : akili-nginx              │   │ │
                           │  │  │  Image     : nginx:1.27-alpine        │   │ │
                           │  │  │  Ports     : 80, 443                  │   │ │
                           │  │  │  Volumes   : /etc/letsencrypt (ro)    │   │ │
                           │  │  │             nginx-logs                 │   │ │
                           │  │  │  Caps      : NET_BIND_SERVICE only     │   │ │
                           │  │  └──────────────┬───────────────────────┘   │ │
                           │  │                 │ HTTP :3000 (interne)       │ │
                           │  └─────────────────┼───────────────────────────┘ │
                           │                    │                               │
                           │  ┌─────────────────▼───────────────────────────┐ │
                           │  │         Docker Network : internal             │ │
                           │  │                                               │ │
                           │  │  ┌──────────────────────────────────────┐   │ │
                           │  │  │  Container : akili-labs-website       │   │ │
                           │  │  │  Image     : ghcr.io/akililabs/...    │   │ │
                           │  │  │  Port      : 3000 (non exposé)        │   │ │
                           │  │  │  Runtime   : Node.js 20 Alpine        │   │ │
                           │  │  │  User      : nextjs (UID 1001)        │   │ │
                           │  │  │  FS        : read-only + /tmp tmpfs   │   │ │
                           │  │  │  Limits    : 1 CPU / 512 MB RAM       │   │ │
                           │  │  └──────────────────────────────────────┘   │ │
                           │  └─────────────────────────────────────────────┘ │
                           │                                                   │
                           │  ┌─────────────────────────────────────────────┐ │
                           │  │  /etc/letsencrypt  (Let's Encrypt TLS)       │ │
                           │  └─────────────────────────────────────────────┘ │
                           └───────────────────────────────────────────────────┘
```

---

## 2. Stack technique

### Frontend / Application

| Composant | Technologie | Version | Rôle |
|-----------|-------------|---------|------|
| Framework | Next.js | 16.2.9 | SSR/SSG/App Router |
| UI Library | React | 19.2.4 | Rendu composants |
| Language | TypeScript | ≥ 5.x | Typage statique |
| Styles | Tailwind CSS | v4 | Utility-first CSS |
| Animations | Framer Motion | ^11.0 | Animations déclaratives |
| Icons | Lucide React | ^0.447 | Iconographie SVG |
| Polices | next/font/google | intégré | Manrope + Inter (auto-hébergées) |

### Infrastructure

| Composant | Technologie | Version | Rôle |
|-----------|-------------|---------|------|
| Conteneurs | Docker | ≥ 24.x | Isolation applicative |
| Orchestration | Docker Compose | v2 | Multi-services |
| Reverse Proxy | Nginx | 1.27-alpine | TLS, cache, rate-limit |
| Runtime | Node.js | 20-alpine | Exécution Next.js |
| TLS | Let's Encrypt (Certbot) | — | Certificats HTTPS gratuits |
| OS Hôte | Ubuntu | 22.04 LTS | Système d'exploitation VPS |

### Build & Qualité

| Outil | Usage |
|-------|-------|
| ESLint (core-web-vitals) | Lint statique |
| TypeScript `tsc --noEmit` | Vérification de types |
| `npm run build` | Build de production Next.js |
| Docker multi-stage build | Image minimale (250 MB) |

---

## 3. Environnements

Le projet distingue **trois environnements** avec des niveaux de rigueur croissants.

### 3.1 Environnement de Développement (DEV)

| Paramètre | Valeur |
|-----------|--------|
| Déclencheur | Local — `npm run dev` |
| URL | `http://localhost:3000` |
| Mode Next.js | `development` (HMR actif) |
| TLS | Non (HTTP pur) |
| Docker | Non requis |
| Nginx | Non requis |
| Logs | Console standard |
| Rechargement | Hot Module Replacement |

**Usage :** développement quotidien, itérations rapides, pas de passage obligé par Docker.

```bash
# Démarrage local
cd akili-labs-website
npm install
npm run dev
# → http://localhost:3000
```

---

### 3.2 Environnement de Préproduction (PREPROD)

| Paramètre | Valeur |
|-----------|--------|
| Déclencheur | Push sur branche `develop` (ou tag `preprod-*`) |
| URL | `https://preprod.akililabs.com` (sous-domaine dédié) |
| Mode Next.js | `production` |
| TLS | Let's Encrypt (certificat séparé) |
| Docker | Oui — `docker-compose.yml` |
| Nginx | Oui — même configuration qu'en production |
| Image | `ghcr.io/akililabs/akili-labs-website:preprod-<SHA>` |
| Données | Données de recette (non sensibles) |
| Accès | Restreint — IP whitelist ou HTTP Basic Auth |

**Schéma Preprod :**

```
  Internet (accès restreint)
        │
  Nginx preprod (port 443)
  preprod.akililabs.com
        │
  Container Next.js (preprod)
  IMAGE: ...:preprod-<commit-sha>
        │
  NODE_ENV=production
  (config identique à prod, données de recette)
```

**Variables d'environnement spécifiques preprod (`.env.preprod`) :**

```env
DOMAIN=preprod.akililabs.com
VERSION=preprod-<commit-sha>
GHCR_OWNER=akililabs
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
# Optionnel : accès restreint
NGINX_BASIC_AUTH=true
```

**Déploiement preprod :**

```bash
# Build et push de l'image de preprod
docker build -t ghcr.io/akililabs/akili-labs-website:preprod-$(git rev-parse --short HEAD) .
docker push ghcr.io/akililabs/akili-labs-website:preprod-$(git rev-parse --short HEAD)

# Sur le VPS preprod
VERSION=preprod-<sha> GHCR_OWNER=akililabs docker compose pull
VERSION=preprod-<sha> GHCR_OWNER=akililabs docker compose up -d --force-recreate
```

**Critères de passage PREPROD → PROD :**
- [ ] Build Docker sans erreur (lint + tsc + next build)
- [ ] Healthcheck HTTP 200 confirmé
- [ ] Validation visuelle des bannières et animations
- [ ] Test des formulaires Contact et Carrières
- [ ] Test des Core Web Vitals (Lighthouse ≥ 90)
- [ ] Validation DG ou Responsable Pôle

---

### 3.3 Environnement de Production (PROD)

| Paramètre | Valeur |
|-----------|--------|
| Déclencheur | Tag Git `v*` ou push sur `main` (après merge) |
| URL | `https://akililabs.com` + `https://www.akililabs.com` |
| Mode Next.js | `production` |
| TLS | Let's Encrypt — auto-renouvellement (Certbot cron) |
| Docker | Oui — `docker-compose.prod.yml` |
| Nginx | Oui — config durcie (HSTS, CSP, rate-limit) |
| Image | `ghcr.io/akililabs/akili-labs-website:<VERSION>` |
| Restart policy | `unless-stopped` |
| Resource limits | 1 CPU · 512 MB RAM |

**Schéma Production :**

```
  Internet
      │
      ├─ :80  → redirect 301 → HTTPS
      │         + ACME challenge (Let's Encrypt)
      │
      └─ :443 ──► Nginx 1.27-alpine
                    │  TLS 1.2/1.3 — ECDHE
                    │  HSTS max-age=63072000
                    │  OCSP Stapling
                    │  Rate limiting (30 req/s général, 5 req/s formulaires)
                    │  Cache proxy (_next/static: 365j, images: 7j)
                    │
                    └─► akili-labs-website (réseau interne)
                          Next.js 16 — standalone mode
                          Port 3000 (non exposé)
                          FS read-only + tmpfs /tmp
                          User nextjs (non-root, UID 1001)
```

**Variables d'environnement production (`.env.production`) :**

```env
DOMAIN=akililabs.com
VERSION=<commit-sha-court>
GHCR_OWNER=akililabs
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

**Déploiement production (procédure manuelle ou CI) :**

```bash
# 1. Définir la version
export VERSION=$(git rev-parse --short HEAD)

# 2. Build et push de l'image
docker build -t ghcr.io/akililabs/akili-labs-website:$VERSION .
docker push ghcr.io/akililabs/akili-labs-website:$VERSION

# 3. Sur le VPS production
export VERSION=<sha>
docker compose -f docker-compose.prod.yml pull
docker compose -f docker-compose.prod.yml up -d --force-recreate

# 4. Vérification post-déploiement
curl -s -o /dev/null -w "%{http_code}" https://akililabs.com/
docker ps --filter "name=akili-labs-website"
```

---

## 4. Architecture des conteneurs

### 4.1 Dockerfile — Build multi-stage

Le Dockerfile utilise **3 stages** pour minimiser la taille de l'image finale.

```
┌─────────────────────────────────────────────────────────────────┐
│ Stage 1 : deps (node:20-alpine)                                 │
│  ├── npm ci --prefer-offline                                    │
│  └── node_modules/ → ~200 MB                                    │
└────────────────────────────────┬────────────────────────────────┘
                                 │ COPY --from=deps
┌────────────────────────────────▼────────────────────────────────┐
│ Stage 2 : builder (node:20-alpine)                              │
│  ├── npm run lint      (ESLint core-web-vitals)                 │
│  ├── npm run build     (next build → .next/standalone)          │
│  └── output: .next/standalone/ + .next/static/                  │
└────────────────────────────────┬────────────────────────────────┘
                                 │ COPY --from=builder (sélectif)
┌────────────────────────────────▼────────────────────────────────┐
│ Stage 3 : runner (node:20-alpine) — IMAGE FINALE                │
│  ├── Utilisateur non-root : nextjs (UID 1001)                   │
│  ├── public/           (assets statiques)                       │
│  ├── .next/standalone/ (serveur Node minimal)                   │
│  ├── .next/static/     (JS/CSS bundlés)                         │
│  ├── Taille finale : ~250 MB                                    │
│  └── CMD: node server.js (port 3000)                            │
└─────────────────────────────────────────────────────────────────┘
```

### 4.2 Réseaux Docker

| Réseau | Type | Conteneurs | Usage |
|--------|------|------------|-------|
| `public` | bridge | nginx + akili-website | Trafic HTTP entrant |
| `internal` | bridge (internal: true) | akili-website | Isolation — pas d'accès Internet direct |

> Le conteneur Next.js n'a **pas** accès à Internet en production grâce au réseau `internal`. Seul Nginx (réseau `public`) peut l'appeler.

### 4.3 Sécurité des conteneurs

| Mesure | Nginx | Next.js |
|--------|-------|---------|
| `no-new-privileges` | ✔ | ✔ |
| `cap_drop: ALL` | ✔ | ✔ |
| `cap_add` | NET_BIND_SERVICE | — |
| `read_only` FS | — | ✔ |
| `tmpfs /tmp` | — | ✔ (64 MB) |
| Utilisateur non-root | root → worker | nextjs (1001) |
| Resource limits | — | 1 CPU / 512 MB |

### 4.4 Healthchecks

| Conteneur | Commande | Interval | Timeout | Retries |
|-----------|----------|----------|---------|---------|
| nginx | `wget /healthz` | 30s | 5s | 3 |
| akili-website | `wget http://localhost:3000/` | 30s | 10s | 3 |

Le service nginx **dépend** du healthcheck Next.js (`condition: service_healthy`) — garantit un démarrage ordonné.

---

## 5. Couche Reverse Proxy (Nginx)

### 5.1 Flux de requêtes

```
Client HTTP :80
    │
    ├─ /.well-known/acme-challenge/  → Certbot (ACME)
    └─ /*                            → 301 Redirect HTTPS

Client HTTPS :443
    │
    ├─ /healthz              → 200 OK (probe interne, pas de log)
    │
    ├─ /_next/static/*       → Proxy + Cache 365 jours (immutable)
    ├─ /_next/image          → Proxy + Cache 7 jours
    ├─ /*.{ico,png,svg...}   → Proxy + Cache 30 jours
    │
    ├─ /contact              → Rate limit STRICT (5 req/s) + Proxy
    ├─ /carrieres            → Rate limit STRICT (5 req/s) + Proxy
    │
    └─ /*                    → Rate limit général (30 req/s) + Proxy
                               no-cache (SSG/SSR dynamique)
```

### 5.2 Configuration TLS

| Paramètre | Valeur |
|-----------|--------|
| Protocoles | TLS 1.2 + TLS 1.3 uniquement |
| Ciphers | ECDHE-ECDSA/RSA-AES128/256-GCM-SHA256/384, CHACHA20 |
| OCSP Stapling | Activé (résolveurs 1.1.1.1 + 8.8.8.8) |
| Session cache | shared:SSL:10m |
| Session tickets | Désactivés (forward secrecy) |
| HSTS | max-age=63072000 ; includeSubDomains ; preload |

### 5.3 En-têtes de sécurité HTTP

| En-tête | Valeur |
|---------|--------|
| `Strict-Transport-Security` | max-age=63072000; includeSubDomains; preload |
| `X-Frame-Options` | DENY |
| `X-Content-Type-Options` | nosniff |
| `Referrer-Policy` | strict-origin-when-cross-origin |
| `Permissions-Policy` | camera=(), microphone=(), geolocation=(), payment=() |
| `X-XSS-Protection` | 1; mode=block |
| `Content-Security-Policy` | Voir nginx.conf — défaut 'self' + polices Google |

---

## 6. Stratégie de cache

### Matrice de cache

| Ressource | Cache Nginx | Cache-Control navigateur | Justification |
|-----------|-------------|--------------------------|---------------|
| `/_next/static/*` | 365 jours | `public, max-age=31536000, immutable` | Hash dans le nom → cache éternel |
| `/_next/image` | 7 jours | `public, max-age=604800` | Images optimisées, semi-stables |
| Assets publics (ico, png…) | 30 jours | `public, max-age=2592000` | Fichiers rarement changés |
| Pages SSG/SSR | Aucun | `no-store, no-cache, must-revalidate` | Contenu potentiellement dynamique |

### Cache proxy Nginx

```nginx
proxy_cache_path /tmp/nginx_cache
  levels=1:2
  keys_zone=nextjs_cache:10m
  max_size=100m
  inactive=60m
  use_temp_path=off;
```

- Taille max : **100 MB**
- TTL d'inactivité : **60 minutes**
- Stockage en `/tmp` (volatile, vidé au redémarrage)

### Polices (next/font/google)

Les polices **Manrope** et **Inter** sont auto-hébergées par Next.js via `next/font/google` :
- Téléchargées au **build-time**
- Servies depuis le domaine propre (pas de requête externe Google au runtime)
- Cache navigateur : traité comme assets statiques `/_next/static/`

---

## 7. Sécurité

### 7.1 Matrice des risques

| Risque | Niveau | Mitigation |
|--------|--------|------------|
| DDoS applicatif | Moyen | Rate limiting Nginx (30 req/s général, 5 req/s formulaires) |
| Spam formulaires | Moyen | Rate limiting zone `forms` + validation client |
| Injection XSS | Faible | CSP + `X-XSS-Protection` + React escaping natif |
| Clickjacking | Faible | `X-Frame-Options: DENY` |
| MITM / écoute TLS | Faible | TLS 1.2/1.3 uniquement + HSTS preload |
| Escalade de privilèges | Faible | `no-new-privileges` + `cap_drop: ALL` |
| Fuite de données via FS | Faible | FS read-only + tmpfs limité |
| Compromission d'image | Faible | Images depuis GHCR privé + SHA pinning recommandé |

### 7.2 Principe du moindre privilège

```
┌─────────────────────────────────────────────────┐
│ Nginx container                                  │
│  • root requis pour :80/:443                     │
│  • cap_drop ALL + cap_add NET_BIND_SERVICE       │
│  • no-new-privileges                             │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ Next.js container                                │
│  • USER nextjs (UID 1001) — jamais root          │
│  • FS read-only (--read-only)                    │
│  • Seul /tmp accessible (tmpfs 64 MB)            │
│  • cap_drop ALL                                  │
│  • Réseau interne uniquement                     │
└─────────────────────────────────────────────────┘
```

### 7.3 Renouvellement TLS

```bash
# Renouvellement automatique via cron (crontab root du VPS)
0 3 * * * certbot renew --quiet && docker compose -f /opt/akili/docker-compose.prod.yml exec nginx nginx -s reload
```

---

## 8. Pipeline CI/CD

### 8.1 Architecture cible (GitHub Actions)

```
  ┌──────────────────────────────────────────────────────────────────┐
  │                     GitHub Repository                            │
  │                                                                  │
  │  Push feature/* ──► PR vers develop                              │
  │                                                                  │
  │  Merge develop ────► CI Pipeline                                 │
  │                         ├── npm run lint                         │
  │                         ├── npx tsc --noEmit                     │
  │                         ├── npm run build                        │
  │                         ├── docker build --no-cache              │
  │                         ├── docker push (GHCR) :preprod-<sha>   │
  │                         └── Deploy → VPS PREPROD                 │
  │                                                                  │
  │  Tag v* (sur main) ──► CD Pipeline                               │
  │                         ├── docker pull :preprod-<sha>           │
  │                         ├── docker tag → :VERSION                │
  │                         ├── docker push (GHCR) :VERSION          │
  │                         └── Deploy → VPS PRODUCTION              │
  └──────────────────────────────────────────────────────────────────┘
```

### 8.2 Fichier GitHub Actions recommandé (`.github/workflows/deploy.yml`)

```yaml
name: Build & Deploy

on:
  push:
    branches: [develop]
    tags: ['v*']

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - run: npm ci
      - run: npm run lint
      - run: npx tsc --noEmit
      - run: npm run build

      - name: Build & Push Docker
        uses: docker/build-push-action@v5
        with:
          push: true
          tags: |
            ghcr.io/akililabs/akili-labs-website:${{ github.sha }}
            ghcr.io/akililabs/akili-labs-website:latest

  deploy-preprod:
    needs: build
    if: github.ref == 'refs/heads/develop'
    runs-on: ubuntu-latest
    environment: preprod
    steps:
      - name: Deploy to preprod VPS
        uses: appleboy/ssh-action@v1
        with:
          host: ${{ secrets.PREPROD_HOST }}
          username: deploy
          key: ${{ secrets.PREPROD_SSH_KEY }}
          script: |
            export VERSION=${{ github.sha }}
            cd /opt/akili-preprod
            docker compose pull akili-website
            docker compose up -d --force-recreate akili-website

  deploy-prod:
    needs: build
    if: startsWith(github.ref, 'refs/tags/v')
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: Deploy to production VPS
        uses: appleboy/ssh-action@v1
        with:
          host: ${{ secrets.PROD_HOST }}
          username: deploy
          key: ${{ secrets.PROD_SSH_KEY }}
          script: |
            export VERSION=${{ github.sha }}
            cd /opt/akili
            docker compose -f docker-compose.prod.yml pull akili-website
            docker compose -f docker-compose.prod.yml up -d --force-recreate akili-website
```

### 8.3 Convention de versionnage

| Branche/Tag | Image Docker | Environnement |
|-------------|-------------|----------------|
| `feature/*` | Non publiée | DEV local |
| `develop` | `preprod-<sha-court>` | PREPROD |
| `main` (tag `v1.2.3`) | `v1.2.3` + `latest` | PRODUCTION |

---

## 9. Observabilité & Monitoring

### 9.1 Logs actuels

| Source | Format | Destination |
|--------|--------|-------------|
| Nginx access | `$remote_addr ... rt=$request_time` | `nginx-logs` (volume Docker) |
| Nginx error | warn level | `nginx-logs` |
| Next.js | Console stdout/stderr | Docker log driver |
| Docker logs | json-file | max-size 10 MB × 5 fichiers |

```bash
# Consultation des logs
docker logs akili-labs-website --tail 100 -f
docker exec akili-nginx cat /var/log/nginx/access.log | tail -50
```

### 9.2 Métriques cibles (évolution recommandée)

| Métrique | Outil recommandé | Seuil alerte |
|----------|------------------|--------------|
| Disponibilité HTTP | UptimeRobot / Betterstack | < 99.9% |
| Temps de réponse P95 | Prometheus + Grafana | > 2s |
| Erreurs 5xx | Sentry | > 0 |
| CPU/RAM conteneur | cAdvisor | > 80% |
| Espace disque VPS | Node Exporter | > 80% |
| Validité certificat TLS | Checkmk / Betterstack | < 14 jours |

### 9.3 Stack monitoring recommandée

```
VPS Production
├── Prometheus (scrape métriques)
├── cAdvisor (métriques Docker)
├── Node Exporter (métriques OS)
├── Nginx Exporter (métriques Nginx)
└── Grafana (dashboards)
    └── Alertmanager → Slack / email
```

---

## 10. Scalabilité & Évolutions

### 10.1 Limites actuelles

| Contrainte | Valeur actuelle | Limite estimée |
|------------|-----------------|----------------|
| RAM Next.js | 512 MB max | ~10 req/s concurrent |
| CPU Next.js | 1 vCPU max | ~50 req/s |
| Nginx workers | auto (= nb CPU) | ~10 000 connexions/s |
| Cache proxy | 100 MB (volatile) | Reset au redémarrage Nginx |

### 10.2 Évolutions planifiées

#### Court terme (0–3 mois)
- [ ] Mise en place GitHub Actions CI/CD (pipeline décrit §8)
- [ ] Ajout monitoring (UptimeRobot ou Betterstack)
- [ ] Ajout Sentry pour le suivi des erreurs JS côté client
- [ ] Séparation VPS preprod / VPS production

#### Moyen terme (3–6 mois)
- [ ] CDN devant Nginx (Cloudflare free tier) pour les assets statiques
- [ ] Formulaires connectés à un vrai backend (API route Next.js + Resend / Postmark)
- [ ] Cache SSR Redis pour les pages dynamiques (blog, références)
- [ ] Politique de confidentialité et mentions légales

#### Long terme (6–12 mois)
- [ ] Kubernetes si multiplication des services (ERP backend, API, etc.)
- [ ] WAF (Web Application Firewall) — Cloudflare ou ModSecurity
- [ ] Internationalisation (i18n) — anglais pour la zone CEDEAO anglophone
- [ ] CMS headless (Sanity / Strapi) pour l'édition sans code

---

## 11. Décisions d'Architecture (ADR)

### ADR-001 — Next.js App Router avec output standalone

**Contexte :** Choix du framework frontend.  
**Décision :** Next.js 16 App Router, mode `output: standalone`.  
**Justification :** Le mode standalone génère un bundle Node.js autonome (~250 MB) sans `node_modules` embarqués, idéal pour Docker. L'App Router permet le rendu hybride SSG/SSR par route.  
**Alternatives écartées :** Nuxt.js (moins mature pour le marché africain), Remix (écosystème plus petit).

---

### ADR-002 — Docker multi-stage avec lint obligatoire

**Contexte :** Qualité des images de production.  
**Décision :** Le Dockerfile exécute `npm run lint` et `npm run build` dans le stage builder. Un build cassé = une image non produite.  
**Justification :** Garantit qu'aucune image non conforme n'atteint GHCR ou le VPS.  
**Contrainte connue :** Le lint via `eslint-config-next/core-web-vitals` interdit les `<link>` Google Fonts dans le code → migration vers `next/font/google` (ADR-003).

---

### ADR-003 — Polices via next/font/google (pas de <link> externe)

**Contexte :** Le rule ESLint `@next/next/no-page-custom-font` de `core-web-vitals` bloquait le build Docker.  
**Décision :** Migration de `<link rel="stylesheet" href="fonts.googleapis.com/...">` vers `next/font/google` (Manrope + Inter).  
**Justification :** `next/font/google` auto-héberge les polices au build-time → 0 requête externe Google au runtime → meilleur CLS + conformité CSP.

---

### ADR-004 — Nginx comme reverse proxy (pas de Traefik/Caddy)

**Contexte :** Choix du proxy entrant.  
**Décision :** Nginx 1.27-alpine avec configuration manuelle.  
**Justification :** Contrôle granulaire du cache par route, rate-limiting par zone, configuration TLS durcie, expertise interne éprouvée.  
**Alternatives écartées :** Traefik (auto-discovery Docker utile mais config TLS moins précise), Caddy (HTTPS automatique mais moins de contrôle cache).

---

### ADR-005 — Réseaux Docker séparés (public / internal)

**Contexte :** Isolation réseau du conteneur applicatif.  
**Décision :** Deux réseaux : `public` (nginx + nextjs) et `internal: true` (nextjs seul).  
**Justification :** Le conteneur Next.js ne peut pas initier de connexions sortantes vers Internet. Réduit la surface d'attaque en cas de compromission de l'application.

---

## 12. Procédures Opérationnelles

### 12.1 Déploiement d'urgence (hotfix)

```bash
# 1. Créer et merger un hotfix
git checkout -b hotfix/fix-critique main
# ... corriger ...
git commit -m "fix: correction critique #xxx"
git push origin hotfix/fix-critique
# Merger sur main après review
git tag v1.x.y
git push origin v1.x.y

# 2. Build et push immédiat
export VERSION=$(git rev-parse --short HEAD)
docker build -t ghcr.io/akililabs/akili-labs-website:$VERSION .
docker push ghcr.io/akililabs/akili-labs-website:$VERSION

# 3. Déploiement prod (sur VPS)
VERSION=<sha> docker compose -f docker-compose.prod.yml up -d --force-recreate
```

### 12.2 Rollback

```bash
# Identifier la version précédente
docker images ghcr.io/akililabs/akili-labs-website

# Rollback vers une version précise
VERSION=<sha-precedent> docker compose -f docker-compose.prod.yml up -d --force-recreate

# Vérification
curl -s -o /dev/null -w "%{http_code}" https://akililabs.com/
```

### 12.3 Renouvellement certificat TLS (manuel)

```bash
# Vérifier la date d'expiration
echo | openssl s_client -servername akililabs.com -connect akililabs.com:443 2>/dev/null | openssl x509 -noout -dates

# Renouveler
certbot renew --nginx
docker exec akili-nginx nginx -s reload
```

### 12.4 Surveillance des logs en temps réel

```bash
# Logs Nginx (accès)
docker exec akili-nginx tail -f /var/log/nginx/access.log

# Logs Nginx (erreurs)
docker exec akili-nginx tail -f /var/log/nginx/error.log

# Logs Next.js
docker logs akili-labs-website -f --tail 200

# Statut des conteneurs
docker ps --filter "name=akili"
```

---

*Document maintenu par le Pôle Architecture AKILI Labs — toute modification structurelle doit être tracée en ADR et validée par le Responsable de Pôle (RACI : Choix technologique).*

---

**Pied de page :** Confidentiel — AKILI Labs — www.akililabs.com
