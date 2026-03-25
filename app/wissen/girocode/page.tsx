import type { Metadata } from 'next';
import Link from 'next/link';
import { KnowledgeLayout } from '../../../components/KnowledgeLayout';

export const metadata: Metadata = {
  title: 'Was ist ein GiroCode? – Alles was du wissen musst',
  description:
    'GiroCode vollständig erklärt: Definition, Funktionsweise, Vorteile, Vergleich mit PayPal & Co., FAQ und Empfehlungen für Selbstständige und Unternehmen.',
  keywords: 'GiroCode, SEPA QR Code, EPC QR Code, Bezahlcode, GiroCode erstellen, GiroCode Rechnung',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/wissen/girocode',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/girocode',
      'de': 'https://www.girocodegenerator.com/wissen/girocode',
      'en': 'https://www.girocodegenerator.com/en/wissen/girocode',
      'fr': 'https://www.girocodegenerator.com/fr/wissen/girocode',
      'es': 'https://www.girocodegenerator.com/es/wissen/girocode',
    },
  },
};

export default function WissenGirocodePage() {
  return (
    <KnowledgeLayout
      breadcrumbCurrent="Was ist ein GiroCode?"
      badge="Grundlagen · GiroCode / SEPA-QR"
      title="Was ist ein GiroCode? – Alles was du wissen musst"
      lead="Der GiroCode – häufig auch SEPA-QR- oder EPC-QR-Code genannt – ist ein standardisierter QR-Code für Überweisungen im SEPA-Raum. Er spart Tipparbeit, reduziert Fehler und macht das Bezahlen für Zahler und Empfänger deutlich komfortabler."
      relatedArticles={[
        { href: '/wissen/epc-standard', label: 'EPC-Standard – Technischer Aufbau des GiroCodes' },
        { href: '/wissen/iban-bic', label: 'IBAN & BIC im GiroCode' },
        { href: '/wissen/rechnung', label: 'GiroCode auf Rechnungen – Der komplette Leitfaden' },
        { href: '/wissen/betrag-und-zweck', label: 'Betrag & Verwendungszweck richtig eingeben' },
        { href: '/wissen/banking-apps', label: 'Banking-Apps mit GiroCode-Support' },
        { href: '/wissen/scannen', label: 'GiroCode scannen – Anleitung' },
      ]}
      locale="de"
    >
      {/* ─── SECTION 1: Was ist ein GiroCode ─── */}
      <section aria-labelledby="definition">
        <h2 id="definition">Was ist ein GiroCode?</h2>
        <p>
          Ein <strong>GiroCode</strong> ist ein standardisierter QR-Code, der alle relevanten
          Informationen für eine SEPA-Überweisung in maschinenlesbarer Form enthält. Technisch
          basiert er auf der Spezifikation des <strong>European Payments Council (EPC)</strong> –
          daher die häufig verwendeten Synonyme <strong>EPC-QR-Code</strong> oder{' '}
          <strong>SEPA-QR-Code</strong>. In Deutschland hat sich der Begriff „GiroCode" als
          Markenbezeichnung durchgesetzt, der von der deutschen Kreditwirtschaft geprägt wurde.
        </p>
        <p>
          Neben diesen beiden Hauptbezeichnungen gibt es weitere Namen, die je nach Kontext
          verwendet werden: <strong>Bezahlcode</strong>, <strong>Giro-QR</strong> oder schlicht
          „Überweisungs-QR". All diese Begriffe beschreiben im Wesentlichen dasselbe Konzept –
          einen QR-Code, der beim Scannen mit einer Banking-App automatisch eine
          Überweisungsmaske ausfüllt.
        </p>

        <h3>Geschichte: Wann wurde der GiroCode eingeführt?</h3>
        <p>
          Die Grundlagen des Standards wurden vom European Payments Council bereits um 2012
          erarbeitet. In Deutschland wurde der GiroCode in seiner aktuellen Form schrittweise
          zwischen 2016 und <strong>2018</strong> eingeführt. Die deutschen Sparkassen und
          Volksbanken waren unter den ersten Instituten, die den QR-Scanner für SEPA-Überweisungen
          in ihren Banking-Apps etablierten. Seitdem ist die Unterstützung stetig gewachsen und
          heute unterstützen nahezu alle großen deutschen Kreditinstitute das Format.
        </p>
        <p>
          Die Einführung war eine direkte Antwort auf den Wunsch nach einfacheren, fehlerfreien
          Zahlungsprozessen im bargeldlosen Alltag. Zuvor mussten Überweisungsempfänger IBAN,
          Betrag und Verwendungszweck mühsam abtippen – ein fehleranfälliger Prozess, der immer
          wieder zu Rückläufern und Zahlungsverzögerungen führte.
        </p>

        <h3>Wer hat den GiroCode entwickelt?</h3>
        <p>
          Der technische Standard stammt vom <strong>European Payments Council (EPC)</strong>,
          dem zentralen Entscheidungsgremium des europäischen Bankensektors für Zahlungsstandards.
          Das EPC definiert im Rahmen des SEPA-Regelwerks, wie Überweisungen, Lastschriften und
          Zahlungsinformationen technisch formatiert werden müssen. Das spezifische Dokument für
          den GiroCode-Standard ist das „EPC Quick Response Code – Guidelines to Enable the
          Data Capture for the Initiation of a SCT" (kurz: EPC069).
        </p>
        <p>
          In Deutschland hat der <strong>Zentraler Kreditausschuss (ZKA)</strong>, heute bekannt
          als <strong>Die Deutsche Kreditwirtschaft (DK)</strong>, die Spezifikation für den
          deutschen Markt adaptiert und den Begriff „GiroCode" als einheitliche Bezeichnung
          eingeführt. Dies sorgt dafür, dass Kunden und Unternehmen in Deutschland eine
          konsistente Terminologie verwenden.
        </p>
      </section>

      {/* ─── SECTION 2: Wie funktioniert ein GiroCode ─── */}
      <section aria-labelledby="funktion" className="mt-8">
        <h2 id="funktion">Wie funktioniert ein GiroCode?</h2>
        <p>
          Das Prinzip hinter dem GiroCode ist denkbar einfach: Alle Informationen, die für eine
          SEPA-Überweisung benötigt werden, werden in einem strukturierten Textformat
          zusammengefasst und anschließend als QR-Code kodiert. Beim Scannen liest die
          Banking-App diesen Text aus und füllt damit automatisch die Überweisungsmaske aus.
        </p>

        <h3>Schritt-für-Schritt Erklärung</h3>
        <ol>
          <li>
            <strong>Erstellen:</strong> Du trägst in unserem Generator (oder einer
            Buchhaltungssoftware) deine Zahlungsdaten ein – Name, IBAN, optionaler Betrag,
            Verwendungszweck.
          </li>
          <li>
            <strong>Generieren:</strong> Der Generator erstellt daraus den EPC-Payload (einen
            strukturierten Text nach EPC-Standard) und kodiert diesen als QR-Code.
          </li>
          <li>
            <strong>Platzieren:</strong> Der QR-Code wird auf der Rechnung, dem Kassenbon,
            dem Brief oder der Website platziert.
          </li>
          <li>
            <strong>Scannen:</strong> Der Zahler öffnet seine Banking-App, startet den
            QR-Scanner und hält die Kamera auf den Code.
          </li>
          <li>
            <strong>Prüfen:</strong> Die App zeigt die vorausgefüllte Überweisung an. Der
            Zahler überprüft alle Felder – besonders IBAN und Betrag.
          </li>
          <li>
            <strong>Bestätigen:</strong> Die Überweisung wird wie gewohnt mit TAN,
            Fingerabdruck oder Face ID freigegeben.
          </li>
        </ol>

        <h3>Was passiert beim Scannen technisch?</h3>
        <p>
          Die Banking-App aktiviert die Kamera des Smartphones und scannt kontinuierlich nach
          QR-Code-Mustern. Sobald ein gültiger QR-Code erkannt wird, dekodiert die App den
          enthaltenen Text. Die App prüft, ob es sich um einen EPC-konformen Payload handelt
          (erkennbar am Service-Tag <code>BCD</code> in der ersten Zeile) und extrahiert dann
          die einzelnen Felder wie IBAN, Betrag und Verwendungszweck. Diese Daten werden direkt
          in die Überweisungsmaske der App übertragen.
        </p>

        <h3>Welche Daten werden übertragen?</h3>
        <p>Ein vollständiger GiroCode-Payload enthält folgende Informationen:</p>
        <ul>
          <li><strong>Service Tag:</strong> „BCD" – kennzeichnet das Format</li>
          <li><strong>Version:</strong> meist 002</li>
          <li><strong>Zeichenkodierung:</strong> UTF-8</li>
          <li><strong>Überweisungsart:</strong> SCT (SEPA Credit Transfer)</li>
          <li><strong>BIC:</strong> optional seit 2016</li>
          <li><strong>Name des Empfängers:</strong> bis zu 70 Zeichen</li>
          <li><strong>IBAN:</strong> vollständige Kontonummer des Empfängers</li>
          <li><strong>Betrag:</strong> optional, z.&nbsp;B. EUR49.90</li>
          <li><strong>Verwendungszweck:</strong> bis zu 140 Zeichen</li>
        </ul>

        <h3>Sicherheitsaspekte</h3>
        <p>
          Der GiroCode ist ein <strong>pull-basiertes</strong> System: Der Zahler löst die
          Transaktion aktiv aus und bestätigt sie mit einer TAN oder biometrischen Freigabe.
          Anders als bei manchen anderen Zahlungsmethoden kann der Empfänger <strong>kein
          Geld abbuchen</strong>, ohne dass der Zahler aktiv zustimmt. Dies macht den GiroCode
          deutlich sicherer als beispielsweise das Einzugsermächtigung-Verfahren.
        </p>
        <p>
          Dennoch gilt: <strong>Prüfe die Daten immer vor der Bestätigung.</strong> Manipulierte
          QR-Codes könnten auf eine andere IBAN umleiten. Vertrauenswürdige Rechnungssteller
          drucken daher alle relevanten Daten auch im Klartext auf die Rechnung.
        </p>
      </section>

      {/* ─── SECTION 3: Vorteile ─── */}
      <section aria-labelledby="vorteile" className="mt-8">
        <h2 id="vorteile">Vorteile eines GiroCodes</h2>

        <h3>Vorteile für Rechnungssteller</h3>
        <p>
          Wer als Freelancer, Unternehmen oder Verein GiroCodes auf seinen Rechnungen einsetzt,
          profitiert von einer Reihe handfester Vorteile:
        </p>
        <ul>
          <li>
            <strong>Weniger Rückfragen:</strong> Kunden müssen nicht mehr anrufen, weil sie
            sich bei der IBAN vertippt haben oder den Verwendungszweck vergessen haben.
          </li>
          <li>
            <strong>Schnellere Zahlungseingänge:</strong> Da der Überweisungsprozess deutlich
            vereinfacht ist, tendieren Kunden dazu, Rechnungen schneller zu begleichen.
          </li>
          <li>
            <strong>Professioneller Eindruck:</strong> Eine Rechnung mit GiroCode signalisiert
            Modernität und Kundenorientierung.
          </li>
          <li>
            <strong>Bessere Zuordnung:</strong> Wenn der Verwendungszweck vorgegeben ist,
            werden Zahlungen automatisch mit der richtigen Rechnungsnummer verknüpft.
          </li>
          <li>
            <strong>Kein Mehraufwand:</strong> Mit den richtigen Tools wird der GiroCode
            automatisch beim Erstellen der Rechnung generiert.
          </li>
        </ul>

        <h3>Vorteile für Zahler</h3>
        <ul>
          <li>
            <strong>Schnell und einfach:</strong> Statt 22-stellige IBANs abzutippen, reicht
            ein Scan mit der Banking-App.
          </li>
          <li>
            <strong>Fehlerfrei:</strong> Zahlendreher und Tippfehler werden eliminiert.
          </li>
          <li>
            <strong>Kostenlos:</strong> Das Scannen und Überweisen ist völlig kostenlos – es
            fallen nur die üblichen Kontoführungsgebühren der eigenen Bank an.
          </li>
          <li>
            <strong>Sicher:</strong> Die Zahlung wird durch TAN oder Biometrie abgesichert,
            wie jede normale Überweisung auch.
          </li>
        </ul>

        <h3>Im Vergleich zur manuellen IBAN-Eingabe</h3>
        <p>
          Studien zeigen, dass bei manueller Eingabe langer Zahlenreihen wie IBANs die
          Fehlerquote deutlich über 1&nbsp;% liegt. Bei der deutschen IBAN mit 22 Stellen passiert
          es schnell, dass eine Ziffer umgestellt oder vergessen wird. Wird eine Überweisung
          mit falscher IBAN an eine existierende Kontonummer gesendet, ist die Rückbuchung
          aufwendig und kostspielig. Der GiroCode löst dieses Problem vollständig.
        </p>
      </section>

      {/* ─── SECTION 4: Wer kann GiroCodes nutzen ─── */}
      <section aria-labelledby="zielgruppen" className="mt-8">
        <h2 id="zielgruppen">Wer kann GiroCodes nutzen?</h2>
        <p>
          Grundsätzlich kann <strong>jede Person mit einem SEPA-Konto</strong> einen GiroCode
          erstellen und empfangen. Der Einsatz ist besonders sinnvoll für folgende Gruppen:
        </p>

        <h3>Selbstständige und Freelancer</h3>
        <p>
          Für Freelancer und Selbstständige ist der GiroCode ein einfaches Mittel, um
          Kundenzahlungen zu beschleunigen. Gerade bei einer hohen Anzahl von Rechnungen
          lohnt sich die Integration in die Buchhaltungssoftware. Wer heute noch händisch
          GiroCodes auf Rechnungen klebt, sollte über eine professionelle Lösung nachdenken.
        </p>

        <h3>Kleine und mittlere Unternehmen</h3>
        <p>
          KMUs profitieren besonders von der verbesserten Zahlungsquote und der reduzierten
          Bearbeitungszeit im Zahlungseingangsmanagement. Ein GiroCode auf jeder Ausgangsrechnung
          kann die durchschnittliche Zahlungsfrist spürbar senken.
        </p>

        <h3>Vereine und Organisationen</h3>
        <p>
          Vereine nutzen GiroCodes häufig für Mitgliedsbeiträge, Spendenaufrufe oder
          Veranstaltungsgebühren. Ein QR-Code auf dem Mitgliederbrief oder der Website
          vereinfacht die Abwicklung erheblich und entlastet den Kassenwart.
        </p>

        <h3>Privatpersonen</h3>
        <p>
          Auch Privatpersonen können GiroCodes einsetzen – etwa für Sammelbestellungen im
          Freundeskreis, gemeinsame Urlaubsausgaben oder als komfortable Zahlungsmethode für
          Kleinanzeigen-Transaktionen. Mit unserem kostenlosen Generator geht das in wenigen
          Sekunden.
        </p>
      </section>

      {/* ─── SECTION 5: GiroCode vs. andere Zahlungsmethoden ─── */}
      <section aria-labelledby="vergleich" className="mt-8">
        <h2 id="vergleich">GiroCode vs. andere Zahlungsmethoden</h2>
        <p>
          Der GiroCode ist nicht die einzige Möglichkeit, Zahlungen zu empfangen. Hier ein
          Vergleich mit den gängigsten Alternativen:
        </p>

        <div className="not-prose my-6 overflow-x-auto rounded-lg border border-slate-700">
          <table className="compare-table w-full text-sm">
            <thead>
              <tr>
                <th className="px-4 py-3">Merkmal</th>
                <th className="px-4 py-3">GiroCode</th>
                <th className="px-4 py-3">PayPal</th>
                <th className="px-4 py-3">Klarna</th>
                <th className="px-4 py-3">Lastschrift</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              <tr>
                <td className="px-4 py-3 font-medium text-slate-200">Kosten Empfänger</td>
                <td className="px-4 py-3" style={{color:'#22c55e', fontWeight:600}}>Kostenlos</td>
                <td className="px-4 py-3" style={{color:'#ef4444'}}>1,2–3,4 % + Fix</td>
                <td className="px-4 py-3" style={{color:'#ef4444'}}>Händlergebühr</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>Meist kostenlos</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-4 py-3 font-medium text-slate-200">Datenschutz</td>
                <td className="px-4 py-3" style={{color:'#22c55e', fontWeight:600}}>DSGVO-konform</td>
                <td className="px-4 py-3" style={{color:'#ef4444'}}>US-Unternehmen</td>
                <td className="px-4 py-3" style={{color:'#ef4444'}}>Datenanalyse</td>
                <td className="px-4 py-3" style={{color:'#22c55e'}}>DSGVO-konform</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-200">Verbreitung DE</td>
                <td className="px-4 py-3" style={{color:'#22c55e', fontWeight:600}}>Alle SEPA-Banken</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>Sehr weit</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>E-Commerce</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>Universal</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-4 py-3 font-medium text-slate-200">Einfachheit</td>
                <td className="px-4 py-3" style={{color:'#22c55e', fontWeight:600}}>QR-Scan</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>App/Web</td>
                <td className="px-4 py-3" style={{color:'#f97316'}}>Checkout-Prozess</td>
                <td className="px-4 py-3" style={{color:'#f97316'}}>Mandat nötig</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-200">Voraussetzung</td>
                <td className="px-4 py-3" style={{color:'#22c55e', fontWeight:600}}>SEPA-Konto</td>
                <td className="px-4 py-3" style={{color:'#f97316'}}>PayPal-Konto</td>
                <td className="px-4 py-3" style={{color:'#f97316'}}>Klarna-Integration</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>SEPA-Mandat</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Der GiroCode überzeugt besonders durch seine <strong>Kostenlosigkeit</strong> und
          seinen <strong>Datenschutz</strong>: Weder der Rechnungssteller noch der Zahler
          müssen sich bei einem Drittanbieter registrieren. Die Transaktion läuft direkt über
          die eigene Hausbank ab – genau wie eine normale Überweisung.
        </p>
      </section>

      {/* ─── SECTION 6: FAQ ─── */}
      <section aria-labelledby="faq" className="mt-10">
        <h2 id="faq">Häufige Fragen zum GiroCode (FAQ)</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-slate-50">
              Ist ein GiroCode nur in Deutschland nutzbar?
            </h3>
            <p className="text-sm text-slate-300">
              Nein. Der GiroCode basiert auf dem EPC-Standard und ist im gesamten{' '}
              <strong>SEPA-Raum</strong> nutzbar – das umfasst alle EU-Länder sowie Island,
              Liechtenstein, Norwegen und die Schweiz (mit leichten Besonderheiten). Ob eine
              bestimmte Banking-App das Format unterstützt, hängt von der jeweiligen Bank ab.
              In Österreich wird der gleiche Standard unter dem Namen „Stuzza-QR" geführt.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-50">
              Kann ich den GiroCode auch ohne Betrag erstellen?
            </h3>
            <p className="text-sm text-slate-300">
              Ja, der Betrag ist optional. Lässt du ihn weg, erscheint die Überweisungsmaske
              mit leerem Betragsfeld und der Zahler trägt den gewünschten Betrag selbst ein.
              Das ist bei Spenden, Vereinsbeiträgen oder variablen Preisen sehr praktisch.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-50">
              Welche Daten sind beim GiroCode Pflicht?
            </h3>
            <p className="text-sm text-slate-300">
              Pflicht sind der <strong>Name des Empfängers</strong> und die <strong>IBAN</strong>.
              Alle anderen Felder wie BIC, Betrag oder Verwendungszweck sind optional, auch wenn
              ein aussagekräftiger Verwendungszweck für eine saubere Buchhaltung dringend
              empfohlen wird.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-50">
              Was kostet die Nutzung eines GiroCodes?
            </h3>
            <p className="text-sm text-slate-300">
              Die Nutzung ist grundsätzlich kostenlos. Es fallen lediglich die üblichen
              Bankgebühren für die SEPA-Überweisung an, die bei vielen Konten ohnehin
              inklusive sind. Unser Generator ist dauerhaft kostenlos und erfordert keine
              Registrierung.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-50">
              Wie groß muss der GiroCode auf der Rechnung sein?
            </h3>
            <p className="text-sm text-slate-300">
              Empfohlen werden mindestens <strong>2 × 2 cm</strong> für den Druck. Bei
              digitalen PDFs sollte der Code auf dem Bildschirm mindestens 100 × 100 Pixel
              groß sein. Zu kleine Codes können von Kamera-Scannern nicht zuverlässig gelesen
              werden.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-50">
              Kann jemand mit meiner IBAN im GiroCode Geld von mir abbuchen?
            </h3>
            <p className="text-sm text-slate-300">
              Nein. Ein GiroCode ist eine <strong>Zahlungsaufforderung</strong>, kein
              Lastschriftmandat. Nur der Zahler kann aktiv eine Überweisung auslösen. Deine
              IBAN zu kennen ermöglicht es jemandem lediglich, dir Geld zu schicken – aber
              nicht, es abzubuchen.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-50">
              Funktioniert der GiroCode auch für internationale Zahlungen?
            </h3>
            <p className="text-sm text-slate-300">
              Der GiroCode / EPC-Standard ist für <strong>SEPA-Überweisungen</strong>
              konzipiert. Für Zahlungen außerhalb des SEPA-Raums (z.&nbsp;B. in die USA oder
              nach Australien) ist er nicht geeignet. Dort sind andere Systeme wie SWIFT
              notwendig.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-50">
              Muss ich den GiroCode jedes Mal neu erstellen?
            </h3>
            <p className="text-sm text-slate-300">
              Wenn du immer denselben Betrag und Verwendungszweck verwendest (z.&nbsp;B. ein
              monatlicher Vereinsbeitrag), kannst du denselben GiroCode mehrfach nutzen. Für
              individuelle Rechnungen mit unterschiedlichen Beträgen und Rechnungsnummern
              muss der Code jedoch jedes Mal neu generiert werden.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-50">
              Was passiert, wenn jemand den GiroCode zweimal scannt und überweist?
            </h3>
            <p className="text-sm text-slate-300">
              Der GiroCode selbst hat keinen Mechanismus zur Verhinderung von Doppelzahlungen.
              Die Verantwortung liegt beim Zahler. Als Rechnungssteller solltest du
              Doppelzahlungen in deiner Buchhaltung erkennen und entsprechend reagieren.
              Eine eindeutige Rechnungsnummer im Verwendungszweck hilft dabei.
            </p>
          </div>
        </div>
      </section>
    </KnowledgeLayout>
  );
}
