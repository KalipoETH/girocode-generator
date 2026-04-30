import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Factures en freelance : GiroCode pour des paiements plus rapides',
  description:
    'Comment les freelances se font payer plus vite grâce aux GiroCodes sur leurs factures. Guide pratique avec conseils sur les mentions légales et générateur PDF gratuit.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/fr/blog/freelancer-rechnungen-qr-code',
    languages: {
      de: 'https://www.girocodegenerator.com/blog/freelancer-rechnungen-qr-code',
      en: 'https://www.girocodegenerator.com/en/blog/freelancer-rechnungen-qr-code',
      fr: 'https://www.girocodegenerator.com/fr/blog/freelancer-rechnungen-qr-code',
      es: 'https://www.girocodegenerator.com/es/blog/freelancer-rechnungen-qr-code',
    },
  },
};

export default function FreelancerFacturesFrPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <nav className="mb-8 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/fr" className="hover:text-slate-300">Accueil</Link>
          <span>/</span>
          <Link href="/fr/blog" className="hover:text-slate-300">Blog</Link>
          <span>/</span>
          <span className="text-slate-400">GiroCode pour les freelances</span>
        </nav>

        <header className="mb-10 space-y-4">
          <time dateTime="2026-03-01" className="text-xs text-slate-500">1 mars 2026</time>
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl lg:text-4xl">
            Factures en freelance : GiroCode pour des paiements plus rapides
          </h1>
          <p className="text-base leading-relaxed text-slate-400 md:text-lg">
            Délais de paiement trop longs, virements oubliés, IBAN mal saisi – les freelances
            connaissent bien le problème. Un GiroCode sur la facture peut tout changer.
          </p>
        </header>

        <article className="space-y-10 text-sm leading-relaxed text-slate-300 md:text-base">

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Pourquoi les freelances attendent-ils trop longtemps leurs paiements ?
            </h2>
            <p>
              Les travailleurs indépendants attendent en moyenne plus de 30 jours le règlement
              d&apos;une facture – souvent au-delà des délais convenus. La raison est rarement
              la mauvaise volonté : les clients ouvrent la facture, ont du mal à saisir
              correctement l&apos;IBAN, ou reportent le virement parce que passer sur leur
              application bancaire leur semble trop fastidieux.
            </p>
            <p className="mt-3">
              Résultat : les freelances relancent, envoient des rappels et perdent un temps
              précieux qui devrait être consacré à leurs projets. Un simple code QR sur la
              facture peut accélérer considérablement ce processus.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Qu&apos;est-ce qu&apos;un GiroCode et comment aide-t-il les freelances ?
            </h2>
            <p>
              Le GiroCode – officiellement un code EPC-QR selon la norme du Conseil européen
              des paiements – est un code QR contenant toutes les données de virement
              pertinentes : nom du bénéficiaire, IBAN, BIC (optionnel), montant et référence
              de paiement. Il suffit au payeur de scanner le code avec son application bancaire
              et de confirmer le virement en un tap. Plus de saisie, plus d&apos;erreurs.
            </p>
            <p className="mt-3">
              Pour les freelances, cela signifie concrètement : le client ouvre la facture,
              scanne le code QR et effectue le virement immédiatement. La résistance au
              paiement diminue drastiquement car l&apos;effort est réduit à quelques secondes.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Intégrer un GiroCode dans sa facture – Étape par étape
            </h2>
            <ol className="space-y-4 pl-5">
              <li className="list-decimal">
                <strong className="text-slate-100">Ouvrir le générateur GiroCode :</strong>{' '}
                Visitez{' '}
                <Link href="/fr" className="text-emerald-400 underline hover:text-emerald-300">
                  girocodegenerator.com
                </Link>{' '}
                – gratuit, sans inscription.
              </li>
              <li className="list-decimal">
                <strong className="text-slate-100">Saisir vos données :</strong>{' '}
                Entrez votre nom ou le nom de votre entreprise, votre IBAN, le montant de
                la facture et la référence (ex. « Facture 2026-042 »). Le BIC est optionnel.
              </li>
              <li className="list-decimal">
                <strong className="text-slate-100">Générer le code QR :</strong>{' '}
                En un clic sur « Créer GiroCode », le code QR est instantanément généré dans
                votre navigateur – localement, sans aucune transmission au serveur.
              </li>
              <li className="list-decimal">
                <strong className="text-slate-100">Créer la facture PDF :</strong>{' '}
                Utilisez la fonction de facturation intégrée pour générer une facture PDF
                conforme DIN avec GiroCode intégré et la télécharger directement.
              </li>
              <li className="list-decimal">
                <strong className="text-slate-100">Envoyer la facture :</strong>{' '}
                Envoyez le PDF par e-mail à votre client ou imprimez-le. Terminé.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Conseils pratiques : comment être payé plus vite
            </h2>
            <div className="space-y-4">
              {[
                { title: '1. Facturer immédiatement après la livraison', text: 'Chaque jour que vous attendez pour envoyer la facture rallonge le délai de paiement. Idéalement, envoyez la facture le jour même ou dans les 24 heures.' },
                { title: '2. Fixer des délais de paiement courts', text: 'Plutôt que « payable sous 30 jours », essayez 7 ou 14 jours. Avec un GiroCode, ce n\'est pas un problème pour le client.' },
                { title: '3. Toujours indiquer une référence de paiement', text: 'Le GiroCode pré-remplit la référence – ex. « Facture 2026-042 ». Cela facilite le rapprochement comptable de votre côté.' },
                { title: '4. Rappel amical après 7 jours', text: 'Une fois le délai dépassé, envoyez un rappel amical avec la facture en pièce jointe – GiroCode inclus. Souvent le client a simplement oublié.' },
                { title: '5. Proposer une remise pour paiement anticipé', text: 'Une petite remise (ex. 2 % pour paiement dans les 7 jours) peut inciter les clients à payer plus tôt. Le GiroCode rend le virement si simple que la plupart en profiteront.' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                  <h3 className="font-semibold text-slate-100">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">Conclusion</h2>
            <p>
              Le GiroCode est l&apos;un des outils les plus simples et les plus efficaces
              qu&apos;un freelance puisse ajouter à ses factures. Il réduit drastiquement la
              résistance au paiement, élimine les erreurs de saisie d&apos;IBAN et accélère
              les encaissements – sans coût supplémentaire ni effort technique.
            </p>
            <div className="mt-6">
              <Link
                href="/fr"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
              >
                Créer votre GiroCode gratuitement →
              </Link>
            </div>
          </section>
        </article>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <Link href="/fr/blog" className="text-sm text-slate-400 hover:text-slate-200">
            ← Retour au blog
          </Link>
        </div>
      </div>
    </main>
  );
}
