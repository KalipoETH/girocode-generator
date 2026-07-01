import type { Metadata } from 'next';
import Link from 'next/link';
import NewsletterForm from '../../../components/NewsletterForm';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GiroCode para Google Docs & Sheets – Add-on 2026',
  description:
    'Inserta GiroCode directamente en Google Docs y Google Sheets. El add-on gratuito de Google Workspace de GiroCode Generator.',
  alternates: {
    canonical: `${SITE_URL}/es/google-workspace-addon`,
    languages: {
      'x-default': `${SITE_URL}/google-workspace-addon`,
      de: `${SITE_URL}/google-workspace-addon`,
      en: `${SITE_URL}/en/google-workspace-addon`,
      fr: `${SITE_URL}/fr/google-workspace-addon`,
      es: `${SITE_URL}/es/google-workspace-addon`,
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuándo estará disponible el add-on de Google Workspace?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El add-on GiroCode Generator para Google Docs y Google Sheets está actualmente en desarrollo. Regístrate como beta tester para recibir aviso cuando esté disponible.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El add-on de Google Workspace es gratuito?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, el add-on será gratuito para todos los usuarios de Google Workspace – igual que el generador GiroCode en el navegador.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué aplicaciones de Google son compatibles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El add-on es compatible con Google Docs (insertar GiroCode en facturas) y Google Sheets (leer IBAN de columnas y crear GiroCodes por lotes).',
      },
    },
  ],
};

const benefits = [
  { icon: '📄', title: 'GiroCode en Google Docs', desc: 'Inserta el QR code en facturas de Google Docs con un clic' },
  { icon: '📊', title: 'IBAN desde Google Sheets', desc: 'Lee IBAN automáticamente desde columnas de Sheets' },
  { icon: '🔄', title: 'Creación por lotes', desc: 'Crea varios GiroCodes para diferentes destinatarios en un paso' },
  { icon: '🆓', title: 'Completamente gratis', desc: 'El add-on será gratuito para todos los usuarios de Google Workspace' },
];

export default function GoogleWorkspaceAddonEsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li><Link href="/es" className="text-sky-400 hover:text-sky-300">Inicio</Link></li>
            <li aria-hidden>›</li>
            <li className="text-slate-400">Add-on Google Workspace</li>
          </ol>
        </nav>
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-4 py-1.5 text-sm font-bold text-amber-300 ring-1 ring-amber-500/40">🔜 Coming Soon</span>
        </div>
        <header className="mb-8 space-y-3 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">Generador GiroCode para Google Workspace</h1>
          <p className="text-slate-400">Próximamente: GiroCode directamente en Google Docs y Google Sheets.</p>
        </header>
        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          {benefits.map((item) => (
            <div key={item.title} className="rounded-xl border border-[#1f2431] bg-[#0f1117] p-5">
              <span className="mb-2 block text-2xl" aria-hidden>{item.icon}</span>
              <h3 className="mb-1 text-sm font-bold text-slate-50">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mb-10 flex aspect-video items-center justify-center rounded-2xl border border-dashed border-[#1f2431] bg-[#0f1117]">
          <div className="text-center">
            <span className="mb-2 block text-4xl" aria-hidden>🖼️</span>
            <p className="text-sm text-slate-500">Mockup de captura – Próximamente</p>
          </div>
        </div>
        <div className="mb-10 rounded-2xl border border-[#22c55e]/30 bg-[#133018]/30 p-6">
          <h2 className="mb-2 text-center text-lg font-bold text-slate-50">Registrarse como Beta Tester</h2>
          <p className="mb-4 text-center text-sm text-slate-400">Apúntate y recibe aviso cuando el add-on esté disponible. ¡Los beta testers obtienen acceso anticipado!</p>
          <NewsletterForm locale="es" />
        </div>
        <div className="text-center">
          <p className="mb-4 text-sm text-slate-400">Mientras tanto: crea GiroCode gratis en el navegador</p>
          <Link href="/es" className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}>
            Crear GiroCode gratis →
          </Link>
        </div>
      </div>
    </main>
    </>
  );
}
