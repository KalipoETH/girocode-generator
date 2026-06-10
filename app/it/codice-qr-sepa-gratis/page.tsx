import type { Metadata } from 'next';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'codice-qr-sepa-gratis';

export const metadata: Metadata = {
  title: 'Codice QR SEPA Gratis – Senza Registrazione 2026',
  description:
    'Codice QR SEPA (EPC) gratis: Senza registrazione, senza abbonamento, senza condivisione dati. Crea QR EPC direttamente nel tuo browser.',
  alternates: seoAlternates(SLUG, 'it'),
};

export default function CodiceQrSepaGratisPage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        locale: 'it',
        breadcrumbLabel: 'Codice QR SEPA Gratis',
        badge: '100% Gratis · Senza Registrazione',
        h1: 'Codice QR SEPA Gratis – Senza Registrazione',
        shortAnswer:
          'Crea codici QR SEPA completamente gratis – senza registrazione, senza abbonamento, senza condivisione dati. Tutto avviene localmente nel tuo browser.',
        stats: [
          { value: '0 €', label: 'Sempre gratis' },
          { value: '0', label: 'Registrazione richiesta' },
          { value: '100%', label: 'Privacy locale' },
          { value: '∞', label: 'QR illimitati' },
        ],
        body: (
          <>
            <h2>Perché il Nostro Codice QR SEPA è Davvero Gratis</h2>
            <ul>
              <li>Senza costi di abbonamento</li>
              <li>Senza account richiesto</li>
              <li>Senza pubblicità</li>
              <li>Senza condivisione dati</li>
              <li>Codici QR illimitati</li>
            </ul>
          </>
        ),
        faqs: [
          {
            q: 'Il generatore QR SEPA è davvero gratis?',
            a: 'Sì, completamente gratis – senza abbonamento, senza costi nascosti, senza registrazione.',
          },
          {
            q: 'I miei dati bancari vengono condivisi?',
            a: 'No. Tutto viene elaborato 100% localmente nel browser.',
          },
        ],
        ctas: [{ href: '/it', label: 'Crea Codice QR SEPA Gratis →' }],
        relatedLinks: [
          { href: '/it/generatore-qr-epc', label: 'Generatore QR EPC' },
          { href: '/it/banche-italiane-qr-epc', label: 'Banche Italiane con QR EPC' },
        ],
      }}
    />
  );
}
