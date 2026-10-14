import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-6 border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-zinc-400 tracking-wider">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mt-4">
            Let&apos;s Create <span className="gradient-text">Together</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            Webアプリケーション開発、プロジェクトの技術設計、各種コラボレーションについてお気軽にご連絡ください。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="glass rounded-3xl p-8 sm:p-10 border border-white/10 max-w-xl mx-auto space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Direct Contact</div>
              <a
                href="mailto:soma.nova817@gmail.com"
                className="text-lg sm:text-xl font-bold text-white hover:text-cyan-400 transition-colors inline-block break-all"
              >
                soma.nova817@gmail.com
              </a>
            </div>

            <div className="flex justify-center gap-4 pt-4 border-t border-white/5">
              <a
                href="https://github.com/Soma817"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-zinc-300 text-xs font-semibold hover:bg-white/[0.1] hover:text-white transition-all flex items-center gap-2"
              >
                <span>GitHub</span>
                <span className="text-zinc-500 text-[10px]">↗</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer info */}
        <div className="pt-16 border-t border-white/5 text-zinc-500 text-xs space-y-2 font-mono">
          <p>&copy; 2026 Soma Matsuoka. All rights reserved.</p>
          <p className="text-[11px] text-zinc-600">Built with Next.js, React 19, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
}

