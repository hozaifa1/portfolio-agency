'use client';

import { motion } from 'framer-motion';
import { SiNextdotjs, SiDjango, SiPostgresql, SiRust, SiDocker, SiPython, SiReact, SiTypescript, SiKotlin, SiTensorflow } from 'react-icons/si';

const techStack = [
  { name: 'Next.js', Icon: SiNextdotjs, color: '#000000' },
  { name: 'Django', Icon: SiDjango, color: '#092E20' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
  { name: 'Rust', Icon: SiRust, color: '#CE422B' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'Kotlin', Icon: SiKotlin, color: '#7F52FF' },
  { name: 'TensorFlow', Icon: SiTensorflow, color: '#FF6F00' },
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
      
      <div className="relative overflow-hidden py-4">
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
            {duplicatedTech.map((tech, idx) => {
              const IconComponent = tech.Icon;
              return (
                <div
                  key={idx}
                  className="flex items-center justify-center min-w-[140px] group cursor-pointer"
                >
                  <div className="text-center transition-all duration-300">
                    <div className="flex items-center justify-center mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">
                      <IconComponent 
                        className="w-12 h-12" 
                        style={{ color: tech.color }}
                      />
                    </div>
                    <span className="text-xs font-mono text-slate-500 group-hover:text-[#06b6d4] transition-colors block">
                      {tech.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
