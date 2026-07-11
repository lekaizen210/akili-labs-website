import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Clock, Calendar, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/data";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const articleBodies: Record<string, { intro: string; sections: { title: string; text: string }[] }> = {
  "pourquoi-odoo-en-afrique": {
    intro:
      "Les entreprises d'Afrique de l'Ouest recherchent des ERP capables de couvrir leurs processus clés sans imposer des coûts ou des cycles projet disproportionnés. Odoo répond bien à cet équilibre lorsqu'il est correctement cadré, paramétré et maintenu.",
    sections: [
      {
        title: "Un périmètre fonctionnel large",
        text:
          "Comptabilité, CRM, achats, stocks, paie, projets et reporting peuvent être déployés progressivement. Cette modularité permet de démarrer sur les processus prioritaires, puis d'étendre la solution sans rupture.",
      },
      {
        title: "Une adaptation au contexte OHADA",
        text:
          "La réussite d'un projet ERP dans la zone UEMOA dépend fortement de la prise en compte des exigences fiscales, comptables et sociales locales. AKILI Labs privilégie une approche de cadrage métier avant tout développement spécifique.",
      },
      {
        title: "Le point de vigilance",
        text:
          "Odoo n'est pas une solution magique. La qualité du projet dépend de la gouvernance, de la reprise de données, de la formation et de la conduite du changement. Le choix Community ou Enterprise doit être fait après analyse du besoin réel.",
      },
    ],
  },
  "ia-generative-entreprises-africaines": {
    intro:
      "L'IA générative ouvre des gains concrets pour les organisations africaines : assistance documentaire, automatisation du support, synthèse de dossiers, recherche augmentée et aide à la décision. Le sujet doit toutefois être traité avec méthode.",
    sections: [
      {
        title: "Commencer par les cas d'usage",
        text:
          "Les meilleurs projets IA ne partent pas d'un modèle, mais d'un problème métier mesurable : réduction du délai de traitement, fiabilisation d'une analyse, assistance aux équipes ou amélioration de l'expérience client.",
      },
      {
        title: "Sécuriser les données",
        text:
          "Les données clients, RH, financières ou contractuelles nécessitent une architecture maîtrisée : cloisonnement, journalisation, contrôle des accès et choix clair entre API externe, modèle privé ou déploiement hybride.",
      },
      {
        title: "Industrialiser après le pilote",
        text:
          "Un prototype IA peut être rapide à construire. La valeur vient ensuite de l'intégration au SI, du monitoring, des tests de qualité et de la gouvernance des prompts, documents et droits utilisateurs.",
      },
    ],
  },
  "cicd-gitlab-guide-pratique": {
    intro:
      "Une chaîne CI/CD bien conçue réduit les erreurs de livraison, améliore la qualité et accélère les mises en production. Pour les équipes DevOps, GitLab CI est souvent un bon socle lorsqu'il est relié à une vraie discipline de tests et de revue.",
    sections: [
      {
        title: "Construire un pipeline simple et lisible",
        text:
          "Un bon pipeline commence par les étapes essentielles : lint, tests, build, scan de sécurité, packaging et déploiement. Chaque étape doit produire des logs compréhensibles et bloquer la livraison en cas d'échec critique.",
      },
      {
        title: "Intégrer la sécurité tôt",
        text:
          "Les scans SAST, dépendances, conteneurs et secrets doivent être exécutés avant la mise en production. Cette approche DevSecOps réduit les corrections tardives et renforce la confiance des clients.",
      },
      {
        title: "Mesurer pour améliorer",
        text:
          "Les indicateurs utiles sont le taux de succès des builds, le temps moyen de pipeline, le taux de rollback, le lead time et le MTTR. Ils permettent de piloter l'amélioration continue au lieu de subir les incidents.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

const BASE_URL = "https://akililabs.com";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  const url = `${BASE_URL}/blog/${slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: ["AKILI Labs"],
      tags: [post.category, "AKILI Labs", "Afrique de l'Ouest", "UEMOA"],
      images: [{ url: "/logo-akili.png", width: 1600, height: 893, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/logo-akili.png"],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  const article = articleBodies[slug];
  const url = `${BASE_URL}/blog/${slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": url,
    headline: post.title,
    description: post.excerpt,
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
    inLanguage: "fr-FR",
    keywords: [post.category, "AKILI Labs", "transformation digitale", "UEMOA", "Afrique de l'Ouest"],
    about: {
      "@type": "Thing",
      name: post.category,
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
      { "@type": "ListItem", position: 1, name: "Accueil", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
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
      <section className="pt-32 pb-16 bg-[#1A2B3C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/65 mb-8" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight size={14} />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-white/80 truncate max-w-xs">{post.title}</span>
          </nav>
          <span className="px-3 py-1 bg-[#FF5500] text-white text-xs font-semibold rounded-full mb-5 inline-block">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-white/65">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {post.readTime} de lecture
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-[#374151] leading-relaxed">
            <p className="text-xl text-[#374151] leading-relaxed mb-8 font-medium">{post.excerpt}</p>
            <div className="bg-[#E8F0FE] border-l-4 border-[#FF5500] rounded-r-xl p-6 my-8">
              <p className="font-semibold text-[#1A2B3C] m-0">
                {article?.intro}
              </p>
            </div>
            {article?.sections.map((section) => (
              <section key={section.title} className="mb-8">
                <h2 className="text-2xl font-black text-[#1A2B3C] mb-3">{section.title}</h2>
                <p>{section.text}</p>
              </section>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-12 bg-[#1A2B3C] rounded-2xl p-8 text-center">
            <h2 className="text-xl font-black text-white mb-2">Ne ratez pas nos prochains articles</h2>
            <p className="text-white/60 text-sm mb-5">Inscrivez-vous à notre newsletter : 2 articles par mois.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
              <label htmlFor="newsletter-email" className="sr-only">Adresse email</label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="votre@email.com"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/40 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#FF5500] focus:border-transparent text-sm"
              />
              <button type="submit" className="px-5 py-3 bg-[#FF5500] text-white font-semibold rounded-xl hover:bg-[#e04d00] transition-[background-color,transform] duration-150 ease-out active:scale-[0.97] text-sm">
                S&apos;abonner
              </button>
            </form>
          </div>

          <div className="mt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-[#374151] hover:text-[#FF5500] transition-colors">
              <ArrowLeft size={14} />
              Retour au blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
