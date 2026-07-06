import type { Metadata } from "next";

const BASE_URL = "https://akililabs.com";

export const metadata: Metadata = {
  title: "Contact — Parlons de votre projet",
  description:
    "Contactez AKILI Labs pour votre projet de transformation digitale, ERP Odoo, Intelligence Artificielle ou DevSecOps en zone UEMOA. Consultation initiale gratuite, réponse sous 24h ouvrées.",
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/contact`,
    title: "Contact — AKILI Labs",
    description:
      "Parlons de votre projet ERP, IA ou DevSecOps en Afrique de l'Ouest. Consultation initiale gratuite.",
    images: [{ url: "/logo-akili.png", width: 1600, height: 893, alt: "Contact AKILI Labs" }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
