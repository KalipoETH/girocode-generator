import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default:
      'GiroCode Generator – Free SEPA-QR Creator | girocodegenerator.com',
    template: '%s | GiroCode Generator',
  },
  description:
    'Free GiroCode (SEPA-QR / EPC) generator – 100% local in your browser, no data transmission. Includes invoice PDF with embedded QR code.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/en',
    languages: {
      'x-default': 'https://www.girocodegenerator.com',
      'de': 'https://www.girocodegenerator.com',
      'en': 'https://www.girocodegenerator.com/en',
      'fr': 'https://www.girocodegenerator.com/fr',
      'es': 'https://www.girocodegenerator.com/es',
    },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

