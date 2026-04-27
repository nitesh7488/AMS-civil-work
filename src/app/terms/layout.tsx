// src/app/terms/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | AMS Civil Construction Mumbai',
  description: 'Read the terms and conditions for AMS Civil Construction. Learn about our service agreements, payment terms, and project policies for civil work in Mumbai.',
  alternates: {
    canonical: 'https://www.amscivilwork.in/terms',
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
