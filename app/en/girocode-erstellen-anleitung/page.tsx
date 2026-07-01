import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'How to Create a GiroCode – Step-by-Step Guide 2026',
  description:
    'Create GiroCode in 3 steps: Enter IBAN, add amount and reference, download QR code. Free, no registration required.',
  alternates: {
    canonical: `${SITE_URL}/en/girocode-erstellen-anleitung`,
    languages: {
      'x-default': `${SITE_URL}/girocode-erstellen-anleitung`,
      'de': `${SITE_URL}/girocode-erstellen-anleitung`,
      'en': `${SITE_URL}/en/girocode-erstellen-anleitung`,
      'fr': `${SITE_URL}/fr/girocode-erstellen-anleitung`,
      'es': `${SITE_URL}/es/girocode-erstellen-anleitung`,
    },
  },
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Create a GiroCode',
  description: 'How to create a GiroCode (SEPA QR Code)',
  totalTime: 'PT10S',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Enter IBAN and recipient name',
      text: 'Enter the recipient\'s IBAN (with or without spaces) and the recipient name (max. 70 characters). The BIC is optional and is no longer required for new SEPA transfers.',
    },
    {
      '@type': 'HowToStep',
      name: 'Enter amount and payment reference',
      text: 'Enter the amount in EUR (e.g. 49.90). Leave the amount blank for variable amounts. Enter the payment reference (max. 140 characters, e.g. "Invoice 2026-001").',
    },
    {
      '@type': 'HowToStep',
      name: 'Generate and download QR code',
      text: 'Click "Create GiroCode". The QR code is generated instantly. Download it as PNG or copy it to the clipboard.',
    },
    {
      '@type': 'HowToStep',
      name: 'Add GiroCode to invoice',
      text: 'Insert the QR code into Word/Google Docs. Recommended size: at least 3×3 cm. Repeat the IBAN as text below the QR code as a fallback for users without a QR scanner.',
    },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need to register to create a GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, completely free without registration. All data stays locally in the browser.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use the GiroCode on an invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, simply download as PNG and insert into Word, Google Docs or PDF. Minimum size: 2×2 cm.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I omit the amount in the GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, amount and payment reference are optional. The payer then enters the amount themselves.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I add a GiroCode to an invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Download the QR code, insert into Word/Docs/PDF, scale to approx. 3×3 cm. For safety, add the IBAN as text below the QR code.',
      },
    },
  ],
};

const stats = [
  { value: '10 sec.', label: 'Creation time' },
  { value: '3', label: 'Steps' },
  { value: '€0', label: 'Cost' },
  { value: '100%', label: 'Local in browser' },
];

const steps = [
  {
    n: '1',
    title: 'Enter IBAN and recipient name',
    desc: 'Enter the recipient details. IBAN and name are the only required fields.',
    bullets: [
      'Enter recipient\'s IBAN (with or without spaces)',
      'Enter recipient name (max. 70 characters)',
      'BIC is optional – no longer required for new SEPA transfers',
    ],
  },
  {
    n: '2',
    title: 'Enter amount and payment reference (optional)',
    desc: 'Both fields are optional. Leave blank for maximum flexibility.',
    bullets: [
      'Enter amount in EUR (e.g. 49.90)',
      'Leave amount blank for variable amounts (payer enters it themselves)',
      'Enter payment reference (max. 140 characters, e.g. "Invoice 2026-001")',
    ],
  },
  {
    n: '3',
    title: 'Generate and download QR code',
    desc: 'Your GiroCode is created instantly with one click.',
    bullets: [
      'Click "Create GiroCode"',
      'QR code is generated instantly',
      'Download as PNG or copy to clipboard',
    ],
  },
  {
    n: '4',
    title: 'Add GiroCode to invoice (optional)',
    desc: 'For invoices: insert QR code and add IBAN as text.',
    bullets: [
      'Insert QR code into Word/Google Docs',
      'Recommended size: at least 3×3 cm',
      'Repeat the IBAN as text below the QR code (fallback for users without QR scanner)',
    ],
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/en" className="text-sky-400 hover:text-sky-300">
                  Home
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">How to Create a GiroCode</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Guide · Create GiroCode
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              How to Create a GiroCode – Complete Guide
            </h1>
          </header>

          <div
            className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3"
            role="note"
          >
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">
              💡 Short Answer
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              Create GiroCode: 1. Enter recipient name and IBAN, 2. Enter amount and payment
              reference (optional), 3. Generate and download QR code. The entire process takes
              under 10 seconds. No registration, no cost, 100% local in the browser.
            </p>
          </div>

          <div className="not-prose mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.value}
                className="rounded-xl border border-[#1f2431] bg-[#0f1117] px-4 py-3 text-center"
              >
                <p className="text-lg font-bold text-[#22c55e]">{s.value}</p>
                <p className="mt-0.5 text-[11px] text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2>Create GiroCode in 4 Steps</h2>

            <div className="not-prose space-y-4 mb-8">
              {steps.map((step) => (
                <div
                  key={step.n}
                  className="rounded-xl border border-[#1f2431] bg-[#0f1117] p-5"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                      style={{ background: 'linear-gradient(135deg,#22c55e,#16a34a)', color: '#0b0c10' }}
                    >
                      {step.n}
                    </div>
                    <div>
                      <h3 className="mb-2 text-base font-bold text-slate-50">{step.title}</h3>
                      <p className="text-sm text-slate-400">{step.desc}</p>
                      <ul className="mt-2 space-y-1">
                        {step.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                            <span className="mt-1 text-[#22c55e]">✓</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2>Tips for Professional GiroCodes on Invoices</h2>
            <ul>
              <li>
                <strong>Minimum size:</strong> 3×3 cm for good readability
              </li>
              <li>
                <strong>Error correction:</strong> Level M for digital, Level H for printed
                invoices
              </li>
              <li>
                <strong>IBAN as text:</strong> Also add as text (fallback for users without
                scanner)
              </li>
              <li>
                <strong>Payment reference:</strong> Include invoice number for easy assignment
              </li>
            </ul>

            <div className="not-prose my-8 flex flex-wrap gap-3">
              <Link
                href="/en"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#16a34a 0%,#15803d 100%)' }}
              >
                Create GiroCode now →
              </Link>
            </div>

            <h2>Frequently Asked Questions</h2>

            <div className="not-prose space-y-4 mb-8">
              {faqJsonLd.mainEntity.map((faq, i) => (
                <div key={i} className="rounded-xl border border-[#1f2431] bg-[#0f1117] p-5">
                  <h3 className="mb-2 text-sm font-bold text-slate-50">{faq.name}</h3>
                  <p className="text-sm text-slate-400">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>

            <div className="not-prose mt-10 rounded-2xl border border-[#1f2431] bg-[#0f1117] p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xl" aria-hidden>
                  📚
                </span>
                <h2 className="text-base font-bold text-[#e8eaf0]">More Articles</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { href: '/en', label: 'Create GiroCode now' },
                  { href: '/en/girocode-scannen-anleitung', label: 'How to Scan a GiroCode' },
                  { href: '/en/freelancer', label: 'GiroCode for Freelancers' },
                  { href: '/en/wissen/girocode', label: 'What is a GiroCode?' },
                ].map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3.5 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/30 hover:text-[#e8eaf0] hover:-translate-y-0.5"
                  >
                    <span>{a.label}</span>
                    <span className="ml-3 shrink-0 text-[#22c55e] group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
