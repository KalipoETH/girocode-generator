import type { Metadata } from 'next';
import { UseCaseLanding } from '../../components/UseCaseLanding';

const SLUG = 'privatverkauf';

export const metadata: Metadata = {
  title: 'GiroCode für Privatverkäufe – eBay Kleinanzeigen & Co.',
  description:
    'Privatverkäufe sicher abwickeln: GiroCode statt PayPal-Gebühren – Käufer scannen mit Banking-App, du erhältst die Überweisung garantiert. Kostenlos & ohne Registrierung.',
  keywords:
    'girocode privatverkauf, ebay kleinanzeigen qr code, sepa qr verkauf, kleinanzeigen sicher zahlen',
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

export default function PrivatverkaufDePage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'de',
        generatorHref: '/',
        homeHref: '/',
        homeLabel: 'Startseite',
        breadcrumbLabel: 'Privatverkauf',
        badge: 'Für Privatverkäufe & eBay Kleinanzeigen',
        h1: 'Privatverkäufe sicher & einfach abwickeln',
        subtitle:
          'Statt PayPal-Gebühren oder Bargeld-Stress: Schick deinem Käufer einen GiroCode. Er scannt, überweist – und du siehst das Geld in deinem Konto, bevor er die Tür hinter sich zumacht.',
        problemHeadline: 'Das Problem: Bezahlmethoden sind unfair oder unsicher',
        problemIntro:
          'Auf Kleinanzeigen-Plattformen verlierst du entweder Geld oder Nerven. Diese drei Punkte machen Privatverkäufe ärgerlich:',
        painPoints: [
          'PayPal nimmt Gebühren – „Friends" wird vom Käuferschutz ausgeschlossen',
          'Käufer zögern bei IBAN-Eingabe – Tippfehler und Verzögerungen',
          'Kein gemeinsames Payment-System – jeder will über einen anderen Dienst zahlen',
        ],
        solutionHeadline: 'Die Lösung: Eine SEPA-Überweisung – aber smart',
        solutionIntro:
          'Schick deinem Käufer einfach einen GiroCode. Er scannt mit der Banking-App seiner Wahl, du bekommst eine echte SEPA-Überweisung – ohne Drittanbieter, ohne Gebühren.',
        benefits: [
          {
            icon: '💰',
            title: 'Keine Gebühren wie bei PayPal',
            description:
              '2,9% + 35 ct? Nicht hier. SEPA-Überweisungen sind in Deutschland kostenlos – du bekommst exakt den vereinbarten Betrag.',
          },
          {
            icon: '🛡️',
            title: 'Sichere SEPA-Überweisung',
            description:
              'Die Überweisung läuft direkt zwischen den Banken. Keine Drittanbieter, keine eingefrorenen Konten, keine Chargebacks.',
          },
          {
            icon: '📲',
            title: 'Käufer scannt mit Banking-App',
            description:
              'Egal welche Bank: Sparkasse, ING, Volksbank, DKB, N26 – alle scannen den GiroCode mit der eigenen App.',
          },
        ],
        stepsHeadline: 'In 3 Schritten zum sicheren Privatverkauf',
        steps: [
          {
            title: 'Daten eingeben',
            description:
              'Eigene IBAN, Empfängername (du), Verkaufspreis und Verwendungszweck (z.B. „Verkauf Fahrrad blau") in den Generator eintragen.',
          },
          {
            title: 'GiroCode an Käufer senden',
            description:
              'QR-Code als PNG herunterladen und per Messenger oder Mail an den Käufer schicken – oder ausgedruckt bei Übergabe zeigen.',
          },
          {
            title: 'Überweisung prüfen & übergeben',
            description:
              'Käufer scannt mit seiner Banking-App, überweist sofort. Sobald du die Eingangsbestätigung siehst, übergibst du die Ware.',
          },
        ],
        faqHeadline: 'Häufige Fragen für Privatverkäufer',
        faq: [
          {
            question: 'Ist eine SEPA-Überweisung wirklich sicher für mich als Verkäufer?',
            answer:
              'Ja. Eine ausgeführte SEPA-Überweisung kann nicht einseitig vom Käufer zurückgeholt werden – anders als bei PayPal-Käuferschutz. Übergib die Ware aber erst, wenn du die Gutschrift in deinem Konto siehst – nicht nur eine SMS oder einen Screenshot vom Käufer.',
          },
          {
            question: 'Wie lange dauert eine SEPA-Überweisung bei Privatverkäufen?',
            answer:
              'In Deutschland ist seit 2025 SEPA-Instant Pflicht für die meisten Banken – Geld ist innerhalb von 10 Sekunden auf deinem Konto. Bei normalen SEPA-Überweisungen 1 Werktag.',
          },
          {
            question: 'Was passiert, wenn der Käufer falsch überweist?',
            answer:
              'Beim GiroCode kann der Käufer keine falschen Daten eingeben – IBAN, Empfänger und Betrag werden aus dem QR-Code übernommen. Tippfehler sind damit ausgeschlossen.',
          },
          {
            question: 'Bekommt der Käufer meine vollständigen Bankdaten?',
            answer:
              'Ja, dein Empfängername und deine IBAN werden im QR-Code übermittelt – das ist für jede Überweisung notwendig. Mit nur diesen Daten kann niemand Geld von deinem Konto abbuchen.',
          },
          {
            question: 'Kann ich den GiroCode auch direkt in die Anzeige einbinden?',
            answer:
              'Theoretisch ja – allerdings empfehlen wir, den Code erst nach Kaufabsicht direkt an den Käufer zu schicken. So vermeidest du, dass deine IBAN öffentlich auf der Plattform sichtbar ist.',
          },
        ],
        ctaHeadline: 'Bereit für faire Privatverkäufe?',
        ctaText:
          'Erstelle in 60 Sekunden einen GiroCode für deinen nächsten Verkauf – kostenlos, ohne Registrierung, ohne Gebühren.',
        ctaButton: 'Jetzt kostenlos GiroCode erstellen →',
      }}
    />
  );
}
