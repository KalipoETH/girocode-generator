import type { Metadata } from 'next';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'qr-code-fattura-sepa';

export const metadata: Metadata = {
  title: 'QR Code su Fattura SEPA – Generatore PDF Gratis 2026',
  description:
    'Aggiungi un QR code EPC alle tue fatture per pagamenti SEPA istantanei. I clienti scansionano e pagano in secondi. Gratis, include generatore PDF.',
  alternates: seoAlternates(SLUG, 'it'),
};

export default function QrCodeFatturaSepaPage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        locale: 'it',
        breadcrumbLabel: 'QR Code su Fattura SEPA',
        badge: 'Fatture · EPC069-12 · SEPA',
        h1: 'QR Code EPC su Fattura – Pagamenti Più Veloci',
        shortAnswer:
          'Aggiungere un codice QR EPC a una fattura permette ai clienti di pagare via bonifico SEPA scansionando con la loro app bancaria. IBAN, importo e causale vengono compilati automaticamente. Il QR deve essere posizionato in basso a destra sulla fattura, con dimensione minima di 2×2 cm.',
        stats: [
          { value: '2×2 cm', label: 'Dimensione minima QR' },
          { value: 'EPC069-12', label: 'Standard ufficiale' },
          { value: '10 sec.', label: 'Tempo medio di pagamento' },
          { value: '0 €', label: 'Commissioni transazione' },
        ],
        body: (
          <>
            <h2>Perché Aggiungere un QR EPC alla Fattura?</h2>
            <p>
              I bonifici manuali sono lenti e soggetti a errori. Un <strong>codice QR EPC sulla
              fattura</strong> elimina questi problemi: il cliente apre l&apos;app bancaria,
              scansiona il codice, verifica i dati e conferma – fatto in secondi.
            </p>
            <h2>Posizionamento del QR Code</h2>
            <ul>
              <li><strong>Posizione:</strong> angolo in basso a destra, vicino ai dati di pagamento</li>
              <li><strong>Dimensione minima:</strong> 2 × 2 cm (preferibilmente 3 × 3 cm per stampa)</li>
              <li><strong>Contrasto:</strong> QR nero su sfondo bianco</li>
            </ul>
          </>
        ),
        howTo: {
          name: 'Aggiungere QR EPC a una fattura',
          headline: 'Passo dopo Passo: QR EPC sulla Fattura PDF',
          steps: [
            { title: 'Inserisci i dati della fattura', description: 'IBAN, nome, importo e causale nel generatore.' },
            { title: 'Genera il codice QR EPC', description: 'Clicca Genera per creare un QR conforme EPC069-12.' },
            { title: 'Crea la fattura PDF con QR', description: 'Usa l\'editor fatture per incorporare il QR in basso a destra.' },
          ],
        },
        faqs: [
          {
            q: 'Dove posizionare il QR code sulla fattura?',
            a: 'In basso a destra, vicino ai dati di pagamento. Dimensione minima: 2×2 cm.',
          },
          {
            q: 'Posso aggiungere il QR a una fattura PDF digitale?',
            a: 'Sì. Le fatture PDF digitali possono includere un codice QR EPC scansionabile dallo schermo.',
          },
          {
            q: 'È gratis aggiungere un QR EPC alle fatture?',
            a: 'Sì. Creare codici QR EPC con girocodegenerator.com è completamente gratuito.',
          },
        ],
        ctas: [
          { href: '/it', label: 'Crea QR EPC per Fattura →' },
          { href: '/it/rechnungs-editor', label: 'Generatore Fattura PDF →', primary: false },
        ],
        relatedLinks: [
          { href: '/it/generatore-qr-epc', label: 'Generatore QR EPC' },
          { href: '/it/banche-italiane-qr-epc', label: 'Banche Italiane con QR EPC' },
        ],
      }}
    />
  );
}
