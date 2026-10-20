"use client";

import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {

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
              href="#contact"
              className="group relative px-8 py-3.5 rounded-full glass border border-cyan-400/30 text-white font-semibold text-sm hover:border-cyan-400/60 hover:bg-cyan-500/10 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <span>Contact</span>
                <span className="text-cyan-400 group-hover:translate-x-0.5 transition-transform">✉</span>
              </span>
            </a>
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
