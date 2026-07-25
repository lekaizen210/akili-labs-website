"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { dmServices } from "@/lib/developpement-metiers-data";
import { l } from "@/lib/i18n-content";

export default function DmServices() {
  const t = useTranslations("DevMetiers.services");
  const locale = useLocale();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-6">
            ■ {t("badge")}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-navy">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <FadeUp>
            <Image
              src="/developpement-metiers-images/dm-architecture.png"
              alt={t("imageAlt")}
              width={1400}
              height={900}
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 560px"
              className="w-full h-auto rounded-2xl border border-line shadow-md"
            />
          </FadeUp>

          <StaggerContainer className="space-y-5" stagger={0.09}>
            {dmServices.map((s) => (
              <StaggerItem key={l(s.title, "fr")} className="bg-blue-light rounded-xl p-5 border border-line">
                <h3 className="font-bold text-navy mb-1.5">{l(s.title, locale)}</h3>
                <p className="text-sm text-ink leading-relaxed">{l(s.desc, locale)}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <FadeUp delay={0.1}>
          <p className="text-center text-sm text-ink mt-10">
            {t("footerText")}{" "}
            <Link href="/references" className="inline-flex items-center gap-1 font-semibold text-orange-dark hover:underline">
              {t("referencesLabel")} <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
