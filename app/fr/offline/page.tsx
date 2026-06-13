import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hors ligne – GiroCode Generator',
  description: 'Vous êtes hors ligne. Le GiroCode Generator fonctionne aussi sans internet.',
  robots: { index: false, follow: false },
};

export default function OfflinePageFr() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 text-7xl">📡</div>
      <h1 className="mb-4 text-3xl font-bold text-white">Vous êtes hors ligne</h1>
      <p className="mb-2 max-w-md text-lg text-slate-300">
        Cette page n&apos;est pas disponible hors ligne. Mais le{' '}
        <strong className="text-green-400">GiroCode Generator</strong> fonctionne sans connexion
        internet !
      </p>
      <p className="mb-8 text-sm text-slate-500">
        Les pages déjà visitées sont disponibles hors ligne.
      </p>
      <Link
        href="/fr"
        className="rounded-lg bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400"
      >
        Aller au Générateur
      </Link>
    </div>
  );
}
