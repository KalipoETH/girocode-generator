import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Generador QR Code SEPA – Gratis & Al Instante 2026',
  description:
    'Crea códigos QR SEPA (EPC/GiroCode) gratis. Compatible con todas las apps bancarias europeas. Sin registro.',
  alternates: {
    canonical: `${SITE_URL}/es/generador-qr-sepa`,
    languages: {
      'x-default': `${SITE_URL}/sepa-qr-code`,
      de: `${SITE_URL}/sepa-qr-code`,
      es: `${SITE_URL}/es/generador-qr-sepa`,
    },
  },
};

const faqs = [
  {
    q: '¿Qué es un código QR SEPA?',
    a: 'Un código QR SEPA es un código QR estandarizado para transferencias SEPA según la norma EPC069-12. Contiene el IBAN, nombre del beneficiario, importe y concepto de pago en formato legible por apps bancarias.',
  },
  {
    q: '¿Es lo mismo que GiroCode?',
    a: 'Sí. Código QR SEPA, GiroCode y código QR EPC designan la misma norma EPC069-12. GiroCode es el nombre alemán, código QR SEPA es el término funcional en español.',
  },
  {
    q: '¿Qué apps bancarias lo soportan?',
    a: 'Todas las principales apps bancarias europeas: CaixaBank, BBVA, Santander, Revolut, N26, ING y cientos más en los 36 países SEPA.',
  },
  {
    q: '¿El generador es gratuito?',
    a: 'Sí, completamente gratis. Sin registro, sin costes ocultos. Todos los datos se procesan localmente en tu navegador.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const stats = [
  { value: '36', label: 'Países SEPA' },
  { value: 'EPC069-12', label: 'Norma oficial' },
  { value: '10 seg.', label: 'Tiempo de creación' },
  { value: '100%', label: 'Gratis' },
];

const relatedLinks = [
  { href: '/es/qr-transferencia-bancaria', label: 'QR Transferencia Bancaria SEPA' },
  { href: '/es/sepa-qr-code', label: 'Generador SEPA QR Code' },
  { href: '/es/wissen/girocode', label: '¿Qué es un GiroCode?' },
  { href: '/es/wissen/epc-standard', label: 'Estándar EPC explicado' },
];

export default function GeneradorQrSepaEsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
          <nav aria-label="Miga de pan" className="mb-6 text-xs text-slate-500">
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

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              EPC069-12 · Transferencia SEPA
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              Generador de Código QR SEPA Gratuito
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
              Un código QR SEPA es un código QR estandarizado para transferencias bancarias en la
              zona SEPA. Pre-rellena automáticamente el formulario de transferencia en tu app
              bancaria – IBAN, nombre, importe y concepto incluidos.
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
            <h2>¿Qué es un código QR SEPA?</h2>
            <p>
              Un <strong>código QR SEPA</strong> contiene toda la información necesaria para una
              transferencia SEPA: IBAN, nombre del beneficiario, importe y concepto de pago. Sigue
              la norma <strong>EPC069-12</strong> del Consejo Europeo de Pagos y es reconocido
              por todas las apps bancarias de la zona SEPA.
            </p>

            <h2>Código QR SEPA vs. GiroCode – mismo estándar, nombres diferentes</h2>
            <p>
              En España se habla de <strong>código QR SEPA</strong> o <strong>código QR
              EPC</strong>. En Alemania, el mismo estándar se llama <strong>GiroCode</strong>. En
              Austria, <strong>Stuzza QR Code</strong>. Todos producen códigos QR idénticos según
              EPC069-12.
            </p>

            <h2>Cómo crear un código QR SEPA</h2>
            <ol>
              <li>Introduce el IBAN y el nombre del beneficiario</li>
              <li>Añade opcionalmente el importe y el concepto</li>
              <li>Haz clic en Generar – el código QR aparece al instante</li>
              <li>Descarga en PNG o intégralo en tu factura PDF</li>
            </ol>

            <div className="not-prose my-8">
              <Link
                href="/es"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
              >
                Crear código QR SEPA ahora →
              </Link>
            </div>

            <h2>FAQ</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-base font-semibold text-[#e8eaf0]">{faq.q}</h3>
                  <p className="mt-1 text-sm text-slate-300">{faq.a}</p>
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
                {relatedLinks.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3.5 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/30 hover:text-[#e8eaf0] hover:-translate-y-0.5"
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
