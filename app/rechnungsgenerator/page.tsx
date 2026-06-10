import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rechnungsgenerator kostenlos – Mit GiroCode & PDF 2026',
  description:
    'Der kostenlose Rechnungsgenerator mit automatischem GiroCode. Für Freelancer, Kleinunternehmer und Selbstständige. Ohne Anmeldung, §14 UStG konform.',
  keywords: [
    'rechnungsgenerator',
    'rechnungsgenerator kostenlos',
    'rechnungsgenerator mit qr code',
    'rechnungsgenerator ohne anmeldung',
    'rechnung generator',
    'online rechnungsgenerator',
    'rechnung generator kostenlos',
  ],
  alternates: {
    canonical: 'https://www.girocodegenerator.com/rechnungsgenerator',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/rechnungsgenerator',
      de: 'https://www.girocodegenerator.com/rechnungsgenerator',
      en: 'https://www.girocodegenerator.com/en/rechnungsgenerator',
      fr: 'https://www.girocodegenerator.com/fr/rechnungsgenerator',
      es: 'https://www.girocodegenerator.com/es/rechnungsgenerator',
    },
  },
};

const jsonLdSoftware = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Rechnungsgenerator mit GiroCode',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web Browser',
  url: 'https://www.girocodegenerator.com/rechnungsgenerator',
  description:
    'Kostenloser Online-Rechnungsgenerator mit automatisch integriertem GiroCode für Freelancer, Kleinunternehmer und Selbstständige.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  featureList: [
    'GiroCode automatisch integriert',
    '§14 UStG konforme Rechnungen',
    'Kleinunternehmer-Regelung §19 UStG',
    'Logo Upload',
    'PDF Download',
    '100% lokal – keine Datenweitergabe',
  ],
};

const comparisons = [
  {
    feature: 'GiroCode (SEPA-QR)',
    ours: true,
    others: false,
    note: 'Nur wir integrieren den GiroCode automatisch',
  },
  { feature: '100% kostenlos', ours: true, others: false, note: 'Kein Abo, kein Upgrade' },
  { feature: 'Ohne Anmeldung', ours: true, others: false, note: 'Sofort nutzbar' },
  { feature: '§14 UStG konform', ours: true, others: true, note: '' },
  { feature: 'Kleinunternehmer §19', ours: true, others: true, note: '' },
  { feature: 'Logo Upload', ours: true, others: true, note: '' },
  { feature: 'PDF Download', ours: true, others: true, note: '' },
  { feature: 'Lokale Verarbeitung', ours: true, others: false, note: 'Maximaler Datenschutz' },
];

const targetGroups = [
  {
    icon: '👨‍💻',
    title: 'Freelancer',
    desc: 'Erstelle §14 UStG konforme Rechnungen für deine Projekte. GiroCode sorgt dafür, dass Kunden sofort überweisen.',
    href: '/freelancer',
  },
  {
    icon: '🏢',
    title: 'Kleinunternehmer',
    desc: 'Rechnungen ohne MwSt. nach §19 UStG. Pflichthinweis automatisch eingefügt.',
    href: '/kleinunternehmer-rechnung',
  },
  {
    icon: '🔧',
    title: 'Handwerker',
    desc: 'Rechnung direkt auf der Baustelle erstellen und QR-Code scannen lassen.',
    href: '/handwerker',
  },
  {
    icon: '🏛️',
    title: 'Vereine',
    desc: 'Mitgliedsbeiträge und Spenden per QR-Code einziehen – schnell und fehlerfrei.',
    href: '/verein',
  },
];

export default function RechnungsgeneratorPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
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
            <span className="text-slate-400">Rechnungsgenerator</span>
          </nav>

          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/40">
            ✅ Kostenlos · Mit GiroCode · Ohne Anmeldung
          </p>

          <h1
            className="font-bold tracking-tight text-slate-50"
            style={{ fontSize: 'clamp(28px, 4.5vw, 52px)', lineHeight: 1.1 }}
          >
            Rechnungsgenerator kostenlos –<br className="hidden sm:block" /> Mit GiroCode &amp; PDF
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Der kostenlose Rechnungsgenerator mit automatischem GiroCode. Für Freelancer,
            Kleinunternehmer und Selbstständige. Ohne Anmeldung, §14 UStG konform, PDF sofort.
          </p>

          <Link
            href="/rechnungs-editor"
            className="mt-2 inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}
          >
            Jetzt kostenlos Rechnung erstellen →
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-5xl space-y-16 px-4 pb-20">

        {/* Was macht diesen Generator besonders */}
        <section aria-labelledby="generator-vorteile">
          <h2 id="generator-vorteile" className="mb-6 text-xl font-bold text-slate-50">
            Warum unser Rechnungsgenerator?
          </h2>
          <p className="mb-8 text-slate-400">
            Es gibt viele Rechnungsgeneratoren. Aber keiner bietet, was wir bieten: einen
            vollständig kostenlosen Generator, der automatisch einen GiroCode in jede Rechnung
            integriert – ohne Anmeldung, ohne Abo, ohne Datenweitergabe.
          </p>

          {/* Vergleichstabelle */}
          <div className="overflow-x-auto rounded-2xl border border-slate-700/50">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700/50 bg-slate-900/80">
                  <th className="px-4 py-3 text-left text-slate-300">Feature</th>
                  <th className="px-4 py-3 text-center text-emerald-400">Unser Generator</th>
                  <th className="px-4 py-3 text-center text-slate-500">Andere</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-slate-700/30 ${i % 2 === 0 ? 'bg-slate-900/40' : 'bg-slate-900/20'}`}
                  >
                    <td className="px-4 py-3 text-slate-300">
                      {row.feature}
                      {row.note && (
                        <span className="ml-2 text-xs text-emerald-400">({row.note})</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {row.ours ? (
                        <span className="text-emerald-400">✅</span>
                      ) : (
                        <span className="text-red-400">✗</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {row.others ? (
                        <span className="text-slate-400">✅</span>
                      ) : (
                        <span className="text-red-400/60">✗</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Für wen */}
        <section aria-labelledby="fuer-wen">
          <h2 id="fuer-wen" className="mb-6 text-xl font-bold text-slate-50">
            Für wen ist der Rechnungsgenerator?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {targetGroups.map((group) => (
              <Link
                key={group.href}
                href={group.href}
                className="group flex items-start gap-4 rounded-2xl border border-slate-700/50 bg-slate-900/60 p-5 transition hover:border-emerald-500/30 hover:bg-slate-900/80"
              >
                <span className="flex-shrink-0 text-3xl">{group.icon}</span>
                <div>
                  <h3 className="font-bold text-slate-50 group-hover:text-emerald-300">
                    {group.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{group.desc}</p>
                  <span className="mt-2 inline-flex items-center text-xs font-medium text-emerald-400 transition group-hover:translate-x-1">
                    Mehr erfahren →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          className="rounded-2xl p-8 text-center"
          style={{ background: 'linear-gradient(135deg, #0f1a0f 0%, #121318 100%)', border: '1px solid rgba(34,197,94,0.25)' }}
        >
          <h2 className="mb-3 text-xl font-bold text-slate-50">
            Rechnung jetzt kostenlos erstellen
          </h2>
          <p className="mb-6 text-slate-400">
            Kein Abo. Keine Anmeldung. Kein Datenverlust. Einfach öffnen und loslegen.
          </p>
          <Link
            href="/rechnungs-editor"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}
          >
            Rechnungsgenerator öffnen →
          </Link>
        </section>
      </div>
    </main>
  );
}
