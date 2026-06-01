import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode vs. domiciliación SEPA – Diferencias y casos de uso (2026)',
  description: '¿GiroCode o domiciliación SEPA? Cuándo cada método es la mejor opción. Con tabla comparativa y ejemplos concretos.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/girocode-vs-lastschrift',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/girocode-vs-lastschrift',
      'de': 'https://www.girocodegenerator.com/girocode-vs-lastschrift',
      'en': 'https://www.girocodegenerator.com/en/girocode-vs-lastschrift',
      'fr': 'https://www.girocodegenerator.com/fr/girocode-vs-lastschrift',
      'es': 'https://www.girocodegenerator.com/es/girocode-vs-lastschrift',
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Article', articleType: 'ComparisonArticle',
  headline: 'GiroCode vs. domiciliación SEPA – Diferencias y casos de uso',
  description: '¿GiroCode o domiciliación SEPA? Cuándo cada método es la mejor opción.',
  author: { '@type': 'Person', name: 'Kaleb Jahnke' },
  publisher: { '@type': 'Organization', name: 'GiroCode Generator', url: 'https://www.girocodegenerator.com' },
  datePublished: '2026-05-01', dateModified: '2026-05-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.girocodegenerator.com/es/girocode-vs-lastschrift' },
};

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Cuál es la diferencia entre GiroCode y domiciliación SEPA?', acceptedAnswer: { '@type': 'Answer', text: 'GiroCode es una solicitud de pago: el pagador transfiere activamente. La domiciliación SEPA es una autorización de cargo: el beneficiario cobra el dinero. GiroCode no requiere mandato y es de uso inmediato.' } },
    { '@type': 'Question', name: '¿Necesito un mandato SEPA para GiroCode?', acceptedAnswer: { '@type': 'Answer', text: 'No. GiroCode no necesita mandato ya que el pagador transfiere activamente. La domiciliación SEPA requiere una autorización escrita (mandato SEPA) del pagador.' } },
    { '@type': 'Question', name: '¿Se puede revertir una domiciliación SEPA?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Las domiciliaciones SEPA se pueden revertir en un plazo de 8 semanas sin dar razones. Para cargos no autorizados, el plazo es de hasta 13 meses. Los GiroCodes no se pueden revertir ya que son transferencias.' } },
    { '@type': 'Question', name: '¿Cuánto cuesta una domiciliación SEPA en comparación con GiroCode?', acceptedAnswer: { '@type': 'Answer', text: 'Las domiciliaciones SEPA cuestan al beneficiario entre 0,20 y 0,35 € por cobro según el banco. GiroCode es completamente gratuito para ambas partes.' } },
  ],
};

export default function GirocodeVsLastschriftPageEs() {
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
              <li className="text-slate-400">GiroCode vs. domiciliación SEPA</li>
            </ol>
          </nav>
          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />Comparación · Métodos de pago 2026
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">GiroCode vs. domiciliación SEPA: La diferencia</h1>
          </header>
          <div className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3" role="note">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">💡 Respuesta rápida</p>
            <p className="text-sm leading-relaxed text-slate-300">GiroCode es una solicitud de pago: el pagador transfiere activamente. La domiciliación SEPA es una autorización de cargo: el beneficiario cobra el dinero. GiroCode no requiere mandato y es de uso inmediato, mientras que las domiciliaciones requieren un mandato SEPA firmado.</p>
          </div>
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { value: '0 €', label: 'GiroCode por transacción' },
              { value: '0,20–0,35 €', label: 'Domiciliación por cobro' },
              { value: 'Ningún', label: 'Mandato requerido GiroCode' },
              { value: '8 sem.', label: 'Plazo devolución domiciliación' },
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
                    <th className="px-4 py-3 text-left font-medium text-slate-400">Domiciliación SEPA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50 text-slate-300">
                  {[
                    ['Iniciación del pago', 'Pagador (activo)', 'Beneficiario (pasivo)'],
                    ['Mandato requerido', 'No', 'Sí (por escrito)'],
                    ['Disponible inmediatamente', 'Sí', 'No (necesita mandato)'],
                    ['Devolución posible', 'No', 'Sí (hasta 8 semanas)'],
                    ['Ideal para', 'Pagos únicos', 'Pagos recurrentes'],
                    ['Coste', 'Gratuito', '0,20–0,35 € por cobro'],
                  ].map(([c, g, d], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-slate-800/30' : ''}>
                      <td className="px-4 py-3 font-medium text-slate-200">{c}</td>
                      <td className="px-4 py-3 text-[#22c55e]">{g}</td>
                      <td className="px-4 py-3">{d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h2>¿Cuándo es mejor GiroCode?</h2>
            <ul>
              <li><strong>Facturas únicas:</strong> Perfecto para freelancers, artesanos y empresas con facturación individual.</li>
              <li><strong>Nuevos clientes sin mandato:</strong> Sin tiempo de espera – GiroCode funciona sin acuerdo previo.</li>
              <li><strong>Pagos espontáneos:</strong> Recaudaciones de donaciones, pedidos grupales o cuotas de eventos.</li>
            </ul>
            <h2>¿Cuándo es mejor la domiciliación?</h2>
            <ul>
              <li><strong>Suscripciones mensuales:</strong> Streaming, licencias de software o seguros – un mandato, luego automático.</li>
              <li><strong>Cuotas de asociaciones:</strong> Importes regulares y fijos sin esfuerzo para los miembros.</li>
              <li><strong>Pagos recurrentes:</strong> Alquiler, cuotas, tarifas de servicio mensuales.</li>
            </ul>
            <div className="not-prose my-4 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/40 px-4 py-3 text-sm leading-relaxed text-slate-300">
              <strong className="text-slate-100">Conclusión:</strong> GiroCode y domiciliación se complementan. Para facturas únicas, GiroCode es la solución más rápida y económica sin tiempo de espera. Para pagos recurrentes, la domiciliación ofrece automatización una vez establecido el mandato.
            </div>
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
                  { href: '/es/girocode-vs-bankueberweisung', label: 'GiroCode vs. transferencia manual' },
                  { href: '/es/wissen/girocode', label: '¿Qué es un GiroCode?' },
                  { href: '/es/wissen/banking-apps', label: 'Apps bancarias con GiroCode' },
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
