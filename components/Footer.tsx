'use client';

import React from 'react';
import Link from 'next/link';
import { ProductHuntBadge } from './ProductHuntBadge';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0b0c10]/80">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 text-[11px] text-slate-400">
        <div className="flex justify-center pt-1">
          <ProductHuntBadge />
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>
            © 2025 GiroCode Generator · lokal · keine Gewähr
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/impressum" className="hover:text-slate-200 hover:underline">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-slate-200 hover:underline">
              Datenschutz
            </Link>
            <Link href="/ueber-uns" className="hover:text-slate-200 hover:underline">
              Über uns
            </Link>
            <Link href="/kontakt" className="hover:text-slate-200 hover:underline">
              Kontakt
            </Link>
            <Link href="/fuer-entwickler" className="hover:text-slate-200 hover:underline">
              Für Entwickler
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

