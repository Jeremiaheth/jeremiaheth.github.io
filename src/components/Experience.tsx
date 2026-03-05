"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="bg-black py-20">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-4xl font-bold text-white sm:text-5xl"
        >
          My Experience
        </motion.h2>

        <div className="relative space-y-10 border-l border-zinc-800 pl-8">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.title}-${item.date}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full border-2 border-black bg-accent" />
              <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">{item.date}</p>
              <h3 className="mt-1 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-base text-accent">{item.company}</p>
              <ul className="mt-3 space-y-2 text-zinc-300">
                {item.points.map((point) => (
                  <li key={point} className="text-sm leading-relaxed sm:text-base">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
