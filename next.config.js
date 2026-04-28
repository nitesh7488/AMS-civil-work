/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
  },
  // Allow large image uploads
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  // SEO: Remove X-Powered-By header
  poweredByHeader: false,
  // SEO: Enable compression for better Core Web Vitals
  compress: true,
  // SEO + Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
        ],
      },
      {
        // Cache static assets aggressively — better Core Web Vitals
        source: '/(.*)\\.(ico|png|jpg|jpeg|svg|webp|woff|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
