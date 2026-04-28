'use client';
// src/components/ui/ModernCTA.tsx
// High-impact, SEO-Optimized Call-To-Action component

import Image from 'next/image';
import { ArrowRight, ShieldCheck, Zap, Award, CheckCircle2 } from 'lucide-react';
import { openQuotePopup } from '@/components/ui/QuotePopup';
import { WhatsAppLogo, PhoneLogo } from './BrandIcons';

interface ModernCTAProps {
  title?: string;
  subtitle?: string;
  description?: string; // New: More detailed SEO text
  image?: string;
}

export default function ModernCTA({
  title = "Ready to Build Your Dream Space?",
  subtitle = "Get a free consultation and project estimate at the best affordable price.",
  description = "AMS Civil Construction is your trusted partner for premium bungalow construction, home renovations, and high-end civil work. We combine 25+ years of Mumbai expertise with modern engineering to deliver projects that stand the test of time. From foundation to finishing, we ensure 100% transparency and quality.",
  image = "/images/cta-bg.png"
}: ModernCTAProps) {
  return (
    <section className="section-y relative overflow-hidden group">
      {/* Background Image with Rich Overlay */}
      <div className="absolute inset-0 z-0 watermark-container">
        <Image 
          src={image}
          alt="Premium Construction Project by AMS Civil"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-40"
          priority
          sizes="100vw"
        />
        {/* Dynamic Multi-layer Overlay */}
        <div className="absolute inset-0 bg-[#080D1A]/80 sm:bg-[#080D1A]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080D1A] via-[#080D1A]/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#080D1A] to-transparent" />
      </div>

      <div className="relative container-custom z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
                Active Project Site: {title.split('in').pop()?.trim() || 'Mumbai'}
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-display font-black text-white text-3xl sm:text-4xl lg:text-6xl leading-[1.1] mb-6">
              {title}
            </h2>

            {/* Subtext */}
            <p className="text-orange-400 text-lg font-semibold mb-4 leading-relaxed">
              {subtitle}
            </p>

            {/* Detailed SEO Text */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-10 max-w-2xl border-l-2 border-orange-500/30 pl-6">
              {description}
            </p>

            {/* Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <button 
                onClick={openQuotePopup}
                className="btn-primary text-base px-10 py-5 shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)]"
              >
                Get Free Estimate <ArrowRight size={20} />
              </button>
              
              <div className="flex items-center gap-4">
                <a href="https://wa.me/918779391690" target="_blank" rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-orange-500 hover:border-transparent transition-all duration-300 group">
                  <WhatsAppLogo className="w-7 h-7 fill-white" />
                </a>
                <a href="tel:+918779391690"
                  className="w-14 h-14 rounded-full flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-orange-500 hover:border-transparent transition-all duration-300 group">
                  <PhoneLogo className="w-7 h-7 fill-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Trust Features Sidebar (SEO Rich) */}
          <div className="grid sm:grid-cols-2 gap-4 lg:pl-12 border-l border-white/5">
             {[
               { icon: Award, title: "25+ Years", desc: "Industry Expertise" },
               { icon: CheckCircle2, title: "Certified", desc: "ISI Materials Only" },
               { icon: ShieldCheck, title: "Warranty", desc: "1-Year Guarantee*" },
               { icon: Zap, title: "Timely", desc: "On-Schedule Handover" }
             ].map((item, i) => (
               <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/20 transition-all">
                  <item.icon className="text-orange-500 mb-3" size={28} />
                  <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-[10px] uppercase tracking-wider font-semibold">{item.desc}</p>
               </div>
             ))}
             <div className="sm:col-span-2 p-6 rounded-2xl bg-orange-500/5 border border-orange-500/20">
                <h4 className="text-orange-400 font-bold mb-2 flex items-center gap-2">
                   <ShieldCheck size={18}/> Quality Assurance
                </h4>
                <p className="text-slate-400 text-[10px] leading-relaxed">
                   Every project at AMS Civil undergoes rigorous structural audits and quality checks. *1-Year Warranty on structural work only. Terms & Conditions Apply.
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

