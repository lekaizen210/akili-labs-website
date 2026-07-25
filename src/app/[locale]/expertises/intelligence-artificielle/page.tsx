import type { Metadata } from "next";
import IaHero from "@/components/ia/IaHero";
import IaProofBand from "@/components/ia/IaProofBand";
import IaWhyNow from "@/components/ia/IaWhyNow";
import IaDomains from "@/components/ia/IaDomains";
import IaSectors from "@/components/ia/IaSectors";
import IaMethodology from "@/components/ia/IaMethodology";
import IaResponsable from "@/components/ia/IaResponsable";
import IaWhyUs from "@/components/ia/IaWhyUs";
import IaKpis from "@/components/ia/IaKpis";
import IaStack from "@/components/ia/IaStack";
import IaResources from "@/components/ia/IaResources";
import IaFaq from "@/components/ia/IaFaq";
import IaCtaFinal from "@/components/ia/IaCtaFinal";
import { iaDomains, iaFaqs } from "@/lib/ia-data";
import { l } from "@/lib/i18n-content";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { BASE_URL, buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Ia.meta" });
  const alternates = buildAlternates("/expertises/intelligence-artificielle", locale as "fr" | "en");

  return {
    title: t("title"),
    description: t("description"),
    alternates,
    openGraph: {
      type: "website",
      url: alternates.canonical,
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [{ url: "/ia-images/ia-hero.jpg", width: 2304, height: 1728, alt: t("ogImageAlt") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: ["/ia-images/ia-hero.jpg"],
    },
  };
}

export default async function IntelligenceArtificiellePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Ia.meta" });
  const url = buildAlternates("/expertises/intelligence-artificielle", locale as "fr" | "en").canonical;

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
    serviceType: "Intelligence Artificielle",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t("offerCatalogName"),
      itemListElement: iaDomains.map((d, i) => ({
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
      { "@type": "ListItem", position: 3, name: t("breadcrumbIa"), item: url },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: iaFaqs.map((f) => ({
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
      <IaHero />
      <IaProofBand />
      <IaWhyNow />
      <IaDomains />
      <IaSectors />
      <IaMethodology />
      <IaResponsable />
      <IaWhyUs />
      <IaKpis />
      <IaStack />
      <IaResources />
      <IaFaq />
      <IaCtaFinal />
    </>
  );
}
