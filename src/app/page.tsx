import TopBanner from "@/components/TopBanner";
import AmbientMusic from "@/components/AmbientMusic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TronDivider from "@/components/TronDivider";
import FaqSection from "@/components/FaqSection";
import RoadmapSection from "@/components/RoadmapSection";
import TestimonialPair from "@/components/TestimonialPair";
import PricingSection from "@/components/PricingSection";
import CaseStudyCards from "@/components/CaseStudyCards";
import LovedBySection from "@/components/LovedBySection";
import IntegrationsSection from "@/components/IntegrationsSection";
import ContactForm from "@/components/ContactForm";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { HeroBackground } from "@/components/BackgroundGrid";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://andykgroup.com/#organization",
      name: "Andy'K Group International LTD",
      url: "https://andykgroup.com",
      logo: {
        "@type": "ImageObject",
        url: "https://andykgroup.com/full-logo.png",
      },
      description:
        "E.V.E. is the intelligence and execution layer of the Andy'K Group ecosystem. Strategic data, operational insight, and implementation intelligence.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "86-90 Paul Street",
        addressLocality: "London",
        postalCode: "EC2A 4NE",
        addressCountry: "GB",
      },
      email: "info@andykgroup.com",
      telephone: "+44 330 027 1319",
      sameAs: ["https://www.linkedin.com/company/80971657/"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "E.V.E. Intelligence System Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "E.V.E. Intelligence Layer",
              description:
                "The execution and validation intelligence layer — strategic data, operational insight, and implementation intelligence for the Andy'K Group ecosystem.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://andykgroup.com/#website",
      url: "https://andykgroup.com",
      name: "E.V.E. — Intelligence System",
      publisher: {
        "@id": "https://andykgroup.com/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://andykgroup.com/#webpage",
      url: "https://andykgroup.com",
      name: "E.V.E. — Intelligence System by Andy'K Group International LTD",
      isPartOf: {
        "@id": "https://andykgroup.com/#website",
      },
      about: {
        "@id": "https://andykgroup.com/#organization",
      },
      description:
        "E.V.E. is the execution and validation intelligence layer of the Andy'K Group ecosystem. Strategic data, operational insight, and implementation intelligence.",
    },
  ],
};

export default function Home() {
  return (
    <main className="overflow-x-hidden pt-[60px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopBanner />
      <Navbar />

      {/* Hero area with background layers */}
      <div className="relative overflow-clip">
        <HeroBackground />
        <Hero />
      </div>

      <TronDivider />

      {/* End-to-End Service Section */}
      <FaqSection />

      {/* Case Studies */}
      <CaseStudyCards />

      <TronDivider />

      {/* About */}
      <LovedBySection />

      <TronDivider />

      {/* Founders */}
      <section className="relative pt-12 pb-14 px-8 max-w-[1200px] mx-auto">
        <TestimonialPair />
      </section>

      <TronDivider />

      {/* Our Services */}
      <IntegrationsSection />

      <TronDivider />

      {/* Pricing Plans */}
      <PricingSection />

      <TronDivider />

      {/* How A.D.A.M. Works */}
      <RoadmapSection />

      <TronDivider />

      <ContactForm />
      <CtaSection />
      <Footer />
      <AmbientMusic src="/audio/eve-theme.wav" credit="E.V.E." creditUrl="#hero" />
    </main>
  );
}
