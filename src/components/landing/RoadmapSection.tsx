"use client";

const eveSteps = [
  { step: 1, title: "Data Collection",         description: "Operational data flows in from A.D.A.M. and connected systems." },
  { step: 2, title: "Intelligence Processing", description: "E.V.E. analyzes patterns, performance, and implementation signals." },
  { step: 3, title: "Strategic Insights",      description: "Key operational insights surfaced for decision makers." },
  { step: 4, title: "Validation Layer",        description: "E.V.E. validates implementation quality and operational consistency." },
  { step: 5, title: "Execution Support",       description: "Recommendations and execution guidance delivered in real time." },
  { step: 6, title: "Continuous Learning",     description: "E.V.E. improves with every implementation cycle." },
];

const STEP_ICONS = [
  // Database — Data Collection
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <ellipse cx="12" cy="5" rx="9" ry="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 5v4c0 1.657 4.03 3 9 3s9-1.343 9-3V5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 9v4c0 1.657 4.03 3 9 3s9-1.343 9-3V9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 13v4c0 1.657 4.03 3 9 3s9-1.343 9-3v-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Cpu — Intelligence Processing
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <rect x="4" y="4" width="16" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="9" y="9" width="6" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 2v2M15 20v2M9 2v2M9 20v2M2 15h2M20 15h2M2 9h2M20 9h2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // LineChart — Strategic Insights
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 16l4-4 4 4 4-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Shield check — Validation Layer
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Zap — Execution Support
  <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // RefreshCw — Continuous Learning
  <svg key="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path d="M3 12a9 9 0 019-9 9.75 9.75 0 016.74 2.74L21 8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 3v5h-5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 12a9 9 0 01-9 9 9.75 9.75 0 01-6.74-2.74L3 16" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 16H3v5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

function ArrowDown() {
  return (
    <div className="flex justify-center py-2">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-5 h-5 text-highlight"
      >
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="hidden lg:flex items-center px-2">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-5 h-5 text-highlight"
      >
        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function RoadmapCard({
  item,
  icon,
  stepNumber,
}: {
  item: { title: string; description: string };
  icon: React.ReactNode;
  stepNumber: number;
}) {
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
            {icon}
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
            <span className="font-serif font-light italic text-[1.2em]">
              Works
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-muted font-light">
            Six layers of intelligence — from raw data to actionable execution guidance.
          </p>
        </div>

        {/* Roadmap - Desktop: 3x2 grid with arrows, Mobile: vertical */}
        <div className="hidden lg:block">
          {/* Row 1 */}
          <div className="flex items-stretch justify-center">
            {eveSteps.slice(0, 3).map((item, i) => (
              <div key={item.step} className="contents">
                <RoadmapCard item={item} icon={STEP_ICONS[i]} stepNumber={i + 1} />
                {i < 2 && <ArrowRight />}
              </div>
            ))}
          </div>

          {/* Spacer between rows */}
          <div className="h-6" />

          {/* Row 2 */}
          <div className="flex items-stretch justify-center">
            {eveSteps.slice(3, 6).map((item, i) => (
              <div key={item.step} className="contents">
                <RoadmapCard item={item} icon={STEP_ICONS[i + 3]} stepNumber={i + 4} />
                {i < 2 && <ArrowRight />}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="lg:hidden flex flex-col items-center">
          {eveSteps.map((item, i) => (
            <div key={item.step}>
              <RoadmapCard item={item} icon={STEP_ICONS[i]} stepNumber={i + 1} />
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
