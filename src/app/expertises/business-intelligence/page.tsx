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

const BASE_URL = "https://akililabs.com";
const url = `${BASE_URL}/expertises/business-intelligence`;

export const metadata: Metadata = {
  title: "Business Intelligence en Afrique de l'Ouest — Tableaux de bord & entrepôt de données",
  description:
    "AKILI Labs consolide vos données (ERP, caisses, Mobile Money, Excel) en tableaux de bord fiables, à jour chaque matin. Entrepôt de données, gouvernance des indicateurs et reporting réglementaire en zone UEMOA.",
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    title: "Expertise Business Intelligence — AKILI Labs Côte d'Ivoire",
    description:
      "Du reporting manuel au pilotage quotidien : tableaux de bord direction, entrepôt de données et états réglementaires BCEAO/OHADA.",
    images: [{ url: "/bi-images/bi-contexte.png", width: 1400, height: 1000, alt: "AKILI Labs — Expertise Business Intelligence" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expertise Business Intelligence — AKILI Labs",
    description: "Vos données consolidées en tableaux de bord fiables, à jour chaque matin.",
    images: ["/bi-images/bi-contexte.png"],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": url,
  name: "Expertise Business Intelligence",
  description:
    "Cadrage data, entrepôt de données, tableaux de bord direction et reporting réglementaire pour les entreprises et institutions d'Afrique de l'Ouest.",
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
    name: "Offres Business Intelligence",
    itemListElement: biServices.map((s, i) => ({
      "@type": "Offer",
      position: i + 1,
      name: s.title,
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
    { "@type": "ListItem", position: 3, name: "Business Intelligence", item: url },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${url}#faq`,
  mainEntity: biFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function BusinessIntelligencePage() {
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
