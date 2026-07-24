import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import PageHero, { HeroHighlight } from "@/components/ui/PageHero";
import OdooHubDiagram from "@/components/odoo/OdooHubDiagram";

export default function OdooHero() {
  return (
    <PageHero
      badge="Expertise Odoo ERP"
      title={
        <>
          <span className="text-white">Un projet ERP ne devrait jamais échouer </span>
          <HeroHighlight>à cause du contexte local.</HeroHighlight>
        </>
      }
      subtitle={
        <>
          Paie CNPS, états SYSCOHADA, paiements Mobile Money, connectivité variable : c&apos;est là
          que la plupart des déploiements ERP déraillent en Afrique de l&apos;Ouest, pas dans le
          logiciel. AKILI Labs implémente Odoo en partant de cette réalité, du cadrage métier
          jusqu&apos;à la mise en production et au-delà.
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
          Voir nos ressources Odoo
        </a>
      </div>
      <div className="mt-14 hidden sm:block">
        <OdooHubDiagram />
      </div>
    </PageHero>
  );
}
