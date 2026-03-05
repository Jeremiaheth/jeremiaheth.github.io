"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="mb-10 text-4xl font-bold text-white sm:text-5xl"
        >
          Certifications
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => (
            <motion.article
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5"
            >
              <div className="flex items-start gap-3">
                <span className="rounded-lg bg-zinc-800 p-2 text-accent">
                  <Award className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{cert.name}</p>
                  <p className="mt-1 text-sm text-zinc-400">{cert.issuer}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-zinc-500">{cert.date}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
