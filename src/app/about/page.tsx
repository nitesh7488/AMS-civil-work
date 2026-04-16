// src/app/about/page.tsx  –  About Us page refactored to Server Component
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Shield, Clock, Award, Users, CheckCircle, HardHat } from 'lucide-react';
import { stats } from '@/data/siteData';
import QuoteButton from '@/components/ui/QuoteButton';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AboutPage() {
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
    <ScrollReveal>
      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="AMS Civil Construction Work in Mumbai - Building Contractor"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080D1A]/80 to-[#080D1A]" />
        </div>
        <div className="relative container-custom">
          <div className="section-label animate-fadeIn">About Us</div>
          <h1 className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl mt-3 animate-fadeUp">
            Our <span className="text-gradient">Story</span>
          </h1>
          <nav className="flex items-center gap-2 mt-4 text-slate-400 text-sm animate-fadeIn">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-orange-500">About Us</span>
          </nav>
        </div>
      </section>

      {/* ── STORY SECTION ───────────────────────────────────────── */}
      <section className="section-y bg-[#080D1A]">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label animate-on-scroll">Our Background</div>
            <h2 className="font-display text-3xl lg:text-4xl text-white mb-6 animate-on-scroll">
              25+ Years Building <span className="text-gradient">Mumbai&apos;s Homes</span>
            </h2>
            <div className="flex flex-col gap-4 text-slate-400 leading-relaxed animate-on-scroll">
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
              <QuoteButton className="btn-primary">
                Get Free Quote <ArrowRight size={16} />
              </QuoteButton>
              <Link href="/projects" className="btn-outline">Our Work</Link>
            </div>
          </div>

          <div className="relative animate-on-scroll">
            <div className="relative h-[450px] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                alt="AMS Civil - Professional Construction Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-transparent to-transparent opacity-60" />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -left-6 bg-orange-500 p-6 rounded-xl shadow-xl animate-floatY">
              <div className="text-white font-display font-black text-3xl">2k+</div>
              <div className="text-white/80 text-xs font-bold uppercase tracking-widest mt-1">Happy Inhabitants</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES SECTION ──────────────────────────────────────── */}
      <section className="section-y bg-[#0B1120]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label justify-center animate-on-scroll">Core Values</div>
            <h2 className="font-display text-3xl lg:text-4xl text-white mb-4 animate-on-scroll">
              How We Deliver <span className="text-gradient">Excellence</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={v.title} className="card p-8 group animate-on-scroll" 
                   style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 
                              group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                     style={{ background: 'rgba(249,115,22,0.1)' }}>
                  <v.icon size={28} className="text-orange-500" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER SECTION ─────────────────────────────────────── */}
      <section className="section-y bg-[#080D1A]">
        <div className="container-custom">
          <div className="card p-8 lg:p-16 relative overflow-hidden animate-on-scroll">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 opacity-[0.03] rounded-full translate-x-1/2 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-center">
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-full border-4 border-orange-500/20 p-2 mb-6">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-500 to-orange-700 
                                flex items-center justify-center text-white font-display font-black text-5xl">
                    {leadership.initials}
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-1">{leadership.name}</h3>
                <p className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-4">{leadership.role}</p>
                <div className="flex items-center gap-2 px-4 py-1.5 bg-[#1E2D45] rounded-full text-slate-300 text-xs font-semibold">
                  <HardHat size={14} className="text-orange-500" /> {leadership.exp}
                </div>
              </div>

              <div>
                <div className="w-12 h-1 bg-orange-500 mb-8" />
                <h4 className="font-display text-2xl text-white mb-6">Founder&apos;s Message</h4>
                <div className="text-slate-400 text-lg leading-relaxed italic space-y-4">
                  <p>&ldquo;{leadership.bio}&rdquo;</p>
                </div>
                <div className="flex gap-4 mt-10">
                   <div className="flex flex-col">
                      <span className="text-white font-bold text-lg">Kedar Mandal</span>
                      <span className="text-slate-500 text-xs uppercase tracking-widest">Managing Director</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────── */}
      <section className="py-20 bg-orange-500">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl lg:text-4xl text-white font-black mb-6">
            Ready to Build Your Dream Space?
          </h2>
          <p className="text-white/90 mb-10 max-w-xl mx-auto text-lg">
            Join the 2,000+ happy families who trusted AMS Civil with their most important investment. 
            Consultation and site visits are completely free.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <QuoteButton className="bg-[#080D1A] text-white px-8 py-3 rounded-lg font-bold hover:bg-black transition-all">
              Book Free Site Visit
            </QuoteButton>
            <Link href="/contact" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
