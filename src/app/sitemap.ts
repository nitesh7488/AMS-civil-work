// src/app/sitemap.ts
// Auto-generates /sitemap.xml — submitted to Google Search Console

import { MetadataRoute } from 'next';
import { getDb } from '@/lib/mongodb';
import { locations } from '@/data/locations';
import { services } from '@/data/siteData';

const BASE = 'https://www.amscivilwork.in';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  /* ── Static pages ──────────────────────────────────────── */
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,               lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/about`,    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/projects`, lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/gallery`,  lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/contact`,  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`,     lastModified: now, changeFrequency: 'daily',   priority: 0.9 },
    { url: `${BASE}/areas`,    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];

  /* ── Location pages & Location × Service pages ────────────── */
  const locationPages: MetadataRoute.Sitemap = [];
  locations.forEach(loc => {
    // 1. The main location page
    locationPages.push({
      url:             `${BASE}/areas/${loc.slug}`,
      lastModified:    now,
      changeFrequency: 'weekly' as const,
      priority:        0.9,
    });

    // 2. The programmatic Service x Location pages (480 highly targeted URLs)
    services.forEach(svc => {
      locationPages.push({
        url:             `${BASE}/areas/${loc.slug}/${svc.slug}`,
        lastModified:    now,
        changeFrequency: 'weekly' as const,
        priority:        0.85, // Extremely important local SEO entry points
      });
    });
  });

  /* ── Dynamic Blogs ─────────────────────────────────────── */
  const db = await getDb();
  const blogs = await db.collection('blogs').find({ 
    published: true, 
    $or: [{ publishDate: { $lte: new Date() } }, { publishDate: { $exists: false } }] 
  }).toArray();
  const blogPages: MetadataRoute.Sitemap = blogs.map(blog => ({
    url: `${BASE}/blog/${blog.slug}`,
    lastModified: new Date(blog.updatedAt || blog.createdAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...locationPages, ...blogPages];
}
