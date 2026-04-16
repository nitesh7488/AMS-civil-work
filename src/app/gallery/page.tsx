// src/app/gallery/page.tsx  –  Gallery page refactored to Server Component
import Link from 'next/link';
import { getDb } from '@/lib/mongodb';
import GalleryGrid from '@/components/ui/GalleryGrid';

async function getGalleryData() {
  try {
    const db = await getDb();
    const images = await db.collection('gallery').find({}).toArray();
    return images.map(img => ({
      id: img._id.toString(),
      src: img.src,
      alt: img.title || 'AMS Civil Construction Gallery',
      category: img.category
    }));
  } catch (error) {
    console.error('Failed to fetch gallery data:', error);
    return [];
  }
}

export default async function GalleryPage() {
  const images = await getGalleryData();

  return (
    <>
      {/* ── PAGE HEADER ───────────────────────────────────── */}
      <section className="relative pt-40 pb-20 overflow-hidden" style={{ background: '#080D1A' }}>
        <div className="glow-orb w-[500px] h-[400px] opacity-15"
          style={{ background: 'radial-gradient(circle, #F97316, transparent 70%)', top: '-15%', right: '-8%' }} />

        <div className="relative container-custom">
          <div className="section-label animate-fadeIn">Portfolio</div>
          <h1 className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl mt-2 animate-fadeUp">
            Our <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-slate-400 mt-3 max-w-xl animate-fadeIn text-sm leading-relaxed">
            Browse our completed work — bungalows, kitchens, bathrooms, tiles, flooring &amp; interiors
            across Mumbai.
          </p>
          <nav className="flex items-center gap-2 mt-4 text-slate-500 text-sm animate-fadeIn">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: '#F97316' }}>Gallery</span>
          </nav>
        </div>
      </section>

      {/* ── GALLERY GRID (Client Component for interactivity) ── */}
      <GalleryGrid images={images as any} />
    </>
  );
}
