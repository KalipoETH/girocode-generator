import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Kleinunternehmer Rechnung erstellen – §19 UStG konform 2026',
  description:
    'Als Kleinunternehmer Rechnung erstellen: §19 UStG konform, kostenlos, ohne Anmeldung. Alle Pflichtangaben automatisch enthalten. Mit GiroCode für schnellere Zahlungen.',
  keywords: [
    'kleinunternehmer rechnung erstellen',
    'kleinunternehmer rechnung kostenlos',
    'kleinunternehmer rechnung §19 ustg',
    'kleinunternehmer rechnung ohne mwst',
    'rechnung ohne mehrwertsteuer',
    'kleinunternehmerregelung rechnung',
    'kleinunternehmer rechnungsvorlage',
  ],
  alternates: {
    canonical: `${SITE_URL}/kleinunternehmer-rechnung`,
    languages: {
      'x-default': `${SITE_URL}/kleinunternehmer-rechnung`,
      de: `${SITE_URL}/kleinunternehmer-rechnung`,
      en: `${SITE_URL}/en/kleinunternehmer-rechnung`,
      fr: `${SITE_URL}/fr/kleinunternehmer-rechnung`,
      es: `${SITE_URL}/es/kleinunternehmer-rechnung`,
    },
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was muss auf einer Kleinunternehmer-Rechnung stehen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eine Kleinunternehmer-Rechnung nach §19 UStG muss alle Pflichtangaben nach §14 UStG enthalten (Name, Anschrift, Steuernummer, Datum, Rechnungsnummer, Leistungsbeschreibung, Betrag), aber KEINE Mehrwertsteuer ausweisen. Stattdessen ist der Pflichthinweis erforderlich: "Kein Ausweis von Umsatzsteuer gemäß §19 UStG."',
      },
    },
    {
      '@type': 'Question',
      name: 'Bis zu welchem Umsatz gilt die Kleinunternehmerregelung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ab 2025 gilt die Kleinunternehmerregelung, wenn der Umsatz im Vorjahr nicht mehr als 25.000 EUR betragen hat und im laufenden Jahr voraussichtlich nicht mehr als 100.000 EUR betragen wird.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ein Kleinunternehmer eine Rechnung mit GiroCode ausstellen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, unbedingt. Der GiroCode enthält nur den zu zahlenden Gesamtbetrag (ohne MwSt.-Aufteilung) und die IBAN. Als Kleinunternehmer ist dein Bruttobetrag gleich dem Nettobetrag, da du keine MwSt. berechnest.',
      },
    },
    {
      '@type': 'Question',
      name: 'Brauche ich als Kleinunternehmer eine Steuernummer auf der Rechnung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Die Steuernummer (oder alternativ eine USt-ID, falls vorhanden) ist Pflichtangabe nach §14 UStG und muss auf jeder Rechnung stehen – auch bei Kleinunternehmern.',
      },
    },
  ],
};

const checklist = [
  { item: 'Vollständiger Name und Anschrift des Rechnungsstellers', note: '' },
  { item: 'Vollständiger Name und Anschrift des Leistungsempfängers', note: '' },
  { item: 'Steuernummer (keine USt-ID nötig als Kleinunternehmer)', note: 'Pflicht!' },
  { item: 'Ausstellungsdatum der Rechnung', note: '' },
  { item: 'Fortlaufende Rechnungsnummer', note: '' },
  { item: 'Menge und Art der Leistung / des Produkts', note: '' },
  { item: 'Zeitraum oder Zeitpunkt der Leistung', note: '' },
  { item: 'Rechnungsbetrag (Netto = Brutto bei Kleinunternehmern)', note: '' },
  { item: '⚠️ KEIN Steuersatz, KEINE Umsatzsteuer ausweisen!', note: 'Wichtig!' },
  { item: 'Pflichthinweis §19 UStG', note: 'Muss enthalten sein!' },
];

const faqs = [
  {
    q: 'Was muss auf einer Kleinunternehmer-Rechnung stehen?',
    a: 'Alle Pflichtangaben nach §14 UStG (Name, Anschrift, Steuernummer, Datum, Rechnungsnummer, Leistung, Betrag) PLUS der Pflichthinweis auf §19 UStG. KEINE Mehrwertsteuer ausweisen!',
  },
  {
    q: 'Welchen Pflichthinweis muss ich als Kleinunternehmer angeben?',
    a: 'Eine typische Formulierung: "Kein Ausweis von Umsatzsteuer gemäß §19 UStG." oder "Gemäß §19 UStG wird keine Umsatzsteuer berechnet und ausgewiesen (Kleinunternehmerregelung)."',
  },
  {
    q: 'Bis zu welchem Umsatz gilt die Kleinunternehmerregelung?',
    a: 'Ab 2025: Vorjahresumsatz max. 25.000 EUR und voraussichtlicher Umsatz im laufenden Jahr max. 100.000 EUR.',
  },
  {
    q: 'Kann ein Kleinunternehmer eine Rechnung mit GiroCode ausstellen?',
    a: 'Ja. Der GiroCode enthält nur Gesamtbetrag und IBAN – keine MwSt.-Aufteilung nötig. Als Kleinunternehmer ist Brutto = Netto.',
  },
  {
    q: 'Brauche ich als Kleinunternehmer eine Steuernummer auf der Rechnung?',
    a: 'Ja. Die Steuernummer ist Pflichtangabe nach §14 UStG, auch für Kleinunternehmer. Eine USt-ID ist optional.',
  },
  {
    q: 'Darf ein Kleinunternehmer freiwillig Mehrwertsteuer ausweisen?',
    a: 'Ja, das ist möglich (Option zur Regelbesteuerung). Dann musst du die MwSt. aber auch ans Finanzamt abführen. Im Zweifel Steuerberater fragen.',
  },
];

export default function KleinunternehmerRechnungPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
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
            <span className="text-slate-400">Kleinunternehmer Rechnung</span>
          </nav>

          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/40">
            ✅ §19 UStG konform · Kostenlos · Ohne Anmeldung
          </p>

          <h1
            className="font-bold tracking-tight text-slate-50"
            style={{ fontSize: 'clamp(26px, 4vw, 48px)', lineHeight: 1.1 }}
          >
            Kleinunternehmer Rechnung erstellen –<br className="hidden sm:block" /> §19 UStG konform
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Als Kleinunternehmer kostenlos §19 UStG konforme Rechnungen erstellen. Alle
            Pflichtangaben automatisch enthalten – inklusive GiroCode für schnellere Zahlungen.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/rechnungs-editor"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}
            >
              Kleinunternehmer-Rechnung erstellen →
            </Link>
            <Link
              href="/wissen/rechnung"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-8 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-slate-500"
            >
              §19 UStG Ratgeber
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl space-y-14 px-4 pb-20">

        {/* Was ist die Kleinunternehmerregelung */}
        <section aria-labelledby="was-ist-kleinunternehmer">
          <h2 id="was-ist-kleinunternehmer" className="mb-4 text-xl font-bold text-slate-50">
            Was ist die Kleinunternehmerregelung (§19 UStG)?
          </h2>
          <p className="mb-3 leading-relaxed text-slate-400">
            Die Kleinunternehmerregelung nach §19 UStG erlaubt es Selbstständigen mit geringen
            Umsätzen, keine Umsatzsteuer auf ihren Rechnungen auszuweisen und diese auch nicht
            ans Finanzamt abzuführen. Das vereinfacht die Buchhaltung erheblich.
          </p>
          <p className="leading-relaxed text-slate-400">
            <strong className="text-slate-200">Voraussetzung ab 2025:</strong> Der Umsatz des
            Vorjahres war nicht höher als <strong className="text-slate-200">25.000 EUR</strong>{' '}
            und im laufenden Jahr wird voraussichtlich nicht mehr als{' '}
            <strong className="text-slate-200">100.000 EUR</strong> umgesetzt.
          </p>
        </section>

        {/* Checkliste */}
        <section aria-labelledby="kleinunternehmer-checkliste">
          <h2 id="kleinunternehmer-checkliste" className="mb-5 text-xl font-bold text-slate-50">
            Checkliste: Pflichtangaben auf Kleinunternehmer-Rechnungen
          </h2>
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6">
            <ul className="space-y-2.5">
              {checklist.map((entry) => (
                <li key={entry.item} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-0.5 flex-shrink-0 text-emerald-400">✅</span>
                  <span>
                    {entry.item}
                    {entry.note && (
                      <span className="ml-2 rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-semibold text-emerald-400">
                        {entry.note}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            {/* Pflichthinweis Box */}
            <div className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/8 p-4">
              <p className="text-sm font-semibold text-amber-300">
                ⚠️ Pflichthinweis §19 UStG – Musterformulierung:
              </p>
              <blockquote className="mt-2 text-sm italic text-amber-200/80">
                „Kein Ausweis von Umsatzsteuer gemäß §19 UStG."
              </blockquote>
              <p className="mt-1 text-xs text-amber-300/70">
                Alternativ: „Gemäß §19 UStG wird keine Umsatzsteuer berechnet und ausgewiesen
                (Kleinunternehmerregelung)."
              </p>
            </div>
          </div>
        </section>

        {/* GiroCode für Kleinunternehmer */}
        <section aria-labelledby="girocode-kleinunternehmer">
          <h2 id="girocode-kleinunternehmer" className="mb-4 text-xl font-bold text-slate-50">
            GiroCode auf Kleinunternehmer-Rechnungen
          </h2>
          <p className="mb-3 leading-relaxed text-slate-400">
            Als Kleinunternehmer ist der GiroCode besonders einfach: Da du keine MwSt. ausweist,
            entspricht dein Rechnungsbetrag dem Zahlbetrag. Du gibst einfach den Gesamtbetrag
            in den GiroCode ein – fertig.
          </p>
          <p className="leading-relaxed text-slate-400">
            Der GiroCode enthält dann: deine IBAN, den Gesamtbetrag und die Rechnungsnummer als
            Verwendungszweck. Kunden scannen den Code mit ihrer Banking-App und überweisen
            in Sekunden – ohne IBAN abtippen, ohne Tippfehler.
          </p>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-kleinunternehmer">
          <h2 id="faq-kleinunternehmer" className="mb-6 text-xl font-bold text-slate-50">
            Häufige Fragen: Kleinunternehmer Rechnung
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

        {/* CTA */}
        <section
          className="rounded-2xl p-8 text-center"
          style={{ background: 'linear-gradient(135deg, #0f1a0f 0%, #121318 100%)', border: '1px solid rgba(34,197,94,0.25)' }}
        >
          <h2 className="mb-3 text-xl font-bold text-slate-50">
            Kleinunternehmer-Rechnung jetzt erstellen
          </h2>
          <p className="mb-6 text-slate-400">
            Kostenlos, ohne Anmeldung, §19 UStG konform. PDF in 2 Minuten fertig.
          </p>
          <Link
            href="/rechnungs-editor"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}
          >
            Rechnung erstellen →
          </Link>
        </section>

        {/* Interne Links */}
        <section aria-labelledby="verwandte-seiten">
          <h2 id="verwandte-seiten" className="mb-4 text-lg font-semibold text-slate-50">
            Verwandte Seiten
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: '/rechnungs-editor', label: 'Rechnungs-Editor', desc: 'Direkt loslegen' },
              { href: '/rechnungsgenerator', label: 'Rechnungsgenerator', desc: 'Übersicht' },
              { href: '/rechnung-erstellen', label: 'Rechnung erstellen', desc: 'Kompletter Ratgeber' },
              { href: '/wissen/rechnung', label: '§14 UStG Leitfaden', desc: 'Alle Pflichtangaben' },
              { href: '/freelancer', label: 'Freelancer', desc: 'Schneller bezahlt werden' },
              { href: '/kleinunternehmen', label: 'Kleinunternehmen', desc: 'GiroCode für kleine Betriebe' },
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
