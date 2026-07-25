import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArrowRight, MessageCircle, BookOpen, Cpu, Shield, Building2 } from "lucide-react";
import FaqAccordion, { type FaqItem } from "@/components/faq/FaqAccordion";
import PageHero, { HeroHighlight } from "@/components/ui/PageHero";
import { cn } from "@/lib/utils";
import { CATEGORY_IDS, categoryColors } from "@/lib/faq-categories";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { BASE_URL, buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Faq.meta" });
  const alternates = buildAlternates("/faq", locale as "fr" | "en");

  return {
    title: t("title"),
    description: t("description"),
    alternates,
    openGraph: {
      type: "website",
      url: alternates.canonical,
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [{ url: "/logo-akili.png", width: 1600, height: 893, alt: t("ogImageAlt") }],
    },
  };
}

const categoryIcons: Record<string, React.ReactNode> = {
  erp:                    <BookOpen size={16} aria-hidden="true" />,
  digitalTransformation:  <Building2 size={16} aria-hidden="true" />,
  ai:                     <Cpu size={16} aria-hidden="true" />,
  devsecops:              <Shield size={16} aria-hidden="true" />,
  akili:                  <MessageCircle size={16} aria-hidden="true" />,
};

const expertiseSlugs: Record<string, string> = {
  erp: "erp",
  ai: "intelligence-artificielle",
  devsecops: "devsecops",
  digitalTransformation: "transformation-digitale",
  akili: "erp",
};

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Faq" });

  const faqs = t.raw("items") as FaqItem[];
  const categoryLabels = t.raw("categories") as Record<string, string>;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}/faq`,
    name: t("jsonLd.name"),
    description: t("jsonLd.description"),
    url: `${BASE_URL}/faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("breadcrumb.home"), item: BASE_URL },
      { "@type": "ListItem", position: 2, name: t("breadcrumb.faq"), item: `${BASE_URL}/faq` },
    ],
  };

  const categoryStats = CATEGORY_IDS.filter((id) => id !== "all").map((id) => ({
    id,
    label: categoryLabels[id],
    count: faqs.filter((f) => f.categoryId === id).length,
    icon: categoryIcons[id],
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <PageHero
        badge={t("hero.badge")}
        title={
          <>
            <span className="text-white">{t("hero.titlePart1")}</span>
            <HeroHighlight>{t("hero.titleHighlight")}</HeroHighlight>
          </>
        }
        subtitle={t("hero.subtitle")}
      >
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {categoryStats.map((s) => (
            <div
              key={s.id}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/8 border border-white/10 text-white/70 text-xs font-medium"
            >
              <span className="text-orange" aria-hidden="true">{s.icon}</span>
              <span>{s.label}</span>
              <span className="text-white/40">·</span>
              <span className="font-bold text-white">{s.count}</span>
            </div>
          ))}
        </div>
      </PageHero>

      {/* ── Contenu FAQ ───────────────────────────────── */}
      <section className="py-20 bg-blue-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── CTA — Question sans réponse ? ─────────────── */}
      <section className="py-20 bg-white border-t border-line">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-light mb-6" aria-hidden="true">
            <MessageCircle size={24} className="text-navy" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-navy mb-3">
            {t("cta.title")}
          </h2>
          <p className="text-ink mb-8 leading-relaxed">
            {t.rich("cta.textRich", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-orange text-white font-semibold rounded-xl hover:bg-orange-hover transition-[background-color,transform] duration-150 ease-out active:scale-[0.97] shadow-lg shadow-orange-900/20"
            >
              {t("cta.askButton")}
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-7 py-4 border border-line text-ink font-semibold rounded-xl hover:border-navy hover:text-navy transition-colors"
            >
              <BookOpen size={17} aria-hidden="true" />
              {t("cta.readArticles")}
            </Link>
          </div>

          {/* Catégories rapides */}
          <div className="mt-12 pt-8 border-t border-line">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">{t("cta.quickAccessLabel")}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {categoryStats.map(({ id, label, icon }) => (
                <Link
                  key={id}
                  href={`/expertises/${expertiseSlugs[id] ?? "erp"}`}
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg border transition-opacity hover:opacity-75",
                    categoryColors[id] ?? "bg-blue-light text-ink border-line"
                  )}
                >
                  <span aria-hidden="true">{icon}</span>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
