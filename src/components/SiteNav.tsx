"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/sandbox", label: "Sandbox" },
];

type SiteNavProps = {
  variant?: "panel" | "overlay";
};

export function SiteNav({ variant = "overlay" }: SiteNavProps) {
  const pathname = usePathname();
  const isPanel = variant === "panel";

  return (
    <header
      className={clsx(
        isPanel
          ? "relative z-20 w-full"
          : "fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-md",
      )}
    >
      <div
        className={clsx(
          "flex items-center justify-between gap-3 sm:gap-6",
          isPanel
            ? "px-4 pt-4 sm:px-6 sm:pt-6"
            : "mx-auto max-w-site px-5 py-5 md:px-8 md:py-6",
        )}
      >
        <Link
          href="/"
          className={clsx(
            "min-w-0 truncate text-[14px] tracking-nav transition-opacity hover:opacity-100 sm:text-[16px]",
            isPanel ? "text-panel-muted opacity-80" : "text-soft",
          )}
        >
          Sonya Surapaneni
        </Link>

        <nav
          className={clsx(
            "flex shrink-0 items-center gap-4 text-[14px] tracking-nav sm:gap-10 sm:text-[16px] md:gap-12",
            isPanel ? "text-panel-muted opacity-80" : "text-soft",
          )}
        >
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "relative outline-none transition-opacity hover:opacity-100 focus-visible:ring-1",
                  isPanel
                    ? "focus-visible:ring-panel-muted/40"
                    : "focus-visible:ring-white/40",
                  isPanel &&
                    active &&
                    "rounded-pill border border-panel-muted px-3 py-2 sm:px-[22px] sm:py-[10px]",
                  !isPanel && (active ? "opacity-100" : "opacity-55"),
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
