import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode mit Credit Suisse/UBS scannen – Anleitung',
  description:
    'GiroCode nach der Credit Suisse/UBS-Integration scannen: Ehemalige Credit Suisse-Kunden nutzen jetzt UBS Mobile Banking. ✅ Schritt-für-Schritt Anleitung 2026.',
  keywords: 'girocode credit suisse ubs, credit suisse qr code, ubs credit suisse girocode, sepa qr credit suisse',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/credit-suisse-ubs',
  },
};

const otherBanks = [
  { href: '/ubs', label: 'UBS Mobile Banking' },
  { href: '/zuercher-kantonalbank', label: 'Zürcher Kantonalbank' },
  { href: '/raiffeisen-schweiz', label: 'Raiffeisen Schweiz' },
  { href: '/postfinance', label: 'PostFinance' },
  { href: '/cantonal-banks', label: 'Schweizer Kantonalbanken' },
  { href: '/sparkasse', label: 'Sparkasse (Deutschland)' },
  { href: '/deutsche-bank', label: 'Deutsche Bank' },
  { href: '/commerzbank', label: 'Commerzbank' },
];

const faqItems = [
  {
    question: 'Was ist aus Credit Suisse geworden?',
    answer:
      'Im März 2023 übernahm UBS die Credit Suisse nach einer staatlich vermittelten Notübernahme. Seit 2024 werden Credit Suisse-Konten schrittweise auf UBS migriert. Ehemalige Credit Suisse-Kunden nutzen jetzt die UBS Mobile Banking App.',
  },
  {
    question: 'Wie scanne ich einen GiroCode als ehemaliger Credit Suisse-Kunde?',
    answer:
      'Als ehemaliger Credit Suisse-Kunde verwendest du jetzt die UBS Mobile Banking App. Gehe dort zu „Zahlungen" → SEPA-Überweisung und tippe auf das QR-Symbol, um einen GiroCode zu scannen.',
  },
  {
    question: 'Ist der GiroCode-Support in der UBS App derselbe wie bei Credit Suisse?',
    answer:
      'Ja, UBS Mobile Banking unterstützt den EPC-konformen SEPA-QR-Code-Standard. Für SEPA-Auslandsüberweisungen funktioniert der GiroCode-Scan in der UBS App genauso wie in der früheren Credit Suisse App.',
  },
  {
    question: 'Funktioniert die alte Credit Suisse App noch?',
    answer:
      'Die Credit Suisse App ist seit der UBS-Migration nicht mehr verfügbar. Ehemalige Kunden müssen die UBS Mobile Banking App verwenden. Bitte prüfe deine E-Mails oder die UBS-Website für genaue Migrations-Informationen.',
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

export default function CreditSuisseUbsPage() {
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
              <li className="text-slate-400">Credit Suisse / UBS</li>
            </ol>
          </nav>

          <header className="mb-10 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Kompatibel mit UBS/Credit Suisse App
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode nach Credit Suisse Integration scannen
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              Nach der UBS-Übernahme der Credit Suisse nutzen ehemalige Credit Suisse-Kunden die
              UBS Mobile Banking App. Hier erklären wir, wie du GiroCodes mit der UBS App scannst.
            </p>
          </header>

          {/* Info-Box */}
          <div className="mb-8 rounded-xl border border-sky-500/30 bg-sky-500/10 px-5 py-4">
            <p className="text-sm font-medium text-sky-300">
              <strong>Information:</strong> Die Credit Suisse existiert nicht mehr als eigenständige Bank.
              Seit 2023 sind alle Credit Suisse-Kunden zu <strong>UBS</strong> migriert.
              Bitte verwende die <Link href="/ubs" className="underline hover:text-sky-200">UBS Mobile Banking Anleitung</Link>.
            </p>
          </div>

          <article className="prose prose-invert prose-lg max-w-none">

            <section aria-labelledby="anleitung">
              <h2 id="anleitung">GiroCode mit UBS (ehem. Credit Suisse) scannen</h2>
              <p>
                Als ehemaliger Credit Suisse-Kunde nutzt du jetzt die UBS Mobile Banking App.
                So scannst du einen GiroCode für eine SEPA-Überweisung:
              </p>
              <ol>
                <li>
                  <strong>UBS Mobile Banking App öffnen</strong> und anmelden.
                </li>
                <li>
                  <strong>„Zahlungen"</strong> im Hauptmenü auswählen.
                </li>
                <li>
                  <strong>SEPA-Überweisung</strong> ins europäische Ausland wählen.
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
                  <strong>Zahlung freigeben</strong> mit UBS Access oder biometrischer Authentifizierung.
                </li>
              </ol>
              <p>
                <strong>Hinweis:</strong> Für inländische Schweizer Zahlungen in CHF wird die
                QR-Rechnung (Swiss QR Bill) verwendet, nicht der GiroCode.
              </p>
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
                Erstelle kostenlos einen EPC-konformen SEPA-QR-Code – kompatibel mit der UBS App
                und allen anderen europäischen Banking-Apps.
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
              <h2 id="faq">Häufige Fragen – Credit Suisse / UBS</h2>
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
