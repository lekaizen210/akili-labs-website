"use client";

import { ShieldCheck, Scale, UserCheck, Activity } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";

const piliers = [
  {
    icon: ShieldCheck,
    title: "Souveraineté des données",
    desc: "Vos données ne servent jamais à entraîner un modèle tiers. Architectures on-premise, cloud privé ou hybride : vos données sensibles ne quittent pas votre périmètre de contrôle.",
  },
  {
    icon: Scale,
    title: "Conformité réglementaire",
    desc: "Protection des données personnelles selon les cadres réglementaires locaux et sous-régionaux ; prise en compte des exigences des régulateurs financiers pour les cas d'usage bancaires (scoring, octroi de crédit).",
  },
  {
    icon: UserCheck,
    title: "Supervision humaine",
    desc: "L'IA propose, l'humain décide : boucles de validation sur les décisions sensibles (crédit, RH, santé), recommandations traçables et explicables aux métiers.",
  },
  {
    icon: Activity,
    title: "Biais & robustesse",
    desc: "Tests de biais et validation métier avant toute mise en production ; monitoring de la dérive des modèles et réentraînement périodique en exploitation.",
  },
];

export default function IaResponsable() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-6">
              ■ IA responsable & Souveraineté
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="text-2xl sm:text-3xl font-black text-navy max-w-3xl mx-auto">
              Une IA sous votre contrôle : données, modèles, décisions
            </h2>
          </FadeUp>
        </div>

        <FadeUp delay={0.12}>
          <p className="text-ink leading-relaxed text-center max-w-3xl mx-auto mb-12">
            Adopter l&apos;IA déplace des responsabilités qu&apos;aucun décideur ne peut déléguer :
            où vivent vos données ? Servent-elles à entraîner les modèles d&apos;un tiers ? Qui
            décide en dernier ressort quand l&apos;algorithme recommande de refuser un crédit ou
            d&apos;écarter un candidat ? Une IA sérieuse rend ces questions traçables, et leurs
            réponses contractuelles.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5" stagger={0.08}>
          {piliers.map((p) => (
            <StaggerItem
              key={p.title}
              className="bg-white rounded-2xl p-6 border border-line transition-[transform,border-color] hover:-translate-y-0.5 hover:border-orange"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-navy shrink-0">
                  <p.icon size={20} className="text-white" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-navy">{p.title}</h3>
              </div>
              <p className="text-sm text-ink leading-relaxed">{p.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
