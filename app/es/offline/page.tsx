import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sin conexión – GiroCode Generator',
  description: 'Estás sin conexión. El GiroCode Generator también funciona sin internet.',
  robots: { index: false, follow: false },
};

export default function OfflinePageEs() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 text-7xl">📡</div>
      <h1 className="mb-4 text-3xl font-bold text-white">Estás sin conexión</h1>
      <p className="mb-2 max-w-md text-lg text-slate-300">
        Esta página no está disponible sin conexión. ¡Pero el{' '}
        <strong className="text-green-400">GiroCode Generator</strong> funciona sin conexión a
        internet!
      </p>
      <p className="mb-8 text-sm text-slate-500">
        Las páginas ya visitadas están disponibles sin conexión.
      </p>
      <Link
        href="/es"
        className="rounded-lg bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400"
      >
        Ir al Generador
      </Link>
    </div>
  );
}
