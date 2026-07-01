import type { Metadata } from 'next';
import { InvoiceEditor } from '@/app/(de)/rechnungs-editor/InvoiceEditor';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Invoice Editor – Design your own invoice | GiroCode Generator',
  description:
    'Create your own invoice with our visual editor. Drag & drop, your own logo, individual design. Free & local in your browser.',
  alternates: {
    canonical: `${SITE_URL}/en/rechnungs-editor`,
  },
};

export default function InvoiceEditorPageEN() {
  return <InvoiceEditor locale="en" />;
}
