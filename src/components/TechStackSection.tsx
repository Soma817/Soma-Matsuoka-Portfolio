import ScrollReveal from "./ScrollReveal";

const techCategories = [
  {
    name: "Frontend & Frameworks",
    items: [
      { name: "React 19 / React Router", level: "Production", desc: "最新React機能・Hooks・Context API・Suspenseを活用したSPA/PWA構築" },
      { name: "Next.js (App Router)", level: "Production", desc: "SSG/SSR・SEO最適化・TypeScript統合によるモダンWeb開発" },
      { name: "TypeScript", level: "Intermediate", desc: "型安全なコンポーネント設計・インターフェース定義" },
      { name: "HTML5 / PWA", level: "Advanced", desc: "Service Workerキャッシュ・Manifest・オフライン配慮のWeb体験" },
    ]
  },
  {
    name: "Styling & UI Design",
    items: [
      { name: "Tailwind CSS v4", level: "Advanced", desc: "最新ユーティリティクラス・カスタムテーマ設計・レスポンシブデザイン" },
      { name: "Lucide Icons", level: "Advanced", desc: "直感的で洗練されたUIアイコン設計" },
      { name: "UI/UX & Mobile First", level: "Advanced", desc: "スマートフォンを主眼に置いたタッチ操作・ドロワー・モーダル設計" },
      { name: "SVG & Vector Graphics", level: "Intermediate", desc: "校内フロアマップ等のSVG座標・インタラクティブレンダリング" },
    ]
  },
  {
    name: "Backend, Tools & DevOps",
    items: [
      { name: "Google Apps Script (GAS)", level: "Production", desc: "スプレッドシート連携によるゼロコストAPIサーバー・Webhook構築" },
      { name: "Vite", level: "Advanced", desc: "高速ビルド・HMR・バンドル最適化・コードスプリッティング" },
      { name: "Git / GitHub", level: "Intermediate", desc: "バージョン管理・コミット運用" },
      { name: "Performance Optimization", level: "Advanced", desc: "画像最適化(browser-image-compression)・遅延ロード" },
    ]
  }
];

export default function TechStackSection() {
  return (
    <section id="tech" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-blue-400 tracking-widest">
              03
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          <p className="text-zinc-400 text-sm mt-3">
            プロダクト開発・探究活動で使用している技術スタックとツール群
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {techCategories.map((cat, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="glass rounded-3xl p-6 sm:p-8 space-y-6 border border-white/5 h-full flex flex-col">
                <div className="border-b border-white/10 pb-4">
                  <h3 className="text-lg font-bold text-white tracking-wide">{cat.name}</h3>
                </div>

                <div className="space-y-4 flex-1">
                  {cat.items.map((item, iIdx) => (
                    <div key={iIdx} className="tech-badge p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold text-sm">{item.name}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                          {item.level}
                        </span>
                      </div>
                      <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

