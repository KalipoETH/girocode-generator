import type { Metadata } from 'next';

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
  alternates: {
    canonical: 'https://www.girocodegenerator.com/fr',
    languages: {
      'x-default': 'https://www.girocodegenerator.com',
      'de': 'https://www.girocodegenerator.com',
      'en': 'https://www.girocodegenerator.com/en',
      'fr': 'https://www.girocodegenerator.com/fr',
      'es': 'https://www.girocodegenerator.com/es',
      'it': 'https://www.girocodegenerator.com/it',
    },
  },
};

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

