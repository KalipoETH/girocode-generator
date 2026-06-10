import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode mit Erste Bank / George scannen – Anleitung 2026',
  description:
    'So scannst du einen GiroCode mit der George App (Erste Bank Österreich): QR-Scanner unter „Überweisen" → „QR-Code" öffnen, scannen, bestätigen. ✅ Gilt auch für s Sparkasse Österreich.',
  keywords: 'girocode erste bank, george app girocode, erste bank qr code scannen, george app qr überweisung österreich',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/erste-bank',
  },
};

const otherBanks = [
  { href: '/raiffeisen-oesterreich', label: 'Raiffeisen Österreich (ELBA)' },
  { href: '/bank-austria', label: 'Bank Austria' },
  { href: '/bawag', label: 'BAWAG' },
  { href: '/volksbank-oesterreich', label: 'Volksbank Österreich' },
  { href: '/sparkasse', label: 'Sparkasse (Deutschland)' },
  { href: '/volksbank', label: 'Volksbank / VR-Banking' },
  { href: '/ing', label: 'ING' },
  { href: '/dkb', label: 'DKB' },
];

const faqItems = [
  {
    question: 'Wo finde ich den QR-Scanner in der George App?',
    answer:
      'In der George App von Erste Bank findest du den QR-Scanner unter „Überweisen" → „QR-Code". Tippe auf das QR-Symbol, erteile die Kamera-Berechtigung und scanne den GiroCode.',
  },
  {
    question: 'Funktioniert das auch mit s Sparkasse Österreich?',
    answer:
      'Ja, die s Sparkasse Österreich nutzt ebenfalls die George App. Der Weg zum QR-Scanner ist identisch: „Überweisen" → „QR-Code". GiroCodes werden vollständig unterstützt.',
  },
  {
    question: 'Unterstützt die George App den deutschen EPC-GiroCode-Standard?',
    answer:
      'Ja, die George App erkennt EPC-konforme SEPA-QR-Codes (GiroCodes). Der Standard gilt sowohl in Deutschland als auch in Österreich – du kannst also auch Codes aus Deutschland problemlos scannen.',
  },
  {
    question: 'Was tun, wenn der Scan in George nicht funktioniert?',
    answer:
      'Stelle sicher, dass die George App aktuell ist. Erhöhe die Bildschirmhelligkeit beim Scannen digitaler Codes und halte die Kamera ca. 15–30 cm vom QR-Code entfernt. Bei gedruckten Codes für ausreichend Beleuchtung sorgen.',
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

export default function ErsteBankPage() {
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
              <li className="text-slate-400">Erste Bank / George</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="mb-10 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Kompatibel mit George App (Erste Bank)
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode mit der George App scannen
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              So nutzt du GiroCodes (SEPA-QR-Codes) mit der George App der Erste Bank Österreich –
              Schritt für Schritt erklärt. Gilt auch für alle österreichischen Sparkassen, die George verwenden.
            </p>
          </header>

          <article className="prose prose-invert prose-lg max-w-none">

            {/* Section 1: Anleitung */}
            <section aria-labelledby="anleitung">
              <h2 id="anleitung">Schritt-für-Schritt Anleitung</h2>
              <p>
                Die George App der Erste Bank Österreich bietet einen integrierten GiroCode-Scanner
                unter dem Menüpunkt „Überweisen". So gehst du vor:
              </p>
              <ol>
                <li>
                  <strong>George App öffnen</strong> und mit PIN, Fingerabdruck oder Face ID anmelden.
                </li>
                <li>
                  <strong>„Überweisen"</strong> im Hauptmenü antippen.
                </li>
                <li>
                  <strong>„QR-Code"</strong> als Überweisungsart auswählen. Falls noch keine
                  Kamera-Berechtigung erteilt wurde, einmalig bestätigen.
                </li>
                <li>
                  <strong>GiroCode scannen</strong> – Kamera auf den Code richten (15–30 cm Abstand).
                  Die App erkennt den Code automatisch.
                </li>
                <li>
                  <strong>Daten prüfen:</strong> Empfängername, IBAN, Betrag und Verwendungszweck
                  werden automatisch eingetragen. Bitte immer sorgfältig kontrollieren!
                </li>
                <li>
                  <strong>Überweisung bestätigen</strong> mit George TAN oder biometrischer
                  Authentifizierung. Fertig.
                </li>
              </ol>
              <p>
                <strong>Hinweis:</strong> Die George App wird von Erste Bank und allen österreichischen
                Sparkassen (s Sparkasse) verwendet. Der Weg zum QR-Scanner ist überall identisch.
              </p>
            </section>

            {/* Section 2: Browser-Scanner */}
            <section aria-labelledby="browser-scanner" className="mt-10">
              <h2 id="browser-scanner">GiroCode direkt im Browser scannen</h2>
              <p>
                Du hast keinen Zugriff auf die George App oder möchtest einen GiroCode schnell
                am Computer auslesen? Unser kostenloser Browser-Scanner liest GiroCodes direkt im
                Browser aus – ohne App, ohne Installation, 100&nbsp;% lokal.
              </p>
              <p>
                Er zeigt dir alle im Code enthaltenen Daten: IBAN, Empfängername, Betrag und
                Verwendungszweck – ideal zum Prüfen, bevor du die Überweisung manuell eingibst.
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
                Du möchtest selbst einen GiroCode für deine Rechnung oder Zahlungsaufforderung
                erstellen? Unser kostenloser GiroCode-Generator erzeugt einen EPC-konformen
                SEPA-QR-Code direkt im Browser – keine Registrierung, keine Datenweitergabe.
              </p>
              <p>
                Der Code kann von der George App sowie allen anderen österreichischen und deutschen
                Banking-Apps gescannt werden.
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
              <h2 id="faq">Häufige Fragen – GiroCode mit George App</h2>
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
