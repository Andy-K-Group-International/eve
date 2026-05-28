import type { Metadata } from "next";
import Link from "next/link";
import RequestAccessForm from "./RequestAccessForm";

export const metadata: Metadata = {
  title: "Request Intelligence Access — E.V.E.",
  description: "Request early access to E.V.E. — the intelligence and execution layer of the Andy'K Group ecosystem.",
  alternates: { canonical: "/request-access" },
};

export default function RequestAccessPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#F2E9F7" }}>
      <div className="max-w-[560px] mx-auto px-6 py-16 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-2 hover:text-muted transition-colors mb-10"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to E.V.E.
        </Link>

        <div className="mb-8">
          <img
            src="/images/eve-logo.png"
            alt="E.V.E."
            style={{ height: "56px", width: "auto", marginBottom: "16px" }}
          />
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">
            Request Intelligence Access
          </h1>
          <p className="text-base text-muted font-light leading-relaxed">
            E.V.E. is currently in early access. Fill in your details and we&apos;ll be in touch.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-grid-300 p-8">
          <RequestAccessForm />
        </div>
      </div>
    </main>
  );
}
