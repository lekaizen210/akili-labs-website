"use client";

import Image from "next/image";
import { FadeUp } from "@/components/ui/motion-primitives";

export default function TdIntro() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-6">
              ■ Le constat
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="text-2xl sm:text-3xl font-black text-navy">
              Digitaliser sans cadrer, c&apos;est automatiser le désordre
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <FadeUp delay={0.12}>
              <p className="text-ink leading-relaxed">
                En zone UEMOA, la pression à la modernisation est réelle : compétitivité, exigences
                réglementaires OHADA, attentes des clients et des tutelles. Mais les organisations
                qui digitalisent processus par processus, outil par outil, sans vision d&apos;ensemble,
                aboutissent au même résultat : un système d&apos;information fragmenté, coûteux à
                maintenir, et qui reproduit en numérique les lenteurs du papier.
              </p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <div className="bg-blue-light border-l-4 border-navy rounded-r-xl p-6">
                <p className="text-navy font-bold text-lg mb-1">
                  Les causes d&apos;échec sont rarement technologiques.
                </p>
                <p className="text-ink leading-relaxed">
                  Elles sont organisationnelles : absence de cartographie des processus réels,
                  priorisation dictée par les effets de mode, sous-estimation de l&apos;adoption
                  par les équipes.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.24}>
              <p className="text-ink leading-relaxed">
                C&apos;est pourquoi AKILI Labs intervient en amont de tout choix d&apos;outil : nous
                auditons l&apos;existant, nous construisons un Schéma Directeur Informatique priorisé
                par impact et faisabilité, puis nous pilotons le déploiement jusqu&apos;à
                l&apos;adoption — dématérialisation, automatisation des processus, gouvernance du SI.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <Image
              src="/transformation-digitale-images/td-contexte.png"
              alt="Avant-après : le scan d’un bon de commande manuscrit tamponné « en attente », avec une case de signature vide parce que le signataire est en mission, et le fil d’e-mails de relance « Re: Re: Re: validation ? », face au même processus digitalisé où chaque étape est horodatée de 09:02 à 09:15"
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
