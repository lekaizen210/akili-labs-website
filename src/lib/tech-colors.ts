export interface TechColor {
  bg: string;
  text: string;
}

export const TECH_COLORS: Record<string, TechColor> = {
  // ERP
  "Odoo":              { bg: "#714B67", text: "#FFFFFF" },
  "Odoo Enterprise":   { bg: "#714B67", text: "#FFFFFF" },
  "Odoo Community":    { bg: "#875A7B", text: "#FFFFFF" },

  // Cloud
  "AWS":               { bg: "#FF9900", text: "#1A2B3C" },
  "Microsoft Azure":   { bg: "#0078D4", text: "#FFFFFF" },
  "Google Cloud":      { bg: "#4285F4", text: "#FFFFFF" },

  // DevOps / Conteneurs
  "Docker":            { bg: "#2496ED", text: "#FFFFFF" },
  "Kubernetes":        { bg: "#326CE5", text: "#FFFFFF" },
  "Terraform":         { bg: "#7B42BC", text: "#FFFFFF" },
  "Ansible":           { bg: "#EE0000", text: "#FFFFFF" },

  // Repos / CI
  "GitHub":            { bg: "#181717", text: "#FFFFFF" },
  "GitLab":            { bg: "#FC6D26", text: "#FFFFFF" },
  "GitLab CI/CD":      { bg: "#FC6D26", text: "#FFFFFF" },

  // Langages & Frameworks
  "Python":            { bg: "#3776AB", text: "#FFFFFF" },
  "FastAPI":           { bg: "#009688", text: "#FFFFFF" },
  "Next.js":           { bg: "#000000", text: "#FFFFFF" },
  "React":             { bg: "#61DAFB", text: "#1A2B3C" },
  "TypeScript":        { bg: "#3178C6", text: "#FFFFFF" },
  "Node.js":           { bg: "#339933", text: "#FFFFFF" },

  // Bases de données
  "PostgreSQL":        { bg: "#336791", text: "#FFFFFF" },
  "MongoDB":           { bg: "#47A248", text: "#FFFFFF" },
  "Redis":             { bg: "#DC382D", text: "#FFFFFF" },

  // IA
  "IA Générative":     { bg: "#7C3AED", text: "#FFFFFF" },
  "LLM privé":         { bg: "#7C3AED", text: "#FFFFFF" },
  "Tesseract OCR":     { bg: "#4A90D9", text: "#FFFFFF" },

  // Qualité / Monitoring
  "SonarQube":         { bg: "#4E9BCD", text: "#FFFFFF" },
  "Grafana":           { bg: "#F46800", text: "#FFFFFF" },
  "Prometheus":        { bg: "#E6522C", text: "#FFFFFF" },
};

/** Retourne les couleurs de marque ou un fallback neutre */
export function getTechColor(name: string): TechColor {
  return TECH_COLORS[name] ?? { bg: "#1A2B3C", text: "#FFFFFF" };
}
