"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/lib/data";

function HeroIllustration() {
  return (
    <svg viewBox="0 0 420 460" className="h-auto w-full max-w-md" role="img" aria-label="Character illustration">
      <rect x="80" y="44" width="260" height="372" rx="130" fill="#18181B" stroke="#3F3F46" />
      <circle cx="210" cy="130" r="48" fill="#FACC15" />
      <rect x="152" y="184" width="116" height="132" rx="28" fill="#27272A" />
      <rect x="128" y="190" width="24" height="94" rx="12" fill="#3F3F46" />
      <rect x="268" y="190" width="24" height="94" rx="12" fill="#3F3F46" />
      <rect x="170" y="316" width="28" height="70" rx="14" fill="#3F3F46" />
      <rect x="222" y="316" width="28" height="70" rx="14" fill="#3F3F46" />
      <circle cx="194" cy="124" r="4" fill="#09090B" />
      <circle cx="226" cy="124" r="4" fill="#09090B" />
      <path d="M192 144C198 154 222 154 228 144" stroke="#09090B" strokeWidth="4" strokeLinecap="round" />
      <path d="M130 88C168 44 256 44 290 88" stroke="#FACC15" strokeWidth="10" strokeLinecap="round" />
    </svg>
  );
}

const socialIconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-black pb-16 pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(250,204,21,0.14),transparent_45%)]" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Jeremiah Ojo</p>
          <h1 className="text-5xl font-extrabold leading-tight text-white sm:text-6xl">Jeremiah Ojo</h1>
          <p className="outlined-text text-4xl font-extrabold uppercase leading-tight sm:text-5xl">
            IT SUPPORT SPECIALIST
          </p>
          <p className="text-3xl font-bold leading-tight text-white sm:text-4xl">& AI DEVELOPER/BUILDER</p>
          <p className="max-w-xl text-base text-zinc-300 sm:text-lg">
            Building intelligent tools that combine practical IT operations with modern AI and cybersecurity workflows.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-semibold text-black transition hover:bg-accent-hover"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white px-6 py-3 text-base font-semibold text-white transition hover:border-zinc-300 hover:text-zinc-300"
            >
              Download CV
              <Download className="h-4 w-4" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((item) => {
              const Icon = socialIconMap[item.label as keyof typeof socialIconMap];
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-full border border-zinc-700 p-2 text-zinc-300 transition hover:border-accent hover:text-accent"
                  aria-label={item.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto w-full"
        >
          <HeroIllustration />
        </motion.div>
      </div>
    </section>
  );
}
