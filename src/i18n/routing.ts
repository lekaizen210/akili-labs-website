import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  localePrefix: "as-needed",
  // L'URL fait foi : pas de redirection automatique selon la langue du navigateur
  localeDetection: false,
});
