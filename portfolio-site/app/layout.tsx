import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { baseUrl } from "./sitemap";

import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Bhavanvir Rai - Software Engineer",
    template: "%s | Bhavanvir Rai — Software Engineer",
  },
  description:
    "Bhavanvir Rai's personal website. Functions as a living portfolio.",
  openGraph: {
    title: "Bhavanvir's Portfolio",
    description:
      "Bhavanvir Rai's personal website. Functions as a living portfolio.",
    url: baseUrl,
    siteName: "Bhavanvir's Portfolio",
    locale: "en_CA",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-3xl mx-4 mt-8 lg:mx-auto`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
