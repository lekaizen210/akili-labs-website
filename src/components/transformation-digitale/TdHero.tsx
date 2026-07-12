import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero, { HeroHighlight } from "@/components/ui/PageHero";
import TdRoadmapDiagram from "@/components/transformation-digitale/TdRoadmapDiagram";

export default function TdHero() {
  return (
    <PageHero
      badge="Expertise Transformation Digitale"
      title={
        <>
          <span className="text-white">La plupart des transformations digitales échouent </span>
          <HeroHighlight>avant le premier outil déployé.</HeroHighlight>
        </>
      }
      subtitle={
        <>
          Faute de cadrage, les projets se fragmentent : des outils qui ne communiquent pas, des
          investissements qui ne servent pas la stratégie, des équipes qui n&apos;adhèrent pas.
          AKILI Labs sécurise votre transformation là où elle se joue vraiment — le diagnostic,
          la priorisation et le pilotage — avant, pendant et après le choix des technologies.
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
        <TdRoadmapDiagram />
      </div>
    </PageHero>
  );
}
