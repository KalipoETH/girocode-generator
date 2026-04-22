import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode mit ING Banking scannen – Anleitung 2026',
  description:
    'GiroCode mit der ING Banking to go App scannen: Überweisen öffnen, QR-Code-Symbol antippen, Code scannen & mit PIN bestätigen. ✅ In 30 Sekunden fertig.',
  keywords: 'ing girocode, ing banking girocode scannen, ing banking to go qr code, sepa qr ing',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/ing',
  },
};

const otherBanks = [
  { href: '/sparkasse', label: 'Sparkasse' },
  { href: '/volksbank', label: 'Volksbank / VR-Banking' },
  { href: '/deutsche-bank', label: 'Deutsche Bank' },
  { href: '/commerzbank', label: 'Commerzbank' },
  { href: '/dkb', label: 'DKB' },
  { href: '/postbank', label: 'Postbank' },
  { href: '/targobank', label: 'Targobank' },
  { href: '/n26', label: 'N26' },
  { href: '/comdirect', label: 'Comdirect' },
];

const faqItems = [
  {
    question: 'Wo finde ich den QR-Scanner in der ING Banking to go App?',
    answer:
      'Den QR-Scanner findest du im Überweisungsdialog. Tippe auf „Überweisen" und suche dann oben im Formular nach dem QR-Code-Symbol. Bei einigen App-Versionen erscheint es als Kamera-Icon.',
  },
  {
    question: 'Unterstützt ING Banking to go alle GiroCodes?',
    answer:
      'Ja, die ING Banking to go App unterstützt alle EPC-konformen GiroCodes. Stelle sicher, dass du die aktuelle Version der App installiert hast.',
  },
  {
    question: 'Wie bestätige ich die Überweisung nach dem GiroCode-Scan bei der ING?',
    answer:
      'Nach dem Scan prüfst du die vorausgefüllten Daten und bestätigst die Überweisung mit deinem ING-PIN oder per Fingerabdruck/Face ID, je nach eingerichteter Authentifizierungsmethode.',
  },
  {
    question: 'Funktioniert der GiroCode-Scan auch auf dem ING-Girokonto und dem Extra-Konto?',
    answer:
      'Ja, du kannst den GiroCode-Scan für Überweisungen von allen deinen ING-Konten nutzen – Girokonto, Tagesgeldkonto und weiteren. Das Quellkonto wählst du im Überweisungsformular.',
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

export default function IngPage() {
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
              <li className="text-slate-400">ING</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="mb-10 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Kompatibel mit ING Banking to go
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode mit der ING Banking App scannen
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              So nutzt du GiroCodes (SEPA-QR-Codes) mit der ING Banking to go App –
              Schritt für Schritt erklärt. Überweisungen in Sekunden erledigt.
            </p>
          </header>

          <article className="prose prose-invert prose-lg max-w-none">

            {/* Section 1: Anleitung */}
            <section aria-labelledby="anleitung">
              <h2 id="anleitung">Schritt-für-Schritt Anleitung</h2>
              <p>
                Die ING Banking to go App bietet einen gut zugänglichen GiroCode-Scanner
                im Überweisungsbereich. So funktioniert es:
              </p>
              <ol>
                <li>
                  <strong>ING Banking to go App öffnen</strong> und mit deinen Zugangsdaten
                  oder biometrisch (Fingerabdruck / Face ID) anmelden.
                </li>
                <li>
                  <strong>„Überweisen"</strong> antippen – entweder direkt auf der Startseite
                  oder über das Menü.
                </li>
                <li>
                  <strong>QR-Code-Symbol antippen</strong> – den Scanner-Button im oberen Bereich
                  des Überweisungsformulars antippen, um die Kamera zu starten.
                </li>
                <li>
                  <strong>GiroCode scannen</strong> – Kamera auf den Code richten. Die App erkennt
                  den Code und überträgt automatisch alle Zahlungsdaten.
                </li>
                <li>
                  <strong>Daten prüfen:</strong> Empfängername, IBAN, Betrag und Verwendungszweck
                  sorgfältig kontrollieren.
                </li>
                <li>
                  <strong>Überweisung bestätigen</strong> – mit ING-PIN oder biometrischer
                  Authentifizierung. Die Überweisung wird sofort verarbeitet.
                </li>
              </ol>
              <p>
                <strong>Tipp:</strong> Die ING Banking App hat den QR-Scanner besonders gut
                erreichbar platziert. Falls du ihn nicht findest, prüfe ob ein App-Update verfügbar ist.
              </p>
            </section>

            {/* Section 2: Browser-Scanner */}
            <section aria-labelledby="browser-scanner" className="mt-10">
              <h2 id="browser-scanner">GiroCode direkt im Browser scannen</h2>
              <p>
                Du möchtest einen GiroCode am Desktop-PC oder ohne die ING App auslesen?
                Unser kostenloser Browser-Scanner extrahiert alle Zahlungsdaten aus einem GiroCode –
                lokal in deinem Browser, ohne App, ohne Datenweitergabe.
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
                Du möchtest deinen Geschäftspartnern oder Kunden das Bezahlen mit der ING App
                erleichtern? Erstelle kostenlos einen EPC-konformen GiroCode – fertig für
                Rechnungen, E-Mails und Webseiten. Kein Konto, keine Registrierung nötig.
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
              <h2 id="faq">Häufige Fragen – GiroCode mit ING</h2>
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
