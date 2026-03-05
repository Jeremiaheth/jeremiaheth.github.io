# Portfolio Design Specification
## Based on: Illustration Based Portfolio Website Template (Figma Community)
## Variant: Boy (Desktop + Responsive)

## Overview
Single-page portfolio website with dark theme, illustration-based character art, bold typography with outlined/stroke text effects. Modern, clean aesthetic with high contrast.

## Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS v3+
- **Fonts:** Inter (Google Fonts) — geometric sans-serif matching Figma template
- **Animations:** Framer Motion for scroll reveals and transitions
- **Icons:** Lucide React (or React Icons for tech stack logos)
- **Deployment:** Static export compatible (for GitHub Pages, Vercel, or Coolify)

## Color System

### Primary Palette
```
--primary-black: #000000      /* Main background */
--primary-white: #FFFFFF      /* Primary text on dark */
--primary-neutral: #A3A3A3    /* Muted text */
```

### Zinc Scale (Tailwind zinc)
```
--zinc-50:  #FAFAFA
--zinc-100: #F4F4F5
--zinc-200: #E4E4E7
--zinc-300: #D4D4D8
--zinc-400: #A1A1AA
--zinc-500: #71717A
--zinc-600: #52525B
--zinc-700: #3F3F46
--zinc-800: #27272A
--zinc-900: #18181B
--zinc-950: #09090B
```

### Accent
```
--accent: #FACC15            /* Yellow/gold accent — used for highlights, CTAs */
--accent-hover: #EAB308
--error: #EF4444              /* Error/red */
```

### Page
```
--page-bg: #F5F5F5            /* Light page background (used in Figma canvas) */
```

## Typography

### Font Family
- **Primary:** Inter, system-ui, sans-serif
- **Fallback:** -apple-system, BlinkMacSystemFont, Segoe UI, Roboto

### Type Scale (Desktop)
| Style | Size/Line-Height | Weight | Usage |
|-------|-----------------|--------|-------|
| Displaytext | 48px/56px | 400-800 | Hero name, large headings |
| Outlined | 48px/56px | 800 | Stroke-only text (hero subtitle) |
| Display (M) | 36px/44px | 400-800 | Mobile display text |
| Outlined (M) | 36px/44px | 800 | Mobile stroke text |
| Sub Heading | 20px/28px | 600 | Section subtitles |
| H1 | 36px/44px | 700 | Section titles |
| H2 | 30px/36px | 700 | Card titles |
| H3 | 24px/32px | 600 | Sub-section titles |
| H4 | 20px/28px | 600 | Small headings |
| H5 | 18px/26px | 600 | Label text |
| H6 | 16px/24px | 600 | Small labels |
| P1 | 18px/28px | 400 | Body text large |
| P2 | 16px/24px | 400 | Body text default |
| P3 | 14px/20px | 400 | Caption/small text |
| Button Text | 16px/24px | 600 | Primary buttons |
| Button Text 2 | 14px/20px | 600 | Secondary buttons |
| Underlined | 16px/24px | 400 | Links with underline |

### Special Effects
- **Outlined text:** Text with transparent fill and white/light stroke (CSS: `-webkit-text-stroke: 2px white; color: transparent;`)
- Used for hero section "DEVELOPER" or role subtitle

## Layout

### Desktop: 1440px design width, max-width container 1200px
### Mobile: 375px breakpoint
### Responsive: Tailwind breakpoints (sm: 640, md: 768, lg: 1024, xl: 1280)

## Sections (Top to Bottom)

### 1. Navigation Bar
- Fixed/sticky top
- Logo/name on left
- Nav links: Home, About, Skills, Experience, Projects, Contact
- Dark background (#000000)
- CTA button (yellow accent)

### 2. Hero Section
- Full viewport height
- Left side: Name "Jeremiah Ojo" in large Displaytext
- Below name: Role in outlined/stroke text "IT SUPPORT SPECIALIST"
- Below: "& AI DEVELOPER/BUILDER" in filled text
- Subtitle paragraph about building intelligent tools
- CTA buttons: "View Projects" (yellow/accent), "Download CV" (outlined)
- Social icons (GitHub, LinkedIn, Email)
- Right side: Illustrated character (full-body illustration, boy variant)
- Dark background

### 3. About Me Section
- Section title "About Me" with outlined text effect
- Left: Illustrated character (different pose or same)
- Right: Bio text
  - "Results-driven IT professional transitioning into cybersecurity with 4+ years of hands-on experience..."
  - Stats/metrics: "4+ Years Experience", "90% Resolution Rate", "50+ Employees Supported"
- Dark background with subtle gradient or card

### 4. My Skills Section
- Section title "My Skills"
- Grid of skill cards (3-4 columns)
- Each card: Icon + Skill name + category
- Categories:
  - Security: Network Security, Ethical Hacking, Network Defense, Threat Awareness, Access Control, OSINT
  - Development: Python, Node.js, JavaScript/TypeScript, PowerShell, REST APIs
  - AI & Data: Vector Databases, LLM Integration, Agent Architectures, Semantic Search
  - Infrastructure: OCI, Supabase, Docker, Linux, Microsoft 365
- Card style: Dark card with light border, icon prominent
- Yellow accent for category headers

### 5. My Experience Section
- Section title "My Experience"
- Timeline layout (vertical)
- Two entries:
  1. **Technical Specialist** — Self-Employed (Feb 2025 – Present)
     - Freelance technical support, web development, design consulting
     - WordPress websites, Python scripting, security consulting
  2. **IT Support Technician** — Mabo Global Solution (Jul 2021 – Mar 2024)
     - First point of contact, 90% first-call resolution
     - System & network maintenance
     - Security protocols enforcement
     - Created documentation reducing tickets by 25%
- Education entry: BS Computer Science, University of the People (2025-2029)

### 6. My Projects Section
- Section title "My Projects"
- 3 project cards in a grid or stacked layout
- Each card:
  - Number (01, 02, 03)
  - Project name
  - Description
  - Tech stack tags
  - Screenshot/mockup image (or illustrated placeholder)
  - "View Project" button/link

- **Project 1: neolata-mem**
  - Graph-native memory engine for AI agents
  - Zettelkasten linking, biological decay, vector+keyword search
  - Tech: Node.js, Supabase, NVIDIA NIM, Vector Embeddings
  - Link: github.com/Jeremiaheth/neolata-mem

- **Project 2: AI SOC Assistant**
  - Automates threat intelligence gathering, vulnerability triage, incident analysis
  - MITRE ATT&CK mapping, STRIDE threat modeling, CVSS scoring
  - Tech: Python, Node.js, REST APIs, Vector DBs, OCI

- **Project 3: The Vanguard**
  - Multi-agent offensive security platform
  - 4 AI agents: recon, code review, architecture, security ops
  - Tech: Node.js, OpenClaw, Multi-Agent Systems

### 7. Certifications Section
- Grid or horizontal scroll of cert badges/cards
- ISC2 Candidate (pursuing CC)
- Mastercard Cybersecurity Simulation (Forage)
- Ethical Hacking Essentials (EC-Council)
- Network Defense Essentials (EC-Council)
- AI Fundamentals (IBT Learning)
- Introduction to Cybersecurity (Cisco)

### 8. Contact Section
- Section title "Let's Work Together" or "Get In Touch"
- Contact form (Name, Email, Message)
- Direct contact info:
  - Email: Jeremiah.ojo@outlook.com
  - LinkedIn: linkedin.com/in/jeremiah-e-ojo
  - GitHub: github.com/Jeremiaheth
- Location: Lagos, Nigeria
- "Open to cybersecurity analyst, SOC analyst, and security operations roles"

### 9. Footer
- Copyright © 2026 Jeremiah Ojo
- Quick nav links
- Social icons
- "Built with Next.js & Tailwind CSS"

## Components

### Skill Card
- Dark card (#18181B or zinc-900)
- Rounded corners (12-16px)
- Icon top (colored or white)
- Skill name below (H5 weight)
- Hover: subtle glow or border accent

### Project Card
- Full-width or large card
- Image/screenshot area (16:9 ratio)
- Numbered label (01, 02, 03)
- Title, description, tech tags
- CTA button

### Experience Timeline Item
- Dot + vertical line connector
- Date range on one side
- Title, company, description on other
- Alternating or left-aligned

### Certification Badge
- Small card with issuer logo/icon
- Cert name
- Date

### Nav Button
- Primary: Yellow (#FACC15) bg, black text, rounded
- Secondary/Outlined: transparent bg, white border, white text

## Illustration Assets
- The template uses custom illustrated characters
- For now: use a placeholder SVG illustration or a stylized avatar
- Consider: Using an AI-generated illustration that matches the template's art style
- The character is a boy figure in black/white/accent color scheme

## Animations (Framer Motion)
- Scroll-triggered fade-in for sections
- Staggered entry for skill cards and project cards
- Smooth scroll navigation
- Subtle parallax on hero illustration
- Typing effect on hero tagline (optional)

## SEO & Meta
- Title: "Jeremiah Ojo — IT Support Specialist & AI Developer"
- Description: "Portfolio of Jeremiah Ojo. IT Support, Cybersecurity, AI Development. Building intelligent security tools."
- OG Image: Hero section screenshot
- Keywords: cybersecurity, AI developer, IT support, portfolio, Lagos Nigeria

## File Structure
```
portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── favicon.ico
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
│   ├── images/
│   │   ├── hero-illustration.svg
│   │   ├── about-illustration.svg
│   │   └── projects/
│   ├── fonts/ (if self-hosting)
│   └── resume.pdf
├── lib/
│   └── data.ts (content data)
├── tailwind.config.ts
├── next.config.mjs
├── package.json
└── tsconfig.json
```
