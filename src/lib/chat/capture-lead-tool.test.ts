import { describe, expect, it } from "vitest";
import { validateLeadInput } from "./capture-lead-tool";

const VALID_INPUT = {
  nom: "Awa Koné",
  societe: "Ivoire Textile",
  email: "awa.kone@ivoiretextile.ci",
  telephone: "+225 07 00 00 00 00",
  secteur: "Textile",
  pays: "Côte d'Ivoire",
  besoin: "Comptabilité OHADA + Paie",
};

describe("validateLeadInput", () => {
  it("accepte un lead complet et valide", () => {
    const result = validateLeadInput(VALID_INPUT);
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.lead.nom).toBe("Awa Koné");
      expect(result.lead.email).toBe("awa.kone@ivoiretextile.ci");
    }
  });

  it("inclut les champs optionnels fournis", () => {
    const result = validateLeadInput({ ...VALID_INPUT, budget_indicatif: "10-20k$", fonction: "DAF" });
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.lead.budget_indicatif).toBe("10-20k$");
      expect(result.lead.fonction).toBe("DAF");
    }
  });

  it("n'inclut pas les champs optionnels absents", () => {
    const result = validateLeadInput(VALID_INPUT);
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.lead.budget_indicatif).toBeUndefined();
    }
  });

  it("rejette un champ obligatoire manquant", () => {
    const { societe, ...rest } = VALID_INPUT;
    void societe;
    const result = validateLeadInput(rest);
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.field).toBe("societe");
  });

  it("rejette un champ obligatoire vide", () => {
    const result = validateLeadInput({ ...VALID_INPUT, nom: "   " });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.field).toBe("nom");
  });

  it("rejette un email mal formé", () => {
    const result = validateLeadInput({ ...VALID_INPUT, email: "pas-un-email" });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.field).toBe("email");
  });

  it("rejette un téléphone mal formé", () => {
    const result = validateLeadInput({ ...VALID_INPUT, telephone: "abc" });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.field).toBe("telephone");
  });

  it("rejette une entrée non-objet", () => {
    const result = validateLeadInput("pas un objet");
    expect(result.valid).toBe(false);
  });
});
