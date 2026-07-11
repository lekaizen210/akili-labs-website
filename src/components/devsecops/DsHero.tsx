import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero, { HeroHighlight } from "@/components/ui/PageHero";
import DsPipelineDiagram from "@/components/devsecops/DsPipelineDiagram";

export default function DsHero() {
  return (
    <PageHero
      badge="Expertise DevSecOps"
      title={
        <>
          <span className="text-white">Une mise en production ne devrait jamais être </span>
          <HeroHighlight>un pari.</HeroHighlight>
        </>
      }
      subtitle={
        <>
          Livrer vite et livrer sûr ne sont pas des objectifs opposés — c&apos;est l&apos;approche
          traditionnelle qui les oppose : déploiements manuels, audits en fin de projet,
          vulnérabilités découvertes en production. AKILI Labs industrialise votre chaîne de
          livraison logicielle avec la sécurité intégrée à chaque étape, du code à l&apos;exploitation.
        </>
      }
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 px-7 py-4 bg-orange text-white font-semibold rounded-xl hover:bg-orange-hover transition-[background-color,transform] duration-150 ease-out active:scale-[0.97] shadow-lg shadow-orange-900/20"
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
        <DsPipelineDiagram />
      </div>
    </PageHero>
  );
}
