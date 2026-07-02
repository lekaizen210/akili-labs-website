import Link from "next/link";
import { TrendingUp, ArrowRight } from "lucide-react";
import { references } from "@/lib/data";
import type { Metadata } from "next";
import PageHero, { HeroHighlight } from "@/components/ui/PageHero";
import { getTechColor } from "@/lib/tech-colors";

export const metadata: Metadata = {
  title: "Références — AKILI Labs",
  description: "Découvrez nos réalisations : intégration ERP, Intelligence Artificielle, DevSecOps et développement sur mesure en Afrique de l'Ouest.",
};

export default function ReferencesPage() {
  return (
    <>
      <PageHero
        badge="Nos réalisations"
        title={
          <>
            <span className="text-white">Ils nous ont fait </span>
            <HeroHighlight>confiance</HeroHighlight>
          </>
        }
        subtitle="Des projets concrets, des résultats mesurables. Découvrez comment AKILI Labs transforme les organisations de la zone UEMOA."
      />

      {/* References grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {references.map((ref) => (
              <Link
                key={ref.slug}
                href={`/references/${ref.slug}`}
                className="group bg-white border border-[#D9E2EC] rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#FF5500] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-1.5 bg-gradient-to-r from-[#1A2B3C] to-[#FF5500]" />
                <div className="p-7">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 text-xs font-semibold bg-[#E8F0FE] text-[#1A2B3C] rounded-full">
                      {ref.expertise}
                    </span>
                    <span className="text-xs text-gray-400">{ref.year}</span>
                  </div>
                  <div className="text-xs font-semibold text-[#c94200] uppercase tracking-wider mb-2">
                    {ref.sector}
                  </div>
                  <h2 className="text-base font-bold text-[#1A2B3C] mb-3 leading-snug">
                    {ref.title}
                  </h2>
                  <p className="text-sm text-[#374151] leading-relaxed mb-5">{ref.summary}</p>
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-[#E8F0FE] rounded-xl mb-4">
                    <TrendingUp size={14} className="text-[#FF5500]" />
                    <span className="text-sm font-bold text-[#1A2B3C]">{ref.result}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {ref.technologies.map((t) => {
                      const { bg, text } = getTechColor(t);
                      return (
                        <span key={t} className="px-2 py-0.5 text-xs font-semibold rounded-md" style={{ backgroundColor: bg, color: text }}>
                          {t}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex items-center gap-1 text-sm font-semibold text-[#1A2B3C] group-hover:text-[#FF5500] transition-colors mt-5">
                    Voir le détail <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-lg font-semibold text-[#1A2B3C] mb-2">
              Votre projet sera notre prochaine référence.
            </p>
            <p className="text-[#374151] mb-6">
              Rejoignez les organisations qui font confiance à AKILI Labs pour leur transformation digitale.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#FF5500] text-white font-semibold rounded-xl hover:bg-[#e04d00] transition-colors shadow-md"
            >
              Démarrer un projet avec nous →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
