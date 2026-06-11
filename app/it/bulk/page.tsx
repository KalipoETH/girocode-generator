import type { Metadata } from 'next';
import BulkClient from '../../bulk/BulkClient';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quanti GiroCodes posso creare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fino a 50 GiroCodes gratuitamente per file CSV.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual è il formato del file CSV?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Il file CSV deve contenere le colonne: nome, iban, bic (opzionale), importo (opzionale), causale (opzionale).',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'Generatore GiroCode Multiplo – Upload CSV Gratis 2026',
  description:
    'Carica un file CSV e crea centinaia di GiroCodes contemporaneamente. Download ZIP o PDF. Gratis, senza registrazione.',
  alternates: { canonical: 'https://www.girocodegenerator.com/it/bulk' },
};

export default function BulkPageIt() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BulkClient locale="it" />
    </>
  );
}
