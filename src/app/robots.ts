import { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Règle générale — tout autoriser sauf les routes internes Next.js
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Crawlers IA de recherche — autorisés explicitement pour la citation
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
      // Crawlers d'entraînement IA uniquement — bloqués (pas de citation, juste du training)
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "omgili", disallow: "/" },
      { userAgent: "omgilibot", disallow: "/" },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
