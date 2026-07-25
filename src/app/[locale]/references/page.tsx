import { Link } from "@/i18n/navigation";
import { TrendingUp, ArrowRight } from "lucide-react";
import { references } from "@/lib/data";
import { l } from "@/lib/i18n-content";
import type { Metadata } from "next";
import PageHero, { HeroHighlight } from "@/components/ui/PageHero";
import { getTechColor } from "@/lib/tech-colors";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "References.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates("/references", locale as "fr" | "en"),
  };
}

export default async function ReferencesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "References" });

  return (
    <>
      <PageHero
        badge={t("hero.badge")}
        title={
          <>
            <span className="text-white">{t("hero.titlePart1")}</span>
            <HeroHighlight>{t("hero.titleHighlight")}</HeroHighlight>
          </>
        }
        subtitle={t("hero.subtitle")}
      />

      {/* References grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {references.map((ref) => (
              <Link
                key={ref.slug}
                href={`/references/${ref.slug}`}
                className="group bg-white border border-line rounded-2xl overflow-hidden hover:shadow-xl hover:border-orange transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1"
              >
                <div className="h-1.5 bg-gradient-to-r from-navy to-orange" />
                <div className="p-7">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 text-xs font-semibold bg-blue-light text-navy rounded-full">
                      {l(ref.expertise, locale)}
                    </span>
                    <span className="text-xs text-gray-500">{ref.year}</span>
                  </div>
                  <div className="text-xs font-semibold text-orange-dark uppercase tracking-wider mb-2">
                    {l(ref.sector, locale)}
                  </div>
                  <h2 className="text-base font-bold text-navy mb-3 leading-snug">
                    {l(ref.title, locale)}
                  </h2>
                  <p className="text-sm text-ink leading-relaxed mb-5">{l(ref.summary, locale)}</p>
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-blue-light rounded-xl mb-4">
                    <TrendingUp size={14} className="text-orange" />
                    <span className="text-sm font-bold text-navy">{l(ref.result, locale)}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {ref.technologies.map((tech) => {
                      const label = l(tech, locale);
                      const { bg, text } = getTechColor(l(tech, "fr"));
                      return (
                        <span key={label} className="px-2 py-0.5 text-xs font-semibold rounded-md" style={{ backgroundColor: bg, color: text }}>
                          {label}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-orange transition-colors mt-5">
                    {t("viewDetail")} <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-lg font-semibold text-navy mb-2">
              {t("bottomTitle")}
            </p>
            <p className="text-ink mb-6">
              {t("bottomSubtitle")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-orange text-white font-semibold rounded-xl hover:bg-orange-hover transition-[background-color,transform] duration-150 ease-out active:scale-[0.97] shadow-md"
            >
              {t("bottomCta")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
