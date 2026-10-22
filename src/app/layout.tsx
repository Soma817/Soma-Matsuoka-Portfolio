import type { Metadata } from "next";
import Script from "next/script";
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
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  title: "松岡 奏磨 / Soma Matsuoka | Portfolio",
  description:
    "松岡奏磨（Soma Matsuoka）のポートフォリオ。滝学園 高校2年生・先進技術研究部 部長。React 19 / Next.js / PWAを用いたWebアプリケーション開発とアーキテクチャ設計の実績・ケーススタディ。",
  keywords: [
    "松岡奏磨",
    "Soma Matsuoka",
    "ポートフォリオ",
    "Web開発",
    "滝学園",
    "先進技術研究部",
    "長月祭アプリ",
    "React 19",
    "Next.js",
    "TypeScript",
    "PWA"
  ],
  authors: [{ name: "Soma Matsuoka" }],
  openGraph: {
    title: "松岡 奏磨 / Soma Matsuoka | Portfolio",
    description: "松岡奏磨のポートフォリオ — 開発責任者・先進技術研究部部長。React 19/Next.js/PWA開発の実績とケーススタディ",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W5MJNBXTSD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-W5MJNBXTSD');
          `}
        </Script>
      </body>
    </html>
  );
}
