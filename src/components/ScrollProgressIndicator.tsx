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
