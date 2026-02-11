import Hero from '@/components/Hero';
import TechStackMarquee from '@/components/TechStackMarquee';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import ScrollProgress from '@/components/ScrollProgress';

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Hero />
      <TechStackMarquee />
      <Services />
      <Portfolio />
      <Pricing />
      <Contact />
    </main>
  );
}
