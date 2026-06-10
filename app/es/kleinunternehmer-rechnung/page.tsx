import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Factura pequeña empresa – §19 UStG conforme 2026',
  description:
    'Crea facturas conformes §19 UStG (Kleinunternehmerregelung): gratis, sin registro. Todos los campos obligatorios incluidos.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/kleinunternehmer-rechnung',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/kleinunternehmer-rechnung',
      de: 'https://www.girocodegenerator.com/kleinunternehmer-rechnung',
      en: 'https://www.girocodegenerator.com/en/kleinunternehmer-rechnung',
      fr: 'https://www.girocodegenerator.com/fr/kleinunternehmer-rechnung',
      es: 'https://www.girocodegenerator.com/es/kleinunternehmer-rechnung',
    },
  },
};

export default function SmallBusinessInvoicePageES() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <header className="relative overflow-hidden px-4 pb-12 pt-10 text-center sm:pt-16">
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5">
          <nav className="text-xs text-slate-500" aria-label="Breadcrumb">
            <Link href="/es" className="hover:text-slate-300">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-400">Factura pequeña empresa</span>
          </nav>
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/40">
            ✅ §19 UStG conforme · Gratis · Sin registro
          </p>
          <h1
            className="font-bold tracking-tight text-slate-50"
            style={{ fontSize: 'clamp(26px, 4vw, 48px)', lineHeight: 1.1 }}
          >
            Factura pequeña empresa –<br className="hidden sm:block" /> §19 UStG conforme
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Crea facturas conformes §19 UStG para pequeñas empresas gratis.
            Sin IVA requerido, aviso legal incluido automáticamente.
          </p>
          <Link
            href="/es/rechnungs-editor"
            className="mt-2 inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}
          >
            Crear factura →
          </Link>
        </div>
      </header>
      <div className="mx-auto max-w-4xl px-4 pb-20">
        <div className="rounded-2xl border border-emerald-500/25 bg-slate-900/60 p-6 text-center">
          <p className="mb-4 text-slate-300">
            Esta página está disponible en alemán con contenido completo.
          </p>
          <Link
            href="/kleinunternehmer-rechnung"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-slate-500"
          >
            🇩🇪 Versión alemana
          </Link>
        </div>
      </div>
    </main>
  );
}
