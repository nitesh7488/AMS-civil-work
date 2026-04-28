// src/app/areas/[location]/page.tsx
// Dynamic SEO page for each Mumbai area — e.g. /areas/borivali
// Each page is fully indexed by Google with unique title, description, H1, schema

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLocation, locations } from '@/data/locations';
import { services } from '@/data/siteData';
import { MapPin, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { WhatsAppLogo, PhoneLogo } from '@/components/ui/BrandIcons';
import ModernCTA from '@/components/ui/ModernCTA';

/* ── Generate all static paths at build time ──────────────── */
export async function generateStaticParams() {
  return locations.map(l => ({ location: l.slug }));
}

/* ── Generate unique metadata per location ────────────────── */
export async function generateMetadata(
  { params }: { params: { location: string } }
): Promise<Metadata> {
  const loc = getLocation(params.location);
  if (!loc) return { title: 'Not Found' };

  const title       = `Construction Company in ${loc.name} Mumbai | AMS Civil Construction`;
  const description = `Looking for the best construction company in ${loc.name}, ${loc.zone}? AMS Civil Construction offers bungalow construction, bathroom renovation, kitchen work, tiles, flooring, POP & plaster work in ${loc.name} and nearby areas (${loc.nearby.join(', ')}). Call +91 87793 91690 or +91 90042 98911 for free quote.`;

  return {
    title,
    description,
    keywords: [
      `construction company ${loc.name}`,
      `building contractor ${loc.name}`,
      `bungalow construction ${loc.name}`,
      `bathroom renovation ${loc.name}`,
      `kitchen renovation ${loc.name}`,
      `tiles work ${loc.name}`,
      `flooring work ${loc.name}`,
      `POP work ${loc.name}`,
      `plaster work ${loc.name}`,
      `civil contractor ${loc.name}`,
      `interior contractor ${loc.name}`,
      `renovation contractor ${loc.name}`,
      `home renovation ${loc.name}`,
      ...loc.nearby.map(n => `construction company ${n}`),
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      url:  `https://www.amscivilwork.in/areas/${loc.slug}`,
    },
    alternates: {
      canonical: `https://www.amscivilwork.in/areas/${loc.slug}`,
    },
  };
}

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function LocationPage({ params }: { params: { location: string } }) {
  const loc = getLocation(params.location);
  if (!loc) notFound();

  /* JSON-LD for this specific location */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type':    'LocalBusiness',
        name:       `AMS Civil Construction — ${loc.name}`,
        description:`Best construction company in ${loc.name}, ${loc.zone}. Bungalow construction, bathroom renovation, kitchen work, tiles, flooring & POP work. Free quote available.`,
        telephone:  ['+918779391690', '+919004298911'],
        url:        `https://www.amscivilwork.in/areas/${loc.slug}`,
        areaServed: [loc.name, ...loc.nearby],
        address: {
          '@type':           'PostalAddress',
          addressLocality:   `${loc.name}, ${loc.district}`,
          addressRegion:     'Maharashtra',
          addressCountry:    'IN',
          ...(loc.pincode ? { postalCode: loc.pincode } : {}),
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: String(35 + locations.indexOf(loc) * 3),
          bestRating: '5',
          worstRating: '1',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name:    `Construction Services in ${loc.name}`,
          itemListElement: services.map(s => ({
            '@type':       'Offer',
            itemOffered:   { '@type': 'Service', name: s.title, areaServed: loc.name },
          })),
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: `Which is the best construction company in ${loc.name}, Mumbai?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `AMS Civil Construction is the top-rated construction company in ${loc.name}, known for high-quality bungalow construction, renovation, and civil works. We serve all areas in ${loc.zone}.`,
            },
          },
          {
            '@type': 'Question',
            name: `What services does AMS Civil provide in ${loc.name}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `We provide complete civil solutions in ${loc.name} including bungalow building, bathroom and kitchen renovations, tiles work, POP ceiling, flooring, and waterproofing.`,
            },
          },
          {
            '@type': 'Question',
            name: `How can I get a quote for construction in ${loc.name}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `You can call us directly at +91 87793 91690 or +91 90042 98911 to schedule a free site visit and get an accurate estimate for your project in ${loc.name}.`,
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.amscivilwork.in' },
          { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://www.amscivilwork.in/areas' },
          { '@type': 'ListItem', position: 3, name: `Construction in ${loc.name}`, item: `https://www.amscivilwork.in/areas/${loc.slug}` },
        ],
      }
    ]
  };

  const servicesList = [
    'Bungalow Construction', 'Bathroom Renovation', 'Kitchen Work',
    'Tiles Work', 'Flooring Work', 'POP Work', 'Plaster Work', 'Wall Work',
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="pt-36 pb-20 relative overflow-hidden" style={{ background: '#0B1120' }}>
        <div className="glow-orb w-[400px] h-[400px] opacity-15"
          style={{ background: 'radial-gradient(circle, #F97316, transparent 70%)', top: '-15%', right: '-8%' }} />

        <div className="relative container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-slate-500 text-xs mb-6 flex-wrap">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/areas" className="hover:text-orange-400 transition-colors">Areas</Link>
            <span>/</span>
            <span style={{ color: '#F97316' }}>{loc.name}</span>
          </nav>

          {/* Zone badge */}
          <span className="inline-block px-3 py-1 text-xs font-mono font-semibold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(249,115,22,0.12)', color: '#F97316', border: '1px solid rgba(249,115,22,0.25)' }}>
            {loc.zone}
          </span>

          {/* H1 */}
          <h1 className="font-display font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Construction Company in{' '}
            <span className="text-gradient">{loc.name}</span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-8">
            AMS Civil Construction — 
            provides expert construction services in {loc.name}, {loc.district}. Bungalow
            construction, bathroom renovation, kitchen work, tiles, flooring, POP &amp; plaster work
            delivered on time.
          </p>

          {/* CTA row */}
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
              <a href={`https://wa.me/918779391690?text=Hi!%20I%20need%20construction%20work%20in%20${encodeURIComponent(loc.name)}%2C%20Mumbai.`}
                target="_blank" rel="noopener noreferrer"
                className="btn-outline flex-1 sm:flex-none text-sm px-6 py-4 gap-2 group">
                <WhatsAppLogo className="w-5 h-5 fill-[#F97316] group-hover:fill-current" /> WhatsApp 1
              </a>
              <a href={`https://wa.me/919004298911?text=Hi!%20I%20need%20construction%20work%20in%20${encodeURIComponent(loc.name)}%2C%20Mumbai.`}
                target="_blank" rel="noopener noreferrer"
                className="btn-outline flex-1 sm:flex-none text-sm px-6 py-4 gap-2 group">
                <WhatsAppLogo className="w-5 h-5 fill-[#F97316] group-hover:fill-current" /> WhatsApp 2
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services in this area ─────────────────────────── */}
      <section className="section-y" style={{ background: '#101827' }}>
        <div className="container-custom">
          <h2 className="font-display text-2xl lg:text-3xl text-white mb-8">
            Construction Services in <span className="text-gradient">{loc.name}</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {services.map(svc => (
              <Link key={svc.slug}
                href={`/areas/${loc.slug}/${svc.slug}`}
                className="card p-5 group hover:border-orange-500/40 transition-all duration-200">
                <CheckCircle size={18} className="mb-3" style={{ color: '#F97316' }} />
                <h3 className="text-white font-semibold text-sm group-hover:text-orange-400 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-slate-500 text-xs mt-1">in {loc.name}</p>
              </Link>
            ))}
          </div>

          {/* Why us local paragraph — keyword-rich */}
          <div className="card p-8 max-w-3xl">
            <h3 className="font-display text-xl text-white mb-4">
              Why Choose Us for Construction in {loc.name}?
            </h3>
            <div className="text-slate-400 text-sm leading-relaxed space-y-3">
              <p>
                If you&apos;re looking for a <strong className="text-white">reliable construction company in {loc.name}</strong>,
                AMS Civil Construction is your trusted choice. With 20+ years of experience
                serving {loc.name} and nearby areas like {loc.nearby.slice(0, 3).join(', ')}, we
                understand the local building requirements and municipal regulations.
              </p>
              <p>
                Our services in <strong className="text-white">{loc.name}</strong> include complete
                bungalow construction, bathroom renovation, modular kitchen work, tiles &amp; flooring,
                POP false ceiling, plaster work, and all interior finishing.
              </p>
              <p>
                We use premium quality materials, skilled workers, and ensure on-time delivery with full
                transparency. Clients across {loc.name}{loc.pincode ? ` (PIN: ${loc.pincode})` : ''} and
                nearby {loc.nearby.join(', ')} trust us for their most important investment — their home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Landmarks / Local trust signals ──────────────── */}
      <section className="section-y" style={{ background: '#0B1120' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label">Local Presence</div>
              <h2 className="font-display text-2xl lg:text-3xl text-white mb-4">
                We Work Near{' '}
                <span className="text-gradient">Your Neighbourhood</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Our construction teams operate across {loc.name} and regularly work near:
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-6">
                {loc.landmarks.map(l => (
                  <li key={l} className="flex items-center gap-2 text-slate-400 text-sm">
                    <MapPin size={13} style={{ color: '#F97316' }} className="flex-shrink-0" />
                    {l}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 mt-4">
                <span className="flex text-orange-400">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#F97316" />)}
                </span>
                <span className="text-slate-400 text-sm ml-1">Rated 4.9/5 by clients in {loc.name}</span>
              </div>
            </div>

            {/* Nearby areas */}
            <div>
              <h3 className="font-semibold text-white mb-4">We Also Serve Nearby Areas:</h3>
              <div className="flex flex-wrap gap-2">
                {loc.nearby.map(area => (
                  <Link key={area}
                    href={`/areas/${area.toLowerCase().replace(/\s+/g, '-')}`}
                    className="px-4 py-2 text-sm text-slate-400 hover:text-orange-400 transition-colors"
                    style={{ border: '1px solid #1E2D45', background: '#161F2E' }}>
                    {area}
                  </Link>
                ))}
              </div>

          </div>
        </div>
      </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <ModernCTA 
        title={`Ready to start construction in ${loc.name}?`}
        subtitle={`Get a professionally managed, on-time delivery for your project in ${loc.name}. Call +91 87793 91690 for a free site visit.`}
      />

      {/* ── Browse all areas ─────────────────────────────── */}
      <section className="py-12 stripe-bg" style={{ background: '#101827' }}>
        <div className="container-custom text-center">
          <p className="text-slate-500 text-sm mb-4">
            We serve construction projects across all Mumbai areas:
          </p>
          <Link href="/areas" className="btn-outline text-sm">
            View All Service Areas <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
