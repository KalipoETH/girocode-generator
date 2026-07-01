import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'IBAN QR Code Generator – Create Free 2026',
  description:
    'Encode IBAN as QR Code: Generate GiroCode/SEPA-QR for free. IBAN, amount and payment reference in the QR code – compatible with all banking apps.',
  alternates: {
    canonical: `${SITE_URL}/en/iban-qr-code`,
    languages: {
      'x-default': `${SITE_URL}/iban-qr-code`,
      de: `${SITE_URL}/iban-qr-code`,
      en: `${SITE_URL}/en/iban-qr-code`,
      fr: `${SITE_URL}/fr/iban-qr-code`,
      es: `${SITE_URL}/es/iban-qr-code`,
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I encode an IBAN in a QR Code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use a GiroCode generator following the EPC069-12 standard. It encodes IBAN, recipient name, optional amount and payment reference in a structured format – not just as plain text.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use any QR Code reader for IBAN QR Codes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Only banking apps with EPC/GiroCode support recognise the payment data as a transfer order. Regular QR scanners only show the raw text.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a QR Code with IBAN and a GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A regular QR Code contains only text. A GiroCode (IBAN QR Code) contains structured payment data following EPC069-12, which banking apps recognise directly as a transfer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my IBAN safe in the QR Code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The generator works locally in the browser, without storage. The IBAN is visible in the QR code – this is intentional for GiroCodes so payments can be made.',
      },
    },
  ],
};

const stats = [
  { value: '34', label: 'Max. IBAN characters' },
  { value: 'EPC069-12', label: 'QR standard for IBANs' },
  { value: '10 sec.', label: 'Creation time' },
  { value: '100%', label: 'Free' },
];

const comparisonRows = [
  ['Scannable by banking app', '✅ Yes', '❌ No'],
  ['Amount transferable', '✅ Yes', '❌ No'],
  ['Standard', 'EPC069-12', 'No standard'],
  ['Payment reference', '✅ Yes', '❌ No'],
  ['Direct transfer', '✅ Yes', '❌ No'],
];

const relatedLinks = [
  { href: '/en/sepa-qr-code', label: 'SEPA QR Code Generator' },
  { href: '/en/epc-qr-code', label: 'EPC QR Code Generator' },
  { href: '/en/wissen/iban-bic', label: 'IBAN & BIC explained' },
  { href: '/en', label: 'Create GiroCode for free' },
];

export default function IbanQrCodeEnPage() {
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
              <li className="text-slate-400">IBAN QR Code Generator</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              IBAN as QR Code · GiroCode Standard
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              IBAN QR Code Generator – Free &amp; Instant
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
              An IBAN QR Code (technically: GiroCode or SEPA-QR) encodes an IBAN together with
              optional amount and payment reference in a QR code following the EPC standard. Unlike
              a simple QR Code with IBAN text, a GiroCode can be scanned directly by banking apps.
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
            <h2>IBAN QR Code vs. Simple QR Code</h2>
            <p>
              Many people create a QR Code that only contains the IBAN as text. This does not work
              with banking apps – only a structured GiroCode following EPC069-12 is recognised as a
              transfer order.
            </p>

            <div className="not-prose my-6 overflow-x-auto rounded-lg border border-slate-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 text-slate-300">
                    <th className="px-4 py-3 text-left font-medium">Feature</th>
                    <th className="px-4 py-3 text-left font-medium text-[#22c55e]">
                      IBAN QR Code (GiroCode)
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-slate-400">
                      Regular QR Code
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50 text-slate-300">
                  {comparisonRows.map(([label, giro, normal], i) => (
                    <tr key={label} className={i % 2 === 1 ? 'bg-slate-800/30' : ''}>
                      <td className="px-4 py-3 font-medium text-slate-200">{label}</td>
                      <td className="px-4 py-3 text-[#22c55e]">{giro}</td>
                      <td className="px-4 py-3">{normal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>How do I create an IBAN QR Code?</h2>
            <ol>
              <li>Enter IBAN (e.g. DE89 3704 0044 0532 0130 00)</li>
              <li>Enter recipient name (max. 70 characters)</li>
              <li>Optionally add amount and payment reference</li>
              <li>Generate QR code and download as PNG</li>
            </ol>

            <h2>Which IBANs are supported?</h2>
            <p>
              All IBANs from the 36 SEPA countries: German (DE), Austrian (AT), Swiss (CH) and
              all other EU/EEA countries. Our generator automatically validates IBANs using the
              Mod-97 checksum.
            </p>

            <div className="not-prose my-8">
              <Link
                href="/en"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
              >
                Create IBAN QR Code →
              </Link>
            </div>

            <h2>FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  How do I encode an IBAN in a QR Code?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Use a GiroCode generator following the EPC069-12 standard. It encodes IBAN,
                  recipient name, optional amount and payment reference in a structured format – not
                  just as plain text.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Can I use any QR Code reader for IBAN QR Codes?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  No. Only banking apps with EPC/GiroCode support recognise the payment data as a
                  transfer order. Regular QR scanners only show the raw text.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  What is the difference between a QR Code with IBAN and a GiroCode?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  A regular QR Code contains only text. A GiroCode (IBAN QR Code) contains
                  structured payment data following EPC069-12, which banking apps recognise directly
                  as a transfer.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Is my IBAN safe in the QR Code?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  The generator works locally in the browser, without storage. The IBAN is visible
                  in the QR code – this is intentional for GiroCodes so payments can be made.
                </p>
              </div>
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
                    className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3.5 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/30 hover:bg-[#1a1d25] hover:text-[#e8eaf0]"
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
