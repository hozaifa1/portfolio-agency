'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will get back to you within 24 hours.');
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Get a free consultation and project estimate within 24 hours
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:20hozaifa02@gmail.com" className="text-cyan-100 hover:text-white">
                      20hozaifa02@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a href="tel:+8801615001456" className="text-cyan-100 hover:text-white">
                      +880 1615 001456
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p className="text-cyan-100">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <p className="font-semibold mb-2">Response Time</p>
                <p className="text-cyan-100">We typically respond within 12-24 hours on business days</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                Company / Organization
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-semibold text-slate-700 mb-2">
                Estimated Budget
              </label>
              <select
                id="budget"
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              >
                <option value="">Select budget range</option>
                <option value="starter">৳15,000 - ৳30,000/month (Starter)</option>
                <option value="growth">৳30,000 - ৳50,000/month (Growth)</option>
                <option value="enterprise">৳50,000+/month (Enterprise)</option>
                <option value="custom">Custom / One-time Project</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your project, timeline, and any specific requirements..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="w-5 h-5" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
