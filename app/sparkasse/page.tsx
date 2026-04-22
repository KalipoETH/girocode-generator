import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode mit Sparkasse scannen – Anleitung 2026',
  description:
    'So scannst du einen GiroCode mit der Sparkassen-App: QR-Scanner öffnen, Code scannen, Überweisung bestätigen. ✅ Kostenlos & in 30 Sekunden erledigt.',
  keywords: 'girocode sparkasse, sparkasse girocode scannen, sparkassen-app qr code, sepa qr sparkasse',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/sparkasse',
  },
};

const otherBanks = [
  { href: '/volksbank', label: 'Volksbank / VR-Banking' },
  { href: '/deutsche-bank', label: 'Deutsche Bank' },
  { href: '/commerzbank', label: 'Commerzbank' },
  { href: '/ing', label: 'ING' },
  { href: '/dkb', label: 'DKB' },
  { href: '/postbank', label: 'Postbank' },
  { href: '/targobank', label: 'Targobank' },
  { href: '/n26', label: 'N26' },
  { href: '/comdirect', label: 'Comdirect' },
];

const faqItems = [
  {
    question: 'Unterstützt die Sparkassen-App alle GiroCodes?',
    answer:
      'Ja, die Sparkassen-App erkennt alle EPC-konformen GiroCodes (SEPA-QR-Codes). Voraussetzung ist eine aktuelle App-Version. Prüfe im App Store, ob ein Update verfügbar ist.',
  },
  {
    question: 'Wo finde ich den QR-Scanner in der Sparkassen-App?',
    answer:
      'Den QR-Scanner findest du unter „Überweisungen" – oben rechts als Kamera-Symbol. Nach dem Antippen öffnet sich direkt die Scanner-Ansicht.',
  },
  {
    question: 'Funktioniert der GiroCode-Scan auch mit der S-pushTAN App?',
    answer:
      'Ja, beide Sparkassen-Apps (Sparkassen-App und S-pushTAN) unterstützen das Scannen von GiroCodes. Wähle einfach diejenige App, die du für dein Online-Banking verwendest.',
  },
  {
    question: 'Was mache ich, wenn der Scan nicht funktioniert?',
    answer:
      'Erhöhe die Bildschirmhelligkeit, wenn du einen digitalen Code scannst. Halte die Kamera ca. 15–30 cm vom Code entfernt und sorge für gute Beleuchtung. Bei gedruckten Codes auf glattes, ungeknittertes Papier achten.',
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

export default function SparkkassePage() {
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
              <li className="text-slate-400">Sparkasse</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="mb-10 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Kompatibel mit Sparkassen-App
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode mit der Sparkassen-App scannen
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              So nutzt du GiroCodes (SEPA-QR-Codes) mit deiner Sparkassen-App – Schritt für Schritt erklärt.
              In weniger als 30 Sekunden ist die Überweisung abgeschlossen.
            </p>
          </header>

          <article className="prose prose-invert prose-lg max-w-none">

            {/* Section 1: Anleitung */}
            <section aria-labelledby="anleitung">
              <h2 id="anleitung">Schritt-für-Schritt Anleitung</h2>
              <p>
                Die Sparkassen-App bietet einen integrierten GiroCode-Scanner direkt in der
                Überweisungsmaske. So gehst du vor:
              </p>
              <ol>
                <li>
                  <strong>Sparkassen-App öffnen</strong> und mit PIN, Fingerabdruck oder Face ID anmelden.
                </li>
                <li>
                  <strong>„Überweisungen"</strong> in der unteren Navigationsleiste antippen.
                </li>
                <li>
                  <strong>Kamera-Symbol (QR-Scanner)</strong> oben rechts im Überweisungsformular antippen.
                  Falls noch keine Kamera-Berechtigung erteilt wurde, einmalig bestätigen.
                </li>
                <li>
                  <strong>GiroCode scannen</strong> – Kamera auf den Code richten (15–30 cm Abstand).
                  Die App erkennt den Code automatisch innerhalb von 1–2 Sekunden.
                </li>
                <li>
                  <strong>Daten prüfen:</strong> Empfängername, IBAN, Betrag und Verwendungszweck
                  werden automatisch eingetragen. Bitte immer sorgfältig kontrollieren – nie blind bestätigen!
                </li>
                <li>
                  <strong>Überweisung bestätigen</strong> mit pushTAN (S-pushTAN App) oder ChipTAN.
                  Fertig – die Überweisung ist raus.
                </li>
              </ol>
              <p>
                <strong>Tipp:</strong> Beim Scannen von Bildschirmen die Display-Helligkeit auf Maximum stellen
                und Reflexionen vermeiden. Bei gedruckten Codes für ausreichend Licht sorgen.
              </p>
            </section>

            {/* Section 2: Browser-Scanner */}
            <section aria-labelledby="browser-scanner" className="mt-10">
              <h2 id="browser-scanner">GiroCode direkt im Browser scannen</h2>
              <p>
                Du hast keinen Zugriff auf deine Sparkassen-App oder möchtest einen GiroCode schnell
                am Computer auslesen? Unser kostenloser Browser-Scanner liest GiroCodes direkt im Browser
                aus – ohne App, ohne Installation, 100&nbsp;% lokal.
              </p>
              <p>
                Er zeigt dir alle im Code enthaltenen Daten: IBAN, Empfängername, Betrag und
                Verwendungszweck – ideal zum Prüfen, bevor du die Überweisung in deinem Online-Banking
                eingibst.
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
                Du möchtest selbst einen GiroCode für deine Rechnung oder Zahlungsaufforderung erstellen?
                Unser kostenloser GiroCode-Generator erzeugt einen EPC-konformen SEPA-QR-Code direkt
                im Browser – keine Registrierung, keine Datenweitergabe, sofort downloadbar.
              </p>
              <p>
                Der Code kann auf Rechnungen, in E-Mails oder auf Webseiten eingebettet werden und
                von der Sparkassen-App sowie allen anderen Banking-Apps gescannt werden.
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
              <h2 id="faq">Häufige Fragen – GiroCode mit Sparkasse</h2>
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
