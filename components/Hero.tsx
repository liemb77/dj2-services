"use client";

import { motion } from "framer-motion";
import Stats from "@/components/Stats";
import { useLanguage } from "@/contexts/LanguageContext";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } },
};

const wordVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const { t } = useLanguage();
  const headline = t.hero.headline.split(" ");

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Radial fade */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_40%,#0D0F14_100%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full py-24 lg:py-32 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left — copy */}
        <div>
          <motion.p
            className="eyebrow mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            key={t.hero.headline}
            className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] text-text-primary mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {headline.map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em]">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="font-dm text-base text-text-secondary leading-relaxed max-w-lg mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
          >
            {t.hero.subheading}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.15, ease: "easeOut" }}
          >
            <a
              href="#contact"
              className="font-dm text-[0.72rem] tracking-[0.14em] uppercase px-7 py-3.5 bg-gold text-bg-primary hover:bg-[#b8935a] transition-colors duration-300"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#services"
              className="font-dm text-[0.72rem] tracking-[0.14em] uppercase px-7 py-3.5 text-text-secondary hover:text-gold transition-colors duration-300 flex items-center gap-2"
            >
              {t.hero.cta2}
            </a>
          </motion.div>
        </div>

        {/* Right — stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
        >
          <Stats />
        </motion.div>
      </div>

      {/* Bottom gold rule */}
      <div className="absolute bottom-0 left-0 right-0 gold-rule" />
    </section>
  );
}
