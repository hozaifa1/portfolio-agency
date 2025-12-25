import Hero from '@/components/Hero';
import TechStackMarquee from '@/components/TechStackMarquee';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStackMarquee />
      <Services />
      <Portfolio />
      <Pricing />
      <Contact />
    </main>
  );
}
