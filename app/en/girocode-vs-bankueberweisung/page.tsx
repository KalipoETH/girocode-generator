import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode vs. Manual Bank Transfer – Save Time & Errors (2026)',
  description: 'GiroCode or manual IBAN entry? Comparison of time, error rate and usability.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/en/girocode-vs-bankueberweisung',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/girocode-vs-bankueberweisung',
      'de': 'https://www.girocodegenerator.com/girocode-vs-bankueberweisung',
      'en': 'https://www.girocodegenerator.com/en/girocode-vs-bankueberweisung',
      'fr': 'https://www.girocodegenerator.com/fr/girocode-vs-bankueberweisung',
      'es': 'https://www.girocodegenerator.com/es/girocode-vs-bankueberweisung',
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  articleType: 'ComparisonArticle',
  headline: 'GiroCode vs. Manual Bank Transfer – Save Time & Errors',
  description: 'GiroCode or manual IBAN entry? Comparison of time, error rate and usability.',
  author: { '@type': 'Person', name: 'Kaleb Jahnke' },
  publisher: { '@type': 'Organization', name: 'GiroCode Generator', url: 'https://www.girocodegenerator.com' },
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.girocodegenerator.com/en/girocode-vs-bankueberweisung' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much faster is GiroCode than a manual bank transfer?', acceptedAnswer: { '@type': 'Answer', text: 'A manual transfer with IBAN entry takes 3–5 minutes. With GiroCode the entire process takes under 30 seconds – 6–10x faster.' } },
    { '@type': 'Question', name: 'What is the error rate for manual IBAN entry?', acceptedAnswer: { '@type': 'Answer', text: 'For manual entry of long numeric strings like IBANs, the error rate exceeds 1%. With GiroCode the error rate is 0%.' } },
    { '@type': 'Question', name: 'How much does a chargeback for wrong IBAN cost?', acceptedAnswer: { '@type': 'Answer', text: 'A bank chargeback typically costs €5–15 plus time for resolution. Recovery can take several weeks.' } },
    { '@type': 'Question', name: 'Does the payer need to install an app to use GiroCode?', acceptedAnswer: { '@type': 'Answer', text: 'No. The payer uses their existing banking app. All major German banking apps have supported GiroCodes since 2016.' } },
  ],
};

export default function GirocodeVsBankueberweisungPageEn() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li><Link href="/en" className="text-sky-400 hover:text-sky-300">Home</Link></li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">GiroCode vs. Manual Transfer</li>
            </ol>
          </nav>
          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />Comparison · Payment Methods 2026
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">GiroCode vs. Manual Bank Transfer: Why QR Code Wins</h1>
          </header>
          <div className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3" role="note">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">💡 Quick Answer</p>
            <p className="text-sm leading-relaxed text-slate-300">Manual IBAN entry takes 3–5 minutes with an error rate of over 1% for 22-digit German IBANs. With GiroCode, the transfer takes under 30 seconds and typos are impossible.</p>
          </div>
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { value: '3–5 min.', label: 'Manual IBAN entry' },
              { value: '< 30 sec.', label: 'With GiroCode' },
              { value: '> 1%', label: 'Manual error rate' },
              { value: '0%', label: 'Error rate with GiroCode' },
            ].map((stat, i) => (
              <div key={i} className="rounded-lg border border-[#1f2431] bg-[#0f1117] p-4 text-center">
                <p className="text-2xl font-bold text-[#22c55e]">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-[#8b90a0]">{stat.label}</p>
              </div>
            ))}
          </div>
          <article className="prose prose-invert prose-lg max-w-none">
            <h2>Comparison Table: GiroCode vs. Manual Entry</h2>
            <div className="not-prose my-6 overflow-x-auto rounded-lg border border-slate-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 text-slate-300">
                    <th className="px-4 py-3 text-left font-medium">Criterion</th>
                    <th className="px-4 py-3 text-left font-medium text-[#22c55e]">GiroCode</th>
                    <th className="px-4 py-3 text-left font-medium text-slate-400">Manual Entry</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50 text-slate-300">
                  {[
                    ['Time required', '< 30 seconds', '3–5 minutes'],
                    ['Typos', 'Not possible', 'Frequent'],
                    ['Payment reference', 'Automatic', 'Often forgotten'],
                    ['Usability', 'Very high', 'Medium'],
                    ['Professionalism', 'Very high', 'Standard'],
                    ['Cost', 'Free', 'Free'],
                  ].map(([c, g, m], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-slate-800/30' : ''}>
                      <td className="px-4 py-3 font-medium text-slate-200">{c}</td>
                      <td className="px-4 py-3 text-[#22c55e]">{g}</td>
                      <td className="px-4 py-3">{m}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h2>Why Typos in IBANs Are So Costly</h2>
            <ul>
              <li><strong>Chargeback fees €5–15:</strong> Recovering a misdirected transfer costs money and can take weeks.</li>
              <li><strong>Time loss:</strong> Businesses spend hours per year resolving payment errors.</li>
              <li><strong>Reputation damage:</strong> Customers contacted about errors lose confidence in the biller&apos;s professionalism.</li>
            </ul>
            <div className="not-prose my-8">
              <Link href="/en" className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: '#ffffff' }}>
                Create GiroCode for free →
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
              <div className="mb-4 flex items-center gap-3"><span className="text-xl" aria-hidden>📚</span><h2 className="text-base font-bold text-[#e8eaf0]">More Comparisons</h2></div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { href: '/en/girocode-vs-paypal', label: 'GiroCode vs. PayPal' },
                  { href: '/en/girocode-vs-lastschrift', label: 'GiroCode vs. SEPA Direct Debit' },
                  { href: '/en/wissen/girocode', label: 'What is a GiroCode?' },
                  { href: '/en/wissen/iban-bic', label: 'IBAN & BIC explained' },
                ].map((a) => (
                  <Link key={a.href} href={a.href} className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3.5 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/30 hover:text-[#e8eaf0] hover:-translate-y-0.5">
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
