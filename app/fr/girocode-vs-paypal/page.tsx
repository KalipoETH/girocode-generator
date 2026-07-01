import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GiroCode vs. PayPal – Quelle méthode de paiement est meilleure ? (2026)',
  description: 'GiroCode ou PayPal ? Comparaison directe : coûts, confidentialité, portée et cas d\'utilisation. Avec tableau comparatif.',
  alternates: {
    canonical: `${SITE_URL}/fr/girocode-vs-paypal`,
    languages: {
      'x-default': `${SITE_URL}/girocode-vs-paypal`,
      'de': `${SITE_URL}/girocode-vs-paypal`,
      'en': `${SITE_URL}/en/girocode-vs-paypal`,
      'fr': `${SITE_URL}/fr/girocode-vs-paypal`,
      'es': `${SITE_URL}/es/girocode-vs-paypal`,
      'it': `${SITE_URL}/it/girocode-vs-paypal`,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Article', articleType: 'ComparisonArticle',
  headline: 'GiroCode vs. PayPal – Quelle méthode de paiement est meilleure ?',
  description: 'GiroCode ou PayPal ? Comparaison directe : coûts, confidentialité, portée et cas d\'utilisation.',
  author: { '@type': 'Person', name: 'Kaleb Jahnke' },
  publisher: { '@type': 'Organization', name: 'GiroCode Generator', url: SITE_URL },
  datePublished: '2026-05-01', dateModified: '2026-05-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/fr/girocode-vs-paypal` },
};

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Combien coûte GiroCode par rapport à PayPal ?', acceptedAnswer: { '@type': 'Answer', text: 'GiroCode est entièrement gratuit pour l\'expéditeur et le bénéficiaire. PayPal facture au bénéficiaire 1,2–3,4 % plus des frais fixes par transaction.' } },
    { '@type': 'Question', name: 'GiroCode est-il conforme au RGPD ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. GiroCode ne traite aucune donnée personnelle via des tiers. Le virement passe directement par votre propre banque sans serveurs américains.' } },
    { '@type': 'Question', name: 'Quand utiliser PayPal plutôt que GiroCode ?', acceptedAnswer: { '@type': 'Answer', text: 'PayPal est préférable pour les paiements internationaux hors zone SEPA, les boutiques en ligne avec protection acheteur, et les paiements spontanés sans IBAN connu.' } },
    { '@type': 'Question', name: 'Puis-je utiliser GiroCode à l\'étranger ?', acceptedAnswer: { '@type': 'Answer', text: 'GiroCode fonctionne dans toute la zone SEPA (36 pays). Pour les paiements hors SEPA, PayPal ou SWIFT est le meilleur choix.' } },
  ],
};

export default function GirocodeVsPaypalPageFr() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
          <nav aria-label="Fil d'Ariane" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li><Link href="/fr" className="text-sky-400 hover:text-sky-300">Accueil</Link></li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">GiroCode vs. PayPal</li>
            </ol>
          </nav>
          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />Comparaison · Méthodes de paiement 2026
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">GiroCode vs. PayPal : La comparaison directe (2026)</h1>
          </header>
          <div className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3" role="note">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">💡 Réponse rapide</p>
            <p className="text-sm leading-relaxed text-slate-300">GiroCode est gratuit et conforme au RGPD pour les virements SEPA, tandis que PayPal facture 1,2–3,4 % + frais fixes et transfère des données vers des serveurs américains. GiroCode est idéal pour les factures et virements directs ; PayPal pour les paiements internationaux et les boutiques en ligne.</p>
          </div>
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { value: '0 €', label: 'Coût GiroCode pour le bénéficiaire' },
              { value: '1,2–3,4%', label: 'Frais PayPal pour le bénéficiaire' },
              { value: '36', label: 'Pays SEPA avec GiroCode' },
              { value: '100%', label: 'Conformité RGPD GiroCode' },
            ].map((stat, i) => (
              <div key={i} className="rounded-lg border border-[#1f2431] bg-[#0f1117] p-4 text-center">
                <p className="text-2xl font-bold text-[#22c55e]">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-[#8b90a0]">{stat.label}</p>
              </div>
            ))}
          </div>
          <article className="prose prose-invert prose-lg max-w-none">
            <h2>Tableau comparatif : GiroCode vs. PayPal</h2>
            <div className="not-prose my-6 overflow-x-auto rounded-lg border border-slate-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 text-slate-300">
                    <th className="px-4 py-3 text-left font-medium">Critère</th>
                    <th className="px-4 py-3 text-left font-medium text-[#22c55e]">GiroCode</th>
                    <th className="px-4 py-3 text-left font-medium text-slate-400">PayPal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50 text-slate-300">
                  {[
                    ['Coût bénéficiaire', 'Gratuit', '1,2–3,4 % + frais fixes'],
                    ['Coût payeur', 'Gratuit', 'Gratuit (paiement standard)'],
                    ['Confidentialité', 'Conforme RGPD, local', 'Entreprise US, partage de données'],
                    ['Inscription requise', 'Aucune', 'Compte PayPal obligatoire'],
                    ['Portée en Allemagne', 'Toutes les banques SEPA', 'Très répandu'],
                    ['Type de paiement', 'Virement SEPA', 'Solde PayPal / carte'],
                    ['Protection acheteur', 'Non', 'Disponible'],
                    ['Idéal pour', 'Factures, B2B', 'Boutiques en ligne, international'],
                  ].map(([c, g, p], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-slate-800/30' : ''}>
                      <td className="px-4 py-3 font-medium text-slate-200">{c}</td>
                      <td className="px-4 py-3 text-[#22c55e]">{g}</td>
                      <td className="px-4 py-3">{p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h2>Quand GiroCode est-il meilleur ?</h2>
            <ul>
              <li><strong>Factures B2B :</strong> Aucun frais, virement SEPA direct sur votre compte professionnel.</li>
              <li><strong>Cotisations associatives :</strong> Un seul QR code pour tous les membres, sans inscription.</li>
              <li><strong>Paiements directs sans tiers :</strong> L&apos;argent va directement de banque à banque.</li>
              <li><strong>Environnements sensibles au RGPD :</strong> Pas de partage de données avec PayPal Inc.</li>
            </ul>
            <h2>Quand PayPal est-il meilleur ?</h2>
            <ul>
              <li><strong>Paiements internationaux :</strong> Hors zone SEPA, GiroCode n&apos;est pas valable.</li>
              <li><strong>Boutiques en ligne avec protection acheteur :</strong> PayPal couvre la non-livraison et les défauts.</li>
              <li><strong>Paiements à des inconnus :</strong> Seule l&apos;adresse e-mail est nécessaire, pas d&apos;IBAN.</li>
              <li><strong>Paiements mobiles instantanés :</strong> Pratique entre particuliers sans coordonnées bancaires.</li>
            </ul>
            <div className="not-prose my-4 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/40 px-4 py-3 text-sm leading-relaxed text-slate-300">
              <strong className="text-slate-100">Recommandation :</strong> Pour les entreprises et freelances allemands, GiroCode est l&apos;alternative gratuite et respectueuse de la vie privée à PayPal pour les factures et virements SEPA. PayPal reste pertinent pour les paiements internationaux et la protection e-commerce.
            </div>
            <div className="not-prose my-8">
              <Link href="/fr" className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: '#ffffff' }}>
                Créer un GiroCode gratuitement →
              </Link>
            </div>
            <h2>FAQ</h2>
            <div className="space-y-6">
              {faqJsonLd.mainEntity.map((item, i) => (
                <div key={i}>
                  <h3 className="text-sm font-semibold text-slate-50">{item.name}</h3>
                  <p className="text-sm text-slate-300">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
            <div className="not-prose mt-10 rounded-2xl border border-[#1f2431] bg-[#0f1117] p-5">
              <div className="mb-4 flex items-center gap-3"><span className="text-xl" aria-hidden>📚</span><h2 className="text-base font-bold text-[#e8eaf0]">Autres comparaisons</h2></div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { href: '/fr/girocode-vs-bankueberweisung', label: 'GiroCode vs. virement manuel' },
                  { href: '/fr/girocode-vs-lastschrift', label: 'GiroCode vs. prélèvement SEPA' },
                  { href: '/fr/wissen/girocode', label: "Qu'est-ce qu'un GiroCode ?" },
                  { href: '/fr/wissen/banking-apps', label: 'Apps bancaires avec GiroCode' },
                ].map((a) => (
                  <Link key={a.href} href={a.href} className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3.5 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/30 hover:text-[#e8eaf0] hover:-translate-y-0.5">
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
