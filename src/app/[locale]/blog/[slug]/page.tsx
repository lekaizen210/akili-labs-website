import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { ChevronRight, Clock, Calendar, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { l } from "@/lib/i18n-content";
import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { BASE_URL, buildAlternates } from "@/lib/seo";
import { articleBodies, readingTime } from "@/lib/blog-articles";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}


export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  const t = await getTranslations({ locale, namespace: "Blog.post" });
  const alternates = buildAlternates(`/blog/${slug}`, locale as "fr" | "en");
  const url = alternates.canonical;
  const title = l(post.title, locale);
  const excerpt = l(post.excerpt, locale);
  return {
    title: l(post.seoTitle, locale),
    description: excerpt,
    alternates,
    openGraph: {
      type: "article",
      url,
      title,
      description: excerpt,
      publishedTime: post.date,
      authors: ["AKILI Labs"],
      tags: [l(post.category, locale), "AKILI Labs", t("keywordWestAfrica"), "UEMOA"],
      images: [{ url: "/logo-akili.png", width: 1600, height: 893, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: excerpt,
      images: ["/logo-akili.png"],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  const article = articleBodies[slug];
  const t = await getTranslations({ locale, namespace: "Blog.post" });
  const url = buildAlternates(`/blog/${slug}`, locale as "fr" | "en").canonical;
  const title = l(post.title, locale);
  const excerpt = l(post.excerpt, locale);
  const category = l(post.category, locale);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": url,
    headline: title,
    description: excerpt,
    url,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "AKILI Labs",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "AKILI Labs",
    },
    image: `${BASE_URL}/logo-akili.png`,
    inLanguage: locale === "en" ? "en-US" : "fr-FR",
    keywords: [category, "AKILI Labs", t("keywordDigitalTransformation"), "UEMOA", t("keywordWestAfrica")],
    about: {
      "@type": "Thing",
      name: category,
    },
    isPartOf: {
      "@type": "Blog",
      name: "Blog AKILI Labs",
      url: `${BASE_URL}/blog`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("breadcrumbHome"), item: BASE_URL },
      { "@type": "ListItem", position: 2, name: t("breadcrumbBlog"), item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/65 mb-8" aria-label={t("breadcrumbAriaLabel")}>
            <Link href="/" className="hover:text-white transition-colors">{t("breadcrumbHome")}</Link>
            <ChevronRight size={14} />
            <Link href="/blog" className="hover:text-white transition-colors">{t("breadcrumbBlog")}</Link>
            <ChevronRight size={14} />
            <span className="text-white/80 truncate max-w-xs">{title}</span>
          </nav>
          <span className="px-3 py-1 bg-orange text-white text-xs font-semibold rounded-full mb-5 inline-block">
            {category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight">{title}</h1>
          <div className="flex items-center gap-4 text-sm text-white/65">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {new Date(post.date).toLocaleDateString(locale === "en" ? "en-US" : "fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {readingTime(post.slug, locale)} {t("readTimeSuffix")}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-ink leading-relaxed">
            <p className="text-xl text-ink leading-relaxed mb-8 font-medium">{excerpt}</p>
            <div className="bg-blue-light border-l-4 border-orange rounded-r-xl p-6 my-8">
              <p className="font-semibold text-navy m-0">
                {article ? l(article.intro, locale) : null}
              </p>
            </div>
            {article?.sections.map((section) => (
              <section key={section.title.fr} className="mb-8">
                <h2 className="text-2xl font-black text-navy mb-3">{l(section.title, locale)}</h2>
                <p>{l(section.text, locale)}</p>
              </section>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-12 bg-navy rounded-2xl p-8 text-center">
            <h2 className="text-xl font-black text-white mb-2">{t("newsletterTitle")}</h2>
            <p className="text-white/60 text-sm mb-5">{t("newsletterSubtitle")}</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
              <label htmlFor="newsletter-email" className="sr-only">{t("emailLabel")}</label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder={t("emailPlaceholder")}
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/40 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-sm"
              />
              <button type="submit" className="px-5 py-3 bg-orange text-white font-semibold rounded-xl hover:bg-orange-hover transition-[background-color,transform] duration-150 ease-out active:scale-[0.97] text-sm">
                {t("subscribeButton")}
              </button>
            </form>
          </div>

          <div className="mt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-orange transition-colors">
              <ArrowLeft size={14} />
              {t("backToBlog")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
