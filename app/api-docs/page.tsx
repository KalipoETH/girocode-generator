import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode API – URL-Parameter & Integration | Entwickler',
  description:
    'GiroCodes per URL-Parameter generieren: Integriere den GiroCode Generator in deine App oder Website. Kostenlos, kein API-Key, keine Registrierung.',
  alternates: { canonical: 'https://www.girocodegenerator.com/api-docs' },
};

export default function ApiDocsPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-12">
        <header className="mb-10 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            URL-Parameter API · Kein API-Key erforderlich
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              GiroCode Generator – URL-Parameter API
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-400 md:text-base">
              Du kannst den GiroCode Generator direkt per URL-Parameter aufrufen und das Formular
              automatisch befüllen. Kein API-Key, keine Registrierung, komplett kostenlos.
            </p>
          </div>
        </header>

        <article className="space-y-10">
          {/* Basis-URL */}
          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Basis-URL
            </h2>
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 text-sm text-emerald-300">
              <code>https://www.girocodegenerator.com/</code>
            </pre>
          </section>

          {/* Parameter-Tabelle */}
          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Verfügbare Parameter
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/80">
                    <th className="px-4 py-3 text-left font-semibold text-slate-100">Parameter</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-100">Beschreibung</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-100">Pflicht</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-100">Beispiel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {[
                    { param: 'name', desc: 'Empfängername', required: 'Ja', example: 'Max+Mustermann+GmbH' },
                    { param: 'iban', desc: 'IBAN', required: 'Ja', example: 'DE89370400440532013000' },
                    { param: 'bic', desc: 'BIC', required: 'Nein', example: 'COBADEFFXXX' },
                    { param: 'betrag', desc: 'Betrag in EUR', required: 'Nein', example: '49.90' },
                    { param: 'zweck', desc: 'Verwendungszweck', required: 'Nein', example: 'Rechnung+2026-001' },
                  ].map((row) => (
                    <tr key={row.param} className="hover:bg-slate-900/40">
                      <td className="px-4 py-3">
                        <code className="rounded bg-slate-800 px-1.5 py-0.5 text-sky-300">{row.param}</code>
                      </td>
                      <td className="px-4 py-3">{row.desc}</td>
                      <td className="px-4 py-3">
                        <span
                          className={
                            row.required === 'Ja'
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

          {/* Beispiele */}
          <section>
            <h2 className="mb-4 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Beispiele
            </h2>
            <div className="space-y-5">
              <div>
                <p className="mb-2 text-sm font-medium text-slate-300">
                  Beispiel 1 – Nur IBAN und Name:
                </p>
                <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-emerald-300">
                  <code>https://www.girocodegenerator.com/?name=Max+Mustermann&amp;iban=DE89370400440532013000</code>
                </pre>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-slate-300">
                  Beispiel 2 – Mit Betrag und Verwendungszweck:
                </p>
                <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-emerald-300">
                  <code>https://www.girocodegenerator.com/?name=Firma+GmbH&amp;iban=DE89370400440532013000&amp;betrag=99.00&amp;zweck=Rechnung+2026-001</code>
                </pre>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-slate-300">
                  Beispiel 3 – Vollständig mit BIC:
                </p>
                <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-emerald-300">
                  <code>https://www.girocodegenerator.com/?name=Firma+GmbH&amp;iban=DE89370400440532013000&amp;bic=COBADEFFXXX&amp;betrag=149.00&amp;zweck=Projekt+Website</code>
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
              <code>{`// GiroCode Generator URL generieren
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

// Beispiel
const url = buildGiroCodeURL({
  name: 'Max Mustermann GmbH',
  iban: 'DE89370400440532013000',
  betrag: '99.00',
  zweck: 'Rechnung 2026-001'
});
// Öffne URL im Browser
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

// Verwendung
$url = buildGiroCodeURL('Max Mustermann GmbH', 'DE89370400440532013000', '99.00', 'Rechnung 2026-001');
echo '<a href="' . htmlspecialchars($url) . '">GiroCode erstellen</a>';
?>`}</code>
            </pre>
          </section>

          {/* Einschränkungen */}
          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Einschränkungen & Hinweise
            </h2>
            <ul className="space-y-2 text-sm text-slate-300">
              {[
                'Kein API-Key erforderlich',
                'Keine Rate Limits',
                'Alle Daten werden lokal im Browser verarbeitet',
                'Keine serverseitige Verarbeitung',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 text-emerald-400">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* REST API Endpunkt */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <h2 className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
                REST API Endpunkt
              </h2>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/30">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Neu
              </span>
            </div>
            <p className="mb-4 text-sm text-slate-400">
              Generiere GiroCodes als Base64-PNG direkt per HTTP-Request – ideal für serverseitige
              Integrationen, Automatisierungen und CI/CD-Pipelines.
            </p>

            {/* Endpoint URL */}
            <div className="mb-6">
              <p className="mb-2 text-sm font-medium text-slate-300">Endpoint</p>
              <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-emerald-300">
                <code>GET https://www.girocodegenerator.com/api/generate</code>
              </pre>
            </div>

            {/* Parameter-Tabelle */}
            <div className="mb-6">
              <p className="mb-2 text-sm font-medium text-slate-300">Parameter</p>
              <div className="overflow-x-auto rounded-xl border border-slate-800">
                <table className="w-full text-sm text-slate-300">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900/80">
                      <th className="px-4 py-3 text-left font-semibold text-slate-100">Parameter</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-100">Beschreibung</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-100">Pflicht</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-100">Beispiel</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {[
                      { param: 'name', desc: 'Empfängername (max. 70 Zeichen)', required: 'Ja', example: 'Max+Mustermann' },
                      { param: 'iban', desc: 'IBAN (Mod-97 validiert)', required: 'Ja', example: 'DE89370400440532013000' },
                      { param: 'bic', desc: 'BIC des Empfängers', required: 'Nein', example: 'COBADEFFXXX' },
                      { param: 'betrag', desc: 'Betrag in EUR (Dezimal)', required: 'Nein', example: '49.90' },
                      { param: 'zweck', desc: 'Verwendungszweck (max. 140 Zeichen)', required: 'Nein', example: 'Rechnung+001' },
                    ].map((row) => (
                      <tr key={row.param} className="hover:bg-slate-900/40">
                        <td className="px-4 py-3">
                          <code className="rounded bg-slate-800 px-1.5 py-0.5 text-sky-300">{row.param}</code>
                        </td>
                        <td className="px-4 py-3">{row.desc}</td>
                        <td className="px-4 py-3">
                          <span className={row.required === 'Ja'
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

            {/* Beispiel-Request – curl */}
            <div className="mb-4">
              <p className="mb-2 text-sm font-medium text-slate-300">Beispiel-Request – curl</p>
              <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-slate-200">
                <code>{`curl "https://www.girocodegenerator.com/api/generate?name=Max+Mustermann&iban=DE89370400440532013000&betrag=49.90&zweck=Rechnung+001"`}</code>
              </pre>
            </div>

            {/* Beispiel-Request – JS fetch */}
            <div className="mb-4">
              <p className="mb-2 text-sm font-medium text-slate-300">Beispiel-Request – JavaScript fetch</p>
              <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-slate-200">
                <code>{`const params = new URLSearchParams({
  name: 'Max Mustermann',
  iban: 'DE89370400440532013000',
  betrag: '49.90',
  zweck: 'Rechnung 001',
});

const res = await fetch(\`https://www.girocodegenerator.com/api/generate?\${params}\`);
const data = await res.json();

// Base64 QR-Code als <img> anzeigen
document.getElementById('qr').src = data.qr_base64;`}</code>
              </pre>
            </div>

            {/* Beispiel-Response */}
            <div>
              <p className="mb-2 text-sm font-medium text-slate-300">Beispiel-Response</p>
              <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-slate-200">
                <code>{`{
  "success": true,
  "qr_base64": "data:image/png;base64,iVBORw0KGgo...",
  "epc_payload": "BCD\\n001\\n1\\nSCT\\n\\nMax Mustermann\\nDE89370400440532013000\\nEUR49.90\\n\\n\\nRechnung 001",
  "data": {
    "name": "Max Mustermann",
    "iban": "DE89370400440532013000",
    "bic": null,
    "betrag": "49.90",
    "zweck": "Rechnung 001"
  }
}`}</code>
              </pre>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h2 className="mb-2 text-base font-semibold text-slate-50">
              Jetzt ausprobieren
            </h2>
            <p className="mb-4 text-sm text-slate-400">
              Öffne den Generator und erstelle deinen ersten GiroCode – direkt im Browser, ohne Registrierung.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
              >
                Zum GiroCode Generator →
              </Link>
              <Link
                href="/fuer-entwickler"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-slate-700"
              >
                Für Entwickler
              </Link>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
