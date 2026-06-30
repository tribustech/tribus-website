import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/content/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Tribus Technologies — Your success, is our success.",
    template: "%s — Tribus Technologies",
  },
  description:
    "Tribus is your partner in digital transformation. We build people-centric web and mobile software that solves real problems — from discovery to production.",
  applicationName: site.legalName,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "technology",
  keywords: [
    "software development",
    "software agency",
    "digital transformation",
    "web development",
    "mobile app development",
    "React",
    "Next.js",
    "React Native",
    "AI integrations",
    "Bucharest",
    "Romania",
  ],
  // Don't auto-linkify phone numbers/emails in OG-rendered text.
  formatDetection: { telephone: false, email: false, address: false },
  // Explicitly invite indexing + rich previews (search engines & AI overviews).
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Tribus Technologies",
    url: site.url,
    title: "Tribus Technologies — Your success, is our success.",
    description:
      "We build people-centric web and mobile software that solves real problems.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tribus Technologies",
    description:
      "We build people-centric web and mobile software that solves real problems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
