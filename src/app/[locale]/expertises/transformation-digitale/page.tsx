import type { Metadata } from "next";
import TdHero from "@/components/transformation-digitale/TdHero";
import TdIntro from "@/components/transformation-digitale/TdIntro";
import TdRoadmap from "@/components/transformation-digitale/TdRoadmap";
import TdDomains from "@/components/transformation-digitale/TdDomains";
import TdServices from "@/components/transformation-digitale/TdServices";
import TdGouvernance from "@/components/transformation-digitale/TdGouvernance";
import TdApproach from "@/components/transformation-digitale/TdApproach";
import TdSectors from "@/components/transformation-digitale/TdSectors";
import TdWhyUs from "@/components/transformation-digitale/TdWhyUs";
import TdStats from "@/components/transformation-digitale/TdStats";
import TdResources from "@/components/transformation-digitale/TdResources";
import TdFaq from "@/components/transformation-digitale/TdFaq";
import TdCtaFinal from "@/components/transformation-digitale/TdCtaFinal";
import { tdDomains, tdFaqs } from "@/lib/transformation-digitale-data";
import { l } from "@/lib/i18n-content";
import { setRequestLocale, getTranslations } from "next-intl/server";

const BASE_URL = "https://akililabs.com";
const url = `${BASE_URL}/expertises/transformation-digitale`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Td.meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        {
          url: "/transformation-digitale-images/td-contexte.png",
          width: 1400,
          height: 1000,
          alt: t("ogImageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: ["/transformation-digitale-images/td-contexte.png"],
    },
  };
}

export default async function TransformationDigitalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Td.meta" });

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
    serviceType: "Transformation Digitale",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t("offerCatalogName"),
      itemListElement: tdDomains.map((d, i) => ({
        "@type": "Offer",
        position: i + 1,
        name: l(d.title, locale),
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
      { "@type": "ListItem", position: 3, name: t("breadcrumbTd"), item: url },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: tdFaqs.map((f) => ({
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
      <TdHero />
      <TdIntro />
      <TdRoadmap />
      <TdDomains />
      <TdServices />
      <TdGouvernance />
      <TdApproach />
      <TdSectors />
      <TdWhyUs />
      <TdStats />
      <TdResources />
      <TdFaq />
      <TdCtaFinal />
    </>
  );
}
