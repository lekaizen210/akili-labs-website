import type { Metadata } from "next";
import BiHero from "@/components/business-intelligence/BiHero";
import BiProofBand from "@/components/business-intelligence/BiProofBand";
import BiIntro from "@/components/business-intelligence/BiIntro";
import BiPilotage from "@/components/business-intelligence/BiPilotage";
import BiServices from "@/components/business-intelligence/BiServices";
import BiArchitecture from "@/components/business-intelligence/BiArchitecture";
import BiGouvernance from "@/components/business-intelligence/BiGouvernance";
import BiReglementaire from "@/components/business-intelligence/BiReglementaire";
import BiMethodology from "@/components/business-intelligence/BiMethodology";
import BiSectors from "@/components/business-intelligence/BiSectors";
import BiWhyUs from "@/components/business-intelligence/BiWhyUs";
import BiStack from "@/components/business-intelligence/BiStack";
import BiFaq from "@/components/business-intelligence/BiFaq";
import BiCtaFinal from "@/components/business-intelligence/BiCtaFinal";
import { biServices, biFaqs } from "@/lib/business-intelligence-data";
import { l } from "@/lib/i18n-content";
import { setRequestLocale, getTranslations } from "next-intl/server";

const BASE_URL = "https://akililabs.com";
const url = `${BASE_URL}/expertises/business-intelligence`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Bi.meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [{ url: "/bi-images/bi-contexte.png", width: 1400, height: 1000, alt: t("ogImageAlt") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: ["/bi-images/bi-contexte.png"],
    },
  };
}

export default async function BusinessIntelligencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Bi.meta" });

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
    serviceType: "Business Intelligence",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t("offerCatalogName"),
      itemListElement: biServices.map((s, i) => ({
        "@type": "Offer",
        position: i + 1,
        name: l(s.title, locale),
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
      { "@type": "ListItem", position: 3, name: t("breadcrumbBi"), item: url },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: biFaqs.map((f) => ({
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
      <BiHero />
      <BiProofBand />
      <BiIntro />
      <BiPilotage />
      <BiServices />
      <BiArchitecture />
      <BiGouvernance />
      <BiReglementaire />
      <BiMethodology />
      <BiSectors />
      <BiWhyUs />
      <BiStack />
      <BiFaq />
      <BiCtaFinal />
      {/*
        Sections en attente de validation (gabarits documentés dans
        content/marketing/drafts/2026-07-12_bi-page-content-v2.md) :
        - BiCaseStudy : cas client + accord écrit requis
        - BiTeam : practice leader + vraie photographie requise
        - BiResources : au moins un contenu réel téléchargeable requis
      */}
    </>
  );
}
