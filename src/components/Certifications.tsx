'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Award } from 'lucide-react';
import { useRef } from 'react';
import { certifications } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Certifications() {
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
    <section className="py-20" ref={containerRef}>
      <div className="container">
        <h2 className="slide-up mb-10 text-4xl font-bold text-foreground sm:text-5xl">Certifications</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <article
              key={cert.name}
              className="slide-up rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5 hover:border-[hsl(var(--accent))]/50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <span className="rounded-lg bg-background-light p-2 text-accent">
                  <Award className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">{cert.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{cert.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
