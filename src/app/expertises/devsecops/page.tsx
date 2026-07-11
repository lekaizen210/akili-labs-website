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

const BASE_URL = "https://akililabs.com";
const url = `${BASE_URL}/expertises/devsecops`;

export const metadata: Metadata = {
  title: "DevSecOps en Afrique de l'Ouest — CI/CD, Kubernetes, IaC, Sécurité",
  description:
    "Industrialisation de la livraison logicielle : CI/CD, conteneurisation Docker/Kubernetes, Infrastructure as Code, sécurité intégrée et supervision pour les organisations de la zone UEMOA. Consultation initiale gratuite.",
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    title: "Expertise DevSecOps — AKILI Labs Côte d'Ivoire",
    description:
      "Du diagnostic de maturité à l'exploitation : la sécurité intégrée à chaque étape de votre chaîne de livraison logicielle.",
    images: [
      {
        url: "/devsecops-images/ds-contexte.png",
        width: 1400,
        height: 1000,
        alt: "AKILI Labs — Expertise DevSecOps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expertise DevSecOps — AKILI Labs",
    description: "CI/CD, Kubernetes, Infrastructure as Code et sécurité intégrée en zone UEMOA.",
    images: ["/devsecops-images/ds-contexte.png"],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": url,
  name: "Expertise DevSecOps",
  description:
    "Industrialisation de la livraison logicielle : intégration et déploiement continus, conteneurisation, Infrastructure as Code, analyse de sécurité automatisée et supervision.",
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
    name: "Domaines d'intervention DevSecOps",
    itemListElement: dsDomains.map((d, i) => ({
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
    { "@type": "ListItem", position: 3, name: "DevSecOps", item: url },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${url}#faq`,
  mainEntity: dsFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function DevSecOpsPage() {
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
