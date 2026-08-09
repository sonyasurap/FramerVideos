import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Sonya Surapaneni",
  description:
    "Sonya is a product designer with a focus in AI products & prototyping. Previously Coinbase, Uber, Lego.",
  openGraph: {
    title: "Sonya Surapaneni",
    description:
      "Product designer focused on AI products & prototyping. Prev. Coinbase, Uber, Lego.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-aktiv text-foreground antialiased">
        <SiteNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
