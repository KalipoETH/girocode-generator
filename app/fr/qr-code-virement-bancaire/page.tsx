import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'QR Code Virement Bancaire – Créer Gratuitement 2026',
  description:
    'Créez un QR code pour virement bancaire SEPA en quelques secondes. Standard EPC069-12. Gratuit.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/fr/qr-code-virement-bancaire',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/qr-code-ueberweisung',
      de: 'https://www.girocodegenerator.com/qr-code-ueberweisung',
      fr: 'https://www.girocodegenerator.com/fr/qr-code-virement-bancaire',
    },
  },
};

const faqs = [
  {
    q: "Qu'est-ce qu'un QR code virement bancaire ?",
    a: "C'est un code QR qui pré-remplit un virement SEPA dans votre app bancaire. Il contient l'IBAN, le nom du bénéficiaire, le montant et la référence selon la norme EPC069-12.",
  },
  {
    q: 'Comment créer un QR code pour virement bancaire ?',
    a: "Entrez l'IBAN et le nom du bénéficiaire dans notre générateur, ajoutez optionnellement le montant et la référence, puis cliquez sur Générer. Le QR code est prêt en quelques secondes.",
  },
  {
    q: 'Est-ce gratuit ?',
    a: 'Oui, entièrement gratuit et sans inscription. Toutes les données restent dans votre navigateur.',
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
  { value: '36', label: 'Pays SEPA' },
  { value: 'EPC069-12', label: 'Norme EPC' },
  { value: '10 sec.', label: 'Création' },
  { value: '100%', label: 'Gratuit' },
];

const relatedLinks = [
  { href: '/fr/generateur-qr-code-sepa', label: 'Générateur QR Code SEPA' },
  { href: '/fr/epc-qr-code', label: 'Code QR EPC' },
  { href: '/fr/iban-qr-code', label: 'QR Code IBAN' },
  { href: '/fr/wissen/girocode', label: "Qu'est-ce qu'un GiroCode ?" },
];

export default function QrCodeVirementBancaireFrPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
          <nav aria-label="Fil d'Ariane" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/fr" className="text-sky-400 hover:text-sky-300">
                  Accueil
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">QR Code Virement Bancaire</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Virement SEPA · QR Code
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              QR Code Virement Bancaire – Créer Gratuitement
            </h1>
          </header>

          <div
            className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3"
            role="note"
          >
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">
              💡 Réponse courte
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              Un QR code virement bancaire permet de pré-remplir un virement SEPA par simple scan
              avec votre app bancaire. Compatible avec BNP Paribas, Crédit Agricole, Société
              Générale et toutes les banques SEPA.
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
            <h2>QR code virement bancaire – comment ça marche ?</h2>
            <p>
              Au lieu de saisir manuellement l&apos;IBAN, le montant et la référence, le payeur
              scanne simplement un <strong>QR code virement bancaire</strong>. Son app bancaire
              ouvre un formulaire de virement pré-rempli – il ne reste qu&apos;à confirmer.
            </p>
            <p>
              Ce QR code suit la norme <strong>EPC069-12</strong> et fonctionne dans les 36 pays
              SEPA. Idéal pour les factures, les dons, les ventes entre particuliers et les
              associations.
            </p>

            <h2>Avantages du QR code virement</h2>
            <ul>
              <li>Paiements plus rapides – fini les erreurs de saisie d&apos;IBAN</li>
              <li>Factures professionnelles avec QR code intégré</li>
              <li>Compatible avec toutes les apps bancaires européennes</li>
              <li>Gratuit, sans inscription, 100% local</li>
            </ul>

            <div className="not-prose my-8">
              <Link
                href="/fr"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
              >
                Créer un QR code virement →
              </Link>
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
