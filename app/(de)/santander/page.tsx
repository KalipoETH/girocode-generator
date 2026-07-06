import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GiroCode mit Santander Bank scannen – Anleitung 2026',
  description:
    'GiroCode mit der Santander Banking App scannen: QR-Scanner im Überweisungsbereich öffnen, Code scannen, Überweisung bestätigen. ✅ Schritt-für-Schritt Anleitung 2026.',
  keywords: 'girocode santander, santander banking app qr code, santander girocode scannen, santander sepa qr überweisung',
  alternates: {
    canonical: `${SITE_URL}/santander`,
  },
};

const otherBanks = [
  { href: '/deutsche-bank', label: 'Deutsche Bank' },
  { href: '/commerzbank', label: 'Commerzbank' },
  { href: '/ing', label: 'ING' },
  { href: '/dkb', label: 'DKB' },
  { href: '/hypovereinsbank', label: 'HypoVereinsbank (HVB)' },
  { href: '/sparkasse', label: 'Sparkasse' },
  { href: '/volksbank', label: 'Volksbank / VR-Banking' },
  { href: '/n26', label: 'N26' },
];

const faqItems = [
  {
    question: 'Unterstützt die Santander Banking App GiroCodes?',
    answer:
      'Ja, die Santander Banking App unterstützt den EPC-konformen SEPA-QR-Code-Standard (GiroCode). Den QR-Scanner findest du im Überweisungsbereich der App.',
  },
  {
    question: 'Wo finde ich den QR-Scanner in der Santander App?',
    answer:
      'Öffne die Santander Banking App und navigiere zu „Überweisung" oder „Zahlungen". Dort findest du ein QR-Code-Symbol oder Kamera-Symbol, mit dem du den Scanner aktivieren kannst.',
  },
  {
    question: 'Was ist Santander Bank in Deutschland?',
    answer:
      'Santander Bank Filiale Deutschland GmbH ist die deutsche Tochtergesellschaft der spanischen Banco Santander, einer der größten Banken Europas. Sie bietet Privat- und Geschäftskunden vollständige Banking-Dienstleistungen an.',
  },
  {
    question: 'Was tun, wenn der Scan nicht funktioniert?',
    answer:
      'Stelle sicher, dass die Santander Banking App aktuell ist. Erhöhe die Bildschirmhelligkeit beim Scannen digitaler Codes und halte die Kamera ca. 15–30 cm vom Code entfernt.',
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

export default function SantanderPage() {
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
              <li className="text-slate-400">Santander</li>
            </ol>
          </nav>

          <header className="mb-10 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Kompatibel mit Santander Banking App
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode mit der Santander App scannen
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              So nutzt du GiroCodes (SEPA-QR-Codes) mit der Santander Banking App –
              Schritt für Schritt erklärt. In weniger als 30 Sekunden ist die Überweisung erledigt.
            </p>
          </header>

          <article className="prose prose-invert prose-lg max-w-none">

            <section aria-labelledby="anleitung">
              <h2 id="anleitung">Schritt-für-Schritt Anleitung</h2>
              <ol>
                <li>
                  <strong>Santander Banking App öffnen</strong> und mit PIN oder biometrischen
                  Daten anmelden.
                </li>
                <li>
                  <strong>„Überweisung"</strong> oder „Zahlungen" im Hauptmenü auswählen.
                </li>
                <li>
                  <strong>QR-Code-Symbol</strong> antippen und Kamera-Berechtigung erteilen.
                </li>
                <li>
                  <strong>GiroCode scannen</strong> – Kamera auf den Code richten (15–30 cm Abstand).
                </li>
                <li>
                  <strong>Daten prüfen:</strong> Empfängername, IBAN, Betrag und Verwendungszweck
                  kontrollieren. Nie blind bestätigen!
                </li>
                <li>
                  <strong>Überweisung bestätigen</strong> mit TAN oder biometrischer Freigabe.
                </li>
              </ol>
              <p>
                <strong>Tipp:</strong> Beim Scannen von Bildschirmen die Display-Helligkeit auf
                Maximum stellen und Reflexionen vermeiden.
              </p>
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
                Erstelle kostenlos einen EPC-konformen SEPA-QR-Code – kompatibel mit der Santander
                Banking App und allen anderen deutschen Banking-Apps.
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
              <h2 id="faq">Häufige Fragen – GiroCode mit Santander</h2>
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
              <Link
                href="/banken"
                className="group flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-bold text-[#e8eaf0] transition-all duration-200 hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:-translate-y-0.5 sm:col-span-2"
              >
                <span>Alle Banken im Überblick</span>
                <span className="ml-2 text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/girocode-funktioniert-nicht"
                className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:text-[#e8eaf0] sm:col-span-2"
              >
                <span>GiroCode wird nicht erkannt? Zur Fehlerbehebung</span>
                <span className="ml-2 text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
