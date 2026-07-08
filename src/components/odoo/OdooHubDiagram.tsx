"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/components/ui/motion-primitives";

const hub = { x: 300, y: 95 };

const nodes = [
  { x: 70, y: 32, icon: "crm", label: "CRM" },
  { x: 70, y: 158, icon: "stock", label: "Stock" },
  { x: 530, y: 32, icon: "account_accountant", label: "Comptabilité" },
  { x: 530, y: 158, icon: "hr", label: "RH" },
];

export default function OdooHubDiagram() {
  return (
    <svg
      viewBox="0 0 600 190"
      className="w-full max-w-xl mx-auto h-auto"
      role="img"
      aria-label="Odoo réunit CRM, Stock, Comptabilité et RH dans une seule plateforme"
    >
      {nodes.map((n, i) => (
        <motion.line
          key={`line-${n.label}`}
          x1={n.x}
          y1={n.y}
          x2={hub.x}
          y2={hub.y}
          stroke="#FF5500"
          strokeWidth={1.5}
          strokeOpacity={0.45}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, delay: 0.25 + i * 0.12, ease: "easeInOut" }}
        />
      ))}

      <motion.circle
        cx={hub.x}
        cy={hub.y}
        r={34}
        fill="#FF5500"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={viewportOnce}
        transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
      />
      <motion.text
        x={hub.x}
        y={hub.y + 5}
        textAnchor="middle"
        fontSize={15}
        fontWeight={800}
        fill="white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ delay: 0.35 }}
      >
        Odoo
      </motion.text>

      {nodes.map((n, i) => (
        <g key={n.label}>
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={24}
            fill="white"
            stroke="#D9E2EC"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={viewportOnce}
            transition={{ type: "spring", stiffness: 300, damping: 14, delay: 0.4 + i * 0.12 }}
          />
          <image href={`/odoo-icons/${n.icon}.png`} x={n.x - 12} y={n.y - 12} width={24} height={24} />
          <text
            x={n.x}
            y={n.y < hub.y ? n.y + 40 : n.y - 34}
            textAnchor="middle"
            fontSize={11}
            fontWeight={600}
            fill="#374151"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
