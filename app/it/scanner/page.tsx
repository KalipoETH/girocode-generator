import type { Metadata } from 'next';
import { ScannerClient, itTexts } from '@/app/(de)/scanner/ScannerClient';
import { SITE_URL } from '@/lib/siteConfig';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Come scansionare un GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Clicca su 'Avvia fotocamera', punta la fotocamera sul GiroCode e attendi che venga riconosciuto automaticamente.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quali dati contiene un GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un GiroCode contiene: nome beneficiario, IBAN, importo opzionale e causale opzionale.',
      },
    },
    {
      '@type': 'Question',
      name: 'I miei dati vengono salvati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Tutti i dati vengono elaborati localmente nel tuo browser. Nessuna trasmissione ai server.',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'Scanner GiroCode – Scansiona QR Code SEPA Gratis 2026',
  description:
    'Scansiona un GiroCode con la fotocamera del tuo browser e leggi i dati di pagamento SEPA. 100% locale, nessuna trasmissione dati.',
  alternates: {
    canonical: `${SITE_URL}/it/scanner`,
    languages: {
      'x-default': `${SITE_URL}/scanner`,
      de: `${SITE_URL}/scanner`,
      en: `${SITE_URL}/en/scanner`,
      fr: `${SITE_URL}/fr/scanner`,
      es: `${SITE_URL}/es/scanner`,
      it: `${SITE_URL}/it/scanner`,
    },
  },
};

export default function ScannerPageIT() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ScannerClient texts={itTexts} />
    </>
  );
}
