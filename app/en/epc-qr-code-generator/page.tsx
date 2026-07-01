import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'EPC QR Code Generator – Free & Instant 2026',
  description:
    'Create EPC QR codes for SEPA payments free. Compatible with all European banking apps. No registration, 100% local.',
  alternates: {
    canonical: `${SITE_URL}/en/epc-qr-code-generator`,
    languages: {
      'x-default': `${SITE_URL}/epc-qr-code`,
      de: `${SITE_URL}/epc-qr-code`,
      en: `${SITE_URL}/en/epc-qr-code-generator`,
    },
  },
};

const faqs = [
  {
    q: 'What is an EPC QR code?',
    a: 'An EPC QR code is a standardised QR code for SEPA credit transfers defined by the European Payments Council in document EPC069-12. It encodes payment data – IBAN, recipient name, optional amount and payment reference – so banking apps can pre-fill a transfer when scanned.',
  },
  {
    q: 'Is EPC QR code the same as GiroCode?',
    a: 'Yes. EPC QR code is the international technical name, GiroCode is the German brand name, and SEPA QR code describes the function. All three refer to the same EPC069-12 standard and produce identical QR codes.',
  },
  {
    q: 'Which banking apps support EPC QR codes?',
    a: 'Virtually all SEPA-capable banking apps in Europe support EPC QR codes, including Sparkasse, ING, Deutsche Bank, N26, Revolut, George (Erste Bank), and hundreds of others across 36 SEPA countries.',
  },
  {
    q: 'Is this EPC QR code generator free?',
    a: 'Yes, completely free. No registration, no hidden costs. All data is processed locally in your browser – nothing is sent to a server.',
  },
  {
    q: 'Which countries use EPC QR codes?',
    a: 'EPC QR codes are valid in all 36 SEPA countries, including Germany, Austria, France, Spain, Italy, the Netherlands, Belgium, and all other EU/EEA SEPA members.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Create an EPC QR Code',
  description: 'How to create an EPC QR code for SEPA payments',
  totalTime: 'PT10S',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Enter IBAN and recipient name',
      text: 'Open the generator and enter the recipient IBAN and name (max. 70 characters). BIC is optional.',
    },
    {
      '@type': 'HowToStep',
      name: 'Add amount and payment reference',
      text: 'Optionally enter the amount in EUR and a payment reference (max. 140 characters). Both fields can be left blank.',
    },
    {
      '@type': 'HowToStep',
      name: 'Generate and download',
      text: 'Click Generate. The EPC QR code is created instantly. Download as PNG or copy to clipboard.',
    },
    {
      '@type': 'HowToStep',
      name: 'Share or print',
      text: 'Add the QR code to invoices, emails or print it. Payers scan it with their banking app to initiate the transfer.',
    },
  ],
};

const stats = [
  { value: '36', label: 'SEPA countries' },
  { value: 'EPC069-12', label: 'Official standard' },
  { value: '10 sec.', label: 'Creation time' },
  { value: '100%', label: 'Free' },
];

const relatedLinks = [
  { href: '/en/sepa-payment-qr-code', label: 'SEPA Payment QR Code Generator' },
  { href: '/en/sepa-qr-code', label: 'SEPA QR Code Generator' },
  { href: '/en/wissen/girocode', label: 'What is a GiroCode?' },
  { href: '/en/wissen/epc-standard', label: 'EPC Standard Documentation' },
];

export default function EpcQrCodeGeneratorEnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
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
              <li className="text-slate-400">EPC QR Code Generator</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              EPC069-12 · SEPA Payment QR
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              EPC QR Code Generator – Free SEPA Payment QR
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
              An EPC QR code is the international standard name for a SEPA payment QR code (also
              called GiroCode in Germany). It follows EPC069-12 and lets banking apps pre-fill
              transfer forms when scanned.
            </p>
          </div>

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
            <h2>What is an EPC QR Code?</h2>
            <p>
              An <strong>EPC QR code</strong> (European Payments Council QR Code) is a
              standardised QR code for SEPA credit transfers. The European Payments Council
              defines its structure in document <strong>EPC069-12</strong>. When scanned with a
              banking app, it automatically fills in the recipient name, IBAN, amount and payment
              reference – eliminating manual typing and reducing errors.
            </p>
            <p>
              EPC QR codes are used on invoices, donation pages, event tickets and anywhere a
              quick bank transfer is needed. They work across all 36 SEPA countries and are
              supported by virtually every European banking app.
            </p>

            <h2>EPC QR Code vs. GiroCode – Same Standard, Different Names</h2>
            <p>
              <strong>EPC QR code</strong> and <strong>GiroCode</strong> refer to the exact same
              thing – just different names used in different regions:
            </p>
            <ul>
              <li>
                <strong>EPC QR code</strong> – international technical term (European Payments
                Council)
              </li>
              <li>
                <strong>GiroCode</strong> – German brand name, widely used in Germany and Austria
              </li>
              <li>
                <strong>SEPA QR code</strong> – functional description (QR code for SEPA payments)
              </li>
              <li>
                <strong>Stuzza QR code</strong> – Austrian term (same EPC069-12 standard)
              </li>
            </ul>
            <p>
              All names produce identical QR codes following the same 11-line EPC payload structure.
              Our generator creates technically correct codes regardless of which name you prefer.
            </p>

            <h2>Step-by-Step: Create an EPC QR Code</h2>
            <ol>
              <li>
                <strong>Enter IBAN and recipient name</strong> – Open the generator, type the IBAN
                (with or without spaces) and the recipient name.
              </li>
              <li>
                <strong>Add amount and reference (optional)</strong> – Enter the amount in EUR and
                a payment reference such as &quot;Invoice 2026-001&quot;.
              </li>
              <li>
                <strong>Generate the QR code</strong> – Click Generate. The EPC QR code appears
                instantly, validated against the EPC069-12 standard.
              </li>
              <li>
                <strong>Download and use</strong> – Save as PNG, add to your invoice PDF or share
                digitally. The payer scans it with any SEPA banking app.
              </li>
            </ol>

            <div className="not-prose my-8">
              <Link
                href="/en"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
              >
                Create EPC QR Code now →
              </Link>
            </div>

            <h2>FAQ</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-base font-semibold text-[#e8eaf0]">{faq.q}</h3>
                  <p className="mt-1 text-sm text-slate-300">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="not-prose mt-10 rounded-2xl border border-[#1f2431] bg-[#0f1117] p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xl" aria-hidden>
                  📚
                </span>
                <h2 className="text-base font-bold text-[#e8eaf0]">Further Articles</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {relatedLinks.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3.5 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/30 hover:text-[#e8eaf0] hover:-translate-y-0.5"
                  >
                    <span className="leading-snug">{a.label}</span>
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
