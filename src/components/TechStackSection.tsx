import ScrollReveal from "./ScrollReveal";

const techCategories = [
  {
    name: "Frontend & Web Architecture",
    badge: "Core Expertise",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    description: "高速なSPA / PWA開発と保守性の高いコンポーネント設計",
    items: [
      {
        name: "React 19 / Hooks / Suspense",
        level: "Production",
        desc: "React 19の最新機能、Hooksによる状態分離、SuspenseとReact.lazyによる14画面コードスプリッティングの実践運用。",
      },
      {
        name: "Next.js (App Router / Turbopack)",
        level: "Production",
        desc: "SSG/SSR、SEOメタデータ最適化、OGP、Turbopackによる高速ビルドパイプラインの構築。",
      },
      {
        name: "TypeScript",
        level: "Intermediate",
        desc: "厳格な型安全性の確保、APIレスポンスの型定義、堅牢なインターフェース設計。",
      },
      {
        name: "PWA / Service Worker",
        level: "Advanced",
        desc: "オフラインキャッシュ、Web App Manifestによるホーム画面追加・全画面アプリ起動の実装。",
      },
    ],
  },
  {
    name: "Styling & UI/UX Design",
    badge: "Design Systems",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    description: "モバイルファーストな操作感と洗練されたモダンUI",
    items: [
      {
        name: "Tailwind CSS v4",
        level: "Advanced",
        desc: "最新のv4エンジン、CSS変数連携、グラスモーフィズム、ダークモード特化デザインの構築。",
      },
      {
        name: "Mobile UX & Accessibility",
        level: "Advanced",
        desc: "親指操作エリアを考慮したドロワーメニュー、直感的なモーダル設計、スムーズなページ内導線。",
      },
      {
        name: "Interactive SVG & Canvas",
        level: "Intermediate",
        desc: "校内フロアマップのベクター描画・座標紐付け、軽量パーティクルアニメーション制御。",
      },
      {
        name: "Micro-Interactions",
        level: "Intermediate",
        desc: "違和感のないフィードバックアニメーション、スケルトンスクリーン、スクロール連動演出。",
      },
    ],
  },
  {
    name: "Backend, DevOps & Tooling",
    badge: "Cost-Effective Serverless",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    description: "既存資産と工夫で制約を凌駕するサーバーレスAPIと自動化",
    items: [
      {
        name: "Google Apps Script (GAS)",
        level: "Production",
        desc: "スプレッドシート連携による高効率APIエンドポイント構築。リアルタイム投票・緊急お知らせ配信。",
      },
      {
        name: "Vite & Modern Bundlers",
        level: "Advanced",
        desc: "高速HMR、アセット最適化、チャンク分割によるモバイル環境での初期ロード高速化。",
      },
      {
        name: "Git & GitHub Workflow",
        level: "Intermediate",
        desc: "チーム開発でのブランチ運用、コミット履歴の整理、バージョン管理。",
      },
      {
        name: "Performance & Compression",
        level: "Advanced",
        desc: "画像最適化、LocalStorageクライアントキャッシュ、多段フォールバック設計による耐障害性担保。",
      },
    ],
  },
];

export default function TechStackSection() {
  return (
    <section id="tech" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-blue-400 tracking-widest font-bold">
              03
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-500/20 via-white/10 to-transparent" />
          </div>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-xl leading-relaxed">
            プロダクト開発・探究活動で実践投入している技術スタックとアーキテクチャ基盤
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-6">
          {techCategories.map((cat, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 border border-white/5 h-full flex flex-col group hover:border-white/20 transition-all duration-300">
                <div className="border-b border-white/10 pb-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${cat.badgeColor}`}>
                      {cat.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">{cat.name}</h3>
                  <p className="text-xs text-zinc-400 leading-snug">{cat.description}</p>
                </div>

                <div className="space-y-3.5 flex-1">
                  {cat.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="tech-badge p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5 hover:bg-white/[0.04] transition-all"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-white font-bold text-sm tracking-tight">{item.name}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-cyan-300 border border-blue-500/20 shrink-0">
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
