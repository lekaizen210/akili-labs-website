"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const logos = [
  { name: "3R Technologie" },
  { name: "NDIST" },
  { name: "Groupe 4R" },
];

const testimonialMeta = [
  { initiales: "KA", couleur: "var(--color-navy)", stars: 5 },
  { initiales: "FD", couleur: "var(--color-orange-dark)", stars: 5 },
  { initiales: "BM", couleur: "var(--color-ink)", stars: 5 },
];

export default function SocialProofSection() {
  const t = useTranslations("Home.socialProof");
  const testimonials = testimonialMeta.map((meta, i) => {
    const n = i + 1;
    return {
      quote: t(`testimonial${n}Quote`),
      name: t(`testimonial${n}Name`),
      role: t(`testimonial${n}Role`),
      company: t(`testimonial${n}Company`),
      location: t(`testimonial${n}Location`),
      ...meta,
    };
  });
  return (
    <section className="py-20 bg-white border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Logos strip */}
        <FadeUp className="text-center mb-14">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-8">
            {t("sectionLabel")}
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
                  className="flex items-center px-6 py-3 bg-blue-light border border-line rounded-xl cursor-default"
                >
                  <span className="text-sm font-bold text-navy tracking-wide">{logo.name}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeUp>

        {/* Section header */}
        <FadeUp className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-4">
            ■ {t("testimonialsBadge")}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-navy">
            {t("testimonialsTitle")}
          </h2>
        </FadeUp>

        {/* Testimonials */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          stagger={0.12}
          delay={0.05}
        >
          {testimonials.map((item) => (
            <StaggerItem key={item.name + item.company}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(26,43,60,0.09)", transition: { duration: 0.22, ease } }}
                className="bg-white border border-line rounded-2xl p-7 flex flex-col gap-4 h-full"
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5" aria-label={t("starsAriaLabel", { stars: item.stars })}>
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <Star key={i} size={14} className="text-orange fill-orange" aria-hidden="true" />
                  ))}
                </div>

                {/* Quote */}
                <div className="flex-1">
                  <Quote size={18} className="text-orange-dark mb-3 shrink-0" aria-hidden="true" />
                  <p className="text-sm text-ink leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-line">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm"
                    style={{ background: item.couleur }}
                    aria-hidden="true"
                  >
                    {item.initiales}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-navy leading-tight">{item.name}</div>
                    <div className="text-xs text-ink leading-tight">{item.role}</div>
                    <div className="text-xs text-gray-500 truncate">{item.company} · {item.location}</div>
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
