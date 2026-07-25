import type { Metadata } from "next";
import DsHero from "@/components/devsecops/DsHero";
import DsIntro from "@/components/devsecops/DsIntro";
import DsRoadmap from "@/components/devsecops/DsRoadmap";
import DsDomains from "@/components/devsecops/DsDomains";
import DsStack from "@/components/devsecops/DsStack";
import DsServices from "@/components/devsecops/DsServices";
import DsSecurite from "@/components/devsecops/DsSecurite";
import DsApproach from "@/components/devsecops/DsApproach";
import DsSectors from "@/components/devsecops/DsSectors";
import DsWhyUs from "@/components/devsecops/DsWhyUs";
import DsStats from "@/components/devsecops/DsStats";
import DsResources from "@/components/devsecops/DsResources";
import DsFaq from "@/components/devsecops/DsFaq";
import DsCtaFinal from "@/components/devsecops/DsCtaFinal";
import { dsDomains, dsFaqs } from "@/lib/devsecops-data";
import { l } from "@/lib/i18n-content";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { BASE_URL, buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "DevSecOps.meta" });
  const alternates = buildAlternates("/expertises/devsecops", locale as "fr" | "en");

  return {
    title: t("title"),
    description: t("description"),
    alternates,
    openGraph: {
      type: "website",
      url: alternates.canonical,
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        {
          url: "/devsecops-images/ds-contexte.png",
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
      images: ["/devsecops-images/ds-contexte.png"],
    },
  };
}

export default async function DevSecOpsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "DevSecOps.meta" });
  const url = buildAlternates("/expertises/devsecops", locale as "fr" | "en").canonical;

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
    serviceType: "DevSecOps",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t("offerCatalogName"),
      itemListElement: dsDomains.map((d, i) => ({
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
      { "@type": "ListItem", position: 3, name: t("breadcrumbDevSecOps"), item: url },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: dsFaqs.map((f) => ({
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
      <DsHero />
      <DsIntro />
      <DsRoadmap />
      <DsDomains />
      <DsStack />
      <DsServices />
      <DsSecurite />
      <DsApproach />
      <DsSectors />
      <DsWhyUs />
      <DsStats />
      <DsResources />
      <DsFaq />
      <DsCtaFinal />
    </>
  );
}
