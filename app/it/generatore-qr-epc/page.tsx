import type { Metadata } from 'next';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'generatore-qr-epc';

export const metadata: Metadata = {
  title: 'Generatore QR Code EPC Gratis – Crea SEPA QR Online 2026',
  description:
    'Generatore gratuito di codici QR EPC per bonifici SEPA. Inserisci IBAN, genera istantaneamente, scarica PNG. Senza registrazione.',
  alternates: seoAlternates(SLUG, 'it'),
};

export default function GeneratoreQrEpcPage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        locale: 'it',
        breadcrumbLabel: 'Generatore QR EPC',
        badge: 'EPC069-12 · SEPA · Gratis',
        h1: 'Generatore Gratuito di Codici QR EPC',
        shortAnswer:
          'Creare un codice QR EPC richiede meno di 10 secondi: Inserisci nome beneficiario e IBAN, aggiungi opzionalmente importo e causale, clicca su genera e scarica il tuo QR in PNG. Senza registrazione. Tutti i dati rimangono nel tuo browser.',
        stats: [
          { value: '10 sec.', label: 'Tempo di creazione' },
          { value: 'Gratis', label: 'Senza abbonamento' },
          { value: 'EPC069-12', label: 'Standard ufficiale' },
          { value: '36 paesi', label: 'Copertura SEPA' },
        ],
        body: (
          <>
            <h2>Crea Codici QR EPC in Pochi Secondi</h2>
            <p>
              Il <strong>codice QR EPC</strong> è il modo più veloce per ricevere bonifici SEPA.
              Ideale per fatture, donazioni e pagamenti – genera un codice conforme EPC069-12
              gratuitamente nel browser.
            </p>
          </>
        ),
        howTo: {
          name: 'Creare un codice QR EPC',
          headline: 'Come Creare un Codice QR EPC',
          steps: [
            { title: 'Inserisci nome e IBAN', description: 'Nome del titolare del conto e IBAN esattamente come registrato.' },
            { title: 'Aggiungi importo e causale', description: 'Importo in EUR e causale di pagamento (opzionale).' },
            { title: 'Genera e scarica PNG', description: 'Clicca su Genera e scarica il codice QR istantaneamente.' },
          ],
        },
        faqs: [
          {
            q: 'Come creare un codice QR EPC gratis?',
            a: 'Apri girocodegenerator.com/it, inserisci nome e IBAN, clicca Genera e scarica il PNG. Gratis, senza registrazione.',
          },
          {
            q: 'Quali informazioni servono?',
            a: 'Nome beneficiario (max. 70 caratteri) e IBAN. Importo e causale sono opzionali.',
          },
          {
            q: 'Il mio IBAN è al sicuro?',
            a: 'Sì. Tutti i dati vengono elaborati 100% localmente nel browser.',
          },
        ],
        ctas: [{ href: '/it', label: 'Crea Codice QR EPC →' }],
        relatedLinks: [
          { href: '/it/codice-qr-sepa-gratis', label: 'Codice QR SEPA Gratis' },
          { href: '/it/qr-code-fattura-sepa', label: 'QR Code su Fattura SEPA' },
        ],
      }}
    />
  );
}
