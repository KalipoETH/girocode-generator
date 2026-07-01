import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GiroCode mit Volksbank Raiffeisenbank scannen – 2026',
  description:
    'GiroCode mit der VR-Banking App (Volksbank Raiffeisenbank) scannen: QR-Scanner unter „Überweisungen", Code scannen, bestätigen. ✅ Gilt für alle regionalen Volksbanken.',
  keywords: 'girocode volksbank raiffeisenbank, vr banking app qr code, volksbank raiffeisenbank girocode, vr banking überweisung qr',
  alternates: {
    canonical: `${SITE_URL}/volksbank-raiffeisenbank`,
  },
};

const otherBanks = [
  { href: '/volksbank', label: 'Volksbank (allgemein)' },
  { href: '/sparkasse', label: 'Sparkasse' },
  { href: '/ing', label: 'ING' },
  { href: '/dkb', label: 'DKB' },
  { href: '/commerzbank', label: 'Commerzbank' },
  { href: '/deutsche-bank', label: 'Deutsche Bank' },
  { href: '/volksbank-oesterreich', label: 'Volksbank Österreich' },
  { href: '/n26', label: 'N26' },
];

const faqItems = [
  {
    question: 'Gilt diese Anleitung für alle Volksbanken und Raiffeisenbanken?',
    answer:
      'Ja, alle regionalen Volksbanken und Raiffeisenbanken in Deutschland nutzen die einheitliche VR-Banking App. Der Weg zum GiroCode-Scanner ist überall identisch.',
  },
  {
    question: 'Wo finde ich den QR-Scanner in der VR-Banking App?',
    answer:
      'Den QR-Scanner findest du unter „Überweisen" – dort gibt es ein Scan-Symbol (Kamera oder QR-Icon). Tippe darauf, um den Scanner zu starten.',
  },
  {
    question: 'Was ist der Unterschied zwischen Volksbank und Raiffeisenbank?',
    answer:
      'Volksbanken und Raiffeisenbanken sind beides Genossenschaftsbanken und Teil des BVR (Bundesverband der Deutschen Volksbanken und Raiffeisenbanken). Sie nutzen dieselbe VR-Banking App und haben identische GiroCode-Scanner-Funktionalität.',
  },
  {
    question: 'Funktioniert die VR SecureGo Plus App auch zum Scannen?',
    answer:
      'Die VR SecureGo Plus App ist primär für die TAN-Freigabe gedacht. Den GiroCode scannen kannst du in der VR-Banking App. Die TAN-Bestätigung erfolgt dann über VR SecureGo Plus oder chipTAN.',
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

export default function VolksbankRaiffeisenBankPage() {
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
              <li className="text-slate-400">Volksbank Raiffeisenbank</li>
            </ol>
          </nav>

          <header className="mb-10 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Kompatibel mit VR-Banking App
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode mit Volksbank Raiffeisenbank scannen
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              So nutzt du GiroCodes (SEPA-QR-Codes) mit der VR-Banking App –
              Schritt für Schritt erklärt. Gilt für alle regionalen Volksbanken und Raiffeisenbanken
              in Deutschland.
            </p>
          </header>

          <article className="prose prose-invert prose-lg max-w-none">

            <section aria-labelledby="anleitung">
              <h2 id="anleitung">Schritt-für-Schritt Anleitung</h2>
              <ol>
                <li>
                  <strong>VR-Banking App öffnen</strong> und einloggen.
                </li>
                <li>
                  <strong>„Überweisen"</strong> antippen.
                </li>
                <li>
                  <strong>Scan-Symbol (QR-Icon)</strong> im Überweisungsformular antippen und
                  Kamera-Berechtigung erteilen.
                </li>
                <li>
                  <strong>GiroCode scannen</strong> – Kamera auf den Code richten (15–30 cm Abstand).
                </li>
                <li>
                  <strong>Daten prüfen:</strong> Empfängername, IBAN, Betrag und Verwendungszweck
                  kontrollieren. Nie blind bestätigen!
                </li>
                <li>
                  <strong>Überweisung bestätigen</strong> mit VR SecureGo Plus oder chipTAN.
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
                Erstelle kostenlos einen EPC-konformen SEPA-QR-Code – kompatibel mit der
                VR-Banking App und allen anderen deutschen Banking-Apps.
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
              <h2 id="faq">Häufige Fragen – GiroCode mit Volksbank Raiffeisenbank</h2>
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
