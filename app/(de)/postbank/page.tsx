import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode mit Postbank App scannen – Anleitung 2026',
  description:
    'GiroCode mit dem Postbank Finanzassistenten scannen: Überweisen öffnen, Kamera-Symbol antippen, Code scannen & TAN eingeben. ✅ Schritt-für-Schritt Anleitung.',
  keywords: 'postbank girocode, postbank finanzassistent qr code, postbank girocode scannen, sepa qr postbank',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/postbank',
  },
};

const otherBanks = [
  { href: '/sparkasse', label: 'Sparkasse' },
  { href: '/volksbank', label: 'Volksbank / VR-Banking' },
  { href: '/deutsche-bank', label: 'Deutsche Bank' },
  { href: '/commerzbank', label: 'Commerzbank' },
  { href: '/ing', label: 'ING' },
  { href: '/dkb', label: 'DKB' },
  { href: '/targobank', label: 'Targobank' },
  { href: '/n26', label: 'N26' },
  { href: '/comdirect', label: 'Comdirect' },
];

const faqItems = [
  {
    question: 'Wo finde ich den QR-Scanner im Postbank Finanzassistenten?',
    answer:
      'Den QR-Scanner findest du unter „Überweisen" – dort erscheint ein Kamera-Symbol, das den integrierten GiroCode-Scanner öffnet.',
  },
  {
    question: 'Unterstützt der Postbank Finanzassistent alle GiroCodes?',
    answer:
      'Ja, der Postbank Finanzassistent unterstützt alle EPC-konformen GiroCodes. Für die beste Kompatibilität solltest du die aktuelle App-Version installiert haben.',
  },
  {
    question: 'Ist der Postbank Finanzassistent dieselbe App wie die Deutsche Bank Mobile?',
    answer:
      'Postbank und Deutsche Bank gehören zum selben Konzern, haben aber separate Apps. Der Postbank Finanzassistent ist die eigenständige Banking-App für Postbank-Kunden.',
  },
  {
    question: 'Was mache ich, wenn der Scan im Postbank Finanzassistenten fehlschlägt?',
    answer:
      'Stelle sicher, dass der gesamte QR-Code im Suchfeld sichtbar ist, und erhöhe die Helligkeit bei digitalen Codes. Alternativ kannst du unseren Browser-Scanner nutzen, um die Daten auszulesen und manuell einzugeben.',
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

export default function PostbankPage() {
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
              <li className="text-slate-400">Postbank</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="mb-10 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Kompatibel mit Postbank Finanzassistent
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode mit der Postbank App scannen
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              So nutzt du GiroCodes (SEPA-QR-Codes) mit dem Postbank Finanzassistenten –
              Schritt für Schritt erklärt. Die Überweisung ist in Sekunden erledigt.
            </p>
          </header>

          <article className="prose prose-invert prose-lg max-w-none">

            {/* Section 1: Anleitung */}
            <section aria-labelledby="anleitung">
              <h2 id="anleitung">Schritt-für-Schritt Anleitung</h2>
              <p>
                Der Postbank Finanzassistent unterstützt GiroCodes direkt in der Überweisungsfunktion.
                So gehst du vor:
              </p>
              <ol>
                <li>
                  <strong>Postbank Finanzassistent öffnen</strong> und mit PIN oder biometrisch anmelden.
                </li>
                <li>
                  <strong>„Überweisen"</strong> im Menü oder auf der Startseite aufrufen.
                </li>
                <li>
                  <strong>Kamera-Symbol antippen</strong> – den Scanner-Button im Überweisungsformular
                  antippen, um den GiroCode-Scanner zu öffnen.
                </li>
                <li>
                  <strong>GiroCode scannen</strong> – Kamera auf den QR-Code richten. Alle
                  Zahlungsdaten werden automatisch erkannt und eingetragen.
                </li>
                <li>
                  <strong>Daten prüfen:</strong> IBAN, Empfängername, Betrag und Verwendungszweck
                  kontrollieren, bevor du die Überweisung freigibst.
                </li>
                <li>
                  <strong>TAN eingeben und Überweisung bestätigen</strong> – per mTAN, BestSign
                  oder ChipTAN, je nach deiner Einrichtung.
                </li>
              </ol>
            </section>

            {/* Section 2: Browser-Scanner */}
            <section aria-labelledby="browser-scanner" className="mt-10">
              <h2 id="browser-scanner">GiroCode direkt im Browser scannen</h2>
              <p>
                Du möchtest einen GiroCode ohne den Postbank Finanzassistenten auslesen?
                Unser Browser-Scanner zeigt dir alle Zahlungsdaten direkt im Browser –
                ohne App, ohne Installation, vollständig lokal verarbeitet.
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
                Du möchtest einen GiroCode für deine Rechnung oder Zahlungsaufforderung erstellen?
                Unser kostenloser Generator erzeugt EPC-konforme SEPA-QR-Codes – sofort, ohne
                Registrierung, kompatibel mit dem Postbank Finanzassistenten und allen anderen
                deutschen Banking-Apps.
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
              <h2 id="faq">Häufige Fragen – GiroCode mit Postbank</h2>
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
