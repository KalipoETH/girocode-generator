import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "GiroCode vs. prélèvement SEPA – Différences et cas d'utilisation (2026)",
  description: "GiroCode ou prélèvement SEPA ? Quand chaque méthode est le meilleur choix. Avec tableau comparatif et exemples concrets.",
  alternates: {
    canonical: 'https://www.girocodegenerator.com/fr/girocode-vs-lastschrift',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/girocode-vs-lastschrift',
      'de': 'https://www.girocodegenerator.com/girocode-vs-lastschrift',
      'en': 'https://www.girocodegenerator.com/en/girocode-vs-lastschrift',
      'fr': 'https://www.girocodegenerator.com/fr/girocode-vs-lastschrift',
      'es': 'https://www.girocodegenerator.com/es/girocode-vs-lastschrift',
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Article', articleType: 'ComparisonArticle',
  headline: "GiroCode vs. prélèvement SEPA – Différences et cas d'utilisation",
  description: "GiroCode ou prélèvement SEPA ? Quand chaque méthode est le meilleur choix.",
  author: { '@type': 'Person', name: 'Kaleb Jahnke' },
  publisher: { '@type': 'Organization', name: 'GiroCode Generator', url: 'https://www.girocodegenerator.com' },
  datePublished: '2026-05-01', dateModified: '2026-05-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.girocodegenerator.com/fr/girocode-vs-lastschrift' },
};

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Quelle est la différence entre GiroCode et prélèvement SEPA ?', acceptedAnswer: { '@type': 'Answer', text: 'GiroCode est une demande de paiement – le payeur vire activement. Le prélèvement SEPA est une autorisation de débit – le bénéficiaire prélève l\'argent. GiroCode ne nécessite pas de mandat et est utilisable immédiatement.' } },
    { '@type': 'Question', name: 'Ai-je besoin d\'un mandat SEPA pour GiroCode ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. GiroCode ne nécessite pas de mandat car le payeur vire activement. Le prélèvement SEPA exige une autorisation écrite (mandat SEPA) du payeur.' } },
    { '@type': 'Question', name: 'Un prélèvement SEPA peut-il être annulé ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Les prélèvements SEPA peuvent être annulés dans les 8 semaines sans justification. Pour les prélèvements non autorisés, le délai est jusqu\'à 13 mois. Les GiroCodes ne peuvent pas être annulés car ce sont des virements.' } },
    { '@type': 'Question', name: 'Combien coûte un prélèvement SEPA par rapport à GiroCode ?', acceptedAnswer: { '@type': 'Answer', text: 'Les prélèvements SEPA coûtent au bénéficiaire 0,20–0,35 € par prélèvement selon la banque. GiroCode est entièrement gratuit pour les deux parties.' } },
  ],
};

export default function GirocodeVsLastschriftPageFr() {
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
              <li className="text-slate-400">GiroCode vs. prélèvement SEPA</li>
            </ol>
          </nav>
          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />Comparaison · Méthodes de paiement 2026
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">GiroCode vs. prélèvement SEPA : La différence</h1>
          </header>
          <div className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3" role="note">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">💡 Réponse rapide</p>
            <p className="text-sm leading-relaxed text-slate-300">GiroCode est une demande de paiement – le payeur vire activement. Le prélèvement SEPA est une autorisation de débit – le bénéficiaire prélève l&apos;argent. GiroCode ne nécessite pas de mandat et est utilisable immédiatement, tandis que les prélèvements exigent un mandat SEPA signé.</p>
          </div>
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { value: '0 €', label: 'GiroCode par transaction' },
              { value: '0,20–0,35 €', label: 'Prélèvement par opération' },
              { value: 'Aucun', label: 'Mandat requis pour GiroCode' },
              { value: '8 sem.', label: 'Délai remboursement prélèvement' },
            ].map((stat, i) => (
              <div key={i} className="rounded-lg border border-[#1f2431] bg-[#0f1117] p-4 text-center">
                <p className="text-2xl font-bold text-[#22c55e]">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-[#8b90a0]">{stat.label}</p>
              </div>
            ))}
          </div>
          <article className="prose prose-invert prose-lg max-w-none">
            <h2>Tableau comparatif</h2>
            <div className="not-prose my-6 overflow-x-auto rounded-lg border border-slate-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 text-slate-300">
                    <th className="px-4 py-3 text-left font-medium">Critère</th>
                    <th className="px-4 py-3 text-left font-medium text-[#22c55e]">GiroCode</th>
                    <th className="px-4 py-3 text-left font-medium text-slate-400">Prélèvement SEPA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50 text-slate-300">
                  {[
                    ['Initiation paiement', 'Payeur (actif)', 'Bénéficiaire (passif)'],
                    ['Mandat requis', 'Non', 'Oui (écrit)'],
                    ['Utilisable immédiatement', 'Oui', 'Non (mandat nécessaire)'],
                    ['Remboursement possible', 'Non', 'Oui (jusqu\'à 8 semaines)'],
                    ['Idéal pour', 'Paiements ponctuels', 'Paiements récurrents'],
                    ['Coût', 'Gratuit', '0,20–0,35 € par opération'],
                  ].map(([c, g, d], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-slate-800/30' : ''}>
                      <td className="px-4 py-3 font-medium text-slate-200">{c}</td>
                      <td className="px-4 py-3 text-[#22c55e]">{g}</td>
                      <td className="px-4 py-3">{d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h2>Quand GiroCode est-il meilleur ?</h2>
            <ul>
              <li><strong>Factures ponctuelles :</strong> Parfait pour les freelances, artisans et entreprises facturant individuellement.</li>
              <li><strong>Nouveaux clients sans mandat :</strong> Pas de délai nécessaire – GiroCode fonctionne sans accord préalable.</li>
              <li><strong>Paiements spontanés :</strong> Collectes de dons, commandes groupées ou frais d&apos;événement.</li>
            </ul>
            <h2>Quand le prélèvement est-il meilleur ?</h2>
            <ul>
              <li><strong>Abonnements mensuels :</strong> Streaming, licences logicielles ou assurances – un mandat, puis automatique.</li>
              <li><strong>Cotisations associatives :</strong> Montants réguliers et fixes sans effort pour les membres.</li>
              <li><strong>Paiements récurrents :</strong> Loyer, mensualités, frais de service mensuels.</li>
            </ul>
            <div className="not-prose my-4 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/40 px-4 py-3 text-sm leading-relaxed text-slate-300">
              <strong className="text-slate-100">Conclusion :</strong> GiroCode et prélèvement se complètent. Pour les factures ponctuelles, GiroCode est la solution plus rapide et moins chère sans délai. Pour les paiements récurrents, le prélèvement offre l&apos;automatisation une fois le mandat en place.
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
                  { href: '/fr/girocode-vs-paypal', label: 'GiroCode vs. PayPal' },
                  { href: '/fr/girocode-vs-bankueberweisung', label: 'GiroCode vs. virement manuel' },
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
