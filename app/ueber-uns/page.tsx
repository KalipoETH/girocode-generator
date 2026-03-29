import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über uns – GiroCode Generator',
  description:
    'Wer steckt hinter dem GiroCode Generator? Das Projekt von Kaleb Jahnke aus Osterholz-Scharmbeck – kostenlos, lokal, datenschutzfreundlich.',
  alternates: { canonical: 'https://www.girocodegenerator.com/ueber-uns' },
};

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-12">
        <header className="mb-10 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Über dieses Projekt
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Über den GiroCode Generator
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Der GiroCode Generator ist ein kostenloses Online-Tool, das ich – Kaleb Jahnke aus
              Osterholz-Scharmbeck – entwickelt habe. Die Idee entstand aus einem einfachen
              Bedürfnis: Selbstständige und kleine Unternehmen brauchen eine einfache,
              datenschutzfreundliche Möglichkeit, SEPA-QR-Codes für ihre Rechnungen zu erstellen –
              ohne Registrierung, ohne Datenweitergabe, ohne Kosten.
            </p>
          </div>
        </header>

        <section className="mb-10 space-y-4">
          <h2 className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            Was uns besonders macht
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 shadow-sm shadow-black/30">
              <div className="mb-2 text-2xl" aria-hidden="true">
                💻
              </div>
              <h3 className="mb-1 text-sm font-semibold text-slate-50">100% lokal</h3>
              <p className="text-xs text-slate-300">
                Alle Berechnungen laufen direkt im Browser. Deine IBAN, Kontodaten und
                Rechnungsinformationen verlassen niemals deinen Computer.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 shadow-sm shadow-black/30">
              <div className="mb-2 text-2xl" aria-hidden="true">
                🔓
              </div>
              <h3 className="mb-1 text-sm font-semibold text-slate-50">
                Kostenlos &amp; ohne Registrierung
              </h3>
              <p className="text-xs text-slate-300">
                Kein Account, kein Abo, keine versteckten Kosten. Einfach öffnen und loslegen.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 shadow-sm shadow-black/30">
              <div className="mb-2 text-2xl" aria-hidden="true">
                ✅
              </div>
              <h3 className="mb-1 text-sm font-semibold text-slate-50">EPC/SEPA-konform</h3>
              <p className="text-xs text-slate-300">
                Der Generator erstellt GiroCodes exakt nach dem EPC-Standard (European Payments
                Council), kompatibel mit allen gängigen Banking-Apps.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            Für wen ist der GiroCode Generator?
          </h2>
          <p className="text-sm text-slate-300 md:text-base">
            Der GiroCode Generator richtet sich an alle, die Zahlungen einfacher und
            fehlertoleranter abwickeln möchten – ohne eigene technische Implementierung.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300 md:text-base">
            <li>Selbstständige &amp; Freelancer die Rechnungen mit QR-Code versenden möchten</li>
            <li>Kleine Unternehmen &amp; GmbHs</li>
            <li>Vereine die Mitgliedsbeiträge einziehen</li>
            <li>Privatpersonen die Geld anfordern möchten</li>
          </ul>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            Kontakt
          </h2>
          <p className="text-sm text-slate-300 md:text-base">
            Fragen, Feedback oder Fehler gefunden? Schreib mir gerne eine E-Mail an{' '}
            <a
              href="mailto:jahnke.kaleb@gmail.com"
              className="text-sky-400 underline decoration-sky-500/70 underline-offset-2 hover:text-sky-300"
            >
              jahnke.kaleb@gmail.com
            </a>
            .
          </p>
        </section>

        <p className="text-xs text-slate-500">
          Dieses Projekt wird kontinuierlich weiterentwickelt. Verbesserungsvorschläge sind
          herzlich willkommen.
        </p>
      </div>
    </main>
  );
}
