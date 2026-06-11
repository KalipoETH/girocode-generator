import Link from 'next/link';

type Locale = 'de' | 'en' | 'fr' | 'es' | 'it';

const CONTENT: Record<
  Locale,
  {
    badge: string;
    h1: string;
    text: string;
    features: { icon: string; title: string; desc: string }[];
    cta: string;
    hint: string;
    apiAccessPath: string;
  }
> = {
  de: {
    badge: '🔒 Beta',
    h1: 'GiroCode API – Dokumentation',
    text: 'Die vollständige API-Dokumentation ist nur für registrierte Beta-Nutzer verfügbar.',
    features: [
      { icon: '⚡', title: 'REST API', desc: 'GiroCodes per HTTP generieren' },
      { icon: '🔒', title: 'API-Key Auth', desc: 'Sicherer Zugang' },
      { icon: '📦', title: 'Bulk Support', desc: 'Mehrere QR-Codes per Request' },
      { icon: '🌍', title: 'Multi-Language', desc: 'DE, EN, FR, ES' },
    ],
    cta: 'Für Beta-Zugang anmelden →',
    hint: 'Du bist Entwickler und möchtest integrieren? Trag dich ein und erhalte frühzeitigen Zugang zur vollständigen Dokumentation.',
    apiAccessPath: '/api-access',
  },
  en: {
    badge: '🔒 Beta',
    h1: 'GiroCode API – Documentation',
    text: 'The full API documentation is only available to registered beta users.',
    features: [
      { icon: '⚡', title: 'REST API', desc: 'Generate GiroCodes via HTTP' },
      { icon: '🔒', title: 'API Key Auth', desc: 'Secure access' },
      { icon: '📦', title: 'Bulk Support', desc: 'Multiple QR codes per request' },
      { icon: '🌍', title: 'Multi-Language', desc: 'DE, EN, FR, ES' },
    ],
    cta: 'Sign up for Beta Access →',
    hint: 'Are you a developer looking to integrate? Sign up and get early access to the full documentation.',
    apiAccessPath: '/en/api-access',
  },
  fr: {
    badge: '🔒 Bêta',
    h1: 'API GiroCode – Documentation',
    text: "La documentation API complète n'est disponible que pour les utilisateurs bêta inscrits.",
    features: [
      { icon: '⚡', title: 'API REST', desc: 'Générer des GiroCodes via HTTP' },
      { icon: '🔒', title: 'Auth par clé API', desc: 'Accès sécurisé' },
      { icon: '📦', title: 'Support Bulk', desc: 'Plusieurs QR codes par requête' },
      { icon: '🌍', title: 'Multilingue', desc: 'DE, EN, FR, ES' },
    ],
    cta: "S'inscrire pour l'accès bêta →",
    hint: "Vous êtes développeur et souhaitez intégrer ? Inscrivez-vous et obtenez un accès anticipé à la documentation complète.",
    apiAccessPath: '/fr/api-access',
  },
  es: {
    badge: '🔒 Beta',
    h1: 'API GiroCode – Documentación',
    text: 'La documentación API completa solo está disponible para usuarios beta registrados.',
    features: [
      { icon: '⚡', title: 'API REST', desc: 'Generar GiroCodes vía HTTP' },
      { icon: '🔒', title: 'Auth con clave API', desc: 'Acceso seguro' },
      { icon: '📦', title: 'Soporte Bulk', desc: 'Varios códigos QR por solicitud' },
      { icon: '🌍', title: 'Multilingüe', desc: 'DE, EN, FR, ES' },
    ],
    cta: 'Registrarse para acceso beta →',
    hint: '¿Eres desarrollador y quieres integrar? Regístrate y obtén acceso anticipado a la documentación completa.',
    apiAccessPath: '/es/api-access',
  },
  it: {
    badge: '🔒 Beta',
    h1: 'GiroCode API – Documentazione',
    text: 'La documentazione completa dell\'API è disponibile solo per gli utenti beta registrati.',
    features: [
      { icon: '⚡', title: 'REST API', desc: 'Genera GiroCodes tramite HTTP' },
      { icon: '🔒', title: 'Auth API Key', desc: 'Accesso sicuro' },
      { icon: '📦', title: 'Supporto Bulk', desc: 'Fino a 100 QR per richiesta' },
      { icon: '🌍', title: 'Multilingue', desc: 'DE, EN, FR, ES, IT' },
    ],
    cta: 'Registrati per accesso beta →',
    hint: 'Sei uno sviluppatore e vuoi integrare? Iscriviti e ottieni accesso anticipato alla documentazione completa.',
    apiAccessPath: '/it/api-access',
  },
};

interface Props {
  locale?: Locale;
}

export default function ApiDocsBetaPage({ locale = 'de' }: Props) {
  const t = CONTENT[locale];

  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-16">
        {/* Hero */}
        <header className="mb-12 space-y-4 text-center">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-400 ring-1 ring-amber-500/40">
              {t.badge}
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl md:text-4xl">
            {t.h1}
          </h1>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
            {t.text}
          </p>
        </header>

        {/* Feature Cards */}
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {t.features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl p-5"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <span className="mb-2 block text-2xl" aria-hidden>
                {f.icon}
              </span>
              <h3 className="mb-1 text-sm font-semibold text-slate-200">{f.title}</h3>
              <p className="text-xs text-slate-500">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mb-8 flex justify-center">
          <Link
            href={t.apiAccessPath}
            className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-bold text-slate-950 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(34,197,94,0.4)] motion-reduce:transform-none"
            style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}
          >
            {t.cta}
          </Link>
        </div>

        {/* Hint */}
        <p className="mx-auto max-w-lg text-center text-xs leading-relaxed text-slate-500 sm:text-sm">
          {t.hint}
        </p>
      </div>
    </main>
  );
}
