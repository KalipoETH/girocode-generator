import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode Blog – Ratgeber & News',
  description:
    'Ratgeber rund um GiroCodes, SEPA-Überweisungen, Rechnungsstellung und digitale Zahlungen für Selbstständige.',
  alternates: { canonical: 'https://www.girocodegenerator.com/blog' },
};

const articles = [
  {
    slug: 'freelancer-rechnungen-qr-code',
    title: 'Rechnungen als Freelancer: GiroCode für schnellere Zahlungen',
    date: '2026-03-01',
    dateDisplay: '1. März 2026',
    description:
      'Wie Freelancer mit GiroCodes auf ihren Rechnungen schneller bezahlt werden. Praxis-Guide mit Tipps zu §14 UStG und kostenlosem PDF-Generator.',
  },
  {
    slug: 'geschichte-des-girocodes',
    title: 'Die Geschichte des GiroCodes – Vom Beleg zum QR-Scan',
    date: '2026-03-15',
    dateDisplay: '15. März 2026',
    description:
      'Wie der GiroCode entstand: Von den Anfängen des EPC-Standards 2012 bis zur flächendeckenden Einführung in Deutschland. Die Geschichte der SEPA-QR-Evolution.',
  },
  {
    slug: 'iban-sicherheit',
    title: 'IBAN-Sicherheit: Worauf man bei Überweisungen achten muss',
    date: '2026-04-01',
    dateDisplay: '1. April 2026',
    description:
      'Ist es sicher, die IBAN weiterzugeben? Was kann jemand mit deiner IBAN machen? Alles über IBAN-Sicherheit, GiroCode-Datenschutz und sichere Überweisungen.',
  },
];

export default function BlogOverviewPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-12">
        <header className="mb-10 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Ratgeber &amp; News
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              GiroCode Blog
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-400 md:text-base">
              Ratgeber rund um GiroCodes, SEPA-Überweisungen, Rechnungsstellung und digitale
              Zahlungen für Selbstständige und Unternehmen.
            </p>
          </div>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 transition-all duration-200 hover:border-emerald-500/30 hover:bg-[#1a1d25]"
            >
              <time
                dateTime={article.date}
                className="text-xs text-slate-500"
              >
                {article.dateDisplay}
              </time>
              <h2 className="mt-2 text-lg font-semibold text-slate-50 group-hover:text-emerald-300 transition-colors">
                {article.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {article.description}
              </p>
              <Link
                href={`/blog/${article.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-400 transition-transform duration-200 group-hover:translate-x-1"
              >
                Weiterlesen →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
