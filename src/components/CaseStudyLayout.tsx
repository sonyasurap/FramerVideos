"use client";

import Link from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";

export type CaseMeta = {
  timeline: string;
  skills: string;
  team: string;
  tools: string;
};

export type CaseSection = {
  id: string;
  label: string;
};

type CaseStudyLayoutProps = {
  title: string;
  year: string;
  summary: string;
  meta: CaseMeta;
  sections: CaseSection[];
  hero?: React.ReactNode;
  children: React.ReactNode;
  otherProjects: { href: string; title: string }[];
};

export function CaseStudyLayout({
  title,
  year,
  summary,
  meta,
  sections,
  hero,
  children,
  otherProjects,
}: CaseStudyLayoutProps) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="pb-28 pt-28 md:pt-32">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <div className="mb-8 flex items-start justify-between gap-4 md:mb-10">
          <h1 className="max-w-[18ch] text-[28px] font-medium leading-[1.15] tracking-[-0.02em] text-foreground md:text-[40px]">
            {title}
          </h1>
          <span className="pt-2 text-sm text-muted">{year}</span>
        </div>

        {hero ? <div className="mb-12 overflow-hidden rounded-md">{hero}</div> : null}

        <div className="mb-14 grid gap-6 border-y border-white/10 py-6 text-[12px] uppercase tracking-label md:grid-cols-4 md:gap-4">
          <MetaItem label="Timeline" value={meta.timeline} />
          <MetaItem label="Skills" value={meta.skills} />
          <MetaItem label="Team" value={meta.team} />
          <MetaItem label="Tools" value={meta.tools} />
        </div>

        <div className="mb-16 max-w-prose">
          <p className="mb-3 text-[13px] uppercase tracking-label text-accent">
            Project summary ✦
          </p>
          <p className="text-[16px] leading-[1.7] text-soft md:text-[17px]">
            {summary}
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-site gap-10 px-5 md:grid-cols-[180px_minmax(0,1fr)] md:gap-12 md:px-8 lg:grid-cols-[200px_minmax(0,1fr)]">
        <aside className="hidden md:block">
          <nav className="sticky top-28 flex flex-col gap-3 text-[13px] text-muted">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={clsx(
                  "transition-colors hover:text-soft",
                  active === section.id && "text-soft",
                )}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="min-w-0 space-y-24 md:space-y-28">{children}</div>
      </div>

      <div className="mx-auto mt-28 max-w-site px-5 md:px-8">
        <div className="max-w-prose border-t border-white/10 pt-12">
          <p className="mb-3 text-[15px] text-soft">
            <a
              href="mailto:sonyasurap@ucla.edu"
              className="text-accent underline underline-offset-4"
            >
              reach out
            </a>{" "}
            to view my full project
          </p>
          <p className="mb-8 text-[15px] leading-relaxed text-muted">
            This project came with plenty of other challenges and discoveries.
            I&apos;d be more than happy to walk you through the rest over a
            coffee chat or interview. In the meantime, check out my other
            projects:
          </p>
          <div className="flex flex-col gap-3">
            {otherProjects.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="text-[15px] text-soft underline-offset-4 transition hover:underline"
              >
                {p.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="mb-2 text-accent">{label}</div>
      <div className="normal-case tracking-normal text-soft">{value}</div>
    </div>
  );
}

export function CaseSection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      {eyebrow ? (
        <p className="mb-3 text-[12px] uppercase tracking-label text-accent">
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2 className="mb-6 max-w-[22ch] text-[26px] font-medium leading-tight tracking-[-0.02em] md:text-[32px]">
          {title}
        </h2>
      ) : null}
      <div className="space-y-6 text-[16px] leading-[1.7] text-soft [&_strong]:font-medium [&_strong]:text-foreground">
        {children}
      </div>
    </section>
  );
}

export function MediaBlock({
  src,
  alt = "",
  caption,
  type = "image",
}: {
  src: string;
  alt?: string;
  caption?: string;
  type?: "image" | "video";
}) {
  return (
    <figure className="my-8 overflow-hidden rounded-md bg-surface">
      {type === "video" ? (
        <video
          src={src}
          className="w-full"
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="w-full" />
      )}
      {caption ? (
        <figcaption className="px-4 py-3 text-[12px] uppercase tracking-label text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
