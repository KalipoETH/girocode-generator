import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'QR Code for Bank Transfer – Create Free 2026',
  description:
    'Create QR Code for SEPA bank transfer for free: Customers scan and transfer instantly. GiroCode/EPC-QR standard. No registration, 100% local in browser.',
  alternates: {
    canonical: `${SITE_URL}/en/qr-code-ueberweisung`,
    languages: {
      'x-default': `${SITE_URL}/qr-code-ueberweisung`,
      de: `${SITE_URL}/qr-code-ueberweisung`,
      en: `${SITE_URL}/en/qr-code-ueberweisung`,
      fr: `${SITE_URL}/fr/qr-code-ueberweisung`,
      es: `${SITE_URL}/es/qr-code-ueberweisung`,
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I create a QR Code for a bank transfer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open the GiroCode generator, enter IBAN and name, optionally add amount and payment reference, download the QR code.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which app do I need to scan a bank transfer QR Code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Any German banking app: Sparkasse, ING, DKB, Volksbank, Commerzbank, Deutsche Bank, N26 and more.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a QR Code for bank transfers free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Creating: Yes, free. Transferring: normal bank transfer fees (usually free for private customers).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use a QR Code for recurring transfers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if amount and payment reference are always the same (e.g. monthly club membership fee).',
      },
    },
  ],
};

const stats = [
  { value: '30 sec.', label: 'Time until transfer' },
  { value: '€0', label: 'Cost for creator & payer' },
  { value: '36', label: 'SEPA countries compatible' },
  { value: '100%', label: 'Local in browser' },
];

const useCases = [
  { title: 'Freelancers', desc: 'On invoices for faster payment' },
  { title: 'Clubs', desc: 'For membership fees and donations' },
  { title: 'Tradespeople', desc: 'On invoices on site' },
  { title: 'Private individuals', desc: 'For payments between each other' },
  { title: 'Charities', desc: 'On flyers and posters' },
];

const relatedLinks = [
  { href: '/en', label: 'Create GiroCode for free' },
  { href: '/en/sepa-qr-code', label: 'SEPA QR Code Generator' },
  { href: '/en/freelancer', label: 'GiroCode for Freelancers' },
  { href: '/en/verein', label: 'GiroCode for Clubs' },
];

export default function QrCodeUeberweisungEnPage() {
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
              <li className="text-slate-400">QR Code for Bank Transfer</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              SEPA Bank Transfer via QR Code
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              QR Code for Bank Transfer – Free &amp; Instant
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
              A QR Code for bank transfers is a GiroCode (SEPA-QR Code) following the EPC069-12
              standard. It contains IBAN, amount and payment reference and allows a transfer to be
              initiated by simply scanning with a banking app – in under 30 seconds.
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
            <h2>How does a QR Code for bank transfers work?</h2>
            <ol>
              <li>
                <strong>Create QR Code:</strong> Enter IBAN, recipient name, optionally amount and
                payment reference
              </li>
              <li>
                <strong>Share or print:</strong> Place QR code on invoice, email or website
              </li>
              <li>
                <strong>Scan &amp; transfer:</strong> Recipient scans with banking app → transfer
                is automatically filled in
              </li>
            </ol>

            <h2>What is a bank transfer QR Code used for?</h2>
            <ul>
              {useCases.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.desc}
                </li>
              ))}
            </ul>

            <h2>Advantages over manual IBAN entry</h2>
            <ul>
              <li>No typos in the IBAN</li>
              <li>Amount is automatically entered</li>
              <li>Payment reference correctly transferred</li>
              <li>Faster: approx. 10 seconds instead of 2 minutes</li>
            </ul>

            <div className="not-prose my-8">
              <Link
                href="/en"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
              >
                Create QR Code for Bank Transfer →
              </Link>
            </div>

            <h2>FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  How do I create a QR Code for a bank transfer?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Open the GiroCode generator, enter IBAN and name, optionally add amount and
                  payment reference, download the QR code.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Which app do I need to scan a bank transfer QR Code?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Any German banking app: Sparkasse, ING, DKB, Volksbank, Commerzbank, Deutsche
                  Bank, N26 and more.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Is a QR Code for bank transfers free?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Creating: Yes, free. Transferring: normal bank transfer fees (usually free for
                  private customers).
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Can I use a QR Code for recurring transfers?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Yes, if amount and payment reference are always the same (e.g. monthly club
                  membership fee).
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
