'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { addOns } from '@/lib/data';

export default function AddOnsPage() {
  return (
    <main className="min-h-screen bg-[#09090b] pt-16">
      <section className="py-20 bg-[#09090b] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <Link 
            href="/pricing"
            className="inline-flex items-center gap-2 text-[#06b6d4] hover:text-cyan-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Pricing
          </Link>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Add-On Services
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-400 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Enhance your subscription with additional services
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addon, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#09090b] border-2 border-slate-800 rounded-xl p-6 hover:border-[#06b6d4] transition-all group"
              >
                <div className="text-[#06b6d4] font-bold text-3xl mb-4">${addon.price}</div>
                <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-[#06b6d4] transition-colors">{addon.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{addon.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/pricing#contact"
              className="inline-block px-8 py-4 bg-[#06b6d4] hover:bg-cyan-500 text-white rounded-lg font-semibold text-lg transition-all shadow-lg shadow-[#06b6d4]/30"
            >
              Request Add-Ons
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
