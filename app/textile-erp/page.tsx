import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Package, TrendingUp, Users, DollarSign, BarChart3, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Textile ERP System | Complete Supply Chain Management Solution - Nexora",
  description: "Industry-leading Textile ERP software for garment, apparel, and fashion businesses. Manage orders, inventory, production, and finances with our comprehensive textile supply chain ERP system.",
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
              Textile ERP System
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto">
            Complete supply chain management solution for textile, garment, and apparel businesses
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
              Why Choose Our Textile ERP?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Built specifically for the textile and garment industry with real-world experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: "Complete Inventory Control",
                description: "Track fabric, accessories, and finished goods in real-time with automatic reorder alerts and supplier ledgers."
              },
              {
                icon: FileText,
                title: "Order Management",
                description: "Manage foreign and local orders, sample development, and production workflows from a single dashboard."
              },
              {
                icon: DollarSign,
                title: "Financial Management",
                description: "Automated invoicing, LC tracking, and comprehensive financial reporting reduce accounting errors by 85%."
              },
              {
                icon: TrendingUp,
                title: "Production Tracking",
                description: "Monitor production metrics, KPIs, and performance dashboards for data-driven decision making."
              },
              {
                icon: Users,
                title: "Multi-User Access",
                description: "Role-based access control for different departments including production, accounts, and management."
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description: "Generate detailed reports on inventory, sales, purchases, and profitability with custom date ranges."
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
                  "Foreign & local order tracking",
                  "Sample development workflow",
                  "Supplier & buyer management",
                  "Fabric & accessory inventory",
                  "LC (Letter of Credit) tracking",
                  "Automated financial reporting",
                  "Production planning & scheduling",
                  "Quality control management",
                  "Shipment tracking",
                  "Multi-currency support",
                  "Custom reports & dashboards",
                  "Mobile-responsive interface"
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
            Ready to Transform Your Textile Business?
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            Join leading textile companies using our ERP system to streamline operations and increase profitability
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
