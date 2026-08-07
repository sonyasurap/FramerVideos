"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/content";
import { VariantSwitcher } from "@/components/VariantSwitcher";

const chapters = [
  {
    label: "01",
    title: "Intelligence & craft",
    body: "AI, prototyping, and coding experience — building things early enough to learn what the product wants to become.",
    wash: "linear-gradient(180deg, rgba(31,75,63,0.1), transparent 60%)",
  },
  {
    label: "02",
    title: "Story & sense",
    body: "Storytelling and product sense — turning systems, constraints, and research into narratives people can feel.",
    wash: "linear-gradient(180deg, rgba(11,61,74,0.08), transparent 60%)",
  },
  {
    label: "03",
    title: "Surfaces & scale",
    body: "B2B and B2C work, multi-medium design — from dense tools to consumer moments across screens and formats.",
    wash: "linear-gradient(180deg, rgba(90,110,96,0.12), transparent 60%)",
  },
];

export default function VariantFour() {
  return (
    <div className="relative min-h-screen bg-[#f1f3f1] text-ink">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 480px at 50% -10%, rgba(31,75,63,0.1), transparent 55%)",
        }}
      />

      <main className="relative mx-auto min-h-screen max-w-[1280px] px-5 py-8 md:px-10 md:py-10">
        <header className="flex flex-col gap-6 border-b border-black/10 pb-8 md:flex-row md:items-end md:justify-between">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.8rem,7vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.05em]"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {profile.name}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-xs text-[13px] leading-relaxed text-mute"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            Currently {profile.current}. Prev {profile.previous.join(", ")}.
          </motion.div>
        </header>

        <p
          className="mt-8 max-w-2xl text-[clamp(1.1rem,2vw,1.35rem)] leading-relaxed text-ink-soft"
          style={{ fontFamily: "var(--font-dm)" }}
        >
          My skills are AI, prototyping, storytelling, product sense, B2B and
          B2C work, multi-medium design, and coding experience — arranged here
          as three ways of working.
        </p>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-5">
          {chapters.map((chapter, i) => (
            <motion.section
              key={chapter.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.65 }}
              className="min-h-[280px] border border-black/10 bg-white/55 p-6 md:min-h-[340px] md:p-8"
              style={{ backgroundImage: chapter.wash }}
            >
              <p
                className="text-[11px] uppercase tracking-[0.18em] text-mute"
                style={{ fontFamily: "var(--font-plex)" }}
              >
                {chapter.label}
              </p>
              <h2
                className="mt-6 text-[clamp(1.5rem,2.5vw,2rem)] font-medium tracking-[-0.03em]"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {chapter.title}
              </h2>
              <p
                className="mt-4 max-w-[28ch] text-[15px] leading-relaxed text-ink-soft"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                {chapter.body}
              </p>
            </motion.section>
          ))}
        </div>
      </main>

      <VariantSwitcher />
    </div>
  );
}
