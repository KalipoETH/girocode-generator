import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode Blog – Guides & News',
  description:
    'Guides about GiroCodes, SEPA transfers, invoicing and digital payments for freelancers.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/en/blog',
    languages: {
      de: 'https://www.girocodegenerator.com/blog',
      en: 'https://www.girocodegenerator.com/en/blog',
      fr: 'https://www.girocodegenerator.com/fr/blog',
      es: 'https://www.girocodegenerator.com/es/blog',
    },
  },
};

const articles = [
  {
    slug: 'freelancer-rechnungen-qr-code',
    title: 'Invoices as a Freelancer: GiroCode for Faster Payments',
    date: '2026-03-01',
    dateDisplay: '1 March 2026',
    description:
      'How freelancers get paid faster with GiroCodes on their invoices. Practical guide with tips on legal requirements and a free PDF generator.',
  },
  {
    slug: 'geschichte-des-girocodes',
    title: 'The History of GiroCode – From Paper to QR Scan',
    date: '2026-03-15',
    dateDisplay: '15 March 2026',
    description:
      'How the GiroCode was created: from the beginnings of the EPC standard in 2012 to its widespread adoption in Germany. The story of SEPA-QR evolution.',
  },
  {
    slug: 'iban-sicherheit',
    title: 'IBAN Security: What You Need to Know About Transfers',
    date: '2026-04-01',
    dateDisplay: '1 April 2026',
    description:
      'Is it safe to share your IBAN? What can someone do with your IBAN? Everything about IBAN security, GiroCode privacy, and safe transfers.',
  },
];

export default function BlogOverviewPageEn() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-12">
        <header className="mb-10 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Guides &amp; News
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              GiroCode Blog
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-400 md:text-base">
              Guides about GiroCodes, SEPA transfers, invoicing and digital payments for
              freelancers and businesses.
            </p>
          </div>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 transition-all duration-200 hover:border-emerald-500/30 hover:bg-[#1a1d25]"
            >
              <time dateTime={article.date} className="text-xs text-slate-500">
                {article.dateDisplay}
              </time>
              <h2 className="mt-2 text-lg font-semibold text-slate-50 transition-colors group-hover:text-emerald-300">
                {article.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {article.description}
              </p>
              <Link
                href={`/en/blog/${article.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-400 transition-transform duration-200 group-hover:translate-x-1"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
