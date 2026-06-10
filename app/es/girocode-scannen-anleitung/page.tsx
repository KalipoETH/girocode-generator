import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cómo Escanear un GiroCode – Guía Completa para Todas las Apps 2026',
  description:
    'Escanear GiroCode con Sparkasse, ING, DKB, Volksbank y más: Guía paso a paso para todas las apps bancarias. Con cámara o importación de archivo.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/girocode-scannen-anleitung',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/girocode-scannen-anleitung',
      'de': 'https://www.girocodegenerator.com/girocode-scannen-anleitung',
      'en': 'https://www.girocodegenerator.com/en/girocode-scannen-anleitung',
      'fr': 'https://www.girocodegenerator.com/fr/girocode-scannen-anleitung',
      'es': 'https://www.girocodegenerator.com/es/girocode-scannen-anleitung',
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Dónde encuentro el escáner QR en mi app bancaria?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En "Transferencia" o "Enviar dinero" hay un icono de cámara/QR. En algunas apps también en "Scan & Pay".',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo escanear un GiroCode sin app bancaria?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, con nuestro escáner de navegador en /scanner. Sin embargo, los lectores QR normales como Google Lens no reconocen el contenido EPC como una transferencia bancaria.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El GiroCode escanea pero la app bancaria muestra un error?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El IBAN podría ser inválido o el importe podría superar el máximo permitido. Vuelva a crear el código y verifique el IBAN.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo escanear GiroCodes desde un PDF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, muchas apps bancarias permiten importar fotos/capturas de pantalla. También puede usar nuestro escáner de navegador.',
      },
    },
  ],
};

const banks = [
  { name: 'Sparkasse App', path: 'Transferencia → Icono QR Code arriba a la derecha' },
  { name: 'ING Banking to go', path: 'Transferencia → Símbolo de cámara' },
  { name: 'DKB Banking', path: 'Transferencia → Escanear QR Code' },
  { name: 'Volksbank / VR-Banking', path: 'Transferencia → Icono QR Code' },
  { name: 'Commerzbank', path: 'Transferencia → QR Code' },
  { name: 'Deutsche Bank', path: 'Transferencia → QR Code' },
  { name: 'N26', path: 'Enviar → Escanear QR Code' },
  { name: 'Postbank', path: 'Transferencia → Icono QR Code' },
  { name: 'Comdirect', path: 'Transferencia → QR Code' },
  { name: 'Targobank', path: 'Transferencia → Escanear QR Code' },
];

const stats = [
  { value: '30 seg.', label: 'Del escaneo a la transferencia' },
  { value: '10+', label: 'Apps bancarias compatibles' },
  { value: '36', label: 'Países SEPA compatibles' },
  { value: 'EPC069-12', label: 'Estándar compatible' },
];

export default function Page() {
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
              <li className="text-slate-400">Cómo Escanear un GiroCode</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Guía · Escanear GiroCode
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              Cómo Escanear un GiroCode – Guía para Todas las Apps Bancarias
            </h1>
          </header>

          <div
            className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3"
            role="note"
          >
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">
              💡 Respuesta corta
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              Escanear GiroCode: Abrir app bancaria → pulsar &quot;Transferencia&quot; → pulsar icono
              escáner QR → escanear GiroCode → verificar datos → confirmar con TAN. Todo el proceso
              dura menos de 30 segundos. Funciona con Sparkasse, ING, DKB, Volksbank y todas las
              demás apps compatibles con SEPA.
            </p>
          </div>

          <div className="not-prose mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.value}
                className="rounded-xl border border-[#1f2431] bg-[#0f1117] px-4 py-3 text-center"
              >
                <p className="text-lg font-bold text-[#22c55e]">{s.value}</p>
                <p className="mt-0.5 text-[11px] text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2>Guía de escaneo general (3 pasos)</h2>

            <div className="not-prose space-y-3 mb-8">
              {[
                {
                  n: '1',
                  title: 'Abrir la app bancaria y navegar a "Transferencia"',
                  desc: 'Abre tu app bancaria y pulsa "Transferencia" o "Enviar dinero". En algunas apps la función está en "Pagos" o "Pagar y transferir".',
                },
                {
                  n: '2',
                  title: 'Pulsar el icono del escáner QR',
                  desc: 'En el formulario de transferencia aparece un icono de cámara o QR Code. Pulsalo para abrir el escáner. En algunas apps primero debes seleccionar "Nueva transferencia".',
                },
                {
                  n: '3',
                  title: 'Escanear el GiroCode y confirmar',
                  desc: 'Acerca la cámara al GiroCode. Los datos del beneficiario (IBAN, nombre, importe, referencia) se rellenan automáticamente. Verifica los datos y confirma con tu TAN.',
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="rounded-xl border border-[#1f2431] bg-[#0f1117] p-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#22c55e]/20 text-xs font-bold text-[#22c55e]">
                      {step.n}
                    </span>
                    <div>
                      <h3 className="mb-1 text-sm font-bold text-slate-50">{step.title}</h3>
                      <p className="text-sm text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2>Instrucciones por aplicación</h2>

            <div className="not-prose space-y-2 mb-6">
              {banks.map((b, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-[#1f2431] bg-[#0f1117] px-4 py-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#22c55e]/20 text-xs font-bold text-[#22c55e]">
                    {i + 1}
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-slate-200">{b.name}: </span>
                    <span className="text-sm text-slate-400">{b.path}</span>
                  </div>
                </div>
              ))}
            </div>

            <h2>Problemas frecuentes al escanear</h2>
            <p>
              Si el escaneo no funciona, comprueba primero la iluminación, la distancia y el tamaño
              del código QR. Una descripción completa de todos los problemas posibles y sus
              soluciones se encuentra en nuestro artículo{' '}
              <Link href="/es/girocode-funktioniert-nicht" className="text-[#22c55e] hover:underline">
                GiroCode no funciona – 7 Causas y Soluciones
              </Link>
              .
            </p>

            <h2>Alternativa: Escanear en el navegador</h2>
            <p>
              Con nuestro escáner de navegador, los GiroCodes también se pueden escanear
              directamente en un PC o tablet, sin app bancaria. Simplemente sube el archivo de
              imagen o usa la cámara – los datos de la transferencia se leen de inmediato.
            </p>

            <div className="not-prose my-6 flex flex-wrap gap-3">
              <Link
                href="/scanner"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#16a34a 0%,#15803d 100%)' }}
              >
                Escanear GiroCode en el Navegador →
              </Link>
            </div>

            <h2>Preguntas frecuentes</h2>

            <div className="not-prose space-y-4 mb-8">
              {faqJsonLd.mainEntity.map((faq, i) => (
                <div key={i} className="rounded-xl border border-[#1f2431] bg-[#0f1117] p-5">
                  <h3 className="mb-2 text-sm font-bold text-slate-50">{faq.name}</h3>
                  <p className="text-sm text-slate-400">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>

            <div className="not-prose mt-10 rounded-2xl border border-[#1f2431] bg-[#0f1117] p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xl" aria-hidden>
                  📚
                </span>
                <h2 className="text-base font-bold text-[#e8eaf0]">Más artículos</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { href: '/scanner', label: 'Escáner GiroCode del Navegador' },
                  { href: '/es/girocode-funktioniert-nicht', label: 'GiroCode no funciona – Soluciones' },
                  { href: '/es/wissen/banking-apps', label: 'Resumen de apps bancarias' },
                  { href: '/es/girocode-erstellen-anleitung', label: 'Cómo crear un GiroCode' },
                ].map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3.5 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/30 hover:text-[#e8eaf0] hover:-translate-y-0.5"
                  >
                    <span>{a.label}</span>
                    <span className="ml-3 shrink-0 text-[#22c55e] group-hover:translate-x-1 transition-transform duration-200">
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
