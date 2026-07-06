import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GiroCode mit ING-DiBa scannen – Anleitung 2026',
  description:
    'GiroCode mit ING-DiBa (jetzt ING) scannen. Die ING-DiBa heißt seit 2019 ING Deutschland. ✅ Zur aktuellen Anleitung für die ING Banking to go App.',
  alternates: {
    canonical: `${SITE_URL}/ing`,
  },
};

export default function IngDibaPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">

        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li><Link href="/" className="text-sky-400 hover:text-sky-300">Startseite</Link></li>
            <li aria-hidden>›</li>
            <li className="text-slate-400">ING-DiBa → ING</li>
          </ol>
        </nav>

        <header className="mb-10 space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Weitergeleitet: ING-DiBa → ING
          </p>
          <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
            GiroCode mit ING-DiBa (jetzt ING) scannen
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
            Die ING-DiBa heißt seit 2019 offiziell <strong>ING Deutschland</strong>.
            Die App heißt jetzt „ING Banking to go". Die Anleitung zum GiroCode-Scannen
            findest du auf der ING-Seite.
          </p>
        </header>

        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-5">
          <p className="mb-4 text-sm text-slate-300">
            Du wirst automatisch zur aktuellen ING-Seite weitergeleitet. Falls nicht, klicke hier:
          </p>
          <Link
            href="/ing"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,197,94,0.4)]"
            style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: '#ffffff' }}
          >
            Zur ING-Anleitung (ING Banking to go) →
          </Link>
        </div>

        <div className="mt-8 flex flex-col items-start gap-3 border-t border-slate-800 pt-6">
          <Link href="/banken" className="group inline-flex items-center gap-2 text-sm font-semibold text-[#22c55e] hover:text-emerald-300">
            Alle Banken im Überblick
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
          <Link href="/girocode-funktioniert-nicht" className="group inline-flex items-center gap-2 text-sm font-medium text-[#9aa1b6] hover:text-[#e8eaf0]">
            GiroCode wird nicht erkannt? Zur Fehlerbehebung
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>

      </div>
    </main>
  );
}
