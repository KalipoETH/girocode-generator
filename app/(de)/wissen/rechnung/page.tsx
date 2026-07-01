import type { Metadata } from 'next';
import Link from 'next/link';
import { KnowledgeLayout } from '@/components/KnowledgeLayout';
import { SITE_URL } from '@/lib/siteConfig';

function RechnungsgeneratorCTA() {
  return (
    <div
      className="mb-8 flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between"
      style={{ background: 'linear-gradient(135deg, #0f1a0f 0%, #121318 100%)', border: '1px solid rgba(34,197,94,0.3)' }}
    >
      <div>
        <p className="font-bold text-slate-50">
          Rechnung mit GiroCode direkt erstellen
        </p>
        <p className="mt-1 text-sm text-slate-400">
          Kostenloser Rechnungsgenerator – §14 UStG konform, ohne Anmeldung, PDF sofort.
        </p>
      </div>
      <Link
        href="/rechnungs-editor"
        className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5"
        style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}
      >
        Rechnung erstellen →
      </Link>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'GiroCode auf Rechnungen – Leitfaden & PDF-Generator',
  description:
    'GiroCode auf Rechnungen einbinden: Pflichtangaben nach §14 UStG, E-Rechnungspflicht 2025-2028 (XRechnung/ZUGFeRD) und optimale Platzierung. ✅ In 2 Minuten fertig.',
  keywords: 'GiroCode Rechnung, §14 UStG Pflichtangaben, Kleinunternehmerregelung, QR Code Rechnung, GiroCode PDF Rechnung, E-Rechnungspflicht, XRechnung, ZUGFeRD, E-Rechnung Kleinunternehmer',
  alternates: {
    canonical: `${SITE_URL}/wissen/rechnung`,
    languages: {
      'x-default': `${SITE_URL}/wissen/rechnung`,
      'de': `${SITE_URL}/wissen/rechnung`,
      'en': `${SITE_URL}/en/wissen/rechnung`,
      'fr': `${SITE_URL}/fr/wissen/rechnung`,
      'es': `${SITE_URL}/es/wissen/rechnung`,
      'it': `${SITE_URL}/it/wissen/rechnung`,
    },
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'GiroCode auf Rechnungen – Der komplette Leitfaden',
  description:
    'GiroCode auf Rechnungen einbinden: Pflichtangaben nach §14 UStG, E-Rechnungspflicht 2025-2028 (XRechnung/ZUGFeRD) und optimale Platzierung.',
  datePublished: '2026-06-01',
  dateModified: '2026-07-01',
  author: { '@type': 'Person', name: 'Kaleb Jahnke' },
  publisher: { '@type': 'Organization', name: 'GiroCode Generator', url: SITE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/wissen/rechnung` },
};

export default function WissenRechnungPage() {
  return (
    <KnowledgeLayout
      breadcrumbCurrent="GiroCode auf Rechnungen"
      badge="Praxis · GiroCode auf Rechnungen"
      title="GiroCode auf Rechnungen – Der komplette Leitfaden"
      lead="Ein GiroCode auf einer Rechnung ermöglicht dem Empfänger die Zahlung durch einfaches Scannen mit der Banking-App – IBAN, Betrag und Verwendungszweck werden automatisch übertragen. Der GiroCode sollte laut EPC-Empfehlung mindestens 2×2 cm groß und unten rechts auf der Rechnung platziert werden. Pflichtangaben auf deutschen Rechnungen nach §14 UStG sind: vollständiger Name und Anschrift, Steuernummer oder USt-ID, Ausstellungsdatum, Rechnungsnummer, Leistungsbeschreibung sowie Netto-, Steuer- und Bruttobetrag."
      relatedArticles={[
        { href: '/wissen/girocode', label: 'Was ist ein GiroCode?' },
        { href: '/wissen/betrag-und-zweck', label: 'Betrag & Verwendungszweck' },
        { href: '/wissen/iban-bic', label: 'IBAN & BIC im GiroCode' },
        { href: '/wissen/banking-apps', label: 'Banking-Apps mit GiroCode' },
        { href: '/wissen/scannen', label: 'GiroCode scannen' },
        { href: '/wissen/epc-standard', label: 'EPC-Standard erklärt' },
      ]}
      locale="de"
      lastUpdated="2026-07-01"
      shortAnswer="Ein GiroCode auf einer Rechnung ermöglicht dem Empfänger die Zahlung durch einfaches Scannen mit der Banking-App – IBAN, Betrag und Verwendungszweck werden automatisch übertragen. Der GiroCode sollte laut EPC-Empfehlung mindestens 2×2 cm groß und unten rechts auf der Rechnung platziert werden. Pflichtangaben auf deutschen Rechnungen nach §14 UStG sind: vollständiger Name und Anschrift, Steuernummer oder USt-ID, Ausstellungsdatum, Rechnungsnummer, Leistungsbeschreibung sowie Netto-, Steuer- und Bruttobetrag."
      statsData={[
        { value: '§14', label: 'UStG Pflichtangaben Grundlage' },
        { value: '2×2 cm', label: 'EPC-empfohlene Mindestgröße QR-Code' },
        { value: '14 Tage', label: 'Übliche Zahlungsfrist auf Rechnungen' },
        { value: '300 DPI', label: 'Empfohlene Druckauflösung' },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <RechnungsgeneratorCTA />

      {/* ─── SECTION 1: Warum GiroCode ─── */}
      <section aria-labelledby="warum-girocode">
        <h2 id="warum-girocode">Warum GiroCode auf Rechnungen?</h2>
        <p>
          Die Frage, wie schnell eine Rechnung bezahlt wird, ist für jeden Unternehmer,
          Freelancer und Verein brennend relevant. Laut einer Umfrage des Bundesverbands der
          Freien Berufe warten Selbstständige im Schnitt <strong>über 30 Tage</strong> auf den
          Eingang einer Zahlung – obwohl das gesetzliche Zahlungsziel in Deutschland in der
          Regel 30 Tage beträgt.
        </p>
        <p>
          Ein wesentlicher Grund für Zahlungsverzögerungen ist der Aufwand beim Überweisen:
          Kunden müssen IBAN, Betrag und Verwendungszweck manuell in ihr Online-Banking
          eintippen. Tippfehler, verlorene Rechnungen oder schlichte Faulheit führen dazu,
          dass Zahlungen verzögert oder vergessen werden.
        </p>

        <h3>Vorteile für Rechnungssteller</h3>
        <ul>
          <li>
            <strong>Schnellere Zahlungen:</strong> Kunden können die Rechnung sofort beim
            Öffnen scannen und überweisen – kein manuelles Abtippen.
          </li>
          <li>
            <strong>Weniger Fehler:</strong> Keine Fehltransaktionen durch falsche IBAN oder
            falschen Betrag.
          </li>
          <li>
            <strong>Bessere Zuordnung:</strong> Der vorausgefüllte Verwendungszweck sorgt
            für saubere Buchungszuordnung.
          </li>
          <li>
            <strong>Professionelles Auftreten:</strong> Moderne Rechnungen mit GiroCode
            hinterlassen einen guten Eindruck.
          </li>
        </ul>

        <h3>Vorteile für Zahler</h3>
        <ul>
          <li>QR-Code scannen reicht – fertig</li>
          <li>Keine Tippfehler bei der IBAN möglich</li>
          <li>Betrag wird automatisch eingetragen</li>
          <li>Verwendungszweck muss nicht eingetippt werden</li>
          <li>Funktioniert auf iPhone und Android</li>
        </ul>
      </section>

      {/* ─── SECTION 2: Pflichtangaben §14 UStG ─── */}
      <section aria-labelledby="pflichtangaben" className="mt-8">
        <h2 id="pflichtangaben">Pflichtangaben auf einer Rechnung (§ 14 UStG)</h2>
        <p>
          Unabhängig vom GiroCode müssen Rechnungen im deutschen Steuerrecht bestimmte
          Mindestangaben enthalten, damit sie zum Vorsteuerabzug berechtigen und steuerlich
          anerkannt werden. Die Pflichtangaben für Rechnungen sind in{' '}
          <a
            href="https://www.gesetze-im-internet.de/ustg_1980/__14.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 underline hover:text-sky-300"
          >
            §14 UStG (Bundesministerium der Justiz)
          </a>{' '}
          geregelt. Die vollständige Liste nach <strong>§ 14 Abs. 4 UStG</strong>:
        </p>
        <ol>
          <li>
            <strong>Vollständiger Name und Anschrift</strong> des leistenden Unternehmers
          </li>
          <li>
            <strong>Vollständiger Name und Anschrift</strong> des Leistungsempfängers
          </li>
          <li>
            <strong>Steuernummer oder USt-Identifikationsnummer</strong> des leistenden
            Unternehmers
          </li>
          <li>
            <strong>Ausstellungsdatum</strong> der Rechnung
          </li>
          <li>
            <strong>Fortlaufende Rechnungsnummer</strong> (eindeutig, einmalig)
          </li>
          <li>
            <strong>Menge und handelsübliche Bezeichnung</strong> der gelieferten
            Gegenstände bzw. Umfang und Art der sonstigen Leistung
          </li>
          <li>
            <strong>Zeitpunkt der Lieferung oder Leistung</strong> (oder Hinweis, dass
            Rechnungsdatum = Leistungsdatum gilt)
          </li>
          <li>
            <strong>Nettobetrag, Steuersatz (19 % oder 7 %) und Steuerbetrag</strong>
            sowie der <strong>Bruttobetrag</strong>
          </li>
          <li>
            Bei Steuerbefreiung: <strong>Hinweis auf den Steuerbefreiungsgrund</strong>
          </li>
          <li>
            Bei innergemeinschaftlichen Lieferungen: <strong>USt-ID des
            Leistungsempfängers</strong>
          </li>
        </ol>
        <p>
          Der GiroCode ist eine <strong>optionale Ergänzung</strong> und ersetzt keine dieser
          Pflichtangaben. Er wird zusätzlich zu den textuellen Zahlungsinformationen platziert.
        </p>
      </section>

      {/* ─── SECTION 3: Kleinunternehmer ─── */}
      <section aria-labelledby="kleinunternehmer" className="mt-8">
        <h2 id="kleinunternehmer">Kleinunternehmerregelung (§ 19 UStG)</h2>
        <p>
          Wer die <strong>Kleinunternehmerregelung nach § 19 UStG</strong> nutzt, muss auf
          seinen Rechnungen <strong>keine Umsatzsteuer ausweisen</strong>. Stattdessen ist
          ein Pflichthinweis erforderlich, der erklärt, warum keine USt. erscheint.
        </p>

        <h3>Wer ist Kleinunternehmer?</h3>
        <p>
          Als Kleinunternehmer gilt, wer im Vorjahr einen Gesamtumsatz von maximal{' '}
          <strong>25.000 EUR</strong> (bis Ende 2024) bzw. ab 2025 <strong>25.000 EUR</strong>{' '}
          nicht überschritten hat und im laufenden Jahr voraussichtlich nicht mehr als{' '}
          <strong>100.000 EUR</strong> umsetzen wird (neue Regelung ab 2025 durch
          Jahressteuergesetz).
        </p>

        <h3>Pflichthinweis auf der Rechnung</h3>
        <p>
          Der Hinweis auf die Kleinunternehmerregelung sollte auf jeder Rechnung erscheinen.
          Eine typische Formulierung lautet:
        </p>
        <blockquote className="border-l-2 border-slate-600 pl-4 italic text-slate-400">
          „Gemäß § 19 UStG wird keine Umsatzsteuer berechnet und ausgewiesen
          (Kleinunternehmerregelung)."
        </blockquote>
        <p>
          Dieser Hinweis kann in der Fußzeile der Rechnung oder als eigener Absatz unterhalb
          des Rechnungsbetrags stehen. Der GiroCode wird daneben oder darunter platziert.
        </p>
      </section>

      {/* ─── SECTION: E-Rechnungspflicht 2025–2028 ─── */}
      <section aria-labelledby="e-rechnungspflicht" className="mt-8">
        <h2 id="e-rechnungspflicht">E-Rechnungspflicht 2025–2028: Was gilt für dich?</h2>

        <div
          className="not-prose mb-6 rounded-lg border-l-4 border-amber-500 bg-amber-950/20 px-4 py-3"
          role="note"
          aria-label="Hinweis: Keine Steuerberatung"
        >
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-amber-400">
            ⚠️ Kein Ersatz für Steuerberatung
          </p>
          <p className="text-sm leading-relaxed text-slate-300">
            Dieser Abschnitt fasst die gesetzlichen Grundlagen zur E-Rechnungspflicht
            allgemeinverständlich zusammen und ersetzt keine individuelle Steuerberatung.
            Prüfe deine persönliche Situation im Zweifel mit deinem Steuerberater oder
            deinem Finanzamt.
          </p>
        </div>

        <div
          className="not-prose mb-6 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3"
          role="note"
          aria-label="Kurze Antwort"
        >
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">
            💡 Kurze Antwort
          </p>
          <p className="text-sm leading-relaxed text-slate-300">
            Nein. Kleinunternehmer nach § 19 UStG sind dauerhaft von der Pflicht befreit,
            E-Rechnungen auszustellen – das gilt auch nach 2028 weiter. Seit dem 1. Januar
            2025 musst du E-Rechnungen aber empfangen können; ein normales E-Mail-Postfach
            reicht dafür bereits aus.
          </p>
        </div>

        <h3>Was ist eine E-Rechnung – und was nicht?</h3>
        <p>
          Eine E-Rechnung im gesetzlichen Sinn ist ein strukturiertes, maschinenlesbares
          XML-Format. Zulässig sind insbesondere zwei Formate:
        </p>
        <ul>
          <li>
            <strong>XRechnung</strong> – ein reines XML-Format, das für Menschen nicht
            direkt lesbar ist. Zum Prüfen und Anzeigen eignet sich z.&nbsp;B. der
            kostenlose Viewer unter{' '}
            <a
              href="https://www.e-rechnung.elster.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 underline hover:text-sky-300"
            >
              e-rechnung.elster.de
            </a>.
          </li>
          <li>
            <strong>ZUGFeRD ab Version 2.0.1</strong> – ein Hybrid-Format aus normalem PDF
            und eingebettetem XML-Datensatz. Die Profile <strong>MINIMUM</strong> und{' '}
            <strong>BASIC-WL</strong> erfüllen die Anforderungen an eine E-Rechnung dagegen{' '}
            <strong>nicht</strong>. Weichen PDF-Ansicht und XML-Datensatz voneinander ab,
            ist seit 2025 der <strong>XML-Teil rechtlich maßgebend</strong>.
          </li>
        </ul>
        <p>
          Wichtig für die Praxis: Eine <strong>reine PDF-Rechnung per E-Mail gilt seit 2025
          nicht mehr als E-Rechnung</strong>, sondern rechtlich als „sonstige Rechnung".
          Andere elektronische Formate wie ein einfaches PDF dürfen bis Ende 2026 weiterhin
          verschickt werden – aber nur mit Zustimmung des Empfängers. Auch die klassische
          Papierrechnung bleibt bis Ende 2026 für alle erlaubt.
        </p>

        <h3>Zeitplan im Überblick</h3>
        <div className="not-prose overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#1f2431] text-left text-slate-300">
                <th className="py-3 pr-4 font-semibold">Datum</th>
                <th className="py-3 font-semibold">Was gilt</th>
              </tr>
            </thead>
            <tbody className="text-slate-400">
              <tr className="border-b border-[#1f2431]">
                <td className="py-3 pr-4 font-medium text-slate-300">seit 1.1.2025</td>
                <td className="py-3">
                  Alle Unternehmen – auch Kleinunternehmer – müssen E-Rechnungen{' '}
                  <strong>empfangen</strong> können. Ein E-Mail-Postfach genügt, keine
                  Ausnahme, keine Übergangsfrist. Ausstellen ist freiwillig möglich.
                </td>
              </tr>
              <tr className="border-b border-[#1f2431]">
                <td className="py-3 pr-4 font-medium text-slate-300">bis 31.12.2026</td>
                <td className="py-3">
                  Papierrechnungen bleiben für alle erlaubt. Andere E-Formate (z.&nbsp;B.
                  einfaches PDF) nur mit Zustimmung des Empfängers.
                </td>
              </tr>
              <tr className="border-b border-[#1f2431]">
                <td className="py-3 pr-4 font-medium text-slate-300">ab 1.1.2027</td>
                <td className="py-3">
                  Pflicht zur <strong>Ausstellung</strong> von E-Rechnungen für
                  Unternehmen mit einem Vorjahresumsatz über <strong>800.000 €</strong>.
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-300">ab 1.1.2028</td>
                <td className="py-3">
                  Pflicht zur Ausstellung für <strong>alle Unternehmen</strong> im
                  inländischen B2B-Geschäft.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Kleinunternehmer: dauerhafte Ausnahme bei der Ausstellung</h3>
        <p>
          Kleinunternehmer nach <strong>§ 19 UStG</strong> (in Verbindung mit{' '}
          <strong>§ 34a UStDV</strong>) sind von der Pflicht zur <strong>Ausstellung</strong>{' '}
          von E-Rechnungen dauerhaft befreit – daran ändert sich auch über 2028 hinaus
          nichts. Die Pflicht, E-Rechnungen <strong>empfangen</strong> zu können, gilt für
          Kleinunternehmer jedoch genauso wie für alle anderen Unternehmen bereits seit
          dem 1. Januar 2025.
        </p>

        <h3>Weitere Ausnahmen von der Ausstellungspflicht</h3>
        <ul>
          <li>Kleinbetragsrechnungen bis 250 €</li>
          <li>Bestimmte steuerfreie Leistungen</li>
          <li>Rechnungen an Privatpersonen (B2C)</li>
        </ul>

        <h3>Aufbewahrung</h3>
        <p>
          E-Rechnungen unterliegen wie andere Rechnungen der gesetzlichen
          Aufbewahrungsfrist von in der Regel <strong>8 Jahren</strong>. Der strukturierte
          Teil muss dabei im <strong>Originalformat</strong> aufbewahrt werden – ein reiner
          PDF-Ausdruck genügt nicht.
        </p>

        <h3>Rechtsgrundlage &amp; Quelle</h3>
        <p>
          Grundlage ist das <strong>Wachstumschancengesetz</strong> vom 27.03.2024, das{' '}
          <strong>§ 14 UStG</strong> entsprechend geändert hat, konkretisiert durch das{' '}
          <strong>BMF-Schreiben vom 15.10.2024</strong>. Eine ausführliche
          Frage-Antwort-Übersicht stellt das Bundesministerium der Finanzen bereit:{' '}
          <a
            href="https://www.bundesfinanzministerium.de/Content/DE/FAQ/e-rechnung.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 underline hover:text-sky-300"
          >
            BMF – FAQ zur E-Rechnung
          </a>.
        </p>

        <h3>Der GiroCode-Winkel: Zahlungs-QR-Code trifft E-Rechnung</h3>
        <p>
          Wichtig zu verstehen: Der <strong>GiroCode ist ein Zahlungs-QR-Code, kein
          Rechnungsformat</strong>. Er ersetzt die E-Rechnung nicht – er ergänzt sie:
        </p>
        <ul>
          <li>
            Bei <strong>ZUGFeRD</strong> ist die Rechnung ein Hybrid aus sichtbarem PDF und
            eingebettetem XML-Datensatz. Der sichtbare PDF-Teil kann weiterhin einen
            GiroCode enthalten – so bleibt die bequeme Zahlung per Banking-App-Scan auch
            bei einer vollwertigen E-Rechnung möglich.
          </li>
          <li>
            <strong>Kleinunternehmer</strong>, die von der Ausstellungspflicht befreit
            sind, können weiterhin ganz normale PDF-Rechnungen mit GiroCode verschicken –
            für sie ändert sich an ihrem gewohnten Workflow nichts.
          </li>
          <li>
            Unser{' '}
            <Link href="/rechnungs-editor" className="text-sky-400 underline hover:text-sky-300">
              Rechnungs-Editor
            </Link>{' '}
            bettet den GiroCode automatisch in die PDF-Rechnung ein – ideal für
            Kleinunternehmer und alle, die (noch) keine XRechnung ausstellen müssen.
          </li>
        </ul>
      </section>

      {/* ─── SECTION 4: Platzierung ─── */}
      <section aria-labelledby="platzierung" className="mt-8">
        <h2 id="platzierung">GiroCode auf der Rechnung platzieren</h2>

        <h3>Wo genau?</h3>
        <p>
          Die empfohlene Position ist <strong>unten rechts</strong> auf der Rechnung, in der
          Nähe der Zahlungsinformationen (IBAN, BIC, Zahlungsziel). Dort suchen Kunden
          üblicherweise nach Zahlungsdetails, und der QR-Code ist leicht zu finden.
        </p>

        <h3>Mindestgröße</h3>
        <p>
          Für zuverlässiges Scannen wird eine Mindestgröße von <strong>2 × 2 cm</strong>
          empfohlen. Bei modernen Smartphones mit guter Kamera kann der Code auch etwas
          kleiner sein, aber 2 × 2 cm ist ein sicherer Wert. Wer auf Nummer sicher gehen
          möchte, nutzt <strong>3 × 3 cm</strong>.
        </p>

        <h3>Abstand zum Rand (Quiet Zone)</h3>
        <p>
          Der QR-Code benötigt eine <strong>weiße Ruhezone</strong> (Quiet Zone) rundum –
          mindestens 4 Modulbreiten (kleinste Einheit des QR-Codes). Bei einem 2 × 2 cm
          großen Code entspricht das etwa 2–3 mm Abstand zu anderen Elementen.
        </p>

        <h3>Kontrast und Druckqualität</h3>
        <ul>
          <li>
            <strong>Immer schwarz auf weiß</strong> – farbige Hintergründe oder
            Logoüberlagerungen verringern die Lesbarkeit drastisch.
          </li>
          <li>
            <strong>Mindestens 300 DPI</strong> für den Druck empfohlen.
          </li>
          <li>
            <strong>Laserdruck bevorzugt</strong> gegenüber Tintenstrahl für schärfere Kanten.
          </li>
        </ul>

        <h3>Digital vs. Druck</h3>
        <p>
          Bei digitalen Rechnungen (PDF per E-Mail) kann der QR-Code kleiner sein, da der
          Empfänger am Bildschirm zoomen kann. Achte aber darauf, dass der Code beim
          normalen Zoom (100 %) noch erkennbar ist. Unser Generator erzeugt hochauflösende
          Vektorgrafiken oder Rastergrafiken, die für beide Verwendungszwecke optimal sind.
        </p>
      </section>

      {/* ─── SECTION 5: Software Vergleich ─── */}
      <section aria-labelledby="software" className="mt-8">
        <h2 id="software">GiroCode in verschiedenen Rechnungsprogrammen</h2>
        <p>
          Es gibt verschiedene Wege, Rechnungen mit GiroCode zu erstellen. Hier vergleichen
          wir die wichtigsten Optionen:
        </p>

        <h3>
          <a
            href="https://www.awin1.com/cread.php?awinmid=15944&awinaffid=2793610"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="text-sky-400 hover:text-sky-300"
          >
            sevDesk *
          </a>
        </h3>
        <p>
          sevDesk ist eine der meistgenutzten deutschen Buchhaltungssoftwares und unterstützt
          GiroCodes nativ. Beim Erstellen einer Rechnung wird der GiroCode automatisch anhand
          der eingetragenen Bankverbindung und des Rechnungsbetrags generiert und in die
          Rechnung eingebettet.
        </p>
        <ul>
          <li><strong>Preis:</strong> ab 7,90 EUR/Monat (Starter), 14-tägige Testphase kostenlos</li>
          <li><strong>Besonderheiten:</strong> DATEV-Export, automatischer Zahlungsabgleich, Steuerberater-Zugang</li>
          <li><strong>GiroCode:</strong> Automatisch auf jeder Rechnung, keine manuelle Konfiguration nötig</li>
        </ul>
        <p className="text-xs text-slate-500">
          * Affiliate-Link – Wenn du über diesen Link kaufst, erhalten wir eine kleine
          Provision ohne Mehrkosten für dich.
        </p>

        <h3>
          <a
            href="https://www.awin1.com/cread.php?awinmid=20766&awinaffid=2793610"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="text-sky-400 hover:text-sky-300"
          >
            FastBill *
          </a>
        </h3>
        <p>
          FastBill ist auf schnelle, unkomplizierte Rechnungsstellung ausgelegt und eignet sich
          besonders für Freelancer und kleine Agenturen. Der GiroCode wird automatisch generiert
          und kann auf Wunsch auf dem Rechnungslayout platziert werden.
        </p>
        <ul>
          <li><strong>Preis:</strong> ab 9,90 EUR/Monat, kostenlose Testphase verfügbar</li>
          <li><strong>Besonderheiten:</strong> Schnelle Rechnungserstellung, Angebotsverwaltung, Abo-Rechnungen</li>
          <li><strong>GiroCode:</strong> Integriert, automatische Generierung</li>
        </ul>
        <p className="text-xs text-slate-500">
          * Affiliate-Link – Wenn du über diesen Link kaufst, erhalten wir eine kleine
          Provision ohne Mehrkosten für dich.
        </p>

        <h3>GiroCode Generator (unser Tool)</h3>
        <p>
          Unser kostenloser GiroCode Generator ist die ideale Lösung für Einsteiger,
          Gelegenheitsnutzer und alle, die einfach einen schnellen GiroCode erstellen
          möchten – ohne Abo, ohne Registrierung, komplett datenschutzfreundlich im Browser.
        </p>
        <ul>
          <li><strong>Preis:</strong> Komplett kostenlos</li>
          <li><strong>Besonderheiten:</strong> Lokale Verarbeitung, kein Server, kein Konto nötig</li>
          <li><strong>GiroCode:</strong> Sofort generiert, als PNG oder PDF exportierbar</li>
        </ul>
      </section>

      {/* ─── SECTION 6: Schritt für Schritt ─── */}
      <section aria-labelledby="anleitung" className="mt-8">
        <h2 id="anleitung">Schritt-für-Schritt: Rechnung mit GiroCode erstellen</h2>
        <p>
          Mit unserem Tool erstellst du in wenigen Minuten eine vollständige Rechnung mit
          eingebettetem GiroCode:
        </p>
        <ol>
          <li>
            <strong>Zahlungsdaten eingeben:</strong> IBAN, Name des Empfängers, optional BIC.
          </li>
          <li>
            <strong>Betrag eintragen:</strong> Den Bruttobetrag der Rechnung eingeben.
          </li>
          <li>
            <strong>Verwendungszweck formulieren:</strong> Rechnungsnummer und ggf.
            Kundennummer eintragen.
          </li>
          <li>
            <strong>GiroCode generieren:</strong> Der QR-Code wird sofort im Browser
            erstellt – lokal, ohne Serverübertragung.
          </li>
          <li>
            <strong>Rechnungsdaten ausfüllen:</strong> Name, Adresse, Leistungsbeschreibung,
            Steuernummer etc.
          </li>
          <li>
            <strong>PDF herunterladen:</strong> Eine fertige Rechnung mit eingebettetem
            GiroCode als PDF speichern.
          </li>
          <li>
            <strong>Versenden:</strong> Per E-Mail, Post oder als Download-Link.
          </li>
        </ol>
      </section>

      {/* ─── SECTION 7: Rechtliches ─── */}
      <section aria-labelledby="recht" className="mt-8">
        <h2 id="recht">Rechtliche Hinweise zum GiroCode auf Rechnungen</h2>

        <h3>Ist der GiroCode Pflicht?</h3>
        <p>
          Nein. Der GiroCode ist <strong>keine gesetzliche Pflicht</strong> – weder für
          Unternehmen noch für Vereine oder Privatpersonen. Er ist eine freiwillige,
          kundenfreundliche Ergänzung. In bestimmten Ländern und Kontexten gibt es
          Bestrebungen, den QR-Code-Standard auf Rechnungen verbindlich zu machen (z.&nbsp;B.
          die Schweizer QR-Rechnung), aber in Deutschland ist er bisher optional.
        </p>

        <h3>Haftet man für falsche QR-Codes?</h3>
        <p>
          Wer einen GiroCode auf einer Rechnung platziert, trägt die Verantwortung dafür,
          dass die enthaltenen Daten korrekt sind. Ein falscher QR-Code, der zu einer
          Fehlüberweisung führt, kann rechtliche Konsequenzen haben. Prüfe daher immer:
        </p>
        <ul>
          <li>Stimmt die IBAN?</li>
          <li>Stimmt der Betrag?</li>
          <li>Stimmt der Name des Empfängers?</li>
        </ul>

        <h3>Datenschutz und DSGVO</h3>
        <p>
          Ein GiroCode enthält ausschließlich <strong>Zahlungsdaten</strong> des Empfängers –
          keine personenbezogenen Daten des Zahlers. Damit ist er aus DSGVO-Sicht
          unkritisch. Der Empfänger (also du als Rechnungssteller) gibst lediglich deine
          eigene Bankverbindung weiter – was du auf Rechnungen ohnehin tust.
        </p>
      </section>

      {/* ─── SECTION 8: FAQ ─── */}
      <section aria-labelledby="faq" className="mt-8">
        <h2 id="faq">Häufige Fragen zu GiroCode auf Rechnungen</h2>
        <div className="space-y-5">
          <div>
            <h3 className="text-sm font-semibold text-slate-50">
              Kann ich den GiroCode auf digitale und gedruckte Rechnungen verwenden?
            </h3>
            <p className="text-sm text-slate-300">
              Ja. Bei digitalen Rechnungen (PDF) scannt der Empfänger den Code vom Bildschirm,
              bei gedruckten Rechnungen vom Papier. Beide Varianten funktionieren gut, solange
              der Code die Mindestgröße einhält und ausreichend Kontrast vorhanden ist.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-50">
              Muss ich dem Kunden erklären, wie der GiroCode funktioniert?
            </h3>
            <p className="text-sm text-slate-300">
              Nicht zwingend, aber empfohlen. Ein kurzer Hinweis wie „Zahlen Sie einfach per
              Banking-App: QR-Code scannen und bestätigen" macht den Zweck sofort klar.
              Besonders bei älteren Kunden oder beim ersten Einsatz ist eine Erklärung sinnvoll.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-50">
              Was passiert, wenn der Kunde keinen GiroCode-Scanner hat?
            </h3>
            <p className="text-sm text-slate-300">
              Kein Problem. Die regulären Zahlungsinformationen (IBAN, Betrag, Verwendungszweck)
              stehen weiterhin im Klartext auf der Rechnung. Der GiroCode ist eine zusätzliche
              Option, kein Ersatz.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-50">
              Kann ich für jede Rechnung einen eigenen GiroCode erstellen?
            </h3>
            <p className="text-sm text-slate-300">
              Ja, und das ist auch empfohlen. Jeder GiroCode sollte die spezifische
              Rechnungsnummer im Verwendungszweck enthalten, damit Zahlungen korrekt
              zugeordnet werden können. Mit Buchhaltungssoftware wird das automatisch gemacht.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-50">
              Funktioniert der GiroCode auch für B2B-Rechnungen?
            </h3>
            <p className="text-sm text-slate-300">
              Ja. Auch im B2B-Bereich können Empfänger den GiroCode nutzen, wenn ihre
              Banking-App dies unterstützt. Viele Unternehmens-Banking-Apps bieten ebenfalls
              einen QR-Scanner für Überweisungen an.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-50">
              Kann ich den GiroCode auch auf Mahnungen platzieren?
            </h3>
            <p className="text-sm text-slate-300">
              Absolut. Ein GiroCode auf einer Mahnung kann die Zahlungsquote sogar noch
              weiter verbessern, da der Aufwand für den Schuldner minimal ist.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-50">
              Gibt es Probleme mit bestimmten E-Mail-Clients beim Scannen?
            </h3>
            <p className="text-sm text-slate-300">
              Wenn eine Rechnung als PDF-Anhang verschickt wird, muss der Empfänger die PDF
              öffnen und dann den Code scannen. Manche Smartphones unterstützen auch das
              direkte Scannen von Bildschirmfotos – das hängt von der Banking-App ab.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-50">
              Muss ich als Kleinunternehmer einen GiroCode mit Bruttopreis oder Nettopreis kodieren?
            </h3>
            <p className="text-sm text-slate-300">
              Als Kleinunternehmer nach § 19 UStG weist du keine Umsatzsteuer aus.
              Dein Rechnungsbetrag ist damit immer der Netto- und Bruttobetrag in einem.
              Du kodierst also einfach den <strong>Gesamtbetrag</strong>, den du vom Kunden
              erhalten möchtest.
            </p>
          </div>
        </div>
      </section>
    </KnowledgeLayout>
  );
}
