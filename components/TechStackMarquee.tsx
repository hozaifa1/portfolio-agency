'use client';

import { motion } from 'framer-motion';

const techStack = [
  { name: 'Next.js', logo: '/tech/nextjs.svg' },
  { name: 'Django', logo: '/tech/django.svg' },
  { name: 'PostgreSQL', logo: '/tech/postgresql.svg' },
  { name: 'Rust', logo: '/tech/rust.svg' },
  { name: 'Docker', logo: '/tech/docker.svg' },
  { name: 'Python', logo: '/tech/python.svg' },
  { name: 'React', logo: '/tech/react.svg' },
  { name: 'TypeScript', logo: '/tech/typescript.svg' },
  { name: 'Kotlin', logo: '/tech/kotlin.svg' },
  { name: 'TensorFlow', logo: '/tech/tensorflow.svg' },
];

export default function TechStackMarquee() {
  const duplicatedTech = [...techStack, ...techStack];

  return (
    <section className="py-16 bg-[#09090b] border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-slate-400 text-sm font-mono uppercase tracking-wider">
          Built with industry-standard technologies
        </p>
      </div>
      
      <div className="relative overflow-hidden">
        <div className="flex">
          <motion.div
            className="flex gap-12 pr-12"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedTech.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center min-w-[120px] h-16 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-slate-500 group-hover:text-[#06b6d4] transition-colors text-center">
                  <div className="text-3xl mb-1">⚡</div>
                  <span className="text-sm font-mono">{tech.name}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
