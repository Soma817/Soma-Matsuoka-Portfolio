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

const SITE_URL = "https://soma-matsuoka-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  title: {
    default: "松岡奏磨 | 長月祭アプリ開発責任者・先進技術研究部部長 | Portfolio",
    template: "%s | 松岡奏磨 Portfolio",
  },
  description:
    "松岡奏磨（Soma Matsuoka）のポートフォリオ。滝学園 創立100周年記念「長月祭」公式Webアプリの開発責任者・先進技術研究部部長として7名チームを統括。React 19 / Vite / PWA / GAS連携による数千人規模のプロダクトを構築・当日ゼロダウンタイムで完走。",
  keywords: [
    "長月祭アプリ",
    "長月祭 公式アプリ",
    "長月祭 Webアプリ",
    "滝学園 長月祭",
    "滝学園 文化祭アプリ",
    "長月祭 2026",
    "松岡奏磨",
    "Soma Matsuoka",
    "ポートフォリオ",
    "Web開発",
    "滝学園",
    "先進技術研究部",
    "React 19",
    "Next.js",
    "TypeScript",
    "PWA",
    "文化祭アプリ",
    "開発責任者",
  ],
  authors: [{ name: "Soma Matsuoka", url: SITE_URL }],
  creator: "Soma Matsuoka",
  publisher: "Soma Matsuoka",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "松岡奏磨 | 長月祭アプリ開発責任者 | Portfolio",
    description:
      "滝学園 創立100周年記念「長月祭」公式WebアプリをReact 19/PWAで構築した開発責任者・松岡奏磨のポートフォリオ。数千人規模の文化祭を支えた技術的ケーススタディ。",
    url: SITE_URL,
    siteName: "松岡奏磨 Portfolio",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "松岡奏磨 | 長月祭アプリ開発責任者 | Portfolio",
    description:
      "滝学園 創立100周年記念「長月祭」公式WebアプリをReact 19/PWAで構築した開発責任者のポートフォリオ。",
    creator: "@Soma817",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        "name": "松岡 奏磨",
        "alternateName": ["Soma Matsuoka", "松岡奏磨"],
        "jobTitle": "Web Application Developer / 先進技術研究部 部長",
        "description": "滝学園 創立100周年記念「長月祭」公式Webアプリ（長月祭アプリ）の開発責任者。",
        "url": SITE_URL,
        "sameAs": [
          "https://github.com/Soma817"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": "松岡奏磨 ポートフォリオ | 長月祭アプリ開発責任者",
        "description": "滝学園 創立100周年記念 長月祭 公式Webアプリ（長月祭アプリ）の開発責任者・松岡奏磨のポートフォリオサイト。",
        "publisher": {
          "@id": `${SITE_URL}/#person`
        },
        "inLanguage": "ja"
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.taki-hj.ac.jp/students_works/nagatsuki_fes_2026/#app",
        "name": "長月祭アプリ (滝学園 長月祭 公式Webアプリ)",
        "alternateName": ["長月祭アプリ", "長月祭Webアプリ", "滝学園文化祭アプリ"],
        "operatingSystem": "Web, iOS, Android (PWA)",
        "applicationCategory": "EventApplication",
        "url": "https://www.taki-hj.ac.jp/students_works/nagatsuki_fes_2026/",
        "author": {
          "@id": `${SITE_URL}/#person`
        },
        "creator": {
          "@id": `${SITE_URL}/#person`
        },
        "description": "滝学園創立100周年記念 文化祭「長月祭」のために松岡奏磨が開発責任者として設計・実装した公式Webアプリケーション（PWA）。"
      }
    ]
  };

  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-[#e8e8ed]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
