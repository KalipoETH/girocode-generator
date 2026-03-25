import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About us – GiroCode Generator',
  description:
    'Who is behind the GiroCode Generator? The project by Kaleb Jahnke from Osterholz-Scharmbeck – free, local, privacy-friendly.',
};

export default function AboutPageEn() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-12">
        <header className="mb-10 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            About this project
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              About the GiroCode Generator
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              The GiroCode Generator is a free online tool I – Kaleb Jahnke from Osterholz-Scharmbeck
              – built to solve a simple problem: freelancers and small businesses need an easy,
              privacy-friendly way to create SEPA-QR codes for their invoices – without registration,
              without data sharing, and without cost.
            </p>
          </div>
        </header>

        <section className="mb-10 space-y-4">
          <h2 className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            What makes this tool special
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 shadow-sm shadow-black/30">
              <div className="mb-2 text-2xl" aria-hidden="true">
                💻
              </div>
              <h3 className="mb-1 text-sm font-semibold text-slate-50">100% local</h3>
              <p className="text-xs text-slate-300">
                All calculations run directly in your browser. Your IBAN, account data and invoice
                details never leave your device.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 shadow-sm shadow-black/30">
              <div className="mb-2 text-2xl" aria-hidden="true">
                🔓
              </div>
              <h3 className="mb-1 text-sm font-semibold text-slate-50">
                Free &amp; no registration
              </h3>
              <p className="text-xs text-slate-300">
                No account, no subscription, no hidden fees. Just open the site and start generating
                codes.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 shadow-sm shadow-black/30">
              <div className="mb-2 text-2xl" aria-hidden="true">
                ✅
              </div>
              <h3 className="mb-1 text-sm font-semibold text-slate-50">EPC / SEPA compliant</h3>
              <p className="text-xs text-slate-300">
                The generator creates GiroCodes exactly according to the EPC standard, compatible with
                common banking apps.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            Who is this for?
          </h2>
          <p className="text-sm text-slate-300 md:text-base">
            The GiroCode Generator is for anyone who wants to make payments simpler and less error
            prone – without building their own technical solution.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300 md:text-base">
            <li>freelancers who send invoices with QR codes,</li>
            <li>small companies,</li>
            <li>clubs or associations collecting membership fees,</li>
            <li>private individuals requesting payments.</li>
          </ul>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            Contact
          </h2>
          <p className="text-sm text-slate-300 md:text-base">
            Questions, feedback or bugs? Feel free to send me an email at{' '}
            <a
              href="mailto:jahnke.kaleb@gmail.com"
              className="text-sky-400 underline decoration-sky-500/70 underline-offset-2 hover:text-sky-300"
            >
              jahnke.kaleb@gmail.com
            </a>
            .
          </p>
        </section>

        <p className="text-xs text-slate-500">
          This project is continuously evolving. Suggestions for improvement are always welcome.
        </p>
      </div>
    </main>
  );
}

