import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GiroCode vs. virement manuel – Gagner du temps et éviter les erreurs (2026)',
  description: 'GiroCode ou saisie IBAN manuelle ? Comparaison du temps, taux d\'erreur et facilité d\'utilisation.',
  alternates: {
    canonical: `${SITE_URL}/fr/girocode-vs-bankueberweisung`,
    languages: {
      'x-default': `${SITE_URL}/girocode-vs-bankueberweisung`,
      'de': `${SITE_URL}/girocode-vs-bankueberweisung`,
      'en': `${SITE_URL}/en/girocode-vs-bankueberweisung`,
      'fr': `${SITE_URL}/fr/girocode-vs-bankueberweisung`,
      'es': `${SITE_URL}/es/girocode-vs-bankueberweisung`,
      'it': `${SITE_URL}/it/girocode-vs-bankueberweisung`,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Article', articleType: 'ComparisonArticle',
  headline: 'GiroCode vs. virement manuel – Gagner du temps et éviter les erreurs',
  description: 'GiroCode ou saisie IBAN manuelle ? Comparaison du temps, taux d\'erreur et facilité d\'utilisation.',
  author: { '@type': 'Person', name: 'Kaleb Jahnke' },
  publisher: { '@type': 'Organization', name: 'GiroCode Generator', url: SITE_URL },
  datePublished: '2026-05-01', dateModified: '2026-05-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/fr/girocode-vs-bankueberweisung` },
};

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Combien de fois GiroCode est-il plus rapide qu\'un virement manuel ?', acceptedAnswer: { '@type': 'Answer', text: 'Un virement manuel avec saisie IBAN prend 3 à 5 minutes. Avec GiroCode, le processus prend moins de 30 secondes – 6 à 10 fois plus rapide.' } },
    { '@type': 'Question', name: 'Quel est le taux d\'erreur pour la saisie manuelle d\'IBAN ?', acceptedAnswer: { '@type': 'Answer', text: 'Pour la saisie manuelle de longues séquences numériques comme les IBAN, le taux d\'erreur dépasse 1 %. Avec GiroCode, le taux d\'erreur est de 0 %.' } },
    { '@type': 'Question', name: 'Combien coûte un retour de virement en cas de mauvais IBAN ?', acceptedAnswer: { '@type': 'Answer', text: 'Un retour bancaire coûte généralement 5 à 15 € plus le temps de résolution. La récupération peut prendre plusieurs semaines.' } },
    { '@type': 'Question', name: 'Le payeur doit-il installer une application pour utiliser GiroCode ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. Le payeur utilise simplement son application bancaire existante. Toutes les grandes applications bancaires allemandes supportent GiroCode depuis 2016.' } },
  ],
};

export default function GirocodeVsBankueberweisungPageFr() {
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
              <li className="text-slate-400">GiroCode vs. virement manuel</li>
            </ol>
          </nav>
          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />Comparaison · Méthodes de paiement 2026
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">GiroCode vs. virement manuel : Pourquoi le QR code gagne</h1>
          </header>
          <div className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3" role="note">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">💡 Réponse rapide</p>
            <p className="text-sm leading-relaxed text-slate-300">La saisie manuelle d&apos;IBAN prend en moyenne 3 à 5 minutes avec un taux d&apos;erreur supérieur à 1 % pour les IBAN allemands à 22 chiffres. Avec GiroCode, le virement prend moins de 30 secondes et les fautes de frappe sont impossibles.</p>
          </div>
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { value: '3–5 min.', label: 'Saisie IBAN manuelle' },
              { value: '< 30 sec.', label: 'Avec GiroCode' },
              { value: '> 1%', label: 'Taux d\'erreur manuel' },
              { value: '0%', label: 'Taux d\'erreur avec GiroCode' },
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
                    <th className="px-4 py-3 text-left font-medium text-slate-400">Saisie manuelle</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50 text-slate-300">
                  {[
                    ['Temps requis', '< 30 secondes', '3–5 minutes'],
                    ['Fautes de frappe', 'Impossible', 'Fréquentes'],
                    ['Référence paiement', 'Automatique', 'Souvent oubliée'],
                    ['Facilité d\'utilisation', 'Très haute', 'Moyenne'],
                    ['Professionnalisme', 'Très haut', 'Standard'],
                    ['Coût', 'Gratuit', 'Gratuit'],
                  ].map(([c, g, m], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-slate-800/30' : ''}>
                      <td className="px-4 py-3 font-medium text-slate-200">{c}</td>
                      <td className="px-4 py-3 text-[#22c55e]">{g}</td>
                      <td className="px-4 py-3">{m}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h2>Pourquoi les fautes de frappe dans les IBAN coûtent cher</h2>
            <ul>
              <li><strong>Frais de retour 5–15 € :</strong> Récupérer un virement mal dirigé coûte de l&apos;argent et peut prendre des semaines.</li>
              <li><strong>Perte de temps :</strong> Les entreprises consacrent des heures par an à résoudre les erreurs de paiement.</li>
              <li><strong>Atteinte à l&apos;image :</strong> Les clients contactés pour des erreurs perdent confiance en la professionnalisme de l&apos;émetteur.</li>
            </ul>
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
                  { href: '/fr/girocode-vs-lastschrift', label: 'GiroCode vs. prélèvement SEPA' },
                  { href: '/fr/wissen/girocode', label: "Qu'est-ce qu'un GiroCode ?" },
                  { href: '/fr/wissen/iban-bic', label: 'IBAN & BIC expliqués' },
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
