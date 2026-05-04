"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
];

const numbers = ["01", "02", "03"];

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section id="services" className="py-28 lg:py-36 border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow mb-4">{t.services.eyebrow}</p>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-text-primary max-w-lg leading-tight">
            {t.services.heading}
          </h2>
        </motion.div>

        {/* Card grid */}
        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-px bg-[rgba(201,169,110,0.1)]"
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {t.services.cards.map((card, i) => (
            <motion.article
              key={i}
              variants={cardVariants}
              className="group relative bg-bg-card p-8 lg:p-10 overflow-hidden cursor-default"
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              {/* Ghost number */}
              <span
                className="absolute top-4 right-6 font-cormorant text-8xl font-bold leading-none select-none pointer-events-none"
                style={{ color: "rgba(201,169,110,0.06)" }}
              >
                {numbers[i]}
              </span>

              {/* Gold left border reveal */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-[2px] bg-gold origin-bottom"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />

              {/* Icon */}
              <div className="text-gold mb-6 mt-2">{icons[i]}</div>

              {/* Content */}
              <h3 className="font-cormorant text-2xl font-medium text-text-primary mb-4">
                {card.title}
              </h3>
              <p className="font-dm text-sm text-text-secondary leading-relaxed">
                {card.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
