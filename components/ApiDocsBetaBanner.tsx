import Link from 'next/link';

type Locale = 'de' | 'en' | 'fr' | 'es';

const CONTENT: Record<
  Locale,
  {
    badge: string;
    text: string;
    cta: string;
    apiAccessPath: string;
  }
> = {
  de: {
    badge: '🔒 API aktuell in Beta',
    text: 'Die API befindet sich in der Beta-Phase und ist nur für registrierte Nutzer verfügbar.',
    cta: 'Jetzt für Beta anmelden →',
    apiAccessPath: '/api-access',
  },
  en: {
    badge: '🔒 API Currently in Beta',
    text: 'The API is in beta and only available to registered users.',
    cta: 'Sign up for Beta →',
    apiAccessPath: '/en/api-access',
  },
  fr: {
    badge: '🔒 API actuellement en Bêta',
    text: "L'API est en phase bêta et réservée aux utilisateurs inscrits.",
    cta: "S'inscrire à la bêta →",
    apiAccessPath: '/fr/api-access',
  },
  es: {
    badge: '🔒 API actualmente en Beta',
    text: 'La API está en fase beta y solo disponible para usuarios registrados.',
    cta: 'Registrarse para Beta →',
    apiAccessPath: '/es/api-access',
  },
};

interface Props {
  locale?: Locale;
}

export default function ApiDocsBetaBanner({ locale = 'de' }: Props) {
  const t = CONTENT[locale];

  return (
    <div
      className="mb-10 rounded-2xl p-6"
      style={{
        background: 'linear-gradient(135deg, #1a1508 0%, #121318 100%)',
        border: '1px solid rgba(245,158,11,0.3)',
      }}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-400 ring-1 ring-amber-500/40">
            {t.badge}
          </span>
          <p className="text-sm text-slate-300">{t.text}</p>
        </div>
        <Link
          href={t.apiAccessPath}
          className="inline-flex shrink-0 items-center justify-center rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-amber-500"
        >
          {t.cta}
        </Link>
      </div>
    </div>
  );
}
