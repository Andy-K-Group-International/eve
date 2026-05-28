"use client";

import { useState } from "react";

function Chevron() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="faq-chevron w-4 h-4 shrink-0 transition-transform duration-200">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  );
}

const faqs = [
  {
    q: "What is E.V.E.?",
    a: "E.V.E. is the Intelligence System of the Andy'K Group ecosystem. It processes operational data from A.D.A.M. and delivers strategic insights, validation signals, and execution guidance.",
  },
  {
    q: "How does E.V.E. relate to A.D.A.M.?",
    a: "A.D.A.M. structures operations. E.V.E. provides the intelligence layer — analyzing data, surfacing insights, and supporting strategic decision-making.",
  },
  {
    q: "When will E.V.E. be available?",
    a: "E.V.E. is currently in private development. Early access will be offered to selected A.D.A.M. partners. Join the waitlist to be notified.",
  },
  {
    q: "How do I request access?",
    a: "Click 'Request Intelligence Access' and submit your details. We will contact you when E.V.E. early access opens.",
  },
  {
    q: "Will E.V.E. replace human decisions?",
    a: "No. E.V.E. supports decision-makers with intelligence and insights. All strategic decisions remain with your leadership team.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-20 px-8">
      <div className="max-w-[760px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight leading-[1.2] text-foreground mb-4">
            Frequently{" "}
            <span className="font-serif font-light italic text-[1.2em]">Asked</span>
            <br />
            Questions
          </h2>
        </div>

        <div className="border-t border-grid-300">
          {faqs.map((faq, i) => (
            <div key={i} className={`border-b border-grid-300 ${open === i ? "faq-open" : ""}`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex items-center justify-between w-full py-5 text-left gap-4 cursor-pointer"
              >
                <span className={`text-base font-medium transition-colors ${open === i ? "text-highlight" : "text-foreground"}`}>
                  {faq.q}
                </span>
                <span className={`transition-colors ${open === i ? "text-highlight" : "text-muted-2"}`}>
                  <Chevron />
                </span>
              </button>
              <div className="faq-answer">
                <p className="pb-5 text-sm text-muted leading-relaxed max-w-[640px]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
