import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Small Business Invoice – §19 UStG Compliant 2026',
  description:
    'Create small business invoices compliant with §19 UStG (Kleinunternehmerregelung): free, no registration required. All mandatory fields included.',
  alternates: {
    canonical: `${SITE_URL}/en/kleinunternehmer-rechnung`,
    languages: {
      'x-default': `${SITE_URL}/kleinunternehmer-rechnung`,
      de: `${SITE_URL}/kleinunternehmer-rechnung`,
      en: `${SITE_URL}/en/kleinunternehmer-rechnung`,
      fr: `${SITE_URL}/fr/kleinunternehmer-rechnung`,
      es: `${SITE_URL}/es/kleinunternehmer-rechnung`,
    },
  },
};

export default function SmallBusinessInvoicePageEN() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <header className="relative overflow-hidden px-4 pb-12 pt-10 text-center sm:pt-16">
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5">
          <nav className="text-xs text-slate-500" aria-label="Breadcrumb">
            <Link href="/en" className="hover:text-slate-300">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-400">Small Business Invoice</span>
          </nav>
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/40">
            ✅ §19 UStG compliant · Free · No Registration
          </p>
          <h1
            className="font-bold tracking-tight text-slate-50"
            style={{ fontSize: 'clamp(26px, 4vw, 48px)', lineHeight: 1.1 }}
          >
            Small Business Invoice –<br className="hidden sm:block" /> §19 UStG Compliant
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Create §19 UStG compliant invoices as a small business owner (Kleinunternehmer)
            for free. No VAT required, mandatory disclaimer included automatically.
          </p>
          <Link
            href="/en/rechnungs-editor"
            className="mt-2 inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}
          >
            Create Invoice Now →
          </Link>
        </div>
      </header>
      <div className="mx-auto max-w-4xl px-4 pb-20">
        <div className="rounded-2xl border border-emerald-500/25 bg-slate-900/60 p-6 text-center">
          <p className="mb-4 text-slate-300">
            This page is available in German with full content including detailed §19 UStG guidance.
          </p>
          <Link
            href="/kleinunternehmer-rechnung"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-slate-500"
          >
            🇩🇪 Deutsche Version
          </Link>
        </div>
      </div>
    </main>
  );
}
