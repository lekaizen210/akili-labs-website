import { Link } from "@/i18n/navigation";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { l } from "@/lib/i18n-content";
import type { Metadata } from "next";
import PageHero, { HeroHighlight } from "@/components/ui/PageHero";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates("/blog", locale as "fr" | "en"),
  };
}

// Keyed on the stable tagKey so styling stays consistent across locales.
const tagColors: Record<string, string> = {
  erp: "bg-blue-50 text-blue-700 border-blue-100",
  ia: "bg-purple-50 text-purple-700 border-purple-100",
  devsecops: "bg-green-50 text-green-700 border-green-100",
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Blog" });

  return (
    <>
      <PageHero
        badge={t("hero.badge")}
        title={
          <>
            <span className="text-white">{t("hero.titlePart1")}</span>
            <HeroHighlight>{t("hero.titleHighlight")}</HeroHighlight>
            <span className="text-white">{t("hero.titlePart2")}</span>
          </>
        }
        subtitle={t("hero.subtitle")}
      />

      {/* Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          {blogPosts[0] && (
            <Link
              href={`/blog/${blogPosts[0].slug}`}
              className="group block bg-blue-light rounded-2xl overflow-hidden border border-line hover:shadow-xl hover:border-orange transition-[box-shadow,border-color] duration-300 mb-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-48 lg:h-auto bg-gradient-to-br from-navy to-[#243548] flex items-center justify-center">
                  <span className="text-orange font-black text-6xl opacity-20">
                    {l(blogPosts[0].tag, locale)}
                  </span>
                </div>
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${tagColors[blogPosts[0].tagKey] ?? "bg-gray-100 text-gray-600"}`}>
                      {l(blogPosts[0].category, locale)}
                    </span>
                    <span className="text-xs text-orange font-semibold">{t("featuredBadge")}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-navy mb-3 group-hover:text-orange transition-colors leading-snug">
                    {l(blogPosts[0].title, locale)}
                  </h2>
                  <p className="text-ink text-sm leading-relaxed mb-5">{l(blogPosts[0].excerpt, locale)}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-5">
                    <span className="flex items-center gap-1"><Calendar size={11} />
                      {new Date(blogPosts[0].date).toLocaleDateString(locale === "en" ? "en-US" : "fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1"><Clock size={11} />{blogPosts[0].readTime}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-orange transition-colors">
                    {t("readArticle")} <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Other posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-line hover:shadow-xl hover:border-orange transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1"
              >
                <div className="h-36 bg-gradient-to-br from-navy to-[#243548] flex items-center justify-center">
                  <span className="text-orange font-black text-4xl opacity-20">{l(post.tag, locale)}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${tagColors[post.tagKey] ?? "bg-gray-100 text-gray-600"}`}>
                      {l(post.category, locale)}
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-navy mb-2 group-hover:text-orange transition-colors leading-snug">
                    {l(post.title, locale)}
                  </h2>
                  <p className="text-sm text-ink line-clamp-2 mb-4">{l(post.excerpt, locale)}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><Calendar size={11} />
                      {new Date(post.date).toLocaleDateString(locale === "en" ? "en-US" : "fr-FR", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-14 bg-navy rounded-2xl p-8 sm:p-10 text-center">
            <h2 className="text-2xl font-black text-white mb-2">{t("newsletter.title")}</h2>
            <p className="text-white/60 mb-6">{t("newsletter.subtitle")}</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <label htmlFor="newsletter-email" className="sr-only">{t("newsletter.emailLabel")}</label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder={t("newsletter.emailPlaceholder")}
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/40 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-orange text-white font-semibold rounded-xl hover:bg-orange-hover transition-[background-color,transform] duration-150 ease-out active:scale-[0.97] whitespace-nowrap text-sm"
              >
                {t("newsletter.subscribeButton")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
