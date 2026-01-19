'use client';

import { motion } from 'framer-motion';
import { Code2, Smartphone, Brain, Monitor, Package, Sparkles } from 'lucide-react';
import { services } from '@/lib/data';
import Link from 'next/link';

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
    <section id="services" className="py-16 bg-[#09090b] relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Services We Offer
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            End-to-end software solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Link
                key={service.id}
                href={`/portfolio#${serviceToProjectMap[service.id]}`}
                className="block"
              >
                <motion.div
                  className="group relative bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/60 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-cyan-500/20 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-cyan-500/20">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 mb-6 text-base leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6 flex-grow">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></span>
                        <span className="text-slate-200 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                    {service.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-slate-800/50 text-cyan-300 rounded-lg text-xs font-semibold border border-slate-600/50 hover:border-cyan-400/50 hover:bg-slate-700/50 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
