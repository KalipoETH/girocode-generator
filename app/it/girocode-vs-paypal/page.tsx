import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GiroCode vs PayPal – Quale Metodo è Migliore? (2026)',
  description:
    'GiroCode o PayPal? Confronto diretto: costi, privacy, diffusione e casi d\'uso. Con tabella comparativa.',
  alternates: {
    canonical: `${SITE_URL}/it/girocode-vs-paypal`,
    languages: {
      'x-default': `${SITE_URL}/girocode-vs-paypal`,
      de: `${SITE_URL}/girocode-vs-paypal`,
      en: `${SITE_URL}/en/girocode-vs-paypal`,
      fr: `${SITE_URL}/fr/girocode-vs-paypal`,
      es: `${SITE_URL}/es/girocode-vs-paypal`,
      it: `${SITE_URL}/it/girocode-vs-paypal`,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  articleType: 'ComparisonArticle',
  headline: 'GiroCode vs. PayPal – Quale metodo è migliore?',
  description:
    'GiroCode o PayPal? Confronto diretto: costi, privacy, diffusione e casi d\'uso.',
  author: { '@type': 'Person', name: 'Kaleb Jahnke' },
  publisher: {
    '@type': 'Organization',
    name: 'GiroCode Generator',
    url: SITE_URL,
  },
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/it/girocode-vs-paypal`,
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'GiroCode o PayPal: quale scelgo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Per fatture e bonifici SEPA in Italia ed Europa, GiroCode è gratuito e conforme al GDPR. PayPal conviene per pagamenti internazionali fuori SEPA, e-commerce con protezione acquirente e pagamenti tra sconosciuti senza IBAN.',
      },
    },
    {
      '@type': 'Question',
      name: 'Il GiroCode ha una protezione acquirente?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Il GiroCode è un invito al bonifico SEPA – non c\'è intermediario né storno automatico. PayPal offre protezione acquirente per acquisti online.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso usare GiroCode per pagamenti internazionali?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GiroCode funziona nella zona SEPA (36 paesi). Per pagamenti fuori SEPA servono PayPal, SWIFT o altri metodi internazionali.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quante commissioni prende PayPal in Italia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PayPal applica al beneficiario tra l\'1,2% e il 3,4% più una tariffa fissa per transazione, a seconda del volume e del tipo di pagamento. GiroCode è gratuito per entrambe le parti.',
      },
    },
  ],
};

export default function GirocodeVsPaypalPageIt() {
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
              <li className="text-slate-400">GiroCode vs. PayPal</li>
            </ol>
          </nav>
          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Confronto · Metodi di pagamento 2026
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode vs. PayPal: Il Confronto Diretto (2026)
            </h1>
          </header>
          <div className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3" role="note">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">💡 Risposta breve</p>
            <p className="text-sm leading-relaxed text-slate-300">
              Il GiroCode è gratuito e conforme al GDPR, mentre PayPal applica commissioni dell&apos;1,2-3,4% + fisso e trasferisce i dati a server USA. Il GiroCode è ideale per fatture e pagamenti diretti, PayPal per pagamenti internazionali e negozi online.
            </p>
          </div>
          <article className="prose prose-invert prose-lg max-w-none">
            <h2>Tabella comparativa: GiroCode vs. PayPal</h2>
            <div className="not-prose my-6 overflow-x-auto rounded-lg border border-slate-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 text-slate-300">
                    <th className="px-4 py-3 text-left font-medium">Criterio</th>
                    <th className="px-4 py-3 text-left font-medium text-[#22c55e]">GiroCode</th>
                    <th className="px-4 py-3 text-left font-medium text-slate-400">PayPal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50 text-slate-300">
                  {[
                    ['Costo beneficiario', 'Gratuito', '1,2–3,4% + fisso'],
                    ['Costo pagante', 'Gratuito', 'Gratuito'],
                    ['Privacy', 'Conforme GDPR', 'Azienda USA'],
                    ['Registrazione', 'No', 'Account PayPal obbligatorio'],
                    ['Diffusione', 'Tutte banche SEPA', 'Molto diffuso'],
                    ['Metodo pagamento', 'Bonifico SEPA', 'Saldo PayPal/carta'],
                    ['Protezione acquirente', 'No', 'Sì'],
                    ['Ideale per', 'Fatture, B2B', 'Negozi online, internazionale'],
                  ].map(([c, g, p], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-slate-800/30' : ''}>
                      <td className="px-4 py-3 font-medium text-slate-200">{c}</td>
                      <td className="px-4 py-3 text-[#22c55e]">{g}</td>
                      <td className="px-4 py-3">{p}</td>
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
                  { href: '/it/girocode-vs-bankueberweisung', label: 'GiroCode vs. bonifico manuale' },
                  { href: '/it/girocode-vs-lastschrift', label: 'GiroCode vs. addebito diretto SEPA' },
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
