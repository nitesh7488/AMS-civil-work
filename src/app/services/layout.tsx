// src/app/services/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Civil Construction & Renovation Services Mumbai | AMS Civil',
  description: 'Complete civil construction and interior services in Mumbai: Bungalow construction, bathroom renovation, modular kitchens, tiles work, flooring, POP, and waterproofing. Expert contractors with 25+ years experience.',
  keywords: [
    'civil construction services Mumbai',
    'bungalow construction Mumbai',
    'bathroom renovation Mumbai',
    'kitchen work Mumbai',
    'tiles work contractor Mumbai',
    'flooring services Mumbai',
    'POP work Mumbai',
    'waterproofing contractor Mumbai',
  ],
  alternates: {
    canonical: 'https://www.amscivilwork.in/services',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
