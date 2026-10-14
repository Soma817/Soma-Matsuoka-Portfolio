import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono text-zinc-400 tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            PORTFOLIO 2026
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[0.9]">
            <span className="block text-white">Soma</span>
            <span className="block gradient-text">Matsuoka</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            開発責任者 / 先進技術研究部 部長
            <br />
            <span className="text-zinc-500">
              Web アプリケーション・PWA 開発
            </span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="#project"
              className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:scale-105"
            >
              <span className="relative z-10">プロジェクトを見る</span>
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-white/10 text-zinc-300 font-semibold text-sm hover:bg-white/5 hover:border-white/20 transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </ScrollReveal>

        {/* Scroll indicator */}
        <ScrollReveal delay={500}>
          <div className="pt-16 flex flex-col items-center gap-2">
            <span className="text-xs text-zinc-600 tracking-widest font-mono">
              SCROLL
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-zinc-600 to-transparent animate-pulse" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

