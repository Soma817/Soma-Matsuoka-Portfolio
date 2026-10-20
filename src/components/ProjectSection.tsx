"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const projectHighlights = [
  {
    category: "Architecture & Performance",
    title: "React 19 × Vite × コードスプリッティング",
    desc: "14画面すべてを React.lazy / Suspense でルート分割ロード。モバイル環境・低速回線でもファーストビューを高速表示させ、快適なUXを実現。",
    badges: ["React 19", "Vite", "Code Splitting", "Suspense", "ESBuild"],
  },
  {
    category: "Robustness & Cache Strategy",
    title: "多段フォールバック & 耐障害性アーキテクチャ",
    desc: "GAS API → LocalStorageキャッシュ → 静的 data.json へとフェイルオーバーする多重セーフティネットを構築。回線障害時にも白画面化を防ぐエラーバウンダリを完備。",
    badges: ["Multi-tier Fallback", "Error Boundary", "Storage Cache", "Offline Resilience"],
  },
  {
    category: "PWA & Seamless Navigation",
    title: "PWA対応 & モバイルファーストUI",
    desc: "Web App ManifestとService Workerを活用し、ホーム画面追加から全画面起動に対応。サイトマップドロワーやスクロール復元などネイティブアプリに匹敵する軽快な操作感を設計。",
    badges: ["PWA Manifest", "Service Worker", "Mobile Drawer", "Scroll Restoration"],
  },
  {
    category: "Real-time & High Efficiency",
    title: "GAS連携によるリアルタイム配信 (高効率・低負荷)",
    desc: "追加インフラ負荷を抑えつつ、Googleスプレッドシート×GASをバックエンドAPIとして活用。混雑度投票・緊急お知らせ・落とし物・FAQをリアルタイム同期。",
    badges: ["GAS API", "Spreadsheet DB", "Real-time Poll", "Cost-Effective"],
  },
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
  { name: "長月祭・生徒会・開発陣紹介", desc: "100周年の歴史、校長・生徒会長・開発責任者挨拶と体制公開" },
];

export default function ProjectSection() {
  const [activeTab, setActiveTab] = useState<"overview" | "case_study" | "architecture" | "leadership">("overview");

  return (
    <section id="project" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-cyan-400 tracking-widest font-bold">
              02
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Featured <span className="gradient-text">Project</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/20 via-white/10 to-transparent" />
          </div>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
            開発責任者として構想・設計から実装・当日運用まで主導した主力プロダクトの完全ケーススタディ
          </p>
        </ScrollReveal>

        {/* Main Showcase Container */}
        <ScrollReveal delay={100}>
          <div className="glass-card rounded-3xl p-6 sm:p-10 md:p-12 border border-white/10 relative overflow-hidden shadow-2xl space-y-10">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-600/15 via-purple-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Header Badge & Title */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                滝学園 創立100周年記念 文化祭公式アプリ
              </div>
              <div className="text-xs font-mono text-zinc-400 bg-white/[0.03] px-3 py-1 rounded-full border border-white/5">
                Role: 開発責任者 / 先進技術研究部 部長 (7名体制)
              </div>
            </div>

            {/* Title & Live App CTA */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/5">
              <div className="flex items-start sm:items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-100th.svg"
                  alt="滝学園100周年ロゴ"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain shrink-0 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 shadow-lg"
                />
                <div>
                  <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                    滝学園 長月祭 公式Webアプリ
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 font-medium mt-1">
                    テーマ: <span className="text-white font-bold">「Next Prologue」</span> — 100年の伝統を受け継ぎ、次の未来へ繋ぐデジタル体験
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href="https://www.taki-hj.ac.jp/students_works/nagatsuki_fes_2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <span>本番公開アプリを開く</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </div>

            {/* Executive Summary & Metrics */}
            <div className="space-y-6">
              <div className="max-w-3xl space-y-3">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  Executive Summary
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  数千人の来場者が当日同時利用したPWAプロダクト
                </h4>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  従来の紙パンフレットでは不可能だった「リアルタイムのタイムテーブル変更通知」「参加型混雑度投票」「校内インタラクティブSVGマップ」をワンストップで提供。
                  電波の届きにくい校内環境でも白画面にならない多段フォールバック設計により、2日間の本番運用をゼロダウンタイムで完走しました。
                </p>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                  <div className="text-3xl font-black text-cyan-400 font-mono">100th</div>
                  <div className="text-xs text-zinc-400 mt-1">創立100周年記念</div>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                  <div className="text-3xl font-black text-blue-400 font-mono">14+</div>
                  <div className="text-xs text-zinc-400 mt-1">実装画面・機能群</div>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                  <div className="text-3xl font-black text-purple-400 font-mono">7名</div>
                  <div className="text-xs text-zinc-400 mt-1">開発チーム統括</div>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                  <div className="text-3xl font-black text-emerald-400 font-mono">100%</div>
                  <div className="text-xs text-zinc-400 mt-1">当日稼働率 (無停止)</div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-white/10 gap-2 sm:gap-6 text-xs sm:text-sm overflow-x-auto pb-1 scrollbar-none pt-4">
              <button
                onClick={() => setActiveTab("overview")}
                className={`pb-3 px-1 font-semibold transition-all relative shrink-0 ${
                  activeTab === "overview"
                    ? "text-cyan-400 border-b-2 border-cyan-400"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                概要と背景
              </button>
              <button
                onClick={() => setActiveTab("case_study")}
                className={`pb-3 px-1 font-semibold transition-all relative shrink-0 flex items-center gap-1.5 ${
                  activeTab === "case_study"
                    ? "text-cyan-400 border-b-2 border-cyan-400"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                プロジェクト詳細分析 (7ステップ)
              </button>
              <button
                onClick={() => setActiveTab("architecture")}
                className={`pb-3 px-1 font-semibold transition-all relative shrink-0 ${
                  activeTab === "architecture"
                    ? "text-cyan-400 border-b-2 border-cyan-400"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                アーキテクチャ図 &amp; 技術選定
              </button>
              <button
                onClick={() => setActiveTab("leadership")}
                className={`pb-3 px-1 font-semibold transition-all relative shrink-0 ${
                  activeTab === "leadership"
                    ? "text-cyan-400 border-b-2 border-cyan-400"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                開発責任者としての工夫・成果
              </button>
            </div>

            {/* Tab 1: Overview */}
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
                      <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="text-white font-semibold text-xs">{item.name}</div>
                        <div className="text-zinc-400 text-[11px] mt-1 leading-snug">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: 7-Step Case Study */}
            {activeTab === "case_study" && (
              <div className="space-y-6 text-zinc-300 text-sm leading-relaxed animate-fade-in-up">
                {/* Step 1: Overview */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold">
                      01
                    </span>
                    <h4 className="text-lg font-bold text-white tracking-wide">
                      Overview <span className="text-zinc-400 font-normal">― 概要</span>
                    </h4>
                  </div>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed pt-1">
                    滝学園創立100周年記念「長月祭」のために制作された、全校生徒および数千名の来場者が利用する公式Webアプリケーションです。従来の紙パンフレットが抱えていた「当日急な雨天等によるタイムテーブル変更の伝達遅延」「混雑や落とし物情報の把握の難しさ」という課題を、端末に縛られずQRコードから即時アクセス可能なPWA型Webアプリによって解決しました。
                  </p>
                </div>

                {/* Step 2: Problem */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 relative overflow-hidden group hover:border-rose-500/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-rose-500/10 text-rose-400 border border-rose-500/20 font-bold">
                      02
                    </span>
                    <h4 className="text-lg font-bold text-white tracking-wide">
                      Problem <span className="text-zinc-400 font-normal">― 課題</span>
                    </h4>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4 pt-1">
                    <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 space-y-1.5">
                      <div className="text-rose-300 font-semibold text-xs">① 情報の即時更新が不可能</div>
                      <p className="text-zinc-400 text-xs leading-relaxed">
                        紙冊子では印刷後のタイムテーブル変更や緊急告知、落とし物の速報を来場者へリアルタイムに周知することができませんでした。
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 space-y-1.5">
                      <div className="text-amber-300 font-semibold text-xs">② 既存資産を活用するインフラ制約</div>
                      <p className="text-zinc-400 text-xs leading-relaxed">
                        部活動・学校行事の環境下で、新たな有償クラウド基盤を増設せず、学校サーバーや既存資産を活かして数千人のアクセスに耐えうる設計が求められました。
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 space-y-1.5">
                      <div className="text-blue-300 font-semibold text-xs">③ 劣悪な回線環境への耐性</div>
                      <p className="text-zinc-400 text-xs leading-relaxed">
                        校内全域に数千人が密集してキャリア回線が混雑しても、白画面にならず地図や企画情報を即時参照できる耐障害性が必要でした。
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3: Role */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 relative overflow-hidden group hover:border-purple-500/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20 font-bold">
                      03
                    </span>
                    <h4 className="text-lg font-bold text-white tracking-wide">
                      Role <span className="text-zinc-400 font-normal">― 担当範囲</span>
                    </h4>
                  </div>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed pt-1">
                    先進技術研究部 部長として7名の開発チームを率いる<strong className="text-white">開発責任者</strong>として参画。
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3 pt-1 text-xs">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                      <span className="text-purple-300 font-bold">企画・折衝・要件定義</span>
                      <p className="text-zinc-400">学校教職員・生徒会・文化祭実行委員会との仕様協議、ロードマップ策定、チームタスク配分</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                      <span className="text-cyan-300 font-bold">システム設計 &amp; コア実装</span>
                      <p className="text-zinc-400">React 19/Vite環境設計、多段フォールバック層、GAS APIエンドポイント設計、PWA設定</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                      <span className="text-emerald-300 font-bold">UI/UX・当日運用統括</span>
                      <p className="text-zinc-400">モバイルファーストなデザイン設計、ノンエンジニア向け入力シート構築、当日の障害監視</p>
                    </div>
                  </div>
                </div>

                {/* Step 4: Architecture Summary */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold">
                        04
                      </span>
                      <h4 className="text-lg font-bold text-white tracking-wide">
                        Architecture <span className="text-zinc-400 font-normal">― 技術構成</span>
                      </h4>
                    </div>
                    <button
                      onClick={() => setActiveTab("architecture")}
                      className="text-xs text-cyan-400 hover:text-cyan-300 underline font-mono flex items-center gap-1"
                    >
                      詳細なアーキテクチャ図タブを見る ↗
                    </button>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                      <div className="font-bold text-blue-300 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                        フロントエンド &amp; クライアント
                      </div>
                      <p className="text-zinc-300">
                        <strong>React 19 + TypeScript + Vite:</strong> 14画面を完全コードスプリッティング。Tailwind CSSによる徹底したモバイルファーストUI。Service WorkerとPWAによるネイティブライクな体感速度。
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                      <div className="font-bold text-emerald-300 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        バックエンド &amp; データパイプライン
                      </div>
                      <p className="text-zinc-300">
                        <strong>Google Apps Script (GAS) + スプレッドシート:</strong> 既存リソースを最大活用したサーバーレス運用。静的バンドル(data.json) + 動的API + LocalStorageの3層耐障害データフロー。
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 5: Engineering */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 relative overflow-hidden group hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">
                      05
                    </span>
                    <h4 className="text-lg font-bold text-white tracking-wide">
                      Engineering <span className="text-zinc-400 font-normal">― 技術的な工夫</span>
                    </h4>
                  </div>
                  <div className="space-y-3 pt-1 text-xs sm:text-sm">
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                      <div className="font-bold text-white flex items-center gap-2 text-xs">
                        <span className="text-cyan-400">◆</span> 混雑環境でも白画面にならない「3段フォールバック設計」
                      </div>
                      <p className="text-zinc-400 text-xs leading-relaxed">
                        通信エラーやGASのクォータ上限に直面しても、ビルド時の静的JSONデータとLocalStorageキャッシュへ自動降格し、閲覧を一切途切れさせないフェイルセーフを構築しました。
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                      <div className="font-bold text-white flex items-center gap-2 text-xs">
                        <span className="text-cyan-400">◆</span> ノンエンジニア実行委員への運用パイプライン設計
                      </div>
                      <p className="text-zinc-400 text-xs leading-relaxed">
                        落とし物や緊急告知は、教員や実行委員が使い慣れたGoogleスプレッドシート/GoogleフォームをトリガーにGASが即座にAPI配信するパイプラインを設計。エンジニアの手を介さず現場完結のリアルタイム運用を実現しました。
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                      <div className="font-bold text-white flex items-center gap-2 text-xs">
                        <span className="text-cyan-400">◆</span> 近隣地域への配慮と安全対策のUI実装
                      </div>
                      <p className="text-zinc-400 text-xs leading-relaxed">
                        近隣商業施設への無断駐車対策として、スクールバス時刻表の目立つ配置と注意事項の強調アラートモーダルを導入し、地域と共生する文化祭運営に技術で貢献しました。
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 6: Results */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                      06
                    </span>
                    <h4 className="text-lg font-bold text-white tracking-wide">
                      Results <span className="text-zinc-400 font-normal">― 成果</span>
                    </h4>
                  </div>
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 pt-1">
                    <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-center">
                      <div className="text-2xl font-black text-emerald-400 font-mono">当日完遂</div>
                      <div className="text-xs text-zinc-300 font-bold mt-1">ゼロダウンタイム</div>
                      <div className="text-[11px] text-zinc-400 mt-1">障害による停止なしで2日間完走</div>
                    </div>
                    <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 text-center">
                      <div className="text-2xl font-black text-blue-400 font-mono">14+ 画面</div>
                      <div className="text-xs text-zinc-300 font-bold mt-1">フル機能リリース</div>
                      <div className="text-[11px] text-zinc-400 mt-1">マップ・混雑投票・落とし物等</div>
                    </div>
                    <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20 text-center">
                      <div className="text-2xl font-black text-purple-400 font-mono">7名</div>
                      <div className="text-xs text-zinc-300 font-bold mt-1">チーム統括完遂</div>
                      <div className="text-[11px] text-zinc-400 mt-1">タスク分担と品質管理の徹底</div>
                    </div>
                    <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-center">
                      <div className="text-2xl font-black text-cyan-400 font-mono">0 件</div>
                      <div className="text-xs text-zinc-300 font-bold mt-1">障害停止時間</div>
                      <div className="text-[11px] text-zinc-400 mt-1">多段フォールバックによる高可用性</div>
                    </div>
                  </div>
                </div>

                {/* Step 7: Links */}
                <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-blue-950/30 to-purple-950/30 border border-cyan-500/20 space-y-3 relative overflow-hidden">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold">
                      07
                    </span>
                    <h4 className="text-lg font-bold text-white tracking-wide">
                      Links <span className="text-zinc-400 font-normal">― 検証先</span>
                    </h4>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 pt-1">
                    <a
                      href="https://www.taki-hj.ac.jp/students_works/nagatsuki_fes_2026/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs shadow-lg transition-all"
                    >
                      <span>本番公開Webアプリ（滝学園公式ドメイン）</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://github.com/Soma817"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/10 hover:border-white/30 text-white font-semibold text-xs transition-all"
                    >
                      <span>開発者 GitHub (@Soma817)</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Architecture Diagram & Tech Deep Dive */}
            {activeTab === "architecture" && (
              <div className="space-y-8 text-zinc-300 text-sm leading-relaxed animate-fade-in-up">
                {/* Visual Architecture Diagram Box */}
                <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/70 border border-cyan-500/20 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                    <div>
                      <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-bold">
                        System Architecture Diagram
                      </div>
                      <h4 className="text-lg sm:text-xl font-black text-white mt-0.5">
                        システム構成図 &amp; データフロー
                      </h4>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      High-Efficiency &amp; High-Resilience
                    </span>
                  </div>

                  {/* Visual Component Flow */}
                  <div className="space-y-4">
                    {/* Diagram Row 1: Users & Operators */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 space-y-2">
                        <div className="flex items-center justify-between text-xs font-mono text-blue-400 font-bold">
                          <span>[CLIENT] 一般来場者 / 生徒 / 保護者</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10">Mobile PWA</span>
                        </div>
                        <div className="text-xs text-zinc-300">
                          スマートフォン(iOS/Android)のブラウザからQRコード経由で瞬時に起動。
                          <ul className="list-disc list-inside text-zinc-400 mt-1 text-[11px] space-y-0.5">
                            <li>企画検索・SVG校内マップ閲覧</li>
                            <li>ステージタイムテーブル確認</li>
                            <li>参加型混雑度投票の即時送信</li>
                            <li>お気に入り(My Favorite)の端末内保存</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20 space-y-2">
                        <div className="flex items-center justify-between text-xs font-mono text-purple-400 font-bold">
                          <span>[OPERATOR] 文化祭実行委員会 / 教職員</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10">Management</span>
                        </div>
                        <div className="text-xs text-zinc-300">
                          複雑な管理画面を使わず、日常ツールで現場運用完結。
                          <ul className="list-disc list-inside text-zinc-400 mt-1 text-[11px] space-y-0.5">
                            <li>Googleフォームから落とし物情報を即時報告</li>
                            <li>スプレッドシートで緊急お知らせ(is_emergency)の切替</li>
                            <li>野外ステージ等の雨天タイムテーブル調整</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Direction Arrow Down */}
                    <div className="flex items-center justify-center gap-2 text-zinc-500 py-1 font-mono text-xs">
                      <span>↓ HTTPS (Fetch / Service Worker Intercept)</span>
                    </div>

                    {/* Diagram Row 2: Frontend Layer (SPA + PWA) */}
                    <div className="p-5 rounded-xl bg-gradient-to-r from-blue-950/40 via-zinc-900/60 to-purple-950/40 border border-white/10 space-y-3">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                          Frontend Application Layer (滝学園Webサーバーホスト)
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                          React 19 + TypeScript + Vite + Tailwind CSS
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-1">
                          <div className="text-white font-semibold">React.lazy / Suspense</div>
                          <p className="text-zinc-400 text-[11px]">14画面のルート分割により初回バンドルサイズを極小化</p>
                        </div>
                        <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-1">
                          <div className="text-white font-semibold">Service Worker &amp; PWA</div>
                          <p className="text-zinc-400 text-[11px]">静的アセットを端末にキャッシュしオフライン・回線混雑に耐性</p>
                        </div>
                        <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-1">
                          <div className="text-white font-semibold">Interactive SVG Map</div>
                          <p className="text-zinc-400 text-[11px]">高解像度フロアマップのベクター描画とピンポイント企画紐付け</p>
                        </div>
                      </div>
                    </div>

                    {/* Direction Arrow Down with Failover Indicator */}
                    <div className="flex items-center justify-center gap-2 text-zinc-500 py-1 font-mono text-xs">
                      <span>↓ Data Fetching &amp; Fallback Pipeline (3-Tier Safety Net)</span>
                    </div>

                    {/* Diagram Row 3: Backend & Fallback Pipeline */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
                        <div className="flex items-center justify-between text-xs font-mono text-emerald-400 font-bold">
                          <span>Layer 1: GAS API</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10">Dynamic Live</span>
                        </div>
                        <p className="text-xs text-zinc-300">
                          <strong>Google Apps Script:</strong> Web APIとして動作し、スプレッドシート上の投票データ・緊急告知・落とし物JSONを即時レスポンス。サーバーレス構成。
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20 space-y-2">
                        <div className="flex items-center justify-between text-xs font-mono text-cyan-400 font-bold">
                          <span>Layer 2: LocalStorage</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10">Client Cache</span>
                        </div>
                        <p className="text-xs text-zinc-300">
                          <strong>ブラウザストレージ:</strong> 直近取得したAPIレスポンスをクライアント側に永続化。電波断絶時も直前のデータを維持し画面が真っ白になりません。
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/20 space-y-2">
                        <div className="flex items-center justify-between text-xs font-mono text-indigo-400 font-bold">
                          <span>Layer 3: data.json</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/10">Static Fallback</span>
                        </div>
                        <p className="text-xs text-zinc-300">
                          <strong>静的マスターJSON:</strong> ビルド時に内包された全企画・全タイムテーブルデータ。APIが万一ダウンしても完全な情報表示を担保。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Highlights Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {projectHighlights.map((hl, idx) => (
                    <div key={idx} className="glass-card rounded-2xl p-6 border border-white/5 space-y-3">
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

            {/* Tab 4: Leadership */}
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
                    <div className="text-rose-400 font-bold text-xs uppercase tracking-wider">危機管理 &amp; 地域配慮</div>
                    <h4 className="text-white font-bold text-base">交通誘導・近隣対策の徹底</h4>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      周辺商業施設駐車禁止の警告アラートやスクールバス時刻表を全画面・トップ最前面で強調表示し、地域社会への配慮もアプリで解決。
                    </p>
                  </div>
                </div>

                {/* Message Quote Box */}
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
        </ScrollReveal>
      </div>
    </section>
  );
}
