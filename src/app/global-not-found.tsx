// Fallback 404 global (Next 16, expérimental `globalNotFound`).
//
// Nécessaire car le layout racine applicatif est défini sur un segment
// dynamique top-level (`app/[locale]/layout.tsx`) : pour toute URL qui ne
// correspond à aucune route générée (catch-all `[locale]/[...rest]` avec
// `dynamicParams = false`), Next.js ne peut pas déterminer quelle locale
// utiliser et court-circuite le rendu applicatif habituel. Ce fichier
// bypasse le rendu normal (cf. node_modules/next/dist/docs/.../not-found.md
// §global-not-found.js) et doit donc reproduire lui-même tout ce que le
// layout `[locale]` fournirait normalement : styles globaux, polices,
// chrome de site (Navbar, lien d'évitement, Footer).
//
// Navbar/Footer/NotFoundContent utilisent désormais le `Link`/`usePathname`
// next-intl de @/i18n/navigation (Task 2), qui exigent un contexte
// NextIntlClientProvider (locale + messages) pour résoudre le préfixe de
// route — sans quoi le build échoue au prerendering de `/_not-found`
// (`usePathname` lève une erreur hors provider). Cette page étant hors du
// segment `[locale]`, elle ne peut pas dériver la locale de la requête : on
// fournit donc explicitement les messages FR ci-dessous, cohérent avec la
// contrepartie assumée plus bas (page 404 toujours en français).
//
// Contrepartie assumée : cette page n'est pas localisée (toujours en
// français), au même titre que l'ancien site pré-i18n qui n'avait qu'une
// seule page 404. Elle garantit en échange un vrai statut HTTP 404 (non
// streamé) pour toute URL inconnue, condition non négociable pour le SEO.
import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MotionProvider } from "@/components/ui/MotionProvider";
import NotFoundContent from "./[locale]/not-found-content";
import { NextIntlClientProvider } from "next-intl";
import frMessages from "../../messages/fr.json";

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
        <a href="#main-content" className="skip-to-content">
          Aller au contenu principal
        </a>
        <NextIntlClientProvider locale="fr" messages={frMessages}>
          <MotionProvider>
            <Navbar />
            <main id="main-content">
              <NotFoundContent />
            </main>
            <Footer />
          </MotionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
