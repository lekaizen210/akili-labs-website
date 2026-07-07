import type { Metadata } from "next";
import OdooHero from "@/components/odoo/OdooHero";
import OdooIntro from "@/components/odoo/OdooIntro";
import OdooImplementation from "@/components/odoo/OdooImplementation";
import OdooModules from "@/components/odoo/OdooModules";
import OdooServices from "@/components/odoo/OdooServices";
import OdooHostingSupport from "@/components/odoo/OdooHostingSupport";
import OdooApproach from "@/components/odoo/OdooApproach";
import OdooSectors from "@/components/odoo/OdooSectors";
import OdooWhyUs from "@/components/odoo/OdooWhyUs";
import OdooStats from "@/components/odoo/OdooStats";
import OdooResources from "@/components/odoo/OdooResources";
import OdooFaq from "@/components/odoo/OdooFaq";
import OdooCtaFinal from "@/components/odoo/OdooCtaFinal";
import { odooModuleCategories, odooFaqs } from "@/lib/odoo-data";

const BASE_URL = "https://akililabs.com";
const url = `${BASE_URL}/expertises/odoo`;

export const metadata: Metadata = {
  title: "Expertise Odoo ERP en Afrique de l'Ouest — AKILI Labs",
  description:
    "Implémentation, personnalisation et optimisation de l'ERP Odoo pour les entreprises d'Afrique de l'Ouest. Conformité OHADA/SYSCOHADA. Consultation initiale gratuite.",
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    title: "Expertise Odoo ERP — AKILI Labs Côte d'Ivoire",
    description:
      "Déployez Odoo. Transformez votre entreprise. Expertise Odoo complète pour la zone UEMOA/OHADA.",
    images: [{ url: "/logo-akili.png", width: 1600, height: 893, alt: "AKILI Labs — Expertise Odoo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expertise Odoo ERP — AKILI Labs",
    description: "Implémentation et personnalisation Odoo pour l'Afrique de l'Ouest.",
    images: ["/logo-akili.png"],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": url,
  name: "Expertise Odoo ERP",
  description: "Implémentation, personnalisation et optimisation de l'ERP Odoo, avec conformité OHADA/SYSCOHADA.",
  url,
  provider: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "AKILI Labs",
  },
  areaServed: ["Côte d'Ivoire", "Sénégal", "Mali", "Burkina Faso", "Niger", "Togo", "Bénin", "Guinée-Bissau"],
  serviceType: "Odoo ERP",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Modules Odoo",
    itemListElement: odooModuleCategories
      .flatMap((cat) => cat.modules)
      .map((m, i) => ({
        "@type": "Offer",
        position: i + 1,
        name: m,
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
    { "@type": "ListItem", position: 3, name: "Odoo", item: url },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${url}#faq`,
  mainEntity: odooFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function OdooExpertisePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <OdooHero />
      <OdooIntro />
      <OdooImplementation />
      <OdooModules />
      <OdooServices />
      <OdooHostingSupport />
      <OdooApproach />
      <OdooSectors />
      <OdooWhyUs />
      <OdooStats />
      <OdooResources />
      <OdooFaq />
      <OdooCtaFinal />
    </>
  );
}
