'use client';

import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#09090b] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-8 h-12">
          <Link
            href="#services"
            className="text-sm text-slate-300 hover:text-[#06b6d4] transition-colors font-medium"
          >
            Services
          </Link>
          <Link
            href="/pricing"
            className="text-sm text-slate-300 hover:text-[#06b6d4] transition-colors font-medium"
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            className="text-sm text-slate-300 hover:text-[#06b6d4] transition-colors font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
