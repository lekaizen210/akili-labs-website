"use client";

import Image from "next/image";
import { FadeUp } from "@/components/ui/motion-primitives";

export default function DmIntro() {
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
              Vos processus méritent mieux qu&apos;un tableur — et mieux qu&apos;un projet qui dérape
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <FadeUp delay={0.12}>
              <p className="text-ink leading-relaxed">
                D&apos;un côté, le besoin est réel : validation de dossiers, suivi de production,
                gestion d&apos;adhérents, tournées… quand aucun logiciel du marché ne couvre vos
                circuits propres, les équipes compensent — tableurs partagés, ressaisies, suivis
                papier. Les données s&apos;éparpillent et personne n&apos;a la vision d&apos;ensemble.
              </p>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="text-ink leading-relaxed">
                De l&apos;autre, la méfiance est légitime : trop d&apos;organisations de la région
                ont connu le projet sur mesure qui double de budget, l&apos;application livrée en
                retard et jamais recettée, ou le prestataire parti avec le code.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="bg-blue-light border-l-4 border-navy rounded-r-xl p-6">
                <p className="text-navy font-bold text-lg mb-1">
                  Les projets sur mesure dérapent presque toujours pour trois raisons.
                </p>
                <p className="text-ink leading-relaxed">
                  Un périmètre jamais figé, un effet tunnel sans livraisons intermédiaires, et un
                  code que le client ne possède pas. Nos standards existent précisément pour
                  neutraliser ces trois causes — et ils sont vérifiables.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.24}>
              <p className="text-ink leading-relaxed">
                <strong className="text-navy">Notre doctrine</strong> : standard partout où votre
                besoin est standard — un ERP éprouvé comme Odoo y sera plus rapide et moins
                cher — et sur mesure uniquement là où votre processus vous différencie. Lors du
                cadrage gratuit, nous vous disons honnêtement dans quel cas vous êtes.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <Image
              src="/developpement-metiers-images/dm-contexte.png"
              alt="Des fragments documentaires éparpillés et ressaisis à la main, unifiés en une plateforme métier structurée"
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
