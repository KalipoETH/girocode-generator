import type { Metadata } from 'next';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';
import { SITE_URL } from '@/lib/siteConfig';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Cos'è l'IBAN italiano?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'IBAN italiano (IT) ha esattamente 27 caratteri alfanumerici secondo ISO 13616. Struttura: IT + 2 cifre di controllo + 1 carattere CIN + 5 caratteri ABI + 5 caratteri CAB + 12 caratteri numero conto. Esempio: IT60X0542811101000000123456.",
      },
    },
    {
      '@type': 'Question',
      name: 'Il BIC è obbligatorio nel GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. Nella versione 002 dello standard EPC il BIC è opzionale. Dal 2016 i bonifici SEPA non richiedono più il BIC: le banche possono derivarlo dall'IBAN. Per massima compatibilità con app meno aggiornate, puoi comunque includerlo.",
      },
    },
    {
      '@type': 'Question',
      name: 'Come funziona la validazione IBAN (Mod-97)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'algoritmo Mod-97 sposta i primi 4 caratteri alla fine, converte le lettere in numeri (A=10…Z=35) e calcola il resto della divisione per 97. Se il resto è 1, l'IBAN è valido. Rileva la maggior parte degli errori di digitazione prima dell'invio del bonifico.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'IBAN & BIC nel GiroCode – Formato, Obbligo & Validazione',
  description:
    'IBAN e BIC per GiroCode: il BIC è obbligatorio? Come funziona la validazione IBAN (Mod-97)? Tutti i formati spiegati, con focus su IBAN italiano (27 caratteri).',
  alternates: {
    canonical: `${SITE_URL}/it/wissen/iban-bic`,
    languages: {
      'x-default': `${SITE_URL}/wissen/iban-bic`,
      de: `${SITE_URL}/wissen/iban-bic`,
      en: `${SITE_URL}/en/wissen/iban-bic`,
      fr: `${SITE_URL}/fr/wissen/iban-bic`,
      es: `${SITE_URL}/es/wissen/iban-bic`,
      it: `${SITE_URL}/it/wissen/iban-bic`,
    },
  },
};

export default function WissenIbanBicPageIt() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <KnowledgeLayout
        breadcrumbCurrent="IBAN & BIC"
        badge="Basi · IBAN & BIC"
        title="IBAN & BIC per GiroCode – Guida completa"
        lead="L'IBAN (International Bank Account Number) è un numero di conto internazionale fino a 34 caratteri (ISO 13616). Gli IBAN italiani hanno esattamente 27 caratteri. Il BIC è opzionale nei GiroCode dalla migrazione SEPA del 2016."
        relatedArticles={[
          { href: '/it/wissen/girocode', label: "Cos'è un GiroCode? – Tutto quello che devi sapere" },
          { href: '/it/wissen/epc-standard', label: 'Standard EPC & SEPA-QR – Struttura tecnica' },
          { href: '/it/wissen/betrag-und-zweck', label: 'Importo e causale nel GiroCode' },
          { href: '/it/wissen/rechnung', label: 'GiroCode in fattura – La guida completa' },
          { href: '/it/wissen/scannen', label: 'Come scansionare un GiroCode' },
        ]}
        locale="it"
        lastUpdated="2026-06-01"
        shortAnswer="L'IBAN (International Bank Account Number) è un numero di conto internazionale fino a 34 caratteri (ISO 13616). Gli IBAN italiani hanno esattamente 27 caratteri. Il BIC è opzionale nei GiroCode dalla migrazione SEPA del 2016."
        statsData={[
          { value: '27', label: 'Caratteri IBAN italiano (IT)' },
          { value: '34', label: 'Max. caratteri IBAN mondiale' },
          { value: '2016', label: 'BIC diventato opzionale (SEPA)' },
          { value: '97', label: 'Modulo verifica (algoritmo Mod-97)' },
        ]}
      >
        <section aria-labelledby="cos-e-iban">
          <h2 id="cos-e-iban">Cos&apos;è un IBAN?</h2>
          <p>
            L&apos;<strong>IBAN</strong> (International Bank Account Number) è lo standard
            internazionale per identificare univocamente i conti bancari (norma{' '}
            <strong>ISO 13616</strong>). Nella zona SEPA è l&apos;identificatore obbligatorio per
            ogni bonifico.
          </p>

          <h3>Struttura dell&apos;IBAN italiano</h3>
          <p>
            L&apos;IBAN italiano ha esattamente <strong>27 caratteri</strong>:
          </p>
          <div className="not-prose rounded-xl border border-slate-700 bg-slate-900 p-4 font-mono text-sm">
            <p className="text-emerald-400">IT60 X0542 8111 0100 0000 123456</p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-400 sm:grid-cols-4">
              <div>
                <span className="text-sky-300">IT</span> = Codice paese
              </div>
              <div>
                <span className="text-yellow-300">60</span> = Cifre di controllo
              </div>
              <div>
                <span className="text-purple-300">X</span> = CIN
              </div>
              <div>
                <span className="text-emerald-300">05428…</span> = ABI + CAB + conto
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="cos-e-bic" className="mt-10">
          <h2 id="cos-e-bic">Cos&apos;è un BIC?</h2>
          <p>
            Il <strong>BIC</strong> (Bank Identifier Code), noto anche come codice SWIFT (ISO
            9362), identifica un&apos;istituzione finanziaria. Struttura: 4 lettere banca + 2
            lettere paese + 2 caratteri sede + 3 caratteri filiale (opzionale,{' '}
            <code>XXX</code> per la sede principale).
          </p>
          <p>
            Esempio: <code>BCITITMMXXX</code> (Intesa Sanpaolo). Il BIC compare su estratto
            conto, app bancaria e contratto di apertura conto.
          </p>
        </section>

        <section aria-labelledby="bic-obbligatorio" className="mt-10">
          <h2 id="bic-obbligatorio">Il BIC è obbligatorio per il GiroCode?</h2>
          <p>
            <strong>No</strong> – nella versione 002 dello standard EPC il BIC è opzionale. Dal 1°
            febbraio 2016 il regolamento UE 260/2012 ha eliminato l&apos;obbligo del BIC per i
            bonifici SEPA. Le banche derivano il BIC dall&apos;IBAN tramite tabelle di routing
            interne.
          </p>
        </section>

        <section aria-labelledby="validazione-iban" className="mt-10">
          <h2 id="validazione-iban">Validazione IBAN con Mod-97</h2>
          <ol>
            <li>
              Spostare i primi 4 caratteri alla fine (es.{' '}
              <code>IT60X0542811101000000123456</code> →{' '}
              <code>X0542811101000000123456IT60</code>).
            </li>
            <li>Convertire le lettere in numeri (A=10, B=11, …, Z=35).</li>
            <li>
              Calcolare il modulo 97: se il resto è <strong>1</strong>, l&apos;IBAN è valido.
            </li>
          </ol>
        </section>

        <section aria-labelledby="formati-paesi" className="mt-10">
          <h2 id="formati-paesi">Formati IBAN per paese</h2>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-2 pr-4 font-semibold text-slate-200">Paese</th>
                  <th className="py-2 pr-4 font-semibold text-slate-200">Codice</th>
                  <th className="py-2 pr-4 font-semibold text-slate-200">Lung.</th>
                  <th className="py-2 font-semibold text-slate-200">Esempio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-xs text-slate-300">
                <tr>
                  <td className="py-2 pr-4">Germania</td>
                  <td className="py-2 pr-4 font-mono">DE</td>
                  <td className="py-2 pr-4">22</td>
                  <td className="py-2 font-mono">DE89370400440532013000</td>
                </tr>
                <tr className="bg-emerald-500/10 font-semibold">
                  <td className="py-2 pr-4 text-emerald-300">Italia</td>
                  <td className="py-2 pr-4 font-mono text-emerald-300">IT</td>
                  <td className="py-2 pr-4 text-emerald-300">27</td>
                  <td className="py-2 font-mono text-emerald-300">IT60X0542811101000000123456</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Austria</td>
                  <td className="py-2 pr-4 font-mono">AT</td>
                  <td className="py-2 pr-4">20</td>
                  <td className="py-2 font-mono">AT611904300234573201</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Belgio</td>
                  <td className="py-2 pr-4 font-mono">BE</td>
                  <td className="py-2 pr-4">16</td>
                  <td className="py-2 font-mono">BE71096123456769</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Francia</td>
                  <td className="py-2 pr-4 font-mono">FR</td>
                  <td className="py-2 pr-4">27</td>
                  <td className="py-2 font-mono">FR7630006000011234567890189</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Spagna</td>
                  <td className="py-2 pr-4 font-mono">ES</td>
                  <td className="py-2 pr-4">24</td>
                  <td className="py-2 font-mono">ES9121000418450200051332</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </KnowledgeLayout>
    </>
  );
}
