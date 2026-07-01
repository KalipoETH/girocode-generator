import type { Metadata } from 'next';
import { InvoiceEditor } from '@/app/(de)/rechnungs-editor/InvoiceEditor';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Éditeur de facture – Concevez votre facture | GiroCode Generator',
  description:
    'Créez votre propre facture avec notre éditeur visuel. Glisser-déposer, logo personnel, conception individuelle. Gratuit & local dans votre navigateur.',
  alternates: {
    canonical: `${SITE_URL}/fr/rechnungs-editor`,
  },
};

export default function InvoiceEditorPageFR() {
  return <InvoiceEditor locale="fr" />;
}
