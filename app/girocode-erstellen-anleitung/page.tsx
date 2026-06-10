import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode erstellen – Schritt-für-Schritt Anleitung 2026',
  description:
    'GiroCode in 3 Schritten erstellen: IBAN eingeben, Betrag und Zweck ergänzen, QR-Code herunterladen. Kostenlos, ohne Anmeldung.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/girocode-erstellen-anleitung',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/girocode-erstellen-anleitung',
      'de': 'https://www.girocodegenerator.com/girocode-erstellen-anleitung',
      'en': 'https://www.girocodegenerator.com/en/girocode-erstellen-anleitung',
      'fr': 'https://www.girocodegenerator.com/fr/girocode-erstellen-anleitung',
      'es': 'https://www.girocodegenerator.com/es/girocode-erstellen-anleitung',
    },
  },
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'GiroCode erstellen',
  description: 'So erstellst du einen GiroCode (SEPA-QR-Code)',
  totalTime: 'PT10S',
  step: [
    {
      '@type': 'HowToStep',
      name: 'IBAN und Empfängername eingeben',
      text: 'Gib die IBAN des Empfängers (mit oder ohne Leerzeichen) und den Empfängernamen (max. 70 Zeichen) ein. Die BIC ist optional und wird für neue SEPA-Überweisungen nicht mehr benötigt.',
    },
    {
      '@type': 'HowToStep',
      name: 'Betrag und Verwendungszweck eingeben',
      text: 'Gib den Betrag in EUR ein (z.B. 49.90). Lass den Betrag leer für variable Beträge. Gib den Verwendungszweck ein (max. 140 Zeichen, z.B. "Rechnung 2026-001").',
    },
    {
      '@type': 'HowToStep',
      name: 'QR-Code generieren und herunterladen',
      text: 'Klicke auf "GiroCode erstellen". Der QR-Code wird sofort generiert. Lade ihn als PNG herunter oder kopiere ihn in die Zwischenablage.',
    },
    {
      '@type': 'HowToStep',
      name: 'GiroCode auf Rechnung einbinden',
      text: 'Füge den QR-Code in Word/Google Docs ein. Empfohlene Größe: mindestens 3×3 cm. Wiederhole die IBAN als Text unter dem QR-Code als Fallback für Nutzer ohne QR-Scanner.',
    },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Muss ich mich anmelden um einen GiroCode zu erstellen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein, komplett kostenlos ohne Anmeldung. Alle Daten bleiben lokal im Browser.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich den GiroCode auf einer Rechnung verwenden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, einfach als PNG herunterladen und in Word, Google Docs oder PDF einfügen. Mindestgröße: 2×2 cm.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich den Betrag im GiroCode weglassen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, Betrag und Verwendungszweck sind optional. Der Empfänger gibt dann den Betrag selbst ein.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie füge ich einen GiroCode in eine Rechnung ein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'QR-Code herunterladen, in Word/Docs/PDF einfügen, auf ca. 3×3 cm skalieren. Unter den QR-Code zur Sicherheit die IBAN als Text setzen.',
      },
    },
  ],
};

const stats = [
  { value: '10 Sek.', label: 'Erstellungszeit' },
  { value: '3', label: 'Schritte' },
  { value: '0 €', label: 'Kosten' },
  { value: '100%', label: 'Lokal im Browser' },
];

const steps = [
  {
    n: '1',
    title: 'IBAN und Empfängername eingeben',
    desc: 'Gib die Empfängerdaten ein. IBAN und Name sind die einzigen Pflichtfelder.',
    bullets: [
      'IBAN des Empfängers eingeben (mit oder ohne Leerzeichen)',
      'Empfängername eingeben (max. 70 Zeichen)',
      'BIC ist optional – wird für neue SEPA-Überweisungen nicht mehr benötigt',
    ],
  },
  {
    n: '2',
    title: 'Betrag und Verwendungszweck eingeben (optional)',
    desc: 'Beide Felder sind optional. Leer lassen für maximale Flexibilität.',
    bullets: [
      'Betrag in EUR eingeben (z.B. 49.90)',
      'Betrag leer lassen für variable Beträge (Empfänger gibt dann selbst ein)',
      'Verwendungszweck eingeben (max. 140 Zeichen, z.B. "Rechnung 2026-001")',
    ],
  },
  {
    n: '3',
    title: 'QR-Code generieren und herunterladen',
    desc: 'Mit einem Klick wird dein GiroCode sofort erstellt.',
    bullets: [
      'Auf "GiroCode erstellen" klicken',
      'QR-Code wird sofort generiert',
      'Als PNG herunterladen oder in die Zwischenablage kopieren',
    ],
  },
  {
    n: '4',
    title: 'GiroCode auf Rechnung einbinden (optional)',
    desc: 'Für Rechnungen: QR-Code einfügen und IBAN als Text ergänzen.',
    bullets: [
      'QR-Code in Word/Google Docs einfügen',
      'Empfohlene Größe: mindestens 3×3 cm',
      'Unter dem QR-Code die IBAN als Text wiederholen (für Nutzer ohne QR-Scanner)',
    ],
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
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
              <li className="text-slate-400">GiroCode erstellen – Anleitung</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Anleitung · GiroCode erstellen
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode erstellen – Die komplette Anleitung
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
              GiroCode erstellen: 1. Empfängername und IBAN eingeben, 2. Betrag und
              Verwendungszweck eingeben (optional), 3. QR-Code generieren und herunterladen. Der
              gesamte Prozess dauert unter 10 Sekunden. Keine Anmeldung, keine Kosten, 100% lokal
              im Browser.
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
            <h2>GiroCode erstellen in 4 Schritten</h2>

            <div className="not-prose space-y-4 mb-8">
              {steps.map((step) => (
                <div
                  key={step.n}
                  className="rounded-xl border border-[#1f2431] bg-[#0f1117] p-5"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                      style={{ background: 'linear-gradient(135deg,#22c55e,#16a34a)', color: '#0b0c10' }}
                    >
                      {step.n}
                    </div>
                    <div>
                      <h3 className="mb-2 text-base font-bold text-slate-50">{step.title}</h3>
                      <p className="text-sm text-slate-400">{step.desc}</p>
                      <ul className="mt-2 space-y-1">
                        {step.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                            <span className="mt-1 text-[#22c55e]">✓</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2>Tipps für professionelle GiroCodes auf Rechnungen</h2>
            <ul>
              <li>
                <strong>Mindestgröße:</strong> 3×3 cm für gute Lesbarkeit
              </li>
              <li>
                <strong>Fehlerkorrektur:</strong> Level M für digitale, Level H für gedruckte
                Rechnungen
              </li>
              <li>
                <strong>IBAN als Text:</strong> Zusätzlich als Text angeben (Fallback für Nutzer
                ohne Scanner)
              </li>
              <li>
                <strong>Verwendungszweck:</strong> Rechnungsnummer einbeziehen für einfache
                Zuordnung
              </li>
            </ul>

            <div className="not-prose my-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#16a34a 0%,#15803d 100%)' }}
              >
                Jetzt GiroCode erstellen →
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
                  { href: '/', label: 'GiroCode jetzt erstellen' },
                  { href: '/girocode-scannen-anleitung', label: 'GiroCode scannen – Anleitung' },
                  { href: '/freelancer', label: 'GiroCode für Freelancer' },
                  { href: '/wissen/girocode', label: 'Was ist ein GiroCode?' },
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
