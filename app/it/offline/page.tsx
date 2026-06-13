import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Offline – GiroCode Generator',
  description: 'Sei offline. Il GiroCode Generator funziona anche senza internet.',
  robots: { index: false, follow: false },
};

export default function OfflinePageIt() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 text-7xl">📡</div>
      <h1 className="mb-4 text-3xl font-bold text-white">Sei offline</h1>
      <p className="mb-2 max-w-md text-lg text-slate-300">
        Questa pagina non è disponibile offline. Ma il{' '}
        <strong className="text-green-400">GiroCode Generator</strong> funziona anche senza
        connessione internet!
      </p>
      <p className="mb-8 text-sm text-slate-500">
        Le pagine già visitate sono disponibili offline.
      </p>
      <Link
        href="/it"
        className="rounded-lg bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400"
      >
        Vai al Generatore
      </Link>
    </div>
  );
}
