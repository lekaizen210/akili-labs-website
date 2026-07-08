"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/components/ui/motion-primitives";

const hub = { x: 160, y: 160 };
const radius = 118;

const countries = [
  { name: "Côte d'Ivoire", code: "CI" },
  { name: "Sénégal", code: "SN" },
  { name: "Mali", code: "ML" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Niger", code: "NE" },
  { name: "Togo", code: "TG" },
  { name: "Bénin", code: "BJ" },
  { name: "Guinée-Bissau", code: "GW" },
];

const nodes = countries.map(({ name, code }, i) => {
  const angle = (i / countries.length) * Math.PI * 2 - Math.PI / 2;
  return {
    name,
    code,
    x: hub.x + radius * Math.cos(angle),
    y: hub.y + radius * Math.sin(angle),
  };
});

export default function AkiliNetworkDiagram() {
  return (
    <svg
      viewBox="0 0 320 320"
      className="w-full max-w-xs mx-auto h-auto"
      role="img"
      aria-label="AKILI Labs intervient dans 8 pays de la zone UEMOA/CEDEAO"
    >
      {nodes.map((n, i) => (
        <motion.line
          key={`line-${n.name}`}
          x1={hub.x}
          y1={hub.y}
          x2={n.x}
          y2={n.y}
          stroke="#1A2B3C"
          strokeWidth={1}
          strokeOpacity={0.25}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.2 + i * 0.06, ease: "easeInOut" }}
        />
      ))}

      <motion.circle
        cx={hub.x}
        cy={hub.y}
        r={22}
        fill="#1A2B3C"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={viewportOnce}
        transition={{ type: "spring", stiffness: 260, damping: 16 }}
      />
      <text x={hub.x} y={hub.y + 4} textAnchor="middle" fontSize={10} fontWeight={700} fill="white">
        AKILI
      </text>

      {nodes.map((n, i) => (
        <g key={n.name}>
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={9}
            fill="#FF5500"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={viewportOnce}
            transition={{ type: "spring", stiffness: 320, damping: 14, delay: 0.3 + i * 0.06 }}
          />
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={9}
            fill="none"
            stroke="#FF5500"
            strokeWidth={1.5}
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: [1, 2.1, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut", delay: 1 + i * 0.35 }}
          />
          <title>{n.name}</title>
          <text x={n.x} y={n.y + 20} textAnchor="middle" fontSize={9} fontWeight={600} fill="#374151">
            {n.code}
          </text>
        </g>
      ))}
    </svg>
  );
}
