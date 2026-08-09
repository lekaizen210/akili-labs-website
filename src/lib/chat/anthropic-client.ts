import Anthropic from "@anthropic-ai/sdk";

let client: Anthropic | null = null;

/** Client Anthropic paresseux (une seule instance par process serveur). */
export function getAnthropicClient(): Anthropic {
  if (client) return client;

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error(
      "ANTHROPIC_API_KEY manquante — voir .env.local.example (variable requise pour l'agent Orchestrateur)."
    );
  }

  client = new Anthropic({ apiKey });
  return client;
}
