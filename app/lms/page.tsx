import { Phone, Mail } from 'lucide-react';

export default function LMSPage() {
  return (
    <main className="h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white overflow-x-hidden flex flex-col justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-between gap-4 sm:gap-6">
        
        {/* Header Section */}
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono tracking-tight text-white">
            SM LMS
          </h1>
          <h2 className="text-lg sm:text-xl font-semibold text-slate-200">
            One System for Academic Operations
          </h2>
          <p className="text-[#06b6d4] text-xs sm:text-sm font-medium">
            Academic operations—simplified for institutions of any size.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Problem & Advantages */}
          <div className="space-y-6">
            {/* The Problem */}
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-bold font-mono text-slate-100 uppercase">
                THE PROBLEM
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                Most institutions still manage academics using:
              </p>
              <ul className="space-y-1 text-slate-300 text-xs sm:text-sm">
                <li className="flex items-center gap-2">• Paper registers</li>
                <li className="flex items-center gap-2">• Multiple Excel files</li>
                <li className="flex items-center gap-2">• Repeated exam templates</li>
                <li className="flex items-center gap-2">• Manual result checks</li>
              </ul>
              <div className="pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">
                This leads to: <span className="text-red-400">×</span> 30-40% admin time loss <span className="text-red-400">×</span> Frequent grading errors <span className="text-red-400">×</span> Delayed results <span className="text-red-400">×</span> Poor visibility for leadership
              </div>
            </div>

            {/* Key Advantages */}
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-bold font-mono text-slate-100 uppercase">
                KEY ADVANTAGES (WITH IMPACT)
              </h3>
              <ul className="space-y-1 text-[#4ade80] text-xs sm:text-sm font-medium">
                <li className="flex items-center gap-2">• 60% less administrative workload</li>
                <li className="flex items-center gap-2">• 3× faster exam preparation</li>
                <li className="flex items-center gap-2">• 2-3 days saved per exam cycle</li>
                <li className="flex items-center gap-2">• Clean, audit-ready records</li>
                <li className="flex items-center gap-2">• Scales from 50 to 5,000+ students</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Solution & Flow */}
          <div className="space-y-6">
            {/* The Solution */}
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-bold font-mono text-slate-100 uppercase">
                THE SOLUTION
              </h3>
              <h4 className="text-base sm:text-lg font-bold text-white">SM LMS</h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                A centralized Learning Management System that manages the <span className="text-[#4ade80]">entire academic lifecycle</span>:
              </p>
              <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-xs sm:text-sm text-[#06b6d4] font-mono">
                Course Setup → Attendance → Exams → Results
              </div>
              <p className="text-slate-300 text-xs sm:text-sm">
                All aligned. All accurate. All in one place.
              </p>
            </div>

            {/* Dashboard Visual */}
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-bold font-mono text-slate-100 uppercase tracking-tighter">
                ONE DASHBOARD. FULL CONTROL.
              </h3>
              
              <div className="relative py-6">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#06b6d4] via-[#3b82f6] to-[#06b6d4] -translate-y-1/2 hidden sm:block opacity-50"></div>
                
                <div className="relative grid grid-cols-2 sm:grid-cols-5 gap-3 items-center justify-items-center">
                  {/* Student - Top */}
                  <div className="relative z-10 w-full col-span-1 sm:col-span-1 flex justify-center">
                    <div className="bg-[#020617] border border-[#06b6d4] rounded-full px-2 py-1.5 text-xs text-slate-200 w-full max-w-[100px] text-center shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:scale-105 transition-transform cursor-default">
                      Student
                    </div>
                  </div>

                  {/* Attendance - Bottom (Desktop) */}
                  <div className="relative z-10 w-full col-span-1 sm:col-span-1 flex justify-center sm:translate-y-10">
                     <div className="bg-[#020617] border border-[#3b82f6] rounded-full px-2 py-1.5 text-xs text-slate-200 w-full max-w-[100px] text-center shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:scale-105 transition-transform cursor-default">
                      Attendance
                    </div>
                  </div>

                  {/* Exams - Top */}
                  <div className="relative z-10 w-full col-span-1 sm:col-span-1 flex justify-center">
                    <div className="bg-[#020617] border border-[#3b82f6] rounded-full px-2 py-1.5 text-xs text-slate-200 w-full max-w-[100px] text-center shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:scale-105 transition-transform cursor-default">
                      Exams
                    </div>
                  </div>

                  {/* Report Cards - Bottom (Desktop) */}
                  <div className="relative z-10 w-full col-span-1 sm:col-span-1 flex justify-center sm:translate-y-10">
                    <div className="bg-[#020617] border border-[#3b82f6] rounded-full px-2 py-1.5 text-xs text-slate-200 w-full max-w-[100px] text-center shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:scale-105 transition-transform cursor-default">
                      Report Cards
                    </div>
                  </div>

                  {/* Results - Top */}
                  <div className="relative z-10 w-full col-span-2 sm:col-span-1 flex justify-center">
                    <div className="bg-[#020617] border border-[#06b6d4] rounded-full px-2 py-1.5 text-xs text-slate-200 w-full max-w-[100px] text-center shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:scale-105 transition-transform cursor-default">
                      Results
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-white/10 pt-4 mt-1">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold font-mono text-white uppercase">
                READY TO MODERNIZE?
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                If your institution: • Runs classes • Tracks attendance • Conducts exams • Publishes results
              </p>
              <p className="text-white text-sm font-medium">
                You&apos;re ready for <span className="text-[#06b6d4]">SM LMS</span>.
              </p>
            </div>
            
            <div className="space-y-2 w-full md:w-auto">
              <h3 className="text-lg sm:text-xl font-bold font-mono text-white uppercase md:text-right">
                BOOK A DEMO
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 text-xs sm:text-sm text-[#3b82f6] md:justify-end">
                <a href="mailto:20hozaifa02@gmail.com" className="flex items-center gap-2 hover:text-[#60a5fa] transition-colors">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                  20hozaifa02@gmail.com
                </a>
                <a href="tel:+8801615001456" className="flex items-center gap-2 hover:text-[#60a5fa] transition-colors">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  +880 1615 001456
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
