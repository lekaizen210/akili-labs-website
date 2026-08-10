/**
 * Limites de pièces jointes — choix délibérément strict (1 fichier, 4 Mo) pour
 * contenir le coût par conversation : une image/un PDF consomme nettement plus
 * de tokens qu'un message texte, et le budget mensuel reste plafonné à 40 $
 * (SFD §9). À revoir une fois le suivi des coûts par agent en place (Lot 4).
 *
 * Module volontairement dépourvu de toute API Node (Buffer, etc.) : il est
 * importé à la fois côté client (ChatWidget) et côté serveur (route API,
 * attachment-validation.ts) pour partager les mêmes constantes sans risquer
 * d'embarquer du code serveur dans le bundle navigateur.
 */
export const MAX_ATTACHMENTS_PER_MESSAGE = 1;
export const MAX_ATTACHMENT_BYTES = 4 * 1024 * 1024; // 4 Mo (fichier d'origine, avant base64)

export const ALLOWED_MEDIA_TYPES: Record<string, "image" | "document"> = {
  "image/png": "image",
  "image/jpeg": "image",
  "image/webp": "image",
  "application/pdf": "document",
};
