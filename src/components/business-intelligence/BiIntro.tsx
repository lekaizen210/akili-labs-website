"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeUp } from "@/components/ui/motion-primitives";

export default function BiIntro() {
  const t = useTranslations("Bi.intro");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-6">
                ■ {t("badge")}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-navy mb-6">
                {t("title")}
              </h2>
            </FadeUp>
            <FadeUp delay={0.08}>
              <p className="text-ink leading-relaxed mb-5">
                {t("paragraph1")}
              </p>
              <p className="text-ink leading-relaxed mb-6">
                {t("paragraph2")}
              </p>
            </FadeUp>
            <FadeUp delay={0.14}>
              <div className="bg-blue-light border-l-4 border-navy rounded-r-xl p-5">
                <p className="text-navy font-semibold leading-relaxed text-sm">
                  {t("calloutText")}
                </p>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <Image
              src="/bi-images/bi-contexte.png"
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
