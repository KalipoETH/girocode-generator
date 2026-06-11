import Link from 'next/link';
import NewsletterForm from './NewsletterForm';

type Locale = 'de' | 'en' | 'fr' | 'es' | 'it';

const CONTENT: Record<
  Locale,
  {
    heroBadge: string;
    h1: string;
    subtitle: string;
    features: { icon: string; title: string; desc: string }[];
    formNote: string;
    codeCta: string;
    codeSignup: string;
  }
> = {
  de: {
    heroBadge: '🔜 API Coming Soon',
    h1: 'GiroCode API – Frühzeitiger Zugang',
    subtitle:
      'Die GiroCode REST API befindet sich aktuell in der Beta-Phase. Trage dich ein und erhalte als Erster Zugang wenn die API offiziell verfügbar ist.',
    features: [
      { icon: '⚡', title: 'REST API', desc: 'GET /api/generate mit allen Parametern' },
      { icon: '🔒', title: 'Sicher', desc: 'API-Key Authentifizierung' },
      { icon: '📦', title: 'Bulk', desc: 'Bis zu 100 GiroCodes pro Request' },
      { icon: '🌍', title: 'Mehrsprachig', desc: 'DE, EN, FR, ES Support' },
    ],
    formNote:
      'Die API wird als Premium Feature verfügbar sein. Beta-Tester erhalten einen vergünstigten Zugang.',
    codeCta: 'Jetzt anmelden für Zugang',
    codeSignup: 'Jetzt anmelden für Zugang',
  },
  en: {
    heroBadge: '🔜 API Coming Soon',
    h1: 'GiroCode API – Early Access',
    subtitle:
      'The GiroCode REST API is currently in beta. Sign up to be the first to get access when the API is officially available.',
    features: [
      { icon: '⚡', title: 'REST API', desc: 'GET /api/generate with all parameters' },
      { icon: '🔒', title: 'Secure', desc: 'API key authentication' },
      { icon: '📦', title: 'Bulk', desc: 'Up to 100 GiroCodes per request' },
      { icon: '🌍', title: 'Multilingual', desc: 'DE, EN, FR, ES support' },
    ],
    formNote:
      'The API will be available as a premium feature. Beta testers receive discounted access.',
    codeCta: 'Sign up for access',
    codeSignup: 'Sign up for access',
  },
  fr: {
    heroBadge: '🔜 API Bientôt Disponible',
    h1: 'API GiroCode – Accès Anticipé',
    subtitle:
      "L'API REST GiroCode est actuellement en version bêta. Inscrivez-vous pour être parmi les premiers à y accéder lors de sa sortie officielle.",
    features: [
      { icon: '⚡', title: 'API REST', desc: 'GET /api/generate avec tous les paramètres' },
      { icon: '🔒', title: 'Sécurisé', desc: 'Authentification par clé API' },
      { icon: '📦', title: 'Bulk', desc: "Jusqu'à 100 GiroCodes par requête" },
      { icon: '🌍', title: 'Multilingue', desc: 'Support DE, EN, FR, ES' },
    ],
    formNote:
      "L'API sera disponible en tant que fonctionnalité premium. Les testeurs bêta bénéficient d'un accès à tarif réduit.",
    codeCta: "S'inscrire pour l'accès",
    codeSignup: "S'inscrire pour l'accès",
  },
  es: {
    heroBadge: '🔜 API Próximamente',
    h1: 'API GiroCode – Acceso Anticipado',
    subtitle:
      'La API REST de GiroCode está actualmente en fase beta. Regístrate para ser el primero en acceder cuando la API esté disponible oficialmente.',
    features: [
      { icon: '⚡', title: 'API REST', desc: 'GET /api/generate con todos los parámetros' },
      { icon: '🔒', title: 'Seguro', desc: 'Autenticación con clave API' },
      { icon: '📦', title: 'Bulk', desc: 'Hasta 100 GiroCodes por solicitud' },
      { icon: '🌍', title: 'Multilingüe', desc: 'Soporte DE, EN, FR, ES' },
    ],
    formNote:
      'La API estará disponible como función premium. Los beta testers reciben acceso con descuento.',
    codeCta: 'Registrarse para acceso',
    codeSignup: 'Registrarse para acceso',
  },
  it: {
    heroBadge: '🔜 API Coming Soon',
    h1: 'GiroCode API – Accesso Anticipato',
    subtitle:
      'L\'API GiroCode è attualmente in fase beta. Iscriviti e ricevi accesso anticipato non appena l\'API sarà ufficialmente disponibile.',
    features: [
      { icon: '⚡', title: 'REST API', desc: 'GET /api/generate con tutti i parametri' },
      { icon: '🔒', title: 'Sicuro', desc: 'Autenticazione con API Key' },
      { icon: '📦', title: 'Bulk', desc: 'Fino a 100 GiroCodes per richiesta' },
      { icon: '🌍', title: 'Multilingue', desc: 'Supporto DE, EN, FR, ES, IT' },
    ],
    formNote:
      'L\'API sarà disponibile come funzionalità premium. I beta tester riceveranno un accesso scontato.',
    codeCta: 'Assicura accesso API',
    codeSignup: 'Assicura accesso API',
  },
};

interface Props {
  locale?: Locale;
}

export default function ApiAccessLanding({ locale = 'de' }: Props) {
  const t = CONTENT[locale];

  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-12">
        {/* Hero */}
        <header className="mb-12 space-y-4 text-center">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-400 ring-1 ring-amber-500/40">
              {t.heroBadge}
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl md:text-4xl">
            {t.h1}
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            {t.subtitle}
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

        {/* Newsletter Form */}
        <NewsletterForm locale={locale} variant="api-access" />
        <p className="mt-4 text-center text-xs text-slate-500">{t.formNote}</p>

        {/* Locked Code Preview */}
        <section className="mt-12">
          <div className="relative overflow-hidden rounded-xl border border-slate-800">
            <pre className="overflow-x-auto bg-slate-950 px-4 py-6 text-xs text-slate-500 opacity-40 sm:text-sm">
              <code>{`// 🔒 API-Zugang erforderlich
// GET /api/generate?name=Max+Mustermann&iban=DE89...
// Response: { qr_base64: "...", epc_payload: "..." }`}</code>
            </pre>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#0b0c10]/60 backdrop-blur-[1px]">
              <span className="text-3xl" aria-hidden>
                🔒
              </span>
              <p className="text-sm font-medium text-slate-300">{t.codeSignup}</p>
              <Link
                href="#newsletter-form"
                className="rounded-lg bg-emerald-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-emerald-500"
              >
                {t.codeCta} →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
