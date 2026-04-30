import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Invoices as a Freelancer: GiroCode for Faster Payments',
  description:
    'How freelancers get paid faster with GiroCodes on their invoices. Practical guide with tips on legal requirements and a free PDF generator.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/en/blog/freelancer-rechnungen-qr-code',
    languages: {
      de: 'https://www.girocodegenerator.com/blog/freelancer-rechnungen-qr-code',
      en: 'https://www.girocodegenerator.com/en/blog/freelancer-rechnungen-qr-code',
      fr: 'https://www.girocodegenerator.com/fr/blog/freelancer-rechnungen-qr-code',
      es: 'https://www.girocodegenerator.com/es/blog/freelancer-rechnungen-qr-code',
    },
  },
};

export default function FreelancerInvoicesEnPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <nav className="mb-8 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/en" className="hover:text-slate-300">Home</Link>
          <span>/</span>
          <Link href="/en/blog" className="hover:text-slate-300">Blog</Link>
          <span>/</span>
          <span className="text-slate-400">GiroCode for Freelancers</span>
        </nav>

        <header className="mb-10 space-y-4">
          <time dateTime="2026-03-01" className="text-xs text-slate-500">1 March 2026</time>
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl lg:text-4xl">
            Invoices as a Freelancer: GiroCode for Faster Payments
          </h1>
          <p className="text-base leading-relaxed text-slate-400 md:text-lg">
            Late payments, forgotten transfers, mistyped IBANs – freelancers know the problem
            all too well. A GiroCode on your invoice can change all that.
          </p>
        </header>

        <article className="space-y-10 text-sm leading-relaxed text-slate-300 md:text-base">

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Why Freelancers Wait Too Long for Payments
            </h2>
            <p>
              According to various business studies, self-employed professionals wait an average
              of 30+ days for invoice settlement – often exceeding the agreed payment terms.
              The reason is rarely bad faith: clients open the invoice, struggle to type the
              IBAN correctly, or simply defer the transfer because switching to their banking
              app feels like too much effort.
            </p>
            <p className="mt-3">
              The result: freelancers chase payments, send reminders, and lose valuable time
              that should go into projects. A simple QR code on the invoice can dramatically
              speed up this process.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              What is a GiroCode and How Does It Help Freelancers?
            </h2>
            <p>
              A GiroCode – officially an EPC-QR-Code as defined by the European Payments
              Council – is a QR code containing all the relevant transfer details: recipient
              name, IBAN, BIC (optional), amount, and payment reference. The payer simply
              scans the code with their banking app and confirms the transfer with one tap.
              No typing, no errors.
            </p>
            <p className="mt-3">
              For freelancers, this means: the client opens the invoice, scans the QR code,
              and transfers immediately. The barrier to payment drops dramatically because the
              effort is reduced to a few seconds.
            </p>
            <p className="mt-3">
              Banking apps from all major German banks – Sparkasse, Volksbank, ING, DKB,
              Deutsche Bank, Commerzbank, N26, and many more – support GiroCodes. As a
              freelancer, you reach virtually every private and business client in Germany.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Adding a GiroCode to Your Invoice – Step by Step
            </h2>
            <ol className="space-y-4 pl-5">
              <li className="list-decimal">
                <strong className="text-slate-100">Open GiroCode Generator:</strong>{' '}
                Visit{' '}
                <Link href="/en" className="text-emerald-400 underline hover:text-emerald-300">
                  girocodegenerator.com
                </Link>{' '}
                – free, no registration required.
              </li>
              <li className="list-decimal">
                <strong className="text-slate-100">Enter your details:</strong>{' '}
                Enter your name or business name, IBAN, invoice amount, and payment reference
                (e.g. "Invoice 2026-042"). BIC is optional.
              </li>
              <li className="list-decimal">
                <strong className="text-slate-100">Generate the QR code:</strong>{' '}
                With one click on "Create GiroCode", the QR code is instantly generated
                in your browser – locally, without any server transmission.
              </li>
              <li className="list-decimal">
                <strong className="text-slate-100">Create invoice PDF:</strong>{' '}
                Use the integrated invoice function to generate a DIN-compliant PDF invoice
                with embedded GiroCode and download it directly.
              </li>
              <li className="list-decimal">
                <strong className="text-slate-100">Send the invoice:</strong>{' '}
                Send the PDF by email to your client or print it out. Done.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Practical Tips: How to Get Paid Faster
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: '1. Invoice immediately after delivering work',
                  text: 'Every day you delay invoicing extends the time to payment. Ideally send the invoice on the same day or within 24 hours.',
                },
                {
                  title: '2. Set short payment terms',
                  text: 'Instead of "payable within 30 days", try 7 or 14 days. With a GiroCode this is no problem for the client.',
                },
                {
                  title: '3. Always include a payment reference',
                  text: 'The GiroCode pre-fills the payment reference – e.g. "Invoice 2026-042". This makes reconciliation easy on your end.',
                },
                {
                  title: '4. Friendly reminder after 7 days',
                  text: 'Once the due date passes, send a friendly reminder with the invoice attached – including the GiroCode. Often it simply slipped the client\'s mind.',
                },
                {
                  title: '5. Offer an early payment discount',
                  text: 'A small discount (e.g. 2% for payment within 7 days) can motivate clients to pay sooner. The GiroCode makes the transfer so easy most clients will take advantage of it.',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                  <h3 className="font-semibold text-slate-100">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">Conclusion</h2>
            <p>
              The GiroCode is one of the simplest and most effective tools a freelancer can add
              to their invoices. It dramatically lowers the barrier to payment, eliminates IBAN
              typos, and speeds up cash flow – at zero cost and with no technical effort.
            </p>
            <p className="mt-3">
              With the free GiroCode Generator at girocodegenerator.com, you create your first
              code in under a minute – including a DIN-compliant invoice PDF you can send
              directly by email.
            </p>
            <div className="mt-6">
              <Link
                href="/en"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
              >
                Create your GiroCode for free →
              </Link>
            </div>
          </section>
        </article>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <Link href="/en/blog" className="text-sm text-slate-400 hover:text-slate-200">
            ← Back to Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
