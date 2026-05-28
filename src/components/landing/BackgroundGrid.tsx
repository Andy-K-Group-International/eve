export function CartesianGrid({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <div className="cartesian-grid" />
      <div className="cartesian-grid-glow" />
    </div>
  );
}

export function HeroBackground() {
  return (
    <>
      <div className="hero-gradient" />
      <div className="hero-noise-wrapper">
        <div className="noise-texture" style={{ opacity: 0.04 }} />
      </div>
      <div className="absolute inset-0 pointer-events-none" style={{ height: 900, opacity: 0.7 }}>
        <div className="cartesian-grid" style={{ opacity: 0.55 }} />
        <div className="cartesian-grid-glow" />
      </div>
    </>
  );
}
