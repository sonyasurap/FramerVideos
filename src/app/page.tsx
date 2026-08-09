"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { profile, projects } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-site px-6 pb-24 md:px-12 md:pb-32">
      <section className="flex flex-col items-center pt-[120px] text-center md:pt-[156px]">
        <motion.h1
          className="max-w-[365px] text-balance text-[22px] leading-[1.27] tracking-[-0.01em] text-ink md:text-[24px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.headline}
        </motion.h1>
        <motion.p
          className="mt-2 text-[22px] leading-[1.27] tracking-[-0.01em] text-muted-soft md:mt-1.5 md:text-[24px]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.previous}
        </motion.p>
      </section>

      <section
        className="mt-[88px] grid grid-cols-1 gap-x-3.5 gap-y-[88px] md:mt-[120px] md:grid-cols-2 md:gap-y-[106px]"
        aria-label="Selected work"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            href={project.href}
            title={project.title}
            year={project.year}
            image={project.image}
            index={index}
          />
        ))}
      </section>
    </div>
  );
}
