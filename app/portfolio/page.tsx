import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

export const metadata = {
  title: 'Portfolio | TechNova Solutions',
  description: 'Featured projects and case studies showcasing our software development work',
};

export default function PortfolioPage() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-xl text-slate-300">
            Delivering real-world solutions with measurable business impact
          </p>
        </div>
      </section>
      <Portfolio />
      <Contact />
    </main>
  );
}
