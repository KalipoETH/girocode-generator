import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Comment créer un GiroCode – Guide étape par étape 2026',
  description:
    'Créer un GiroCode en 3 étapes: Saisir l\'IBAN, ajouter le montant et la référence, télécharger le QR code. Gratuit, sans inscription.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/fr/girocode-erstellen-anleitung',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/girocode-erstellen-anleitung',
      'de': 'https://www.girocodegenerator.com/girocode-erstellen-anleitung',
      'en': 'https://www.girocodegenerator.com/en/girocode-erstellen-anleitung',
      'fr': 'https://www.girocodegenerator.com/fr/girocode-erstellen-anleitung',
      'es': 'https://www.girocodegenerator.com/es/girocode-erstellen-anleitung',
    },
  },
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Créer un GiroCode',
  description: 'Comment créer un GiroCode (QR Code SEPA)',
  totalTime: 'PT10S',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Saisir l\'IBAN et le nom du bénéficiaire',
      text: 'Saisissez l\'IBAN du bénéficiaire (avec ou sans espaces) et le nom du bénéficiaire (max. 70 caractères). Le BIC est optionnel et n\'est plus nécessaire pour les nouveaux virements SEPA.',
    },
    {
      '@type': 'HowToStep',
      name: 'Saisir le montant et la référence de paiement',
      text: 'Saisissez le montant en EUR (ex. 49.90). Laissez le montant vide pour les montants variables. Saisissez la référence de paiement (max. 140 caractères, ex. "Facture 2026-001").',
    },
    {
      '@type': 'HowToStep',
      name: 'Générer et télécharger le QR code',
      text: 'Cliquez sur "Créer GiroCode". Le QR code est généré instantanément. Téléchargez-le en PNG ou copiez-le dans le presse-papiers.',
    },
    {
      '@type': 'HowToStep',
      name: 'Ajouter le GiroCode à la facture',
      text: 'Insérez le QR code dans Word/Google Docs. Taille recommandée: au moins 3×3 cm. Répétez l\'IBAN en texte sous le QR code comme solution de repli pour les utilisateurs sans lecteur QR.',
    },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Dois-je m\'inscrire pour créer un GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non, complètement gratuit sans inscription. Toutes les données restent localement dans le navigateur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je utiliser le GiroCode sur une facture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, il suffit de télécharger en PNG et d\'insérer dans Word, Google Docs ou PDF. Taille minimale: 2×2 cm.',
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je omettre le montant dans le GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, le montant et la référence de paiement sont optionnels. Le payeur saisit alors lui-même le montant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment ajouter un GiroCode à une facture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Téléchargez le QR code, insérez-le dans Word/Docs/PDF, redimensionnez à environ 3×3 cm. Pour la sécurité, ajoutez l\'IBAN en texte sous le QR code.',
      },
    },
  ],
};

const stats = [
  { value: '10 sec.', label: 'Temps de création' },
  { value: '3', label: 'Étapes' },
  { value: '0 €', label: 'Coût' },
  { value: '100%', label: 'Local dans le navigateur' },
];

const steps = [
  {
    n: '1',
    title: 'Saisir l\'IBAN et le nom du bénéficiaire',
    desc: 'Saisissez les coordonnées du bénéficiaire. L\'IBAN et le nom sont les seuls champs obligatoires.',
    bullets: [
      'Saisir l\'IBAN du bénéficiaire (avec ou sans espaces)',
      'Saisir le nom du bénéficiaire (max. 70 caractères)',
      'Le BIC est optionnel – plus nécessaire pour les nouveaux virements SEPA',
    ],
  },
  {
    n: '2',
    title: 'Saisir le montant et la référence de paiement (optionnel)',
    desc: 'Les deux champs sont optionnels. Laisser vide pour une flexibilité maximale.',
    bullets: [
      'Saisir le montant en EUR (ex. 49.90)',
      'Laisser le montant vide pour les montants variables (le payeur le saisit lui-même)',
      'Saisir la référence de paiement (max. 140 caractères, ex. "Facture 2026-001")',
    ],
  },
  {
    n: '3',
    title: 'Générer et télécharger le QR code',
    desc: 'Votre GiroCode est créé instantanément en un clic.',
    bullets: [
      'Cliquer sur "Créer GiroCode"',
      'Le QR code est généré instantanément',
      'Télécharger en PNG ou copier dans le presse-papiers',
    ],
  },
  {
    n: '4',
    title: 'Ajouter le GiroCode à la facture (optionnel)',
    desc: 'Pour les factures: insérer le QR code et ajouter l\'IBAN en texte.',
    bullets: [
      'Insérer le QR code dans Word/Google Docs',
      'Taille recommandée: au moins 3×3 cm',
      'Répéter l\'IBAN en texte sous le QR code (solution de repli pour utilisateurs sans lecteur QR)',
    ],
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
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
              <li className="text-slate-400">Comment créer un GiroCode</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Guide · Créer GiroCode
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              Comment Créer un GiroCode – Guide Complet
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
              Créer un GiroCode: 1. Saisir le nom du bénéficiaire et l&apos;IBAN, 2. Saisir le montant
              et la référence de paiement (optionnel), 3. Générer et télécharger le QR code. Tout
              le processus prend moins de 10 secondes. Sans inscription, sans frais, 100% local
              dans le navigateur.
            </p>
          </div>

          <div className="not-prose mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.value}
                className="rounded-xl border border-[#1f2431] bg-[#0f1117] px-4 py-3 text-center"
              >
                <p className="text-lg font-bold text-[#22c55e]">{s.value}</p>
                <p className="mt-0.5 text-[11px] text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2>Créer un GiroCode en 4 étapes</h2>

            <div className="not-prose space-y-4 mb-8">
              {steps.map((step) => (
                <div
                  key={step.n}
                  className="rounded-xl border border-[#1f2431] bg-[#0f1117] p-5"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                      style={{ background: 'linear-gradient(135deg,#22c55e,#16a34a)', color: '#0b0c10' }}
                    >
                      {step.n}
                    </div>
                    <div>
                      <h3 className="mb-2 text-base font-bold text-slate-50">{step.title}</h3>
                      <p className="text-sm text-slate-400">{step.desc}</p>
                      <ul className="mt-2 space-y-1">
                        {step.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                            <span className="mt-1 text-[#22c55e]">✓</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2>Conseils pour des GiroCodes professionnels sur les factures</h2>
            <ul>
              <li>
                <strong>Taille minimale:</strong> 3×3 cm pour une bonne lisibilité
              </li>
              <li>
                <strong>Correction d&apos;erreur:</strong> Niveau M pour les factures numériques, Niveau H
                pour les factures imprimées
              </li>
              <li>
                <strong>IBAN en texte:</strong> Ajouter également en texte (solution de repli pour
                les utilisateurs sans lecteur)
              </li>
              <li>
                <strong>Référence de paiement:</strong> Inclure le numéro de facture pour une
                attribution facile
              </li>
            </ul>

            <div className="not-prose my-8 flex flex-wrap gap-3">
              <Link
                href="/fr"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#16a34a 0%,#15803d 100%)' }}
              >
                Créer GiroCode maintenant →
              </Link>
            </div>

            <h2>Questions fréquemment posées</h2>

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
                <h2 className="text-base font-bold text-[#e8eaf0]">Autres articles</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { href: '/fr', label: 'Créer GiroCode maintenant' },
                  { href: '/fr/girocode-scannen-anleitung', label: 'Comment scanner un GiroCode' },
                  { href: '/fr/freelancer', label: 'GiroCode pour Freelancers' },
                  { href: '/fr/wissen/girocode', label: 'Qu\'est-ce qu\'un GiroCode?' },
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
