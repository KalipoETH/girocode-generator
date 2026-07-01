import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'BezahlCode Generator – Free SEPA QR Code (= GiroCode)',
  description:
    'Generate BezahlCode (now called GiroCode) for free: The old German name for SEPA QR codes. Create BezahlCode/GiroCode in 10 seconds – no registration.',
  alternates: {
    canonical: `${SITE_URL}/en/bezahlcode`,
    languages: {
      'x-default': `${SITE_URL}/bezahlcode`,
      de: `${SITE_URL}/bezahlcode`,
      en: `${SITE_URL}/en/bezahlcode`,
      fr: `${SITE_URL}/fr/bezahlcode`,
      es: `${SITE_URL}/es/bezahlcode`,
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between BezahlCode and GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no technical difference. BezahlCode is the older German name for the same SEPA QR code. Since 2018, the term GiroCode has been used as the official name by the European Payments Council (EPC). Both terms describe exactly the same format following the EPC069-12 standard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I still use a BezahlCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, absolutely. Since BezahlCode and GiroCode are technically identical and both follow the EPC069-12 standard, a BezahlCode works exactly like a GiroCode. All banking apps that support GiroCodes also recognise BezahlCodes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which apps support BezahlCode/GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All major German banking apps support BezahlCode/GiroCode: Sparkasse, ING, DKB, Volksbank, Commerzbank, Deutsche Bank, N26, Postbank, Comdirect and Targobank. Since the QR code is based on the European EPC standard, it works in all 36 SEPA countries.',
      },
    },
  ],
};

const stats = [
  { value: '2018', label: 'BezahlCode became GiroCode' },
  { value: 'EPC069-12', label: 'Shared standard' },
  { value: '10 sec.', label: 'Creation time' },
  { value: '100%', label: 'Free' },
];

const bankingApps = [
  'Sparkasse', 'ING', 'DKB', 'Volksbank', 'Commerzbank',
  'Deutsche Bank', 'N26', 'Postbank', 'Comdirect', 'Targobank',
];

const relatedLinks = [
  { href: '/en/sepa-qr-code', label: 'SEPA QR Code Generator' },
  { href: '/en/epc-qr-code', label: 'EPC QR Code Generator' },
  { href: '/en/wissen/girocode', label: 'What is a GiroCode?' },
  { href: '/en', label: 'Create GiroCode for free' },
];

export default function BezahlcodeEnPage() {
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
              <li className="text-slate-400">BezahlCode Generator</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Alternative Names · GiroCode / BezahlCode
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              BezahlCode Generator – Free &amp; Instant
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
              BezahlCode is the older German name for what is now officially called GiroCode (SEPA
              QR Code). Since 2018, the term BezahlCode was replaced by the official EPC term
              GiroCode. Both refer to the same standard: EPC069-12 by the European Payments
              Council.
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

            <h2>BezahlCode = GiroCode: Same Standard, Different Name</h2>
            <p>
              Anyone searching for a BezahlCode generator is essentially looking for the same thing
              as a GiroCode generator – because BezahlCode and GiroCode are technically identical.
              Both refer to a standardised QR code for SEPA transfers built according to the{' '}
              <strong>EPC069-12 standard</strong> of the European Payments Council.
            </p>
            <p>
              The term <em>BezahlCode</em> originated in Germany as an early marketing name for
              this type of QR code. Banks and payment service providers used it to offer their
              customers a simple way to share transfer data via QR code. As European-wide
              standardisation progressed, the term <em>GiroCode</em> established itself as the
              official name.
            </p>

            <h2>When Did BezahlCode Become GiroCode?</h2>
            <p>
              In <strong>2018</strong>, the European Payments Council (EPC) officially standardised
              the format under the name <em>GiroCode</em>. The technical specification EPC069-12
              defined how SEPA payment data must be encoded in a QR code – including IBAN,
              recipient name, optional amount and payment reference.
            </p>
            <p>
              The renaming was part of the broader initiative to harmonise SEPA payments across
              Europe. Since then, GiroCode has been the official term across the EU and all 36 SEPA
              countries. However, in German banking apps, the term BezahlCode is still frequently
              found in help documentation – for historical reasons, both terms continue to be used
              and recognised.
            </p>
            <p>
              A QR code generated with this generator is 100% compliant with the EPC069-12
              standard and works regardless of whether it is called BezahlCode or GiroCode.
            </p>

            <h2>Banking Apps That Support BezahlCode/GiroCode</h2>
            <p>
              All major German banks support the BezahlCode/GiroCode standard in their mobile
              apps. Since it is the same QR code, a generated QR code works with all of the
              following apps:
            </p>
            <ul>
              {bankingApps.map((app) => (
                <li key={app}>{app}</li>
              ))}
            </ul>
            <p>
              Austrian banks (e.g. Erste Bank, Raiffeisen, BAWAG), Swiss banks and all other
              banks in the SEPA area also support this standard. In total, over 36 European
              countries are compatible.
            </p>

            {/* CTA */}
            <div className="not-prose my-8">
              <Link
                href="/en"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
              >
                Create BezahlCode / GiroCode →
              </Link>
            </div>

            <h2>FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  What is the difference between BezahlCode and GiroCode?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  There is no technical difference. BezahlCode is the older German name for the
                  same SEPA QR code. Since 2018, the term GiroCode has been used as the official
                  name by the European Payments Council (EPC). Both terms describe exactly the same
                  format following the EPC069-12 standard.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Can I still use a BezahlCode?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Yes, absolutely. Since BezahlCode and GiroCode are technically identical and both
                  follow the EPC069-12 standard, a BezahlCode works exactly like a GiroCode. All
                  banking apps that support GiroCodes also recognise BezahlCodes – the QR code
                  itself contains no label.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Which apps support BezahlCode/GiroCode?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  All major German banking apps support BezahlCode/GiroCode: Sparkasse, ING, DKB,
                  Volksbank, Commerzbank, Deutsche Bank, N26, Postbank, Comdirect and Targobank.
                  Since the QR code is based on the European EPC standard, it works in all 36 SEPA
                  countries.
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
