import type { Metadata } from 'next';
import Link from 'next/link';
import ApiDocsBetaBanner from '@/components/ApiDocsBetaBanner';
import LockedCodeOverlay from '@/components/LockedCodeOverlay';

export const metadata: Metadata = {
  title: 'API GiroCode – Parámetros URL e Integración | Desarrolladores',
  description:
    'Genera GiroCodes mediante parámetros URL: integra el generador GiroCode en tu app o sitio web. Gratis, sin clave API, sin registro.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/api-docs',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/api-docs',
      de: 'https://www.girocodegenerator.com/api-docs',
      en: 'https://www.girocodegenerator.com/en/api-docs',
      fr: 'https://www.girocodegenerator.com/fr/api-docs',
      es: 'https://www.girocodegenerator.com/es/api-docs',
    },
  },
};

export default function ApiDocsEsPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-12">
        <ApiDocsBetaBanner locale="es" />

        <header className="mb-10 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            API Parámetros URL · Sin clave API requerida
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Generador GiroCode – API de Parámetros URL
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-400 md:text-base">
              Puedes llamar al generador GiroCode directamente mediante parámetros URL para
              rellenar el formulario automáticamente. Sin clave API, sin registro, completamente gratis.
            </p>
          </div>
        </header>

        <article className="space-y-10">
          {/* URL base */}
          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              URL base
            </h2>
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 text-sm text-emerald-300">
              <code>https://www.girocodegenerator.com/</code>
            </pre>
          </section>

          {/* Parámetros */}
          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Parámetros disponibles
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/80">
                    <th className="px-4 py-3 text-left font-semibold text-slate-100">Parámetro</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-100">Descripción</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-100">Obligatorio</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-100">Ejemplo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {[
                    { param: 'name', desc: 'Nombre del beneficiario', required: 'Sí', example: 'Max+Mustermann+GmbH' },
                    { param: 'iban', desc: 'IBAN', required: 'Sí', example: 'DE89370400440532013000' },
                    { param: 'bic', desc: 'BIC', required: 'No', example: 'COBADEFFXXX' },
                    { param: 'betrag', desc: 'Importe en EUR', required: 'No', example: '49.90' },
                    { param: 'zweck', desc: 'Referencia de pago', required: 'No', example: 'Factura+2026-001' },
                  ].map((row) => (
                    <tr key={row.param} className="hover:bg-slate-900/40">
                      <td className="px-4 py-3">
                        <code className="rounded bg-slate-800 px-1.5 py-0.5 text-sky-300">{row.param}</code>
                      </td>
                      <td className="px-4 py-3">{row.desc}</td>
                      <td className="px-4 py-3">
                        <span
                          className={
                            row.required === 'Sí'
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

          {/* Ejemplos */}
          <section>
            <h2 className="mb-4 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Ejemplos
            </h2>
            <div className="space-y-5">
              <div>
                <p className="mb-2 text-sm font-medium text-slate-300">
                  Ejemplo 1 – Solo IBAN y nombre:
                </p>
                <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-emerald-300">
                  <code>https://www.girocodegenerator.com/?name=Max+Mustermann&amp;iban=DE89370400440532013000</code>
                </pre>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-slate-300">
                  Ejemplo 2 – Con importe y referencia:
                </p>
                <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-emerald-300">
                  <code>https://www.girocodegenerator.com/?name=Empresa+SL&amp;iban=DE89370400440532013000&amp;betrag=99.00&amp;zweck=Factura+2026-001</code>
                </pre>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-slate-300">
                  Ejemplo 3 – Completo con BIC:
                </p>
                <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-emerald-300">
                  <code>https://www.girocodegenerator.com/?name=Empresa+SL&amp;iban=DE89370400440532013000&amp;bic=COBADEFFXXX&amp;betrag=149.00&amp;zweck=Proyecto+Web</code>
                </pre>
              </div>
            </div>
          </section>

          {/* JavaScript */}
          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Integración JavaScript
            </h2>
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 text-xs text-slate-200 sm:text-sm">
              <code>{`// Construir URL del generador GiroCode
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

// Ejemplo
const url = buildGiroCodeURL({
  name: 'Max Mustermann GmbH',
  iban: 'DE89370400440532013000',
  betrag: '99.00',
  zweck: 'Factura 2026-001'
});
window.open(url, '_blank');`}</code>
            </pre>
          </section>

          {/* PHP */}
          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Integración PHP
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

// Uso
$url = buildGiroCodeURL('Max Mustermann GmbH', 'DE89370400440532013000', '99.00', 'Factura 2026-001');
echo '<a href="' . htmlspecialchars($url) . '">Crear GiroCode</a>';
?>`}</code>
            </pre>
          </section>

          {/* Notas */}
          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Restricciones y notas
            </h2>
            <ul className="space-y-2 text-sm text-slate-300">
              {[
                'Sin clave API requerida',
                'Sin límites de velocidad',
                'Todos los datos se procesan localmente en el navegador',
                'Sin procesamiento del lado del servidor',
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
                Endpoint REST API
              </h2>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/30">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Nuevo
              </span>
            </div>
            <p className="mb-4 text-sm text-slate-400">
              Genera GiroCodes como PNG en Base64 directamente mediante solicitud HTTP – ideal para
              integraciones del lado del servidor, automatizaciones y pipelines CI/CD.
            </p>

            <div className="mb-6">
              <p className="mb-2 text-sm font-medium text-slate-300">Endpoint</p>
              <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-emerald-300">
                <code>GET https://www.girocodegenerator.com/api/generate</code>
              </pre>
            </div>

            <LockedCodeOverlay locale="es">
              <div className="space-y-5">
                <div>
                  <p className="mb-2 text-sm font-medium text-slate-300">Ejemplo – curl</p>
                  <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-slate-200">
                    <code>{`curl "https://www.girocodegenerator.com/api/generate?name=Max+Mustermann&iban=DE89370400440532013000&betrag=49.90&zweck=Factura+001"`}</code>
                  </pre>
                </div>

                <div>
                  <p className="mb-2 text-sm font-medium text-slate-300">Ejemplo de respuesta</p>
                  <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-slate-200">
                    <code>{`{
  "success": true,
  "qr_base64": "data:image/png;base64,iVBORw0KGgo...",
  "epc_payload": "BCD\\n001\\n1\\nSCT\\n\\nMax Mustermann\\nDE89370400440532013000\\nEUR49.90\\n\\n\\nFactura 001",
  "data": {
    "name": "Max Mustermann",
    "iban": "DE89370400440532013000",
    "bic": null,
    "betrag": "49.90",
    "zweck": "Factura 001"
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
              Probar ahora
            </h2>
            <p className="mb-4 text-sm text-slate-400">
              Abre el generador y crea tu primer GiroCode – directamente en el navegador, sin registro.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/es"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
              >
                Ir al generador GiroCode →
              </Link>
              <Link
                href="/es/fuer-entwickler"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-slate-700"
              >
                Para desarrolladores
              </Link>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
