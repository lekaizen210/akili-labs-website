import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { ChevronRight, Clock, Calendar, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { l, type Localized } from "@/lib/i18n-content";
import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

const articleBodies: Record<string, { intro: Localized; sections: { title: Localized; text: Localized }[] }> = {
  "pourquoi-odoo-en-afrique": {
    intro: {
      fr:
        "Les entreprises d'Afrique de l'Ouest recherchent des ERP capables de couvrir leurs processus clés sans imposer des coûts ou des cycles projet disproportionnés. Odoo répond bien à cet équilibre lorsqu'il est correctement cadré, paramétré et maintenu.",
      en:
        "West African businesses are looking for ERP systems that can cover their core processes without imposing disproportionate costs or project timelines. Odoo strikes this balance well when it is properly scoped, configured, and maintained.",
    },
    sections: [
      {
        title: { fr: "Un périmètre fonctionnel large", en: "A broad functional scope" },
        text: {
          fr:
            "Comptabilité, CRM, achats, stocks, paie, projets et reporting peuvent être déployés progressivement. Cette modularité permet de démarrer sur les processus prioritaires, puis d'étendre la solution sans rupture.",
          en:
            "Accounting, CRM, purchasing, inventory, payroll, projects, and reporting can all be deployed progressively. This modularity makes it possible to start with priority processes and then extend the solution without disruption.",
        },
      },
      {
        title: { fr: "Une adaptation au contexte OHADA", en: "Adapted to the OHADA context" },
        text: {
          fr:
            "La réussite d'un projet ERP dans la zone UEMOA dépend fortement de la prise en compte des exigences fiscales, comptables et sociales locales. AKILI Labs privilégie une approche de cadrage métier avant tout développement spécifique.",
          en:
            "The success of an ERP project in the UEMOA zone depends heavily on accounting for local tax, accounting, and labor requirements. AKILI Labs favors a business-scoping approach before any custom development.",
        },
      },
      {
        title: { fr: "Le point de vigilance", en: "The point of caution" },
        text: {
          fr:
            "Odoo n'est pas une solution magique. La qualité du projet dépend de la gouvernance, de la reprise de données, de la formation et de la conduite du changement. Le choix Community ou Enterprise doit être fait après analyse du besoin réel.",
          en:
            "Odoo is not a magic solution. Project quality depends on governance, data migration, training, and change management. The choice between Community and Enterprise should be made only after analyzing actual needs.",
        },
      },
    ],
  },
  "ia-generative-entreprises-africaines": {
    intro: {
      fr:
        "L'IA générative ouvre des gains concrets pour les organisations africaines : assistance documentaire, automatisation du support, synthèse de dossiers, recherche augmentée et aide à la décision. Le sujet doit toutefois être traité avec méthode.",
      en:
        "Generative AI opens up concrete gains for African organizations: document assistance, support automation, file summarization, augmented search, and decision support. The topic must nonetheless be approached with method.",
    },
    sections: [
      {
        title: { fr: "Commencer par les cas d'usage", en: "Start with use cases" },
        text: {
          fr:
            "Les meilleurs projets IA ne partent pas d'un modèle, mais d'un problème métier mesurable : réduction du délai de traitement, fiabilisation d'une analyse, assistance aux équipes ou amélioration de l'expérience client.",
          en:
            "The best AI projects do not start from a model but from a measurable business problem: reducing processing time, improving the reliability of an analysis, assisting teams, or enhancing the customer experience.",
        },
      },
      {
        title: { fr: "Sécuriser les données", en: "Securing the data" },
        text: {
          fr:
            "Les données clients, RH, financières ou contractuelles nécessitent une architecture maîtrisée : cloisonnement, journalisation, contrôle des accès et choix clair entre API externe, modèle privé ou déploiement hybride.",
          en:
            "Customer, HR, financial, or contractual data requires a well-controlled architecture: segregation, logging, access control, and a clear choice between an external API, a private model, or a hybrid deployment.",
        },
      },
      {
        title: { fr: "Industrialiser après le pilote", en: "Industrializing after the pilot" },
        text: {
          fr:
            "Un prototype IA peut être rapide à construire. La valeur vient ensuite de l'intégration au SI, du monitoring, des tests de qualité et de la gouvernance des prompts, documents et droits utilisateurs.",
          en:
            "An AI prototype can be built quickly. The real value then comes from integration with the information system, monitoring, quality testing, and governance of prompts, documents, and user rights.",
        },
      },
    ],
  },
  "cicd-gitlab-guide-pratique": {
    intro: {
      fr:
        "Une chaîne CI/CD bien conçue réduit les erreurs de livraison, améliore la qualité et accélère les mises en production. Pour les équipes DevOps, GitLab CI est souvent un bon socle lorsqu'il est relié à une vraie discipline de tests et de revue.",
      en:
        "A well-designed CI/CD chain reduces delivery errors, improves quality, and speeds up production releases. For DevOps teams, GitLab CI is often a solid foundation when paired with genuine testing and review discipline.",
    },
    sections: [
      {
        title: { fr: "Construire un pipeline simple et lisible", en: "Building a simple, readable pipeline" },
        text: {
          fr:
            "Un bon pipeline commence par les étapes essentielles : lint, tests, build, scan de sécurité, packaging et déploiement. Chaque étape doit produire des logs compréhensibles et bloquer la livraison en cas d'échec critique.",
          en:
            "A good pipeline starts with the essential stages: lint, tests, build, security scan, packaging, and deployment. Each stage should produce understandable logs and block delivery in the event of a critical failure.",
        },
      },
      {
        title: { fr: "Intégrer la sécurité tôt", en: "Integrating security early" },
        text: {
          fr:
            "Les scans SAST, dépendances, conteneurs et secrets doivent être exécutés avant la mise en production. Cette approche DevSecOps réduit les corrections tardives et renforce la confiance des clients.",
          en:
            "SAST, dependency, container, and secrets scans should run before going to production. This DevSecOps approach reduces late-stage fixes and strengthens client confidence.",
        },
      },
      {
        title: { fr: "Mesurer pour améliorer", en: "Measuring to improve" },
        text: {
          fr:
            "Les indicateurs utiles sont le taux de succès des builds, le temps moyen de pipeline, le taux de rollback, le lead time et le MTTR. Ils permettent de piloter l'amélioration continue au lieu de subir les incidents.",
          en:
            "Useful metrics include build success rate, average pipeline duration, rollback rate, lead time, and MTTR. They make it possible to drive continuous improvement instead of just reacting to incidents.",
        },
      },
    ],
  },
};

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

const BASE_URL = "https://akililabs.com";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  const t = await getTranslations({ locale, namespace: "Blog.post" });
  const url = `${BASE_URL}/blog/${slug}`;
  const title = l(post.title, locale);
  const excerpt = l(post.excerpt, locale);
  return {
    title,
    description: excerpt,
    alternates: { canonical: url },
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
  const url = `${BASE_URL}/blog/${slug}`;
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
              {post.readTime} {t("readTimeSuffix")}
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
