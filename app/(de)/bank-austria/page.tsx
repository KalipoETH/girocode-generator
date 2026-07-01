import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GiroCode mit Bank Austria / UniCredit scannen – Anleitung',
  description:
    'GiroCode mit der Bank Austria MobileBanking App scannen: QR-Scanner im Überweisungsbereich öffnen, Code scannen, bestätigen. ✅ Schritt-für-Schritt Anleitung 2026.',
  keywords: 'girocode bank austria, bank austria qr code, unicredit mobilebanking girocode, bank austria überweisung qr',
  alternates: {
    canonical: `${SITE_URL}/bank-austria`,
  },
};

const otherBanks = [
  { href: '/erste-bank', label: 'Erste Bank / George App' },
  { href: '/raiffeisen-oesterreich', label: 'Raiffeisen Österreich' },
  { href: '/bawag', label: 'BAWAG' },
  { href: '/volksbank-oesterreich', label: 'Volksbank Österreich' },
  { href: '/hypovereinsbank', label: 'HypoVereinsbank (UniCredit DE)' },
  { href: '/sparkasse', label: 'Sparkasse (Deutschland)' },
  { href: '/deutsche-bank', label: 'Deutsche Bank' },
  { href: '/commerzbank', label: 'Commerzbank' },
];

const faqItems = [
  {
    question: 'Wo finde ich den QR-Scanner in der Bank Austria App?',
    answer:
      'In der Bank Austria MobileBanking App findest du den QR-Scanner im Überweisungsbereich. Tippe auf „Überweisen" und wähle die QR-Code-Option, um den Scanner zu starten.',
  },
  {
    question: 'Ist Bank Austria und UniCredit dasselbe?',
    answer:
      'Bank Austria ist die österreichische Tochtergesellschaft der UniCredit Group. Die MobileBanking App läuft unter dem Brand „Bank Austria", bietet aber den gleichen Leistungsumfang. GiroCodes werden vollständig unterstützt.',
  },
  {
    question: 'Funktioniert der Scan auch mit deutschen GiroCodes?',
    answer:
      'Ja, die Bank Austria App unterstützt den EPC-Standard. GiroCodes aus Deutschland und Österreich sind vollständig kompatibel, da beide den gleichen SEPA-QR-Standard verwenden.',
  },
  {
    question: 'Was tun, wenn der Scan nicht funktioniert?',
    answer:
      'Aktualisiere die Bank Austria App im App Store. Erhöhe die Bildschirmhelligkeit beim Scannen digitaler Codes und halte die Kamera ruhig und ca. 15–30 cm vom GiroCode entfernt.',
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

export default function BankAustriaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/" className="text-sky-400 hover:text-sky-300">Startseite</Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">Bank Austria</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="mb-10 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Kompatibel mit Bank Austria App
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode mit der Bank Austria App scannen
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              So nutzt du GiroCodes (SEPA-QR-Codes) mit der Bank Austria MobileBanking App (UniCredit) –
              Schritt für Schritt erklärt.
            </p>
          </header>

          <article className="prose prose-invert prose-lg max-w-none">

            <section aria-labelledby="anleitung">
              <h2 id="anleitung">Schritt-für-Schritt Anleitung</h2>
              <p>
                Die Bank Austria MobileBanking App bietet einen integrierten QR-Code-Scanner
                im Überweisungsbereich. So gehst du vor:
              </p>
              <ol>
                <li>
                  <strong>Bank Austria App öffnen</strong> und mit PIN oder biometrischen Daten anmelden.
                </li>
                <li>
                  <strong>„Überweisen"</strong> im Hauptmenü auswählen.
                </li>
                <li>
                  <strong>QR-Code-Scanner</strong> im Überweisungsdialog antippen. Bei erster
                  Nutzung Kamera-Berechtigung erteilen.
                </li>
                <li>
                  <strong>GiroCode scannen</strong> – Kamera auf den Code richten (15–30 cm Abstand).
                </li>
                <li>
                  <strong>Daten prüfen:</strong> IBAN, Empfängername, Betrag und Verwendungszweck
                  werden automatisch befüllt. Stets vor Bestätigung kontrollieren!
                </li>
                <li>
                  <strong>Überweisung freigeben</strong> mit Mobile TAN oder biometrischer
                  Authentifizierung.
                </li>
              </ol>
            </section>

            <section aria-labelledby="browser-scanner" className="mt-10">
              <h2 id="browser-scanner">GiroCode direkt im Browser scannen</h2>
              <p>
                Kein Smartphone zur Hand? Unser kostenloser Browser-Scanner liest GiroCodes
                direkt im Browser aus – ohne App, ohne Installation, 100&nbsp;% lokal.
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
                Du möchtest selbst einen GiroCode für deine Rechnung erstellen? Unser kostenloser
                Generator erzeugt EPC-konforme SEPA-QR-Codes – kompatibel mit der Bank Austria App
                und allen anderen Banking-Apps.
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
              <h2 id="faq">Häufige Fragen – GiroCode mit Bank Austria</h2>
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
