import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GiroCode per Sviluppatori – Integrazione & API 2026',
  description:
    'Integra GiroCode nelle tue app: URL parameters, Google Apps Script, esempi JavaScript e PHP. API in arrivo. Documentazione completa.',
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
              Integrazione tramite URL Parameters
            </h2>
            <p className="mb-4 text-sm text-slate-300 md:text-base">
              Puoi aprire il generatore con dati di pagamento precompilati tramite parametri URL:
            </p>
            <pre className="mb-4 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 text-xs text-slate-200 sm:text-sm">
              <code>{`// JavaScript – link al generatore con parametri
const url = 'https://girocodegenerator.com/it'
  + '?name=' + encodeURIComponent('Mario Rossi')
  + '&iban=' + encodeURIComponent('IT60X0542811101000000123456')
  + '&betrag=' + encodeURIComponent('99.99')
  + '&zweck=' + encodeURIComponent('Fattura 2025-001');
window.open(url, '_blank');`}</code>
            </pre>
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 text-xs text-slate-200 sm:text-sm">
              <code>{`// PHP – generazione QR via API
$url = 'https://girocodegenerator.com/api/generate'
  . '?name=' . urlencode($name)
  . '&iban=' . urlencode($iban)
  . '&betrag=' . urlencode($betrag)
  . '&zweck=' . urlencode($zweck);

$response = file_get_contents($url);
$data = json_decode($response, true);
$qrBase64 = $data['qr_base64']; // PNG Base64 del QR Code`}</code>
            </pre>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Google Apps Script
            </h2>
            <p className="mb-4 text-sm text-slate-300 md:text-base">
              Puoi chiamare il GiroCode Generator direttamente da Google Apps Script:
            </p>
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 text-xs text-slate-200 sm:text-sm">
              <code>{`function createGiroCode(name, iban, betrag, zweck) {
  const url = 'https://girocodegenerator.com/api/generate'
    + '?name=' + encodeURIComponent(name)
    + '&iban=' + encodeURIComponent(iban)
    + '&betrag=' + encodeURIComponent(betrag)
    + '&zweck=' + encodeURIComponent(zweck);
  
  const response = UrlFetchApp.fetch(url);
  const data = JSON.parse(response.getContentText());
  return data.qr_base64; // PNG Base64 del QR Code
}`}</code>
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
