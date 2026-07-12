"use client";

import Image from "next/image";
import { FadeUp } from "@/components/ui/motion-primitives";

export default function BiGouvernance() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeUp className="order-2 lg:order-1">
            <Image
              src="/bi-images/bi-qualite.png"
              alt="Fiche de l'indicateur CA net dans le dictionnaire : définition rédigée en toutes lettres, requête SQL appliquée à tous les écrans, traçabilité de la source jusqu'aux tableaux de bord, propriétaire DAF et résultats des contrôles qualité de la nuit"
              width={1400}
              height={900}
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 560px"
              className="w-full h-auto rounded-2xl border border-line shadow-md"
            />
          </FadeUp>

          <div className="order-1 lg:order-2">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-6">
                ■ Gouvernance des données
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-navy mb-6">
                Pourquoi votre CA diffère selon qui le calcule, et comment on y met fin
              </h2>
            </FadeUp>
            <FadeUp delay={0.08}>
              <p className="text-ink leading-relaxed mb-5">
                « CA net », « client actif », « encours » : tant que chaque service a sa propre
                formule, les réunions servent à réconcilier au lieu de décider. Nous écrivons chaque
                définition une fois, avec vous, puis la machine l&apos;applique partout :
                dashboards, exports, alertes.
              </p>
              <p className="text-ink leading-relaxed">
                Les contrôles qualité tournent chaque nuit avec les flux : doublons, caisses non
                clôturées, écritures incomplètes deviennent visibles et corrigeables, au lieu
                d&apos;être découverts en clôture annuelle.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
