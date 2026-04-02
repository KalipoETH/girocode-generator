import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default:
      'Générateur GiroCode – Gratuit & Instantané | SEPA-QR',
    template: '%s | GiroCode Generator',
  },
  description:
    '✅ Créez un GiroCode (SEPA-QR) en 10 secondes – 100% gratuit, sans inscription, directement dans le navigateur. IBAN → QR → Facture PDF. Aucune donnée transmise.',
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

