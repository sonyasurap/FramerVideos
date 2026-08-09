"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function TextOnTvPage() {
  return (
    <div className="mx-auto max-w-site px-6 pb-24 md:px-12 md:pb-32">
      <section className="flex flex-col items-center pt-[100px] text-center md:pt-[140px]">
        <motion.p
          className="text-[14px] tracking-[0.02em] text-muted-soft"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          2026
        </motion.p>
        <motion.h1
          className="mt-3 max-w-[480px] text-balance text-[22px] leading-[1.27] tracking-[-0.01em] text-ink md:text-[28px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Prototyping Threads on TV
        </motion.h1>
        <motion.p
          className="mt-4 max-w-[520px] text-[17px] leading-[1.5] text-muted-soft md:text-[18px]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          A short-form text experience designed for the living room — large
          type, remote-first navigation, and a calm focus on one post at a time.
        </motion.p>
      </section>

      <motion.div
        className="mx-auto mt-14 max-w-[960px] overflow-hidden rounded-[12px] bg-surface md:mt-20"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/threads-tv-card.png"
          alt="Threads on TV prototype with remote"
          className="w-full"
        />
      </motion.div>

      <div className="mt-12 text-center">
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-muted/90 px-6 py-2.5 text-[15px] text-muted transition-opacity hover:opacity-70"
        >
          ← Back home
        </Link>
      </div>
    </div>
  );
}
