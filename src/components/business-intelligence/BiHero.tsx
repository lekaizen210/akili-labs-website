import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import PageHero, { HeroHighlight } from "@/components/ui/PageHero";

export default async function BiHero() {
  const t = await getTranslations("Bi.hero");

  return (
    <PageHero
      badge={t("badge")}
      title={
        <>
          <span className="text-white">{t("titlePart1")}</span>
          <HeroHighlight>{t("titleHighlight")}</HeroHighlight>
        </>
      }
      subtitle={t("subtitle")}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 px-7 py-4 bg-orange-cta text-white font-semibold rounded-xl hover:bg-orange-cta-hover transition-[background-color,transform] duration-150 ease-out active:scale-[0.97] shadow-lg shadow-orange-900/20"
        >
          {t("ctaPrimary")}
          <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </Link>
        <a
          href="#pilotage"
          className="inline-flex items-center gap-2 px-7 py-4 text-white/80 hover:text-white border border-white/20 rounded-xl font-medium transition-[color,border-color,transform] duration-150 ease-out hover:border-white/40 active:scale-[0.97]"
        >
          {t("ctaSecondary")}
        </a>
      </div>
      <div className="mt-14 hidden sm:block">
        <Image
          src="/bi-images/bi-hero.jpg"
          alt={t("imageAlt")}
          width={2304}
          height={1728}
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 1024px) 90vw, 768px"
          className="mx-auto rounded-2xl border border-white/10 shadow-2xl shadow-black/40 max-w-3xl w-full h-auto"
        />
      </div>
    </PageHero>
  );
}
