import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GiroCode mit deiner Bank – alle Anleitungen (DE/AT/CH)',
  description:
    'Verzeichnis aller Bank-Anleitungen für den GiroCode: Sparkassen, Volks- & Raiffeisenbanken, Groß- und Direktbanken sowie Institute in Österreich und der Schweiz. Wähle deine Bank und öffne die passende Schritt-für-Schritt-Anleitung.',
  keywords:
    'girocode banken, girocode bank anleitung, welche banken girocode, sepa qr bank, girocode österreich, girocode schweiz, girocode verzeichnis',
  alternates: {
    canonical: `${SITE_URL}/banken`,
  },
};

type BankEntry = { name: string; slug: string; hint: string };
type BankGroup = { title: string; intro: string; banks: BankEntry[] };

const bankGroups: BankGroup[] = [
  {
    title: 'Sparkassen',
    intro: 'Die Sparkassen-App und S-pushTAN erkennen alle EPC-konformen GiroCodes.',
    banks: [
      { name: 'Sparkasse', slug: '/sparkasse', hint: 'Sparkassen-App / S-pushTAN' },
      { name: 'Berliner Sparkasse', slug: '/berliner-sparkasse', hint: 'Berliner Sparkasse App' },
      { name: 'Hamburger Sparkasse', slug: '/hamburger-sparkasse', hint: 'Haspa App' },
      { name: 'Kreissparkasse', slug: '/kreissparkasse', hint: 'Sparkassen-App' },
      { name: 'Stadtsparkasse', slug: '/stadtsparkasse', hint: 'Sparkassen-App' },
      { name: 'Sparkasse KölnBonn', slug: '/sparkasse-koeln-bonn', hint: 'Sparkassen-App' },
      { name: 'Ostsächsische Sparkasse', slug: '/ostsaechsische-sparkasse', hint: 'OSD Dresden' },
    ],
  },
  {
    title: 'Volks- & Raiffeisenbanken',
    intro: 'In der VR-BankingApp führt der Weg zum Scanner über „Überweisung“.',
    banks: [
      { name: 'Volksbank', slug: '/volksbank', hint: 'VR-Banking / VR BankingApp' },
      { name: 'Volksbank Raiffeisenbank', slug: '/volksbank-raiffeisenbank', hint: 'VR-Banking' },
    ],
  },
  {
    title: 'Groß- & Filialbanken',
    intro: 'Deutsche Bank, Commerzbank & Co. bieten den QR-Scanner in ihrer Mobile-Banking-App.',
    banks: [
      { name: 'Deutsche Bank', slug: '/deutsche-bank', hint: 'Deutsche Bank Mobile' },
      { name: 'Commerzbank', slug: '/commerzbank', hint: 'Commerzbank App' },
      { name: 'Postbank', slug: '/postbank', hint: 'Postbank Finanzassistent' },
      { name: 'HypoVereinsbank', slug: '/hypovereinsbank', hint: 'HVB Mobile Banking' },
      { name: 'Targobank', slug: '/targobank', hint: 'Targobank Mobile Banking' },
      { name: 'Santander', slug: '/santander', hint: 'Santander Banking App' },
    ],
  },
  {
    title: 'Direktbanken',
    intro: 'Direktbanken ohne Filialnetz – der GiroCode-Scan läuft komplett in der App.',
    banks: [
      { name: 'ING', slug: '/ing', hint: 'ING Banking to go' },
      { name: 'ING-DiBa', slug: '/ing-diba', hint: 'jetzt ING Deutschland' },
      { name: 'DKB', slug: '/dkb', hint: 'DKB-App' },
      { name: 'N26', slug: '/n26', hint: 'N26 App' },
      { name: 'Comdirect', slug: '/comdirect', hint: 'comdirect App' },
    ],
  },
  {
    title: '🇦🇹 Österreich',
    intro: 'Österreichische Banken nutzen den Stuzza-QR auf Basis des EPC-Standards.',
    banks: [
      { name: 'Erste Bank & Sparkasse', slug: '/erste-bank', hint: 'George' },
      { name: 'Bank Austria', slug: '/bank-austria', hint: 'BankAustria MobileBanking' },
      { name: 'BAWAG P.S.K.', slug: '/bawag', hint: 'BAWAG App' },
      { name: 'Raiffeisen Österreich', slug: '/raiffeisen-oesterreich', hint: 'Mein ELBA' },
      { name: 'Volksbank Österreich', slug: '/volksbank-oesterreich', hint: 'Volksbank Banking' },
      { name: 'Oberbank', slug: '/oberbank', hint: 'Oberbank App' },
      { name: 'BKS Bank', slug: '/bks-bank', hint: 'BKS MyNet' },
      { name: 'Hypo Österreich', slug: '/hypo-oesterreich', hint: 'Hypo Mobile Banking' },
    ],
  },
  {
    title: '🇨🇭 Schweiz',
    intro: 'In der Schweiz basiert die QR-Rechnung auf demselben QR-Zahlungsstandard.',
    banks: [
      { name: 'UBS', slug: '/ubs', hint: 'UBS Mobile Banking' },
      { name: 'Credit Suisse / UBS', slug: '/credit-suisse-ubs', hint: 'CS & UBS App' },
      { name: 'PostFinance', slug: '/postfinance', hint: 'PostFinance App' },
      { name: 'Raiffeisen Schweiz', slug: '/raiffeisen-schweiz', hint: 'Raiffeisen App' },
      { name: 'Zürcher Kantonalbank', slug: '/zuercher-kantonalbank', hint: 'ZKB Mobile Banking' },
      { name: 'Kantonalbanken', slug: '/cantonal-banks', hint: 'Kantonalbank-Apps' },
    ],
  },
];

const faqItems = [
  {
    question: 'Unterstützt meine Bank den GiroCode?',
    answer:
      'Nahezu alle Banken im deutschsprachigen Raum unterstützen den GiroCode (SEPA-QR-Code), da er auf dem einheitlichen EPC-Standard beruht. In der Liste oben findest du über 30 Institute aus Deutschland, Österreich und der Schweiz mit jeweils eigener Anleitung. Ist deine Bank nicht dabei, funktioniert der Scan in der Regel trotzdem – prüfe den Menüpunkt „Überweisung“ in deiner Banking-App.',
  },
  {
    question: 'Wie finde ich die richtige Anleitung für meine Bank?',
    answer:
      'Wähle oben deine Bankengruppe (z. B. Sparkassen oder Direktbanken) und tippe auf dein Institut. Du gelangst direkt zu einer Schritt-für-Schritt-Anleitung, die zeigt, wo der QR-Scanner in genau dieser App sitzt und wie die Überweisung bestätigt wird.',
  },
  {
    question: 'Funktioniert ein GiroCode bei jeder Bank gleich?',
    answer:
      'Der GiroCode selbst ist bei jeder Bank identisch, weil er dem EPC-Standard folgt. Unterschiedlich ist nur, wo der QR-Scanner in der jeweiligen Banking-App zu finden ist. Genau diese Unterschiede beschreiben die einzelnen Bank-Anleitungen.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Banken', item: `${SITE_URL}/banken` },
      ],
    },
    {
      '@type': 'CollectionPage',
      name: 'GiroCode mit deiner Bank – alle Anleitungen',
      description:
        'Verzeichnis aller Bank-Anleitungen für den GiroCode (SEPA-QR-Code) in Deutschland, Österreich und der Schweiz.',
      url: `${SITE_URL}/banken`,
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: bankGroups
          .flatMap((g) => g.banks)
          .map((b, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: `GiroCode mit ${b.name}`,
            url: `${SITE_URL}${b.slug}`,
          })),
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

export default function BankenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-4xl px-4 py-10 md:py-12">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/" className="text-sky-400 hover:text-sky-300">Startseite</Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">Banken</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="mb-10 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Über 30 Banken · DE · AT · CH
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode mit deiner Bank – alle Anleitungen
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              Über 30 Banken im deutschsprachigen Raum unterstützen den GiroCode (SEPA-QR-Code) – von den
              Sparkassen über Volks- und Raiffeisenbanken bis zu Direktbanken und Instituten in Österreich
              und der Schweiz. Wähle unten dein Institut aus und du gelangst direkt zur passenden
              Schritt-für-Schritt-Anleitung für deine Banking-App.
            </p>
          </header>

          {/* Bankengruppen */}
          <div className="space-y-10">
            {bankGroups.map((group) => (
              <section key={group.title} aria-label={group.title} className="space-y-4">
                <div className="space-y-1">
                  <h2 className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
                    {group.title}
                  </h2>
                  <p className="text-sm text-[#8b90a0]">{group.intro}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.banks.map((bank) => (
                    <Link
                      key={bank.slug}
                      href={bank.slug}
                      className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3 transition-all duration-200 hover:border-emerald-500/40 hover:bg-[#1a1d25]"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-[14px] font-bold text-[#e8eaf0]">{bank.name}</p>
                        <p className="truncate text-[11px] text-[#8b90a0]">{bank.hint}</p>
                      </div>
                      <span className="ml-2 flex-shrink-0 text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Weiterführend + CTA */}
          <section aria-label="Weiterführende Infos" className="mt-12 border-t border-slate-800 pt-8">
            <div className="rounded-2xl border border-[#1f2431] bg-[#121318] px-6 py-6">
              <h2 className="text-base font-bold text-[#e8eaf0] md:text-lg">
                Eigenen GiroCode erstellen
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-400">
                Du möchtest keinen Code scannen, sondern selbst einen erzeugen? Der kostenlose
                GiroCode-Generator erstellt einen EPC-konformen SEPA-QR-Code direkt im Browser –
                ohne Registrierung, ohne Datenweitergabe.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,197,94,0.4)]"
                  style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: '#ffffff' }}
                >
                  Jetzt GiroCode erstellen →
                </Link>
                <Link
                  href="/wissen/banking-apps"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[#22c55e] hover:text-emerald-300"
                >
                  Welche Banking-Apps können GiroCodes scannen?
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq" className="mt-12">
            <h2 id="faq" className="mb-4 text-base font-bold text-[#e8eaf0] md:text-lg">
              Häufige Fragen
            </h2>
            <div className="space-y-4">
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

        </div>
      </main>
    </>
  );
}
