import type { Metadata } from 'next';
import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GiroCode für Google Docs & Sheets – Add-on 2026',
  description:
    'GiroCode direkt in Google Docs und Google Sheets einfügen. Das kostenlose Google Workspace Add-on von GiroCode Generator.',
  alternates: {
    canonical: `${SITE_URL}/google-workspace-addon`,
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
      name: 'Wann ist das Google Workspace Add-on verfügbar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Das GiroCode Generator Add-on für Google Docs und Google Sheets befindet sich derzeit in Entwicklung. Trag dich als Beta-Tester ein, um benachrichtigt zu werden, sobald es verfügbar ist.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist das Google Workspace Add-on kostenlos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, das Add-on wird kostenlos für alle Google Workspace Nutzer verfügbar sein – genau wie der GiroCode Generator im Browser.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Google Apps werden unterstützt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Das Add-on unterstützt Google Docs (GiroCode direkt auf Rechnungen einfügen) und Google Sheets (IBAN aus Spalten auslesen und Batch-GiroCodes erstellen).',
      },
    },
  ],
};

const benefits = [
  {
    icon: '📄',
    title: 'GiroCode direkt in Google Docs einfügen',
    desc: 'QR-Code direkt auf Rechnungen in Google Docs einfügen – per Klick',
  },
  {
    icon: '📊',
    title: 'IBAN aus Google Sheets automatisch lesen',
    desc: 'IBAN automatisch aus Google Sheets Spalten auslesen und GiroCode generieren',
  },
  {
    icon: '🔄',
    title: 'Batch-Erstellung für mehrere Empfänger',
    desc: 'Mehrere GiroCodes für verschiedene Empfänger in einem Schritt erstellen',
  },
  {
    icon: '🆓',
    title: 'Komplett kostenlos',
    desc: 'Das Add-on wird kostenlos für alle Google Workspace Nutzer verfügbar sein',
  },
];

export default function GoogleWorkspaceAddonPage() {
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
            <li>
              <Link href="/" className="text-sky-400 hover:text-sky-300">
                Startseite
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li className="text-slate-400">Google Workspace Add-on</li>
          </ol>
        </nav>

        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-4 py-1.5 text-sm font-bold text-amber-300 ring-1 ring-amber-500/40">
            🔜 Coming Soon
          </span>
        </div>

        <header className="mb-8 space-y-3 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
            GiroCode Generator für Google Workspace
          </h1>
          <p className="text-slate-400">
            Bald verfügbar: GiroCode direkt in Google Docs und Google Sheets – ohne Umweg über
            externe Tools.
          </p>
        </header>

        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#1f2431] bg-[#0f1117] p-5"
            >
              <span className="mb-2 block text-2xl" aria-hidden>
                {item.icon}
              </span>
              <h3 className="mb-1 text-sm font-bold text-slate-50">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-10 flex aspect-video items-center justify-center rounded-2xl border border-dashed border-[#1f2431] bg-[#0f1117]">
          <div className="text-center">
            <span className="mb-2 block text-4xl" aria-hidden>
              🖼️
            </span>
            <p className="text-sm text-slate-500">Screenshot Mockup – Coming Soon</p>
          </div>
        </div>

        <div className="mb-10 rounded-2xl border border-[#22c55e]/30 bg-[#133018]/30 p-6">
          <h2 className="mb-2 text-center text-lg font-bold text-slate-50">
            Als Beta-Tester anmelden
          </h2>
          <p className="mb-4 text-center text-sm text-slate-400">
            Trag dich ein und werde benachrichtigt, wenn das Add-on verfügbar ist. Beta-Tester
            erhalten frühzeitigen Zugang!
          </p>
          <NewsletterForm locale="de" />
        </div>

        <div className="text-center">
          <p className="mb-4 text-sm text-slate-400">
            In der Zwischenzeit: GiroCode kostenlos im Browser erstellen
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
          >
            Jetzt kostenlos GiroCode erstellen →
          </Link>
        </div>
      </div>
    </main>
    </>
  );
}
