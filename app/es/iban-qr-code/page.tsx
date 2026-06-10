import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Generador QR Code IBAN – Crear gratis 2026',
  description:
    'Codificar IBAN como QR Code: Generar GiroCode/SEPA-QR gratis. IBAN, importe y referencia de pago en el QR Code – compatible con todas las apps bancarias.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/iban-qr-code',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/iban-qr-code',
      de: 'https://www.girocodegenerator.com/iban-qr-code',
      en: 'https://www.girocodegenerator.com/en/iban-qr-code',
      fr: 'https://www.girocodegenerator.com/fr/iban-qr-code',
      es: 'https://www.girocodegenerator.com/es/iban-qr-code',
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cómo codifico un IBAN en un QR Code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Usa un generador GiroCode según la norma EPC069-12. Codifica el IBAN, nombre del beneficiario, importe opcional y referencia de pago de forma estructurada – no solo como texto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo usar cualquier lector QR Code para QR Codes IBAN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Solo las apps bancarias con soporte EPC/GiroCode reconocen los datos de pago como orden de transferencia. Los escáneres QR normales solo muestran el texto sin procesar.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre un QR Code con IBAN y un GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un QR Code normal solo contiene texto. Un GiroCode (QR Code IBAN) contiene datos de pago estructurados según EPC069-12, que las apps bancarias reconocen directamente como transferencia.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Está seguro mi IBAN en el QR Code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El generador funciona localmente en el navegador, sin almacenamiento. El IBAN es visible en el QR Code – esto es intencional en los GiroCodes para permitir pagos.',
      },
    },
  ],
};

const stats = [
  { value: '34', label: 'Caracteres IBAN máx.' },
  { value: 'EPC069-12', label: 'Norma QR para IBAN' },
  { value: '10 seg.', label: 'Tiempo de creación' },
  { value: '100%', label: 'Gratuito' },
];

const comparisonRows = [
  ['Escaneable por app bancaria', '✅ Sí', '❌ No'],
  ['Importe transferible', '✅ Sí', '❌ No'],
  ['Norma', 'EPC069-12', 'Sin norma'],
  ['Referencia de pago', '✅ Sí', '❌ No'],
  ['Transferencia directa', '✅ Sí', '❌ No'],
];

const relatedLinks = [
  { href: '/es/sepa-qr-code', label: 'Generador QR Code SEPA' },
  { href: '/es/epc-qr-code', label: 'Generador EPC QR Code' },
  { href: '/es/wissen/iban-bic', label: 'IBAN y BIC explicados' },
  { href: '/es', label: 'Crear GiroCode gratis' },
];

export default function IbanQrCodeEsPage() {
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
              <li className="text-slate-400">Generador QR Code IBAN</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              IBAN como QR Code · Norma GiroCode
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              Generador QR Code IBAN – Gratis &amp; Al Instante
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
              Un QR Code IBAN (técnicamente: GiroCode o SEPA-QR) codifica un IBAN junto con importe
              y referencia de pago opcionales en un QR Code según la norma EPC. A diferencia de un
              simple QR Code con texto IBAN, un GiroCode es directamente escaneable por apps
              bancarias.
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
            <h2>QR Code IBAN vs. QR Code simple</h2>
            <p>
              Muchas personas crean un QR Code que solo contiene el IBAN como texto. Esto no funciona
              con apps bancarias – solo un GiroCode estructurado según EPC069-12 se reconoce como
              orden de transferencia.
            </p>

            <div className="not-prose my-6 overflow-x-auto rounded-lg border border-slate-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 text-slate-300">
                    <th className="px-4 py-3 text-left font-medium">Característica</th>
                    <th className="px-4 py-3 text-left font-medium text-[#22c55e]">
                      QR Code IBAN (GiroCode)
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-slate-400">
                      QR Code normal
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50 text-slate-300">
                  {comparisonRows.map(([label, giro, normal], i) => (
                    <tr key={label} className={i % 2 === 1 ? 'bg-slate-800/30' : ''}>
                      <td className="px-4 py-3 font-medium text-slate-200">{label}</td>
                      <td className="px-4 py-3 text-[#22c55e]">{giro}</td>
                      <td className="px-4 py-3">{normal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>¿Cómo creo un QR Code IBAN?</h2>
            <ol>
              <li>Introducir IBAN (ej. DE89 3704 0044 0532 0130 00)</li>
              <li>Introducir nombre del beneficiario (máx. 70 caracteres)</li>
              <li>Opcional: añadir importe y referencia de pago</li>
              <li>Generar QR Code y descargar como PNG</li>
            </ol>

            <h2>¿Qué IBAN se admiten?</h2>
            <p>
              Todos los IBAN de los 36 países SEPA: alemanes (DE), austriacos (AT), suizos (CH) y
              todos los demás países UE/EEE. Nuestro generador valida automáticamente los IBAN
              mediante la suma de comprobación Mod-97.
            </p>

            <div className="not-prose my-8">
              <Link
                href="/es"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
              >
                Crear QR Code IBAN →
              </Link>
            </div>

            <h2>FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  ¿Cómo codifico un IBAN en un QR Code?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Usa un generador GiroCode según la norma EPC069-12. Codifica el IBAN, nombre del
                  beneficiario, importe opcional y referencia de pago de forma estructurada – no solo
                  como texto.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  ¿Puedo usar cualquier lector QR Code para QR Codes IBAN?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  No. Solo las apps bancarias con soporte EPC/GiroCode reconocen los datos de pago
                  como orden de transferencia. Los escáneres QR normales solo muestran el texto sin
                  procesar.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  ¿Cuál es la diferencia entre un QR Code con IBAN y un GiroCode?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Un QR Code normal solo contiene texto. Un GiroCode (QR Code IBAN) contiene datos de
                  pago estructurados según EPC069-12, que las apps bancarias reconocen directamente
                  como transferencia.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  ¿Está seguro mi IBAN en el QR Code?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  El generador funciona localmente en el navegador, sin almacenamiento. El IBAN es
                  visible en el QR Code – esto es intencional en los GiroCodes para permitir pagos.
                </p>
              </div>
            </div>

            <div className="not-prose mt-10 rounded-2xl border border-[#1f2431] bg-[#0f1117] p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xl" aria-hidden>
                  📚
                </span>
                <h2 className="text-base font-bold text-[#e8eaf0]">Artículos relacionados</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {relatedLinks.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3.5 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/30 hover:bg-[#1a1d25] hover:text-[#e8eaf0]"
                  >
                    <span className="leading-snug">{a.label}</span>
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
