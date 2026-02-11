'use client';

import { Code2, Smartphone, Brain, Monitor, Package, Sparkles } from 'lucide-react';
import { services } from '@/lib/data';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

const iconMap = {
  Code2,
  Smartphone,
  Brain,
  Monitor,
  Package,
  Sparkles,
};

const serviceToProjectMap: Record<string, string> = {
  'textile-erp': 'prova-erp',
  'lms': 'sm-lms',
  'ai-ml': 'waiter-detection',
  'desktop-apps': 'torbiz',
  'mobile-apps': 'streamsync',
  'ecommerce': 'ecommerce-platform',
};

export default function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="section-container">
        <div className="timeline-track hidden md:block" />
        
        <div className="md:ml-24">
          <ScrollReveal>
            <div className="section-header">
              <p className="text-[var(--accent-primary)] text-sm font-medium tracking-widest uppercase mb-4">
                ■ What We Do
              </p>
              <h2 className="section-title">
                Services that<br />
                <span className="text-[var(--text-secondary)]">drive real results</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <ScrollReveal key={service.id} delay={idx * 0.1}>
                  <Link
                    href={`/portfolio#${serviceToProjectMap[service.id]}`}
                    className="block h-full"
                  >
                    <div className="glass-card p-6 h-full group hover:border-[var(--border-active)] transition-all duration-300 cursor-pointer hover:-translate-y-1">
                      <div className="flex flex-col h-full">
                        <div className="w-14 h-14 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-7 h-7 text-[var(--accent-primary)]" />
                        </div>

                        <h3 className="text-xl font-medium text-white mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-[var(--text-secondary)] mb-5 text-sm leading-relaxed">
                          {service.description}
                        </p>

                        <ul className="space-y-2.5 mb-6 flex-grow">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-[var(--accent-primary)] rounded-full mt-1.5 flex-shrink-0" />
                              <span className="text-[var(--text-secondary)] text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-subtle)]">
                          {service.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-white/5 text-[var(--text-secondary)] rounded-lg text-xs hover:bg-white/10 hover:text-white transition-all"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
