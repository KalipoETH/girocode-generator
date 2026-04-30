import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog GiroCode – Guides & Actualités',
  description:
    'Guides sur les GiroCodes, virements SEPA, facturation et paiements numériques pour freelances.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/fr/blog',
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
    title: 'Factures en freelance : GiroCode pour des paiements plus rapides',
    date: '2026-03-01',
    dateDisplay: '1 mars 2026',
    description:
      'Comment les freelances se font payer plus vite grâce aux GiroCodes sur leurs factures. Guide pratique avec conseils sur les mentions légales et générateur PDF gratuit.',
  },
  {
    slug: 'geschichte-des-girocodes',
    title: "L'histoire du GiroCode – Du document papier au scan QR",
    date: '2026-03-15',
    dateDisplay: '15 mars 2026',
    description:
      "Comment le GiroCode a été créé : des débuts de la norme EPC en 2012 à son adoption généralisée en Allemagne. L'histoire de l'évolution du SEPA-QR.",
  },
  {
    slug: 'iban-sicherheit',
    title: "Sécurité IBAN : ce que vous devez savoir sur les virements",
    date: '2026-04-01',
    dateDisplay: '1 avril 2026',
    description:
      "Est-il sécurisé de partager son IBAN ? Que peut faire quelqu'un avec votre IBAN ? Tout sur la sécurité IBAN, la confidentialité GiroCode et les virements sûrs.",
  },
];

export default function BlogOverviewPageFr() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-12">
        <header className="mb-10 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Guides &amp; Actualités
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Blog GiroCode
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-400 md:text-base">
              Guides sur les GiroCodes, virements SEPA, facturation et paiements numériques
              pour les freelances et les entreprises.
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
                href={`/fr/blog/${article.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-400 transition-transform duration-200 group-hover:translate-x-1"
              >
                Lire la suite →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
