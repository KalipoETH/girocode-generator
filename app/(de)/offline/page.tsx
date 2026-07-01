import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Offline – GiroCode Generator',
  description: 'Du bist offline. Der GiroCode Generator funktioniert aber auch ohne Internet.',
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 text-7xl">📡</div>
      <h1 className="mb-4 text-3xl font-bold text-white">Du bist offline</h1>
      <p className="mb-2 max-w-md text-lg text-slate-300">
        Diese Seite ist offline nicht verfügbar. Der{' '}
        <strong className="text-green-400">GiroCode Generator</strong> selbst funktioniert aber
        auch ohne Internetverbindung!
      </p>
      <p className="mb-8 text-sm text-slate-500">
        Bereits besuchte Seiten sind offline verfügbar.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400"
      >
        Zum Generator
      </Link>
    </div>
  );
}
