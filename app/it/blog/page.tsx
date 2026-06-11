import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog GiroCode – Guide, Notizie & Aggiornamenti',
  description:
    'Guide sui GiroCodes, pagamenti SEPA, fatturazione e pagamenti digitali per freelance e piccole imprese.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/it/blog',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/blog',
      de: 'https://www.girocodegenerator.com/blog',
      en: 'https://www.girocodegenerator.com/en/blog',
      fr: 'https://www.girocodegenerator.com/fr/blog',
      es: 'https://www.girocodegenerator.com/es/blog',
      it: 'https://www.girocodegenerator.com/it/blog',
    },
  },
};

const articles = [
  {
    slug: 'freelancer-rechnungen-qr-code',
    title: 'Fatture da Freelance: GiroCode per Pagamenti più Veloci',
    date: '2026-03-01',
    dateDisplay: '1 marzo 2026',
    description:
      'Come i freelance incassano più rapidamente con i GiroCode sulle fatture. Guida pratica con consigli su obblighi fiscali italiani e generatore PDF gratuito.',
  },
  {
    slug: 'geschichte-des-girocodes',
    title: 'La Storia del GiroCode',
    date: '2026-03-15',
    dateDisplay: '15 marzo 2026',
    description:
      'Come è nato il GiroCode: dagli inizi dello standard EPC nel 2012 alla diffusione in Germania. La storia dell\'evoluzione del SEPA-QR.',
  },
  {
    slug: 'iban-sicherheit',
    title: 'Sicurezza IBAN: Cosa Devi Sapere',
    date: '2026-04-01',
    dateDisplay: '1 aprile 2026',
    description:
      'È sicuro condividere l\'IBAN? Cosa può fare qualcuno con il tuo IBAN? Tutto sulla sicurezza IBAN, la privacy del GiroCode e i bonifici sicuri.',
  },
];

export default function BlogOverviewPageIt() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-12">
        <header className="mb-10 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Guide, Notizie &amp; Aggiornamenti
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Blog GiroCode
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-400 md:text-base">
              Guide su GiroCode, bonifici SEPA, fatturazione e pagamenti digitali per freelance,
              professionisti e piccole imprese.
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
                href={`/it/blog/${article.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-400 transition-transform duration-200 group-hover:translate-x-1"
              >
                Leggi di più →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
