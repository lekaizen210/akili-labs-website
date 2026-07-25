import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { BASE_URL, buildAlternates } from "@/lib/seo";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home.meta" });
  const tLayout = await getTranslations({ locale, namespace: "Layout" });
  const alternates = buildAlternates("/", locale as "fr" | "en");

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: t("title"),
      template: "%s | AKILI Labs",
    },
    description: t("description"),
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
    alternates,
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
      locale: locale === "en" ? "en_US" : "fr_FR",
      url: alternates.canonical,
      siteName: "AKILI Labs",
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: "/logo-akili.png",
          width: 1600,
          height: 893,
          alt: tLayout("ogImageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
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
}

function buildOrganizationJsonLd(description: string, availableLanguage: string[]) {
  return {
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
    description,
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
      email: "contact@akililabs.io",
      contactType: "customer service",
      availableLanguage,
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
}

function buildWebsiteJsonLd(locale: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "AKILI Labs",
    description,
    publisher: { "@id": `${BASE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/blog?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
    inLanguage: locale === "en" ? "en-US" : "fr-FR",
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Layout" });
  const organizationJsonLd = buildOrganizationJsonLd(t("organization.description"), ["French", "English"]);
  const websiteJsonLd = buildWebsiteJsonLd(locale, t("website.description"));

  return (
    <html lang={locale} className={`${manrope.variable} ${inter.variable}`}>
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
        <NextIntlClientProvider>
          <a href="#main-content" className="skip-to-content">
            Aller au contenu principal
          </a>
          <MotionProvider>
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
          </MotionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
