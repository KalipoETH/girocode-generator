'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type Locale = 'de' | 'en' | 'fr' | 'es' | 'it';

const localeMeta: Record<
  Locale,
  { label: string; flag: string; code: string; prefix: string }
> = {
  de: { label: 'Deutsch', flag: '🇩🇪', code: 'DE', prefix: '' },
  en: { label: 'English', flag: '🇬🇧', code: 'EN', prefix: '/en' },
  fr: { label: 'Français', flag: '🇫🇷', code: 'FR', prefix: '/fr' },
  es: { label: 'Español', flag: '🇪🇸', code: 'ES', prefix: '/es' },
  it: { label: 'Italiano', flag: '🇮🇹', code: 'IT', prefix: '/it' },
};

const mainNavConfig = [
  { key: 'home', path: '' },
  { key: 'banks', path: '/banken' },
  { key: 'knowledge', path: '/wissen' },
  { key: 'blog', path: '/blog' },
  { key: 'about', path: '/ueber-uns' },
  { key: 'contact', path: '/kontakt' },
];

// Die /banken-Übersicht existiert vorerst nur auf Deutsch. Damit auf
// /en, /fr, /es, /it kein Link auf eine nicht vorhandene Seite entsteht,
// wird der "Banken"-Eintrag ausschließlich für die DE-Navbar gerendert.
const isNavItemVisible = (key: string, locale: Locale): boolean =>
  key !== 'banks' || locale === 'de';

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
    banks: 'Banken',
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
    cta: 'GiroCode erstellen',
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
    cta: 'Create GiroCode',
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
    cta: 'Créer un GiroCode',
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
    cta: 'Crear GiroCode',
  },
  it: {
    home: 'Generatore',
    knowledge: 'Informazioni',
    blog: 'Blog',
    about: 'Chi siamo',
    contact: 'Contatto',
    tools: 'Strumenti',
    invoiceEditor: 'Editor fatture',
    scanner: 'Scanner',
    bulk: 'Bulk',
    apiDocs: 'API Docs',
    apiAccess: 'Accesso API',
    developers: 'Per sviluppatori',
    cta: 'Crea GiroCode',
  },
};

const toolDescriptions: Record<Locale, Record<string, string>> = {
  de: {
    invoiceEditor: 'Drag & Drop gestalten',
    scanner: 'Bestehenden Code auslesen',
    bulk: 'Mehrere Codes per CSV',
    apiDocs: 'API-Referenz für Entwickler',
    apiAccess: 'Zugang verwalten',
    developers: 'Tools für Entwickler',
  },
  en: {
    invoiceEditor: 'Design via drag & drop',
    scanner: 'Read an existing code',
    bulk: 'Multiple codes via CSV',
    apiDocs: 'API reference for developers',
    apiAccess: 'Manage your access',
    developers: 'Tools for developers',
  },
  fr: {
    invoiceEditor: 'Créer par glisser-déposer',
    scanner: 'Lire un code existant',
    bulk: 'Plusieurs codes via CSV',
    apiDocs: 'Référence API pour développeurs',
    apiAccess: "Gérer l'accès",
    developers: 'Outils pour développeurs',
  },
  es: {
    invoiceEditor: 'Diseñar con arrastrar y soltar',
    scanner: 'Leer un código existente',
    bulk: 'Varios códigos vía CSV',
    apiDocs: 'Referencia de API para desarrolladores',
    apiAccess: 'Gestionar el acceso',
    developers: 'Herramientas para desarrolladores',
  },
  it: {
    invoiceEditor: 'Crea con drag & drop',
    scanner: 'Leggi un codice esistente',
    bulk: 'Più codici via CSV',
    apiDocs: 'Riferimento API per sviluppatori',
    apiAccess: "Gestisci l'accesso",
    developers: 'Strumenti per sviluppatori',
  },
};

const localeOrder: Locale[] = ['de', 'en', 'fr', 'es', 'it'];

function getLocaleFromPathname(pathname: string): Locale {
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
  if (pathname === '/fr' || pathname.startsWith('/fr/')) return 'fr';
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es';
  if (pathname === '/it' || pathname.startsWith('/it/')) return 'it';
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
  const basePath = localeMeta[currentLocale].prefix || '';
  const ctaHref = basePath || '/';
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
    <header className="sticky top-0 z-[9999] overflow-visible bg-[#0b0c10]/90 px-4 py-3 backdrop-blur sm:px-7 sm:py-[22px]">
      <nav className="mx-auto flex h-auto max-w-[1320px] items-center gap-3 rounded-full border border-white/8 bg-[#121826] px-2 py-2 shadow-[0_14px_38px_rgba(0,0,0,0.5)] sm:gap-[22px] sm:py-0 lg:h-[68px] lg:pl-[10px] lg:pr-2">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-none items-center gap-3 pl-2"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src="/logo.svg"
            alt="GiroCode Generator"
            width={42}
            height={42}
            className="rounded-xl"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-base font-extrabold tracking-tight text-slate-50">
              GiroCode Generator
            </span>
            <span className="hidden text-[10.5px] font-semibold tracking-wide text-[#8b97a8] sm:block">
              SEPA-EPC &amp; Rechnungs-PDF
            </span>
          </div>
        </Link>

        <span className="hidden h-[30px] w-px flex-none bg-white/10 lg:block" />

        {/* Desktop Navigation */}
        <div className="mx-auto hidden items-center gap-0.5 lg:flex">
          {mainNavConfig
            .filter((item) => isNavItemVisible(item.key, currentLocale))
            .map((item) => {
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
                  'whitespace-nowrap rounded-full px-[15px] py-[9px] text-[14.5px] transition',
                  active
                    ? 'bg-emerald-500/15 font-bold text-emerald-400'
                    : 'font-semibold text-slate-300 hover:bg-white/6 hover:text-slate-50',
                ].join(' ')}
              >
                {navLabels[currentLocale][item.key]}
              </Link>
            );
          })}

          <ToolsDropdown currentLocale={currentLocale} pathname={pathname} />
        </div>

        {/* Desktop: Sprachchip + CTA */}
        <div className="hidden flex-none items-center gap-2.5 lg:flex">
          <LanguageSwitcher
            pathname={pathname}
            currentLocale={currentLocale}
            currentLocaleInfo={currentLocaleInfo}
          />
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-emerald-500 px-[22px] py-[13px] text-[14.5px] font-bold text-[#06210f] shadow-[0_8px_22px_rgba(34,197,94,0.3)] transition hover:bg-emerald-600"
          >
            {navLabels[currentLocale].cta} <span aria-hidden>↗</span>
          </Link>
        </div>

        {/* Mobile: Hamburger Button */}
        <button
          type="button"
          className="flex flex-none items-center justify-center rounded-full p-2 text-slate-300 transition hover:bg-white/6 hover:text-slate-50 lg:hidden"
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
      </nav>

      {/* Mobile Dropdown Menü */}
      {mobileOpen && (
        <div className="mx-4 mt-2 max-h-[calc(100vh-100px)] overflow-y-auto rounded-2xl border border-white/8 bg-[#121826] shadow-[0_14px_38px_rgba(0,0,0,0.5)] lg:hidden">
          <nav className="flex flex-col px-4 py-2">
            <Link
              href={ctaHref}
              className="my-2 flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-[22px] py-3 text-sm font-bold text-[#06210f] shadow-[0_8px_22px_rgba(34,197,94,0.3)] transition hover:bg-emerald-600"
              onClick={() => setMobileOpen(false)}
            >
              {navLabels[currentLocale].cta} <span aria-hidden>↗</span>
            </Link>

            {mainNavConfig
            .filter((item) => isNavItemVisible(item.key, currentLocale))
            .map((item) => {
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
                      : 'text-slate-300 hover:bg-white/6 hover:text-slate-50',
                  ].join(' ')}
                  onClick={() => setMobileOpen(false)}
                >
                  {navLabels[currentLocale][item.key]}
                </Link>
              );
            })}

            {/* Tools-Bereich */}
            <div className="mt-1 border-t border-white/8 pt-1">
              <p className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#8b97a8]">
                {navLabels[currentLocale].tools}
              </p>
              {toolsItems.map((item) => {
                const href = `${basePath}${item.path}`;
                const isActive = pathname.startsWith(href) || pathname === item.path;
                return (
                  <Link
                    key={item.key}
                    href={href}
                    className={[
                      'flex items-start gap-3 rounded-lg px-3 py-3 text-sm transition',
                      isActive
                        ? 'text-emerald-300'
                        : 'text-slate-300 hover:bg-white/6 hover:text-slate-50',
                    ].join(' ')}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span aria-hidden className="mt-0.5 text-lg leading-none">{item.icon}</span>
                    <span className="flex flex-col gap-0.5">
                      <span className="font-bold">{navLabels[currentLocale][item.key]}</span>
                      <span className="text-xs font-medium text-[#8b97a8]">
                        {toolDescriptions[currentLocale][item.key]}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Sprachumschalter */}
            <div className="mt-1 border-t border-white/8 pt-2 pb-3">
              <p className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#8b97a8]">
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
                          : 'border-white/10 bg-[#1e293b] text-slate-300 hover:bg-[#2a384d]',
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
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
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

  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={[
          'flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full px-[15px] py-[9px] text-[14.5px] transition',
          isToolsActive
            ? 'bg-emerald-500/15 font-bold text-emerald-400'
            : 'font-semibold text-slate-300 hover:bg-white/6 hover:text-slate-50',
        ].join(' ')}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {navLabels[currentLocale].tools}
        <span
          aria-hidden
          className={`text-[9px] text-[#8b97a8] transition-transform ${open ? 'rotate-180' : ''}`}
        >
          ▼
        </span>
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 w-[272px] -translate-x-1/2 pt-[14px]">
          <div
            className="rounded-2xl border border-white/8 bg-[#1a2233] p-2 shadow-[0_18px_44px_rgba(0,0,0,0.55)]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {toolsItems.map((item) => {
              const href = `${basePath}${item.path}`;
              const isActive = pathname.startsWith(href) || pathname === item.path;
              return (
                <Link
                  key={item.key}
                  href={href}
                  className={[
                    'flex items-start gap-[11px] rounded-[10px] px-[11px] py-2.5 transition-colors',
                    isActive ? 'bg-emerald-500/15' : 'hover:bg-emerald-500/15',
                  ].join(' ')}
                  onClick={() => setOpen(false)}
                >
                  <span aria-hidden className="mt-0.5 text-lg leading-none">{item.icon}</span>
                  <span className="flex flex-col gap-0.5">
                    <span className="text-sm font-bold text-slate-50">
                      {navLabels[currentLocale][item.key]}
                    </span>
                    <span className="text-xs font-medium text-[#8b97a8]">
                      {toolDescriptions[currentLocale][item.key]}
                    </span>
                  </span>
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
        className="flex cursor-pointer items-center gap-1.5 rounded-full bg-[#1e293b] px-[13px] py-2.5 text-[13.5px] font-bold text-slate-300 transition hover:bg-[#2a384d]"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span aria-hidden className="text-[15px]">{currentLocaleInfo.flag}</span>
        <span>{currentLocaleInfo.code}</span>
        <span
          aria-hidden
          className={`text-[10px] text-[#8b97a8] transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        >
          ▼
        </span>
      </button>
      {open && (
        <div className="absolute right-0 top-full z-20 mt-2 w-40 rounded-xl border border-white/8 bg-[#1a2233] text-xs text-slate-100 shadow-[0_18px_44px_rgba(0,0,0,0.55)]">
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
                    : 'hover:bg-white/6',
                ].join(' ')}
                onClick={() => setOpen(false)}
              >
                <span aria-hidden>{info.flag}</span>
                <span className="flex-1">{info.label}</span>
                <span className="text-[10px] text-[#8b97a8]">{info.code}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
