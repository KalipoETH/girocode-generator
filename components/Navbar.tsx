'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Locale = 'de' | 'en' | 'fr' | 'es';

const localeMeta: Record<
  Locale,
  { label: string; flag: string; code: string; prefix: string }
> = {
  de: { label: 'Deutsch', flag: '🇩🇪', code: 'DE', prefix: '' },
  en: { label: 'English', flag: '🇬🇧', code: 'EN', prefix: '/en' },
  fr: { label: 'Français', flag: '🇫🇷', code: 'FR', prefix: '/fr' },
  es: { label: 'Español', flag: '🇪🇸', code: 'ES', prefix: '/es' },
};

const navConfig = [
  { key: 'home', path: '' },
  { key: 'scanner', path: '/scanner' },
  { key: 'bulk', path: '/bulk' },
  { key: 'knowledge', path: '/wissen' },
  { key: 'blog', path: '/blog' },
  { key: 'about', path: '/ueber-uns' },
  { key: 'contact', path: '/kontakt' },
  { key: 'developers', path: '/fuer-entwickler' },
];

const navLabels: Record<Locale, Record<string, string>> = {
  de: {
    home: 'Generator',
    scanner: '🔍 Scanner',
    bulk: 'Bulk',
    knowledge: 'Wissen',
    blog: 'Blog',
    about: 'Über uns',
    contact: 'Kontakt',
    developers: 'Für Entwickler',
  },
  en: {
    home: 'Generator',
    scanner: '🔍 Scanner',
    bulk: 'Bulk',
    knowledge: 'Knowledge',
    blog: 'Blog',
    about: 'About us',
    contact: 'Contact',
    developers: 'For developers',
  },
  fr: {
    home: 'Générateur',
    scanner: '🔍 Scanner',
    bulk: 'Lot',
    knowledge: 'Informations',
    blog: 'Blog',
    about: 'À propos',
    contact: 'Contact',
    developers: 'Développeurs',
  },
  es: {
    home: 'Generador',
    scanner: '🔍 Escáner',
    bulk: 'Masivo',
    knowledge: 'Información',
    blog: 'Blog',
    about: 'Nosotros',
    contact: 'Contacto',
    developers: 'Desarrolladores',
  },
};

const localeOrder: Locale[] = ['de', 'en', 'fr', 'es'];

function getLocaleFromPathname(pathname: string): Locale {
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/fr')) return 'fr';
  if (pathname.startsWith('/es')) return 'es';
  return 'de';
}

function buildPathForLocale(targetLocale: Locale, pathname: string): string {
  const currentLocale = getLocaleFromPathname(pathname);
  const currentPrefix = localeMeta[currentLocale].prefix || '';

  let rest = pathname;
  if (currentPrefix && pathname.startsWith(currentPrefix)) {
    rest = pathname.slice(currentPrefix.length) || '/';
  }

  const targetPrefix = localeMeta[targetLocale].prefix || '';
  if (rest === '/') {
    return targetPrefix || '/';
  }

  return `${targetPrefix}${rest}`;
}

export function Navbar() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);
  const currentLocaleInfo = localeMeta[currentLocale];

  return (
    <header className="relative z-[9999] border-b border-white/5 bg-[#0b0c10]/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/40">
            QR
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-50">
              GiroCode Generator
            </span>
            <span className="text-[11px] text-slate-400">
              SEPA-EPC &amp; Rechnungs-PDF
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <nav className="flex flex-wrap items-center gap-1 text-[11px] text-slate-300 lg:gap-1.5 lg:text-xs">
            {navConfig.map((item) => {
              const basePath = localeMeta[currentLocale].prefix || '';
              const href = `${basePath}${item.path || '' || '/'}` || '/';
              const isRoot = href === '/' || href === '';
              const active = isRoot
                ? pathname === '/' || pathname === basePath || pathname === ''
                : pathname.startsWith(href);

              return (
                <Link
                  key={item.key}
                  href={href || '/'}
                  className={[
                    'whitespace-nowrap rounded-full px-2 py-1 transition',
                    active
                      ? 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/40'
                      : 'text-slate-300 hover:bg-slate-800/70 hover:text-slate-50',
                  ].join(' ')}
                >
                  {navLabels[currentLocale][item.key]}
                </Link>
              );
            })}
          </nav>

          <LanguageSwitcher
            pathname={pathname}
            currentLocale={currentLocale}
            currentLocaleInfo={currentLocaleInfo}
          />
        </div>
      </div>
    </header>
  );
}

interface LanguageSwitcherProps {
  pathname: string;
  currentLocale: Locale;
  currentLocaleInfo: (typeof localeMeta)[Locale];
}

function LanguageSwitcher({
  pathname,
  currentLocale,
  currentLocaleInfo,
}: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex cursor-pointer items-center gap-2 rounded-full border border-slate-600/70 bg-slate-900/60 px-3 py-1 text-[11px] font-medium text-slate-200 shadow-sm shadow-black/40 transition hover:border-slate-400 hover:bg-slate-800/70"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span aria-hidden>{currentLocaleInfo.flag}</span>
        <span>{currentLocaleInfo.code}</span>
        <span
          aria-hidden
          className={`text-[10px] text-slate-400 transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        >
          ▼
        </span>
      </button>
      {open && (
        <div className="absolute right-0 top-full z-[10000] mt-2 w-40 rounded-xl border border-slate-700/80 bg-[#05060a] text-xs text-slate-100 shadow-lg shadow-black/60">
          {localeOrder.map((locale) => {
            const info = localeMeta[locale];
            const href = buildPathForLocale(locale, pathname);
            const isActive = locale === currentLocale;
            return (
              <Link
                key={locale}
                href={href}
                className={[
                  'flex items-center gap-2 px-3 py-2',
                  isActive
                    ? 'bg-emerald-500/15 text-emerald-300'
                    : 'hover:bg-slate-800/80',
                ].join(' ')}
                onClick={() => setOpen(false)}
              >
                <span aria-hidden>{info.flag}</span>
                <span className="flex-1">{info.label}</span>
                <span className="text-[10px] text-slate-400">{info.code}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

