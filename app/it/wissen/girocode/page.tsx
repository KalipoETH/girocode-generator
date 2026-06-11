import type { Metadata } from 'next';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Un GiroCode è lo stesso di un EPC QR code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sì. GiroCode è il nome tedesco per il QR code EPC. In Austria si chiama Stuzza QR. Tutti seguono lo stesso standard EPC069-12.',
      },
    },
    {
      '@type': 'Question',
      name: 'È sicuro creare un GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sì. Tutti i dati vengono elaborati esclusivamente localmente nel tuo browser. Il tuo IBAN, importo e causale non vengono mai trasmessi ai nostri server.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quali dati contiene un GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un GiroCode contiene: nome del beneficiario (max 70 car.), IBAN, BIC opzionale, importo in EUR opzionale, causale opzionale (max 140 car.).',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto tempo è valido un GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un GiroCode non ha scadenza. È valido finché i dati bancari contenuti (IBAN, nome) sono ancora attuali.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso creare un GiroCode senza importo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Sì, l'importo è opzionale. Senza importo, il pagante può inserire la propria cifra – ideale per donazioni o prezzi variabili.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Cos'è un GiroCode? – Spiegazione Semplice + Crea Gratis",
  description:
    'GiroCode = QR code SEPA per bonifici. Cos\'è, come funziona e come crearne uno gratis in pochi secondi. PDF fattura incluso.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/it/wissen/girocode',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/girocode',
      de: 'https://www.girocodegenerator.com/wissen/girocode',
      en: 'https://www.girocodegenerator.com/en/wissen/girocode',
      fr: 'https://www.girocodegenerator.com/fr/wissen/girocode',
      es: 'https://www.girocodegenerator.com/es/wissen/girocode',
      it: 'https://www.girocodegenerator.com/it/wissen/girocode',
    },
  },
};

export default function WissenGirocodePageIt() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <KnowledgeLayout
        breadcrumbCurrent="Cos'è un GiroCode?"
        badge="Basi · GiroCode / SEPA-QR"
        title="Cos'è un GiroCode? – Tutto quello che devi sapere"
        lead="Un GiroCode è un QR code standardizzato per i bonifici SEPA secondo lo standard EPC069-12 del European Payments Council. Contiene tutti i dati necessari per un bonifico – IBAN, importo e causale."
        locale="it"
        shortAnswer="Un GiroCode è un QR code standardizzato per i bonifici SEPA secondo lo standard EPC069-12 del European Payments Council. Contiene tutti i dati necessari per un bonifico – IBAN, importo e causale – e permette agli utenti di app bancarie di avviare un pagamento scansionando semplicemente il codice. Freelance, associazioni e aziende usano i GiroCodes sulle fatture per essere pagati più velocemente ed eliminare gli errori di digitazione."
        statsData={[
          { value: '2018', label: 'Introduzione in Germania' },
          { value: '36', label: 'Paesi SEPA supportati' },
          { value: '10 sec.', label: 'Tempo medio di scansione' },
          { value: 'EPC069-12', label: 'Nome documento standard ufficiale' },
        ]}
        relatedArticles={[
          { href: '/it/wissen/epc-standard', label: 'Standard EPC & SEPA-QR – Struttura tecnica' },
          { href: '/it/wissen/iban-bic', label: 'IBAN & BIC per GiroCode – Guida completa' },
          { href: '/it/wissen/betrag-und-zweck', label: 'Importo e causale nel GiroCode' },
          { href: '/it/wissen/rechnung', label: 'GiroCode in fattura – La guida completa' },
          { href: '/it/wissen/banking-apps', label: 'App bancarie compatibili con GiroCode' },
          { href: '/it/wissen/scannen', label: 'Come scansionare un GiroCode' },
        ]}
      >
        <section aria-labelledby="come-funziona">
          <h2 id="come-funziona">Come funziona un GiroCode?</h2>
          <p>
            Un <strong>GiroCode</strong> codifica in un QR code tutti i dati necessari per un
            bonifico SEPA. Il pagatore apre la propria app bancaria, attiva lo scanner QR e
            inquadra il codice. L&apos;app legge automaticamente nome beneficiario, IBAN, importo
            e causale – il pagatore verifica i dati e conferma con TAN o biometria.
          </p>
          <p>
            Il processo si riduce a quattro passi: <strong>generazione</strong> (inserimento
            dati nel generatore), <strong>distribuzione</strong> (stampa su fattura o invio
            digitale), <strong>scansione</strong> (con app bancaria) e <strong>conferma</strong>{' '}
            del pagamento. Tutto avviene senza digitazione manuale dell&apos;IBAN.
          </p>
          <ol>
            <li>Il beneficiario genera il GiroCode con i dati di pagamento.</li>
            <li>Il codice viene stampato sulla fattura o inviato digitalmente.</li>
            <li>Il cliente scansiona il QR con l&apos;app bancaria.</li>
            <li>Il cliente verifica e conferma il bonifico in pochi secondi.</li>
          </ol>
        </section>

        <section aria-labelledby="cosa-contiene" className="mt-10">
          <h2 id="cosa-contiene">Cosa contiene un GiroCode?</h2>
          <p>
            Secondo lo standard EPC069-12, un payload GiroCode valido contiene questi campi
            (strutturati riga per riga):
          </p>
          <ul>
            <li>
              <strong>Nome beneficiario</strong> – massimo 70 caratteri
            </li>
            <li>
              <strong>IBAN</strong> – obbligatorio, senza spazi
            </li>
            <li>
              <strong>BIC</strong> – opzionale dal 2016
            </li>
            <li>
              <strong>Importo</strong> – opzionale, formato <code>EUR49.90</code>
            </li>
            <li>
              <strong>Causale</strong> – opzionale, massimo 140 caratteri
            </li>
          </ul>
          <p>
            Il GiroCode non contiene dati del pagatore né informazioni di autenticazione. Nessun
            pagamento può essere eseguito senza conferma attiva nell&apos;app bancaria.
          </p>
        </section>

        <section aria-labelledby="confronto" className="mt-10">
          <h2 id="confronto">GiroCode vs altri metodi di pagamento</h2>
          <p>Confronto tra GiroCode, PayPal e addebito diretto SEPA:</p>
          <div className="not-prose my-6 overflow-x-auto rounded-lg border border-slate-700">
            <table className="compare-table w-full text-sm">
              <thead>
                <tr>
                  <th className="px-4 py-3">Caratteristica</th>
                  <th className="px-4 py-3">GiroCode</th>
                  <th className="px-4 py-3">PayPal</th>
                  <th className="px-4 py-3">Addebito Diretto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-200">Costo beneficiario</td>
                  <td className="px-4 py-3 font-semibold text-emerald-400">Gratuito</td>
                  <td className="px-4 py-3 text-red-400">1,2-3,4% + fisso</td>
                  <td className="px-4 py-3 text-slate-400">Quasi gratuito</td>
                </tr>
                <tr className="bg-slate-800/30">
                  <td className="px-4 py-3 font-medium text-slate-200">Privacy</td>
                  <td className="px-4 py-3 font-semibold text-emerald-400">Conforme GDPR</td>
                  <td className="px-4 py-3 text-red-400">Azienda USA</td>
                  <td className="px-4 py-3 text-emerald-400">Conforme GDPR</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-200">Diffusione IT</td>
                  <td className="px-4 py-3 font-semibold text-emerald-400">Tutte banche SEPA</td>
                  <td className="px-4 py-3 text-slate-400">Molto diffuso</td>
                  <td className="px-4 py-3 text-slate-400">Universale</td>
                </tr>
                <tr className="bg-slate-800/30">
                  <td className="px-4 py-3 font-medium text-slate-200">Semplicità</td>
                  <td className="px-4 py-3 font-semibold text-emerald-400">Scansione QR</td>
                  <td className="px-4 py-3 text-slate-400">App/Web</td>
                  <td className="px-4 py-3 text-slate-400">Mandato necessario</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-200">Prerequisito</td>
                  <td className="px-4 py-3 font-semibold text-emerald-400">Conto SEPA</td>
                  <td className="px-4 py-3 text-red-400">Conto PayPal</td>
                  <td className="px-4 py-3 text-slate-400">Mandato SEPA</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Il GiroCode si distingue per costi zero, privacy conforme al GDPR e semplicità per
            il pagatore – senza account aggiuntivi o intermediari.
          </p>
        </section>
      </KnowledgeLayout>
    </>
  );
}
