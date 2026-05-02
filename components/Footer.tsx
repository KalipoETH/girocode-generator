'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ProductHuntBadge } from './ProductHuntBadge';

type Locale = 'de' | 'en' | 'fr' | 'es';

function getLocalePrefix(pathname: string): string {
  if (pathname === '/en' || pathname.startsWith('/en/')) return '/en';
  if (pathname === '/fr' || pathname.startsWith('/fr/')) return '/fr';
  if (pathname === '/es' || pathname.startsWith('/es/')) return '/es';
  return '';
}

function getLocale(pathname: string): Locale {
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
  if (pathname === '/fr' || pathname.startsWith('/fr/')) return 'fr';
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es';
  return 'de';
}

const useCaseLabels: Record<Locale, { heading: string; items: { slug: string; label: string }[] }> = {
  de: {
    heading: 'Use Cases',
    items: [
      { slug: '/freelancer', label: 'Freelancer' },
      { slug: '/verein', label: 'Vereine' },
      { slug: '/handwerker', label: 'Handwerker' },
      { slug: '/spenden', label: 'Spenden' },
      { slug: '/kleinunternehmen', label: 'Kleinunternehmen' },
      { slug: '/privatverkauf', label: 'Privatverkauf' },
    ],
  },
  en: {
    heading: 'Use Cases',
    items: [
      { slug: '/freelancer', label: 'Freelancers' },
      { slug: '/verein', label: 'Associations' },
      { slug: '/handwerker', label: 'Tradespeople' },
      { slug: '/spenden', label: 'Donations' },
      { slug: '/kleinunternehmen', label: 'Small Businesses' },
      { slug: '/privatverkauf', label: 'Private Sales' },
    ],
  },
  fr: {
    heading: 'Cas d\u2019usage',
    items: [
      { slug: '/freelancer', label: 'Freelances' },
      { slug: '/verein', label: 'Associations' },
      { slug: '/handwerker', label: 'Artisans' },
      { slug: '/spenden', label: 'Dons' },
      { slug: '/kleinunternehmen', label: 'Petites Entreprises' },
      { slug: '/privatverkauf', label: 'Ventes Privées' },
    ],
  },
  es: {
    heading: 'Casos de uso',
    items: [
      { slug: '/freelancer', label: 'Autónomos' },
      { slug: '/verein', label: 'Asociaciones' },
      { slug: '/handwerker', label: 'Talleres' },
      { slug: '/spenden', label: 'Donaciones' },
      { slug: '/kleinunternehmen', label: 'Pequeñas Empresas' },
      { slug: '/privatverkauf', label: 'Ventas Privadas' },
    ],
  },
};

export function Footer() {
  const pathname = usePathname();
  const prefix = getLocalePrefix(pathname);
  const locale = getLocale(pathname);
  const useCases = useCaseLabels[locale];

  return (
    <footer className="border-t border-white/5 bg-[#0b0c10]/80">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-6 text-[11px] text-slate-400">
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-300">
            {useCases.heading}
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {useCases.items.map((item) => (
              <Link
                key={item.slug}
                href={`${prefix}${item.slug}`}
                className="hover:text-slate-200 hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-center pt-1">
          <ProductHuntBadge />
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 GiroCode Generator · lokal · keine Gewähr
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={`${prefix}/scanner`} className="hover:text-slate-200 hover:underline">
              GiroCode Scanner
            </Link>
            <Link href={`${prefix}/blog`} className="hover:text-slate-200 hover:underline">
              Blog
            </Link>
            <Link href={`${prefix}/impressum`} className="hover:text-slate-200 hover:underline">
              Impressum
            </Link>
            <Link href={`${prefix}/datenschutz`} className="hover:text-slate-200 hover:underline">
              Datenschutz
            </Link>
            <Link href={`${prefix}/ueber-uns`} className="hover:text-slate-200 hover:underline">
              Über uns
            </Link>
            <Link href={`${prefix}/kontakt`} className="hover:text-slate-200 hover:underline">
              Kontakt
            </Link>
            <Link href={`${prefix}/fuer-entwickler`} className="hover:text-slate-200 hover:underline">
              Für Entwickler
            </Link>
            <Link href="/api-docs" className="hover:text-slate-200 hover:underline">
              API-Docs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
