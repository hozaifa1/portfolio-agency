import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Nexora Systems | Custom Software Development & AI Solutions",
  description: "Building tomorrow's technology today. We build automated ERPs, LMS platforms, and AI-powered solutions that save you money. Enterprise software development with proven expertise.",
  keywords: [
    "ERP software development",
    "LMS platform",
    "textile ERP",
    "education management system",
    "custom software development",
    "business automation",
    "inventory management system",
    "Django development",
    "Next.js development",
    "Python automation",
    "AI integration"
  ],
  authors: [{ name: "S. M. Hozaifa Hossain" }],
  openGraph: {
    title: "Nexora Systems - Building Tomorrow's Technology Today",
    description: "We build automated ERPs, LMS platforms, and AI-powered solutions that save you money.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Spotlight />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
