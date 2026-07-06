import type { Metadata } from "next";

const BASE_URL = "https://akililabs.com";

export const metadata: Metadata = {
  title: "À propos — Notre mission et notre équipe",
  description:
    "Découvrez AKILI Labs, société de conseil IT et intégrateur Odoo ERP basée à Abidjan, Côte d'Ivoire : notre mission, nos valeurs et notre équipe d'experts en zone UEMOA.",
  alternates: { canonical: `${BASE_URL}/a-propos` },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/a-propos`,
    title: "À propos — AKILI Labs",
    description:
      "Notre mission, nos valeurs et notre équipe d'experts en transformation digitale, ERP Odoo, IA et DevSecOps en Afrique de l'Ouest.",
    images: [{ url: "/logo-akili.png", width: 1600, height: 893, alt: "À propos AKILI Labs" }],
  },
};

export default function AProposLayout({ children }: { children: React.ReactNode }) {
  return children;
}
