// src/app/about/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About AMS Civil Construction | 25+ Years of Excellence in Mumbai',
  description: 'Learn about AMS Civil Construction, Mumbai\'s trusted building contractor since 1999. Founded by Kedar Mandal, we specialize in bungalow construction, renovations, and civil works across Mumbai, Navi Mumbai, and Thane.',
  keywords: [
    'AMS Civil Construction history',
    'Kedar Mandal civil contractor',
    'construction company Mumbai history',
    'trusted building contractor Mumbai',
    'civil construction experts Mumbai',
    'about AMS civil',
  ],
  alternates: {
    canonical: 'https://www.amscivilwork.in/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
