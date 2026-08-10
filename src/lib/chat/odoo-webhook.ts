import type { LeadInput } from "./capture-lead-tool";

export type OdooWebhookResult = { ok: true } | { ok: false; reason: string };

/**
 * Remonte un lead qualifié vers Odoo CRM (SFD §7.5). Format de payload et
 * authentification définis dans la SFD ; l'URL/le format exact côté Odoo
 * restent à confirmer avec l'équipe Odoo (PO-05, SFD §13.1) — tant que
 * ODOO_WEBHOOK_URL n'est pas configurée, cette fonction échoue proprement et
 * déclenche le fallback email (SFD §5.14).
 */
export async function submitLeadToOdoo(lead: LeadInput, conversationId: string): Promise<OdooWebhookResult> {
  const url = process.env.ODOO_WEBHOOK_URL;
  const token = process.env.ODOO_WEBHOOK_TOKEN;

  if (!url) {
    return { ok: false, reason: "ODOO_WEBHOOK_URL non configurée" };
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({
        source: "chat_site_web",
        conversation_id: conversationId,
        date: new Date().toISOString(),
        lead,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      return { ok: false, reason: `Webhook Odoo a répondu HTTP ${response.status}` };
    }
    return { ok: true };
  } catch (error) {
    return { ok: false, reason: error instanceof Error ? error.message : "Erreur réseau inconnue" };
  }
}
