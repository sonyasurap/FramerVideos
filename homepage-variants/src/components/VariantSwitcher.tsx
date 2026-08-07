"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { variants } from "@/lib/content";

export function VariantSwitcher({ tone = "light" }: { tone?: "light" | "dark" }) {
  const pathname = usePathname();
  const dark = tone === "dark";

  return (
    <div
      className={clsx(
        "fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-lg border px-2 py-1.5 text-[11px] tracking-[0.08em] uppercase backdrop-blur-md",
        dark
          ? "border-white/15 bg-black/55 text-white/55"
          : "border-black/10 bg-white/70 text-black/45",
      )}
    >
      <Link
        href="/"
        className={clsx(
          "px-2 py-1 transition",
          pathname === "/"
            ? dark
              ? "text-white"
              : "text-black"
            : "hover:opacity-100 opacity-80",
        )}
      >
        Index
      </Link>
      <span className={dark ? "text-white/20" : "text-black/15"}>|</span>
      {variants.map((v) => {
        const active = pathname === v.href;
        return (
          <Link
            key={v.id}
            href={v.href}
            className={clsx(
              "px-2 py-1 transition",
              active
                ? dark
                  ? "text-white"
                  : "text-black"
                : "opacity-70 hover:opacity-100",
            )}
          >
            {v.id}
          </Link>
        );
      })}
    </div>
  );
}
