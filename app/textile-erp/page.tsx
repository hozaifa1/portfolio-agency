import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Package, TrendingUp, Users, DollarSign, BarChart3, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Provabook - Production OS | Textile Buying House Operating System",
  description: "Provabook is the operating system for textile buying houses. Replace WhatsApp & Excel chaos with a single source of truth. Real-time production tracking, loss calculation, and order management.",
  keywords: [
    "Provabook",
    "textile operating system",
    "buying house software",
    "garment production tracking",
    "textile ERP",
    "process loss tracking",
    "apparel management system",
    "knitting dyeing finishing tracking",
    "textile supply chain",
    "garment merchandiser software"
  ],
  openGraph: {
    title: "Provabook - Production OS",
    description: "The operating system for textile buying houses. Stop chasing updates. Start controlling production.",
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
              Provabook - Production OS
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto">
            The operating system for textile buying houses and mills. Replace WhatsApp & Excel chaos with a single source of truth.
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
              We solve the "Excel & WhatsApp" black hole that kills profits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Live Production Cockpit",
                description: "Forget asking 'status?' 50 times. See real-time progress bars for knitting, dyeing, and finishing vs. targets."
              },
              {
                icon: TrendingUp,
                title: "Precision Loss Tracking",
                description: "Automatic calculation of Process Loss % and Mixed Fabric usage. Stop bleeding raw material."
              },
              {
                icon: FileText,
                title: "The 'Mega-Timeline'",
                description: "A centralized activity log. Every document, note, and status change in one chronological feed."
              },
              {
                icon: Check,
                title: "True-Finish Progress",
                description: "Production progress is calculated against Finished Fabric targets, giving a brutally honest view of shipment readiness."
              },
              {
                icon: Users,
                title: "Merchandiser Independence",
                description: "Order history belongs to the company, not your staff's memory. Anyone can step in and manage the order."
              },
              {
                icon: Package,
                title: "Centralized Order 'Brain'",
                description: "Tech packs, POs, and LCs live with the order, not in email folders. Total visibility from inquiry to shipment."
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
                Key Features for Textile Businesses
              </h2>
              <ul className="space-y-4">
                {[
                  "Real-time knitting/dyeing/finishing progress",
                  "Automatic Process Loss % calculation",
                  "Centralized Document Stack (LCs, POs)",
                  "Visual Activity Timeline",
                  "Granular Yarn & Greige tracking",
                  "Daily Production Targets vs Actual",
                  "Merchandiser-independent history",
                  "Mobile-ready for factory visits",
                  "Shipment readiness alerts",
                  "Multi-currency support",
                  "Custom reports & dashboards",
                  "Role-based access control"
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
            Ready to Control Your Production?
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            Join buying houses that have replaced chaos with Provabook.
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
