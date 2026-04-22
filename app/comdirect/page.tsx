import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode mit Comdirect scannen – Schritt-für-Schritt 2026',
  description:
    'GiroCode mit der comdirect App scannen: Überweisung öffnen, QR-Code-Symbol antippen, Code scannen & Überweisung freigeben. ✅ Einfach & kostenlos.',
  keywords: 'comdirect girocode, comdirect app qr code scannen, girocode comdirect überweisung, sepa qr comdirect',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/comdirect',
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
  { href: '/n26', label: 'N26' },
];

const faqItems = [
  {
    question: 'Wo finde ich den QR-Scanner in der comdirect App?',
    answer:
      'Den QR-Scanner findest du unter „Überweisung" in der comdirect App. Im Überweisungsformular gibt es ein QR-Code-Symbol – tippe darauf, um den GiroCode-Scanner zu öffnen.',
  },
  {
    question: 'Unterstützt die comdirect App alle GiroCodes?',
    answer:
      'Ja, die comdirect App unterstützt alle EPC-konformen GiroCodes. Für die beste Kompatibilität empfehlen wir, die aktuelle App-Version aus dem App Store oder Google Play zu verwenden.',
  },
  {
    question: 'Ist comdirect dasselbe wie Commerzbank?',
    answer:
      'Comdirect ist eine Tochtergesellschaft der Commerzbank und betreibt eine eigenständige Banking-App. Comdirect-Kunden nutzen die comdirect App, nicht die Commerzbank App.',
  },
  {
    question: 'Welche TAN-Verfahren stehen nach dem GiroCode-Scan bei comdirect zur Verfügung?',
    answer:
      'Nach dem Scan und der Datenkontrolle kannst du die Überweisung per photoTAN (comdirect App), mobileTAN (SMS) oder ChipTAN bestätigen – je nach deinem eingerichteten TAN-Verfahren.',
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

export default function ComdirectPage() {
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
              <li className="text-slate-400">Comdirect</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="mb-10 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Kompatibel mit comdirect App
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode mit der comdirect App scannen
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              So nutzt du GiroCodes (SEPA-QR-Codes) mit der comdirect App –
              Schritt für Schritt erklärt. Überweisungen per QR-Scan in wenigen Sekunden erledigt.
            </p>
          </header>

          <article className="prose prose-invert prose-lg max-w-none">

            {/* Section 1: Anleitung */}
            <section aria-labelledby="anleitung">
              <h2 id="anleitung">Schritt-für-Schritt Anleitung</h2>
              <p>
                Die comdirect App bietet einen integrierten GiroCode-Scanner im Überweisungsbereich.
                So funktioniert das Scannen:
              </p>
              <ol>
                <li>
                  <strong>comdirect App öffnen</strong> und mit PIN oder biometrisch anmelden.
                </li>
                <li>
                  <strong>„Überweisung"</strong> in der App aufrufen – über das Menü oder
                  den Schnellzugriff auf der Startseite.
                </li>
                <li>
                  <strong>QR-Code-Symbol antippen</strong> – den Scanner-Button im
                  Überweisungsformular antippen, um die Kamera zu starten.
                </li>
                <li>
                  <strong>GiroCode scannen</strong> – Kamera auf den Code richten (15–30 cm Abstand).
                  Die App erkennt den Code und befüllt alle Felder automatisch.
                </li>
                <li>
                  <strong>Daten prüfen:</strong> Empfängername, IBAN, Betrag und Verwendungszweck
                  sorgfältig kontrollieren, bevor du die Freigabe erteilst.
                </li>
                <li>
                  <strong>Überweisung freigeben</strong> – per photoTAN, mobileTAN oder ChipTAN,
                  je nach deinem TAN-Verfahren.
                </li>
              </ol>
              <p>
                <strong>Tipp:</strong> Bei schwierigen Scan-Bedingungen (schwaches Licht oder
                zu kleiner Code) kann ein kurzes Halten der Kamera mit stabilisierter Hand helfen.
              </p>
            </section>

            {/* Section 2: Browser-Scanner */}
            <section aria-labelledby="browser-scanner" className="mt-10">
              <h2 id="browser-scanner">GiroCode direkt im Browser scannen</h2>
              <p>
                Du möchtest einen GiroCode ohne die comdirect App auslesen – zum Beispiel direkt
                am PC? Unser Browser-Scanner extrahiert alle Zahlungsdaten aus einem GiroCode –
                lokal im Browser, ohne App, ohne Datenweitergabe.
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
                Du möchtest deinen Kunden das Bezahlen per GiroCode-Scan ermöglichen – auch über
                die comdirect App? Unser kostenloser Generator erzeugt EPC-konforme SEPA-QR-Codes
                sofort im Browser, ohne Registrierung.
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
              <h2 id="faq">Häufige Fragen – GiroCode mit Comdirect</h2>
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
