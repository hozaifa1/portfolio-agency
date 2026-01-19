import { Phone, Mail } from 'lucide-react';

export default function LMSPage() {
  return (
    <main className="h-screen bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] through-[#0891b2] to-[#0f766e] text-white overflow-x-hidden flex flex-col justify-center px-4 sm:px-6 lg:px-8 relative">
      {/* Academic pattern overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-between gap-4 sm:gap-6 relative z-10">
        
        {/* Header Section */}
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono tracking-tight text-white">
            SM LMS
          </h1>
          <h2 className="text-lg sm:text-xl font-semibold text-slate-200">
            One System for Academic Operations
          </h2>
          <p className="text-[#fbbf24] text-xs sm:text-sm font-medium">
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
              <div className="pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                This leads to: <span className="text-orange-400">×</span> 30-40% admin time loss <span className="text-orange-400">×</span> Frequent grading errors <span className="text-orange-400">×</span> Delayed results <span className="text-orange-400">×</span> Poor visibility for leadership
              </div>
            </div>

            {/* Key Advantages */}
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-bold font-mono text-slate-100 uppercase">
                KEY ADVANTAGES (WITH IMPACT)
              </h3>
              <ul className="space-y-1 text-[#10b981] text-xs sm:text-sm font-medium">
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
                A centralized Learning Management System that manages the <span className="text-[#10b981]">entire academic lifecycle</span>:
              </p>
              <div className="p-2 bg-white/10 rounded-lg border border-white/20 text-xs sm:text-sm text-[#fbbf24] font-mono">
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
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#fbbf24] via-[#10b981] to-[#fbbf24] -translate-y-1/2 hidden sm:block opacity-60"></div>
                
                <div className="relative grid grid-cols-2 sm:grid-cols-5 gap-3 items-center justify-items-center">
                  {/* Student - Top */}
                  <div className="relative z-10 w-full col-span-1 sm:col-span-1 flex justify-center">
                    <div className="bg-white/10 backdrop-blur-sm border border-[#fbbf24] rounded-full px-2 py-1.5 text-xs text-slate-100 w-full max-w-[100px] text-center shadow-[0_0_15px_rgba(251,191,36,0.4)] hover:scale-105 transition-transform cursor-default">
                      Student
                    </div>
                  </div>

                  {/* Attendance - Bottom (Desktop) */}
                  <div className="relative z-10 w-full col-span-1 sm:col-span-1 flex justify-center sm:translate-y-10">
                     <div className="bg-white/10 backdrop-blur-sm border border-[#10b981] rounded-full px-2 py-1.5 text-xs text-slate-100 w-full max-w-[100px] text-center shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:scale-105 transition-transform cursor-default">
                      Attendance
                    </div>
                  </div>

                  {/* Exams - Top */}
                  <div className="relative z-10 w-full col-span-1 sm:col-span-1 flex justify-center">
                    <div className="bg-white/10 backdrop-blur-sm border border-[#10b981] rounded-full px-2 py-1.5 text-xs text-slate-100 w-full max-w-[100px] text-center shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:scale-105 transition-transform cursor-default">
                      Exams
                    </div>
                  </div>

                  {/* Report Cards - Bottom (Desktop) */}
                  <div className="relative z-10 w-full col-span-1 sm:col-span-1 flex justify-center sm:translate-y-10">
                    <div className="bg-white/10 backdrop-blur-sm border border-[#10b981] rounded-full px-2 py-1.5 text-xs text-slate-100 w-full max-w-[100px] text-center shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:scale-105 transition-transform cursor-default">
                      Report Cards
                    </div>
                  </div>

                  {/* Results - Top */}
                  <div className="relative z-10 w-full col-span-2 sm:col-span-1 flex justify-center">
                    <div className="bg-white/10 backdrop-blur-sm border border-[#fbbf24] rounded-full px-2 py-1.5 text-xs text-slate-100 w-full max-w-[100px] text-center shadow-[0_0_15px_rgba(251,191,36,0.4)] hover:scale-105 transition-transform cursor-default">
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
                You&apos;re ready for <span className="text-[#fbbf24]">SM LMS</span>.
              </p>
            </div>
            
            <div className="space-y-2 w-full md:w-auto">
              <h3 className="text-lg sm:text-xl font-bold font-mono text-white uppercase md:text-right">
                BOOK A DEMO
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 text-xs sm:text-sm text-[#fbbf24] md:justify-end">
                <a href="mailto:20hozaifa02@gmail.com" className="flex items-center gap-2 hover:text-[#fde047] transition-colors">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                  20hozaifa02@gmail.com
                </a>
                <a href="tel:+8801615001456" className="flex items-center gap-2 hover:text-[#fde047] transition-colors">
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
