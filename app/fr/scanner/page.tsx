import type { Metadata } from 'next';
import { ScannerClient, frTexts } from '../../scanner/ScannerClient';

export const metadata: Metadata = {
  title: 'Scanner GiroCode – Scanner & lire les QR codes',
  description:
    'Scannez un GiroCode / QR code SEPA directement dans votre navigateur. Affiche IBAN, montant et référence de paiement. 100% local, aucun partage de données.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/fr/scanner',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/scanner',
      de: 'https://www.girocodegenerator.com/scanner',
      en: 'https://www.girocodegenerator.com/en/scanner',
      fr: 'https://www.girocodegenerator.com/fr/scanner',
      es: 'https://www.girocodegenerator.com/es/scanner',
    },
  },
};

export default function ScannerPageFR() {
  return <ScannerClient texts={frTexts} />;
}
