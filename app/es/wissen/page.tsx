import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Información sobre GiroCode y SEPA-QR',
  description:
    'Conceptos básicos sobre GiroCodes, el estándar EPC y IBAN/BIC – la sección de información de girocodegenerator.com.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/wissen',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen',
      'de': 'https://www.girocodegenerator.com/wissen',
      'en': 'https://www.girocodegenerator.com/en/wissen',
      'fr': 'https://www.girocodegenerator.com/fr/wissen',
      'es': 'https://www.girocodegenerator.com/es/wissen',
    },
  },
};

const knowledgePages = [
  {
    href: '/es/wissen/girocode',
    title: '¿Qué es un GiroCode?',
    description: 'Conceptos básicos, funcionamiento y ventajas del código SEPA-QR / EPC.',
  },
  {
    href: '/es/wissen/epc-standard',
    title: 'Estándar EPC y SEPA-QR',
    description: 'Estructura técnica del payload EPC explicada de forma sencilla.',
  },
  {
    href: '/es/wissen/iban-bic',
    title: 'IBAN y BIC en el GiroCode',
    description: 'Qué datos debes introducir para pagos SEPA sin errores.',
  },
  {
    href: '/es/wissen/betrag-und-zweck',
    title: 'Importe y concepto de pago',
    description:
      'Cómo definir el importe y el concepto de pago para que los cobros se puedan conciliar fácilmente.',
  },
  {
    href: '/es/wissen/rechnung',
    title: 'GiroCode en facturas',
    description: 'Cómo integrar un GiroCode en tus facturas sin perder información legal.',
  },
  {
    href: '/es/wissen/banking-apps',
    title: 'Apps bancarias compatibles',
    description:
      'Resumen de las apps bancarias que admiten códigos GiroCode / SEPA-QR y consejos para escanear.',
  },
  {
    href: '/es/wissen/scannen',
    title: 'Cómo escanear un GiroCode',
    description:
      'Guía paso a paso para escanear códigos GiroCode con la app de tu banco.',
  },
];

export default function WissenOverviewPageEs() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-5xl px-4 py-10 md:py-12">
        <header className="mb-8 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Información · GiroCode y SEPA-QR
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Más información sobre GiroCode y SEPA-QR
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              En esta sección encontrarás explicaciones breves sobre qué es un GiroCode, cómo
              funciona el estándar EPC y qué papel juegan IBAN y BIC.
            </p>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {knowledgePages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group rounded-xl border border-slate-800 bg-slate-900/40 p-4 transition hover:border-sky-500/60 hover:bg-slate-900/80"
            >
              <h2 className="mb-1 text-base font-semibold text-slate-50 group-hover:text-sky-300">
                {page.title}
              </h2>
              <p className="text-sm text-slate-400">{page.description}</p>
              <span className="mt-3 inline-flex items-center text-xs font-medium text-sky-400">
                Más información
                <span className="ml-1 text-[10px]">↗</span>
              </span>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}

