'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

const mainNavConfig = [
  { key: 'home', path: '' },
  { key: 'knowledge', path: '/wissen' },
  { key: 'blog', path: '/blog' },
  { key: 'about', path: '/ueber-uns' },
  { key: 'contact', path: '/kontakt' },
];

const toolsItems = [
  { key: 'invoiceEditor', path: '/rechnungs-editor', icon: '✏️' },
  { key: 'scanner', path: '/scanner', icon: '🔍' },
  { key: 'bulk', path: '/bulk', icon: '📦' },
  { key: 'apiDocs', path: '/api-docs', icon: '🔌' },
  { key: 'apiAccess', path: '/api-access', icon: '🔒' },
  { key: 'developers', path: '/fuer-entwickler', icon: '👨‍💻' },
];

const navLabels: Record<Locale, Record<string, string>> = {
  de: {
    home: 'Generator',
    knowledge: 'Wissen',
    blog: 'Blog',
    about: 'Über uns',
    contact: 'Kontakt',
    tools: 'Tools',
    invoiceEditor: 'Rechnungs-Editor',
    scanner: 'Scanner',
    bulk: 'Bulk',
    apiDocs: 'API-Docs',
    apiAccess: 'API-Zugang',
    developers: 'Für Entwickler',
  },
  en: {
    home: 'Generator',
    knowledge: 'Knowledge',
    blog: 'Blog',
    about: 'About us',
    contact: 'Contact',
    tools: 'Tools',
    invoiceEditor: 'Invoice Editor',
    scanner: 'Scanner',
    bulk: 'Bulk',
    apiDocs: 'API Docs',
    apiAccess: 'API Access',
    developers: 'For developers',
  },
  fr: {
    home: 'Générateur',
    knowledge: 'Informations',
    blog: 'Blog',
    about: 'À propos',
    contact: 'Contact',
    tools: 'Outils',
    invoiceEditor: 'Éditeur de facture',
    scanner: 'Scanner',
    bulk: 'Lot',
    apiDocs: 'API Docs',
    apiAccess: 'Accès API',
    developers: 'Développeurs',
  },
  es: {
    home: 'Generador',
    knowledge: 'Información',
    blog: 'Blog',
    about: 'Nosotros',
    contact: 'Contacto',
    tools: 'Herramientas',
    invoiceEditor: 'Editor de facturas',
    scanner: 'Escáner',
    bulk: 'Masivo',
    apiDocs: 'API Docs',
    apiAccess: 'Acceso API',
    developers: 'Desarrolladores',
  },
};

const localeOrder: Locale[] = ['de', 'en', 'fr', 'es'];

function getLocaleFromPathname(pathname: string): Locale {
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
  if (pathname === '/fr' || pathname.startsWith('/fr/')) return 'fr';
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es';
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
  const [mobileOpen, setMobileOpen] = useState(false);

  // Schließe Mobile-Menü bei Routenwechsel
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Verhindere Body-Scroll bei geöffnetem Menü
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-[9999] border-b border-white/5 bg-[#0b0c10]/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <Image
            src="/logo-dark.jpg"
            alt="GiroCode Generator"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-50">
              GiroCode Generator
            </span>
            <span className="text-[11px] text-slate-400">
              SEPA-EPC &amp; Rechnungs-PDF
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-3 md:flex">
          <nav className="flex flex-wrap items-center gap-1 text-[11px] text-slate-300 lg:gap-1.5 lg:text-xs">
            {mainNavConfig.map((item) => {
              const basePath = localeMeta[currentLocale].prefix || '';
              const href = `${basePath}${item.path || ''}` || '/';
              const isRoot = item.key === 'home';
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

            <ToolsDropdown
              currentLocale={currentLocale}
              pathname={pathname}
            />
          </nav>

          <LanguageSwitcher
            pathname={pathname}
            currentLocale={currentLocale}
            currentLocaleInfo={currentLocaleInfo}
          />
        </div>

        {/* Mobile: Hamburger Button */}
        <button
          type="button"
          className="flex items-center justify-center rounded-lg p-2 text-slate-300 transition hover:bg-slate-800/70 hover:text-slate-50 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menü */}
      {mobileOpen && (
        <div className="border-t border-white/5 bg-[#0b0c10] md:hidden">
          <nav className="flex flex-col px-4 py-2">
            {mainNavConfig.map((item) => {
              const basePath = localeMeta[currentLocale].prefix || '';
              const href = `${basePath}${item.path || ''}` || '/';
              const isRoot = item.key === 'home';
              const active = isRoot
                ? pathname === '/' || pathname === basePath || pathname === ''
                : pathname.startsWith(href);

              return (
                <Link
                  key={item.key}
                  href={href || '/'}
                  className={[
                    'flex items-center rounded-lg px-3 py-4 text-sm font-medium transition',
                    active
                      ? 'text-emerald-300'
                      : 'text-slate-300 hover:bg-slate-800/50 hover:text-slate-50',
                  ].join(' ')}
                  onClick={() => setMobileOpen(false)}
                >
                  {navLabels[currentLocale][item.key]}
                </Link>
              );
            })}

            {/* Tools-Bereich */}
            <div className="mt-1 border-t border-white/5 pt-1">
              <p className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                {navLabels[currentLocale].tools}
              </p>
              {toolsItems.map((item) => {
                const basePath = localeMeta[currentLocale].prefix || '';
                const href = `${basePath}${item.path}`;
                const isActive = pathname.startsWith(href) || pathname === item.path;
                return (
                  <Link
                    key={item.key}
                    href={href}
                    className={[
                      'flex items-center gap-3 rounded-lg px-3 py-4 text-sm transition',
                      isActive
                        ? 'text-emerald-300'
                        : 'text-slate-300 hover:bg-slate-800/50 hover:text-slate-50',
                    ].join(' ')}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span aria-hidden>{item.icon}</span>
                    <span>{navLabels[currentLocale][item.key]}</span>
                  </Link>
                );
              })}
            </div>

            {/* Sprachumschalter */}
            <div className="mt-1 border-t border-white/5 pt-2 pb-3">
              <p className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Sprache
              </p>
              <div className="flex flex-wrap gap-2 px-3">
                {localeOrder.map((locale) => {
                  const info = localeMeta[locale];
                  const href = buildPathForLocale(locale, pathname);
                  const isActive = locale === currentLocale;
                  return (
                    <Link
                      key={locale}
                      href={href}
                      className={[
                        'flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition',
                        isActive
                          ? 'border-emerald-500/40 bg-emerald-500/15 text-emerald-300'
                          : 'border-slate-600/70 bg-slate-900/60 text-slate-300 hover:border-slate-400',
                      ].join(' ')}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span aria-hidden>{info.flag}</span>
                      <span>{info.code}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

interface ToolsDropdownProps {
  currentLocale: Locale;
  pathname: string;
}

function ToolsDropdown({ currentLocale, pathname }: ToolsDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const basePath = localeMeta[currentLocale].prefix || '';

  const isToolsActive = toolsItems.some((item) => {
    const href = `${basePath}${item.path}`;
    return pathname.startsWith(href) || pathname === item.path;
  });

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={[
          'flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-full px-2 py-1 transition',
          isToolsActive
            ? 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/40'
            : 'text-slate-300 hover:bg-slate-800/70 hover:text-slate-50',
        ].join(' ')}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {navLabels[currentLocale].tools}
        <span
          aria-hidden
          className={`text-[9px] text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`}
        >
          ▼
        </span>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-[10000] w-52 pt-2">
        <div className="rounded-xl border border-[#1f2431] bg-[#121318] text-xs text-slate-100 shadow-lg shadow-black/60">
          {toolsItems.map((item) => {
            const href = `${basePath}${item.path}`;
            const isActive = pathname.startsWith(href) || pathname === item.path;
            return (
              <Link
                key={item.key}
                href={href}
                className={[
                  'flex items-center gap-2.5 px-4 py-2.5 transition-colors first:rounded-t-xl last:rounded-b-xl',
                  isActive
                    ? 'bg-emerald-500/15 text-emerald-300'
                    : 'hover:bg-[#1a1d25]',
                ].join(' ')}
                onClick={() => setOpen(false)}
              >
                <span aria-hidden>{item.icon}</span>
                <span>{navLabels[currentLocale][item.key]}</span>
              </Link>
            );
          })}
        </div>
        </div>
      )}
    </div>
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
