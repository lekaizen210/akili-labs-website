import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero, { HeroHighlight } from "@/components/ui/PageHero";

export default function OdooHero() {
  return (
    <PageHero
      badge="Expertise Odoo ERP"
      title={
        <>
          <span className="text-white">Déployez </span>
          <HeroHighlight>Odoo</HeroHighlight>
          <span className="text-white">. Transformez votre entreprise.</span>
        </>
      }
      subtitle={
        <>
          AKILI Labs accompagne les PME et grandes organisations d&apos;Afrique de l&apos;Ouest dans
          l&apos;implémentation, la personnalisation et l&apos;optimisation de l&apos;ERP Odoo — du cadrage
          métier jusqu&apos;à la mise en production et au-delà.
        </>
      }
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 px-7 py-4 bg-[#FF5500] text-white font-semibold rounded-xl hover:bg-[#e04d00] transition-colors shadow-lg shadow-orange-900/20"
        >
          Demander une consultation gratuite
          <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </Link>
        <a
          href="#ressources"
          className="inline-flex items-center gap-2 px-7 py-4 text-white/80 hover:text-white border border-white/20 rounded-xl font-medium transition-all hover:border-white/40"
        >
          Voir nos ressources Odoo
        </a>
      </div>
    </PageHero>
  );
}
