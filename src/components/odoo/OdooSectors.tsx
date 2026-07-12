"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShoppingBag,
  Factory,
  Landmark,
  HardHat,
  Briefcase,
  HandHeart,
} from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem, viewportOnce } from "@/components/ui/motion-primitives";
import { odooSectorUseCases, odooSectorsSecondary } from "@/lib/odoo-data";

const sectorIcons = [ShoppingBag, Factory, Landmark, HardHat, Briefcase, HandHeart] as const;

export default function OdooSectors() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-6">
            ■ Secteurs d&apos;intervention
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-navy">
            Chaque secteur a ses processus critiques : nous partons des vôtres
          </h2>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.05}>
          {odooSectorUseCases.map((s, i) => {
            const Icon = sectorIcons[i];
            return (
              <StaggerItem
                key={s.sector}
                className="group bg-blue-light rounded-xl p-5 border border-line transition-colors hover:border-orange"
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <Icon size={18} className="text-navy transition-colors group-hover:text-orange shrink-0" aria-hidden="true" />
                  <h3 className="text-sm font-bold text-navy">{s.sector}</h3>
                </div>
                <p className="text-xs text-ink leading-relaxed mb-4">{s.constraint}</p>
                <div className="flex flex-wrap gap-3">
                  {s.useCases.map((u, ui) => (
                    <div key={u.label} className="flex flex-col items-center gap-1 w-16 text-center">
                      <motion.div
                        className="w-9 h-9 bg-white rounded-lg border border-line flex items-center justify-center shrink-0 transition-colors group-hover:border-orange/40"
                        initial={{ scale: 0.6, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={viewportOnce}
                        transition={{ type: "spring", stiffness: 350, damping: 16, delay: ui * 0.05 }}
                      >
                        <Image
                          src={`/odoo-icons/${u.icon}.png`}
                          alt={u.label}
                          width={22}
                          height={22}
                          loading="lazy"
                        />
                      </motion.div>
                      <span className="text-[10px] leading-tight text-ink font-medium">{u.label}</span>
                    </div>
                  ))}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
        <FadeUp delay={0.1}>
          <p className="text-center text-sm text-ink mt-8 max-w-3xl mx-auto">{odooSectorsSecondary}</p>
        </FadeUp>
      </div>
    </section>
  );
}
