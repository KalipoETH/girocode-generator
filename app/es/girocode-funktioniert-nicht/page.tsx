import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode no funciona – Causas y Soluciones 2026',
  description:
    '¿GiroCode no reconocido o no escanea? Las 7 causas más frecuentes y soluciones inmediatas. Explicado para todas las apps bancarias.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/girocode-funktioniert-nicht',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/girocode-funktioniert-nicht',
      'de': 'https://www.girocodegenerator.com/girocode-funktioniert-nicht',
      'en': 'https://www.girocodegenerator.com/en/girocode-funktioniert-nicht',
      'fr': 'https://www.girocodegenerator.com/fr/girocode-funktioniert-nicht',
      'es': 'https://www.girocodegenerator.com/es/girocode-funktioniert-nicht',
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Por qué mi app bancaria no escanea el GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las causas más frecuentes: la app no es compatible con el estándar EPC, el código QR es demasiado pequeño (mín. 2×2 cm), mala iluminación o área de escaneo incorrecta en la app (busque en "Transferencia" → "Código QR").',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué tamaño debe tener un GiroCode impreso?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Al menos 2×2 cm. Recomendado: 3×3 cm en facturas. Por debajo de 2×2 cm la cámara no puede leer el código de forma fiable.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo escanear un GiroCode con la app de cámara normal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, los escáneres QR normales no reconocen el contenido EPC como una transferencia bancaria. Se necesita una app bancaria o nuestro escáner de navegador (/scanner).',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué hacer si el GiroCode muestra datos incorrectos tras el escaneo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compruebe si el código se creó con un formato IBAN validado. Asegúrese de que el código se creó con un generador compatible con EPC (como el nuestro).',
      },
    },
  ],
};

const problems = [
  {
    title: 'Código QR impreso demasiado pequeño',
    solution: 'Respetar el tamaño mínimo de 2×2 cm. Para PDF: calidad de impresión mín. 150 DPI.',
  },
  {
    title: 'Mala iluminación al escanear',
    solution: 'Ajustar el brillo de la pantalla al máximo. Sin reflejos. Preferir luz indirecta.',
  },
  {
    title: 'Distancia incorrecta al código QR',
    solution: 'Distancia óptima: 15–30 cm. Ni demasiado cerca ni demasiado lejos.',
  },
  {
    title: 'La app bancaria no es compatible con GiroCode',
    solution:
      'Compruebe si su app es compatible con SEPA-QR/EPC. Todos los grandes bancos alemanes (Sparkasse, ING, DKB, Volksbank, Commerzbank) son compatibles con el estándar.',
  },
  {
    title: 'El código QR contiene un IBAN inválido',
    solution: 'Validar el IBAN con una herramienta de verificación. Nuestro generador valida el IBAN automáticamente (Mod-97).',
  },
  {
    title: 'El código QR está dañado o borroso',
    solution: 'Volver a crear el código. Usar nivel de corrección de errores H para códigos impresos.',
  },
  {
    title: 'Configuración incorrecta de la app',
    solution:
      'Busque en el menú de la app "Transferencia" → "Código QR". En algunas apps se encuentra en "Escanear".',
  },
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
              <li className="text-slate-400">GiroCode no funciona</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Solución de problemas · Resolver problemas de GiroCode
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode no funciona – 7 Causas y Soluciones
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
              Si un GiroCode no funciona, la causa suele ser un tamaño de impresión demasiado
              pequeño (tamaño mínimo: 2×2 cm), mala iluminación, reflejos en la pantalla o una app
              bancaria que no es compatible con el estándar EPC.
            </p>
          </div>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2>7 causas frecuentes &amp; soluciones</h2>

            <div className="not-prose space-y-3 mb-8">
              {problems.map((p, i) => (
                <div key={i} className="rounded-xl border border-[#1f2431] bg-[#0f1117] p-5">
                  <div className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#22c55e]/20 text-xs font-bold text-[#22c55e]">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="mb-1 text-sm font-bold text-slate-50">{p.title}</h3>
                      <p className="text-sm text-slate-400">Solución: {p.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p>
              La mayoría de los problemas de GiroCode se pueden resolver en pocos minutos. Si su
              app bancaria no es compatible con GiroCodes en absoluto, encontrará una{' '}
              <Link href="/es/wissen/banking-apps" className="text-[#22c55e] hover:underline">
                descripción general de todas las apps bancarias compatibles
              </Link>{' '}
              en nuestra sección de conocimiento.
            </p>

            <div className="not-prose my-8 flex flex-wrap gap-3">
              <Link
                href="/es"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#16a34a 0%,#15803d 100%)' }}
              >
                Volver a crear GiroCode →
              </Link>
              <Link
                href="/scanner"
                className="inline-flex items-center gap-2 rounded-xl border border-[#1f2431] px-6 py-3 text-sm font-bold text-slate-300 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-500/30"
              >
                Usar Escáner del Navegador →
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
                  { href: '/es/wissen/banking-apps', label: 'Resumen de apps bancarias' },
                  { href: '/es/girocode-scannen-anleitung', label: 'Cómo escanear un GiroCode' },
                  { href: '/es', label: 'Volver a crear GiroCode' },
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
