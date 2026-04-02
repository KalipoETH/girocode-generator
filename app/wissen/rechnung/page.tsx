import type { Metadata } from 'next';
import Link from 'next/link';
import { KnowledgeLayout } from '../../../components/KnowledgeLayout';

export const metadata: Metadata = {
  title: 'GiroCode auf Rechnungen – Leitfaden & PDF-Generator',
  description:
    'GiroCode auf Rechnungen einbinden: Pflichtangaben nach §14 UStG, optimale Platzierung und kostenloser PDF-Generator. ✅ Professionelle Rechnungen in 2 Minuten.',
  keywords: 'GiroCode Rechnung, §14 UStG Pflichtangaben, Kleinunternehmerregelung, QR Code Rechnung, GiroCode PDF Rechnung',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/wissen/rechnung',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/rechnung',
      'de': 'https://www.girocodegenerator.com/wissen/rechnung',
      'en': 'https://www.girocodegenerator.com/en/wissen/rechnung',
      'fr': 'https://www.girocodegenerator.com/fr/wissen/rechnung',
      'es': 'https://www.girocodegenerator.com/es/wissen/rechnung',
    },
  },
};

export default function WissenRechnungPage() {
  return (
    <KnowledgeLayout
      breadcrumbCurrent="GiroCode auf Rechnungen"
      badge="Praxis · GiroCode auf Rechnungen"
      title="GiroCode auf Rechnungen – Der komplette Leitfaden"
      lead="Ein GiroCode auf der Rechnung macht das Bezahlen für Kunden kinderleicht und reduziert deine offenen Posten. Dieser Leitfaden erklärt alles – von den rechtlichen Pflichtangaben über die optimale Platzierung bis zum Software-Vergleich."
      relatedArticles={[
        { href: '/wissen/girocode', label: 'Was ist ein GiroCode?' },
        { href: '/wissen/betrag-und-zweck', label: 'Betrag & Verwendungszweck' },
        { href: '/wissen/iban-bic', label: 'IBAN & BIC im GiroCode' },
        { href: '/wissen/banking-apps', label: 'Banking-Apps mit GiroCode' },
        { href: '/wissen/scannen', label: 'GiroCode scannen' },
        { href: '/wissen/epc-standard', label: 'EPC-Standard erklärt' },
      ]}
      locale="de"
    >
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
          anerkannt werden. Die vollständige Liste nach <strong>§ 14 Abs. 4 UStG</strong>:
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
