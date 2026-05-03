"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ClientLogosProps {
  logos: string[];
}

export default function ClientLogos({ logos }: ClientLogosProps) {
  return (
    <section className="py-16 border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-8">Clients</p>

          {logos.length === 0 ? (
            <p className="font-dm text-sm tracking-[0.12em] uppercase text-gold opacity-40">
              Client logos coming soon
            </p>
          ) : (
            <div className="flex flex-wrap items-center justify-center gap-10">
              {logos.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Image
                    src={src}
                    alt={`Client logo ${i + 1}`}
                    width={120}
                    height={40}
                    className="object-contain filter brightness-0 invert"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
