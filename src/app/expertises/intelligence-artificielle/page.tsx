import type { Metadata } from "next";
import IaHero from "@/components/ia/IaHero";
import IaProofBand from "@/components/ia/IaProofBand";
import IaWhyNow from "@/components/ia/IaWhyNow";
import IaDomains from "@/components/ia/IaDomains";
import IaSectors from "@/components/ia/IaSectors";
import IaMethodology from "@/components/ia/IaMethodology";
import IaWhyUs from "@/components/ia/IaWhyUs";
import IaKpis from "@/components/ia/IaKpis";
import IaStack from "@/components/ia/IaStack";
import IaResources from "@/components/ia/IaResources";
import IaFaq from "@/components/ia/IaFaq";
import IaCtaFinal from "@/components/ia/IaCtaFinal";
import { iaDomains, iaFaqs } from "@/lib/ia-data";

const BASE_URL = "https://akililabs.com";
const url = `${BASE_URL}/expertises/intelligence-artificielle`;

export const metadata: Metadata = {
  title: "Expertise Intelligence Artificielle en Afrique de l'Ouest",
  description:
    "IA Générative, Machine Learning, Computer Vision, NLP en langues africaines et Business Intelligence. Solutions IA concrètes pour les entreprises d'Afrique de l'Ouest. Consultation initiale gratuite.",
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    title: "Expertise Intelligence Artificielle — AKILI Labs Côte d'Ivoire",
    description:
      "Du chatbot métier au moteur de prédiction, nous transformons vos données en avantages compétitifs pour la zone UEMOA/CEDEAO.",
    images: [{ url: "/ia-images/ia-hero.png", width: 1536, height: 864, alt: "AKILI Labs — Expertise Intelligence Artificielle" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expertise Intelligence Artificielle — AKILI Labs",
    description: "Solutions d'IA concrètes pour les entreprises d'Afrique de l'Ouest.",
    images: ["/ia-images/ia-hero.png"],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": url,
  name: "Expertise Intelligence Artificielle",
  description:
    "Conception, déploiement et maintenance de solutions d'IA : IA Générative, Machine Learning, Computer Vision, NLP en langues africaines et Business Intelligence augmentée.",
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
    name: "Domaines d'expertise IA",
    itemListElement: iaDomains.map((d, i) => ({
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
    { "@type": "ListItem", position: 3, name: "Intelligence Artificielle", item: url },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${url}#faq`,
  mainEntity: iaFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function IntelligenceArtificiellePage() {
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
      <IaWhyUs />
      <IaKpis />
      <IaStack />
      <IaResources />
      <IaFaq />
      <IaCtaFinal />
    </>
  );
}
