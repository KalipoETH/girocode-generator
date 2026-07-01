import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Générateur QR Code SEPA – Gratuit & Instantané 2026',
  description:
    "Créer un code QR SEPA (GiroCode/EPC-QR) gratuitement: Entrez l'IBAN, générez le QR, c'est tout. Compatible avec toutes les applications bancaires. Sans inscription.",
  alternates: {
    canonical: `${SITE_URL}/fr/sepa-qr-code`,
    languages: {
      'x-default': `${SITE_URL}/sepa-qr-code`,
      de: `${SITE_URL}/sepa-qr-code`,
      en: `${SITE_URL}/en/sepa-qr-code`,
      fr: `${SITE_URL}/fr/sepa-qr-code`,
      es: `${SITE_URL}/es/sepa-qr-code`,
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Qu'est-ce qu'un code QR SEPA?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un code QR SEPA (également appelé GiroCode, EPC QR Code ou BezahlCode) est un code QR standardisé pour les virements SEPA suivant la norme EPC069-12 du Conseil européen des paiements. Il contient toutes les données de paiement telles que l'IBAN, le nom du bénéficiaire, le montant optionnel et la référence de paiement sous forme lisible par machine.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment créer un code QR SEPA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Créer un code QR SEPA est simple: entrez l'IBAN, ajoutez le nom du bénéficiaire, incluez optionnellement le montant et la référence, puis cliquez sur Générer. Le code QR fini peut être téléchargé immédiatement – sans inscription et gratuitement.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles données contient un code QR SEPA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un code QR SEPA contient: IBAN (obligatoire), nom du bénéficiaire (obligatoire), BIC (optionnel), montant (optionnel), référence de paiement (optionnel, jusqu'à 140 caractères). Toutes les données sont formatées selon EPC069-12.",
      },
    },
    {
      '@type': 'Question',
      name: 'Les codes QR SEPA sont-ils gratuits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, les codes QR SEPA sont entièrement gratuits à créer et à utiliser. La norme EPC est ouverte et libre de droits. Notre générateur crée des codes QR SEPA sans inscription, sans frais, et traite toutes les données localement dans le navigateur.",
      },
    },
  ],
};

const stats = [
  { value: '36', label: 'Pays SEPA' },
  { value: 'EPC069-12', label: 'Norme officielle' },
  { value: '10 sec.', label: 'Temps de création' },
  { value: '100%', label: 'Gratuit' },
];

const tableRows = [
  { merkmal: 'Norme', wert: 'EPC069-12' },
  { merkmal: 'Pays', wert: '36 pays SEPA' },
  { merkmal: 'Compatibilité', wert: 'Toutes les apps bancaires' },
  { merkmal: 'Gratuit', wert: 'Oui' },
  { merkmal: 'IBAN inclus', wert: 'Oui' },
  { merkmal: 'Montant optionnel', wert: 'Oui' },
  { merkmal: 'Référence de paiement', wert: "Jusqu'à 140 caractères" },
];

const relatedLinks = [
  { href: '/fr/bezahlcode', label: 'Générateur BezahlCode' },
  { href: '/fr/epc-qr-code', label: 'Générateur EPC QR Code' },
  { href: '/fr/iban-qr-code', label: 'Générateur IBAN QR Code' },
  { href: '/fr/wissen/epc-standard', label: 'Documentation norme EPC' },
];

export default function SepaQrCodeFrPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/fr" className="text-sky-400 hover:text-sky-300">
                  Accueil
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">Générateur QR Code SEPA</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Noms alternatifs · QR Code SEPA / GiroCode
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              Générateur QR Code SEPA – Gratuit &amp; Instantané
            </h1>
          </header>

          {/* Short Answer Box */}
          <div
            className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3"
            role="note"
          >
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">
              💡 Réponse courte
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              Un code QR SEPA (également GiroCode ou EPC QR Code) est un code QR standardisé pour
              les virements SEPA. Il suit la norme EPC069-12 du Conseil européen des paiements et
              est compatible avec toutes les applications bancaires allemandes et européennes.
            </p>
          </div>

          {/* Stats */}
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

            <h2>Qu&apos;est-ce qu&apos;un code QR SEPA?</h2>
            <p>
              Un <strong>code QR SEPA</strong> – également connu sous le nom de GiroCode, EPC QR
              Code ou BezahlCode – est un code QR standardisé pour les virements SEPA au sein de
              l&apos;espace de paiement SEPA européen couvrant 36 pays. Il suit la{' '}
              <strong>norme EPC069-12</strong> du Conseil européen des paiements (EPC) et encode
              toutes les données de paiement pertinentes sous forme lisible par machine.
            </p>
            <p>
              Lorsqu&apos;une personne scanne un code QR SEPA, son application bancaire
              s&apos;ouvre directement avec un formulaire de virement pré-rempli contenant
              l&apos;IBAN, le nom du bénéficiaire, le montant et la référence de paiement.
              L&apos;utilisateur n&apos;a qu&apos;à confirmer – plus besoin de saisie manuelle.
              Cela fait gagner du temps et réduit considérablement les erreurs.
            </p>

            <h2>Différence: QR Code SEPA vs. QR Code ordinaire</h2>
            <p>
              Un code QR ordinaire peut contenir n&apos;importe quel texte, URL ou autre donnée –
              il n&apos;a pas de format standardisé. Les applications bancaires ne peuvent pas
              interpréter ces codes QR comme des ordres de paiement.
            </p>
            <p>
              Un <strong>code QR SEPA</strong>, en revanche, suit un format strict selon
              EPC069-12 :
            </p>
            <ul>
              <li>Commence toujours par le tag de service <code>BCD</code></li>
              <li>Contient des champs structurés: IBAN, BIC, montant, nom, référence</li>
              <li>
                Reconnu par les applications bancaires comme un ordre de paiement et traité
                automatiquement
              </li>
              <li>Volume de données maximal défini (pas de taille arbitraire)</li>
            </ul>
            <p>
              Seul un code QR SEPA correctement structuré selon la norme EPC est accepté par les
              applications bancaires comme ordre de paiement.
            </p>

            <h2>Quelles applications bancaires supportent les codes QR SEPA?</h2>
            <p>
              Pratiquement toutes les grandes applications bancaires en Allemagne, en Autriche et
              en Suisse supportent les codes QR SEPA. En Allemagne, celles-ci comprennent:
              Sparkasse, ING, DKB, Volksbank/Raiffeisenbank, Commerzbank, Deutsche Bank, N26,
              Postbank, Comdirect et Targobank. Comme la norme est valable dans toute
              l&apos;Europe, les codes QR SEPA fonctionnent également avec les banques des 36
              pays SEPA.
            </p>

            {/* CTA */}
            <div className="not-prose my-8">
              <Link
                href="/fr"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
              >
                Créer le QR Code SEPA maintenant →
              </Link>
            </div>

            <h2>Propriétés du QR Code SEPA</h2>
            <div className="not-prose overflow-x-auto rounded-xl border border-[#1f2431]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#1f2431] bg-[#0f1117]">
                    <th className="px-4 py-3 text-left font-semibold text-[#e8eaf0]">
                      Propriété
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-[#22c55e]">
                      QR Code SEPA
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-[#1f2431] ${i % 2 === 0 ? 'bg-[#0b0c10]' : 'bg-[#0f1117]'}`}
                    >
                      <td className="px-4 py-3 text-[#8b90a0]">{row.merkmal}</td>
                      <td className="px-4 py-3 text-slate-200">{row.wert}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Qu&apos;est-ce qu&apos;un code QR SEPA?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Un code QR SEPA (également GiroCode, EPC QR Code ou BezahlCode) est un code QR
                  standardisé pour les virements SEPA suivant la norme EPC069-12. Il contient
                  toutes les données de paiement de manière structurée et est reconnu directement
                  par les applications bancaires comme un ordre de paiement.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Comment créer un code QR SEPA?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Entrez l&apos;IBAN, ajoutez le nom du bénéficiaire, incluez optionnellement le
                  montant et la référence, puis générez – c&apos;est tout. Le code QR peut être
                  téléchargé immédiatement, sans inscription et gratuitement.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Quelles données contient un code QR SEPA?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  IBAN (obligatoire), nom du bénéficiaire (obligatoire), BIC (optionnel), montant
                  (optionnel), référence de paiement (optionnel, jusqu&apos;à 140 caractères).
                  Toutes les données sont formatées et encodées selon EPC069-12.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Les codes QR SEPA sont-ils gratuits?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Oui, entièrement gratuits. La norme EPC est ouverte et libre de droits. Notre
                  générateur crée des codes QR SEPA sans inscription, sans frais cachés, et traite
                  toutes les données localement dans le navigateur – aucune donnée n&apos;est
                  transmise à des serveurs.
                </p>
              </div>
            </div>

            {/* Related Links Box */}
            <div className="not-prose mt-10 rounded-2xl border border-[#1f2431] bg-[#0f1117] p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xl" aria-hidden>📚</span>
                <h2 className="text-base font-bold text-[#e8eaf0]">Articles connexes</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {relatedLinks.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3.5 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/30 hover:text-[#e8eaf0] hover:-translate-y-0.5"
                  >
                    <span className="leading-snug">{a.label}</span>
                    <span className="ml-3 shrink-0 text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
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
