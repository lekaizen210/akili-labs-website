"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import AkiliNetworkDiagram from "@/components/ui/AkiliNetworkDiagram";
import { iaValueProps } from "@/lib/ia-data";

export default function IaWhyNow() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-6">
              ■ Pourquoi l&apos;IA maintenant en Afrique ?
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="text-2xl sm:text-3xl font-black text-navy">
              L&apos;opportunité est là. La fenêtre est ouverte.
            </h2>
          </FadeUp>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_220px] gap-8 items-center mb-6">
          <FadeUp delay={0.14}>
            <p className="text-ink leading-relaxed">
              L&apos;Afrique est la prochaine grande frontière de l&apos;Intelligence Artificielle. Avec plus
              de <strong>1,4 milliard d&apos;habitants</strong>, une population jeune hyper-connectée, une
              pénétration du Mobile Money sans équivalent dans le monde et des marchés en construction
              rapide, le continent offre un terrain unique pour l&apos;IA.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div>
              <AkiliNetworkDiagram />
              <p className="text-center text-xs text-gray-500 mt-1">8 pays UEMOA/CEDEAO</p>
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={0.2}>
          <div className="bg-blue-light border-l-4 border-navy rounded-r-xl p-6 mb-12">
            <p className="text-navy font-bold text-lg mb-1">
              Les entreprises africaines qui adoptent l&apos;IA aujourd&apos;hui ne rattrapent pas un retard.
            </p>
            <p className="text-ink leading-relaxed">Elles construisent une avance.</p>
          </div>
        </FadeUp>

        <div className="text-center mb-8">
          <h3 className="text-xl font-black text-navy">
            Ce que l&apos;IA change concrètement pour une organisation africaine
          </h3>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10" stagger={0.08}>
          {iaValueProps.map((v) => (
            <StaggerItem key={v.title} className="bg-white rounded-xl p-5 border border-line text-center">
              <h4 className="font-bold text-navy mb-2">{v.title}</h4>
              <p className="text-xs text-ink leading-relaxed">{v.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.1}>
          <p className="text-center text-ink leading-relaxed max-w-2xl mx-auto">
            Chez AKILI Labs, nous ne vendons pas de l&apos;IA pour faire moderne. Nous déployons des
            solutions qui résolvent des problèmes réels et produisent des résultats mesurables.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
