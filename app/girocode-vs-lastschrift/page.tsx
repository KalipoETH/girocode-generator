import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode vs. Lastschrift – Unterschiede & Einsatzbereiche (2026)',
  description:
    'GiroCode oder SEPA-Lastschrift? Wann welche Methode die bessere Wahl ist. Mit Vergleichstabelle und konkreten Beispielen.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/girocode-vs-lastschrift',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/girocode-vs-lastschrift',
      'de': 'https://www.girocodegenerator.com/girocode-vs-lastschrift',
      'en': 'https://www.girocodegenerator.com/en/girocode-vs-lastschrift',
      'fr': 'https://www.girocodegenerator.com/fr/girocode-vs-lastschrift',
      'es': 'https://www.girocodegenerator.com/es/girocode-vs-lastschrift',
      'it': 'https://www.girocodegenerator.com/it/girocode-vs-lastschrift',
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  articleType: 'ComparisonArticle',
  headline: 'GiroCode vs. SEPA-Lastschrift – Unterschiede & Einsatzbereiche',
  description:
    'GiroCode oder SEPA-Lastschrift? Wann welche Methode die bessere Wahl ist.',
  author: {
    '@type': 'Person',
    name: 'Kaleb Jahnke',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GiroCode Generator',
    url: 'https://www.girocodegenerator.com',
  },
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.girocodegenerator.com/girocode-vs-lastschrift',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist der Unterschied zwischen GiroCode und SEPA-Lastschrift?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GiroCode ist eine Zahlungsaufforderung – der Zahler überweist aktiv. Eine SEPA-Lastschrift ist eine Abbuchungsermächtigung – der Empfänger zieht das Geld ein. GiroCode erfordert kein Mandat und ist sofort einsetzbar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Brauche ich für GiroCode ein SEPA-Mandat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. GiroCode benötigt kein Mandat, da der Zahler aktiv überweist. Die SEPA-Lastschrift hingegen erfordert eine schriftliche Einzugsermächtigung (SEPA-Mandat) des Zahlers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann eine SEPA-Lastschrift zurückgebucht werden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. SEPA-Lastschriften können innerhalb von 8 Wochen ohne Angabe von Gründen zurückgebucht werden. Bei unautorisierter Lastschrift sogar innerhalb von 13 Monaten. GiroCodes können nicht zurückgebucht werden, da es sich um Überweisungen handelt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet eine SEPA-Lastschrift im Vergleich zu GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SEPA-Lastschriften kosten den Empfänger je nach Bank 0,20–0,35 € pro Abbuchung. GiroCode ist für beide Seiten vollständig kostenlos.',
      },
    },
  ],
};

export default function GirocodeVsLastschriftPage() {
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
              <li className="text-slate-400">GiroCode vs. SEPA-Lastschrift</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Vergleich · Zahlungsmethoden 2026
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode vs. SEPA-Lastschrift: Der Unterschied
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
              GiroCode ist eine Zahlungsaufforderung – der Zahler überweist aktiv. Eine
              SEPA-Lastschrift ist eine Abbuchungsermächtigung – der Empfänger zieht das Geld
              ein. GiroCode erfordert kein Mandat und ist sofort einsetzbar, während
              Lastschriften ein unterschriebenes SEPA-Mandat benötigen.
            </p>
          </div>

          {/* Stats Block */}
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { value: '0 €', label: 'Kosten GiroCode pro Transaktion' },
              { value: '0,20–0,35 €', label: 'Kosten Lastschrift pro Abbuchung' },
              { value: 'Kein', label: 'Mandat bei GiroCode nötig' },
              { value: '8 Wo.', label: 'Rückbuchungsfrist Lastschrift' },
            ].map((stat, i) => (
              <div key={i} className="rounded-lg border border-[#1f2431] bg-[#0f1117] p-4 text-center">
                <p className="text-2xl font-bold text-[#22c55e]">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-[#8b90a0]">{stat.label}</p>
              </div>
            ))}
          </div>

          <article className="prose prose-invert prose-lg max-w-none">

            {/* Grundlegende Unterschiede */}
            <h2 id="unterschied">Der grundlegende Unterschied</h2>
            <p>
              GiroCode und SEPA-Lastschrift sind zwei grundlegend verschiedene Zahlungsverfahren –
              obwohl beide SEPA-konform sind und über das Bankensystem abgewickelt werden.
            </p>
            <p>
              Der entscheidende Unterschied liegt in der <strong>Initiierung der Zahlung</strong>:
              Beim GiroCode überweist der Zahler <em>aktiv</em>. Bei der Lastschrift bucht
              der Empfänger <em>aktiv</em> ab – mit Einwilligung des Zahlers.
            </p>

            {/* Vergleichstabelle */}
            <h2 id="vergleich">Vergleichstabelle: GiroCode vs. SEPA-Lastschrift</h2>
            <div className="not-prose my-6 overflow-x-auto rounded-lg border border-slate-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 text-slate-300">
                    <th className="px-4 py-3 text-left font-medium">Kriterium</th>
                    <th className="px-4 py-3 text-left font-medium text-[#22c55e]">GiroCode</th>
                    <th className="px-4 py-3 text-left font-medium text-slate-400">SEPA-Lastschrift</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50 text-slate-300">
                  {[
                    ['Zahlungsinitiierung', 'Zahler (aktiv)', 'Empfänger (passiv)'],
                    ['Mandat nötig', 'Nein', 'Ja (schriftlich)'],
                    ['Sofort einsetzbar', 'Ja', 'Nein (Mandat nötig)'],
                    ['Rücklastschrift möglich', 'Nein', 'Ja (bis 8 Wochen)'],
                    ['Ideal für', 'Einmalige Zahlungen', 'Wiederkehrende Zahlungen'],
                    ['Kosten', 'Kostenlos', '0,20–0,35 € pro Abbuchung'],
                  ].map(([kriterium, girocode, lastschrift], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-slate-800/30' : ''}>
                      <td className="px-4 py-3 font-medium text-slate-200">{kriterium}</td>
                      <td className="px-4 py-3 text-[#22c55e]">{girocode}</td>
                      <td className="px-4 py-3">{lastschrift}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Wann GiroCode besser */}
            <h2 id="girocode-vorteile">Wann ist GiroCode besser?</h2>
            <ul>
              <li>
                <strong>Einmalige Rechnungen:</strong> Perfekt für Freelancer, Handwerker
                und Unternehmen, die Einzelrechnungen stellen.
              </li>
              <li>
                <strong>Neue Kunden ohne Mandat:</strong> Kein Vorlauf nötig – GiroCode
                funktioniert ohne vorherige Vereinbarung.
              </li>
              <li>
                <strong>Spontane Zahlungen:</strong> Spendenaufrufe, Sammelbestellungen
                oder Veranstaltungsgebühren.
              </li>
            </ul>

            {/* Wann Lastschrift besser */}
            <h2 id="lastschrift-vorteile">Wann ist die Lastschrift besser?</h2>
            <ul>
              <li>
                <strong>Monatliche Abonnements:</strong> Streaming-Dienste, Software-Lizenzen
                oder Versicherungen – einmal Mandat, dann automatisch.
              </li>
              <li>
                <strong>Mitgliedsbeiträge in Vereinen:</strong> Regelmäßige, feste Beträge
                ohne Aufwand für Mitglieder.
              </li>
              <li>
                <strong>Wiederkehrende Zahlungen:</strong> Miete, Ratenzahlungen, monatliche
                Dienstleistungsgebühren.
              </li>
            </ul>

            {/* Fazit */}
            <div className="not-prose my-4 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/40 px-4 py-3 text-sm leading-relaxed text-slate-300">
              <strong className="text-slate-100">Fazit:</strong> GiroCode und Lastschrift
              ergänzen sich. Für einmalige Rechnungen ist GiroCode die schnellere, günstigere
              Lösung ohne Vorlauf. Für wiederkehrende Zahlungen bietet die Lastschrift den
              Komfort der Automation – sobald das Mandat einmal vorliegt.
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
            <h2 id="faq">FAQ: GiroCode vs. SEPA-Lastschrift</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Was ist der Unterschied zwischen GiroCode und SEPA-Lastschrift?
                </h3>
                <p className="text-sm text-slate-300">
                  GiroCode ist eine Zahlungsaufforderung – der Zahler überweist aktiv. Eine
                  SEPA-Lastschrift ist eine Abbuchungsermächtigung – der Empfänger zieht das
                  Geld ein. GiroCode erfordert kein Mandat und ist sofort einsetzbar.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Brauche ich für GiroCode ein SEPA-Mandat?
                </h3>
                <p className="text-sm text-slate-300">
                  Nein. GiroCode benötigt kein Mandat, da der Zahler aktiv überweist. Die
                  SEPA-Lastschrift hingegen erfordert eine schriftliche Einzugsermächtigung
                  (SEPA-Mandat) des Zahlers.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Kann eine SEPA-Lastschrift zurückgebucht werden?
                </h3>
                <p className="text-sm text-slate-300">
                  Ja. SEPA-Lastschriften können innerhalb von 8 Wochen ohne Angabe von
                  Gründen zurückgebucht werden. Bei unautorisierter Lastschrift sogar
                  innerhalb von 13 Monaten. GiroCodes können nicht zurückgebucht werden,
                  da es sich um Überweisungen handelt.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Was kostet eine SEPA-Lastschrift im Vergleich zu GiroCode?
                </h3>
                <p className="text-sm text-slate-300">
                  SEPA-Lastschriften kosten den Empfänger je nach Bank 0,20–0,35&nbsp;€ pro
                  Abbuchung. GiroCode ist für beide Seiten vollständig kostenlos.
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
                  { href: '/girocode-vs-paypal', label: 'GiroCode vs. PayPal' },
                  { href: '/girocode-vs-bankueberweisung', label: 'GiroCode vs. manuelle Überweisung' },
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
