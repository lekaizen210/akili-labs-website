import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero, { HeroHighlight } from "@/components/ui/PageHero";
import DmAssemblyDiagram from "@/components/developpement-metiers/DmAssemblyDiagram";

export default function DmHero() {
  return (
    <PageHero
      badge="Expertise Développement Métiers"
      title={
        <>
          <span className="text-white">Le sur mesure a mauvaise réputation. Elle est </span>
          <HeroHighlight>évitable.</HeroHighlight>
        </>
      }
      subtitle={
        <>
          Budgets qui dérapent, effet tunnel, dépendance au prestataire : les projets sur mesure
          échouent presque toujours pour les mêmes raisons — et aucune n&apos;est une fatalité.
          AKILI Labs développe vos applications web, mobiles et plateformes métiers avec des
          garde-fous vérifiables : sprints courts, périmètre contractualisé, qualité mesurée,
          code livré. L&apos;outil épouse votre métier — et le projet reste sous votre contrôle.
        </>
      }
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 px-7 py-4 bg-orange-cta text-white font-semibold rounded-xl hover:bg-orange-cta-hover transition-[background-color,transform] duration-150 ease-out active:scale-[0.97] shadow-lg shadow-orange-900/20"
        >
          Consultation gratuite
          <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </Link>
        <a
          href="#ressources"
          className="inline-flex items-center gap-2 px-7 py-4 text-white/80 hover:text-white border border-white/20 rounded-xl font-medium transition-[color,border-color,transform] duration-150 ease-out hover:border-white/40 active:scale-[0.97]"
        >
          Voir nos ressources
        </a>
      </div>
      <div className="mt-14 hidden sm:block">
        <DmAssemblyDiagram />
      </div>
    </PageHero>
  );
}
