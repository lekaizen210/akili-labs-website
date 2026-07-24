import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Mail, MapPin, Phone, Linkedin, Facebook } from "lucide-react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  const t = useTranslations("Footer");

  const footerLinks = {
    expertises: [
      { label: t("expertisesMenu.transformationDigitale"), href: "/expertises/transformation-digitale" },
      { label: t("expertisesMenu.erpOdoo"), href: "/expertises/odoo" },
      { label: t("expertisesMenu.intelligenceArtificielle"), href: "/expertises/intelligence-artificielle" },
      { label: t("expertisesMenu.devsecops"), href: "/expertises/devsecops" },
      { label: t("expertisesMenu.developpementMetiers"), href: "/expertises/developpement-metiers" },
      { label: t("expertisesMenu.businessIntelligence"), href: "/expertises/business-intelligence" },
    ],
    secteurs: [
      { label: t("sectors.administrationPublique"), href: "/#secteurs" },
      { label: t("sectors.banqueAssurance"), href: "/#secteurs" },
      { label: t("sectors.agroIndustrie"), href: "/#secteurs" },
      { label: t("sectors.telecommunications"), href: "/#secteurs" },
      { label: t("sectors.santeEducation"), href: "/#secteurs" },
    ],
    entreprise: [
      { label: t("company.about"), href: "/a-propos" },
      { label: t("company.references"), href: "/references" },
      { label: t("company.blog"), href: "/blog" },
      { label: t("company.faq"), href: "/faq" },
      { label: t("company.careers"), href: "/carrieres" },
      { label: t("company.contact"), href: "/contact" },
    ],
  };

  return (
    <footer className="bg-navy text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Image
                src="/logo-akili-white.png"
                alt="AKILI Labs"
                width={93}
                height={52}
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              {t("description")}
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-orange shrink-0" />
                <span>{t("address")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-orange shrink-0" />
                <a href="mailto:contact@akililabs.io" className="inline-block py-1.5 hover:text-white transition-colors">
                  contact@akililabs.io
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-orange shrink-0" />
                <span>+225 07 00 00 00 00</span>
              </div>
            </div>
            {/* Réseaux sociaux */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/akili-labs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("linkedinAria")}
                className="flex items-center justify-center w-11 h-11 rounded-lg bg-white/10 text-gray-400 hover:bg-[#0A66C2] hover:text-white transition-[background-color,color,transform] duration-200 ease-out active:scale-[0.94]"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="https://www.facebook.com/akililabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("facebookAria")}
                className="flex items-center justify-center w-11 h-11 rounded-lg bg-white/10 text-gray-400 hover:bg-[#1877F2] hover:text-white transition-[background-color,color,transform] duration-200 ease-out active:scale-[0.94]"
              >
                <Facebook size={17} />
              </a>
            </div>
          </div>

          {/* Expertises */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              {t("expertisesTitle")}
            </h3>
            <ul className="space-y-0.5">
              {footerLinks.expertises.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block py-1.5 text-sm text-gray-400 hover:text-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Secteurs */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              {t("sectorsTitle")}
            </h3>
            <ul className="space-y-0.5">
              {footerLinks.secteurs.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block py-1.5 text-sm text-gray-400 hover:text-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              {t("companyTitle")}
            </h3>
            <ul className="space-y-0.5">
              {footerLinks.entreprise.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block py-1.5 text-sm text-gray-400 hover:text-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block px-4 py-2.5 bg-orange-cta text-white text-sm font-semibold rounded-lg hover:bg-orange-cta-hover transition-[background-color,transform] duration-150 ease-out active:scale-[0.97]"
              >
                {t("cta")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 divide-x divide-gray-700">
            <span>{t("confidential")}</span>
            <span className="pl-3">AKILI Labs</span>
            <span className="pl-3">www.akililabs.io</span>
            <span className="pl-3">{t("rights")}</span>
            <span className="pl-3">
              <LanguageSwitcher inverted />
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
              HTTPS
            </span>
            <span>RGPD</span>
            <span>OHADA</span>
            <Link href="/mentions-legales" className="inline-block py-2 hover:text-gray-300 transition-colors">{t("legalNotice")}</Link>
            <Link href="/confidentialite" className="inline-block py-2 hover:text-gray-300 transition-colors">{t("privacy")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
