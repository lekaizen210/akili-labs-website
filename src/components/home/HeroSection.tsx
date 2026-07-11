"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ParticleCanvas from "@/components/ui/ParticleCanvas";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function HeroSection() {
  const techs: Array<{ label: string; bg: string; text: string }> = [
    { label: "Odoo",          bg: "#714B67", text: "#FFFFFF" },
    { label: "IA Générative", bg: "#7C3AED", text: "#FFFFFF" },
    { label: "Kubernetes",    bg: "#326CE5", text: "#FFFFFF" },
    { label: "Next.js",       bg: "#000000", text: "#FFFFFF" },
    { label: "PostgreSQL",    bg: "#336791", text: "#FFFFFF" },
    { label: "AWS",           bg: "#FF9900", text: "var(--color-navy)" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy">
      {/* Canvas particles */}
      <ParticleCanvas count={60} />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(255,85,0,0.08) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05, ease }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-sm text-white/80 mb-10"
        >
          <span className="text-orange" aria-hidden="true">■</span>
          Acteur de référence de la transformation digitale en Afrique
        </motion.div>

        {/* H1 — Option C : 3 lignes hiérarchisées */}
        <h1 className="mb-8">
          {/* Ligne 1 — label haut, petit, uppercase */}
          <motion.span
            initial={{ opacity: 0, y: 48, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.15, ease }}
            className="block text-sm font-semibold text-white/80 uppercase tracking-[0.18em] mb-5"
          >
            Votre partenaire de
          </motion.span>

          {/* Ligne 2 — titre principal, grand, font-black */}
          <motion.span
            initial={{ opacity: 0, y: 48, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.60, delay: 0.27, ease }}
            className="block font-black leading-tight tracking-tight text-5xl sm:text-6xl lg:text-7xl"
          >
            <span className="text-white">Transformation</span>{" "}
            <span className="relative inline-block text-orange">
              Digitale
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="6"
                viewBox="0 0 100 6"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0 5 Q25 0 50 4 Q75 8 100 3"
                  fill="none"
                  stroke="var(--color-orange)"
                  strokeWidth="2"
                  opacity="0.6"
                />
              </svg>
            </span>
          </motion.span>

          {/* Ligne 3 — label bas, même style que ligne 1 */}
          <motion.span
            initial={{ opacity: 0, y: 48, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.39, ease }}
            className="block text-sm font-semibold text-white/80 uppercase tracking-[0.18em] mt-5"
          >
            en Afrique
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.50, delay: 0.50, ease }}
          className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          ERP, Intelligence Artificielle, DevSecOps, Développement sur mesure
          <br />
          Des solutions qui créent de la valeur réelle pour les organisations de la zone UEMOA.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.60 } },
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.96 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.50, ease } },
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-7 py-4 bg-orange text-white font-semibold rounded-xl hover:bg-orange-hover transition-colors duration-200 shadow-lg shadow-orange-900/30"
            >
              Demander une consultation gratuite
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.96 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.50, ease } },
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/references"
              className="flex items-center gap-2 px-7 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors duration-200 border border-white/20"
            >
              Voir nos réalisations
            </Link>
          </motion.div>
        </motion.div>

        {/* Tech pills */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.75 } },
          }}
          className="flex flex-wrap items-center justify-center gap-2 mt-12"
        >
          {techs.map(({ label, bg, text }) => (
            <motion.span
              key={label}
              variants={{
                hidden: { opacity: 0, scale: 0.75 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease } },
              }}
              whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.96 }}
              className="px-3 py-1.5 text-sm font-semibold rounded-full cursor-default"
              style={{ backgroundColor: bg, color: text }}
            >
              {label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
