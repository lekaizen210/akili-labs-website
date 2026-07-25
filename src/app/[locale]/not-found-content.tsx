"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function NotFoundContent() {
  const t = useTranslations("NotFound");

  return (
    <div className="min-h-screen bg-navy flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Gradient de fond */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(255,85,0,0.08) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      {/* 404 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 0.6, ease }}
        className="text-orange font-black text-[10rem] leading-none select-none mb-0"
        aria-hidden="true"
      >
        404
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.2, ease }}
        className="relative -mt-8"
      >
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
          {t("title")}
        </h1>
        <p className="text-white/60 mb-8 max-w-sm mx-auto leading-relaxed">
          {t("description")}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.38, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-7 py-4 bg-orange text-white font-semibold rounded-xl hover:bg-orange-hover transition-colors shadow-lg"
            >
              <Home size={16} />
              {t("backHome")}
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-7 py-4 border border-white/20 text-white/80 font-medium rounded-xl hover:border-white/40 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              {t("previousPage")}
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
