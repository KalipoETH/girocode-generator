import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SEPA QR Code Generator – Kostenlos erstellen 2026',
  description:
    'SEPA QR Code (GiroCode/EPC-QR) kostenlos erstellen: IBAN eingeben, QR-Code generieren, fertig. Kompatibel mit allen Banking-Apps. Ohne Anmeldung.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/sepa-qr-code',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/sepa-qr-code',
      de: 'https://www.girocodegenerator.com/sepa-qr-code',
      en: 'https://www.girocodegenerator.com/en/sepa-qr-code',
      fr: 'https://www.girocodegenerator.com/fr/sepa-qr-code',
      es: 'https://www.girocodegenerator.com/es/sepa-qr-code',
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist ein SEPA QR Code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ein SEPA QR Code (auch GiroCode, EPC-QR-Code oder BezahlCode) ist ein standardisierter QR-Code für SEPA-Überweisungen nach dem EPC069-12 Standard des European Payments Council. Er enthält alle Zahlungsdaten wie IBAN, Empfängername, optionalen Betrag und Verwendungszweck in maschinenlesbarer Form.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie erstelle ich einen SEPA QR Code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Das Erstellen eines SEPA QR Codes ist einfach: IBAN eingeben, Empfängernamen angeben, optionalen Betrag und Verwendungszweck hinzufügen, dann auf "Generieren" klicken. Der fertige QR-Code kann sofort heruntergeladen und verwendet werden – ohne Anmeldung und kostenlos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Daten enthält ein SEPA QR Code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ein SEPA QR Code enthält: IBAN (Pflichtfeld), Empfängername (Pflichtfeld), BIC (optional, nicht mehr zwingend im SEPA-Raum), Betrag (optional), Verwendungszweck oder Referenz (optional, bis zu 140 Zeichen). Alle Daten werden nach EPC069-12 formatiert.',
      },
    },
    {
      '@type': 'Question',
      name: 'Sind SEPA QR Codes kostenlos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, SEPA QR Codes sind vollständig kostenlos zu erstellen und zu verwenden. Der EPC-Standard ist offen und lizenzfrei. Unser Generator erstellt SEPA QR Codes ohne Anmeldung, ohne Kosten und verarbeitet alle Daten lokal im Browser.',
      },
    },
  ],
};

const stats = [
  { value: '36', label: 'SEPA-Länder' },
  { value: 'EPC069-12', label: 'Offizieller Standard' },
  { value: '10 Sek.', label: 'Erstellungszeit' },
  { value: '100%', label: 'Kostenlos' },
];

const tableRows = [
  { merkmal: 'Standard', wert: 'EPC069-12' },
  { merkmal: 'Länder', wert: '36 SEPA-Länder' },
  { merkmal: 'Kompatibilität', wert: 'Alle Banking-Apps' },
  { merkmal: 'Kostenlos', wert: 'Ja' },
  { merkmal: 'IBAN enthalten', wert: 'Ja' },
  { merkmal: 'Betrag optional', wert: 'Ja' },
  { merkmal: 'Verwendungszweck', wert: 'Bis 140 Zeichen' },
];

const relatedLinks = [
  { href: '/bezahlcode', label: 'BezahlCode Generator' },
  { href: '/epc-qr-code', label: 'EPC QR Code Generator' },
  { href: '/iban-qr-code', label: 'IBAN QR Code Generator' },
  { href: '/wissen/epc-standard', label: 'EPC-Standard Dokumentation' },
];

export default function SepaQrCodePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/" className="text-sky-400 hover:text-sky-300">
                  Startseite
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">SEPA QR Code Generator</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Alternative Namen · SEPA QR Code / GiroCode
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              SEPA QR Code Generator – Kostenlos &amp; Lokal
            </h1>
          </header>

          {/* Short Answer Box */}
          <div
            className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3"
            role="note"
          >
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">
              💡 Kurze Antwort
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              Ein SEPA QR Code (auch GiroCode oder EPC-QR-Code) ist ein standardisierter QR-Code
              für SEPA-Überweisungen. Er folgt dem EPC069-12 Standard des European Payments Council
              und ist mit allen deutschen und europäischen Banking-Apps kompatibel.
            </p>
          </div>

          {/* Stats */}
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

            <h2>Was ist ein SEPA QR Code?</h2>
            <p>
              Ein <strong>SEPA QR Code</strong> – auch bekannt als GiroCode, EPC-QR-Code oder
              BezahlCode – ist ein standardisierter QR-Code für SEPA-Überweisungen innerhalb des
              europäischen SEPA-Zahlungsraums mit 36 Ländern. Er folgt dem{' '}
              <strong>EPC069-12 Standard</strong> des European Payments Council (EPC) und kodiert
              alle relevanten Zahlungsdaten maschinenlesbar.
            </p>
            <p>
              Wer einen SEPA QR Code scannt, öffnet direkt in seiner Banking-App eine
              vorausgefüllte Überweisungsmaske mit IBAN, Empfängername, Betrag und
              Verwendungszweck. Der Nutzer muss nur noch bestätigen – kein manuelles Eintippen mehr.
              Das spart Zeit und reduziert Fehler erheblich.
            </p>

            <h2>Unterschied SEPA QR Code vs. normaler QR Code</h2>
            <p>
              Ein normaler QR-Code kann beliebigen Text, URLs oder andere Daten enthalten – er hat
              kein standardisiertes Format. Banking-Apps können solche QR-Codes nicht als
              Überweisungsaufträge interpretieren.
            </p>
            <p>
              Ein <strong>SEPA QR Code</strong> hingegen folgt einem strengen Format nach EPC069-12:
            </p>
            <ul>
              <li>Beginnt immer mit dem Service-Tag <code>BCD</code></li>
              <li>Enthält strukturierte Felder: IBAN, BIC, Betrag, Name, Referenz</li>
              <li>
                Wird von Banking-Apps als Zahlungsauftrag erkannt und automatisch verarbeitet
              </li>
              <li>Maximale Datenmenge definiert (keine beliebige Größe)</li>
            </ul>
            <p>
              Nur ein korrekt aufgebauter SEPA QR Code nach EPC-Standard wird von
              Bankapplikationen als Überweisungsauftrag akzeptiert.
            </p>

            <h2>Welche Banking-Apps unterstützen SEPA QR Codes?</h2>
            <p>
              Praktisch alle großen Banking-Apps in Deutschland, Österreich und der Schweiz
              unterstützen SEPA QR Codes. In Deutschland sind dies unter anderem: Sparkasse, ING,
              DKB, Volksbank/Raiffeisenbank, Commerzbank, Deutsche Bank, N26, Postbank, Comdirect
              und Targobank. Da der Standard europaweilt gültig ist, funktionieren SEPA QR Codes
              auch mit Banken in allen 36 SEPA-Ländern.
            </p>

            {/* CTA */}
            <div className="not-prose my-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
              >
                SEPA QR Code jetzt erstellen →
              </Link>
            </div>

            <h2>SEPA QR Code Eigenschaften</h2>
            <div className="not-prose overflow-x-auto rounded-xl border border-[#1f2431]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#1f2431] bg-[#0f1117]">
                    <th className="px-4 py-3 text-left font-semibold text-[#e8eaf0]">Merkmal</th>
                    <th className="px-4 py-3 text-left font-semibold text-[#22c55e]">
                      SEPA QR Code
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-[#1f2431] ${i % 2 === 0 ? 'bg-[#0b0c10]' : 'bg-[#0f1117]'}`}
                    >
                      <td className="px-4 py-3 text-[#8b90a0]">{row.merkmal}</td>
                      <td className="px-4 py-3 text-slate-200">{row.wert}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Was ist ein SEPA QR Code?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Ein SEPA QR Code (auch GiroCode, EPC-QR-Code oder BezahlCode) ist ein
                  standardisierter QR-Code für SEPA-Überweisungen nach dem EPC069-12 Standard.
                  Er enthält alle Zahlungsdaten strukturiert und wird von Banking-Apps direkt als
                  Überweisungsauftrag erkannt.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Wie erstelle ich einen SEPA QR Code?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  IBAN eingeben, Empfängernamen angeben, optionalen Betrag und Verwendungszweck
                  hinzufügen, dann generieren – fertig. Der QR-Code kann sofort heruntergeladen
                  werden, ohne Anmeldung und kostenlos.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Welche Daten enthält ein SEPA QR Code?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  IBAN (Pflichtfeld), Empfängername (Pflichtfeld), BIC (optional), Betrag
                  (optional), Verwendungszweck oder Referenz (optional, bis zu 140 Zeichen). Alle
                  Daten werden nach EPC069-12 formatiert und kodiert.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Sind SEPA QR Codes kostenlos?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Ja, vollständig kostenlos. Der EPC-Standard ist offen und lizenzfrei. Unser
                  Generator erstellt SEPA QR Codes ohne Anmeldung, ohne versteckte Kosten und
                  verarbeitet alle Daten lokal im Browser – keine Daten werden an Server übertragen.
                </p>
              </div>
            </div>

            {/* Related Links Box */}
            <div className="not-prose mt-10 rounded-2xl border border-[#1f2431] bg-[#0f1117] p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xl" aria-hidden>📚</span>
                <h2 className="text-base font-bold text-[#e8eaf0]">Weitere Artikel</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {relatedLinks.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3.5 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/30 hover:text-[#e8eaf0] hover:-translate-y-0.5"
                  >
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
