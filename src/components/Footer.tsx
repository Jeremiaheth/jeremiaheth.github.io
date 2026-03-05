import Link from "next/link";
import { Github, Linkedin, BookOpen, Mail } from "lucide-react";
import { navLinks, socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-zinc-400">Copyright © 2026 Jeremiah Ojo</p>
          <p className="text-sm text-zinc-500">Built with Next.js & Tailwind CSS</p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 text-zinc-300">
            {socialLinks.map((link) => {
              const icons: Record<string, typeof Github> = { GitHub: Github, LinkedIn: Linkedin, Medium: BookOpen, Email: Mail };
              const Icon = icons[link.label] ?? Mail;
              return (
                <a key={link.label} href={link.href} aria-label={link.label} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined} className="hover:text-accent">
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
