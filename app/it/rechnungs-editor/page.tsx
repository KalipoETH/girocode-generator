import type { Metadata } from 'next';
import { InvoiceEditor } from '../../rechnungs-editor/InvoiceEditor';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "L'editor fatture è gratuito?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sì, completamente gratuito senza abbonamento.',
      },
    },
    {
      '@type': 'Question',
      name: 'I miei dati vengono salvati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Tutto viene elaborato localmente nel browser.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso caricare il mio logo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sì, puoi caricare il tuo logo aziendale direttamente nell\'editor.',
      },
    },
  ],
};

const features = [
  'Editor Drag & Drop',
  'Logo & colori personalizzati',
  'Tutti gli elementi liberamente posizionabili',
  'GiroCode automaticamente integrato',
  'Download PDF immediato',
];

export const metadata: Metadata = {
  title: 'Editor Fatture con GiroCode – Crea Fatture PDF Gratis 2026',
  description:
    'Crea e personalizza fatture professionali con GiroCode integrato. Editor drag & drop, logo personalizzato, download PDF immediato. Gratis.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/it/rechnungs-editor',
  },
};

export default function InvoiceEditorPageIT() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <section className="border-b border-slate-800/60 bg-gradient-to-b from-emerald-950/20 to-transparent px-4 py-10 md:py-14">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
            <p className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/40">
              ✨ Nuovo · Editor Visuale
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl md:text-4xl">
              Editor Fatture con GiroCode
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Progetta la tua fattura individualmente – Drag & Drop, logo personalizzato, GiroCode
              integrato. Completamente gratis e locale nel browser.
            </p>
            <ul className="mt-2 flex flex-wrap items-center justify-center gap-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700/60 bg-slate-900/60 px-3 py-2 text-xs text-slate-200"
                >
                  <span className="text-emerald-400" aria-hidden>
                    ✅
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
          <InvoiceEditor locale="it" />
        </div>
      </main>
    </>
  );
}
