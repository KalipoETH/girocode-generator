import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode Not Working – Causes & Solutions 2026',
  description:
    'GiroCode not recognized or not scanning? The 7 most common causes and immediate solutions. Explained for all banking apps.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/en/girocode-funktioniert-nicht',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/girocode-funktioniert-nicht',
      'de': 'https://www.girocodegenerator.com/girocode-funktioniert-nicht',
      'en': 'https://www.girocodegenerator.com/en/girocode-funktioniert-nicht',
      'fr': 'https://www.girocodegenerator.com/fr/girocode-funktioniert-nicht',
      'es': 'https://www.girocodegenerator.com/es/girocode-funktioniert-nicht',
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is my banking app not scanning the GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common causes: app does not support the EPC standard, QR code too small (min. 2×2 cm), poor lighting, or wrong scan area in the app (look under "Transfer" → "QR Code").',
      },
    },
    {
      '@type': 'Question',
      name: 'How large must a GiroCode be when printed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At least 2×2 cm. Recommended: 3×3 cm on invoices. Below 2×2 cm the camera cannot reliably read the code.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I scan a GiroCode with a regular camera app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, regular QR code scanners do not recognize the EPC content as a bank transfer. You need a banking app or our browser scanner (/scanner).',
      },
    },
    {
      '@type': 'Question',
      name: 'What to do if the GiroCode shows wrong data after scanning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Check whether the code was created with a validated IBAN format. Make sure the code was created with an EPC-compatible generator (like ours).',
      },
    },
  ],
};

const problems = [
  {
    title: 'QR code printed too small',
    solution: 'Maintain minimum size of 2×2 cm. For PDFs: minimum 150 DPI print quality.',
  },
  {
    title: 'Poor lighting when scanning',
    solution: 'Set screen brightness to maximum. Avoid reflections. Prefer indirect lighting.',
  },
  {
    title: 'Wrong distance to the QR code',
    solution: 'Optimal distance: 15–30 cm. Neither too close nor too far.',
  },
  {
    title: 'Banking app does not support GiroCode',
    solution:
      'Check whether your app supports SEPA-QR/EPC. All major German banks (Sparkasse, ING, DKB, Volksbank, Commerzbank) support the standard.',
  },
  {
    title: 'QR code contains invalid IBAN',
    solution: 'Validate IBAN with an IBAN checker. Our generator validates IBANs automatically (Mod-97).',
  },
  {
    title: 'QR code is damaged or blurry',
    solution: 'Re-create the code. Use error correction level H for printed codes.',
  },
  {
    title: 'Wrong app setting',
    solution:
      'Look in the app menu for "Transfer" → "QR Code". In some apps found under "Scan".',
  },
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
              <li className="text-slate-400">GiroCode Not Working</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Troubleshooting · Solve GiroCode Problems
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode Not Working – 7 Causes &amp; Solutions
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
              If a GiroCode is not working, the cause is usually a print size that is too small
              (minimum size: 2×2 cm), poor lighting, reflections on the screen, or a banking app
              that does not support the EPC standard.
            </p>
          </div>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2>7 Common Causes &amp; Solutions</h2>

            <div className="not-prose space-y-3 mb-8">
              {problems.map((p, i) => (
                <div key={i} className="rounded-xl border border-[#1f2431] bg-[#0f1117] p-5">
                  <div className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#22c55e]/20 text-xs font-bold text-[#22c55e]">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="mb-1 text-sm font-bold text-slate-50">{p.title}</h3>
                      <p className="text-sm text-slate-400">Solution: {p.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p>
              Most GiroCode problems can be solved within minutes. If your banking app does not
              support GiroCodes at all, you can find an{' '}
              <Link href="/en/wissen/banking-apps" className="text-[#22c55e] hover:underline">
                overview of all compatible banking apps
              </Link>{' '}
              in our knowledge section.
            </p>

            <div className="not-prose my-8 flex flex-wrap gap-3">
              <Link
                href="/en"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#16a34a 0%,#15803d 100%)' }}
              >
                Re-create GiroCode →
              </Link>
              <Link
                href="/scanner"
                className="inline-flex items-center gap-2 rounded-xl border border-[#1f2431] px-6 py-3 text-sm font-bold text-slate-300 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-500/30"
              >
                Use Browser Scanner →
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
                  { href: '/en/wissen/banking-apps', label: 'Banking Apps Overview' },
                  { href: '/en/girocode-scannen-anleitung', label: 'How to Scan a GiroCode' },
                  { href: '/en', label: 'Re-create GiroCode' },
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
