import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero, { HeroHighlight } from "@/components/ui/PageHero";

export default function BiHero() {
  return (
    <PageHero
      badge="Expertise Business Intelligence"
      title={
        <>
          <span className="text-white">Vos données existent déjà. </span>
          <HeroHighlight>Ce qui manque, c&apos;est la décision.</HeroHighlight>
        </>
      }
      subtitle={
        <>
          Ventes, caisses, stocks, Mobile Money : chaque journée d&apos;activité produit des
          chiffres que personne n&apos;a le temps de consolider. AKILI Labs transforme ces données
          dispersées en tableaux de bord fiables, à jour chaque matin, pour décider sur du réel,
          pas sur le rapport du mois dernier.
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
          href="#pilotage"
          className="inline-flex items-center gap-2 px-7 py-4 text-white/80 hover:text-white border border-white/20 rounded-xl font-medium transition-[color,border-color,transform] duration-150 ease-out hover:border-white/40 active:scale-[0.97]"
        >
          Voir un tableau de bord type
        </a>
      </div>
      <div className="mt-14 hidden sm:block">
        <Image
          src="/bi-images/bi-hero.jpg"
          alt="Tableau de bord de comité de direction multi-agences : chiffre d'affaires, trésorerie et marge par agence en FCFA, avec vue mobile du directeur affichant les ventes du jour et une alerte d'écart de caisse"
          width={2304}
          height={1728}
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 1024px) 90vw, 768px"
          className="mx-auto rounded-2xl border border-white/10 shadow-2xl shadow-black/40 max-w-3xl w-full h-auto"
        />
      </div>
    </PageHero>
  );
}
