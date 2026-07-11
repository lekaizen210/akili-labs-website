"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import ParticleCanvas from "@/components/ui/ParticleCanvas";

const principles = [
  {
    n: "1",
    title: "Comprendre avant de configurer",
    desc: "Chaque entreprise est unique. Nous consacrons le temps nécessaire à comprendre vos processus, vos contraintes et vos objectifs avant toute action technique.",
  },
  {
    n: "2",
    title: "Livrer de la valeur par itération",
    desc: "Plutôt qu'un déploiement monolithique risqué, nous privilégions des mises en production progressives (par module ou par entité) pour garantir une adoption fluide et un retour sur investissement rapide.",
  },
  {
    n: "3",
    title: "Transférer les compétences",
    desc: "Notre mission est de vous rendre autonome. À l'issue de chaque projet, vos équipes doivent être capables de gérer, faire évoluer et enrichir leur Odoo sans dépendance permanente à un prestataire.",
  },
];

export default function OdooApproach() {
  return (
    <section className="py-20 bg-[#1A2B3C] relative overflow-hidden">
      <ParticleCanvas count={22} />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full mb-6 border border-white/20">
            <span className="text-[#FF5500]">■</span> Notre méthodologie
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Une approche centrée sur la valeur métier
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Chez AKILI Labs, nous refusons le modèle &laquo; installer et partir &raquo;.
          </p>
        </div>
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8" stagger={0.15}>
          {principles.map((p) => (
            <StaggerItem key={p.n} className="text-center">
              <div className="text-5xl font-black text-[#FF5500] mb-4">{p.n}</div>
              <h3 className="font-bold text-white mb-3">{p.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{p.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
