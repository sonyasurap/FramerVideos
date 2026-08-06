import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Sonya Surapaneni",
  description:
    "Sonya is a product designer using prototyping and storytelling to shape immersive digital worlds.",
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
      <body className="min-h-screen bg-background font-aktiv text-foreground antialiased">
        <SiteNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
