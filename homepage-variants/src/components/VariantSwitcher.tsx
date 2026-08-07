"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { variants } from "@/lib/content";

export function VariantSwitcher() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-0.5 border border-grey-200 bg-white/90 px-1.5 py-1 text-[11px] uppercase tracking-[0.08em] text-grey-500 backdrop-blur-md">
      <Link
        href="/"
        className={clsx(
          "px-2.5 py-1.5 transition",
          pathname === "/" ? "bg-grey-100 text-ink" : "hover:text-ink",
        )}
      >
        Index
      </Link>
      {variants.map((v) => {
        const active = pathname === v.href;
        return (
          <Link
            key={v.id}
            href={v.href}
            className={clsx(
              "px-2.5 py-1.5 transition",
              active ? "bg-grey-100 text-ink" : "hover:text-ink",
            )}
          >
            {v.id}
          </Link>
        );
      })}
    </div>
  );
}
