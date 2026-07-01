import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GiroCode vs. PayPal – ¿Qué método de pago es mejor? (2026)',
  description: '¿GiroCode o PayPal? Comparación directa: costes, privacidad, alcance y casos de uso. Con tabla comparativa.',
  alternates: {
    canonical: `${SITE_URL}/es/girocode-vs-paypal`,
    languages: {
      'x-default': `${SITE_URL}/girocode-vs-paypal`,
      'de': `${SITE_URL}/girocode-vs-paypal`,
      'en': `${SITE_URL}/en/girocode-vs-paypal`,
      'fr': `${SITE_URL}/fr/girocode-vs-paypal`,
      'es': `${SITE_URL}/es/girocode-vs-paypal`,
      'it': `${SITE_URL}/it/girocode-vs-paypal`,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Article', articleType: 'ComparisonArticle',
  headline: 'GiroCode vs. PayPal – ¿Qué método de pago es mejor?',
  description: '¿GiroCode o PayPal? Comparación directa: costes, privacidad, alcance y casos de uso.',
  author: { '@type': 'Person', name: 'Kaleb Jahnke' },
  publisher: { '@type': 'Organization', name: 'GiroCode Generator', url: SITE_URL },
  datePublished: '2026-05-01', dateModified: '2026-05-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/es/girocode-vs-paypal` },
};

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Cuánto cuesta GiroCode en comparación con PayPal?', acceptedAnswer: { '@type': 'Answer', text: 'GiroCode es completamente gratuito para el remitente y el beneficiario. PayPal cobra al beneficiario entre 1,2 y 3,4 % más una tarifa fija por transacción.' } },
    { '@type': 'Question', name: '¿Es GiroCode conforme al RGPD?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. GiroCode no procesa datos personales a través de terceros. La transferencia va directamente a través de tu propio banco sin servidores estadounidenses.' } },
    { '@type': 'Question', name: '¿Cuándo debería usar PayPal en lugar de GiroCode?', acceptedAnswer: { '@type': 'Answer', text: 'PayPal es mejor para pagos internacionales fuera de la zona SEPA, tiendas en línea con protección al comprador y pagos espontáneos a personas sin IBAN conocido.' } },
    { '@type': 'Question', name: '¿Puedo usar GiroCode en el extranjero?', acceptedAnswer: { '@type': 'Answer', text: 'GiroCode funciona en toda la zona SEPA (36 países). Para pagos fuera de SEPA, PayPal o SWIFT es la mejor opción.' } },
  ],
};

export default function GirocodeVsPaypalPageEs() {
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
              <li className="text-slate-400">GiroCode vs. PayPal</li>
            </ol>
          </nav>
          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />Comparación · Métodos de pago 2026
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">GiroCode vs. PayPal: La comparación directa (2026)</h1>
          </header>
          <div className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3" role="note">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">💡 Respuesta rápida</p>
            <p className="text-sm leading-relaxed text-slate-300">GiroCode es gratuito y conforme al RGPD para transferencias SEPA, mientras que PayPal cobra entre 1,2 y 3,4 % más una tarifa fija y transfiere datos a servidores estadounidenses. GiroCode es ideal para facturas y transferencias directas; PayPal, para pagos internacionales y tiendas en línea.</p>
          </div>
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { value: '0 €', label: 'Coste GiroCode para el beneficiario' },
              { value: '1,2–3,4%', label: 'Comisiones PayPal para el beneficiario' },
              { value: '36', label: 'Países SEPA con GiroCode' },
              { value: '100%', label: 'Conformidad RGPD GiroCode' },
            ].map((stat, i) => (
              <div key={i} className="rounded-lg border border-[#1f2431] bg-[#0f1117] p-4 text-center">
                <p className="text-2xl font-bold text-[#22c55e]">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-[#8b90a0]">{stat.label}</p>
              </div>
            ))}
          </div>
          <article className="prose prose-invert prose-lg max-w-none">
            <h2>Tabla comparativa: GiroCode vs. PayPal</h2>
            <div className="not-prose my-6 overflow-x-auto rounded-lg border border-slate-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 text-slate-300">
                    <th className="px-4 py-3 text-left font-medium">Criterio</th>
                    <th className="px-4 py-3 text-left font-medium text-[#22c55e]">GiroCode</th>
                    <th className="px-4 py-3 text-left font-medium text-slate-400">PayPal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50 text-slate-300">
                  {[
                    ['Coste beneficiario', 'Gratuito', '1,2–3,4 % + tarifa fija'],
                    ['Coste pagador', 'Gratuito', 'Gratuito (pago estándar)'],
                    ['Privacidad', 'Conforme RGPD, local', 'Empresa EE.UU., compartición datos'],
                    ['Registro requerido', 'Ninguno', 'Cuenta PayPal obligatoria'],
                    ['Alcance en Alemania', 'Todos los bancos SEPA', 'Muy extendido'],
                    ['Tipo de pago', 'Transferencia SEPA', 'Saldo PayPal / tarjeta'],
                    ['Protección comprador', 'No', 'Disponible'],
                    ['Ideal para', 'Facturas, B2B', 'Tiendas en línea, internacional'],
                  ].map(([c, g, p], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-slate-800/30' : ''}>
                      <td className="px-4 py-3 font-medium text-slate-200">{c}</td>
                      <td className="px-4 py-3 text-[#22c55e]">{g}</td>
                      <td className="px-4 py-3">{p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h2>¿Cuándo es mejor GiroCode?</h2>
            <ul>
              <li><strong>Facturas B2B:</strong> Sin comisiones, transferencia SEPA directa a tu cuenta empresarial.</li>
              <li><strong>Cuotas de asociaciones:</strong> Un solo código QR para todos los miembros, sin registro.</li>
              <li><strong>Pagos directos sin intermediarios:</strong> El dinero va directamente de banco a banco.</li>
              <li><strong>Entornos sensibles al RGPD:</strong> Sin compartición de datos con PayPal Inc.</li>
            </ul>
            <h2>¿Cuándo es mejor PayPal?</h2>
            <ul>
              <li><strong>Pagos internacionales:</strong> Fuera de la zona SEPA, GiroCode no tiene validez.</li>
              <li><strong>Tiendas en línea con protección al comprador:</strong> PayPal cubre la no entrega y defectos.</li>
              <li><strong>Pagos a desconocidos:</strong> Solo se necesita correo electrónico, no IBAN.</li>
              <li><strong>Pagos móviles instantáneos:</strong> Cómodo entre particulares sin datos bancarios.</li>
            </ul>
            <div className="not-prose my-4 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/40 px-4 py-3 text-sm leading-relaxed text-slate-300">
              <strong className="text-slate-100">Recomendación:</strong> Para empresas y freelancers alemanes, GiroCode es la alternativa gratuita y respetuosa con la privacidad a PayPal para facturas y transferencias SEPA. PayPal sigue siendo relevante para pagos internacionales y protección en e-commerce.
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
                  { href: '/es/girocode-vs-bankueberweisung', label: 'GiroCode vs. transferencia manual' },
                  { href: '/es/girocode-vs-lastschrift', label: 'GiroCode vs. domiciliación SEPA' },
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
