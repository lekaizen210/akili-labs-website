import { notFound } from "next/navigation";

// Aucune route générée pour ce catch-all : combiné à dynamicParams = false,
// toute URL non reconnue sous [locale] produit un vrai 404 HTTP (pas de
// rendu dynamique/streamé) au lieu d'un soft-404 (200 + notFound() en streaming).
export function generateStaticParams() {
  return [];
}

export const dynamicParams = false;

export default function CatchAllPage() {
  notFound();
}
