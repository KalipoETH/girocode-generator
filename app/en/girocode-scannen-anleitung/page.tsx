import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'How to Scan a GiroCode – Complete Guide for All Apps 2026',
  description:
    'Scan GiroCode with Sparkasse, ING, DKB, Volksbank & more: Step-by-step guide for all banking apps. With phone camera or file upload.',
  alternates: {
    canonical: `${SITE_URL}/en/girocode-scannen-anleitung`,
    languages: {
      'x-default': `${SITE_URL}/girocode-scannen-anleitung`,
      'de': `${SITE_URL}/girocode-scannen-anleitung`,
      'en': `${SITE_URL}/en/girocode-scannen-anleitung`,
      'fr': `${SITE_URL}/fr/girocode-scannen-anleitung`,
      'es': `${SITE_URL}/es/girocode-scannen-anleitung`,
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where do I find the QR scanner in my banking app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under "Transfer" or "Send Money" there is a camera/QR icon. In some apps also found under "Scan & Pay".',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I scan a GiroCode without a banking app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, with our browser scanner at /scanner. However, regular QR code readers like Google Lens do not recognize the EPC content as a bank transfer.',
      },
    },
    {
      '@type': 'Question',
      name: 'GiroCode scans but banking app shows an error?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The IBAN might be invalid or the amount might exceed the allowed maximum. Re-create the code and verify the IBAN.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I scan GiroCodes from a PDF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, many banking apps allow importing photos/screenshots. You can also use our browser scanner.',
      },
    },
  ],
};

const banks = [
  { name: 'Sparkasse App', path: 'Transfer → QR Code icon top right' },
  { name: 'ING Banking to go', path: 'Transfer → Camera symbol' },
  { name: 'DKB Banking', path: 'Transfer → Scan QR Code' },
  { name: 'Volksbank / VR-Banking', path: 'Transfer → QR Code icon' },
  { name: 'Commerzbank', path: 'Transfer → QR Code' },
  { name: 'Deutsche Bank', path: 'Transfer → QR Code' },
  { name: 'N26', path: 'Send → Scan QR Code' },
  { name: 'Postbank', path: 'Transfer → QR Code icon' },
  { name: 'Comdirect', path: 'Transfer → QR Code' },
  { name: 'Targobank', path: 'Transfer → Scan QR Code' },
];

const stats = [
  { value: '30 sec.', label: 'Scan to transfer' },
  { value: '10+', label: 'Supported banking apps' },
  { value: '36', label: 'SEPA countries compatible' },
  { value: 'EPC069-12', label: 'Supported standard' },
];

export default function Page() {
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
              <li className="text-slate-400">How to Scan a GiroCode</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Guide · Scan GiroCode
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              How to Scan a GiroCode – Guide for All Banking Apps
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
              Scan GiroCode: Open banking app → tap &quot;Transfer&quot; → tap QR scanner icon → scan
              GiroCode → verify data → confirm with TAN. The entire process takes less than 30
              seconds. Works with Sparkasse, ING, DKB, Volksbank and all other SEPA-compatible apps.
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
            <h2>General Scan Guide (3 Steps)</h2>

            <div className="not-prose space-y-3 mb-8">
              {[
                {
                  n: '1',
                  title: 'Open your banking app and navigate to "Transfer"',
                  desc: 'Launch your banking app and tap "Transfer" or "Send Money". In some apps you may find the function under "Payments" or "Pay & Transfer".',
                },
                {
                  n: '2',
                  title: 'Tap the QR code scanner icon',
                  desc: 'In the transfer form, a camera or QR code symbol appears. Tap it to open the scanner. In some apps, you first need to select "New Transfer".',
                },
                {
                  n: '3',
                  title: 'Scan the GiroCode and confirm',
                  desc: 'Hold the camera to the GiroCode. The recipient details (IBAN, name, amount, reference) are filled in automatically. Check the data and confirm with your TAN.',
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="rounded-xl border border-[#1f2431] bg-[#0f1117] p-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#22c55e]/20 text-xs font-bold text-[#22c55e]">
                      {step.n}
                    </span>
                    <div>
                      <h3 className="mb-1 text-sm font-bold text-slate-50">{step.title}</h3>
                      <p className="text-sm text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2>App-Specific Instructions</h2>

            <div className="not-prose space-y-2 mb-6">
              {banks.map((b, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-[#1f2431] bg-[#0f1117] px-4 py-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#22c55e]/20 text-xs font-bold text-[#22c55e]">
                    {i + 1}
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-slate-200">{b.name}: </span>
                    <span className="text-sm text-slate-400">{b.path}</span>
                  </div>
                </div>
              ))}
            </div>

            <h2>Common Scanning Issues</h2>
            <p>
              If scanning does not work, first check the lighting, distance and size of the QR
              code. Find a complete overview of all possible problems and their solutions in our
              article{' '}
              <Link href="/en/girocode-funktioniert-nicht" className="text-[#22c55e] hover:underline">
                GiroCode Not Working – 7 Causes &amp; Solutions
              </Link>
              .
            </p>

            <h2>Alternative: Scan in the Browser</h2>
            <p>
              With our browser scanner, GiroCodes can also be scanned directly on a PC or tablet,
              without a banking app. Simply upload the image file or use the camera – the transfer
              data is read out immediately.
            </p>

            <div className="not-prose my-6 flex flex-wrap gap-3">
              <Link
                href="/scanner"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#16a34a 0%,#15803d 100%)' }}
              >
                Scan GiroCode in Browser →
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
                  { href: '/scanner', label: 'Browser GiroCode Scanner' },
                  { href: '/en/girocode-funktioniert-nicht', label: 'GiroCode Not Working – Solutions' },
                  { href: '/en/wissen/banking-apps', label: 'Banking Apps Overview' },
                  { href: '/en/girocode-erstellen-anleitung', label: 'How to Create a GiroCode' },
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
