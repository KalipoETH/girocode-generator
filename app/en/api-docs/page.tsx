import type { Metadata } from 'next';
import Link from 'next/link';
import ApiDocsBetaBanner from '@/components/ApiDocsBetaBanner';
import LockedCodeOverlay from '@/components/LockedCodeOverlay';

export const metadata: Metadata = {
  title: 'GiroCode API – URL Parameters & Integration | Developer',
  description:
    'Generate GiroCodes via URL parameters: Integrate the GiroCode Generator into your app or website. Free, no API key, no registration required.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/en/api-docs',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/api-docs',
      de: 'https://www.girocodegenerator.com/api-docs',
      en: 'https://www.girocodegenerator.com/en/api-docs',
      fr: 'https://www.girocodegenerator.com/fr/api-docs',
      es: 'https://www.girocodegenerator.com/es/api-docs',
    },
  },
};

export default function ApiDocsEnPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-12">
        <ApiDocsBetaBanner locale="en" />

        <header className="mb-10 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            URL Parameter API · No API Key Required
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              GiroCode Generator – URL Parameter API
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-400 md:text-base">
              You can call the GiroCode Generator directly via URL parameters to pre-fill the form
              automatically. No API key, no registration, completely free.
            </p>
          </div>
        </header>

        <article className="space-y-10">
          {/* Base URL */}
          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Base URL
            </h2>
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 text-sm text-emerald-300">
              <code>https://www.girocodegenerator.com/</code>
            </pre>
          </section>

          {/* Parameters */}
          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Available Parameters
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/80">
                    <th className="px-4 py-3 text-left font-semibold text-slate-100">Parameter</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-100">Description</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-100">Required</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-100">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {[
                    { param: 'name', desc: 'Recipient name', required: 'Yes', example: 'Max+Mustermann+GmbH' },
                    { param: 'iban', desc: 'IBAN', required: 'Yes', example: 'DE89370400440532013000' },
                    { param: 'bic', desc: 'BIC', required: 'No', example: 'COBADEFFXXX' },
                    { param: 'betrag', desc: 'Amount in EUR', required: 'No', example: '49.90' },
                    { param: 'zweck', desc: 'Payment reference', required: 'No', example: 'Invoice+2026-001' },
                  ].map((row) => (
                    <tr key={row.param} className="hover:bg-slate-900/40">
                      <td className="px-4 py-3">
                        <code className="rounded bg-slate-800 px-1.5 py-0.5 text-sky-300">{row.param}</code>
                      </td>
                      <td className="px-4 py-3">{row.desc}</td>
                      <td className="px-4 py-3">
                        <span
                          className={
                            row.required === 'Yes'
                              ? 'rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-medium text-emerald-300'
                              : 'rounded-full bg-slate-800 px-2 py-0.5 text-xs font-medium text-slate-400'
                          }
                        >
                          {row.required}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <code className="text-xs text-slate-400">{row.example}</code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Examples */}
          <section>
            <h2 className="mb-4 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Examples
            </h2>
            <div className="space-y-5">
              <div>
                <p className="mb-2 text-sm font-medium text-slate-300">
                  Example 1 – IBAN and name only:
                </p>
                <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-emerald-300">
                  <code>https://www.girocodegenerator.com/?name=Max+Mustermann&amp;iban=DE89370400440532013000</code>
                </pre>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-slate-300">
                  Example 2 – With amount and payment reference:
                </p>
                <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-emerald-300">
                  <code>https://www.girocodegenerator.com/?name=Company+GmbH&amp;iban=DE89370400440532013000&amp;betrag=99.00&amp;zweck=Invoice+2026-001</code>
                </pre>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-slate-300">
                  Example 3 – Complete with BIC:
                </p>
                <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-emerald-300">
                  <code>https://www.girocodegenerator.com/?name=Company+GmbH&amp;iban=DE89370400440532013000&amp;bic=COBADEFFXXX&amp;betrag=149.00&amp;zweck=Project+Website</code>
                </pre>
              </div>
            </div>
          </section>

          {/* JavaScript Integration */}
          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              JavaScript Integration
            </h2>
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 text-xs text-slate-200 sm:text-sm">
              <code>{`// Build GiroCode Generator URL
function buildGiroCodeURL(params) {
  const base = 'https://www.girocodegenerator.com/';
  const query = new URLSearchParams({
    name: params.name,
    iban: params.iban,
    ...(params.bic && { bic: params.bic }),
    ...(params.betrag && { betrag: params.betrag }),
    ...(params.zweck && { zweck: params.zweck }),
  });
  return \`\${base}?\${query.toString()}\`;
}

// Example
const url = buildGiroCodeURL({
  name: 'Max Mustermann GmbH',
  iban: 'DE89370400440532013000',
  betrag: '99.00',
  zweck: 'Invoice 2026-001'
});
// Open URL in browser
window.open(url, '_blank');`}</code>
            </pre>
          </section>

          {/* PHP Integration */}
          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              PHP Integration
            </h2>
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 text-xs text-slate-200 sm:text-sm">
              <code>{`<?php
function buildGiroCodeURL($name, $iban, $betrag = '', $zweck = '', $bic = '') {
    $params = array_filter([
        'name'   => $name,
        'iban'   => $iban,
        'bic'    => $bic,
        'betrag' => $betrag,
        'zweck'  => $zweck,
    ]);
    return 'https://www.girocodegenerator.com/?' . http_build_query($params);
}

// Usage
$url = buildGiroCodeURL('Max Mustermann GmbH', 'DE89370400440532013000', '99.00', 'Invoice 2026-001');
echo '<a href="' . htmlspecialchars($url) . '">Create GiroCode</a>';
?>`}</code>
            </pre>
          </section>

          {/* Notes */}
          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Restrictions & Notes
            </h2>
            <ul className="space-y-2 text-sm text-slate-300">
              {[
                'No API key required',
                'No rate limits',
                'All data is processed locally in the browser',
                'No server-side processing',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 text-emerald-400">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* REST API */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <h2 className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
                REST API Endpoint
              </h2>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/30">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                New
              </span>
            </div>
            <p className="mb-4 text-sm text-slate-400">
              Generate GiroCodes as Base64 PNG directly via HTTP request – ideal for server-side
              integrations, automations and CI/CD pipelines.
            </p>

            <div className="mb-6">
              <p className="mb-2 text-sm font-medium text-slate-300">Endpoint</p>
              <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-emerald-300">
                <code>GET https://www.girocodegenerator.com/api/generate</code>
              </pre>
            </div>

            <div className="mb-6">
              <p className="mb-2 text-sm font-medium text-slate-300">Parameters</p>
              <div className="overflow-x-auto rounded-xl border border-slate-800">
                <table className="w-full text-sm text-slate-300">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900/80">
                      <th className="px-4 py-3 text-left font-semibold text-slate-100">Parameter</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-100">Description</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-100">Required</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-100">Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {[
                      { param: 'name', desc: 'Recipient name (max. 70 chars)', required: 'Yes', example: 'Max+Mustermann' },
                      { param: 'iban', desc: 'IBAN (Mod-97 validated)', required: 'Yes', example: 'DE89370400440532013000' },
                      { param: 'bic', desc: 'BIC of recipient', required: 'No', example: 'COBADEFFXXX' },
                      { param: 'betrag', desc: 'Amount in EUR (decimal)', required: 'No', example: '49.90' },
                      { param: 'zweck', desc: 'Payment reference (max. 140 chars)', required: 'No', example: 'Invoice+001' },
                    ].map((row) => (
                      <tr key={row.param} className="hover:bg-slate-900/40">
                        <td className="px-4 py-3">
                          <code className="rounded bg-slate-800 px-1.5 py-0.5 text-sky-300">{row.param}</code>
                        </td>
                        <td className="px-4 py-3">{row.desc}</td>
                        <td className="px-4 py-3">
                          <span className={row.required === 'Yes'
                            ? 'rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-medium text-emerald-300'
                            : 'rounded-full bg-slate-800 px-2 py-0.5 text-xs font-medium text-slate-400'
                          }>
                            {row.required}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <code className="text-xs text-slate-400">{row.example}</code>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <LockedCodeOverlay locale="en">
              <div className="space-y-5">
                <div>
                  <p className="mb-2 text-sm font-medium text-slate-300">Example Request – curl</p>
                  <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-slate-200">
                    <code>{`curl "https://www.girocodegenerator.com/api/generate?name=Max+Mustermann&iban=DE89370400440532013000&betrag=49.90&zweck=Invoice+001"`}</code>
                  </pre>
                </div>

                <div>
                  <p className="mb-2 text-sm font-medium text-slate-300">Example Request – JavaScript fetch</p>
                  <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-slate-200">
                    <code>{`const params = new URLSearchParams({
  name: 'Max Mustermann',
  iban: 'DE89370400440532013000',
  betrag: '49.90',
  zweck: 'Invoice 001',
});

const res = await fetch(\`https://www.girocodegenerator.com/api/generate?\${params}\`);
const data = await res.json();

// Display Base64 QR code as <img>
document.getElementById('qr').src = data.qr_base64;`}</code>
                  </pre>
                </div>

                <div>
                  <p className="mb-2 text-sm font-medium text-slate-300">Example Response</p>
                  <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-slate-200">
                    <code>{`{
  "success": true,
  "qr_base64": "data:image/png;base64,iVBORw0KGgo...",
  "epc_payload": "BCD\\n001\\n1\\nSCT\\n\\nMax Mustermann\\nDE89370400440532013000\\nEUR49.90\\n\\n\\nInvoice 001",
  "data": {
    "name": "Max Mustermann",
    "iban": "DE89370400440532013000",
    "bic": null,
    "betrag": "49.90",
    "zweck": "Invoice 001"
  }
}`}</code>
                  </pre>
                </div>
              </div>
            </LockedCodeOverlay>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h2 className="mb-2 text-base font-semibold text-slate-50">
              Try it now
            </h2>
            <p className="mb-4 text-sm text-slate-400">
              Open the generator and create your first GiroCode – directly in the browser, no registration required.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/en"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
              >
                Go to GiroCode Generator →
              </Link>
              <Link
                href="/en/fuer-entwickler"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-slate-700"
              >
                For Developers
              </Link>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
