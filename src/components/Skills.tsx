'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import {
  Binary,
  Bot,
  Box,
  Brain,
  Braces,
  Building2,
  Cloud,
  Code2,
  Database,
  Eye,
  HardDrive,
  Key,
  Network,
  Search,
  Server,
  Shield,
  Terminal,
  Webhook,
  Bug,
  LucideIcon,
} from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import { skills } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Bug,
  Network,
  Eye,
  Key,
  Search,
  Code2,
  Server,
  Braces,
  Terminal,
  Webhook,
  Database,
  Brain,
  Bot,
  Binary,
  Cloud,
  HardDrive,
  Box,
  Laptop: HardDrive,
  Building2,
};

const categories = ['Security', 'Development', 'AI & Data', 'Infrastructure'] as const;

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('.slide-up', {
        opacity: 0,
        y: 40,
        ease: 'power2.out',
        stagger: 0.25,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 80%',
          scrub: 0.5,
        },
      });

      gsap.from('.skill-item', {
        opacity: 0,
        y: 16,
        stagger: 0.04,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="skills" ref={containerRef} className="bg-background py-20">
      <div className="container">
        <h2 className="slide-up mb-12 text-4xl font-bold text-foreground sm:text-5xl">
          My <span className="text-accent">Skills</span>
        </h2>

        <div className="space-y-10">
          {categories.map((category) => (
            <div key={category} className="slide-up grid gap-6 rounded-2xl border border-border bg-card p-6 lg:grid-cols-12">
              <h3 className="lg:col-span-5 text-4xl font-bold text-muted-foreground sm:text-5xl">{category}</h3>
              <div className="lg:col-span-7 flex flex-wrap gap-3">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => {
                    const Icon = iconMap[skill.icon] ?? Shield;
                    return (
                      <article
                        key={skill.name}
                        className="skill-item flex items-center gap-3 rounded-xl border border-border bg-background-light px-4 py-3"
                      >
                        {skill.svgIcon ? (
                          <Image
                            src={skill.svgIcon}
                            alt={skill.name}
                            width={40}
                            height={40}
                            className="h-10 w-10 object-contain"
                          />
                        ) : (
                          <Icon className="h-10 w-10 text-accent" />
                        )}
                        <p className="text-sm font-semibold text-card-foreground sm:text-base">{skill.name}</p>
                      </article>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
