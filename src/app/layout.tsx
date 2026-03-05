import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import Preloader from "@/components/Preloader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Jeremiah Ojo - IT Support Specialist & AI Developer",
  description:
    "Portfolio of Jeremiah Ojo. IT Support, Cybersecurity, AI Development. Building intelligent security tools.",
  keywords: ["cybersecurity", "AI developer", "IT support", "portfolio", "Lagos Nigeria"],
  openGraph: {
    title: "Jeremiah Ojo - IT Support Specialist & AI Developer",
    description:
      "Portfolio of Jeremiah Ojo. IT Support, Cybersecurity, AI Development. Building intelligent security tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} bg-background font-sans text-foreground antialiased`}>
        <ReactLenis root options={{ lerp: 0.1, duration: 1.4 }}>
          <Navbar />
          <main className="relative z-[1]">{children}</main>
          <Footer />
          <Preloader />
          <ScrollProgressIndicator />
          <ParticleBackground />
        </ReactLenis>
      </body>
    </html>
  );
}
