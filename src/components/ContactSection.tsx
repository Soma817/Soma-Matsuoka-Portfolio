"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    handle: "@Soma817",
    href: "https://github.com/Soma817",
    desc: "オープンソース活動 & リポジトリ",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    accentHover: "hover:border-zinc-400/50 hover:bg-zinc-800/40 hover:text-white",
  },
  {
    name: "X (Twitter)",
    handle: "@sm_tech_log17",
    href: "https://x.com/sm_tech_log17",
    desc: "技術ログ・日々の学びの発信",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    accentHover: "hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300",
  },
  {
    name: "Instagram",
    handle: "@sm.tech_log17",
    href: "https://www.instagram.com/sm.tech_log17",
    desc: "制作風景 & カルチャー",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
    accentHover: "hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-400",
  },
  {
    name: "LinkedIn",
    handle: "soma-matsuoka",
    href: "https://www.linkedin.com/in/soma-matsuoka",
    desc: "プロフェッショナルネットワーク",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
    accentHover: "hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400",
  },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("soma.nova817@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="relative py-32 px-6 border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-t from-purple-600/15 via-blue-600/10 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        <ScrollReveal>
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs font-mono text-zinc-400 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              GET IN TOUCH
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Let&apos;s Create <span className="gradient-text">Together</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Webアプリケーション開発、プロジェクトの技術設計、登壇・共同開発・インターンシップ等、幅広く前向きにお話しさせていただけますと幸いです。
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 max-w-2xl mx-auto space-y-10 shadow-2xl backdrop-blur-2xl">
            {/* Direct Email with One-Click Copy */}
            <div className="space-y-4 pb-8 border-b border-white/5 text-center">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Direct Email Contact
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="mailto:soma.nova817@gmail.com"
                  className="text-lg sm:text-2xl font-bold text-white hover:text-cyan-400 transition-colors break-all"
                >
                  soma.nova817@gmail.com
                </a>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 transition-all flex items-center gap-1.5 shrink-0 active:scale-95"
                  title="クリックしてメールアドレスをコピー"
                >
                  <span>{copied ? "コピー完了！" : "アドレスをコピー"}</span>
                  <span className="text-zinc-400">{copied ? "✓" : "📋"}</span>
                </button>
              </div>
              <p className="text-[11px] text-zinc-500 font-mono">
                通常24〜48時間以内にご返信いたします
              </p>
            </div>

            {/* Social Links Cards */}
            <div className="space-y-4">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider text-center">
                Connect on Social &amp; Networks
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-zinc-300 transition-all duration-300 hover:scale-[1.02] ${item.accentHover}`}
                  >
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white shrink-0 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1 text-left">
                      <div className="text-sm font-bold text-white flex items-center justify-between">
                        <span>{item.name}</span>
                        <span className="text-zinc-500 group-hover:text-cyan-400 transition-colors text-xs">↗</span>
                      </div>
                      <div className="text-xs font-mono text-zinc-400 truncate">{item.handle}</div>
                      <div className="text-[10px] text-zinc-500 mt-0.5">{item.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer Area with Back to Top Button */}
        <ScrollReveal delay={250}>
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
            <div>
              &copy; 2026 Soma Matsuoka. Crafted with Next.js 16 &amp; React 19.
            </div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer group"
            >
              <span>Back to Top</span>
              <span className="group-hover:-translate-y-0.5 transition-transform">↑</span>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
