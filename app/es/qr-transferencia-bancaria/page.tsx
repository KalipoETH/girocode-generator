import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'QR Code Transferencia Bancaria SEPA – Crear Gratis 2026',
  description:
    'Crea un código QR para transferencia bancaria SEPA en segundos. Estándar EPC069-12. Gratis y sin registro.',
  alternates: {
    canonical: `${SITE_URL}/es/qr-transferencia-bancaria`,
    languages: {
      'x-default': `${SITE_URL}/qr-code-ueberweisung`,
      de: `${SITE_URL}/qr-code-ueberweisung`,
      es: `${SITE_URL}/es/qr-transferencia-bancaria`,
    },
  },
};

const faqs = [
  {
    q: '¿Qué es un QR code de transferencia bancaria?',
    a: 'Es un código QR que pre-rellena una transferencia SEPA en tu app bancaria. Contiene el IBAN, nombre del beneficiario, importe y concepto según la norma EPC069-12.',
  },
  {
    q: '¿Cómo crear un QR para transferencia bancaria?',
    a: 'Introduce el IBAN y el nombre del beneficiario en nuestro generador, añade opcionalmente el importe y el concepto, y haz clic en Generar. El código QR está listo en segundos.',
  },
  {
    q: '¿Es gratuito?',
    a: 'Sí, completamente gratis y sin registro. Todos los datos permanecen en tu navegador.',
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
  { value: 'EPC069-12', label: 'Norma EPC' },
  { value: '10 seg.', label: 'Creación' },
  { value: '100%', label: 'Gratis' },
];

const relatedLinks = [
  { href: '/es/generador-qr-sepa', label: 'Generador QR Code SEPA' },
  { href: '/es/epc-qr-code', label: 'Código QR EPC' },
  { href: '/es/iban-qr-code', label: 'QR Code IBAN' },
  { href: '/es/wissen/girocode', label: '¿Qué es un GiroCode?' },
];

export default function QrTransferenciaBancariaEsPage() {
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
              <li className="text-slate-400">QR Transferencia Bancaria SEPA</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Transferencia SEPA · QR Code
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              QR Code Transferencia Bancaria SEPA – Crear Gratis
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
              Un QR code de transferencia bancaria permite pre-rellenar una transferencia SEPA con
              un simple escaneo. Compatible con CaixaBank, BBVA, Santander y todas las apps
              bancarias SEPA en España y Europa.
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
            <h2>QR code transferencia bancaria – ¿cómo funciona?</h2>
            <p>
              En lugar de introducir manualmente el IBAN, el importe y el concepto, el pagador
              simplemente escanea un <strong>QR code de transferencia bancaria</strong>. Su app
              bancaria abre un formulario de transferencia pre-rellenado – solo queda confirmar.
            </p>
            <p>
              Este QR code sigue la norma <strong>EPC069-12</strong> y funciona en los 36 países
              SEPA. Ideal para facturas, donaciones, ventas entre particulares y asociaciones.
            </p>

            <h2>Ventajas del QR code transferencia</h2>
            <ul>
              <li>Pagos más rápidos – se acabaron los errores al escribir el IBAN</li>
              <li>Facturas profesionales con QR code integrado</li>
              <li>Compatible con todas las apps bancarias europeas</li>
              <li>Gratis, sin registro, 100% local</li>
            </ul>

            <div className="not-prose my-8">
              <Link
                href="/es"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
              >
                Crear QR transferencia bancaria →
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
