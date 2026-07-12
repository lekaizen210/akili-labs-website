"use client";

import Image from "next/image";
import { Layers, KeyRound, Server } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { dsSecuritePillars } from "@/lib/devsecops-data";

const pillarIcons = [Layers, KeyRound, Server] as const;

export default function DsSecurite() {
  return (
    <section className="py-20 bg-blue-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-navy text-sm font-medium rounded-full mb-6">
              ■ Sécurité &amp; Traçabilité
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="text-2xl sm:text-3xl font-black text-navy">
              La conformité se prouve avec des journaux, pas avec des promesses
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
          <div className="space-y-5">
            <FadeUp delay={0.12}>
              <p className="text-ink leading-relaxed">
                Conteneuriser des applications, automatiser des déploiements, migrer vers le
                cloud : chaque étape d&apos;industrialisation déplace des responsabilités de
                sécurité. Qui accède aux environnements de production ? Où vivent les secrets —
                mots de passe, clés, certificats ? Que se passe-t-il quand un correctif critique
                doit partir un vendredi soir ?
              </p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <p className="text-ink leading-relaxed">
                Une chaîne DevSecOps sérieuse rend ces questions traçables : chaque déploiement est
                journalisé, chaque accès est contrôlé, chaque environnement peut être reconstruit à
                l&apos;identique. Pour les organisations régulées de la zone — banques, microfinance,
                assurance — cette traçabilité n&apos;est pas un confort : les régulateurs régionaux
                exigent une gestion démontrable du risque informatique et de la continuité
                d&apos;activité.
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={0.16}>
            <Image
              src="/devsecops-images/ds-observabilite.png"
              alt="Écran de supervision de production : disponibilité, latence et taux d’erreurs, pic d’erreurs 502 détecté à 09:41 puis résolu en 11 minutes, journaux centralisés horodatés et journal d’audit des déploiements indiquant qui a déployé quoi et quand"
              width={1400}
              height={900}
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 560px"
              className="w-full h-auto rounded-2xl border border-line shadow-md"
            />
          </FadeUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-5" stagger={0.09}>
          {dsSecuritePillars.map((p, i) => {
            const Icon = pillarIcons[i];
            return (
              <StaggerItem key={p.title} className="bg-white rounded-xl p-6 border border-line">
                <Icon size={22} className="text-navy mb-4" aria-hidden="true" />
                <h3 className="font-bold text-navy mb-2">{p.title}</h3>
                <p className="text-sm text-ink leading-relaxed">{p.desc}</p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
