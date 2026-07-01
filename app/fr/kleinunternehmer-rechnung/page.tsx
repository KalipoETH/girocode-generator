import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Facture petite entreprise – §19 UStG conforme 2026',
  description:
    'Créez des factures conformes §19 UStG (Kleinunternehmerregelung): gratuitement, sans inscription. Tous les champs obligatoires inclus.',
  alternates: {
    canonical: `${SITE_URL}/fr/kleinunternehmer-rechnung`,
    languages: {
      'x-default': `${SITE_URL}/kleinunternehmer-rechnung`,
      de: `${SITE_URL}/kleinunternehmer-rechnung`,
      en: `${SITE_URL}/en/kleinunternehmer-rechnung`,
      fr: `${SITE_URL}/fr/kleinunternehmer-rechnung`,
      es: `${SITE_URL}/es/kleinunternehmer-rechnung`,
    },
  },
};

export default function SmallBusinessInvoicePageFR() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <header className="relative overflow-hidden px-4 pb-12 pt-10 text-center sm:pt-16">
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5">
          <nav className="text-xs text-slate-500" aria-label="Breadcrumb">
            <Link href="/fr" className="hover:text-slate-300">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-400">Facture petite entreprise</span>
          </nav>
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/40">
            ✅ §19 UStG conforme · Gratuit · Sans inscription
          </p>
          <h1
            className="font-bold tracking-tight text-slate-50"
            style={{ fontSize: 'clamp(26px, 4vw, 48px)', lineHeight: 1.1 }}
          >
            Facture petite entreprise –<br className="hidden sm:block" /> §19 UStG conforme
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Créez des factures conformes §19 UStG pour petites entreprises gratuitement.
            Sans TVA requise, mention légale incluse automatiquement.
          </p>
          <Link
            href="/fr/rechnungs-editor"
            className="mt-2 inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}
          >
            Créer une facture →
          </Link>
        </div>
      </header>
      <div className="mx-auto max-w-4xl px-4 pb-20">
        <div className="rounded-2xl border border-emerald-500/25 bg-slate-900/60 p-6 text-center">
          <p className="mb-4 text-slate-300">
            Cette page est disponible en allemand avec le contenu complet.
          </p>
          <Link
            href="/kleinunternehmer-rechnung"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-slate-500"
          >
            🇩🇪 Version allemande
          </Link>
        </div>
      </div>
    </main>
  );
}
