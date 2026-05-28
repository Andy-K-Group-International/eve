"use client";

import Link from "next/link";

function IntelligenceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
      <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AccessPortal() {
  return (
    <section id="access" className="py-20 px-8 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <span className="label-mono mb-3 block">Platform Access</span>
          <h2 className="text-[clamp(1.5rem,1.2rem+1vw,2rem)] font-bold tracking-tight leading-[1.2] text-foreground mb-3">
            Your{" "}
            <span className="font-serif font-light italic text-[1.2em]">Access Portal</span>
          </h2>
          <p className="text-base text-muted font-light">
            Select your access level to continue
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[680px] mx-auto">

          {/* Intelligence Access — light purple */}
          <div
            className="rounded-2xl p-8 flex flex-col"
            style={{
              background: "linear-gradient(135deg, rgba(138,137,220,0.12) 0%, rgba(212,211,240,0.20) 100%)",
              border: "1px solid rgba(138,137,220,0.30)",
            }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 shrink-0"
              style={{ backgroundColor: "rgba(138,137,220,0.15)" }}
            >
              <span style={{ color: "#8A89DC" }}><IntelligenceIcon /></span>
            </div>

            <div className="flex-1">
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ color: "#6B6AB8" }}
              >
                Intelligence Access
              </p>
              <h3 className="text-lg font-serif font-semibold mb-3 text-foreground">
                E.V.E. Portal
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Request access to E.V.E. intelligence layer. Operational insights, validation reports, and implementation intelligence.
              </p>
            </div>

            <Link
              href="/request-access"
              className="mt-8 inline-flex items-center justify-center gap-2 h-11 px-5 text-sm font-medium rounded-xl transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#8A89DC", color: "#ffffff" }}
            >
              Request Access
              <ArrowRight />
            </Link>
          </div>

          {/* Admin Access — dark */}
          <div
            className="rounded-2xl p-8 flex flex-col"
            style={{ backgroundColor: "#1B1F3A" }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 shrink-0"
              style={{ backgroundColor: "rgba(138,137,220,0.12)" }}
            >
              <span style={{ color: "#8A89DC" }}><ShieldIcon /></span>
            </div>

            <div className="flex-1">
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ color: "#8A89DC" }}
              >
                Team Access
              </p>
              <h3
                className="text-lg font-serif font-semibold mb-3"
                style={{ color: "#F2E9F7" }}
              >
                Admin Panel
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#8b93a8" }}>
                Andy&apos;K Group team access. Manage clients, proposals, contracts and operations via A.D.A.M.
              </p>
            </div>

            <a
              href="https://adam.andykgroup.com/sign-in?role=admin"
              className="mt-8 inline-flex items-center justify-center gap-2 h-11 px-5 text-sm font-medium rounded-xl transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#F2E9F7", color: "#1B1F3A" }}
            >
              Admin Sign In
              <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
