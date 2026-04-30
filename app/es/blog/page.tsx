import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog GiroCode – Guías & Noticias',
  description:
    'Guías sobre GiroCodes, transferencias SEPA, facturación y pagos digitales para autónomos.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/blog',
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
    title: 'Facturas como autónomo: GiroCode para pagos más rápidos',
    date: '2026-03-01',
    dateDisplay: '1 de marzo de 2026',
    description:
      'Cómo los autónomos cobran más rápido con GiroCodes en sus facturas. Guía práctica con consejos sobre requisitos legales y generador de PDF gratuito.',
  },
  {
    slug: 'geschichte-des-girocodes',
    title: 'La historia del GiroCode – Del papel al escáner QR',
    date: '2026-03-15',
    dateDisplay: '15 de marzo de 2026',
    description:
      'Cómo se creó el GiroCode: desde los inicios del estándar EPC en 2012 hasta su adopción generalizada en Alemania. La historia de la evolución del SEPA-QR.',
  },
  {
    slug: 'iban-sicherheit',
    title: 'Seguridad IBAN: lo que necesitas saber sobre las transferencias',
    date: '2026-04-01',
    dateDisplay: '1 de abril de 2026',
    description:
      '¿Es seguro compartir el IBAN? ¿Qué puede hacer alguien con tu IBAN? Todo sobre la seguridad IBAN, la privacidad del GiroCode y las transferencias seguras.',
  },
];

export default function BlogOverviewPageEs() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-12">
        <header className="mb-10 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Guías &amp; Noticias
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Blog GiroCode
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-400 md:text-base">
              Guías sobre GiroCodes, transferencias SEPA, facturación y pagos digitales para
              autónomos y empresas.
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
                href={`/es/blog/${article.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-400 transition-transform duration-200 group-hover:translate-x-1"
              >
                Leer más →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
