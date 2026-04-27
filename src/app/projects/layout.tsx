// src/app/projects/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Construction Portfolio | Bungalows & Renovation Projects Mumbai',
  description: 'Explore the portfolio of AMS Civil Construction. 250+ completed projects including luxury bungalows, bathroom renovations, kitchen remodels, and civil works across all Mumbai areas.',
  keywords: [
    'construction projects Mumbai',
    'bungalow construction portfolio',
    'renovation project examples',
    'civil work gallery Mumbai',
    'AMS civil construction results',
    'completed construction projects',
  ],
  alternates: {
    canonical: 'https://www.amscivilwork.in/projects',
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
