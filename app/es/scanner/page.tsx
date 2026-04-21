import type { Metadata } from 'next';
import { ScannerClient, esTexts } from '../../scanner/ScannerClient';

export const metadata: Metadata = {
  title: 'Escáner GiroCode – Escanear y leer códigos QR',
  description:
    'Escanea un GiroCode / código QR SEPA directamente en tu navegador. Muestra IBAN, importe y referencia de pago. 100% local, sin compartir datos.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/scanner',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/scanner',
      de: 'https://www.girocodegenerator.com/scanner',
      en: 'https://www.girocodegenerator.com/en/scanner',
      fr: 'https://www.girocodegenerator.com/fr/scanner',
      es: 'https://www.girocodegenerator.com/es/scanner',
    },
  },
};

export default function ScannerPageES() {
  return <ScannerClient texts={esTexts} />;
}
