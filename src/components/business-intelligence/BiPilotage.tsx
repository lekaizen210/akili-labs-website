"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { FadeUp } from "@/components/ui/motion-primitives";

export default function BiPilotage() {
  return (
    <section id="pilotage" className="py-20 bg-blue-light scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-navy text-sm font-medium rounded-full mb-6">
              ■ Le quotidien avec la BI
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-navy mb-4">
              Un matin type, à 7 h 30, sur votre téléphone
            </h2>
            <p className="text-ink max-w-2xl mx-auto">
              Pas de formation de trois semaines ni de jargon décisionnel : des écrans qui répondent
              aux questions que vous vous posez déjà. Combien avons-nous vendu hier ? Où est la
              trésorerie ? Quelle agence décroche ? Qui doit être relancé ?
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.1}>
          <div
            className="overflow-x-auto sm:overflow-visible rounded-2xl"
            tabIndex={0}
            role="group"
            aria-label="Tableau de bord détaillé, défilement horizontal sur mobile"
          >
            <Image
              src="/bi-images/bi-pilotage.png"
              alt="Tableau de bord DAF consolidé : trésorerie de 128,3 M FCFA avec projection à 30 jours, délai moyen d'encaissement, encours clients à relancer et alerte de marge sur une agence, actualisé à 2 h du matin"
              width={1400}
              height={900}
              loading="lazy"
              sizes="(max-width: 640px) 680px, (max-width: 1024px) 100vw, 1024px"
              className="w-full h-auto rounded-2xl border border-line shadow-md bg-white min-w-[680px] sm:min-w-0"
            />
          </div>
          <p className="mt-3 text-xs text-ink/80 text-center sm:hidden" aria-hidden="true">
            Faites glisser l&apos;image pour explorer le tableau de bord
          </p>
        </FadeUp>

        <FadeUp delay={0.16}>
          <div className="mt-10 bg-blue-pale border border-line rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center shrink-0">
              <Sparkles size={20} className="text-orange" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-navy mb-1.5">Du constat à la prévision</h3>
              <p className="text-sm text-ink leading-relaxed">
                Un tableau de bord vous dit où vous en êtes. L&apos;étape d&apos;après consiste à
                anticiper : prévision de la demande, détection d&apos;anomalies, scoring. C&apos;est
                le terrain de notre practice Intelligence Artificielle, qui s&apos;appuie
                précisément sur l&apos;entrepôt de données construit ici.
              </p>
            </div>
            <Link
              href="/expertises/intelligence-artificielle"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-orange transition-colors shrink-0"
            >
              Découvrir notre expertise IA
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
