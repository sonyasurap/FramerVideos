"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ProjectGridCardProps = {
  href: string;
  title: string;
  year: string;
  image: string;
  index?: number;
};

export function ProjectGridCard({
  href,
  title,
  year,
  image,
  index = 0,
}: ProjectGridCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{
        duration: 0.65,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link href={href} className="group block">
        <div className="relative aspect-[641/399] overflow-hidden rounded-card bg-panel-surface">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            width={641}
            height={399}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <div className="mt-2 flex items-baseline justify-between gap-4 px-1 text-[15px] leading-[1.27] tracking-[-0.01em] text-panel-soft md:mt-2.5 md:text-[18px] lg:text-[19.7px]">
          <span className="min-w-0 truncate">{title}</span>
          <span className="shrink-0 tabular-nums">{year}</span>
        </div>
      </Link>
    </motion.div>
  );
}
