"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ProjectCardProps = {
  href: string;
  title: string;
  year: string;
  image: string;
  index?: number;
};

export function ProjectCard({
  href,
  title,
  year,
  image,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link href={href} className="group block">
        <div className="overflow-hidden rounded-[8px] bg-surface aspect-[641/399]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>
        <div className="mt-2 flex items-baseline justify-between gap-4 px-1 text-[clamp(15px,1.4vw,19.7px)] leading-[1.27] tracking-[-0.01em] text-[var(--caption)] md:mt-2.5">
          <h2 className="min-w-0 truncate font-normal">{title}</h2>
          <span className="shrink-0">{year}</span>
        </div>
      </Link>
    </motion.article>
  );
}
