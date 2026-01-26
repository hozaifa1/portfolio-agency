import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Package, TrendingUp, Users, DollarSign, BarChart3, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Provabook – Production Control for Modern Buying Houses | Textile ERP - Nexora",
  description: "Stop chasing updates. Start controlling production. Provabook is the operating system for textile buying houses tired of managing million-dollar orders on WhatsApp and Excel. Real-time production visibility from inquiry to shipment.",
  keywords: [
    "textile ERP",
    "textile ERP system",
    "textile ERP software",
    "garment ERP",
    "apparel ERP",
    "fashion ERP",
    "textile supply chain management",
    "textile inventory management",
    "garment production management",
    "textile order management",
    "fabric inventory system",
    "textile accounting software",
    "garment factory management",
    "textile manufacturing ERP",
    "clothing industry ERP",
    "textile business software",
    "Bangladesh textile ERP",
    "RMG ERP software",
    "ready-made garment ERP"
  ],
  openGraph: {
    title: "Textile ERP System - Complete Supply Chain Solution",
    description: "Transform your textile business with our comprehensive ERP system. Manage orders, inventory, production, and finances seamlessly.",
    type: "website",
  },
};

export default function TextileERP() {
  return (
    <main className="bg-[#09090b]">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-cyan-300">
              Provabook – Production Control System
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto">
            Stop chasing updates. Start controlling production. The operating system for textile buying houses tired of managing million-dollar orders on WhatsApp and Excel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="group px-8 py-4 bg-[#06b6d4] hover:bg-cyan-500 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[#06b6d4]/50"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio#prova-erp"
              className="px-8 py-4 border-2 border-[#06b6d4] text-[#06b6d4] hover:bg-[#06b6d4] hover:text-white rounded-lg font-semibold transition-all"
            >
              View Case Study
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Provabook?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Built for buying houses and mills tired of last-minute shipment pressure, Excel chaos, and blind payments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Live Production Cockpit",
                description: "Real-time progress bars showing exactly how much fabric is knitted, dyed, and finished vs. order quantity with automatic process loss calculations."
              },
              {
                icon: FileText,
                title: "The Activity Log (No More 'He Said, She Said')",
                description: "Every action recorded in a permanent, un-editable timeline. Who changed the quantity? When was artwork approved? Why was the lap dip rejected? Evidence built-in."
              },
              {
                icon: Package,
                title: "Centralized Brain for Every Order",
                description: "Tech packs, POs, LCs, and invoices live with the order. Visual timelines show the entire story from inquiry to packing list in one stream."
              },
              {
                icon: BarChart3,
                title: "Precision Loss Tracking",
                description: "New algorithms calculate process loss % and mixed fabric usage automatically. See exactly how much raw material is being wasted per order."
              },
              {
                icon: DollarSign,
                title: "True-Finish Progress Bars",
                description: "Production progress calculated against finished fabric targets, giving you a brutally honest view of how close you are to shipment."
              },
              {
                icon: Users,
                title: "Team Continuity",
                description: "Any team member can step in and see exactly where an order stands. The knowledge belongs to the company, not the person."
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-cyan-400/60 transition-all"
              >
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#09090b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The 4 Problems Provabook Solves
              </h2>
              <ul className="space-y-4">
                {[
                  "Last-Moment Shipment Pressure: Find out about delays before they cost you air freight and discounts",
                  "The 'Excel & WhatsApp' Black Hole: No more buried updates or 'I didn't see that message' excuses",
                  "Merchandiser Dependency: Order history stays with the company, not in someone's memory",
                  "Blind Inspection & Payment: Know if goods are ready and up to spec before you pay",
                  "Real-time progress bars for knitting, dyeing, and finishing stages",
                  "Automatic process loss and finished fabric calculations",
                  "Daily targets showing output vs. required output to hit ETD",
                  "Permanent activity log with who, when, why, and evidence for every change",
                  "Document stack: Tech packs, POs, LCs, and invoices live with the order",
                  "Visual timelines from first inquiry to final packing list",
                  "Granular tracking of greige, yarn, and finishing stages independently",
                  "Mobile-responsive interface for on-the-go production monitoring"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Tech Stack</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">Frontend</h4>
                  <p className="text-slate-400">Next.js, React, TypeScript, Tailwind CSS</p>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">Backend</h4>
                  <p className="text-slate-400">Django, Django REST Framework, Python</p>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">Database</h4>
                  <p className="text-slate-400">PostgreSQL with optimized queries</p>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">Infrastructure</h4>
                  <p className="text-slate-400">Cloudflare R2, DigitalOcean, CDN-backed</p>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">Security</h4>
                  <p className="text-slate-400">SSL encryption, role-based access, daily backups</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Stop Chasing and Start Controlling?
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            Join buying houses and mills using Provabook to replace chaos with a single source of truth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="group px-8 py-4 bg-[#06b6d4] hover:bg-cyan-500 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[#06b6d4]/50"
            >
              Schedule a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 border-2 border-[#06b6d4] text-[#06b6d4] hover:bg-[#06b6d4] hover:text-white rounded-lg font-semibold transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
