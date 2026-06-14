'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ProductHuntBadge } from './ProductHuntBadge';

type Locale = 'de' | 'en' | 'fr' | 'es' | 'it';

function getLocalePrefix(pathname: string): string {
  if (pathname === '/en' || pathname.startsWith('/en/')) return '/en';
  if (pathname === '/fr' || pathname.startsWith('/fr/')) return '/fr';
  if (pathname === '/es' || pathname.startsWith('/es/')) return '/es';
  if (pathname === '/it' || pathname.startsWith('/it/')) return '/it';
  return '';
}

function getLocale(pathname: string): Locale {
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
  if (pathname === '/fr' || pathname.startsWith('/fr/')) return 'fr';
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es';
  if (pathname === '/it' || pathname.startsWith('/it/')) return 'it';
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
  it: {
    heading: 'Casi d\'uso',
    items: [
      { slug: '/freelancer', label: 'Freelancer' },
      { slug: '/verein', label: 'Associazioni' },
      { slug: '/handwerker', label: 'Artigiani' },
      { slug: '/spenden', label: 'Donazioni' },
      { slug: '/kleinunternehmen', label: 'Piccole Imprese' },
      { slug: '/privatverkauf', label: 'Vendite Private' },
    ],
  },
};

export function Footer() {
  const pathname = usePathname();
  const prefix = getLocalePrefix(pathname);
  const locale = getLocale(pathname);
  const useCases = useCaseLabels[locale];

  return (
    <footer className="font-ds border-t border-[#e2e8f0] bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-7 py-[22px] text-[11px] text-[#94a3b8]">

        {/* Use Cases */}
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.08em] text-[#64748b]">
            {useCases.heading}
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-1.5">
            {useCases.items.map((item) => (
              <Link
                key={item.slug}
                href={`${prefix}${item.slug}`}
                className="font-semibold text-[#94a3b8] transition-colors duration-150 hover:text-[#334155]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-4">
          <ProductHuntBadge />
          <a
            href="https://backlinklog.com/listing/girocodegenerator.com?utm_source=backlinklog&utm_medium=badge"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-[11px] border border-[#e2e8f0] bg-[#f8fafc] px-3 py-2 text-xs font-semibold text-[#94a3b8] transition-all duration-150 hover:border-[#22c55e] hover:text-[#334155]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            Listed on BacklinkLog
          </a>
        </div>

        {/* Bottom row: Copyright + Links */}
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="font-medium text-[#94a3b8]">
            © 2026 GiroCode Generator · lokal · keine Gewähr
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href={`${prefix}/scanner`} className="font-semibold text-[#94a3b8] transition-colors duration-150 hover:text-[#334155]">
              GiroCode Scanner
            </Link>
            <Link href={`${prefix}/blog`} className="font-semibold text-[#94a3b8] transition-colors duration-150 hover:text-[#334155]">
              Blog
            </Link>
            <Link href={`${prefix}/impressum`} className="font-semibold text-[#94a3b8] transition-colors duration-150 hover:text-[#334155]">
              Impressum
            </Link>
            <Link href={`${prefix}/datenschutz`} className="font-semibold text-[#94a3b8] transition-colors duration-150 hover:text-[#334155]">
              Datenschutz
            </Link>
            <Link href={`${prefix}/ueber-uns`} className="font-semibold text-[#94a3b8] transition-colors duration-150 hover:text-[#334155]">
              Über uns
            </Link>
            <Link href={`${prefix}/kontakt`} className="font-semibold text-[#94a3b8] transition-colors duration-150 hover:text-[#334155]">
              Kontakt
            </Link>
            <Link href={`${prefix}/fuer-entwickler`} className="font-semibold text-[#94a3b8] transition-colors duration-150 hover:text-[#334155]">
              Für Entwickler
            </Link>
            <Link href={`${prefix}/api-docs`} className="font-semibold text-[#94a3b8] transition-colors duration-150 hover:text-[#334155]">
              API-Docs
            </Link>
            <Link href={`${prefix}/api-access`} className="font-semibold text-[#94a3b8] transition-colors duration-150 hover:text-[#334155]">
              {locale === 'en' ? 'API Access' : locale === 'fr' ? 'Accès API' : locale === 'es' ? 'Acceso API' : locale === 'it' ? 'Accesso API' : 'API-Zugang'}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
