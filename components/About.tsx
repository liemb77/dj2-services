"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const credentials = [
  "Industrial Engineering — Concordia University",
  "25+ Years Industry Experience",
  "Bilingual — English & French",
  "Available Part-Time or Full-Time",
];

const vp = { once: true, margin: "-60px" } as const;

export default function About() {
  return (
    <section id="about" className="py-28 lg:py-36 border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left — photo placeholder */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={vp}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div
            className="aspect-[4/5] w-full border border-[rgba(201,169,110,0.15)] relative overflow-hidden"
            aria-label="Diane — Principal Consultant"
          >
            <Image
              src="/diane.jpg"
              alt="Diane — Principal Consultant at DJ2 Services"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Gold tag */}
          <div className="absolute -bottom-4 left-6 bg-bg-primary border border-[rgba(201,169,110,0.3)] px-4 py-2">
            <p className="font-dm text-[0.62rem] tracking-[0.16em] uppercase text-gold">
              Diane — Principal Consultant
            </p>
          </div>

          {/* Corner accent */}
          <div className="absolute -top-3 -left-3 w-12 h-12 border-t border-l border-gold opacity-30" />
        </motion.div>

        {/* Right — text */}
        <div>
          <motion.p
            className="eyebrow mb-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            About
          </motion.p>

          <motion.h2
            className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-text-primary mb-8 leading-tight"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Engineering Background. Executive Results.
          </motion.h2>

          <div className="space-y-5 mb-10">
            {[
              "Diane holds a degree in Industrial Engineering from Concordia University and has spent over 25 years working at the intersection of procurement, contract management, and large-scale industrial logistics.",
              "Throughout her career, she has overseen projects reaching up to $4 billion in total value — coordinating multi-party contracts, managing supplier relationships, and ensuring operational precision at every stage.",
              "Diane works directly with clients as a hands-on consultant, available on a part-time or full-time basis. She delivers in both English and French, serving clients across Canada and beyond.",
            ].map((para, i) => (
              <motion.p
                key={i}
                className="font-dm text-sm text-text-secondary leading-relaxed"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: "easeOut" }}
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Credentials */}
          <motion.ul
            className="space-y-3"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          >
            {credentials.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="text-gold font-cormorant text-lg leading-none select-none">—</span>
                <span className="font-dm text-sm text-text-secondary">{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
