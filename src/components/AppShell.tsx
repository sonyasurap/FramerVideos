"use client";

import { usePathname } from "next/navigation";
import { SiteNav } from "@/components/SiteNav";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      {!isHome ? <SiteNav variant="overlay" /> : null}
      <main>{children}</main>
    </>
  );
}
