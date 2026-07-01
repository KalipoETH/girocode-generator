import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'SEPA Payment QR Code Generator – Free 2026',
  description:
    'Generate SEPA payment QR codes instantly. EPC069-12 compliant, compatible with all EU banking apps. Free, no registration required.',
  alternates: {
    canonical: `${SITE_URL}/en/sepa-payment-qr-code`,
    languages: {
      'x-default': `${SITE_URL}/sepa-qr-code`,
      de: `${SITE_URL}/sepa-qr-code`,
      en: `${SITE_URL}/en/sepa-payment-qr-code`,
    },
  },
};

const faqs = [
  {
    q: 'What is a SEPA payment QR code?',
    a: 'A SEPA payment QR code encodes all data needed for a SEPA credit transfer – IBAN, recipient name, optional amount and reference – in a scannable QR code following the EPC069-12 standard.',
  },
  {
    q: 'How do I generate a SEPA payment QR code?',
    a: 'Enter the IBAN and recipient name in our generator, optionally add amount and payment reference, then click Generate. The QR code is ready in seconds – free and without registration.',
  },
  {
    q: 'Which apps can scan SEPA payment QR codes?',
    a: 'All major European banking apps support SEPA payment QR codes: Sparkasse, ING, N26, Revolut, George, BNP Paribas, CaixaBank and hundreds more across 36 SEPA countries.',
  },
  {
    q: 'Is the SEPA payment QR code generator free?',
    a: 'Yes, 100% free. No account needed. All processing happens locally in your browser – your banking data never leaves your device.',
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

const stats = [
  { value: '36', label: 'SEPA countries' },
  { value: 'EPC069-12', label: 'Compliant standard' },
  { value: '10 sec.', label: 'Generation time' },
  { value: '100%', label: 'Free & local' },
];

const relatedLinks = [
  { href: '/en/epc-qr-code-generator', label: 'EPC QR Code Generator' },
  { href: '/en/sepa-qr-code', label: 'SEPA QR Code Generator' },
  { href: '/en/iban-qr-code', label: 'IBAN QR Code Generator' },
  { href: '/en/wissen/girocode', label: 'What is a GiroCode?' },
];

export default function SepaPaymentQrCodeEnPage() {
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
                <Link href="/en" className="text-sky-400 hover:text-sky-300">
                  Home
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">SEPA Payment QR Code Generator</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              SEPA Payment · EPC069-12
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              SEPA Payment QR Code Generator – Free &amp; Instant
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
              A SEPA payment QR code is a scannable code that pre-fills a bank transfer in any
              SEPA banking app. Also known as EPC QR code or GiroCode, it follows the EPC069-12
              standard and works in all 36 SEPA countries.
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
            <h2>What is a SEPA Payment QR Code?</h2>
            <p>
              A <strong>SEPA payment QR code</strong> is a QR code that contains all the
              information needed for a SEPA credit transfer. When a payer scans it with their
              banking app, the transfer form is automatically filled with the recipient&apos;s IBAN,
              name, amount and payment reference. The payer only needs to confirm – no manual
              typing required.
            </p>
            <p>
              SEPA payment QR codes follow the <strong>EPC069-12 standard</strong> of the European
              Payments Council and are recognised by banking apps across all 36 SEPA member
              countries. They are also known as EPC QR codes or GiroCodes (in Germany).
            </p>

            <h2>Why Use a SEPA Payment QR Code?</h2>
            <ul>
              <li>Faster payments – no IBAN typos or copy-paste errors</li>
              <li>Professional invoices with embedded payment QR codes</li>
              <li>Works with all European banking apps</li>
              <li>Free to create – no registration or subscription</li>
              <li>100% privacy – data stays in your browser</li>
            </ul>

            <h2>How to Create a SEPA Payment QR Code</h2>
            <ol>
              <li>Enter the recipient IBAN and name</li>
              <li>Optionally add amount and payment reference</li>
              <li>Click Generate – the QR code appears instantly</li>
              <li>Download as PNG or add to your invoice PDF</li>
            </ol>

            <div className="not-prose my-8">
              <Link
                href="/en"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
              >
                Create SEPA Payment QR Code now →
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
