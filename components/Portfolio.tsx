'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real-world solutions delivering measurable impact
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              {project.image && (
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-200 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:opacity-0 transition-opacity"></div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-slate-900/80 transition-opacity">
                      <p className="text-white text-lg font-semibold">Click to view details</p>
                    </div>
                  </div>
                </div>
              )}

              <div className={`${project.image ? 'lg:w-1/2' : 'lg:w-full'} space-y-4`}>
                <div className="inline-block px-4 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold">
                  {project.category}
                </div>

                <h3 className="text-3xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="text-lg text-slate-600">
                  {project.description}
                </p>

                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-slate-700">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-3 gap-4 py-4">
                  {Object.entries(project.impact).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-slate-50 rounded-lg">
                      <div className="font-bold text-cyan-600 text-lg">{value}</div>
                      <div className="text-xs text-slate-600 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="flex items-center gap-2 px-4 py-2 border-2 border-cyan-500 text-cyan-600 rounded-lg hover:bg-cyan-50 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Case Study
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/portfolio"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold text-lg hover:shadow-lg transition-shadow"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
