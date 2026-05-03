"use client";

import { motion } from "framer-motion";

export default function RateBanner() {
  return (
    <section className="py-20 lg:py-24 bg-bg-secondary border-y border-[rgba(255,255,255,0.06)]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Top rule */}
        <motion.div
          className="gold-rule mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="font-cormorant text-8xl md:text-9xl font-light text-gold leading-none mb-4">
            $250
          </div>
          <p className="font-dm text-sm tracking-[0.18em] uppercase text-text-muted">
            per hour&nbsp;·&nbsp;Part-time &amp; full-time engagements&nbsp;·&nbsp;Remote
          </p>
        </motion.div>

        {/* Bottom rule */}
        <motion.div
          className="gold-rule mt-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        />
      </div>
    </section>
  );
}
