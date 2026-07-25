import type { Metadata } from "next";
import NotFoundContent from "./not-found-content";

export const metadata: Metadata = { title: "Page non trouvée — AKILI Labs" };

export default function NotFoundPage() {
  return <NotFoundContent />;
}
