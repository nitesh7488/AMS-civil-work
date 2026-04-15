'use client';

import { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  value: string; // e.g., "20+", "350+", "98%"
  duration?: number;
}

/**
 * Animates a numeric string from 0 to its target value once it enters the viewport.
 */
export default function CountUp({ value, duration = 2000 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  
  // Parse the number and any prefix/suffix
  const numericPart = value.replace(/[^0-9]/g, '');
  const target = parseInt(numericPart, 10) || 0;
  const suffix = value.replace(/[0-9]/g, '');
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const currentCount = Math.floor(progress * target);
      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(animate);
      }
    };

    window.requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <span ref={containerRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}
