import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos – GiroCode Generator',
  description:
    'Qui se cache derrière le GiroCode Generator ? Le projet de Kaleb Jahnke à Osterholz-Scharmbeck – gratuit, local et respectueux de la vie privée.',
  alternates: { canonical: 'https://www.girocodegenerator.com/fr/ueber-uns' },
};

export default function AProposPageFr() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-12">
        <header className="mb-10 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            À propos de ce projet
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              À propos du GiroCode Generator
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Le GiroCode Generator est un outil en ligne gratuit que j’ai développé – moi, Kaleb
              Jahnke, basé à Osterholz-Scharmbeck. L’idée est née d’un besoin simple : proposer aux
              indépendants et petites entreprises un moyen facile et respectueux de la vie privée de
              créer des codes SEPA-QR pour leurs factures – sans inscription, sans partage de
              données, sans frais.
            </p>
          </div>
        </header>

        <section className="mb-10 space-y-4">
          <h2 className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            Ce qui nous différencie
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 shadow-sm shadow-black/30">
              <div className="mb-2 text-2xl" aria-hidden="true">
                💻
              </div>
              <h3 className="mb-1 text-sm font-semibold text-slate-50">100 % local</h3>
              <p className="text-xs text-slate-300">
                Tous les calculs sont effectués directement dans votre navigateur. Vos données
                bancaires et de facturation ne sont jamais envoyées au serveur.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 shadow-sm shadow-black/30">
              <div className="mb-2 text-2xl" aria-hidden="true">
                🔓
              </div>
              <h3 className="mb-1 text-sm font-semibold text-slate-50">
                Gratuit &amp; sans inscription
              </h3>
              <p className="text-xs text-slate-300">
                Aucun compte, aucun abonnement, aucun coût caché. Il suffit d’ouvrir le site pour
                commencer.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 shadow-sm shadow-black/30">
              <div className="mb-2 text-2xl" aria-hidden="true">
                ✅
              </div>
              <h3 className="mb-1 text-sm font-semibold text-slate-50">Conforme EPC / SEPA</h3>
              <p className="text-xs text-slate-300">
                Le générateur produit des GiroCodes conformes au standard EPC, compatibles avec la
                plupart des applications bancaires.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            Pour qui est conçu le GiroCode Generator ?
          </h2>
          <p className="text-sm text-slate-300 md:text-base">
            Le GiroCode Generator s’adresse à toutes les personnes souhaitant simplifier les
            paiements et réduire les erreurs sans développer leur propre solution technique.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300 md:text-base">
            <li>indépendants et freelances envoyant des factures avec code QR,</li>
            <li>petites entreprises,</li>
            <li>associations collectant des cotisations,</li>
            <li>particuliers souhaitant demander des paiements.</li>
          </ul>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            Contact
          </h2>
          <p className="text-sm text-slate-300 md:text-base">
            Une question, un retour ou un bug ? Vous pouvez m’écrire à{' '}
            <a
              href="mailto:jahnke.kaleb@gmail.com"
              className="text-sky-400 underline decoration-sky-500/70 underline-offset-2 hover:text-sky-300"
            >
              jahnke.kaleb@gmail.com
            </a>
            .
          </p>
        </section>

        <p className="text-xs text-slate-500">
          Ce projet est en constante évolution. Les suggestions d’amélioration sont les bienvenues.
        </p>
      </div>
    </main>
  );
}

