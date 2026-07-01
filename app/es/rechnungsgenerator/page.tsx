import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Generador de facturas gratuito – Con GiroCode y PDF 2026',
  description:
    'El generador de facturas gratuito con GiroCode automático. Para freelancers, pequeñas empresas y autónomos. Sin registro.',
  alternates: {
    canonical: `${SITE_URL}/es/rechnungsgenerator`,
    languages: {
      'x-default': `${SITE_URL}/rechnungsgenerator`,
      de: `${SITE_URL}/rechnungsgenerator`,
      en: `${SITE_URL}/en/rechnungsgenerator`,
      fr: `${SITE_URL}/fr/rechnungsgenerator`,
      es: `${SITE_URL}/es/rechnungsgenerator`,
    },
  },
};

export default function InvoiceGeneratorPageES() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <header className="relative overflow-hidden px-4 pb-12 pt-10 text-center sm:pt-16">
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5">
          <nav className="text-xs text-slate-500" aria-label="Breadcrumb">
            <Link href="/es" className="hover:text-slate-300">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-400">Generador de facturas</span>
          </nav>
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/40">
            ✅ Gratuito · Con GiroCode · Sin registro
          </p>
          <h1
            className="font-bold tracking-tight text-slate-50"
            style={{ fontSize: 'clamp(28px, 4.5vw, 52px)', lineHeight: 1.1 }}
          >
            Generador de facturas gratuito –<br className="hidden sm:block" /> Con GiroCode &amp; PDF
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            El generador de facturas gratuito con GiroCode automático. Para freelancers, pequeñas
            empresas y autónomos. Sin registro requerido.
          </p>
          <Link
            href="/es/rechnungs-editor"
            className="mt-2 inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}
          >
            Abrir generador →
          </Link>
        </div>
      </header>
      <div className="mx-auto max-w-4xl px-4 pb-20">
        <div className="rounded-2xl border border-emerald-500/25 bg-slate-900/60 p-6 text-center">
          <p className="mb-4 text-slate-300">
            Esta página está disponible en alemán con contenido completo.
          </p>
          <Link
            href="/rechnungsgenerator"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-slate-500"
          >
            🇩🇪 Versión alemana
          </Link>
        </div>
      </div>
    </main>
  );
}
