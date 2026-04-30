import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IBAN Security: What You Need to Know About Transfers',
  description:
    'Is it safe to share your IBAN? What can someone do with your IBAN? Everything about IBAN security, GiroCode privacy, and safe transfers.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/en/blog/iban-sicherheit',
    languages: {
      de: 'https://www.girocodegenerator.com/blog/iban-sicherheit',
      en: 'https://www.girocodegenerator.com/en/blog/iban-sicherheit',
      fr: 'https://www.girocodegenerator.com/fr/blog/iban-sicherheit',
      es: 'https://www.girocodegenerator.com/es/blog/iban-sicherheit',
    },
  },
};

export default function IbanSecurityEnPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <nav className="mb-8 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/en" className="hover:text-slate-300">Home</Link>
          <span>/</span>
          <Link href="/en/blog" className="hover:text-slate-300">Blog</Link>
          <span>/</span>
          <span className="text-slate-400">IBAN Security</span>
        </nav>

        <header className="mb-10 space-y-4">
          <time dateTime="2026-04-01" className="text-xs text-slate-500">1 April 2026</time>
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl lg:text-4xl">
            IBAN Security: What You Need to Know About Transfers
          </h1>
          <p className="text-base leading-relaxed text-slate-400 md:text-lg">
            Many people are uncertain about sharing their IBAN. What is actually possible
            if someone knows your IBAN – and what is not?
          </p>
        </header>

        <article className="space-y-10 text-sm leading-relaxed text-slate-300 md:text-base">

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              What Can Someone Do with My IBAN?
            </h2>
            <p>
              The short answer: not very much that could harm you – at least not without your
              knowledge. The IBAN (International Bank Account Number) uniquely identifies your
              bank account, much like a postal address identifies your home. And just like with
              an address: anyone who wants to send you money needs it.
            </p>
            <ul className="mt-3 space-y-2">
              {[
                { label: 'Send you money', safe: true, text: 'Anyone can transfer money to your account – that is the purpose of an IBAN and not a security issue.' },
                { label: 'Initiate a SEPA direct debit (with restrictions)', safe: false, text: 'A SEPA direct debit additionally requires a written mandate. Without this mandate, a debit is not possible – and if one does occur, the bank must reverse it.' },
                { label: 'Create a GiroCode', safe: true, text: 'Someone could create a GiroCode with your IBAN – but this only means they can request a payment to you.' },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3 list-none rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                  <span className={`mt-0.5 flex-shrink-0 font-bold ${item.safe ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {item.safe ? '✓' : '⚠'}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-100">{item.label}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              IBAN for Credit Transfer vs. Direct Debit – The Difference
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-800/50 bg-emerald-900/10 p-5">
                <h3 className="font-semibold text-emerald-300">SEPA Credit Transfer</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  {['Actively initiated by the payer', 'Recipient has no control', 'Only recipient IBAN needed', 'Safe and standardised'].map(t => (
                    <li key={t} className="flex items-start gap-2"><span className="text-emerald-400">→</span>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-amber-800/50 bg-amber-900/10 p-5">
                <h3 className="font-semibold text-amber-300">SEPA Direct Debit</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  {['Collected by the creditor', 'Requires written mandate', 'IBAN + mandate + creditor ID needed', 'Refundable within 8 weeks'].map(t => (
                    <li key={t} className="flex items-start gap-2"><span className="text-amber-400">→</span>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-4">
              An unauthorised SEPA direct debit is a reversal case and is punishable by law.
              The bank must reverse an unauthorised debit within 8 weeks (13 months if no
              mandate exists). In practice, the risk of an unauthorised debit is very low.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">Is a GiroCode Safe?</h2>
            <div className="mt-4 space-y-3">
              {[
                { title: 'No debit possible', text: 'A GiroCode is a payment request, not a direct debit mandate. It contains no information that would allow a debit.' },
                { title: 'Confirmation required by the payer', text: 'Even if someone scans a GiroCode, they must actively confirm the transfer with a TAN, Face ID or fingerprint. No automatic debit is possible.' },
                { title: 'No secret data in the code', text: 'A GiroCode contains only data you already publish on an invoice: name, IBAN, amount, payment reference. No PINs, no passwords.' },
                { title: 'EPC standard with error correction', text: 'The QR code uses error correction level M, meaning it remains reliably readable even with minor damage.' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                  <h3 className="font-semibold text-slate-100">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              QR Code Phishing (Quishing) – How to Spot It
            </h2>
            <p>
              A real threat does exist, however: so-called quishing (QR code phishing). Fraudsters
              replace legitimate QR codes with manipulated ones that redirect to phishing sites
              or fake payment recipients.
            </p>
            <ul className="mt-3 space-y-3">
              {[
                { icon: '🔍', tip: 'Check recipient details', text: 'After scanning, always check the pre-filled recipient name and IBAN in your banking app before confirming.' },
                { icon: '📌', tip: 'Be wary of physical stickers', text: 'QR codes that appear to be stickers placed over other codes may be manipulated. Check whether the code is printed directly or stuck on top.' },
                { icon: '🏦', tip: 'Open your banking app directly', text: 'Always open your banking app directly – never via a link in an email or SMS. Scan the GiroCode only from within the app.' },
                { icon: '📧', tip: 'Verify emailed invoices', text: 'For invoices by email: check that the sender and content match the expected invoice. If in doubt, contact the sender by phone.' },
              ].map((item) => (
                <li key={item.tip} className="flex items-start gap-3 list-none">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-slate-100">{item.tip}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Privacy at the GiroCode Generator
            </h2>
            <p>
              Users of the GiroCode Generator at girocodegenerator.com can be assured: all
              entered data – IBAN, amount, name, payment reference – is processed exclusively
              locally in the browser. No data is transmitted to servers, no logging, no storage.
            </p>
            <div className="mt-4 rounded-xl border border-emerald-800/50 bg-emerald-900/10 p-5">
              <h3 className="font-semibold text-emerald-300">How local processing works</h3>
              <p className="mt-2 text-sm text-slate-300">
                The QR code is generated entirely in the browser using a JavaScript library.
                This means: even without a network connection (offline mode), the generator
                continues to work. Your banking data never leaves your computer or device.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">Conclusion</h2>
            <p>
              Sharing your IBAN is far safer than many people think. For a regular transfer to
              you it is necessary – and it does not enable a debit without your mandate. A
              GiroCode with your IBAN is a practical, secure tool for modern invoicing.
            </p>
            <p className="mt-3">
              The only real danger comes from manipulated QR codes (quishing) – and this can
              be minimised by simple precautions: check recipient details, open your banking
              app directly, and stay sceptical about unexpected payment requests.
            </p>
            <div className="mt-6">
              <Link
                href="/en"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
              >
                Create a secure GiroCode now →
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
