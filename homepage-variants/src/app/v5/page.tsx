"use client";

import { motion } from "framer-motion";
import { profile, projects, skillsSentence } from "@/lib/content";
import { ProjectThumb } from "@/components/ProjectThumb";
import { VariantSwitcher } from "@/components/VariantSwitcher";

/**
 * V5 STRIP — pure typographic banner (name at massive scale across the top),
 * then one cinematic full-width project band, then a thin skills/path footer.
 * Intentionally opposite of the mosaic / rail / feed structures.
 */
export default function VariantFive() {
  const hero = projects[2];

  return (
    <div className="flex min-h-svh flex-col bg-white text-ink">
      <section className="border-b border-grey-200 px-4 pt-6 md:px-8 md:pt-8">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(3.2rem,14vw,11rem)] font-medium leading-[0.85] tracking-[-0.06em]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          {profile.name}
        </motion.h1>
        <div className="mt-6 flex flex-col gap-2 border-t border-grey-200 py-4 text-[12px] uppercase tracking-[0.12em] text-grey-500 md:flex-row md:items-center md:justify-between">
          <p style={{ fontFamily: "var(--font-plex)" }}>
            Currently {profile.current}
          </p>
          <p style={{ fontFamily: "var(--font-plex)" }}>
            Prev {profile.previous.join(" / ")}
          </p>
        </div>
      </section>

      <section className="relative flex-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="h-[min(62svh,720px)] w-full border-b border-grey-200 bg-grey-100"
        >
          <ProjectThumb
            src={hero.image}
            alt={hero.title}
            className="h-full w-full"
          />
        </motion.div>
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 md:left-8 md:right-8">
          <p
            className="bg-white/90 px-3 py-2 text-[13px] tracking-[-0.02em] text-ink backdrop-blur"
            style={{ fontFamily: "var(--font-space)" }}
          >
            {hero.title} — {hero.year}
          </p>
        </div>
      </section>

      <footer className="px-5 py-6 pb-24 md:px-8">
        <p
          className="max-w-3xl text-[clamp(1rem,2vw,1.25rem)] leading-relaxed text-grey-700"
          style={{ fontFamily: "var(--font-dm)" }}
        >
          My skills are {skillsSentence()}.
        </p>
      </footer>

      <VariantSwitcher />
    </div>
  );
}
