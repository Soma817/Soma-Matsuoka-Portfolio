"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const projectHighlights = [
  {
    category: "Architecture & Performance",
    title: "React 19 × Vite × コードスプリッティング",
    desc: "14画面すべてを React.lazy / Suspense で分割ロード。モバイル環境・低速回線でもファーストビューを高速表示させ、快適なUXを実現。",
    badges: ["React 19", "Vite", "Code Splitting", "Suspense", "Rolldown/ESBuild"]
  },
  {
    category: "Robustness & Cache Strategy",
    title: "多段フォールバック & 耐障害性アーキテクチャ",
    desc: "静的データ（data.json）→ GAS API → LocalStorage/SessionStorageキャッシュへとフォールバックする多重セーフティネットを構築。回線障害時にも白画面化を防ぐ独自エラーバウンダリを完備。",
    badges: ["Multi-tier Fallback", "Error Boundary", "Storage Cache", "Offline Resilience"]
  },
  {
    category: "PWA & Seamless Navigation",
    title: "PWA対応 & モバイルファーストUI",
    desc: "Web App ManifestとService Workerを活用し、ホーム画面追加から全画面起動に対応。サイトマップドロワーやスクロール復元など、ネイティブアプリに匹敵する軽快な操作感を設計。",
    badges: ["PWA Manifest", "Service Worker", "Mobile Drawer", "Scroll Restoration"]
  },
  {
    category: "Real-time & Zero Server Cost",
    title: "Google Apps Script (GAS) 連携によるリアルタイム配信",
    desc: "サーバーコストをゼロに抑えつつ、Googleスプレッドシート×GASをバックエンドAPIとして活用。混雑度投票・緊急お知らせ・落とし物・FAQをリアルタイム同期。",
    badges: ["GAS API", "Spreadsheet DB", "Real-time Poll", "Zero Server Cost"]
  }
];

const featuresList = [
  { name: "企画・催し物一覧", desc: "カテゴリー・場所別の絞り込み・検索・詳細モーダル表示" },
  { name: "タイムテーブル", desc: "野外・屋内ステージの進行状況を時系列で直感的に確認" },
  { name: "校内インタラクティブマップ", desc: "各棟・フロアの配置と企画場所をSVGマップ上でピンポイント表示" },
  { name: "参加型 混雑度投票", desc: "来場者が各会場の混雑状況を投稿・GAS即時反映するリアルタイムシステム" },
  { name: "デジタルスタンプラリー", desc: "校内各所に配置されたスタンプを集めるゲーミフィケーション機能" },
  { name: "My Favorite (お気に入り)", desc: "気になる企画をブックマークしてパーソナライズされた当日導線を作成" },
  { name: "リアルタイムお知らせ (緊急配信)", desc: "悪天候や変更時に最優先フラグ(is_emergency)で即時トップ告知" },
  { name: "交通アクセス & 注意事項", desc: "スクールバス時刻表・周辺商業施設駐車禁止の警告誘導" },
  { name: "落とし物速報システム", desc: "実行委員がスプレッドシート更新するだけで即時来場者に周知" },
  { name: "FAQ (よくある質問)", desc: "来場者の疑問をスムーズに解消するアコーディオン形式Q&A" },
  { name: "協賛企業・団体紹介", desc: "創立100周年を支えてくださった地域のスポンサー一覧ページ" },
  { name: "長月祭・生徒会・開発陣紹介", desc: "100周年の歴史、校長・生徒会長・開発責任者挨拶と体制公開" }
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
                <div className="text-xs font-mono text-zinc-400">
                  Role: 開発責任者 / 先進技術研究部 部長 (7名体制)
                </div>
              </div>

              {/* Title & Live App CTA */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-4 border-b border-white/5">
                <div className="flex items-start sm:items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo-100th.svg"
                    alt="滝学園100周年ロゴ"
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain shrink-0 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10"
                  />
                  <div>
                    <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                      滝学園 長月祭 公式Webアプリ
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-300 font-medium mt-1">
                      テーマ: <span className="text-white font-bold">「Next Prologue」</span> — 100年の歴史を受け継ぎ、次の未来へ繋ぐデジタル体験
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <a
                    href="https://www.taki-hj.ac.jp/students_works/nagatsuki_fes_2026/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-xs shadow-lg hover:shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    <span>実稼働アプリを開く</span>
                    <span className="text-xs">↗</span>
                  </a>
                </div>
              </div>

              {/* App Showcase Preview Card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/40">
                <div className="relative h-48 sm:h-64 w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/candidate-1.jpg"
                    alt="長月祭 Next Prologue メインビジュアル"
                    className="w-full h-full object-cover object-center filter brightness-[0.8] contrast-[1.05] hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <span className="px-2.5 py-1 rounded-md bg-blue-500/80 backdrop-blur-md text-white font-bold text-[11px] tracking-wider uppercase">
                        Production Live App
                      </span>
                      <p className="text-white font-bold text-base sm:text-lg mt-1 drop-shadow-md">
                        滝学園公式ドメインで一般公開・当日運用完遂
                      </p>
                    </div>
                    <div className="text-right font-mono text-[11px] text-zinc-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      taki-hj.ac.jp/students_works/nagatsuki_fes_2026/
                    </div>
                  </div>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5 border-t border-white/10 bg-white/[0.02]">
                  <div className="p-4 text-center">
                    <div className="text-2xl font-black text-cyan-400 font-mono">100th</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">滝学園創立記念</div>
                  </div>
                  <div className="p-4 text-center">
                    <div className="text-2xl font-black text-blue-400 font-mono">14+</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">実装画面・機能群</div>
                  </div>
                  <div className="p-4 text-center">
                    <div className="text-2xl font-black text-purple-400 font-mono">7名</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">先進技術研究部開発陣</div>
                  </div>
                  <div className="p-4 text-center">
                    <div className="text-2xl font-black text-emerald-400 font-mono">0円</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">GAS活用・運用インフラ費</div>
                  </div>
                </div>
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
                      <h4 className="text-white font-bold text-base">実行委員会・教員との円滑な連携</h4>
                      <p className="text-zinc-400 text-xs leading-relaxed">
                        先進技術研究部の開発陣（7名）と生徒会・文化祭実行委員会・教職員の間に入り、仕様要件の策定・スケジュール管理・テスト運用を主導。
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
                      <div className="text-rose-400 font-bold text-xs uppercase tracking-wider">危機管理 & 地域配慮</div>
                      <h4 className="text-white font-bold text-base">交通誘導・近隣対策の徹底</h4>
                      <p className="text-zinc-400 text-xs leading-relaxed">
                        周辺商業施設駐車禁止の警告アラートやスクールバス時刻表を全画面・トップ最前面で強調表示し、地域社会への配慮もアプリで解決。
                      </p>
                    </div>
                  </div>

                  {/* Message from Lead Developer Quote Box */}
                  <div className="rounded-2xl bg-gradient-to-br from-blue-950/40 via-purple-950/30 to-zinc-950/50 border border-blue-500/20 p-6 sm:p-8 space-y-4">
                    <div className="flex items-center gap-3 text-cyan-400">
                      <span className="text-lg">💬</span>
                      <h4 className="text-white font-bold text-base">開発責任者メッセージ（公式Webアプリ ABOUTより）</h4>
                    </div>
                    <blockquote className="text-xs sm:text-sm text-zinc-300 leading-relaxed border-l-2 border-cyan-400/50 pl-4 italic">
                      「制作過程には想定外の課題も多々あり、試行錯誤を重ねました。次々に出てくる問題に苦しみながらも、7人で意見を出し合い一つ一つ壁を乗り越えていく瞬間は、私にとっては喜びと達成感に満ちていました。
                      先輩方が築いてこられた100年という伝統を受け継ぎながら、技術という新たな可能性を未来へと繋いでいく。この一大プロジェクトに関われたことは、私の大きな財産になりました。」
                    </blockquote>
                    <div className="text-right text-xs font-mono text-zinc-400">
                      長月祭Webアプリ開発責任者 / 先進技術研究部 部長 高校2年 松岡 奏磨
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

