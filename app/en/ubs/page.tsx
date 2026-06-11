import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode with UBS – Step-by-Step Guide 2026',
  description:
    'Scan a GiroCode with UBS: Open QR scanner in the UBS Mobile Banking App, scan the code, confirm the transfer. ✅ Step-by-step guide 2026.',
  keywords: 'girocode ubs, ubs girocode scan, ubs qr code, sepa qr ubs',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/en/ubs',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/ubs',
      de: 'https://www.girocodegenerator.com/ubs',
      en: 'https://www.girocodegenerator.com/en/ubs',
      fr: 'https://www.girocodegenerator.com/fr/ubs',
      es: 'https://www.girocodegenerator.com/es/ubs',
      it: 'https://www.girocodegenerator.com/it/ubs',
    },
  },
};

const otherBanks = [
  { href: '/zuercher-kantonalbank', label: 'Zürcher Kantonalbank' },
  { href: '/raiffeisen-schweiz', label: 'Raiffeisen Schweiz' },
  { href: '/postfinance', label: 'PostFinance' },
  { href: '/credit-suisse-ubs', label: 'Credit Suisse (now UBS)' },
  { href: '/cantonal-banks', label: 'Cantonal Banks' },
  { href: '/sparkasse', label: 'Sparkasse (Germany)' },
  { href: '/volksbank', label: 'Volksbank / VR-Banking' },
];

const faqItems = [
  {
    question: 'Does the UBS Mobile Banking App support all GiroCodes?',
    answer:
      'Yes, the UBS Mobile Banking App recognises all EPC-compliant SEPA QR codes (GiroCodes). Make sure the app is up to date. Check the App Store or Google Play for updates.',
  },
  {
    question: 'Where do I find the QR scanner in the UBS Mobile Banking App?',
    answer:
      'You\'ll find the QR scanner under "Payments" – look for the camera icon. Tap it to open the scanner view.',
  },
  {
    question: 'What should I do if the scan doesn\'t work?',
    answer:
      'Increase screen brightness when scanning digital codes. Hold the camera approx. 15–30 cm from the code and ensure good lighting. For printed codes, use smooth, uncrumpled paper.',
  },
  {
    question: 'Is the GiroCode scan secure?',
    answer:
      'Yes. You always see all transfer data before confirming. The confirmation requires UBS Access Card or biometrics. The code itself contains no sensitive data that could be misused.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function UbsEnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/en" className="text-sky-400 hover:text-sky-300">Home</Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">UBS</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="mb-10 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Compatible with UBS Mobile Banking App
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              Scan GiroCode with UBS
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              How to use GiroCodes (SEPA QR codes) with UBS – step by step. Done in less than 30 seconds.
            </p>
          </header>

          <article className="prose prose-invert prose-lg max-w-none">

            {/* Steps */}
            <section aria-labelledby="steps">
              <h2 id="steps">Step-by-Step Instructions</h2>
              <p>The UBS Mobile Banking App of UBS has a built-in GiroCode scanner. Here's how to use it:</p>
              <ol>
                <li dangerouslySetInnerHTML={{ __html: '<strong>Open UBS Mobile Banking App</strong> and log in with PIN, fingerprint or Face ID.' }} />
                <li dangerouslySetInnerHTML={{ __html: '<strong>Tap "Payments"</strong> in the menu.' }} />
                <li dangerouslySetInnerHTML={{ __html: '<strong>Tap the QR scanner icon</strong> (camera icon). Grant camera permission on first use.' }} />
                <li dangerouslySetInnerHTML={{ __html: '<strong>Scan the GiroCode</strong> – hold camera 15–30 cm from the code. The app recognises it automatically.' }} />
                <li dangerouslySetInnerHTML={{ __html: '<strong>Verify the data:</strong> Recipient name, IBAN, amount and payment reference are filled in automatically. Always double-check before confirming!' }} />
                <li dangerouslySetInnerHTML={{ __html: '<strong>Confirm the transfer</strong> with UBS Access Card or biometrics. Done.' }} />
              </ol>
              <p dangerouslySetInnerHTML={{ __html: '<strong>Tip:</strong> When scanning from a screen, set brightness to maximum. For printed codes, ensure good lighting. Hold the camera steady.' }} />
            </section>

            {/* Browser Scanner */}
            <section aria-labelledby="browser-scanner" className="mt-10">
              <h2 id="browser-scanner">Scan GiroCode in the Browser</h2>
              <p>Don't have access to your banking app or want to quickly read a GiroCode on your computer? Our free browser scanner reads GiroCodes directly in the browser – no app, no installation, 100% local.</p>
              <p>It shows all data contained in the code: IBAN, recipient name, amount and payment reference – perfect for checking before entering the transfer manually.</p>
              <div className="not-prose mt-4">
                <Link
                  href="/en/scanner"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,197,94,0.4)]"
                  style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: '#ffffff' }}
                >
                  Scan GiroCode now →
                </Link>
              </div>
            </section>

            {/* Create GiroCode */}
            <section aria-labelledby="create" className="mt-10">
              <h2 id="create">Create Your Own GiroCode</h2>
              <p>Want to create a GiroCode for your invoice or payment request? Our free GiroCode generator creates an EPC-compliant SEPA QR code directly in the browser – no registration, no data sharing, instantly downloadable.</p>
              <div className="not-prose mt-4">
                <Link
                  href="/en"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,197,94,0.4)]"
                  style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: '#ffffff' }}
                >
                  Create GiroCode for free →
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section aria-labelledby="faq" className="mt-10">
              <h2 id="faq">FAQ – GiroCode with UBS</h2>
              <div className="not-prose space-y-4">
                {faqItems.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-xl border border-slate-700 bg-slate-900/60 px-5 py-4"
                  >
                    <h3 className="mb-2 text-sm font-bold text-[#e8eaf0]">{item.question}</h3>
                    <p className="text-sm text-slate-400">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>

          </article>

          {/* More Banking Apps */}
          <div className="mt-12 border-t border-slate-800 pt-8">
            <h2 className="mb-4 text-base font-bold text-[#e8eaf0]">More Banking Apps</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {otherBanks.map((bank) => (
                <Link
                  key={bank.href}
                  href={'/en' + bank.href}
                  className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:text-[#e8eaf0] hover:-translate-y-0.5"
                >
                  <span>GiroCode with {bank.label}</span>
                  <span className="ml-2 text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
