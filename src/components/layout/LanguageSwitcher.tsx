"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const locales = [
  { code: "fr", label: "FR", name: "Français" },
  { code: "en", label: "EN", name: "English" },
] as const;

interface LanguageSwitcherProps {
  className?: string;
  /** Fond sombre (navbar non scrollée, footer) : texte inactif clair plutôt que gris/navy. */
  inverted?: boolean;
}

export default function LanguageSwitcher({ className, inverted = false }: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className={cn("flex items-center gap-1 text-sm font-semibold", className)}>
      {locales.map(({ code, label, name }, i) => (
        <span key={code} className="flex items-center gap-1">
          {i > 0 && (
            <span className={inverted ? "text-white/30" : "text-line"} aria-hidden="true">
              |
            </span>
          )}
          <button
            type="button"
            onClick={() => router.replace(pathname, { locale: code })}
            aria-current={locale === code ? "true" : undefined}
            aria-label={name}
            className={cn(
              "px-1 transition-colors",
              locale === code
                ? inverted
                  ? "text-white border-b-2 border-orange"
                  : "text-navy border-b-2 border-orange"
                : inverted
                  ? "text-white/70 hover:text-white"
                  : "text-ink hover:text-navy"
            )}
          >
            {label}
          </button>
        </span>
      ))}
    </div>
  );
}
