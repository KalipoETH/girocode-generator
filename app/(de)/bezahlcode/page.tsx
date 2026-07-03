import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'BezahlCode Generator – Kostenlos erstellen (= GiroCode) 2026',
  description:
    'BezahlCode (jetzt GiroCode) kostenlos erstellen: Der alte Name für SEPA-QR-Codes. Jetzt BezahlCode/GiroCode in 10 Sekunden generieren – ohne Anmeldung.',
  alternates: {
    canonical: `${SITE_URL}/bezahlcode`,
    languages: {
      'x-default': `${SITE_URL}/bezahlcode`,
      de: `${SITE_URL}/bezahlcode`,
      en: `${SITE_URL}/en/bezahlcode`,
      fr: `${SITE_URL}/fr/bezahlcode`,
      es: `${SITE_URL}/es/bezahlcode`,
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist der Unterschied zwischen BezahlCode und GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es gibt keinen technischen Unterschied. BezahlCode ist der ältere, ursprünglich in Deutschland verwendete Begriff für denselben SEPA-QR-Code. Seit 2018 wird der Begriff GiroCode als offizielle Bezeichnung des European Payments Council (EPC) verwendet. Beide Begriffe beschreiben exakt dasselbe Format nach EPC069-12 Standard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich einen BezahlCode noch verwenden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, absolut. Da BezahlCode und GiroCode technisch identisch sind und beide dem EPC069-12 Standard folgen, funktioniert ein BezahlCode genauso wie ein GiroCode. Alle Banking-Apps, die GiroCodes unterstützen, erkennen auch BezahlCodes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Apps unterstützen BezahlCode/GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alle großen deutschen Banking-Apps unterstützen BezahlCode/GiroCode: Sparkasse, ING, DKB, Volksbank, Commerzbank, Deutsche Bank, N26, Postbank, Comdirect und Targobank. Da der QR-Code auf dem europäischen EPC-Standard basiert, funktioniert er in allen 36 SEPA-Ländern.',
      },
    },
  ],
};

const stats = [
  { value: '2018', label: 'BezahlCode wurde zu GiroCode' },
  { value: 'EPC069-12', label: 'Gemeinsamer Standard' },
  { value: '10 Sek.', label: 'Erstellungszeit' },
  { value: '100%', label: 'Kostenlos' },
];

const bankingApps = [
  'Sparkasse', 'ING', 'DKB', 'Volksbank', 'Commerzbank',
  'Deutsche Bank', 'N26', 'Postbank', 'Comdirect', 'Targobank',
];

const relatedLinks = [
  { href: '/sepa-qr-code', label: 'SEPA QR Code Generator' },
  { href: '/epc-qr-code', label: 'EPC QR Code Generator' },
  { href: '/wissen/girocode', label: 'Was ist ein GiroCode?' },
  { href: '/', label: 'GiroCode kostenlos erstellen' },
];

export default function BezahlcodePage() {
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
              <li className="text-slate-400">BezahlCode Generator</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Alternative Namen · GiroCode / BezahlCode
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              BezahlCode Generator – Kostenlos &amp; Sofort
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
              Ein BezahlCode ist der frühere Name für den GiroCode (SEPA-QR-Code). Seit 2018 wurde
              der Begriff BezahlCode durch den offiziellen EPC-Begriff GiroCode ersetzt. Beide
              Begriffe bezeichnen denselben Standard:{' '}
              <a
                href="https://www.europeanpaymentscouncil.eu/document-library/guidance-documents/quick-response-code-guidelines-enable-data-capture-initiation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 underline hover:text-emerald-300"
              >
                EPC069-12
              </a>{' '}
              des European Payments Council.
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

            <h2>BezahlCode = GiroCode: Gleicher Standard, anderer Name</h2>
            <p>
              Wer nach einem BezahlCode-Generator sucht, sucht im Grunde genau dasselbe wie nach
              einem GiroCode-Generator – denn BezahlCode und GiroCode sind technisch identisch.
              Beide bezeichnen einen standardisierten QR-Code für SEPA-Überweisungen, der nach dem{' '}
              <strong>EPC069-12 Standard</strong> des European Payments Council aufgebaut ist.
            </p>
            <p>
              Der Begriff <em>BezahlCode</em> entstand in Deutschland als früher Marketingname für
              diese Art von QR-Codes. Banken und Zahlungsdienstleister nutzten ihn, um ihren Kunden
              eine einfache Möglichkeit anzubieten, Überweisungsdaten per QR-Code zu teilen. Mit
              zunehmender europaweiter Standardisierung setzte sich der Begriff{' '}
              <em>GiroCode</em> als offizieller Name durch.
            </p>

            <h2>Wann wurde BezahlCode zu GiroCode?</h2>
            <p>
              Im Jahr <strong>2018</strong> standardisierte der European Payments Council (EPC) das
              Format offiziell unter dem Namen <em>GiroCode</em>. Die technische Spezifikation
              EPC069-12 legte fest, wie SEPA-Zahlungsdaten in einem QR-Code kodiert werden müssen –
              inklusive IBAN, Empfängername, optionalem Betrag und Verwendungszweck.
            </p>
            <p>
              Die Umbenennung war ein Teil der breiteren Initiative zur europaweiten
              Harmonisierung des SEPA-Zahlungsverkehrs. Seitdem ist GiroCode der offizielle Begriff
              in der gesamten EU und den 36 SEPA-Ländern. In deutschen Banking-Apps ist jedoch
              häufig noch der Begriff BezahlCode in der Hilfedokumentation zu finden – aus
              historischen Gründen werden beide Begriffe weiterhin verwendet und erkannt.
            </p>
            <p>
              Ein mit diesem Generator erzeugter QR-Code ist zu 100 % konform mit dem EPC069-12
              Standard und funktioniert unabhängig davon, ob er als BezahlCode oder GiroCode
              bezeichnet wird.
            </p>

            <h2>Banking-Apps die BezahlCode/GiroCode unterstützen</h2>
            <p>
              Alle großen deutschen Banken unterstützen den BezahlCode/GiroCode-Standard in ihren
              mobilen Apps. Da es sich um denselben QR-Code handelt, funktioniert ein einmal
              erzeugter QR-Code mit jeder der folgenden Apps:
            </p>
            <ul>
              {bankingApps.map((app) => (
                <li key={app}>{app}</li>
              ))}
            </ul>
            <p>
              Darüber hinaus unterstützen auch österreichische Banken (z. B. Erste Bank, Raiffeisen,
              BAWAG), Schweizer Banken und alle anderen Banken im SEPA-Raum diesen Standard.
              Insgesamt sind über 36 europäische Länder kompatibel.
            </p>

            {/* CTA */}
            <div className="not-prose my-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
              >
                BezahlCode / GiroCode erstellen →
              </Link>
            </div>

            <h2>FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Was ist der Unterschied zwischen BezahlCode und GiroCode?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Es gibt keinen technischen Unterschied. BezahlCode ist der ältere, ursprünglich
                  in Deutschland verwendete Begriff für denselben SEPA-QR-Code. Seit 2018 wird der
                  Begriff GiroCode als offizielle Bezeichnung des European Payments Council (EPC)
                  verwendet. Beide Begriffe beschreiben exakt dasselbe Format nach EPC069-12
                  Standard.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Kann ich einen BezahlCode noch verwenden?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Ja, absolut. Da BezahlCode und GiroCode technisch identisch sind und beide dem
                  EPC069-12 Standard folgen, funktioniert ein BezahlCode genauso wie ein GiroCode.
                  Alle Banking-Apps, die GiroCodes unterstützen, erkennen auch BezahlCodes – der
                  QR-Code selbst enthält keine Bezeichnung.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Welche Apps unterstützen BezahlCode/GiroCode?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Alle großen deutschen Banking-Apps unterstützen BezahlCode/GiroCode: Sparkasse,
                  ING, DKB, Volksbank, Commerzbank, Deutsche Bank, N26, Postbank, Comdirect und
                  Targobank. Da der QR-Code auf dem europäischen EPC-Standard basiert, funktioniert
                  er in allen 36 SEPA-Ländern.
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
