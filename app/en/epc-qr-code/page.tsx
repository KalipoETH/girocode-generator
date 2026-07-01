import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'EPC QR Code Generator – EPC069-12 Standard Free 2026',
  description:
    'Generate EPC QR Code following EPC069-12 standard for free. Technically correct implementation for developers and businesses. No registration required.',
  alternates: {
    canonical: `${SITE_URL}/en/epc-qr-code`,
    languages: {
      'x-default': `${SITE_URL}/epc-qr-code`,
      de: `${SITE_URL}/epc-qr-code`,
      en: `${SITE_URL}/en/epc-qr-code`,
      fr: `${SITE_URL}/fr/epc-qr-code`,
      es: `${SITE_URL}/es/epc-qr-code`,
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between EPC QR Code, GiroCode and SEPA QR Code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They all refer to the same thing: EPC QR Code is the technical name, GiroCode is the German brand name, SEPA QR Code is the functional term. The underlying standard is EPC069-12.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which version of the EPC069-12 standard should I use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Version 002 (BIC optional), as newer banks no longer require a BIC. Version 002 is backward compatible and supported by all modern banking apps.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the maximum amount in an EPC QR Code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no technical limit in the EPC069-12 standard itself. However, SEPA transfers have a maximum of EUR 999,999,999.99.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I integrate the EPC QR Code Generator into my website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Via API at /api/generate or using the URL parameter approach. See full details in the API documentation at /api-docs.',
      },
    },
  ],
};

export default function EpcQrCodeEnPage() {
  const stats = [
    { value: 'EPC069-12', label: 'Official Standard' },
    { value: '11', label: 'Lines in Payload' },
    { value: 'V001/V002', label: 'Versions' },
    { value: 'Level M', label: 'Error Correction (recommended)' },
  ];

  const faqs = [
    {
      q: 'What is the difference between EPC QR Code, GiroCode and SEPA QR Code?',
      a: 'They all refer to the same thing: EPC QR Code is the technical name, GiroCode is the German brand name, SEPA QR Code is the functional term. The underlying standard is EPC069-12.',
    },
    {
      q: 'Which version of the EPC069-12 standard should I use?',
      a: 'Version 002 (BIC optional), as newer banks no longer require a BIC. Version 002 is backward compatible and supported by all modern banking apps.',
    },
    {
      q: 'What is the maximum amount in an EPC QR Code?',
      a: 'There is no technical limit in the EPC069-12 standard itself. However, SEPA transfers have a maximum of EUR 999,999,999.99.',
    },
    {
      q: 'How do I integrate the EPC QR Code Generator into my website?',
      a: 'Via API at /api/generate or using the URL parameter approach. See full details in the API documentation at /api-docs.',
    },
  ];

  const related = [
    { href: '/api-docs', label: 'API Documentation' },
    { href: '/fuer-entwickler', label: 'GiroCode for Developers' },
    { href: '/wissen/epc-standard', label: 'EPC Standard Explained' },
    { href: '/sepa-qr-code', label: 'SEPA QR Code Generator' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/en" className="text-sky-400 hover:text-sky-300">
                  Home
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">EPC QR Code Generator</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Technical · EPC069-12 Standard
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              EPC QR Code Generator – EPC069-12 Standard
            </h1>
          </header>

          {/* Short Answer Box */}
          <div
            className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3"
            role="note"
          >
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">
              💡 Quick Answer
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              An EPC QR Code (European Payments Council QR Code) is the technical name for the
              GiroCode. The EPC069-12 standard defines the exact structure of the payload: 11 lines
              containing the service tag, version, encoding, SCT identification, BIC, recipient
              name, IBAN, amount and payment reference.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-lg border border-[#1f2431] bg-[#0f1117] p-4 text-center"
              >
                <p className="text-2xl font-bold text-[#22c55e]">{s.value}</p>
                <p className="mt-1 text-xs leading-snug text-[#8b90a0]">{s.label}</p>
              </div>
            ))}
          </div>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2>EPC069-12 Payload Structure</h2>
            <p>
              The EPC069-12 payload is a line-based text format with exactly 11 lines. Each line has
              a fixed meaning – empty lines are allowed for optional fields:
            </p>
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 text-xs text-slate-200 sm:text-sm">
              <code>{`BCD                      ← Service Tag
002                      ← Version
1                        ← Character Set (1=UTF-8)
SCT                      ← Identification Code (SEPA Credit Transfer)
                         ← BIC (optional, leave empty)
Max Mustermann           ← Name (max 70 characters)
DE89370400440532013000   ← IBAN
EUR99.99                 ← Amount (EUR + amount, e.g. EUR99.99)
                         ← Purpose Code (leave empty)
                         ← Remittance Info (structured, leave empty)
Invoice 2026-001         ← Payment Reference (max 140 characters)`}</code>
            </pre>

            <h2>Versions 001 vs. 002</h2>
            <p>
              Version 001 requires a BIC, Version 002 makes BIC optional. Recommended: Version 002
              for new implementations. Most banking apps accept both versions. With Version 002, the
              BIC line can be left empty, as the SEPA network identifies the bank from the IBAN.
            </p>

            <h2>Error Correction Level</h2>
            <p>
              EPC069-12 recommends Level M (15% recovery) for digital display on screens. For
              printing on invoices or posters, Level H (30% recovery) is recommended for better
              readability – even if the QR code is slightly damaged or dirty.
            </p>

            <h2>JavaScript Implementation Example</h2>
            <p>
              This function generates a valid EPC069-12 payload that can be rendered directly with a
              QR code library (e.g. <code>qrcode</code> or <code>qr-code-styling</code>):
            </p>
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 text-xs text-slate-200 sm:text-sm">
              <code>{`function buildEPCPayload({ name, iban, bic = '', amount, purpose = '' }) {
  const amountStr = amount ? 'EUR' + Number(amount).toFixed(2) : '';
  return [
    'BCD',       // Service Tag
    '002',       // Version
    '1',         // Character Set (UTF-8)
    'SCT',       // SEPA Credit Transfer
    bic.trim(),  // BIC (optional)
    name.trim().slice(0, 70),
    iban.replace(/\\s+/g, '').toUpperCase(),
    amountStr,   // EUR + amount or empty
    '',          // Purpose Code (empty)
    '',          // Structured Remittance Info (empty)
    purpose.trim().slice(0, 140)
  ].join('\\n');
}`}</code>
            </pre>

            {/* CTA */}
            <div className="not-prose my-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#16a34a 0%,#15803d 100%)' }}
              >
                Create EPC QR Code →
              </Link>
              <Link
                href="/api-docs"
                className="ml-4 inline-flex items-center gap-2 rounded-xl border border-[#1f2431] px-6 py-3 text-sm font-medium text-slate-300 transition duration-200 hover:border-emerald-500/30 hover:text-white"
              >
                API Documentation →
              </Link>
            </div>

            {/* FAQ */}
            <h2>Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-sm font-semibold text-slate-50">{faq.q}</h3>
                  <p className="text-sm text-slate-300">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* Related */}
            <div className="not-prose mt-10 rounded-2xl border border-[#1f2431] bg-[#0f1117] p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xl" aria-hidden>
                  📚
                </span>
                <h2 className="text-base font-bold text-[#e8eaf0]">Related Articles</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {related.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3.5 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/30 hover:text-[#e8eaf0] hover:-translate-y-0.5"
                  >
                    <span>{a.label}</span>
                    <span className="ml-3 shrink-0 text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">
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
