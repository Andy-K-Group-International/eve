import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { LanguageProvider } from "@/context/LanguageContext";
import CookieBanner from "@/components/CookieBanner";
import LocaleUrlSync from "@/components/LocaleUrlSync";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const SITE_URL = "https://andykgroup.com";
const SITE_TITLE =
  "E.V.E. — Intelligence System by Andy'K Group International LTD";
const SITE_DESCRIPTION =
  "E.V.E. is the execution and validation intelligence layer of the Andy'K Group ecosystem. Strategic data, operational insight, and implementation intelligence.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | E.V.E.",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "E.V.E. intelligence system",
    "execution and validation architecture",
    "operational intelligence",
    "implementation intelligence",
    "strategic data",
    "Andy'K Group International LTD",
    "business intelligence platform",
    "operational insight",
    "execution management",
    "validation architecture",
    "intelligence layer",
    "UK intelligence system",
  ],
  authors: [{ name: "Andy'K Group International LTD" }],
  creator: "Andy'K Group International LTD",
  publisher: "Andy'K Group International LTD",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "E.V.E. — Intelligence System",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "E.V.E. — Intelligence System by Andy'K Group International LTD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased font-sans`}
      >
        <LanguageProvider>
          <CurrencyProvider>
            <LocaleUrlSync />
            {children}
            <CookieBanner />
          </CurrencyProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
