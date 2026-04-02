import type { Metadata } from 'next';
import Link from 'next/link';
import { KnowledgeLayout } from '../../../components/KnowledgeLayout';

export const metadata: Metadata = {
  title: 'EPC-Standard erklärt – Aufbau des SEPA-QR-Codes 2026',
  description:
    'Der EPC-Standard für GiroCodes: Payload-Aufbau Zeile für Zeile, Versionen 001/002, Fehlerkorrektur und JavaScript-Codebeispiel. Technisch präzise erklärt.',
  keywords: 'EPC Standard, SEPA QR Code Aufbau, GiroCode Payload, EPC069, BCD Service Tag, SEPA Credit Transfer',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/wissen/epc-standard',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/epc-standard',
      'de': 'https://www.girocodegenerator.com/wissen/epc-standard',
      'en': 'https://www.girocodegenerator.com/en/wissen/epc-standard',
      'fr': 'https://www.girocodegenerator.com/fr/wissen/epc-standard',
      'es': 'https://www.girocodegenerator.com/es/wissen/epc-standard',
    },
  },
};

export default function WissenEpcStandardPage() {
  return (
    <KnowledgeLayout
      breadcrumbCurrent="EPC-Standard"
      badge="Technik · EPC-Standard & SEPA-QR"
      title="EPC-Standard – Der technische Aufbau des GiroCodes"
      lead="Hinter jedem GiroCode steckt ein klar definiertes Textformat, das vom European Payments Council (EPC) spezifiziert wird. Hier erfährst du, wie der EPC-Payload Zeile für Zeile aufgebaut ist, welche Versionen existieren und wie die Fehlerkorrektur funktioniert."
      relatedArticles={[
        { href: '/wissen/girocode', label: 'Was ist ein GiroCode?' },
        { href: '/wissen/iban-bic', label: 'IBAN & BIC im GiroCode' },
        { href: '/wissen/betrag-und-zweck', label: 'Betrag & Verwendungszweck' },
        { href: '/wissen/rechnung', label: 'GiroCode auf Rechnungen' },
        { href: '/wissen/banking-apps', label: 'Banking-Apps mit GiroCode' },
        { href: '/wissen/scannen', label: 'GiroCode scannen' },
      ]}
      locale="de"
    >
      {/* ─── SECTION 1: Was ist der EPC-Standard ─── */}
      <section aria-labelledby="was-ist-epc">
        <h2 id="was-ist-epc">Was ist der EPC-Standard?</h2>
        <p>
          Der <strong>European Payments Council (EPC)</strong> ist das Lenkungsgremium des
          europäischen Bankensektors, das technische und regulatorische Standards für
          Zahlungen im <strong>SEPA-Raum</strong> definiert. Das EPC wurde 2002 gegründet und
          hat seitdem maßgebliche Standards wie SEPA Credit Transfer (SCT), SEPA Direct Debit
          (SDD) und – für uns besonders relevant – das <strong>EPC Quick Response Code
          Framework</strong> entwickelt.
        </p>
        <p>
          Das relevante Dokument für den GiroCode-Standard heißt offiziell „<strong>EPC069 –
          Quick Response Code: Guidelines to Enable the Data Capture for the Initiation of a
          SEPA Credit Transfer</strong>". Es definiert exakt, wie die Zahlungsinformationen
          strukturiert und in einem QR-Code kodiert werden müssen.
        </p>

        <h3>Geschichte und Entwicklung</h3>
        <p>
          Die Entwicklung des EPC-QR-Standards begann parallel zur SEPA-Migration Anfang der
          2010er Jahre. Mit der vollständigen SEPA-Migration in Deutschland im Jahr 2014 und
          der anschließenden Abschaffung der BIC-Pflicht für SEPA-Überweisungen im Jahr 2016
          wurden die Grundlagen für eine vereinfachte QR-Code-basierte Zahlung geschaffen.
        </p>
        <p>
          In Deutschland wurde der Standard unter dem Namen „<strong>GiroCode</strong>" von
          der Deutschen Kreditwirtschaft (DK) eingeführt und ab 2018 aktiv beworben.
          Österreich folgte mit dem „<strong>Stuzza-QR</strong>", die Schweiz entwickelte
          parallel die „<strong>Swiss QR Bill</strong>" – beide basieren auf ähnlichen
          Prinzipien, weichen aber in Details ab.
        </p>

        <h3>Warum wurde der EPC-Standard eingeführt?</h3>
        <p>
          Vor dem EPC-Standard gab es verschiedene proprietäre QR-Code-Formate, die
          bankspezifisch und nicht interoperabel waren. Wenn Kunde A bei Sparkasse Banking zahlen
          wollte und der Rechnungssteller einen Volksbank-spezifischen QR-Code nutzte, scheiterte
          der Scan. Mit dem einheitlichen EPC-Standard kann <strong>jede Banking-App jedes
          EPC-konforme QR-Code lesen</strong> – unabhängig davon, welche Bank den Code
          generiert hat.
        </p>

        <h3>Verbreitung in Europa</h3>
        <p>
          Der EPC-Standard ist heute in den meisten SEPA-Ländern anerkannt, wenn auch nicht
          überall gleich stark verbreitet. In Deutschland, Österreich, den Niederlanden und
          Belgien ist die Unterstützung durch Banking-Apps besonders hoch. Die Schweiz hat
          einen eigenen Standard (QR-Rechnung) eingeführt, der auf dem EPC-Standard aufbaut,
          aber eigene Felder hinzufügt.
        </p>
      </section>

      {/* ─── SECTION 2: Technischer Aufbau ─── */}
      <section aria-labelledby="aufbau" className="mt-8">
        <h2 id="aufbau">Der technische Aufbau des EPC-Payloads</h2>
        <p>
          Der EPC-Payload ist ein reiner <strong>Klartext</strong>, der in mehrere Zeilen
          unterteilt ist. Jede Zeile hat eine genau definierte Bedeutung. Der Text wird dann
          als QR-Code kodiert. Hier ist ein vollständiges Beispiel:
        </p>
        <pre className="whitespace-pre-wrap rounded-md bg-slate-900/70 p-4 text-xs text-slate-200">
{`BCD
002
1
SCT
BELADEBEXXX
Max Mustermann GmbH
DE89370400440532013000
EUR1250.00

Rechnung RE-2024-0042`}
        </pre>

        <p>Hier ist jede Zeile im Detail erklärt:</p>

        <h3>Zeile 1: Service Tag (BCD)</h3>
        <p>
          Der Service Tag <code>BCD</code> (Bank Customer Data) ist eine feste Kennung, die
          jede Banking-App erkennt und als Signal für einen EPC-konformen QR-Code wertet.
          Fehlt dieser Tag, wird der QR-Code von Banking-Apps nicht als GiroCode interpretiert
          und möglicherweise ignoriert. <code>BCD</code> ist immer der erste Eintrag und darf
          nicht verändert werden.
        </p>

        <h3>Zeile 2: Version (001 oder 002)</h3>
        <p>
          Die Versionsnummer gibt an, welche Version des EPC-Standards verwendet wird. Aktuell
          sind <code>001</code> und <code>002</code> in Verwendung. Version <code>002</code>
          ist die neuere und empfohlene Variante, die von modernen Banking-Apps bevorzugt wird.
          Beide Versionen sind weitgehend kompatibel; die meisten Apps akzeptieren beide.
        </p>

        <h3>Zeile 3: Encoding (Zeichenkodierung)</h3>
        <p>
          Der Wert <code>1</code> steht für <strong>UTF-8</strong>-Kodierung. Dies ist der
          Standard für moderne Anwendungen und erlaubt die Verwendung von Umlauten (ä, ö, ü)
          und anderen Sonderzeichen. Andere Werte (2–8) stehen für ältere Kodierungen wie
          ISO-8859-1, werden aber praktisch kaum noch verwendet. In der Implementierung
          sollte immer UTF-8 (Wert 1) verwendet werden.
        </p>

        <h3>Zeile 4: Identification (SCT)</h3>
        <p>
          <code>SCT</code> steht für <strong>SEPA Credit Transfer</strong> – also die
          SEPA-Überweisung. Dies ist derzeit der einzige für GiroCodes vorgesehene Wert.
          Andere Zahlungsarten wie SEPA Direct Debit werden durch den GiroCode-Standard
          nicht abgebildet.
        </p>

        <h3>Zeile 5: BIC (Bank Identifier Code)</h3>
        <p>
          Der BIC des Empfängers ist seit der vollständigen SEPA-Migration im Jahr 2016 für
          rein innereuropäische Überweisungen <strong>optional</strong>. Die Zeile kann
          leergelassen werden. Viele Generatoren lassen sie dennoch befüllen, um maximale
          Kompatibilität mit älteren Banking-Apps sicherzustellen. Ein gültiger BIC hat
          8 oder 11 Stellen.
        </p>

        <h3>Zeile 6: Name des Empfängers (max. 70 Zeichen)</h3>
        <p>
          Der Name des Kontoinhabers – also der Person oder des Unternehmens, an die die
          Zahlung geht. Maximal <strong>70 Zeichen</strong>. Dieser Wert ist ein
          <strong>Pflichtfeld</strong>. Der eingetragene Name muss nicht zwingend mit dem
          offiziellen Kontonamen übereinstimmen, sollte es aber für eine reibungslose
          Buchung. Sonderzeichen und Umlaute sind mit UTF-8-Encoding erlaubt.
        </p>

        <h3>Zeile 7: IBAN des Empfängers</h3>
        <p>
          Die vollständige <strong>IBAN</strong> (International Bank Account Number) des
          Empfängers. Dies ist neben dem Empfängernamen das wichtigste Pflichtfeld. Eine
          deutsche IBAN beginnt mit <code>DE</code> und hat 22 Zeichen. Fehler in der IBAN
          führen entweder zu einer ungültigen Transaktion oder – im schlimmsten Fall – zu
          einer Fehlbuchung auf ein fremdes Konto.
        </p>

        <h3>Zeile 8: Betrag (Format EUR12.34)</h3>
        <p>
          Das Betragsfeld ist <strong>optional</strong>. Wenn ein Betrag angegeben wird, muss
          er im Format <code>EUR</code> gefolgt vom Betrag mit Punkt als Dezimaltrennzeichen
          angegeben werden – also z.&nbsp;B. <code>EUR12.34</code> oder{' '}
          <code>EUR1250.00</code>. Ein Komma als Dezimaltrennzeichen ist <strong>nicht
          erlaubt</strong> und führt zu Scan-Fehlern. Der maximale Betrag beträgt laut
          EPC-Spezifikation 999999999.99 EUR.
        </p>

        <h3>Zeile 9: Purpose Code (leer lassen)</h3>
        <p>
          Dieser optionale Code kann einen standardisierten Zahlungszweck angeben (z.&nbsp;B.
          <code>GDDS</code> für Waren-Kauf). In der Praxis wird dieses Feld in Deutschland
          fast immer leergelassen. Banking-Apps ignorieren es in der Regel oder zeigen es
          nicht an.
        </p>

        <h3>Zeile 10: Referenz (Remittance Reference)</h3>
        <p>
          Strukturierte Zahlungsreferenz – in der Regel leer. Wird in einigen Ländern (z.&nbsp;B.
          Belgien mit dem strukturierten BBA-Format) intensiv genutzt. In Deutschland ist es
          üblich, dieses Feld freizulassen und stattdessen Zeile 11 für den Verwendungszweck
          zu nutzen.
        </p>

        <h3>Zeile 11: Verwendungszweck (max. 140 Zeichen)</h3>
        <p>
          Der Freitext-Verwendungszweck, der in der Überweisungsmaske erscheint. Maximal
          <strong>140 Zeichen</strong>. Hier sollte die Rechnungsnummer, ggf. Kundennummer
          und eine kurze Beschreibung der Leistung stehen. Dieses Feld ist optional, aber
          für eine ordnungsgemäße Buchhaltung unbedingt empfohlen.
        </p>
      </section>

      {/* ─── SECTION 3: Versionen im Vergleich ─── */}
      <section aria-labelledby="versionen" className="mt-8">
        <h2 id="versionen">EPC-Versionen im Vergleich: 001 vs. 002</h2>
        <p>
          Der EPC-Standard liegt aktuell in zwei aktiven Versionen vor. Beide werden von
          modernen Banking-Apps unterstützt, weisen aber kleine Unterschiede auf:
        </p>
        <div className="not-prose my-4 overflow-x-auto rounded-lg border border-slate-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-800 text-slate-300">
                <th className="px-4 py-3 text-left font-medium">Merkmal</th>
                <th className="px-4 py-3 text-left font-medium">Version 001</th>
                <th className="px-4 py-3 text-left font-medium">Version 002</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50 text-slate-300">
              <tr>
                <td className="px-4 py-3">Eingeführt</td>
                <td className="px-4 py-3">2012</td>
                <td className="px-4 py-3">2016</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-4 py-3">BIC</td>
                <td className="px-4 py-3">Pflichtfeld</td>
                <td className="px-4 py-3">Optional</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Empfehlung</td>
                <td className="px-4 py-3">Legacy</td>
                <td className="px-4 py-3">Empfohlen</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-4 py-3">App-Kompatibilität</td>
                <td className="px-4 py-3">Sehr gut</td>
                <td className="px-4 py-3">Sehr gut</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Unser GiroCode Generator verwendet standardmäßig <strong>Version 002</strong>, da
          der BIC heute optional ist und die meisten Apps damit optimal umgehen können.
        </p>
      </section>

      {/* ─── SECTION 4: Fehlerkorrektur ─── */}
      <section aria-labelledby="fehlerkorrektur" className="mt-8">
        <h2 id="fehlerkorrektur">Fehlerkorrektur und QR-Code Qualität</h2>

        <h3>Fehlerkorrekturlevel M (15 %)</h3>
        <p>
          QR-Codes können mit vier verschiedenen Fehlerkorrekturlevel kodiert werden:
        </p>
        <ul>
          <li><strong>L (Low):</strong> ~7 % Fehlerkorrektur</li>
          <li><strong>M (Medium):</strong> ~15 % Fehlerkorrektur</li>
          <li><strong>Q (Quartile):</strong> ~25 % Fehlerkorrektur</li>
          <li><strong>H (High):</strong> ~30 % Fehlerkorrektur</li>
        </ul>
        <p>
          Der EPC-Standard schreibt für GiroCodes das Level <strong>M</strong> vor. Das bedeutet:
          Bis zu 15 % des QR-Code-Codes können beschädigt oder unleserlich sein, und der Code
          kann trotzdem noch korrekt dekodiert werden.
        </p>

        <h3>Warum Level M und nicht H?</h3>
        <p>
          Ein höheres Fehlerkorrekturlevel macht den QR-Code zwar robuster, aber auch
          <strong>physisch größer</strong>, da mehr Redundanzdaten gespeichert werden müssen.
          Da ein GiroCode-Payload bereits recht lang sein kann (bis zu mehrere hundert Zeichen),
          würde Level H zu einem sehr dichten und schwer lesbaren QR-Code führen. Level M ist
          ein guter Kompromiss aus Robustheit und Lesbarkeit.
        </p>

        <h3>Auswirkungen auf die Scanbarkeit</h3>
        <p>
          Die Scanbarkeit hängt von mehreren Faktoren ab:
        </p>
        <ul>
          <li>
            <strong>Druckqualität:</strong> Mindestens 300 DPI für Druck empfohlen.
            Laserdrucke sind in der Regel besser geeignet als Tintenstrahldrucker.
          </li>
          <li>
            <strong>Kontrast:</strong> Schwarzer Code auf weißem Hintergrund ist optimal.
            Farbige QR-Codes können funktionieren, aber nur wenn der Kontrast ausreicht.
          </li>
          <li>
            <strong>Größe:</strong> Mindestens 2 × 2 cm für den Ausdruck, mindestens 100 × 100
            Pixel für digitale Anzeige.
          </li>
          <li>
            <strong>Ruhezone:</strong> Um den QR-Code herum sollte ein weißer Rand von
            mindestens 4 Modulen (kleinste Einheit des QR-Codes) bestehen.
          </li>
        </ul>

        <h3>Mindestgröße des QR-Codes</h3>
        <p>
          Der EPC-Standard empfiehlt eine Mindestgröße von <strong>2 × 2 cm</strong> für den
          Druck. Für zuverlässigen Scan auch in suboptimalen Lichtverhältnissen wird jedoch
          <strong>3 × 3 cm</strong> empfohlen. Unser Generator erzeugt standardmäßig
          hochauflösende QR-Codes, die für beide Verwendungszwecke geeignet sind.
        </p>
      </section>

      {/* ─── SECTION 5: Länder ─── */}
      <section aria-labelledby="laender" className="mt-8">
        <h2 id="laender">EPC-Standard in verschiedenen Ländern</h2>
        <p>
          Obwohl alle SEPA-Länder prinzipiell den EPC-Standard nutzen können, hat jedes Land
          eigene Varianten oder Namen entwickelt:
        </p>

        <h3>Deutschland – GiroCode</h3>
        <p>
          In Deutschland wird der Standard als „GiroCode" bezeichnet. Er ist weit verbreitet,
          wird von allen großen Banken unterstützt und seit 2018 aktiv durch die Deutsche
          Kreditwirtschaft beworben. Die Implementierung folgt dem EPC-Standard ohne wesentliche
          Abweichungen.
        </p>

        <h3>Österreich – Stuzza QR</h3>
        <p>
          Österreich nutzt den „<strong>Stuzza-QR</strong>", entwickelt von der Studiengesellschaft
          für Zusammenarbeit im Zahlungsverkehr (Stuzza GmbH). Das Format basiert ebenfalls auf
          dem EPC-Standard, enthält aber in einigen Versionen zusätzliche Felder für den
          österreichischen Markt. GiroCodes und Stuzza-QR-Codes sind in der Regel
          wechselseitig kompatibel.
        </p>

        <h3>Belgien – QR-Rechnung</h3>
        <p>
          Belgien nutzt intensiv das strukturierte Referenzformat <strong>BBA</strong> (Belgisch
          strukturierter Kommunikationszeichen) in Kombination mit dem EPC-Standard. Die
          strukturierte Referenz (Zeile 10 des Payloads) wird hier häufig ausgefüllt,
          was in anderen Ländern unüblich ist.
        </p>

        <h3>Schweiz – QR-Bill (Swiss QR)</h3>
        <p>
          Die Schweiz hat eine eigene Spezifikation entwickelt: die „<strong>Swiss QR Bill</strong>"
          (QR-Rechnung), eingeführt 2020 als Ersatz für den orangen Einzahlungsschein. Sie
          basiert zwar auf dem QR-Code-Konzept, hat aber ein eigenes Format und ist{' '}
          <strong>nicht direkt kompatibel</strong> mit dem EPC-Standard. Da die Schweiz kein
          SEPA-Mitglied ist, gibt es hier eigene Zahlungsstandards.
        </p>

        <h3>Niederlande und Frankreich</h3>
        <p>
          In den Niederlanden und Frankreich ist der EPC-Standard weniger verbreitet als in
          Deutschland. Viele Banken unterstützen ihn zwar technisch, aber der Consumer-Markt
          hat andere Zahlungsmethoden bevorzugt (z.&nbsp;B. iDEAL in den Niederlanden).
        </p>
      </section>

      {/* ─── SECTION 6: Technische Implementierung ─── */}
      <section aria-labelledby="implementierung" className="mt-8">
        <h2 id="implementierung">Technische Implementierung in JavaScript</h2>
        <p>
          Der EPC-Payload ist simpel zu generieren – es handelt sich um einen reinen String,
          der mit Zeilenumbrüchen formatiert wird. Hier ein Beispiel, wie unser Generator
          den Payload erstellt:
        </p>
        <pre className="whitespace-pre-wrap rounded-md bg-slate-900/70 p-4 text-xs text-slate-200">
{`function generateEpcPayload({
  name,        // Empfängername, max. 70 Zeichen
  iban,        // IBAN, z.B. DE89370400440532013000
  bic = '',    // BIC optional
  amount = '', // z.B. "EUR12.34" oder leer
  reference = '', // Verwendungszweck
  version = '002',
}: GiroCodeInput): string {
  const lines = [
    'BCD',          // Service Tag
    version,        // Version
    '1',            // UTF-8 Encoding
    'SCT',          // SEPA Credit Transfer
    bic,            // BIC (optional)
    name,           // Empfängername
    iban,           // IBAN
    amount,         // Betrag (optional)
    '',             // Purpose (leer)
    '',             // Structured Reference (leer)
    reference,      // Verwendungszweck
  ];
  return lines.join('\\n');
}`}
        </pre>
        <p>
          Der so erzeugte String wird dann mit einer QR-Code-Bibliothek (z.&nbsp;B. dem
          npm-Paket <code>qrcode</code>) mit dem Fehlerkorrekturlevel <code>M</code> in einen
          QR-Code umgewandelt.
        </p>
      </section>

      {/* ─── SECTION 7: Häufige Fehler ─── */}
      <section aria-labelledby="fehler" className="mt-8">
        <h2 id="fehler">Häufige Fehler beim EPC-Standard</h2>

        <h3>Falsche Zeichenkodierung</h3>
        <p>
          Wenn der Payload nicht als UTF-8 kodiert wird, können Umlaute (ä, ö, ü, ß)
          korrumpiert werden. Dies führt entweder zu einem unlesbaren QR-Code oder zu
          fehlerhaften Daten in der Überweisungsmaske. Lösung: Immer UTF-8 verwenden und
          Zeile 3 auf <code>1</code> setzen.
        </p>

        <h3>Zu langer Verwendungszweck</h3>
        <p>
          Der Verwendungszweck ist auf <strong>140 Zeichen</strong> begrenzt. Wird dieser
          Wert überschritten, erzeugen manche Generatoren fehlerhafte QR-Codes, andere
          schneiden den Text einfach ab. Unser Generator zeigt ein Warnsignal an, wenn die
          Grenze erreicht wird.
        </p>

        <h3>Falsches Betragsformat</h3>
        <p>
          Der häufigste technische Fehler: <code>EUR 12,34</code> statt <code>EUR12.34</code>.
          Leerzeichen zwischen Währung und Betrag sowie ein Komma statt eines Punktes als
          Dezimaltrennzeichen sind ungültig und führen zum Scan-Fehler.
        </p>

        <h3>Ungültige IBAN</h3>
        <p>
          Eine IBAN mit falscher Prüfziffer (Mod-97) führt zwar nicht zwingend zum Abbruch
          des Scans, kann aber von einigen Banking-Apps abgelehnt werden. Zudem besteht das
          Risiko einer Fehlbuchung. Immer die IBAN vor der Codierung prüfen!
        </p>

        <h3>Empfängername zu lang</h3>
        <p>
          Der Name des Empfängers ist auf <strong>70 Zeichen</strong> begrenzt. Bei langen
          Firmennamen mit Rechtsform (z.&nbsp;B. „Mustermann Consulting und Beratung GmbH & Co. KG")
          muss ggf. eine Abkürzung verwendet werden.
        </p>
      </section>
    </KnowledgeLayout>
  );
}
