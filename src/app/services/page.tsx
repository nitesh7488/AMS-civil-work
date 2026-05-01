// src/app/services/page.tsx
// Server component with proper SEO metadata + canonical
// Client-side interactivity lives in ServicesPageContent

import type { Metadata } from 'next';
import ServicesPageContent from '@/components/services/ServicesPageContent';

export const metadata: Metadata = {
  title: 'Civil Construction & Renovation Services Mumbai | AMS Civil',
  description:
    'Complete civil construction and interior services in Mumbai: Bungalow construction, bathroom renovation, modular kitchens, tiles, flooring, POP, swimming pool, compound wall & building repair. 25+ years experience. Free quote: +91 87793 91690.',
  keywords: [
    'civil construction services Mumbai',
    'bungalow construction Mumbai',
    'bathroom renovation Mumbai',
    'kitchen work Mumbai',
    'tiles work contractor Mumbai',
    'flooring services Mumbai',
    'POP work Mumbai',
    'waterproofing contractor Mumbai',
    'swimming pool construction Mumbai',
    'compound wall contractor Mumbai',
    'building repair Mumbai',
    'interior civil work Mumbai',
  ],
  openGraph: {
    title: 'All Construction & Interior Services — AMS Civil Construction Mumbai',
    description:
      '12 expert construction services under one roof. Bungalows, bathrooms, kitchens, tiles, flooring, POP & more. Free consultation: +91 87793 91690.',
    url: 'https://www.amscivilwork.in/services',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'AMS Civil Construction Services Mumbai' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construction Services Mumbai | AMS Civil',
    description: '12 expert construction services. 25+ years experience. Free quote today.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.amscivilwork.in/services',
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
