# Portfolio Upgrade Spec — GSAP + Visual Polish

## Overview
Upgrade the portfolio from Framer Motion to GSAP with ScrollTrigger, add custom cursor, particle background, Lenis smooth scroll, preloader, and scroll progress indicator. Fix card visibility issues.

## Dependencies (ALREADY INSTALLED — do NOT run npm install)
- `gsap` + `@gsap/react` — animation library with ScrollTrigger
- `lenis` — smooth scroll (import from `lenis/react` and `lenis/dist/lenis.css`)
- `lucide-react` — icons (already installed)
- REMOVE all `framer-motion` imports — we're replacing it entirely

## Color System Update
Change from pure black to a richer dark theme. Update globals.css CSS variables:

```css
:root {
  --background: 0 0% 8%;          /* #141414 — rich dark, not pure black */
  --background-light: 0 0% 14%;   /* #242424 — cards, elevated surfaces */
  --foreground: 0 0% 87%;         /* #DEDEDE — primary text */
  --muted-foreground: 0 0% 55%;   /* #8C8C8C — secondary text */
  --accent: 48 96% 53%;           /* #FACC15 — yellow accent (keep) */
  --accent-foreground: 0 0% 8%;   /* dark text on accent */
  --border: 0 0% 20%;             /* #333333 — subtle borders */
  --card: 0 0% 11%;               /* #1C1C1C — card backgrounds */
  --card-foreground: 0 0% 87%;    /* card text */
}
```

## New Components to Create

### 1. `src/components/CustomCursor.tsx`
SVG cursor that follows mouse with GSAP. Hidden on mobile (md breakpoint).

```tsx
'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const CustomCursor = () => {
    const svgRef = useRef<SVGSVGElement>(null);

    useGSAP((context, contextSafe) => {
        if (window.innerWidth < 768) return;

        const handleMouseMove = contextSafe?.((e: MouseEvent) => {
            if (!svgRef.current) return;
            gsap.to(svgRef.current, {
                x: e.clientX,
                y: e.clientY,
                ease: 'power2.out',
                duration: 0.25,
                opacity: 1,
            });
        }) as any;

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    });

    return (
        <svg
            width="27" height="30" viewBox="0 0 27 30"
            className="hidden md:block fixed top-0 left-0 opacity-0 z-[50] pointer-events-none"
            fill="none" strokeWidth="2" xmlns="http://www.w3.org/2000/svg"
            ref={svgRef}
        >
            <path
                d="M20.0995 11.0797L3.72518 1.13204C2.28687 0.258253 0.478228 1.44326 0.704999 3.11083L3.28667 22.0953C3.58333 24.2768 7.33319 24.6415 8.3792 22.7043C9.5038 20.6215 10.8639 18.7382 12.43 17.7122C13.996 16.6861 16.2658 16.1911 18.6244 15.9918C20.8181 15.8063 21.9811 12.2227 20.0995 11.0797Z"
                className="fill-[hsl(var(--accent))] stroke-[hsl(var(--background))]/50"
            />
        </svg>
    );
};

export default CustomCursor;
```

### 2. `src/components/ParticleBackground.tsx`
Floating white particles with GSAP animation. Fixed behind all content.

```tsx
'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const ParticleBackground = () => {
    const particlesRef = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        particlesRef.current.forEach((particle) => {
            gsap.set(particle, {
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5,
                left: Math.random() * window.innerWidth,
                top: Math.random() * (window.innerHeight + 1),
            });
            gsap.to(particle, {
                y: window.innerHeight,
                duration: Math.random() * 10 + 10,
                opacity: 0,
                repeat: -1,
                ease: 'none',
            });
        });
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            {[...Array(80)].map((_, i) => (
                <div
                    key={i}
                    ref={(el) => { if (el) particlesRef.current[i] = el; }}
                    className="absolute rounded-full bg-white"
                />
            ))}
        </div>
    );
};

export default ParticleBackground;
```

### 3. `src/components/ScrollProgressIndicator.tsx`
Vertical scroll progress bar fixed on right side.

```tsx
'use client';
import { useEffect, useRef } from 'react';

const ScrollProgressIndicator = () => {
    const scrollBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollBarRef.current) return;
            const { scrollHeight, clientHeight } = document.documentElement;
            const scrollProgress = (window.scrollY / (scrollHeight - clientHeight)) * 100;
            scrollBarRef.current.style.transform = `translateY(-${100 - scrollProgress}%)`;
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-[50svh] right-[2%] -translate-y-1/2 w-1.5 h-[100px] rounded-full bg-[hsl(var(--background-light))] overflow-hidden z-40">
            <div className="w-full bg-[hsl(var(--accent))] rounded-full h-full" ref={scrollBarRef} />
        </div>
    );
};

export default ScrollProgressIndicator;
```

### 4. `src/components/Preloader.tsx`
Name reveal animation on page load. 10 black bars that slide down revealing "JEREMIAH" letter-by-letter.

```tsx
'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power1.inOut' } });
        tl.to('.name-text span', { y: 0, stagger: 0.05, duration: 0.2 });
        tl.to('.preloader-item', { delay: 1, y: '100%', duration: 0.5, stagger: 0.1 })
          .to('.name-text span', { autoAlpha: 0 }, '<0.5')
          .to(preloaderRef.current, { autoAlpha: 0 }, '<1');
    }, { scope: preloaderRef });

    const name = 'JEREMIAH';

    return (
        <div className="fixed inset-0 z-[60] flex" ref={preloaderRef}>
            {[...Array(10)].map((_, i) => (
                <div key={i} className="preloader-item h-full w-[10%] bg-black" />
            ))}
            <p className="name-text flex text-[20vw] lg:text-[200px] font-bold text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden text-[hsl(var(--accent))]">
                {name.split('').map((letter, i) => (
                    <span key={i} className="inline-block translate-y-full">{letter}</span>
                ))}
            </p>
        </div>
    );
};

export default Preloader;
```

## Existing Components to Update

### ALL section components — Replace Framer Motion with GSAP ScrollTrigger

Pattern for scroll-triggered animations:

```tsx
'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Inside component:
const containerRef = useRef<HTMLDivElement>(null);

useGSAP(() => {
    const slideUpEls = containerRef.current?.querySelectorAll('.slide-up');
    if (!slideUpEls?.length) return;
    
    gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'bottom 80%',
            scrub: 0.5,
        },
    }).from('.slide-up', {
        opacity: 0,
        y: 40,
        ease: 'none',
        stagger: 0.4,
    });
}, { scope: containerRef });
```

Add `className="slide-up"` to elements that should animate in.

### Skills.tsx — Major Visual Upgrade
- Use icon images or Lucide icons with proper sizing (40x40)
- Category headers large and muted (text-5xl font-bold text-muted-foreground)
- Skill items: icon + name side by side, flex wrap
- Grid: category label on left (5 cols), skills on right (7 cols)
- GSAP scroll animation on each skill item

### Projects.tsx — Card Visibility Fix
- Cards need visible borders or elevated background
- Use `bg-[hsl(var(--card))]` for card bg (not transparent)
- Add `border border-[hsl(var(--border))]`
- Add hover effect: `hover:border-[hsl(var(--accent))]/50 transition-colors`
- Project number in accent color
- Tech tags as small pills with border

### Certifications.tsx — Card Visibility Fix
- Same card treatment: bg-card, border, hover accent
- Issuer in muted text, cert name in foreground

### Hero.tsx — GSAP slide-up animation
- Name and role animate in on load (after preloader)
- Stats on right side (like reference): "4+" Years, "90%" Resolution, "50+" Employees
- GSAP fade-out on scroll down

### Contact.tsx — Better form styling
- Input fields: bg-background-light border-border rounded
- Focus state: border-accent
- Submit button: bg-accent text-accent-foreground

### About.tsx — Card treatment
- Bio in a card or clear visual container
- Stats as highlighted numbers

## Layout Updates

### `src/app/layout.tsx`
- Wrap content in `<ReactLenis root>` for smooth scroll
- Import `lenis/dist/lenis.css`
- Add CustomCursor, ParticleBackground, ScrollProgressIndicator, Preloader
- Add `!cursor-none` to body for custom cursor
- Keep Inter font

```tsx
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
// ... other imports
import CustomCursor from '@/components/CustomCursor';
import ParticleBackground from '@/components/ParticleBackground';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import Preloader from '@/components/Preloader';

// In the body:
<ReactLenis root options={{ lerp: 0.1, duration: 1.4 }}>
    <Navbar />
    <main className="relative z-[1]">{children}</main>
    <Footer />
    <CustomCursor />
    <Preloader />
    <ScrollProgressIndicator />
    <ParticleBackground />
</ReactLenis>
```

### `src/app/globals.css`
- Add CSS variables (see Color System above)
- Add `!cursor-none` on `*` for custom cursor
- Hide scrollbar: `::-webkit-scrollbar { display: none; }`
- Add `--background-light` variable
- Add smooth scroll base

### `tailwind.config.ts`
- Extend colors to use CSS variables: `background`, `background-light`, `foreground`, `accent`, etc.
- Use `hsl(var(--variable))` pattern
- Add container config: center, 1rem padding, max 1148px

## IMPORTANT
- Do NOT run npm install — everything is installed
- Do NOT use framer-motion at all — remove any imports
- All animation components MUST have 'use client' directive
- Run `npx tsc --noEmit` to verify no TypeScript errors when done
- Run `npm run build` to verify build passes
