'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const [particles] = useState(() => 
    [...Array(50)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 5,
    }))
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#09090b]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 40%)`
        }}
      ></div>
      
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Engineering Intelligence for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-cyan-300">
              Bangladeshi Enterprises
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We don&apos;t just build websites. We build automated ERPs, LMS platforms, and System Solutions that save you money.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/pricing"
              className="group px-8 py-4 bg-[#06b6d4] hover:bg-cyan-500 text-white rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[#06b6d4]/50"
            >
              View Service Plans
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 border-2 border-[#06b6d4] text-[#06b6d4] hover:bg-[#06b6d4] hover:text-[#09090b] rounded-lg font-semibold text-lg transition-all"
            >
              Read Case Studies
            </Link>
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="https://github.com/hozaifa1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://linkedin.com/in/hozaifa1/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="mailto:20hozaifa02@gmail.com"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { value: '15+', label: 'Projects Delivered' },
            { value: '100%', label: 'Client Satisfaction' },
            { value: '3+', label: 'Years Experience' },
            { value: '20+', label: 'Tech Mastered' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full p-1">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
