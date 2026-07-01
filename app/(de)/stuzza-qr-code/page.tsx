import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Stuzza QR Code Generator – Kostenlos erstellen 2026',
  description:
    'Stuzza QR Code (= GiroCode/EPC-QR) kostenlos erstellen. Der österreichische SEPA-QR-Standard. Kompatibel mit george App, ELBA und allen österreichischen Banking-Apps.',
  keywords:
    'Stuzza QR Code, Stuzza QR Code Generator, george App GiroCode, ELBA QR Code, SEPA QR Österreich',
  alternates: {
    canonical: `${SITE_URL}/stuzza-qr-code`,
  },
};

const austrianBanks = [
  { href: '/erste-bank', label: 'Erste Bank / George App' },
  { href: '/raiffeisen-oesterreich', label: 'Raiffeisen Österreich (ELBA)' },
  { href: '/bank-austria', label: 'Bank Austria' },
  { href: '/bawag', label: 'BAWAG' },
  { href: '/volksbank-oesterreich', label: 'Volksbank Österreich' },
  { href: '/hypo-oesterreich', label: 'Hypo Österreich' },
  { href: '/oberbank', label: 'Oberbank' },
  { href: '/bks-bank', label: 'BKS Bank' },
];

const faqs = [
  {
    q: 'Was ist ein Stuzza QR Code?',
    a: 'Der Stuzza QR Code ist die österreichische Bezeichnung für den GiroCode (EPC-QR-Code). Er basiert auf dem EPC069-12 Standard und enthält alle Zahlungsdaten für SEPA-Überweisungen.',
  },
  {
    q: 'Ist Stuzza QR Code dasselbe wie GiroCode?',
    a: 'Ja. Stuzza QR Code, GiroCode und EPC-QR-Code bezeichnen denselben Standard EPC069-12. Stuzza ist der österreichische Markenname, GiroCode der deutsche.',
  },
  {
    q: 'Welche österreichischen Banking-Apps unterstützen Stuzza QR Codes?',
    a: 'Alle großen österreichischen Banking-Apps: George (Erste Bank), ELBA (Raiffeisen), Bank Austria, BAWAG, Volksbank Österreich, Hypo Österreich, Oberbank und BKS Bank.',
  },
  {
    q: 'Kann ich deutsche GiroCodes in Österreich scannen?',
    a: 'Ja. Da beide denselben EPC069-12 Standard nutzen, funktionieren deutsche GiroCodes und österreichische Stuzza QR Codes gegenseitig in allen SEPA-Banking-Apps.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const stats = [
  { value: 'EPC069-12', label: 'Gleicher Standard' },
  { value: 'George', label: 'Erste Bank App' },
  { value: 'ELBA', label: 'Raiffeisen App' },
  { value: '100%', label: 'Kostenlos' },
];

const relatedLinks = [
  { href: '/epc-qr-code', label: 'EPC QR Code Generator' },
  { href: '/sepa-qr-code', label: 'SEPA QR Code Generator' },
  { href: '/wissen/girocode', label: 'Was ist ein GiroCode?' },
  { href: '/wissen/epc-standard', label: 'EPC-Standard erklärt' },
];

export default function StuzzaQrCodePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/" className="text-sky-400 hover:text-sky-300">
                  Startseite
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">Stuzza QR Code Generator</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Österreich · EPC069-12 / Stuzza
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              Stuzza QR Code Generator
            </h1>
          </header>

          <div
            className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3"
            role="note"
          >
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">
              💡 Kurzantwort
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              Der Stuzza QR Code ist die österreichische Bezeichnung für den GiroCode
              (EPC-QR-Code). Er basiert auf demselben EPC069-12 Standard und ist mit allen
              österreichischen Banking-Apps (George, ELBA, BAWAG etc.) kompatibel.
            </p>
          </div>

          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-lg border border-[#1f2431] bg-[#0f1117] p-4 text-center"
              >
                <p className="text-2xl font-bold text-[#22c55e]">{s.value}</p>
                <p className="mt-1 text-xs leading-snug text-[#8b90a0]">{s.label}</p>
              </div>
            ))}
          </div>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2>Was ist ein Stuzza QR Code?</h2>
            <p>
              Der <strong>Stuzza QR Code</strong> ist die österreichische Bezeichnung für den
              standardisierten SEPA-QR-Code. Stuzza (Standardisierungsstelle der
              österreichischen Finanzmarktaufsicht) hat den EPC069-12 Standard für den
              österreichischen Markt adaptiert. Technisch ist ein Stuzza QR Code identisch mit
              einem deutschen GiroCode oder internationalem EPC-QR-Code.
            </p>
            <p>
              Beim Scannen mit der George App, ELBA oder einer anderen österreichischen
              Banking-App werden IBAN, Empfängername, Betrag und Verwendungszweck automatisch
              ausgefüllt – der Nutzer muss nur noch bestätigen.
            </p>

            <h2>Stuzza QR Code vs. GiroCode – gleicher Standard</h2>
            <ul>
              <li>
                <strong>Stuzza QR Code</strong> – österreichischer Markenname
              </li>
              <li>
                <strong>GiroCode</strong> – deutscher Markenname
              </li>
              <li>
                <strong>EPC-QR-Code</strong> – internationaler technischer Name
              </li>
            </ul>
            <p>
              Alle drei bezeichnen denselben EPC069-12 Standard. Codes aus Deutschland
              funktionieren in Österreich und umgekehrt.
            </p>

            <h2>Stuzza QR Code erstellen – Schritt für Schritt</h2>
            <ol>
              <li>IBAN und Empfängername eingeben</li>
              <li>Optional Betrag und Verwendungszweck hinzufügen</li>
              <li>Auf Generieren klicken – der Stuzza-kompatible QR-Code erscheint sofort</li>
              <li>Als PNG herunterladen oder in Rechnung einfügen</li>
            </ol>

            <div className="not-prose my-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
              >
                Stuzza QR Code jetzt erstellen →
              </Link>
            </div>

            <h2>Österreichische Banking-Apps</h2>
            <p>
              Stuzza QR Codes werden von allen großen österreichischen Banking-Apps unterstützt:
            </p>
            <div className="not-prose mb-6 grid gap-3 sm:grid-cols-2">
              {austrianBanks.map((bank) => (
                <Link
                  key={bank.href}
                  href={bank.href}
                  className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3 transition-all duration-200 hover:border-emerald-500/40 hover:bg-[#1a1d25]"
                >
                  <span className="text-sm font-medium text-[#e8eaf0]">{bank.label}</span>
                  <span className="text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ))}
            </div>

            <h2>FAQ</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-base font-semibold text-[#e8eaf0]">{faq.q}</h3>
                  <p className="mt-1 text-sm text-slate-300">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="not-prose mt-10 rounded-2xl border border-[#1f2431] bg-[#0f1117] p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xl" aria-hidden>
                  📚
                </span>
                <h2 className="text-base font-bold text-[#e8eaf0]">Weitere Artikel</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {relatedLinks.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3.5 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/30 hover:text-[#e8eaf0] hover:-translate-y-0.5"
                  >
                    <span className="leading-snug">{a.label}</span>
                    <span className="ml-3 shrink-0 text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
