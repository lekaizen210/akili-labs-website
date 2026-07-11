"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";

function useCountUp(target: string, inView: boolean) {
  const [current, setCurrent] = useState("0");
  const numericPart = parseInt(target.replace(/\D/g, ""), 10);
  const suffix = target.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 60;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / total;
      const val = Math.round(numericPart * Math.min(progress, 1));
      setCurrent(`${val}${suffix}`);
      if (frame >= total) clearInterval(timer);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, numericPart, suffix]);

  return current;
}

function StatItem({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const animated = useCountUp(value, inView);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <span className="sr-only">{value}</span>
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-4xl lg:text-5xl font-black text-orange mb-1 tabular-nums"
      >
        {inView ? animated : "0"}
      </motion.div>
      <div className="text-sm font-medium text-ink">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-14 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          stagger={0.12}
          delay={0.05}
        >
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <StatItem value={s.value} label={s.label} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
