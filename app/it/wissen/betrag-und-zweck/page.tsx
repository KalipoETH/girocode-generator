import type { Metadata } from 'next';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';
import { SITE_URL } from '@/lib/siteConfig';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "L'importo è obbligatorio nel GiroCode?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No, l'importo è completamente opzionale. Se il campo resta vuoto, l'app bancaria compila beneficiario, IBAN e causale, ma il pagatore deve inserire l'importo manualmente – utile per donazioni o contributi liberi.",
      },
    },
    {
      '@type': 'Question',
      name: "Qual è il formato corretto per l'importo?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Il formato EPC richiede EUR seguito dall'importo senza spazi, con punto decimale e due decimali: EUR49.90. Non usare la virgola, spazi o EUR minuscolo. Esempi validi: EUR0.01, EUR1250.00.",
      },
    },
    {
      '@type': 'Question',
      name: 'Cosa inserire nella causale di pagamento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La causale (max. 140 caratteri) appare nell\'estratto conto. Includi sempre il numero di fattura, eventualmente nome cliente o periodo. Esempio: "Fattura FA-2025-015" o "Canone marzo 2025 socio 4521".',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'Importo & Causale nel GiroCode – Come fare bene',
  description:
    'Importo opzionale o obbligatorio? Causale max. 140 caratteri: cosa includere e cosa evitare. Best practice per freelance e PMI italiane.',
  alternates: {
    canonical: `${SITE_URL}/it/wissen/betrag-und-zweck`,
    languages: {
      'x-default': `${SITE_URL}/wissen/betrag-und-zweck`,
      de: `${SITE_URL}/wissen/betrag-und-zweck`,
      en: `${SITE_URL}/en/wissen/betrag-und-zweck`,
      fr: `${SITE_URL}/fr/wissen/betrag-und-zweck`,
      es: `${SITE_URL}/es/wissen/betrag-und-zweck`,
      it: `${SITE_URL}/it/wissen/betrag-und-zweck`,
    },
  },
};

export default function WissenBetragUndZweckPageIt() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <KnowledgeLayout
        breadcrumbCurrent="Importo e causale"
        badge="Pratica · Importo e causale"
        title="Importo e causale nel GiroCode – Guida completa"
        lead="In un GiroCode, l'importo è opzionale e si specifica in formato EUR49.90. Senza importo, il pagatore può inserire la propria cifra alla scansione – ideale per donazioni. La causale è limitata a 140 caratteri."
        relatedArticles={[
          { href: '/it/wissen/girocode', label: "Cos'è un GiroCode? – Tutto quello che devi sapere" },
          { href: '/it/wissen/epc-standard', label: 'Standard EPC & SEPA-QR – Struttura tecnica' },
          { href: '/it/wissen/iban-bic', label: 'IBAN & BIC per GiroCode' },
          { href: '/it/wissen/rechnung', label: 'GiroCode in fattura – La guida completa' },
          { href: '/it/wissen/banking-apps', label: 'App bancarie compatibili con GiroCode' },
        ]}
        locale="it"
        lastUpdated="2026-06-01"
        shortAnswer="In un GiroCode, l'importo è opzionale e si specifica in formato EUR49.90. Senza importo, il pagatore può inserire la propria cifra alla scansione – ideale per donazioni. La causale è limitata a 140 caratteri."
        statsData={[
          { value: '140', label: 'Max. caratteri causale' },
          { value: 'EUR', label: 'Prefisso obbligatorio per importo' },
          { value: '0', label: 'Importo minimo (completamente opzionale)' },
          { value: '2', label: 'Decimali importo (es. 49.90)' },
        ]}
      >
        <section aria-labelledby="importo-girocode">
          <h2 id="importo-girocode">L&apos;importo nel GiroCode</h2>
          <p>
            L&apos;importo è uno dei due campi variabili più importanti di un GiroCode, insieme
            alla causale. La configurazione corretta garantisce che il cliente paghi l&apos;importo
            esatto e che la riconciliazione contabile sia automatica.
          </p>

          <h3>Formato: EUR49.90</h3>
          <p>Lo standard EPC definisce un formato preciso per l&apos;importo:</p>
          <ul>
            <li>
              Sempre il codice valuta ISO 4217: <strong><code>EUR</code></strong> (maiuscolo, senza
              spazio).
            </li>
            <li>
              Seguito dall&apos;importo con <strong>punto decimale</strong> (non virgola).
            </li>
            <li>Esattamente <strong>due decimali</strong>.</li>
          </ul>
          <div className="not-prose rounded-xl border border-slate-700 bg-slate-900 p-4 font-mono text-sm">
            <p className="text-emerald-400">EUR0.01    ← importo minimo</p>
            <p className="text-emerald-400">EUR49.90   ← importo tipico</p>
            <p className="text-emerald-400">EUR1250.00 ← sempre .00 se intero</p>
          </div>
          <div className="not-prose mt-3 rounded-xl border border-slate-700 bg-slate-900 p-4 font-mono text-sm">
            <p className="text-red-400">EUR 49.90  ← spazio tra EUR e numero</p>
            <p className="text-red-400">EUR49,90   ← virgola invece del punto</p>
            <p className="text-red-400">49.90      ← senza codice valuta</p>
          </div>

          <h3>L&apos;importo è obbligatorio? No, è opzionale</h3>
          <p>
            Se il campo resta vuoto, l&apos;app bancaria compila beneficiario, IBAN e causale, ma
            il pagatore deve inserire l&apos;importo manualmente. Per fatture con totale fisso,
            includi sempre l&apos;importo.
          </p>
        </section>

        <section aria-labelledby="causale-pagamento" className="mt-10">
          <h2 id="causale-pagamento">La causale nel GiroCode</h2>
          <p>
            La causale (riga 11 del payload EPC) è il testo visibile nell&apos;estratto conto del
            pagatore e del beneficiario. È il campo chiave per identificare la fattura o la
            transazione.
          </p>

          <h3>Lunghezza massima: 140 caratteri</h3>
          <p>
            Lo standard EPC limita la causale a <strong>140 caratteri</strong>. I caratteri
            aggiuntivi vengono troncati o generano errori. 140 caratteri bastano per numero
            fattura, cliente e periodo.
          </p>

          <h3>Cosa includere nella causale</h3>
          <ul>
            <li>
              <strong>Numero di fattura</strong> (elemento più importante)
            </li>
            <li>Nome cliente o codice cliente</li>
            <li>Periodo (mese, trimestre)</li>
            <li>Breve descrizione servizio o progetto</li>
          </ul>
          <div className="not-prose rounded-xl border border-slate-700 bg-slate-900 p-4 font-mono text-sm text-emerald-400">
            <p>Fattura FA-2025-015</p>
            <p>Onorari marzo 2025 FA-2025-008</p>
            <p>Canone annuale 2025 socio 4521</p>
          </div>
        </section>

        <section aria-labelledby="best-practice" className="mt-10">
          <h2 id="best-practice">Best practice per importo e causale</h2>
          <ul>
            <li>
              <strong>Fatture professionali:</strong> includi sempre importo fisso e numero fattura
              nella causale.
            </li>
            <li>
              <strong>Donazioni:</strong> lascia l&apos;importo vuoto, il pagatore sceglie liberamente.
            </li>
            <li>
              <strong>Evita caratteri problematici:</strong> niente emoji, virgolette tipografiche o
              a capo.
            </li>
            <li>
              <strong>Non inserire dati sensibili</strong> nella causale – è visibile in entrambi gli
              estratti conto.
            </li>
          </ul>
        </section>
      </KnowledgeLayout>
    </>
  );
}
