
import type { Metadata } from "next";

import { Geist, Geist_Mono, Barlow_Condensed } from "next/font/google";

import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: "300",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BLUC FSHN | Nairobi Streetwear",
  description:
    "BLUC FSHN — Nairobi streetwear blending bold design, contemporary style, and everyday expression.",
  icons: {
    icon: "/favicon.png.png",
  },
  openGraph: {
    title: "BLUC FSHN | Nairobi Streetwear",
    description:
      "BLUC FSHN — Nairobi streetwear blending bold design, contemporary style, and everyday expression.",
    url: "https://bluc-fshn.vercel.app",
    siteName: "BLUC FSHN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={barlowCondensed.className}>{children}</body>
    </html>
  );
}

