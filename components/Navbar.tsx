"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(13, 15, 20, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201, 169, 110, 0.12)" : "none",
      }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-cormorant text-xl font-semibold tracking-wide text-text-primary hover:text-gold transition-colors">
          DJ2 Services
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-dm text-[0.68rem] tracking-[0.18em] uppercase text-text-muted hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            className="font-dm text-[0.68rem] tracking-[0.18em] uppercase text-gold hover:text-text-primary transition-colors duration-200 border-l border-[rgba(255,255,255,0.1)] pl-6"
            aria-label={lang === "en" ? "Switch to French" : "Switch to English"}
          >
            {lang === "en" ? "FR" : "EN"}
          </button>

          <a
            href="#contact"
            className="font-dm text-[0.68rem] tracking-[0.14em] uppercase px-5 py-2 border border-gold text-gold hover:bg-gold hover:text-bg-primary transition-all duration-300"
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <motion.span
            className="block w-6 h-px bg-text-primary origin-center"
            animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-px bg-text-primary origin-center"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-px bg-text-primary origin-center"
            animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-bg-secondary border-t border-[rgba(201,169,110,0.12)]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-dm text-sm tracking-[0.16em] uppercase text-text-secondary hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2 border-t border-[rgba(255,255,255,0.06)]">
                <button
                  onClick={() => setLang(lang === "en" ? "fr" : "en")}
                  className="font-dm text-xs tracking-[0.16em] uppercase text-gold hover:text-text-primary transition-colors"
                >
                  {lang === "en" ? "FR" : "EN"}
                </button>
              </div>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="font-dm text-[0.68rem] tracking-[0.14em] uppercase px-5 py-3 border border-gold text-gold text-center hover:bg-gold hover:text-bg-primary transition-all duration-300"
              >
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
