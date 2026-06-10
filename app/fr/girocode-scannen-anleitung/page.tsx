import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Comment Scanner un GiroCode – Guide Complet pour Toutes les Apps 2026',
  description:
    'Scanner GiroCode avec Sparkasse, ING, DKB, Volksbank et plus: Guide étape par étape pour toutes les apps bancaires. Avec caméra ou import de fichier.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/fr/girocode-scannen-anleitung',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/girocode-scannen-anleitung',
      'de': 'https://www.girocodegenerator.com/girocode-scannen-anleitung',
      'en': 'https://www.girocodegenerator.com/en/girocode-scannen-anleitung',
      'fr': 'https://www.girocodegenerator.com/fr/girocode-scannen-anleitung',
      'es': 'https://www.girocodegenerator.com/es/girocode-scannen-anleitung',
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Où trouver le scanner QR dans mon application bancaire?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sous "Virement" ou "Envoyer de l\'argent" il y a une icône caméra/QR. Dans certaines applications aussi sous "Scan & Pay".',
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je scanner un GiroCode sans application bancaire?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, avec notre scanner de navigateur sur /scanner. Cependant, les lecteurs QR ordinaires comme Google Lens ne reconnaissent pas le contenu EPC comme un virement bancaire.',
      },
    },
    {
      '@type': 'Question',
      name: 'GiroCode scanne mais l\'application bancaire affiche une erreur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'L\'IBAN pourrait être invalide ou le montant pourrait dépasser le maximum autorisé. Recréer le code et vérifier l\'IBAN.',
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je scanner des GiroCodes depuis un PDF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, de nombreuses applications bancaires permettent l\'importation de photos/captures d\'écran. Vous pouvez également utiliser notre scanner de navigateur.',
      },
    },
  ],
};

const banks = [
  { name: 'Sparkasse App', path: 'Virement → Icône QR Code en haut à droite' },
  { name: 'ING Banking to go', path: 'Virement → Symbole caméra' },
  { name: 'DKB Banking', path: 'Virement → Scanner QR Code' },
  { name: 'Volksbank / VR-Banking', path: 'Virement → Icône QR Code' },
  { name: 'Commerzbank', path: 'Virement → QR Code' },
  { name: 'Deutsche Bank', path: 'Virement → QR Code' },
  { name: 'N26', path: 'Envoyer → Scanner QR Code' },
  { name: 'Postbank', path: 'Virement → Icône QR Code' },
  { name: 'Comdirect', path: 'Virement → QR Code' },
  { name: 'Targobank', path: 'Virement → Scanner QR Code' },
];

const stats = [
  { value: '30 sec.', label: 'Scan au virement' },
  { value: '10+', label: 'Applications bancaires supportées' },
  { value: '36', label: 'Pays SEPA compatibles' },
  { value: 'EPC069-12', label: 'Standard supporté' },
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
                <Link href="/fr" className="text-sky-400 hover:text-sky-300">
                  Accueil
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">Comment Scanner un GiroCode</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Guide · Scanner GiroCode
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              Comment Scanner un GiroCode – Guide pour Toutes les Apps Bancaires
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
              Scanner GiroCode: Ouvrir l&apos;app bancaire → appuyer sur &quot;Virement&quot; → appuyer sur
              l&apos;icône scanner QR → scanner le GiroCode → vérifier les données → confirmer avec TAN.
              L&apos;ensemble du processus prend moins de 30 secondes. Fonctionne avec Sparkasse, ING,
              DKB, Volksbank et toutes les autres applications compatibles SEPA.
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
            <h2>Guide de scan général (3 étapes)</h2>

            <div className="not-prose space-y-3 mb-8">
              {[
                {
                  n: '1',
                  title: 'Ouvrir l\'application bancaire et naviguer vers "Virement"',
                  desc: 'Lancez votre application bancaire et appuyez sur "Virement" ou "Envoyer de l\'argent". Dans certaines applications, la fonction se trouve sous "Paiements" ou "Payer & Virer".',
                },
                {
                  n: '2',
                  title: 'Appuyer sur l\'icône scanner QR',
                  desc: 'Dans le formulaire de virement, une icône caméra ou QR Code apparaît. Appuyez dessus pour ouvrir le scanner. Dans certaines applications, vous devez d\'abord sélectionner "Nouveau virement".',
                },
                {
                  n: '3',
                  title: 'Scanner le GiroCode et confirmer',
                  desc: 'Tenez la caméra sur le GiroCode. Les coordonnées du bénéficiaire (IBAN, nom, montant, référence) sont remplies automatiquement. Vérifiez les données et confirmez avec votre TAN.',
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="rounded-xl border border-[#1f2431] bg-[#0f1117] p-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#22c55e]/20 text-xs font-bold text-[#22c55e]">
                      {step.n}
                    </span>
                    <div>
                      <h3 className="mb-1 text-sm font-bold text-slate-50">{step.title}</h3>
                      <p className="text-sm text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2>Instructions par application</h2>

            <div className="not-prose space-y-2 mb-6">
              {banks.map((b, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-[#1f2431] bg-[#0f1117] px-4 py-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#22c55e]/20 text-xs font-bold text-[#22c55e]">
                    {i + 1}
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-slate-200">{b.name}: </span>
                    <span className="text-sm text-slate-400">{b.path}</span>
                  </div>
                </div>
              ))}
            </div>

            <h2>Problèmes fréquents lors du scan</h2>
            <p>
              Si le scan ne fonctionne pas, vérifiez d&apos;abord l&apos;éclairage, la distance et la
              taille du QR Code. Un aperçu complet de tous les problèmes possibles et de leurs
              solutions se trouve dans notre article{' '}
              <Link href="/fr/girocode-funktioniert-nicht" className="text-[#22c55e] hover:underline">
                GiroCode ne fonctionne pas – 7 Causes &amp; Solutions
              </Link>
              .
            </p>

            <h2>Alternative: Scanner dans le navigateur</h2>
            <p>
              Avec notre scanner de navigateur, les GiroCodes peuvent également être scannés
              directement sur un PC ou une tablette, sans application bancaire. Il suffit de
              télécharger le fichier image ou d&apos;utiliser la caméra – les données de virement sont
              lues immédiatement.
            </p>

            <div className="not-prose my-6 flex flex-wrap gap-3">
              <Link
                href="/scanner"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#16a34a 0%,#15803d 100%)' }}
              >
                Scanner GiroCode dans le Navigateur →
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
                  { href: '/scanner', label: 'Scanner GiroCode Navigateur' },
                  { href: '/fr/girocode-funktioniert-nicht', label: 'GiroCode ne fonctionne pas – Solutions' },
                  { href: '/fr/wissen/banking-apps', label: 'Aperçu des apps bancaires' },
                  { href: '/fr/girocode-erstellen-anleitung', label: 'Comment créer un GiroCode' },
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
