import Link from 'next/link';
import type { ReactNode } from 'react';

type Locale = 'de' | 'en' | 'fr' | 'es';

const CONTENT: Record<
  Locale,
  {
    label: string;
    cta: string;
    apiAccessPath: string;
  }
> = {
  de: {
    label: 'API-Zugang erforderlich',
    cta: 'Zugang freischalten →',
    apiAccessPath: '/api-access',
  },
  en: {
    label: 'API access required',
    cta: 'Unlock access →',
    apiAccessPath: '/en/api-access',
  },
  fr: {
    label: 'Accès API requis',
    cta: "Débloquer l'accès →",
    apiAccessPath: '/fr/api-access',
  },
  es: {
    label: 'Acceso API requerido',
    cta: 'Desbloquear acceso →',
    apiAccessPath: '/es/api-access',
  },
};

interface Props {
  locale?: Locale;
  children: ReactNode;
}

export default function LockedCodeOverlay({ locale = 'de', children }: Props) {
  const t = CONTENT[locale];

  return (
    <div className="relative">
      <div className="opacity-40 pointer-events-none select-none">{children}</div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-xl bg-[#0b0c10]/50 backdrop-blur-[1px]">
        <span className="text-3xl" aria-hidden>
          🔒
        </span>
        <p className="text-sm font-medium text-slate-300">{t.label}</p>
        <Link
          href={t.apiAccessPath}
          className="rounded-lg bg-emerald-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-emerald-500"
        >
          {t.cta}
        </Link>
      </div>
    </div>
  );
}
