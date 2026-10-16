import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soma Matsuoka | Portfolio",
  description:
    "松岡奏磨のポートフォリオ — 開発責任者・先進技術研究部部長。Webアプリ・PWA開発の実績とケーススタディ。",
  keywords: ["松岡奏磨", "ポートフォリオ", "Web開発", "React", "Next.js", "PWA"],
  authors: [{ name: "Soma Matsuoka" }],
  openGraph: {
    title: "松岡 奏磨 (Soma Matsuoka) | Portfolio",
    description: "松岡奏磨のポートフォリオ — 開発・探究ケーススタディ",
    type: "website",
  },
  verification: {
    google: "Vxjo4VDBWOfPnyAvnEosrggwXMK6KQgrOt_BWz7BMOc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-[#e8e8ed]">
        {children}
      </body>
    </html>
  );
}
