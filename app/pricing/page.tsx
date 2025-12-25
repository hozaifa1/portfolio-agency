import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';

export const metadata = {
  title: 'Pricing | TechNova Solutions',
  description: 'Transparent subscription-based pricing for software development services in Bangladesh',
};

export default function PricingPage() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-300">
            No hidden fees. Cancel anytime. All plans include source code ownership.
          </p>
        </div>
      </section>
      <Pricing />
      <Contact />
    </main>
  );
}
