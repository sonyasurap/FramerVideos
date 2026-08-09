"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { navLinks, profile } from "@/lib/content";

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto flex max-w-site items-center justify-between px-6 pt-6 md:px-6 md:pt-6">
        <Link
          href="/"
          className="text-[16px] tracking-[0.02em] text-muted opacity-80 transition-opacity hover:opacity-100"
        >
          {profile.name}
        </Link>

        <nav
          className="flex items-center gap-2 text-[16px] tracking-[0.02em] text-muted md:gap-6"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "relative inline-flex min-w-[88px] items-center justify-center rounded-full border px-[22px] py-[10px] transition-[opacity,border-color] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-muted",
                  active
                    ? "border-muted opacity-100"
                    : "border-transparent opacity-80 hover:opacity-100",
                )}
                aria-current={active ? "page" : undefined}
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
