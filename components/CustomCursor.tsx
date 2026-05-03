"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const ringSpring = { damping: 20, stiffness: 150, mass: 0.8 };

  const dotX = useSpring(rawX, springConfig);
  const dotY = useSpring(rawY, springConfig);
  const ringX = useSpring(rawX, ringSpring);
  const ringY = useSpring(rawY, ringSpring);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(
        !!(
          target.closest("a") ||
          target.closest("button") ||
          target.closest("[data-hover]")
        )
      );
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [rawX, rawY, visible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
      >
        <motion.div
          className="rounded-full bg-gold"
          animate={{ width: hovering ? 6 : 4, height: hovering ? 6 : 4 }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
      >
        <motion.div
          className="rounded-full border border-gold"
          animate={{
            width: hovering ? 40 : 28,
            height: hovering ? 40 : 28,
            opacity: hovering ? 0.6 : 0.35,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  );
}
