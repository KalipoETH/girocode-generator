import type { Metadata } from 'next';
import { UseCaseLanding } from '../../components/UseCaseLanding';

const SLUG = 'spenden';

export const metadata: Metadata = {
  title: 'GiroCode für Spenden – SEPA QR Code für Spendenaktionen',
  description:
    'Mehr Spenden durch einfaches Scannen: GiroCode auf Flyern, Plakaten und Webseiten lässt Spender in 10 Sekunden überweisen – ohne IBAN-Eingabe, ohne Abbruch.',
  keywords:
    'girocode spenden, spenden qr code, sepa qr spendenaktion, ngo qr code, fundraising qr',
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

export default function SpendenDePage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'de',
        generatorHref: '/',
        homeHref: '/',
        homeLabel: 'Startseite',
        breadcrumbLabel: 'Spenden',
        badge: 'Für Spendenaktionen & NGOs',
        h1: 'Mehr Spenden durch einfaches Scannen',
        subtitle:
          'Drucke einen GiroCode auf Flyer, Plakate oder die Spendenseite. Aus „Ich spende später" wird „Ich spende jetzt" – in zehn Sekunden.',
        problemHeadline: 'Das Problem: Gute Absichten verpuffen',
        problemIntro:
          'Studien zeigen: Über 70% der Menschen, die spenden wollen, brechen den Vorgang ab. Diese drei Hürden sind die Hauptursachen:',
        painPoints: [
          'Spender wollen spenden – aber der Weg ist zu umständlich',
          'Viele brechen ab, sobald sie eine IBAN abtippen müssen',
          'Verwendungszweck wird vergessen – Spende lässt sich nicht zuordnen',
        ],
        solutionHeadline: 'Die Lösung: GiroCode senkt die Schwelle dramatisch',
        solutionIntro:
          'Ein QR-Code reicht. Spender öffnen die Banking-App, scannen, bestätigen – und der gewünschte Betrag liegt mit korrektem Verwendungszweck auf eurem Konto.',
        benefits: [
          {
            icon: '⚡',
            title: 'Scan & Spende in 10 Sekunden',
            description:
              'Statt Suche nach IBAN und Abtippen: einmal scannen, Betrag eintragen, fertig.',
          },
          {
            icon: '💸',
            title: 'Ohne Betrag – Spender wählen selbst',
            description:
              'Lasse das Betragsfeld leer. Spender geben in der Banking-App ihren Wunschbetrag ein.',
          },
          {
            icon: '📰',
            title: 'Auf Flyern & Plakaten einsetzbar',
            description:
              'PNG herunterladen und auf Druckmaterial, Webseite, Spenden-E-Mail oder Social-Media-Post einsetzen.',
          },
        ],
        stepsHeadline: 'In 3 Schritten zum Spenden-GiroCode',
        steps: [
          {
            title: 'Spendenkonto eingeben',
            description:
              'IBAN, Empfänger (Verein/NGO) und Verwendungszweck (z.B. „Spende Hilfsaktion 2026") in den Generator eintragen.',
          },
          {
            title: 'Betrag offen lassen oder vorschlagen',
            description:
              'Lasse das Feld leer für freie Spenden – oder hinterlege einen Wunschbetrag (z.B. 25 €) für Aktionen mit fester Summe.',
          },
          {
            title: 'QR-Code teilen & nutzen',
            description:
              'Code auf Plakat, Flyer, Webseite, Mailing oder Social-Media-Grafik setzen. Spender scannen mit der Banking-App.',
          },
        ],
        faqHeadline: 'Häufige Fragen zu Spenden-GiroCodes',
        faq: [
          {
            question: 'Brauchen wir für jede Spende einen eigenen QR-Code?',
            answer:
              'Nein. Ein einziger QR-Code reicht für eine ganze Kampagne – mit oder ohne festen Betrag. Für getrennte Auswertung verschiedener Aktionen erstellt ihr je Kampagne einen Code mit eigenem Verwendungszweck.',
          },
          {
            question: 'Können Spender auch ohne Betrag spenden?',
            answer:
              'Ja. Wird das Betragsfeld leer gelassen, fragt die Banking-App des Spenders nach dem Betrag. Das ist ideal für freie Spenden.',
          },
          {
            question: 'Sind Spenden über GiroCode steuerlich absetzbar?',
            answer:
              'Ja, sofern eure Organisation gemeinnützig ist. Die Spende läuft als reguläre SEPA-Überweisung – auf der Spendenbescheinigung erscheint sie wie jede andere Überweisung auch.',
          },
          {
            question: 'Funktioniert das auf Plakaten und großen Druckmedien?',
            answer:
              'Ja. Wichtig ist die Mindestgröße von 2x2 cm und ausreichender Kontrast. Auf Plakaten ruhig größer drucken (5–10 cm), damit Passanten den Code aus mehreren Metern scannen können.',
          },
          {
            question: 'Werden Spenderdaten gespeichert?',
            answer:
              'Nein. Der Generator arbeitet komplett lokal im Browser – wir sehen weder eure Daten noch die der Spender. Spenderdaten werden ausschließlich von der Bank des Spenders verarbeitet.',
          },
        ],
        ctaHeadline: 'Bereit für mehr Spenden?',
        ctaText:
          'Erstelle in 2 Minuten den GiroCode für deine nächste Kampagne – kostenlos, ohne Anmeldung, sofort einsetzbar auf Flyer, Plakat und Webseite.',
        ctaButton: 'Jetzt kostenlos GiroCode erstellen →',
      }}
    />
  );
}
