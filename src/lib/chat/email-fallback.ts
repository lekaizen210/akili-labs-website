import { Resend } from "resend";
import type { LeadInput } from "./capture-lead-tool";

const FALLBACK_EMAIL = process.env.SALES_FALLBACK_EMAIL ?? "contact@akililabs.io";
// Adresse d'expédition par défaut : bac à sable Resend, fonctionne sans domaine
// vérifié. À remplacer par une adresse sur le domaine akililabs.io une fois
// celui-ci vérifié dans Resend (RESEND_FROM_EMAIL).
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

function formatLeadBody(lead: LeadInput, conversationId: string, reason: string): string {
  return [
    `Échec du webhook Odoo : ${reason}`,
    `Conversation : ${conversationId}`,
    "",
    `Nom : ${lead.nom}`,
    `Société : ${lead.societe}`,
    `Email : ${lead.email}`,
    `Téléphone : ${lead.telephone}`,
    `Secteur : ${lead.secteur}`,
    `Pays : ${lead.pays}`,
    lead.fonction ? `Fonction : ${lead.fonction}` : null,
    `Besoin : ${lead.besoin}`,
    lead.budget_indicatif ? `Budget indicatif : ${lead.budget_indicatif}` : null,
    lead.delai_souhaite ? `Délai souhaité : ${lead.delai_souhaite}` : null,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");
}

/**
 * Filet de sécurité si le webhook Odoo échoue (SFD §5.14) : envoie les
 * informations du lead par email plutôt que de les perdre. Échoue
 * silencieusement (avec log serveur) si RESEND_API_KEY n'est pas configurée.
 */
export async function sendFallbackLeadEmail(lead: LeadInput, conversationId: string, reason: string): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[email-fallback] RESEND_API_KEY manquante — lead non transmis par email", {
      conversationId,
      reason,
    });
    return false;
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `Chat AKILI Labs <${FROM_EMAIL}>`,
      to: FALLBACK_EMAIL,
      subject: `Lead qualifié (webhook Odoo indisponible) — ${lead.societe}`,
      text: formatLeadBody(lead, conversationId, reason),
    });
    if (error) {
      console.error("[email-fallback] Resend a renvoyé une erreur", error);
      return false;
    }
    return true;
  } catch (error) {
    console.error("[email-fallback] échec d'envoi de l'email de secours", error);
    return false;
  }
}
