import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: "ICONUS — Reveal what is possible",
  description:
    "Iconus genetic test kits uncover the biological blueprint within every patient, so you can chart a new path together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plex.variable}>
      <body>{children}</body>
    </html>
  );
}
