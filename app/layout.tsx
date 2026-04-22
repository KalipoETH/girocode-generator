import type { Metadata } from 'next';
import { headers } from 'next/headers';
import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FloatingDots } from '../components/FloatingDots';

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
    },
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
      { url: '/og-image.png', width: 1200, height: 630, alt: 'GiroCode Generator' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GiroCode Generator – SEPA-QR kostenlos erstellen',
    description:
      'GiroCode (SEPA-QR / EPC) kostenlos online erstellen – 100% lokal, keine Datenweitergabe.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
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

  return (
    <html lang={locale} className="h-full">
      <body className="min-h-full bg-[#0b0c10] font-sans text-slate-100">
        <div className="flex min-h-screen flex-col">
          <FloatingDots />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

