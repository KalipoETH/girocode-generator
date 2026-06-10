import type { Metadata } from 'next';
import { headers } from 'next/headers';
import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FloatingDots } from '../components/FloatingDots';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'GiroCode Generator 2026 – Kostenlos & Ohne Anmeldung',
    template: '%s | GiroCode Generator',
  },
  description:
    '✅ GiroCode in 10 Sekunden erstellen – kostenlos, ohne Anmeldung, 100% Datenschutz. Deine Bankdaten verlassen nie deinen Browser. Jetzt SEPA-QR erstellen →',
  keywords: [
    'GiroCode Generator',
    'GiroCode erstellen',
    'SEPA QR Code Generator',
    'EPC QR Code erstellen',
    'QR Code Überweisung',
    'GiroCode Rechnung',
    'SEPA QR Code kostenlos',
    'EPC Standard QR',
    'Überweisung QR Code Generator',
    'GiroCode online',
  ],
  authors: [{ name: 'Kaleb Jahnke' }],
  creator: 'Kaleb Jahnke',
  metadataBase: new URL('https://www.girocodegenerator.com'),
  alternates: {
    canonical: 'https://www.girocodegenerator.com',
    languages: {
      'x-default': 'https://www.girocodegenerator.com',
      'de': 'https://www.girocodegenerator.com',
      'en': 'https://www.girocodegenerator.com/en',
      'fr': 'https://www.girocodegenerator.com/fr',
      'es': 'https://www.girocodegenerator.com/es',
      'it': 'https://www.girocodegenerator.com/it',
    },
  },
  icons: {
    icon: '/logo-dark.jpg',
    apple: '/logo-dark.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.girocodegenerator.com',
    siteName: 'GiroCode Generator',
    title: 'GiroCode Generator – SEPA-QR kostenlos erstellen',
    description:
      'GiroCode (SEPA-QR / EPC) kostenlos online erstellen – 100% lokal im Browser, keine Datenweitergabe. Inkl. Rechnungs-PDF.',
    images: [
      { url: '/logo-dark.jpg', width: 1200, height: 630, alt: 'GiroCode Generator' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GiroCode Generator – SEPA-QR kostenlos erstellen',
    description:
      'GiroCode (SEPA-QR / EPC) kostenlos online erstellen – 100% lokal, keine Datenweitergabe.',
    images: ['/logo-dark.jpg'],
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const locale = headersList.get('x-locale') ?? 'de';
  const isAdminRoute = headersList.get('x-admin-route') === 'true';

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GiroCode Generator',
    url: 'https://www.girocodegenerator.com',
    logo: 'https://www.girocodegenerator.com/og-image.png',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'jahnke.kaleb@gmail.com',
      contactType: 'customer support',
      availableLanguage: ['German', 'English', 'French', 'Spanish', 'Italian'],
    },
    founder: {
      '@type': 'Person',
      name: 'Kaleb Jahnke',
      jobTitle: 'Developer',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Osterholz-Scharmbeck',
        addressCountry: 'DE',
      },
    },
    sameAs: [
      'https://github.com/KalipoETH/girocode-generator',
      'https://www.producthunt.com/products/girocode-generator',
    ],
  };

  return (
    <html lang={locale} className="h-full">
      <head>
        <link rel="alternate" type="application/json+ld" href="/api/structured-data" />
      </head>
      <body className="min-h-full bg-[#0b0c10] font-sans text-slate-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <div className="flex min-h-screen flex-col">
          {!isAdminRoute && <FloatingDots />}
          {!isAdminRoute && <Navbar />}
          <main className={isAdminRoute ? 'flex-1' : 'flex-1'}>{children}</main>
          {!isAdminRoute && <Footer />}
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

