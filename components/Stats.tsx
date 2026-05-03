"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { prefix: "$", value: 4, suffix: "B", label: "Largest Project Managed" },
  { value: 20, suffix: "+", label: "Projects Delivered" },
  { prefix: "$", value: 250, suffix: "/hr", label: "Billing Rate" },
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

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-2 gap-px border border-[rgba(201,169,110,0.2)]"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="bg-bg-card p-6 lg:p-8"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
        >
          <div className="font-cormorant text-3xl lg:text-4xl font-light text-gold mb-1">
            <CountUp target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
          </div>
          <div className="font-dm text-[0.65rem] tracking-[0.14em] uppercase text-text-muted">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
