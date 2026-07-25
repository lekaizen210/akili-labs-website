# Migration domaine production : akililabs.com → akililabs.io

> **Version :** 1.0 | **Date :** 2026-07-25 | **Branche :** `feature-domaine-prod-io`
> **Classification :** Usage interne — Runbook ops

## Contexte

Le site (canonical, sitemap, hreflang, JSON-LD) annonce `https://akililabs.io`
depuis le chantier i18n de juillet 2026, mais la production est encore servie
sur `akililabs.com`. La preprod est déjà sur `.io` (`test.akililabs.io`,
certificats Let's Encrypt actifs), preuve que la zone DNS `.io` est
opérationnelle côté VPS.

Cette branche prépare la bascule. **Ne pas la merger dans `main` avant d'avoir
exécuté les étapes 1 et 2 ci-dessous sur le VPS** : le nginx référencera des
certificats `.io` qui doivent exister.

## Contenu de la branche

| Fichier | Changement |
|---------|-----------|
| `nginx/nginx.conf` | Serveur principal 443 → `akililabs.io` (certs `.io`) ; nouveau bloc 443 `www.akililabs.io` → 301 apex ; nouveau bloc 443 `akililabs.com`/`www` (certs `.com` existants) → 301 `akililabs.io` ; bloc 80 étendu aux 4 noms (ACME + 301) |
| `.github/workflows/deploy-prod.yml` | `DOMAIN`, health check, URL d'environnement → `akililabs.io` |
| `.gitlab-ci.yml` | Prod → `akililabs.io` ; preprod fictive `preprod.akililabs.com` → `test.akililabs.io` |
| `.github/ISSUE_TEMPLATE/bug_report.md` | URLs à jour |

## Mode opératoire (ordre impératif)

### 1. DNS (registrar / zone akililabs.io)

```
akililabs.io.      A    <IP_VPS_PROD>
www.akililabs.io.  A    <IP_VPS_PROD>   (ou CNAME akililabs.io.)
```

Vérifier la propagation : `dig +short akililabs.io www.akililabs.io`

### 2. Certificat Let's Encrypt sur le VPS prod

Le bloc nginx `:80` actuel (encore en `.com`) est le **serveur par défaut** du
listener 80 : les challenges ACME pour `.io` y aboutissent déjà (webroot
`/var/www/certbot`). Émettre le certificat AVANT de merger :

```bash
certbot certonly --webroot -w /var/www/certbot \
  -d akililabs.io -d www.akililabs.io \
  --email contacts@akililabs.io --agree-tos --no-eff-email
ls /etc/letsencrypt/live/akililabs.io/   # fullchain.pem + privkey.pem attendus
```

Adapter si certbot tourne en conteneur (voir docker-compose.prod.yml).

### 3. Merger et déployer

```bash
git checkout main && git merge develop  # (ou PR) puis merger feature-domaine-prod-io
git push origin main                    # déclenche deploy-prod.yml (health check .io)
```

### 4. Vérifications post-bascule

```bash
curl -sI https://akililabs.io/ | head -1                     # 200
curl -sI https://www.akililabs.io/ | grep -i location        # → https://akililabs.io/
curl -sI https://akililabs.com/ | grep -i location           # → https://akililabs.io/
curl -s https://akililabs.io/sitemap.xml | head -3
```

Puis : Google Search Console — ajouter la propriété `akililabs.io`, demander le
changement d'adresse depuis la propriété `.com`.

### 5. Après bascule

- **Conserver** le renouvellement du certificat `.com` tant que le bloc de
  redirection existe (sinon les visiteurs `.com` verront une erreur TLS).
- Garder la redirection `.com` → `.io` au moins 12 mois (SEO).
- Renouvellement `.io` : couvert par le cron certbot existant (les deux
  certificats sont dans `/etc/letsencrypt/renewal/`).

## Rollback

Revenir au commit précédent de `main` et redéployer : l'ancien nginx.conf
(`.com` partout) est autonome, les certificats `.com` n'ayant pas été touchés.
