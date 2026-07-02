import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, TrendingUp, CheckCircle } from "lucide-react";
import { references } from "@/lib/data";
import { getTechColor } from "@/lib/tech-colors";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return references.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ref = references.find((r) => r.slug === slug);
  if (!ref) return {};
  return { title: `${ref.title} — AKILI Labs`, description: ref.summary };
}

export default async function ReferencePage({ params }: PageProps) {
  const { slug } = await params;
  const ref = references.find((r) => r.slug === slug);
  if (!ref) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#1A2B3C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight size={14} />
            <Link href="/references" className="hover:text-white transition-colors">Références</Link>
            <ChevronRight size={14} />
            <span className="text-white/80 truncate max-w-xs">{ref.title}</span>
          </nav>
          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 bg-[#FF5500] text-white text-xs font-semibold rounded-full">{ref.expertise}</span>
            <span className="text-white/50 text-sm">{ref.sector} · {ref.year}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">{ref.title}</h1>
          {/* Key result */}
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/20 rounded-xl">
            <TrendingUp size={16} className="text-[#FF5500]" />
            <span className="font-bold text-white">{ref.result}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-black text-[#1A2B3C] mb-4">Contexte & Objectifs</h2>
              <p className="text-[#374151] leading-relaxed">{ref.summary}</p>
            </div>
            <div>
              <h2 className="text-xl font-black text-[#1A2B3C] mb-4">Solution déployée</h2>
              <div className="space-y-3">
                {ref.technologies.map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-[#FF5500] shrink-0" />
                    <span className="text-[#374151]">{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#E8F0FE] rounded-2xl p-6 border-l-4 border-[#FF5500]">
              <div className="text-xs font-semibold text-[#c94200] uppercase tracking-wider mb-1">Résultat clé</div>
              <div className="text-2xl font-black text-[#1A2B3C]">{ref.result}</div>
            </div>
          </div>
          <div className="space-y-5">
            <div className="bg-[#E8F0FE] rounded-2xl p-6">
              <h3 className="font-bold text-[#1A2B3C] mb-3 text-sm uppercase tracking-wider">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {ref.technologies.map((t) => {
                  const { bg, text } = getTechColor(t);
                  return (
                    <span key={t} className="px-3 py-1 text-xs font-semibold rounded-lg" style={{ backgroundColor: bg, color: text }}>{t}</span>
                  );
                })}
              </div>
            </div>
            <div className="bg-[#1A2B3C] rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-2 text-sm">Un projet similaire ?</h3>
              <p className="text-white/60 text-xs mb-4">Nos experts sont disponibles pour vous accompagner.</p>
              <Link href="/contact" className="block text-center px-4 py-2.5 bg-[#FF5500] text-white text-sm font-semibold rounded-xl hover:bg-[#e04d00] transition-colors">
                Nous contacter →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other references */}
      <section className="py-14 bg-[#E8F0FE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-[#1A2B3C] mb-6">Autres réalisations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {references.filter((r) => r.slug !== slug).slice(0, 2).map((r) => (
              <Link key={r.slug} href={`/references/${r.slug}`} className="group bg-white rounded-xl p-5 border border-[#D9E2EC] hover:border-[#FF5500] hover:shadow-md transition-all">
                <div className="text-xs font-semibold text-[#c94200] mb-1">{r.expertise}</div>
                <div className="font-bold text-[#1A2B3C] text-sm group-hover:text-[#FF5500] transition-colors">{r.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
