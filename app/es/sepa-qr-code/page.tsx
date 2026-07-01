import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Generador QR Code SEPA – Gratis & Al Instante 2026',
  description:
    'Generar QR Code SEPA (GiroCode/EPC-QR) gratis: Ingresa el IBAN, genera el QR, listo. Compatible con todas las apps bancarias. Sin registro.',
  alternates: {
    canonical: `${SITE_URL}/es/sepa-qr-code`,
    languages: {
      'x-default': `${SITE_URL}/sepa-qr-code`,
      de: `${SITE_URL}/sepa-qr-code`,
      en: `${SITE_URL}/en/sepa-qr-code`,
      fr: `${SITE_URL}/fr/sepa-qr-code`,
      es: `${SITE_URL}/es/sepa-qr-code`,
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es un código QR SEPA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un código QR SEPA (también llamado GiroCode, EPC QR Code o BezahlCode) es un código QR estandarizado para transferencias SEPA según la norma EPC069-12 del Consejo Europeo de Pagos. Contiene todos los datos de pago como IBAN, nombre del beneficiario, importe opcional y referencia de pago en forma legible por máquina.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo crear un código QR SEPA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Crear un código QR SEPA es sencillo: ingresa el IBAN, añade el nombre del beneficiario, incluye opcionalmente el importe y la referencia, luego haz clic en Generar. El código QR terminado se puede descargar inmediatamente – sin registro y completamente gratis.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué datos contiene un código QR SEPA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un código QR SEPA contiene: IBAN (obligatorio), nombre del beneficiario (obligatorio), BIC (opcional), importe (opcional), referencia de pago (opcional, hasta 140 caracteres). Todos los datos se formatean según EPC069-12.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Son gratuitos los códigos QR SEPA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, los códigos QR SEPA son completamente gratuitos para crear y usar. La norma EPC es abierta y libre de regalías. Nuestro generador crea códigos QR SEPA sin registro, sin costes ocultos, y procesa todos los datos localmente en el navegador.',
      },
    },
  ],
};

const stats = [
  { value: '36', label: 'Países SEPA' },
  { value: 'EPC069-12', label: 'Norma oficial' },
  { value: '10 seg.', label: 'Tiempo de creación' },
  { value: '100%', label: 'Gratuito' },
];

const tableRows = [
  { merkmal: 'Norma', wert: 'EPC069-12' },
  { merkmal: 'Países', wert: '36 países SEPA' },
  { merkmal: 'Compatibilidad', wert: 'Todas las apps bancarias' },
  { merkmal: 'Gratuito', wert: 'Sí' },
  { merkmal: 'IBAN incluido', wert: 'Sí' },
  { merkmal: 'Importe opcional', wert: 'Sí' },
  { merkmal: 'Referencia de pago', wert: 'Hasta 140 caracteres' },
];

const relatedLinks = [
  { href: '/es/bezahlcode', label: 'Generador BezahlCode' },
  { href: '/es/epc-qr-code', label: 'Generador EPC QR Code' },
  { href: '/es/iban-qr-code', label: 'Generador IBAN QR Code' },
  { href: '/es/wissen/epc-standard', label: 'Documentación norma EPC' },
];

export default function SepaQrCodeEsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/es" className="text-sky-400 hover:text-sky-300">
                  Inicio
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">Generador QR Code SEPA</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Nombres alternativos · QR Code SEPA / GiroCode
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              Generador QR Code SEPA – Gratis &amp; Al Instante
            </h1>
          </header>

          {/* Short Answer Box */}
          <div
            className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3"
            role="note"
          >
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">
              💡 Respuesta corta
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              Un código QR SEPA (también GiroCode o EPC QR Code) es un código QR estandarizado
              para transferencias SEPA. Sigue la norma EPC069-12 del Consejo Europeo de Pagos y
              es compatible con todas las aplicaciones bancarias alemanas y europeas.
            </p>
          </div>

          {/* Stats */}
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

            <h2>¿Qué es un código QR SEPA?</h2>
            <p>
              Un <strong>código QR SEPA</strong> – también conocido como GiroCode, EPC QR Code o
              BezahlCode – es un código QR estandarizado para transferencias SEPA dentro del espacio
              de pagos SEPA europeo que abarca 36 países. Sigue la{' '}
              <strong>norma EPC069-12</strong> del Consejo Europeo de Pagos (EPC) y codifica todos
              los datos de pago relevantes en formato legible por máquina.
            </p>
            <p>
              Cuando alguien escanea un código QR SEPA, su aplicación bancaria se abre directamente
              con un formulario de transferencia pre-rellenado con el IBAN, el nombre del
              beneficiario, el importe y la referencia de pago. El usuario solo tiene que
              confirmar – no más escritura manual. Esto ahorra tiempo y reduce considerablemente
              los errores.
            </p>

            <h2>Diferencia: Código QR SEPA vs. Código QR ordinario</h2>
            <p>
              Un código QR ordinario puede contener cualquier texto, URLs u otros datos – no tiene
              un formato estandarizado. Las aplicaciones bancarias no pueden interpretar estos
              códigos QR como órdenes de pago.
            </p>
            <p>
              Un <strong>código QR SEPA</strong>, en cambio, sigue un formato estricto según
              EPC069-12:
            </p>
            <ul>
              <li>Siempre comienza con el tag de servicio <code>BCD</code></li>
              <li>Contiene campos estructurados: IBAN, BIC, importe, nombre, referencia</li>
              <li>
                Reconocido por las aplicaciones bancarias como orden de pago y procesado
                automáticamente
              </li>
              <li>Volumen máximo de datos definido (no de tamaño arbitrario)</li>
            </ul>
            <p>
              Solo un código QR SEPA correctamente estructurado según la norma EPC es aceptado
              por las aplicaciones bancarias como orden de pago.
            </p>

            <h2>¿Qué aplicaciones bancarias soportan los códigos QR SEPA?</h2>
            <p>
              Prácticamente todas las grandes aplicaciones bancarias en Alemania, Austria y Suiza
              soportan códigos QR SEPA. En Alemania, estas incluyen: Sparkasse, ING, DKB,
              Volksbank/Raiffeisenbank, Commerzbank, Deutsche Bank, N26, Postbank, Comdirect y
              Targobank. Como la norma es válida en toda Europa, los códigos QR SEPA también
              funcionan con bancos de los 36 países SEPA.
            </p>

            {/* CTA */}
            <div className="not-prose my-8">
              <Link
                href="/es"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
              >
                Crear QR Code SEPA ahora →
              </Link>
            </div>

            <h2>Propiedades del QR Code SEPA</h2>
            <div className="not-prose overflow-x-auto rounded-xl border border-[#1f2431]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#1f2431] bg-[#0f1117]">
                    <th className="px-4 py-3 text-left font-semibold text-[#e8eaf0]">
                      Propiedad
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-[#22c55e]">
                      QR Code SEPA
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-[#1f2431] ${i % 2 === 0 ? 'bg-[#0b0c10]' : 'bg-[#0f1117]'}`}
                    >
                      <td className="px-4 py-3 text-[#8b90a0]">{row.merkmal}</td>
                      <td className="px-4 py-3 text-slate-200">{row.wert}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  ¿Qué es un código QR SEPA?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Un código QR SEPA (también GiroCode, EPC QR Code o BezahlCode) es un código QR
                  estandarizado para transferencias SEPA según la norma EPC069-12. Contiene todos
                  los datos de pago de forma estructurada y es reconocido directamente por las
                  aplicaciones bancarias como orden de pago.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  ¿Cómo crear un código QR SEPA?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Ingresa el IBAN, añade el nombre del beneficiario, incluye opcionalmente el
                  importe y la referencia, luego genera – listo. El código QR se puede descargar
                  inmediatamente, sin registro y completamente gratis.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  ¿Qué datos contiene un código QR SEPA?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  IBAN (obligatorio), nombre del beneficiario (obligatorio), BIC (opcional),
                  importe (opcional), referencia de pago (opcional, hasta 140 caracteres). Todos
                  los datos se formatean y codifican según EPC069-12.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  ¿Son gratuitos los códigos QR SEPA?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Sí, completamente gratuitos. La norma EPC es abierta y libre de regalías.
                  Nuestro generador crea códigos QR SEPA sin registro, sin costes ocultos, y
                  procesa todos los datos localmente en el navegador – no se transmite ningún dato
                  a servidores.
                </p>
              </div>
            </div>

            {/* Related Links Box */}
            <div className="not-prose mt-10 rounded-2xl border border-[#1f2431] bg-[#0f1117] p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xl" aria-hidden>📚</span>
                <h2 className="text-base font-bold text-[#e8eaf0]">Artículos relacionados</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {relatedLinks.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3.5 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/30 hover:text-[#e8eaf0] hover:-translate-y-0.5"
                  >
                    <span className="leading-snug">{a.label}</span>
                    <span className="ml-3 shrink-0 text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
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
