// src/app/areas/page.tsx
// /areas — master page listing all Mumbai service areas

import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { locations } from '@/data/locations';

export const metadata: Metadata = {
  title: 'Service Areas Across India | AMS Civil Construction',
  description:
    'AMS Civil Construction serves major cities across Maharashtra, Karnataka, Jharkhand, and West Bengal. expert civil construction in Mumbai, Pune, Bangalore, Kolkata, Ranchi & more.',
  alternates: { canonical: 'https://www.amscivilwork.in/areas' },
};

// Dynamically extract unique zones/states from locations data
const zones = Array.from(new Set(locations.map(l => l.zone)));

export default function AreasPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20" style={{ background: '#0B1120' }}>
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-slate-500 text-xs mb-6">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: '#F97316' }}>Service Areas</span>
          </nav>
          <div className="section-label">Where We Work</div>
          <h1 className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl mt-2 mb-4">
            Our Service Areas <span className="text-gradient">Across India</span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-sm leading-relaxed">
            AMS Civil Construction provides premium civil work and structural solutions across 
            Maharashtra, Karnataka, Jharkhand, and West Bengal.
          </p>
        </div>
      </section>

      {/* Area lists by zone */}
      <section className="section-y" style={{ background: '#101827' }}>
        <div className="container-custom">
          {zones.map(zone => {
            const zoneLocations = locations.filter(l => l.zone === zone);
            return (
              <div key={zone} className="mb-14">
                <h2 className="font-display text-2xl text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-0.5" style={{ background: '#F97316' }} />
                  {zone}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {zoneLocations.map(loc => (
                    <Link key={loc.slug} href={`/areas/${loc.slug}`}
                      className="card group p-4 flex items-center gap-2 hover:border-orange-500/40 transition-all duration-200">
                      <MapPin size={13} className="flex-shrink-0" style={{ color: '#F97316' }} />
                      <span className="text-slate-400 text-sm group-hover:text-orange-400 transition-colors leading-tight">
                        {loc.name}
                      </span>
                      <ArrowRight size={11} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" style={{ color: '#F97316' }} />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
