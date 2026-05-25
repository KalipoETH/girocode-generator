import type { Metadata } from 'next';
import { InvoiceEditor } from './InvoiceEditor';

export const metadata: Metadata = {
  title: 'Rechnungs-Editor – Rechnung selbst gestalten | GiroCode Generator',
  description:
    'Erstelle deine eigene Rechnung mit unserem visuellen Editor. Drag & Drop, eigenes Logo, individuelle Gestaltung. Kostenlos & lokal im Browser.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/rechnungs-editor',
    languages: {
      de: 'https://www.girocodegenerator.com/rechnungs-editor',
      en: 'https://www.girocodegenerator.com/en/rechnungs-editor',
      fr: 'https://www.girocodegenerator.com/fr/rechnungs-editor',
      es: 'https://www.girocodegenerator.com/es/rechnungs-editor',
    },
  },
};

export default function RechnungsEditorPage() {
  return <InvoiceEditor locale="de" />;
}
