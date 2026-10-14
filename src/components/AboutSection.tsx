import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs font-mono text-purple-400 tracking-widest">
              01
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Profile */}
          <ScrollReveal delay={100}>
            <div className="glass rounded-3xl p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-black text-white shadow-lg">
                  SM
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">松岡 奏磨</h3>
                  <p className="text-sm text-zinc-400">Soma Matsuoka</p>
                </div>
              </div>

              <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
                <p>
                  滝学園 高校2年。先進技術研究部 部長として、部活動でのプロジェクトリードと技術指導を担当。
                </p>
                <p>
                  2026年の創立100周年記念 長月祭（文化祭）において、公式Webアプリの
                  <strong className="text-white">開発責任者</strong>
                  を務めました。企画段階からリリース・運用まで一貫して携わり、来場者の体験を最大化するプロダクトを設計・構築しました。
                </p>
                <p>
                  フロントエンド開発を中心に、UI/UXデザイン、パフォーマンス最適化、PWA対応など、Webアプリ開発の幅広い領域に取り組んでいます。
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Highlights */}
          <ScrollReveal delay={200}>
            <div className="space-y-4">
              {[
                {
                  icon: "🏫",
                  title: "滝学園 先進技術研究部",
                  desc: "部長として技術研究・プロジェクト推進をリード",
                },
                {
                  icon: "🎪",
                  title: "長月祭 Webアプリ開発責任者",
                  desc: "創立100周年記念の公式Webアプリを企画〜運用まで統括",
                },
                {
                  icon: "⚡",
                  title: "フルスタック Web 開発",
                  desc: "React / Next.js / Vite / Tailwind CSS / PWA",
                },
                {
                  icon: "🎨",
                  title: "UI/UX デザイン",
                  desc: "ユーザー体験を最優先に考えたインターフェース設計",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group glass rounded-2xl p-5 flex items-start gap-4 hover:bg-white/[0.06] transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="text-2xl shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">
                      {item.title}
                    </h4>
                    <p className="text-zinc-400 text-xs mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

