"use client";

import Image from "next/image";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { dsServices } from "@/lib/devsecops-data";

export default function DsServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-6">
            ■ Au-delà des pipelines
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-navy">
            L&apos;outillage ne suffit pas : vos équipes doivent en garder la maîtrise
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <FadeUp>
            <Image
              src="/devsecops-images/ds-pipeline.png"
              alt="Écran d’un pipeline d’intégration continue : les étapes build, tests (214 passés, couverture 78 %), sécurité (image, dépendances, secrets), préproduction, puis un déploiement en production soumis à approbation humaine, avec le journal d’exécution et le rapport de sécurité"
              width={1400}
              height={900}
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 560px"
              className="w-full h-auto rounded-2xl border border-line shadow-md"
            />
          </FadeUp>

          <StaggerContainer className="space-y-5" stagger={0.09}>
            {dsServices.map((s) => (
              <StaggerItem key={s.title} className="bg-blue-light rounded-xl p-5 border border-line">
                <h3 className="font-bold text-navy mb-1.5">{s.title}</h3>
                <p className="text-sm text-ink leading-relaxed">{s.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
