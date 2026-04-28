// src/app/contact/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact AMS Civil Construction | Free Quote & Site Visit in Mumbai',
  description:
    'Contact AMS Civil Construction for all your construction and renovation needs in Mumbai. Call +91 87793 91690 or +91 90042 98911 for a free site visit and competitive quote. Response within 24 hours guaranteed.',
  keywords: [
    'contact civil contractor Mumbai',
    'construction company phone number Mumbai',
    'hire building contractor Mumbai',
    'free construction quote Mumbai',
    'request site visit construction Mumbai',
    'AMS civil construction address',
    'construction company contact number',
    'builder enquiry Mumbai',
  ],
  openGraph: {
    title: 'Contact AMS Civil Construction — Get Free Quote Today',
    description:
      'Call +91 87793 91690 or WhatsApp us for a free site visit. AMS Civil Construction serves all Mumbai areas.',
    url: 'https://www.amscivilwork.in/contact',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Contact AMS Civil Construction Mumbai' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact AMS Civil Construction Mumbai',
    description: 'Free site visit & competitive quote. Call +91 87793 91690 or +91 90042 98911.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.amscivilwork.in/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
