import type { Metadata } from 'next';
import Link from 'next/link';
import { InvoiceEditor } from './InvoiceEditor';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Rechnung kostenlos erstellen mit GiroCode – Online Rechnungsgenerator 2026',
  description:
    'Professionelle Rechnung mit GiroCode kostenlos erstellen – §14 UStG konform, ohne Anmeldung, 100% lokal im Browser. IBAN eingeben, Rechnung erstellen, PDF herunterladen.',
  keywords: [
    'rechnung erstellen kostenlos',
    'rechnungsgenerator kostenlos',
    'rechnung mit girocode',
    'rechnung online erstellen ohne anmeldung',
    'kleinunternehmer rechnung erstellen',
    'freelancer rechnung erstellen',
    'rechnung pdf erstellen kostenlos',
    'rechnungsgenerator mit qr code',
  ],
  alternates: {
    canonical: `${SITE_URL}/rechnungs-editor`,
    languages: {
      de: `${SITE_URL}/rechnungs-editor`,
      en: `${SITE_URL}/en/rechnungs-editor`,
      fr: `${SITE_URL}/fr/rechnungs-editor`,
      es: `${SITE_URL}/es/rechnungs-editor`,
      it: `${SITE_URL}/it/rechnungs-editor`,
    },
  },
};

const jsonLdSoftwareApplication = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Rechnungsgenerator mit GiroCode',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web Browser',
  url: `${SITE_URL}/rechnungs-editor`,
  description:
    'Kostenloser Online-Rechnungsgenerator mit automatisch integriertem GiroCode. §14 UStG konform, ohne Anmeldung, 100% lokal.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  featureList: [
    'GiroCode automatisch integriert',
    '§14 UStG konforme Rechnungen',
    'Kleinunternehmer-Regelung §19 UStG',
    'Logo Upload',
    'PDF Download',
    '100% lokal - keine Datenweitergabe',
  ],
};

const jsonLdHowTo = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Rechnung mit GiroCode erstellen',
  description:
    'So erstellst du in 3 Schritten eine kostenlose §14 UStG konforme Rechnung mit integriertem GiroCode',
  totalTime: 'PT2M',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'EUR',
    value: '0',
  },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Rechnungsdaten eingeben',
      text: 'Trage Absender, Empfänger, Leistungsbeschreibung und Betrag ein. Das GiroCode-Formular links füllt automatisch IBAN und Zahlungsdaten.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Rechnung gestalten',
      text: 'Passe Layout, Schriftart und Farben an. Lade dein Logo hoch. Wähle zwischen verschiedenen professionellen Vorlagen.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'PDF herunterladen',
      text: "Klicke auf 'PDF herunterladen' – die fertige Rechnung mit integriertem GiroCode wird sofort lokal in deinem Browser generiert.",
    },
  ],
};

const jsonLdFaqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ist dieser Rechnungsgenerator wirklich kostenlos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, vollständig kostenlos – ohne Abo, ohne Anmeldung, ohne versteckte Kosten. Der Generator läuft komplett in deinem Browser.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist ein GiroCode auf einer Rechnung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ein GiroCode ist ein SEPA-QR-Code der alle Zahlungsdaten enthält. Der Empfänger scannt ihn mit seiner Banking-App und überweist in Sekunden – ohne IBAN abtippen, ohne Tippfehler.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist die Rechnung §14 UStG konform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Der Generator enthält alle gesetzlich vorgeschriebenen Pflichtangaben nach §14 UStG.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich als Kleinunternehmer eine Rechnung erstellen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Ja. Wähle die Option 'Kleinunternehmer (§19 UStG)' und die Mehrwertsteuer wird nicht ausgewiesen.",
      },
    },
    {
      '@type': 'Question',
      name: 'Werden meine Daten gespeichert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. Alle Daten werden ausschließlich lokal in deinem Browser verarbeitet. Keine Daten werden an Server übertragen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich ein Logo hochladen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Du kannst dein Firmenlogo direkt in den Editor hochladen. Es wird lokal verarbeitet und in die PDF eingebettet.',
      },
    },
  ],
};

const benefits = [
  { icon: '🔒', title: '100% Datenschutz', sub: 'Keine Datenweitergabe' },
  { icon: '⚡', title: 'In 2 Minuten', sub: 'Rechnung sofort fertig' },
  { icon: '📱', title: 'GiroCode inklusive', sub: 'Automatisch eingebettet' },
  { icon: '✅', title: '§14 UStG konform', sub: 'Alle Pflichtangaben' },
  { icon: '🆓', title: 'Komplett kostenlos', sub: 'Kein Abo, kein Account' },
];

const featureCards = [
  {
    icon: '📱',
    title: 'GiroCode automatisch integriert',
    text: 'Als einziger kostenloser Rechnungsgenerator bettet unser Tool automatisch einen GiroCode in jede Rechnung ein. Kunden scannen den Code mit ihrer Banking-App – IBAN, Betrag und Verwendungszweck werden automatisch übertragen.',
  },
  {
    icon: '✅',
    title: '§14 UStG konforme Rechnungen',
    text: 'Alle gesetzlich vorgeschriebenen Pflichtangaben nach §14 UStG sind enthalten: Vollständiger Name, Anschrift, Steuernummer, Datum, Rechnungsnummer, Leistungsbeschreibung, Netto, USt und Bruttobetrag.',
  },
  {
    icon: '🔒',
    title: '100% lokal – maximaler Datenschutz',
    text: 'Deine Kundendaten, IBAN und Rechnungsbeträge verlassen niemals deinen Browser. Keine Cloud, kein Server, keine Datenweitergabe. DSGVO-konform by Design.',
  },
  {
    icon: '👨‍💻',
    title: 'Für Freelancer & Kleinunternehmer',
    text: 'Perfekt für Selbstständige, Freiberufler und Kleinunternehmer. Inkl. Kleinunternehmer-Regelung (§19 UStG) – Rechnung ohne Mehrwertsteuer erstellen.',
  },
];

const steps = [
  {
    number: '1',
    title: 'Rechnungsdaten eingeben',
    text: 'Trage Absender, Empfänger, Leistungsbeschreibung und Betrag ein. Das GiroCode-Formular links füllt automatisch IBAN und Zahlungsdaten.',
  },
  {
    number: '2',
    title: 'Rechnung gestalten',
    text: 'Passe Layout, Schriftart und Farben an. Lade dein Logo hoch. Wähle zwischen verschiedenen professionellen Vorlagen.',
  },
  {
    number: '3',
    title: 'PDF herunterladen',
    text: "Klicke auf 'PDF herunterladen' – die fertige Rechnung mit integriertem GiroCode wird sofort lokal in deinem Browser generiert.",
  },
];

const checklist = [
  'Vollständiger Name und Anschrift des Rechnungsstellers',
  'Vollständiger Name und Anschrift des Leistungsempfängers',
  'Steuernummer oder USt-Identifikationsnummer',
  'Ausstellungsdatum der Rechnung',
  'Fortlaufende Rechnungsnummer',
  'Menge und Art der gelieferten Gegenstände / Leistung',
  'Zeitpunkt der Lieferung / Leistung',
  'Nettobetrag, Steuersatz, Steuerbetrag',
  'Bruttobetrag (zu zahlender Gesamtbetrag)',
];

const faqs = [
  {
    q: 'Ist dieser Rechnungsgenerator wirklich kostenlos?',
    a: 'Ja, vollständig kostenlos – ohne Abo, ohne Anmeldung, ohne versteckte Kosten. Der Generator läuft komplett in deinem Browser.',
  },
  {
    q: 'Was ist ein GiroCode auf einer Rechnung?',
    a: 'Ein GiroCode ist ein SEPA-QR-Code der alle Zahlungsdaten enthält. Der Empfänger scannt ihn mit seiner Banking-App und überweist in Sekunden – ohne IBAN abtippen, ohne Tippfehler.',
  },
  {
    q: 'Ist die Rechnung §14 UStG konform?',
    a: 'Ja. Der Generator enthält alle gesetzlich vorgeschriebenen Pflichtangaben nach §14 UStG.',
  },
  {
    q: 'Kann ich als Kleinunternehmer eine Rechnung erstellen?',
    a: "Ja. Wähle die Option 'Kleinunternehmer (§19 UStG)' und die Mehrwertsteuer wird nicht ausgewiesen.",
  },
  {
    q: 'Werden meine Daten gespeichert?',
    a: 'Nein. Alle Daten werden ausschließlich lokal in deinem Browser verarbeitet. Keine Daten werden an Server übertragen.',
  },
  {
    q: 'Kann ich ein Logo hochladen?',
    a: 'Ja. Du kannst dein Firmenlogo direkt in den Editor hochladen. Es wird lokal verarbeitet und in die PDF eingebettet.',
  },
];

export default function RechnungsEditorPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftwareApplication) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaqPage) }}
      />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <header className="relative overflow-hidden px-4 pb-12 pt-10 text-center sm:pt-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)' }}
          />
        </div>

        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5">
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/40">
            ✅ Ohne Anmeldung · 100% kostenlos · §14 UStG konform
          </p>

          <h1
            className="font-bold tracking-tight text-slate-50"
            style={{ fontSize: 'clamp(28px, 4.5vw, 52px)', lineHeight: 1.1 }}
          >
            Rechnung kostenlos erstellen –<br className="hidden sm:block" /> Mit GiroCode &amp; PDF
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Der einzige kostenlose Rechnungsgenerator mit automatisch integriertem GiroCode.
            Kunden zahlen per Banking-App-Scan – schneller, fehlerfreier, professioneller.
          </p>

          {/* Benefit-Icons */}
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex items-center gap-2 rounded-xl border border-slate-700/60 bg-slate-900/60 px-3 py-2 text-xs"
              >
                <span className="text-base">{b.icon}</span>
                <div className="text-left">
                  <p className="font-bold text-slate-100">{b.title}</p>
                  <p className="text-slate-400">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── Editor ─────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-4 pb-4">
        <InvoiceEditor locale="de" />
      </div>

      {/* ── SEO Content Sektionen ───────────────────────────────────── */}
      <div className="mx-auto max-w-5xl space-y-16 px-4 pb-20 pt-12">

        {/* Warum dieser Rechnungsgenerator */}
        <section aria-labelledby="warum-rechnungsgenerator">
          <h2
            id="warum-rechnungsgenerator"
            className="mb-8 text-xl font-bold tracking-tight text-slate-50 sm:text-2xl"
          >
            Warum dieser Rechnungsgenerator?
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className="flex gap-4 rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6"
              >
                <span className="mt-0.5 flex-shrink-0 text-2xl">{card.icon}</span>
                <div>
                  <h3 className="mb-2 font-bold text-slate-50">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Schritt-für-Schritt */}
        <section aria-labelledby="howto-rechnung">
          <h2
            id="howto-rechnung"
            className="mb-8 text-xl font-bold tracking-tight text-slate-50 sm:text-2xl"
          >
            So erstellst du deine Rechnung
          </h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col gap-3 rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6"
              >
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-black text-slate-950"
                  style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}
                >
                  {step.number}
                </div>
                <h3 className="font-bold text-slate-50">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pflichtangaben §14 UStG */}
        <section aria-labelledby="pflichtangaben-ustg">
          <h2
            id="pflichtangaben-ustg"
            className="mb-6 text-xl font-bold tracking-tight text-slate-50 sm:text-2xl"
          >
            Pflichtangaben auf Rechnungen (§14 UStG)
          </h2>
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6">
            <ul className="space-y-2.5">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-0.5 flex-shrink-0 text-emerald-400">✅</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl border border-emerald-500/25 bg-emerald-500/8 p-4 text-sm leading-relaxed text-emerald-200">
              <span className="font-semibold">💡 Kleinunternehmer nach §19 UStG</span> weisen keine
              Mehrwertsteuer aus. Füge stattdessen hinzu:{' '}
              <em className="text-emerald-300">
                „Kein Ausweis von Umsatzsteuer gemäß §19 UStG."
              </em>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-rechnungsgenerator">
          <h2
            id="faq-rechnungsgenerator"
            className="mb-6 text-xl font-bold tracking-tight text-slate-50 sm:text-2xl"
          >
            Häufige Fragen zum Rechnungsgenerator
          </h2>
          <dl className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border-l-[3px] border-l-emerald-500/60 bg-slate-900/60 p-5"
              >
                <dt className="font-bold text-slate-50">{faq.q}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-slate-400">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Interne Verlinkung */}
        <section className="flex flex-col items-start gap-4 rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-300">
              Auch interessant: Schneller GiroCode-Generator
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Nur IBAN + Betrag? Erstelle direkt einen GiroCode ohne Rechnung.
            </p>
          </div>
          <Link
            href="/"
            className="flex-shrink-0 rounded-xl border border-emerald-500/40 px-5 py-2.5 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/10"
          >
            Zum GiroCode Generator →
          </Link>
        </section>
      </div>
    </main>
  );
}
