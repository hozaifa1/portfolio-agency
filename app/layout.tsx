import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Spotlight from '@/components/Spotlight';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexora Systems | Textile ERP, Software Solutions & AI Development",
  description: "Leading software development company specializing in Textile ERP systems, custom software solutions, LMS platforms, and AI-powered business automation. Transform your operations with enterprise-grade technology.",
  keywords: [
    "Nexora",
    "Nexora Systems",
    "textile ERP software",
    "textile ERP system",
    "garment ERP",
    "apparel ERP",
    "fashion industry ERP",
    "textile supply chain management",
    "textile inventory management",
    "software solution",
    "software solutions",
    "custom software development",
    "ERP software development",
    "ERP development company",
    "SM LMS",
    "LMS platform",
    "learning management system",
    "education management system",
    "business automation software",
    "inventory management system",
    "order management system",
    "supply chain ERP",
    "Django development",
    "Next.js development",
    "Python automation",
    "AI integration",
    "enterprise software development",
    "Bangladesh software company",
    "textile software Bangladesh"
  ],
  authors: [{ name: "S. M. Hozaifa Hossain" }],
  openGraph: {
    title: "Nexora Systems - Textile ERP & Custom Software Solutions",
    description: "Transform your textile business with our industry-leading ERP systems. Custom software development, LMS platforms, and AI-powered automation that reduce operational costs for modern enterprises.",
    locale: "en_US",
    type: "website",
    siteName: "Nexora Systems",
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
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <Spotlight />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
