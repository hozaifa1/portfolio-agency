'use client';

import { motion } from 'framer-motion';

const techStack = [
  { name: 'Next.js', icon: 'N', color: '#000000' },
  { name: 'Django', icon: 'D', color: '#092E20' },
  { name: 'PostgreSQL', icon: 'P', color: '#336791' },
  { name: 'Rust', icon: 'R', color: '#CE422B' },
  { name: 'Docker', icon: 'D', color: '#2496ED' },
  { name: 'Python', icon: 'Py', color: '#3776AB' },
  { name: 'React', icon: 'R', color: '#61DAFB' },
  { name: 'TypeScript', icon: 'TS', color: '#3178C6' },
  { name: 'Kotlin', icon: 'K', color: '#7F52FF' },
  { name: 'TensorFlow', icon: 'TF', color: '#FF6F00' },
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
                className="flex items-center justify-center min-w-[120px] h-16 group cursor-pointer"
              >
                <div className="text-center transition-all duration-300">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-2 mx-auto font-bold text-lg transition-all duration-300 grayscale group-hover:grayscale-0"
                    style={{ 
                      backgroundColor: `${tech.color}20`,
                      color: tech.color,
                      borderWidth: '2px',
                      borderColor: `${tech.color}40`
                    }}
                  >
                    {tech.icon}
                  </div>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-[#06b6d4] transition-colors">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
