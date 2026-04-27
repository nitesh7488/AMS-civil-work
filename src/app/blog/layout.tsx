// src/app/blog/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction & Interior Design Blog | AMS Civil Construction',
  description: 'Expert tips, cost guides, and interior design inspiration for your home and office in Mumbai. Stay updated with the latest in civil construction.',
  keywords: [
    'construction blog Mumbai',
    'interior design tips Mumbai',
    'home renovation blog India',
    'civil construction guides',
    'bungalow construction tips',
    'renovation cost guide Mumbai',
  ],
  alternates: {
    canonical: 'https://www.amscivilwork.in/blog',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
