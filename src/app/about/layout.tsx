// src/app/about/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About AMS Civil Construction | 25+ Years of Excellence in Mumbai',
  description:
    'Learn about AMS Civil Construction, Mumbai\'s trusted building contractor since 1999. Founded by Kedar Mandal, 350+ projects completed with 98% client satisfaction across Mumbai, Navi Mumbai & Thane. ISI-certified materials, 50+ skilled workers.',
  keywords: [
    'AMS Civil Construction history',
    'Kedar Mandal civil contractor',
    'construction company Mumbai history',
    'trusted building contractor Mumbai',
    'civil construction experts Mumbai',
    'about AMS civil',
    'best builder Mumbai',
    'top rated construction company Mumbai',
  ],
  openGraph: {
    title: 'About AMS Civil Construction — 25+ Years Building Mumbai\'s Homes',
    description:
      '350+ projects, 500+ happy families, 25+ years of trust. Discover why AMS Civil is Mumbai\'s most trusted construction partner.',
    url: 'https://www.amscivilwork.in/about',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'About AMS Civil Construction Mumbai' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About AMS Civil Construction Mumbai',
    description: '25+ years building Mumbai\'s homes. 350+ projects completed with 98% client satisfaction.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.amscivilwork.in/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
