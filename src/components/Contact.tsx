'use client';

import { FormEvent, useState, useRef } from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { contact } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  useGSAP(
    () => {
      gsap.from('.slide-up', {
        opacity: 0,
        y: 40,
        ease: 'none',
        stagger: 0.2,
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

  const validate = () => {
    const nextErrors: Partial<FormState> = {};

    if (!form.name.trim()) nextErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!form.message.trim()) nextErrors.message = 'Message is required.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(false);
    if (!validate()) return;

    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={containerRef} className="py-20">
      <div className="container grid gap-10 lg:grid-cols-2">
        <div className="slide-up space-y-6">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">Let&apos;s Work Together</h2>
          <p className="text-muted-foreground">{contact.roleStatus}</p>

          <div className="space-y-3 text-sm text-muted-foreground sm:text-base">
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-accent" />
              <a href={`mailto:${contact.email}`} className="hover:text-foreground">
                {contact.email}
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Linkedin className="h-4 w-4 text-accent" />
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">
                linkedin.com/in/jeremiah-e-ojo
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Github className="h-4 w-4 text-accent" />
              <a href={contact.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
                github.com/Jeremiaheth
              </a>
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-accent" />
              {contact.location}
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="slide-up space-y-4 rounded-2xl border border-border bg-card p-6"
          noValidate
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-muted-foreground">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              className="w-full rounded-xl border border-border bg-background-light px-4 py-3 text-foreground outline-none transition focus:border-accent"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-muted-foreground">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              className="w-full rounded-xl border border-border bg-background-light px-4 py-3 text-foreground outline-none transition focus:border-accent"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
              className="w-full rounded-xl border border-border bg-background-light px-4 py-3 text-foreground outline-none transition focus:border-accent"
            />
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-accent px-5 py-3 text-base font-semibold text-accent-foreground transition hover:brightness-95"
          >
            Send Message
          </button>

          {submitted && <p className="text-sm text-emerald-400">Message validated successfully. Connect via email or LinkedIn.</p>}
        </form>
      </div>
    </section>
  );
}
