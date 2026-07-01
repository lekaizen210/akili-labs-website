"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

interface PageHeroProps {
  badge: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  children?: React.ReactNode;
  align?: "center" | "left";
  maxWidth?: string;
}

export function HeroHighlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block text-[#FF5500]">
      {children}
      <svg
        className="absolute -bottom-1.5 left-0 w-full"
        height="5"
        viewBox="0 0 100 5"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 4 Q25 0 50 3.5 Q75 7 100 2.5"
          fill="none"
          stroke="#FF5500"
          strokeWidth="2"
          opacity="0.5"
        />
      </svg>
    </span>
  );
}

export default function PageHero({
  badge,
  title,
  subtitle,
  children,
  align = "center",
  maxWidth = "max-w-4xl",
}: PageHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.2 + 0.4,
      opacity: Math.random() * 0.3 + 0.08,
    }));

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 85, 0, ${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const textAlign = align === "left" ? "text-left" : "text-center";
  const mx = align === "left" ? "" : "mx-auto";

  return (
    <section className="pt-32 pb-20 bg-[#1A2B3C] relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 70% at 80% 40%, rgba(255,85,0,0.09) 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className={`relative ${maxWidth} ${mx} px-4 sm:px-6 lg:px-8 ${textAlign}`}>
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white/70 text-sm font-medium rounded-full mb-6 border border-white/10"
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-[#FF5500] inline-block"
            animate={{ scale: [1, 1.35, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
            aria-hidden="true"
          />
          {badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight"
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3, ease }}
          className={`text-lg text-white/80 ${mx} max-w-2xl leading-relaxed`}
        >
          {subtitle}
        </motion.div>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
