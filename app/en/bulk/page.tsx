import type { Metadata } from 'next';
import BulkClient from '@/app/(de)/bulk/BulkClient';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Bulk GiroCode Generator – Create Multiple QR Codes at Once',
  description:
    'Upload an Excel/CSV file and create hundreds of GiroCodes at once. Free, local, no data sharing.',
  alternates: { canonical: `${SITE_URL}/en/bulk` },
};

export default function BulkPageEn() {
  return <BulkClient locale="en" />;
}
