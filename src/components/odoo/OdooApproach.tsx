"use client";

import { Compass, Layers, Globe, GraduationCap } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import ParticleCanvas from "@/components/ui/ParticleCanvas";

const principles = [
  {
    icon: Compass,
    title: "Le métier d'abord",
    desc: "Les ateliers de cadrage partent de vos processus réels, pas des écrans d'Odoo : l'outil s'adapte à l'organisation, jamais l'inverse.",
  },
  {
    icon: Layers,
    title: "Standard avant spécifique",
    desc: "Chaque développement sur mesure se justifie : le standard Odoo couvre l'essentiel des besoins et garantit des migrations futures sereines.",
  },
  {
    icon: Globe,
    title: "Réalisme UEMOA",
    desc: "Connectivité variable, paiements Mobile Money, exigences OHADA : nos déploiements fonctionnent dans votre contexte, pas seulement en démonstration.",
  },
  {
    icon: GraduationCap,
    title: "Transfert de compétences",
    desc: "Vos équipes administrent et font évoluer leur ERP en autonomie après notre accompagnement.",
  },
];

export default function OdooApproach() {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <ParticleCanvas count={22} />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full mb-6 border border-white/20">
            <span className="text-orange">■</span> Notre méthodologie
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Une approche centrée sur votre métier, pas sur l&apos;outil
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Chez AKILI Labs, nous refusons le modèle &laquo; installer et partir &raquo;.
          </p>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto" stagger={0.1}>
          {principles.map((p) => (
            <StaggerItem
              key={p.title}
              className="bg-white/5 border border-white/15 rounded-2xl p-7 transition-colors hover:border-orange/60"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange mb-5">
                <p.icon size={22} className="text-white" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-white mb-3">{p.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{p.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
