"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-gold border-opacity-20 py-10 bg-bg-primary" style={{ borderTopColor: "rgba(201,169,110,0.2)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-cormorant text-lg font-semibold tracking-wide text-text-primary">
            DJ2 Services
          </span>
        </motion.div>

        {/* Center */}
        <motion.p
          className="font-dm text-[0.65rem] tracking-[0.12em] uppercase text-text-muted text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          © {new Date().getFullYear()} DJ2 Services · All rights reserved
        </motion.p>

        {/* Right — contact */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 text-right"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <a
            href="mailto:diane.derome@gmail.com"
            className="font-dm text-xs text-text-muted hover:text-gold transition-colors"
          >
            diane.derome@gmail.com
          </a>
          <span className="hidden sm:block text-[rgba(255,255,255,0.1)]">·</span>
          <a
            href="tel:+15149491788"
            className="font-dm text-xs text-text-muted hover:text-gold transition-colors"
          >
            514-949-1788
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
