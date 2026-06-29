import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
  metadataBase: new URL("https://wearetribus.com"),
  title: {
    default: "Tribus Technologies — Your success, is our success.",
    template: "%s — Tribus Technologies",
  },
  description:
    "Tribus is your partner in digital transformation. We build people-centric web and mobile software that solves real problems — from discovery to production.",
  keywords: [
    "software development",
    "digital transformation",
    "web development",
    "mobile apps",
    "React",
    "Next.js",
    "React Native",
    "Bucharest",
  ],
  openGraph: {
    type: "website",
    siteName: "Tribus Technologies",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
