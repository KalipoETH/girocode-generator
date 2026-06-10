import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SEPA QR Code Generator – Free & Instant 2026',
  description:
    'Generate SEPA QR Code (GiroCode/EPC-QR) for free: Enter IBAN, generate QR code, done. Compatible with all banking apps. No registration required.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/en/sepa-qr-code',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/sepa-qr-code',
      de: 'https://www.girocodegenerator.com/sepa-qr-code',
      en: 'https://www.girocodegenerator.com/en/sepa-qr-code',
      fr: 'https://www.girocodegenerator.com/fr/sepa-qr-code',
      es: 'https://www.girocodegenerator.com/es/sepa-qr-code',
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a SEPA QR Code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A SEPA QR Code (also called GiroCode, EPC QR Code or BezahlCode) is a standardised QR code for SEPA credit transfers following the EPC069-12 standard of the European Payments Council. It contains all payment data such as IBAN, recipient name, optional amount and payment reference in machine-readable form.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I create a SEPA QR Code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Creating a SEPA QR Code is simple: enter the IBAN, add the recipient name, optionally include the amount and payment reference, then click Generate. The finished QR code can be downloaded immediately – no registration required and completely free.',
      },
    },
    {
      '@type': 'Question',
      name: 'What data does a SEPA QR Code contain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A SEPA QR Code contains: IBAN (required), recipient name (required), BIC (optional, no longer mandatory in the SEPA area), amount (optional), payment reference (optional, up to 140 characters). All data is formatted according to EPC069-12.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are SEPA QR Codes free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, SEPA QR Codes are completely free to create and use. The EPC standard is open and royalty-free. Our generator creates SEPA QR Codes without registration, at no cost, and processes all data locally in the browser.',
      },
    },
  ],
};

const stats = [
  { value: '36', label: 'SEPA countries' },
  { value: 'EPC069-12', label: 'Official standard' },
  { value: '10 sec.', label: 'Creation time' },
  { value: '100%', label: 'Free' },
];

const tableRows = [
  { merkmal: 'Standard', wert: 'EPC069-12' },
  { merkmal: 'Countries', wert: '36 SEPA countries' },
  { merkmal: 'Compatibility', wert: 'All banking apps' },
  { merkmal: 'Free', wert: 'Yes' },
  { merkmal: 'IBAN included', wert: 'Yes' },
  { merkmal: 'Amount optional', wert: 'Yes' },
  { merkmal: 'Payment reference', wert: 'Up to 140 characters' },
];

const relatedLinks = [
  { href: '/en/bezahlcode', label: 'BezahlCode Generator' },
  { href: '/en/epc-qr-code', label: 'EPC QR Code Generator' },
  { href: '/en/iban-qr-code', label: 'IBAN QR Code Generator' },
  { href: '/en/wissen/epc-standard', label: 'EPC Standard Documentation' },
];

export default function SepaQrCodeEnPage() {
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
              <li className="text-slate-400">SEPA QR Code Generator</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Alternative Names · SEPA QR Code / GiroCode
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              SEPA QR Code Generator – Free &amp; Instant
            </h1>
          </header>

          {/* Short Answer Box */}
          <div
            className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3"
            role="note"
          >
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">
              💡 Short Answer
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              A SEPA QR Code (also GiroCode or EPC QR Code) is a standardised QR code for SEPA
              credit transfers. It follows the EPC069-12 standard of the European Payments Council
              and is compatible with all German and European banking apps.
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

            <h2>What is a SEPA QR Code?</h2>
            <p>
              A <strong>SEPA QR Code</strong> – also known as GiroCode, EPC QR Code or BezahlCode
              – is a standardised QR code for SEPA credit transfers within the European SEPA
              payment area spanning 36 countries. It follows the{' '}
              <strong>EPC069-12 standard</strong> of the European Payments Council (EPC) and
              encodes all relevant payment data in machine-readable form.
            </p>
            <p>
              When someone scans a SEPA QR Code, their banking app opens directly with a
              pre-filled transfer form containing the IBAN, recipient name, amount and payment
              reference. The user simply confirms – no manual typing needed. This saves time and
              significantly reduces errors.
            </p>

            <h2>Difference: SEPA QR Code vs. Regular QR Code</h2>
            <p>
              A regular QR code can contain any text, URLs or other data – it has no standardised
              format. Banking apps cannot interpret such QR codes as payment instructions.
            </p>
            <p>
              A <strong>SEPA QR Code</strong>, on the other hand, follows a strict format according
              to EPC069-12:
            </p>
            <ul>
              <li>Always starts with the service tag <code>BCD</code></li>
              <li>Contains structured fields: IBAN, BIC, amount, name, reference</li>
              <li>
                Recognised by banking apps as a payment instruction and processed automatically
              </li>
              <li>Maximum data volume defined (not arbitrary size)</li>
            </ul>
            <p>
              Only a correctly structured SEPA QR Code according to the EPC standard is accepted
              by banking applications as a payment instruction.
            </p>

            <h2>Which Banking Apps Support SEPA QR Codes?</h2>
            <p>
              Virtually all major banking apps in Germany, Austria and Switzerland support SEPA QR
              Codes. In Germany these include: Sparkasse, ING, DKB, Volksbank/Raiffeisenbank,
              Commerzbank, Deutsche Bank, N26, Postbank, Comdirect and Targobank. Since the
              standard is valid across Europe, SEPA QR Codes also work with banks in all 36 SEPA
              countries.
            </p>

            {/* CTA */}
            <div className="not-prose my-8">
              <Link
                href="/en"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
              >
                Create SEPA QR Code now →
              </Link>
            </div>

            <h2>SEPA QR Code Properties</h2>
            <div className="not-prose overflow-x-auto rounded-xl border border-[#1f2431]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#1f2431] bg-[#0f1117]">
                    <th className="px-4 py-3 text-left font-semibold text-[#e8eaf0]">Property</th>
                    <th className="px-4 py-3 text-left font-semibold text-[#22c55e]">
                      SEPA QR Code
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-[#1f2431] ${i % 2 === 0 ? 'bg-[#0b0c10]' : 'bg-[#0f1117]'}`}
                    >
                      <td className="px-4 py-3 text-[#8b90a0]">{row.merkmal}</td>
                      <td className="px-4 py-3 text-slate-200">{row.wert}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  What is a SEPA QR Code?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  A SEPA QR Code (also GiroCode, EPC QR Code or BezahlCode) is a standardised QR
                  code for SEPA credit transfers following the EPC069-12 standard. It contains all
                  payment data in a structured format and is recognised directly by banking apps as
                  a payment instruction.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  How do I create a SEPA QR Code?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Enter the IBAN, add the recipient name, optionally include the amount and payment
                  reference, then generate – done. The QR code can be downloaded immediately, no
                  registration required and completely free.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  What data does a SEPA QR Code contain?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  IBAN (required), recipient name (required), BIC (optional), amount (optional),
                  payment reference (optional, up to 140 characters). All data is formatted and
                  encoded according to EPC069-12.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Are SEPA QR Codes free?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Yes, completely free. The EPC standard is open and royalty-free. Our generator
                  creates SEPA QR Codes without registration, at no hidden cost, and processes all
                  data locally in the browser – no data is transmitted to servers.
                </p>
              </div>
            </div>

            {/* Related Links Box */}
            <div className="not-prose mt-10 rounded-2xl border border-[#1f2431] bg-[#0f1117] p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xl" aria-hidden>📚</span>
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
                    <span className="ml-3 shrink-0 text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
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
