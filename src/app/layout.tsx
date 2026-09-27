import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/AppShell";

export const metadata: Metadata = {
  title: "Sonya Surapaneni",
  description:
    "Sonya is a product designer with a focus in AI products & prototyping. Prev. Coinbase, Uber, Lego.",
  openGraph: {
    title: "Sonya Surapaneni",
    url: "https://sonyasurapaneni.com/",
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
      <body className="min-h-screen bg-chrome font-aktiv text-foreground antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
