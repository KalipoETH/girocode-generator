import type { Metadata } from 'next';
import Link from 'next/link';
import { KnowledgeLayout } from '@/components/KnowledgeLayout';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GoBD einfach erklärt – Pflichten für Kleinunternehmer & Selbstständige',
  description:
    'GoBD verständlich erklärt: die 6 Grundsätze, Aufbewahrungsfristen (8/10/6 Jahre), Verfahrensdokumentation und was für Kleinunternehmer wirklich gilt. ✅ Mit Beispielrechnung.',
  keywords:
    'GoBD, GoBD konform, GoBD Kleinunternehmer, GoBD einfach erklärt, Aufbewahrungsfristen, Verfahrensdokumentation, Revisionssicherheit, Rechnungen aufbewahren, GoBD Selbstständige',
  alternates: {
    canonical: `${SITE_URL}/wissen/gobd`,
    languages: {
      'x-default': `${SITE_URL}/wissen/gobd`,
      de: `${SITE_URL}/wissen/gobd`,
    },
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'GoBD einfach erklärt – Aufbewahrung & Konformität für Kleinunternehmer',
  description:
    'GoBD verständlich erklärt: die sechs Grundsätze, Aufbewahrungsfristen, Verfahrensdokumentation und was für Kleinunternehmer und Selbstständige wirklich gilt.',
  datePublished: '2026-07-11',
  dateModified: '2026-07-11',
  author: { '@type': 'Person', name: 'Kaleb Jahnke' },
  publisher: { '@type': 'Organization', name: 'GiroCode Generator', url: SITE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/wissen/gobd` },
};

export default function WissenGobdPage() {
  return (
    <KnowledgeLayout
      breadcrumbCurrent="GoBD"
      badge="Recht · GoBD & Aufbewahrung"
      title="GoBD einfach erklärt – Aufbewahrung, Konformität & was für Kleinunternehmer wirklich gilt"
      lead="Die GoBD regeln, wie du steuerrelevante Unterlagen elektronisch erfassen, verarbeiten und aufbewahren musst – und sie gelten ausdrücklich auch für Freiberufler und Kleinunternehmer ohne Buchführungspflicht. Dieser Leitfaden erklärt die sechs Grundsätze, die Aufbewahrungsfristen, die Verfahrensdokumentation und was davon für kleine Betriebe wirklich zählt."
      relatedArticles={[
        { href: '/wissen/rechnung', label: 'GiroCode auf Rechnungen' },
        { href: '/kleinunternehmen', label: 'GiroCode für Kleinunternehmen' },
        { href: '/kleinunternehmer-rechnung', label: 'Kleinunternehmer-Rechnung erstellen' },
        { href: '/wissen/girocode', label: 'Was ist ein GiroCode?' },
        { href: '/rechnungs-editor', label: 'Rechnung mit GiroCode erstellen' },
        { href: '/blog/freelancer-rechnungen-qr-code', label: 'Freelancer-Rechnungen mit QR-Code' },
      ]}
      locale="de"
      lastUpdated="2026-07-11"
      shortAnswer="Ja – auch als Kleinunternehmer oder Freiberufler musst du die GoBD beachten, sobald du steuerrelevante Unterlagen elektronisch erfasst, verarbeitest oder aufbewahrst (z. B. Rechnungen als PDF). Ob du buchführungspflichtig bist, spielt dabei keine Rolle. In der Praxis genügt für einfache Fälle aber die Grundstruktur: Belege vollständig, geordnet, unveränderbar und über die Aufbewahrungsfrist (in der Regel 8 Jahre) hinweg wiederauffindbar archivieren."
      statsData={[
        { value: '2020', label: 'GoBD-Fassung verbindlich seit 1.1.' },
        { value: '6', label: 'Grundsätze der GoBD' },
        { value: '8 Jahre', label: 'Aufbewahrung von Buchungsbelegen' },
        { value: '10 Jahre', label: 'Aufbewahrung von Jahresabschlüssen' },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Disclaimer: keine Steuerberatung */}
      <div
        className="not-prose mb-8 rounded-lg border-l-4 border-amber-500 bg-amber-950/20 px-4 py-3"
        role="note"
        aria-label="Hinweis: Keine Steuerberatung"
      >
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-amber-400">
          ⚠️ Kein Ersatz für Steuerberatung
        </p>
        <p className="text-sm leading-relaxed text-slate-300">
          Dieser Artikel fasst die GoBD allgemeinverständlich zusammen und ersetzt keine
          individuelle Steuer- oder Rechtsberatung. Ob und wie die einzelnen Anforderungen
          auf deinen Betrieb zutreffen, klärst du im Zweifel mit deinem Steuerberater oder
          deinem Finanzamt.
        </p>
      </div>

      {/* ─── SECTION 1: Was ist die GoBD ─── */}
      <section aria-labelledby="was-ist-gobd">
        <h2 id="was-ist-gobd">Was ist die GoBD?</h2>
        <p>
          GoBD steht für die <strong>„Grundsätze zur ordnungsmäßigen Führung und Aufbewahrung
          von Büchern, Aufzeichnungen und Unterlagen in elektronischer Form sowie zum
          Datenzugriff"</strong>. Es handelt sich nicht um ein eigenes Gesetz, sondern um eine
          Verwaltungsanweisung des Bundesfinanzministeriums, die festlegt, wie die Finanzämter
          die bestehenden Aufzeichnungs- und Aufbewahrungspflichten auslegen.
        </p>
        <p>
          Die aktuell gültige Fassung geht auf das <strong>BMF-Schreiben vom 28. November 2019</strong>{' '}
          zurück und ist <strong>seit dem 1. Januar 2020 verbindlich</strong>. Sie löste die
          vorherige Version aus dem Jahr 2014 ab.
        </p>

        <h3>Wer ist von der GoBD betroffen?</h3>
        <p>
          Die GoBD gelten für <strong>alle Buchführungspflichtigen</strong> – und ausdrücklich
          auch für <strong>Freiberufler und Kleinunternehmer</strong>, die steuerrelevante
          Unterlagen elektronisch erfassen, verarbeiten oder aufbewahren. Entscheidend ist
          nicht, ob du zur doppelten Buchführung verpflichtet bist: Auch wer nur eine einfache
          Einnahmen-Überschuss-Rechnung (EÜR) macht und seine Rechnungen als PDF speichert,
          fällt unter die GoBD.
        </p>
        <p>
          Kurz: Sobald ein steuerrelevanter Beleg irgendwann durch ein IT-System läuft – vom
          per E-Mail empfangenen PDF bis zur selbst erstellten Rechnung – greifen die GoBD.
        </p>

        <h3>Was passiert bei Verstößen?</h3>
        <p>
          Sind die Aufzeichnungen formell oder sachlich mangelhaft, kann das Finanzamt die
          Buchführung <strong>verwerfen</strong> und den Gewinn <strong>schätzen</strong>{' '}
          (§ 158 AO) – in der Regel zum Nachteil des Steuerpflichtigen. In der Praxis gilt
          aber Entwarnung für kleine Betriebe: Bei überschaubarem Umsatz und einer
          nachvollziehbaren EÜR sind Vollschätzungen selten. Wichtig ist vor allem, dass die{' '}
          <strong>Grundstruktur</strong> stimmt – also dass Belege vollständig, geordnet und
          unveränderbar vorliegen.
        </p>
        <p className="text-sm text-slate-400">
          Rechtsgrundlage &amp; Quelle: BMF-Schreiben vom 28.11.2019 zur GoBD, veröffentlicht
          auf{' '}
          <a
            href="https://www.bundesfinanzministerium.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 underline hover:text-sky-300"
          >
            bundesfinanzministerium.de
          </a>{' '}
          (in Verbindung mit §§ 145–147 AO).
        </p>
      </section>

      {/* ─── SECTION 2: Die 6 Grundsätze ─── */}
      <section aria-labelledby="grundsaetze" className="mt-8">
        <h2 id="grundsaetze">Die sechs Grundsätze der GoBD</h2>
        <p>
          Der Kern der GoBD lässt sich auf sechs Grundsätze herunterbrechen. Wer diese
          einhält, ist auf der sicheren Seite:
        </p>
        <ol>
          <li>
            <strong>Nachvollziehbarkeit &amp; Nachprüfbarkeit</strong> – Ein sachverständiger
            Dritter (z. B. ein Betriebsprüfer) muss sich in angemessener Zeit einen Überblick
            verschaffen und einzelne Geschäftsvorfälle lückenlos vom Beleg bis zur Buchung und
            zurück verfolgen können.
          </li>
          <li>
            <strong>Vollständigkeit</strong> – Alle Geschäftsvorfälle werden erfasst, kein
            Beleg fehlt. Einnahmen dürfen nicht „vergessen" werden.
          </li>
          <li>
            <strong>Richtigkeit</strong> – Die aufgezeichneten Inhalte stimmen mit den
            tatsächlichen Vorgängen überein (richtige Beträge, Daten, Konten).
          </li>
          <li>
            <strong>Zeitgerechtigkeit</strong> – Geschäftsvorfälle werden zeitnah erfasst.
            Bare Einnahmen sind besonders zügig festzuhalten; unbare Vorgänge dulden etwas
            mehr Zeit, sollten aber nicht über Monate liegen bleiben.
          </li>
          <li>
            <strong>Ordnung</strong> – Die Aufzeichnungen sind systematisch und
            nachvollziehbar strukturiert, sodass jeder Beleg wieder auffindbar ist.
          </li>
          <li>
            <strong>Unveränderbarkeit</strong> – Einmal erfasste Daten dürfen nicht spurlos
            geändert werden. Korrekturen erfolgen per <strong>Stornobuchung</strong> bzw.
            nachvollziehbarer Änderung – niemals durch stilles Löschen oder Überschreiben.
          </li>
        </ol>
      </section>

      {/* ─── SECTION 3: Aufbewahrungsfristen ─── */}
      <section aria-labelledby="fristen" className="mt-8">
        <h2 id="fristen">Aufbewahrungsfristen im Überblick</h2>
        <p>
          Wie lange du eine Unterlage aufbewahren musst, hängt von ihrer Art ab. Diese drei
          Fristen decken die meisten Fälle ab:
        </p>

        <div className="not-prose overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#1f2431] text-left text-slate-300">
                <th className="py-3 pr-4 font-semibold">Unterlage</th>
                <th className="py-3 font-semibold">Aufbewahrungsfrist</th>
              </tr>
            </thead>
            <tbody className="text-slate-400">
              <tr className="border-b border-[#1f2431]">
                <td className="py-3 pr-4 font-medium text-slate-300">
                  Buchungsbelege (Rechnungen, Kontoauszüge, Quittungen)
                </td>
                <td className="py-3"><strong>8 Jahre</strong></td>
              </tr>
              <tr className="border-b border-[#1f2431]">
                <td className="py-3 pr-4 font-medium text-slate-300">
                  Jahresabschlüsse, Bilanzen, Inventare, Buchungsjournale
                </td>
                <td className="py-3"><strong>10 Jahre</strong></td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-300">
                  Geschäftskorrespondenz, Angebote, Handelsbriefe
                </td>
                <td className="py-3"><strong>6 Jahre</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4">
          Die Frist beginnt immer mit dem <strong>Ende des Kalenderjahres</strong>, in dem der
          Beleg erstellt bzw. die Rechnung ausgestellt wurde – nicht mit dem Belegdatum selbst.
        </p>

        <h3>Verkürzung von 10 auf 8 Jahre bei Buchungsbelegen</h3>
        <p>
          Für Buchungsbelege galt früher eine zehnjährige Frist. Das{' '}
          <strong>Vierte Bürokratieentlastungsgesetz (BEG IV)</strong> hat sie auf{' '}
          <strong>8 Jahre</strong> verkürzt. Die kürzere Frist gilt für alle Buchungsbelege,
          deren Aufbewahrungsfrist <strong>nach dem 31. Dezember 2024</strong> noch nicht
          abgelaufen war.
        </p>

        <div
          className="not-prose my-6 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3"
          role="note"
          aria-label="Beispielrechnung"
        >
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">
            🧮 Beispielrechnung
          </p>
          <p className="text-sm leading-relaxed text-slate-300">
            Eine Rechnung aus dem Jahr <strong>2017</strong>: Die Frist beginnt am{' '}
            <strong>31.12.2017</strong>, läuft 8 Jahre und endet damit am{' '}
            <strong>31.12.2025</strong>. Ab dem <strong>1. Januar 2026</strong> darf dieser
            Beleg vernichtet werden – vorausgesetzt, er wird nicht noch für ein laufendes
            Verfahren benötigt.
          </p>
        </div>
      </section>

      {/* ─── SECTION 4: Verfahrensdokumentation ─── */}
      <section aria-labelledby="verfahrensdoku" className="mt-8">
        <h2 id="verfahrensdoku">Verfahrensdokumentation</h2>
        <p>
          Für jedes IT-System, das du zur Buchführung nutzt, verlangen die GoBD eine{' '}
          <strong>Verfahrensdokumentation</strong>. Sie beschreibt, <em>wie</em> Daten in
          deinem Betrieb <strong>erfasst, verarbeitet, gespeichert und aufbewahrt</strong>{' '}
          werden – also den kompletten Weg eines Belegs vom Eingang bis zur revisionssicheren
          Archivierung. Die Verfahrensdokumentation muss <strong>so lange aufbewahrt werden
          wie die zugehörigen Unterlagen selbst</strong>.
        </p>

        <div
          className="not-prose my-6 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3"
          role="note"
          aria-label="Entwarnung für einfache Fälle"
        >
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">
            💡 Entwarnung für einfache Fälle
          </p>
          <p className="text-sm leading-relaxed text-slate-300">
            Fehlt die Verfahrensdokumentation oder ist sie lückenhaft, ist das{' '}
            <strong>nicht automatisch ein schwerer Mangel</strong> – solange die Buchführung
            trotzdem nachvollziehbar und prüfbar bleibt. Für sehr einfache Geschäfte, deren
            Abläufe sich in wenigen Sätzen erklären lassen, kann eine formelle
            Verfahrensdokumentation sogar entbehrlich sein.
          </p>
        </div>

        <h3>Maschinelle Auswertbarkeit &amp; Cloud-Speicherung</h3>
        <p>
          Elektronische Daten müssen <strong>maschinell auswertbar</strong> bleiben. Ein
          Rechnungs-PDF sollte also <strong>durchsuchbaren Text</strong> enthalten (oder als
          CSV/strukturierte Datei vorliegen) – ein reiner Bildscan ohne Texterkennung erfüllt
          die Anforderung nicht.
        </p>
        <p>
          Eine <strong>Cloud-Speicherung ist zulässig</strong>, sofern der Server in{' '}
          <strong>Deutschland oder der EU</strong> steht und die Belege dort revisionssicher,
          also unveränderbar, abgelegt werden.
        </p>
      </section>

      {/* ─── SECTION 5: GoBD und E-Rechnung ─── */}
      <section aria-labelledby="e-rechnung" className="mt-8">
        <h2 id="e-rechnung">GoBD und die E-Rechnungspflicht – klare Abgrenzung</h2>
        <p>
          GoBD und E-Rechnungspflicht werden oft in einen Topf geworfen, regeln aber
          verschiedene Dinge:
        </p>
        <ul>
          <li>
            Die <strong>E-Rechnungspflicht</strong> bestimmt, in welchem{' '}
            <strong>Format</strong> du im B2B-Bereich Rechnungen <strong>ausstellen</strong>{' '}
            musst (strukturiertes XML wie XRechnung oder ZUGFeRD).
          </li>
          <li>
            Die <strong>GoBD</strong> bestimmen, wie du Belege{' '}
            <strong>aufbewahren und archivieren</strong> musst – unabhängig davon, ob es eine
            Papier-, PDF- oder E-Rechnung ist.
          </li>
        </ul>
        <p>
          Beim Zusammenspiel ist ein Punkt entscheidend: Eine{' '}
          <strong>E-Rechnung muss im strukturierten Originalformat archiviert</strong> werden.
          Sie auszudrucken und abzuheften genügt <strong>nicht mehr</strong> – der
          maschinenlesbare XML-Datensatz ist das rechtlich maßgebende Original und muss
          erhalten bleiben.
        </p>
        <p>
          Wer sich für die Details zu XRechnung, ZUGFeRD, Fristen und der Ausnahme für
          Kleinunternehmer interessiert, findet die vollständige Übersicht in unserem
          Leitfaden{' '}
          <Link
            href="/wissen/rechnung#e-rechnungspflicht"
            className="text-sky-400 underline hover:text-sky-300"
          >
            zur E-Rechnungspflicht 2025–2028
          </Link>.
        </p>
      </section>

      {/* ─── SECTION 6: GiroCode-Winkel ─── */}
      <section aria-labelledby="girocode-winkel" className="mt-8">
        <h2 id="girocode-winkel">Der GiroCode-Winkel: Was heißt das für Rechnungen mit QR-Code?</h2>
        <p>
          Ein <strong>GiroCode</strong> ist lediglich ein QR-Code, der Zahlungsdaten (IBAN,
          Betrag, Verwendungszweck) für die Banking-App codiert. Er hat{' '}
          <strong>keine eigene Aufbewahrungspflicht</strong> und ist kein eigenständiger Beleg.
        </p>
        <p>
          Aufbewahrungspflichtig ist die <strong>Rechnung als Ganzes</strong>, auf der der
          GiroCode abgedruckt ist. Für diese Rechnung gelten die GoBD wie für jede andere
          Ausgangs- oder Eingangsrechnung: Sie muss <strong>vollständig, unveränderbar und
          maschinell auswertbar</strong> über die 8-jährige Frist archiviert werden. Ob ein
          GiroCode darauf steht oder nicht, ändert an der Archivierung nichts.
        </p>
        <div
          className="mb-8 flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between not-prose"
          style={{ background: 'linear-gradient(135deg, #0f1a0f 0%, #121318 100%)', border: '1px solid rgba(34,197,94,0.3)' }}
        >
          <div>
            <p className="font-bold text-slate-50">Rechnung mit GiroCode als PDF erstellen</p>
            <p className="mt-1 text-sm text-slate-400">
              Kostenloser Rechnungs-Editor – §14 UStG-konform, GiroCode eingebettet, PDF sofort
              zum Archivieren.
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
      </section>

      {/* ─── SECTION 7: FAQ ─── */}
      <section aria-labelledby="faq" className="mt-8">
        <h2 id="faq">Häufige Fragen zur GoBD</h2>
        <div className="space-y-5">
          <div>
            <h3 className="text-sm font-semibold text-slate-50">
              Muss ich mich als Kleinunternehmer überhaupt um die GoBD kümmern?
            </h3>
            <p className="text-sm text-slate-300">
              Ja. Die GoBD gelten ausdrücklich auch für Kleinunternehmer und Freiberufler,
              sobald steuerrelevante Unterlagen elektronisch erfasst oder aufbewahrt werden –
              unabhängig von einer Buchführungspflicht. In der Praxis reicht für einfache
              Fälle aber die Grundstruktur: vollständige, geordnete und unveränderbare Belege.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-50">
              Wie lange muss ich meine Rechnungen aufbewahren?
            </h3>
            <p className="text-sm text-slate-300">
              Buchungsbelege wie Rechnungen und Kontoauszüge müssen 8 Jahre aufbewahrt werden.
              Die Frist beginnt mit dem Ende des Kalenderjahres, in dem die Rechnung
              ausgestellt wurde. Eine Rechnung aus 2017 darf damit ab dem 1. Januar 2026
              vernichtet werden.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-50">
              Reicht es, meine Rechnungen einfach als PDF zu speichern?
            </h3>
            <p className="text-sm text-slate-300">
              Ein PDF ist grundsätzlich unveränderbar und damit für die Aufbewahrung geeignet.
              Wichtig ist, dass es maschinell auswertbar bleibt – also durchsuchbaren Text
              enthält und nicht nur ein Bildscan ist. Eine echte E-Rechnung (XRechnung/ZUGFeRD)
              muss zusätzlich im strukturierten Originalformat archiviert werden; ein Ausdruck
              genügt dafür nicht.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-50">
              Brauche ich als Einzelunternehmer zwingend eine Verfahrensdokumentation?
            </h3>
            <p className="text-sm text-slate-300">
              Nicht in jedem Fall. Fehlt sie oder ist sie lückenhaft, ist das kein
              automatischer schwerer Mangel, solange die Buchführung nachvollziehbar und
              prüfbar bleibt. Für sehr einfache Geschäfte kann eine formelle
              Verfahrensdokumentation sogar entbehrlich sein.
            </p>
          </div>
        </div>
      </section>
    </KnowledgeLayout>
  );
}
