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
  title: "Synkraft Labs | Custom Software for Textile and Education Sectors Bangladesh",
  description: "Custom software for textile and education sectors. Automate your business with Synkraft Labs. We build ERPs, LMS platforms, and Distributed AI systems that save you money. Based in Dhaka, Bangladesh.",
  keywords: [
    "ERP software Bangladesh",
    "LMS platform Bangladesh",
    "textile ERP",
    "education management system",
    "custom software development Dhaka",
    "business automation Bangladesh",
    "inventory management system",
    "Django development",
    "Next.js development",
    "Python automation",
    "AI integration Bangladesh"
  ],
  authors: [{ name: "S. M. Hozaifa Hossain" }],
  openGraph: {
    title: "Synkraft Labs - Engineering Intelligence for Bangladeshi Enterprises",
    description: "We build automated ERPs, LMS platforms, and Distributed AI systems that save you money.",
    locale: "en_BD",
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
