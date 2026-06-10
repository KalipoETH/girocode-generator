import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Generador BezahlCode – Crear gratis (= GiroCode)',
  description:
    'Crear BezahlCode (ahora GiroCode) gratis: El nombre antiguo para los códigos QR SEPA. Genera tu BezahlCode/GiroCode en 10 segundos – sin registro.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/bezahlcode',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/bezahlcode',
      de: 'https://www.girocodegenerator.com/bezahlcode',
      en: 'https://www.girocodegenerator.com/en/bezahlcode',
      fr: 'https://www.girocodegenerator.com/fr/bezahlcode',
      es: 'https://www.girocodegenerator.com/es/bezahlcode',
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre BezahlCode y GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No hay ninguna diferencia técnica. BezahlCode es el nombre alemán más antiguo para el mismo código QR SEPA. Desde 2018, el término GiroCode se utiliza como denominación oficial del Consejo Europeo de Pagos (EPC). Ambos términos describen exactamente el mismo formato siguiendo la norma EPC069-12.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo seguir usando un BezahlCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, absolutamente. Como BezahlCode y GiroCode son técnicamente idénticos y ambos siguen la norma EPC069-12, un BezahlCode funciona exactamente como un GiroCode. Todas las aplicaciones bancarias que soportan GiroCodes también reconocen BezahlCodes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué aplicaciones soportan BezahlCode/GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Todas las principales aplicaciones bancarias alemanas soportan BezahlCode/GiroCode: Sparkasse, ING, DKB, Volksbank, Commerzbank, Deutsche Bank, N26, Postbank, Comdirect y Targobank. Como el código QR se basa en la norma europea EPC, funciona en los 36 países SEPA.',
      },
    },
  ],
};

const stats = [
  { value: '2018', label: 'BezahlCode se convirtió en GiroCode' },
  { value: 'EPC069-12', label: 'Norma común' },
  { value: '10 seg.', label: 'Tiempo de creación' },
  { value: '100%', label: 'Gratuito' },
];

const bankingApps = [
  'Sparkasse', 'ING', 'DKB', 'Volksbank', 'Commerzbank',
  'Deutsche Bank', 'N26', 'Postbank', 'Comdirect', 'Targobank',
];

const relatedLinks = [
  { href: '/es/sepa-qr-code', label: 'Generador QR Code SEPA' },
  { href: '/es/epc-qr-code', label: 'Generador EPC QR Code' },
  { href: '/es/wissen/girocode', label: '¿Qué es un GiroCode?' },
  { href: '/es', label: 'Crear GiroCode gratis' },
];

export default function BezahlcodeEsPage() {
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
              <li className="text-slate-400">Generador BezahlCode</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Nombres alternativos · GiroCode / BezahlCode
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              Generador BezahlCode – Gratis &amp; Al Instante
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
              BezahlCode es el nombre alemán más antiguo de lo que ahora se llama oficialmente
              GiroCode (código QR SEPA). Desde 2018, el término BezahlCode fue reemplazado por el
              término oficial EPC GiroCode. Ambos se refieren a la misma norma: EPC069-12 del
              Consejo Europeo de Pagos.
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

            <h2>BezahlCode = GiroCode: Misma norma, nombre diferente</h2>
            <p>
              Cualquiera que busque un generador BezahlCode está buscando esencialmente lo mismo
              que un generador GiroCode, porque BezahlCode y GiroCode son técnicamente idénticos.
              Ambos se refieren a un código QR estandarizado para transferencias SEPA, construido
              según la <strong>norma EPC069-12</strong> del Consejo Europeo de Pagos.
            </p>
            <p>
              El término <em>BezahlCode</em> surgió en Alemania como un nombre de marketing
              temprano para este tipo de código QR. Los bancos y los proveedores de servicios de
              pago lo utilizaban para ofrecer a sus clientes una forma sencilla de compartir datos
              de transferencia mediante código QR. Con la creciente estandarización a nivel europeo,
              el término <em>GiroCode</em> se estableció como nombre oficial.
            </p>

            <h2>¿Cuándo BezahlCode se convirtió en GiroCode?</h2>
            <p>
              En <strong>2018</strong>, el Consejo Europeo de Pagos (EPC) estandarizó oficialmente
              el formato bajo el nombre <em>GiroCode</em>. La especificación técnica EPC069-12
              definió cómo se deben codificar los datos de pago SEPA en un código QR, incluyendo
              el IBAN, el nombre del beneficiario, el importe opcional y la referencia de pago.
            </p>
            <p>
              El cambio de nombre formó parte de la iniciativa más amplia de armonización de los
              pagos SEPA en Europa. Desde entonces, GiroCode es el término oficial en toda la UE
              y en los 36 países SEPA. Sin embargo, en las aplicaciones bancarias alemanas, el
              término BezahlCode todavía aparece frecuentemente en la documentación de ayuda por
              razones históricas.
            </p>
            <p>
              Un código QR generado con este generador cumple al 100% con la norma EPC069-12 y
              funciona independientemente de si se llama BezahlCode o GiroCode.
            </p>

            <h2>Aplicaciones bancarias que soportan BezahlCode/GiroCode</h2>
            <p>
              Todos los grandes bancos alemanes soportan la norma BezahlCode/GiroCode en sus
              aplicaciones móviles. Como es el mismo código QR, un código QR generado funciona con
              todas las siguientes aplicaciones:
            </p>
            <ul>
              {bankingApps.map((app) => (
                <li key={app}>{app}</li>
              ))}
            </ul>
            <p>
              Los bancos austriacos (p. ej. Erste Bank, Raiffeisen, BAWAG), los bancos suizos y
              todos los demás bancos del espacio SEPA también soportan esta norma. En total, más de
              36 países europeos son compatibles.
            </p>

            {/* CTA */}
            <div className="not-prose my-8">
              <Link
                href="/es"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
              >
                Crear BezahlCode / GiroCode →
              </Link>
            </div>

            <h2>FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  ¿Cuál es la diferencia entre BezahlCode y GiroCode?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  No hay ninguna diferencia técnica. BezahlCode es el nombre alemán más antiguo
                  para el mismo código QR SEPA. Desde 2018, el término GiroCode se utiliza como
                  denominación oficial del Consejo Europeo de Pagos (EPC). Ambos términos
                  describen exactamente el mismo formato siguiendo la norma EPC069-12.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  ¿Puedo seguir usando un BezahlCode?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Sí, absolutamente. Como BezahlCode y GiroCode son técnicamente idénticos y ambos
                  siguen la norma EPC069-12, un BezahlCode funciona exactamente como un GiroCode.
                  Todas las aplicaciones bancarias que soportan GiroCodes también reconocen
                  BezahlCodes; el código QR en sí no contiene ninguna etiqueta.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  ¿Qué aplicaciones soportan BezahlCode/GiroCode?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Todas las principales aplicaciones bancarias alemanas soportan
                  BezahlCode/GiroCode: Sparkasse, ING, DKB, Volksbank, Commerzbank, Deutsche Bank,
                  N26, Postbank, Comdirect y Targobank. Como el código QR se basa en la norma
                  europea EPC, funciona en los 36 países SEPA.
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
