"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { contact } from "@/lib/data";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Partial<FormState> = {};

    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) nextErrors.message = "Message is required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(false);
    if (!validate()) return;

    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-black py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Let&apos;s Work Together</h2>
          <p className="text-zinc-300">{contact.roleStatus}</p>

          <div className="space-y-3 text-sm text-zinc-300 sm:text-base">
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-accent" />
              <a href={`mailto:${contact.email}`} className="hover:text-white">
                {contact.email}
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Linkedin className="h-4 w-4 text-accent" />
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
                linkedin.com/in/jeremiah-e-ojo
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Github className="h-4 w-4 text-accent" />
              <a href={contact.github} target="_blank" rel="noreferrer" className="hover:text-white">
                github.com/Jeremiaheth
              </a>
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-accent" />
              {contact.location}
            </p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6"
          noValidate
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-accent"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-accent"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-accent"
            />
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-accent px-5 py-3 text-base font-semibold text-black transition hover:bg-accent-hover"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-sm text-emerald-400">Message validated successfully. Connect via email or LinkedIn.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
