import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Offline – GiroCode Generator',
  description: "You're offline. The GiroCode Generator works without internet too.",
  robots: { index: false, follow: false },
};

export default function OfflinePageEn() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 text-7xl">📡</div>
      <h1 className="mb-4 text-3xl font-bold text-white">You&apos;re offline</h1>
      <p className="mb-2 max-w-md text-lg text-slate-300">
        This page is not available offline. But the{' '}
        <strong className="text-green-400">GiroCode Generator</strong> works without an internet
        connection!
      </p>
      <p className="mb-8 text-sm text-slate-500">Previously visited pages are available offline.</p>
      <Link
        href="/en"
        className="rounded-lg bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400"
      >
        Go to Generator
      </Link>
    </div>
  );
}
