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

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.producthunt.com',
        pathname: '/widgets/**',
      },
    ],
  },
  async redirects() {
    return bankRedirects;
  },
};

export default nextConfig;
