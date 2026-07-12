"use client";

import Image from "next/image";
import { FadeUp } from "@/components/ui/motion-primitives";

export default function BiArchitecture() {
  return (
    <section className="py-20 bg-blue-pale">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-navy text-sm font-medium rounded-full mb-6">
              ■ Sous le capot
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-navy mb-4">
              Un seul chemin pour la donnée, de la caisse au comité
            </h2>
            <p className="text-ink max-w-2xl mx-auto">
              Chaque chiffre affiché est traçable jusqu&apos;à sa source. Les flux tournent la nuit,
              se surveillent tout seuls, et un échec de chargement se voit avant que quelqu&apos;un
              présente un chiffre faux.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.1}>
          <div
            className="overflow-x-auto sm:overflow-visible rounded-2xl"
            tabIndex={0}
            role="group"
            aria-label="Schéma d'architecture détaillé, défilement horizontal sur mobile"
          >
            <Image
              src="/bi-images/bi-entrepot.png"
              alt="Écran d'orchestration des flux de nuit : les tâches d'extraction (ERP Odoo, caisses d'agences, Mobile Money, fichiers Excel) alimentent les contrôles qualité puis le chargement de l'entrepôt PostgreSQL, qui déclenche le rafraîchissement des tableaux de bord, les exports et les alertes"
              width={1400}
              height={900}
              loading="lazy"
              sizes="(max-width: 640px) 680px, (max-width: 1024px) 100vw, 1024px"
              className="w-full h-auto rounded-2xl border border-line shadow-md bg-white min-w-[680px] sm:min-w-0"
            />
          </div>
          <p className="mt-3 text-xs text-ink/80 text-center sm:hidden" aria-hidden="true">
            Faites glisser l&apos;image pour explorer le schéma
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
