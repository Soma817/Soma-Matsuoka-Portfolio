import ScrollReveal from "./ScrollReveal";

const timelineEvents = [
  {
    period: "2009.08",
    title: "愛知県生まれ",
    badge: "Origin",
    description: "現在17歳、滝学園 高校2年生。",
  },
  {
    period: "2022.04 - 2025.03",
    title: "滝学園 先進技術研究部 入部・ドローン研究",
    badge: "Hardware & Law",
    description:
      "中学3年間、ドローンの空撮技術や関連法規・安全運用の研究に従事。テクノロジーの実践とルール遵守の両面を探究。",
  },
  {
    period: "2025.04",
    title: "高校進学・ソフトウェア開発へ移行",
    badge: "Software Exploration",
    description:
      "高校進学を機に本格的なプログラミングを開始。AI・データサイエンス・サイバーセキュリティなど広範な技術領域に触れる。",
  },
  {
    period: "2026.04 - Present",
    title: "先進技術研究部 部長就任・フルスタック開発",
    badge: "Full-Stack & Lead",
    description:
      "部長に就任。React / Next.js / TypeScriptを中心とするモダンWebスタックに注力し、UI/UX設計からサーバーレス基盤まで一気通貫の開発とチームリードを推進。",
  },
];

const highlights = [
  {
    icon: "⚡",
    title: "フルスタック Web 開発",
    desc: "React / Next.js / TypeScript / Tailwind CSS / サーバーレス連携",
  },
  {
    icon: "🎨",
    title: "UI/UX デザイン",
    desc: "直感的で美しいユーザーインターフェースと滑らかな体験設計",
  },
  {
    icon: "🔍",
    title: "先進技術への探究心",
    desc: "ドローン運用から始まり、AI・セキュリティ・Web開発まで広く探究",
  },
  {
    icon: "👥",
    title: "チーム開発 & リード",
    desc: "滝学園 先進技術研究部にて、技術選定や協同開発を推進",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        <div>
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
                    <p className="text-sm text-zinc-400">
                      Soma Matsuoka <span className="text-xs text-zinc-500">/ 17 y.o.</span>
                    </p>
                    <p className="text-xs font-mono text-cyan-400 mt-1">
                      Full-Stack Developer
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
                  <p>
                    2009年愛知県生まれの17歳、滝学園 高校2年生。
                  </p>
                  <p>
                    中学時代のドローン空撮や法規の研究から先進技術に関心を持ち、高校進学を機にプログラミングの世界へ。AI・データサイエンス・サイバーセキュリティなど幅広い領域に触れながら、現在はモダンWebスタックを中心としたフルスタック開発に注力しています。
                  </p>
                  <p>
                    滝学園 先進技術研究部にてチームでのプロダクト開発や技術選定を実践。ユーザー体験を最大化するインターフェース設計からスケーラブルな基盤構築まで、目的達成のための技術探究を続けています。
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Highlights */}
            <ScrollReveal delay={200}>
              <div className="space-y-4">
                {highlights.map((item, i) => (
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

        {/* Timeline Section */}
        <div>
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                <span className="text-purple-400 text-sm font-mono tracking-wider">
                  TIMELINE
                </span>
                <span>/ 経歴</span>
              </h3>
              <div className="flex-1 h-px bg-white/5" />
            </div>
          </ScrollReveal>

          <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-8 sm:space-y-10 ml-2 sm:ml-4">
            {timelineEvents.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0a0a0f] border-2 border-purple-500 group-hover:border-cyan-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.4)]" />

                  <div className="glass rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-cyan-300 tracking-wider">
                        {item.period}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono glass border border-purple-500/20 text-purple-300">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
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

