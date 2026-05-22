'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const i18n = {
  de: {
    message: '💡 Tipp: Hast du schon unseren Scanner probiert?',
    cta: 'Zum Scanner',
    close: 'Schließen',
    ctaHref: '/scanner',
  },
  en: {
    message: '💡 Tip: Have you tried our scanner yet?',
    cta: 'To the Scanner',
    close: 'Close',
    ctaHref: '/en/scanner',
  },
  fr: {
    message: '💡 Conseil: Avez-vous essayé notre scanner?',
    cta: 'Vers le Scanner',
    close: 'Fermer',
    ctaHref: '/fr/scanner',
  },
  es: {
    message: '💡 Consejo: ¿Has probado nuestro escáner?',
    cta: 'Al Escáner',
    close: 'Cerrar',
    ctaHref: '/es/scanner',
  },
} as const;

export function ExitIntent({ locale = 'de' }: { locale?: 'de' | 'en' | 'fr' | 'es' }) {
  const [visible, setVisible] = useState(false);
  const t = i18n[locale];

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.innerWidth <= 768) return;
    if (sessionStorage.getItem('exit-intent-shown')) return;

    let timer: ReturnType<typeof setTimeout>;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setVisible(true);
        sessionStorage.setItem('exit-intent-shown', '1');
        document.removeEventListener('mouseleave', handleMouseLeave);
        timer = setTimeout(() => setVisible(false), 5000);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      role="alert"
      aria-live="polite"
      className="fixed bottom-5 right-5 z-50 flex max-w-sm flex-col gap-3 rounded-2xl border border-[#1f2431] bg-[#121318] p-4 shadow-2xl"
      style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px #1f2431' }}
    >
      <p className="text-sm font-medium text-[#e8eaf0]">{t.message}</p>
      <div className="flex items-center gap-2">
        <Link
          href={t.ctaHref}
          className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-emerald-500"
          onClick={() => setVisible(false)}
        >
          {t.cta}
        </Link>
        <button
          onClick={() => setVisible(false)}
          className="rounded-lg border border-slate-700 px-3 py-1.5 text-xs text-slate-400 transition hover:border-slate-500 hover:text-slate-200"
          aria-label="Toast schließen"
        >
          {t.close}
        </button>
      </div>
    </div>
  );
}
