import type { Metadata } from 'next';
import BulkClient from './BulkClient';

export const metadata: Metadata = {
  title: 'Bulk GiroCode Generator – Mehrere QR-Codes auf einmal erstellen',
  description:
    'Lade eine Excel/CSV-Datei hoch und erstelle hunderte GiroCodes auf einmal. Kostenlos, lokal, keine Datenweitergabe.',
  alternates: { canonical: 'https://www.girocodegenerator.com/bulk' },
};

export default function BulkPage() {
  return <BulkClient locale="de" />;
}
