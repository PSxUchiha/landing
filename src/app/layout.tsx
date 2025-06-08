import type { Metadata, Viewport } from "next";
import { Doto, Geist, Geist_Mono } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/navbar";
import Providers from "@/lib/provider/react-query";

import "./globals.css";
import "./fonts.css";
import { Footer } from "@/components/footer";

import OgImage from "./opengraph-image.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "psxuchiha.",
    template: "%s | psxuchiha.",
  },
  description: "Where it all begins.",
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://priyanshusharma.dev"
      : "http://localhost:3000",
  ),
  openGraph: {
    title: {
      default: "psxuchiha.",
      template: "%s | psxuchiha.",
    },
    images: [
      {
        url: OgImage.src,
        width: OgImage.width,
        height: OgImage.height,
      },
    ],
    description: "Where it all begins.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@PSxUchiha",
    creator: "@PSxUchiha",
    images: [
      {
        url: OgImage.src,
        width: OgImage.width,
        height: OgImage.height,
      },
    ],
  },
  icons: {
    apple: "/apple-touch-icon.png",
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${doto.variable} antialiased scroll-smooth`}
        >
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            <Providers>
              <Navbar />
              {children}
              <Footer />
            </Providers>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
