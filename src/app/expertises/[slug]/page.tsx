import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, ArrowRight, ChevronRight } from "lucide-react";
import { expertises } from "@/lib/data";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return expertises.map((e) => ({ slug: e.slug }));
}

const BASE_URL = "https://akililabs.com";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const exp = expertises.find((e) => e.slug === slug);
  if (!exp) return {};
  const url = `${BASE_URL}/expertises/${slug}`;
  return {
    title: `${exp.title} en Afrique de l'Ouest`,
    description: `${exp.description} Expertise OHADA/UEMOA. Consultation initiale gratuite.`,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${exp.title} — AKILI Labs Côte d'Ivoire`,
      description: exp.description,
      images: [{ url: "/logo-akili.png", width: 1600, height: 893, alt: `AKILI Labs — ${exp.title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${exp.title} — AKILI Labs`,
      description: exp.description,
      images: ["/logo-akili.png"],
    },
  };
}

export default async function ExpertisePage({ params }: PageProps) {
  const { slug } = await params;
  const exp = expertises.find((e) => e.slug === slug);
  if (!exp) notFound();

  const others = expertises.filter((e) => e.slug !== slug).slice(0, 3);
  const url = `${BASE_URL}/expertises/${slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": url,
    name: exp.title,
    description: exp.description,
    url,
    provider: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "AKILI Labs",
    },
    areaServed: ["Côte d'Ivoire", "Sénégal", "Mali", "Burkina Faso", "Niger", "Togo", "Bénin", "Guinée-Bissau"],
    serviceType: exp.title,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Services ${exp.title}`,
      itemListElement: exp.services.map((s, i) => ({
        "@type": "Offer",
        position: i + 1,
        name: s,
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
      { "@type": "ListItem", position: 3, name: exp.title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#1A2B3C] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(255,85,0,0.10) 0%, transparent 60%)" }}
          aria-hidden="true"
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/75 mb-8" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight size={14} className="text-white/40" />
            <Link href="/#expertises" className="hover:text-white transition-colors">Expertises</Link>
            <ChevronRight size={14} className="text-white/40" />
            <span className="text-white font-medium">{exp.title}</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white text-sm font-semibold rounded-full mb-5 border border-white/20">
            <span className="text-[#FF5500]">■</span> {exp.subtitle}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            {exp.title}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            {exp.description}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F0FE] text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
              ■ Nos prestations
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C] mb-8">
              Ce que nous proposons
            </h2>
            <ul className="space-y-4">
              {exp.services.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#FF5500] mt-0.5 shrink-0" />
                  <span className="text-[#374151]">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            {/* Why us */}
            <div className="bg-[#E8F0FE] rounded-2xl p-7">
              <h3 className="font-bold text-[#1A2B3C] mb-3">Pourquoi AKILI Labs ?</h3>
              <div className="space-y-2 text-sm text-[#374151]">
                <div className="flex items-center gap-2"><span className="text-[#FF5500] font-bold">→</span> Expertise prouvée sur la zone UEMOA</div>
                <div className="flex items-center gap-2"><span className="text-[#FF5500] font-bold">→</span> Connaissance des contraintes réglementaires OHADA</div>
                <div className="flex items-center gap-2"><span className="text-[#FF5500] font-bold">→</span> Équipe certifiée et formée aux dernières technologies</div>
                <div className="flex items-center gap-2"><span className="text-[#FF5500] font-bold">→</span> Support et accompagnement post-déploiement</div>
                <div className="flex items-center gap-2"><span className="text-[#FF5500] font-bold">→</span> Méthodologie éprouvée sur 50+ projets</div>
              </div>
            </div>
            {exp.slug === "erp" && (
              <div className="bg-white border border-[#D9E2EC] rounded-2xl p-7 text-center">
                <h3 className="font-bold text-[#1A2B3C] mb-2">Vous utilisez ou envisagez Odoo ?</h3>
                <p className="text-sm text-[#374151] mb-5">
                  Découvrez notre expertise Odoo en détail : modules, méthodologie, hébergement et support.
                </p>
                <Link
                  href="/expertises/odoo"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#1A2B3C] text-[#1A2B3C] font-semibold rounded-xl hover:bg-[#1A2B3C] hover:text-white transition-colors"
                >
                  Explorer l&apos;expertise Odoo <ArrowRight size={15} />
                </Link>
              </div>
            )}
            {/* CTA */}
            <div className="bg-[#1A2B3C] rounded-2xl p-7 text-center">
              <h3 className="font-bold text-white mb-2">Discutons de votre besoin</h3>
              <p className="text-white/60 text-sm mb-5">
                Consultation initiale gratuite — Réponse sous 24h
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF5500] text-white font-semibold rounded-xl hover:bg-[#e04d00] transition-colors"
              >
                Prendre contact <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other expertises */}
      <section className="py-16 bg-[#E8F0FE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1A2B3C] mb-8">Nos autres expertises</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {others.map((e) => (
              <Link
                key={e.slug}
                href={`/expertises/${e.slug}`}
                className="group bg-white rounded-xl p-5 border border-[#D9E2EC] hover:border-[#FF5500] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-[#1A2B3C] group-hover:text-[#FF5500] transition-colors mb-1">
                  {e.title}
                </h3>
                <p className="text-xs text-[#374151] line-clamp-2">{e.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
