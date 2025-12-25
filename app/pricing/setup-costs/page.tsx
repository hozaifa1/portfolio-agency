'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';

export default function SetupCostsPage() {
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
            Setup & Implementation Costs
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-400 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            One-time fees to get your system up and running
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#09090b] border-2 border-slate-800 rounded-xl p-8 hover:border-[#06b6d4] transition-all"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Essentials Setup</h3>
                <p className="text-slate-400 text-sm">For basic websites & landing pages</p>
              </div>
              <div className="mb-6">
                <div className="text-5xl font-bold text-[#06b6d4] mb-2">$170</div>
                <p className="text-slate-500 text-sm">One-time setup cost</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Initial configuration & deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Domain & hosting setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">SSL certificate installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Basic SEO configuration</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#09090b] border-2 border-slate-800 rounded-xl p-8 hover:border-[#06b6d4] transition-all"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">E-commerce Setup</h3>
                <p className="text-slate-400 text-sm">For online stores</p>
              </div>
              <div className="mb-6">
                <div className="text-5xl font-bold text-[#06b6d4] mb-2">$350<span className="text-2xl">+</span></div>
                <p className="text-slate-500 text-sm">Starting price based on scope</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Up to 50 products: $350</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">51-200 products: $550</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">200+ products: Custom quote</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Product catalog setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Payment gateway integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Inventory management setup</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#09090b] border-2 border-[#06b6d4] rounded-xl p-8 relative"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#06b6d4] text-white px-4 py-1 rounded-full text-xs font-bold">
                MOST POPULAR
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Growth Implementation</h3>
                <p className="text-slate-400 text-sm">For ERP/LMS systems</p>
              </div>
              <div className="mb-6">
                <div className="text-5xl font-bold text-[#06b6d4] mb-2">$410</div>
                <p className="text-slate-500 text-sm">One-time implementation cost</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Complete system architecture setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Database design & migration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">User role configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Integration with existing systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">Staff training & documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">2 weeks of priority support</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Need Additional Services?</h3>
            <p className="text-slate-400 mb-6">
              Enhance your system with add-on services like staff training, biometric integration, or payment gateway setup.
            </p>
            <Link
              href="/pricing/add-ons"
              className="inline-block px-8 py-3 bg-[#06b6d4] hover:bg-cyan-500 text-white rounded-lg font-semibold transition-all shadow-lg shadow-[#06b6d4]/30"
            >
              View Add-On Services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-slate-500 text-sm mb-4">
              Setup costs are billed once upfront. Monthly subscription fees apply separately.
            </p>
            <Link
              href="#contact"
              className="inline-block px-8 py-3 border-2 border-[#06b6d4] text-[#06b6d4] rounded-lg font-semibold hover:bg-[#06b6d4] hover:text-white transition-all"
            >
              Contact Us for Custom Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
