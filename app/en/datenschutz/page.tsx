import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.girocodegenerator.com/en/datenschutz' },
};

export default function PrivacyPageEn() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="mb-4 text-2xl font-semibold tracking-tight text-slate-50">
          Privacy policy
        </h1>
        <section className="space-y-4 text-sm text-slate-300">
          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">1. Controller</h2>
            <p>
              Kaleb Jahnke, Koppelstraße 6a, 27711 Osterholz-Scharmbeck
              <br />
              Email:{' '}
              <a
                href="mailto:jahnke.kaleb@gmail.com"
                className="text-sky-400 underline decoration-sky-500/60 hover:text-sky-300"
              >
                jahnke.kaleb@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              2. Basic principle of the application
            </h2>
            <p>
              The web app generates GiroCodes (SEPA-QR) and invoice PDFs locally in your browser.
              Your input is not transmitted to our server or stored by us.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              3. Hosting &amp; server logs
            </h2>
            <p>
              The website is hosted by Vercel (Vercel Inc., USA). Transfers are based on EU standard
              contractual clauses. When you access the site, technically necessary connection data
              (e.g. IP address, date/time, requested URL, user agent, referrer) is processed in
              server logs. Legal basis: Art. 6 (1) lit. f GDPR.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              4. External resources (CDNs)
            </h2>
            <p>
              We may use CDNs to deliver libraries. When loading such files, your IP address may be
              transmitted to CDN providers. Legal basis: Art. 6 (1) lit. f GDPR.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              5. Optional external QR fallback
            </h2>
            <p>
              If you activate the “external QR fallback” option, the EPC text is transmitted to the
              external QR service{' '}
              <span className="font-mono text-xs text-slate-400">api.qrserver.com</span>. This may
              include payment data (recipient, IBAN, amount, payment reference). Legal basis: Art. 6
              (1) lit. a GDPR (consent). Without activation, no transfer takes place.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">6. Communication</h2>
            <p>
              If you contact us by email, we process your data for handling your request (Art. 6 (1)
              lit. b/f GDPR).
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">7. Your rights</h2>
            <p>
              You have the following rights:
              <br />- access, rectification, erasure, restriction (Art. 15–18 GDPR)
              <br />- data portability (Art. 20 GDPR)
              <br />- objection to processing (Art. 21 GDPR)
              <br />- right to lodge a complaint with a supervisory authority
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              8. Transfers to third countries
            </h2>
            <p>
              Vercel Inc. is based in the USA. Transfers are based on EU standard contractual
              clauses.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">9. Cookies / tracking</h2>
            <p>The app does not use cookies for analytics or marketing purposes.</p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">10. Changes</h2>
            <p>
              We may update this privacy policy if functionalities or legal requirements change.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

