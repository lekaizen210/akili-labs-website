"use client";

import { Star, Lightbulb, Shield, Users, Target, Lock, Award, TrendingUp, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { values, team } from "@/lib/data";
import { l } from "@/lib/i18n-content";
import { Link } from "@/i18n/navigation";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import PageHero, { HeroHighlight } from "@/components/ui/PageHero";
import { getTechColor } from "@/lib/tech-colors";

const iconMap: Record<string, React.ElementType> = {
  Star, Lightbulb, Shield, Users, Target, Lock, Award, TrendingUp,
};

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const partners = ["Odoo", "AWS", "Microsoft Azure", "GitLab", "Docker", "PostgreSQL", "GitHub"];

const manifestoIcons = [Award, Target, Shield];

export default function AboutPage() {
  const t = useTranslations("About");
  const locale = useLocale();

  return (
    <>
      <PageHero
        badge={t("hero.badge")}
        title={
          <>
            <span className="text-white">{t("hero.titlePart1")}</span>
            <HeroHighlight>{t("hero.titleHighlight")}</HeroHighlight>
          </>
        }
        subtitle={t("hero.subtitle")}
      />

      {/* Manifesto */}
      <section className="py-20 bg-blue-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-navy text-sm font-medium rounded-full mb-4">
              ■ {t("manifesto.eyebrow")}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-navy mb-4">
              {t("manifesto.title")}
            </h2>
            <p className="text-ink max-w-3xl mx-auto text-lg leading-relaxed">
              {t("manifesto.text")}
            </p>
          </FadeUp>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            stagger={0.12}
            delay={0.05}
          >
            {[1, 2, 3].map((n) => {
              const Icon = manifestoIcons[n - 1];
              return (
                <StaggerItem key={n}>
                  <motion.div
                    whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(26,43,60,0.09)", transition: { duration: 0.22, ease } }}
                    className="bg-white border border-line rounded-2xl p-7 flex flex-col gap-4 h-full"
                  >
                    <div className="w-11 h-11 rounded-xl bg-blue-light flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-orange" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy mb-2 leading-snug">{t(`manifesto.card${n}Title`)}</h3>
                      <p className="text-sm text-ink leading-relaxed">{t(`manifesto.card${n}Text`)}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <StaggerContainer
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8"
          stagger={0.15}
          delay={0.1}
        >
          <StaggerItem>
            <div className="bg-blue-light rounded-2xl p-8 border-l-4 border-navy h-full">
              <div className="text-orange-dark font-bold text-sm uppercase tracking-wider mb-3">{t("vision.label")}</div>
              <h2 className="text-xl font-black text-navy mb-4">
                {t("vision.title")}
              </h2>
              <p className="text-ink leading-relaxed">
                {t("vision.text")}
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bg-navy rounded-2xl p-8 border-l-4 border-orange h-full">
              <div className="text-orange font-bold text-sm uppercase tracking-wider mb-3">{t("mission.label")}</div>
              <h2 className="text-xl font-black text-white mb-4">
                {t("mission.title")}
              </h2>
              <p className="text-white/70 leading-relaxed">
                {t("mission.text")}
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Values */}
      <section className="py-20 bg-blue-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-navy text-sm font-medium rounded-full mb-4">
              ■ {t("values.badge")}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy">
              {t("values.title")}
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
                <StaggerItem key={v.icon}>
                  <motion.div
                    whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(26,43,60,0.1)", transition: { duration: 0.2, ease } }}
                    className="bg-white rounded-2xl p-6 text-center border border-line cursor-default"
                  >
                    <div className="w-11 h-11 rounded-xl bg-blue-light flex items-center justify-center mx-auto mb-4">
                      <Icon size={20} className="text-orange" />
                    </div>
                    <h3 className="font-bold text-navy mb-1.5">{l(v.name, locale)}</h3>
                    <p className="text-xs text-ink leading-relaxed">{l(v.desc, locale)}</p>
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-4">
              ■ {t("team.badge")}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy mb-4">
              {t("team.title")}
            </h2>
            <p className="text-ink max-w-xl mx-auto">
              {t("team.subtitle")}
            </p>
          </FadeUp>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            stagger={0.1}
            delay={0.05}
          >
            {team.map((membre) => {
              const nom = l(membre.nom, locale);
              return (
                <StaggerItem key={l(membre.nom, "fr")}>
                  <motion.div
                    whileHover={{ y: -6, borderColor: "var(--color-orange)", boxShadow: "0 16px 40px rgba(26,43,60,0.12)", transition: { duration: 0.22, ease } }}
                    className="group bg-white border border-line rounded-2xl p-7 flex flex-col h-full"
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
                        <h3 className="font-bold text-navy leading-tight">{nom}</h3>
                        <p className="text-xs font-semibold text-orange-dark mt-0.5 leading-tight">
                          {l(membre.titre, locale)}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-ink leading-relaxed flex-1 mb-5">
                      {l(membre.bio, locale)}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {membre.expertises.map((tag) => (
                        <span
                          key={l(tag, "fr")}
                          className="px-2.5 py-1 text-xs font-medium bg-blue-light text-navy rounded-lg border border-line"
                        >
                          {l(tag, locale)}
                        </span>
                      ))}
                    </div>

                    {membre.linkedin ? (
                      <a
                        href={membre.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-ink hover:text-orange transition-colors"
                        aria-label={t("team.linkedinAriaLabel", { name: nom })}
                      >
                        <Linkedin size={14} />
                        {t("team.linkedinText")}
                      </a>
                    ) : (
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-ink hover:text-orange transition-colors"
                      >
                        {t("team.contactPole")}
                      </Link>
                    )}
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Rejoindre CTA */}
          <FadeUp className="mt-14" delay={0.1}>
            <div className="bg-blue-light rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-line">
              <div>
                <h3 className="text-lg font-black text-navy mb-1">
                  {t("team.joinTitle")}
                </h3>
                <p className="text-sm text-ink">
                  {t("team.joinText")}
                </p>
              </div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="/carrieres"
                  className="shrink-0 px-6 py-3 bg-orange text-white font-semibold rounded-xl hover:bg-orange-hover transition-colors shadow-md whitespace-nowrap"
                >
                  {t("team.viewOffers")}
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
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
              {t("partners.label")}
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
      <section className="py-16 bg-navy">
        <FadeUp className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white mb-3">{t("cta.title")}</h2>
          <p className="text-white/70 mb-7">{t("cta.text")}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link href="/carrieres" className="px-6 py-3 bg-orange text-white font-semibold rounded-xl hover:bg-orange-hover transition-colors">
                {t("cta.viewOffers")}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" className="px-6 py-3 border border-white/20 text-white/80 rounded-xl hover:border-white/40 hover:text-white transition-colors font-medium">
                {t("cta.contactButton")}
              </Link>
            </motion.div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
