import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode mit BAWAG scannen – Schritt-für-Schritt 2026',
  description:
    'GiroCode mit BAWAG Mobile Banking scannen: QR-Scanner im Überweisungsbereich öffnen, SEPA-QR-Code erfassen, Überweisung bestätigen. ✅ Kostenlos & in 30 Sekunden erledigt.',
  keywords: 'girocode bawag, bawag mobile banking qr code, bawag girocode scannen, sepa qr bawag österreich',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/bawag',
  },
};

const otherBanks = [
  { href: '/erste-bank', label: 'Erste Bank / George App' },
  { href: '/raiffeisen-oesterreich', label: 'Raiffeisen Österreich' },
  { href: '/bank-austria', label: 'Bank Austria' },
  { href: '/volksbank-oesterreich', label: 'Volksbank Österreich' },
  { href: '/sparkasse', label: 'Sparkasse (Deutschland)' },
  { href: '/ing', label: 'ING' },
  { href: '/n26', label: 'N26' },
  { href: '/dkb', label: 'DKB' },
];

const faqItems = [
  {
    question: 'Wie öffne ich den QR-Scanner in der BAWAG App?',
    answer:
      'Öffne die BAWAG Mobile Banking App und gehe zu „Überweisen". Im Überweisungsformular findest du ein QR-Code-Symbol, mit dem du den Scanner starten kannst.',
  },
  {
    question: 'Unterstützt BAWAG den deutschen GiroCode-Standard?',
    answer:
      'Ja, BAWAG Mobile Banking unterstützt den EPC-konformen SEPA-QR-Code-Standard (GiroCode). Der Standard ist in Deutschland und Österreich identisch.',
  },
  {
    question: 'Welche BAWAG-Apps gibt es?',
    answer:
      'BAWAG bietet die BAWAG Mobile Banking App für alltägliche Bankgeschäfte sowie eine separate App für pushTAN-Freigaben. Den GiroCode-Scanner findest du in der Mobile Banking App.',
  },
  {
    question: 'Was tun, wenn der Scan fehlschlägt?',
    answer:
      'Prüfe zuerst die App-Version und installiere verfügbare Updates. Stelle sicher, dass gute Beleuchtung vorhanden ist und die Kamera ruhig gehalten wird. Halte 15–30 cm Abstand zum Code.',
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

export default function BawagPage() {
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
              <li className="text-slate-400">BAWAG</li>
            </ol>
          </nav>

          <header className="mb-10 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Kompatibel mit BAWAG Mobile Banking
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode mit der BAWAG App scannen
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              So nutzt du GiroCodes (SEPA-QR-Codes) mit BAWAG Mobile Banking –
              Schritt für Schritt erklärt. In weniger als 30 Sekunden ist die Überweisung abgeschlossen.
            </p>
          </header>

          <article className="prose prose-invert prose-lg max-w-none">

            <section aria-labelledby="anleitung">
              <h2 id="anleitung">Schritt-für-Schritt Anleitung</h2>
              <p>So scannst du einen GiroCode mit der BAWAG Mobile Banking App:</p>
              <ol>
                <li>
                  <strong>BAWAG App öffnen</strong> und mit PIN oder biometrischen Daten anmelden.
                </li>
                <li>
                  <strong>„Überweisen"</strong> im Hauptmenü antippen.
                </li>
                <li>
                  <strong>QR-Code-Symbol</strong> im Überweisungsdialog antippen und bei Bedarf
                  Kamera-Berechtigung erteilen.
                </li>
                <li>
                  <strong>GiroCode scannen</strong> – Kamera auf den Code richten (15–30 cm Abstand).
                </li>
                <li>
                  <strong>Daten prüfen:</strong> IBAN, Empfängername, Betrag und Verwendungszweck
                  auf Korrektheit prüfen. Nie blind bestätigen!
                </li>
                <li>
                  <strong>Überweisung freigeben</strong> mit TAN oder biometrischer Authentifizierung.
                </li>
              </ol>
            </section>

            <section aria-labelledby="browser-scanner" className="mt-10">
              <h2 id="browser-scanner">GiroCode direkt im Browser scannen</h2>
              <p>
                Kein Smartphone zur Hand? Unser kostenloser Browser-Scanner liest GiroCodes
                direkt im Browser aus – ohne App, ohne Installation, 100&nbsp;% lokal.
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
                Erstelle deinen eigenen SEPA-QR-Code kostenlos im Browser – kompatibel mit
                BAWAG Mobile Banking und allen anderen österreichischen und deutschen Banking-Apps.
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
              <h2 id="faq">Häufige Fragen – GiroCode mit BAWAG</h2>
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
