'use client';
// src/components/ui/ModernCTA.tsx
// High-impact, Premium Call-To-Action component

import Image from 'next/image';
import { ArrowRight, Phone, MessageCircle, ShieldCheck, Zap } from 'lucide-react';
import { openQuotePopup } from '@/components/ui/QuotePopup';

interface ModernCTAProps {
  title?: string;
  subtitle?: string;
  image?: string;
}

export default function ModernCTA({
  title = "Ready to Build Your Dream Space?",
  subtitle = "Get a free consultation and project estimate at the best affordable price. No obligation, just honest advice and quality work.",
  image = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80" // High-end luxury bungalow
}: ModernCTAProps) {
  return (
    <section className="section-y relative overflow-hidden group">
      {/* Background Image with Rich Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={image}
          alt="Luxury Construction Background"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          priority
        />
        {/* Dynamic Multi-layer Overlay */}
        <div className="absolute inset-0 bg-[#0B1120]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B1120] to-transparent" />
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
                className="w-14 h-14 rounded-full flex items-center justify-center border border-white/20 bg-white/5 backdrop-blur-xl text-white hover:bg-orange-500 hover:border-transparent transition-all duration-300 hover:scale-110">
                <MessageCircle size={24} />
              </a>
              <a href="tel:+918779391690"
                className="w-14 h-14 rounded-full flex items-center justify-center border border-white/20 bg-white/5 backdrop-blur-xl text-white hover:bg-orange-500 hover:border-transparent transition-all duration-300 hover:scale-110">
                <Phone size={24} />
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
