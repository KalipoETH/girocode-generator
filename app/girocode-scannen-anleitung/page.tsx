import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode scannen – Komplette Anleitung für alle Apps 2026',
  description:
    'GiroCode scannen mit Sparkasse, ING, DKB, Volksbank & Co.: Schritt-für-Schritt Anleitung für alle Banking-Apps. Mit Handy-Kamera oder Datei-Upload.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/girocode-scannen-anleitung',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/girocode-scannen-anleitung',
      'de': 'https://www.girocodegenerator.com/girocode-scannen-anleitung',
      'en': 'https://www.girocodegenerator.com/en/girocode-scannen-anleitung',
      'fr': 'https://www.girocodegenerator.com/fr/girocode-scannen-anleitung',
      'es': 'https://www.girocodegenerator.com/es/girocode-scannen-anleitung',
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wo finde ich den QR-Scanner in meiner Banking-App?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unter "Überweisung" oder "Überweisen" gibt es ein Kamera/QR-Icon. Bei manchen Apps auch unter "Scan & Pay".',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich einen GiroCode ohne Banking-App scannen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, mit unserem Browser-Scanner unter /scanner. Normale QR-Code-Reader wie Google Lens erkennen den EPC-Inhalt jedoch nicht als Überweisung.',
      },
    },
    {
      '@type': 'Question',
      name: 'GiroCode scannt aber Banking-App zeigt Fehlermeldung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die IBAN könnte ungültig sein oder der Betrag das zulässige Maximum überschreiten. Code neu erstellen und IBAN prüfen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich GiroCodes aus einem PDF scannen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, viele Banking-Apps erlauben das Importieren von Fotos/Screenshots. Du kannst auch unseren Browser-Scanner verwenden.',
      },
    },
  ],
};

const banks = [
  { name: 'Sparkasse App', path: 'Überweisung → QR-Code Icon oben rechts' },
  { name: 'ING Banking to go', path: 'Überweisung → Kamera-Symbol' },
  { name: 'DKB Banking', path: 'Überweisen → QR-Code scannen' },
  { name: 'Volksbank / VR-Banking', path: 'Überweisen → QR-Code Icon' },
  { name: 'Commerzbank', path: 'Überweisen → QR-Code' },
  { name: 'Deutsche Bank', path: 'Überweisung → QR-Code' },
  { name: 'N26', path: 'Senden → QR-Code scannen' },
  { name: 'Postbank', path: 'Überweisen → QR-Code Icon' },
  { name: 'Comdirect', path: 'Überweisung → QR-Code' },
  { name: 'Targobank', path: 'Überweisung → QR-Code scannen' },
];

const stats = [
  { value: '30 Sek.', label: 'Scan bis Überweisung' },
  { value: '10+', label: 'Unterstützte Banking-Apps' },
  { value: '36', label: 'SEPA-Länder kompatibel' },
  { value: 'EPC069-12', label: 'Unterstützter Standard' },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/" className="text-sky-400 hover:text-sky-300">
                  Startseite
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">GiroCode scannen – Anleitung</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Anleitung · GiroCode scannen
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode scannen – Anleitung für alle Banking-Apps
            </h1>
          </header>

          <div
            className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3"
            role="note"
          >
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">
              💡 Kurze Antwort
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              GiroCode scannen: Banking-App öffnen → &quot;Überweisung&quot; antippen → QR-Scanner Icon tippen
              → GiroCode scannen → Daten prüfen → TAN bestätigen. Der gesamte Vorgang dauert unter
              30 Sekunden. Funktioniert mit Sparkasse, ING, DKB, Volksbank und allen anderen
              SEPA-kompatiblen Apps.
            </p>
          </div>

          <div className="not-prose mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.value}
                className="rounded-xl border border-[#1f2431] bg-[#0f1117] px-4 py-3 text-center"
              >
                <p className="text-lg font-bold text-[#22c55e]">{s.value}</p>
                <p className="mt-0.5 text-[11px] text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2>Allgemeine Scan-Anleitung (3 Schritte)</h2>

            <div className="not-prose space-y-3 mb-8">
              {[
                {
                  n: '1',
                  title: 'Banking-App öffnen und zu „Überweisung" navigieren',
                  desc: 'Starte deine Banking-App und tippe auf „Überweisung" oder „Überweisen". In manchen Apps findest du die Funktion auch unter „Zahlungen" oder „Zahlen & Überweisen".',
                },
                {
                  n: '2',
                  title: 'QR-Code-Scanner Icon antippen',
                  desc: 'Im Überweisungsformular erscheint ein Kamera- oder QR-Code-Symbol. Tippe darauf, um den Scanner zu öffnen. Bei manchen Apps musst du zuerst „Neue Überweisung" wählen.',
                },
                {
                  n: '3',
                  title: 'GiroCode einscannen und bestätigen',
                  desc: 'Halte die Kamera auf den GiroCode. Die Empfängerdaten (IBAN, Name, Betrag, Verwendungszweck) werden automatisch ausgefüllt. Prüfe die Daten und bestätige mit deiner TAN.',
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="rounded-xl border border-[#1f2431] bg-[#0f1117] p-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#22c55e]/20 text-xs font-bold text-[#22c55e]">
                      {step.n}
                    </span>
                    <div>
                      <h3 className="mb-1 text-sm font-bold text-slate-50">{step.title}</h3>
                      <p className="text-sm text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2>App-spezifische Anleitungen</h2>

            <div className="not-prose space-y-2 mb-6">
              {banks.map((b, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-[#1f2431] bg-[#0f1117] px-4 py-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#22c55e]/20 text-xs font-bold text-[#22c55e]">
                    {i + 1}
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-slate-200">{b.name}: </span>
                    <span className="text-sm text-slate-400">{b.path}</span>
                  </div>
                </div>
              ))}
            </div>

            <h2>Häufige Probleme beim Scannen</h2>
            <p>
              Wenn das Scannen nicht funktioniert, überprüfe zuerst die Beleuchtung, den Abstand
              und die Größe des QR-Codes. Eine vollständige Übersicht aller möglichen Probleme und
              deren Lösungen findest du in unserem Artikel{' '}
              <Link href="/girocode-funktioniert-nicht" className="text-[#22c55e] hover:underline">
                GiroCode funktioniert nicht – 7 Ursachen &amp; Lösungen
              </Link>
              .
            </p>

            <h2>Alternative: Im Browser scannen</h2>
            <p>
              Mit unserem Browser-Scanner können GiroCodes auch direkt auf dem PC oder Tablet
              gescannt werden, ohne Banking-App. Einfach die Bilddatei hochladen oder die Kamera
              verwenden – die Überweisungsdaten werden sofort ausgelesen.
            </p>

            <div className="not-prose my-6 flex flex-wrap gap-3">
              <Link
                href="/scanner"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#16a34a 0%,#15803d 100%)' }}
              >
                GiroCode im Browser scannen →
              </Link>
            </div>

            <h2>Häufig gestellte Fragen</h2>

            <div className="not-prose space-y-4 mb-8">
              {faqJsonLd.mainEntity.map((faq, i) => (
                <div key={i} className="rounded-xl border border-[#1f2431] bg-[#0f1117] p-5">
                  <h3 className="mb-2 text-sm font-bold text-slate-50">{faq.name}</h3>
                  <p className="text-sm text-slate-400">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>

            <div className="not-prose mt-10 rounded-2xl border border-[#1f2431] bg-[#0f1117] p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xl" aria-hidden>
                  📚
                </span>
                <h2 className="text-base font-bold text-[#e8eaf0]">Weitere Artikel</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { href: '/scanner', label: 'Browser GiroCode Scanner' },
                  { href: '/girocode-funktioniert-nicht', label: 'GiroCode funktioniert nicht – Lösungen' },
                  { href: '/wissen/banking-apps', label: 'Banking-Apps Übersicht' },
                  { href: '/girocode-erstellen-anleitung', label: 'GiroCode erstellen – Anleitung' },
                ].map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3.5 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/30 hover:text-[#e8eaf0] hover:-translate-y-0.5"
                  >
                    <span>{a.label}</span>
                    <span className="ml-3 shrink-0 text-[#22c55e] group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </span>
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
