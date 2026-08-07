"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/content";
import { VariantSwitcher } from "@/components/VariantSwitcher";

export default function VariantTwo() {
  return (
    <div className="relative min-h-screen bg-blueprint text-ink">
      <div className="grid-faint pointer-events-none absolute inset-0 opacity-70" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(800px 500px at 80% 0%, rgba(11,61,74,0.08), transparent 60%)",
        }}
      />

      <main className="relative mx-auto grid min-h-screen max-w-[1200px] grid-cols-1 gap-12 px-5 py-8 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:px-10 md:py-12">
        <section className="flex flex-col justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[11px] uppercase tracking-[0.2em] text-signal"
              style={{ fontFamily: "var(--font-plex)" }}
            >
              Designer specimen / 2026
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-[clamp(3rem,8vw,6.2rem)] font-medium leading-[0.92] tracking-[-0.05em]"
              style={{ fontFamily: "var(--font-space)" }}
            >
              {profile.firstName}
              <br />
              {profile.lastName}
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-12 border border-black/15 bg-white/50 p-5 md:mt-0"
          >
            <p
              className="text-[11px] uppercase tracking-[0.18em] text-mute"
              style={{ fontFamily: "var(--font-plex)" }}
            >
              Status
            </p>
            <p
              className="mt-3 text-[22px] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-space)" }}
            >
              Currently at {profile.current}
            </p>
            <p
              className="mt-2 text-[14px] leading-relaxed text-ink-soft"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              Previously {profile.previous.join(", ")}.
            </p>
          </motion.div>
        </section>

        <section className="flex flex-col justify-center border-t border-black/10 pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
          <p
            className="mb-6 text-[11px] uppercase tracking-[0.18em] text-mute"
            style={{ fontFamily: "var(--font-plex)" }}
          >
            Skill set
          </p>
          <ul className="space-y-0">
            {profile.skills.map((skill, i) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.45 }}
                className="grid grid-cols-[3rem_1fr] items-baseline gap-3 border-b border-black/10 py-3"
              >
                <span
                  className="text-[12px] text-signal"
                  style={{ fontFamily: "var(--font-plex)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-[clamp(1.2rem,2.4vw,1.65rem)] tracking-[-0.03em]"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {skill}
                </span>
              </motion.li>
            ))}
          </ul>
          <p
            className="mt-8 text-[13px] leading-relaxed text-mute"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            My skills are the materials I use to ship product — from early
            prototype to multi-medium storytelling.
          </p>
        </section>
      </main>

      <VariantSwitcher />
    </div>
  );
}
