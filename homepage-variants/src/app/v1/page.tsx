"use client";

import { motion } from "framer-motion";
import { profile, projects, skillsSentence } from "@/lib/content";
import { ProjectThumb } from "@/components/ProjectThumb";
import { VariantSwitcher } from "@/components/VariantSwitcher";

/** V1 FEED — sticky identity header, vertical case-study stack */
export default function VariantOne() {
  return (
    <div className="bg-white text-ink">
      <header className="sticky top-0 z-20 border-b border-grey-200 bg-white/95 px-5 py-5 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1
              className="text-[clamp(1.8rem,4vw,2.6rem)] font-semibold tracking-[-0.04em]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {profile.name}
            </h1>
            <p
              className="mt-2 max-w-xl text-[14px] leading-relaxed text-grey-700"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              My skills are {skillsSentence()}.
            </p>
          </div>
          <p
            className="text-[12px] uppercase tracking-[0.12em] text-grey-500"
            style={{ fontFamily: "var(--font-plex)" }}
          >
            Currently {profile.current}
            <span className="mx-2 text-grey-300">/</span>
            Prev {profile.previous.join(", ")}
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-[1100px] space-y-4 px-5 py-6 pb-28 md:px-10">
        {projects.slice(0, 6).map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.55, delay: i * 0.04 }}
          >
            <ProjectThumb
              src={project.image}
              alt={project.title}
              label={project.title}
              year={project.year}
              showMeta
              className="aspect-[16/9] w-full border border-grey-200"
            />
          </motion.div>
        ))}
      </main>

      <VariantSwitcher />
    </div>
  );
}
