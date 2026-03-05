'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import { aboutBio, aboutStats } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('.slide-up', {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 80%',
          scrub: 0.5,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="about" ref={containerRef} className="bg-background py-20">
      <div className="container grid gap-10 lg:grid-cols-2">
        <div className="slide-up rounded-2xl border border-border bg-card p-7 sm:p-10">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
            About <span className="outlined-text">Me</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{aboutBio}</p>
        </div>

        <div className="slide-up grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {aboutStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-border bg-card p-6">
              <p className="text-4xl font-bold text-accent">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.14em] text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
