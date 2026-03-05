'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import { projects } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Projects() {
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
    <section id="projects" ref={containerRef} className="bg-background py-20">
      <div className="container">
        <h2 className="slide-up mb-10 text-4xl font-bold text-foreground sm:text-5xl">My Projects</h2>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="slide-up overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--accent))]/50 transition-colors"
            >
              <div className="aspect-video bg-gradient-to-br from-background-light to-card p-6">
                <div className="h-full w-full rounded-xl border border-border bg-background/40 p-4">
                  <p className="text-sm font-semibold text-accent">{project.number}</p>
                  <p className="mt-3 text-lg font-semibold text-card-foreground">{project.name}</p>
                </div>
              </div>

              <div className="space-y-4 p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link ?? '#'}
                  target={project.link ? '_blank' : undefined}
                  rel={project.link ? 'noreferrer' : undefined}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent"
                >
                  View Project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
