"use client";

import Image from "next/image";
import { FadeUp } from "@/components/ui/motion-primitives";

export default function OdooIntro() {
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
              Des outils dispersés coûtent plus cher qu&apos;un système unifié
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <FadeUp delay={0.12}>
              <p className="text-ink leading-relaxed">
                Gérer une entreprise en croissance avec des outils dispersés (tableaux Excel,
                logiciel de comptabilité isolé, CRM sans connexion à la supply chain) coûte du
                temps, de l&apos;argent et des opportunités manquées. Et le premier réflexe, adopter
                un ERP générique, échoue souvent sur les mêmes écueils : un plan comptable qui
                ignore le SYSCOHADA, une paie qui ne connaît ni la CNPS ni la CGRAE, des paiements
                qui s&apos;arrêtent là où commence le Mobile Money.
              </p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <div className="bg-blue-light border-l-4 border-navy rounded-r-xl p-6">
                <p className="text-navy font-bold text-lg mb-1">
                  Le bon ERP est celui qui s&apos;adapte à votre réalité, pas l&apos;inverse.
                </p>
                <p className="text-ink leading-relaxed">
                  Odoo, suite ERP open source la plus adoptée au monde (plus de 28 millions
                  d&apos;utilisateurs dans 180 pays), réunit ventes, achats, stocks, comptabilité,
                  RH et production dans une seule plateforme. Son architecture ouverte permet
                  précisément les adaptations que votre contexte exige.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.24}>
              <p className="text-ink leading-relaxed">
                Chez AKILI Labs, nous ne nous contentons pas d&apos;installer Odoo. Nous le
                configurons, l&apos;adaptons et le faisons vivre selon{" "}
                <strong>votre réalité métier africaine</strong> : contextes OHADA/SYSCOHADA,
                spécificités fiscales locales, multilinguisme et contraintes de connectivité.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <Image
              src="/odoo-images/odoo-contexte.png"
              alt="Avant-après : un classeur Excel de suivi des ventes avec une commande en doublon et des erreurs #N/A, doublé d’un fil WhatsApp où le dépôt annonce que le stock n’était pas à jour, face au menu des applications Odoo (Ventes, CRM, Inventaire, Achats, Comptabilité, Paie) et à la commande CDE-2026-341 qui réserve le stock, génère la facture et l’écriture comptable"
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
