import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero, { HeroHighlight } from "@/components/ui/PageHero";

export default function IaHero() {
  return (
    <PageHero
      badge="Expertise Intelligence Artificielle"
      title={
        <>
          <span className="text-white">L&apos;</span>
          <HeroHighlight>Intelligence Artificielle</HeroHighlight>
          <span className="text-white"> au service de votre croissance en Afrique</span>
        </>
      }
      subtitle={
        <>
          AKILI Labs conçoit, déploie et maintient des solutions d&apos;IA concrètes, adaptées à votre
          secteur, à vos données et aux réalités du marché africain. Du chatbot métier au moteur de
          prédiction, nous transformons vos données en avantages compétitifs.
        </>
      }
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 px-7 py-4 bg-orange-cta text-white font-semibold rounded-xl hover:bg-orange-cta-hover transition-[background-color,transform] duration-150 ease-out active:scale-[0.97] shadow-lg shadow-orange-900/20"
        >
          Planifier un échange gratuit
          <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </Link>
        <a
          href="#domaines"
          className="inline-flex items-center gap-2 px-7 py-4 text-white/80 hover:text-white border border-white/20 rounded-xl font-medium transition-[color,border-color,transform] duration-150 ease-out hover:border-white/40 active:scale-[0.97]"
        >
          Découvrir nos cas d&apos;usage
        </a>
      </div>
      <div className="mt-14 hidden sm:block">
        <Image
          src="/ia-images/ia-hero.png"
          alt="Intelligence Artificielle appliquée aux entreprises africaines"
          width={1536}
          height={864}
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 1024px) 90vw, 768px"
          className="mx-auto rounded-2xl border border-white/10 shadow-2xl shadow-black/40 max-w-3xl w-full h-auto"
        />
      </div>
    </PageHero>
  );
}
