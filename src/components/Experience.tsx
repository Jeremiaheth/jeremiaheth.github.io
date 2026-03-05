'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import { experience } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('.slide-up', {
        opacity: 0,
        y: 40,
        ease: 'none',
        stagger: 0.15,
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
    <section id="experience" ref={containerRef} className="bg-background py-20">
      <div className="container max-w-5xl">
        <h2 className="slide-up mb-12 text-4xl font-bold text-foreground sm:text-5xl">My Experience</h2>

        <div className="relative space-y-10 border-l border-border pl-8">
          {experience.map((item) => (
            <article key={`${item.title}-${item.date}`} className="slide-up relative rounded-2xl border border-border bg-card p-6">
              <span className="absolute -left-[37px] top-7 h-4 w-4 rounded-full border-2 border-background bg-accent" />
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{item.date}</p>
              <h3 className="mt-1 text-2xl font-semibold text-card-foreground">{item.title}</h3>
              <p className="mt-1 text-base text-accent">{item.company}</p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {item.points.map((point) => (
                  <li key={point} className="text-sm leading-relaxed sm:text-base">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
