/**
 * Réponse de garde-fou (Lot 2). Portée directement par l'Orchestrateur — pas
 * d'agent spécialisé dédié — pour les cas hors-périmètre, tentative de
 * manipulation du prompt, ou demande explicite de parler à un humain
 * (SFD US-4, US-5, US-6 ; Architecture §2.3).
 */
const GUARDRAIL_MESSAGE: Record<"fr" | "en", string> = {
  fr: "Je ne peux pas vous aider sur ce sujet ici. Pour toute question, notre équipe est joignable à contact@akililabs.io.",
  en: "I can't help with that here. For any question, our team can be reached at contact@akililabs.io.",
};

export function getGuardrailResponse(language: "fr" | "en"): string {
  return GUARDRAIL_MESSAGE[language] ?? GUARDRAIL_MESSAGE.fr;
}
