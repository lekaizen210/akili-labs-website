"use client";

import Image from "next/image";
import { MessagesSquare, TrendingUp, ScanEye, Languages, Database, BarChart3 } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { iaDomains } from "@/lib/ia-data";

const icons = { MessagesSquare, TrendingUp, ScanEye, Languages, Database, BarChart3 } as const;

export default function IaDomains() {
  return (
    <section id="domaines" className="py-20 bg-blue-light scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-navy text-sm font-medium rounded-full mb-6">
            ■ Nos Domaines d&apos;Expertise IA
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-navy max-w-2xl mx-auto">
            Six domaines, une seule promesse : des résultats mesurables
          </h2>
        </div>

        <FadeUp delay={0.06}>
          <div className="mb-12">
            <Image
              src="/ia-images/ia-dialogue.png"
              alt="Assistant métier dans le navigateur : à la question sur l’encours de l’agence de Cocody, il répond 4 850 000 FCFA en citant la balance clients et le journal des ventes, puis prépare un courrier de relance qui reste en brouillon tant que l’utilisateur ne l’a pas validé"
              width={1400}
              height={900}
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="w-full h-auto rounded-2xl border border-line shadow-md"
            />
          </div>
        </FadeUp>

        <StaggerContainer className="space-y-5" stagger={0.08}>
          {iaDomains.map((d) => {
            const Icon = icons[d.icon as keyof typeof icons];
            return (
              <StaggerItem key={d.id} className="bg-white rounded-2xl p-6 sm:p-7 border border-line">
                <div className="flex items-center gap-3 mb-5">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-navy shrink-0">
                    <Icon size={20} className="text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-navy text-lg">{d.title}</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
                  <ul className="space-y-2.5">
                    {d.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ink leading-relaxed">
                        <span className="text-orange font-bold mt-0.5">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="lg:w-56 shrink-0">
                    {d.note && (
                      <p className="text-xs text-ink italic leading-relaxed mb-4 bg-blue-light rounded-lg p-3">
                        {d.note}
                      </p>
                    )}
                    <div className="text-[10px] font-bold uppercase tracking-wide text-ink/70 mb-2">
                      Technologies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {d.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-[11px] font-medium bg-blue-light text-navy rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {d.id === "bi" && (
                  <div className="mt-6">
                    <Image
                      src="/ia-images/ia-decision.png"
                      alt="Tableau de bord de prévision : demande hebdomadaire réalisée et prévue avec intervalle de confiance, précision du modèle de 92,4 %, alertes du matin sur le stock critique de Yopougon et les encours clients, ventes par ville et répartition des encaissements par canal"
                      width={1400}
                      height={900}
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      className="w-full h-auto rounded-xl border border-line"
                    />
                  </div>
                )}
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
