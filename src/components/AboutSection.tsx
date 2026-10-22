import Image from "next/image";
import profileIcon from "@/app/icon.png";
import ScrollReveal from "./ScrollReveal";

const timelineEvents = [
  {
    period: "2009.08",
    title: "愛知県生まれ",
    badge: "Origin",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    description: "滝学園 高校2年生。",
    highlights: ["好奇心とものづくりへの関心の原点"],
  },
  {
    period: "2022.04 - 2025.03",
    title: "滝学園 先進技術研究部 入部・ドローン探究",
    badge: "Hardware & Safety",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    description:
      "中学3年間、ドローンの空撮制御技術、機体構造、航空法規および安全運用の研究に従事。テクノロジーを社会に安全に適合させるルールと運用プロセスの重要性を実践から学ぶ。",
    highlights: [
      "航空法規・安全運用の徹底理解",
      "機体制御と撮影アングルの探究",
      "チームでの技術発表と知見蓄積",
    ],
  },
  {
    period: "2025.04",
    title: "高校進学・ソフトウェア開発へ軸足を移行",
    badge: "Software Exploration",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    description:
      "高校進学を機に本格的なプログラミングを開始。AI・データサイエンス・サイバーセキュリティなど先端IT領域を横断的に学習し、課題解決に直結するWebテクノロジーの力に魅了される。",
    highlights: [
      "先端AI/LLM活用とデータ解析",
      "Web標準規格・ネットワークプロトコルの基礎固め",
      "アルゴリズムと型システムの学習",
    ],
  },
  {
    period: "2026.04 - Present",
    title: "先進技術研究部 部長就任・フルスタック開発",
    badge: "Full-Stack & Lead",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    description:
      "先進技術研究部 部長に就任。React 19 / Next.js / TypeScriptを中心とするモダンWebスタックに注力。滝学園100周年記念「長月祭 公式Webアプリ」の開発責任者として、要件折衝からアーキテクチャ設計・運用まで7名体制を牽引。",
    highlights: [
      "React 19 / Vite / PWAアーキテクチャの確立",
      "GAS × スプレッドシート連携による高可用性API設計",
      "7名チームのタスク配分・品質管理・生徒会折衝",
    ],
  },
];

const philosophy = [
  {
    number: "01",
    title: "User-Centric Architecture",
    jpTitle: "ユーザーの課題から逆算する技術選定",
    desc: "技術を使うこと自体を目的にせず、「回線が混雑しても落ちない」「高齢者も子供も迷わず使える」という現場の要件から最適なスタックを導き出します。",
  },
  {
    number: "02",
    title: "Resilience over Complexity",
    jpTitle: "制約を工夫で凌駕する耐障害性",
    desc: "限られた予算や制約環境下でも、多段フォールバックやクライアントキャッシュを駆使して堅牢なシステムを構築します。",
  },
  {
    number: "03",
    title: "Empathy & Engineering Lead",
    jpTitle: "対話と共創によるチームドライブ",
    desc: "エンジニア間だけでなく、学校教職員や実行委員会などの非エンジニアステークホルダーと綿密に対話し、全員が納得できる形で開発を前進させます。",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-purple-400 tracking-widest font-bold">
              01
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-500/20 via-white/10 to-transparent" />
          </div>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-xl leading-relaxed">
            ものづくりとテクノロジー探究の軌跡、そして開発において最も大切にしている信念
          </p>
        </ScrollReveal>

        {/* Profile Card & Bio */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Identity Card */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={100}>
              <div className="glass-card rounded-3xl p-8 space-y-6 border border-white/10 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center gap-5">
                  <Image
                    src={profileIcon}
                    alt="松岡 奏磨"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-2xl object-cover shadow-xl ring-2 ring-white/10 shrink-0"
                  />
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-white tracking-tight">松岡 奏磨</h3>
                    <p className="text-xs font-mono text-zinc-400">
                      Soma Matsuoka <span className="text-zinc-500">/ 17 y.o.</span>
                    </p>
                    <span className="inline-block text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      Full-Stack Web &amp; Tech Lead
                    </span>
                  </div>
                </div>

                <div className="space-y-3.5 text-zinc-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-5">
                  <p>
                    2009年愛知県生まれ、滝学園 高校2年生。滝学園 先進技術研究部 部長。
                  </p>
                  <p>
                    中学時代のドローン空撮制御や航空法規の研究を経て、高校からWebソフトウェアの世界へ本格シフト。
                    AI・サイバーセキュリティの探究を経て、現在はReact 19 / Next.jsを中心としたモダンWeb開発に傾注しています。
                  </p>
                  <p>
                    「使う人にとって本当に快適か」「不意のトラブルでも止まらないか」に徹底的にこだわり、UIデザインからサーバーレスアーキテクチャまで一貫して手掛けます。
                  </p>
                </div>

                {/* Quick Info Tags */}
                <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-zinc-500 font-mono text-[10px] uppercase">Affiliation</div>
                    <div className="text-white font-semibold mt-0.5">滝学園 高校2年</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-zinc-500 font-mono text-[10px] uppercase">Position</div>
                    <div className="text-cyan-400 font-semibold mt-0.5">先進技術研究部 部長</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-zinc-500 font-mono text-[10px] uppercase">Location</div>
                    <div className="text-white font-semibold mt-0.5">Aichi, Japan</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-zinc-500 font-mono text-[10px] uppercase">Core Tech</div>
                    <div className="text-purple-300 font-semibold mt-0.5">React 19 / Next.js</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Development Philosophy / Core Values */}
          <div className="lg:col-span-7 space-y-4">
            <ScrollReveal delay={200}>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
                Philosophy &amp; Core Values
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
                ものづくりにおいて貫く3つの原則
              </h3>
            </ScrollReveal>

            <div className="space-y-4 pt-2">
              {philosophy.map((item, idx) => (
                <ScrollReveal key={idx} delay={250 + idx * 80}>
                  <div className="glass-card rounded-2xl p-6 border border-white/5 space-y-2 group hover:border-cyan-500/30 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold">
                        {item.number}
                      </span>
                      <h4 className="text-white font-bold text-base sm:text-lg group-hover:text-cyan-300 transition-colors">
                        {item.jpTitle}
                      </h4>
                    </div>
                    <div className="text-xs font-mono text-zinc-500">{item.title}</div>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed pt-1">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline: Journey & Growth */}
        <div className="space-y-10 pt-8 border-t border-white/5">
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-bold">
                  Growth Journey
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
                  探究と技術習得のタイムライン
                </h3>
              </div>
              <span className="text-xs font-mono text-zinc-500">2009 — 2026</span>
            </div>
          </ScrollReveal>

          <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-10">
            {timelineEvents.map((event, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-2 border-purple-500 group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300" />

                  <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/5 space-y-3 group-hover:border-white/20 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono text-zinc-400 font-bold tracking-wider">
                        {event.period}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${event.badgeColor}`}
                      >
                        {event.badge}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {event.title}
                    </h4>

                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                      {event.highlights.map((h, hIdx) => (
                        <span
                          key={hIdx}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-zinc-400"
                        >
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
