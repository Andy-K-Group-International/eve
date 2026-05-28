"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { CurrencyProvider } from "@/context/CurrencyContext";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { HeroBackground } from "./BackgroundGrid";
import TronDivider from "./TronDivider";
import RoadmapSection from "./RoadmapSection";
import IndustrySection from "./IndustrySection";
import PricingSection from "./PricingSection";
import AccessPortal from "./AccessPortal";
import FaqSection from "./FaqSection";
import Footer from "./Footer";
import AmbientMusic from "./AmbientMusic";

export default function LandingShell() {
  return (
    <LanguageProvider>
      <CurrencyProvider>
        <main className="[overflow-x:clip]">
          <Navbar />
          <div className="relative overflow-clip isolate">
            <HeroBackground />
            <Hero />
          </div>
          <TronDivider />
          <RoadmapSection />
          <TronDivider />
          <IndustrySection />
          <TronDivider />
          <PricingSection />
          <TronDivider />
          <AccessPortal />
          <TronDivider />
          <FaqSection />
          <Footer />
          <AmbientMusic src="/audio/eve-theme.wav" credit="DJ Andy'K" creditUrl="https://www.djandykofficial.com" />
        </main>
      </CurrencyProvider>
    </LanguageProvider>
  );
}
