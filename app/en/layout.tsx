import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default:
      'GiroCode Generator – Free SEPA-QR Creator | Instant & Local',
    template: '%s | GiroCode Generator',
  },
  description:
    '✅ Create GiroCodes (SEPA-QR / EPC) in 10 seconds – 100% free, no registration, runs in your browser. Enter IBAN → Generate QR → Done. Includes invoice PDF.',
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

