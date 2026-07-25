/**
 * Domaine canonique du site AKILI Labs.
 * Toute construction d'URL absolue (metadata, JSON-LD, sitemap, robots) doit
 * passer par cette constante — ne jamais coder "akililabs.com" en dur.
 */
export const BASE_URL = "https://akililabs.io";

/**
 * Construit les `alternates` (canonical + hreflang) d'une page pour une
 * locale donnée. `path` est le chemin FR sans préfixe de locale (ex.
 * "/expertises/odoo", ou "/" pour la page d'accueil).
 *
 * - `fr` pointe vers l'URL sans préfixe (locale par défaut).
 * - `en` pointe vers l'URL préfixée `/en`.
 * - `x-default` pointe vers la version FR.
 * - `canonical` correspond à l'URL de la locale courante.
 */
export function buildAlternates(
  path: string,
  locale: "fr" | "en"
): { canonical: string; languages: { fr: string; en: string; "x-default": string } } {
  const frUrl = path === "/" ? BASE_URL : `${BASE_URL}${path}`;
  const enUrl = `${BASE_URL}/en${path === "/" ? "" : path}`;
  return {
    canonical: locale === "fr" ? frUrl : enUrl,
    languages: { fr: frUrl, en: enUrl, "x-default": frUrl },
  };
}
