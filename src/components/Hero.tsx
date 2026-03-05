'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowRight, Download, Github, Linkedin, Mail, BookOpen } from 'lucide-react';
import { useRef } from 'react';
import { socialLinks } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const socialIconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Medium: BookOpen,
  Email: Mail,
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.hero-reveal', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 1.5,
      });

      if (contentRef.current) {
        gsap.to(contentRef.current, {
          opacity: 0,
          y: -70,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section id="home" ref={sectionRef} className="relative overflow-hidden pb-16 pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(250,204,21,0.14),transparent_45%)]" />
      <div ref={contentRef} className="relative container grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <h1 className="hero-reveal text-5xl font-extrabold leading-tight text-foreground sm:text-6xl">Jeremiah Ojo</h1>
          <p className="hero-reveal outlined-text text-4xl font-extrabold uppercase leading-tight sm:text-5xl">
            IT SUPPORT SPECIALIST
          </p>
          <p className="hero-reveal text-3xl font-bold leading-tight text-foreground sm:text-4xl">& AI DEVELOPER/BUILDER</p>
          <p className="hero-reveal max-w-xl text-base text-muted-foreground sm:text-lg">
            Building intelligent tools that combine practical IT operations with modern AI and cybersecurity workflows.
          </p>

          <div className="hero-reveal flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-semibold text-accent-foreground transition hover:brightness-95"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-base font-semibold text-foreground transition hover:border-accent/50"
            >
              Download CV
              <Download className="h-4 w-4" />
            </a>
          </div>

          <div className="hero-reveal flex items-center gap-4">
            {socialLinks.map((item) => {
              const Icon = socialIconMap[item.label as keyof typeof socialIconMap];
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="rounded-full border border-border bg-card p-2 text-muted-foreground transition hover:border-accent/60 hover:text-accent"
                  aria-label={item.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="hero-reveal flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-illustration.svg"
            alt="Illustrated avatar"
            className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
