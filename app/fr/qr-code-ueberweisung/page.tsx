import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'QR Code pour Virement – Créer gratuitement 2026',
  description:
    'Créer un QR Code pour virement SEPA gratuitement : Les clients scannent et virent instantanément. Norme GiroCode/EPC-QR. Sans inscription, 100% local dans le navigateur.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/fr/qr-code-ueberweisung',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/qr-code-ueberweisung',
      de: 'https://www.girocodegenerator.com/qr-code-ueberweisung',
      en: 'https://www.girocodegenerator.com/en/qr-code-ueberweisung',
      fr: 'https://www.girocodegenerator.com/fr/qr-code-ueberweisung',
      es: 'https://www.girocodegenerator.com/es/qr-code-ueberweisung',
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Comment créer un QR Code pour un virement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Ouvrir le générateur GiroCode, saisir l'IBAN et le nom, ajouter optionnellement le montant et la référence de paiement, télécharger le QR Code.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle application faut-il pour scanner un QR Code de virement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Toute application bancaire allemande : Sparkasse, ING, DKB, Volksbank, Commerzbank, Deutsche Bank, N26 et autres.",
      },
    },
    {
      '@type': 'Question',
      name: 'Un QR Code pour virements est-il gratuit ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Création : Oui, gratuit. Virement : frais bancaires habituels (généralement gratuits pour les particuliers).",
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je utiliser un QR Code pour des virements récurrents ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, si le montant et la référence de paiement sont toujours identiques (ex. cotisation mensuelle d'association).",
      },
    },
  ],
};

const stats = [
  { value: '30 sec.', label: 'Temps jusqu\'au virement' },
  { value: '0 €', label: 'Coût créateur & payeur' },
  { value: '36', label: 'Pays SEPA compatibles' },
  { value: '100%', label: 'Local dans le navigateur' },
];

const useCases = [
  { title: 'Freelances', desc: 'Sur les factures pour un paiement plus rapide' },
  { title: 'Associations', desc: 'Pour cotisations et dons' },
  { title: 'Artisans', desc: 'Sur facture sur place' },
  { title: 'Particuliers', desc: 'Pour paiements entre particuliers' },
  { title: 'Organisations caritatives', desc: 'Sur flyers et affiches' },
];

const relatedLinks = [
  { href: '/fr', label: 'Créer GiroCode gratuitement' },
  { href: '/fr/sepa-qr-code', label: 'Générateur QR Code SEPA' },
  { href: '/fr/freelancer', label: 'GiroCode pour freelances' },
  { href: '/fr/verein', label: 'GiroCode pour associations' },
];

export default function QrCodeUeberweisungFrPage() {
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
                <Link href="/fr" className="text-sky-400 hover:text-sky-300">
                  Accueil
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">QR Code pour Virement</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Virement SEPA par QR Code
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              QR Code pour Virement – Gratuit &amp; Instantané
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
              Un QR Code pour virements est un GiroCode (QR Code SEPA) selon la norme EPC069-12. Il
              contient l&apos;IBAN, le montant et la référence de paiement et permet de déclencher un
              virement en scannant simplement avec l&apos;application bancaire – en moins de 30
              secondes.
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
            <h2>Comment fonctionne un QR Code pour virements ?</h2>
            <ol>
              <li>
                <strong>Créer le QR Code :</strong> Saisir IBAN, nom du bénéficiaire, optionnellement
                montant et référence de paiement
              </li>
              <li>
                <strong>Partager ou imprimer :</strong> Placer le QR Code sur facture, e-mail ou site
                web
              </li>
              <li>
                <strong>Scanner &amp; virer :</strong> Le destinataire scanne avec l&apos;app
                bancaire → le virement est automatiquement prérempli
              </li>
            </ol>

            <h2>À quoi sert un QR Code de virement ?</h2>
            <ul>
              {useCases.map((item) => (
                <li key={item.title}>
                  <strong>{item.title} :</strong> {item.desc}
                </li>
              ))}
            </ul>

            <h2>Avantages par rapport à la saisie manuelle de l&apos;IBAN</h2>
            <ul>
              <li>Pas d&apos;erreurs de frappe dans l&apos;IBAN</li>
              <li>Le montant est automatiquement saisi</li>
              <li>La référence de paiement est correctement reprise</li>
              <li>Plus rapide : env. 10 secondes au lieu de 2 minutes</li>
            </ul>

            <div className="not-prose my-8">
              <Link
                href="/fr"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
              >
                Créer QR Code pour Virement →
              </Link>
            </div>

            <h2>FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Comment créer un QR Code pour un virement ?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Ouvrir le générateur GiroCode, saisir l&apos;IBAN et le nom, ajouter
                  optionnellement le montant et la référence de paiement, télécharger le QR Code.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Quelle application faut-il pour scanner un QR Code de virement ?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Toute application bancaire allemande : Sparkasse, ING, DKB, Volksbank,
                  Commerzbank, Deutsche Bank, N26 et autres.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Un QR Code pour virements est-il gratuit ?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Création : Oui, gratuit. Virement : frais bancaires habituels (généralement
                  gratuits pour les particuliers).
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Puis-je utiliser un QR Code pour des virements récurrents ?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Oui, si le montant et la référence de paiement sont toujours identiques (ex.
                  cotisation mensuelle d&apos;association).
                </p>
              </div>
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
                    className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3.5 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/30 hover:bg-[#1a1d25] hover:text-[#e8eaf0]"
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
