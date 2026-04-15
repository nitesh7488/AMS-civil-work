// src/app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow:     '/',
        disallow:  ['/admin', '/api/', '/_next/'],
      },
    ],
    sitemap:    'https://www.amscivilwork.in/sitemap.xml',
    host:       'https://www.amscivilwork.in',
  };
}
