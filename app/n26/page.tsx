import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode mit N26 scannen – Anleitung 2026',
  description:
    'GiroCode mit der N26 App scannen: Senden öffnen, QR-Code-Scanner starten, Code scannen & Überweisung bestätigen. ✅ Für N26 Standard, Smart & Metal.',
  keywords: 'n26 girocode, n26 app girocode scannen, n26 qr code überweisung, sepa qr n26',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/n26',
  },
};

const otherBanks = [
  { href: '/sparkasse', label: 'Sparkasse' },
  { href: '/volksbank', label: 'Volksbank / VR-Banking' },
  { href: '/deutsche-bank', label: 'Deutsche Bank' },
  { href: '/commerzbank', label: 'Commerzbank' },
  { href: '/ing', label: 'ING' },
  { href: '/dkb', label: 'DKB' },
  { href: '/postbank', label: 'Postbank' },
  { href: '/targobank', label: 'Targobank' },
  { href: '/comdirect', label: 'Comdirect' },
];

const faqItems = [
  {
    question: 'Wo finde ich den QR-Scanner in der N26 App?',
    answer:
      'Den QR-Scanner findest du unter „Senden" in der N26 App. Im Zahlungsbereich gibt es ein QR-Code-Scanner-Symbol – tippe darauf, um den GiroCode einzulesen.',
  },
  {
    question: 'Unterstützt N26 alle GiroCodes?',
    answer:
      'Ja, N26 unterstützt EPC-konforme GiroCodes (SEPA-QR-Codes). Stelle sicher, dass du die aktuellste Version der N26 App verwendest.',
  },
  {
    question: 'Funktioniert der GiroCode-Scan bei N26 Standard, Smart und Metal?',
    answer:
      'Ja, der GiroCode-Scan ist eine Grundfunktion der N26 App und steht bei allen Kontomodellen – Standard, Smart, You und Metal – zur Verfügung.',
  },
  {
    question: 'Kann ich bei N26 auch Instant Payments per GiroCode auslösen?',
    answer:
      'N26 verarbeitet SEPA-Überweisungen, die per GiroCode ausgelöst werden, je nach Empfängerbank als normale oder Echtzeit-Überweisung (Instant Payment), sofern der Empfänger Instant Payments unterstützt.',
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

export default function N26Page() {
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
                <Link href="/" className="text-sky-400 hover:text-sky-300">Startseite</Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">N26</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="mb-10 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Kompatibel mit N26 App
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode mit der N26 App scannen
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              So nutzt du GiroCodes (SEPA-QR-Codes) mit der N26 App –
              Schritt für Schritt erklärt. Für N26 Standard, Smart, You und Metal.
            </p>
          </header>

          <article className="prose prose-invert prose-lg max-w-none">

            {/* Section 1: Anleitung */}
            <section aria-labelledby="anleitung">
              <h2 id="anleitung">Schritt-für-Schritt Anleitung</h2>
              <p>
                N26 hat als modernes Online-Banking einen gut zugänglichen GiroCode-Scanner
                in der App integriert. Wichtig: Bei N26 heißt der Bereich „Senden" statt
                „Überweisen". So gehst du vor:
              </p>
              <ol>
                <li>
                  <strong>N26 App öffnen</strong> und mit deinen Zugangsdaten oder biometrisch
                  (Fingerabdruck / Face ID) anmelden.
                </li>
                <li>
                  <strong>„Senden"</strong> in der App antippen – der Bereich für Überweisungen
                  und Zahlungen bei N26.
                </li>
                <li>
                  <strong>QR-Code Scanner antippen</strong> – im Zahlungsbereich erscheint ein
                  QR-Code-Symbol, das den Scanner startet.
                </li>
                <li>
                  <strong>GiroCode scannen</strong> – Kamera auf den Code richten. Die App
                  erkennt den GiroCode und überträgt alle Zahlungsdaten automatisch.
                </li>
                <li>
                  <strong>Daten prüfen:</strong> Empfängername, IBAN, Betrag und Verwendungszweck
                  kontrollieren – auch bei N26 gilt: nie blind bestätigen!
                </li>
                <li>
                  <strong>Überweisung bestätigen</strong> – mit N26 PIN, Fingerabdruck oder Face ID.
                </li>
              </ol>
              <p>
                <strong>Hinweis:</strong> Bei N26 ist der Bereich für Zahlungen mit „Senden"
                beschriftet – das ist der Eingang zum GiroCode-Scanner.
              </p>
            </section>

            {/* Section 2: Browser-Scanner */}
            <section aria-labelledby="browser-scanner" className="mt-10">
              <h2 id="browser-scanner">GiroCode direkt im Browser scannen</h2>
              <p>
                Du möchtest einen GiroCode am Computer auslesen oder die Daten vor der
                Überweisung in der N26 App prüfen? Unser Browser-Scanner zeigt alle
                Zahlungsdaten sofort an – ohne App, vollständig lokal, keine Datenweitergabe.
              </p>
              <div className="not-prose mt-4">
                <Link
                  href="/scanner"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,197,94,0.4)]"
                  style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: '#ffffff' }}
                >
                  GiroCode jetzt scannen →
                </Link>
              </div>
            </section>

            {/* Section 3: GiroCode erstellen */}
            <section aria-labelledby="erstellen" className="mt-10">
              <h2 id="erstellen">Eigenen GiroCode erstellen</h2>
              <p>
                Du möchtest Zahlungen erleichtern und einen GiroCode für Rechnungen oder
                Zahlungsaufforderungen erstellen? Unser kostenloser Generator erzeugt
                EPC-konforme SEPA-QR-Codes – kompatibel mit N26 und allen anderen Banking-Apps.
              </p>
              <div className="not-prose mt-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,197,94,0.4)]"
                  style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: '#ffffff' }}
                >
                  Jetzt GiroCode erstellen →
                </Link>
              </div>
            </section>

            {/* Section 4: FAQ */}
            <section aria-labelledby="faq" className="mt-10">
              <h2 id="faq">Häufige Fragen – GiroCode mit N26</h2>
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

          {/* Footer: Weitere Banking-Apps */}
          <div className="mt-12 border-t border-slate-800 pt-8">
            <h2 className="mb-4 text-base font-bold text-[#e8eaf0]">Weitere Banking-Apps</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {otherBanks.map((bank) => (
                <Link
                  key={bank.href}
                  href={bank.href}
                  className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:text-[#e8eaf0] hover:-translate-y-0.5"
                >
                  <span>GiroCode mit {bank.label}</span>
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
