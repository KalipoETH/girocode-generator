import type { Metadata } from 'next';
import BulkClient from '../../bulk/BulkClient';

export const metadata: Metadata = {
  title: 'Bulk GiroCode Generator – Create Multiple QR Codes at Once',
  description:
    'Upload an Excel/CSV file and create hundreds of GiroCodes at once. Free, local, no data sharing.',
  alternates: { canonical: 'https://www.girocodegenerator.com/en/bulk' },
};

export default function BulkPageEn() {
  return <BulkClient locale="en" />;
}
