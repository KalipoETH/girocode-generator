import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Generador QR Code EPC – Estándar EPC069-12 Gratis 2026',
  description:
    'Crear QR Code EPC según la norma EPC069-12 gratis. Implementación técnicamente correcta para desarrolladores y empresas. Sin registro.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/epc-qr-code',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/epc-qr-code',
      de: 'https://www.girocodegenerator.com/epc-qr-code',
      en: 'https://www.girocodegenerator.com/en/epc-qr-code',
      fr: 'https://www.girocodegenerator.com/fr/epc-qr-code',
      es: 'https://www.girocodegenerator.com/es/epc-qr-code',
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre EPC QR Code, GiroCode y SEPA QR Code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Todos designan lo mismo: EPC QR Code es el nombre técnico, GiroCode la marca alemana, SEPA QR Code el término funcional. La norma subyacente es EPC069-12.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué versión de la norma EPC069-12 debo usar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Versión 002 (BIC opcional), ya que los bancos más recientes ya no requieren BIC. La versión 002 es retrocompatible y está soportada por todas las apps bancarias modernas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es el importe máximo en un EPC QR Code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No hay límite técnico en la norma EPC069-12 en sí. Sin embargo, las transferencias SEPA tienen un máximo de 999.999.999,99 EUR.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo integro el generador EPC QR Code en mi sitio web?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vía API en /api/generate o mediante el enfoque de parámetros URL. Todos los detalles están en la documentación API en /api-docs.',
      },
    },
  ],
};

export default function EpcQrCodeEsPage() {
  const stats = [
    { value: 'EPC069-12', label: 'Norma oficial' },
    { value: '11', label: 'Líneas en el payload' },
    { value: 'V001/V002', label: 'Versiones' },
    { value: 'Level M', label: 'Corrección de errores (recomendado)' },
  ];

  const faqs = [
    {
      q: '¿Cuál es la diferencia entre EPC QR Code, GiroCode y SEPA QR Code?',
      a: 'Todos designan lo mismo: EPC QR Code es el nombre técnico, GiroCode la marca alemana, SEPA QR Code el término funcional. La norma subyacente es EPC069-12.',
    },
    {
      q: '¿Qué versión de la norma EPC069-12 debo usar?',
      a: 'Versión 002 (BIC opcional), ya que los bancos más recientes ya no requieren BIC. La versión 002 es retrocompatible y está soportada por todas las apps bancarias modernas.',
    },
    {
      q: '¿Cuál es el importe máximo en un EPC QR Code?',
      a: 'No hay límite técnico en la norma EPC069-12 en sí. Sin embargo, las transferencias SEPA tienen un máximo de 999.999.999,99 EUR.',
    },
    {
      q: '¿Cómo integro el generador EPC QR Code en mi sitio web?',
      a: 'Vía API en /api/generate o mediante el enfoque de parámetros URL. Todos los detalles están en la documentación API en /api-docs.',
    },
  ];

  const related = [
    { href: '/es/api-docs', label: 'Documentación API' },
    { href: '/es/fuer-entwickler', label: 'GiroCode para desarrolladores' },
    { href: '/es/wissen/epc-standard', label: 'Explicación norma EPC' },
    { href: '/es/sepa-qr-code', label: 'Generador QR Code SEPA' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/es" className="text-sky-400 hover:text-sky-300">
                  Inicio
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">Generador EPC QR Code</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Técnico · Norma EPC069-12
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              Generador EPC QR Code – Según la norma EPC069-12
            </h1>
          </header>

          <div
            className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3"
            role="note"
          >
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">
              💡 Respuesta breve
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              Un EPC QR Code (European Payments Council QR Code) es la denominación técnica del
              GiroCode. La norma EPC069-12 define la estructura exacta del payload: 11 líneas con
              service tag, versión, codificación, identificación SCT, BIC, nombre del beneficiario,
              IBAN, importe y referencia de pago.
            </p>
          </div>

          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-lg border border-[#1f2431] bg-[#0f1117] p-4 text-center"
              >
                <p className="text-2xl font-bold text-[#22c55e]">{s.value}</p>
                <p className="mt-1 text-xs leading-snug text-[#8b90a0]">{s.label}</p>
              </div>
            ))}
          </div>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2>Estructura del payload EPC069-12</h2>
            <p>
              El payload EPC069-12 es un formato de texto basado en líneas con exactamente 11 líneas.
              Cada línea tiene un significado fijo – las líneas vacías están permitidas para campos
              opcionales:
            </p>
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 text-xs text-slate-200 sm:text-sm">
              <code>{`BCD                      ← Service Tag
002                      ← Versión
1                        ← Juego de caracteres (1=UTF-8)
SCT                      ← Código de identificación (SEPA Credit Transfer)
                         ← BIC (opcional, dejar vacío)
Max Mustermann           ← Nombre (máx. 70 caracteres)
DE89370400440532013000   ← IBAN
EUR99.99                 ← Importe (EUR + importe, ej. EUR99.99)
                         ← Purpose Code (dejar vacío)
                         ← Remittance Info (estructurado, dejar vacío)
Factura 2026-001         ← Referencia de pago (máx. 140 caracteres)`}</code>
            </pre>

            <h2>Versiones 001 vs. 002</h2>
            <p>
              La versión 001 requiere BIC, la versión 002 hace el BIC opcional. Recomendado: versión
              002 para nuevas implementaciones. La mayoría de apps bancarias aceptan ambas versiones.
              Con la versión 002, la línea BIC puede quedar vacía, ya que la red SEPA identifica el
              banco a partir del IBAN.
            </p>

            <h2>Nivel de corrección de errores</h2>
            <p>
              EPC069-12 recomienda el nivel M (15 % de recuperación) para visualización digital en
              pantallas. Para impresión en facturas o carteles, se recomienda el nivel H (30 % de
              recuperación) para mejor legibilidad – incluso si el QR Code está ligeramente dañado o
              sucio.
            </p>

            <h2>Ejemplo de implementación JavaScript</h2>
            <p>
              Esta función genera un payload EPC069-12 válido, que puede renderizarse directamente con
              una biblioteca QR Code (ej. <code>qrcode</code> o <code>qr-code-styling</code>):
            </p>
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 text-xs text-slate-200 sm:text-sm">
              <code>{`function buildEPCPayload({ name, iban, bic = '', amount, purpose = '' }) {
  const amountStr = amount ? 'EUR' + Number(amount).toFixed(2) : '';
  return [
    'BCD',       // Service Tag
    '002',       // Versión
    '1',         // Juego de caracteres (UTF-8)
    'SCT',       // SEPA Credit Transfer
    bic.trim(),  // BIC (opcional)
    name.trim().slice(0, 70),
    iban.replace(/\\s+/g, '').toUpperCase(),
    amountStr,   // EUR + importe o vacío
    '',          // Purpose Code (vacío)
    '',          // Remittance Info estructurada (vacío)
    purpose.trim().slice(0, 140)
  ].join('\\n');
}`}</code>
            </pre>

            <div className="not-prose my-8">
              <Link
                href="/es"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#16a34a 0%,#15803d 100%)' }}
              >
                Crear EPC QR Code →
              </Link>
              <Link
                href="/es/api-docs"
                className="ml-4 inline-flex items-center gap-2 rounded-xl border border-[#1f2431] px-6 py-3 text-sm font-medium text-slate-300 transition duration-200 hover:border-emerald-500/30 hover:text-white"
              >
                Documentación API →
              </Link>
            </div>

            <h2>Preguntas frecuentes sobre EPC QR Code</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-sm font-semibold text-slate-50">{faq.q}</h3>
                  <p className="text-sm text-slate-300">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="not-prose mt-10 rounded-2xl border border-[#1f2431] bg-[#0f1117] p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xl" aria-hidden>
                  📚
                </span>
                <h2 className="text-base font-bold text-[#e8eaf0]">Artículos relacionados</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {related.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3.5 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/30 hover:text-[#e8eaf0] hover:-translate-y-0.5"
                  >
                    <span>{a.label}</span>
                    <span className="ml-3 shrink-0 text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
