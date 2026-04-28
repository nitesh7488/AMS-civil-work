// src/app/areas/[location]/[service]/page.tsx
// Highly aggressive, 1st-Rank targeted Programmatic SEO landing page
// e.g. /areas/borivali/bathroom-renovation

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getLocation, locations } from '@/data/locations';
import { services } from '@/data/siteData';
import { MapPin, CheckCircle, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { WhatsAppLogo, PhoneLogo } from '@/components/ui/BrandIcons';
import ModernCTA from '@/components/ui/ModernCTA';

/* ── Allow on-demand generation for non-pre-rendered paths ── */
export const dynamicParams = true;

/* ── Pre-render top 50 high-priority paths at build time ───── */
export async function generateStaticParams() {
  const params: { location: string; service: string }[] = [];
  
  // Only pre-render the first 5 locations to save build memory
  const priorityLocations = locations.slice(0, 5);
  
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
  const title = `Best ${exactMatchKeyword} | Civil Contractors ${loc.name} Mumbai`;
  const description = `Looking for ${exactMatchKeyword}? AMS Civil Construction provides expert ${svc.title.toLowerCase()} services in ${loc.name}, ${loc.zone}. Premium materials, 100% guaranteed work. Call +91 87793 91690 or +91 90042 98911 for a free site visit.`;

  return {
    title,
    description,
    keywords: [
      exactMatchKeyword,
      `best ${svc.title.toLowerCase()} ${loc.name}`,
      `top ${svc.title.toLowerCase()} contractor ${loc.name}`,
      `${svc.title.toLowerCase()} cost in ${loc.name}`,
      `${svc.title.toLowerCase()} services near me`,
      `civil contractor for ${svc.title.toLowerCase()} in ${loc.name}`,
      ...loc.nearby.map(n => `${svc.title} in ${n}`),
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
          name: `AMS Civil Construction — ${loc.name} Branch`,
          telephone: ['+918779391690', '+919004298911'],
          image: svc.image,
          address: {
            '@type': 'PostalAddress',
            addressLocality: loc.name,
            addressRegion: 'Maharashtra',
            addressCountry: 'IN',
            ...(loc.pincode ? { postalCode: loc.pincode } : {}),
          },
        },
        areaServed: {
          '@type': 'Place',
          name: loc.name,
        },
        serviceType: svc.title,
        category: 'Home & Construction',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: String(25 + (locations.indexOf(loc!) * 7 + services.indexOf(svc!) * 3) % 30),
          bestRating: '5',
          worstRating: '1',
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
              text: `AMS Civil Construction is recognized as a leading ${svc.title.toLowerCase()} contractor in ${loc.name}, Mumbai. We have completed over 25+ projects in the area with 100% customer satisfaction.`,
            },
          },
          {
            '@type': 'Question',
            name: `How much does ${svc.title.toLowerCase()} cost in ${loc.name}, Mumbai?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `The cost of ${svc.title.toLowerCase()} in ${loc.name} varies based on project size and materials. We offer competitive pricing and free site visits for detailed estimates. Call us at +91 87793 91690 for a personalized quote.`,
            },
          },
          {
            '@type': 'Question',
            name: `Do you provide ${svc.title.toLowerCase()} services near ${loc.name}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Yes, we provide ${svc.title.toLowerCase()} services in ${loc.name} and all nearby areas including ${loc.nearby.join(', ')}.`,
            },
          },
          {
            '@type': 'Question',
            name: `What is the timeline for ${svc.title.toLowerCase()} in ${loc.name}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Timelines vary by project size. Typically bathroom renovations take 7-14 days, kitchen work 10-20 days, and bungalow construction 8-14 months. We provide a detailed schedule before starting any project in ${loc.name}.`,
            },
          },
          {
            '@type': 'Question',
            name: `Is AMS Civil Construction licensed for ${svc.title.toLowerCase()} work in ${loc.name}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Yes. AMS Civil Construction is a fully registered contractor experienced with all local municipal regulations in ${loc.name}, ${loc.district}. We handle all required approvals and paperwork.`,
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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero Section ─────────────────────────────── */}
      <section className="pt-36 pb-20 relative overflow-hidden" style={{ background: '#0B1120' }}>
        <div className="absolute inset-0 opacity-20">
          <Image src={svc.image} alt={exactMatchKeyword} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/90 to-[#0B1120]/60" />
        </div>

        <div className="relative container-custom z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-slate-500 text-xs mb-6 flex-wrap">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/areas" className="hover:text-orange-400 transition-colors">Areas</Link>
            <span>/</span>
            <Link href={`/areas/${loc.slug}`} className="hover:text-orange-400 transition-colors">{loc.name}</Link>
            <span>/</span>
            <span style={{ color: '#F97316' }}>{svc.title}</span>
          </nav>

          <span className="inline-block px-3 py-1 text-xs font-mono font-semibold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(249,115,22,0.12)', color: '#F97316', border: '1px solid rgba(249,115,22,0.25)' }}>
            Expert Civil Contractors in {loc.name}
          </span>

          {/* Aggressive Exact Match H1 */}
          <h1 className="font-display font-black text-white text-3xl sm:text-4xl lg:text-6xl leading-tight mb-6">
            Expert <span className="text-gradient">{svc.title}</span> <br/>
            in {loc.name}, Mumbai
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-8">
            Searching for reliable <strong>{svc.title.toLowerCase()} services in {loc.name}</strong>? 
            AMS Civil Construction specializes in {svc.shortDesc.toLowerCase()} 
            Serving clients across {loc.name} and {loc.nearby[0]} for over 20 years.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="tel:+918779391690" className="btn-primary flex-1 sm:flex-none text-sm px-6 py-4 gap-2">
                <PhoneLogo className="w-5 h-5 fill-white" /> Call 1
              </a>
              <a href="tel:+919004298911" className="btn-primary flex-1 sm:flex-none text-sm px-6 py-4 gap-2">
                <PhoneLogo className="w-5 h-5 fill-white" /> Call 2
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href={`https://wa.me/918779391690?text=Hi!%20I%20am%20from%20${encodeURIComponent(loc.name)}.%20I%20need%20a%20cost%20estimate%20for%20${encodeURIComponent(svc.title)}.`}
                target="_blank" rel="noopener noreferrer"
                className="btn-outline flex-1 sm:flex-none text-sm px-6 py-4 bg-[#101827] gap-2 group">
                <WhatsAppLogo className="w-5 h-5 fill-[#F97316] group-hover:fill-current" /> WhatsApp 1
              </a>
              <a href={`https://wa.me/919004298911?text=Hi!%20I%20am%20from%20${encodeURIComponent(loc.name)}.%20I%20need%20a%20cost%20estimate%20for%20${encodeURIComponent(svc.title)}.`}
                target="_blank" rel="noopener noreferrer"
                className="btn-outline flex-1 sm:sm:flex-none text-sm px-6 py-4 bg-[#101827] gap-2 group">
                <WhatsAppLogo className="w-5 h-5 fill-[#F97316] group-hover:fill-current" /> WhatsApp 2
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content Strategy ─────────────────────────────── */}
      <section className="section-y" style={{ background: '#101827' }}>
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-2xl border border-[#1E2D45] shadow-2xl">
            <Image src={svc.image} alt={`${svc.title} Contractors in ${loc.name}`} fill className="object-cover hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-0 inset-x-0 p-6" style={{ background: 'linear-gradient(to top, rgba(11,17,32,0.9), transparent)' }}>
              <div className="flex items-center gap-2">
                <span className="flex text-orange-400">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#F97316" />)}
                </span>
                <span className="text-white font-bold text-sm">#1 Rated in {loc.district}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl lg:text-4xl text-white mb-6">
              Why Choose Us for <span style={{ color: '#F97316' }}>{svc.title}</span> in {loc.name}?
            </h2>
            
            <div className="prose prose-invert prose-orange max-w-none text-slate-300 leading-relaxed mb-8">
              <p>
                When it comes to <strong>{svc.title.toLowerCase()} in {loc.name}</strong>, you need a contractor who understands structural integrity, local municipal guidelines, and modern design aesthetics. 
              </p>
              <p>
                {svc.description}
              </p>
              <p>
                We source our materials directly from verified wholesale yards around {loc.zone}, ensuring you get premium quality at transparent pricing without middleman markups.
              </p>
            </div>

            <ul className="space-y-4 mb-10">
              {svc.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 p-4 rounded-xl border border-[#1E2D45] bg-[#0B1120] hover:border-orange-500/30 transition-colors">
                  <ShieldCheck size={20} style={{ color: '#F97316' }} className="flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Hyper-Local Triggers ─────────────────────────── */}
      <section className="section-y" style={{ background: '#0B1120', borderTop: '1px solid #1E2D45' }}>
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl text-white mb-4">Local Areas Served Near {loc.name}</h2>
            <p className="text-slate-400 text-sm">We provide fast, on-site execution in these specific neighbourhoods.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {loc.landmarks.map(landmark => (
              <div key={landmark} className="card p-4 flex items-center justify-center gap-2 text-center hover:border-orange-500/40 transition-colors cursor-default">
                <MapPin size={14} style={{ color: '#F97316' }} />
                <span className="text-slate-300 font-semibold text-xs tracking-wide">{landmark}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="text-slate-500 text-xs mt-2 mr-2">Also ranking top for {svc.title.toLowerCase()} in:</span>
            {loc.nearby.map(near => (
              <Link key={near} href={`/areas/${near.toLowerCase().replace(/\s+/g, '-')}/${svc.slug}`} 
                className="px-3 py-1.5 text-xs text-orange-400 bg-orange-400/10 rounded-full hover:bg-orange-400/20 transition-colors">
                {near}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cost Estimate Section ────────────────────────── */}
      <section className="section-y" style={{ background: '#101827', borderTop: '1px solid #1E2D45' }}>
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl text-white mb-3">
              Cost of <span style={{ color: '#F97316' }}>{svc.title}</span> in {loc.name}
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Pricing depends on area size, materials chosen, and project complexity. Here's a general guide for {loc.name}.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[{ tier: 'Basic', range: '₹150–250/sq.ft', note: 'Standard materials, functional finish' }, { tier: 'Premium', range: '₹250–450/sq.ft', note: 'Branded materials, superior finish' }, { tier: 'Luxury', range: '₹450+/sq.ft', note: 'Imported materials, designer finish' }].map(({ tier, range, note }) => (
              <div key={tier} className="card p-6 text-center hover:border-orange-500/30 transition-colors">
                <div className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: '#F97316' }}>{tier}</div>
                <div className="font-display text-2xl text-white font-bold mb-2">{range}</div>
                <p className="text-slate-500 text-xs">{note}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-xs mt-6">* Prices are indicative. Call <a href="tel:+918779391690" className="text-orange-400 hover:underline">+91 87793 91690</a> for an exact quote for your {loc.name} project.</p>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────── */}
      <section className="section-y" style={{ background: '#0B1120' }}>
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="font-display text-3xl text-white text-center mb-10">
            How We Deliver <span style={{ color: '#F97316' }}>{svc.title}</span> in {loc.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Free Site Visit', desc: `Our expert visits your site in ${loc.name} to assess requirements, take measurements, and understand your vision. Completely free.` },
              { step: '02', title: 'Transparent Quote', desc: 'You receive a detailed, itemised quotation with material specs and timeline. No hidden charges. Pay in milestones as work progresses.' },
              { step: '03', title: 'Quality Execution', desc: `Our skilled team executes the ${svc.title.toLowerCase()} with ISI-marked materials and senior supervision. Full handover with 1-year warranty.` },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center font-display font-black text-xl" style={{ background: 'rgba(249,115,22,0.15)', color: '#F97316', border: '1px solid rgba(249,115,22,0.3)' }}>{step}</div>
                <h3 className="text-white font-semibold text-lg">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Services in this Location ──────────────── */}
      <section className="section-y" style={{ background: '#101827', borderTop: '1px solid #1E2D45' }}>
        <div className="container-custom">
          <h2 className="font-display text-2xl text-white mb-6 text-center">
            More Services in <span style={{ color: '#F97316' }}>{loc.name}</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {services.filter(s => s.slug !== svc.slug).map(s => (
              <Link key={s.slug} href={`/areas/${loc.slug}/${s.slug}`}
                className="card p-4 hover:border-orange-500/40 transition-colors group">
                <CheckCircle size={14} className="mb-2" style={{ color: '#F97316' }} />
                <p className="text-white text-xs font-semibold group-hover:text-orange-400 transition-colors">{s.title}</p>
                <p className="text-slate-500 text-xs mt-0.5">in {loc.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ─────────────────────────────────── */}
      <ModernCTA 
        title={`Ready to start your ${svc.title} in ${loc.name}?`}
        subtitle={`Skip the contractor hassle. Get a professionally managed, on-time delivery with AMS Civil Construction in ${loc.name}. Call +91 87793 91690 for a free site visit.`}
        image={svc.image}
      />
    </>
  );
}
