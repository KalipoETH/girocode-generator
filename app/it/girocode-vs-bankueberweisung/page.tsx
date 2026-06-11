import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode vs Bonifico Manuale – Risparmia Tempo ed Errori',
  description:
    'GiroCode o inserimento IBAN manuale? Confronto tra tempo, tasso di errore e facilità d\'uso.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/it/girocode-vs-bankueberweisung',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/girocode-vs-bankueberweisung',
      de: 'https://www.girocodegenerator.com/girocode-vs-bankueberweisung',
      en: 'https://www.girocodegenerator.com/en/girocode-vs-bankueberweisung',
      fr: 'https://www.girocodegenerator.com/fr/girocode-vs-bankueberweisung',
      es: 'https://www.girocodegenerator.com/es/girocode-vs-bankueberweisung',
      it: 'https://www.girocodegenerator.com/it/girocode-vs-bankueberweisung',
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  articleType: 'ComparisonArticle',
  headline: 'GiroCode vs. bonifico manuale – Risparmia tempo ed errori',
  description:
    'GiroCode o inserimento IBAN manuale? Confronto tra tempo, tasso di errore e facilità d\'uso.',
  author: { '@type': 'Person', name: 'Kaleb Jahnke' },
  publisher: {
    '@type': 'Organization',
    name: 'GiroCode Generator',
    url: 'https://www.girocodegenerator.com',
  },
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.girocodegenerator.com/it/girocode-vs-bankueberweisung',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quanto tempo risparmio con un GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'L\'inserimento manuale dell\'IBAN richiede in media 3-5 minuti. Con un GiroCode il bonifico richiede meno di 30 secondi – fino a 10 volte più veloce.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cosa succede se digito male l\'IBAN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un IBAN errato può far andare il bonifico al destinatario sbagliato o farlo tornare indietro. La risoluzione costa tempo e spesso commissioni bancarie di 5-15 €.',
      },
    },
    {
      '@type': 'Question',
      name: 'Il GiroCode funziona anche senza importo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sì. Puoi creare un GiroCode senza importo fisso – il pagante inserisce l\'importo nell\'app bancaria. IBAN e causale vengono comunque trasferiti automaticamente.',
      },
    },
  ],
};

export default function GirocodeVsBankueberweisungPageIt() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
          <nav aria-label="Percorso di navigazione" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li><Link href="/it" className="text-sky-400 hover:text-sky-300">Home</Link></li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">GiroCode vs. bonifico manuale</li>
            </ol>
          </nav>
          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Confronto · Metodi di pagamento 2026
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode vs. Bonifico Manuale: Perché il QR Vince
            </h1>
          </header>
          <div className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3" role="note">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">💡 Risposta breve</p>
            <p className="text-sm leading-relaxed text-slate-300">
              L&apos;inserimento manuale dell&apos;IBAN richiede in media 3-5 minuti e ha un tasso di errore superiore all&apos;1% per IBAN italiani di 27 caratteri. Con un GiroCode il bonifico richiede meno di 30 secondi, gli errori di digitazione sono impossibili.
            </p>
          </div>
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { value: '3-5 min.', label: 'Inserimento IBAN manuale' },
              { value: '< 30 sec.', label: 'Con GiroCode' },
              { value: '> 1%', label: 'Tasso di errore manuale' },
              { value: '0%', label: 'Tasso di errore con GiroCode' },
            ].map((stat, i) => (
              <div key={i} className="rounded-lg border border-[#1f2431] bg-[#0f1117] p-4 text-center">
                <p className="text-2xl font-bold text-[#22c55e]">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-[#8b90a0]">{stat.label}</p>
              </div>
            ))}
          </div>
          <article className="prose prose-invert prose-lg max-w-none">
            <div className="not-prose my-8">
              <Link
                href="/it"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: '#ffffff' }}
              >
                Genera GiroCode gratis →
              </Link>
            </div>
            <h2>FAQ</h2>
            <div className="space-y-6">
              {faqJsonLd.mainEntity.map((item, i) => (
                <div key={i}>
                  <h3 className="text-sm font-semibold text-slate-50">{item.name}</h3>
                  <p className="text-sm text-slate-300">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
            <div className="not-prose mt-10 rounded-2xl border border-[#1f2431] bg-[#0f1117] p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xl" aria-hidden>📚</span>
                <h2 className="text-base font-bold text-[#e8eaf0]">Altri confronti</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { href: '/it/girocode-vs-paypal', label: 'GiroCode vs. PayPal' },
                  { href: '/it/girocode-vs-lastschrift', label: 'GiroCode vs. addebito diretto SEPA' },
                  { href: '/it/wissen/girocode', label: 'Cos\'è un GiroCode?' },
                  { href: '/it/wissen/iban-bic', label: 'IBAN & BIC spiegati' },
                ].map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3.5 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/30 hover:text-[#e8eaf0] hover:-translate-y-0.5"
                  >
                    <span className="leading-snug">{a.label}</span>
                    <span className="ml-3 shrink-0 text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
