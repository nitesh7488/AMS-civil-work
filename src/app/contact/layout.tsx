// src/app/contact/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact AMS Civil Construction | Free Quote & Site Visit in Mumbai',
  description: 'Contact AMS Civil Construction for all your construction and renovation needs in Mumbai. Call +91 87793 91690 or +91 90042 98911 for a free site visit and competitive quote today.',
  keywords: [
    'contact civil contractor Mumbai',
    'construction company phone number Mumbai',
    'hire building contractor Mumbai',
    'free construction quote Mumbai',
    'request site visit construction Mumbai',
    'AMS civil construction address',
  ],
  alternates: {
    canonical: 'https://www.amscivilwork.in/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
