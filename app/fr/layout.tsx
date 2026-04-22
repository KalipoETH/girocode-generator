import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Générateur GiroCode 2026 – Gratuit & Sans Inscription',
    template: '%s | GiroCode Generator',
  },
  description:
    '✅ GiroCode en 10 secondes – gratuit, sans inscription, 100% confidentialité. Vos données bancaires ne quittent jamais votre navigateur →',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/fr',
    languages: {
      'x-default': 'https://www.girocodegenerator.com',
      'de': 'https://www.girocodegenerator.com',
      'en': 'https://www.girocodegenerator.com/en',
      'fr': 'https://www.girocodegenerator.com/fr',
      'es': 'https://www.girocodegenerator.com/es',
    },
  },
};

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

