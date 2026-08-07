"use client";

import { motion } from "framer-motion";
import { profile, skillsSentence } from "@/lib/content";
import { VariantSwitcher } from "@/components/VariantSwitcher";

export default function VariantOne() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#eef2f0] text-ink">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px 640px at 12% -8%, rgba(31,75,63,0.18), transparent 55%), radial-gradient(800px 520px at 92% 18%, rgba(11,61,74,0.1), transparent 52%), linear-gradient(180deg, #f3f6f4 0%, #e4ebe7 100%)",
        }}
      />

      <main className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col justify-between px-5 py-8 md:px-10 md:py-10">
        <header className="flex items-start justify-between gap-6">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[12px] uppercase tracking-[0.18em] text-mute"
            style={{ fontFamily: "var(--font-plex)" }}
          >
            Product designer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-right text-[12px] uppercase tracking-[0.14em] text-mute"
            style={{ fontFamily: "var(--font-plex)" }}
          >
            Currently {profile.current}
          </motion.p>
        </header>

        <section className="py-16 md:py-10">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[11ch] text-[clamp(3.4rem,11vw,8.8rem)] font-semibold leading-[0.88] tracking-[-0.055em]"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-[34rem] text-[clamp(1.15rem,2.2vw,1.55rem)] leading-[1.45] text-ink-soft"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            My skills are{" "}
            <span className="text-ink">{skillsSentence()}</span>.
          </motion.p>
        </section>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col gap-3 border-t border-black/10 pt-5 md:flex-row md:items-end md:justify-between"
        >
          <p
            className="max-w-xl text-[13px] leading-relaxed text-mute"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            Prev {profile.previous.join(" · ")}
          </p>
          <p
            className="text-[12px] uppercase tracking-[0.16em] text-mute"
            style={{ fontFamily: "var(--font-plex)" }}
          >
            v01 — Statement
          </p>
        </motion.footer>
      </main>

      <VariantSwitcher />
    </div>
  );
}
