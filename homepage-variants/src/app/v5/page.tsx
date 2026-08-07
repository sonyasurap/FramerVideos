"use client";

import { motion } from "framer-motion";
import { profile, skillsSentence } from "@/lib/content";
import { VariantSwitcher } from "@/components/VariantSwitcher";

export default function VariantFive() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#eef1f3] text-ink">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 55% at 50% 40%, #f8fafb 0%, #e8eef2 58%, #d9e2e8 100%)",
        }}
      />

      <main className="relative mx-auto flex min-h-screen max-w-[920px] flex-col items-start justify-center px-6 py-24 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-[12px] tracking-[0.04em] text-mute"
          style={{ fontFamily: "var(--font-dm)" }}
        >
          Currently at {profile.current}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(3rem,9vw,6.4rem)] font-medium leading-[0.95] tracking-[-0.04em]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-8 max-w-[28rem] text-[clamp(1.05rem,1.8vw,1.25rem)] leading-[1.55] text-ink-soft"
          style={{ fontFamily: "var(--font-dm)" }}
        >
          My skills are {skillsSentence()}.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-16 text-[13px] text-mute"
          style={{ fontFamily: "var(--font-dm)" }}
        >
          Prev {profile.previous.join(" / ")}
        </motion.p>
      </main>

      <VariantSwitcher />
    </div>
  );
}
