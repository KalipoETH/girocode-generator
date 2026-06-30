import type { Metadata } from 'next';
import Link from 'next/link';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Le app bancarie italiane supportano i GiroCodes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sì. Intesa Sanpaolo, UniCredit, Banco BPM, Fineco, ING Italia e molte altre app bancarie italiane supportano i GiroCodes (QR SEPA). Lo scanner si trova di solito nella sezione Bonifico o Pagamenti.',
      },
    },
    {
      '@type': 'Question',
      name: "Come uso lo scanner QR nell'app di Intesa Sanpaolo?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Apri l'app Intesa Sanpaolo Mobile, vai su 'Bonifico' e tocca l'icona QR. Inquadra il GiroCode, verifica IBAN, importo e causale, poi conferma con TAN o biometria.",
      },
    },
    {
      '@type': 'Question',
      name: "Cosa fare se l'app non riconosce il GiroCode?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Aggiorna l'app bancaria, migliora illuminazione e distanza (15-30 cm), verifica che il codice sia almeno 2×2 cm. In alternativa inserisci manualmente IBAN, importo e causale dalla fattura.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'App bancarie compatibili GiroCode 2026 – Lista completa',
  description:
    'Quali app bancarie italiane scansionano GiroCode? Intesa ✅ UniCredit ✅ Fineco ✅ Banco BPM ✅ ING ✅ e altre. Guida passo-passo per ogni app.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/it/wissen/banking-apps',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/banking-apps',
      de: 'https://www.girocodegenerator.com/wissen/banking-apps',
      en: 'https://www.girocodegenerator.com/en/wissen/banking-apps',
      fr: 'https://www.girocodegenerator.com/fr/wissen/banking-apps',
      es: 'https://www.girocodegenerator.com/es/wissen/banking-apps',
      it: 'https://www.girocodegenerator.com/it/wissen/banking-apps',
    },
  },
};

const italianBanks = [
  { name: 'Intesa Sanpaolo', app: 'Intesa Sanpaolo Mobile' },
  { name: 'UniCredit', app: 'UniCredit Mobile Banking' },
  { name: 'Banco BPM', app: 'Webank / Banco BPM app' },
  { name: 'Fineco', app: 'FinecoBank App' },
  { name: 'ING Italia', app: 'ING Italia App' },
];

export default function WissenBankingAppsPageIt() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <KnowledgeLayout
        breadcrumbCurrent="App bancarie con GiroCode"
        badge="Pratica · App bancarie"
        title="App bancarie compatibili con GiroCode – Panoramica 2026"
        lead="Le principali app bancarie italiane supportano i GiroCode: Intesa Sanpaolo, UniCredit, Banco BPM, Fineco e ING Italia. Lo scanner QR si trova sotto 'Bonifico'. Il processo completo richiede meno di 30 secondi."
        relatedArticles={[
          { href: '/it/wissen/scannen', label: 'Come scansionare un GiroCode – Guida iPhone e Android' },
          { href: '/it/wissen/girocode', label: "Cos'è un GiroCode? – Tutto quello che devi sapere" },
          { href: '/it/wissen/rechnung', label: 'GiroCode in fattura – La guida completa' },
          { href: '/it/wissen/epc-standard', label: 'Standard EPC & SEPA-QR – Struttura tecnica' },
          { href: '/it/wissen/iban-bic', label: 'IBAN & BIC per GiroCode' },
        ]}
        locale="it"
        lastUpdated="2026-06-01"
        shortAnswer="Le principali app bancarie italiane supportano i GiroCode: Intesa Sanpaolo, UniCredit, Banco BPM, Fineco e ING Italia. Lo scanner QR si trova sotto 'Bonifico'. Il processo completo richiede meno di 30 secondi."
        statsData={[
          { value: '12+', label: 'App bancarie italiane compatibili' },
          { value: '30 sec.', label: 'Dalla scansione alla conferma' },
          { value: '2016', label: 'Supporto generalizzato delle app' },
          { value: '100%', label: 'Gratuito per gli utenti' },
        ]}
      >
        <section aria-labelledby="apps-compatibili">
          <h2 id="apps-compatibili">Quali app bancarie supportano i GiroCode?</h2>
          <p>
            La maggior parte delle app bancarie dei grandi istituti italiani e della zona SEPA
            supporta la lettura dei GiroCode (SEPA-QR). La funzione si trova di solito in
            «Bonifico» o «Pagamenti», con icona fotocamera o QR.
          </p>
        </section>

        <section aria-labelledby="banche-italiane" className="not-prose mt-10">
          <h2
            id="banche-italiane"
            className="mb-4 text-xl font-bold text-[#e8eaf0] md:text-2xl"
          >
            Banche Italiane
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {italianBanks.map((bank) => (
              <div
                key={bank.name}
                className="rounded-xl border border-[#1f2431] bg-[#121318] p-5"
              >
                <h3 className="text-base font-bold text-[#e8eaf0]">{bank.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{bank.app}</p>
                <p className="mt-2 text-xs text-emerald-400">✅ Supporto GiroCode / QR EPC</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="banche-tedesche" className="mt-10">
          <h2 id="banche-tedesche">Banche Tedesche</h2>
          <p>
            Anche le banche tedesche offrono un supporto quasi universale per i GiroCode:
            Sparkasse, Volksbank, ING, DKB, Commerzbank, Deutsche Bank e molte altre. Per una
            panoramica dettagliata delle app italiane e del QR EPC in Italia, consulta la nostra{' '}
            <Link
              href="/it/banche-italiane-qr-epc"
              className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
            >
              guida alle banche italiane con QR EPC
            </Link>
            .
          </p>
        </section>

        <section aria-labelledby="banche-austriache" className="mt-10">
          <h2 id="banche-austriache">Banche Austriache</h2>
          <p>
            In Austria i GiroCode (formato Stuzza-QR, compatibile EPC) sono ampiamente supportati.
            Guide dedicate:
          </p>
          <ul>
            <li>
              <Link
                href="/it/erste-bank"
                className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
              >
                GiroCode con Erste Bank / George
              </Link>
            </li>
            <li>
              <Link
                href="/it/raiffeisen-schweiz"
                className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
              >
                GiroCode con Raiffeisen
              </Link>
            </li>
          </ul>
        </section>

        <section aria-labelledby="passo-passo" className="mt-10">
          <h2 id="passo-passo">Passo-passo: scansionare un GiroCode</h2>
          <ol>
            <li>
              <strong>Apri l&apos;app bancaria</strong> e vai alla sezione Bonifico.
            </li>
            <li>
              <strong>Cerca l&apos;icona fotocamera o QR</strong> nel modulo di bonifico.
            </li>
            <li>
              <strong>Autorizza l&apos;accesso alla fotocamera</strong> se richiesto.
            </li>
            <li>
              <strong>Inquadra il GiroCode</strong> sulla fattura o sullo schermo.
            </li>
            <li>
              <strong>Verifica i dati</strong> caricati: beneficiario, IBAN, importo, causale.
            </li>
            <li>
              <strong>Conferma il bonifico</strong> con PIN, impronta o Face ID.
            </li>
          </ol>
        </section>
      </KnowledgeLayout>
    </>
  );
}
