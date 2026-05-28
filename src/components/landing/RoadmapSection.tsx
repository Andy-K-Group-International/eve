"use client";

import { Database, Cpu, LineChart, Shield, Zap, RefreshCw } from "lucide-react";

const eveSteps = [
  {
    step: 1,
    title: "Data Collection",
    description: "Operational data flows in from A.D.A.M. and connected systems.",
    Icon: Database,
  },
  {
    step: 2,
    title: "Intelligence Processing",
    description: "E.V.E. analyzes patterns, performance, and implementation signals.",
    Icon: Cpu,
  },
  {
    step: 3,
    title: "Strategic Insights",
    description: "Key operational insights surfaced for decision makers.",
    Icon: LineChart,
  },
  {
    step: 4,
    title: "Validation Layer",
    description: "E.V.E. validates implementation quality and operational consistency.",
    Icon: Shield,
  },
  {
    step: 5,
    title: "Execution Support",
    description: "Recommendations and execution guidance delivered in real time.",
    Icon: Zap,
  },
  {
    step: 6,
    title: "Continuous Learning",
    description: "E.V.E. improves with every implementation cycle.",
    Icon: RefreshCw,
  },
];

function ArrowDown() {
  return (
    <div className="flex justify-center py-2">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-highlight">
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="hidden lg:flex items-center px-2">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-highlight">
        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function RoadmapCard({
  item,
  stepNumber,
}: {
  item: typeof eveSteps[number];
  stepNumber: number;
}) {
  const { Icon } = item;
  return (
    <div className="relative flex-1 max-w-[340px] group">
      <div className="glass-card rounded-xl p-6 h-full flex flex-col transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
        {/* Step number + icon */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
            style={{
              background: "linear-gradient(135deg, rgba(138,137,220,0.20), rgba(107,106,184,0.12))",
              color: "#6B6AB8",
            }}
          >
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-mono text-muted-2 uppercase tracking-wider">
            Step {stepNumber}
          </span>
        </div>

        <h4 className="text-base font-bold text-foreground tracking-tight mb-2">
          {item.title}
        </h4>
        <p className="text-sm text-muted leading-relaxed flex-1">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function RoadmapSection() {
  return (
    <section id="process" className="relative py-20 px-8">
      <div className="line-grid line-grid-fade" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight leading-[1.2] text-foreground mb-4">
            How E.V.E.
            <br />
            <span className="font-serif font-light italic text-[1.2em]">Works</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted font-light">
            Six layers of intelligence — from raw data to actionable execution guidance.
          </p>
        </div>

        {/* Desktop: 3×2 grid with arrows */}
        <div className="hidden lg:block">
          <div className="flex items-stretch justify-center">
            {eveSteps.slice(0, 3).map((item, i) => (
              <div key={item.step} className="contents">
                <RoadmapCard item={item} stepNumber={i + 1} />
                {i < 2 && <ArrowRight />}
              </div>
            ))}
          </div>
          <div className="h-6" />
          <div className="flex items-stretch justify-center">
            {eveSteps.slice(3, 6).map((item, i) => (
              <div key={item.step} className="contents">
                <RoadmapCard item={item} stepNumber={i + 4} />
                {i < 2 && <ArrowRight />}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden flex flex-col items-center">
          {eveSteps.map((item, i) => (
            <div key={item.step}>
              <RoadmapCard item={item} stepNumber={i + 1} />
              {i < eveSteps.length - 1 && <ArrowDown />}
            </div>
          ))}
        </div>

        {/* Status badge */}
        <div className="text-center mt-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-grid-500 bg-white text-sm text-muted">
            <span className="w-2 h-2 rounded-full bg-highlight animate-pulse" />
            E.V.E. is in development — early intelligence access available
          </span>
        </div>
      </div>
    </section>
  );
}
