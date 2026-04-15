import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "FitForge Gym - Transform Your Body, Transform Your Life",
  description: "Premium fitness center in Pakistan with expert trainers, state-of-the-art equipment, and personalized training programs. Join 200+ transformed members today!",
  keywords: ["gym", "fitness", "personal training", "weight loss", "strength training", "Pakistan gym", "Lahore gym"],
  authors: [{ name: "FitForge Gym" }],
  openGraph: {
    title: "FitForge Gym - Transform Your Body, Transform Your Life",
    description: "Premium fitness center with expert trainers and personalized programs. Start your transformation today!",
    url: "https://fitforgegym.com",
    siteName: "FitForge Gym",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FitForge Gym",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FitForge Gym - Transform Your Body, Transform Your Life",
    description: "Premium fitness center with expert trainers and personalized programs.",
    images: ["/images/og-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#FF6200",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
