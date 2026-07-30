import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GiroCode per Sviluppatori – Integrazione & API 2026',
  description:
    'Integra la generazione di GiroCodes nei tuoi progetti: struttura del payload EPC, esempi di codice JavaScript e consigli per sviluppatori. API REST in fase beta.',
  alternates: { canonical: `${SITE_URL}/it/fuer-entwickler` },
};

export default function DevelopersPageIt() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-12">
        <header className="mb-10 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Integrazione &amp; API
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              GiroCode per Sviluppatori
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Questa pagina è rivolta agli sviluppatori che vogliono integrare i GiroCodes nei
              propri progetti, software di fatturazione o siti web.
            </p>
          </div>
        </header>

        <article className="space-y-10">
          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Generare il payload EPC
            </h2>
            <p className="mb-4 text-sm text-slate-300 md:text-base">
              Il payload EPC è un testo strutturato per righe. La seguente funzione mostra come
              generarlo in JavaScript/TypeScript:
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
              Creare un codice QR dal payload
            </h2>
            <p className="mb-4 text-sm text-slate-300 md:text-base">
              Con il pacchetto{' '}
              <code className="rounded bg-slate-800 px-1.5 py-0.5 text-slate-200">qrcode</code> di
              npm puoi disegnare il QR a partire dal payload:
            </p>
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 text-xs text-slate-200 sm:text-sm">
              <code>{`import QRCode from 'qrcode';

const payload = buildEPC({
  name: 'Mario Rossi',
  iban: 'IT60X0542811101000000123456',
  amount: 99.99,
  purpose: 'Fattura 2025-001'
});

QRCode.toCanvas(canvas, payload, {
  errorCorrectionLevel: 'M',
  width: 220
});`}</code>
            </pre>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              API in Arrivo
            </h2>
            <p className="mb-4 text-sm text-slate-300 md:text-base">
              L&apos;API REST GiroCode è attualmente in fase beta. Iscriviti per ricevere accesso
              anticipato e la documentazione completa.
            </p>
            <Link
              href="/it/api-access"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
            >
              Registrati per accesso beta
              <span aria-hidden>→</span>
            </Link>
          </section>
        </article>
      </div>
    </main>
  );
}
