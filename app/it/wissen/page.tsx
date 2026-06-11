import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Informazioni sul GiroCode – Guide Complete 2026',
  description:
    'Tutto sul GiroCode: standard EPC, IBAN, app bancarie, scansione e fatture. Guide complete e gratuite.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/it/wissen',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen',
      de: 'https://www.girocodegenerator.com/wissen',
      en: 'https://www.girocodegenerator.com/en/wissen',
      fr: 'https://www.girocodegenerator.com/fr/wissen',
      es: 'https://www.girocodegenerator.com/es/wissen',
      it: 'https://www.girocodegenerator.com/it/wissen',
    },
  },
};

const knowledgePages = [
  {
    href: '/it/wissen/girocode',
    icon: '💳',
    title: "Cos'è un GiroCode?",
    description: 'Basi, funzionamento e vantaggi del codice SEPA-QR / EPC.',
  },
  {
    href: '/it/wissen/epc-standard',
    icon: '📋',
    title: 'Standard EPC',
    description: 'Struttura tecnica del payload EPC spiegata in modo semplice.',
  },
  {
    href: '/it/wissen/iban-bic',
    icon: '🏦',
    title: 'IBAN & BIC',
    description: 'Quali dati inserire per pagamenti SEPA senza errori.',
  },
  {
    href: '/it/wissen/betrag-und-zweck',
    icon: '💰',
    title: 'Importo & Causale',
    description: 'Come definire importo e causale per una conciliazione facile.',
  },
  {
    href: '/it/wissen/rechnung',
    icon: '📄',
    title: 'GiroCode in Fattura',
    description: 'Come integrare un GiroCode nelle fatture senza perdere informazioni legali.',
  },
  {
    href: '/it/wissen/banking-apps',
    icon: '📱',
    title: 'App Bancarie',
    description: 'Panoramica delle app bancarie che supportano i GiroCodes e consigli per la scansione.',
  },
  {
    href: '/it/wissen/scannen',
    icon: '📷',
    title: 'Come Scansionare',
    description: 'Guida passo-passo per scansionare GiroCodes con l\'app della tua banca.',
  },
];

export default function WissenOverviewPageIt() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-5xl px-4 py-10 md:py-12">
        <header className="mb-8 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Informazioni · GiroCode e SEPA-QR
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Tutto sul GiroCode
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Guide complete sul GiroCode, lo standard EPC e i pagamenti SEPA.
            </p>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {knowledgePages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group rounded-xl border border-slate-800 bg-slate-900/40 p-4 transition hover:border-sky-500/60 hover:bg-slate-900/80"
            >
              <span className="mb-2 block text-2xl" aria-hidden>
                {page.icon}
              </span>
              <h2 className="mb-1 text-base font-semibold text-slate-50 group-hover:text-sky-300">
                {page.title}
              </h2>
              <p className="text-sm text-slate-400">{page.description}</p>
              <span className="mt-3 inline-flex items-center text-xs font-medium text-sky-400">
                Scopri di più
                <span className="ml-1 text-[10px]">↗</span>
              </span>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
