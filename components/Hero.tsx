'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import Typewriter from './Typewriter';
import AnimatedCounter from './AnimatedCounter';
import TextReveal from './TextReveal';

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 -top-[20%] h-[140%] will-change-transform"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(5,5,5,0.3), rgba(5,5,5,0.9) 70%, #050505), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="section-container pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div className="space-y-8">
              <ScrollReveal>
                <p className="text-[var(--accent-primary)] text-sm font-medium tracking-widest uppercase">
                  Software Engineering & AI Solutions
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1]">
                  Built for scale,<br />
                  <span className="text-[var(--text-secondary)]">
                    <Typewriter text="engineered to last." speed={80} delay={800} />
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed">
                  <TextReveal delay={500} duration={40}>
                    We build automated ERPs, LMS platforms, and AI-powered solutions that reduce operational costs for ambitious enterprises.
                  </TextReveal>
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="#portfolio"
                    className="group px-8 py-4 bg-[var(--accent-primary)] text-black font-semibold rounded-full flex items-center gap-2 hover:shadow-lg hover:shadow-[var(--accent-glow)] transition-all duration-300"
                  >
                    View Projects
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="#contact"
                    className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all duration-300"
                  >
                    Get in touch
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column - Floating Stats Cards */}
            <div className="relative hidden lg:block">
              <div
                className="relative h-[500px]"
                style={{
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                  transition: 'transform 0.3s ease-out',
                }}
              >
                {/* Stat Card 1 */}
                <ScrollReveal delay={0.2} className="absolute top-0 right-0">
                  <div className="floating-card w-64">
                    <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-2">Projects Delivered</p>
                    <div className="text-4xl font-light text-white">
                      <AnimatedCounter target={15} suffix="+" />
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mt-2">Production & Open Source</p>
                  </div>
                </ScrollReveal>

                {/* Stat Card 2 */}
                <ScrollReveal delay={0.3} className="absolute top-32 left-0">
                  <div className="floating-card w-56">
                    <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-2">Client Satisfaction</p>
                    <div className="text-4xl font-light text-[var(--accent-primary)]">
                      <AnimatedCounter target={100} suffix="%" />
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mt-2">Across all engagements</p>
                  </div>
                </ScrollReveal>

                {/* Stat Card 3 */}
                <ScrollReveal delay={0.4} className="absolute bottom-20 right-10">
                  <div className="floating-card w-60">
                    <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-2">Technologies</p>
                    <div className="text-4xl font-light text-white">
                      <AnimatedCounter target={25} suffix="+" />
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mt-2">Full-stack mastery</p>
                  </div>
                </ScrollReveal>

                {/* Activity Card */}
                <ScrollReveal delay={0.5} className="absolute bottom-0 left-10">
                  <div className="floating-card w-64 border-[var(--border-active)]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-xs text-green-400 font-medium">Available for Projects</span>
                    </div>
                    <p className="text-sm text-white font-medium">ERP, LMS & AI Solutions</p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">Remote Worldwide</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-[var(--text-muted)] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
