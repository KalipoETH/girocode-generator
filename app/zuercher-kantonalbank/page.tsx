import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode mit Zürcher Kantonalbank scannen – Anleitung',
  description:
    'GiroCode mit ZKB Mobile Banking (Zürcher Kantonalbank) für SEPA-Überweisungen scannen. ✅ Schritt-für-Schritt Anleitung 2026. Hinweis: CH-Inland nutzt QR-Rechnung.',
  keywords: 'girocode zkb, zürcher kantonalbank qr code, zkb mobile banking sepa, zkb girocode',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/zuercher-kantonalbank',
  },
};

const otherBanks = [
  { href: '/ubs', label: 'UBS Mobile Banking' },
  { href: '/raiffeisen-schweiz', label: 'Raiffeisen Schweiz' },
  { href: '/postfinance', label: 'PostFinance' },
  { href: '/cantonal-banks', label: 'Weitere Schweizer Kantonalbanken' },
  { href: '/credit-suisse-ubs', label: 'Credit Suisse / UBS' },
  { href: '/sparkasse', label: 'Sparkasse (Deutschland)' },
  { href: '/ing', label: 'ING' },
  { href: '/dkb', label: 'DKB' },
];

const faqItems = [
  {
    question: 'Unterstützt ZKB Mobile Banking den GiroCode-Standard?',
    answer:
      'Ja, die Zürcher Kantonalbank unterstützt den EPC-konformen SEPA-QR-Code für internationale SEPA-Überweisungen. Für Schweizer Inlandszahlungen wird die QR-Rechnung (Swiss QR Bill) verwendet.',
  },
  {
    question: 'Wo finde ich den QR-Scanner in der ZKB App?',
    answer:
      'Öffne die ZKB Mobile Banking App und navigiere zu „Zahlungen". Wähle SEPA-Überweisung und tippe auf das QR-Code-Symbol, um den Scanner zu aktivieren.',
  },
  {
    question: 'Was ist die Zürcher Kantonalbank?',
    answer:
      'Die Zürcher Kantonalbank (ZKB) ist die größte Kantonalbank der Schweiz und eine der bedeutendsten Schweizer Banken. Sie ist im Besitz des Kantons Zürich und gilt als AAA-geratete Staatsbank.',
  },
  {
    question: 'Was ist der Unterschied zwischen GiroCode und QR-Rechnung?',
    answer:
      'Der GiroCode (EPC-Standard) ist für SEPA-Überweisungen im europäischen Raum gedacht. Die QR-Rechnung (Swiss QR Bill) ist der Schweizer Standard für inländische Zahlungen in CHF. Beide Standards basieren auf QR-Codes, sind aber technisch unterschiedlich.',
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

export default function ZuercherKantonalbankPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">

          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li><Link href="/" className="text-sky-400 hover:text-sky-300">Startseite</Link></li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">Zürcher Kantonalbank</li>
            </ol>
          </nav>

          <header className="mb-10 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Kompatibel mit ZKB Mobile Banking
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode mit der ZKB App scannen
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              So nutzt du GiroCodes (SEPA-QR-Codes) mit ZKB Mobile Banking (Zürcher Kantonalbank)
              für SEPA-Überweisungen ins Ausland – Schritt für Schritt erklärt.
            </p>
          </header>

          {/* Schweiz-Hinweis */}
          <div className="mb-8 rounded-xl border border-amber-500/30 bg-amber-500/10 px-5 py-4">
            <p className="text-sm font-medium text-amber-300">
              <strong>Hinweis für Schweizer Nutzer:</strong> Für inländische Schweizer Zahlungen
              in CHF wird die <strong>QR-Rechnung (Swiss QR Bill)</strong> verwendet, nicht der GiroCode.
              GiroCodes (EPC-Standard) sind für SEPA-Überweisungen ins europäische Ausland gedacht.
            </p>
          </div>

          <article className="prose prose-invert prose-lg max-w-none">

            <section aria-labelledby="anleitung">
              <h2 id="anleitung">Schritt-für-Schritt Anleitung</h2>
              <ol>
                <li>
                  <strong>ZKB Mobile Banking App öffnen</strong> und mit PIN oder biometrischen
                  Daten anmelden.
                </li>
                <li>
                  <strong>„Zahlungen"</strong> im Hauptmenü auswählen.
                </li>
                <li>
                  <strong>SEPA-Überweisung</strong> als Zahlungsart wählen.
                </li>
                <li>
                  <strong>QR-Code-Symbol</strong> antippen und Kamera-Berechtigung erteilen.
                </li>
                <li>
                  <strong>GiroCode scannen</strong> – Kamera auf den Code richten (15–30 cm Abstand).
                </li>
                <li>
                  <strong>Daten prüfen:</strong> IBAN, Empfängername, Betrag und Verwendungszweck
                  kontrollieren.
                </li>
                <li>
                  <strong>Zahlung freigeben</strong> mit ZKB Access oder biometrischer Authentifizierung.
                </li>
              </ol>
            </section>

            <section aria-labelledby="browser-scanner" className="mt-10">
              <h2 id="browser-scanner">GiroCode direkt im Browser scannen</h2>
              <p>
                Unser kostenloser Browser-Scanner liest GiroCodes direkt im Browser aus –
                ohne App, ohne Installation, 100&nbsp;% lokal.
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

            <section aria-labelledby="erstellen" className="mt-10">
              <h2 id="erstellen">Eigenen GiroCode erstellen</h2>
              <p>
                Erstelle kostenlos einen EPC-konformen SEPA-QR-Code – kompatibel mit ZKB Mobile
                Banking und allen anderen europäischen Banking-Apps.
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

            <section aria-labelledby="faq" className="mt-10">
              <h2 id="faq">Häufige Fragen – GiroCode mit ZKB</h2>
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
