import type { Metadata } from 'next';

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
  alternates: {
    canonical: 'https://girocodegenerator.com/it',
    languages: {
      'x-default': 'https://girocodegenerator.com',
      de: 'https://girocodegenerator.com',
      en: 'https://girocodegenerator.com/en',
      fr: 'https://girocodegenerator.com/fr',
      es: 'https://girocodegenerator.com/es',
      it: 'https://girocodegenerator.com/it',
    },
  },
};

export default function ItLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
