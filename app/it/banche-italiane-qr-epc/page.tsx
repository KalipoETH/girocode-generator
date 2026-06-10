import type { Metadata } from 'next';
import { CountryEpcLanding, countryAlternates } from '../../../components/CountryEpcLanding';

const SLUG = 'banche-italiane-qr-epc';

export const metadata: Metadata = {
  title: 'Banche Italiane con QR Code EPC – App Supportate 2026',
  description:
    'Quali app bancarie italiane supportano il codice QR EPC? Intesa Sanpaolo, UniCredit, Banco BPM e altre. Guida completa per ogni app.',
  alternates: countryAlternates(SLUG, 'it'),
};

export default function BancheItalianeQrEpcPage() {
  return (
    <CountryEpcLanding
      content={{
        slug: SLUG,
        locale: 'it',
        breadcrumbLabel: 'Banche Italiane QR EPC',
        badge: 'Italia · EUR · SEPA',
        h1: 'Banche Italiane che Supportano il QR Code EPC',
        shortAnswer:
          "Le principali banche italiane supportano il codice QR EPC per i pagamenti SEPA. Il QR scanner si trova solitamente nella sezione 'Bonifico' o 'Pagamenti' dell'app bancaria.",
        stats: [
          { value: 'IT', label: 'Prefisso IBAN italiano' },
          { value: '27', label: 'Lunghezza IBAN IT' },
          { value: 'EUR', label: 'Valuta' },
          { value: 'Gratis', label: 'Generatore' },
        ],
        introSection: {
          title: 'QR Code EPC in Italia',
          body: (
            <>
              <p>
                Le banche italiane supportano sempre più il <strong>codice QR EPC</strong> per i
                bonifici SEPA. Freelancer, PMI e professionisti possono ricevere pagamenti più
                velocemente aggiungendo un QR code alle fatture.
              </p>
            </>
          ),
        },
        banksHeadline: 'App Bancarie Italiane con QR EPC',
        banks: [
          { name: 'Intesa Sanpaolo', app: 'Intesa Sanpaolo Mobile' },
          { name: 'UniCredit', app: 'UniCredit Mobile Banking' },
          { name: 'Banco BPM', app: 'Webank / Banco BPM app' },
          { name: 'Fineco', app: 'FinecoBank App' },
          { name: 'ING Italia', app: 'ING Italia App' },
        ],
        howToHeadline: 'Come Creare un QR EPC Italiano',
        howToJsonLdName: 'Creare un QR EPC per banca italiana',
        howToSteps: [
          { title: 'Inserisci IBAN e nome', description: 'IBAN italiano (IT, 27 caratteri) e nome del titolare.' },
          { title: 'Aggiungi importo e causale', description: 'Importo in EUR e riferimento fattura.' },
          { title: 'Scarica e aggiungi alla fattura', description: 'Genera il QR e inseriscilo nella fattura PDF.' },
        ],
        faqHeadline: 'FAQ – QR EPC in Italia',
        faqs: [
          {
            q: 'Quali banche italiane supportano il QR EPC?',
            a: 'Intesa Sanpaolo, UniCredit, Banco BPM, Fineco e ING Italia supportano la scansione QR EPC nelle loro app.',
          },
          {
            q: 'Dove trovo lo scanner QR nell\'app bancaria?',
            a: "Di solito nella sezione 'Bonifico' o 'Pagamenti' dell'app mobile.",
          },
          {
            q: 'Posso usare il QR EPC sulle fatture?',
            a: 'Sì. Ideale per freelance e PMI – i clienti scansionano e pagano in secondi.',
          },
        ],
        ctaText: 'Crea QR EPC Italiano →',
        ctaHref: '/it',
        relatedLinks: [
          { href: '/it/generatore-qr-epc', label: 'Generatore QR EPC' },
          { href: '/it/qr-code-fattura-sepa', label: 'QR Code su Fattura' },
        ],
      }}
    />
  );
}
