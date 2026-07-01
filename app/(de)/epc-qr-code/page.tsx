import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'EPC QR Code Generator – EPC069-12 Standard kostenlos 2026',
  description:
    'EPC QR Code nach EPC069-12 Standard kostenlos erstellen. Technisch korrekte Implementierung für Entwickler und Unternehmen. Ohne Anmeldung.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/epc-qr-code',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/epc-qr-code',
      de: 'https://www.girocodegenerator.com/epc-qr-code',
      en: 'https://www.girocodegenerator.com/en/epc-qr-code',
      fr: 'https://www.girocodegenerator.com/fr/epc-qr-code',
      es: 'https://www.girocodegenerator.com/es/epc-qr-code',
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist der Unterschied zwischen EPC QR Code, GiroCode und SEPA QR Code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alle bezeichnen dasselbe: Der EPC QR Code ist der technische Name, GiroCode die deutsche Markenbezeichnung, SEPA QR Code der funktionale Begriff. Der zugrundeliegende Standard ist EPC069-12.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Version des EPC069-12 Standards sollte ich verwenden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Version 002 (BIC optional), da neuere Banken keine BIC mehr benötigen. Version 002 ist rückwärtskompatibel und wird von allen modernen Banking-Apps unterstützt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist der maximale Betrag in einem EPC QR Code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es gibt keine technische Begrenzung im EPC069-12 Standard selbst. SEPA-Überweisungen haben jedoch ein Maximum von 999.999.999,99 EUR.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie integriere ich den EPC QR Code Generator in meine Website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Via API unter /api/generate oder über den URL-Parameter-Ansatz. Alle Details findest du in der API-Dokumentation unter /api-docs.',
      },
    },
  ],
};

export default function EpcQrCodePage() {
  const stats = [
    { value: 'EPC069-12', label: 'Offizieller Standard' },
    { value: '11', label: 'Zeilen im Payload' },
    { value: 'V001/V002', label: 'Versionen' },
    { value: 'Level M', label: 'Fehlerkorrektur (empfohlen)' },
  ];

  const faqs = [
    {
      q: 'Was ist der Unterschied zwischen EPC QR Code, GiroCode und SEPA QR Code?',
      a: 'Alle bezeichnen dasselbe: Der EPC QR Code ist der technische Name, GiroCode die deutsche Markenbezeichnung, SEPA QR Code der funktionale Begriff. Der zugrundeliegende Standard ist EPC069-12.',
    },
    {
      q: 'Welche Version des EPC069-12 Standards sollte ich verwenden?',
      a: 'Version 002 (BIC optional), da neuere Banken keine BIC mehr benötigen. Version 002 ist rückwärtskompatibel und wird von allen modernen Banking-Apps unterstützt.',
    },
    {
      q: 'Was ist der maximale Betrag in einem EPC QR Code?',
      a: 'Es gibt keine technische Begrenzung im EPC069-12 Standard selbst. SEPA-Überweisungen haben jedoch ein Maximum von 999.999.999,99 EUR.',
    },
    {
      q: 'Wie integriere ich den EPC QR Code Generator in meine Website?',
      a: 'Via API unter /api/generate oder über den URL-Parameter-Ansatz. Alle Details findest du in der API-Dokumentation unter /api-docs.',
    },
  ];

  const related = [
    { href: '/api-docs', label: 'API Dokumentation' },
    { href: '/fuer-entwickler', label: 'GiroCode für Entwickler' },
    { href: '/wissen/epc-standard', label: 'EPC-Standard Erklärung' },
    { href: '/sepa-qr-code', label: 'SEPA QR Code Generator' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/" className="text-sky-400 hover:text-sky-300">
                  Startseite
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">EPC QR Code Generator</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Technisch · EPC069-12 Standard
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              EPC QR Code Generator – Nach EPC069-12 Standard
            </h1>
          </header>

          {/* Short Answer Box */}
          <div
            className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3"
            role="note"
          >
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">
              💡 Kurze Antwort
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              Ein EPC QR Code (European Payments Council QR Code) ist die technische Bezeichnung für
              den GiroCode. Der Standard EPC069-12 definiert den genauen Aufbau des Payloads: 11
              Zeilen mit Service Tag, Version, Encoding, SCT-Identifikation, BIC, Empfängername,
              IBAN, Betrag und Verwendungszweck.
            </p>
          </div>

          {/* Stats */}
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
            <h2>EPC069-12 Payload Aufbau</h2>
            <p>
              Der EPC069-12 Payload ist ein zeilenbasiertes Textformat mit exakt 11 Zeilen. Jede
              Zeile hat eine feste Bedeutung – Leerzeilen sind erlaubt, wenn das Feld optional ist:
            </p>
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 text-xs text-slate-200 sm:text-sm">
              <code>{`BCD                      ← Service Tag
002                      ← Version
1                        ← Character Set (1=UTF-8)
SCT                      ← Identification Code (SEPA Credit Transfer)
                         ← BIC (optional, leer lassen)
Max Mustermann           ← Name (max 70 Zeichen)
DE89370400440532013000   ← IBAN
EUR99.99                 ← Betrag (EUR + Betrag, z.B. EUR99.99)
                         ← Purpose Code (leer lassen)
                         ← Remittance Info (strukturiert, leer lassen)
Rechnung 2026-001        ← Verwendungszweck (max 140 Zeichen)`}</code>
            </pre>

            <h2>Versionen 001 vs. 002</h2>
            <p>
              Version 001 unterstützt BIC-Pflicht, Version 002 macht BIC optional. Empfohlen:
              Version 002 für neue Implementierungen. Die meisten Banking-Apps akzeptieren beide
              Versionen. Bei Version 002 kann die BIC-Zeile leer bleiben, da das SEPA-Netzwerk die
              Bank anhand der IBAN identifiziert.
            </p>

            <h2>Fehlerkorrekturlevel</h2>
            <p>
              EPC069-12 empfiehlt Level M (15 % Wiederherstellung) für digitale Anzeige auf
              Bildschirmen. Für Druck auf Rechnungen oder Plakaten empfiehlt sich Level H (30 %
              Wiederherstellung) für bessere Lesbarkeit – auch wenn der QR-Code leicht beschädigt
              oder verschmutzt ist.
            </p>

            <h2>JavaScript Implementierungsbeispiel</h2>
            <p>
              Diese Funktion erzeugt einen validen EPC069-12 Payload, der direkt mit einer
              QR-Code-Bibliothek (z. B. <code>qrcode</code> oder <code>qr-code-styling</code>)
              gerendert werden kann:
            </p>
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 text-xs text-slate-200 sm:text-sm">
              <code>{`function buildEPCPayload({ name, iban, bic = '', amount, purpose = '' }) {
  const amountStr = amount ? 'EUR' + Number(amount).toFixed(2) : '';
  return [
    'BCD',       // Service Tag
    '002',       // Version
    '1',         // Character Set (UTF-8)
    'SCT',       // SEPA Credit Transfer
    bic.trim(),  // BIC (optional)
    name.trim().slice(0, 70),
    iban.replace(/\\s+/g, '').toUpperCase(),
    amountStr,   // EUR + amount or empty
    '',          // Purpose Code (leer)
    '',          // Structured Remittance Info (leer)
    purpose.trim().slice(0, 140)
  ].join('\\n');
}`}</code>
            </pre>

            {/* CTA */}
            <div className="not-prose my-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#16a34a 0%,#15803d 100%)' }}
              >
                EPC QR Code erstellen →
              </Link>
              <Link
                href="/api-docs"
                className="ml-4 inline-flex items-center gap-2 rounded-xl border border-[#1f2431] px-6 py-3 text-sm font-medium text-slate-300 transition duration-200 hover:border-emerald-500/30 hover:text-white"
              >
                API Dokumentation →
              </Link>
            </div>

            {/* FAQ */}
            <h2>Häufige Fragen zum EPC QR Code</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-sm font-semibold text-slate-50">{faq.q}</h3>
                  <p className="text-sm text-slate-300">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* Related */}
            <div className="not-prose mt-10 rounded-2xl border border-[#1f2431] bg-[#0f1117] p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xl" aria-hidden>
                  📚
                </span>
                <h2 className="text-base font-bold text-[#e8eaf0]">Weitere Artikel</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {related.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3.5 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/30 hover:text-[#e8eaf0] hover:-translate-y-0.5"
                  >
                    <span>{a.label}</span>
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
