import type { Metadata } from "next";
import LandingShell from "@/components/landing/LandingShell";

export const metadata: Metadata = {
  title: "E.V.E. — Intelligence System by Andy'K Group International LTD",
  description:
    "E.V.E. is the execution and validation intelligence layer of the Andy'K Group ecosystem. Strategic data, operational insight, and implementation intelligence.",
  alternates: { canonical: "https://eve.andykgroup.com" },
  openGraph: {
    url: "https://eve.andykgroup.com",
    title: "E.V.E. — Intelligence System by Andy'K Group International LTD",
    description:
      "E.V.E. is the execution and validation intelligence layer of the Andy'K Group ecosystem. Strategic data, operational insight, and implementation intelligence.",
  },
};

export default function Home() {
  return <LandingShell />;
}
