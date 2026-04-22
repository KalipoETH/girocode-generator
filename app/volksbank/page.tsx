import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode mit Volksbank / VR-Banking scannen – Anleitung 2026',
  description:
    'GiroCode mit der VR-Banking App scannen – so geht\'s: Überweisung öffnen, QR-Code scannen, Daten prüfen & bestätigen. ✅ Auch mit Raiffeisenbank App.',
  keywords: 'volksbank girocode, vr-banking girocode scannen, raiffeisenbank qr code, sepa qr volksbank',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/volksbank',
  },
};

const otherBanks = [
  { href: '/sparkasse', label: 'Sparkasse' },
  { href: '/deutsche-bank', label: 'Deutsche Bank' },
  { href: '/commerzbank', label: 'Commerzbank' },
  { href: '/ing', label: 'ING' },
  { href: '/dkb', label: 'DKB' },
  { href: '/postbank', label: 'Postbank' },
  { href: '/targobank', label: 'Targobank' },
  { href: '/n26', label: 'N26' },
  { href: '/comdirect', label: 'Comdirect' },
];

const faqItems = [
  {
    question: 'Funktioniert das auch mit der Raiffeisenbank App?',
    answer:
      'Ja, Volksbank und Raiffeisenbank verwenden dieselbe VR-Banking App. Das Scannen von GiroCodes funktioniert bei beiden Instituten auf dem identischen Weg.',
  },
  {
    question: 'Wo finde ich den QR-Scanner in der VR-Banking App?',
    answer:
      'Den QR-Scanner findest du unter „Überweisung" – dort gibt es einen Button „QR-Code scannen" oder ein Kamera-Symbol. Tippe darauf, um den Scanner zu öffnen.',
  },
  {
    question: 'Unterstützt VR-Banking alle GiroCodes?',
    answer:
      'Ja, die VR-Banking App erkennt alle EPC-konformen SEPA-QR-Codes (GiroCodes). Stelle sicher, dass du die aktuelle App-Version verwendest.',
  },
  {
    question: 'Was ist der Unterschied zwischen GiroCode und einem normalen QR-Code?',
    answer:
      'Ein GiroCode ist ein standardisierter SEPA-QR-Code nach dem EPC-Standard (European Payments Council). Er enthält strukturierte Zahlungsdaten wie IBAN, BIC, Betrag und Verwendungszweck und kann direkt von Banking-Apps zur Überweisungsvorausfüllung genutzt werden.',
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

export default function VolksbankPage() {
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
              <li className="text-slate-400">Volksbank / VR-Banking</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="mb-10 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Kompatibel mit VR-Banking App
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode mit der VR-Banking App scannen
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              So nutzt du GiroCodes (SEPA-QR-Codes) mit der Volksbank- und Raiffeisenbank-App (VR-Banking) –
              Schritt für Schritt erklärt. Klappt bei allen VR-Banking-Instituten.
            </p>
          </header>

          <article className="prose prose-invert prose-lg max-w-none">

            {/* Section 1: Anleitung */}
            <section aria-labelledby="anleitung">
              <h2 id="anleitung">Schritt-für-Schritt Anleitung</h2>
              <p>
                Die VR-Banking App der Volks- und Raiffeisenbanken unterstützt GiroCodes nativ.
                So funktioniert das Scannen:
              </p>
              <ol>
                <li>
                  <strong>VR-Banking App öffnen</strong> und mit PIN, Fingerabdruck oder Face ID anmelden.
                </li>
                <li>
                  <strong>„Überweisung"</strong> im Hauptmenü oder der Navigationsleiste aufrufen.
                </li>
                <li>
                  <strong>„QR-Code scannen"</strong> antippen – der Button befindet sich im
                  Überweisungsformular, teilweise als Kamera-Symbol oben rechts.
                </li>
                <li>
                  <strong>GiroCode scannen</strong> – Kamera auf den Code richten. Die App erkennt
                  den Code automatisch und befüllt alle Felder.
                </li>
                <li>
                  <strong>Daten prüfen:</strong> Empfängername, IBAN, Betrag und Verwendungszweck
                  auf Korrektheit kontrollieren.
                </li>
                <li>
                  <strong>Überweisung bestätigen</strong> mit VR SecureGo+, chipTAN oder
                  photoTAN. Fertig.
                </li>
              </ol>
              <p>
                <strong>Hinweis:</strong> Volksbank und Raiffeisenbank nutzen dieselbe VR-Banking App –
                das Vorgehen ist bei beiden Instituten identisch.
              </p>
            </section>

            {/* Section 2: Browser-Scanner */}
            <section aria-labelledby="browser-scanner" className="mt-10">
              <h2 id="browser-scanner">GiroCode direkt im Browser scannen</h2>
              <p>
                Du möchtest einen GiroCode am Computer oder ohne VR-Banking App auslesen?
                Unser kostenloser Browser-Scanner zeigt dir alle Zahlungsdaten aus einem GiroCode –
                IBAN, Betrag, Verwendungszweck – direkt im Browser. Keine App, keine Installation nötig.
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
                Du stellst Rechnungen aus und möchtest deinen Kunden die Zahlung per GiroCode-Scan
                ermöglichen? Unser kostenloser Generator erstellt einen EPC-konformen SEPA-QR-Code
                in Sekunden – für Rechnungen, E-Mails oder deine Website.
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
              <h2 id="faq">Häufige Fragen – GiroCode mit Volksbank / VR-Banking</h2>
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
