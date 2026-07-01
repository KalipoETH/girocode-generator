import type { Metadata } from 'next';
import { ScannerClient, enTexts } from '@/app/(de)/scanner/ScannerClient';

export const metadata: Metadata = {
  title: 'GiroCode Scanner – Scan & Read QR Codes',
  description:
    'Scan a GiroCode / SEPA QR code directly in your browser. Shows IBAN, amount and payment reference. 100% local, no data sharing.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/en/scanner',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/scanner',
      de: 'https://www.girocodegenerator.com/scanner',
      en: 'https://www.girocodegenerator.com/en/scanner',
      fr: 'https://www.girocodegenerator.com/fr/scanner',
      es: 'https://www.girocodegenerator.com/es/scanner',
      it: 'https://www.girocodegenerator.com/it/scanner',
    },
  },
};

export default function ScannerPageEN() {
  return <ScannerClient texts={enTexts} />;
}
