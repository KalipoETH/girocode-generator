import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode con Raiffeisen Svizzera – Guida 2026',
  description:
    'Scansiona un GiroCode con Raiffeisen Svizzera: apri lo scanner QR nell\'app Raiffeisen E-Banking, scansiona e conferma il bonifico.',
  keywords: 'girocode raiffeisen svizzera, raiffeisen girocode scan, sepa qr raiffeisen',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/it/raiffeisen-schweiz',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/raiffeisen-schweiz',
      de: 'https://www.girocodegenerator.com/raiffeisen-schweiz',
      en: 'https://www.girocodegenerator.com/en/raiffeisen-schweiz',
      fr: 'https://www.girocodegenerator.com/fr/raiffeisen-schweiz',
      es: 'https://www.girocodegenerator.com/es/raiffeisen-schweiz',
      it: 'https://www.girocodegenerator.com/it/raiffeisen-schweiz',
    },
  },
};

const otherBanks = [
  { href: '/it/ubs', label: 'UBS' },
  { href: '/it/postfinance', label: 'PostFinance' },
  { href: '/it/erste-bank', label: 'Erste Bank (George)' },
  { href: '/zuercher-kantonalbank', label: 'Zürcher Kantonalbank' },
  { href: '/credit-suisse-ubs', label: 'Credit Suisse (ora UBS)' },
  { href: '/cantonal-banks', label: 'Banche cantonali' },
];

const faqItems = [
  {
    question: 'L\'app Raiffeisen E-Banking supporta tutti i GiroCode?',
    answer:
      'Sì, l\'app Raiffeisen E-Banking riconosce tutti i codici QR SEPA conformi EPC. Mantieni l\'app aggiornata.',
  },
  {
    question: 'Dove trovo lo scanner QR nell\'app Raiffeisen?',
    answer:
      'Sotto "Pagamenti" – cerca l\'icona della fotocamera per aprire lo scanner.',
  },
  {
    question: 'Cosa fare se la scansione non funziona?',
    answer:
      'Aumenta la luminosità dello schermo, tieni la fotocamera a 15–30 cm e assicura buona illuminazione.',
  },
  {
    question: 'La scansione è sicura?',
    answer:
      'Sì. Vedi tutti i dati prima di confermare. La conferma richiede PhotoTAN o biometria.',
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

export default function RaiffeisenSchweizItPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
          <nav aria-label="Percorso di navigazione" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li><Link href="/it" className="text-sky-400 hover:text-sky-300">Home</Link></li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">Raiffeisen Svizzera</li>
            </ol>
          </nav>
          <header className="mb-10 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Compatibile con Raiffeisen E-Banking App (CH)
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              Scansiona GiroCode con Raiffeisen Svizzera
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              Guida passo-passo per pagamenti SEPA con Raiffeisen Svizzera – in meno di 30 secondi.
            </p>
          </header>
          <article className="prose prose-invert prose-lg max-w-none">
            <section aria-labelledby="steps">
              <h2 id="steps">Guida passo-passo</h2>
              <ol>
                <li><strong>Apri l&apos;app Raiffeisen E-Banking</strong> e accedi.</li>
                <li><strong>Tocca &quot;Pagamenti&quot;</strong> nel menu.</li>
                <li><strong>Tocca l&apos;icona QR</strong> (fotocamera).</li>
                <li><strong>Scansiona il GiroCode</strong>.</li>
                <li><strong>Verifica IBAN, importo e causale</strong>.</li>
                <li><strong>Conferma</strong> con PhotoTAN o biometria.</li>
              </ol>
            </section>
            <section aria-labelledby="browser-scanner" className="mt-10">
              <h2 id="browser-scanner">Scansiona nel browser</h2>
              <div className="not-prose mt-4">
                <Link href="/it/scanner" className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg" style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: '#ffffff' }}>
                  Scansiona GiroCode ora →
                </Link>
              </div>
            </section>
            <section aria-labelledby="faq" className="mt-10">
              <h2 id="faq">FAQ</h2>
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
                <Link key={bank.href} href={bank.href} className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3 text-sm font-medium text-[#9aa1b6] transition-all hover:text-[#e8eaf0]">
                  <span>GiroCode con {bank.label}</span>
                  <span className="text-[#22c55e]">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
