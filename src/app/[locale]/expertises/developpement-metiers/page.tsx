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
import { setRequestLocale } from "next-intl/server";

const BASE_URL = "https://akililabs.com";
const url = `${BASE_URL}/expertises/developpement-metiers`;

export const metadata: Metadata = {
  title: "Développement d'Applications Métiers en Afrique de l'Ouest — Web, Mobile, APIs",
  description:
    "Applications web et mobiles, portails collaboratifs, APIs et plateformes métiers sur mesure pour les organisations de la zone UEMOA. Sprints courts, périmètre contractualisé, code livré. Consultation initiale gratuite.",
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    title: "Expertise Développement Métiers — AKILI Labs Côte d'Ivoire",
    description:
      "Le sur mesure sans dérapage : garde-fous vérifiables, qualité mesurée, réversibilité. L'outil épouse votre métier.",
    images: [
      {
        url: "/developpement-metiers-images/dm-contexte.png",
        width: 1400,
        height: 1000,
        alt: "AKILI Labs — Expertise Développement Métiers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expertise Développement Métiers — AKILI Labs",
    description: "Applications web, mobiles et plateformes métiers sur mesure en zone UEMOA.",
    images: ["/developpement-metiers-images/dm-contexte.png"],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": url,
  name: "Expertise Développement Métiers",
  description:
    "Développement sur mesure d'applications web et mobiles, portails collaboratifs, APIs REST et plateformes métiers.",
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
    name: "Domaines d'intervention Développement Métiers",
    itemListElement: dmDomains.map((d, i) => ({
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
    { "@type": "ListItem", position: 3, name: "Développement Métiers", item: url },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${url}#faq`,
  mainEntity: dmFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default async function DeveloppementMetiersPage({
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
