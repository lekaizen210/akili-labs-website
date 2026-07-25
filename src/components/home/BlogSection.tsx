"use client";

import { Link } from "@/i18n/navigation";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { blogPosts } from "@/lib/data";
import { l } from "@/lib/i18n-content";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";

// Keyed on the stable tagKey so styling stays consistent across locales.
const tagColors: Record<string, string> = {
  erp: "bg-blue-50 text-blue-700 border border-blue-100",
  ia: "bg-purple-50 text-purple-700 border border-purple-100",
  devsecops: "bg-green-50 text-green-700 border border-green-100",
};

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function BlogSection() {
  const t = useTranslations("Home.blog");
  const locale = useLocale();
  return (
    <section className="py-24 bg-blue-light" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeUp className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-navy text-sm font-medium rounded-full mb-4">
              ■ {t("badge")}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy">
              {t("title")}
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm font-semibold text-orange-dark hover:underline whitespace-nowrap"
          >
            {t("blogLink")} <ArrowRight size={14} />
          </Link>
        </FadeUp>

        {/* Cards */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          stagger={0.12}
          delay={0.1}
        >
          {blogPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.22, ease } }}
                whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                className="h-full"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-line hover:shadow-xl hover:border-orange transition-[box-shadow,border-color] duration-300"
                >
                  <div className="h-1 bg-gradient-to-r from-orange to-navy" />
                  <div className="h-44 bg-gradient-to-br from-navy to-[#243548] flex items-center justify-center overflow-hidden">
                    <motion.span
                      className="text-orange font-black text-4xl opacity-30"
                      whileHover={{ scale: 1.15, opacity: 0.5, transition: { duration: 0.3 } }}
                    >
                      {l(post.tag, locale)}
                    </motion.span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${tagColors[post.tagKey] ?? "bg-gray-100 text-gray-600"}`}>
                        {l(post.category, locale)}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-navy mb-2 leading-snug group-hover:text-orange transition-colors flex-1">
                      {l(post.title, locale)}
                    </h3>
                    <p className="text-sm text-ink leading-relaxed mb-4 line-clamp-2">
                      {l(post.excerpt, locale)}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {new Date(post.date).toLocaleDateString(locale === "en" ? "en-US" : "fr-FR", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
