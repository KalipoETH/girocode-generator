import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GiroCode mit Schweizer Kantonalbanken scannen – Übersicht',
  description:
    'Übersicht: GiroCode mit Schweizer Kantonalbanken scannen. ZKB, Basellandschaftliche, St. Galler Kantonalbank und mehr. ✅ SEPA-QR Anleitung für alle Kantonalbank-Apps.',
  keywords: 'girocode kantonalbanken schweiz, kantonalbank qr code, sepa qr kantonalbank, zkb sgkb blkb girocode',
  alternates: {
    canonical: `${SITE_URL}/cantonal-banks`,
  },
};

const cantonalBanks = [
  { name: 'ZKB – Zürcher Kantonalbank', app: 'ZKB Mobile Banking', href: '/zuercher-kantonalbank' },
  { name: 'BLKB – Basellandschaftliche Kantonalbank', app: 'BLKB Mobile Banking', href: null },
  { name: 'SGKB – St. Galler Kantonalbank', app: 'SGKB Mobile Banking', href: null },
  { name: 'BEKB – Berner Kantonalbank', app: 'BEKB Mobile Banking', href: null },
  { name: 'LUKB – Luzerner Kantonalbank', app: 'LUKB App', href: null },
  { name: 'AKB – Aargauische Kantonalbank', app: 'AKB Mobile Banking', href: null },
  { name: 'TKB – Thurgauer Kantonalbank', app: 'TKB Mobile Banking', href: null },
  { name: 'GKB – Graubündner Kantonalbank', app: 'GKB Mobile Banking', href: null },
  { name: 'SZKB – Schwyzer Kantonalbank', app: 'SZKB App', href: null },
  { name: 'BCJ – Banque Cantonale du Jura', app: 'BCJ Mobile Banking', href: null },
];

const otherBanks = [
  { href: '/zuercher-kantonalbank', label: 'Zürcher Kantonalbank (ZKB)' },
  { href: '/ubs', label: 'UBS Mobile Banking' },
  { href: '/raiffeisen-schweiz', label: 'Raiffeisen Schweiz' },
  { href: '/postfinance', label: 'PostFinance' },
  { href: '/credit-suisse-ubs', label: 'Credit Suisse / UBS' },
  { href: '/sparkasse', label: 'Sparkasse (Deutschland)' },
  { href: '/volksbank', label: 'Volksbank / VR-Banking' },
  { href: '/dkb', label: 'DKB' },
];

const faqItems = [
  {
    question: 'Unterstützen alle Schweizer Kantonalbanken den GiroCode?',
    answer:
      'Die meisten Schweizer Kantonalbanken unterstützen den EPC-konformen SEPA-QR-Code für internationale SEPA-Überweisungen. Für inländische Zahlungen in CHF nutzen alle Kantonalbanken die QR-Rechnung (Swiss QR Bill).',
  },
  {
    question: 'Wie finde ich den QR-Scanner in meiner Kantonalbank-App?',
    answer:
      'In den meisten Kantonalbank-Apps findest du den QR-Scanner unter „Zahlungen" oder „Überweisen". Wähle SEPA-Überweisung und tippe auf das QR-Code-Symbol.',
  },
  {
    question: 'Was ist der Unterschied zwischen GiroCode und QR-Rechnung?',
    answer:
      'Der GiroCode (EPC-Standard) ist für SEPA-Überweisungen ins europäische Ausland in EUR. Die QR-Rechnung (Swiss QR Bill) ist der Schweizer Standard für inländische Zahlungen in CHF. Beide nutzen QR-Codes, sind aber technisch unterschiedlich.',
  },
  {
    question: 'Gibt es eine einheitliche App für alle Kantonalbanken?',
    answer:
      'Nein, jede Kantonalbank hat ihre eigene Mobile-Banking-App. Die Benutzeroberflächen sind unterschiedlich, aber der grundlegende Ablauf für GiroCode-Scans (SEPA-Überweisung → QR-Symbol) ist sehr ähnlich.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function CantonalBanksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">

          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li><Link href="/" className="text-sky-400 hover:text-sky-300">Startseite</Link></li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">Schweizer Kantonalbanken</li>
            </ol>
          </nav>

          <header className="mb-10 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Kompatibel mit Kantonalbank Mobile Apps
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode mit Schweizer Kantonalbanken scannen
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              Übersicht aller Schweizer Kantonalbanken und ihrer Banking-Apps für GiroCode-Scans
              (SEPA-QR-Überweisungen ins europäische Ausland).
            </p>
          </header>

          {/* Schweiz-Hinweis */}
          <div className="mb-8 rounded-xl border border-amber-500/30 bg-amber-500/10 px-5 py-4">
            <p className="text-sm font-medium text-amber-300">
              <strong>Hinweis:</strong> Für inländische Schweizer Zahlungen in CHF wird die{' '}
              <strong>QR-Rechnung (Swiss QR Bill)</strong> verwendet. GiroCodes (EPC-Standard)
              sind für SEPA-Auslandsüberweisungen in EUR.
            </p>
          </div>

          <article className="prose prose-invert prose-lg max-w-none">

            {/* Übersicht Kantonalbanken */}
            <section aria-labelledby="uebersicht">
              <h2 id="uebersicht">Übersicht: Schweizer Kantonalbanken und ihre Apps</h2>
              <p>
                Die Schweiz hat 24 Kantonalbanken. Alle wichtigen Kantonalbanken bieten eine eigene
                Mobile-Banking-App mit Unterstützung für SEPA-QR-Codes (GiroCodes) bei
                internationalen Überweisungen:
              </p>

              <div className="not-prose my-6 overflow-x-auto rounded-lg border border-slate-700">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-800 text-slate-300">
                      <th className="px-4 py-3 text-left font-medium">Kantonalbank</th>
                      <th className="px-4 py-3 text-left font-medium">App</th>
                      <th className="px-4 py-3 text-center font-medium">GiroCode</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50 text-slate-300">
                    {cantonalBanks.map((bank, i) => (
                      <tr key={bank.name} className={i % 2 === 1 ? 'bg-slate-800/30' : ''}>
                        <td className="px-4 py-3 font-medium">
                          {bank.href ? (
                            <Link href={bank.href} className="text-sky-400 hover:text-sky-300">
                              {bank.name}
                            </Link>
                          ) : bank.name}
                        </td>
                        <td className="px-4 py-3 text-slate-400">{bank.app}</td>
                        <td className="px-4 py-3 text-center text-emerald-400">✅</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Allgemeine Anleitung */}
            <section aria-labelledby="anleitung" className="mt-8">
              <h2 id="anleitung">Allgemeine Anleitung für alle Kantonalbank-Apps</h2>
              <p>
                Der grundlegende Ablauf ist in allen Kantonalbank-Apps sehr ähnlich:
              </p>
              <ol>
                <li>
                  <strong>Mobile Banking App öffnen</strong> und anmelden.
                </li>
                <li>
                  <strong>„Zahlungen"</strong> oder „Überweisen" im Hauptmenü auswählen.
                </li>
                <li>
                  <strong>SEPA-Überweisung</strong> oder Auslandszahlung wählen.
                </li>
                <li>
                  <strong>QR-Code-Symbol</strong> antippen und Kamera-Berechtigung erteilen.
                </li>
                <li>
                  <strong>GiroCode scannen</strong> – Kamera auf den Code richten (15–30 cm Abstand).
                </li>
                <li>
                  <strong>Daten prüfen</strong> und Zahlung freigeben.
                </li>
              </ol>
            </section>

            <section aria-labelledby="browser-scanner" className="mt-10">
              <h2 id="browser-scanner">GiroCode direkt im Browser scannen</h2>
              <p>
                Unser kostenloser Browser-Scanner liest GiroCodes direkt im Browser aus –
                ohne App, ohne Installation, 100&nbsp;% lokal.
              </p>
              <div className="not-prose mt-4">
                <Link
                  href="/scanner"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,197,94,0.4)]"
                  style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: '#ffffff' }}
                >
                  GiroCode jetzt scannen →
                </Link>
              </div>
            </section>

            <section aria-labelledby="erstellen" className="mt-10">
              <h2 id="erstellen">Eigenen GiroCode erstellen</h2>
              <p>
                Erstelle kostenlos einen EPC-konformen SEPA-QR-Code – kompatibel mit allen
                Schweizer Kantonalbank-Apps und deutschen Banking-Apps.
              </p>
              <div className="not-prose mt-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,197,94,0.4)]"
                  style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: '#ffffff' }}
                >
                  Jetzt GiroCode erstellen →
                </Link>
              </div>
            </section>

            <section aria-labelledby="faq" className="mt-10">
              <h2 id="faq">Häufige Fragen – GiroCode mit Kantonalbanken</h2>
              <div className="not-prose space-y-4">
                {faqItems.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-xl border border-slate-700 bg-slate-900/60 px-5 py-4"
                  >
                    <h3 className="mb-2 text-sm font-bold text-[#e8eaf0]">{item.question}</h3>
                    <p className="text-sm text-slate-400">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>

          </article>

          <div className="mt-12 border-t border-slate-800 pt-8">
            <h2 className="mb-4 text-base font-bold text-[#e8eaf0]">Weitere Banking-Apps</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {otherBanks.map((bank) => (
                <Link
                  key={bank.href}
                  href={bank.href}
                  className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:text-[#e8eaf0] hover:-translate-y-0.5"
                >
                  <span>GiroCode mit {bank.label}</span>
                  <span className="ml-2 text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
