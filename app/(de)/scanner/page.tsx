import type { Metadata } from 'next';
import { ScannerClient, deTexts } from './ScannerClient';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GiroCode Scanner – QR-Code scannen & auslesen',
  description:
    'GiroCode / SEPA-QR-Code direkt im Browser scannen und auslesen. Zeigt IBAN, Betrag und Verwendungszweck an. 100% lokal, keine Datenweitergabe.',
  alternates: {
    canonical: `${SITE_URL}/scanner`,
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

export default function ScannerPage() {
  return <ScannerClient texts={deTexts} />;
}
