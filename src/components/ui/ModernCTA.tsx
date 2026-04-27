'use client';
// src/components/ui/ModernCTA.tsx
// High-impact, Premium Call-To-Action component

import Image from 'next/image';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { openQuotePopup } from '@/components/ui/QuotePopup';
import { WhatsAppLogo, PhoneLogo } from './BrandIcons';

interface ModernCTAProps {
  title?: string;
  subtitle?: string;
  image?: string;
}

export default function ModernCTA({
  title = "Ready to Build Your Dream Space?",
  subtitle = "Get a free consultation and project estimate at the best affordable price. No obligation, just honest advice and quality work.",
  image = "/images/cta-bg.png"
}: ModernCTAProps) {
  return (
    <section className="section-y relative overflow-hidden group">
      {/* Background Image with Rich Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={image}
          alt="Premium Construction Project by AMS Civil"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          priority
          sizes="100vw"
        />
        {/* Dynamic Multi-layer Overlay */}
        <div className="absolute inset-0 bg-[#0B1120]/40 sm:bg-[#0B1120]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0B1120] to-transparent" />
        
        {/* Subtle Branding Watermark/Badge */}
        <div className="absolute top-10 right-10 hidden lg:flex flex-col items-end opacity-40 hover:opacity-100 transition-opacity duration-500 pointer-events-none select-none">
          <Image src="/logo.png" alt="AMS Logo" width={120} height={36} className="grayscale brightness-0 invert mb-2" />
          <p className="text-[10px] font-mono font-bold tracking-[0.4em] text-white/80 uppercase">Official Project</p>
        </div>
      </div>

      <div className="relative container-custom z-10">
        <div className="max-w-4xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 backdrop-blur-md animate-on-scroll">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
              Fast Response: Active on WhatsApp
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display font-black text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] mb-6 animate-on-scroll">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i >= title.split(' ').length - 2 ? "text-gradient block sm:inline" : ""}>
                {word}{' '}
              </span>
            ))}
          </h2>

          {/* Subtext */}
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl animate-on-scroll">
            {subtitle}
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12 animate-on-scroll">
            <button 
              onClick={openQuotePopup}
              className="btn-primary text-base px-10 py-4 shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_45px_rgba(249,115,22,0.6)]"
            >
              Get Free Quote <ArrowRight size={20} />
            </button>
            
            <div className="flex items-center gap-3">
              <a href="https://wa.me/918779391690" target="_blank" rel="noopener noreferrer"
                className="w-14 h-14 rounded-full flex items-center justify-center border border-orange-500/30 bg-orange-500/10 backdrop-blur-xl text-white hover:bg-orange-500 hover:border-transparent transition-all duration-300 hover:scale-110 group">
                <WhatsAppLogo className="w-7 h-7 fill-[#F97316] group-hover:fill-white" />
              </a>
              <a href="tel:+918779391690"
                className="w-14 h-14 rounded-full flex items-center justify-center border border-orange-500/30 bg-orange-500/10 backdrop-blur-xl text-white hover:bg-orange-500 hover:border-transparent transition-all duration-300 hover:scale-110 group">
                <PhoneLogo className="w-7 h-7 fill-[#F97316] group-hover:fill-white" />
              </a>
              <div className="hidden sm:block ml-2 text-left">
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Quick Call</p>
                <p className="text-white font-display font-bold">+91 87793 91690</p>
              </div>
            </div>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-8 animate-on-scroll">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-orange-500/20 text-orange-500">
                <ShieldCheck size={20} />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm">1-Year Warranty</p>
                <p className="text-slate-500 text-xs text-nowrap">On all construction work</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-orange-500/20 text-orange-500">
                <Zap size={20} />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm">Fast Execution</p>
                <p className="text-slate-500 text-xs text-nowrap">Prompt milestone delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glassy Reveal Bar */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-orange-500/5 to-transparent pointer-events-none" />
    </section>
  );
}
