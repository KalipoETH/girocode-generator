import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'QR Code para Transferencia – Crear gratis 2026',
  description:
    'Crear QR Code para transferencia SEPA gratis: Los clientes escanean y transfieren al instante. Norma GiroCode/EPC-QR. Sin registro, 100% local en el navegador.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/qr-code-ueberweisung',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/qr-code-ueberweisung',
      de: 'https://www.girocodegenerator.com/qr-code-ueberweisung',
      en: 'https://www.girocodegenerator.com/en/qr-code-ueberweisung',
      fr: 'https://www.girocodegenerator.com/fr/qr-code-ueberweisung',
      es: 'https://www.girocodegenerator.com/es/qr-code-ueberweisung',
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cómo creo un QR Code para una transferencia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Abrir el generador GiroCode, introducir IBAN y nombre, añadir opcionalmente importe y referencia de pago, descargar el QR Code.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué app necesito para escanear un QR Code de transferencia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cualquier app bancaria alemana: Sparkasse, ING, DKB, Volksbank, Commerzbank, Deutsche Bank, N26 y más.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Es gratuito un QR Code para transferencias?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Crear: Sí, gratis. Transferir: comisiones bancarias habituales (generalmente gratis para particulares).',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo usar un QR Code para transferencias recurrentes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, si el importe y la referencia de pago son siempre iguales (ej. cuota mensual de asociación).',
      },
    },
  ],
};

const stats = [
  { value: '30 seg.', label: 'Tiempo hasta la transferencia' },
  { value: '0 €', label: 'Coste creador y pagador' },
  { value: '36', label: 'Países SEPA compatibles' },
  { value: '100%', label: 'Local en el navegador' },
];

const useCases = [
  { title: 'Freelancers', desc: 'En facturas para pagos más rápidos' },
  { title: 'Asociaciones', desc: 'Para cuotas y donaciones' },
  { title: 'Artesanos', desc: 'En factura in situ' },
  { title: 'Particulares', desc: 'Para pagos entre particulares' },
  { title: 'Organizaciones benéficas', desc: 'En folletos y carteles' },
];

const relatedLinks = [
  { href: '/es', label: 'Crear GiroCode gratis' },
  { href: '/es/sepa-qr-code', label: 'Generador QR Code SEPA' },
  { href: '/es/freelancer', label: 'GiroCode para freelancers' },
  { href: '/es/verein', label: 'GiroCode para asociaciones' },
];

export default function QrCodeUeberweisungEsPage() {
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
              <li className="text-slate-400">QR Code para Transferencia</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Transferencia SEPA por QR Code
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              QR Code para Transferencia – Gratis &amp; Al Instante
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
              Un QR Code para transferencias es un GiroCode (QR Code SEPA) según la norma EPC069-12.
              Contiene IBAN, importe y referencia de pago y permite iniciar una transferencia
              escaneando simplemente con la app bancaria – en menos de 30 segundos.
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
            <h2>¿Cómo funciona un QR Code para transferencias?</h2>
            <ol>
              <li>
                <strong>Crear QR Code:</strong> Introducir IBAN, nombre del beneficiario,
                opcionalmente importe y referencia de pago
              </li>
              <li>
                <strong>Compartir o imprimir:</strong> Colocar el QR Code en factura, e-mail o web
              </li>
              <li>
                <strong>Escanear &amp; transferir:</strong> El destinatario escanea con la app
                bancaria → la transferencia se rellena automáticamente
              </li>
            </ol>

            <h2>¿Para qué se usa un QR Code de transferencia?</h2>
            <ul>
              {useCases.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.desc}
                </li>
              ))}
            </ul>

            <h2>Ventajas frente a la introducción manual del IBAN</h2>
            <ul>
              <li>Sin errores tipográficos en el IBAN</li>
              <li>El importe se introduce automáticamente</li>
              <li>La referencia de pago se transfiere correctamente</li>
              <li>Más rápido: aprox. 10 segundos en lugar de 2 minutos</li>
            </ul>

            <div className="not-prose my-8">
              <Link
                href="/es"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
              >
                Crear QR Code para Transferencia →
              </Link>
            </div>

            <h2>FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  ¿Cómo creo un QR Code para una transferencia?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Abrir el generador GiroCode, introducir IBAN y nombre, añadir opcionalmente
                  importe y referencia de pago, descargar el QR Code.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  ¿Qué app necesito para escanear un QR Code de transferencia?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Cualquier app bancaria alemana: Sparkasse, ING, DKB, Volksbank, Commerzbank,
                  Deutsche Bank, N26 y más.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  ¿Es gratuito un QR Code para transferencias?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Crear: Sí, gratis. Transferir: comisiones bancarias habituales (generalmente
                  gratis para particulares).
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  ¿Puedo usar un QR Code para transferencias recurrentes?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Sí, si el importe y la referencia de pago son siempre iguales (ej. cuota mensual
                  de asociación).
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
