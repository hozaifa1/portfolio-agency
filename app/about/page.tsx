import { Metadata } from 'next';
import { Shield, Brain, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | Nexora - Engineering Excellence',
  description: 'Learn about our methodology, security standards, and the engineering rigor we apply to business software development.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#09090b] pt-16">
      <section className="py-20 bg-[#09090b] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">
            Methodology
          </h1>
          <p className="text-xl text-slate-400 text-center max-w-2xl mx-auto">
            We are academic researchers and engineers, not just &quot;hackers.&quot; We apply rigorous standards to your business software.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#09090b]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-[#06b6d4] transition-all group">
              <div className="w-12 h-12 bg-[#06b6d4]/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-[#06b6d4]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#06b6d4] transition-colors">The Engineering Standard</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                We apply the same rigor to your business software that we apply to our research in Neuromorphic Computing and AI. Every line of code is intentional, documented, and tested.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-[#06b6d4] transition-all group">
              <div className="w-12 h-12 bg-[#06b6d4]/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#06b6d4]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#06b6d4] transition-colors">Security First</h3>
              <div className="text-slate-400 leading-relaxed space-y-2 text-sm">
                <p><strong className="text-white">Role-Based Access:</strong> Multi-tier permissions from Prova ERP & IGMIS LMS.</p>
                <p><strong className="text-white">Encrypted Databases:</strong> Data encrypted at rest and in transit.</p>
                <p><strong className="text-white">Audit Trails:</strong> Complete logging for compliance.</p>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-[#06b6d4] transition-all group">
              <div className="w-12 h-12 bg-[#06b6d4]/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-[#06b6d4]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#06b6d4] transition-colors">Academic Foundation</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Our approach is rooted in computer science principles, not shortcuts. We study algorithms, optimize performance, and document decisions like academic papers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#06b6d4] to-cyan-600 rounded-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0">
                SH
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-2">The Founder</h2>
                <h3 className="text-lg text-[#06b6d4] mb-3">S. M. Hozaifa Hossain</h3>
                <div className="space-y-2 text-slate-300 text-sm">
                  <p><strong className="text-white">Education:</strong> Final Year EEE, University of Dhaka</p>
                  <p><strong className="text-white">Leadership:</strong> IEEE SIGHT Chair, Bangladesh</p>
                  <p><strong className="text-white">Focus:</strong> Automation, Distributed AI, Full-Stack Engineering</p>
                  <p className="text-slate-400 italic mt-3">
                    &quot;I build systems that work efficiently, securely, and at scale.&quot;
                  </p>
                </div>
                <Link 
                  href="#contact" 
                  className="inline-flex items-center gap-2 mt-4 px-5 py-2 bg-[#06b6d4] hover:bg-cyan-500 text-white rounded-lg font-semibold transition-all text-sm"
                >
                  Contact Me
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#09090b]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Why Choose Nexora?</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              'Custom-built, no templates',
              'Research-backed decisions',
              'Direct engineer access',
              'Auditable code quality',
              'Long-term maintainability',
              'No vendor lock-in'
            ].map((point, idx) => (
              <div key={idx} className="flex items-center gap-3 text-left bg-slate-900/50 p-4 rounded-lg border border-slate-800 hover:border-[#06b6d4] transition-colors">
                <div className="w-5 h-5 bg-[#06b6d4] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p className="text-slate-300 text-sm">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
