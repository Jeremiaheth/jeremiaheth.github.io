import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={`${inter.variable} bg-black font-sans text-white antialiased`}>{children}</body>
    </html>
  );
}
