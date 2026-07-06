import type { Metadata } from 'next';
import Link from 'next/link';
import { UseCaseLanding } from '@/components/UseCaseLanding';
import { SITE_URL } from '@/lib/siteConfig';

const SLUG = 'freelancer';

export const metadata: Metadata = {
  title: 'GiroCode für Freelancer – Schneller bezahlt werden 2026',
  description:
    'Als Freelancer schneller Zahlungen erhalten: GiroCode auf Rechnungen = weniger Mahnungen, weniger Fehler, mehr Professionalität. Kostenlos & ohne Registrierung.',
  keywords:
    'girocode freelancer, freelancer rechnung qr code, sepa qr freelancer, schneller bezahlt werden freelancer',
  alternates: {
    canonical: `${SITE_URL}/${SLUG}`,
    languages: {
      'x-default': `${SITE_URL}/${SLUG}`,
      de: `${SITE_URL}/${SLUG}`,
      en: `${SITE_URL}/en/${SLUG}`,
      fr: `${SITE_URL}/fr/${SLUG}`,
      es: `${SITE_URL}/es/${SLUG}`,
      it: `${SITE_URL}/it/freelancer`,
    },
  },
};

export default function FreelancerDePage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'de',
        generatorHref: '/',
        homeHref: '/',
        homeLabel: 'Startseite',
        breadcrumbLabel: 'Freelancer',
        badge: 'Für Freelancer & Selbstständige',
        h1: 'Als Freelancer schneller bezahlt werden',
        subtitle:
          'Mit einem GiroCode auf deiner Rechnung überweisen Kunden in Sekunden – ohne IBAN abtippen, ohne Tippfehler.',
        problemHeadline: 'Das Problem: Zahlungen kommen schleppend',
        problemIntro:
          'Du kennst es: Die Arbeit ist erledigt, die Rechnung verschickt – aber das Geld lässt auf sich warten. Diese drei Punkte kosten Freelancer am meisten Nerven:',
        painPoints: [
          'IBAN wird falsch abgetippt – Überweisung kommt nie an',
          'Zahlungen kommen zu spät – Mahnungen fressen Zeit',
          'Unprofessioneller Eindruck – ohne Zahlungsoption auf der Rechnung',
        ],
        solutionHeadline: 'Die Lösung: GiroCode auf jeder Rechnung',
        solutionIntro:
          'Ein einziger QR-Code auf deiner Rechnung verändert alles. Dein Kunde scannt – die App füllt IBAN, Betrag und Verwendungszweck automatisch aus.',
        benefits: [
          {
            icon: '⚡',
            title: '10x schnellere Zahlungen',
            description:
              'Kunden zahlen direkt nach Erhalt – kein Aufschieben, kein Suchen nach IBAN-Daten.',
          },
          {
            icon: '✅',
            title: 'Null Tippfehler',
            description:
              'Kein manuelles Eintippen mehr. IBAN, Betrag und Verwendungszweck sind im Code hinterlegt.',
          },
          {
            icon: '💼',
            title: 'Professioneller Auftritt',
            description:
              'Moderne Rechnungen mit QR-Code wirken seriös und zeigen, dass du up-to-date bist.',
          },
        ],
        stepsHeadline: 'In 3 Schritten zur GiroCode-Rechnung',
        steps: [
          {
            title: 'IBAN & Rechnungsdaten eingeben',
            description:
              'Trage Empfänger, IBAN, Betrag und Verwendungszweck im Generator ein. Alles passiert lokal in deinem Browser.',
          },
          {
            title: 'GiroCode & PDF erstellen',
            description:
              'Der Generator erzeugt sofort den QR-Code und auf Wunsch eine fertige PDF-Rechnung mit eingebettetem Code.',
          },
          {
            title: 'Rechnung senden – Kunde scannt & zahlt',
            description:
              'Schicke die PDF per E-Mail. Dein Kunde scannt den Code mit seiner Banking-App und überweist mit zwei Klicks.',
          },
        ],
        faqHeadline: 'Häufige Fragen für Freelancer',
        faq: [
          {
            question: 'Ist der GiroCode auf einer Rechnung rechtssicher?',
            answer:
              'Ja. Ein GiroCode ergänzt deine Rechnung – die gesetzlichen Pflichtangaben nach §14 UStG (Adresse, Steuernummer, Rechnungsnummer etc.) bleiben unverändert. Der QR-Code ist eine optionale Zusatzfunktion zur Bequemlichkeit deiner Kunden.',
          },
          {
            question: 'Welche Banking-Apps können meine Rechnung scannen?',
            answer:
              'Praktisch alle deutschen Banking-Apps: Sparkasse, Volks- und Raiffeisenbanken, ING, DKB, Comdirect, Deutsche Bank, Commerzbank, Postbank, N26 und viele weitere unterstützen den EPC-Standard.',
          },
          {
            question: 'Kostet der Service etwas oder gibt es ein Abo?',
            answer:
              'Nein. Der GiroCode-Generator ist 100% kostenlos und ohne Registrierung nutzbar. Es fallen nur die üblichen Bankgebühren deiner SEPA-Überweisung an, sofern deine Bank diese erhebt.',
          },
          {
            question: 'Sind meine Bank- und Kundendaten sicher?',
            answer:
              'Ja. Alle Daten werden ausschließlich in deinem Browser verarbeitet. Es findet keine Übertragung an einen Server statt – weder deine IBAN noch Kundendaten verlassen dein Gerät.',
          },
          {
            question: 'Kann ich auch wiederkehrende Rechnungen erstellen?',
            answer:
              'Ja. Du kannst beliebig viele Rechnungen mit GiroCodes generieren. Für gleichbleibende Beträge eignet sich ein einmal erstellter QR-Code zum Wiederverwenden – z.B. für monatliche Retainer.',
          },
        ],
        ctaHeadline: 'Bereit für schnellere Zahlungen?',
        ctaText:
          'Erstelle in 2 Minuten deine erste GiroCode-Rechnung – kostenlos, ohne Registrierung, 100% lokal in deinem Browser.',
        ctaButton: 'Jetzt kostenlos GiroCode erstellen →',
        closing: (
          <div className="space-y-6">
            <div className="mt-4 flex justify-center">
              <Link
                href="/rechnungs-editor"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 px-6 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/10"
              >
                Rechnung mit GiroCode erstellen →
              </Link>
            </div>
            <div className="border-t border-slate-800 pt-6">
              <p className="mb-3 text-sm font-semibold text-slate-300">Das könnte dich auch interessieren</p>
              <div className="flex flex-wrap gap-3">
              <Link
                href="/blog/freelancer-rechnungen-qr-code"
                className="inline-flex items-center gap-2 rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-emerald-500/40 hover:text-emerald-300"
              >
                Freelancer-Rechnungen mit QR-Code →
              </Link>
              <Link
                href="/sepa-qr-pflicht"
                className="inline-flex items-center gap-2 rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-emerald-500/40 hover:text-emerald-300"
              >
                SEPA-QR-Pflicht: Was gilt? →
              </Link>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
