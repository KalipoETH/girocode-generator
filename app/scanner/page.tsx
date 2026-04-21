import type { Metadata } from 'next';
import { ScannerClient, deTexts } from './ScannerClient';

export const metadata: Metadata = {
  title: 'GiroCode Scanner – QR-Code scannen & auslesen',
  description:
    'GiroCode / SEPA-QR-Code direkt im Browser scannen und auslesen. Zeigt IBAN, Betrag und Verwendungszweck an. 100% lokal, keine Datenweitergabe.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/scanner',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/scanner',
      de: 'https://www.girocodegenerator.com/scanner',
      en: 'https://www.girocodegenerator.com/en/scanner',
      fr: 'https://www.girocodegenerator.com/fr/scanner',
      es: 'https://www.girocodegenerator.com/es/scanner',
    },
  },
};

export default function ScannerPage() {
  return <ScannerClient texts={deTexts} />;
}
