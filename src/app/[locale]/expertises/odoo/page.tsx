import type { Metadata } from "next";
import OdooHero from "@/components/odoo/OdooHero";
import OdooIntro from "@/components/odoo/OdooIntro";
import OdooImplementation from "@/components/odoo/OdooImplementation";
import OdooModules from "@/components/odoo/OdooModules";
import OdooConformite from "@/components/odoo/OdooConformite";
import OdooServices from "@/components/odoo/OdooServices";
import OdooHostingSupport from "@/components/odoo/OdooHostingSupport";
import OdooApproach from "@/components/odoo/OdooApproach";
import OdooSectors from "@/components/odoo/OdooSectors";
import OdooWhyUs from "@/components/odoo/OdooWhyUs";
import OdooStats from "@/components/odoo/OdooStats";
import OdooResources from "@/components/odoo/OdooResources";
import OdooFaq from "@/components/odoo/OdooFaq";
import OdooCtaFinal from "@/components/odoo/OdooCtaFinal";
import { odooModuleCategories, odooFaqs } from "@/lib/odoo-data";
import { l } from "@/lib/i18n-content";
import { setRequestLocale, getTranslations } from "next-intl/server";

const BASE_URL = "https://akililabs.com";
const url = `${BASE_URL}/expertises/odoo`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Odoo.meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [{ url: "/logo-akili.png", width: 1600, height: 893, alt: t("ogImageAlt") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: ["/logo-akili.png"],
    },
  };
}

export default async function OdooExpertisePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Odoo.meta" });

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": url,
    name: t("serviceName"),
    description: t("serviceDescription"),
    url,
    provider: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "AKILI Labs",
    },
    areaServed: ["Côte d'Ivoire", "Sénégal", "Mali", "Burkina Faso", "Niger", "Togo", "Bénin", "Guinée-Bissau"],
    serviceType: "Odoo ERP",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Modules Odoo",
      itemListElement: odooModuleCategories
        .flatMap((cat) => cat.modules)
        .map((m, i) => ({
          "@type": "Offer",
          position: i + 1,
          name: l(m.label, locale),
          offeredBy: { "@id": `${BASE_URL}/#organization` },
        })),
    },
    availableLanguage: ["French", "English"],
    termsOfService: `${BASE_URL}/contact`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("breadcrumbHome"), item: BASE_URL },
      { "@type": "ListItem", position: 2, name: t("breadcrumbExpertises"), item: `${BASE_URL}/expertises` },
      { "@type": "ListItem", position: 3, name: t("breadcrumbOdoo"), item: url },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: odooFaqs.map((f) => ({
      "@type": "Question",
      name: l(f.question, locale),
      acceptedAnswer: { "@type": "Answer", text: l(f.answer, locale) },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <OdooHero />
      <OdooIntro />
      <OdooImplementation />
      <OdooModules />
      <OdooConformite />
      <OdooServices />
      <OdooHostingSupport />
      <OdooApproach />
      <OdooSectors />
      <OdooWhyUs />
      <OdooStats />
      <OdooResources />
      <OdooFaq />
      <OdooCtaFinal />
    </>
  );
}
