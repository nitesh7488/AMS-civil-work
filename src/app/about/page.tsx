'use client';
// src/app/about/page.tsx  –  About Us page

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Shield, Clock, Award, Users, CheckCircle, HardHat } from 'lucide-react';
import { stats } from '@/data/siteData';
import { openQuotePopup } from '@/components/ui/QuotePopup';

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function AboutPage() {
  useScrollReveal();

  const values = [
    { icon: Shield, title: 'Uncompromising Quality', desc: 'We use only ISI-marked and certified materials. Our teams are trained artisans with 5–15 years of experience.' },
    { icon: Award, title: 'Trust & Transparency', desc: 'Honest pricing and full compliance with all government rules and regulations. We keep every commitment we make.' },
    { icon: Clock, title: 'Timely Delivery', desc: 'Our project management process ensures milestones are met and handovers happen on schedule.' },
    { icon: Users, title: 'Client-First Approach', desc: 'You\'re not a contract — you\'re family. We go the extra mile to ensure your complete satisfaction.' },
  ];

  const leadership = {
    name: 'Kedar Mandal',
    role: 'Founder & Owner',
    exp: '25+ Years Experience',
    bio: 'With over two decades of hands-on experience in civil construction and interior work, Kedar Mandal has built a reputation for excellence. Leading a dedicated team of more than 50 skilled professionals, he has collaborated with trusted names like Zigma Decor LLP and other industry leaders to bring craftsmanship and project management to AMS Civil. Under his leadership, the company focuses on delivering 100% satisfaction and great feedback from every family we serve.',
    initials: 'KM'
  };

  return (
    <>
      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="AMS Civil Construction Work in Mumbai - Building Contractor"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/80 to-brand-charcoal" />
        </div>
        <div className="relative container-custom">
          <div className="section-label animate-fadeIn">About Us</div>
          <h1 className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl mt-3 animate-fadeUp">
            Our <span className="text-gradient">Story</span>
          </h1>
          <nav className="flex items-center gap-2 mt-4 text-brand-smoke text-sm animate-fadeIn">
            <Link href="/" className="hover:text-brand-amber transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-amber">About Us</span>
          </nav>
        </div>
      </section>

      {/* ── STORY SECTION ───────────────────────────────────────── */}
      <section className="section-y bg-brand-charcoal">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label animate-on-scroll">Our Background</div>
            <h2 className="font-display text-3xl lg:text-4xl text-white mb-6 animate-on-scroll">
              25+ Years Building <span className="text-gradient">Mumbai&apos;s Homes</span>
            </h2>
            <div className="flex flex-col gap-4 text-brand-smoke leading-relaxed animate-on-scroll">
              <p>
                AMS Civil Construction was founded with a passion for quality craftsmanship and a vision to build
                something lasting for families across Mumbai. Starting with small plastering and renovation
                projects, our dedication to quality quickly earned a loyal base of satisfied clients.
              </p>
              <p>
                Over 25+ years, the company has grown into a trusted <strong className="text-white">building contractor</strong> handling complete bungalow
                constructions, full interior fit-outs, modular kitchen renovations, bathroom remodels, tiles,
                flooring, POP ceilings, and all civil finishing works across Mumbai, Navi Mumbai, and Thane.
              </p>
              <p>
                Led by a team of experts on every project, the company stays true to its founding
                values — honest and <strong className="text-orange-400">affordable pricing</strong>, premium quality materials, highly skilled workers, and on-time
                delivery. Every project is handled as if it were our own home.
              </p>
            </div>
            <div className="flex gap-4 mt-8 animate-on-scroll">
              <button onClick={openQuotePopup} className="btn-primary">
                Get Free Quote <ArrowRight size={16} />
              </button>
              <Link href="/projects" className="btn-outline">
                View Projects
              </Link>
            </div>
          </div>

          <div className="relative animate-on-scroll">
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Expert civil engineers and construction team at AMS Civil Construction Mumbai"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-brand-amber p-6">
              <span className="block font-display font-black text-5xl text-brand-charcoal">25+</span>
              <span className="block text-brand-charcoal font-semibold text-sm mt-1">Years of Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────────────── */}
      <section className="bg-brand-amber py-16">
        <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-black text-5xl text-brand-charcoal">{stat.value}</div>
              <div className="text-brand-charcoal/70 text-sm mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION & VISION ────────────────────────────────────── */}
      <section className="section-y bg-brand-steel stripe-bg">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-10 animate-on-scroll">
            <div className="w-12 h-12 bg-brand-amber flex items-center justify-center mb-6">
              <HardHat size={22} className="text-brand-charcoal" />
            </div>
            <h3 className="font-display text-2xl text-white mb-4">Our Mission</h3>
            <p className="text-brand-smoke leading-relaxed">
              To deliver high-quality, affordable construction services that transform our clients&apos;
              visions into reality. We commit to honest work, fair pricing, and a finished product that
              our clients are proud to call home.
            </p>
          </div>
          <div className="card p-10 animate-on-scroll" style={{ transitionDelay: '150ms' }}>
            <div className="w-12 h-12 bg-brand-amber flex items-center justify-center mb-6">
              <Award size={22} className="text-brand-charcoal" />
            </div>
            <h3 className="font-display text-2xl text-white mb-4">Our Vision</h3>
            <p className="text-brand-smoke leading-relaxed">
              To become Mumbai&apos;s most trusted construction brand — known for integrity, innovation,
              and excellence. We envision a future where every family in Mumbai can access premium
              construction services without compromise.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────────────────────── */}
      <section className="section-y bg-brand-charcoal">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label justify-center animate-on-scroll">Why Choose Us</div>
            <h2 className="font-display text-3xl lg:text-4xl text-white mb-4 animate-on-scroll">
              The AMS Civil <span className="text-gradient">Difference</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="card p-8 flex flex-col gap-4 animate-on-scroll"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 bg-brand-amber/10 flex items-center justify-center">
                  <Icon size={22} className="text-brand-amber" />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
                <p className="text-brand-smoke text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ────────────────────────────────────────────────── */}
      <section className="section-y bg-brand-steel">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label justify-center animate-on-scroll">Our Leadership</div>
            <h2 className="font-display text-3xl lg:text-4xl text-white animate-on-scroll">
              The Vision Behind <span className="text-gradient">AMS Civil</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center animate-on-scroll">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-brand-amber text-brand-charcoal rounded-full flex 
                              items-center justify-center font-display font-bold text-4xl md:text-5xl flex-shrink-0">
                {leadership.initials}
              </div>
              <div className="text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4 justify-center md:justify-start">
                  <h3 className="text-white font-display text-3xl">{leadership.name}</h3>
                  <span className="text-brand-amber font-mono text-xs border border-brand-amber/30 px-2 py-0.5 rounded">
                    {leadership.role}
                  </span>
                </div>
                <p className="text-brand-smoke leading-relaxed mb-6">
                  {leadership.bio}
                </p>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <CheckCircle size={16} className="text-brand-amber" />
                  <span className="text-white font-semibold text-sm">{leadership.exp}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST & GUARANTEES ────────────────────────────────── */}
      <section className="section-y bg-brand-charcoal">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <div className="section-label justify-center animate-on-scroll">Our Commitments</div>
          <h2 className="font-display text-3xl text-white mb-10 animate-on-scroll">
            Why You Can <span className="text-gradient">Trust Us</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              'Milestone-Based Payments (Pay as you see progress)',
              '100% ISI-Marked Materials Guarantee',
              'On-Site Senior Supervision on every project',
            ].map((cert, i) => (
              <div
                key={cert}
                className="card px-6 py-8 flex items-center gap-4 animate-on-scroll"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <CheckCircle size={28} className="text-brand-amber flex-shrink-0" />
                <span className="text-brand-ash font-medium text-sm text-left">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
