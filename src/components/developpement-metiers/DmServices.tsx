"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { dmServices } from "@/lib/developpement-metiers-data";

export default function DmServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-6">
            ■ Au-delà de la livraison
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-navy">
            Une application vit après sa mise en production
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <FadeUp>
            <Image
              src="/developpement-metiers-images/dm-architecture.png"
              alt="Documentation de l’API métier : les points d’entrée (fiche adhérent, encaissement, confirmation Mobile Money, rapports), un exemple d’appel avec sa réponse JSON, les droits d’accès par rôle, et la liste des applications qui la consomment (guichet, mobile terrain, portail de direction, logiciel comptable)"
              width={1400}
              height={900}
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 560px"
              className="w-full h-auto rounded-2xl border border-line shadow-md"
            />
          </FadeUp>

          <StaggerContainer className="space-y-5" stagger={0.09}>
            {dmServices.map((s) => (
              <StaggerItem key={s.title} className="bg-blue-light rounded-xl p-5 border border-line">
                <h3 className="font-bold text-navy mb-1.5">{s.title}</h3>
                <p className="text-sm text-ink leading-relaxed">{s.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <FadeUp delay={0.1}>
          <p className="text-center text-sm text-ink mt-10">
            Nos réalisations, avec résultats mesurés, sont présentées sur la page{" "}
            <Link href="/references" className="inline-flex items-center gap-1 font-semibold text-orange-dark hover:underline">
              Références <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
