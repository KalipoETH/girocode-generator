import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GiroCode funktioniert nicht – Ursachen & Lösungen 2026',
  description:
    'GiroCode wird nicht erkannt oder scannt nicht? Die 7 häufigsten Ursachen und sofortige Lösungen. Für alle Banking-Apps erklärt.',
  alternates: {
    canonical: `${SITE_URL}/girocode-funktioniert-nicht`,
    languages: {
      'x-default': `${SITE_URL}/girocode-funktioniert-nicht`,
      'de': `${SITE_URL}/girocode-funktioniert-nicht`,
      'en': `${SITE_URL}/en/girocode-funktioniert-nicht`,
      'fr': `${SITE_URL}/fr/girocode-funktioniert-nicht`,
      'es': `${SITE_URL}/es/girocode-funktioniert-nicht`,
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Warum scannt meine Banking-App den GiroCode nicht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die häufigsten Ursachen: App unterstützt keinen EPC-Standard, QR Code zu klein (min. 2×2 cm), schlechte Beleuchtung oder falscher Scan-Bereich in der App (unter "Überweisung" → "QR Code").',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie groß muss ein GiroCode gedruckt werden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mindestens 2×2 cm. Empfohlen: 3×3 cm auf Rechnungen. Bei weniger als 2×2 cm kann die Kamera den Code nicht zuverlässig lesen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich einen GiroCode mit der normalen Kamera-App scannen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein, normale QR-Code-Scanner erkennen den EPC-Inhalt nicht als Überweisung. Es wird eine Banking-App oder unser Browser-Scanner (/scanner) benötigt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was tun wenn der GiroCode nach dem Scannen falsche Daten zeigt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Überprüfe ob der Code mit einem validierten IBAN-Format erstellt wurde. Stelle sicher, dass der Code mit einem EPC-kompatiblen Generator (wie unserem) erstellt wurde.',
      },
    },
  ],
};

const problems = [
  {
    title: 'QR Code zu klein gedruckt',
    solution: 'Mindestgröße 2×2 cm einhalten. Bei PDFs: min. 150 DPI Druckqualität.',
  },
  {
    title: 'Schlechte Beleuchtung beim Scannen',
    solution: 'Bildschirmhelligkeit auf Maximum. Keine Reflexionen. Indirektes Licht bevorzugen.',
  },
  {
    title: 'Falscher Abstand zum QR Code',
    solution: 'Optimaler Abstand: 15–30 cm. Weder zu nah noch zu weit.',
  },
  {
    title: 'Banking-App unterstützt keinen GiroCode',
    solution:
      'Prüfe ob deine App SEPA-QR/EPC unterstützt. Alle großen deutschen Banken (Sparkasse, ING, DKB, Volksbank, Commerzbank) unterstützen den Standard.',
  },
  {
    title: 'QR Code enthält ungültige IBAN',
    solution:
      'IBAN mit IBAN-Prüftool validieren. Unser Generator prüft IBANs automatisch (Mod-97).',
  },
  {
    title: 'QR Code ist beschädigt oder unscharf',
    solution: 'Code neu erstellen. Fehlerkorrektur Level H für gedruckte Codes verwenden.',
  },
  {
    title: 'Falsche App-Einstellung',
    solution:
      'Im App-Menü nach "Überweisung" → "QR-Code" suchen. Bei manchen Apps unter "Scan" zu finden.',
  },
];

export default function Page() {
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
              <li className="text-slate-400">GiroCode funktioniert nicht</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Troubleshooting · GiroCode Probleme lösen
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode funktioniert nicht – 7 Ursachen &amp; Lösungen
            </h1>
          </header>

          <div
            className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3"
            role="note"
          >
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">
              💡 Kurze Antwort
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              Wenn ein GiroCode nicht funktioniert, liegt es meist an einer zu geringen Druckgröße
              (Mindestgröße: 2×2 cm), schlechter Beleuchtung, Reflexionen auf dem Bildschirm oder
              einer Banking-App die den EPC-Standard nicht unterstützt.
            </p>
          </div>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2>7 häufige Ursachen &amp; Lösungen</h2>

            <div className="not-prose space-y-3 mb-8">
              {problems.map((p, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[#1f2431] bg-[#0f1117] p-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#22c55e]/20 text-xs font-bold text-[#22c55e]">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="mb-1 text-sm font-bold text-slate-50">{p.title}</h3>
                      <p className="text-sm text-slate-400">Lösung: {p.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p>
              Die meisten GiroCode-Probleme lassen sich in wenigen Minuten beheben. Falls deine
              Banking-App GiroCodes grundsätzlich nicht unterstützt, findest du eine{' '}
              <Link href="/wissen/banking-apps" className="text-[#22c55e] hover:underline">
                Übersicht aller kompatiblen Banking-Apps
              </Link>{' '}
              in unserem Wissensbereich.
            </p>

            <div className="not-prose my-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#16a34a 0%,#15803d 100%)' }}
              >
                GiroCode neu erstellen →
              </Link>
              <Link
                href="/scanner"
                className="inline-flex items-center gap-2 rounded-xl border border-[#1f2431] px-6 py-3 text-sm font-bold text-slate-300 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-500/30"
              >
                Browser-Scanner nutzen →
              </Link>
            </div>

            <h2>Häufig gestellte Fragen</h2>

            <div className="not-prose space-y-4 mb-8">
              {faqJsonLd.mainEntity.map((faq, i) => (
                <div key={i} className="rounded-xl border border-[#1f2431] bg-[#0f1117] p-5">
                  <h3 className="mb-2 text-sm font-bold text-slate-50">{faq.name}</h3>
                  <p className="text-sm text-slate-400">{faq.acceptedAnswer.text}</p>
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
                {[
                  { href: '/scanner', label: 'Browser GiroCode Scanner' },
                  { href: '/wissen/banking-apps', label: 'Banking-Apps Übersicht' },
                  { href: '/girocode-scannen-anleitung', label: 'GiroCode scannen – Anleitung' },
                  { href: '/', label: 'GiroCode neu erstellen' },
                ].map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3.5 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/30 hover:text-[#e8eaf0] hover:-translate-y-0.5"
                  >
                    <span>{a.label}</span>
                    <span className="ml-3 shrink-0 text-[#22c55e] group-hover:translate-x-1 transition-transform duration-200">
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
