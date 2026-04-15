// src/app/layout.tsx
// Root layout with comprehensive SEO — targeting all Mumbai areas

import type { Metadata } from 'next';
import Script from 'next/script';
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import QuotePopup from '@/components/ui/QuotePopup';
import { Toaster } from 'react-hot-toast';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

/* ─────────────────────────────────────────────────────────────
   SEO METADATA
   Target: All Mumbai areas + every construction service keyword
─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  /* ── Core ────────────────────────────────────────────────── */
  metadataBase: new URL('https://www.amscivilwork.in'),

  title: {
    default: 'AMS Civil Construction | Best Construction Company in Mumbai',
    template: '%s | AMS Civil Construction Mumbai',
  },

  description:
    'AMS Civil Construction — Trusted construction partner across Maharashtra, Karnataka, Jharkhand, and West Bengal. Expert in bungalow construction, interiors, and turnkey civil work. Serving Mumbai, Pune, Bangalore, Kolkata, Ranchi & more. Call +91 87793 91690 for a free quote.',

  keywords: [
    /* ── Brand ──────────────────────────────────────────── */
    'AMS Civil Construction',
    'AMS construction Mumbai',
    'AMS civil contractor Mumbai',

    /* ── Services ────────────────────────────────────────── */
    'construction company Mumbai',
    'best construction company Mumbai',
    'building contractor Mumbai',
    'civil contractor Mumbai',
    'bungalow construction Mumbai',
    'bungalow builder Mumbai',
    'residential construction Mumbai',
    'bathroom renovation Mumbai',
    'bathroom remodeling Mumbai',
    'kitchen renovation Mumbai',
    'modular kitchen Mumbai',
    'tiles work Mumbai',
    'tiles laying contractor Mumbai',
    'flooring work Mumbai',
    'marble flooring Mumbai',
    'vitrified tiles Mumbai',
    'POP work Mumbai',
    'false ceiling Mumbai',
    'POP ceiling contractor Mumbai',
    'plaster work Mumbai',
    'interior construction Mumbai',
    'interior contractor Mumbai',
    'waterproofing Mumbai',
    'civil work Mumbai',

    /* ── South Mumbai ────────────────────────────────────── */
    'construction company Dadar',
    'construction company Lower Parel',
    'construction company Worli',
    'construction company Prabhadevi',
    'construction company Colaba',
    'construction company Marine Lines',
    'construction company Byculla',
    'construction company Mahalaxmi',
    'bungalow construction South Mumbai',
    'renovation contractor South Mumbai',

    /* ── Western Line ────────────────────────────────────── */
    'construction company Bandra',
    'construction company Khar',
    'construction company Santacruz',
    'construction company Vile Parle',
    'construction company Andheri',
    'construction company Jogeshwari',
    'construction company Goregaon',
    'construction company Malad',
    'construction company Kandivali',
    'construction company Borivali',
    'construction company Dahisar',
    'construction company Mira Road',
    'construction company Bhayandar',
    'construction company Vasai',
    'construction company Nalasopara',
    'construction company Virar',
    'bungalow construction Andheri',
    'kitchen renovation Bandra',
    'bathroom renovation Borivali',
    'tiles work Kandivali',
    'POP work Malad',
    'interior work Goregaon',
    'renovation contractor Mira Road',

    /* ── Central Line ────────────────────────────────────── */
    'construction company Sion',
    'construction company Kurla',
    'construction company Ghatkopar',
    'construction company Vikhroli',
    'construction company Bhandup',
    'construction company Mulund',
    'construction company Thane',
    'construction company Dombivli',
    'construction company Kalyan',
    'bathroom renovation Thane',
    'kitchen work Kalyan',
    'flooring work Ghatkopar',
    'tiles contractor Mulund',
    'construction company Dombivli',

    /* ── Navi Mumbai ─────────────────────────────────────── */
    'construction company Navi Mumbai',
    'construction company Vashi',
    'construction company Nerul',
    'construction company Belapur',
    'construction company Airoli',
    'construction company Ghansoli',
    'construction company Koparkhairane',
    'construction company Panvel',
    'bungalow construction Navi Mumbai',
    'bathroom renovation Navi Mumbai',
    'interior work Navi Mumbai',
    'renovation contractor Panvel',
  ],

  /* ── Authors & Publisher ──────────────────────────────────── */
  authors: [{ name: 'AMS Civil Team', url: 'https://www.amscivilwork.in' }],
  creator: 'AMS Civil Team',
  publisher: 'AMS Civil Construction',

  /* ── Robots ───────────────────────────────────────────────── */
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },

  /* ── Open Graph (Facebook, WhatsApp preview) ──────────────── */
  openGraph: {
    type:        'website',
    locale:      'en_IN',
    url:         'https://www.amscivilwork.in',
    siteName:    'AMS Civil Construction',
    title:       'AMS Civil Construction | Best Construction Company in Mumbai',
    description: '20+ years of expert construction across all Mumbai areas. Bungalows, bathrooms, kitchens, tiles, POP, flooring & more. Free quote: +91 87793 91690',
    images: [
      {
        url:    '/og-image.jpg',
        width:  1200,
        height: 630,
        alt:    'AMS Civil Construction Mumbai',
      },
    ],
  },

  /* ── Twitter / X Card ────────────────────────────────────── */
  twitter: {
    card:        'summary_large_image',
    title:       'AMS Civil Construction Mumbai',
    description: 'Expert construction services across all Mumbai areas. 20+ years experience. Call +91 87793 91690',
    images:      ['/og-image.jpg'],
  },

  /* ── Alternates / Canonical ──────────────────────────────── */
  alternates: {
    canonical: 'https://www.amscivilwork.in',
    languages: { 'en-IN': 'https://www.amscivilwork.in' },
  },

  /* ── Verification (add your codes from Google/Bing Search Console) */
  verification: {
    google: 'ADD_YOUR_GOOGLE_SEARCH_CONSOLE_CODE_HERE',
    // bing: 'ADD_YOUR_BING_CODE_HERE',
  },

  /* ── App / PWA ───────────────────────────────────────────── */
  applicationName: 'AMS Civil Construction',
  category:        'Construction & Real Estate',
};

/* ─────────────────────────────────────────────────────────────
   JSON-LD STRUCTURED DATA (Google Rich Results)
 ─────────────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    /* ── Local Business ─────────────────────────────────── */
    {
      '@type':       'LocalBusiness',
      '@id':         'https://www.amscivilwork.in/#business',
      name:          'AMS Civil Construction',
      alternateName: 'AMS Construction',
      description:   'Mumbai\'s trusted construction company. Specialising in bungalow construction, bathroom renovation, kitchen work, tiles, flooring, POP & plaster work across all Mumbai areas.',
      url:           'https://www.amscivilwork.in',
      telephone:     '+918779391690',
      email:         'ams.constructionwork@gmail.com',
      founder: {
        '@type': 'Person',
        name:    'AMS Civil Team',
        jobTitle:'Director',
        telephone:'+918779391690',
      },
      foundingDate: '2014',
      address: {
        '@type':           'PostalAddress',
        addressLocality:   'Mumbai',
        addressRegion:     'Maharashtra',
        addressCountry:    'IN',
        postalCode:        '400001',
      },
      geo: {
        '@type':     'GeoCoordinates',
        latitude:    '19.0760',
        longitude:   '72.8777',
      },
      areaServed: [
        /* South Mumbai */
        'Dadar','Lower Parel','Worli','Prabhadevi','Colaba','Marine Lines','Byculla','Mahalaxmi',
        /* Western Line */
        'Bandra','Khar','Santacruz','Vile Parle','Andheri','Jogeshwari','Goregaon',
        'Malad','Kandivali','Borivali','Dahisar','Mira Road','Bhayandar','Vasai','Nalasopara','Virar',
        /* Central Line */
        'Sion','Kurla','Ghatkopar','Vikhroli','Bhandup','Mulund','Thane','Dombivli','Kalyan',
        /* Navi Mumbai */
        'Vashi','Nerul','Belapur','Airoli','Ghansoli','Koparkhairane','Panvel',
        'Mumbai','Navi Mumbai','Thane',
      ],
      openingHoursSpecification: [
        {
          '@type':     'OpeningHoursSpecification',
          dayOfWeek:   ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
          opens:       '09:00',
          closes:      '19:00',
        },
        {
          '@type':     'OpeningHoursSpecification',
          dayOfWeek:   ['Sunday'],
          opens:       '10:00',
          closes:      '14:00',
        },
      ],
      priceRange:       '₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted:  'Cash, Bank Transfer, UPI',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name:    'Construction Services',
        itemListElement: [
          { '@type':'Offer', itemOffered: { '@type':'Service', name:'Bungalow Construction', areaServed:'Mumbai' } },
          { '@type':'Offer', itemOffered: { '@type':'Service', name:'Bathroom Renovation',   areaServed:'Mumbai' } },
          { '@type':'Offer', itemOffered: { '@type':'Service', name:'Kitchen Work',          areaServed:'Mumbai' } },
          { '@type':'Offer', itemOffered: { '@type':'Service', name:'Tiles Work',            areaServed:'Mumbai' } },
          { '@type':'Offer', itemOffered: { '@type':'Service', name:'Flooring Work',         areaServed:'Mumbai' } },
          { '@type':'Offer', itemOffered: { '@type':'Service', name:'POP Work',              areaServed:'Mumbai' } },
          { '@type':'Offer', itemOffered: { '@type':'Service', name:'Plaster Work',          areaServed:'Mumbai' } },
          { '@type':'Offer', itemOffered: { '@type':'Service', name:'Wall Work',             areaServed:'Mumbai' } },
        ],
      },
      aggregateRating: {
        '@type':       'AggregateRating',
        ratingValue:   '4.9',
        reviewCount:   '127',
        bestRating:    '5',
        worstRating:   '1',
      },
      sameAs: [
        'https://www.facebook.com/amscivilwork',
        'https://www.instagram.com/amscivilwork',
        'https://wa.me/918779391690',
      ],
    },

    /* ── Website ────────────────────────────────────────── */
    {
      '@type':          'WebSite',
      '@id':            'https://www.amscivilwork.in/#website',
      url:              'https://www.amscivilwork.in',
      name:             'AMS Civil Construction',
      description:      'Mumbai construction company — bungalows, bathrooms, kitchens, tiles, POP & more',
      publisher:        { '@id': 'https://www.amscivilwork.in/#business' },
      potentialAction: {
        '@type':       'SearchAction',
        target: {
          '@type':       'EntryPoint',
          urlTemplate:   'https://www.amscivilwork.in/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },

    /* ── FAQ ────────────────────────────────────────────── */
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name:    'What areas in Mumbai does AMS Civil Construction serve?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:    'We serve all areas of Mumbai including Borivali, Andheri, Kandivali, Malad, Goregaon, Bandra, Thane, Mira Road, Navi Mumbai, Dadar, Worli, Mulund, Ghatkopar, Kalyan, Dombivli, Vasai, Virar, Vashi, Panvel and more.',
          },
        },
        {
          '@type': 'Question',
          name:    'How to get a free construction quote in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:    'Call or WhatsApp AMS Civil at +91 87793 91690 or fill the free quote form on our website. We respond within 24 hours for all Mumbai areas.',
          },
        },
        {
          '@type': 'Question',
          name:    'How long does bungalow construction take in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:    'A standard G+1 bungalow typically takes 8-14 months depending on size and finishes. We provide a detailed timeline and milestone-based payment schedule upfront.',
          },
        },
        {
          '@type': 'Question',
          name:    'Does AMS Civil Construction provide warranty on construction?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:    'Yes. We provide 1-year workmanship warranty on all construction and 5-year guarantee on waterproofing work.',
          },
        },
      ],
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   ROOT LAYOUT
═══════════════════════════════════════════════════════════════ */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Preconnect for Cloudinary images */}
        <link rel="preconnect" href="https://res.cloudinary.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Geo tags for local SEO */}
        <meta name="geo.region"      content="IN-MH" />
        <meta name="geo.placename"   content="Mumbai, Maharashtra, India" />
        <meta name="geo.position"    content="19.0760;72.8777" />
        <meta name="ICBM"            content="19.0760, 72.8777" />

        {/* Mobile / PWA */}
        <meta name="theme-color"     content="#F97316" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Language */}
        <meta httpEquiv="content-language" content="en-IN" />
      </head>

      <body className="antialiased" style={{ background: '#0B1120', color: '#CBD5E1' }}>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#161F2E',
              color:      '#CBD5E1',
              border:     '1px solid #F97316',
            },
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <QuotePopup />
      </body>
    </html>
  );
}
