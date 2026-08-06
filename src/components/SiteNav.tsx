"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/sandbox", label: "Sandbox" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-site items-start justify-between gap-6 px-5 py-5 md:px-8 md:py-6">
        <Link href="/" className="group min-w-0">
          <div className="truncate text-[15px] font-medium tracking-[-0.01em] text-soft transition group-hover:opacity-80 md:text-base">
            Sonya Surapaneni
          </div>
          <div className="mt-0.5 text-[13px] text-muted md:text-sm">
            Prev @ the LEGO Group
          </div>
        </Link>

        <nav className="flex shrink-0 items-center gap-5 pt-0.5 text-[14px] text-soft md:gap-8 md:text-[15px]">
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
                  "transition-opacity hover:opacity-100",
                  active ? "opacity-100" : "opacity-55",
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
