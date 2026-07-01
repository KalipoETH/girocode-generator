import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode vs. manuelle Überweisung – Zeit & Fehler sparen (2026)',
  description:
    'GiroCode oder manuelle IBAN-Eingabe? Vergleich von Zeitaufwand, Fehlerquote und Benutzerfreundlichkeit.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/girocode-vs-bankueberweisung',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/girocode-vs-bankueberweisung',
      'de': 'https://www.girocodegenerator.com/girocode-vs-bankueberweisung',
      'en': 'https://www.girocodegenerator.com/en/girocode-vs-bankueberweisung',
      'fr': 'https://www.girocodegenerator.com/fr/girocode-vs-bankueberweisung',
      'es': 'https://www.girocodegenerator.com/es/girocode-vs-bankueberweisung',
      'it': 'https://www.girocodegenerator.com/it/girocode-vs-bankueberweisung',
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  articleType: 'ComparisonArticle',
  headline: 'GiroCode vs. manuelle Überweisung – Zeit & Fehler sparen',
  description:
    'GiroCode oder manuelle IBAN-Eingabe? Vergleich von Zeitaufwand, Fehlerquote und Benutzerfreundlichkeit.',
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
    '@id': 'https://www.girocodegenerator.com/girocode-vs-bankueberweisung',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie viel schneller ist GiroCode als eine manuelle Überweisung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eine manuelle Überweisung mit IBAN-Eingabe dauert 3–5 Minuten. Mit GiroCode dauert der gesamte Prozess unter 30 Sekunden. Das ist 6–10x schneller.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie hoch ist die Fehlerquote bei manueller IBAN-Eingabe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bei manueller Eingabe langer Zahlenfolgen wie IBANs liegt die Fehlerquote über 1 %. Bei der deutschen 22-stelligen IBAN ist das Risiko eines Zahlendrehers besonders hoch. Mit GiroCode ist die Fehlerquote 0 %.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet eine Rückbuchung bei falscher IBAN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eine Rückbuchung durch die Bank kostet in der Regel 5–15 € plus Zeitaufwand für Klärung. Bei falscher Kontonummer kann die Rückholung mehrere Wochen dauern.',
      },
    },
    {
      '@type': 'Question',
      name: 'Muss der Zahler eine App installieren um GiroCode zu nutzen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. Der Zahler nutzt einfach seine bestehende Banking-App (Sparkasse, VR-Banking, ING, DKB etc.). Alle großen deutschen Banking-Apps unterstützen GiroCodes seit 2016.',
      },
    },
  ],
};

export default function GirocodeVsBankueberweisungPage() {
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
              <li className="text-slate-400">GiroCode vs. manuelle Überweisung</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Vergleich · Zahlungsmethoden 2026
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode vs. manuelle Überweisung: Warum QR-Code gewinnt
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
              Eine manuelle IBAN-Eingabe dauert durchschnittlich 3–5 Minuten und hat eine
              Fehlerquote von über 1&nbsp;% bei 22-stelligen deutschen IBANs. Mit einem GiroCode
              dauert die Überweisung unter 30&nbsp;Sekunden, Tippfehler sind ausgeschlossen.
            </p>
          </div>

          {/* Stats Block */}
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { value: '3–5 Min.', label: 'Manuelle IBAN-Eingabe' },
              { value: '< 30 Sek.', label: 'Mit GiroCode' },
              { value: '> 1%', label: 'Fehlerquote manuell' },
              { value: '0%', label: 'Fehlerquote mit GiroCode' },
            ].map((stat, i) => (
              <div key={i} className="rounded-lg border border-[#1f2431] bg-[#0f1117] p-4 text-center">
                <p className="text-2xl font-bold text-[#22c55e]">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-[#8b90a0]">{stat.label}</p>
              </div>
            ))}
          </div>

          <article className="prose prose-invert prose-lg max-w-none">

            {/* Vergleichstabelle */}
            <h2 id="vergleich">Vergleichstabelle: GiroCode vs. manuelle Überweisung</h2>
            <div className="not-prose my-6 overflow-x-auto rounded-lg border border-slate-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 text-slate-300">
                    <th className="px-4 py-3 text-left font-medium">Kriterium</th>
                    <th className="px-4 py-3 text-left font-medium text-[#22c55e]">GiroCode</th>
                    <th className="px-4 py-3 text-left font-medium text-slate-400">Manuelle Eingabe</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50 text-slate-300">
                  {[
                    ['Zeitaufwand', '< 30 Sekunden', '3–5 Minuten'],
                    ['Tippfehler', 'Nicht möglich', 'Häufig'],
                    ['Verwendungszweck', 'Automatisch', 'Oft vergessen'],
                    ['Benutzerfreundlichkeit', 'Sehr hoch', 'Mittel'],
                    ['Professionalität', 'Sehr hoch', 'Standard'],
                    ['Kosten', 'Kostenlos', 'Kostenlos'],
                  ].map(([kriterium, girocode, manuell], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-slate-800/30' : ''}>
                      <td className="px-4 py-3 font-medium text-slate-200">{kriterium}</td>
                      <td className="px-4 py-3 text-[#22c55e]">{girocode}</td>
                      <td className="px-4 py-3">{manuell}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Warum Tippfehler teuer sind */}
            <h2 id="tippfehler">Warum Tippfehler bei IBANs so teuer sind</h2>
            <p>
              Die deutsche IBAN hat 22 Stellen – und bei dieser Länge passieren Fehler schnell.
              Die Konsequenzen eines Tippfehlers können erheblich sein:
            </p>
            <ul>
              <li>
                <strong>Rückbuchungsgebühren 5–15 €:</strong> Wenn eine Überweisung an eine
                falsche, aber existierende IBAN gesendet wird, kostet die Rückholung Gebühren –
                und kann Wochen dauern.
              </li>
              <li>
                <strong>Zeitverlust bei Klärung:</strong> Unternehmen verbringen im Schnitt
                mehrere Stunden im Jahr mit der Klärung von Fehlüberweisungen.
              </li>
              <li>
                <strong>Imageprobleme bei Kunden:</strong> Kunden, die für eine Fehlbuchung
                kontaktiert werden, verlieren das Vertrauen in die Professionalität des
                Rechnungsstellers.
              </li>
            </ul>

            <h2 id="vorteile-girocode">So spart GiroCode Zeit und Fehler</h2>
            <p>
              Mit einem GiroCode auf der Rechnung entfällt die manuelle Eingabe vollständig:
              Der Zahler öffnet seine Banking-App, scannt den QR-Code und alle Felder sind
              automatisch ausgefüllt – IBAN, Betrag und Verwendungszweck. Ein einziger
              Bestätigungsklick reicht.
            </p>
            <p>
              Besonders wertvoll: Der <strong>Verwendungszweck</strong> wird automatisch
              übertragen. Bei manueller Eingabe wird er häufig vergessen oder falsch
              eingetragen, was die Zuordnung von Zahlungen in der Buchhaltung erschwert.
            </p>

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
            <h2 id="faq">FAQ: GiroCode vs. manuelle Überweisung</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Wie viel schneller ist GiroCode als eine manuelle Überweisung?
                </h3>
                <p className="text-sm text-slate-300">
                  Eine manuelle Überweisung mit IBAN-Eingabe dauert 3–5 Minuten. Mit GiroCode
                  dauert der gesamte Prozess unter 30 Sekunden. Das ist 6–10x schneller.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Wie hoch ist die Fehlerquote bei manueller IBAN-Eingabe?
                </h3>
                <p className="text-sm text-slate-300">
                  Bei manueller Eingabe langer Zahlenfolgen wie IBANs liegt die Fehlerquote
                  über 1&nbsp;%. Bei der deutschen 22-stelligen IBAN ist das Risiko eines
                  Zahlendrehers besonders hoch. Mit GiroCode ist die Fehlerquote 0&nbsp;%.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Was kostet eine Rückbuchung bei falscher IBAN?
                </h3>
                <p className="text-sm text-slate-300">
                  Eine Rückbuchung durch die Bank kostet in der Regel 5–15&nbsp;€ plus
                  Zeitaufwand für Klärung. Bei falscher Kontonummer kann die Rückholung
                  mehrere Wochen dauern.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Muss der Zahler eine App installieren um GiroCode zu nutzen?
                </h3>
                <p className="text-sm text-slate-300">
                  Nein. Der Zahler nutzt einfach seine bestehende Banking-App (Sparkasse,
                  VR-Banking, ING, DKB etc.). Alle großen deutschen Banking-Apps unterstützen
                  GiroCodes seit 2016.
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
                  { href: '/girocode-vs-lastschrift', label: 'GiroCode vs. SEPA-Lastschrift' },
                  { href: '/wissen/girocode', label: 'Was ist ein GiroCode?' },
                  { href: '/wissen/iban-bic', label: 'IBAN & BIC erklärt' },
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
