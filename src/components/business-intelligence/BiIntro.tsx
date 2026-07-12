"use client";

import Image from "next/image";
import { FadeUp } from "@/components/ui/motion-primitives";

export default function BiIntro() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-6">
                ■ Le constat
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-navy mb-6">
                Le rapport mensuel coûte deux jours. Et il est déjà périmé.
              </h2>
            </FadeUp>
            <FadeUp delay={0.08}>
              <p className="text-ink leading-relaxed mb-5">
                Dans la plupart des entreprises de la région, le pilotage repose sur un rituel
                épuisant : chaque fin de mois, une personne de confiance collecte les fichiers des
                agences, recopie les chiffres de l&apos;ERP, réconcilie les écarts à la main et met
                en forme un support de comité. Deux jours de travail, des chiffres qui divergent
                selon la source, et une direction qui découvre le 5 du mois ce qui s&apos;est joué
                trois semaines plus tôt.
              </p>
              <p className="text-ink leading-relaxed mb-6">
                Notre parti pris : vos chiffres de la veille, disponibles chaque matin. La
                consolidation devient un traitement de nuit, plus un métier.
              </p>
            </FadeUp>
            <FadeUp delay={0.14}>
              <div className="bg-blue-light border-l-4 border-navy rounded-r-xl p-5">
                <p className="text-navy font-semibold leading-relaxed text-sm">
                  Le problème n&apos;est presque jamais le manque de données. C&apos;est
                  qu&apos;elles dorment dans cinq systèmes qui ne se parlent pas, et que la seule
                  personne qui sait les assembler part un jour en congés.
                </p>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <Image
              src="/bi-images/bi-contexte.png"
              alt="Avant-après : consolidation mensuelle manuelle de fichiers Excel et de chiffres WhatsApp en deux jours, contre un tableau de bord groupe consolidé automatiquement chaque nuit et rapproché de la comptabilité"
              width={1400}
              height={1000}
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 560px"
              className="w-full h-auto rounded-2xl border border-line shadow-md"
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
