import type { Metadata } from 'next';
import { ScannerClient, esTexts } from '@/app/(de)/scanner/ScannerClient';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Escáner GiroCode – Escanear y leer códigos QR',
  description:
    'Escanea un GiroCode / código QR SEPA directamente en tu navegador. Muestra IBAN, importe y referencia de pago. 100% local, sin compartir datos.',
  alternates: {
    canonical: `${SITE_URL}/es/scanner`,
    languages: {
      'x-default': `${SITE_URL}/scanner`,
      de: `${SITE_URL}/scanner`,
      en: `${SITE_URL}/en/scanner`,
      fr: `${SITE_URL}/fr/scanner`,
      es: `${SITE_URL}/es/scanner`,
      it: `${SITE_URL}/it/scanner`,
    },
  },
};

export default function ScannerPageES() {
  return <ScannerClient texts={esTexts} />;
}
