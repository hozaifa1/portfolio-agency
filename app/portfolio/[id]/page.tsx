import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { projects } from '@/lib/data';
import Contact from '@/components/Contact';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-16">
      <article className="min-h-screen bg-slate-50">
        <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
            <div className="inline-block px-4 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-semibold mb-4">
              {project.category}
            </div>
            <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-slate-300">{project.client}</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-16">
          {project.image && (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {Object.entries(project.impact).map(([key, value]) => (
              <div key={key} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">{value}</div>
                <div className="text-slate-600 capitalize">{key}</div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Project Overview</h2>
            <p className="text-lg text-slate-700 mb-8">{project.description}</p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Achievements</h3>
            <ul className="space-y-3 mb-8">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-sm">
                    {i + 1}
                  </span>
                  <span className="text-slate-700">{highlight}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.github && (
            <div className="flex gap-4 justify-center">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <Github className="w-5 h-5" />
                View Source Code
              </a>
            </div>
          )}
        </div>
      </article>

      <Contact />
    </main>
  );
}
