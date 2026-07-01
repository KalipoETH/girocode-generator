import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GiroCode ne fonctionne pas – Causes & Solutions 2026',
  description:
    'GiroCode non reconnu ou ne scanne pas? Les 7 causes les plus fréquentes et des solutions immédiates. Expliqué pour toutes les applications bancaires.',
  alternates: {
    canonical: `${SITE_URL}/fr/girocode-funktioniert-nicht`,
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
      name: 'Pourquoi mon application bancaire ne scanne-t-elle pas le GiroCode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les causes les plus fréquentes: l\'application ne prend pas en charge la norme EPC, QR Code trop petit (min. 2×2 cm), mauvais éclairage ou mauvaise zone de scan dans l\'application (cherchez sous "Virement" → "QR Code").',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle taille doit avoir un GiroCode imprimé?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Au moins 2×2 cm. Recommandé: 3×3 cm sur les factures. En dessous de 2×2 cm, la caméra ne peut pas lire le code de manière fiable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je scanner un GiroCode avec l\'application caméra normale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non, les scanners QR ordinaires ne reconnaissent pas le contenu EPC comme un virement bancaire. Vous avez besoin d\'une application bancaire ou de notre scanner de navigateur (/scanner).',
      },
    },
    {
      '@type': 'Question',
      name: 'Que faire si le GiroCode affiche des données incorrectes après le scan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vérifiez si le code a été créé avec un format IBAN validé. Assurez-vous que le code a été créé avec un générateur compatible EPC (comme le nôtre).',
      },
    },
  ],
};

const problems = [
  {
    title: 'QR Code imprimé trop petit',
    solution: 'Respecter la taille minimale de 2×2 cm. Pour les PDF: qualité d\'impression min. 150 DPI.',
  },
  {
    title: 'Mauvais éclairage lors du scan',
    solution: 'Régler la luminosité de l\'écran au maximum. Pas de reflets. Préférer la lumière indirecte.',
  },
  {
    title: 'Mauvaise distance par rapport au QR Code',
    solution: 'Distance optimale: 15–30 cm. Ni trop proche ni trop loin.',
  },
  {
    title: 'L\'application bancaire ne prend pas en charge GiroCode',
    solution:
      'Vérifiez si votre application prend en charge SEPA-QR/EPC. Toutes les grandes banques allemandes (Sparkasse, ING, DKB, Volksbank, Commerzbank) prennent en charge la norme.',
  },
  {
    title: 'Le QR Code contient un IBAN invalide',
    solution: 'Valider l\'IBAN avec un outil de vérification. Notre générateur vérifie les IBAN automatiquement (Mod-97).',
  },
  {
    title: 'Le QR Code est endommagé ou flou',
    solution: 'Recréer le code. Utiliser le niveau de correction d\'erreur H pour les codes imprimés.',
  },
  {
    title: 'Mauvais réglage de l\'application',
    solution:
      'Cherchez dans le menu de l\'application "Virement" → "QR Code". Dans certaines applications, sous "Scan".',
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
                <Link href="/fr" className="text-sky-400 hover:text-sky-300">
                  Accueil
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">GiroCode ne fonctionne pas</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Dépannage · Résoudre les problèmes GiroCode
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              GiroCode ne fonctionne pas – 7 Causes &amp; Solutions
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
              Si un GiroCode ne fonctionne pas, c'est généralement dû à une taille d'impression
              trop petite (taille minimale: 2×2 cm), un mauvais éclairage, des reflets sur l'écran
              ou une application bancaire qui ne prend pas en charge la norme EPC.
            </p>
          </div>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2>7 causes fréquentes &amp; solutions</h2>

            <div className="not-prose space-y-3 mb-8">
              {problems.map((p, i) => (
                <div key={i} className="rounded-xl border border-[#1f2431] bg-[#0f1117] p-5">
                  <div className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#22c55e]/20 text-xs font-bold text-[#22c55e]">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="mb-1 text-sm font-bold text-slate-50">{p.title}</h3>
                      <p className="text-sm text-slate-400">Solution: {p.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p>
              La plupart des problèmes de GiroCode peuvent être résolus en quelques minutes. Si
              votre application bancaire ne prend pas du tout en charge les GiroCodes, consultez
              notre{' '}
              <Link href="/fr/wissen/banking-apps" className="text-[#22c55e] hover:underline">
                aperçu de toutes les applications bancaires compatibles
              </Link>
              .
            </p>

            <div className="not-prose my-8 flex flex-wrap gap-3">
              <Link
                href="/fr"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#16a34a 0%,#15803d 100%)' }}
              >
                Recréer GiroCode →
              </Link>
              <Link
                href="/scanner"
                className="inline-flex items-center gap-2 rounded-xl border border-[#1f2431] px-6 py-3 text-sm font-bold text-slate-300 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-500/30"
              >
                Utiliser Scanner Navigateur →
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
                  { href: '/fr/wissen/banking-apps', label: 'Aperçu des apps bancaires' },
                  { href: '/fr/girocode-scannen-anleitung', label: 'Comment scanner un GiroCode' },
                  { href: '/fr', label: 'Recréer GiroCode' },
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
