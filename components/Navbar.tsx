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
    cta: 'QR-Code erstellen',
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
    cta: 'Create QR code',
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
    cta: 'Créer QR code',
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
    cta: 'Crear código QR',
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
    cta: 'Crea codice QR',
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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

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

  const basePath = localeMeta[currentLocale].prefix || '';
  const ctaHref = basePath || '/';

  return (
    <header className="font-ds sticky top-0 z-[9999] border-b border-[#e2e8f0] bg-white/[.88] backdrop-blur-[20px]">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center gap-[6px] px-7">

        {/* Logo */}
        <Link
          href="/"
          className="flex flex-shrink-0 items-center gap-[11px]"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src="/logo.svg"
            alt="GiroCode Generator"
            width={36}
            height={36}
            className="flex-shrink-0 rounded-lg"
          />
          <div className="flex flex-col leading-none">
            <span className="text-[17px] font-extrabold tracking-[-0.03em] text-[#0f172a]">
              <span className="font-medium">Giro</span>Code
            </span>
            <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#94a3b8]">
              Generator
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="ml-5 hidden flex-1 items-center gap-[10px] md:flex">
          <nav className="flex flex-wrap items-center gap-[2px]">
            {mainNavConfig.map((item) => {
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
                    'whitespace-nowrap rounded-[9px] px-3 py-[7px] text-[14px] font-semibold transition-[background,color] duration-150',
                    active
                      ? 'bg-[#f8fafc] text-[#0f172a]'
                      : 'text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a]',
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

          <div className="ml-auto flex items-center gap-[10px]">
            <LanguageSwitcher
              pathname={pathname}
              currentLocale={currentLocale}
              currentLocaleInfo={currentLocaleInfo}
            />
            <Link
              href={ctaHref}
              className="inline-flex items-center rounded-[11px] bg-[#22c55e] px-[18px] py-[9px] text-[13px] font-bold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#16a34a] hover:shadow-[0_4px_14px_rgba(34,197,94,.3)] active:translate-y-0 active:shadow-none"
            >
              {navLabels[currentLocale].cta}
            </Link>
          </div>
        </div>

        {/* Mobile: Hamburger Button */}
        <button
          type="button"
          className="ml-auto flex items-center justify-center rounded-[9px] p-2 text-[#64748b] transition-[background,color] duration-150 hover:bg-[#f8fafc] hover:text-[#0f172a] md:hidden"
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
        <div className="border-t border-[#e2e8f0] bg-white md:hidden">
          <nav className="flex flex-col px-4 py-2">
            {mainNavConfig.map((item) => {
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
                    'flex items-center rounded-[9px] px-3 py-4 text-sm font-semibold transition-[background,color] duration-150',
                    active
                      ? 'bg-[#f8fafc] text-[#0f172a]'
                      : 'text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a]',
                  ].join(' ')}
                  onClick={() => setMobileOpen(false)}
                >
                  {navLabels[currentLocale][item.key]}
                </Link>
              );
            })}

            {/* Tools-Bereich */}
            <div className="mt-1 border-t border-[#e2e8f0] pt-1">
              <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-[#94a3b8]">
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
                      'flex items-center gap-3 rounded-[9px] px-3 py-4 text-sm transition-[background,color] duration-150',
                      isActive
                        ? 'bg-[#f8fafc] text-[#0f172a]'
                        : 'text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a]',
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
            <div className="mt-1 border-t border-[#e2e8f0] pb-3 pt-2">
              <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-[#94a3b8]">
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
                        'flex items-center gap-1.5 rounded-[100px] border px-3 py-1.5 text-xs font-semibold transition-[background,border-color,color] duration-150',
                        isActive
                          ? 'border-[#22c55e] bg-[#f0fdf4] text-[#16a34a]'
                          : 'border-[#e2e8f0] bg-[#f8fafc] text-[#64748b] hover:border-[#22c55e] hover:text-[#16a34a]',
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

            {/* Mobile CTA */}
            <div className="border-t border-[#e2e8f0] py-3">
              <Link
                href={ctaHref}
                className="flex w-full items-center justify-center rounded-[11px] bg-[#22c55e] px-[18px] py-[10px] text-[14px] font-bold text-white transition-all duration-200 hover:bg-[#16a34a]"
                onClick={() => setMobileOpen(false)}
              >
                {navLabels[currentLocale].cta}
              </Link>
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
          'flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-[9px] px-3 py-[7px] text-[14px] font-semibold transition-[background,color] duration-150',
          isToolsActive
            ? 'bg-[#f8fafc] text-[#0f172a]'
            : 'text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a]',
        ].join(' ')}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {navLabels[currentLocale].tools}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className={`transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-[10000] w-52 pt-2">
          <div className="rounded-[16px] border border-[#e2e8f0] bg-white text-sm shadow-[0_8px_32px_rgba(0,0,0,.12)]">
            {toolsItems.map((item) => {
              const href = `${basePath}${item.path}`;
              const isActive = pathname.startsWith(href) || pathname === item.path;
              return (
                <Link
                  key={item.key}
                  href={href}
                  className={[
                    'flex items-center gap-2.5 px-4 py-2.5 transition-colors duration-150 first:rounded-t-[16px] last:rounded-b-[16px]',
                    isActive
                      ? 'bg-[#f0fdf4] text-[#16a34a]'
                      : 'text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a]',
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
  const ref = useRef<HTMLDivElement>(null);

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
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex cursor-pointer items-center gap-[5px] rounded-[8px] border border-[#e2e8f0] bg-[#f8fafc] px-[8px] py-[6px] text-[12px] font-bold text-[#64748b] transition-[background,color,border-color] duration-150 hover:bg-[#eef1f6] hover:text-[#0f172a]"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span aria-hidden>{currentLocaleInfo.flag}</span>
        <span>{currentLocaleInfo.code}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className={`transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-[10000] mt-2 w-40 rounded-[16px] border border-[#e2e8f0] bg-white text-sm shadow-[0_8px_32px_rgba(0,0,0,.12)]">
          {localeOrder.map((locale) => {
            const info = localeMeta[locale];
            const href = buildPathForLocale(locale, pathname);
            const isActive = locale === currentLocale;
            return (
              <Link
                key={locale}
                href={href}
                className={[
                  'flex items-center gap-2 px-3 py-2 transition-colors duration-150 first:rounded-t-[16px] last:rounded-b-[16px]',
                  isActive
                    ? 'bg-[#f0fdf4] text-[#16a34a]'
                    : 'text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a]',
                ].join(' ')}
                onClick={() => setOpen(false)}
              >
                <span aria-hidden>{info.flag}</span>
                <span className="flex-1">{info.label}</span>
                <span className="text-[10px] text-[#94a3b8]">{info.code}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
