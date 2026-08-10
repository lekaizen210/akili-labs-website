import { ALLOWED_MEDIA_TYPES, MAX_ATTACHMENT_BYTES } from "./attachment-limits";
import type { ChatAttachment } from "./types";

// Signatures binaires (magic bytes) pour vérifier que le contenu correspond
// réellement au type MIME déclaré, plutôt que de faire confiance à l'en-tête
// fourni par le client.
const MAGIC_BYTES: Record<string, number[][]> = {
  "image/png": [[0x89, 0x50, 0x4e, 0x47]],
  "image/jpeg": [[0xff, 0xd8, 0xff]],
  "image/webp": [[0x52, 0x49, 0x46, 0x46]], // "RIFF" (WEBP confirmé par les octets 8-11, non vérifiés ici)
  "application/pdf": [[0x25, 0x50, 0x44, 0x46]], // "%PDF"
};

export type AttachmentValidationResult = { valid: true } | { valid: false; reason: string };

function base64ByteLength(base64: string): number {
  const cleaned = base64.replace(/=+$/, "");
  return Math.floor((cleaned.length * 3) / 4);
}

function matchesMagicBytes(mediaType: string, bytes: Uint8Array): boolean {
  const signatures = MAGIC_BYTES[mediaType];
  if (!signatures) return false;
  return signatures.some((sig) => sig.every((byte, i) => bytes[i] === byte));
}

/**
 * Valide une pièce jointe côté serveur — jamais confiance au seul contrôle
 * client. Utilise `Buffer` (Node) : ce module ne doit être importé que côté
 * serveur (route API), jamais depuis un composant client.
 */
export function validateAttachment(attachment: ChatAttachment): AttachmentValidationResult {
  const expectedKind = ALLOWED_MEDIA_TYPES[attachment.mediaType];
  if (!expectedKind) {
    return { valid: false, reason: `Type de fichier non autorisé : ${attachment.mediaType}` };
  }
  if (attachment.kind !== expectedKind) {
    return { valid: false, reason: "Le type de pièce jointe ne correspond pas au media type déclaré." };
  }

  const size = base64ByteLength(attachment.data);
  if (size === 0) {
    return { valid: false, reason: "Fichier vide." };
  }
  if (size > MAX_ATTACHMENT_BYTES) {
    return { valid: false, reason: `Fichier trop volumineux (${Math.round(size / 1024 / 1024)} Mo, max 4 Mo).` };
  }

  let decoded: Uint8Array;
  try {
    decoded = Uint8Array.from(Buffer.from(attachment.data, "base64"));
  } catch {
    return { valid: false, reason: "Contenu base64 invalide." };
  }

  if (!matchesMagicBytes(attachment.mediaType, decoded)) {
    return { valid: false, reason: "Le contenu du fichier ne correspond pas au type déclaré." };
  }

  return { valid: true };
}
