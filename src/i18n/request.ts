import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

type Messages = Record<string, unknown>;

function deepMerge(base: Messages, override: Messages): Messages {
  const result: Messages = { ...base };
  for (const key of Object.keys(override)) {
    const b = base[key];
    const o = override[key];
    if (b && o && typeof b === "object" && typeof o === "object" && !Array.isArray(b) && !Array.isArray(o)) {
      result[key] = deepMerge(b as Messages, o as Messages);
    } else {
      result[key] = o;
    }
  }
  return result;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const fr = (await import("../../messages/fr.json")).default as Messages;
  const messages =
    locale === "fr"
      ? fr
      : deepMerge(fr, (await import("../../messages/en.json")).default as Messages);

  return { locale, messages };
});
