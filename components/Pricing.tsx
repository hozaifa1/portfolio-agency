'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import Link from 'next/link';
import { pricingTiers } from '@/lib/data';

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Transparent Pricing
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Subscription-based plans designed for Bangladesh market
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, idx) => (
            <motion.div
              key={tier.id}
              className={`relative rounded-2xl p-8 ${
                tier.recommended
                  ? 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-2xl scale-105 border-4 border-cyan-400'
                  : 'bg-slate-800 border-2 border-slate-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-slate-900 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${tier.recommended ? 'text-white' : 'text-white'}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm mb-6 ${tier.recommended ? 'text-cyan-100' : 'text-slate-400'}`}>
                  {tier.description}
                </p>

                {tier.price ? (
                  <>
                    <div className="mb-2">
                      <span className={`text-5xl font-bold ${tier.recommended ? 'text-white' : 'text-cyan-400'}`}>
                        ৳{tier.price.bdt.toLocaleString()}
                      </span>
                      <span className={`text-lg ${tier.recommended ? 'text-cyan-100' : 'text-slate-400'}`}>
                        /{tier.period}
                      </span>
                    </div>
                    <p className={`text-sm ${tier.recommended ? 'text-cyan-100' : 'text-slate-500'}`}>
                      ~${tier.price.usd} USD
                    </p>
                  </>
                ) : (
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-slate-300">Custom Quote</span>
                    <p className="text-sm text-slate-500 mt-2">Contact us for pricing</p>
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.recommended ? 'text-cyan-100' : 'text-cyan-400'}`} />
                    <span className={tier.recommended ? 'text-white' : 'text-slate-300'}>
                      {feature}
                    </span>
                  </li>
                ))}
                {tier.limitations.map((limitation, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <X className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.recommended ? 'text-cyan-200' : 'text-slate-500'}`} />
                    <span className={tier.recommended ? 'text-cyan-100 line-through' : 'text-slate-500 line-through'}>
                      {limitation}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`block w-full py-3 rounded-lg font-semibold text-center transition-all ${
                  tier.recommended
                    ? 'bg-white text-cyan-600 hover:bg-slate-100'
                    : 'bg-cyan-500 text-white hover:bg-cyan-600'
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 mb-4">
            Need a custom solution or one-time project?
          </p>
          <Link
            href="#contact"
            className="inline-block px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all"
          >
            Request Custom Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
