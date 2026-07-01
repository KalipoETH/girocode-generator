import type { Metadata } from 'next';
import BulkClient from './BulkClient';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Bulk GiroCode Generator – Mehrere QR-Codes auf einmal erstellen',
  description:
    'Lade eine Excel/CSV-Datei hoch und erstelle hunderte GiroCodes auf einmal. Kostenlos, lokal, keine Datenweitergabe.',
  alternates: { canonical: `${SITE_URL}/bulk` },
};

export default function BulkPage() {
  return <BulkClient locale="de" />;
}
