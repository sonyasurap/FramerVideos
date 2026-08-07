import type { Metadata } from "next";
import { DM_Sans, Fraunces, IBM_Plex_Mono, Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["400", "500", "600", "700"],
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Sonya Surapaneni — Homepage Variants",
  description:
    "Five structurally different homepage directions for Sonya Surapaneni.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${dmSans.variable} ${space.variable} ${fraunces.variable} ${plexMono.variable} bg-white text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
