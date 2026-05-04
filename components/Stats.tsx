"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const statData = [
  { value: 25, suffix: "+", key: "years" as const },
  { prefix: "$", value: 4, suffix: "B", key: "project" as const },
  { value: 20, suffix: "+", key: "delivered" as const },
];

function CountUp({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { setCount(target); return; }

    const duration = 1600;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLanguage();

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-2 gap-px border border-[rgba(201,169,110,0.2)]"
    >
      {statData.map((stat, i) => (
        <motion.div
          key={stat.key}
          className="bg-bg-card p-6 lg:p-8"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
        >
          <div className="font-cormorant text-3xl lg:text-4xl font-light text-gold mb-1">
            <CountUp target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
          </div>
          <div className="font-dm text-[0.65rem] tracking-[0.14em] uppercase text-text-muted">
            {t.stats[stat.key]}
          </div>
        </motion.div>
      ))}

      {/* Sectors box */}
      <motion.div
        className="bg-bg-card p-6 lg:p-8"
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
      >
        <div className="font-dm text-[0.65rem] tracking-[0.14em] uppercase text-text-muted mb-3">
          {t.stats.sectors}
        </div>
        <ul className="space-y-1.5">
          {["Mining", "Industrial", "Oil & Gas"].map((sector) => (
            <li key={sector} className="flex items-center gap-2">
              <span className="text-gold font-cormorant text-base leading-none">—</span>
              <span className="font-cormorant text-xl font-light text-gold">{sector}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
