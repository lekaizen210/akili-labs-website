"use client";

import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/ui/motion-primitives";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const benefits = [
  "Évaluation de votre maturité data et de votre potentiel IA",
  "Identification de 2 à 3 cas d'usage à fort impact dans votre secteur",
  "Estimation indicative de faisabilité et de budget",
  "Réponses à vos questions techniques, éthiques et stratégiques",
];

export default function IaCtaFinal() {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(255,85,0,0.12) 0%, transparent 60%)" }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Votre projet IA commence par <span className="text-orange">une conversation</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">
            Ce que vous obtenez lors d&apos;un premier échange gratuit :
          </p>
        </FadeUp>
        <FadeUp delay={0.18}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-6 max-w-xl mx-auto">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-white/80">
                <span className="text-orange font-bold">✓</span> {b}
              </li>
            ))}
          </ul>
        </FadeUp>
        <FadeUp delay={0.22}>
          <p className="text-white/50 text-sm mb-10">
            Aucun engagement. Aucune pression. Juste de l&apos;expertise.
          </p>
        </FadeUp>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.26, ease }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="inline-block"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-orange-cta text-white font-semibold rounded-xl hover:bg-orange-cta-hover transition-colors shadow-lg shadow-orange-900/30"
          >
            Consultation gratuite
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
