import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Linkedin, Facebook } from "lucide-react";

const footerLinks = {
  expertises: [
    { label: "Transformation Digitale", href: "/expertises/transformation-digitale" },
    { label: "ERP & Odoo", href: "/expertises/erp" },
    { label: "Intelligence Artificielle", href: "/expertises/intelligence-artificielle" },
    { label: "DevSecOps", href: "/expertises/devsecops" },
    { label: "Développement Métiers", href: "/expertises/developpement-metiers" },
    { label: "Business Intelligence", href: "/expertises/business-intelligence" },
  ],
  secteurs: [
    { label: "Administration publique", href: "/#secteurs" },
    { label: "Banque & Assurance", href: "/#secteurs" },
    { label: "Agro-industrie", href: "/#secteurs" },
    { label: "Télécommunications", href: "/#secteurs" },
    { label: "Santé & Éducation", href: "/#secteurs" },
  ],
  entreprise: [
    { label: "À propos", href: "/a-propos" },
    { label: "Références", href: "/references" },
    { label: "Blog & Veille", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Carrières", href: "/carrieres" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1A2B3C] text-white">
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
              Votre partenaire de confiance pour la transformation digitale en Afrique.
              Expertise ERP, IA et DevSecOps au service de votre performance.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#FF5500] shrink-0" />
                <span>Abidjan, Côte d&apos;Ivoire — Zone UEMOA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#FF5500] shrink-0" />
                <a href="mailto:contact@akililabs.io" className="hover:text-white transition-colors">
                  contact@akililabs.io
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#FF5500] shrink-0" />
                <span>+225 07 00 00 00 00</span>
              </div>
            </div>
            {/* Réseaux sociaux */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/akili-labs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AKILI Labs sur LinkedIn"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-gray-400 hover:bg-[#0A66C2] hover:text-white transition-all duration-200"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="https://www.facebook.com/akililabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AKILI Labs sur Facebook"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-gray-400 hover:bg-[#1877F2] hover:text-white transition-all duration-200"
              >
                <Facebook size={17} />
              </a>
            </div>
          </div>

          {/* Expertises */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Expertises
            </h3>
            <ul className="space-y-2">
              {footerLinks.expertises.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#FF5500] transition-colors"
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
              Secteurs
            </h3>
            <ul className="space-y-2">
              {footerLinks.secteurs.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#FF5500] transition-colors"
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
              Entreprise
            </h3>
            <ul className="space-y-2">
              {footerLinks.entreprise.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#FF5500] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block px-4 py-2.5 bg-[#FF5500] text-white text-sm font-semibold rounded-lg hover:bg-[#e04d00] transition-colors"
              >
                Demander un devis →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            Confidentiel — AKILI Labs — www.akililabs.com — © 2026 Tous droits réservés
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
              HTTPS
            </span>
            <span>RGPD</span>
            <span>OHADA</span>
            <Link href="/mentions-legales" className="hover:text-gray-300 transition-colors">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-gray-300 transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
