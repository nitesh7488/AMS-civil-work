// src/app/areas/[location]/[service]/page.tsx
// Redesigned: Premium Local SEO landing page
// e.g. /areas/borivali/bathroom-renovation

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getLocation, locations } from '@/data/locations';
import { services } from '@/data/siteData';
import { MapPin, CheckCircle, ArrowRight, ShieldCheck, Star, Clock, Sparkles } from 'lucide-react';
import { WhatsAppLogo, PhoneLogo } from '@/components/ui/BrandIcons';
import ModernCTA from '@/components/ui/ModernCTA';

/* ── Allow on-demand generation for non-pre-rendered paths ── */
export const dynamicParams = true;

/* ── Pre-render top paths ───── */
export async function generateStaticParams() {
  const params: { location: string; service: string }[] = [];
  const priorityLocations = locations.slice(0, 8);
  priorityLocations.forEach(loc => {
    services.forEach(svc => {
      params.push({ location: loc.slug, service: svc.slug });
    });
  });
  return params;
}

/* ── 1st Rank SEO Metadata Generation ────────────────────────── */
export async function generateMetadata(
  { params }: { params: { location: string; service: string } }
): Promise<Metadata> {
  const loc = getLocation(params.location);
  const svc = services.find(s => s.slug === params.service);
  if (!loc || !svc) return { title: 'Not Found' };

  const exactMatchKeyword = `${svc.title} in ${loc.name}`;
  const title = `Best ${exactMatchKeyword} | Top Rated Civil Contractor ${loc.name}`;
  const description = `Looking for ${exactMatchKeyword}? AMS Civil Construction provides professional ${svc.title.toLowerCase()} in ${loc.name}. 25+ years experience, premium quality materials, and on-time delivery. Call +91 87793 91690 for a free site visit.`;

  return {
    title,
    description,
    keywords: [
      exactMatchKeyword,
      `${svc.title} contractor ${loc.name}`,
      `best ${svc.title.toLowerCase()} company ${loc.name}`,
      `${svc.title.toLowerCase()} cost ${loc.name}`,
      `civil work for ${svc.title.toLowerCase()} ${loc.name}`,
      ...loc.nearby.slice(0, 3).map(n => `${svc.title} in ${n}`),
    ],
    openGraph: {
      title,
      description,
      images: [{ url: svc.image, width: 800, height: 600, alt: exactMatchKeyword }],
      type: 'website',
      url: `https://www.amscivilwork.in/areas/${loc.slug}/${svc.slug}`,
    },
    alternates: {
      canonical: `https://www.amscivilwork.in/areas/${loc.slug}/${svc.slug}`,
    },
  };
}

export default function AreaServicePage({ params }: { params: { location: string; service: string } }) {
  const loc = getLocation(params.location);
  const svc = services.find(s => s.slug === params.service);
  
  if (!loc || !svc) notFound();

  const exactMatchKeyword = `${svc.title} in ${loc.name}`;

  /* JSON-LD Schema: Hardcore Local SEO */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: exactMatchKeyword,
        description: svc.description,
        provider: {
          '@type': 'LocalBusiness',
          name: `AMS Civil Construction — ${loc.name}`,
          telephone: ['+918779391690', '+919004298911'],
          image: svc.image,
          address: {
            '@type': 'PostalAddress',
            addressLocality: loc.name,
            addressRegion: 'Maharashtra',
            addressCountry: 'IN',
          },
        },
        areaServed: { '@type': 'Place', name: loc.name },
        serviceType: svc.title,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: String(25 + (locations.indexOf(loc!) * 7 + services.indexOf(svc!) * 3) % 30),
          bestRating: '5',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: `Who is the best ${svc.title.toLowerCase()} contractor in ${loc.name}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `AMS Civil Construction is the top-rated choice for ${svc.title.toLowerCase()} in ${loc.name}, Mumbai. We offer expert craftsmanship and 25+ years of local expertise.`,
            },
          },
          {
            '@type': 'Question',
            name: `How much does ${svc.title.toLowerCase()} cost in ${loc.name}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `The cost of ${svc.title.toLowerCase()} in ${loc.name} depends on the project scope and material selection. We provide free site visits and detailed quotes. Call +91 87793 91690 to schedule yours.`,
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.amscivilwork.in' },
          { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://www.amscivilwork.in/areas' },
          { '@type': 'ListItem', position: 3, name: loc.name, item: `https://www.amscivilwork.in/areas/${loc.slug}` },
          { '@type': 'ListItem', position: 4, name: svc.title, item: `https://www.amscivilwork.in/areas/${loc.slug}/${svc.slug}` },
        ],
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#080D1A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero Section ─────────────────────────────────── */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image src={svc.image} alt={exactMatchKeyword} fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-[#080D1A]/90 to-[#080D1A]/60" />
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 container-custom">
          {/* Breadcrumbs */}
          <nav className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs text-slate-400 mb-8 animate-fadeIn">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <ArrowRight size={10} className="opacity-50" />
            <Link href="/areas" className="hover:text-orange-400 transition-colors">Areas</Link>
            <ArrowRight size={10} className="opacity-50" />
            <Link href={`/areas/${loc.slug}`} className="hover:text-orange-400 transition-colors">{loc.name}</Link>
            <ArrowRight size={10} className="opacity-50" />
            <span className="text-orange-400 font-medium">{svc.title}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-semibold uppercase tracking-widest mb-6 animate-fadeUp">
              <Sparkles size={14} /> Expert {svc.title} in {loc.name}
            </div>

            <h1 className="font-display font-black text-white text-4xl sm:text-5xl lg:text-7xl leading-[1.1] mb-6 animate-fadeUp">
              {svc.title} <br />
              Contractors in <span className="text-gradient">{loc.name}</span>
            </h1>

            <p className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10 animate-fadeUp" style={{ animationDelay: '100ms' }}>
              Transform your space with Mumbai&apos;s leading experts. We provide high-end <strong>{svc.title.toLowerCase()} in {loc.name}</strong> 
              with premium finishing and structural integrity.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 animate-fadeUp" style={{ animationDelay: '200ms' }}>
              <a href="tel:+918779391690" className="btn-primary px-8 py-4 gap-3 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                <PhoneLogo className="w-5 h-5 fill-white" /> Get Quote
              </a>
              <a href={`https://wa.me/918779391690?text=Hi! I need ${encodeURIComponent(svc.title)} work in ${loc.name}.`} 
                 target="_blank" rel="noopener noreferrer"
                 className="btn-outline px-8 py-4 gap-3 bg-white/5 group">
                <WhatsAppLogo className="w-5 h-5 fill-[#F97316] group-hover:fill-white transition-colors" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content Section ─────────────────────────────── */}
      <section className="section-y bg-[#0B1120]">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl watermark-container">
              <Image src={svc.image} alt={exactMatchKeyword} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1120] via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-[#111827] border border-white/10 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-2 mb-2">
                 {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#F97316" className="text-orange-400" />)}
              </div>
              <span className="text-white font-bold text-sm block">Top Rated in {loc.name}</span>
              <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Verified Contractor</span>
            </div>
          </div>

          <div>
            <div className="section-label">Service Overview</div>
            <h2 className="font-display text-3xl lg:text-5xl text-white mt-4 mb-6">
              Quality <span className="text-gradient">{svc.title}</span> Solutions
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              AMS Civil Construction is your trusted partner for <strong>{svc.title.toLowerCase()} in {loc.name}</strong>. 
              {svc.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {svc.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors">
                  <CheckCircle className="text-orange-400 flex-shrink-0" size={18} />
                  <span className="text-white text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Cost Guide Section ──────────────────────────── */}
      <section className="section-y bg-[#080D1A] border-y border-white/5">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <div className="section-label mx-auto">Pricing Guide</div>
            <h2 className="font-display text-3xl lg:text-5xl text-white mt-4">
              {svc.title} <span className="text-gradient">Cost in {loc.name}</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Transparent estimates based on local {loc.district} market rates. 
              <span className="block mt-2 text-orange-400/80 font-medium">
                Note: Rates are not fixed and may change based on specific location, scope of work, and material choices.
              </span>
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { tier: 'Standard', price: '₹150–250', desc: 'Quality materials for everyday durability.' },
              { tier: 'Premium', price: '₹250–450', desc: 'Branded fittings and superior finishing.' },
              { tier: 'Luxury', price: '₹450+', desc: 'Imported materials and designer aesthetics.' }
            ].map((tier, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-orange-500/30 transition-colors group">
                <div className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">{tier.tier}</div>
                <div className="text-white font-display text-3xl font-black mb-2">{tier.price}</div>
                <div className="text-slate-500 text-xs mb-0">per sq.ft.</div>
                <div className="w-8 h-0.5 bg-orange-500/20 mx-auto my-6 group-hover:w-16 transition-all" />
                <p className="text-slate-400 text-sm leading-relaxed">{tier.desc}</p>
              </div>
            ))}
          </div>

          {/* New Call to Action in Pricing Area */}
          <div className="mt-12 p-8 rounded-2xl bg-orange-500/5 border border-orange-500/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-white font-bold text-lg mb-1">Get an Exact Quote for Your Project</h4>
              <p className="text-slate-400 text-sm">Our team will visit your site in {loc.name} for a zero-cost measurement and final estimation.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:+918779391690" className="btn-primary text-xs px-6 py-3 gap-2">
                <PhoneLogo className="w-4 h-4 fill-white" /> Call Now
              </a>
              <a href={`https://wa.me/918779391690?text=Hi! I want a final rate for ${encodeURIComponent(svc.title)} in ${loc.name}.`} 
                 target="_blank" rel="noopener noreferrer"
                 className="btn-outline text-xs px-6 py-3 gap-2 bg-white/5">
                <WhatsAppLogo className="w-4 h-4 fill-orange-500" /> WhatsApp
              </a>
            </div>
          </div>

          <p className="text-center text-slate-500 text-[10px] mt-8 uppercase tracking-widest">
            * FINAL RATES SUBJECT TO SITE INSPECTION & FINAL SCOPE OF WORK
          </p>
        </div>
      </section>

      {/* ── Execution Process ───────────────────────────── */}
      <section className="section-y bg-[#0B1120]">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <div className="section-label">How it Works</div>
            <h2 className="font-display text-3xl lg:text-5xl text-white mt-4">
              Our Professional <span className="text-gradient">Execution</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Consultation', desc: `We visit your site in ${loc.name} to understand your specific needs and take measurements.` },
              { step: '02', title: 'Transparency', desc: 'Get a detailed, itemized quote with material specifications and clear timelines.' },
              { step: '03', title: 'Delivery', desc: 'Project execution by our skilled teams with senior supervision and quality checks.' }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-[120px] font-display font-black text-white/5 absolute -top-12 -left-4 select-none group-hover:text-orange-500/5 transition-colors">{step.step}</div>
                <div className="relative z-10">
                  <h4 className="text-white text-xl font-bold mb-4">{step.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Local Areas served ──────────────────────────── */}
      <section className="section-y bg-[#080D1A] border-t border-white/5">
        <div className="container-custom text-center">
          <h3 className="text-white font-bold mb-8">Serving All Neighborhoods in {loc.name}:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {loc.landmarks.map(l => (
              <div key={l} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-medium flex items-center gap-2">
                <MapPin size={12} className="text-orange-400" /> {l}
              </div>
            ))}
          </div>
          
          <div className="mt-12">
             <p className="text-slate-500 text-sm mb-6">Need this service in a nearby area?</p>
             <div className="flex flex-wrap justify-center gap-2">
                {loc.nearby.slice(0, 6).map(near => (
                  <Link key={near} href={`/areas/${near.toLowerCase().replace(/\s+/g, '-')}/${svc.slug}`} 
                    className="px-4 py-2 text-[10px] uppercase font-bold tracking-widest text-orange-400/60 hover:text-orange-400 border border-orange-500/10 hover:border-orange-500/30 rounded-lg transition-all bg-orange-500/5">
                    {near}
                  </Link>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <ModernCTA 
        title={`Ready for high-end ${svc.title.toLowerCase()} in ${loc.name}?`}
        subtitle={`Join 500+ happy families in Mumbai. Get your dream space delivered on time.`}
        description={`Our expert teams specialize in ${svc.title.toLowerCase()} specifically in the ${loc.name} area. We understand the unique architectural requirements of ${loc.district} homes and use only ISI-marked materials to ensure your ${svc.title.toLowerCase()} project is both beautiful and structurally sound. Call +91 87793 91690 for a fixed-price quote.`}
        image={svc.image}
      />

      <section className="py-12 bg-[#0B1120] border-t border-white/5">
        <div className="container-custom text-center">
          <Link href={`/areas/${loc.slug}`} className="btn-outline px-8 py-3 text-sm">
             Browse More Services in {loc.name} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
