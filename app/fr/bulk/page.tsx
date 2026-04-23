import type { Metadata } from 'next';
import BulkClient from '../../bulk/BulkClient';

export const metadata: Metadata = {
  title: 'Générateur GiroCode en lot – Créez plusieurs QR codes à la fois',
  description:
    'Téléchargez un fichier Excel/CSV et créez des centaines de GiroCodes en une fois. Gratuit, local, aucune transmission de données.',
  alternates: { canonical: 'https://www.girocodegenerator.com/fr/bulk' },
};

export default function BulkPageFr() {
  return <BulkClient locale="fr" />;
}
