import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IBAN-Sicherheit: Worauf man bei Überweisungen achten muss',
  description:
    'Ist es sicher, die IBAN weiterzugeben? Was kann jemand mit deiner IBAN machen? Alles über IBAN-Sicherheit, GiroCode-Datenschutz und sichere Überweisungen.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/blog/iban-sicherheit',
  },
};

export default function IbanSicherheitPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-300">Start</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-300">Blog</Link>
          <span>/</span>
          <span className="text-slate-400">IBAN-Sicherheit</span>
        </nav>

        <header className="mb-10 space-y-4">
          <time dateTime="2026-04-01" className="text-xs text-slate-500">1. April 2026</time>
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl lg:text-4xl">
            IBAN-Sicherheit: Worauf man bei Überweisungen achten muss
          </h1>
          <p className="text-base leading-relaxed text-slate-400 md:text-lg">
            Viele Menschen sind unsicher, ob sie ihre IBAN an andere weitergeben sollten. Was ist
            tatsächlich möglich, wenn jemand deine IBAN kennt – und was nicht?
          </p>
        </header>

        <article className="space-y-10 text-sm leading-relaxed text-slate-300 md:text-base">

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Was kann jemand mit meiner IBAN machen?
            </h2>
            <p>
              Die kurze Antwort lautet: nicht sehr viel, was dir schaden könnte – zumindest nicht
              ohne dein Wissen. Die IBAN (International Bank Account Number) identifiziert dein
              Bankkonto eindeutig, ähnlich wie eine Postadresse dein Zuhause identifiziert. Und
              genau wie bei einer Adresse: Jeder, der dir Geld schicken möchte, braucht sie.
            </p>
            <p className="mt-3">
              Was jemand mit deiner IBAN tun kann:
            </p>
            <ul className="mt-3 space-y-2">
              {[
                { label: 'Geld überweisen', safe: true, text: 'Jeder kann dir Geld auf dein Konto überweisen – das ist der Zweck einer IBAN und kein Sicherheitsproblem.' },
                { label: 'SEPA-Lastschrift einziehen (mit Einschränkungen)', safe: false, text: 'Für eine SEPA-Lastschrift wird zusätzlich ein schriftliches Lastschriftmandat benötigt. Ohne dieses Mandat ist eine Abbuchung nicht möglich – und wenn doch, muss die Bank sie rückbuchen.' },
                { label: 'GiroCode erstellen', safe: true, text: 'Mit deiner IBAN kann jemand einen GiroCode erstellen – das bedeutet aber nur, dass du damit Zahlungen empfangen kannst.' },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3 list-none rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                  <span className={`mt-0.5 flex-shrink-0 font-bold ${item.safe ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {item.safe ? '✓' : '⚠'}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-100">{item.label}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              IBAN für Überweisung vs. Lastschrift – der Unterschied
            </h2>
            <p>
              Dieser Unterschied ist entscheidend und wird oft missverstanden:
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-800/50 bg-emerald-900/10 p-5">
                <h3 className="font-semibold text-emerald-300">SEPA-Überweisung</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">→</span>
                    Wird vom Zahler aktiv ausgelöst
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">→</span>
                    Empfänger hat keine Kontrolle
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">→</span>
                    Nur IBAN des Empfängers nötig
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">→</span>
                    Sicher und standardisiert
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-amber-800/50 bg-amber-900/10 p-5">
                <h3 className="font-semibold text-amber-300">SEPA-Lastschrift</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">→</span>
                    Wird vom Gläubiger eingezogen
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">→</span>
                    Braucht schriftliches Mandat
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">→</span>
                    IBAN + Mandat + Gläubiger-ID nötig
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">→</span>
                    Innerhalb von 8 Wochen erstattbar
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-4">
              Eine SEPA-Lastschrift ohne gültiges Mandat ist ein Rückbuchungsfall und strafbewehrt.
              Die Bank muss eine unberechtigte Lastschrift innerhalb von 8 Wochen (13 Monate bei
              fehlendem Mandat) zurückbuchen. Praktisch ist also das Risiko einer unberechtigten
              Abbuchung sehr gering.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Ist ein GiroCode sicher?
            </h2>
            <p>
              Ja – ein GiroCode ist aus mehreren Gründen sicher:
            </p>
            <div className="mt-4 space-y-3">
              {[
                {
                  title: 'Keine Abbuchung möglich',
                  text: 'Ein GiroCode ist eine Zahlungsaufforderung, kein Lastschriftmandat. Er enthält keine Informationen, die eine Abbuchung ermöglichen würden.',
                },
                {
                  title: 'Bestätigung durch den Zahler erforderlich',
                  text: 'Selbst wenn jemand einen GiroCode scannt, muss er die Überweisung aktiv mit TAN, Face ID oder Fingerabdruck bestätigen. Keine automatische Abbuchung ist möglich.',
                },
                {
                  title: 'Keine geheimen Daten im Code',
                  text: 'Ein GiroCode enthält ausschließlich Daten, die du ohnehin auf einer Rechnung veröffentlichst: Name, IBAN, Betrag, Verwendungszweck. Keine PINs, keine Passwörter.',
                },
                {
                  title: 'EPC-Standard mit Fehlerkorrektur',
                  text: 'Der QR-Code verwendet Fehlerkorrekturlevel M, was bedeutet, dass er auch bei leichten Beschädigungen noch zuverlässig lesbar ist.',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                  <h3 className="font-semibold text-slate-100">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Phishing über QR-Codes (Quishing) – So erkennst du es
            </h2>
            <p>
              Eine echte Bedrohung existiert allerdings: das sogenannte Quishing (QR-Code-Phishing).
              Dabei ersetzen Betrüger legitime QR-Codes durch manipulierte Codes, die zu
              Phishing-Seiten oder auf gefälschte Zahlungsempfänger umleiten.
            </p>
            <p className="mt-3">
              So schützt du dich vor Quishing:
            </p>
            <ul className="mt-3 space-y-3">
              {[
                {
                  icon: '🔍',
                  tip: 'Empfängerdaten prüfen',
                  text: 'Kontrolliere nach dem Scan immer den vorausgefüllten Empfängernamen und die IBAN in deiner Banking-App, bevor du bestätigst.',
                },
                {
                  icon: '📌',
                  tip: 'Physische Aufkleber misstrauen',
                  text: 'QR-Codes, die als Aufkleber über andere Codes geklebt sind, können manipuliert sein. Prüfe, ob der Code direkt aufgedruckt oder nachträglich aufgeklebt wirkt.',
                },
                {
                  icon: '🏦',
                  tip: 'Banking-App direkt öffnen',
                  text: 'Öffne deine Banking-App immer direkt – nie über einen Link in einer E-Mail oder SMS. Scanne den GiroCode nur aus der App heraus.',
                },
                {
                  icon: '📧',
                  tip: 'E-Mail-Rechnungen prüfen',
                  text: 'Bei Rechnungen per E-Mail: Prüfe, ob Absender und Inhalt zur erwarteten Rechnung passen. Im Zweifelsfall beim Absender telefonisch nachfragen.',
                },
              ].map((item) => (
                <li key={item.tip} className="flex items-start gap-3 list-none">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-slate-100">{item.tip}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Datenschutz beim GiroCode Generator
            </h2>
            <p>
              Wer den GiroCode Generator auf girocodegenerator.com nutzt, kann sicher sein: Alle
              eingegebenen Daten – IBAN, Betrag, Name, Verwendungszweck – werden ausschließlich
              lokal im Browser verarbeitet. Es findet keine Übertragung an Server statt, kein
              Logging, keine Datenspeicherung.
            </p>
            <div className="mt-4 rounded-xl border border-emerald-800/50 bg-emerald-900/10 p-5">
              <h3 className="font-semibold text-emerald-300">Wie die lokale Verarbeitung funktioniert</h3>
              <p className="mt-2 text-sm text-slate-300">
                Der QR-Code wird vollständig im Browser mithilfe der JavaScript-Bibliothek
                erzeugt. Das bedeutet: Selbst wenn du kein Netzwerk hast (Offline-Modus),
                funktioniert der Generator weiterhin. Deine Bankdaten verlassen zu keinem Zeitpunkt
                deinen Computer oder dein Gerät.
              </p>
            </div>
            <p className="mt-4">
              Diese Architektur ist nicht nur datenschutzfreundlich, sondern auch DSGVO-konform: Da
              keine personenbezogenen Daten verarbeitet oder gespeichert werden, greifen die
              strengsten DSGVO-Anforderungen gar nicht erst.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Tipps für sichere SEPA-Überweisungen
            </h2>
            <div className="space-y-3">
              {[
                {
                  nr: '1',
                  title: 'IBAN vor der Überweisung prüfen',
                  text: 'Vergleiche die ersten und letzten vier Ziffern der IBAN mit dem Original-Dokument. Betrüger ändern oft nur wenige Ziffern.',
                },
                {
                  nr: '2',
                  title: 'Betragsänderungen beachten',
                  text: 'Banking-Apps zeigen den vorausgefüllten Betrag an. Ändere ihn nur bewusst – und prüfe, ob er mit dem Rechnungsbetrag übereinstimmt.',
                },
                {
                  nr: '3',
                  title: 'Verdächtige Zahlungsaufforderungen melden',
                  text: 'Wenn du einen QR-Code erhältst, der dich zu einer unerwarteten Zahlung auffordert, melde dies deiner Bank und erstatte Anzeige.',
                },
                {
                  nr: '4',
                  title: 'Zwei-Faktor-Authentifizierung aktivieren',
                  text: 'Stelle sicher, dass dein Online-Banking mit TAN-App oder biometrischer Bestätigung gesichert ist. So kann niemand ohne dein Zutun überweisen.',
                },
                {
                  nr: '5',
                  title: 'Transaktionsbenachrichtigungen einschalten',
                  text: 'Aktiviere Push-Benachrichtigungen für jede Kontobewegung. So erkennst du unautorisierte Abbuchungen sofort.',
                },
              ].map((item) => (
                <div key={item.nr} className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-bold text-emerald-300">
                    {item.nr}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-100">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Fazit
            </h2>
            <p>
              Die IBAN weiterzugeben ist deutlich sicherer als viele denken. Für eine reguläre
              Überweisung an dich ist sie notwendig – und sie ermöglicht keine Abbuchung ohne
              dein Mandat. Ein GiroCode mit deiner IBAN ist ein praktisches, sicheres Werkzeug
              für die moderne Rechnungsstellung.
            </p>
            <p className="mt-3">
              Die einzige echte Gefahr geht von manipulierten QR-Codes (Quishing) aus – und die
              lässt sich durch einfache Vorsichtsmaßnahmen minimieren: Empfängerdaten prüfen,
              Banking-App direkt öffnen, und bei unerwarteten Zahlungsaufforderungen skeptisch
              bleiben.
            </p>
            <div className="mt-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
              >
                Jetzt sicheren GiroCode erstellen →
              </Link>
            </div>
          </section>
        </article>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <Link href="/blog" className="text-sm text-slate-400 hover:text-slate-200">
            ← Zurück zum Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
