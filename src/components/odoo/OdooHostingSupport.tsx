"use client";

import { motion } from "framer-motion";
import { Cloud, Server, HardDrive, Boxes, Headset } from "lucide-react";
import { StaggerContainer, StaggerItem, viewportOnce } from "@/components/ui/motion-primitives";
import { odooHostingModes, odooSupportTiers } from "@/lib/odoo-data";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const hostingIcons = [Cloud, Server, HardDrive, Boxes] as const;

const supportEmphasis = [
  { badge: "bg-[#E8F0FE] text-[#1A2B3C]", card: "border-[#D9E2EC]" },
  { badge: "bg-[#FFF4E5] text-[#c94200]", card: "border-[#D9E2EC]" },
  { badge: "bg-[#FF5500] text-white", card: "border-[#FF5500] shadow-md" },
] as const;

export default function OdooHostingSupport() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F0FE] text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
          ■ Hébergement & Support
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C] mb-10">
          Un mode de déploiement et un support adaptés à vos contraintes
        </h2>

        <h3 className="font-bold text-[#1A2B3C] mb-5">Hébergement & Infrastructure</h3>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16" stagger={0.08}>
          {odooHostingModes.map((h, i) => {
            const Icon = hostingIcons[i];
            return (
              <StaggerItem
                key={h.mode}
                className="group bg-white rounded-2xl border border-[#D9E2EC] p-6 transition-all hover:-translate-y-0.5 hover:border-[#FF5500] hover:shadow-md"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#E8F0FE] mb-4 transition-colors group-hover:bg-[#1A2B3C]">
                  <Icon size={20} className="text-[#1A2B3C] transition-colors group-hover:text-white" aria-hidden="true" />
                </div>
                <h4 className="font-bold text-[#1A2B3C] mb-2">{h.mode}</h4>
                <p className="text-sm text-[#374151] mb-4 leading-relaxed">{h.description}</p>
                <div className="text-xs font-semibold text-[#1A2B3C]">
                  Idéal pour : <span className="font-normal text-[#374151]">{h.fit}</span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <h3 className="font-bold text-[#1A2B3C] mb-5">Support & Maintenance</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {odooSupportTiers.map((s, i) => {
            const emphasis = supportEmphasis[i];
            return (
              <motion.div
                key={s.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className={`rounded-2xl border p-6 bg-white transition-transform hover:-translate-y-0.5 ${emphasis.card}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Headset size={16} className="text-[#374151]" aria-hidden="true" />
                  <h4 className="font-bold text-[#1A2B3C]">{s.level}</h4>
                </div>
                <p className="text-sm text-[#374151] mb-5 leading-relaxed">{s.content}</p>
                <span className={`inline-flex px-3 py-1.5 rounded-lg text-xs font-bold ${emphasis.badge}`}>
                  Délai : {s.delay}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
