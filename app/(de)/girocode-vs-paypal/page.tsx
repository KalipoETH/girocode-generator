import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GiroCode vs. PayPal – Welche Zahlungsmethode ist besser? (2026)',
  description:
    'GiroCode oder PayPal? Direkter Vergleich: Kosten, Datenschutz, Verbreitung und Einsatzbereiche. Mit Vergleichstabelle.',
  alternates: {
    canonical: `${SITE_URL}/girocode-vs-paypal`,
    languages: {
      'x-default': `${SITE_URL}/girocode-vs-paypal`,
      'de': `${SITE_URL}/girocode-vs-paypal`,
      'en': `${SITE_URL}/en/girocode-vs-paypal`,
      'fr': `${SITE_URL}/fr/girocode-vs-paypal`,
      'es': `${SITE_URL}/es/girocode-vs-paypal`,
      'it': `${SITE_URL}/it/girocode-vs-paypal`,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  articleType: 'ComparisonArticle',
  headline: 'GiroCode vs. PayPal – Welche Zahlungsmethode ist besser?',
  description:
    'GiroCode oder PayPal? Direkter Vergleich: Kosten, Datenschutz, Verbreitung und Einsatzbereiche.',
  author: {
    '@type': 'Person',
    name: 'Kaleb Jahnke',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GiroCode Generator',
    url: SITE_URL,
  },
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/girocode-vs-paypal`,
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was kostet GiroCode im Vergleich zu PayPal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GiroCode ist für Empfänger und Zahler vollständig kostenlos. PayPal erhebt beim Empfänger Gebühren von 1,2–3,4 % plus eine Fixgebühr pro Transaktion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist GiroCode DSGVO-konform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. GiroCode verarbeitet keine persönlichen Daten über Drittanbieter. Die Überweisung läuft direkt über die Hausbank, ohne US-Server oder Drittanbieter-Registrierung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wann sollte ich PayPal statt GiroCode verwenden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PayPal ist besser für internationale Zahlungen außerhalb des SEPA-Raums, Online-Shops mit Käuferschutz und spontane Zahlungen an Personen ohne bekannte IBAN.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich GiroCode auch im Ausland verwenden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GiroCode funktioniert im gesamten SEPA-Raum (36 Länder). Für Zahlungen außerhalb des SEPA-Raums (z.B. USA, Asien) ist PayPal oder SWIFT die bessere Wahl.',
      },
    },
  ],
};

export default function GirocodeVsPaypalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
                <Link href="/" className="text-sky-400 hover:text-sky-300">Startseite</Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">GiroCode vs. PayPal</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Vergleich · Zahlungsmethoden 2026
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode vs. PayPal: Der direkte Vergleich (2026)
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
              GiroCode ist für SEPA-Überweisungen kostenlos und DSGVO-konform, während PayPal
              Gebühren von 1,2–3,4&nbsp;%&nbsp;+&nbsp;Fix erhebt und Daten an US-Server überträgt.
              GiroCode eignet sich ideal für Rechnungen und direkte Überweisungen, PayPal für
              internationale Zahlungen und Online-Shops.
            </p>
          </div>

          {/* Stats Block */}
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { value: '0 €', label: 'Kosten GiroCode für Empfänger' },
              { value: '1,2–3,4%', label: 'PayPal-Gebühren für Empfänger' },
              { value: '36', label: 'SEPA-Länder mit GiroCode' },
              { value: '100%', label: 'DSGVO-Konformität GiroCode' },
            ].map((stat, i) => (
              <div key={i} className="rounded-lg border border-[#1f2431] bg-[#0f1117] p-4 text-center">
                <p className="text-2xl font-bold text-[#22c55e]">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-[#8b90a0]">{stat.label}</p>
              </div>
            ))}
          </div>

          <article className="prose prose-invert prose-lg max-w-none">

            {/* Vergleichstabelle */}
            <h2 id="vergleich">Vergleichstabelle: GiroCode vs. PayPal</h2>
            <div className="not-prose my-6 overflow-x-auto rounded-lg border border-slate-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 text-slate-300">
                    <th className="px-4 py-3 text-left font-medium">Kriterium</th>
                    <th className="px-4 py-3 text-left font-medium text-[#22c55e]">GiroCode</th>
                    <th className="px-4 py-3 text-left font-medium text-slate-400">PayPal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50 text-slate-300">
                  {[
                    ['Kosten Empfänger', 'Kostenlos', '1,2–3,4 % + Fix'],
                    ['Kosten Zahler', 'Kostenlos', 'Kostenlos (Standardzahlung)'],
                    ['Datenschutz', 'DSGVO-konform, lokal', 'US-Unternehmen, Datenweitergabe'],
                    ['Registrierung', 'Keine', 'PayPal-Konto Pflicht'],
                    ['Verbreitung DE', 'Alle SEPA-Banken', 'Sehr weit'],
                    ['Zahlungsart', 'SEPA-Überweisung', 'PayPal-Guthaben / Karte'],
                    ['Erstattungsschutz', 'Nein', 'Käuferschutz vorhanden'],
                    ['Ideal für', 'Rechnungen, B2B', 'Online-Shops, international'],
                  ].map(([kriterium, girocode, paypal], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-slate-800/30' : ''}>
                      <td className="px-4 py-3 font-medium text-slate-200">{kriterium}</td>
                      <td className="px-4 py-3 text-[#22c55e]">{girocode}</td>
                      <td className="px-4 py-3">{paypal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Wann ist GiroCode besser */}
            <h2 id="girocode-vorteile">Wann ist GiroCode besser?</h2>
            <p>
              GiroCode ist die überlegene Wahl, wenn folgende Faktoren wichtig sind:
            </p>
            <ul>
              <li>
                <strong>Rechnungen zwischen Unternehmen (B2B):</strong> Keine Gebühren,
                direkte SEPA-Überweisung auf das Geschäftskonto.
              </li>
              <li>
                <strong>Mitgliedsbeiträge in Vereinen:</strong> Einmaliger QR-Code für alle
                Mitglieder, kein Registrierungsaufwand.
              </li>
              <li>
                <strong>Direkte Zahlungen ohne Drittanbieter:</strong> Geld geht direkt von
                Bank zu Bank, ohne Zwischenstopp bei einem US-Unternehmen.
              </li>
              <li>
                <strong>DSGVO-sensible Bereiche:</strong> Keine Datenweitergabe an PayPal Inc.,
                keine Analyse des Kaufverhaltens.
              </li>
            </ul>

            {/* Wann ist PayPal besser */}
            <h2 id="paypal-vorteile">Wann ist PayPal besser?</h2>
            <ul>
              <li>
                <strong>Internationale Zahlungen:</strong> Außerhalb des SEPA-Raums (USA, Asien,
                Lateinamerika) hat GiroCode keine Gültigkeit.
              </li>
              <li>
                <strong>Online-Shops mit Käuferschutz:</strong> PayPal bietet Käuferschutz
                bei Nichtlieferung oder mangelhafter Ware.
              </li>
              <li>
                <strong>Zahlung an unbekannte Personen:</strong> PayPal bietet Rückbuchungsmöglichkeiten
                ohne IBAN-Kenntnisse.
              </li>
              <li>
                <strong>Sofortige Zahlung per App ohne IBAN:</strong> Nur E-Mail-Adresse
                des Empfängers notwendig.
              </li>
            </ul>

            {/* Fazit */}
            <h2 id="fazit">Fazit</h2>
            <div className="not-prose my-4 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/40 px-4 py-3 text-sm leading-relaxed text-slate-300">
              <strong className="text-slate-100">Empfehlung:</strong> Für deutsche Unternehmen
              und Freelancer ist GiroCode die kostenlose, datenschutzfreundliche Alternative
              zu PayPal für Rechnungen und SEPA-Überweisungen. PayPal bleibt relevant für
              internationale Zahlungen und E-Commerce-Käuferschutz. Beide Methoden schließen
              sich nicht aus – viele Unternehmen nutzen GiroCode für B2B-Rechnungen und
              PayPal für Endkundengeschäfte.
            </div>

            {/* CTA */}
            <div className="not-prose my-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,197,94,0.4)]"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: '#ffffff' }}
              >
                Jetzt kostenlos GiroCode erstellen →
              </Link>
            </div>

            {/* FAQ */}
            <h2 id="faq">FAQ: GiroCode vs. PayPal</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Was kostet GiroCode im Vergleich zu PayPal?
                </h3>
                <p className="text-sm text-slate-300">
                  GiroCode ist für Empfänger und Zahler vollständig kostenlos. PayPal erhebt
                  beim Empfänger Gebühren von 1,2–3,4&nbsp;% plus eine Fixgebühr pro Transaktion.
                  Bei einem Rechnungsbetrag von 1.000&nbsp;€ zahlt der Empfänger bei PayPal
                  zwischen 12 und 34&nbsp;€ Gebühren – bei GiroCode 0&nbsp;€.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Ist GiroCode DSGVO-konform?
                </h3>
                <p className="text-sm text-slate-300">
                  Ja. GiroCode verarbeitet keine persönlichen Daten über Drittanbieter. Die
                  Überweisung läuft direkt über die Hausbank, ohne US-Server oder
                  Drittanbieter-Registrierung. PayPal als US-Unternehmen unterliegt anderen
                  Datenschutzregeln und gibt Daten an Mutterkonzern Meta und Partner weiter.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Wann sollte ich PayPal statt GiroCode verwenden?
                </h3>
                <p className="text-sm text-slate-300">
                  PayPal ist besser für internationale Zahlungen außerhalb des SEPA-Raums,
                  Online-Shops mit Käuferschutz und spontane Zahlungen an Personen ohne
                  bekannte IBAN.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Kann ich GiroCode auch im Ausland verwenden?
                </h3>
                <p className="text-sm text-slate-300">
                  GiroCode funktioniert im gesamten SEPA-Raum (36 Länder inkl. Deutschland,
                  Österreich, Schweiz, Frankreich, Spanien und allen EU-Staaten). Für
                  Zahlungen außerhalb des SEPA-Raums (z.&nbsp;B. USA, Asien) ist PayPal oder
                  SWIFT die bessere Wahl.
                </p>
              </div>
            </div>

            {/* Weiterführende Artikel */}
            <div className="not-prose mt-10 rounded-2xl border border-[#1f2431] bg-[#0f1117] p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xl" aria-hidden>📚</span>
                <h2 className="text-base font-bold text-[#e8eaf0]">Weitere Vergleiche</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { href: '/girocode-vs-bankueberweisung', label: 'GiroCode vs. manuelle Überweisung' },
                  { href: '/girocode-vs-lastschrift', label: 'GiroCode vs. SEPA-Lastschrift' },
                  { href: '/wissen/girocode', label: 'Was ist ein GiroCode?' },
                  { href: '/wissen/banking-apps', label: 'Banking-Apps mit GiroCode-Support' },
                ].map((article) => (
                  <Link
                    key={article.href}
                    href={article.href}
                    className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3.5 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/30 hover:text-[#e8eaf0] hover:-translate-y-0.5"
                  >
                    <span className="leading-snug">{article.label}</span>
                    <span className="ml-3 shrink-0 text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
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
