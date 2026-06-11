import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode vs Addebito Diretto SEPA – Differenze 2026',
  description:
    'GiroCode o addebito diretto SEPA? Quando usare quale metodo. Con tabella comparativa.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/it/girocode-vs-lastschrift',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/girocode-vs-lastschrift',
      de: 'https://www.girocodegenerator.com/girocode-vs-lastschrift',
      en: 'https://www.girocodegenerator.com/en/girocode-vs-lastschrift',
      fr: 'https://www.girocodegenerator.com/fr/girocode-vs-lastschrift',
      es: 'https://www.girocodegenerator.com/es/girocode-vs-lastschrift',
      it: 'https://www.girocodegenerator.com/it/girocode-vs-lastschrift',
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  articleType: 'ComparisonArticle',
  headline: 'GiroCode vs. addebito diretto SEPA – Le differenze',
  description: 'GiroCode o addebito diretto SEPA? Quando usare quale metodo.',
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
    '@id': 'https://www.girocodegenerator.com/it/girocode-vs-lastschrift',
  },
};

export default function GirocodeVsLastschriftPageIt() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
          <nav aria-label="Percorso di navigazione" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li><Link href="/it" className="text-sky-400 hover:text-sky-300">Home</Link></li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">GiroCode vs. addebito diretto SEPA</li>
            </ol>
          </nav>
          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Confronto · Metodi di pagamento 2026
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode vs. Addebito Diretto SEPA: Le Differenze
            </h1>
          </header>
          <div className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3" role="note">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">💡 Risposta breve</p>
            <p className="text-sm leading-relaxed text-slate-300">
              Il GiroCode è un invito al pagamento – il pagante effettua attivamente il bonifico. Un addebito diretto SEPA è un&apos;autorizzazione di addebito – il beneficiario preleva il denaro. Il GiroCode non richiede mandato ed è immediatamente utilizzabile, mentre l&apos;addebito diretto richiede un mandato SEPA firmato.
            </p>
          </div>
          <article className="prose prose-invert prose-lg max-w-none">
            <h2>Tabella comparativa</h2>
            <div className="not-prose my-6 overflow-x-auto rounded-lg border border-slate-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 text-slate-300">
                    <th className="px-4 py-3 text-left font-medium">Criterio</th>
                    <th className="px-4 py-3 text-left font-medium text-[#22c55e]">GiroCode</th>
                    <th className="px-4 py-3 text-left font-medium text-slate-400">Addebito Diretto SEPA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50 text-slate-300">
                  {[
                    ['Iniziativa pagamento', 'Pagante (attivo)', 'Beneficiario (passivo)'],
                    ['Mandato necessario', 'No', 'Sì (scritto)'],
                    ['Uso immediato', 'Sì', 'No (mandato necessario)'],
                    ['Storno possibile', 'No', 'Sì (fino a 8 settimane)'],
                    ['Ideale per', 'Pagamenti singoli', 'Pagamenti ricorrenti'],
                    ['Costo', 'Gratuito', '0,20-0,35€ per addebito'],
                  ].map(([c, g, d], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-slate-800/30' : ''}>
                      <td className="px-4 py-3 font-medium text-slate-200">{c}</td>
                      <td className="px-4 py-3 text-[#22c55e]">{g}</td>
                      <td className="px-4 py-3">{d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="not-prose my-8">
              <Link
                href="/it"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: '#ffffff' }}
              >
                Genera GiroCode gratis →
              </Link>
            </div>
            <div className="not-prose mt-10 rounded-2xl border border-[#1f2431] bg-[#0f1117] p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xl" aria-hidden>📚</span>
                <h2 className="text-base font-bold text-[#e8eaf0]">Altri confronti</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { href: '/it/girocode-vs-paypal', label: 'GiroCode vs. PayPal' },
                  { href: '/it/girocode-vs-bankueberweisung', label: 'GiroCode vs. bonifico manuale' },
                  { href: '/it/wissen/girocode', label: 'Cos\'è un GiroCode?' },
                  { href: '/it/wissen/banking-apps', label: 'App bancarie con GiroCode' },
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
