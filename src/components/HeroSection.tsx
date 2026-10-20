"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const metrics = [
  {
    value: "100th",
    label: "滝学園創立記念",
    sub: "歴史的節目を飾る公式Webアプリ開発",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    value: "14+",
    label: "実装画面・機能群",
    sub: "PWA・マップ・混雑投票・落とし物速報など",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    value: "7名",
    label: "先進技術研究部 開発陣",
    sub: "部長 / 開発責任者としてチーム統括",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    value: "0円",
    label: "運用インフラ費",
    sub: "GAS × スプレッドシート連携で耐障害性＆コストゼロ両立",
    gradient: "from-emerald-400 to-teal-500",
  },
];

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("soma.nova817@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10 my-auto">
        {/* Status Badge */}
        <ScrollReveal>
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-full glass border border-white/10 text-xs font-mono text-zinc-300 shadow-xl backdrop-blur-xl">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 font-semibold tracking-wide">AVAILABLE FOR PROJECTS</span>
            </span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="text-zinc-400">滝学園 先進技術研究部 部長 (高2)</span>
          </div>
        </ScrollReveal>

        {/* Hero Headline */}
        <ScrollReveal delay={100}>
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.92]">
              <span className="block text-white drop-shadow-sm">Soma</span>
              <span className="block gradient-text">Matsuoka</span>
            </h1>
            <p className="text-xs sm:text-sm font-mono text-zinc-400 tracking-widest uppercase pt-2">
              松岡 奏磨 / Full-Stack Web Developer &amp; Tech Lead
            </p>
          </div>
        </ScrollReveal>

        {/* Lead Description */}
        <ScrollReveal delay={200}>
          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-light">
            最新の <span className="text-white font-semibold underline decoration-cyan-400/50 underline-offset-4">React 19 / Next.js / TypeScript</span> を主軸に、
            緻密なUI/UX設計から耐障害性サーバーレス基盤まで。
            目的と体験を妥協なく具現化するWebエンジニアリング。
          </p>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal delay={300}>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <a
              href="#project"
              className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_35px_rgba(99,102,241,0.5)] hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                主力プロジェクト分析を見る
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
            <a
              href="https://www.taki-hj.ac.jp/students_works/nagatsuki_fes_2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass border border-white/10 text-cyan-300 font-semibold text-sm hover:bg-white/10 hover:border-cyan-400/40 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>長月祭アプリを実機プレビュー</span>
              <span className="text-xs">↗</span>
            </a>
            <button
              onClick={handleCopyEmail}
              className="group inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-white/10 text-zinc-400 font-medium text-sm hover:text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300 active:scale-95"
            >
              <span>{copied ? "メールをコピーしました！" : "Contact"}</span>
              <span className="text-xs text-zinc-500 group-hover:text-zinc-300">
                {copied ? "✓" : "📋"}
              </span>
            </button>
          </div>
        </ScrollReveal>

        {/* Key Metrics Strip / Grid */}
        <ScrollReveal delay={400}>
          <div className="pt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {metrics.map((m, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 border border-white/5 text-left relative overflow-hidden group hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`text-3xl sm:text-4xl font-black font-mono bg-gradient-to-r ${m.gradient} bg-clip-text text-transparent`}
                >
                  {m.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1.5">{m.label}</div>
                <div className="text-[11px] text-zinc-400 mt-1 leading-snug">{m.sub}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Scroll indicator */}
        <ScrollReveal delay={500}>
          <div className="pt-8 flex flex-col items-center gap-2">
            <span className="text-[10px] text-zinc-500 tracking-[0.25em] font-mono uppercase">
              SCROLL DOWN
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-zinc-500 via-zinc-700 to-transparent animate-pulse" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
