import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode for developers & agencies – Integration & API',
  description:
    'How to integrate GiroCode generation into your own projects: EPC payload structure, code examples and tips for developers.',
  alternates: { canonical: 'https://www.girocodegenerator.com/en/fuer-entwickler' },
};

export default function DevelopersPageEn() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-12">
        <header className="mb-10 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Integration &amp; API
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              GiroCode for developers &amp; agencies
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              This page is aimed at developers who want to integrate GiroCodes into their own
              projects, invoicing software or websites.
            </p>
          </div>
        </header>

        <article className="space-y-10">
          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Building the EPC payload yourself
            </h2>
            <p className="mb-4 text-sm text-slate-300 md:text-base">
              The EPC payload is a line-based text format. The following function shows how you can
              generate it in JavaScript/TypeScript:
            </p>
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 text-xs text-slate-200 sm:text-sm">
              <code>{`function buildEPC({ name, iban, bic = '', amount, purpose = '' }) {
  const amountStr = amount ? 'EUR' + Number(amount).toFixed(2) : '';
  return [
    'BCD', '001', '1', 'SCT',
    bic.trim(),
    name.trim().slice(0, 70),
    iban.replace(/\\s+/g, '').toUpperCase(),
    amountStr,
    '', '',
    purpose.trim().slice(0, 140)
  ].join('\\n');
}`}</code>
            </pre>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Creating a QR code from the payload
            </h2>
            <p className="mb-4 text-sm text-slate-300 md:text-base">
              With the <code className="rounded bg-slate-800 px-1.5 py-0.5 text-slate-200">
                qrcode
              </code>{' '}
              package from npm you can render the payload into a QR code:
            </p>
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 text-xs text-slate-200 sm:text-sm">
              <code>{`import QRCode from 'qrcode';

const payload = buildEPC({
  name: 'Max Mustermann',
  iban: 'DE89370400440532013000',
  amount: 99.99,
  purpose: 'Invoice 2025-001'
});

QRCode.toCanvas(canvas, payload, {
  errorCorrectionLevel: 'M',
  width: 220
});`}</code>
            </pre>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Using this generator
            </h2>
            <p className="text-sm text-slate-300 md:text-base">
              You can link to this generator or treat it as a reference implementation. The full
              source code is available publicly.
            </p>
            <p className="mt-3">
              <Link
                href="/en"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
              >
                Open the GiroCode Generator
                <span aria-hidden>→</span>
              </Link>
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Contact for collaboration
            </h2>
            <p className="text-sm text-slate-300 md:text-base">
              You are an agency or software vendor and would like to collaborate? Feel free to reach
              out via email:{' '}
              <a
                href="mailto:jahnke.kaleb@gmail.com"
                className="text-sky-400 underline decoration-sky-500/70 underline-offset-2 hover:text-sky-300"
              >
                jahnke.kaleb@gmail.com
              </a>
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}

