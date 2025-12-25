'use client';

import { motion } from 'framer-motion';
import { Check, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Contact from '@/components/Contact';

const pricingTiers = [
  {
    id: 'essentials',
    name: 'Essentials',
    subtitle: 'The Validator',
    bestFor: 'Small Showrooms, Coaching Centers, Individual Consultancies',
    implementation: 50000,
    monthly: 15000,
    features: {
      engineering: [
        'Next.js High-Performance Single Page App (up to 5 pages)',
        'Serverless API integration (for contact forms & lead collection)',
        'Database: Local JSON/Static CMS (Zero latency, instant loading)',
        'UI/UX: Dark-mode "Stealth" design system (Mobile Responsive)'
      ],
      operations: [
        'Hosting: High-speed Edge Network (Vercel Global CDN)',
        'Security: DDOS Protection & SSL Certificate Management',
        'Updates: 1 "Content Sprint" per month (Update images, text, or pricing data)',
        'Support: Email Support (48-hour response time)'
      ]
    },
    recommended: false
  },
  {
    id: 'growth',
    name: 'Growth',
    subtitle: 'The ERP Standard',
    bestFor: 'Textile Buying Houses, Medium-Sized Colleges, Factories',
    implementation: 75000,
    monthly: 40000,
    features: {
      engineering: [
        'Full-Stack Web App: Next.js + Django/Python Logic',
        'Auth System: Secure Login for Staff/Admins (Role-Based Access)',
        'Inventory/Stock Management System',
        'Automated PDF Invoice/Report Generation',
        'Financial Ledger Dashboards',
        'Data Migration: Importing old Excel/Paper records (up to 1,000 records)'
      ],
      operations: [
        'Database Management: Daily Backups & Integrity Checks',
        'Priority Maintenance: Critical Bug Fixes (guaranteed within 24 hours)',
        'Feature Requests: 5 hours of dedicated development time per month',
        'Support: Direct WhatsApp Line (Business Hours) + Monthly "System Health" Report'
      ]
    },
    recommended: true
  },
  {
    id: 'sovereign',
    name: 'Sovereign',
    subtitle: 'Enterprise AI',
    bestFor: 'Large Holdings, Tech Startups, High-Traffic Platforms',
    implementation: 150000,
    monthly: 60000,
    features: {
      engineering: [
        'Distributed Architecture: Rust/Python-based backend for heavy computation',
        'AI Integration: Custom LLM (Chatbot) or Prediction Models',
        'Multi-Platform: Web App + Progressive Web App (PWA) for Android/iOS',
        'Advanced Analytics & Reporting Dashboards',
        'Custom API Development',
        'Third-party Integrations (Payment Gateways, ERP systems, etc.)'
      ],
      operations: [
        'Infrastructure: Dedicated VPS Management (DigitalOcean/AWS)',
        '24/7 Monitoring: Uptime alerts and immediate disaster recovery',
        'Consultancy: Monthly Strategy Call (How to use tech to cut business costs)',
        'Premium Support: Dedicated Slack/Discord channel with <2 hour response'
      ]
    },
    recommended: false
  }
];

const addOns = [
  { name: 'Urgent Delivery', price: 25000, description: 'Rush fee for delivery under 14 days' },
  { name: 'Staff Training', price: 10000, description: 'On-site or Zoom training for employees (per session)' },
  { name: 'Biometric Integration', price: 20000, description: 'Hardware linking (fingerprint scanners) for attendance systems' },
  { name: 'Payment Gateway', price: 15000, description: 'Integration with SSLCommerz or bKash Merchant API' }
];

const faqs = [
  {
    question: 'Why am I paying monthly if the software is already built?',
    answer: 'You\'re not just buying code; you\'re buying a "Digital Department." The monthly retainer covers hosting infrastructure, security updates, backups, bug fixes, feature improvements, and direct access to your technical partner. Think of it like paying rent for a physical office - except this office never closes and keeps improving.'
  },
  {
    question: 'What happens if I cancel my subscription?',
    answer: 'You own your data. If you cancel, we provide a full export of your database in CSV/Excel format within 48 hours. No lock-ins. The source code remains yours if agreed upon in the contract. However, hosting and maintenance services will cease.'
  },
  {
    question: 'Can I switch between plans?',
    answer: 'Absolutely. You can upgrade at any time. Downgrading is possible at the end of your current billing cycle. We\'ll help migrate your features accordingly.'
  },
  {
    question: 'Do you provide the source code?',
    answer: 'Yes. Upon final payment of the implementation fee, you receive full access to your project\'s source code repository. You can host it yourself or keep using our managed services.'
  },
  {
    question: 'What if I need something not listed in any tier?',
    answer: 'We offer custom quotes for unique requirements. Contact us and we\'ll design a solution that fits your exact needs and budget.'
  }
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');

  return (
    <main className="min-h-screen bg-[#09090b] pt-16">
      <section className="py-20 bg-gradient-to-b from-[#09090b] to-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-400 mb-8">
            Build + Retain Model. No hidden fees. You own your data.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-slate-800 p-2 rounded-full">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingCycle === 'monthly' 
                  ? 'bg-[#06b6d4] text-white' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Billed Monthly
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingCycle === 'quarterly' 
                  ? 'bg-[#06b6d4] text-white' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Billed Quarterly
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">Save 10%</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, idx) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative bg-[#09090b] border-2 rounded-2xl p-8 ${
                  tier.recommended 
                    ? 'border-[#06b6d4] scale-105 shadow-2xl shadow-[#06b6d4]/20' 
                    : 'border-slate-800'
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#06b6d4] text-white px-6 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR FOR SMEs
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-[#06b6d4] text-sm font-semibold mb-1">{tier.subtitle}</p>
                  <p className="text-slate-500 text-xs mb-4">Best for: {tier.bestFor}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <p className="text-slate-400 text-sm mb-1">One-Time Implementation</p>
                    <p className="text-3xl font-bold text-white">৳{tier.implementation.toLocaleString()}</p>
                    <p className="text-slate-500 text-xs">BDT</p>
                  </div>
                  
                  <div className="bg-slate-800 rounded-lg p-4">
                    <p className="text-slate-400 text-sm mb-1">Monthly Retainer</p>
                    <p className="text-3xl font-bold text-[#06b6d4]">
                      ৳{billingCycle === 'quarterly' 
                        ? Math.round(tier.monthly * 0.9).toLocaleString() 
                        : tier.monthly.toLocaleString()}
                    </p>
                    <p className="text-slate-500 text-xs">/month</p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wide">Core Engineering</h4>
                    <ul className="space-y-2">
                      {tier.features.engineering.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wide">Operations (Monthly)</h4>
                    <ul className="space-y-2">
                      {tier.features.operations.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href="#contact"
                  className={`block w-full py-3 rounded-lg font-semibold text-center transition-all ${
                    tier.recommended
                      ? 'bg-[#06b6d4] text-white hover:bg-cyan-500'
                      : 'border-2 border-[#06b6d4] text-[#06b6d4] hover:bg-[#06b6d4] hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#09090b]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Add-On Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {addOns.map((addon, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-[#06b6d4] transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{addon.name}</h3>
                  <span className="text-[#06b6d4] font-bold text-lg">৳{addon.price.toLocaleString()}</span>
                </div>
                <p className="text-slate-400 text-sm">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#09090b] border border-slate-800 rounded-lg p-6"
              >
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-slate-400 leading-relaxed pl-7">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#09090b]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Transparency Promise</h3>
            <p className="text-slate-400 leading-relaxed">
              You own your data. If you cancel your subscription, we provide a full export of your database in CSV/Excel format within 48 hours. <strong className="text-white">No lock-ins.</strong> No proprietary formats. Your business continuity is guaranteed.
            </p>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
