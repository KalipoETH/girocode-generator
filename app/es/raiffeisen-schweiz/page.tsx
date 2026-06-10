import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode con Raiffeisen Schweiz – Guía paso a paso 2026',
  description:
    'Escanear un GiroCode con Raiffeisen Schweiz: Abrir escáner QR en la app Raiffeisen e-banking App, escanear el código, confirmar la transferencia. ✅ Guía paso a paso 2026.',
  keywords: 'girocode raiffeisen-schweiz, raiffeisen-schweiz girocode scan, raiffeisen-schweiz qr code, sepa qr raiffeisen-schweiz',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/raiffeisen-schweiz',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/raiffeisen-schweiz',
      de: 'https://www.girocodegenerator.com/raiffeisen-schweiz',
      en: 'https://www.girocodegenerator.com/en/raiffeisen-schweiz',
      fr: 'https://www.girocodegenerator.com/fr/raiffeisen-schweiz',
      es: 'https://www.girocodegenerator.com/es/raiffeisen-schweiz',
    },
  },
};

const otherBanks = [
  { href: '/ubs', label: 'UBS' },
  { href: '/zuercher-kantonalbank', label: 'Zürcher Kantonalbank' },
  { href: '/postfinance', label: 'PostFinance' },
  { href: '/credit-suisse-ubs', label: 'Credit Suisse (now UBS)' },
  { href: '/cantonal-banks', label: 'Cantonal Banks' },
  { href: '/sparkasse', label: 'Sparkasse (Germany)' },
  { href: '/volksbank', label: 'Volksbank / VR-Banking' },
];

const faqItems = [
  {
    question: '¿La app Raiffeisen e-banking App soporta todos los GiroCodes?',
    answer:
      'Sí, la app Raiffeisen e-banking App reconoce todos los códigos QR SEPA conformes EPC (GiroCodes). Asegúrate de tener la app actualizada. Comprueba la App Store o Google Play.',
  },
  {
    question: '¿Dónde encuentro el escáner QR en la app Raiffeisen e-banking App?',
    answer:
      'El escáner QR está bajo «Pagos» – busca el icono de cámara. Tócalo para abrir la vista de escaneo.',
  },
  {
    question: '¿Qué hago si el escaneo no funciona?',
    answer:
      'Aumenta el brillo de pantalla para escanear códigos digitales. Mantén la cámara a 15–30 cm del código con buena iluminación. Para códigos impresos, usa papel liso sin arrugas.',
  },
  {
    question: '¿Es seguro el escaneo de GiroCode?',
    answer:
      'Sí. Siempre ves todos los datos de la transferencia antes de confirmar. La confirmación requiere PhotoTAN o biometría. El código en sí no contiene datos sensibles que puedan ser mal utilizados.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function RaiffeisenSchweizEsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/es" className="text-sky-400 hover:text-sky-300">Inicio</Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">Raiffeisen Schweiz</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="mb-10 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Compatible con Raiffeisen e-banking App
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              Escanear GiroCode con Raiffeisen Schweiz
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              Cómo usar GiroCodes (códigos QR SEPA) con Raiffeisen Schweiz – paso a paso. Listo en menos de 30 segundos.
            </p>
          </header>

          <article className="prose prose-invert prose-lg max-w-none">

            {/* Steps */}
            <section aria-labelledby="steps">
              <h2 id="steps">Guía paso a paso</h2>
              <p>La app Raiffeisen e-banking App de Raiffeisen Schweiz tiene un escáner GiroCode integrado. Así se usa:</p>
              <ol>
                <li dangerouslySetInnerHTML={{ __html: '<strong>Abrir la app Raiffeisen e-banking App</strong> e iniciar sesión con PIN, huella digital o Face ID.' }} />
                <li dangerouslySetInnerHTML={{ __html: '<strong>Pulsar «Pagos»</strong> en el menú.' }} />
                <li dangerouslySetInnerHTML={{ __html: '<strong>Pulsar el icono escáner QR</strong> (icono cámara). Conceder permiso de cámara en el primer uso.' }} />
                <li dangerouslySetInnerHTML={{ __html: '<strong>Escanear el GiroCode</strong> – mantener la cámara a 15–30 cm del código. La app lo reconoce automáticamente.' }} />
                <li dangerouslySetInnerHTML={{ __html: '<strong>Verificar los datos:</strong> Nombre del beneficiario, IBAN, importe y referencia se rellenan automáticamente. ¡Siempre comprobar antes de confirmar!' }} />
                <li dangerouslySetInnerHTML={{ __html: '<strong>Confirmar la transferencia</strong> con PhotoTAN o biometría. Listo.' }} />
              </ol>
              <p dangerouslySetInnerHTML={{ __html: '<strong>Consejo:</strong> Al escanear pantallas, ajusta el brillo al máximo. Para códigos impresos, asegúrate de buena iluminación. Mantén la cámara estable.' }} />
            </section>

            {/* Browser Scanner */}
            <section aria-labelledby="browser-scanner" className="mt-10">
              <h2 id="browser-scanner">Escanear GiroCode en el navegador</h2>
              <p>¿Sin acceso a tu app bancaria o quieres leer un GiroCode en tu ordenador? Nuestro escáner de navegador gratuito lee GiroCodes directamente en el navegador – sin app, sin instalación, 100% local.</p>
              <p>Muestra todos los datos del código: IBAN, nombre del beneficiario, importe y referencia de pago – ideal para verificar antes de introducir la transferencia manualmente.</p>
              <div className="not-prose mt-4">
                <Link
                  href="/es/scanner"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,197,94,0.4)]"
                  style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: '#ffffff' }}
                >
                  Escanear GiroCode →
                </Link>
              </div>
            </section>

            {/* Create GiroCode */}
            <section aria-labelledby="create" className="mt-10">
              <h2 id="create">Crear tu propio GiroCode</h2>
              <p>¿Quieres crear un GiroCode para tu factura o solicitud de pago? Nuestro generador GiroCode gratuito crea un código QR SEPA conforme EPC directamente en el navegador – sin registro, sin compartir datos, descargable al instante.</p>
              <div className="not-prose mt-4">
                <Link
                  href="/es"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,197,94,0.4)]"
                  style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: '#ffffff' }}
                >
                  Crear GiroCode gratis →
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section aria-labelledby="faq" className="mt-10">
              <h2 id="faq">FAQ – GiroCode con Raiffeisen Schweiz</h2>
              <div className="not-prose space-y-4">
                {faqItems.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-xl border border-slate-700 bg-slate-900/60 px-5 py-4"
                  >
                    <h3 className="mb-2 text-sm font-bold text-[#e8eaf0]">{item.question}</h3>
                    <p className="text-sm text-slate-400">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>

          </article>

          {/* More Banking Apps */}
          <div className="mt-12 border-t border-slate-800 pt-8">
            <h2 className="mb-4 text-base font-bold text-[#e8eaf0]">Más aplicaciones bancarias</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {otherBanks.map((bank) => (
                <Link
                  key={bank.href}
                  href={'/es' + bank.href}
                  className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:text-[#e8eaf0] hover:-translate-y-0.5"
                >
                  <span>GiroCode con {bank.label}</span>
                  <span className="ml-2 text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
