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
import { setRequestLocale } from "next-intl/server";

const BASE_URL = "https://akililabs.com";
const url = `${BASE_URL}/expertises/transformation-digitale`;

export const metadata: Metadata = {
  title: "Transformation Digitale en Afrique de l'Ouest — Audit SI, SDI, GED, BPM",
  description:
    "Audit des systèmes d'information, Schéma Directeur Informatique, dématérialisation, GED, BPM et gouvernance SI pour les organisations de la zone UEMOA. Consultation initiale gratuite.",
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    title: "Expertise Transformation Digitale — AKILI Labs Côte d'Ivoire",
    description:
      "Du diagnostic au pilotage : nous sécurisons votre transformation digitale avant, pendant et après le choix des technologies.",
    images: [
      {
        url: "/transformation-digitale-images/td-contexte.png",
        width: 1400,
        height: 1000,
        alt: "AKILI Labs — Expertise Transformation Digitale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expertise Transformation Digitale — AKILI Labs",
    description: "Audit SI, SDI, dématérialisation, GED, BPM et gouvernance SI en zone UEMOA.",
    images: ["/transformation-digitale-images/td-contexte.png"],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": url,
  name: "Expertise Transformation Digitale",
  description:
    "Audit des systèmes d'information, Schéma Directeur Informatique, urbanisation du SI, dématérialisation, GED, BPM et gouvernance SI.",
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
    name: "Domaines d'intervention Transformation Digitale",
    itemListElement: tdDomains.map((d, i) => ({
      "@type": "Offer",
      position: i + 1,
      name: d.title,
      offeredBy: { "@id": `${BASE_URL}/#organization` },
    })),
  },
  availableLanguage: ["French"],
  termsOfService: `${BASE_URL}/contact`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Expertises", item: `${BASE_URL}/expertises` },
    { "@type": "ListItem", position: 3, name: "Transformation Digitale", item: url },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${url}#faq`,
  mainEntity: tdFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default async function TransformationDigitalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

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
