import type { Metadata } from "next";
import {
  DM_Sans,
  Fraunces,
  IBM_Plex_Mono,
  Outfit,
  Space_Grotesk,
  Syne,
} from "next/font/google";
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

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
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
    "Five homepage directions for Sonya Surapaneni: AI, prototyping, storytelling, and product design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${dmSans.variable} ${space.variable} ${outfit.variable} ${fraunces.variable} ${plexMono.variable} antialiased`}
      >
        <div className="noise" aria-hidden />
        {children}
      </body>
    </html>
  );
}
