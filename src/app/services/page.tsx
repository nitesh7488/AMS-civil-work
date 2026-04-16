// src/app/services/page.tsx  –  Services page refactored for Zero Wait speed.
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, CheckCircle,
  Home, Bath, Grid3X3, ChefHat, Layers, Paintbrush, Sparkles, Wrench,
} from 'lucide-react';
import { services } from '@/data/siteData';
import QuoteButton from '@/components/ui/QuoteButton';
import ScrollReveal from '@/components/ui/ScrollReveal';

const iconMap: Record<string, React.ElementType> = {
  Home, Bath, Grid3X3, ChefHat, Layers, Paintbrush, Sparkles, Wrench,
};

export default function ServicesPage() {
  return (
    <ScrollReveal>
      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
            alt="AMS Civil Construction Services"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080D1A]/80 to-[#080D1A]" />
        </div>
        <div className="relative container-custom">
          <div className="section-label animate-fadeIn">What We Offer</div>
          <h1 className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl mt-3 animate-fadeUp">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-slate-400 mt-4 max-w-xl animate-fadeIn">
            Complete construction and interior services tailored for Indian homes.
            Every service is backed by our 25-year legacy of quality.
          </p>
          <nav className="flex items-center gap-2 mt-4 text-slate-400 text-sm animate-fadeIn">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-orange-500">Services</span>
          </nav>
        </div>
      </section>

      {/* ── QUICK NAV ───────────────────────────────────────────── */}
      <div className="bg-[#101827] border-b border-[#1E2D45] sticky top-[64px] z-30 overflow-x-auto">
        <div className="container-custom flex gap-1 py-3 min-w-max sm:min-w-0 flex-wrap">
          {services.map((svc) => {
            const Icon = iconMap[svc.icon] ?? Wrench;
            return (
              <a
                key={svc.slug}
                href={`#${svc.slug}`}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-400
                           hover:text-orange-500 hover:bg-[#1E2D45] transition-all duration-150
                           whitespace-nowrap uppercase tracking-widest"
              >
                <Icon size={13} />
                {svc.title}
              </a>
            );
          })}
        </div>
      </div>

      {/* ── SERVICE SECTIONS ────────────────────────────────────── */}
      <div className="bg-[#080D1A]">
        {services.map((svc, index) => {
          const Icon = iconMap[svc.icon] ?? Wrench;
          const isEven = index % 2 === 0;

          return (
            <section
              key={svc.id}
              id={svc.slug}
              className={`section-y ${isEven ? 'bg-[#080D1A]' : 'bg-[#0B1120]'}`}
            >
              <div className="container-custom">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center
                  ${!isEven ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  {/* Text block */}
                  <div>
                    <div className="flex items-center gap-4 mb-6 animate-on-scroll">
                      <div className="w-14 h-14 bg-orange-500 flex items-center justify-center flex-shrink-0 rounded-xl shadow-lg">
                        <Icon size={26} className="text-[#080D1A]" />
                      </div>
                      <div>
                        <span className="text-orange-500 text-xs font-mono tracking-widest font-bold">
                          SERVICE {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    <h2 className="font-display font-bold text-white text-3xl lg:text-4xl mb-4 animate-on-scroll">
                      {svc.title}
                    </h2>
                    <p className="text-slate-400 leading-relaxed mb-8 animate-on-scroll">
                      {svc.description}
                    </p>

                    {/* Benefits */}
                    <div className="mb-8 animate-on-scroll">
                      <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                        Key Benefits
                      </h3>
                      <ul className="flex flex-col gap-3">
                        {svc.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-3 animate-on-scroll">
                      <QuoteButton service={svc.title} className="btn-primary">
                        Request Service <ArrowRight size={16} />
                      </QuoteButton>
                      <a
                        href="https://wa.me/918779391690"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                      >
                        WhatsApp Us
                      </a>
                    </div>
                  </div>

                  {/* Image block */}
                  <div className="relative animate-on-scroll group">
                    <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A]/60 to-transparent" />
                      <div className={`absolute ${isEven ? 'bottom-0 right-0' : 'bottom-0 left-0'} w-16 h-1 bg-orange-500`} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── BOTTOM CTA ──────────────────────────────────────────── */}
      <section className="section-y bg-orange-500">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl lg:text-4xl text-white font-black mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto font-medium">
            Our experts will assess your requirements and recommend the best solutions for your
            budget. Consultation and site visits are always free.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <QuoteButton className="bg-[#080D1A] text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-all shadow-xl">
              Get Free Consultation <ArrowRight size={16} />
            </QuoteButton>
            <Link href="/contact" className="bg-white text-orange-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
