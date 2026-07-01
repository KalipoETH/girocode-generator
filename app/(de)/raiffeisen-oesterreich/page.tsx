import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode mit Raiffeisen Österreich scannen – Anleitung 2026',
  description:
    'GiroCode mit der Raiffeisen ELBA-App scannen: Unter „Zahlungen" → „QR-Code scannen" öffnen, Code erfassen, Überweisung bestätigen. ✅ Schritt-für-Schritt Anleitung.',
  keywords: 'girocode raiffeisen österreich, elba app qr code, raiffeisen elba girocode scannen, sepa qr österreich',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/raiffeisen-oesterreich',
  },
};

const otherBanks = [
  { href: '/erste-bank', label: 'Erste Bank / George App' },
  { href: '/bank-austria', label: 'Bank Austria' },
  { href: '/bawag', label: 'BAWAG' },
  { href: '/volksbank-oesterreich', label: 'Volksbank Österreich' },
  { href: '/raiffeisen-schweiz', label: 'Raiffeisen Schweiz' },
  { href: '/sparkasse', label: 'Sparkasse (Deutschland)' },
  { href: '/volksbank', label: 'Volksbank / VR-Banking' },
  { href: '/dkb', label: 'DKB' },
];

const faqItems = [
  {
    question: 'Wo finde ich den QR-Scanner in der ELBA-App?',
    answer:
      'In der Raiffeisen ELBA-App findest du den QR-Scanner unter „Zahlungen" → „QR-Code scannen". Tippe auf den Menüpunkt, erteile die Kamera-Berechtigung und scanne den GiroCode.',
  },
  {
    question: 'Unterstützt die ELBA-App alle GiroCodes?',
    answer:
      'Ja, die Raiffeisen ELBA-App erkennt alle EPC-konformen SEPA-QR-Codes (GiroCodes). Stelle sicher, dass du die aktuelle App-Version aus dem App Store installiert hast.',
  },
  {
    question: 'Was ist der Unterschied zwischen Raiffeisen Österreich und Raiffeisen Schweiz?',
    answer:
      'Raiffeisen Österreich verwendet die ELBA-App, Raiffeisen Schweiz hat eine eigene E-Banking App. Beide unterstützen SEPA-QR-Codes (GiroCodes), aber die Menüführung unterscheidet sich.',
  },
  {
    question: 'Was tun wenn der Scan fehlschlägt?',
    answer:
      'Erhöhe die Bildschirmhelligkeit, halte die Kamera ca. 15–30 cm vom Code entfernt und sorge für gute Beleuchtung. Stelle sicher, dass die ELBA-App auf dem neuesten Stand ist.',
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

export default function RaiffeisenOesterreichPage() {
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
              <li className="text-slate-400">Raiffeisen Österreich</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="mb-10 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Kompatibel mit ELBA-App
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode mit der Raiffeisen ELBA-App scannen
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              So nutzt du GiroCodes (SEPA-QR-Codes) mit der Raiffeisen ELBA-App in Österreich –
              Schritt für Schritt erklärt. In weniger als 30 Sekunden ist die Überweisung abgeschlossen.
            </p>
          </header>

          <article className="prose prose-invert prose-lg max-w-none">

            {/* Section 1: Anleitung */}
            <section aria-labelledby="anleitung">
              <h2 id="anleitung">Schritt-für-Schritt Anleitung</h2>
              <p>
                Die Raiffeisen ELBA-App bietet einen QR-Code-Scanner direkt im Zahlungsbereich.
                So gehst du vor:
              </p>
              <ol>
                <li>
                  <strong>ELBA-App öffnen</strong> und mit PIN, Fingerabdruck oder Face ID anmelden.
                </li>
                <li>
                  <strong>„Zahlungen"</strong> im Hauptmenü antippen.
                </li>
                <li>
                  <strong>„QR-Code scannen"</strong> auswählen. Falls noch keine
                  Kamera-Berechtigung erteilt wurde, einmalig bestätigen.
                </li>
                <li>
                  <strong>GiroCode scannen</strong> – Kamera auf den Code richten (15–30 cm Abstand).
                  Die App erkennt den Code automatisch.
                </li>
                <li>
                  <strong>Daten prüfen:</strong> Empfängername, IBAN, Betrag und Verwendungszweck
                  werden automatisch eingetragen. Immer sorgfältig kontrollieren!
                </li>
                <li>
                  <strong>Überweisung bestätigen</strong> mit Raiffeisen TAN oder biometrischer
                  Freigabe. Fertig.
                </li>
              </ol>
              <p>
                <strong>Tipp:</strong> Beim Scannen von Bildschirmen die Display-Helligkeit auf
                Maximum stellen und Reflexionen vermeiden.
              </p>
            </section>

            {/* Section 2: Browser-Scanner */}
            <section aria-labelledby="browser-scanner" className="mt-10">
              <h2 id="browser-scanner">GiroCode direkt im Browser scannen</h2>
              <p>
                Du hast keinen Zugriff auf die ELBA-App oder möchtest einen GiroCode schnell
                am Computer auslesen? Unser kostenloser Browser-Scanner liest GiroCodes direkt im
                Browser aus – ohne App, ohne Installation, 100&nbsp;% lokal.
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

            {/* Section 3: GiroCode erstellen */}
            <section aria-labelledby="erstellen" className="mt-10">
              <h2 id="erstellen">Eigenen GiroCode erstellen</h2>
              <p>
                Du möchtest selbst einen GiroCode für deine Rechnung erstellen? Unser kostenloser
                GiroCode-Generator erzeugt einen EPC-konformen SEPA-QR-Code direkt im Browser –
                keine Registrierung, keine Datenweitergabe.
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

            {/* Section 4: FAQ */}
            <section aria-labelledby="faq" className="mt-10">
              <h2 id="faq">Häufige Fragen – GiroCode mit ELBA-App</h2>
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

          {/* Footer: Weitere Banking-Apps */}
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
