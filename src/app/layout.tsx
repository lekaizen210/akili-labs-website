import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MotionProvider } from "@/components/ui/MotionProvider";

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

const BASE_URL = "https://akililabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "AKILI Labs — Transformation Digitale, ERP, IA & DevSecOps en Afrique",
    template: "%s | AKILI Labs",
  },
  description:
    "AKILI Labs accompagne les organisations de la zone UEMOA dans leur transformation digitale : intégration ERP Odoo, Intelligence Artificielle, DevSecOps et développement sur mesure.",
  keywords: [
    "transformation digitale Afrique",
    "intégrateur Odoo Côte d'Ivoire",
    "ERP OHADA",
    "consultant ERP Afrique de l'Ouest",
    "Intelligence Artificielle Abidjan",
    "DevSecOps UEMOA",
    "conseil IT Côte d'Ivoire",
    "AKILI Labs",
    "Odoo UEMOA",
    "système d'information Afrique",
  ],
  authors: [{ name: "AKILI Labs", url: BASE_URL }],
  creator: "AKILI Labs",
  publisher: "AKILI Labs",
  alternates: { canonical: BASE_URL },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "icon", url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    siteName: "AKILI Labs",
    title: "AKILI Labs — Transformation Digitale en Afrique",
    description:
      "Votre partenaire de confiance pour la transformation digitale en Afrique : ERP Odoo, IA, DevSecOps et développement sur mesure. Zone UEMOA / OHADA.",
    images: [
      {
        url: "/logo-akili.png",
        width: 1600,
        height: 893,
        alt: "AKILI Labs — ERP • AI • DevSecOps en Afrique de l'Ouest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AKILI Labs — Transformation Digitale en Afrique",
    description:
      "Intégrateur ERP Odoo, IA et DevSecOps en Afrique de l'Ouest. Expertise OHADA / UEMOA.",
    images: ["/logo-akili.png"],
    creator: "@akililabs",
    site: "@akililabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "AKILI Labs",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo-akili.png`,
    width: 1600,
    height: 893,
  },
  description:
    "AKILI Labs est une société de conseil IT et intégrateur Odoo ERP basée à Abidjan, Côte d'Ivoire. Nous accompagnons les organisations de la zone UEMOA dans leur transformation digitale : ERP, Intelligence Artificielle, DevSecOps et développement sur mesure.",
  foundingDate: "2020",
  areaServed: ["Côte d'Ivoire", "Sénégal", "Mali", "Burkina Faso", "Niger", "Togo", "Bénin", "Guinée-Bissau"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abidjan",
    addressCountry: "CI",
    addressRegion: "Abidjan",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@akililabs.com",
    contactType: "customer service",
    availableLanguage: ["French"],
    areaServed: "UEMOA",
  },
  sameAs: [
    "https://www.linkedin.com/company/akili-labs",
  ],
  knowsAbout: [
    "Odoo ERP",
    "OHADA accounting",
    "Digital transformation",
    "Artificial Intelligence",
    "DevSecOps",
    "UEMOA",
    "West Africa IT consulting",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "AKILI Labs",
  description: "Conseil IT, ERP Odoo, Intelligence Artificielle & DevSecOps en Afrique de l'Ouest",
  publisher: { "@id": `${BASE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/blog?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "fr-FR",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Aller au contenu principal
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
