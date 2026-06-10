import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'QR Code für Überweisung erstellen – Kostenlos 2026',
  description:
    'QR Code für SEPA-Überweisung kostenlos erstellen: Kunden scannen und überweisen sofort. GiroCode/EPC-QR Standard. Ohne Anmeldung, 100% lokal im Browser.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/qr-code-ueberweisung',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/qr-code-ueberweisung',
      de: 'https://www.girocodegenerator.com/qr-code-ueberweisung',
      en: 'https://www.girocodegenerator.com/en/qr-code-ueberweisung',
      fr: 'https://www.girocodegenerator.com/fr/qr-code-ueberweisung',
      es: 'https://www.girocodegenerator.com/es/qr-code-ueberweisung',
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie erstelle ich einen QR Code für eine Überweisung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GiroCode Generator öffnen, IBAN und Name eingeben, optional Betrag und Verwendungszweck hinzufügen, QR-Code herunterladen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche App brauche ich um einen Überweisungs-QR Code zu scannen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jede deutsche Banking-App: Sparkasse, ING, DKB, Volksbank, Commerzbank, Deutsche Bank, N26 und weitere.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist ein QR Code für Überweisungen kostenlos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Erstellen: Ja, kostenlos. Überweisen: normale Überweisungsgebühren der Bank (meist kostenlos für Privatkunden).',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich einen QR Code für wiederkehrende Überweisungen nutzen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wenn Betrag und Verwendungszweck immer gleich sind (z.B. monatlicher Vereinsbeitrag).',
      },
    },
  ],
};

const stats = [
  { value: '30 Sek.', label: 'Zeit bis zur Überweisung' },
  { value: '0 €', label: 'Kosten für Ersteller & Zahler' },
  { value: '36', label: 'SEPA-Länder kompatibel' },
  { value: '100%', label: 'Lokal im Browser' },
];

const useCases = [
  { title: 'Freelancer', desc: 'Auf Rechnungen für schnellere Bezahlung' },
  { title: 'Vereine', desc: 'Für Mitgliedsbeiträge und Spenden' },
  { title: 'Handwerker', desc: 'Auf Rechnung vor Ort' },
  { title: 'Privatpersonen', desc: 'Für Zahlungen untereinander' },
  { title: 'Spendenorganisationen', desc: 'Auf Flyern und Plakaten' },
];

const relatedLinks = [
  { href: '/', label: 'GiroCode kostenlos erstellen' },
  { href: '/sepa-qr-code', label: 'SEPA QR Code Generator' },
  { href: '/freelancer', label: 'GiroCode für Freelancer' },
  { href: '/verein', label: 'GiroCode für Vereine' },
];

export default function QrCodeUeberweisungPage() {
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
              <li className="text-slate-400">QR Code für Überweisung</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              SEPA-Überweisung per QR Code
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              QR Code für Überweisung erstellen – Kostenlos &amp; Sofort
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
              Ein QR Code für Überweisungen ist ein GiroCode (SEPA-QR-Code) nach EPC069-12 Standard.
              Er enthält IBAN, Betrag und Verwendungszweck und ermöglicht es, durch einfaches
              Scannen mit der Banking-App eine Überweisung auszulösen – in unter 30 Sekunden.
            </p>
          </div>

          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-lg border border-[#1f2431] bg-[#0f1117] p-4 text-center"
              >
                <p className="text-2xl font-bold text-[#22c55e]">{s.value}</p>
                <p className="mt-1 text-xs leading-snug text-[#8b90a0]">{s.label}</p>
              </div>
            ))}
          </div>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2>Wie funktioniert ein QR Code für Überweisungen?</h2>
            <ol>
              <li>
                <strong>QR Code erstellen:</strong> IBAN, Empfängername, optional Betrag und
                Verwendungszweck eingeben
              </li>
              <li>
                <strong>Teilen oder drucken:</strong> QR Code auf Rechnung, E-Mail oder Website
                platzieren
              </li>
              <li>
                <strong>Scannen &amp; überweisen:</strong> Empfänger scannt mit Banking-App →
                Überweisung wird automatisch ausgefüllt
              </li>
            </ol>

            <h2>Wofür wird ein Überweisungs-QR-Code verwendet?</h2>
            <ul>
              {useCases.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.desc}
                </li>
              ))}
            </ul>

            <h2>Vorteile gegenüber manueller IBAN-Eingabe</h2>
            <ul>
              <li>Keine Tippfehler bei der IBAN</li>
              <li>Betrag wird automatisch eingetragen</li>
              <li>Verwendungszweck korrekt übernommen</li>
              <li>Schneller: ca. 10 Sekunden statt 2 Minuten</li>
            </ul>

            <div className="not-prose my-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
              >
                QR Code für Überweisung erstellen →
              </Link>
            </div>

            <h2>FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Wie erstelle ich einen QR Code für eine Überweisung?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  GiroCode Generator öffnen, IBAN und Name eingeben, optional Betrag und
                  Verwendungszweck hinzufügen, QR-Code herunterladen.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Welche App brauche ich um einen Überweisungs-QR Code zu scannen?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Jede deutsche Banking-App: Sparkasse, ING, DKB, Volksbank, Commerzbank,
                  Deutsche Bank, N26 und weitere.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Ist ein QR Code für Überweisungen kostenlos?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Erstellen: Ja, kostenlos. Überweisen: normale Überweisungsgebühren der Bank
                  (meist kostenlos für Privatkunden).
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Kann ich einen QR Code für wiederkehrende Überweisungen nutzen?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Ja, wenn Betrag und Verwendungszweck immer gleich sind (z.&nbsp;B. monatlicher
                  Vereinsbeitrag).
                </p>
              </div>
            </div>

            <div className="not-prose mt-10 rounded-2xl border border-[#1f2431] bg-[#0f1117] p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xl" aria-hidden>
                  📚
                </span>
                <h2 className="text-base font-bold text-[#e8eaf0]">Weitere Artikel</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {relatedLinks.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3.5 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/30 hover:bg-[#1a1d25] hover:text-[#e8eaf0]"
                  >
                    <span className="leading-snug">{a.label}</span>
                    <span className="ml-3 shrink-0 text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">
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
