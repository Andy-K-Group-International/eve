"use client";

import Link from "next/link";

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-20 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-10">
          <span className="label-mono block mb-3">Pricing</span>
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight leading-[1.2] text-foreground mb-4">
            E.V.E.{" "}
            <span className="font-serif font-light italic text-[1.2em]">Pricing</span>
          </h2>
        </div>

        <div className="max-w-[540px] mx-auto">
          <div className="glass-card rounded-2xl p-10 text-center border border-grid-300">
            {/* Animated pulse indicator */}
            <div className="flex justify-center mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: "rgba(138,137,220,0.10)",
                  color: "#6B6AB8",
                  border: "1px solid rgba(138,137,220,0.25)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-highlight animate-pulse" />
                Coming Soon
              </span>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-3">
              Intelligence access pricing will be announced with the full E.V.E. launch.
            </h3>
            <p className="text-base text-muted font-light leading-relaxed mb-8">
              Early access partners receive priority onboarding and preferred pricing. Join the waitlist to be first in line.
            </p>

            <Link
              href="/request-access"
              className="relative inline-flex items-center justify-center h-12 px-8 text-sm font-medium text-foreground btn-primary-gradient"
            >
              <span className="relative z-10">Join the Waitlist</span>
            </Link>

            <p className="text-xs text-muted-2 mt-4">
              No commitment required. We&apos;ll notify you when pricing is available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
