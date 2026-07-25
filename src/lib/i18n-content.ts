export type Localized = { fr: string; en: string };

export function l(value: string | Localized, locale: string): string {
  if (typeof value === "string") return value;
  return locale === "en" ? value.en : value.fr;
}
