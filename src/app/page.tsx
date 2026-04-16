// src/app/page.tsx  –  Home Page
// PERFORMANCE OVERHAUL: Refactored to Server Component for raw speed & zero-wait.

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, Star, CheckCircle, ChevronDown, ChevronLeft, ChevronRight,
  Home, Bath, Grid3X3, ChefHat, Layers, Paintbrush, Sparkles, Wrench,
  Shield, Clock, Award, Users, MapPin, Phone, MessageCircle,
  Waves, LayoutTemplate, Fence, Hammer,
} from 'lucide-react';
import { services, stats, testimonials, faqs } from '@/data/siteData';
import CountUp from '@/components/ui/CountUp';
import GalleryCarouselSection from '@/components/ui/GalleryCarousel';
import ProjectsCarousel from '@/components/ui/ProjectsCarousel';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { getDb } from '@/lib/mongodb';

/* ── Icon map ───────────────────────────────────────────────── */
const iconMap: Record<string, React.ElementType> = {
  Home, Bath, Grid3X3, ChefHat, Layers, Paintbrush, Sparkles, Wrench,
  Waves, LayoutTemplate, Fence, Hammer,
};

async function getHomeData() {
  try {
    const db = await getDb();
    
    // Fetch Gallery
    const galleryItems = await db.collection('gallery').find({}).toArray();
    const formattedGallery = galleryItems.map(item => ({
      id: item._id.toString(),
      src: item.src,
      title: item.title,
      category: item.category
    }));

    // Fetch Projects
    const projects = await db.collection('projects').find({}).sort({ createdAt: -1 }).toArray();
    const formattedProjects = projects.map(p => ({
      id: p._id.toString(),
      title: p.title,
      category: p.category,
      location: p.location,
      status: p.status,
      description: p.description,
      images: p.images || []
    }));

    return { gallery: formattedGallery, projects: formattedProjects };
  } catch (error) {
    console.error('Failed to fetch home data:', error);
    return { gallery: [], projects: [] };
  }
}

export default async function HomePage() {
  const { gallery, projects } = await getHomeData();

  return (
    <ScrollReveal>
      <HeroSection />
      <TickerSection />
      <IntroSection />
      <ServicesSection />
      <ProjectsCarousel projects={projects as any} />
      <GalleryCarouselSection items={gallery} />
      <WhyUsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactCTASection />
    </ScrollReveal>
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
          <div className="section-label animate-fadeIn border-orange-500/30 text-orange-400">
            Mumbai's Trusted Construction Partner Since 2001
          </div>

          <h1 className="font-display font-black text-white leading-[1.08] text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] mt-2 mb-6">
            India's Top Rated<br />
            <span className="text-gradient">Construction Company</span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-8 animate-fadeUp">
            The most trusted <strong className="text-orange-400">civil contractors in India</strong>. 
            Expert in bungalow construction, bathroom renovation, kitchen work, and premium interior civil work across Maharashtra & beyond.
          </p>

          <div className="flex flex-wrap gap-4 mb-10 animate-fadeUp">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Get Free Quote <ArrowRight size={18} />
            </Link>
            <Link href="/projects" className="btn-ghost text-base px-8 py-4">
              View Projects
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 animate-fadeIn" style={{ animationDelay: '.85s' }}>
            {['350+ Projects Done', '50+ Skilled Team', 'Free Consultation', '1-Year Warranty'].map(b => (
              <span key={b} className="flex items-center gap-1.5 text-slate-400 text-sm">
                <CheckCircle size={14} style={{ color: '#F97316' }} />
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4">
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

      <div className="absolute bottom-0 inset-x-0 h-24"
        style={{ background: 'linear-gradient(to top, #080D1A, transparent)' }} />
    </section>
  );
}

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
                className="card group relative overflow-hidden p-5 flex flex-col gap-3 animate-on-scroll"
                style={{ transitionDelay: `${i * 45}ms` }}>
                <div className="absolute left-0 top-0 bottom-0 w-0.5 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
                  style={{ background: '#F97316' }} />

                <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                  style={{ background: 'rgba(249,115,22,0.12)' }}>
                  <Icon size={20} style={{ color: '#F97316' }} />
                </div>

                <div>
                  <h3 className="text-white font-semibold text-sm leading-tight mb-1 group-hover:text-orange-400 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{svc.shortDesc}</p>
                </div>

                <span className="flex items-center gap-1 text-xs font-semibold tracking-wide uppercase mt-auto"
                  style={{ color: '#F97316' }}>
                  Learn More <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                </span>
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

function WhyUsSection() {
  const points = [
    { icon: Shield, title: 'ISI Quality Material', desc: 'No local materials. Only certified ISI marks used.' },
    { icon: Award, title: '25+ Years Mastery', desc: 'Expertise built through hundreds of successful projects.' },
    { icon: Users, title: 'Direct Management', desc: 'No sub-contracts. Our own team handles every square foot.' },
    { icon: Sparkles, title: 'Premium Finish', desc: 'Detail-oriented work that stands the test of time and weather.' },
  ];
  return (
    <section className="section-y" style={{ background: '#0B1120' }}>
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label justify-center animate-on-scroll">The AMS Difference</div>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl text-white mb-4 animate-on-scroll">
            Why We Are <span className="text-gradient">Leaders</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((p, i) => (
            <div key={p.title} className="card p-8 group animate-on-scroll"
              style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                style={{ background: 'rgba(249,115,22,0.1)' }}>
                <p.icon size={28} style={{ color: '#F97316' }} />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section-y" style={{ background: '#101827' }}>
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label justify-center animate-on-scroll">Testimonials</div>
          <h2 className="font-display text-3xl lg:text-4xl text-white mb-4 animate-on-scroll">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={t.name} className="card p-8 relative animate-on-scroll"
              style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="flex gap-1 text-orange-400 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="#F97316" />)}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-8 italic">"{t.text}"</p>
              <div className="flex items-center gap-4 border-t border-[#1E2D45] pt-6">
                <div className="w-12 h-12 rounded-full bg-[#161F2E] flex items-center justify-center text-orange-400 font-bold text-lg">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-[10px] uppercase font-mono tracking-widest">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="section-y" style={{ background: '#0B1120' }}>
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <div className="section-label justify-center animate-on-scroll">Common Questions</div>
          <h2 className="font-display text-3xl text-white mb-4 animate-on-scroll">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="card p-6 border border-[#1E2D45] animate-on-scroll"
              style={{ transitionDelay: `${i * 80}ms` }}>
              <h4 className="text-white font-bold text-base mb-2">{f.question}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTASection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#F97316' }}>
      <div className="absolute right-0 top-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-black text-white text-3xl md:text-5xl lg:text-6xl leading-tight mb-8">
            Let's Discuss Your Project Excellence Today
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+918779391690" className="inline-flex items-center gap-3 bg-[#0B1120] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-black transition-all shadow-xl">
              <Phone size={22} /> +91 87793 91690
            </a>
            <a href="https://wa.me/918779391690" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1DA851] transition-all shadow-xl">
              <MessageCircle size={22} /> WhatsApp Now
            </a>
          </div>
          <p className="text-white font-medium mt-10 opacity-90 animate-pulse">
            ✦ Free Site Visit & Estimation Available Across Mumbai ✦
          </p>
        </div>
      </div>
    </section>
  );
}
