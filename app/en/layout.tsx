import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'GiroCode Generator 2026 – Free & No Registration',
    template: '%s | GiroCode Generator',
  },
  description:
    '✅ Create GiroCode in 10 seconds – free, no registration, 100% privacy. Your banking data never leaves your browser. Create SEPA-QR now →',
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

