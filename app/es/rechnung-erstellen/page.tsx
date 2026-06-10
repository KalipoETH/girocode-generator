import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Crear factura – Gratis & Online | GiroCode Generator',
  description:
    'Crea facturas gratis online: conforme §14 UStG, con GiroCode, sin registro. Descarga el PDF instantáneamente.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/rechnung-erstellen',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/rechnung-erstellen',
      de: 'https://www.girocodegenerator.com/rechnung-erstellen',
      en: 'https://www.girocodegenerator.com/en/rechnung-erstellen',
      fr: 'https://www.girocodegenerator.com/fr/rechnung-erstellen',
      es: 'https://www.girocodegenerator.com/es/rechnung-erstellen',
    },
  },
};

export default function InvoiceCreatePageES() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <header className="relative overflow-hidden px-4 pb-12 pt-10 text-center sm:pt-16">
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5">
          <nav className="text-xs text-slate-500" aria-label="Breadcrumb">
            <Link href="/es" className="hover:text-slate-300">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-400">Crear factura</span>
          </nav>
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/40">
            ✅ Sin registro · Gratis · Con GiroCode
          </p>
          <h1
            className="font-bold tracking-tight text-slate-50"
            style={{ fontSize: 'clamp(28px, 4.5vw, 52px)', lineHeight: 1.1 }}
          >
            Crear factura gratis – Con GiroCode &amp; PDF
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Crea facturas profesionales en 2 minutos: conforme §14 UStG, con GiroCode
            automático, sin registro requerido.
          </p>
          <Link
            href="/es/rechnungs-editor"
            className="mt-2 inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}
          >
            Crear factura ahora →
          </Link>
        </div>
      </header>
      <div className="mx-auto max-w-4xl px-4 pb-20">
        <div className="rounded-2xl border border-emerald-500/25 bg-slate-900/60 p-6 text-center">
          <p className="mb-4 text-slate-300">
            Esta página está disponible en alemán con contenido completo.
          </p>
          <Link
            href="/rechnung-erstellen"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-slate-500"
          >
            🇩🇪 Versión alemana
          </Link>
        </div>
      </div>
    </main>
  );
}
