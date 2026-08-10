import { describe, expect, it } from "vitest";
import { validateAttachment } from "./attachment-validation";
import { MAX_ATTACHMENT_BYTES } from "./attachment-limits";
import type { ChatAttachment } from "./types";

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const PDF_MAGIC = Buffer.from("%PDF-1.4\n%mock content");
const JPEG_MAGIC = Buffer.from([0xff, 0xd8, 0xff, 0xe0]);

function attachment(overrides: Partial<ChatAttachment> = {}): ChatAttachment {
  return {
    kind: "image",
    mediaType: "image/png",
    data: PNG_MAGIC.toString("base64"),
    name: "capture.png",
    ...overrides,
  };
}

describe("validateAttachment", () => {
  it("accepte un PNG valide", () => {
    expect(validateAttachment(attachment())).toEqual({ valid: true });
  });

  it("accepte un PDF valide", () => {
    const result = validateAttachment(
      attachment({ kind: "document", mediaType: "application/pdf", data: PDF_MAGIC.toString("base64"), name: "cdc.pdf" })
    );
    expect(result).toEqual({ valid: true });
  });

  it("accepte un JPEG valide", () => {
    const result = validateAttachment(
      attachment({ mediaType: "image/jpeg", data: JPEG_MAGIC.toString("base64"), name: "photo.jpg" })
    );
    expect(result).toEqual({ valid: true });
  });

  it("rejette un media type non autorisé", () => {
    const result = validateAttachment(attachment({ mediaType: "application/zip" }));
    expect(result.valid).toBe(false);
  });

  it("rejette un kind incohérent avec le media type", () => {
    const result = validateAttachment(attachment({ kind: "document" }));
    expect(result.valid).toBe(false);
  });

  it("rejette un fichier vide", () => {
    const result = validateAttachment(attachment({ data: "" }));
    expect(result.valid).toBe(false);
  });

  it("rejette un fichier dépassant la limite de taille", () => {
    const oversized = Buffer.concat([PNG_MAGIC, Buffer.alloc(MAX_ATTACHMENT_BYTES)]);
    const result = validateAttachment(attachment({ data: oversized.toString("base64") }));
    expect(result.valid).toBe(false);
  });

  it("rejette un contenu ne correspondant pas au type déclaré (magic bytes)", () => {
    const result = validateAttachment(attachment({ data: PDF_MAGIC.toString("base64") })); // déclaré PNG, contenu PDF
    expect(result.valid).toBe(false);
  });

  it("rejette un base64 invalide de façon contrôlée", () => {
    // Buffer.from tolère beaucoup de chaînes ; on vérifie au moins l'absence de crash
    const result = validateAttachment(attachment({ data: "%%%not-base64%%%" }));
    expect(result.valid).toBe(false);
  });
});
