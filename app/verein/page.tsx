import type { Metadata } from 'next';
import { UseCaseLanding } from '../../components/UseCaseLanding';

const SLUG = 'verein';

export const metadata: Metadata = {
  title: 'GiroCode für Vereine – Mitgliedsbeiträge einfach einziehen',
  description:
    'Vereine nutzen GiroCodes für Mitgliedsbeiträge, Spenden und Veranstaltungen. Kostenlos, lokal, ohne Registrierung.',
  keywords:
    'girocode verein, mitgliedsbeitrag qr code, vereinsbeitrag sepa qr, spenden verein qr',
  alternates: {
    canonical: `https://www.girocodegenerator.com/${SLUG}`,
    languages: {
      'x-default': `https://www.girocodegenerator.com/${SLUG}`,
      de: `https://www.girocodegenerator.com/${SLUG}`,
      en: `https://www.girocodegenerator.com/en/${SLUG}`,
      fr: `https://www.girocodegenerator.com/fr/${SLUG}`,
      es: `https://www.girocodegenerator.com/es/${SLUG}`,
    },
  },
};

export default function VereinDePage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'de',
        generatorHref: '/',
        homeHref: '/',
        homeLabel: 'Startseite',
        breadcrumbLabel: 'Vereine',
        badge: 'Für Vereine & Organisationen',
        h1: 'Mitgliedsbeiträge & Spenden einfach einziehen',
        subtitle:
          'Mit GiroCodes auf Beitragsrechnungen, Spendenflyern und Veranstaltungs­einladungen zahlen Mitglieder pünktlich – ohne Tippfehler, ohne Aufwand für den Kassenwart.',
        problemHeadline: 'Das Problem: Beitragsverwaltung kostet Zeit',
        problemIntro:
          'Vereinskassenwart sein ist ehrenamtlich – und trotzdem ein Vollzeitjob. Diese drei Aufgaben fressen die meiste Zeit:',
        painPoints: [
          'Mahnungen schreiben kostet Zeit – jeder Beitrag muss nachverfolgt werden',
          'Falsche Verwendungszwecke erschweren die Zuordnung im Kontoauszug',
          'Aufwendige Buchhaltung für Mitgliedsbeiträge, Spenden und Veranstaltungen',
        ],
        solutionHeadline: 'Die Lösung: GiroCode für Vereinszahlungen',
        solutionIntro:
          'Drucke den GiroCode auf Mitgliederbriefe, Flyer oder Plakate. Mitglieder und Spender scannen, zahlen – und der richtige Verwendungszweck ist automatisch dabei.',
        benefits: [
          {
            icon: '⚡',
            title: 'Scan & Zahlung in 10 Sekunden',
            description:
              'Mitglieder zahlen direkt nach dem Scan – kein Suchen nach Kontodaten, kein manuelles Eintippen.',
          },
          {
            icon: '🏷️',
            title: 'Automatischer Verwendungszweck',
            description:
              '„Mitgliedsbeitrag 2026", „Spende Sommerfest" – der Zweck ist im QR-Code hinterlegt und wird sicher übernommen.',
          },
          {
            icon: '📊',
            title: 'Einfachere Zuordnung',
            description:
              'Auf dem Kontoauszug stehen klare Verwendungszwecke – die Buchhaltung läuft fast von selbst.',
          },
        ],
        stepsHeadline: 'In 3 Schritten zum Vereins-GiroCode',
        steps: [
          {
            title: 'Vereinskonto eingeben',
            description:
              'Trage Vereinsnamen, IBAN und – falls bekannt – einen Betrag (z.B. Jahresbeitrag) in den Generator ein.',
          },
          {
            title: 'Verwendungszweck festlegen',
            description:
              'Hinterlege den passenden Verwendungszweck wie „Mitgliedsbeitrag 2026" oder „Spende Sommerfest" direkt im Code.',
          },
          {
            title: 'QR-Code drucken & teilen',
            description:
              'Setze den GiroCode auf Beitragsrechnungen, Flyer oder Plakate. Mitglieder scannen mit der Banking-App und überweisen.',
          },
        ],
        faqHeadline: 'Häufige Fragen für Vereine',
        faq: [
          {
            question: 'Können wir auch ohne festen Betrag arbeiten?',
            answer:
              'Ja. Lasse das Betragsfeld einfach leer – Mitglieder oder Spender können dann selbst eingeben, wie viel sie überweisen wollen. Ideal für Spendenaufrufe.',
          },
          {
            question: 'Ist der GiroCode auch für Spendenquittungen geeignet?',
            answer:
              'Ja. Du kannst den GiroCode auf Spendenflyern, Plakaten oder dem Anschreiben einsetzen. Spendenquittungen erstellst du wie gewohnt – der GiroCode erleichtert nur die Überweisung.',
          },
          {
            question: 'Müssen wir uns registrieren oder ein Abo abschließen?',
            answer:
              'Nein. Der Generator ist 100% kostenlos und ohne Registrierung nutzbar. Es entstehen keine versteckten Kosten – auch nicht bei vielen QR-Codes.',
          },
          {
            question: 'Sind die Vereinsdaten sicher?',
            answer:
              'Ja. Alle Daten werden ausschließlich lokal im Browser verarbeitet. Eure IBAN, Vereinsdaten und Beträge verlassen niemals euer Gerät und werden nicht an Dritte übertragen.',
          },
          {
            question: 'Können wir denselben Code für mehrere Mitglieder nutzen?',
            answer:
              'Ja, wenn der Beitrag für alle gleich hoch ist. Soll der Verwendungszweck personalisiert sein (z.B. Mitgliedsnummer), erstellt ihr pro Mitglied einen eigenen QR-Code.',
          },
        ],
        ctaHeadline: 'Bereit für stressfreie Vereinszahlungen?',
        ctaText:
          'Erstelle in wenigen Klicks GiroCodes für Mitgliedsbeiträge, Spenden oder Veranstaltungen – kostenlos und ohne Registrierung.',
        ctaButton: 'Jetzt kostenlos GiroCode erstellen →',
      }}
    />
  );
}
