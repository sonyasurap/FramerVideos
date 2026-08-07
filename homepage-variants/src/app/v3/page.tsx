"use client";

import { motion } from "framer-motion";
import { profile, skillsSentence } from "@/lib/content";
import { VariantSwitcher } from "@/components/VariantSwitcher";

export default function VariantThree() {
  return (
    <div className="relative min-h-screen bg-[#f7f7f5] text-ink">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[70vh]"
        style={{
          background:
            "linear-gradient(135deg, #f7f7f5 0%, #e9efe9 42%, #f3eee6 100%)",
        }}
      />

      <main className="relative mx-auto min-h-screen max-w-[1240px] px-5 py-8 md:px-10 md:py-12">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(3.2rem,10vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.05em]"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          {profile.name}
        </motion.h1>

        <div className="mt-14 grid gap-12 border-t border-black/10 pt-10 md:mt-20 md:grid-cols-[1.4fr_0.8fr] md:gap-16">
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.65 }}
          >
            <p
              className="text-[12px] uppercase tracking-[0.16em] text-mute"
              style={{ fontFamily: "var(--font-plex)" }}
            >
              Byline
            </p>
            <p
              className="mt-4 max-w-[36rem] text-[clamp(1.35rem,2.6vw,1.9rem)] font-light leading-[1.35] tracking-[-0.02em] text-ink"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              My skills are {skillsSentence()}.
            </p>
            <p
              className="mt-8 max-w-[32rem] text-[15px] leading-relaxed text-ink-soft"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              I design across product surfaces and media formats — using
              prototypes and narrative to make complex systems feel human.
            </p>
          </motion.section>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.65 }}
            className="md:border-l md:border-black/10 md:pl-10"
          >
            <div className="space-y-8">
              <div>
                <p
                  className="text-[11px] uppercase tracking-[0.16em] text-mute"
                  style={{ fontFamily: "var(--font-plex)" }}
                >
                  Currently
                </p>
                <p
                  className="mt-2 text-[28px] tracking-[-0.03em]"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {profile.current}
                </p>
              </div>
              <div>
                <p
                  className="text-[11px] uppercase tracking-[0.16em] text-mute"
                  style={{ fontFamily: "var(--font-plex)" }}
                >
                  Previously
                </p>
                <ul
                  className="mt-3 space-y-2 text-[18px] tracking-[-0.02em] text-ink-soft"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {profile.previous.map((company) => (
                    <li key={company}>{company}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="origin-left mt-20 h-px w-full bg-black/15"
        />
      </main>

      <VariantSwitcher />
    </div>
  );
}
