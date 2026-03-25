import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Informations sur le GiroCode & SEPA-QR',
  description:
    'Notions de base sur les GiroCodes, le standard EPC et IBAN/BIC – la zone de connaissances de girocodegenerator.com.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/fr/wissen',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen',
      'de': 'https://www.girocodegenerator.com/wissen',
      'en': 'https://www.girocodegenerator.com/en/wissen',
      'fr': 'https://www.girocodegenerator.com/fr/wissen',
      'es': 'https://www.girocodegenerator.com/es/wissen',
    },
  },
};

const knowledgePages = [
  {
    href: '/fr/wissen/girocode',
    title: 'Qu’est-ce qu’un GiroCode ?',
    description: 'Notions de base, fonctionnement et avantages du code SEPA-QR / EPC.',
  },
  {
    href: '/fr/wissen/epc-standard',
    title: 'Standard EPC & SEPA-QR',
    description: 'Structure technique du payload EPC expliquée simplement.',
  },
  {
    href: '/fr/wissen/iban-bic',
    title: 'IBAN & BIC dans le GiroCode',
    description: 'Quelles informations saisir pour des paiements sans erreur.',
  },
  {
    href: '/fr/wissen/betrag-und-zweck',
    title: 'Montant & référence de paiement',
    description:
      'Comment choisir le montant et la référence de paiement pour un rapprochement facile des virements.',
  },
  {
    href: '/fr/wissen/rechnung',
    title: 'GiroCode sur les factures',
    description: 'Comment intégrer un GiroCode dans vos factures de manière claire et conforme.',
  },
  {
    href: '/fr/wissen/banking-apps',
    title: 'Applications bancaires compatibles',
    description:
      'Aperçu des applications bancaires qui savent scanner les GiroCodes / SEPA-QR.',
  },
  {
    href: '/fr/wissen/scannen',
    title: 'Comment scanner un GiroCode',
    description:
      'Guide pas à pas pour scanner des GiroCodes avec votre application bancaire.',
  },
];

export default function WissenOverviewPageFr() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-5xl px-4 py-10 md:py-12">
        <header className="mb-8 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Connaissances · GiroCode &amp; SEPA-QR
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Informations sur le GiroCode &amp; SEPA-QR
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Cette section présente brièvement le fonctionnement du GiroCode (SEPA-QR / EPC), le
              standard EPC sous-jacent ainsi que les bases IBAN &amp; BIC.
            </p>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {knowledgePages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group rounded-xl border border-slate-800 bg-slate-900/40 p-4 transition hover:border-sky-500/60 hover:bg-slate-900/80"
            >
              <h2 className="mb-1 text-base font-semibold text-slate-50 group-hover:text-sky-300">
                {page.title}
              </h2>
              <p className="text-sm text-slate-400">{page.description}</p>
              <span className="mt-3 inline-flex items-center text-xs font-medium text-sky-400">
                En savoir plus
                <span className="ml-1 text-[10px]">↗</span>
              </span>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}

