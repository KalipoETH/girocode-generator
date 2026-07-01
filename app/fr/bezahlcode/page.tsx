import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Générateur BezahlCode – Créer gratuitement (= GiroCode)',
  description:
    "Créer un BezahlCode (maintenant GiroCode) gratuitement: L'ancien nom des codes QR SEPA. Générez votre BezahlCode/GiroCode en 10 secondes – sans inscription.",
  alternates: {
    canonical: `${SITE_URL}/fr/bezahlcode`,
    languages: {
      'x-default': `${SITE_URL}/bezahlcode`,
      de: `${SITE_URL}/bezahlcode`,
      en: `${SITE_URL}/en/bezahlcode`,
      fr: `${SITE_URL}/fr/bezahlcode`,
      es: `${SITE_URL}/es/bezahlcode`,
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre BezahlCode et GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Il n'y a aucune différence technique. BezahlCode est l'ancien nom allemand pour le même code QR SEPA. Depuis 2018, le terme GiroCode est utilisé comme désignation officielle par le Conseil européen des paiements (EPC). Les deux termes décrivent exactement le même format selon la norme EPC069-12.",
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je encore utiliser un BezahlCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, absolument. Comme BezahlCode et GiroCode sont techniquement identiques et suivent tous deux la norme EPC069-12, un BezahlCode fonctionne exactement comme un GiroCode. Toutes les applications bancaires qui supportent les GiroCodes reconnaissent également les BezahlCodes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles applications supportent BezahlCode/GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Toutes les grandes applications bancaires allemandes supportent BezahlCode/GiroCode: Sparkasse, ING, DKB, Volksbank, Commerzbank, Deutsche Bank, N26, Postbank, Comdirect et Targobank. Comme le code QR est basé sur la norme européenne EPC, il fonctionne dans les 36 pays SEPA.',
      },
    },
  ],
};

const stats = [
  { value: '2018', label: 'BezahlCode est devenu GiroCode' },
  { value: 'EPC069-12', label: 'Norme commune' },
  { value: '10 sec.', label: 'Temps de création' },
  { value: '100%', label: 'Gratuit' },
];

const bankingApps = [
  'Sparkasse', 'ING', 'DKB', 'Volksbank', 'Commerzbank',
  'Deutsche Bank', 'N26', 'Postbank', 'Comdirect', 'Targobank',
];

const relatedLinks = [
  { href: '/fr/sepa-qr-code', label: 'Générateur QR Code SEPA' },
  { href: '/fr/epc-qr-code', label: 'Générateur EPC QR Code' },
  { href: '/fr/wissen/girocode', label: "Qu'est-ce qu'un GiroCode?" },
  { href: '/fr', label: 'Créer GiroCode gratuitement' },
];

export default function BezahlcodeFrPage() {
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
              <li className="text-slate-400">Générateur BezahlCode</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Noms alternatifs · GiroCode / BezahlCode
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              Générateur BezahlCode – Gratuit &amp; Instantané
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
              BezahlCode est l&apos;ancien nom allemand de ce qui s&apos;appelle officiellement
              GiroCode (code QR SEPA). Depuis 2018, le terme BezahlCode a été remplacé par le terme
              officiel EPC GiroCode. Les deux désignent la même norme : EPC069-12 du Conseil
              européen des paiements.
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

            <h2>BezahlCode = GiroCode : Même norme, nom différent</h2>
            <p>
              Toute personne cherchant un générateur BezahlCode cherche en fait la même chose
              qu&apos;un générateur GiroCode – car BezahlCode et GiroCode sont techniquement
              identiques. Les deux désignent un code QR standardisé pour les virements SEPA, construit
              selon la <strong>norme EPC069-12</strong> du Conseil européen des paiements.
            </p>
            <p>
              Le terme <em>BezahlCode</em> est apparu en Allemagne comme un nom marketing pour ce
              type de code QR. Les banques et les prestataires de services de paiement
              l&apos;utilisaient pour offrir à leurs clients un moyen simple de partager des données
              de virement par code QR. Avec la standardisation progressive à l&apos;échelle
              européenne, le terme <em>GiroCode</em> s&apos;est imposé comme nom officiel.
            </p>

            <h2>Quand BezahlCode est-il devenu GiroCode?</h2>
            <p>
              En <strong>2018</strong>, le Conseil européen des paiements (EPC) a officiellement
              standardisé le format sous le nom <em>GiroCode</em>. La spécification technique
              EPC069-12 a défini comment les données de paiement SEPA doivent être encodées dans un
              code QR – incluant l&apos;IBAN, le nom du bénéficiaire, le montant optionnel et la
              référence de paiement.
            </p>
            <p>
              Le renommage faisait partie de l&apos;initiative plus large d&apos;harmonisation des
              paiements SEPA en Europe. Depuis lors, GiroCode est le terme officiel dans toute
              l&apos;UE et les 36 pays SEPA. Cependant, dans les applications bancaires allemandes,
              le terme BezahlCode se retrouve encore fréquemment dans la documentation d&apos;aide.
            </p>
            <p>
              Un code QR généré avec ce générateur est conforme à 100 % à la norme EPC069-12 et
              fonctionne que vous l&apos;appeliez BezahlCode ou GiroCode.
            </p>

            <h2>Applications bancaires supportant BezahlCode/GiroCode</h2>
            <p>
              Toutes les grandes banques allemandes supportent la norme BezahlCode/GiroCode dans
              leurs applications mobiles. Puisque c&apos;est le même code QR, un code QR généré
              fonctionne avec toutes les applications suivantes :
            </p>
            <ul>
              {bankingApps.map((app) => (
                <li key={app}>{app}</li>
              ))}
            </ul>
            <p>
              Les banques autrichiennes (p. ex. Erste Bank, Raiffeisen, BAWAG), les banques
              suisses et toutes les autres banques dans l&apos;espace SEPA supportent également
              cette norme. Au total, plus de 36 pays européens sont compatibles.
            </p>

            {/* CTA */}
            <div className="not-prose my-8">
              <Link
                href="/fr"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
              >
                Créer BezahlCode / GiroCode →
              </Link>
            </div>

            <h2>FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Quelle est la différence entre BezahlCode et GiroCode?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Il n&apos;y a aucune différence technique. BezahlCode est l&apos;ancien nom
                  allemand pour le même code QR SEPA. Depuis 2018, le terme GiroCode est utilisé
                  comme désignation officielle par le Conseil européen des paiements (EPC). Les deux
                  termes décrivent exactement le même format selon la norme EPC069-12.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Puis-je encore utiliser un BezahlCode?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Oui, absolument. Comme BezahlCode et GiroCode sont techniquement identiques et
                  suivent tous deux la norme EPC069-12, un BezahlCode fonctionne exactement comme
                  un GiroCode. Toutes les applications bancaires qui supportent les GiroCodes
                  reconnaissent également les BezahlCodes.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e8eaf0]">
                  Quelles applications supportent BezahlCode/GiroCode?
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Toutes les grandes applications bancaires allemandes supportent
                  BezahlCode/GiroCode : Sparkasse, ING, DKB, Volksbank, Commerzbank, Deutsche Bank,
                  N26, Postbank, Comdirect et Targobank. Comme le code QR est basé sur la norme
                  européenne EPC, il fonctionne dans les 36 pays SEPA.
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
