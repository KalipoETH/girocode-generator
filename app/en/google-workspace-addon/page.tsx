import type { Metadata } from 'next';
import Link from 'next/link';
import NewsletterForm from '../../../components/NewsletterForm';

export const metadata: Metadata = {
  title: 'GiroCode for Google Docs & Sheets – Add-on 2026',
  description:
    'Insert GiroCode directly in Google Docs and Google Sheets. The free Google Workspace add-on from GiroCode Generator.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/en/google-workspace-addon',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/google-workspace-addon',
      de: 'https://www.girocodegenerator.com/google-workspace-addon',
      en: 'https://www.girocodegenerator.com/en/google-workspace-addon',
      fr: 'https://www.girocodegenerator.com/fr/google-workspace-addon',
      es: 'https://www.girocodegenerator.com/es/google-workspace-addon',
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When will the Google Workspace add-on be available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The GiroCode Generator add-on for Google Docs and Google Sheets is currently in development. Sign up as a beta tester to get notified when it launches.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Google Workspace add-on free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the add-on will be free for all Google Workspace users – just like the browser-based GiroCode Generator.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Google apps are supported?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The add-on supports Google Docs (insert GiroCode on invoices) and Google Sheets (read IBANs from columns and create batch GiroCodes).',
      },
    },
  ],
};

const benefits = [
  { icon: '📄', title: 'Insert GiroCode in Google Docs', desc: 'Add QR codes to invoices in Google Docs with one click' },
  { icon: '📊', title: 'Read IBAN from Google Sheets', desc: 'Automatically read IBANs from sheet columns and generate GiroCodes' },
  { icon: '🔄', title: 'Batch creation', desc: 'Create multiple GiroCodes for different recipients in one step' },
  { icon: '🆓', title: 'Completely free', desc: 'The add-on will be free for all Google Workspace users' },
];

export default function GoogleWorkspaceAddonEnPage() {
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
            <li><Link href="/en" className="text-sky-400 hover:text-sky-300">Home</Link></li>
            <li aria-hidden>›</li>
            <li className="text-slate-400">Google Workspace Add-on</li>
          </ol>
        </nav>
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-4 py-1.5 text-sm font-bold text-amber-300 ring-1 ring-amber-500/40">🔜 Coming Soon</span>
        </div>
        <header className="mb-8 space-y-3 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">GiroCode Generator for Google Workspace</h1>
          <p className="text-slate-400">Coming soon: GiroCode directly in Google Docs and Google Sheets – no external tools needed.</p>
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
            <p className="text-sm text-slate-500">Screenshot Mockup – Coming Soon</p>
          </div>
        </div>
        <div className="mb-10 rounded-2xl border border-[#22c55e]/30 bg-[#133018]/30 p-6">
          <h2 className="mb-2 text-center text-lg font-bold text-slate-50">Sign up as Beta Tester</h2>
          <p className="mb-4 text-center text-sm text-slate-400">Get notified when the add-on launches. Beta testers get early access!</p>
          <NewsletterForm locale="en" />
        </div>
        <div className="text-center">
          <p className="mb-4 text-sm text-slate-400">In the meantime: create GiroCode for free in your browser</p>
          <Link href="/en" className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}>
            Create GiroCode for free →
          </Link>
        </div>
      </div>
    </main>
    </>
  );
}
