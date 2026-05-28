"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCurrency } from "@/context/CurrencyContext";
import { CURRENCIES } from "@/lib/currency";
import type { CurrencyCode } from "@/lib/currency";

function HamburgerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EveLogo() {
  return (
    <div className="flex items-center gap-2">
      <img src="/images/eve-logo.png" alt="E.V.E." style={{ height: "44px", width: "auto" }} />
      <span className="text-sm font-bold tracking-tight" style={{ color: "#1B1F3A" }}>E.V.E.</span>
    </div>
  );
}

export default function Navbar() {
  const { currency, setCurrency } = useCurrency();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setMobileOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function closeMobile() { setMobileOpen(false); }

  const selectCls = "text-xs text-muted bg-transparent border border-grid-500 rounded px-1.5 py-1 cursor-pointer hover:border-foreground/40 transition-colors focus:outline-none";

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-grid-300">
        <div className="relative max-w-[1200px] mx-auto flex items-center justify-between px-6 sm:px-8 h-[60px]">
          {/* Logo */}
          <a href="#hero" className="shrink-0">
            <EveLogo />
          </a>

          {/* Desktop nav — centered */}
          <div className="hidden md:flex items-center gap-7 text-sm text-muted absolute left-1/2 -translate-x-1/2">
            <a href="#process" className="hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#access" className="hover:text-foreground transition-colors">Access</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>

          {/* Desktop right: currency + CTA */}
          <div className="hidden md:flex items-center gap-2">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
              aria-label="Select currency"
              className={`${selectCls} w-[64px]`}
            >
              {CURRENCIES.map((c) => (
                <option key={c.code} value={c.code}>{c.code}</option>
              ))}
            </select>
            <Link
              href="/request-access"
              className="relative inline-flex items-center justify-center h-9 px-5 text-sm font-medium text-foreground btn-primary-gradient"
            >
              <span className="relative z-10">Request Intelligence Access</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 -mr-2 text-foreground"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-x-0 bottom-0 z-[200] overflow-y-auto"
          style={{ top: "60px", backgroundColor: "#EAE0F0" }}
        >
          <div className="px-6 py-6 space-y-1">
            {[
              { label: "Features", href: "#process" },
              { label: "Pricing", href: "#pricing" },
              { label: "Access", href: "#access" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="block py-3 text-base font-medium border-b border-grid-300"
                style={{ color: "#1B1F3A" }}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 pb-2">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
                aria-label="Select currency"
                className="text-sm border border-grid-500 rounded px-2 py-2 cursor-pointer focus:outline-none w-full"
                style={{ color: "#525a70", backgroundColor: "#EAE0F0" }}
              >
                {CURRENCIES.map((c) => (
                  <option key={c.code} value={c.code}>{c.label}</option>
                ))}
              </select>
            </div>

            <div className="pt-2">
              <Link
                href="/request-access"
                onClick={closeMobile}
                className="relative inline-flex items-center justify-center w-full h-12 text-sm font-medium text-foreground btn-primary-gradient"
              >
                <span className="relative z-10">Request Intelligence Access</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
