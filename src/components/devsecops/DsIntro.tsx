"use client";

import Image from "next/image";
import { FadeUp } from "@/components/ui/motion-primitives";

export default function DsIntro() {
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
              La sécurité ajoutée à la fin est une dette, pas une protection
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <FadeUp delay={0.12}>
              <p className="text-ink leading-relaxed">
                Dans beaucoup d&apos;organisations, livrer une application reste un exercice à haut
                risque : déploiements manuels, environnements qui divergent entre développement et
                production, correctifs repoussés parce que « ça marche ». Chaque mise en production
                devient un événement redouté plutôt qu&apos;un non-événement maîtrisé.
              </p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <div className="bg-blue-light border-l-4 border-navy rounded-r-xl p-6">
                <p className="text-navy font-bold text-lg mb-1">
                  Les vulnérabilités découvertes en production coûtent le plus cher.
                </p>
                <p className="text-ink leading-relaxed">
                  Le DevSecOps les détecte tôt — à la conception, au code, aux tests — réduit les
                  coûts de correction et renforce la confiance des clients et partenaires.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.24}>
              <p className="text-ink leading-relaxed">
                AKILI Labs industrialise votre chaîne de livraison de bout en bout : intégration et
                déploiement continus, conteneurisation, infrastructure décrite en code, analyses de
                sécurité automatisées et supervision — pour des livraisons fréquentes,
                reproductibles et auditables.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <Image
              src="/devsecops-images/ds-contexte.png"
              alt="Du déploiement manuel au pipeline industrialisé : étapes éparses et enchevêtrées se résolvant en chaîne de livraison ordonnée et contrôlée"
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
