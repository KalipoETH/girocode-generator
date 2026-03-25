import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default:
      'GiroCode Generator – Générateur SEPA-QR gratuit | girocodegenerator.com',
    template: '%s | GiroCode Generator',
  },
  description:
    'Générateur de GiroCode (SEPA-QR / EPC) gratuit – 100% local dans votre navigateur, sans transmission de données. Inclut une facture PDF avec QR intégré.',
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

