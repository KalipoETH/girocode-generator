import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode für Entwickler & Agenturen – Integration & API',
  description:
    'GiroCode-Generierung in eigene Projekte integrieren: Code-Beispiele, EPC-Payload Aufbau und Tipps für Entwickler.',
  alternates: { canonical: 'https://www.girocodegenerator.com/fuer-entwickler' },
};

export default function FuerEntwicklerPage() {
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
              GiroCode für Entwickler &amp; Agenturen
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Diese Seite richtet sich an Entwickler, die GiroCodes in eigene Projekte,
              Faktura-Software oder Webseiten integrieren möchten.
            </p>
          </div>
        </header>

        <article className="space-y-10">
          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Den EPC-Payload selbst generieren
            </h2>
            <p className="mb-4 text-sm text-slate-300 md:text-base">
              Der EPC-Payload ist ein zeilenorientierter Text. Mit folgender Funktion kannst du ihn
              in JavaScript/TypeScript erzeugen:
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
              QR-Code aus dem Payload generieren
            </h2>
            <p className="mb-4 text-sm text-slate-300 md:text-base">
              Mit dem Paket <code className="rounded bg-slate-800 px-1.5 py-0.5 text-slate-200">qrcode</code> (npm)
              kannst du aus dem Payload einen QR-Code zeichnen:
            </p>
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 text-xs text-slate-200 sm:text-sm">
              <code>{`import QRCode from 'qrcode';

const payload = buildEPC({
  name: 'Max Mustermann',
  iban: 'DE89370400440532013000',
  amount: 99.99,
  purpose: 'Rechnung 2025-001'
});

QRCode.toCanvas(canvas, payload, {
  errorCorrectionLevel: 'M',
  width: 220
});`}</code>
            </pre>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Diesen Generator verwenden
            </h2>
            <p className="text-sm text-slate-300 md:text-base">
              Du kannst auf diesen Generator verlinken oder ihn als Referenzimplementierung nutzen.
              Der gesamte Quellcode ist öffentlich auf GitHub einsehbar.
            </p>
            <p className="mt-3">
              Du möchtest den Generator per URL-Parameter in deine eigene App oder Website integrieren?
              Schau dir unsere{' '}
              <Link href="/api-docs" className="text-sky-400 underline decoration-sky-500/70 underline-offset-2 hover:text-sky-300">
                URL-Parameter API-Dokumentation
              </Link>{' '}
              an – kein API-Key, keine Registrierung.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
              >
                Zum GiroCode Generator
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/api-docs"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-slate-700"
              >
                API-Dokumentation
                <span aria-hidden>→</span>
              </Link>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Kontakt für Kooperationen
            </h2>
            <p className="text-sm text-slate-300 md:text-base">
              Du bist Agentur oder Softwareanbieter und möchtest kooperieren? Meld dich gerne per
              E-Mail:{' '}
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
