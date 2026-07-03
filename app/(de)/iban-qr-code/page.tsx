import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'IBAN QR Code Generator – Kostenlos erstellen 2026',
  description:
    'IBAN als QR Code kodieren: GiroCode/SEPA-QR kostenlos generieren. IBAN, Betrag und Verwendungszweck im QR Code – kompatibel mit allen Banking-Apps.',
  alternates: {
    canonical: `${SITE_URL}/iban-qr-code`,
    languages: {
      'x-default': `${SITE_URL}/iban-qr-code`,
      de: `${SITE_URL}/iban-qr-code`,
      en: `${SITE_URL}/en/iban-qr-code`,
      fr: `${SITE_URL}/fr/iban-qr-code`,
      es: `${SITE_URL}/es/iban-qr-code`,
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie kodiere ich eine IBAN in einen QR Code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Verwende einen GiroCode Generator nach EPC069-12 Standard. Dieser kodiert IBAN, Empfängername, optionalen Betrag und Verwendungszweck strukturiert – nicht nur als Text.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich jeden QR Code Reader für IBAN QR Codes verwenden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. Nur Banking-Apps mit EPC/GiroCode-Unterstützung erkennen die Zahlungsdaten als Überweisungsauftrag. Normale QR-Scanner zeigen nur den Rohtext.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist der Unterschied zwischen einem QR Code mit IBAN und einem GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ein normaler QR Code enthält nur Text. Ein GiroCode (IBAN QR Code) enthält strukturierte Zahlungsdaten nach EPC069-12, die Banking-Apps direkt als Überweisung erkennen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist meine IBAN im QR Code sicher?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Der Generator arbeitet lokal im Browser, ohne Speicherung. Die IBAN ist im QR-Code sichtbar – das ist beim GiroCode so vorgesehen, damit Zahlungen möglich sind.',
      },
    },
  ],
};

const stats = [
  { value: '34', label: 'Max. IBAN-Zeichen' },
  { value: 'EPC069-12', label: 'QR-Standard für IBANs' },
  { value: '10 Sek.', label: 'Erstellungszeit' },
  { value: '100%', label: 'Kostenlos' },
];

const comparisonRows = [
  ['Banking-App scanbar', '✅ Ja', '❌ Nein'],
  ['Betrag übertragbar', '✅ Ja', '❌ Nein'],
  ['Standard', 'EPC069-12', 'Kein Standard'],
  ['Verwendungszweck', '✅ Ja', '❌ Nein'],
  ['Direkte Überweisung', '✅ Ja', '❌ Nein'],
];

const relatedLinks = [
  { href: '/sepa-qr-code', label: 'SEPA QR Code Generator' },
  { href: '/epc-qr-code', label: 'EPC QR Code Generator' },
  { href: '/wissen/iban-bic', label: 'IBAN & BIC erklärt' },
  { href: '/', label: 'Kostenlos GiroCode erstellen' },
];

export default function IbanQrCodePage() {
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
              <li className="text-slate-400">IBAN QR Code Generator</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              IBAN als QR Code · GiroCode Standard
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              IBAN QR Code Generator – Kostenlos &amp; Sofort
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
              Ein IBAN QR Code (technisch: GiroCode oder SEPA-QR) kodiert eine IBAN zusammen mit
              optionalem Betrag und Verwendungszweck in einem QR-Code nach EPC-Standard. Im Gegensatz
              zu einem einfachen QR Code mit IBAN-Text ist ein GiroCode direkt von Banking-Apps
              scanbar.
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
            <h2>IBAN QR Code vs. einfacher QR Code</h2>
            <p>
              Viele erstellen einen QR Code, der nur die IBAN als Text enthält. Das funktioniert
              nicht mit Banking-Apps – nur ein strukturierter GiroCode nach{' '}
              <a
                href="https://www.europeanpaymentscouncil.eu/document-library/guidance-documents/quick-response-code-guidelines-enable-data-capture-initiation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline hover:text-sky-300"
              >
                EPC069-12
              </a>{' '}
              wird als Überweisungsauftrag erkannt.
            </p>

            <div className="not-prose my-6 overflow-x-auto rounded-lg border border-slate-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 text-slate-300">
                    <th className="px-4 py-3 text-left font-medium">Merkmal</th>
                    <th className="px-4 py-3 text-left font-medium text-[#22c55e]">
                      IBAN QR Code (GiroCode)
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-slate-400">
                      Normaler QR Code
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50 text-slate-300">
                  {comparisonRows.map(([label, giro, normal], i) => (
                    <tr key={label} className={i % 2 === 1 ? 'bg-slate-800/30' : ''}>
                      <td className="px-4 py-3 font-medium text-slate-200">{label}</td>
                      <td className="px-4 py-3 text-[#22c55e]">{giro}</td>
                      <td className="px-4 py-3">{normal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Wie erstelle ich einen IBAN QR Code?</h2>
            <ol>
              <li>IBAN eingeben (z.&nbsp;B. DE89 3704 0044 0532 0130 00)</li>
              <li>Empfängername eingeben (max. 70 Zeichen)</li>
              <li>Optional: Betrag und Verwendungszweck ergänzen</li>
              <li>QR-Code generieren und als PNG herunterladen</li>
            </ol>

            <h2>Welche IBANs werden unterstützt?</h2>
            <p>
              Alle IBAN aus den 36 SEPA-Ländern: deutsche (DE), österreichische (AT), Schweizer
              (CH) und alle weiteren EU/EEA-Länder. Unser Generator validiert IBANs automatisch
              per Mod-97-Prüfsumme.
            </p>

            <div className="not-prose my-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
              >
                IBAN QR Code erstellen →
              </Link>
            </div>

            <h2>FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Wie kodiere ich eine IBAN in einen QR Code?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Verwende einen GiroCode Generator nach EPC069-12 Standard. Dieser kodiert IBAN,
                  Empfängername, optionalen Betrag und Verwendungszweck strukturiert – nicht nur als
                  Text.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Kann ich jeden QR Code Reader für IBAN QR Codes verwenden?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Nein. Nur Banking-Apps mit EPC/GiroCode-Unterstützung erkennen die Zahlungsdaten
                  als Überweisungsauftrag. Normale QR-Scanner zeigen nur den Rohtext.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Was ist der Unterschied zwischen einem QR Code mit IBAN und einem GiroCode?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Ein normaler QR Code enthält nur Text. Ein GiroCode (IBAN QR Code) enthält
                  strukturierte Zahlungsdaten nach EPC069-12, die Banking-Apps direkt als
                  Überweisung erkennen.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Ist meine IBAN im QR Code sicher?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Der Generator arbeitet lokal im Browser, ohne Speicherung. Die IBAN ist im
                  QR-Code sichtbar – das ist beim GiroCode so vorgesehen, damit Zahlungen möglich
                  sind.
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
