/**
 * Tool `capture_lead` (Lot 3) — déclenché par l'agent Qualification une fois les
 * champs obligatoires réunis (SFD §5.6, §7.4).
 */
export const CAPTURE_LEAD_TOOL = {
  name: "capture_lead",
  description:
    "Enregistre un lead qualifié une fois les informations nécessaires collectées. " +
    "À utiliser uniquement après avoir apporté une réponse utile à la question initiale " +
    "de l'utilisateur (approche value-first).",
  input_schema: {
    type: "object" as const,
    properties: {
      nom: { type: "string" as const },
      societe: { type: "string" as const },
      email: { type: "string" as const },
      telephone: { type: "string" as const },
      secteur: { type: "string" as const },
      pays: { type: "string" as const },
      fonction: { type: "string" as const },
      besoin: { type: "string" as const, description: "Module ou offre d'intérêt" },
      budget_indicatif: { type: "string" as const },
      delai_souhaite: { type: "string" as const },
    },
    required: ["nom", "societe", "email", "telephone", "secteur", "pays", "besoin"],
  },
};

export type LeadInput = {
  nom: string;
  societe: string;
  email: string;
  telephone: string;
  secteur: string;
  pays: string;
  fonction?: string;
  besoin: string;
  budget_indicatif?: string;
  delai_souhaite?: string;
};

export type LeadValidationResult =
  | { valid: true; lead: LeadInput }
  | { valid: false; field: string; message: string };

const REQUIRED_FIELDS = ["nom", "societe", "email", "telephone", "secteur", "pays", "besoin"] as const;
const OPTIONAL_FIELDS = ["fonction", "budget_indicatif", "delai_souhaite"] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[0-9 ()-]{8,20}$/;

/** Valide les champs reçus avant tout appel externe (SFD §7.4, étape 2). */
export function validateLeadInput(raw: unknown): LeadValidationResult {
  if (!raw || typeof raw !== "object") {
    return { valid: false, field: "_root", message: "Données de lead manquantes ou invalides." };
  }
  const input = raw as Record<string, unknown>;

  for (const field of REQUIRED_FIELDS) {
    const value = input[field];
    if (typeof value !== "string" || value.trim() === "") {
      return { valid: false, field, message: `Le champ "${field}" est obligatoire et doit être une chaîne non vide.` };
    }
  }

  const email = (input.email as string).trim();
  if (!EMAIL_RE.test(email)) {
    return { valid: false, field: "email", message: "Le format de l'email est invalide." };
  }

  const telephone = (input.telephone as string).trim();
  if (!PHONE_RE.test(telephone)) {
    return {
      valid: false,
      field: "telephone",
      message: "Le format du téléphone est invalide (format international attendu, ex. +225...).",
    };
  }

  const lead: LeadInput = {
    nom: (input.nom as string).trim(),
    societe: (input.societe as string).trim(),
    email,
    telephone,
    secteur: (input.secteur as string).trim(),
    pays: (input.pays as string).trim(),
    besoin: (input.besoin as string).trim(),
  };

  for (const field of OPTIONAL_FIELDS) {
    const value = input[field];
    if (typeof value === "string" && value.trim() !== "") {
      lead[field] = value.trim();
    }
  }

  return { valid: true, lead };
}
