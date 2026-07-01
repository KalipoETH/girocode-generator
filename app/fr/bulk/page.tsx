import type { Metadata } from 'next';
import BulkClient from '@/app/(de)/bulk/BulkClient';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Générateur GiroCode en lot – Créez plusieurs QR codes à la fois',
  description:
    'Téléchargez un fichier Excel/CSV et créez des centaines de GiroCodes en une fois. Gratuit, local, aucune transmission de données.',
  alternates: { canonical: `${SITE_URL}/fr/bulk` },
};

export default function BulkPageFr() {
  return <BulkClient locale="fr" />;
}
