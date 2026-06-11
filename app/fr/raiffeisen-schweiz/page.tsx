import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode avec Raiffeisen Schweiz – Guide étape par étape 2026',
  description:
    'Scanner un GiroCode avec Raiffeisen Schweiz: Ouvrir le scanner QR dans l\'app Raiffeisen e-banking App, scanner le code, confirmer le virement. ✅ Guide étape par étape 2026.',
  keywords: 'girocode raiffeisen-schweiz, raiffeisen-schweiz girocode scan, raiffeisen-schweiz qr code, sepa qr raiffeisen-schweiz',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/fr/raiffeisen-schweiz',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/raiffeisen-schweiz',
      de: 'https://www.girocodegenerator.com/raiffeisen-schweiz',
      en: 'https://www.girocodegenerator.com/en/raiffeisen-schweiz',
      fr: 'https://www.girocodegenerator.com/fr/raiffeisen-schweiz',
      es: 'https://www.girocodegenerator.com/es/raiffeisen-schweiz',
      it: 'https://www.girocodegenerator.com/it/raiffeisen-schweiz',
    },
  },
};

const otherBanks = [
  { href: '/ubs', label: 'UBS' },
  { href: '/zuercher-kantonalbank', label: 'Zürcher Kantonalbank' },
  { href: '/postfinance', label: 'PostFinance' },
  { href: '/credit-suisse-ubs', label: 'Credit Suisse (now UBS)' },
  { href: '/cantonal-banks', label: 'Cantonal Banks' },
  { href: '/sparkasse', label: 'Sparkasse (Germany)' },
  { href: '/volksbank', label: 'Volksbank / VR-Banking' },
];

const faqItems = [
  {
    question: 'L\'app Raiffeisen e-banking App supporte-t-elle tous les GiroCodes ?',
    answer:
      'Oui, l\'app Raiffeisen e-banking App reconnaît tous les codes QR SEPA conformes EPC (GiroCodes). Assurez-vous que l\'app est à jour. Vérifiez l\'App Store ou Google Play pour les mises à jour.',
  },
  {
    question: 'Où trouver le scanner QR dans l\'app Raiffeisen e-banking App ?',
    answer:
      'Vous trouverez le scanner QR sous « Paiements » – cherchez l\'icône caméra. Appuyez dessus pour ouvrir la vue scanner.',
  },
  {
    question: 'Que faire si le scan ne fonctionne pas ?',
    answer:
      'Augmentez la luminosité de l\'écran pour scanner des codes numériques. Tenez la caméra à environ 15–30 cm du code et assurez-vous d\'un bon éclairage. Pour les codes imprimés, utilisez du papier lisse et non froissé.',
  },
  {
    question: 'Le scan GiroCode est-il sécurisé ?',
    answer:
      'Oui. Vous voyez toujours toutes les données de virement avant de confirmer. La confirmation nécessite PhotoTAN ou biométrie. Le code lui-même ne contient aucune donnée sensible qui pourrait être détournée.',
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

export default function RaiffeisenSchweizFrPage() {
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
                <Link href="/fr" className="text-sky-400 hover:text-sky-300">Accueil</Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">Raiffeisen Schweiz</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="mb-10 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Compatible avec Raiffeisen e-banking App
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              Scanner un GiroCode avec Raiffeisen Schweiz
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              Comment utiliser les GiroCodes (codes QR SEPA) avec Raiffeisen Schweiz – étape par étape. Terminé en moins de 30 secondes.
            </p>
          </header>

          <article className="prose prose-invert prose-lg max-w-none">

            {/* Steps */}
            <section aria-labelledby="steps">
              <h2 id="steps">Guide étape par étape</h2>
              <p>L'app Raiffeisen e-banking App de Raiffeisen Schweiz dispose d'un scanner GiroCode intégré. Voici comment l'utiliser :</p>
              <ol>
                <li dangerouslySetInnerHTML={{ __html: '<strong>Ouvrir l\'app Raiffeisen e-banking App</strong> et se connecter avec PIN, empreinte digitale ou Face ID.' }} />
                <li dangerouslySetInnerHTML={{ __html: '<strong>Appuyer sur « Paiements »</strong> dans le menu.' }} />
                <li dangerouslySetInnerHTML={{ __html: '<strong>Appuyer sur l\'icône scanner QR</strong> (icône caméra). Accorder l\'autorisation caméra lors de la première utilisation.' }} />
                <li dangerouslySetInnerHTML={{ __html: '<strong>Scanner le GiroCode</strong> – tenir la caméra à 15–30 cm du code. L\'app le reconnaît automatiquement.' }} />
                <li dangerouslySetInnerHTML={{ __html: '<strong>Vérifier les données :</strong> Nom du bénéficiaire, IBAN, montant et référence sont remplis automatiquement. Toujours vérifier avant de confirmer !' }} />
                <li dangerouslySetInnerHTML={{ __html: '<strong>Confirmer le virement</strong> avec PhotoTAN ou biométrie. Terminé.' }} />
              </ol>
              <p dangerouslySetInnerHTML={{ __html: '<strong>Conseil :</strong> Pour scanner un écran, mettez la luminosité au maximum. Pour les codes imprimés, assurez-vous d\'un bon éclairage. Tenez la caméra stable.' }} />
            </section>

            {/* Browser Scanner */}
            <section aria-labelledby="browser-scanner" className="mt-10">
              <h2 id="browser-scanner">Scanner un GiroCode dans le navigateur</h2>
              <p>Pas accès à votre app bancaire ou vous voulez lire rapidement un GiroCode sur votre ordinateur ? Notre scanner de navigateur gratuit lit les GiroCodes directement dans le navigateur – sans app, sans installation, 100 % local.</p>
              <p>Il affiche toutes les données contenues dans le code : IBAN, nom du bénéficiaire, montant et référence de paiement – idéal pour vérifier avant de saisir le virement manuellement.</p>
              <div className="not-prose mt-4">
                <Link
                  href="/fr/scanner"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,197,94,0.4)]"
                  style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: '#ffffff' }}
                >
                  Scanner un GiroCode →
                </Link>
              </div>
            </section>

            {/* Create GiroCode */}
            <section aria-labelledby="create" className="mt-10">
              <h2 id="create">Créer votre propre GiroCode</h2>
              <p>Vous souhaitez créer un GiroCode pour votre facture ou demande de paiement ? Notre générateur GiroCode gratuit crée un code QR SEPA conforme EPC directement dans le navigateur – sans inscription, sans partage de données, téléchargeable instantanément.</p>
              <div className="not-prose mt-4">
                <Link
                  href="/fr"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,197,94,0.4)]"
                  style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: '#ffffff' }}
                >
                  Créer un GiroCode gratuitement →
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section aria-labelledby="faq" className="mt-10">
              <h2 id="faq">FAQ – GiroCode avec Raiffeisen Schweiz</h2>
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

          {/* More Banking Apps */}
          <div className="mt-12 border-t border-slate-800 pt-8">
            <h2 className="mb-4 text-base font-bold text-[#e8eaf0]">Autres applications bancaires</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {otherBanks.map((bank) => (
                <Link
                  key={bank.href}
                  href={'/fr' + bank.href}
                  className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:text-[#e8eaf0] hover:-translate-y-0.5"
                >
                  <span>GiroCode avec {bank.label}</span>
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
