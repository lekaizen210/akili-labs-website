import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { ChevronRight, TrendingUp, CheckCircle } from "lucide-react";
import { references } from "@/lib/data";
import { l } from "@/lib/i18n-content";
import { getTechColor } from "@/lib/tech-colors";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return references.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const ref = references.find((r) => r.slug === slug);
  if (!ref) return {};
  return { title: `${l(ref.title, locale)} — AKILI Labs`, description: l(ref.summary, locale) };
}

export default async function ReferencePage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const ref = references.find((r) => r.slug === slug);
  if (!ref) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight size={14} />
            <Link href="/references" className="hover:text-white transition-colors">Références</Link>
            <ChevronRight size={14} />
            <span className="text-white/80 truncate max-w-xs">{l(ref.title, locale)}</span>
          </nav>
          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 bg-orange text-white text-xs font-semibold rounded-full">{l(ref.expertise, locale)}</span>
            <span className="text-white/50 text-sm">{l(ref.sector, locale)} · {ref.year}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">{l(ref.title, locale)}</h1>
          {/* Key result */}
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/20 rounded-xl">
            <TrendingUp size={16} className="text-orange" />
            <span className="font-bold text-white">{l(ref.result, locale)}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-black text-navy mb-4">Contexte & Objectifs</h2>
              <p className="text-ink leading-relaxed">{l(ref.summary, locale)}</p>
            </div>
            <div>
              <h2 className="text-xl font-black text-navy mb-4">Solution déployée</h2>
              <div className="space-y-3">
                {ref.technologies.map((t) => (
                  <div key={l(t, "fr")} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-orange shrink-0" />
                    <span className="text-ink">{l(t, locale)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-light rounded-2xl p-6 border-l-4 border-orange">
              <div className="text-xs font-semibold text-orange-dark uppercase tracking-wider mb-1">Résultat clé</div>
              <div className="text-2xl font-black text-navy">{l(ref.result, locale)}</div>
            </div>
          </div>
          <div className="space-y-5">
            <div className="bg-blue-light rounded-2xl p-6">
              <h3 className="font-bold text-navy mb-3 text-sm uppercase tracking-wider">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {ref.technologies.map((t) => {
                  const label = l(t, locale);
                  const { bg, text } = getTechColor(l(t, "fr"));
                  return (
                    <span key={label} className="px-3 py-1 text-xs font-semibold rounded-lg" style={{ backgroundColor: bg, color: text }}>{label}</span>
                  );
                })}
              </div>
            </div>
            <div className="bg-navy rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-2 text-sm">Un projet similaire ?</h3>
              <p className="text-white/60 text-xs mb-4">Nos experts sont disponibles pour vous accompagner.</p>
              <Link href="/contact" className="block text-center px-4 py-2.5 bg-orange text-white text-sm font-semibold rounded-xl hover:bg-orange-hover transition-[background-color,transform] duration-150 ease-out active:scale-[0.97]">
                Nous contacter →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other references */}
      <section className="py-14 bg-blue-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-navy mb-6">Autres réalisations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {references.filter((r) => r.slug !== slug).slice(0, 2).map((r) => (
              <Link key={r.slug} href={`/references/${r.slug}`} className="group bg-white rounded-xl p-5 border border-line hover:border-orange hover:shadow-md transition-[box-shadow,border-color]">
                <div className="text-xs font-semibold text-orange-dark mb-1">{l(r.expertise, locale)}</div>
                <div className="font-bold text-navy text-sm group-hover:text-orange transition-colors">{l(r.title, locale)}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
