import type { Metadata, Viewport } from "next";
import { Amiri, Encode_Sans_Condensed, Frank_Ruhl_Libre, Inter } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SupportBand } from "@/components/SupportBand";
import {
  isIndexable,
  SITE_DESCRIPTION,
  SITE_LEGAL_NAME,
  SITE_NAME,
  SITE_SAME_AS,
  SITE_URL,
} from "@/lib/site";

const encodeCondensed = Encode_Sans_Condensed({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["700"],
});

const frankRuhl = Frank_Ruhl_Libre({
  variable: "--font-serif-face",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["500"],
});

const amiri = Amiri({
  variable: "--font-arabic-face",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const viewport: Viewport = {
  themeColor: [
    { color: "#1a4a7a" },
  ],
};

const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: `${SITE_NAME}, the ${SITE_LEGAL_NAME}`,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_LEGAL_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: "./" },
  openGraph: {
    title: `${SITE_NAME} | ${SITE_LEGAL_NAME}`,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_GB",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_LEGAL_NAME}`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: isIndexable() ? { index: true, follow: true } : { index: false, follow: false },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: SITE_LEGAL_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/apple-icon.png`,
  foundingDate: "1963",
  description: SITE_DESCRIPTION,
  sameAs: SITE_SAME_AS,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${encodeCondensed.variable} ${frankRuhl.variable} ${inter.variable} ${amiri.variable}`}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="type-cta absolute -top-16 left-4 z-[60] bg-white px-4 py-3 text-ink transition-[top] duration-200 focus:top-4"
        >
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SupportBand />
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
