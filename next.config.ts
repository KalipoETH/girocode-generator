import type { NextConfig } from "next";

const banks = [
  'sparkasse',
  'volksbank',
  'deutsche-bank',
  'commerzbank',
  'ing',
  'dkb',
  'postbank',
  'targobank',
  'n26',
  'comdirect',
];

const bankRedirects = banks.flatMap((bank) =>
  ['en', 'fr', 'es'].map((locale) => ({
    source: `/${locale}/${bank}`,
    destination: `/${bank}`,
    permanent: true,
  }))
);

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(self), microphone=(), geolocation=(), payment=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://api.producthunt.com https://api.qrserver.com",
      "font-src 'self'",
      "connect-src 'self' https://api.resend.com https://api.qrserver.com",
      "media-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: true },

  // Remove X-Powered-By header to reduce response size & avoid fingerprinting
  poweredByHeader: false,

  // Brotli/gzip compression for all responses
  compress: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.producthunt.com',
        pathname: '/widgets/**',
      },
    ],
    // Serve AVIF first (smaller), fall back to WebP
    formats: ['image/avif', 'image/webp'],
    // Cache optimised images for 1 year on Vercel Edge
    minimumCacheTTL: 31536000,
  },

  // Tree-shake heavy packages so only used exports are bundled
  experimental: {
    optimizePackageImports: [
      '@pdfme/ui',
      '@pdfme/generator',
      '@pdfme/schemas',
      '@pdfme/common',
      'pdf-lib',
      'qrcode',
      'jszip',
    ],
  },

  async headers() {
    return [
      // Security headers for every route
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      // Long-lived immutable cache for hashed static assets
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  async redirects() {
    return bankRedirects;
  },
};

export default nextConfig;
