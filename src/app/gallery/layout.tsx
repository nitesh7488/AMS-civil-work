// src/app/gallery/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Gallery | Our Construction & Renovation Work in Mumbai',
  description: 'View our portfolio of completed bungalows, modular kitchens, luxury bathrooms, and civil work across Mumbai, Navi Mumbai, and Thane. Quality you can see.',
  keywords: [
    'AMS Civil Construction gallery',
    'construction projects Mumbai',
    'bathroom renovation photos',
    'kitchen design portfolio Mumbai',
    'bungalow construction gallery',
    'civil work images Mumbai',
  ],
  alternates: {
    canonical: 'https://www.amscivilwork.in/gallery',
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
