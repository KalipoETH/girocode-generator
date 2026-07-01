import type { Metadata } from 'next';
import Link from 'next/link';
import NewsletterForm from '../../../components/NewsletterForm';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GiroCode pour Google Docs & Sheets – Add-on 2026',
  description:
    'Insérez GiroCode directement dans Google Docs et Google Sheets. L\'add-on Google Workspace gratuit de GiroCode Generator.',
  alternates: {
    canonical: `${SITE_URL}/fr/google-workspace-addon`,
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
      name: 'Quand l\'add-on Google Workspace sera-t-il disponible ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'L\'add-on GiroCode Generator pour Google Docs et Google Sheets est actuellement en développement. Inscrivez-vous comme beta-testeur pour être notifié à la sortie.',
      },
    },
    {
      '@type': 'Question',
      name: 'L\'add-on Google Workspace est-il gratuit ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, l\'add-on sera gratuit pour tous les utilisateurs Google Workspace – comme le générateur GiroCode dans le navigateur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles applications Google sont prises en charge ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'L\'add-on prend en charge Google Docs (insérer un GiroCode sur les factures) et Google Sheets (lire les IBAN depuis les colonnes et créer des GiroCodes en lot).',
      },
    },
  ],
};

const benefits = [
  { icon: '📄', title: 'GiroCode dans Google Docs', desc: 'Insérez le QR code sur vos factures Google Docs en un clic' },
  { icon: '📊', title: 'IBAN depuis Google Sheets', desc: 'Lisez automatiquement les IBAN depuis vos colonnes Sheets' },
  { icon: '🔄', title: 'Création en lot', desc: 'Créez plusieurs GiroCodes pour différents destinataires en une étape' },
  { icon: '🆓', title: 'Entièrement gratuit', desc: 'L\'add-on sera gratuit pour tous les utilisateurs Google Workspace' },
];

export default function GoogleWorkspaceAddonFrPage() {
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
            <li><Link href="/fr" className="text-sky-400 hover:text-sky-300">Accueil</Link></li>
            <li aria-hidden>›</li>
            <li className="text-slate-400">Add-on Google Workspace</li>
          </ol>
        </nav>
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-4 py-1.5 text-sm font-bold text-amber-300 ring-1 ring-amber-500/40">🔜 Coming Soon</span>
        </div>
        <header className="mb-8 space-y-3 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">Générateur GiroCode pour Google Workspace</h1>
          <p className="text-slate-400">Bientôt disponible : GiroCode directement dans Google Docs et Google Sheets.</p>
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
            <p className="text-sm text-slate-500">Mockup capture d\'écran – Bientôt disponible</p>
          </div>
        </div>
        <div className="mb-10 rounded-2xl border border-[#22c55e]/30 bg-[#133018]/30 p-6">
          <h2 className="mb-2 text-center text-lg font-bold text-slate-50">S&apos;inscrire comme Beta-Testeur</h2>
          <p className="mb-4 text-center text-sm text-slate-400">Inscrivez-vous pour être notifié à la sortie. Les beta-testeurs obtiennent un accès anticipé !</p>
          <NewsletterForm locale="fr" />
        </div>
        <div className="text-center">
          <p className="mb-4 text-sm text-slate-400">En attendant : créez un GiroCode gratuitement dans le navigateur</p>
          <Link href="/fr" className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}>
            Créer GiroCode gratuitement →
          </Link>
        </div>
      </div>
    </main>
    </>
  );
}
