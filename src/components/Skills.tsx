"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";
import { skills } from "@/lib/data";

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

const categories = ["Security", "Development", "AI & Data", "Infrastructure"] as const;

export default function Skills() {
  return (
    <section id="skills" className="bg-black py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="mb-10 text-4xl font-bold text-white sm:text-5xl"
        >
          My <span className="text-accent">Skills</span>
        </motion.h2>

        <div className="space-y-10">
          {categories.map((category, rowIndex) => (
            <div key={category}>
              <h3 className="mb-4 text-xl font-semibold text-accent">{category}</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, i) => {
                    const Icon = iconMap[skill.icon] ?? Shield;
                    return (
                      <motion.article
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.35, delay: rowIndex * 0.06 + i * 0.03 }}
                        className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-accent/80"
                      >
                        <Icon className="h-6 w-6 text-white" />
                        <p className="mt-4 text-base font-semibold text-white">{skill.name}</p>
                        <p className="mt-1 text-sm text-zinc-400">{skill.category}</p>
                      </motion.article>
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
