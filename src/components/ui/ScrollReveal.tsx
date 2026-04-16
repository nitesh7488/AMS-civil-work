'use client';

import React, { useEffect } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
}

/**
 * Lightweight Client Component to handle scroll-reveal animations
 * allowing the parent page to remain a Server Component for speed.
 */
export default function ScrollReveal({ children, className = '', once = true }: ScrollRevealProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (once) observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [once]);

  return <div className={className}>{children}</div>;
}
