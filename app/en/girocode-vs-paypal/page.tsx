import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode vs. PayPal – Which Payment Method is Better? (2026)',
  description: 'GiroCode or PayPal? Direct comparison: costs, privacy, reach and use cases. With comparison table.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/en/girocode-vs-paypal',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/girocode-vs-paypal',
      'de': 'https://www.girocodegenerator.com/girocode-vs-paypal',
      'en': 'https://www.girocodegenerator.com/en/girocode-vs-paypal',
      'fr': 'https://www.girocodegenerator.com/fr/girocode-vs-paypal',
      'es': 'https://www.girocodegenerator.com/es/girocode-vs-paypal',
      'it': 'https://www.girocodegenerator.com/it/girocode-vs-paypal',
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  articleType: 'ComparisonArticle',
  headline: 'GiroCode vs. PayPal – Which Payment Method is Better?',
  description: 'GiroCode or PayPal? Direct comparison: costs, privacy, reach and use cases.',
  author: { '@type': 'Person', name: 'Kaleb Jahnke' },
  publisher: { '@type': 'Organization', name: 'GiroCode Generator', url: 'https://www.girocodegenerator.com' },
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.girocodegenerator.com/en/girocode-vs-paypal' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does GiroCode cost compared to PayPal?', acceptedAnswer: { '@type': 'Answer', text: 'GiroCode is completely free for both sender and recipient. PayPal charges the recipient 1.2–3.4% plus a fixed fee per transaction.' } },
    { '@type': 'Question', name: 'Is GiroCode GDPR compliant?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. GiroCode processes no personal data through third parties. The transfer goes directly through your own bank without US servers or third-party registration.' } },
    { '@type': 'Question', name: 'When should I use PayPal instead of GiroCode?', acceptedAnswer: { '@type': 'Answer', text: 'PayPal is better for international payments outside the SEPA zone, online shops with buyer protection, and spontaneous payments to people without a known IBAN.' } },
    { '@type': 'Question', name: 'Can I use GiroCode abroad?', acceptedAnswer: { '@type': 'Answer', text: 'GiroCode works across the entire SEPA zone (36 countries). For payments outside SEPA (e.g. USA, Asia), PayPal or SWIFT is the better choice.' } },
  ],
};

export default function GirocodeVsPaypalPageEn() {
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
              <li className="text-slate-400">GiroCode vs. PayPal</li>
            </ol>
          </nav>
          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Comparison · Payment Methods 2026
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">GiroCode vs. PayPal: The Direct Comparison (2026)</h1>
          </header>
          <div className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3" role="note">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">💡 Quick Answer</p>
            <p className="text-sm leading-relaxed text-slate-300">GiroCode is free and GDPR-compliant for SEPA transfers, while PayPal charges 1.2–3.4% + a fixed fee and transfers data to US servers. GiroCode is ideal for invoices and direct transfers; PayPal for international payments and online shops.</p>
          </div>
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { value: '€0', label: 'GiroCode cost for recipient' },
              { value: '1.2–3.4%', label: 'PayPal fees for recipient' },
              { value: '36', label: 'SEPA countries with GiroCode' },
              { value: '100%', label: 'GDPR compliance GiroCode' },
            ].map((stat, i) => (
              <div key={i} className="rounded-lg border border-[#1f2431] bg-[#0f1117] p-4 text-center">
                <p className="text-2xl font-bold text-[#22c55e]">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-[#8b90a0]">{stat.label}</p>
              </div>
            ))}
          </div>
          <article className="prose prose-invert prose-lg max-w-none">
            <h2>Comparison Table: GiroCode vs. PayPal</h2>
            <div className="not-prose my-6 overflow-x-auto rounded-lg border border-slate-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 text-slate-300">
                    <th className="px-4 py-3 text-left font-medium">Criterion</th>
                    <th className="px-4 py-3 text-left font-medium text-[#22c55e]">GiroCode</th>
                    <th className="px-4 py-3 text-left font-medium text-slate-400">PayPal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50 text-slate-300">
                  {[
                    ['Cost for recipient', 'Free', '1.2–3.4% + fixed fee'],
                    ['Cost for payer', 'Free', 'Free (standard payment)'],
                    ['Data privacy', 'GDPR-compliant, local', 'US company, data sharing'],
                    ['Registration required', 'None', 'PayPal account required'],
                    ['Reach in Germany', 'All SEPA banks', 'Very widespread'],
                    ['Payment type', 'SEPA bank transfer', 'PayPal balance / card'],
                    ['Buyer protection', 'No', 'Available'],
                    ['Best for', 'Invoices, B2B', 'Online shops, international'],
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
            <h2>When is GiroCode better?</h2>
            <ul>
              <li><strong>B2B invoices:</strong> No fees, direct SEPA transfer to your business account.</li>
              <li><strong>Club memberships:</strong> One QR code for all members, no registration required.</li>
              <li><strong>Direct payments without third parties:</strong> Money goes directly bank to bank.</li>
              <li><strong>GDPR-sensitive environments:</strong> No data sharing with PayPal Inc.</li>
            </ul>
            <h2>When is PayPal better?</h2>
            <ul>
              <li><strong>International payments:</strong> Outside the SEPA zone, GiroCode has no validity.</li>
              <li><strong>Online shops with buyer protection:</strong> PayPal covers non-delivery and defective goods.</li>
              <li><strong>Payments to unknown individuals:</strong> Only email address needed, no IBAN.</li>
              <li><strong>Instant mobile payments:</strong> Convenient peer-to-peer without bank details.</li>
            </ul>
            <h2>Conclusion</h2>
            <div className="not-prose my-4 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/40 px-4 py-3 text-sm leading-relaxed text-slate-300">
              <strong className="text-slate-100">Recommendation:</strong> For German businesses and freelancers, GiroCode is the free, privacy-friendly alternative to PayPal for invoices and SEPA transfers. PayPal remains relevant for international payments and e-commerce buyer protection.
            </div>
            <div className="not-prose my-8">
              <Link href="/en" className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: '#ffffff' }}>
                Create GiroCode for free →
              </Link>
            </div>
            <h2>FAQ: GiroCode vs. PayPal</h2>
            <div className="space-y-6">
              {[
                { q: 'How much does GiroCode cost compared to PayPal?', a: 'GiroCode is completely free. PayPal charges the recipient 1.2–3.4% plus a fixed fee. On a €1,000 invoice, PayPal costs €12–34; GiroCode costs €0.' },
                { q: 'Is GiroCode GDPR compliant?', a: 'Yes. GiroCode processes no personal data through third parties. The transfer goes directly through your own bank.' },
                { q: 'When should I use PayPal instead of GiroCode?', a: 'PayPal is better for international payments outside SEPA, online shops with buyer protection, and payments to people without a known IBAN.' },
                { q: 'Can I use GiroCode abroad?', a: 'GiroCode works across the entire SEPA zone (36 countries including all EU states). For payments outside SEPA, PayPal or SWIFT is the better choice.' },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="text-sm font-semibold text-slate-50">{item.q}</h3>
                  <p className="text-sm text-slate-300">{item.a}</p>
                </div>
              ))}
            </div>
            <div className="not-prose mt-10 rounded-2xl border border-[#1f2431] bg-[#0f1117] p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xl" aria-hidden>📚</span>
                <h2 className="text-base font-bold text-[#e8eaf0]">More Comparisons</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { href: '/en/girocode-vs-bankueberweisung', label: 'GiroCode vs. Manual Bank Transfer' },
                  { href: '/en/girocode-vs-lastschrift', label: 'GiroCode vs. SEPA Direct Debit' },
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
