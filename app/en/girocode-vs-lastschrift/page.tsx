import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GiroCode vs. SEPA Direct Debit – Differences & Use Cases (2026)',
  description: 'GiroCode or SEPA direct debit? When each method is the better choice. With comparison table and concrete examples.',
  alternates: {
    canonical: `${SITE_URL}/en/girocode-vs-lastschrift`,
    languages: {
      'x-default': `${SITE_URL}/girocode-vs-lastschrift`,
      'de': `${SITE_URL}/girocode-vs-lastschrift`,
      'en': `${SITE_URL}/en/girocode-vs-lastschrift`,
      'fr': `${SITE_URL}/fr/girocode-vs-lastschrift`,
      'es': `${SITE_URL}/es/girocode-vs-lastschrift`,
      'it': `${SITE_URL}/it/girocode-vs-lastschrift`,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  articleType: 'ComparisonArticle',
  headline: 'GiroCode vs. SEPA Direct Debit – Differences & Use Cases',
  description: 'GiroCode or SEPA direct debit? When each method is the better choice.',
  author: { '@type': 'Person', name: 'Kaleb Jahnke' },
  publisher: { '@type': 'Organization', name: 'GiroCode Generator', url: SITE_URL },
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/en/girocode-vs-lastschrift` },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the difference between GiroCode and SEPA direct debit?', acceptedAnswer: { '@type': 'Answer', text: 'GiroCode is a payment request – the payer actively transfers. SEPA direct debit is a debit authorisation – the recipient pulls the money. GiroCode requires no mandate and is immediately usable.' } },
    { '@type': 'Question', name: 'Do I need a SEPA mandate for GiroCode?', acceptedAnswer: { '@type': 'Answer', text: 'No. GiroCode requires no mandate since the payer actively transfers. SEPA direct debit requires a written authorisation (SEPA mandate) from the payer.' } },
    { '@type': 'Question', name: 'Can a SEPA direct debit be reversed?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. SEPA direct debits can be reversed within 8 weeks without giving reasons. For unauthorised debits the period is up to 13 months. GiroCodes cannot be reversed as they are credit transfers.' } },
    { '@type': 'Question', name: 'How much does a SEPA direct debit cost compared to GiroCode?', acceptedAnswer: { '@type': 'Answer', text: 'SEPA direct debits cost the recipient €0.20–0.35 per collection depending on the bank. GiroCode is completely free for both parties.' } },
  ],
};

export default function GirocodeVsLastschriftPageEn() {
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
              <li className="text-slate-400">GiroCode vs. SEPA Direct Debit</li>
            </ol>
          </nav>
          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />Comparison · Payment Methods 2026
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">GiroCode vs. SEPA Direct Debit: The Difference</h1>
          </header>
          <div className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3" role="note">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">💡 Quick Answer</p>
            <p className="text-sm leading-relaxed text-slate-300">GiroCode is a payment request – the payer actively transfers. SEPA direct debit is a debit authorisation – the recipient pulls the money. GiroCode requires no mandate and is immediately usable, while direct debits require a signed SEPA mandate.</p>
          </div>
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { value: '€0', label: 'GiroCode per transaction' },
              { value: '€0.20–0.35', label: 'Direct debit per collection' },
              { value: 'None', label: 'Mandate required for GiroCode' },
              { value: '8 weeks', label: 'Direct debit chargeback period' },
            ].map((stat, i) => (
              <div key={i} className="rounded-lg border border-[#1f2431] bg-[#0f1117] p-4 text-center">
                <p className="text-2xl font-bold text-[#22c55e]">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-[#8b90a0]">{stat.label}</p>
              </div>
            ))}
          </div>
          <article className="prose prose-invert prose-lg max-w-none">
            <h2>Comparison Table: GiroCode vs. SEPA Direct Debit</h2>
            <div className="not-prose my-6 overflow-x-auto rounded-lg border border-slate-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 text-slate-300">
                    <th className="px-4 py-3 text-left font-medium">Criterion</th>
                    <th className="px-4 py-3 text-left font-medium text-[#22c55e]">GiroCode</th>
                    <th className="px-4 py-3 text-left font-medium text-slate-400">SEPA Direct Debit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50 text-slate-300">
                  {[
                    ['Payment initiation', 'Payer (active)', 'Recipient (passive)'],
                    ['Mandate required', 'No', 'Yes (written)'],
                    ['Immediately usable', 'Yes', 'No (mandate needed)'],
                    ['Chargeback possible', 'No', 'Yes (up to 8 weeks)'],
                    ['Best for', 'One-time payments', 'Recurring payments'],
                    ['Cost', 'Free', '€0.20–0.35 per collection'],
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
            <h2>When is GiroCode better?</h2>
            <ul>
              <li><strong>One-time invoices:</strong> Perfect for freelancers, tradespeople and businesses billing individually.</li>
              <li><strong>New customers without a mandate:</strong> No lead time needed – GiroCode works without prior arrangement.</li>
              <li><strong>Spontaneous payments:</strong> Donation drives, group orders or event fees.</li>
            </ul>
            <h2>When is direct debit better?</h2>
            <ul>
              <li><strong>Monthly subscriptions:</strong> Streaming, software licences or insurance – one mandate, then automatic.</li>
              <li><strong>Club memberships:</strong> Regular, fixed amounts without effort for members.</li>
              <li><strong>Recurring payments:</strong> Rent, instalments, monthly service fees.</li>
            </ul>
            <div className="not-prose my-4 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/40 px-4 py-3 text-sm leading-relaxed text-slate-300">
              <strong className="text-slate-100">Conclusion:</strong> GiroCode and direct debit complement each other. For one-time invoices, GiroCode is the faster, cheaper solution with no lead time. For recurring payments, direct debit provides automation convenience once the mandate is in place.
            </div>
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
                  { href: '/en/girocode-vs-bankueberweisung', label: 'GiroCode vs. Manual Transfer' },
                  { href: '/en/wissen/girocode', label: 'What is a GiroCode?' },
                  { href: '/en/wissen/banking-apps', label: 'Banking Apps with GiroCode Support' },
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
