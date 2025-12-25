'use client';

import { motion } from 'framer-motion';
import { Check, Zap, Shield, Rocket } from 'lucide-react';
import Link from 'next/link';
import Contact from '@/components/Contact';
import { pricingTiers as pricingData, addOns, faqs } from '@/lib/data';

// Icon mapping for pricing tiers
const iconMap = {
  essentials: Zap,
  growth: Shield,
  custom: Rocket
};

const pricingTiers = pricingData.map(tier => ({
  ...tier,
  icon: iconMap[tier.id as keyof typeof iconMap],
  price: tier.price?.bdt || null,
  bestFor: tier.description
}));

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#09090b] pt-16">
      <section className="py-20 bg-[#09090b] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-400 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Monthly subscription. No hidden fees. You own your data.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-[#09090b] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, idx) => {
              const IconComponent = tier.icon;
              return (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative bg-slate-900/50 backdrop-blur-sm border-2 rounded-2xl p-6 hover:border-[#06b6d4] transition-all ${
                    tier.recommended 
                      ? 'border-[#06b6d4] shadow-2xl shadow-[#06b6d4]/20 md:scale-105' 
                      : 'border-slate-800'
                  }`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#06b6d4] text-white px-4 py-1 rounded-full text-xs font-bold">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#06b6d4]/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[#06b6d4]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                      <p className="text-slate-500 text-xs">{tier.bestFor}</p>
                    </div>
                  </div>

                  <div className="mb-6 pb-6 border-b border-slate-800">
                    {tier.price ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-bold text-[#06b6d4]">৳{(tier.price / 1000).toFixed(0)}k</span>
                        <span className="text-slate-400 text-sm">/month</span>
                      </div>
                    ) : (
                      <div className="text-center">
                        <span className="text-3xl font-bold text-slate-300">Custom Quote</span>
                        <p className="text-slate-500 text-sm mt-2">Contact us for pricing</p>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#contact"
                    className={`block w-full py-3 rounded-lg font-semibold text-center transition-all ${
                      tier.recommended
                        ? 'bg-[#06b6d4] text-white hover:bg-cyan-500 shadow-lg shadow-[#06b6d4]/30'
                        : tier.price === null
                        ? 'bg-slate-800 text-white hover:bg-slate-700 border-2 border-slate-700'
                        : 'border-2 border-slate-700 text-slate-300 hover:border-[#06b6d4] hover:text-[#06b6d4]'
                    }`}
                  >
                    {tier.price === null ? 'Contact for Quote' : 'Get Started'}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Add-Ons</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {addOns.map((addon, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-[#09090b] border border-slate-800 rounded-lg p-4 hover:border-[#06b6d4] transition-all group"
              >
                <div className="text-[#06b6d4] font-bold text-xl mb-2">৳{(addon.price / 1000).toFixed(0)}k</div>
                <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-[#06b6d4] transition-colors">{addon.name}</h3>
                <p className="text-slate-500 text-xs">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#09090b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-[#09090b] border border-[#06b6d4]/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">No Lock-Ins</h3>
            <p className="text-slate-400 leading-relaxed">
              You own your data. Cancel anytime and receive a full export in CSV/Excel format within 48 hours. <strong className="text-[#06b6d4]">Your business continuity is guaranteed.</strong>
            </p>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
