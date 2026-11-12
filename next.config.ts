import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // 'unsafe-eval' uniquement en dev (React Refresh) ; scripts inline requis par Next (hydratation, JSON-LD)
      `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : ""}`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self' mailto:",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  output: "standalone",

  // Le layout racine est défini sur un segment dynamique top-level
  // (app/[locale]/layout.tsx) : suivant la doc Next 16, ce cas nécessite
  // global-not-found.js pour composer une page 404 cohérente (brandée)
  // pour les URLs qui ne correspondent à aucune route générée.
  experimental: {
    globalNotFound: true,
  },

  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
      {
        source: "/expertises/erp",
        destination: "/expertises/odoo",
        permanent: true,
      },
      {
        source: "/en/expertises/erp",
        destination: "/en/expertises/odoo",
        permanent: true,
      },
      // Pas de page d'index des expertises : redirection serveur (308) vers la section de l'accueil
      {
        source: "/expertises",
        destination: "/#expertises",
        permanent: true,
      },
      {
        source: "/en/expertises",
        destination: "/en#expertises",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // Compression activée (fallback si Nginx absent)
  compress: true,

  // Désactiver le X-Powered-By header
  poweredByHeader: false,
};

export default withNextIntl(nextConfig);
