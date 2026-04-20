'use client';
// src/app/page.tsx  –  Home Page
// FIXES: FAQ useState (was require bug), projects fetched from MongoDB API,
//        carousel scroll, new navy/orange palette, fast CSS animations

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, Star, CheckCircle, ChevronDown, ChevronLeft, ChevronRight,
  Home, Bath, Grid3X3, ChefHat, Layers, Paintbrush, Sparkles, Wrench,
  Shield, Clock, Award, Users, MapPin, Phone, MessageCircle,
  Waves, LayoutTemplate, Fence, Hammer,
} from 'lucide-react';
import { services, stats, testimonials, faqs } from '@/data/siteData';
import { openQuotePopup } from '@/components/ui/QuotePopup';
import CountUp from '@/components/ui/CountUp';
import GalleryCarouselSection from '@/components/ui/GalleryCarousel';
import ModernCTA from '@/components/ui/ModernCTA';

/* ── Icon map ───────────────────────────────────────────────── */
const iconMap: Record<string, React.ElementType> = {
  Home, Bath, Grid3X3, ChefHat, Layers, Paintbrush, Sparkles, Wrench,
  Waves, LayoutTemplate, Fence, Hammer,
};

/* ── Scroll-reveal hook ─────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.animate-on-scroll');
    const io  = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add('visible');
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' },
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ═══════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════ */
export default function HomePage() {
  useScrollReveal();
  return (
    <>
      <HeroSection />
      <TickerSection />
      <IntroSection />
      <ServicesSection />
      <ProjectsCarousel />
      <GalleryCarouselSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FAQSection />
      <ModernCTA />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   HERO
─────────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #080D1A 0%, #0B1120 50%, #0A1628 100%)' }}>

      {/* Animated glow orbs */}
      <div className="glow-orb w-[600px] h-[600px] opacity-20 animate-pulse2"
        style={{ background: 'radial-gradient(circle, #F97316, transparent 70%)', top: '-10%', right: '-5%' }} />
      <div className="glow-orb w-[400px] h-[400px] opacity-10 animate-pulse2"
        style={{ background: 'radial-gradient(circle, #3B82F6, transparent 70%)', bottom: '-5%', left: '-5%', animationDelay: '1.2s' }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(249,115,22,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.8) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

      {/* Hero content */}
      <div className="relative container-custom pt-36 pb-20">
        <div className="max-w-3xl">

          {/* Label */}
          <div className="section-label animate-fadeIn">
            Mumbai&apos;s Trusted Construction Partner Since 2001
          </div>

          {/* Headline (LCP Element - no artificial delays) */}
          <h1 className="font-display font-black text-white leading-[1.08] text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] mt-2 mb-6">
            India's Top Rated<br />
            <span className="text-gradient">Construction Company</span>
          </h1>

          {/* Sub */}
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-8 animate-fadeUp">
            The most trusted <strong className="text-orange-400">civil contractors in India</strong>. 
            Expert in bungalow construction, bathroom renovation, kitchen work, and premium interior civil work across Maharashtra & beyond.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fadeUp">
            <button onClick={openQuotePopup} className="btn-primary text-base px-8 py-4">
              Get Free Quote <ArrowRight size={18} />
            </button>
            <Link href="/projects" className="btn-ghost text-base px-8 py-4">
              View Projects
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 animate-fadeIn" style={{ animationDelay: '.85s', opacity: 0 }}>
            {['350+ Projects Done', '50+ Skilled Team', 'Free Consultation', '1-Year Warranty'].map(b => (
              <span key={b} className="flex items-center gap-1.5 text-slate-400 text-xs">
                <CheckCircle size={12} style={{ color: '#F97316' }} />
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Floating stat cards */}
        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4 animate-fadeIn"
          style={{ animationDelay: '1s', opacity: 0 }}>
          {stats.map((s, i) => (
            <div key={s.label} className="glass px-5 py-4 min-w-[160px] animate-floatY"
              style={{ animationDelay: `${i * 0.4}s` }}>
              <div className="font-display font-black text-2xl text-gradient">
                <CountUp value={s.value} />
              </div>
              <div className="text-slate-400 text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24"
        style={{ background: 'linear-gradient(to top, #080D1A, transparent)' }} />
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   TICKER
─────────────────────────────────────────────────────────────── */
function TickerSection() {
  const items = ['✦ Bungalow Construction', '✦ Full Interior Civil Work', '✦ Swimming Pool Work',
    '✦ Compound Wall & Gates', '✦ Building Repair', '✦ Bathroom Renovation', '✦ Kitchen Work',
    '✦ Tiles & Flooring', '✦ POP Ceilings', '✦ Plaster Work', '✦ Wall Finishes'];
  const doubled = [...items, ...items];
  return (
    <div className="ticker-wrap overflow-hidden py-3.5"
      style={{ background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)' }}>
      <div className="ticker-inner">
        {doubled.map((item, i) => (
          <span key={i} className="text-white font-mono font-semibold text-sm uppercase tracking-widest px-8 whitespace-nowrap opacity-95">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   INTRO + STATS
─────────────────────────────────────────────────────────────── */
function IntroSection() {
  return (
    <section className="section-y" style={{ background: '#0B1120' }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label animate-on-scroll">About Us</div>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl text-white leading-tight mb-6 animate-on-scroll">
              A Legacy Built on{' '}
              <span className="text-gradient">Trust &amp; Quality</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4 animate-on-scroll">
              As the leading <strong className="text-white">building contractor</strong>, AMS Civil Construction
              has been executing premium real estate and residential projects for over two decades. From municipal approval to handover, we are your end-to-end civil work experts.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8 animate-on-scroll">
              We specialise in <strong className="text-white">bungalow construction</strong>, luxury bathroom &amp; modular kitchen renovations, tiles, flooring,
              POP false ceilings, and all interior structural work — delivered with personal attention, expert engineers, and backed by a comprehensive quality guarantee.
            </p>
            <div className="flex gap-4 animate-on-scroll">
              <Link href="/about" className="btn-primary">Our Story <ArrowRight size={16} /></Link>
              <Link href="/services" className="btn-outline">All Services</Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, i) => (
              <div key={stat.label} className="card p-8 flex flex-col gap-2 animate-on-scroll"
                style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="stat-number">
                  <CountUp value={stat.value} />
                </span>
                <span className="text-slate-400 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SERVICES — horizontal scroll on mobile, grid on desktop
─────────────────────────────────────────────────────────────── */
function ServicesSection() {
  return (
    <section className="section-y stripe-bg" style={{ background: '#101827' }}>
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="section-label justify-center animate-on-scroll">What We Do</div>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl text-white leading-tight mb-3 animate-on-scroll">
            Our <span className="text-gradient">Construction Services</span>
          </h2>
          <p className="text-slate-400 animate-on-scroll text-sm">
            From the foundation to the finest interior details — every service under one roof.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.icon] ?? Wrench;
            return (
              <Link key={svc.id} href={`/services#${svc.slug}`}
                className="group relative h-64 overflow-hidden rounded-xl border border-slate-800/50 flex flex-col justify-end p-5 animate-on-scroll"
                style={{ transitionDelay: `${i * 45}ms` }}>
                
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={svc.image} 
                    alt={svc.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors duration-300 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 group-hover:bg-orange-500 group-hover:border-transparent">
                    <Icon size={18} className="text-orange-500 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <h3 className="text-white font-display font-bold text-lg leading-tight mb-1 transition-colors duration-300 group-hover:text-orange-400">
                    {svc.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {svc.shortDesc}
                  </p>

                  <span className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider uppercase text-orange-500">
                    Learn More <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10 animate-on-scroll">
          <Link href="/services" className="btn-primary">
            All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   PROJECTS CAROUSEL — fetches from MongoDB via /api/projects
─────────────────────────────────────────────────────────────── */
interface Project {
  id: string; title: string; category: string; location: string;
  status: 'ongoing' | 'completed'; description: string; images: string[];
  completedDate?: string;
}

function ProjectsCarousel() {
  const [projects,  setProjects]  = useState<Project[]>([]);
  const [loading,   setLoading]   = useState(true);
  const [filter,    setFilter]    = useState<'all' | 'ongoing' | 'completed'>('all');
  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef  = useRef<HTMLDivElement>(null);
  const timerRef  = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetch('/api/projects')
      .then(r => r.json())
      .then(j => { if (j.success) setProjects(j.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const filtered = filter === 'all' ? projects : projects.filter(p => p.status === filter);

  /* Scroll the TRACK div horizontally — never moves the page */
  const scrollToIdx = useCallback((idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[idx] as HTMLElement | undefined;
    if (card) {
      // Use scrollLeft on the container, NOT scrollIntoView (which scrolls the whole page)
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
    }
    setActiveIdx(idx);
  }, []);

  const prev = useCallback(() => scrollToIdx(Math.max(0, activeIdx - 1)),
    [activeIdx, scrollToIdx]);
  const next = useCallback(() => scrollToIdx(Math.min(filtered.length - 1, activeIdx + 1)),
    [activeIdx, filtered.length, scrollToIdx]);

  /* Auto-advance every 5s using scrollLeft — never jumps the page */
  useEffect(() => {
    if (filtered.length <= 1) return;
    timerRef.current = setInterval(() => {
      setActiveIdx(prev => {
        const nextIdx = (prev + 1) % filtered.length;
        const track = trackRef.current;
        if (track) {
          const card = track.children[nextIdx] as HTMLElement | undefined;
          if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
        }
        return nextIdx;
      });
    }, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [filtered.length]);

  /* Reset on filter change */
  useEffect(() => {
    setActiveIdx(0);
    if (trackRef.current) trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
  }, [filter]);

  return (
    <section className="section-y" style={{ background: '#0B1120' }}>
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="section-label animate-on-scroll">Our Work</div>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl text-white leading-tight animate-on-scroll">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
          {/* Filter tabs */}
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

        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center gap-3 py-16 text-slate-400">
            <span className="w-5 h-5 border-2 border-slate-600 border-t-orange-500 rounded-full animate-spin1" />
            Loading projects…
          </div>
        )}

        {/* Empty */}
        {!loading && filtered.length === 0 && (
          <div className="card p-12 text-center text-slate-400">
            No projects yet. Add your first project from the{' '}
            <Link href="/admin" className="underline" style={{ color: '#F97316' }}>Admin Dashboard</Link>.
          </div>
        )}

        {/* Carousel track */}
        {!loading && filtered.length > 0 && (
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

                  {/* Image */}
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

                    {/* Status badge */}
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

                  {/* Info */}
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

            {/* Controls */}
            <div className="flex items-center justify-between mt-6">
              {/* Dots */}
              <div className="flex gap-2">
                {filtered.map((_, i) => (
                  <button key={i} onClick={() => scrollToIdx(i)}
                    className="rounded-full transition-all duration-200"
                    style={{
                      width: activeIdx === i ? '24px' : '8px',
                      height: '8px',
                      background: activeIdx === i ? '#F97316' : '#1E2D45',
                    }} />
                ))}
              </div>

              {/* Prev / Next */}
              <div className="flex gap-2">
                <button onClick={prev} disabled={activeIdx === 0}
                  className="w-9 h-9 flex items-center justify-center transition-all duration-200 disabled:opacity-30"
                  style={{ border: '1px solid #1E2D45', color: '#94A3B8' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = '#F97316')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '#1E2D45')}>
                  <ChevronLeft size={16} />
                </button>
                <button onClick={next} disabled={activeIdx === filtered.length - 1}
                  className="w-9 h-9 flex items-center justify-center transition-all duration-200 disabled:opacity-30"
                  style={{ border: '1px solid #1E2D45', color: '#94A3B8' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = '#F97316')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '#1E2D45')}>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </>
        )}

        <div className="text-center mt-8 animate-on-scroll">
          <Link href="/projects" className="btn-outline">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   WHY CHOOSE US
─────────────────────────────────────────────────────────────── */
function WhyUsSection() {
  const reasons = [
    { icon: Shield, title: 'Quality Guaranteed',   desc: 'Premium materials, skilled workers, 1-year workmanship warranty on all projects.' },
    { icon: Clock,  title: 'Milestone Payments',   desc: 'Pay only as you see progress. Milestone-based payments ensure your money is safe.' },
    { icon: Award,  title: '25+ Years Legacy',    desc: 'Over 25 years of building homes and trust across Mumbai, Navi Mumbai, and Thane.' },
    { icon: Users,  title: 'Senior Supervision',   desc: 'Senior experts personally oversee every detail on-site. No middlemen, just expertise.' },
  ];

  return (
    <section className="section-y relative overflow-hidden" style={{ background: '#101827' }}>
      {/* Orange glow */}
      <div className="glow-orb w-[500px] h-[500px] opacity-10"
        style={{ background: 'radial-gradient(circle, #F97316, transparent 70%)', top: '-20%', right: '-10%' }} />

      <div className="relative container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="section-label justify-center animate-on-scroll">Why Choose Us</div>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl text-white mb-3 animate-on-scroll">
            Why Families Trust <span className="text-gradient">AMS Civil</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="card group p-7 flex flex-col gap-4 animate-on-scroll"
              style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="w-12 h-12 flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #F97316, #EA580C)' }}>
                <Icon size={22} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   TESTIMONIALS
─────────────────────────────────────────────────────────────── */
interface Testimonial {
  id: string; name: string; location: string; rating: number; text: string;
  service: string; avatar: string;
}

function TestimonialsSection() {
  const [data, setData] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetch('/api/testimonials')
      .then(res => res.json())
      .then(j => { if (j.success) setData(j.data); })
      .catch(err => console.error('Failed to fetch testimonials:', err))
      .finally(() => setLoading(false));
  }, []);

  /* Auto-advance every 4.5s */
  useEffect(() => {
    if (data.length <= 1) return;
    
    timerRef.current = setInterval(() => {
      const track = trackRef.current;
      if (track) {
        let cardW = track.children[0]?.clientWidth || 0;
        let gap = 20; // gap-5 is 20px
        let scrollAmt = cardW + gap;
        let maxScroll = track.scrollWidth - track.clientWidth;
        
        // If we are at the end, rewind smoothly to the start
        if (track.scrollLeft >= maxScroll - 5) {
          track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          track.scrollBy({ left: scrollAmt, behavior: 'smooth' });
        }
      }
    }, 4500);

    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [data.length]);

  if (!loading && data.length === 0) return null;

  return (
    <section className="section-y" style={{ background: '#0B1120' }}>
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="section-label justify-center animate-on-scroll">Happy Clients</div>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl text-white mb-3 animate-on-scroll">
            What Our Clients <span className="text-gradient">Say</span>
          </h2>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12 gap-3 text-slate-500">
            <span className="w-5 h-5 border-2 border-slate-700 border-t-orange-500 rounded-full animate-spin" />
            Loading reviews...
          </div>
        ) : (
          <div className="relative group">
            {/* Scroll Left Button */}
            <button onClick={() => {
                const track = trackRef.current;
                if (track) {
                  let cardW = track.children[0]?.clientWidth || 0;
                  track.scrollBy({ left: -(cardW + 20), behavior: 'smooth' });
                }
              }}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full items-center justify-center bg-[#1E2D45] text-white hover:bg-[#F97316] transition-colors shadow-lg hidden md:flex border border-slate-700 opacity-0 group-hover:opacity-100">
              <ChevronLeft size={20} />
            </button>

            {/* Scroll Right Button */}
            <button onClick={() => {
                const track = trackRef.current;
                if (track) {
                  let cardW = track.children[0]?.clientWidth || 0;
                  track.scrollBy({ left: (cardW + 20), behavior: 'smooth' });
                }
              }}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full items-center justify-center bg-[#1E2D45] text-white hover:bg-[#F97316] transition-colors shadow-lg hidden md:flex border border-slate-700 opacity-0 group-hover:opacity-100">
              <ChevronRight size={20} />
            </button>

            {/* Track */}
            <div ref={trackRef} className="flex gap-5 overflow-x-auto pb-4 pt-2 no-scrollbar scroll-snap-x items-stretch">
              {data.map((t, i) => (
                <div key={t.id} className="scroll-snap-start flex-shrink-0 w-[85vw] md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] card p-6 flex flex-col gap-4 animate-fadeUp opacity-0 h-auto"
                  style={{ animationDelay: `${i * 70}ms`, animationFillMode: 'forwards' }}>
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={13} style={{ fill: '#F97316', color: '#F97316' }} />
                    ))}
                  </div>

                  {/* Opening quote mark */}
                  <div className="text-4xl font-display leading-none" style={{ color: '#F97316', opacity: 0.4 }}>&ldquo;</div>

                  <p className="text-slate-400 text-sm leading-relaxed flex-1 -mt-4">{t.text}</p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-3 border-t" style={{ borderColor: '#1E2D45' }}>
                    <div className="w-10 h-10 flex items-center justify-center font-bold text-sm flex-shrink-0 rounded-full"
                      style={{ background: 'linear-gradient(135deg, #F97316, #EA580C)', color: '#fff' }}>
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{t.name}</p>
                      <p className="text-slate-500 text-xs">{t.location} · {t.service}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   FAQ — FIXED: uses top-level useState, NOT require()
─────────────────────────────────────────────────────────────── */
function FAQSection() {
  // ✅ Correct — useState from module-level import, not require()
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(prev => prev === i ? null : i);

  return (
    <section className="section-y" style={{ background: '#101827' }}>
      <div className="container-custom max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="section-label justify-center animate-on-scroll">FAQ</div>
          <h2 className="font-display text-3xl lg:text-4xl text-white mb-2 animate-on-scroll">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <div key={i} className="animate-on-scroll overflow-hidden transition-all duration-200"
              style={{
                transitionDelay: `${i * 40}ms`,
                border: `1px solid ${open === i ? '#F97316' : '#1E2D45'}`,
                background: open === i ? 'rgba(249,115,22,0.04)' : '#161F2E',
              }}>

              {/* Question button */}
              <button onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left group">
                <span className="font-medium text-sm transition-colors duration-150"
                  style={{ color: open === i ? '#F97316' : '#CBD5E1' }}>
                  {faq.question}
                </span>
                <ChevronDown size={17} className="flex-shrink-0 transition-transform duration-300"
                  style={{
                    color: open === i ? '#F97316' : '#475569',
                    transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  }} />
              </button>

              {/* Answer — animated expand */}
              <div style={{
                maxHeight: open === i ? '300px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
              }}>
                <div className="px-5 pb-5">
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   CONTACT CTA
─────────────────────────────────────────────────────────────── */
