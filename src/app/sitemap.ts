// src/app/sitemap.ts
// Auto-generates /sitemap.xml — submitted to Google Search Console

import { MetadataRoute } from 'next';
import { getDb } from '@/lib/mongodb';

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
  ];

  /* ── Service pages (for anchor deep-links) ─────────────── */
  const services = [
    'bungalow-construction', 'bathroom-renovation', 'tiles-work',
    'kitchen-work', 'flooring-work', 'wall-work', 'pop-work', 'plaster-work',
  ];
  const servicePages: MetadataRoute.Sitemap = services.map(slug => ({
    url:             `${BASE}/services#${slug}`,
    lastModified:    now,
    changeFrequency: 'monthly' as const,
    priority:        0.85,
  }));

  /* ── Location pages ────────────────────────────────────── */
  const locations = [
    // South Mumbai
    'dadar','lower-parel','worli','prabhadevi','colaba','marine-lines','byculla','mahalaxmi',
    // Western Line
    'bandra','khar','santacruz','vile-parle','andheri','jogeshwari','goregaon',
    'malad','kandivali','borivali','dahisar','mira-road','bhayandar','vasai','nalasopara','virar',
    // Central Line
    'sion','kurla','ghatkopar','vikhroli','bhandup','mulund','thane','dombivli','kalyan',
    // Navi Mumbai
    'vashi','nerul','belapur','airoli','ghansoli','koparkhairane','panvel',
    // New States
    'pune','nasik','bangalore','kolkata','ranchi','jamshedpur',
  ];
  const locationPages: MetadataRoute.Sitemap = locations.map(loc => ({
    url:             `${BASE}/areas/${loc}`,
    lastModified:    now,
    changeFrequency: 'monthly' as const,
    priority:        0.75,
  }));

  /* ── Dynamic Blogs ─────────────────────────────────────── */
  const db = await getDb();
  const blogs = await db.collection('blogs').find({ published: true }).toArray();
  const blogPages: MetadataRoute.Sitemap = blogs.map(blog => ({
    url: `${BASE}/blog/${blog.slug}`,
    lastModified: new Date(blog.updatedAt || blog.createdAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...blogPages];
}
