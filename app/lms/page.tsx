import { Phone, Mail, CheckCircle2, XCircle, ArrowRight, LayoutDashboard, Users, FileSpreadsheet, GraduationCap, ClipboardCheck, UserPlus, Wallet, Award } from 'lucide-react';

export default function LMSPage() {
  return (
    <main className="min-h-[100dvh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1e1b4b] via-[#020617] to-[#020617] text-slate-200 overflow-x-hidden flex flex-col px-4 sm:px-6 lg:px-8 py-10 lg:py-0 relative selection:bg-teal-500/30">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full lg:my-auto flex flex-col gap-6 sm:gap-8 relative z-10">
        
        {/* Header Section */}
        <div className="space-y-2 border-l-2 border-teal-500 pl-4">
          <h1 className="flex flex-wrap items-baseline gap-3 text-3xl sm:text-4xl md:text-5xl font-bold font-mono tracking-tight text-white">
            SM LMS
            <span className="text-[10px] sm:text-xs font-sans font-normal text-teal-400/80 tracking-widest uppercase border border-teal-500/30 px-2 py-0.5 rounded-full">
              Learning Management System
            </span>
          </h1>
          <h2 className="text-lg sm:text-xl font-medium text-slate-300">
            One Platform for <span className="text-teal-400">Academic & Administrative Operations</span>
          </h2>
          <p className="text-teal-100/90 text-sm sm:text-base font-medium max-w-2xl leading-relaxed bg-teal-900/10 p-2 rounded-lg border border-teal-500/10 backdrop-blur-sm">
            Streamline your entire institution—from admissions to results—with a platform built for modern education.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Problem & Advantages */}
          <div className="space-y-8">
            {/* The Problem */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors">
              <h3 className="flex items-center gap-2 text-sm font-bold font-mono text-rose-400 uppercase mb-3">
                <XCircle className="w-4 h-4" /> The Bottleneck
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-3">
                Traditional academic management relies on fragmented tools:
              </p>
              <div className="grid grid-cols-2 gap-2 text-slate-300 text-xs sm:text-sm">
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>Paper Registers</div>
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>Excel Chaos</div>
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>Manual Grading</div>
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>Data Silos</div>
              </div>
            </div>

            {/* Key Advantages */}
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-sm font-bold font-mono text-amber-400 uppercase">
                <CheckCircle2 className="w-4 h-4" /> The Advantage
              </h3>
              <div className="space-y-2">
                {[
                  "Reduce administrative workload by 60%",
                  "Prepare exams 3x faster with automation",
                  "Save 2-3 days per exam cycle",
                  "Maintain clean, audit-ready records",
                  "Scale effortlessly from 50 to 5,000+ students",
                  "Fully tailor-made architecture customizable to your institution's specific needs"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-500 group-hover:scale-125 transition-transform" />
                    <span className="text-slate-300 text-xs sm:text-sm group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Solution & Flow */}
          <div className="space-y-8">
            {/* The Solution */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold font-mono text-teal-400 uppercase">
                <LayoutDashboard className="w-4 h-4" /> The Solution
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                SM LMS <span className="text-slate-500 font-normal text-sm ml-2">v2.0</span>
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed border-l-2 border-slate-700 pl-3">
                A centralized ecosystem managing the <span className="text-teal-400 font-medium">entire academic lifecycle</span>:
              </p>
              
              <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-mono text-slate-400 bg-black/20 p-3 rounded-lg border border-white/5 w-fit">
                <span className="text-blue-400">Admissions</span>
                <ArrowRight className="w-3 h-3 text-slate-600" />
                <span className="text-indigo-400">Login</span>
                <ArrowRight className="w-3 h-3 text-slate-600" />
                <span className="text-emerald-400">Attendance</span>
                <ArrowRight className="w-3 h-3 text-slate-600" />
                <span className="text-amber-400">Accounts</span>
                <ArrowRight className="w-3 h-3 text-slate-600" />
                <span className="text-purple-400">Exams</span>
                <ArrowRight className="w-3 h-3 text-slate-600" />
                <span className="text-rose-400">Results</span>
              </div>
            </div>

            {/* Dashboard Visual */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold font-mono text-slate-500 uppercase tracking-widest text-center">
                UNIFIED DASHBOARD VIEW
              </h3>
              
              <div className="relative py-8 px-4 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent -translate-y-1/2 hidden md:block"></div>
                
                <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center justify-items-center">
                  {[
                    { label: "Admissions", icon: UserPlus, color: "text-blue-400", border: "border-blue-500/30" },
                    { label: "Attendance", icon: ClipboardCheck, color: "text-emerald-400", border: "border-emerald-500/30", offset: true },
                    { label: "Accounts", icon: Wallet, color: "text-amber-400", border: "border-amber-500/30" },
                    { label: "Exams", icon: FileSpreadsheet, color: "text-purple-400", border: "border-purple-500/30", offset: true },
                    { label: "Results", icon: CheckCircle2, color: "text-rose-400", border: "border-rose-500/30" },
                    { label: "Reports", icon: GraduationCap, color: "text-cyan-400", border: "border-cyan-500/30", offset: true }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className={`
                        relative z-10 w-full flex justify-center
                        col-span-1
                        ${item.offset ? 'md:translate-y-8' : ''}
                      `}
                    >
                      <div className={`
                        bg-[#0f172a] border ${item.border} rounded-xl px-3 py-2.5 
                        flex flex-col items-center gap-1.5
                        w-full max-w-[100px] text-center shadow-lg 
                        hover:scale-105 transition-all duration-300 cursor-default group
                      `}>
                        <item.icon className={`w-4 h-4 ${item.color} opacity-80 group-hover:opacity-100`} />
                        <span className="text-[10px] sm:text-xs font-medium text-slate-300 group-hover:text-white transition-colors">
                          {item.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-white/5 pt-6 mt-2">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-2">
              <h3 className="text-sm font-bold font-mono text-teal-400 uppercase tracking-wider">
                Ready to Upgrade?
              </h3>
              <p className="text-white text-base sm:text-lg font-medium">
                Join institutions modernizing with <span className="text-teal-400">SM LMS</span>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 text-sm w-full md:w-auto">
              <a 
                href="mailto:20hozaifa02@gmail.com" 
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-slate-300 hover:text-white"
              >
                <Mail className="w-4 h-4 text-teal-400" />
                20hozaifa02@gmail.com
              </a>
              <a 
                href="tel:+8801615001456" 
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 transition-all text-teal-300 hover:text-teal-200"
              >
                <Phone className="w-4 h-4" />
                +880 1615 001456
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
