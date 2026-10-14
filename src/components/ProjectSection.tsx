"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const projectHighlights = [
  {
    category: "Architecture & Performance",
    title: "React 19 × Vite × コードスプリッティング",
    desc: "12以上の全画面を React.lazy / Suspense で分割ロード。モバイル環境・低速回線でもファーストビューを高速表示させ、快適なUXを実現。",
    badges: ["React 19", "Vite", "Code Splitting", "Suspense"]
  },
  {
    category: "PWA & Offline Ready",
    title: "PWA対応によるアプリライクな体験",
    desc: "Service WorkerとWeb App Manifestの実装により、ホーム画面への追加・全画面アプリ起動・キャッシュによる快適な回覧をサポート。",
    badges: ["Service Worker", "PWA Manifest", "Cache Strategy"]
  },
  {
    category: "Interactive Features",
    title: "SVG校内マップ & スタンプラリー & お気に入り",
    desc: "階層ごとのSVG校内詳細マップ、LocalStorageを活用したお気に入り企画管理、来場者が回遊しやすいスタンプラリーシステムを独自設計。",
    badges: ["Interactive SVG", "LocalStorage", "Client State"]
  },
  {
    category: "Real-time & Low Cost Integration",
    title: "Google Apps Script (GAS) 連携による混雑度・最新情報配信",
    desc: "サーバーコストをゼロに抑えつつ、Googleスプレッドシート×GASをバックエンドAPIとして活用。混雑度投票・落とし物・最新お知らせをリアルタイム同期。",
    badges: ["GAS API", "Spreadsheet DB", "Real-time Poll"]
  }
];

const featuresList = [
  { name: "企画・催し物一覧", desc: "カテゴリー・場所別の絞り込み・検索・詳細モーダル表示" },
  { name: "タイムテーブル", desc: "野外・屋内ステージの進行状況を時系列で直感的に確認" },
  { name: "インタラクティブマップ", desc: "各棟・フロアの配置と企画場所をSVGマップ上でピンポイント表示" },
  { name: "混雑度投票システム", desc: "来場者参加型の混雑状況共有システム（GASリアルタイム集計）" },
  { name: "スタンプラリー", desc: "校内各所に配置されたスタンプを集めるゲーミフィケーション機能" },
  { name: "お気に入り企画保存", desc: "回りたい企画をブックマークしてパーソナライズされたスケジュールを作成" },
  { name: "交通アクセス & 注意事項", desc: "スクールバス時刻表・重要なお願い（駐車禁止等）の明瞭な誘導" },
  { name: "落とし物・FAQ・協賛", desc: "運営側のリアルタイム更新に対応した安心のサポート情報" }
];

export default function ProjectSection() {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "leadership">("overview");

  return (
    <section id="project" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-cyan-400 tracking-widest">
              02
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Featured <span className="gradient-text">Project</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          <p className="text-zinc-400 text-sm mt-3">
            開発責任者として構想・設計から実装・運用まで主導した主力プロダクトのケーススタディ
          </p>
        </ScrollReveal>

        {/* Main Card */}
        <ScrollReveal delay={100}>
          <div className="glass rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-600/15 via-purple-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
              {/* Header Badge & Title */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  滝学園 創立100周年記念 文化祭公式アプリ
                </div>
                <div className="text-xs font-mono text-zinc-500">
                  Role: 開発責任者 / Lead Architect & Developer
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  滝学園 長月祭 公式Webアプリ
                </h3>
                <p className="text-base sm:text-lg text-zinc-300 font-medium mt-2">
                  テーマ: <span className="text-white font-bold">「Next Prologue」</span> — 100年の歴史を受け継ぎ、次の未来へ繋ぐデジタル体験
                </p>
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b border-white/10 gap-6 text-sm">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`pb-3 font-semibold transition-all relative ${
                    activeTab === "overview"
                      ? "text-cyan-400 border-b-2 border-cyan-400"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  概要と背景
                </button>
                <button
                  onClick={() => setActiveTab("architecture")}
                  className={`pb-3 font-semibold transition-all relative ${
                    activeTab === "architecture"
                      ? "text-cyan-400 border-b-2 border-cyan-400"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  技術選定 & アーキテクチャ
                </button>
                <button
                  onClick={() => setActiveTab("leadership")}
                  className={`pb-3 font-semibold transition-all relative ${
                    activeTab === "leadership"
                      ? "text-cyan-400 border-b-2 border-cyan-400"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  開発責任者としての工夫・成果
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === "overview" && (
                <div className="space-y-6 text-zinc-300 text-sm leading-relaxed animate-fade-in-up">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="glass rounded-2xl p-6 border border-white/5 space-y-2">
                      <div className="text-blue-400 font-bold text-xs uppercase tracking-wider">課題</div>
                      <h4 className="text-white font-bold text-base">紙パンフレットの限界</h4>
                      <p className="text-zinc-400 text-xs leading-relaxed">
                        大量の印刷コスト、当日発生する企画変更やタイムテーブルのズレの即時周知不可、落とし物や混雑情報の非効率な案内。
                      </p>
                    </div>

                    <div className="glass rounded-2xl p-6 border border-white/5 space-y-2">
                      <div className="text-purple-400 font-bold text-xs uppercase tracking-wider">解決策</div>
                      <h4 className="text-white font-bold text-base">PWA対応Webアプリ構築</h4>
                      <p className="text-zinc-400 text-xs leading-relaxed">
                        ストアインストール不要でQRコードから即時起動。リアルタイム更新・校内マップ・混雑度共有などをワンストップ提供。
                      </p>
                    </div>

                    <div className="glass rounded-2xl p-6 border border-white/5 space-y-2">
                      <div className="text-cyan-400 font-bold text-xs uppercase tracking-wider">ターゲット</div>
                      <h4 className="text-white font-bold text-base">来場者・生徒・保護者</h4>
                      <p className="text-zinc-400 text-xs leading-relaxed">
                        スマホ操作に不慣れな一般来場者から生徒まで、老若男女誰でも迷わず直感的に使えるUI/UXを徹底追及。
                      </p>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                    <h4 className="text-white font-bold text-base">実装された主要機能</h4>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                      {featuresList.map((item, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                          <div className="text-white font-semibold text-xs">{item.name}</div>
                          <div className="text-zinc-400 text-[11px] mt-1 leading-snug">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "architecture" && (
                <div className="space-y-6 text-zinc-300 text-sm leading-relaxed animate-fade-in-up">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {projectHighlights.map((hl, idx) => (
                      <div key={idx} className="glass rounded-2xl p-6 border border-white/5 space-y-3">
                        <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">{hl.category}</div>
                        <h4 className="text-white font-bold text-base">{hl.title}</h4>
                        <p className="text-zinc-400 text-xs leading-relaxed">{hl.desc}</p>
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {hl.badges.map((b, bIdx) => (
                            <span key={bIdx} className="px-2 py-0.5 rounded-md bg-white/[0.05] text-[10px] font-mono text-zinc-300">
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "leadership" && (
                <div className="space-y-6 text-zinc-300 text-sm leading-relaxed animate-fade-in-up">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="glass rounded-2xl p-6 border border-white/5 space-y-2">
                      <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider">チーム統括・折衝</div>
                      <h4 className="text-white font-bold text-base">実行委員会との円滑な連携</h4>
                      <p className="text-zinc-400 text-xs leading-relaxed">
                        先進技術研究部と文化祭実行委員会、学校教員の間に入り、仕様要件の策定・スケジュール管理・テスト運用を主導。
                      </p>
                    </div>

                    <div className="glass rounded-2xl p-6 border border-white/5 space-y-2">
                      <div className="text-amber-400 font-bold text-xs uppercase tracking-wider">運用の省力化</div>
                      <h4 className="text-white font-bold text-base">ノンエンジニア運用設計</h4>
                      <p className="text-zinc-400 text-xs leading-relaxed">
                        お知らせや落とし物情報を実行委員がGoogleフォームやスプレッドシートに入力するだけで、アプリ側に即時反映される運用パイプラインを構築。
                      </p>
                    </div>

                    <div className="glass rounded-2xl p-6 border border-white/5 space-y-2">
                      <div className="text-rose-400 font-bold text-xs uppercase tracking-wider">危機管理 & アクセス配慮</div>
                      <h4 className="text-white font-bold text-base">交通誘導・近隣対策</h4>
                      <p className="text-zinc-400 text-xs leading-relaxed">
                        商業施設駐車禁止の警告アラートやスクールバス時刻表を全画面・トップ最前面で強調表示し、地域社会への配慮もアプリで解決。
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

