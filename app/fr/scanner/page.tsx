import type { Metadata } from 'next';
import { ScannerClient, frTexts } from '@/app/(de)/scanner/ScannerClient';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Scanner GiroCode – Scanner & lire les QR codes',
  description:
    'Scannez un GiroCode / QR code SEPA directement dans votre navigateur. Affiche IBAN, montant et référence de paiement. 100% local, aucun partage de données.',
  alternates: {
    canonical: `${SITE_URL}/fr/scanner`,
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

export default function ScannerPageFR() {
  return <ScannerClient texts={frTexts} />;
}
