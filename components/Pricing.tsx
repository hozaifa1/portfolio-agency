'use client';

import { Check, X } from 'lucide-react';
import Link from 'next/link';
import { pricingTiers } from '@/lib/data';
import ScrollReveal from './ScrollReveal';

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32">
      <div className="section-container">
        <div className="timeline-track hidden md:block" />
        
        <div className="md:ml-24">
          <ScrollReveal>
            <div className="section-header">
              <p className="text-[var(--accent-primary)] text-sm font-medium tracking-widest uppercase mb-4">
                ■ Pricing
              </p>
              <h2 className="section-title">
                Transparent<br />
                <span className="text-[var(--text-secondary)]">pricing plans</span>
              </h2>
              <p className="section-subtitle">
                Subscription-based plans designed for the Bangladesh market
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, idx) => (
              <ScrollReveal key={tier.id} delay={idx * 0.1}>
                <div
                  className={`relative rounded-2xl p-8 h-full ${
                    tier.recommended
                      ? 'glass-card border-[var(--border-active)] shadow-lg shadow-[var(--accent-glow)]'
                      : 'glass-card'
                  }`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--accent-primary)] text-black rounded-full text-xs font-bold uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-medium text-white mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] mb-6">
                      {tier.description}
                    </p>

                    {tier.price ? (
                      <div className="mb-2">
                        <span className="text-5xl font-light text-[var(--accent-primary)]">
                          ${tier.price}
                        </span>
                        <span className="text-lg text-[var(--text-muted)]">
                          /{tier.period}
                        </span>
                      </div>
                    ) : (
                      <div className="mb-2">
                        <span className="text-3xl font-light text-[var(--text-secondary)]">Custom Quote</span>
                        <p className="text-sm text-[var(--text-muted)] mt-2">Contact us for pricing</p>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--accent-primary)]" />
                        <span className="text-[var(--text-secondary)] text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                    {tier.limitations.map((limitation, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <X className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--text-muted)]" />
                        <span className="text-[var(--text-muted)] line-through text-sm">
                          {limitation}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#contact"
                    className={`block w-full py-3 rounded-full font-semibold text-center transition-all duration-300 ${
                      tier.recommended
                        ? 'bg-[var(--accent-primary)] text-black hover:shadow-lg hover:shadow-[var(--accent-glow)]'
                        : 'border border-white/20 text-white hover:bg-white/5'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-12 text-center">
              <p className="text-[var(--text-muted)] mb-4">
                Need a custom solution or one-time project?
              </p>
              <Link
                href="#contact"
                className="inline-block px-8 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition-all"
              >
                Request Custom Quote
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
