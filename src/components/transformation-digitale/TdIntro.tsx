"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeUp } from "@/components/ui/motion-primitives";

export default function TdIntro() {
  const t = useTranslations("Td.intro");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-6">
              ■ {t("badge")}
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="text-2xl sm:text-3xl font-black text-navy">
              {t("title")}
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <FadeUp delay={0.12}>
              <p className="text-ink leading-relaxed">{t("paragraph1")}</p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <div className="bg-blue-light border-l-4 border-navy rounded-r-xl p-6">
                <p className="text-navy font-bold text-lg mb-1">{t("calloutTitle")}</p>
                <p className="text-ink leading-relaxed">{t("calloutText")}</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.24}>
              <p className="text-ink leading-relaxed">{t("paragraph2")}</p>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <Image
              src="/transformation-digitale-images/td-contexte.png"
              alt={t("imageAlt")}
              width={1400}
              height={1000}
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 560px"
              className="w-full h-auto rounded-2xl border border-line shadow-md"
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
