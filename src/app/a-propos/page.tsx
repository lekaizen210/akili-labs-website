"use client";

import { Star, Lightbulb, Shield, Users, Target, Lock, Award, TrendingUp, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { values, team } from "@/lib/data";
import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import PageHero, { HeroHighlight } from "@/components/ui/PageHero";
import { getTechColor } from "@/lib/tech-colors";

const iconMap: Record<string, React.ElementType> = {
  Star, Lightbulb, Shield, Users, Target, Lock, Award, TrendingUp,
};

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const partners = ["Odoo", "AWS", "Microsoft Azure", "GitLab", "Docker", "PostgreSQL", "GitHub"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="Notre identité"
        title={
          <>
            <span className="text-white">Qui </span>
            <HeroHighlight>sommes-nous&nbsp;?</HeroHighlight>
          </>
        }
        subtitle={
          <>
            AKILI Labs est une société de conseil et d&apos;ingénierie spécialisée dans la
            transformation digitale, les ERP, l&apos;Intelligence Artificielle et le DevSecOps.
            Fondée pour être un acteur de référence en Afrique, nous intervenons sur toute
            la zone UEMOA/OHADA.
          </>
        }
      />

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <StaggerContainer
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8"
          stagger={0.15}
          delay={0.1}
        >
          <StaggerItem>
            <div className="bg-[#E8F0FE] rounded-2xl p-8 border-l-4 border-[#1A2B3C] h-full">
              <div className="text-[#c94200] font-bold text-sm uppercase tracking-wider mb-3">Notre vision</div>
              <h2 className="text-xl font-black text-[#1A2B3C] mb-4">
                Acteur de référence de la transformation digitale en Afrique
              </h2>
              <p className="text-[#374151] leading-relaxed">
                Être reconnu comme le partenaire de confiance des organisations qui souhaitent
                moderniser leurs systèmes d&apos;information, en proposant des solutions innovantes,
                sécurisées et parfaitement adaptées aux enjeux métiers africains.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bg-[#1A2B3C] rounded-2xl p-8 border-l-4 border-[#FF5500] h-full">
              <div className="text-[#FF5500] font-bold text-sm uppercase tracking-wider mb-3">Notre mission</div>
              <h2 className="text-xl font-black text-white mb-4">
                Accompagner, intégrer, innover
              </h2>
              <p className="text-white/70 leading-relaxed">
                Accompagner les entreprises dans la conception, l&apos;intégration et l&apos;évolution
                de leurs systèmes d&apos;information en combinant expertise métier, technologies
                modernes et innovation continue.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#E8F0FE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-[#1A2B3C] text-sm font-medium rounded-full mb-4">
              ■ Nos valeurs
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A2B3C]">
              Ce qui nous définit
            </h2>
          </FadeUp>
          <StaggerContainer
            className="grid grid-cols-2 sm:grid-cols-4 gap-5"
            stagger={0.08}
            delay={0.05}
          >
            {values.map((v) => {
              const Icon = iconMap[v.icon] ?? Star;
              return (
                <StaggerItem key={v.name}>
                  <motion.div
                    whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(26,43,60,0.1)", transition: { duration: 0.2, ease } }}
                    className="bg-white rounded-2xl p-6 text-center border border-[#D9E2EC] cursor-default"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#E8F0FE] flex items-center justify-center mx-auto mb-4">
                      <Icon size={20} className="text-[#FF5500]" />
                    </div>
                    <h3 className="font-bold text-[#1A2B3C] mb-1.5">{v.name}</h3>
                    <p className="text-xs text-[#374151] leading-relaxed">{v.desc}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white" id="equipe">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F0FE] text-[#1A2B3C] text-sm font-medium rounded-full mb-4">
              ■ Notre équipe
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A2B3C] mb-4">
              Les experts derrière AKILI Labs
            </h2>
            <p className="text-[#374151] max-w-xl mx-auto">
              Une équipe pluridisciplinaire, passionnée par la technologie et engagée pour
              la transformation digitale de l&apos;Afrique.
            </p>
          </FadeUp>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            stagger={0.1}
            delay={0.05}
          >
            {team.map((membre) => (
              <StaggerItem key={membre.nom}>
                <motion.div
                  whileHover={{ y: -6, borderColor: "#FF5500", boxShadow: "0 16px 40px rgba(26,43,60,0.12)", transition: { duration: 0.22, ease } }}
                  className="group bg-white border border-[#D9E2EC] rounded-2xl p-7 flex flex-col h-full"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 text-white font-black text-lg shadow-md"
                      style={{ background: `linear-gradient(135deg, ${membre.couleur}, ${membre.couleur}cc)` }}
                      whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
                      aria-hidden="true"
                    >
                      {membre.initiales}
                    </motion.div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-[#1A2B3C] leading-tight">{membre.nom}</h3>
                      <p className="text-xs font-semibold text-[#c94200] mt-0.5 leading-tight">
                        {membre.titre}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#374151] leading-relaxed flex-1 mb-5">
                    {membre.bio}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {membre.expertises.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium bg-[#E8F0FE] text-[#1A2B3C] rounded-lg border border-[#D9E2EC]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {membre.linkedin ? (
                    <a
                      href={membre.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#374151] hover:text-[#FF5500] transition-colors"
                      aria-label={`LinkedIn de ${membre.nom}`}
                    >
                      <Linkedin size={14} />
                      Voir le profil LinkedIn
                    </a>
                  ) : (
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#374151] hover:text-[#FF5500] transition-colors"
                    >
                      Contacter ce pôle →
                    </Link>
                  )}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Rejoindre CTA */}
          <FadeUp className="mt-14" delay={0.1}>
            <div className="bg-[#E8F0FE] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#D9E2EC]">
              <div>
                <h3 className="text-lg font-black text-[#1A2B3C] mb-1">
                  Vous souhaitez rejoindre l&apos;équipe ?
                </h3>
                <p className="text-sm text-[#374151]">
                  Nous recrutons des talents passionnés par la tech et l&apos;impact en Afrique.
                </p>
              </div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="/carrieres"
                  className="shrink-0 px-6 py-3 bg-[#FF5500] text-white font-semibold rounded-xl hover:bg-[#e04d00] transition-colors shadow-md whitespace-nowrap"
                >
                  Voir nos offres →
                </Link>
              </motion.div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">
              Technologies & Partenaires
            </div>
          </FadeUp>
          <StaggerContainer
            className="flex flex-wrap items-center justify-center gap-4"
            stagger={0.07}
            delay={0.1}
          >
            {partners.map((p) => {
              const { bg, text } = getTechColor(p);
              return (
                <StaggerItem key={p}>
                  <motion.div
                    whileHover={{ scale: 1.06, transition: { duration: 0.18 } }}
                    className="px-6 py-3 text-sm font-semibold rounded-xl cursor-default"
                    style={{ backgroundColor: bg, color: text }}
                  >
                    {p}
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A2B3C]">
        <FadeUp className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white mb-3">Rejoignez l&apos;aventure AKILI Labs</h2>
          <p className="text-white/70 mb-7">Nous recrutons des talents passionnés par la tech et l&apos;impact en Afrique.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link href="/carrieres" className="px-6 py-3 bg-[#FF5500] text-white font-semibold rounded-xl hover:bg-[#e04d00] transition-colors">
                Voir les offres →
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" className="px-6 py-3 border border-white/20 text-white/80 rounded-xl hover:border-white/40 hover:text-white transition-colors font-medium">
                Parlons de votre projet
              </Link>
            </motion.div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
