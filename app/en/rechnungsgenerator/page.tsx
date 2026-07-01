import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Free Invoice Generator – With GiroCode & PDF 2026',
  description:
    'The free invoice generator with automatic GiroCode. For freelancers, small businesses and self-employed. No registration required.',
  alternates: {
    canonical: `${SITE_URL}/en/rechnungsgenerator`,
    languages: {
      'x-default': `${SITE_URL}/rechnungsgenerator`,
      de: `${SITE_URL}/rechnungsgenerator`,
      en: `${SITE_URL}/en/rechnungsgenerator`,
      fr: `${SITE_URL}/fr/rechnungsgenerator`,
      es: `${SITE_URL}/es/rechnungsgenerator`,
    },
  },
};

export default function InvoiceGeneratorPageEN() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <header className="relative overflow-hidden px-4 pb-12 pt-10 text-center sm:pt-16">
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5">
          <nav className="text-xs text-slate-500" aria-label="Breadcrumb">
            <Link href="/en" className="hover:text-slate-300">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-400">Invoice Generator</span>
          </nav>
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/40">
            ✅ Free · With GiroCode · No Registration
          </p>
          <h1
            className="font-bold tracking-tight text-slate-50"
            style={{ fontSize: 'clamp(28px, 4.5vw, 52px)', lineHeight: 1.1 }}
          >
            Free Invoice Generator –<br className="hidden sm:block" /> With GiroCode &amp; PDF
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            The free invoice generator with automatic GiroCode. For freelancers, small businesses
            and self-employed. No registration, compliant with German invoice law.
          </p>
          <Link
            href="/en/rechnungs-editor"
            className="mt-2 inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}
          >
            Open Invoice Generator →
          </Link>
        </div>
      </header>
      <div className="mx-auto max-w-4xl px-4 pb-20">
        <div className="rounded-2xl border border-emerald-500/25 bg-slate-900/60 p-6 text-center">
          <p className="mb-4 text-slate-300">
            This page is available in German with full content.
          </p>
          <Link
            href="/rechnungsgenerator"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-slate-500"
          >
            🇩🇪 Deutsche Version
          </Link>
        </div>
      </div>
    </main>
  );
}
