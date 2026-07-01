import React from 'react';
import Link from 'next/link';
import { GeoStatsSection } from '../../components/GeoStatsSection';
import { it } from '../../lib/translations/it';
import NewsletterForm from '../../components/NewsletterForm';
import { GeneratorSection } from '@/components/GeneratorSection';
import { SITE_URL } from '@/lib/siteConfig';

export default function HomePageIt() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: it.seo.faq.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'GiroCode Generator',
            url: `${SITE_URL}/it`,
            description:
              'Generatore gratuito di GiroCode (SEPA-QR / EPC) – 100% locale nel browser, nessuna trasmissione dati. Include fattura PDF con QR incorporato.',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web Browser',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
            inLanguage: 'it',
          }),
        }}
      />

      <header className="relative overflow-hidden px-4 pb-20 pt-10 text-center sm:pt-20">
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6">
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {it.hero.badge}
          </p>
          <div className="space-y-2">
            <h1
              className="font-bold tracking-tight text-slate-50"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.1 }}
            >
              Generatore di Codici QR EPC – Gratis &amp; Immediato
            </h1>
            <p className="text-xl font-semibold md:text-2xl" style={{ color: '#22c55e' }}>
              QR SEPA &amp; Fattura PDF
            </p>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
            {it.hero.subtitle}
          </p>
          <a
            href="#generator"
            className="mt-2 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition duration-200 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              boxShadow: '0 0 24px rgba(34,197,94,0.35)',
            }}
          >
            Crea QR Code SEPA ora →
          </a>
        </div>
      </header>

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-4 gap-y-3 px-4 sm:grid-cols-4">
        {[
          { icon: '🔒', title: '100% Privacy', sub: 'Nessun dato condiviso' },
          { icon: '✅', title: 'Standard EPC', sub: 'Compatibile con tutte le app bancarie' },
          { icon: '⚡', title: 'Gratuito', sub: 'Senza abbonamento' },
          { icon: '🏦', title: 'Standard SEPA', sub: 'Riconosciuto da tutte le banche' },
        ].map((item) => (
          <div key={item.title} className="flex items-center gap-3 rounded-lg px-2 py-1">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <p className="text-[14px] font-bold text-[#e8eaf0]">{item.title}</p>
              <p className="text-[12px] text-[#8b90a0]">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-12 pt-8">
        <GeneratorSection locale="it" dividerLabel="Fattura PDF" />

        <GeoStatsSection locale="it" />

        <section className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5">
          <div>
            <h2 className="text-base font-semibold tracking-tight text-slate-50">{it.seo.howTitle}</h2>
            <p className="mt-2 text-sm text-slate-300">{it.seo.howText}</p>
          </div>
          <div>
            <h2 className="text-base font-semibold tracking-tight text-slate-50">{it.seo.faqTitle}</h2>
            <dl className="mt-3 flex flex-col gap-3">
              {it.seo.faq.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[12px] border-l-[3px] border-l-[#22c55e] bg-[#1a1d25] p-5"
                >
                  <dt className="font-semibold text-slate-100" style={{ fontSize: '15px' }}>
                    {item.q}
                  </dt>
                  <dd className="mt-1 text-xs leading-[1.7] text-[#9aa1b6]">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            Guide QR EPC in Italiano
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Generatore QR EPC', href: '/it/generatore-qr-epc' },
              { label: 'Codice QR SEPA Gratis', href: '/it/codice-qr-sepa-gratis' },
              { label: 'QR Code su Fattura', href: '/it/qr-code-fattura-sepa' },
              { label: 'Banche Italiane', href: '/it/banche-italiane-qr-epc' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3 transition-all hover:border-emerald-500/40 hover:bg-[#1a1d25]"
              >
                <span className="text-sm font-medium text-[#e8eaf0]">{link.label}</span>
                <span className="text-[#22c55e] transition-transform group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Tabella comparativa */}
        <section aria-labelledby="comparison-section-it" className="animate-card-in mt-8 space-y-4" style={{ animationDelay: '1.29s' }}>
          <h2 id="comparison-section-it" className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            GiroCode vs. altri metodi di pagamento
          </h2>
          <div className="overflow-x-auto rounded-xl border border-[#1f2431]">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-[#1f2431] bg-[#0f1117]">
                  <th className="px-4 py-3 font-semibold text-slate-300"></th>
                  <th className="px-4 py-3 font-semibold text-[#22c55e]">GiroCode</th>
                  <th className="px-4 py-3 font-semibold text-slate-300">PayPal</th>
                  <th className="px-4 py-3 font-semibold text-slate-300">Bonifico classico</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1f2431] bg-[#121318]">
                {[
                  ['Costo', 'Gratuito', '1,2–3,4 % di commissione', 'Gratuito'],
                  ['Velocità', 'Scansione immediata (10 sec.)', 'Immediato', '1–2 giorni lavorativi'],
                  ['Privacy', 'GDPR, locale', 'Server USA', 'GDPR'],
                  ['App bancaria necessaria', 'Sì', 'No', 'Sì'],
                  ['Errori possibili', 'No (automatico)', 'Raramente', 'Sì (errori di digitazione)'],
                  ['Utilizzabile offline', 'Sì', 'No', 'No'],
                ].map(([label, girocode, paypal, classic]) => (
                  <tr key={label} className="hover:bg-[#1a1d25] transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-400">{label}</td>
                    <td className="px-4 py-3 font-semibold text-[#22c55e]">{girocode}</td>
                    <td className="px-4 py-3 text-slate-400">{paypal}</td>
                    <td className="px-4 py-3 text-slate-400">{classic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <NewsletterForm locale="it" />
    </main>
  );
}
