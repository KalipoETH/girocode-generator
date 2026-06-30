import type { Metadata } from 'next';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Cos'è lo standard EPC069-12?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "EPC069-12 è il documento ufficiale del European Payments Council che definisce la struttura tecnica dei codici QR SEPA per l'iniziazione di bonifici SCT. Un payload EPC valido consta di 11 righe: Service Tag (BCD), versione, codifica UTF-8, identificazione (SCT), BIC opzionale, nome beneficiario (max. 70 caratteri), IBAN, importo in formato EUR49.90 e causale (max. 140 caratteri).",
      },
    },
    {
      '@type': 'Question',
      name: 'Qual è la differenza tra versione 001 e 002?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La versione 001 dello standard EPC richiedeva il BIC obbligatoriamente. La versione 002, introdotta dopo la migrazione SEPA del 2016, rende il BIC opzionale: la riga può restare vuota. Oggi si raccomanda sempre la versione 002 per massima compatibilità.',
      },
    },
    {
      '@type': 'Question',
      name: "Cosa significa 'BCD' nel payload EPC?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "BCD è il Service Tag fisso nella prima riga del payload EPC. Identifica il codice QR come bonifico SEPA (SEPA Credit Transfer). Il valore deve essere esattamente 'BCD' – nessun altro valore è valido. Le app bancarie lo riconoscono per distinguere un GiroCode da un QR generico.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'Standard EPC (EPC069-12) – Struttura QR SEPA 2026',
  description:
    'Lo standard EPC per GiroCode: struttura del payload riga per riga, versioni 001/002, correzione errori e significato di BCD. Guida tecnica completa.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/it/wissen/epc-standard',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/epc-standard',
      de: 'https://www.girocodegenerator.com/wissen/epc-standard',
      en: 'https://www.girocodegenerator.com/en/wissen/epc-standard',
      fr: 'https://www.girocodegenerator.com/fr/wissen/epc-standard',
      es: 'https://www.girocodegenerator.com/es/wissen/epc-standard',
      it: 'https://www.girocodegenerator.com/it/wissen/epc-standard',
    },
  },
};

export default function WissenEpcStandardPageIt() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <KnowledgeLayout
        breadcrumbCurrent="Standard EPC & SEPA-QR"
        badge="Tecnica · Standard EPC"
        title="Standard EPC & SEPA-QR – Struttura tecnica spiegata"
        lead="Lo standard EPC (documento EPC069-12) definisce la struttura tecnica dei codici QR SEPA. Un payload EPC valido consta di 11 righe: Service Tag (BCD), versione, codifica UTF-8, identificazione (SCT), BIC opzionale, nome beneficiario (max. 70 caratteri), IBAN, importo in formato EUR49.90 e causale (max. 140 caratteri)."
        relatedArticles={[
          { href: '/it/wissen/girocode', label: "Cos'è un GiroCode? – Tutto quello che devi sapere" },
          { href: '/it/wissen/iban-bic', label: 'IBAN & BIC per GiroCode – Guida completa' },
          { href: '/it/wissen/betrag-und-zweck', label: 'Importo e causale nel GiroCode' },
          { href: '/it/wissen/rechnung', label: 'GiroCode in fattura – La guida completa' },
          { href: '/it/wissen/banking-apps', label: 'App bancarie compatibili con GiroCode' },
        ]}
        locale="it"
        lastUpdated="2026-06-01"
        shortAnswer="Lo standard EPC (documento EPC069-12) definisce la struttura tecnica dei codici QR SEPA. Un payload EPC valido consta di 11 righe: Service Tag (BCD), versione, codifica UTF-8, identificazione (SCT), BIC opzionale, nome beneficiario (max. 70 caratteri), IBAN, importo in formato EUR49.90 e causale (max. 140 caratteri)."
        statsData={[
          { value: '11', label: 'Righe nel payload EPC' },
          { value: '70', label: 'Max. caratteri nome beneficiario' },
          { value: '140', label: 'Max. caratteri causale' },
          { value: '15%', label: 'Correzione errori livello M' },
        ]}
      >
        <section aria-labelledby="cos-e-epc">
          <h2 id="cos-e-epc">Cos&apos;è lo standard EPC?</h2>
          <p>
            Lo <strong>standard EPC</strong> per i codici QR di pagamento è uno standard tecnico
            pubblicato e mantenuto dal <strong>European Payments Council (EPC)</strong>, l&apos;organismo
            che coordina gli schemi di pagamento SEPA in Europa. Il documento ufficiale si chiama{' '}
            <em>
              «EPC069-12 Quick Response Code – Guidelines to Enable the Data Capture for the
              Initiation of a SCT»
            </em>
            , dove SCT sta per SEPA Credit Transfer (bonifico SEPA).
          </p>
          <p>
            Prima di questo standard, ogni banca o regione poteva usare formati QR diversi, con
            incompatibilità tra app. L&apos;EPC ha definito un formato unico affinché qualsiasi
            codice QR generato da un emittente di fatture possa essere letto da qualsiasi app
            bancaria compatibile nella zona SEPA.
          </p>
        </section>

        <section aria-labelledby="struttura-payload" className="mt-10">
          <h2 id="struttura-payload">Struttura tecnica del payload EPC</h2>
          <p>
            Il contenuto (payload) di un GiroCode è un blocco di testo strutturato in righe, ognuna
            con un significato specifico e un ordine fisso. Ecco un esempio pratico:
          </p>

          <div className="not-prose mt-6 rounded-xl border border-slate-700 bg-slate-900 p-5">
            <pre className="overflow-x-auto text-sm text-emerald-400">
{`BCD
002
1
SCT
BCITITMMXXX
Rossi S.r.l.
IT60X0542811101000000123456
EUR199.99

Fattura FA-2024-015`}
            </pre>
          </div>

          <h3 className="mt-6">Riga 1: BCD (Service Tag)</h3>
          <p>
            <strong>Contenuto fisso:</strong> <code>BCD</code>
            <br />
            Il Service Tag identifica questo codice QR come GiroCode/bonifico SEPA. Deve essere
            esattamente <code>BCD</code>. Le app bancarie lo riconoscono per avviare un pagamento
            SEPA e non trattarlo come QR generico.
          </p>

          <h3>Riga 2: Versione</h3>
          <p>
            <strong>Valori possibili:</strong> <code>001</code> o <code>002</code>
            <br />
            Indica la versione dello standard EPC. La <code>001</code> richiedeva il BIC
            obbligatorio; la <code>002</code> lo rende opzionale. Oggi si usa sempre{' '}
            <code>002</code>.
          </p>

          <h3>Riga 3: Codifica caratteri</h3>
          <p>
            <strong>Valore consigliato:</strong> <code>1</code> (UTF-8)
            <br />
            UTF-8 è la codifica raccomandata per caratteri accentati e speciali europei.
          </p>

          <h3>Riga 4: Identificazione funzione</h3>
          <p>
            <strong>Contenuto fisso:</strong> <code>SCT</code>
            <br />
            SCT significa «SEPA Credit Transfer». È l&apos;unico valore definito per i GiroCode.
          </p>

          <h3>Riga 5: BIC (opzionale in versione 002)</h3>
          <p>
            8 o 11 caratteri alfanumerici, oppure vuoto. Dal 2016 i banche SEPA possono derivare
            il BIC dall&apos;IBAN.
          </p>

          <h3>Riga 6: Nome beneficiario (max. 70 caratteri)</h3>
          <p>
            Nome del beneficiario come risulta sul conto bancario. Campo obbligatorio.
          </p>

          <h3>Riga 7: IBAN beneficiario</h3>
          <p>
            IBAN standard (fino a 34 caratteri). Per l&apos;Italia: 27 caratteri, es.{' '}
            <code>IT60X0542811101000000123456</code>.
          </p>

          <h3>Riga 8: Importo</h3>
          <p>
            Formato <code>EUR</code> seguito dall&apos;importo con punto decimale, es.{' '}
            <code>EUR49.90</code>. Opzionale: se vuoto, il pagatore inserisce l&apos;importo
            manualmente.
          </p>

          <h3>Righe 9–10: Purpose e riferimento strutturato</h3>
          <p>
            Generalmente vuote nella fatturazione commerciale italiana. La causale libera va nella
            riga 11.
          </p>

          <h3>Riga 11: Causale (max. 140 caratteri)</h3>
          <p>
            Testo libero visibile nell&apos;estratto conto. Si raccomanda di includere sempre il
            numero di fattura.
          </p>
        </section>

        <section aria-labelledby="versioni-epc" className="mt-10">
          <h2 id="versioni-epc">Versioni EPC a confronto: 001 vs 002</h2>

          <div className="not-prose overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-2 pr-4 font-semibold text-slate-200">Caratteristica</th>
                  <th className="py-2 pr-4 font-semibold text-sky-300">Versione 001</th>
                  <th className="py-2 font-semibold text-sky-300">Versione 002</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="py-2 pr-4">BIC richiesto</td>
                  <td className="py-2 pr-4 text-red-400">Obbligatorio</td>
                  <td className="py-2 text-emerald-400">Opzionale</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Compatibilità attuale</td>
                  <td className="py-2 pr-4 text-yellow-400">Ridotta</td>
                  <td className="py-2 text-emerald-400">Ampia</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Raccomandazione</td>
                  <td className="py-2 pr-4 text-slate-500">Non raccomandata</td>
                  <td className="py-2 text-emerald-400">Raccomandata</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Pagamenti SEPA senza BIC</td>
                  <td className="py-2 pr-4 text-red-400">Non supportato</td>
                  <td className="py-2 text-emerald-400">Supportato</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            La versione 001 è obsoleta. Tutti i generatori moderni, incluso il nostro, producono
            codici versione 002 per impostazione predefinita.
          </p>
        </section>

        <section aria-labelledby="correzione-errori" className="mt-10">
          <h2 id="correzione-errori">Correzione errori e qualità del codice QR</h2>
          <p>
            Lo standard EPC specifica il <strong>livello di correzione errori M</strong>, che
            recupera fino al 15% dei dati danneggiati. È un equilibrio tra robustezza su fatture
            stampate e dimensioni compatte del codice (minimo consigliato: 2 × 2 cm).
          </p>
        </section>
      </KnowledgeLayout>
    </>
  );
}
