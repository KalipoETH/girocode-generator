import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode mit Commerzbank scannen – Schritt-für-Schritt 2026',
  description:
    'GiroCode mit der Commerzbank App scannen: Überweisen aufrufen, QR-Code antippen, Code scannen, Daten prüfen & bestätigen. ✅ Einfach & kostenlos.',
  keywords: 'commerzbank girocode, commerzbank qr code scannen, sepa qr commerzbank, girocode commerzbank app',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/commerzbank',
  },
};

const otherBanks = [
  { href: '/sparkasse', label: 'Sparkasse' },
  { href: '/volksbank', label: 'Volksbank / VR-Banking' },
  { href: '/deutsche-bank', label: 'Deutsche Bank' },
  { href: '/ing', label: 'ING' },
  { href: '/dkb', label: 'DKB' },
  { href: '/postbank', label: 'Postbank' },
  { href: '/targobank', label: 'Targobank' },
  { href: '/n26', label: 'N26' },
  { href: '/comdirect', label: 'Comdirect' },
];

const faqItems = [
  {
    question: 'Wo finde ich den QR-Code-Scanner in der Commerzbank App?',
    answer:
      'Den QR-Scanner findest du unter „Überweisen" – dort gibt es einen Button oder ein Symbol für „QR-Code". Tippe darauf, um den Scanner zu starten.',
  },
  {
    question: 'Unterstützt die Commerzbank App alle GiroCodes?',
    answer:
      'Ja, die Commerzbank App unterstützt alle EPC-konformen GiroCodes (SEPA-QR-Codes). Stelle sicher, dass du die aktuelle App-Version im App Store oder Google Play installiert hast.',
  },
  {
    question: 'Kann ich den GiroCode auch über das Commerzbank Online-Banking am PC nutzen?',
    answer:
      'Das direkte Scannen ist nur über die mobile App möglich. Am PC kannst du unseren Browser-Scanner nutzen, um die enthaltenen Zahlungsdaten auszulesen und manuell ins Online-Banking zu übertragen.',
  },
  {
    question: 'Welche TAN-Methode wird nach dem Scan benötigt?',
    answer:
      'Die Commerzbank unterstützt nach dem Scan die Bestätigung per photoTAN (Commerzbank App), chipTAN oder SMS-TAN – je nach deinem eingerichteten TAN-Verfahren.',
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

export default function CommerzbankPage() {
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
              <li className="text-slate-400">Commerzbank</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="mb-10 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Kompatibel mit Commerzbank App
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode mit der Commerzbank App scannen
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              So nutzt du GiroCodes (SEPA-QR-Codes) mit der Commerzbank App –
              Schritt für Schritt erklärt. In wenigen Sekunden ist die Überweisung fertig.
            </p>
          </header>

          <article className="prose prose-invert prose-lg max-w-none">

            {/* Section 1: Anleitung */}
            <section aria-labelledby="anleitung">
              <h2 id="anleitung">Schritt-für-Schritt Anleitung</h2>
              <p>
                Die Commerzbank App bietet einen integrierten QR-Code-Scanner in der Überweisungsfunktion.
                So gehst du vor:
              </p>
              <ol>
                <li>
                  <strong>Commerzbank App öffnen</strong> und mit PIN, Fingerabdruck oder Face ID anmelden.
                </li>
                <li>
                  <strong>„Überweisen"</strong> in der App aufrufen – entweder über das Menü oder
                  die Schnellzugriffsleiste.
                </li>
                <li>
                  <strong>„QR-Code"</strong> antippen – den Button oder das entsprechende Symbol
                  im Überweisungsformular antippen, um den Scanner zu starten.
                </li>
                <li>
                  <strong>GiroCode scannen</strong> – Kamera auf den Code richten. Die App liest
                  den GiroCode automatisch aus und füllt alle Überweisungsfelder vor.
                </li>
                <li>
                  <strong>Daten prüfen:</strong> Empfängername, IBAN, Betrag und Verwendungszweck
                  kontrollieren – nie blind bestätigen!
                </li>
                <li>
                  <strong>Überweisung bestätigen</strong> per photoTAN, chipTAN oder SMS-TAN.
                </li>
              </ol>
            </section>

            {/* Section 2: Browser-Scanner */}
            <section aria-labelledby="browser-scanner" className="mt-10">
              <h2 id="browser-scanner">GiroCode direkt im Browser scannen</h2>
              <p>
                Kein Smartphone zur Hand oder möchtest einen GiroCode schnell am Computer prüfen?
                Unser Browser-Scanner liest alle Daten eines GiroCodes aus – IBAN, Betrag,
                Empfänger und Verwendungszweck – direkt im Browser, ohne App und ohne Datenweitergabe.
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
                Du möchtest deinen Kunden die Zahlung per GiroCode-Scan erleichtern?
                Erstelle kostenlos einen EPC-konformen SEPA-QR-Code – sofort im Browser,
                ohne Registrierung, kompatibel mit der Commerzbank App und allen anderen deutschen Banking-Apps.
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
              <h2 id="faq">Häufige Fragen – GiroCode mit Commerzbank</h2>
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
