"use client";

import { motion } from "framer-motion";
import { aboutBio, aboutStats } from "@/lib/data";

function AboutIllustration() {
  return (
    <svg viewBox="0 0 360 360" className="h-auto w-full max-w-sm" role="img" aria-label="About illustration">
      <rect x="36" y="36" width="288" height="288" rx="42" fill="#18181B" stroke="#3F3F46" />
      <circle cx="180" cy="136" r="52" fill="#FACC15" />
      <rect x="118" y="192" width="124" height="92" rx="20" fill="#27272A" />
      <path d="M118 260H242" stroke="#FACC15" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-black py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center lg:justify-start"
        >
          <AboutIllustration />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            About <span className="outlined-text">Me</span>
          </h2>
          <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">{aboutBio}</p>

          <div className="grid gap-4 sm:grid-cols-3">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
                <p className="text-3xl font-bold text-accent">{stat.value}</p>
                <p className="mt-1 text-sm text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
