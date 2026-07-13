"use client";

import Image from "next/image";
import { Scale, Server, FileLock2 } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { tdGouvernancePillars } from "@/lib/transformation-digitale-data";

const pillarIcons = [Scale, Server, FileLock2] as const;

export default function TdGouvernance() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-6">
              ■ Données &amp; Conformité
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="text-2xl sm:text-3xl font-black text-navy">
              Vos données sont un actif — et une responsabilité légale
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
          <div className="space-y-5">
            <FadeUp delay={0.12}>
              <p className="text-ink leading-relaxed">
                Dématérialiser, c&apos;est déplacer des obligations : les dossiers clients, RH et
                comptables restent soumis à des obligations légales de conservation, et la
                réglementation sur la protection des données personnelles s&apos;applique désormais
                dans la plupart des pays de la zone.
              </p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <p className="text-ink leading-relaxed">
                Une transformation digitale sérieuse intègre ces exigences dès la conception : qui
                accède à quoi, où les données sont hébergées, comment elles sont archivées et
                pendant combien de temps, comment la traçabilité est garantie en cas de contrôle
                ou de litige.
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={0.16}>
            <Image
              src="/transformation-digitale-images/td-bpm.png"
              alt="Circuit d’approbation d’une demande d’achat de 750 000 FCFA : la règle de seuil ajoute automatiquement la direction générale au-delà de 500 000 FCFA, les validations successives sont horodatées, et le journal d’audit inaltérable conserve qui a validé quoi, quand et avec quel commentaire"
              width={1400}
              height={900}
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 560px"
              className="w-full h-auto rounded-2xl border border-line shadow-md"
            />
          </FadeUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-5" stagger={0.09}>
          {tdGouvernancePillars.map((p, i) => {
            const Icon = pillarIcons[i];
            return (
              <StaggerItem key={p.title} className="bg-blue-light rounded-xl p-6 border border-line">
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
