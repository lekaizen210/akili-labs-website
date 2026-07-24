// Fallback 404 global (Next 16, expérimental `globalNotFound`).
//
// Nécessaire car le layout racine applicatif est défini sur un segment
// dynamique top-level (`app/[locale]/layout.tsx`) : pour toute URL qui ne
// correspond à aucune route générée (catch-all `[locale]/[...rest]` avec
// `dynamicParams = false`), Next.js ne peut pas déterminer quelle locale
// utiliser et court-circuite le rendu applicatif habituel. Ce fichier
// bypasse le rendu normal et doit donc importer lui-même les styles
// globaux, les polices et fournir le document HTML complet.
//
// Contrepartie assumée : cette page n'est pas localisée (toujours en
// français), au même titre que l'ancien site pré-i18n qui n'avait qu'une
// seule page 404. Elle garantit en échange un vrai statut HTTP 404 (non
// streamé) pour toute URL inconnue, condition non négociable pour le SEO.
import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/ui/MotionProvider";
import NotFoundContent from "./[locale]/not-found-content";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Page non trouvée — AKILI Labs",
  description: "La page que vous cherchez n'existe pas ou a été déplacée.",
};

export default function GlobalNotFound() {
  return (
    <html lang="fr" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <MotionProvider>
          <NotFoundContent />
        </MotionProvider>
      </body>
    </html>
  );
}
