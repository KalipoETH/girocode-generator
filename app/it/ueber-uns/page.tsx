import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Chi Siamo – GiroCode Generator',
  description:
    'Il team dietro GiroCode Generator: strumento gratuito per la creazione di QR code SEPA. Sviluppato con passione per la privacy e la semplicità.',
  alternates: { canonical: `${SITE_URL}/it/ueber-uns` },
};

export default function AboutPageIt() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-12">
        <header className="mb-10 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Chi siamo
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Chi Siamo
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Il GiroCode Generator è uno strumento online gratuito sviluppato da Kaleb Jahnke – con
              la missione di rendere i pagamenti SEPA più semplici per tutti, gratuitamente e nel
              rispetto della privacy.
            </p>
          </div>
        </header>

        <section className="mb-10 space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            Missione
          </h2>
          <p className="text-sm text-slate-300 md:text-base">
            Rendere i pagamenti SEPA più semplici per tutti – gratuitamente e nel rispetto della
            privacy.
          </p>
        </section>

        <section className="mb-10 space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            Tecnologia
          </h2>
          <p className="text-sm text-slate-300 md:text-base">
            Il GiroCode Generator è costruito con{' '}
            <span className="font-medium text-slate-200">Next.js</span>,{' '}
            <span className="font-medium text-slate-200">pdf-lib</span> e{' '}
            <span className="font-medium text-slate-200">qrcode</span> – interamente client-side,
            senza backend per i dati di pagamento.
          </p>
        </section>

        <section className="mb-10 space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            Privacy
          </h2>
          <p className="text-sm text-slate-300 md:text-base">
            Tutti i dati vengono elaborati localmente nel tuo browser. IBAN, importi e dati di
            fatturazione non vengono mai trasmessi ai nostri server.
          </p>
        </section>

        <section className="mb-10 space-y-4">
          <h2 className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            La nostra competenza
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                icon: '🏦',
                title: 'Standard EPC',
                desc: 'Implementazione completa EPC069-12',
              },
              {
                icon: '🔒',
                title: 'Privacy',
                desc: 'GDPR-conforme, nessun salvataggio dati',
              },
              {
                icon: '🌍',
                title: 'Multilingue',
                desc: 'DE, EN, FR, ES, IT',
              },
              {
                icon: '⚡',
                title: 'Tecnologia',
                desc: 'Next.js 14, client-side, nessun backend',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#1f2431] bg-[#0f1117] p-4"
              >
                <div className="mb-2 text-2xl" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="mb-1 text-sm font-semibold text-slate-50">{item.title}</h3>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            Contatti
          </h2>
          <p className="text-sm text-slate-300 md:text-base">
            Domande, feedback o suggerimenti? Scrivici a{' '}
            <a
              href="mailto:jahnke.kaleb@gmail.com"
              className="text-sky-400 underline decoration-sky-500/70 underline-offset-2 hover:text-sky-300"
            >
              jahnke.kaleb@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
