import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rechnungen als Freelancer: GiroCode für schnellere Zahlungen',
  description:
    'Wie Freelancer mit GiroCodes auf ihren Rechnungen schneller bezahlt werden. Praxis-Guide mit Tipps zu §14 UStG und kostenlosem PDF-Generator.',
  alternates: {
    canonical:
      'https://www.girocodegenerator.com/blog/freelancer-rechnungen-qr-code',
  },
};

export default function FreelancerRechnungenPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-300">Start</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-300">Blog</Link>
          <span>/</span>
          <span className="text-slate-400">GiroCode für Freelancer</span>
        </nav>

        <header className="mb-10 space-y-4">
          <time dateTime="2026-03-01" className="text-xs text-slate-500">1. März 2026</time>
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl lg:text-4xl">
            Rechnungen als Freelancer: GiroCode für schnellere Zahlungen
          </h1>
          <p className="text-base leading-relaxed text-slate-400 md:text-lg">
            Zu lange Zahlungsziele, vergessene Überweisungen, falsch eingetippte IBANs – Freelancer
            kennen das Problem. Der GiroCode auf der Rechnung kann das ändern.
          </p>
        </header>

        <article className="prose-custom space-y-10 text-sm leading-relaxed text-slate-300 md:text-base">

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Warum Freelancer zu lange auf Zahlungen warten
            </h2>
            <p>
              Laut einer Studie des Deutschen Instituts für Wirtschaftsforschung warten Selbstständige
              in Deutschland durchschnittlich 32 Tage auf die Begleichung einer Rechnung – bei einem
              gesetzlichen Zahlungsziel von in der Regel 30 Tagen. Das ist kein Zufall: Viele Kunden
              öffnen die Rechnung, tippen die IBAN falsch ab oder schieben die Überweisung auf, weil
              das Banking-App-Wechseln zu umständlich erscheint.
            </p>
            <p className="mt-3">
              Das Ergebnis: Freelancer müssen mahnen, nachhaken und verlieren wertvolle Zeit – Zeit, die
              eigentlich in Projekte fließen sollte. Ein simpler QR-Code auf der Rechnung kann diesen
              Prozess erheblich beschleunigen.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Was ist ein GiroCode und wie hilft er Freelancern?
            </h2>
            <p>
              Der GiroCode – offiziell ein EPC-QR-Code nach dem Standard des European Payments
              Council – ist ein QR-Code, der alle relevanten Überweisungsdaten enthält: Empfängername,
              IBAN, BIC (optional), Betrag und Verwendungszweck. Der Zahler muss lediglich den Code
              mit seiner Banking-App scannen und die Überweisung mit einem Klick bestätigen. Keine
              Tipparbeit, keine Fehler.
            </p>
            <p className="mt-3">
              Für Freelancer bedeutet das konkret: Der Kunde öffnet die Rechnung per E-Mail oder
              Ausdruck, scannt den QR-Code und überweist sofort. Die Hemmschwelle sinkt drastisch, weil
              der Aufwand auf wenige Sekunden reduziert wird.
            </p>
            <p className="mt-3">
              Banking-Apps aller großen deutschen Banken – Sparkasse, Volksbank, ING, DKB, Deutsche
              Bank, Commerzbank, N26 und viele weitere – unterstützen den GiroCode. Damit erreichst du
              als Freelancer praktisch jeden Privat- und Geschäftskunden in Deutschland.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              GiroCode auf der Rechnung einbinden – Schritt für Schritt
            </h2>
            <ol className="space-y-4 pl-5">
              <li className="list-decimal">
                <strong className="text-slate-100">GiroCode Generator öffnen:</strong>{' '}
                Besuche{' '}
                <Link href="/" className="text-emerald-400 underline hover:text-emerald-300">
                  girocodegenerator.com
                </Link>{' '}
                – kostenlos, ohne Anmeldung.
              </li>
              <li className="list-decimal">
                <strong className="text-slate-100">Daten eintragen:</strong>{' '}
                Gib deinen Namen oder den Namen deines Unternehmens, deine IBAN, den Rechnungsbetrag
                und den Verwendungszweck (z.B. „Rechnung 2026-042") ein. BIC ist optional.
              </li>
              <li className="list-decimal">
                <strong className="text-slate-100">QR-Code generieren:</strong>{' '}
                Mit einem Klick auf „GiroCode erstellen" wird der QR-Code sofort im Browser
                erzeugt – lokal, ohne Server-Übertragung.
              </li>
              <li className="list-decimal">
                <strong className="text-slate-100">Rechnungs-PDF erstellen:</strong>{' '}
                Nutze die integrierte Rechnungsfunktion, um direkt eine DIN-konforme PDF-Rechnung
                mit eingebettetem GiroCode zu erzeugen und herunterzuladen.
              </li>
              <li className="list-decimal">
                <strong className="text-slate-100">Rechnung versenden:</strong>{' '}
                Schicke die PDF per E-Mail an deinen Kunden oder drucke sie aus. Fertig.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Pflichtangaben auf Freelancer-Rechnungen (§14 UStG)
            </h2>
            <p>
              Damit eine Rechnung umsatzsteuerlich korrekt ist und der Kunde die Vorsteuer abziehen
              kann, muss sie gemäß §14 UStG bestimmte Pflichtangaben enthalten:
            </p>
            <ul className="mt-3 space-y-2 pl-5">
              {[
                'Vollständiger Name und Anschrift des leistenden Unternehmers',
                'Vollständiger Name und Anschrift des Leistungsempfängers',
                'Steuernummer oder Umsatzsteuer-Identifikationsnummer (USt-IdNr.)',
                'Ausstellungsdatum der Rechnung',
                'Fortlaufende Rechnungsnummer',
                'Menge und handelsübliche Bezeichnung der gelieferten Gegenstände oder Art und Umfang der sonstigen Leistung',
                'Zeitpunkt der Lieferung oder sonstigen Leistung',
                'Das nach Steuersätzen und -befreiungen aufgeschlüsselte Entgelt (Nettobetrag)',
                'Anzuwendender Umsatzsteuersatz sowie der auf das Entgelt entfallende Steuerbetrag',
                'Im Fall der Steuerbefreiung: Hinweis auf die Steuerbefreiung',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 list-none">
                  <span className="mt-1 text-emerald-400 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Der GiroCode ist kein gesetzliches Pflichtfeld auf Rechnungen, aber er ist ein
              professionelles Merkmal, das Zahlungsverzögerungen reduziert und das Image als
              moderner Dienstleister stärkt.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Kleinunternehmer: Was bei der Rechnung beachten?
            </h2>
            <p>
              Als Kleinunternehmer nach §19 UStG bist du von der Umsatzsteuer befreit – das
              vereinfacht die Rechnungsstellung, bringt aber auch eigene Regeln mit sich:
            </p>
            <ul className="mt-3 space-y-2 pl-5">
              <li className="flex items-start gap-2 list-none">
                <span className="mt-1 text-sky-400 flex-shrink-0">→</span>
                <span>
                  <strong className="text-slate-100">Kein USt-Ausweis:</strong> Du darfst keine
                  Umsatzsteuer auf der Rechnung ausweisen. Tust du es dennoch, bist du zur Abführung
                  verpflichtet.
                </span>
              </li>
              <li className="flex items-start gap-2 list-none">
                <span className="mt-1 text-sky-400 flex-shrink-0">→</span>
                <span>
                  <strong className="text-slate-100">Pflichthinweis:</strong> Du musst auf die
                  Anwendung der Kleinunternehmerregelung hinweisen, z.B.: „Gemäß §19 UStG wird keine
                  Umsatzsteuer berechnet."
                </span>
              </li>
              <li className="flex items-start gap-2 list-none">
                <span className="mt-1 text-sky-400 flex-shrink-0">→</span>
                <span>
                  <strong className="text-slate-100">GiroCode trotzdem sinnvoll:</strong> Auch als
                  Kleinunternehmer profitierst du vom GiroCode – der Betrag wird ohne Steuerbetrag
                  eingetragen, das Ergebnis ist dasselbe.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Praxis-Tipps: So bekommst du schneller dein Geld
            </h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                <h3 className="font-semibold text-slate-100">1. Rechnung sofort nach Leistungserbringung stellen</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Jeder Tag, den du mit dem Stellen der Rechnung wartest, verlängert den
                  Zahlungseingang. Idealerweise stellst du die Rechnung noch am selben Tag oder
                  innerhalb von 24 Stunden.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                <h3 className="font-semibold text-slate-100">2. Kurze Zahlungsziele setzen</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Statt „zahlbar innerhalb von 30 Tagen" kannst du 7 oder 14 Tage als Zahlungsziel
                  angeben. Mit einem GiroCode ist das für den Kunden kein Problem.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                <h3 className="font-semibold text-slate-100">3. Verwendungszweck immer angeben</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Im GiroCode ist der Verwendungszweck bereits vorausgefüllt – z.B. „Rechnung
                  2026-042". Das erleichtert die Zuordnung auf deiner Seite und vermeidet
                  Rückfragen.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                <h3 className="font-semibold text-slate-100">4. Freundliche Zahlungserinnerung nach 7 Tagen</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Ist das Zahlungsziel abgelaufen, sende eine freundliche Erinnerung mit der
                  Rechnung im Anhang – inklusive GiroCode. Oft liegt es schlicht an Vergessen.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                <h3 className="font-semibold text-slate-100">5. Skonto anbieten bei frühzeitiger Zahlung</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Ein kleiner Skonto (z.B. 2 % bei Zahlung innerhalb von 7 Tagen) kann Kunden
                  motivieren, schneller zu zahlen. Der GiroCode macht die Überweisung so einfach,
                  dass die meisten Kunden den Skonto mitnehmen werden.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Fazit
            </h2>
            <p>
              Der GiroCode ist eines der einfachsten und wirkungsvollsten Hilfsmittel, das ein
              Freelancer auf seinen Rechnungen einsetzen kann. Er reduziert die Hemmschwelle zur
              Zahlung drastisch, vermeidet Tippfehler bei der IBAN und beschleunigt den
              Zahlungseingang – ohne zusätzliche Kosten oder technischen Aufwand.
            </p>
            <p className="mt-3">
              Mit dem kostenlosen GiroCode Generator auf girocodegenerator.com erstellst du deinen
              ersten Code in weniger als einer Minute – inklusive DIN-konformer Rechnungs-PDF, die du
              direkt per E-Mail verschicken kannst.
            </p>
            <div className="mt-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
              >
                Jetzt GiroCode kostenlos erstellen →
              </Link>
            </div>
          </section>
        </article>

        {/* Back to Blog */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <Link href="/blog" className="text-sm text-slate-400 hover:text-slate-200">
            ← Zurück zum Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
