"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const phrases = [
  "shape immersive digital worlds",
  "craft multi-medium interfaces",
  "design for core human insights",
  "explore how AI shapes design",
  "code end-to-end experiences",
];

export function RotatingPhrase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="relative inline-grid min-h-[1.35em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={phrases[index]}
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -18, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="col-start-1 row-start-1"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
