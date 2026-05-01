import type { Metadata } from 'next';
import { UseCaseLanding } from '../../components/UseCaseLanding';

const SLUG = 'kleinunternehmen';

export const metadata: Metadata = {
  title: 'GiroCode für Kleinunternehmen – Professionelle Rechnungen',
  description:
    'Professionelle Rechnungen für dein Kleinunternehmen: GiroCode + DIN-konforme PDF-Rechnung in 2 Minuten. Kein Abo, keine Software – kostenlos & sicher.',
  keywords:
    'girocode kleinunternehmen, kleinunternehmer rechnung qr code, sepa qr gmbh, rechnungssoftware kostenlos',
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

export default function KleinunternehmenDePage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'de',
        generatorHref: '/',
        homeHref: '/',
        homeLabel: 'Startseite',
        breadcrumbLabel: 'Kleinunternehmen',
        badge: 'Für Kleinunternehmen & GmbHs',
        h1: 'Professionelle Rechnungen für dein Kleinunternehmen',
        subtitle:
          'Pflichtangaben nach §14 UStG, sauberes PDF-Layout, eingebetteter GiroCode – ohne teure Buchhaltungssoftware und ohne monatliches Abo.',
        problemHeadline: 'Das Problem: Rechnungen schreiben kostet Geld und Zeit',
        problemIntro:
          'Kleinunternehmen brauchen Rechnungen täglich – aber die Branche zwingt sie in teure Software-Abos. So leiden viele Inhaber:',
        painPoints: [
          'Teure Rechnungssoftware – monatliche Abos für Funktionen, die du nie nutzt',
          'Angst vor falschen Pflichtangaben – Steuerberater muss alles prüfen',
          'Stundenlang Rechnungen schreiben – manuelles Kopieren aus Word-Vorlagen',
        ],
        solutionHeadline: 'Die Lösung: Pflichtkonform, schnell und kostenlos',
        solutionIntro:
          'Unser Generator erstellt eine §14 UStG-konforme PDF-Rechnung mit Logo, GiroCode und allen Pflichtangaben – in 2 Minuten und ohne Abo.',
        benefits: [
          {
            icon: '🆓',
            title: 'Kostenlos – kein Abo',
            description:
              'Keine versteckten Kosten, keine Premium-Stufen, keine Limitierungen – einfach professionelle Rechnungen erstellen.',
          },
          {
            icon: '📋',
            title: '§14 UStG konforme Rechnungen',
            description:
              'Adresse, Steuernummer, Rechnungsnummer, Datum, Leistungsbeschreibung, Netto/USt/Brutto – alles dabei.',
          },
          {
            icon: '⏱️',
            title: 'Rechnung in 2 Minuten',
            description:
              'Daten eingeben, Logo hochladen, GiroCode wird automatisch eingebettet – PDF runterladen und versenden.',
          },
        ],
        stepsHeadline: 'In 3 Schritten zur fertigen Rechnung',
        steps: [
          {
            title: 'Stammdaten einmalig hinterlegen',
            description:
              'Firmenname, Adresse, Steuernummer, IBAN, Logo – alles wird lokal in deinem Browser zwischengespeichert.',
          },
          {
            title: 'Auftragsdaten eingeben',
            description:
              'Empfänger, Leistung, Netto-Betrag und USt-Satz eintragen. Generator berechnet Brutto und erzeugt GiroCode.',
          },
          {
            title: 'PDF erstellen & versenden',
            description:
              'Fertige DIN-A4-PDF mit eingebettetem GiroCode herunterladen und direkt per E-Mail an den Kunden senden.',
          },
        ],
        faqHeadline: 'Häufige Fragen für Kleinunternehmen',
        faq: [
          {
            question: 'Erfüllt die Rechnung wirklich §14 UStG?',
            answer:
              'Ja, sofern du alle Pflichtfelder befüllst: Name und Anschrift Sender/Empfänger, Steuernummer oder USt-IdNr., Datum, Rechnungsnummer, Leistungsbeschreibung, Nettobetrag, USt-Satz und -betrag (oder Hinweis auf Kleinunternehmerregelung §19 UStG), Bruttobetrag.',
          },
          {
            question: 'Funktioniert das auch mit Kleinunternehmerregelung §19 UStG?',
            answer:
              'Ja. Setze den USt-Satz auf 0% und ergänze in der Leistungsbeschreibung den Hinweis: „Gemäß §19 UStG wird keine Umsatzsteuer berechnet." Den Hinweis kannst du als festen Bestandteil hinterlegen.',
          },
          {
            question: 'Wo werden meine Rechnungsdaten gespeichert?',
            answer:
              'Nirgendwo auf unseren Servern. Die Daten bleiben ausschließlich in deinem Browser. Wenn du sie behalten willst, speichere die fertige PDF lokal oder in deinem Cloud-Speicher.',
          },
          {
            question: 'Kann ich auch fortlaufende Rechnungsnummern verwenden?',
            answer:
              'Ja. Du kannst deine Rechnungsnummer beliebig vergeben (z.B. „2026-001"). Achte nur darauf, dass die Nummern lückenlos sind – das ist eine Pflichtangabe.',
          },
          {
            question: 'Ist die Rechnung GoBD-konform?',
            answer:
              'Die erzeugte PDF ist unveränderbar und damit für die Aufbewahrung geeignet. Für vollständige GoBD-Konformität (Aufbewahrungssystem, Verfahrensdokumentation) musst du allerdings selbst sorgen – wie bei jeder anderen Rechnungssoftware auch.',
          },
        ],
        ctaHeadline: 'Bereit für stressfreie Rechnungen?',
        ctaText:
          'Erstelle deine erste GiroCode-Rechnung in 2 Minuten – kostenlos, ohne Abo, ohne Registrierung. Lokal in deinem Browser.',
        ctaButton: 'Jetzt kostenlos GiroCode erstellen →',
      }}
    />
  );
}
