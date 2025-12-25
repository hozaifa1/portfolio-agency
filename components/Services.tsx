'use client';

import { motion } from 'framer-motion';
import { Code2, Smartphone, Brain, Monitor } from 'lucide-react';
import { services } from '@/lib/data';

const iconMap = {
  Code2,
  Smartphone,
  Brain,
  Monitor,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#09090b] relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services We Offer
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            End-to-end software solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                className="group bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border-2 border-slate-800 hover:border-[#06b6d4] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-[#06b6d4]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#06b6d4]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#06b6d4]" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-400 mb-6 text-sm">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#06b6d4] rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-800 text-slate-400 rounded-lg text-xs font-medium border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
