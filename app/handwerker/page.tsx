import type { Metadata } from 'next';
import { UseCaseLanding } from '../../components/UseCaseLanding';

const SLUG = 'handwerker';

export const metadata: Metadata = {
  title: 'GiroCode für Handwerker – Rechnungen schneller bezahlt',
  description:
    'Handwerker-Rechnungen sofort bezahlen lassen: GiroCode auf der Rechnung = Zahlung direkt vor Ort, weniger Mahnungen, kein IBAN-Abtippen. Kostenlos & ohne Anmeldung.',
  keywords:
    'girocode handwerker, handwerker rechnung qr code, sepa qr handwerk, rechnung sofort bezahlen',
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

export default function HandwerkerDePage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'de',
        generatorHref: '/',
        homeHref: '/',
        homeLabel: 'Startseite',
        breadcrumbLabel: 'Handwerker',
        badge: 'Für Handwerker & Betriebe',
        h1: 'Handwerker-Rechnungen die sofort bezahlt werden',
        subtitle:
          'Druck den GiroCode direkt auf den Lieferschein oder die PDF-Rechnung – dein Kunde scannt mit dem Handy und überweist noch vor Ort. Kein Warten auf Geld mehr.',
        problemHeadline: 'Das Problem: Geld kommt erst Wochen später',
        problemIntro:
          'Im Handwerk ist die Liquidität entscheidend. Doch genau hier hakt es bei vielen Betrieben:',
        painPoints: [
          'Bezahlung erst Wochen später – Material und Löhne sind aber sofort fällig',
          'Papierrechnungen gehen verloren – der Kunde erinnert sich nicht mehr',
          'Nachfragen wegen falscher IBAN – peinlich und zeitaufwendig',
        ],
        solutionHeadline: 'Die Lösung: Bezahlt werden, bevor du wieder im Auto sitzt',
        solutionIntro:
          'Mit einem GiroCode auf der Rechnung schließt du den Auftrag ab und kassierst sofort. Dein Kunde scannt mit der Banking-App – fertig.',
        benefits: [
          {
            icon: '📍',
            title: 'Direkt vor Ort bezahlt werden',
            description:
              'Kunde scannt nach Auftragsabschluss, du gehst mit bezahlter Rechnung raus.',
          },
          {
            icon: '⏱️',
            title: 'PDF-Rechnung in 2 Minuten',
            description:
              'Pflichtangaben, Logo, GiroCode, USt – alles in einer fertigen DIN-A4-Rechnung zum Druck oder Mailen.',
          },
          {
            icon: '📱',
            title: 'Kunde zahlt per Handy sofort',
            description:
              'Banking-App auf, QR scannen, TAN bestätigen – das Geld ist auf dem Weg, bevor du im Lieferwagen sitzt.',
          },
        ],
        stepsHeadline: 'In 3 Schritten zur GiroCode-Rechnung',
        steps: [
          {
            title: 'Auftragsdaten eingeben',
            description:
              'IBAN, Empfänger, Betrag und Verwendungszweck (z.B. „Reparatur Heizung 2026/123") in den Generator eintragen.',
          },
          {
            title: 'PDF mit GiroCode erstellen',
            description:
              'Logo hochladen, Pflichtangaben einmalig hinterlegen – Generator erzeugt sofort PDF mit eingebettetem QR-Code.',
          },
          {
            title: 'Übergeben & scannen lassen',
            description:
              'PDF drucken oder per Mail senden. Kunde scannt mit der Banking-App und überweist mit zwei Klicks.',
          },
        ],
        faqHeadline: 'Häufige Fragen für Handwerker',
        faq: [
          {
            question: 'Kann ich den GiroCode auch auf Lieferscheine drucken?',
            answer:
              'Ja. Du kannst den QR-Code als PNG herunterladen und auf jedes Dokument aufdrucken oder kleben – Lieferschein, Quittung, Wartungsbericht. Wichtig: Mindestgröße 2x2 cm einhalten.',
          },
          {
            question: 'Erfüllt die PDF-Rechnung die §14 UStG-Pflichtangaben?',
            answer:
              'Ja. Mit Adresse, Steuernummer, Rechnungsnummer, Datum, Leistungsbeschreibung, Netto/USt/Brutto kannst du eine vollständig konforme Rechnung erzeugen. Den GiroCode druckt der Generator zusätzlich auf die Rechnung.',
          },
          {
            question: 'Was wenn der Kunde keinen GiroCode scannen kann?',
            answer:
              'Auf der PDF stehen weiterhin alle Daten im Klartext (IBAN, Betrag, Verwendungszweck). Der Kunde kann die Überweisung auch manuell anstoßen – der QR-Code ist immer eine Zusatzhilfe.',
          },
          {
            question: 'Funktioniert das auch bei Bauherrengeschäften / B2B?',
            answer:
              'Ja. Der GiroCode ist EPC-konform und wird von allen SEPA-Banken erkannt – egal ob Privat- oder Geschäftskunde. Auch Buchhaltungsabteilungen profitieren von fehlerfreien Daten.',
          },
          {
            question: 'Sind Kunden- und Auftragsdaten sicher?',
            answer:
              'Ja. Alles wird nur im Browser verarbeitet. Weder IBAN, Logo noch Rechnungsdaten verlassen dein Gerät – und nichts wird gespeichert.',
          },
        ],
        ctaHeadline: 'Bereit für sofort bezahlte Rechnungen?',
        ctaText:
          'Erstelle deine erste GiroCode-Handwerker-Rechnung in 2 Minuten – kostenlos, ohne Registrierung, lokal in deinem Browser.',
        ctaButton: 'Jetzt kostenlos GiroCode erstellen →',
      }}
    />
  );
}
