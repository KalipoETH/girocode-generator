import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode vs. transferencia manual – Ahorra tiempo y errores (2026)',
  description: '¿GiroCode o introducción manual de IBAN? Comparación de tiempo, tasa de error y facilidad de uso.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/girocode-vs-bankueberweisung',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/girocode-vs-bankueberweisung',
      'de': 'https://www.girocodegenerator.com/girocode-vs-bankueberweisung',
      'en': 'https://www.girocodegenerator.com/en/girocode-vs-bankueberweisung',
      'fr': 'https://www.girocodegenerator.com/fr/girocode-vs-bankueberweisung',
      'es': 'https://www.girocodegenerator.com/es/girocode-vs-bankueberweisung',
      'it': 'https://www.girocodegenerator.com/it/girocode-vs-bankueberweisung',
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Article', articleType: 'ComparisonArticle',
  headline: 'GiroCode vs. transferencia manual – Ahorra tiempo y errores',
  description: '¿GiroCode o introducción manual de IBAN? Comparación de tiempo, tasa de error y facilidad de uso.',
  author: { '@type': 'Person', name: 'Kaleb Jahnke' },
  publisher: { '@type': 'Organization', name: 'GiroCode Generator', url: 'https://www.girocodegenerator.com' },
  datePublished: '2026-05-01', dateModified: '2026-05-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.girocodegenerator.com/es/girocode-vs-bankueberweisung' },
};

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Cuánto más rápido es GiroCode que una transferencia manual?', acceptedAnswer: { '@type': 'Answer', text: 'Una transferencia manual con entrada de IBAN tarda 3–5 minutos. Con GiroCode, el proceso completo tarda menos de 30 segundos – 6–10 veces más rápido.' } },
    { '@type': 'Question', name: '¿Cuál es la tasa de error para la entrada manual de IBAN?', acceptedAnswer: { '@type': 'Answer', text: 'Para la entrada manual de secuencias numéricas largas como los IBAN, la tasa de error supera el 1 %. Con GiroCode, la tasa de error es del 0 %.' } },
    { '@type': 'Question', name: '¿Cuánto cuesta una devolución por IBAN incorrecto?', acceptedAnswer: { '@type': 'Answer', text: 'Una devolución bancaria generalmente cuesta entre 5 y 15 € más tiempo de resolución. La recuperación puede tardar varias semanas.' } },
    { '@type': 'Question', name: '¿El pagador necesita instalar una app para usar GiroCode?', acceptedAnswer: { '@type': 'Answer', text: 'No. El pagador usa simplemente su aplicación bancaria existente. Todas las grandes aplicaciones bancarias alemanas soportan GiroCode desde 2016.' } },
  ],
};

export default function GirocodeVsBankueberweisungPageEs() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
          <nav aria-label="Ruta de navegación" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li><Link href="/es" className="text-sky-400 hover:text-sky-300">Inicio</Link></li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">GiroCode vs. transferencia manual</li>
            </ol>
          </nav>
          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />Comparación · Métodos de pago 2026
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">GiroCode vs. transferencia bancaria manual: Por qué gana el QR</h1>
          </header>
          <div className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3" role="note">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">💡 Respuesta rápida</p>
            <p className="text-sm leading-relaxed text-slate-300">La introducción manual de IBAN tarda entre 3 y 5 minutos con una tasa de error superior al 1 % para IBANs alemanes de 22 dígitos. Con GiroCode, la transferencia tarda menos de 30 segundos y los errores tipográficos son imposibles.</p>
          </div>
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { value: '3–5 min.', label: 'Entrada IBAN manual' },
              { value: '< 30 seg.', label: 'Con GiroCode' },
              { value: '> 1%', label: 'Tasa de error manual' },
              { value: '0%', label: 'Tasa de error con GiroCode' },
            ].map((stat, i) => (
              <div key={i} className="rounded-lg border border-[#1f2431] bg-[#0f1117] p-4 text-center">
                <p className="text-2xl font-bold text-[#22c55e]">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-[#8b90a0]">{stat.label}</p>
              </div>
            ))}
          </div>
          <article className="prose prose-invert prose-lg max-w-none">
            <h2>Tabla comparativa</h2>
            <div className="not-prose my-6 overflow-x-auto rounded-lg border border-slate-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 text-slate-300">
                    <th className="px-4 py-3 text-left font-medium">Criterio</th>
                    <th className="px-4 py-3 text-left font-medium text-[#22c55e]">GiroCode</th>
                    <th className="px-4 py-3 text-left font-medium text-slate-400">Entrada manual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50 text-slate-300">
                  {[
                    ['Tiempo requerido', '< 30 segundos', '3–5 minutos'],
                    ['Errores tipográficos', 'Imposible', 'Frecuentes'],
                    ['Referencia de pago', 'Automática', 'A menudo olvidada'],
                    ['Facilidad de uso', 'Muy alta', 'Media'],
                    ['Profesionalismo', 'Muy alto', 'Estándar'],
                    ['Coste', 'Gratuito', 'Gratuito'],
                  ].map(([c, g, m], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-slate-800/30' : ''}>
                      <td className="px-4 py-3 font-medium text-slate-200">{c}</td>
                      <td className="px-4 py-3 text-[#22c55e]">{g}</td>
                      <td className="px-4 py-3">{m}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h2>Por qué los errores en los IBAN son tan costosos</h2>
            <ul>
              <li><strong>Gastos de devolución 5–15 €:</strong> Recuperar una transferencia mal dirigida cuesta dinero y puede tardar semanas.</li>
              <li><strong>Pérdida de tiempo:</strong> Las empresas dedican horas al año a resolver errores de pago.</li>
              <li><strong>Daño a la imagen:</strong> Los clientes contactados por errores pierden confianza en el profesionalismo del emisor.</li>
            </ul>
            <div className="not-prose my-8">
              <Link href="/es" className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: '#ffffff' }}>
                Crear GiroCode gratis →
              </Link>
            </div>
            <h2>FAQ</h2>
            <div className="space-y-6">
              {faqJsonLd.mainEntity.map((item, i) => (
                <div key={i}>
                  <h3 className="text-sm font-semibold text-slate-50">{item.name}</h3>
                  <p className="text-sm text-slate-300">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
            <div className="not-prose mt-10 rounded-2xl border border-[#1f2431] bg-[#0f1117] p-5">
              <div className="mb-4 flex items-center gap-3"><span className="text-xl" aria-hidden>📚</span><h2 className="text-base font-bold text-[#e8eaf0]">Más comparaciones</h2></div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { href: '/es/girocode-vs-paypal', label: 'GiroCode vs. PayPal' },
                  { href: '/es/girocode-vs-lastschrift', label: 'GiroCode vs. domiciliación SEPA' },
                  { href: '/es/wissen/girocode', label: '¿Qué es un GiroCode?' },
                  { href: '/es/wissen/iban-bic', label: 'IBAN & BIC explicados' },
                ].map((a) => (
                  <Link key={a.href} href={a.href} className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3.5 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/30 hover:text-[#e8eaf0] hover:-translate-y-0.5">
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
