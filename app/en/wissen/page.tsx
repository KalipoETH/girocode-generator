import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Knowledge about GiroCode & SEPA-QR',
  description:
    'All about GiroCodes, EPC standard, IBAN, invoices and banking apps – the knowledge area of girocodegenerator.com.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/en/wissen',
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
    href: '/en/wissen/girocode',
    title: 'What is a GiroCode?',
    description: 'Basics, how it works and advantages of the SEPA-QR / EPC standard.',
  },
  {
    href: '/en/wissen/epc-standard',
    title: 'EPC standard & SEPA-QR',
    description: 'Technical structure of the EPC payload explained in detail.',
  },
  {
    href: '/en/wissen/iban-bic',
    title: 'IBAN & BIC in GiroCode',
    description:
      'Which details are mandatory, how to validate the IBAN and what is optional.',
  },
  {
    href: '/en/wissen/betrag-und-zweck',
    title: 'Amount & payment reference',
    description: 'How to enter amount and payment reference correctly in GiroCode.',
  },
  {
    href: '/en/wissen/rechnung',
    title: 'GiroCode on invoices',
    description: 'How to integrate a GiroCode into invoices in a compliant way.',
  },
  {
    href: '/en/wissen/banking-apps',
    title: 'Banking apps with GiroCode',
    description:
      'Overview of banking apps that support SEPA-QR / GiroCodes, plus practical tips.',
  },
  {
    href: '/en/wissen/scannen',
    title: 'Scanning a GiroCode',
    description:
      'Step-by-step guide to scanning and checking GiroCodes with your banking app.',
  },
];

export default function WissenOverviewPageEn() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-5xl px-4 py-10 md:py-12">
        <header className="mb-8 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Knowledge · Basics on GiroCode &amp; SEPA-QR
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Knowledge about GiroCode &amp; SEPA-QR
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              In this section you&apos;ll find clear, practical explanations about GiroCodes (SEPA-QR
              / EPC), the technical standard behind them, IBAN &amp; BIC, amounts and payment
              references, invoices and banking apps.
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
                Learn more
                <span className="ml-1 text-[10px]">↗</span>
              </span>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}

