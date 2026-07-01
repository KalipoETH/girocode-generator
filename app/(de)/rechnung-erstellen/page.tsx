import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Rechnung erstellen – Kostenlos & Online | GiroCode Generator',
  description:
    'Rechnung kostenlos online erstellen: §14 UStG konform, mit GiroCode, ohne Anmeldung. PDF sofort herunterladen. Für Freelancer, Kleinunternehmer & Selbstständige.',
  keywords: [
    'rechnung erstellen',
    'rechnung erstellen kostenlos',
    'rechnung online erstellen',
    'rechnung mit girocode erstellen',
    'rechnung ohne anmeldung',
    'rechnung pdf erstellen',
    '§14 ustg rechnung',
  ],
  alternates: {
    canonical: `${SITE_URL}/rechnung-erstellen`,
    languages: {
      'x-default': `${SITE_URL}/rechnung-erstellen`,
      de: `${SITE_URL}/rechnung-erstellen`,
      en: `${SITE_URL}/en/rechnung-erstellen`,
      fr: `${SITE_URL}/fr/rechnung-erstellen`,
      es: `${SITE_URL}/es/rechnung-erstellen`,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie erstelle ich kostenlos eine Rechnung online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mit dem GiroCode Rechnungsgenerator erstellst du in 3 Schritten eine kostenlose Rechnung: 1. Daten eingeben, 2. Layout anpassen, 3. PDF herunterladen. Keine Anmeldung nötig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was muss auf einer Rechnung stehen (§14 UStG)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pflichtangaben nach §14 UStG: Name und Anschrift beider Parteien, Steuernummer, Ausstellungsdatum, Rechnungsnummer, Leistungsbeschreibung, Leistungszeitraum, Nettobetrag, Steuersatz, Steuerbetrag und Bruttobetrag.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich als Kleinunternehmer kostenlos eine Rechnung erstellen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Unser kostenloser Rechnungsgenerator unterstützt die Kleinunternehmerregelung nach §19 UStG. Die Mehrwertsteuer wird nicht ausgewiesen und der gesetzliche Pflichthinweis wird automatisch eingefügt.',
      },
    },
  ],
};

const contentSections = [
  {
    id: 'was-brauche-ich',
    title: 'Was brauche ich, um eine Rechnung zu erstellen?',
    content: [
      'Eine rechtskonforme Rechnung nach §14 UStG benötigt folgende Angaben: deinen vollständigen Namen und deine Anschrift, die Daten des Rechnungsempfängers, deine Steuernummer oder USt-ID, das Rechnungsdatum, eine eindeutige Rechnungsnummer, eine genaue Leistungsbeschreibung sowie den Nettobetrag, den Steuersatz und den Bruttobetrag.',
      'Mit unserem kostenlosen Rechnungsgenerator brauchst du keine spezielle Software oder Vorkenntnisse. Du füllst einfach die Felder aus – alles andere erledigt das Tool für dich. Inklusive GiroCode für schnellere Zahlungen.',
    ],
  },
  {
    id: 'girocode-vorteil',
    title: 'Warum GiroCode auf deiner Rechnung?',
    content: [
      'Ein GiroCode (SEPA-QR-Code) auf deiner Rechnung ermöglicht es deinen Kunden, die Zahlung mit einem einzigen Scan ihrer Banking-App auszuführen. IBAN, Betrag und Verwendungszweck werden automatisch übertragen – keine Tippfehler, keine falschen Überweisungen.',
      'Studien zeigen, dass Rechnungen mit GiroCode bis zu 40% schneller bezahlt werden. Der GiroCode ist bei über 90% aller deutschen Banking-Apps kompatibel: Sparkasse, Volksbank, ING, DKB, Deutsche Bank, Commerzbank und viele mehr.',
    ],
  },
  {
    id: 'kleinunternehmer',
    title: 'Rechnung als Kleinunternehmer erstellen',
    content: [
      'Als Kleinunternehmer nach §19 UStG darfst du keine Umsatzsteuer auf deinen Rechnungen ausweisen. Dafür benötigst du den gesetzlichen Pflichthinweis: "Kein Ausweis von Umsatzsteuer gemäß §19 UStG."',
      'Unser Rechnungsgenerator unterstützt die Kleinunternehmerregelung vollständig. Du wählst einfach die entsprechende Option aus und das Tool passt die Rechnung automatisch an.',
    ],
  },
  {
    id: 'freelancer',
    title: 'Rechnung als Freelancer erstellen',
    content: [
      'Als Freelancer oder Selbstständiger verschickst du regelmäßig Rechnungen. Wichtig: Jede Rechnung braucht eine eindeutige, fortlaufende Rechnungsnummer. Die Nummern müssen nicht lückenlos sein, aber jede Nummer darf nur einmal vergeben werden.',
      'Unser Rechnungsgenerator bietet alle Felder, die Freelancer benötigen: Projektbeschreibung, Stundensatz, Leistungszeitraum und natürlich den GiroCode für schnellere Bezahlung.',
    ],
  },
];

export default function RechnungErstellenPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <header className="relative overflow-hidden px-4 pb-12 pt-10 text-center sm:pt-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)' }}
          />
        </div>

        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5">
          <nav className="text-xs text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-300">Startseite</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-400">Rechnung erstellen</span>
          </nav>

          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/40">
            ✅ Ohne Anmeldung · §14 UStG konform · Mit GiroCode
          </p>

          <h1
            className="font-bold tracking-tight text-slate-50"
            style={{ fontSize: 'clamp(28px, 4.5vw, 52px)', lineHeight: 1.1 }}
          >
            Rechnung erstellen –<br className="hidden sm:block" /> Kostenlos &amp; Online
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Professionelle Rechnung in 2 Minuten erstellen: §14 UStG konform, mit automatischem
            GiroCode, ohne Anmeldung. PDF sofort herunterladen und versenden.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/rechnungs-editor"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}
            >
              Jetzt Rechnung erstellen →
            </Link>
            <Link
              href="/wissen/rechnung"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-8 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-slate-500 hover:text-slate-100"
            >
              Ratgeber: §14 UStG
            </Link>
          </div>
        </div>
      </header>

      {/* Content Sektionen */}
      <div className="mx-auto max-w-4xl space-y-12 px-4 pb-20">
        {contentSections.map((section) => (
          <section key={section.id} aria-labelledby={section.id}>
            <h2
              id={section.id}
              className="mb-4 text-xl font-bold tracking-tight text-slate-50"
            >
              {section.title}
            </h2>
            <div className="space-y-3">
              {section.content.map((paragraph, i) => (
                <p key={i} className="leading-relaxed text-slate-400">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        {/* Pflichtangaben Checkliste */}
        <section aria-labelledby="pflichtangaben-checkliste">
          <h2
            id="pflichtangaben-checkliste"
            className="mb-5 text-xl font-bold tracking-tight text-slate-50"
          >
            Pflichtangaben auf Rechnungen (§14 UStG) – Checkliste
          </h2>
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6">
            <ul className="space-y-2.5">
              {[
                'Vollständiger Name und Anschrift des Rechnungsstellers',
                'Vollständiger Name und Anschrift des Leistungsempfängers',
                'Steuernummer oder USt-Identifikationsnummer',
                'Ausstellungsdatum der Rechnung',
                'Fortlaufende Rechnungsnummer',
                'Menge und Art der gelieferten Gegenstände / Leistung',
                'Zeitpunkt der Lieferung / Leistung',
                'Nettobetrag, Steuersatz, Steuerbetrag',
                'Bruttobetrag (zu zahlender Gesamtbetrag)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-0.5 flex-shrink-0 text-emerald-400">✅</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #0f1a0f 0%, #121318 100%)', border: '1px solid rgba(34,197,94,0.25)' }}>
          <h2 className="mb-3 text-xl font-bold text-slate-50">
            Bereit? Rechnung jetzt kostenlos erstellen
          </h2>
          <p className="mb-6 text-slate-400">
            In 2 Minuten zur fertigen PDF-Rechnung mit GiroCode – ohne Anmeldung, ohne Abo.
          </p>
          <Link
            href="/rechnungs-editor"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}
          >
            Zum Rechnungsgenerator →
          </Link>
        </section>

        {/* Interne Links */}
        <section aria-labelledby="weitere-themen">
          <h2 id="weitere-themen" className="mb-4 text-lg font-semibold text-slate-50">
            Weitere hilfreiche Seiten
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: '/rechnungsgenerator', label: 'Rechnungsgenerator', desc: 'Direkt in den Generator' },
              { href: '/kleinunternehmer-rechnung', label: 'Kleinunternehmer-Rechnung', desc: '§19 UStG konforme Rechnungen' },
              { href: '/freelancer', label: 'Freelancer-Ratgeber', desc: 'Schneller bezahlt werden' },
              { href: '/wissen/rechnung', label: 'GiroCode auf Rechnungen', desc: 'Kompletter Leitfaden' },
              { href: '/rechnungs-editor', label: 'Rechnungs-Editor', desc: 'Visuell gestalten' },
              { href: '/', label: 'GiroCode Generator', desc: 'Einfacher QR-Code' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex flex-col gap-1 rounded-xl border border-slate-700/60 bg-slate-900/40 p-4 transition hover:border-emerald-500/30 hover:bg-slate-900/80"
              >
                <span className="text-sm font-semibold text-emerald-300">{link.label}</span>
                <span className="text-xs text-slate-500">{link.desc}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
