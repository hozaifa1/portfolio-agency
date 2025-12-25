import { Metadata } from 'next';
import { Shield, Brain, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | HZH Systems - Engineering Excellence',
  description: 'Learn about our methodology, security standards, and the engineering rigor we apply to business software development.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#09090b] pt-16">
      <section className="py-20 bg-gradient-to-b from-[#09090b] to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">
            Methodology
          </h1>
          <p className="text-xl text-slate-400 text-center max-w-2xl mx-auto">
            We are academic researchers and engineers, not just &quot;hackers.&quot; We apply rigorous standards to your business software.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#09090b] border border-slate-800 rounded-xl p-8 hover:border-[#06b6d4] transition-colors">
              <div className="w-14 h-14 bg-[#06b6d4]/10 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-[#06b6d4]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">The Engineering Standard</h3>
              <p className="text-slate-400 leading-relaxed">
                We apply the same rigor to your business software that we apply to our research in Neuromorphic Computing and AI. Every line of code is intentional, documented, and tested.
              </p>
            </div>

            <div className="bg-[#09090b] border border-slate-800 rounded-xl p-8 hover:border-[#06b6d4] transition-colors">
              <div className="w-14 h-14 bg-[#06b6d4]/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-[#06b6d4]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Security First</h3>
              <div className="text-slate-400 leading-relaxed space-y-3">
                <p><strong className="text-white">Role-Based Access Control:</strong> Learned from deploying Prova ERP and IGMIS LMS with multi-tier user permissions.</p>
                <p><strong className="text-white">Encrypted Databases:</strong> All sensitive data encrypted at rest and in transit using industry standards.</p>
                <p><strong className="text-white">Audit Trails:</strong> Complete logging of all critical operations for compliance and debugging.</p>
              </div>
            </div>

            <div className="bg-[#09090b] border border-slate-800 rounded-xl p-8 hover:border-[#06b6d4] transition-colors">
              <div className="w-14 h-14 bg-[#06b6d4]/10 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-[#06b6d4]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Academic Foundation</h3>
              <p className="text-slate-400 leading-relaxed">
                Our approach is rooted in computer science principles, not shortcuts. We study algorithms, optimize performance, and document decisions like academic papers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#09090b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#06b6d4] to-cyan-600 rounded-full flex items-center justify-center text-white text-5xl font-bold">
                SH
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-4">The Founder</h2>
                <h3 className="text-xl text-[#06b6d4] mb-4">S. M. Hozaifa Hossain</h3>
                <div className="space-y-3 text-slate-300">
                  <p><strong className="text-white">Education:</strong> Final Year B.Sc. in Electrical & Electronic Engineering, University of Dhaka</p>
                  <p><strong className="text-white">Leadership:</strong> IEEE SIGHT Chair, Bangladesh Section</p>
                  <p><strong className="text-white">Specialization:</strong> Automation Systems, Distributed AI, Full-Stack Engineering</p>
                  <p><strong className="text-white">Research:</strong> Neuromorphic Computing, Solar Cell Optimization, Computer Vision</p>
                  <p className="text-slate-400 italic mt-4">
                    &quot;I build systems that don&apos;t just work—they work efficiently, securely, and at scale. Every project is an opportunity to apply research-grade engineering to real-world problems.&quot;
                  </p>
                </div>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#06b6d4] hover:bg-cyan-500 text-white rounded-lg font-semibold transition-all"
                >
                  View Full CV
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose HZH Systems?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'No WordPress templates or page builders - everything custom-built',
              'Research-backed architectural decisions',
              'Direct access to the engineer, not a sales team',
              'Code quality you can audit and understand',
              'Long-term maintainability over quick hacks',
              'Transparent pricing with no vendor lock-in'
            ].map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 text-left">
                <div className="w-6 h-6 bg-[#06b6d4] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="text-slate-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
