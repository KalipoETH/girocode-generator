import type { Metadata } from 'next';
import Link from 'next/link';
import { KnowledgeLayout } from '../../../components/KnowledgeLayout';

export const metadata: Metadata = {
  title: 'IBAN & BIC im GiroCode – Format, Pflicht & Validierung',
  description:
    'IBAN und BIC für den GiroCode: Ist der BIC Pflicht? Wie funktioniert die IBAN-Validierung (Mod-97)? Alle Formate erklärt mit Länder-Tabelle.',
  keywords: 'IBAN Aufbau, BIC Erklärung, IBAN Prüfziffer, Mod-97, IBAN GiroCode, SEPA IBAN',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/wissen/iban-bic',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/iban-bic',
      'de': 'https://www.girocodegenerator.com/wissen/iban-bic',
      'en': 'https://www.girocodegenerator.com/en/wissen/iban-bic',
      'fr': 'https://www.girocodegenerator.com/fr/wissen/iban-bic',
      'es': 'https://www.girocodegenerator.com/es/wissen/iban-bic',
    },
  },
};

export default function WissenIbanBicPage() {
  return (
    <KnowledgeLayout
      breadcrumbCurrent="IBAN & BIC"
      badge="Grundlagen · IBAN & BIC"
      title="IBAN & BIC – Alles für den GiroCode erklärt"
      lead="Für einen gültigen GiroCode sind vor allem IBAN und – in manchen Fällen – der BIC relevant. Hier erfährst du, wie IBAN und BIC aufgebaut sind, wie die Prüfziffer berechnet wird und was du beim GiroCode beachten musst."
      relatedArticles={[
        { href: '/wissen/girocode', label: 'Was ist ein GiroCode?' },
        { href: '/wissen/epc-standard', label: 'EPC-Standard erklärt' },
        { href: '/wissen/betrag-und-zweck', label: 'Betrag & Verwendungszweck' },
        { href: '/wissen/rechnung', label: 'GiroCode auf Rechnungen' },
        { href: '/wissen/banking-apps', label: 'Banking-Apps mit GiroCode' },
        { href: '/wissen/scannen', label: 'GiroCode scannen' },
      ]}
      locale="de"
    >
      {/* ─── SECTION 1: Was ist eine IBAN ─── */}
      <section aria-labelledby="was-ist-iban">
        <h2 id="was-ist-iban">Was ist eine IBAN?</h2>
        <p>
          Die <strong>IBAN (International Bank Account Number)</strong> ist eine international
          standardisierte Kontonummer, die im Rahmen des SEPA-Projekts für Europa entwickelt
          wurde. Sie löste in Deutschland ab dem 1. Februar 2014 vollständig die alte
          Kombination aus Bankleitzahl (BLZ) und Kontonummer ab.
        </p>
        <p>
          Die IBAN ist in der Norm <strong>ISO 13616</strong> definiert und ermöglicht eine
          automatisierte, fehlerresistente Verarbeitung von Überweisungen und Lastschriften
          im gesamten SEPA-Raum. Sie enthält alle notwendigen Informationen zur eindeutigen
          Identifikation eines Bankkontos.
        </p>

        <h3>Aufbau der deutschen IBAN</h3>
        <p>
          Eine deutsche IBAN hat immer <strong>22 Zeichen</strong> und folgt diesem Schema:
        </p>
        <pre className="whitespace-pre-wrap rounded-md bg-slate-900/70 p-4 text-xs text-slate-200">
{`DE89 3704 0044 0532 0130 00
│──│ │──│ │──────────────│
│  │  │         │
│  │  │    Kontonummer (10-stellig, ggf. mit führenden Nullen)
│  │  Bankleitzahl (8-stellig)
│  Prüfziffern (2-stellig)
Länderkennzeichen`}
        </pre>
        <ul>
          <li>
            <strong>DE</strong> – Länderkennzeichen (2 Buchstaben, ISO 3166-1 Alpha-2)
          </li>
          <li>
            <strong>89</strong> – Prüfziffern (2 Ziffern, errechnet nach Mod-97-Algorithmus)
          </li>
          <li>
            <strong>37040044</strong> – Bankleitzahl (8 Ziffern)
          </li>
          <li>
            <strong>0532013000</strong> – Kontonummer (10 Ziffern, mit führenden Nullen aufgefüllt)
          </li>
        </ul>

        <h3>Geschichte der IBAN-Einführung in Deutschland</h3>
        <p>
          Deutschland begann mit der Einführung der IBAN als Teil des SEPA-Projekts der
          Europäischen Union. Ab 2008 konnten Konten bereits mit IBAN adressiert werden,
          als <strong>Pflichtstandard</strong> wurde die IBAN jedoch erst am{' '}
          <strong>1. Februar 2014</strong> verbindlich – dann wurde die alte BLZ/Konto-Kombination
          abgeschafft. Seitdem ist die IBAN die einzige offizielle Kontobezeichnung im
          deutschen Bankwesen.
        </p>
      </section>

      {/* ─── SECTION 2: IBAN Schritt für Schritt ─── */}
      <section aria-labelledby="iban-aufbau" className="mt-8">
        <h2 id="iban-aufbau">Die IBAN Schritt für Schritt erklärt</h2>

        <h3>Länderkennzeichen</h3>
        <p>
          Die ersten zwei Buchstaben jeder IBAN sind das <strong>Länderkennzeichen</strong>
          gemäß ISO 3166-1 Alpha-2. Deutschland: <code>DE</code>, Österreich: <code>AT</code>,
          Schweiz: <code>CH</code>, Frankreich: <code>FR</code>. Das Länderkennzeichen
          bestimmt auch die Gesamtlänge der IBAN, da jedes Land eine andere Länge definiert hat.
        </p>

        <h3>Prüfziffern – der Mod-97-Algorithmus</h3>
        <p>
          Die zwei Stellen nach dem Länderkennzeichen sind die <strong>Prüfziffern</strong>.
          Sie werden nach dem Mod-97-Algorithmus berechnet und dienen der Fehlererkennung.
          Hier ist der Algorithmus Schritt für Schritt erklärt:
        </p>
        <ol>
          <li>
            Die IBAN wird umgestellt: Die ersten vier Zeichen (Länderkennzeichen + Prüfziffern)
            werden <strong>ans Ende</strong> gestellt. Aus <code>DE89 3704...</code> wird also
            <code>3704...DE89</code>.
          </li>
          <li>
            Alle <strong>Buchstaben werden durch Zahlen ersetzt</strong>: A=10, B=11, C=12, ...,
            Z=35. <code>DE</code> wird also zu <code>1314</code>.
          </li>
          <li>
            Die entstehende sehr lange Zahl wird durch <strong>97 dividiert</strong>. Wenn der
            Rest der Division genau <strong>1</strong> ist, ist die IBAN formal gültig.
          </li>
        </ol>
        <p>
          Beispiel: <code>DE89370400440532013000</code> – die Prüfziffer 89 wurde so berechnet,
          dass <code>Rest ÷ 97 = 1</code> gilt.
        </p>

        <h3>Bankleitzahl</h3>
        <p>
          In der deutschen IBAN sind die Stellen 5 bis 12 die <strong>Bankleitzahl (BLZ)</strong>
          – eine 8-stellige Zahl, die das Geldinstitut identifiziert. Die BLZ wird von der
          Deutschen Bundesbank vergeben und ist öffentlich zugänglich. Beispiel:{' '}
          <code>37040044</code> ist die BLZ der Commerzbank Köln.
        </p>

        <h3>Kontonummer</h3>
        <p>
          Die letzten 10 Stellen der deutschen IBAN entsprechen der <strong>Kontonummer</strong>,
          ggf. mit führenden Nullen auf 10 Stellen aufgefüllt. Eine alte 8-stellige Kontonummer
          <code>53201300</code> wird also zu <code>0532013000</code>.
        </p>
      </section>

      {/* ─── SECTION 3: Was ist ein BIC ─── */}
      <section aria-labelledby="was-ist-bic" className="mt-8">
        <h2 id="was-ist-bic">Was ist ein BIC?</h2>
        <p>
          Der <strong>BIC (Business Identifier Code)</strong>, auch als <strong>SWIFT-Code</strong>
          bekannt, ist eine international standardisierte Bankkennung. Er ist in der Norm
          ISO 9362 definiert und dient der eindeutigen Identifikation von Finanzinstituten
          weltweit.
        </p>

        <h3>Aufbau des BIC (8 oder 11 Stellen)</h3>
        <pre className="whitespace-pre-wrap rounded-md bg-slate-900/70 p-4 text-xs text-slate-200">
{`BELADEBEXXX
│──│ │─│ │─│ │──│
│    │   │   └── Filialcode (3 Stellen, optional, "XXX" = Hauptstelle)
│    │   └────── Ortskennung (2 Stellen)
│    └────────── Länderkennung (2 Buchstaben)
└─────────────── Bankcode (4 Buchstaben)`}
        </pre>
        <ul>
          <li><strong>Bankcode:</strong> 4 Buchstaben – identifiziert die Bank (z.&nbsp;B. BELA = Berliner Sparkasse)</li>
          <li><strong>Länderkennung:</strong> 2 Buchstaben – ISO 3166-1 (z.&nbsp;B. DE = Deutschland)</li>
          <li><strong>Ortscode:</strong> 2 Zeichen – Stadt oder Region</li>
          <li><strong>Filialcode:</strong> Optional, 3 Zeichen – leer oder XXX für Hauptstelle</li>
        </ul>

        <h3>Wo finde ich meinen BIC?</h3>
        <p>
          Den BIC deiner Bank findest du:
        </p>
        <ul>
          <li>Auf deinem <strong>Kontoauszug</strong> oder Bankbrief</li>
          <li>Im <strong>Online-Banking</strong> unter Kontodetails</li>
          <li>Auf der <strong>Website deiner Bank</strong> (meist im Footer oder unter „Kontakt")</li>
          <li>In der <strong>IBAN-Lupe</strong> oder BIC-Datenbanken wie beispielsweise der Bundesbank-Website</li>
        </ul>
      </section>

      {/* ─── SECTION 4: BIC Pflicht ─── */}
      <section aria-labelledby="bic-pflicht" className="mt-8">
        <h2 id="bic-pflicht">Ist der BIC beim GiroCode Pflicht?</h2>
        <p>
          Seit der vollständigen SEPA-Migration und dem entsprechenden EU-Beschluss ist der BIC
          für rein <strong>innereuropäische SEPA-Überweisungen seit dem 1. Februar 2016 nicht
          mehr verpflichtend</strong>. Banken können die Zielbank nun automatisch anhand der IBAN
          ermitteln.
        </p>

        <h3>Im GiroCode: BIC optional</h3>
        <p>
          Der EPC-Standard Version 002 (empfohlen) erlaubt, das BIC-Feld leer zu lassen.
          Trotzdem unterstützen viele Generatoren die BIC-Eingabe, da einige ältere Banking-Apps
          das Feld erwarten. Für maximale Kompatibilität ist es sinnvoll, den BIC anzugeben.
        </p>

        <h3>Wann wird der BIC trotzdem benötigt?</h3>
        <ul>
          <li>
            Bei Überweisungen in <strong>Nicht-SEPA-Länder</strong> (z.&nbsp;B. USA, Kanada) –
            hier ist der BIC immer erforderlich.
          </li>
          <li>
            Bei <strong>älteren Banking-Apps</strong>, die Version 001 des EPC-Standards
            verwenden und den BIC als Pflichtfeld erwarten.
          </li>
          <li>
            Bei manchen <strong>Auslandsüberweisungen</strong> innerhalb des SEPA-Raums,
            die von spezifischen Banken verlangt werden.
          </li>
        </ul>
      </section>

      {/* ─── SECTION 5: IBAN Validierung ─── */}
      <section aria-labelledby="iban-validierung" className="mt-8">
        <h2 id="iban-validierung">IBAN-Validierung erklärt</h2>
        <p>
          Eine korrekte IBAN zu haben, ist für den GiroCode essenziell. Eine falsche IBAN
          führt bestenfalls zu einem Scan-Fehler, schlimmstenfalls zu einer Fehlbuchung.
          Deshalb sollte jede IBAN vor der Verwendung im GiroCode validiert werden.
        </p>

        <h3>Mod-97 Algorithmus – Schritt für Schritt</h3>
        <ol>
          <li>
            Länderkennzeichen und Prüfziffern ans Ende verschieben:{' '}
            <code>DE89370400440532013000</code> → <code>370400440532013000DE89</code>
          </li>
          <li>
            Buchstaben durch Zahlen ersetzen: D=13, E=14 →{' '}
            <code>370400440532013000131489</code>
          </li>
          <li>
            Ergebnis mod 97 berechnen: Wenn das Ergebnis <code>1</code> ist, ist die IBAN valid.
          </li>
        </ol>

        <h3>Code-Beispiel der IBAN-Validierung</h3>
        <pre className="whitespace-pre-wrap rounded-md bg-slate-900/70 p-4 text-xs text-slate-200">
{`function validateIban(iban: string): boolean {
  // Leerzeichen entfernen und in Großbuchstaben
  const cleaned = iban.replace(/\\s/g, '').toUpperCase();
  
  // Länge prüfen (DE = 22)
  if (cleaned.length < 15 || cleaned.length > 34) return false;
  
  // Erste 4 Zeichen ans Ende
  const rearranged = cleaned.slice(4) + cleaned.slice(0, 4);
  
  // Buchstaben durch Zahlen ersetzen
  const numeric = rearranged.split('').map(char => {
    const code = char.charCodeAt(0);
    return code >= 65 ? (code - 55).toString() : char;
  }).join('');
  
  // Mod-97 mit BigInt (Zahl zu groß für Number)
  return BigInt(numeric) % 97n === 1n;
}`}
        </pre>

        <h3>Häufige Fehler bei der IBAN-Eingabe</h3>
        <ul>
          <li>
            <strong>Leerzeichen mitkopiert:</strong> Wenn du die IBAN aus einem PDF kopierst,
            werden oft die Leerzeichen in der Gruppierung mitübernommen. Immer bereinigen!
          </li>
          <li>
            <strong>Ziffern vertauscht:</strong> Bei der manuellen Eingabe einer 22-stelligen
            Zahl passiert schnell ein Zahlendreher. Immer prüfen!
          </li>
          <li>
            <strong>Falsches Länderkürzel:</strong> Österreichische IBAN beginnen mit AT,
            nicht DE – ein häufiger Fehler bei internationalen Transaktionen.
          </li>
          <li>
            <strong>Zu kurze Kontonummer:</strong> Alte 6- oder 8-stellige Kontonummern müssen
            auf 10 Stellen mit führenden Nullen aufgefüllt werden.
          </li>
        </ul>
      </section>

      {/* ─── SECTION 6: IBAN Formate ─── */}
      <section aria-labelledby="formate" className="mt-8">
        <h2 id="formate">IBAN-Formate verschiedener Länder</h2>
        <div className="not-prose my-4 overflow-x-auto rounded-lg border border-slate-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-800 text-slate-300">
                <th className="px-4 py-3 text-left font-medium">Land</th>
                <th className="px-4 py-3 text-left font-medium">Länge</th>
                <th className="px-4 py-3 text-left font-medium">Beispiel</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50 text-slate-300">
              <tr>
                <td className="px-4 py-3">Deutschland (DE)</td>
                <td className="px-4 py-3">22</td>
                <td className="px-4 py-3 font-mono text-xs">DE89370400440532013000</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-4 py-3">Österreich (AT)</td>
                <td className="px-4 py-3">20</td>
                <td className="px-4 py-3 font-mono text-xs">AT611904300234573201</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Schweiz (CH)</td>
                <td className="px-4 py-3">21</td>
                <td className="px-4 py-3 font-mono text-xs">CH9300762011623852957</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-4 py-3">Frankreich (FR)</td>
                <td className="px-4 py-3">27</td>
                <td className="px-4 py-3 font-mono text-xs">FR7630006000011234567890189</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Spanien (ES)</td>
                <td className="px-4 py-3">24</td>
                <td className="px-4 py-3 font-mono text-xs">ES9121000418450200051332</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-4 py-3">Italien (IT)</td>
                <td className="px-4 py-3">27</td>
                <td className="px-4 py-3 font-mono text-xs">IT60X0542811101000000123456</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Niederlande (NL)</td>
                <td className="px-4 py-3">18</td>
                <td className="px-4 py-3 font-mono text-xs">NL91ABNA0417164300</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Jedes SEPA-Land hat eine festgelegte IBAN-Länge. Ein GiroCode mit einer zu kurzen
          oder zu langen IBAN für das angegebene Land ist ungültig und wird von Banking-Apps
          abgelehnt.
        </p>
      </section>

      {/* ─── SECTION 7: Sicherheit ─── */}
      <section aria-labelledby="sicherheit" className="mt-8">
        <h2 id="sicherheit">Sicherheit der IBAN</h2>

        <h3>Ist die IBAN sicher zu teilen?</h3>
        <p>
          Ja – in vielen Situationen ist es <strong>völlig normal und sicher</strong>, die eigene
          IBAN weiterzugeben. Banken, Arbeitgeber, Online-Shops und Behörden benötigen deine
          IBAN regelmäßig. Ein GiroCode auf einer Rechnung enthält immer die IBAN des
          Empfängers – und das ist gewollt.
        </p>

        <h3>Was kann jemand mit deiner IBAN machen?</h3>
        <p>
          Mit deiner IBAN kann jemand grundsätzlich:
        </p>
        <ul>
          <li>
            <strong>Dir Geld schicken</strong> – das ist harmlos und gewünscht.
          </li>
          <li>
            <strong>Eine Lastschrift versuchen</strong> – allerdings nur, wenn er auch ein
            gültiges SEPA-Mandat hat. Ohne deine schriftliche Zustimmung ist eine Lastschrift
            nicht erlaubt und kann innerhalb von 8 Wochen (bei unautorisierten Lastschriften:
            13 Monate) zurückgebucht werden.
          </li>
        </ul>

        <h3>IBAN für Lastschrift vs. Überweisung</h3>
        <p>
          Beim GiroCode handelt es sich immer um eine <strong>Überweisung (SEPA Credit
          Transfer)</strong>, nie um eine Lastschrift. Das bedeutet: Der Zahler überweist
          aktiv. Deine IBAN auf einem GiroCode kann nicht für eine unerwünschte Lastschrift
          missbraucht werden.
        </p>

        <h3>Datenschutz beim GiroCode</h3>
        <p>
          Da der GiroCode lokal im Browser generiert wird (bei unserem Generator), werden keine
          persönlichen Daten an Server übertragen. Die IBAN und die anderen Zahlungsdaten
          verlassen deinen Browser nicht. Der QR-Code enthält die Daten im Klartext, daher
          ist bei der Weitergabe die übliche Sorgfalt geboten.
        </p>
      </section>
    </KnowledgeLayout>
  );
}
