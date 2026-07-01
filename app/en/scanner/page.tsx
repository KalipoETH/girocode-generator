import type { Metadata } from 'next';
import { ScannerClient, enTexts } from '@/app/(de)/scanner/ScannerClient';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GiroCode Scanner – Scan & Read QR Codes',
  description:
    'Scan a GiroCode / SEPA QR code directly in your browser. Shows IBAN, amount and payment reference. 100% local, no data sharing.',
  alternates: {
    canonical: `${SITE_URL}/en/scanner`,
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

export default function ScannerPageEN() {
  return <ScannerClient texts={enTexts} />;
}
