import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/ThemeProvider";
import { GlobalProvider } from "@/components/GlobalContext";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { TopNavigation } from "@/components/TopNavigation";
import { FixedThemeToggle } from "@/components/FixedThemeToggle";
import FloatingBar from "@/components/FloatingBar";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ricardosilva.dev"),
  title: {
    default: "Ricardo Silva | Computer Systems Engineer",
    template: "%s | Ricardo Silva",
  },
  description: "Computer Systems Engineer from Guimarães, Portugal, focused on people management, process optimization, and user-centered operational systems.",
  keywords: ["Ricardo Silva", "Computer Systems Engineer", "People Management", "Process Optimization", "Operations", "Process Improvement", "ERP", "Portugal"],
  authors: [{ name: "Ricardo Silva", url: "https://ricardosilva.dev" }],
  creator: "Ricardo Silva",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ricardosilva.dev",
    title: "Ricardo Silva | Computer Systems Engineer",
    description: "Computer Systems Engineer from Guimarães, Portugal, focused on people management, process optimization, and user-centered operational systems.",
    siteName: "Ricardo Silva Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricardo Silva | Computer Systems Engineer",
    description: "Computer Systems Engineer from Guimarães, Portugal, focused on people management, process optimization, and user-centered operational systems.",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalProvider>
            <div className="flex flex-col min-h-screen relative pb-24 md:pb-0">
              <ScrollProgress />
              <TopNavigation />
              <FixedThemeToggle />

              <main className="flex-grow">{children}</main>
              <Footer />
              <FloatingBar />
            </div>
          </GlobalProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
