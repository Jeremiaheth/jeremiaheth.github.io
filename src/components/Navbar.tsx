"use client";

import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-black/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center">
          <Image src="/images/logo.png" alt="Jeremiah Ojo" width={46} height={30} className="h-7 w-auto sm:h-8" priority />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="/resume.pdf"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-black transition hover:bg-accent-hover"
        >
          <Download className="h-4 w-4" />
          Resume
        </a>
      </div>
    </header>
  );
}
