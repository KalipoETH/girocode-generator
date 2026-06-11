import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode mit PostFinance scannen – Anleitung 2026',
  description:
    'GiroCode mit der PostFinance App für SEPA-Überweisungen aus der Schweiz scannen. ✅ Schritt-für-Schritt Anleitung 2026. Hinweis: CH-Inland nutzt QR-Rechnung.',
  keywords: 'girocode postfinance, postfinance app qr code, postfinance sepa überweisung qr, postfinance girocode',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/postfinance',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/postfinance',
      de: 'https://www.girocodegenerator.com/postfinance',
      en: 'https://www.girocodegenerator.com/en/postfinance',
      fr: 'https://www.girocodegenerator.com/fr/postfinance',
      es: 'https://www.girocodegenerator.com/es/postfinance',
      it: 'https://www.girocodegenerator.com/it/postfinance',
    },
  },
};

const otherBanks = [
  { href: '/ubs', label: 'UBS Mobile Banking' },
  { href: '/zuercher-kantonalbank', label: 'Zürcher Kantonalbank' },
  { href: '/raiffeisen-schweiz', label: 'Raiffeisen Schweiz' },
  { href: '/cantonal-banks', label: 'Schweizer Kantonalbanken' },
  { href: '/credit-suisse-ubs', label: 'Credit Suisse / UBS' },
  { href: '/sparkasse', label: 'Sparkasse (Deutschland)' },
  { href: '/postbank', label: 'Postbank (Deutschland)' },
  { href: '/ing', label: 'ING' },
];

const faqItems = [
  {
    question: 'Unterstützt die PostFinance App den GiroCode?',
    answer:
      'Ja, PostFinance unterstützt den EPC-konformen SEPA-QR-Code für internationale Zahlungen in den SEPA-Raum. Für Schweizer Inlandszahlungen in CHF wird die QR-Rechnung (Swiss QR Bill) verwendet.',
  },
  {
    question: 'Wo finde ich den QR-Scanner in der PostFinance App?',
    answer:
      'Öffne die PostFinance App und navigiere zu „Zahlungen". Wähle für SEPA-Überweisungen ins Ausland das QR-Symbol, um den Scanner zu aktivieren.',
  },
  {
    question: 'Was ist PostFinance?',
    answer:
      'PostFinance ist das Finanzinstitut der Schweizerischen Post. Als staatlich kontrolliertes Unternehmen bietet es Konten, Zahlungsverkehr und weitere Bankdienstleistungen für Schweizer Privat- und Geschäftskunden an.',
  },
  {
    question: 'Was ist der Unterschied zwischen PostFinance (CH) und Postbank (DE)?',
    answer:
      'PostFinance und Postbank (Deutschland) sind eigenständige Unternehmen ohne direkte Verbindung. PostFinance gehört der Schweizerischen Post, die Postbank Deutschland gehört zur Deutschen Bank Gruppe.',
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

export default function PostfinancePage() {
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
              <li className="text-slate-400">PostFinance</li>
            </ol>
          </nav>

          <header className="mb-10 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Kompatibel mit PostFinance App
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode mit der PostFinance App scannen
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              So nutzt du GiroCodes (SEPA-QR-Codes) mit der PostFinance App für SEPA-Überweisungen
              aus der Schweiz in den europäischen Raum – Schritt für Schritt erklärt.
            </p>
          </header>

          {/* Schweiz-Hinweis */}
          <div className="mb-8 rounded-xl border border-amber-500/30 bg-amber-500/10 px-5 py-4">
            <p className="text-sm font-medium text-amber-300">
              <strong>Hinweis:</strong> Für inländische Schweizer Zahlungen in CHF wird die{' '}
              <strong>QR-Rechnung (Swiss QR Bill)</strong> verwendet. GiroCodes (EPC-Standard)
              sind für SEPA-Auslandsüberweisungen in EUR gedacht.
            </p>
          </div>

          <article className="prose prose-invert prose-lg max-w-none">

            <section aria-labelledby="anleitung">
              <h2 id="anleitung">Schritt-für-Schritt Anleitung</h2>
              <ol>
                <li>
                  <strong>PostFinance App öffnen</strong> und anmelden.
                </li>
                <li>
                  <strong>„Zahlungen"</strong> im Hauptmenü auswählen.
                </li>
                <li>
                  <strong>SEPA-Überweisung</strong> ins Ausland wählen.
                </li>
                <li>
                  <strong>QR-Code-Symbol</strong> antippen und Kamera-Berechtigung erteilen.
                </li>
                <li>
                  <strong>GiroCode scannen</strong> – Kamera auf den Code richten (15–30 cm Abstand).
                </li>
                <li>
                  <strong>Daten prüfen:</strong> IBAN, Empfängername, Betrag und Verwendungszweck
                  auf Korrektheit kontrollieren.
                </li>
                <li>
                  <strong>Zahlung freigeben</strong> mit PostFinance TAN oder biometrischer Freigabe.
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
                Erstelle kostenlos einen EPC-konformen SEPA-QR-Code – kompatibel mit der PostFinance
                App und allen anderen europäischen Banking-Apps.
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
              <h2 id="faq">Häufige Fragen – GiroCode mit PostFinance</h2>
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
