import type { Metadata } from "next";
import DmHero from "@/components/developpement-metiers/DmHero";
import DmIntro from "@/components/developpement-metiers/DmIntro";
import DmRoadmap from "@/components/developpement-metiers/DmRoadmap";
import DmDomains from "@/components/developpement-metiers/DmDomains";
import DmStandards from "@/components/developpement-metiers/DmStandards";
import DmServices from "@/components/developpement-metiers/DmServices";
import DmApproach from "@/components/developpement-metiers/DmApproach";
import DmSectors from "@/components/developpement-metiers/DmSectors";
import DmWhyUs from "@/components/developpement-metiers/DmWhyUs";
import DmStats from "@/components/developpement-metiers/DmStats";
import DmResources from "@/components/developpement-metiers/DmResources";
import DmFaq from "@/components/developpement-metiers/DmFaq";
import DmCtaFinal from "@/components/developpement-metiers/DmCtaFinal";
import { dmDomains, dmFaqs } from "@/lib/developpement-metiers-data";
import { l } from "@/lib/i18n-content";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { BASE_URL, buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "DevMetiers.meta" });
  const alternates = buildAlternates("/expertises/developpement-metiers", locale as "fr" | "en");

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
          url: "/developpement-metiers-images/dm-contexte.png",
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
      images: ["/developpement-metiers-images/dm-contexte.png"],
    },
  };
}

export default async function DeveloppementMetiersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "DevMetiers.meta" });
  const url = buildAlternates("/expertises/developpement-metiers", locale as "fr" | "en").canonical;

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
    serviceType: "Développement logiciel sur mesure",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t("offerCatalogName"),
      itemListElement: dmDomains.map((d, i) => ({
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
      { "@type": "ListItem", position: 3, name: t("breadcrumbDevMetiers"), item: url },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: dmFaqs.map((f) => ({
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
      <DmHero />
      <DmIntro />
      <DmRoadmap />
      <DmDomains />
      <DmStandards />
      <DmServices />
      <DmApproach />
      <DmSectors />
      <DmWhyUs />
      <DmStats />
      <DmResources />
      <DmFaq />
      <DmCtaFinal />
    </>
  );
}
