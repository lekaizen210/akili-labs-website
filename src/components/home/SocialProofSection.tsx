"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const logos = [
  { name: "3R Technologie" },
  { name: "NDIST" },
  { name: "Groupe 4R" },
];

const testimonials = [
  {
    quote: "AKILI Labs a transformé notre gestion comptable OHADA avec Odoo. La montée en compétences de nos équipes a été remarquable et les délais de clôture ont été divisés par deux.",
    name: "Kouamé A.",
    role: "Directeur Général Finance",
    company: "Groupe industriel",
    location: "Abidjan, Côte d'Ivoire",
    initiales: "KA",
    couleur: "#1A2B3C",
    stars: 5,
  },
  {
    quote: "Leur approche DevSecOps a sécurisé notre pipeline CI/CD et accéléré nos livraisons. Une équipe réactive, qui comprend les enjeux d'une DSI moderne en Afrique.",
    name: "Fatou D.",
    role: "Directrice des Systèmes d'Information",
    company: "Institution financière UEMOA",
    location: "Dakar, Sénégal",
    initiales: "FD",
    couleur: "#c94200",
    stars: 5,
  },
  {
    quote: "Le module SIRH Odoo déployé par AKILI Labs couvre tous nos besoins paie et congés, avec une conformité totale au droit ivoirien. Un partenaire de confiance.",
    name: "Brice M.",
    role: "Directeur des Ressources Humaines",
    company: "Entreprise de services",
    location: "Abidjan, Côte d'Ivoire",
    initiales: "BM",
    couleur: "#374151",
    stars: 5,
  },
];

export default function SocialProofSection() {
  return (
    <section className="py-20 bg-white border-t border-[#D9E2EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Logos strip */}
        <FadeUp className="text-center mb-14">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-8">
            Ils nous font confiance
          </p>
          <StaggerContainer
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
            stagger={0.07}
            delay={0.1}
          >
            {logos.map((logo) => (
              <StaggerItem key={logo.name}>
                <motion.div
                  whileHover={{ scale: 1.06, transition: { duration: 0.18, ease } }}
                  className="flex items-center px-6 py-3 bg-[#E8F0FE] border border-[#D9E2EC] rounded-xl cursor-default"
                >
                  <span className="text-sm font-bold text-[#1A2B3C] tracking-wide">{logo.name}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeUp>

        {/* Section header */}
        <FadeUp className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F0FE] text-[#1A2B3C] text-sm font-medium rounded-full mb-4">
            ■ Témoignages clients
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C]">
            Ce que disent nos clients
          </h2>
        </FadeUp>

        {/* Testimonials */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          stagger={0.12}
          delay={0.05}
        >
          {testimonials.map((t) => (
            <StaggerItem key={t.name + t.company}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(26,43,60,0.09)", transition: { duration: 0.22, ease } }}
                className="bg-white border border-[#D9E2EC] rounded-2xl p-7 flex flex-col gap-4 h-full"
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5" aria-label={`${t.stars} étoiles sur 5`}>
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} className="text-[#FF5500] fill-[#FF5500]" aria-hidden="true" />
                  ))}
                </div>

                {/* Quote */}
                <div className="flex-1">
                  <Quote size={18} className="text-[#c94200] mb-3 shrink-0" aria-hidden="true" />
                  <p className="text-sm text-[#374151] leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#D9E2EC]">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm"
                    style={{ background: t.couleur }}
                    aria-hidden="true"
                  >
                    {t.initiales}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-[#1A2B3C] leading-tight">{t.name}</div>
                    <div className="text-xs text-[#374151] leading-tight">{t.role}</div>
                    <div className="text-xs text-gray-500 truncate">{t.company} · {t.location}</div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
