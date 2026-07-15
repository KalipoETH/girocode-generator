import type { Metadata, Viewport } from 'next';
import '../globals.css';
import { LayoutShell } from '@/components/LayoutShell';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#22c55e',
};

export const metadata: Metadata = {
  title: {
    default: 'Générateur QR Code SEPA – Gratuit & Sans Inscription 2026',
    template: '%s | GiroCode Generator',
  },
  description:
    '✅ Créez un QR code SEPA (GiroCode/EPC) en 10 secondes – gratuit, sans inscription, 100% local. Compatible avec toutes les apps bancaires européennes.',
  keywords: [
    'générateur QR code SEPA',
    'QR code virement SEPA gratuit',
    'créer QR code SEPA',
    'GiroCode générateur',
    'code QR EPC gratuit',
  ],
  authors: [{ name: 'Kaleb Jahnke' }],
  creator: 'Kaleb Jahnke',
  metadataBase: new URL('https://girocodegenerator.com'),
  alternates: {
    canonical: 'https://girocodegenerator.com/fr',
    languages: {
      'x-default': 'https://girocodegenerator.com',
      'de': 'https://girocodegenerator.com',
      'en': 'https://girocodegenerator.com/en',
      'fr': 'https://girocodegenerator.com/fr',
      'es': 'https://girocodegenerator.com/es',
      'it': 'https://girocodegenerator.com/it',
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/icons/apple-touch-icon.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'GiroCode Generator',
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://girocodegenerator.com/fr',
    siteName: 'GiroCode Generator',
    title: 'Générateur QR Code SEPA – Gratuit & Sans Inscription',
    description:
      'Créez un QR code SEPA (GiroCode/EPC) gratuit – 100% local dans votre navigateur, aucun partage de données.',
    images: [
      { url: '/icons/icon-512x512.png', width: 512, height: 512, alt: 'GiroCode Generator Logo' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Générateur QR Code SEPA – Gratuit & Sans Inscription',
    description:
      'Créez un QR code SEPA (GiroCode/EPC) gratuit – 100% local, aucun partage de données.',
    images: ['/icons/icon-512x512.png'],
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
    googleBot: { index: true, follow: true },
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GiroCode Generator',
  url: 'https://girocodegenerator.com',
  logo: 'https://girocodegenerator.com/logo.svg',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'jahnke.kaleb@gmail.com',
    contactType: 'customer support',
    availableLanguage: ['German', 'English', 'French', 'Spanish', 'Italian'],
  },
};

export default function FrRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full">
      <head>
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="GiroCode" />
      </head>
      <body className="min-h-full bg-[#0b0c10] font-sans text-slate-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <LayoutShell>{children}</LayoutShell>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
