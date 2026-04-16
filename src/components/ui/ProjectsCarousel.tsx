'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, CheckCircle, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: string; 
  title: string; 
  category: string; 
  location: string;
  status: 'ongoing' | 'completed'; 
  description: string; 
  images: string[];
  completedDate?: string;
}

interface ProjectsCarouselProps {
  projects: Project[];
}

export default function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const [filter, setFilter] = useState<'all' | 'ongoing' | 'completed'>('all');
  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const filtered = projects.filter(p => filter === 'all' || p.status === filter);

  const scrollToIdx = (idx: number) => {
    setActiveIdx(idx);
    const track = trackRef.current;
    if (track) {
      const card = track.children[idx] as HTMLElement;
      if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    const next = activeIdx === 0 ? filtered.length - 1 : activeIdx - 1;
    scrollToIdx(next);
  };

  const scrollNext = () => {
    const next = activeIdx === filtered.length - 1 ? 0 : activeIdx + 1;
    scrollToIdx(next);
  };

  useEffect(() => {
    if (filtered.length <= 1) return;
    if (timerRef.current) clearInterval(timerRef.current);
    
    timerRef.current = setInterval(() => {
      setActiveIdx(prev => {
        const nextIdx = prev === filtered.length - 1 ? 0 : prev + 1;
        const track = trackRef.current;
        if (track) {
          const card = track.children[nextIdx] as HTMLElement;
          if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
        }
        return nextIdx;
      });
    }, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [filtered.length]);

  useEffect(() => {
    setActiveIdx(0);
    if (trackRef.current) trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
  }, [filter]);

  if (!projects || projects.length === 0) return null;

  return (
    <section className="section-y" style={{ background: '#0B1120' }}>
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="section-label animate-on-scroll">Our Work</div>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl text-white leading-tight animate-on-scroll">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <div className="flex gap-2 animate-on-scroll">
            {(['all','ongoing','completed'] as const).map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className="px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition-all duration-200"
                style={filter === f
                  ? { background: '#F97316', color: '#fff' }
                  : { border: '1px solid #1E2D45', color: '#94A3B8' }}>
                {f}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="card p-12 text-center text-slate-400">
            No projects found in this category.
          </div>
        ) : (
          <>
            <div ref={trackRef}
              className="flex gap-5 overflow-x-auto pb-4 no-scrollbar scroll-snap-x"
              onScroll={e => {
                const el = e.currentTarget;
                const cardW = el.scrollWidth / filtered.length;
                setActiveIdx(Math.round(el.scrollLeft / cardW));
              }}>
              {filtered.map((project, i) => (
                <div key={project.id}
                  className="scroll-snap-start flex-shrink-0 w-[85vw] sm:w-[420px] lg:w-[380px]
                             card group relative overflow-hidden transition-all duration-300"
                  style={{ transform: activeIdx === i ? 'scale(1.02)' : 'scale(0.98)', opacity: activeIdx === i ? 1 : 0.75 }}>

                  <div className="relative h-52 overflow-hidden">
                    {project.images?.[0] ? (
                      <Image src={project.images[0]} alt={project.title} fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center"
                        style={{ background: '#161F2E' }}>
                        <span className="text-slate-500 text-sm">No image</span>
                      </div>
                    )}

                    <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-mono font-bold uppercase flex items-center gap-1.5"
                      style={project.status === 'ongoing'
                        ? { background: 'rgba(59,130,246,0.9)', color: '#fff' }
                        : { background: 'rgba(249,115,22,0.9)', color: '#fff' }}>
                      {project.status === 'ongoing' ? <Clock size={10} /> : <CheckCircle size={10} />}
                      {project.status}
                    </span>
                    <div className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, rgba(11,17,32,0.95) 0%, rgba(11,17,32,0.1) 60%, transparent 100%)' }} />
                  </div>

                  <div className="p-5">
                    <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#F97316' }}>
                      {project.category}
                    </span>
                    <h3 className="text-white font-semibold text-base mt-1 mb-2 leading-snug">{project.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-3">{project.description}</p>
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                      <MapPin size={11} style={{ color: '#F97316' }} />
                      {project.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {filtered.map((_, i) => (
                  <button key={i} onClick={() => scrollToIdx(i)}
                    className="rounded-full transition-all duration-200"
                    style={{
                      width: activeIdx === i ? '24px' : '8px',
                      height: '8px',
                      background: activeIdx === i ? '#F97316' : '#1E2D45'
                    }} />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={scrollPrev} className="w-10 h-10 rounded-full border border-[#1E2D45] flex items-center justify-center text-slate-400 hover:border-orange-500 hover:text-orange-500 transition-colors">
                  <ChevronLeft size={18} />
                </button>
                <button onClick={scrollNext} className="w-10 h-10 rounded-full border border-[#1E2D45] flex items-center justify-center text-slate-400 hover:border-orange-500 hover:text-orange-500 transition-colors">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
