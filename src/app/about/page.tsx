"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/content";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-site px-6 pb-24 md:px-12 md:pb-32">
      <section className="flex flex-col items-center pt-[120px] text-center md:pt-[156px]">
        <motion.h1
          className="max-w-[420px] text-balance text-[22px] leading-[1.27] tracking-[-0.01em] text-ink md:text-[24px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          About {profile.name.split(" ")[0]}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-[480px] text-[18px] leading-[1.45] tracking-[-0.01em] text-muted-soft md:text-[20px]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Product designer focused on AI products and prototyping. Previously at
          Coinbase, Uber, and Lego — shaping tools people actually use.
        </motion.p>
      </section>

      <motion.section
        className="mx-auto mt-20 max-w-[640px] space-y-10 text-[16px] leading-[1.6] text-[var(--caption)] md:mt-28 md:text-[17px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>
          I care about the space between an idea and something you can hold —
          interactive prototypes, sharp product sense, and the craft of making
          complex systems feel simple.
        </p>
        <p>
          Currently exploring AI-native interfaces, multi-medium storytelling,
          and TV-scale experiences. Always happy to talk about design, product,
          or what you&apos;re building.
        </p>
      </motion.section>
    </div>
  );
}
