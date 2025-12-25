import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#09090b] border-t border-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#06b6d4] font-mono">HZH Systems</h3>
            <p className="text-slate-400">
              Engineering Intelligence for Bangladeshi Enterprises. We build automated ERPs, LMS platforms, and Distributed AI systems.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="#services" className="hover:text-cyan-400 transition-colors">Web Development</Link></li>
              <li><Link href="#services" className="hover:text-cyan-400 transition-colors">Mobile Apps</Link></li>
              <li><Link href="#services" className="hover:text-cyan-400 transition-colors">AI/ML Integration</Link></li>
              <li><Link href="#services" className="hover:text-cyan-400 transition-colors">Desktop Apps</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link></li>
              <li><Link href="#contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
              <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/hozaifa1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 bg-slate-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/hozaifa1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 bg-slate-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:20hozaifa02@gmail.com"
                aria-label="Email Contact"
                className="w-10 h-10 bg-slate-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} HZH Systems. All rights reserved.</p>
          <p className="mt-2 text-sm">Dhaka, Bangladesh | 20hozaifa02@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
