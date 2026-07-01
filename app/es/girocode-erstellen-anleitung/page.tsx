import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Cómo Crear un GiroCode – Guía Paso a Paso 2026',
  description:
    'Crear GiroCode en 3 pasos: Ingresar IBAN, añadir importe y referencia, descargar código QR. Gratis, sin registro.',
  alternates: {
    canonical: `${SITE_URL}/es/girocode-erstellen-anleitung`,
    languages: {
      'x-default': `${SITE_URL}/girocode-erstellen-anleitung`,
      'de': `${SITE_URL}/girocode-erstellen-anleitung`,
      'en': `${SITE_URL}/en/girocode-erstellen-anleitung`,
      'fr': `${SITE_URL}/fr/girocode-erstellen-anleitung`,
      'es': `${SITE_URL}/es/girocode-erstellen-anleitung`,
    },
  },
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Crear un GiroCode',
  description: 'Cómo crear un GiroCode (código QR SEPA)',
  totalTime: 'PT10S',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Ingresar IBAN y nombre del beneficiario',
      text: 'Ingrese el IBAN del beneficiario (con o sin espacios) y el nombre del beneficiario (máx. 70 caracteres). El BIC es opcional y ya no es necesario para las nuevas transferencias SEPA.',
    },
    {
      '@type': 'HowToStep',
      name: 'Ingresar importe y referencia de pago',
      text: 'Ingrese el importe en EUR (ej. 49.90). Deje el importe vacío para importes variables. Ingrese la referencia de pago (máx. 140 caracteres, ej. "Factura 2026-001").',
    },
    {
      '@type': 'HowToStep',
      name: 'Generar y descargar el código QR',
      text: 'Haga clic en "Crear GiroCode". El código QR se genera al instante. Descárguelo como PNG o cópielo al portapapeles.',
    },
    {
      '@type': 'HowToStep',
      name: 'Añadir el GiroCode a la factura',
      text: 'Inserte el código QR en Word/Google Docs. Tamaño recomendado: al menos 3×3 cm. Repita el IBAN como texto debajo del código QR como alternativa para usuarios sin lector QR.',
    },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Necesito registrarme para crear un GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, completamente gratis sin registro. Todos los datos permanecen localmente en el navegador.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo usar el GiroCode en una factura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, simplemente descárguelo como PNG e insértelo en Word, Google Docs o PDF. Tamaño mínimo: 2×2 cm.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo omitir el importe en el GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, el importe y la referencia de pago son opcionales. El pagador ingresa entonces el importe él mismo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo añado un GiroCode a una factura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Descargue el código QR, insértelo en Word/Docs/PDF, escálelo a aprox. 3×3 cm. Por seguridad, añada el IBAN como texto debajo del código QR.',
      },
    },
  ],
};

const stats = [
  { value: '10 seg.', label: 'Tiempo de creación' },
  { value: '3', label: 'Pasos' },
  { value: '0 €', label: 'Coste' },
  { value: '100%', label: 'Local en el navegador' },
];

const steps = [
  {
    n: '1',
    title: 'Ingresar IBAN y nombre del beneficiario',
    desc: 'Ingrese los datos del beneficiario. El IBAN y el nombre son los únicos campos obligatorios.',
    bullets: [
      'Ingresar el IBAN del beneficiario (con o sin espacios)',
      'Ingresar el nombre del beneficiario (máx. 70 caracteres)',
      'El BIC es opcional – ya no es necesario para nuevas transferencias SEPA',
    ],
  },
  {
    n: '2',
    title: 'Ingresar importe y referencia de pago (opcional)',
    desc: 'Ambos campos son opcionales. Dejar vacío para máxima flexibilidad.',
    bullets: [
      'Ingresar el importe en EUR (ej. 49.90)',
      'Dejar el importe vacío para importes variables (el pagador lo ingresa él mismo)',
      'Ingresar la referencia de pago (máx. 140 caracteres, ej. "Factura 2026-001")',
    ],
  },
  {
    n: '3',
    title: 'Generar y descargar el código QR',
    desc: 'Su GiroCode se crea al instante con un clic.',
    bullets: [
      'Hacer clic en "Crear GiroCode"',
      'El código QR se genera al instante',
      'Descargar como PNG o copiar al portapapeles',
    ],
  },
  {
    n: '4',
    title: 'Añadir el GiroCode a la factura (opcional)',
    desc: 'Para facturas: insertar el código QR y añadir el IBAN como texto.',
    bullets: [
      'Insertar el código QR en Word/Google Docs',
      'Tamaño recomendado: al menos 3×3 cm',
      'Repetir el IBAN como texto debajo del código QR (alternativa para usuarios sin lector QR)',
    ],
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
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
              <li className="text-slate-400">Cómo Crear un GiroCode</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Guía · Crear GiroCode
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              Cómo Crear un GiroCode – Guía Completa
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
              Crear GiroCode: 1. Ingresar nombre del beneficiario e IBAN, 2. Ingresar importe y
              referencia de pago (opcional), 3. Generar y descargar el código QR. Todo el proceso
              dura menos de 10 segundos. Sin registro, sin coste, 100% local en el navegador.
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
            <h2>Crear GiroCode en 4 pasos</h2>

            <div className="not-prose space-y-4 mb-8">
              {steps.map((step) => (
                <div
                  key={step.n}
                  className="rounded-xl border border-[#1f2431] bg-[#0f1117] p-5"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                      style={{ background: 'linear-gradient(135deg,#22c55e,#16a34a)', color: '#0b0c10' }}
                    >
                      {step.n}
                    </div>
                    <div>
                      <h3 className="mb-2 text-base font-bold text-slate-50">{step.title}</h3>
                      <p className="text-sm text-slate-400">{step.desc}</p>
                      <ul className="mt-2 space-y-1">
                        {step.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                            <span className="mt-1 text-[#22c55e]">✓</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2>Consejos para GiroCodes profesionales en facturas</h2>
            <ul>
              <li>
                <strong>Tamaño mínimo:</strong> 3×3 cm para una buena legibilidad
              </li>
              <li>
                <strong>Corrección de errores:</strong> Nivel M para facturas digitales, Nivel H
                para facturas impresas
              </li>
              <li>
                <strong>IBAN como texto:</strong> Añadir también como texto (alternativa para
                usuarios sin lector)
              </li>
              <li>
                <strong>Referencia de pago:</strong> Incluir el número de factura para una
                asignación fácil
              </li>
            </ul>

            <div className="not-prose my-8 flex flex-wrap gap-3">
              <Link
                href="/es"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#16a34a 0%,#15803d 100%)' }}
              >
                Crear GiroCode ahora →
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
                  { href: '/es', label: 'Crear GiroCode ahora' },
                  { href: '/es/girocode-scannen-anleitung', label: 'Cómo escanear un GiroCode' },
                  { href: '/es/freelancer', label: 'GiroCode para Freelancers' },
                  { href: '/es/wissen/girocode', label: '¿Qué es un GiroCode?' },
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
