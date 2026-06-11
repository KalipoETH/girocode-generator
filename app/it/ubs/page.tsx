import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode con UBS – Scansiona QR SEPA 2026',
  description:
    'Scansiona un GiroCode con l\'app UBS Mobile Banking. Guida passo-passo per pagamenti SEPA dalla Svizzera.',
  keywords: 'girocode ubs, ubs girocode scan, ubs qr code, sepa qr ubs',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/it/ubs',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/ubs',
      de: 'https://www.girocodegenerator.com/ubs',
      en: 'https://www.girocodegenerator.com/en/ubs',
      fr: 'https://www.girocodegenerator.com/fr/ubs',
      es: 'https://www.girocodegenerator.com/es/ubs',
      it: 'https://www.girocodegenerator.com/it/ubs',
    },
  },
};

const otherBanks = [
  { href: '/it/raiffeisen-schweiz', label: 'Raiffeisen Svizzera' },
  { href: '/it/postfinance', label: 'PostFinance' },
  { href: '/it/erste-bank', label: 'Erste Bank (George)' },
  { href: '/zuercher-kantonalbank', label: 'Zürcher Kantonalbank' },
  { href: '/credit-suisse-ubs', label: 'Credit Suisse (ora UBS)' },
  { href: '/cantonal-banks', label: 'Banche cantonali' },
];

const faqItems = [
  {
    question: 'L\'app UBS Mobile Banking supporta tutti i GiroCode?',
    answer:
      'Sì, l\'app UBS Mobile Banking riconosce tutti i codici QR SEPA conformi allo standard EPC (GiroCode). Assicurati che l\'app sia aggiornata.',
  },
  {
    question: 'Dove trovo lo scanner QR nell\'app UBS Mobile Banking?',
    answer:
      'Lo trovi sotto "Pagamenti" – cerca l\'icona della fotocamera accanto a "Bonifico".',
  },
  {
    question: 'Cosa fare se la scansione non funziona?',
    answer:
      'Aumenta la luminosità dello schermo per i codici digitali. Tieni la fotocamera a 15–30 cm dal codice con buona illuminazione.',
  },
  {
    question: 'La scansione del GiroCode è sicura?',
    answer:
      'Sì. Vedi sempre tutti i dati del bonifico prima di confermare. La conferma richiede UBS Access Card o biometria.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function UbsItPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
          <nav aria-label="Percorso di navigazione" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li><Link href="/it" className="text-sky-400 hover:text-sky-300">Home</Link></li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">UBS</li>
            </ol>
          </nav>
          <header className="mb-10 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Compatibile con UBS Mobile Banking
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              Scansiona GiroCode con UBS
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              Come usare i GiroCode (codici QR SEPA) con UBS – passo dopo passo. Fatto in meno di 30 secondi.
            </p>
          </header>
          <article className="prose prose-invert prose-lg max-w-none">
            <section aria-labelledby="steps">
              <h2 id="steps">Guida passo-passo</h2>
              <ol>
                <li><strong>Apri l&apos;app UBS Mobile Banking</strong> e accedi con PIN, impronta o Face ID.</li>
                <li><strong>Tocca &quot;Pagamenti&quot;</strong> nel menu.</li>
                <li><strong>Tocca &quot;Bonifico&quot; → icona QR</strong>. Concedi l&apos;accesso alla fotocamera al primo utilizzo.</li>
                <li><strong>Scansiona il GiroCode</strong> – tieni la fotocamera a 15–30 cm dal codice.</li>
                <li><strong>Verifica i dati</strong> (IBAN, importo, causale) – controlla sempre prima di confermare.</li>
                <li><strong>Conferma con autenticazione</strong> tramite UBS Access Card o biometria. Fatto.</li>
              </ol>
              <p>
                <strong>Nota:</strong> UBS è adatta per i pagamenti SEPA in EUR dalla Svizzera verso i paesi SEPA. La Svizzera usa la QR-fattura per i pagamenti interni in CHF.
              </p>
            </section>
            <section aria-labelledby="browser-scanner" className="mt-10">
              <h2 id="browser-scanner">Scansiona GiroCode nel browser</h2>
              <p>
                Il nostro scanner gratuito legge i GiroCode direttamente nel browser – nessuna app, 100% locale.
              </p>
              <div className="not-prose mt-4">
                <Link
                  href="/it/scanner"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: '#ffffff' }}
                >
                  Scansiona GiroCode ora →
                </Link>
              </div>
            </section>
            <section aria-labelledby="create" className="mt-10">
              <h2 id="create">Crea il tuo GiroCode</h2>
              <p>
                Generatore GiroCode gratuito – conforme EPC, senza registrazione, elaborazione locale nel browser.
              </p>
              <div className="not-prose mt-4">
                <Link
                  href="/it"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: '#ffffff' }}
                >
                  Genera GiroCode gratis →
                </Link>
              </div>
            </section>
            <section aria-labelledby="faq" className="mt-10">
              <h2 id="faq">FAQ – GiroCode con UBS</h2>
              <div className="not-prose space-y-4">
                {faqItems.map((item) => (
                  <div key={item.question} className="rounded-xl border border-slate-700 bg-slate-900/60 px-5 py-4">
                    <h3 className="mb-2 text-sm font-bold text-[#e8eaf0]">{item.question}</h3>
                    <p className="text-sm text-slate-400">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </article>
          <div className="mt-12 border-t border-slate-800 pt-8">
            <h2 className="mb-4 text-base font-bold text-[#e8eaf0]">Altre app bancarie</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {otherBanks.map((bank) => (
                <Link
                  key={bank.href}
                  href={bank.href}
                  className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:text-[#e8eaf0] hover:-translate-y-0.5"
                >
                  <span>GiroCode con {bank.label}</span>
                  <span className="ml-2 text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
