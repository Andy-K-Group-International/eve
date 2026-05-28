"use client";

import Navbar from "./Navbar";
import Hero from "./Hero";
import { HeroBackground } from "./BackgroundGrid";
import TronDivider from "./TronDivider";
import RoadmapSection from "./RoadmapSection";
import IndustrySection from "./IndustrySection";
import PricingSection from "./PricingSection";
import AccessPortal from "./AccessPortal";
import Footer from "./Footer";
import AmbientMusic from "./AmbientMusic";

export default function LandingShell() {
  return (
    <main className="[overflow-x:clip]">
      <Navbar />
      <div className="relative overflow-clip">
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
      <Footer />
      <AmbientMusic src="/audio/eve-theme.wav" credit="DJ Andy'K" creditUrl="https://www.djandykofficial.com" />
    </main>
  );
}
