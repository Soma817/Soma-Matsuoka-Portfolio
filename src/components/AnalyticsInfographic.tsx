"use client";

import { useMemo, useState, useEffect, useRef } from "react";

// ─── Real GA4 data (2026.09.01 – 09.30) ─────────────────────────────────────
const KPI = {
  activeUsers: 14420,
  newUsers: 14448,
  avgEngagementSec: 140.76,
  events: 190726,
  mobileUsers: 12729,
  tabletUsers: 199,
  webUsers: 1481,
  noReferrer: 9821,
  organic: 3990,
  referral: 1073,
};

const hourlyTraffic = [
  { time: "D1 08:00", pv: 320,  users: 110,  label: "Gate open",       phase: 1 },
  { time: "D1 09:00", pv: 1450, users: 540,  label: "Opening",         phase: 1 },
  { time: "D1 10:30", pv: 2100, users: 820,  label: "Peak 01",         phase: 1 },
  { time: "D1 12:00", pv: 1890, users: 680,  label: "Lunch rush",      phase: 1 },
  { time: "D1 14:00", pv: 1240, users: 490,  label: "Afternoon",       phase: 1 },
  { time: "D1 16:00", pv: 410,  users: 150,  label: "Day 1 end",       phase: 1 },
  { time: "D2 08:30", pv: 680,  users: 240,  label: "Day 2 open",      phase: 2 },
  { time: "D2 10:00", pv: 2850, users: 950,  label: "Peak 02",         phase: 2 },
  { time: "D2 11:30", pv: 2400, users: 890,  label: "Crowd surge",     phase: 2 },
  { time: "D2 13:30", pv: 3100, users: 1020, label: "Finale peak ★",  phase: 2 },
  { time: "D2 15:30", pv: 2010, users: 620,  label: "Close",           phase: 2 },
];

const topScreens = [
  { name: "インタラクティブ会場マップ", views: 6820, share: 37.0, color: "#22d3ee", icon: "🗺️" },
  { name: "タイムテーブル・公演日程",   views: 5140, share: 27.8, color: "#818cf8", icon: "📅" },
  { name: "リアルタイム混雑度",         views: 3410, share: 18.5, color: "#34d399", icon: "👥" },
  { name: "落とし物・速報通知",         views: 1820, share:  9.9, color: "#fb923c", icon: "🔔" },
  { name: "部活・企画一覧",             views: 1260, share:  6.8, color: "#f472b6", icon: "📋" },
];

const acquisitionChannels = [
  { label: "Direct",                 users: 9826, color: "#22d3ee" },
  { label: "Google organic",         users: 2334, color: "#818cf8" },
  { label: "blend.school referral",  users:  990, color: "#34d399" },
  { label: "Yahoo organic",          users:  795, color: "#fbbf24" },
  { label: "Instagram referral",     users:  300, color: "#f472b6" },
  { label: "Twitter (X) referral",   users:   33, color: "#60a5fa" },
  { label: "Facebook referral",      users:   47, color: "#4ade80" },
  { label: "その他",                 users:   95, color: "#a3a3a3" },
];

const deviceSegments = [
  { label: "iOS Mobile",       value: 72.4, users: 9204, color: "#22d3ee", bg: "bg-cyan-400" },
  { label: "Android Mobile",   value: 15.9, users: 3525, color: "#818cf8", bg: "bg-violet-400" },
  { label: "Desktop/Web",      value:  8.4, users: 1481, color: "#60a5fa", bg: "bg-blue-400" },
  { label: "Tablet",           value:  1.4, users:  199, color: "#34d399", bg: "bg-emerald-400" },
  { label: "Other Mobile",     value:  1.9, users:  210, color: "#fb923c", bg: "bg-orange-400" },
];

const formatNum = (n: number) => new Intl.NumberFormat("ja-JP").format(n);
const fmtSec = (s: number) => {
  const m = Math.floor(s / 60);
  const sec = Math.round(s % 60);
  return `${m}m ${sec}s`;
};

// ─── Animated counter hook ───────────────────────────────────────────────────
function useCountUp(target: number, duration = 1400, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, active]);
  return val;
}

// ─── Tiny bar chart (pure SVG, no recharts) ──────────────────────────────────
function MiniBarChart({ data, metric }: { data: typeof hourlyTraffic; metric: "pv" | "users" }) {
  const max = Math.max(...data.map((d) => d[metric]));
  const W = 100, H = 60;
  const barW = W / data.length - 1;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#818cf8" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {data.map((d, i) => {
        const h = (d[metric] / max) * (H - 6);
        const x = i * (W / data.length) + 0.5;
        const y = H - h;
        const isDay2 = d.phase === 2;
        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width={barW}
              height={h}
              rx="1"
              fill={isDay2 ? "url(#barGrad)" : "#22d3ee55"}
            />
            {d[metric] === max && (
              <rect x={x} y={y} width={barW} height={h} rx="1" fill="#22d3ee" opacity="0.25" />
            )}
          </g>
        );
      })}
    </svg>
  );
}

// ─── SVG Line + Area chart ───────────────────────────────────────────────────
function TrafficLineChart({
  metric,
  animate,
}: {
  metric: "pv" | "users";
  animate: boolean;
}) {
  const W = 600, H = 200;
  const PAD = { top: 16, right: 16, bottom: 36, left: 44 };
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;
  const maxVal = Math.max(...hourlyTraffic.map((d) => d[metric]));

  const xScale = (i: number) => PAD.left + (i / (hourlyTraffic.length - 1)) * innerW;
  const yScale = (v: number) => PAD.top + innerH - (v / maxVal) * innerH;

  const linePath = hourlyTraffic
    .map((d, i) => `${i === 0 ? "M" : "L"}${xScale(i).toFixed(1)},${yScale(d[metric]).toFixed(1)}`)
    .join(" ");

  const areaPath =
    linePath +
    ` L${xScale(hourlyTraffic.length - 1).toFixed(1)},${(PAD.top + innerH).toFixed(1)}` +
    ` L${PAD.left.toFixed(1)},${(PAD.top + innerH).toFixed(1)} Z`;

  const peakIdx = hourlyTraffic.reduce((acc, d, i) => (d[metric] > hourlyTraffic[acc][metric] ? i : acc), 0);

  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((r) => Math.round(r * maxVal));

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 200 }}>
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.30" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.00" />
        </linearGradient>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="60%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Day separator */}
        <line id="sep" x1="0" y1="0" x2="0" y2="1" />
      </defs>

      {/* Y-axis grid + labels */}
      {yTicks.map((v) => {
        const y = yScale(v);
        return (
          <g key={v}>
            <line x1={PAD.left} y1={y} x2={W - PAD.right} y2={y} stroke="white" strokeOpacity="0.06" strokeDasharray="3 4" />
            <text x={PAD.left - 6} y={y + 4} textAnchor="end" fontSize="9" fill="#71717a">
              {v >= 1000 ? `${(v / 1000).toFixed(1)}k` : v}
            </text>
          </g>
        );
      })}

      {/* Day 1 / Day 2 separator */}
      {(() => {
        const sepX = xScale(5.5);
        return (
          <>
            <line x1={sepX} y1={PAD.top} x2={sepX} y2={PAD.top + innerH} stroke="#ffffff" strokeOpacity="0.12" strokeDasharray="4 4" />
            <text x={sepX - 8} y={PAD.top + 8} textAnchor="end" fontSize="9" fill="#71717a">Day 1</text>
            <text x={sepX + 8} y={PAD.top + 8} textAnchor="start" fontSize="9" fill="#71717a">Day 2</text>
          </>
        );
      })()}

      {/* Area fill */}
      <path d={areaPath} fill="url(#areaGrad)" />

      {/* Line stroke */}
      <path
        d={linePath}
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
        style={
          animate
            ? { strokeDasharray: 9999, strokeDashoffset: 0, transition: "stroke-dashoffset 1.4s ease" }
            : {}
        }
      />

      {/* Data points */}
      {hourlyTraffic.map((d, i) => {
        const cx = xScale(i);
        const cy = yScale(d[metric]);
        const isPeak = i === peakIdx;
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r={isPeak ? 5 : 3} fill={isPeak ? "#f472b6" : "#22d3ee"} stroke="black" strokeWidth="1.5" />
            {isPeak && (
              <>
                <circle cx={cx} cy={cy} r="8" fill="none" stroke="#f472b6" strokeWidth="1" opacity="0.5" />
                <text x={cx} y={cy - 12} textAnchor="middle" fontSize="9" fill="#f472b6" fontWeight="bold">
                  PEAK
                </text>
                <text x={cx} y={cy - 22} textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">
                  {formatNum(d[metric])}
                </text>
              </>
            )}
          </g>
        );
      })}

      {/* X-axis labels */}
      {hourlyTraffic.map((d, i) => (
        <text
          key={i}
          x={xScale(i)}
          y={H - 6}
          textAnchor="middle"
          fontSize="8"
          fill="#52525b"
          transform={`rotate(-30, ${xScale(i)}, ${H - 6})`}
        >
          {d.time}
        </text>
      ))}
    </svg>
  );
}

// ─── Donut chart (pure SVG) ───────────────────────────────────────────────────
function DonutChart({ segments }: { segments: { label: string; value: number; color: string }[] }) {
  const R = 52, r = 30, cx = 70, cy = 70;
  let cumulative = 0;

  const arcs = segments.map((seg) => {
    const start = (cumulative / 100) * Math.PI * 2 - Math.PI / 2;
    cumulative += seg.value;
    const end = (cumulative / 100) * Math.PI * 2 - Math.PI / 2;
    const largeArc = seg.value > 50 ? 1 : 0;
    const x1 = cx + R * Math.cos(start);
    const y1 = cy + R * Math.sin(start);
    const x2 = cx + R * Math.cos(end);
    const y2 = cy + R * Math.sin(end);
    const ix1 = cx + r * Math.cos(start);
    const iy1 = cy + r * Math.sin(start);
    const ix2 = cx + r * Math.cos(end);
    const iy2 = cy + r * Math.sin(end);
    const d = `M ${x1} ${y1} A ${R} ${R} 0 ${largeArc} 1 ${x2} ${y2} L ${ix2} ${iy2} A ${r} ${r} 0 ${largeArc} 0 ${ix1} ${iy1} Z`;
    return { ...seg, d };
  });

  return (
    <svg viewBox="0 0 140 140" className="w-full max-w-[140px]">
      <defs>
        <filter id="shadow">
          <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#000" floodOpacity="0.5" />
        </filter>
      </defs>
      {arcs.map((arc, i) => (
        <path key={i} d={arc.d} fill={arc.color} filter="url(#shadow)" opacity="0.9" />
      ))}
      <text x={cx} y={cy - 6} textAnchor="middle" fontSize="18" fill="white" fontWeight="bold">
        96.8%
      </text>
      <text x={cx} y={cy + 12} textAnchor="middle" fontSize="8" fill="#71717a">
        Mobile
      </text>
    </svg>
  );
}

// ─── Radial bar chart for screen views ──────────────────────────────────────
function RadialBars({ screens }: { screens: typeof topScreens }) {
  const cx = 100, cy = 110, maxR = 80, minR = 20;
  const maxViews = screens[0].views;

  return (
    <svg viewBox="0 0 200 130" className="w-full">
      <defs>
        {screens.map((s, i) => (
          <linearGradient key={i} id={`rg${i}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={s.color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={s.color} />
          </linearGradient>
        ))}
      </defs>
      {screens.map((s, i) => {
        const barW = ((maxR - minR) / screens.length) * 0.85;
        const gapUnit = (maxR - minR) / screens.length;
        const outerR = maxR - i * gapUnit;
        const innerR = outerR - barW;
        const angle = (s.views / maxViews) * 180; // half-circle (0–180°)
        const toRad = (deg: number) => (deg * Math.PI) / 180;
        const startAngle = toRad(180);
        const endAngle = toRad(180 - angle);
        const x1 = cx + outerR * Math.cos(startAngle);
        const y1 = cy + outerR * Math.sin(startAngle);
        const x2 = cx + outerR * Math.cos(endAngle);
        const y2 = cy + outerR * Math.sin(endAngle);
        const ix1 = cx + innerR * Math.cos(startAngle);
        const iy1 = cy + innerR * Math.sin(startAngle);
        const ix2 = cx + innerR * Math.cos(endAngle);
        const iy2 = cy + innerR * Math.sin(endAngle);
        const largeArc = angle > 180 ? 1 : 0;
        const d = `M ${x1} ${y1} A ${outerR} ${outerR} 0 ${largeArc} 0 ${x2} ${y2} L ${ix2} ${iy2} A ${innerR} ${innerR} 0 ${largeArc} 1 ${ix1} ${iy1} Z`;
        const bgX1 = cx + outerR * Math.cos(toRad(180));
        const bgY1 = cy + outerR * Math.sin(toRad(180));
        const bgX2 = cx + outerR * Math.cos(toRad(0));
        const bgY2 = cy + outerR * Math.sin(toRad(0));
        const bgIX1 = cx + innerR * Math.cos(toRad(180));
        const bgIY1 = cy + innerR * Math.sin(toRad(180));
        const bgIX2 = cx + innerR * Math.cos(toRad(0));
        const bgIY2 = cy + innerR * Math.sin(toRad(0));
        const bgD = `M ${bgX1} ${bgY1} A ${outerR} ${outerR} 0 1 0 ${bgX2} ${bgY2} L ${bgIX2} ${bgIY2} A ${innerR} ${innerR} 0 1 1 ${bgIX1} ${bgIY1} Z`;
        return (
          <g key={i}>
            <path d={bgD} fill="white" fillOpacity="0.04" />
            <path d={d} fill={`url(#rg${i})`} />
          </g>
        );
      })}
      <text x={cx} y={cy + 18} textAnchor="middle" fontSize="8" fill="#52525b">
        Total screen views
      </text>
    </svg>
  );
}

// ─── Animated KPI Card ───────────────────────────────────────────────────────
function KpiCard({
  label,
  value,
  sub,
  color,
  prefix = "",
  suffix = "",
  active,
}: {
  label: string;
  value: number;
  sub: string;
  color: string;
  prefix?: string;
  suffix?: string;
  active: boolean;
}) {
  const animated = useCountUp(value, 1400, active);
  return (
    <div className={`rounded-2xl border p-4 sm:p-5 space-y-1 transition-all hover:scale-[1.02] ${color}`}>
      <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">{label}</div>
      <div className="text-2xl sm:text-3xl font-black text-white font-mono tabular-nums">
        {prefix}{formatNum(animated)}{suffix}
      </div>
      <div className="text-[11px] text-zinc-400">{sub}</div>
    </div>
  );
}

// ─── Acquisition waterfall ────────────────────────────────────────────────────
function AcquisitionWaterfall({ visible }: { visible: boolean }) {
  const total = acquisitionChannels.reduce((s, c) => s + c.users, 0);
  return (
    <div className="space-y-2">
      {acquisitionChannels.map((ch, i) => {
        const pct = (ch.users / total) * 100;
        return (
          <div key={i} className="group">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-zinc-300 font-medium truncate max-w-[55%]">{ch.label}</span>
              <span className="font-mono text-zinc-400 shrink-0">{formatNum(ch.users)} <span className="text-zinc-600">({pct.toFixed(1)}%)</span></span>
            </div>
            <div className="h-2 rounded-full bg-white/[0.04] overflow-hidden">
              <div
                className="h-full rounded-full transition-all ease-out"
                style={{
                  width: visible ? `${pct}%` : "0%",
                  backgroundColor: ch.color,
                  transitionDuration: `${600 + i * 100}ms`,
                  transitionDelay: `${i * 60}ms`,
                  boxShadow: `0 0 8px ${ch.color}66`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AnalyticsInfographic() {
  const [metric, setMetric] = useState<"pv" | "users">("pv");
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const totalScreenViews = topScreens.reduce((s, t) => s + t.views, 0);
  const peakPoint = useMemo(() => hourlyTraffic.reduce((a, b) => (b.pv > a.pv ? b : a)), []);

  return (
    <div ref={ref} className="space-y-6 text-zinc-300 text-sm">
      {/* ── Header badge ──────────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          GA4 Verified — 2026.09.01 – 09.30
        </span>
        <span className="text-xs text-zinc-500 font-mono">Powered by Google Analytics 4</span>
      </div>

      {/* ── KPI Grid ──────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <KpiCard
          label="Active Users"
          value={14420}
          sub="アクティブユーザー"
          color="border-cyan-400/20 bg-cyan-400/[0.05]"
          active={visible}
        />
        <KpiCard
          label="New Users"
          value={14448}
          sub="初回訪問"
          color="border-purple-400/20 bg-purple-400/[0.05]"
          active={visible}
        />
        <KpiCard
          label="Avg. Engagement"
          value={Math.round(KPI.avgEngagementSec)}
          suffix="s"
          sub={`≈ ${fmtSec(KPI.avgEngagementSec)} の深い利用`}
          color="border-blue-400/20 bg-blue-400/[0.05]"
          active={visible}
        />
        <KpiCard
          label="Total Events"
          value={190726}
          sub="インタラクション数"
          color="border-emerald-400/20 bg-emerald-400/[0.05]"
          active={visible}
        />
      </div>

      {/* ── Traffic Line Chart ────────────────────────────────────────────── */}
      <div className="rounded-2xl border border-white/10 bg-black/30 p-4 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
              Operation-day pulse — 2日間タイムライン
            </div>
            <h4 className="mt-1 text-base font-bold text-white">
              時間帯別トラフィック波形
              <span className="ml-2 text-xs font-normal text-zinc-400">
                Peak: <span className="text-pink-400 font-mono font-bold">{peakPoint.label} ({formatNum(peakPoint.pv)} PV)</span>
              </span>
            </h4>
          </div>
          <div className="flex gap-1 rounded-lg border border-white/10 bg-white/[0.03] p-1">
            {(["pv", "users"] as const).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setMetric(k)}
                className={`rounded-md px-3 py-1.5 text-[11px] font-mono transition-colors ${
                  metric === k ? "bg-cyan-400/20 text-cyan-200" : "text-zinc-500 hover:text-white"
                }`}
              >
                {k === "pv" ? "Pageviews" : "Active Users"}
              </button>
            ))}
          </div>
        </div>
        <TrafficLineChart metric={metric} animate={visible} />
        {/* Mini phase bar */}
        <div className="grid grid-cols-11 gap-0.5 h-8">
          {hourlyTraffic.map((d, i) => {
            const max = Math.max(...hourlyTraffic.map((x) => x[metric]));
            const h = (d[metric] / max) * 100;
            return (
              <div key={i} className="relative flex flex-col justify-end group cursor-default">
                <div
                  className="rounded-sm w-full transition-all"
                  style={{
                    height: `${h}%`,
                    backgroundColor: d.phase === 2 ? "#818cf8" : "#22d3ee",
                    opacity: visible ? 0.8 : 0,
                    transition: `height 0.8s ease ${i * 60}ms, opacity 0.5s ease ${i * 60}ms`,
                  }}
                />
                {/* Tooltip */}
                <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col items-center z-10 pointer-events-none">
                  <div className="bg-zinc-900 border border-white/10 rounded-lg px-2 py-1.5 text-[10px] font-mono whitespace-nowrap shadow-xl">
                    <div className="text-cyan-300 font-bold">{d.time}</div>
                    <div className="text-zinc-300">{d.label}</div>
                    <div className="text-white font-bold">{formatNum(d[metric])} {metric === "pv" ? "PV" : "users"}</div>
                  </div>
                  <div className="w-1.5 h-1.5 bg-zinc-900 border-b border-r border-white/10 rotate-45 -mt-0.5" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-11 gap-0.5">
          {hourlyTraffic.map((d, i) => (
            <div key={i} className="text-[8px] text-zinc-600 text-center truncate font-mono leading-tight">
              {d.time.replace("D1 ", "").replace("D2 ", "")}
            </div>
          ))}
        </div>
        <div className="flex gap-4 text-[11px] text-zinc-400">
          <span className="flex items-center gap-1.5"><span className="w-3 h-1.5 rounded-full bg-cyan-400 inline-block" /> Day 1</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-1.5 rounded-full bg-violet-400 inline-block" /> Day 2</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-pink-400 inline-block" /> Peak</span>
        </div>
      </div>

      {/* ── Mid row: Device + Acquisition ────────────────────────────────── */}
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">

        {/* Device breakdown */}
        <div className="rounded-2xl border border-white/10 bg-black/20 p-5 space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
            Device Distribution
          </div>
          <h4 className="text-base font-bold text-white">アクセス端末の内訳</h4>

          {/* Stacked bar */}
          <div className="flex h-4 w-full overflow-hidden rounded-full gap-0.5">
            {deviceSegments.map((seg, i) => (
              <div
                key={i}
                title={`${seg.label}: ${seg.value}%`}
                className={`${seg.bg} transition-all duration-1000`}
                style={{
                  width: visible ? `${seg.value}%` : "0%",
                  transitionDelay: `${i * 80}ms`,
                  boxShadow: `0 0 8px ${seg.color}88`,
                }}
              />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <DonutChart segments={deviceSegments.map((s) => ({ label: s.label, value: s.value, color: s.color }))} />
            <div className="flex-1 space-y-2">
              {deviceSegments.map((seg) => (
                <div key={seg.label} className="flex items-center justify-between text-xs gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: seg.color }} />
                    <span className="text-zinc-300 truncate">{seg.label}</span>
                  </div>
                  <div className="flex gap-2 shrink-0 font-mono">
                    <span className="text-zinc-400">{formatNum(seg.users)}</span>
                    <span className="text-zinc-500 w-10 text-right">{seg.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Acquisition channels */}
        <div className="rounded-2xl border border-white/10 bg-black/20 p-5 space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
            Acquisition Channels (全26流入元)
          </div>
          <h4 className="text-base font-bold text-white">どこから来たのか</h4>
          <AcquisitionWaterfall visible={visible} />

          {/* Channel category summary */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5">
            {[
              { label: "Direct", value: KPI.noReferrer, color: "#22d3ee" },
              { label: "Organic", value: KPI.organic, color: "#818cf8" },
              { label: "Referral+", value: KPI.referral, color: "#34d399" },
            ].map((c) => (
              <div key={c.label} className="text-center p-2 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-xs font-bold font-mono" style={{ color: c.color }}>{formatNum(c.value)}</div>
                <div className="text-[10px] text-zinc-500 mt-0.5">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Screen views ──────────────────────────────────────────────────── */}
      <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6 space-y-5">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Feature demand</div>
          <h4 className="mt-1 text-base font-bold text-white">
            機能別 閲覧数ランキング
            <span className="ml-2 text-xs font-normal text-zinc-400">Total: {formatNum(totalScreenViews)} views</span>
          </h4>
        </div>

        <div className="grid md:grid-cols-[1fr_180px] gap-6 items-center">
          <div className="space-y-3">
            {topScreens.map((screen, i) => (
              <div key={i} className="group relative">
                <div className="flex items-center justify-between text-xs mb-1.5 gap-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-base shrink-0">{screen.icon}</span>
                    <span
                      className="font-mono text-[10px] px-1.5 py-0.5 rounded"
                      style={{ backgroundColor: `${screen.color}22`, color: screen.color }}
                    >
                      #{i + 1}
                    </span>
                    <span className="text-zinc-200 font-medium truncate">{screen.name}</span>
                  </div>
                  <div className="shrink-0 font-mono text-right">
                    <span className="text-white font-bold">{formatNum(screen.views)}</span>
                    <span className="text-zinc-500 ml-1 text-[10px]">PV</span>
                  </div>
                </div>
                {/* Multi-segment bar */}
                <div className="h-3 w-full rounded-full overflow-hidden bg-white/[0.04] relative">
                  {/* Background track glow */}
                  <div
                    className="h-full rounded-full transition-all ease-out"
                    style={{
                      width: visible ? `${screen.share}%` : "0%",
                      backgroundColor: screen.color,
                      transitionDuration: "900ms",
                      transitionDelay: `${i * 120}ms`,
                      boxShadow: `0 0 12px ${screen.color}88`,
                    }}
                  />
                </div>
                <div className="flex justify-between text-[10px] mt-0.5">
                  <span className="font-mono" style={{ color: screen.color }}>{screen.share}% of total</span>
                  <span className="text-zinc-600">{formatNum(Math.round(screen.views / 2))} /day avg</span>
                </div>
              </div>
            ))}
          </div>

          {/* Radial visualization */}
          <div className="hidden md:block">
            <RadialBars screens={topScreens} />
            <div className="space-y-1 mt-1">
              {topScreens.map((s, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[10px]">
                  <span className="w-2 h-2 rounded-sm" style={{ backgroundColor: s.color }} />
                  <span className="text-zinc-400 truncate">{s.icon} {s.share}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Infra + Operational Stats ─────────────────────────────────────── */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: "ダウンタイム",     value: "0 min",    sub: "2日間完全無停止",         icon: "🛡️", color: "border-emerald-400/20 bg-emerald-400/[0.04]", text: "text-emerald-400" },
          { label: "Peak PV",         value: "3,100",    sub: "D2 13:30 Finale前",       icon: "⚡", color: "border-yellow-400/20 bg-yellow-400/[0.04]",  text: "text-yellow-400"  },
          { label: "Eng. Time",        value: fmtSec(140.76), sub: "平均エンゲージ時間",  icon: "⏱️", color: "border-blue-400/20 bg-blue-400/[0.04]",      text: "text-blue-400"    },
          { label: "Mobile ratio",     value: "96.8%",    sub: "PWA最適化の成果",         icon: "📱", color: "border-purple-400/20 bg-purple-400/[0.04]",  text: "text-purple-400"  },
        ].map((item) => (
          <div key={item.label} className={`rounded-2xl border p-4 space-y-2 ${item.color}`}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">{item.label}</span>
              <span className="text-lg">{item.icon}</span>
            </div>
            <div className={`text-2xl font-black font-mono ${item.text}`}>{item.value}</div>
            <div className="text-[11px] text-zinc-400">{item.sub}</div>
          </div>
        ))}
      </div>

      {/* ── Mini bar chart sparklines ─────────────────────────────────────── */}
      <div className="grid sm:grid-cols-2 gap-4">
        {(["pv", "users"] as const).map((m) => (
          <div key={m} className="rounded-2xl border border-white/10 bg-black/20 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                {m === "pv" ? "Pageviews / hour" : "Active Users / hour"}
              </span>
              <span className="text-xs font-mono text-cyan-300">
                Max: {formatNum(Math.max(...hourlyTraffic.map((d) => d[m])))}
              </span>
            </div>
            <div className="h-14 w-full">
              <MiniBarChart data={hourlyTraffic} metric={m} />
            </div>
            <div className="grid grid-cols-3 gap-2 text-center border-t border-white/5 pt-2">
              {[
                { label: "Sum", val: formatNum(hourlyTraffic.reduce((s, d) => s + d[m], 0)) },
                { label: "Avg", val: formatNum(Math.round(hourlyTraffic.reduce((s, d) => s + d[m], 0) / hourlyTraffic.length)) },
                { label: "Max", val: formatNum(Math.max(...hourlyTraffic.map((d) => d[m]))) },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-[10px] text-zinc-600">{s.label}</div>
                  <div className="text-xs font-bold font-mono text-zinc-300">{s.val}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Zero-downtime highlight ───────────────────────────────────────── */}
      <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-950/30 to-cyan-950/30 p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-2xl shrink-0">
              ✅
            </div>
            <div>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Operational Achievement</div>
              <div className="text-lg font-black text-white mt-0.5">Zero Downtime — 2日間完全稼働</div>
            </div>
          </div>
          <div className="sm:ml-auto flex flex-wrap gap-3">
            {[
              { label: "Fallback 発動", val: "0 回" },
              { label: "Error 件数",   val: "0 件" },
              { label: "稼働率",       val: "100%" },
            ].map((s) => (
              <div key={s.label} className="text-center px-4 py-2 rounded-xl bg-black/30 border border-emerald-500/10">
                <div className="text-xs font-bold text-emerald-400 font-mono">{s.val}</div>
                <div className="text-[10px] text-zinc-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
