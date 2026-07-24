"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const expertisesMenu = [
  { label: "Transformation Digitale", href: "/expertises/transformation-digitale" },
  { label: "ERP & Odoo", href: "/expertises/odoo" },
  { label: "Intelligence Artificielle", href: "/expertises/intelligence-artificielle" },
  { label: "DevSecOps", href: "/expertises/devsecops" },
  { label: "Développement Métiers", href: "/expertises/developpement-metiers" },
  { label: "Business Intelligence", href: "/expertises/business-intelligence" },
];

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Expertises", href: "/expertises", hasDropdown: true },
  { label: "Références", href: "/references" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "À propos", href: "/a-propos" },
];

const mobileOnlyLinks = [{ label: "Carrières", href: "/carrieres" }];

function isActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  if (href === "/expertises") return pathname.startsWith("/expertises");
  return pathname.startsWith(href);
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expertisesOpen, setExpertisesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-16 lg:h-20 flex items-center">
              <Image
                src="/logo-akili-transparent.png"
                alt="AKILI Labs"
                width={104}
                height={58}
                priority
                className={cn(
                  "h-14 lg:h-16 w-auto object-contain absolute transition-opacity duration-300",
                  scrolled ? "opacity-100" : "opacity-0"
                )}
              />
              <Image
                src="/logo-akili-white.png"
                alt="AKILI Labs"
                width={104}
                height={58}
                priority
                className={cn(
                  "h-14 lg:h-16 w-auto object-contain transition-opacity duration-300",
                  scrolled ? "opacity-0" : "opacity-100"
                )}
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href, pathname);
              return link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setExpertisesOpen(true)}
                  onMouseLeave={() => setExpertisesOpen(false)}
                  onFocus={() => setExpertisesOpen(true)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) setExpertisesOpen(false);
                  }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-[color,background-color] duration-200",
                      scrolled
                        ? active
                          ? "text-orange-dark font-semibold bg-blue-light"
                          : "text-ink hover:text-navy hover:bg-blue-light"
                        : active
                          ? "text-orange font-semibold bg-white/10"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={cn("transition-transform duration-200", expertisesOpen && "rotate-180")}
                    />
                  </Link>
                  <AnimatePresence>
                    {expertisesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{ transformOrigin: "top left" }}
                        className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                      >
                        <Link
                          href="/expertises"
                          className="block px-4 py-2.5 text-sm font-semibold text-navy hover:bg-blue-light transition-colors border-b border-gray-100 mb-1"
                        >
                          Toutes nos expertises →
                        </Link>
                        {expertisesMenu.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              "block px-4 py-2.5 text-sm transition-colors",
                              pathname === item.href
                                ? "text-orange-dark font-semibold bg-blue-light"
                                : "text-ink hover:text-navy hover:bg-blue-light"
                            )}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-[color,background-color] duration-200",
                    scrolled
                      ? active
                        ? "text-orange-dark font-semibold bg-blue-light"
                        : "text-ink hover:text-navy hover:bg-blue-light"
                      : active
                        ? "text-orange font-semibold bg-white/10"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-orange-cta text-white text-sm font-semibold rounded-lg hover:bg-orange-cta-hover transition-[background-color,box-shadow,transform] duration-200 ease-out shadow-md hover:shadow-lg hover:-translate-y-px active:scale-[0.97] active:translate-y-0"
            >
              Discutons de votre projet →
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-navy" : "text-white"
            )}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* R14 — Mobile menu with AnimatePresence for smooth exit */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <motion.div
              initial={{ y: -12 }}
              animate={{ y: 0 }}
              exit={{ y: -8 }}
              transition={{ duration: 0.2 }}
              className="px-4 py-4 space-y-1"
            >
              {/* Accueil */}
              {(() => {
                const home = navLinks[0];
                const active = isActive(home.href, pathname);
                return (
                  <Link
                    href={home.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors",
                      active
                        ? "text-orange-dark font-semibold bg-blue-light"
                        : "text-ink hover:text-navy hover:bg-blue-light"
                    )}
                  >
                    {home.label}
                  </Link>
                );
              })()}
              {/* Expertises (sous-menu développé) */}
              <Link
                href="/expertises"
                onClick={() => setMobileOpen(false)}
                className="block px-4 pt-2 pb-1 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-navy transition-colors"
              >
                Expertises →
              </Link>
              {expertisesMenu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block px-4 py-2.5 text-sm rounded-lg transition-colors",
                    pathname === item.href
                      ? "text-orange-dark font-semibold bg-blue-light"
                      : "text-ink hover:text-navy hover:bg-blue-light"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-gray-100 my-2 pt-2">
                {[...navLinks.slice(2), ...mobileOnlyLinks].map((link) => {
                  const active = isActive(link.href, pathname);
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors",
                        active
                          ? "text-orange-dark font-semibold bg-blue-light"
                          : "text-ink hover:text-navy hover:bg-blue-light"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-5 py-3 bg-orange-cta text-white text-sm font-semibold rounded-lg transition-transform duration-150 ease-out active:scale-[0.97]"
                >
                  Discutons de votre projet →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
