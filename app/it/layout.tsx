import type { Metadata, Viewport } from 'next';
import '../globals.css';
import { LayoutShell } from '@/components/LayoutShell';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { AnalyticsRedacted } from '@/components/AnalyticsRedacted';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#22c55e',
};

export const metadata: Metadata = {
  title: {
    default: 'Generatore GiroCode – Crea QR Code SEPA EPC Gratis 2026',
    template: '%s | GiroCode Generator',
  },
  description:
    '✅ Crea un GiroCode (QR SEPA/EPC) in 10 secondi – gratis, senza registrazione, 100% locale nel browser. Inserisci IBAN → Genera QR → Scarica. Include fattura PDF.',
  keywords: [
    'generatore codice QR EPC',
    'codice QR SEPA gratis',
    'QR code pagamento SEPA',
    'generatore QR bonifico SEPA',
    'codice QR fattura SEPA',
    'GiroCode italiano',
    'creare QR SEPA gratis',
  ],
  authors: [{ name: 'Kaleb Jahnke' }],
  creator: 'Kaleb Jahnke',
  metadataBase: new URL('https://girocodegenerator.com'),
  alternates: {
    canonical: 'https://girocodegenerator.com/it',
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
    locale: 'it_IT',
    url: 'https://girocodegenerator.com/it',
    siteName: 'GiroCode Generator',
    title: 'Generatore GiroCode – Crea QR Code SEPA EPC Gratis',
    description:
      'Crea un GiroCode (QR SEPA/EPC) gratis – 100% locale nel browser, nessuna condivisione di dati.',
    images: [
      { url: '/icons/icon-512x512.png', width: 512, height: 512, alt: 'GiroCode Generator Logo' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generatore GiroCode – Crea QR Code SEPA EPC Gratis',
    description:
      'Crea un GiroCode (QR SEPA/EPC) gratis – 100% locale, nessuna condivisione di dati.',
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

export default function ItRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className="h-full">
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
        <AnalyticsRedacted />
      </body>
    </html>
  );
}
