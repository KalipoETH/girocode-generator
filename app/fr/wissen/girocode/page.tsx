import type { Metadata } from 'next';
import Link from 'next/link';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';

export const metadata: Metadata = {
  title: "Qu'est-ce qu'un GiroCode? – Expliqué simplement + créer gratuitement",
  description:
    'GiroCode = code QR SEPA pour virements. Ce que c\'est, comment ça fonctionne et comment en créer un gratuitement en quelques secondes. PDF de facture inclus.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/fr/wissen/girocode',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/girocode',
      'de': 'https://www.girocodegenerator.com/wissen/girocode',
      'en': 'https://www.girocodegenerator.com/en/wissen/girocode',
      'fr': 'https://www.girocodegenerator.com/fr/wissen/girocode',
      'es': 'https://www.girocodegenerator.com/es/wissen/girocode',
    },
  },
};

export default function WissenGirocodePageFr() {
  return (
    <KnowledgeLayout
      breadcrumbCurrent="Qu'est-ce qu'un GiroCode ?"
      badge="Bases · GiroCode / SEPA-QR"
      title="Qu'est-ce qu'un GiroCode ? – Tout ce que vous devez savoir"
      lead="Le GiroCode – également appelé SEPA-QR ou EPC-QR – est un code QR standardisé pour les virements SEPA. Il contient toutes les informations nécessaires pour effectuer un paiement et élimine la saisie manuelle fastidieuse de l'IBAN, du montant et du libellé."
      relatedArticles={[
        { href: '/fr/wissen/epc-standard', label: 'Norme EPC & SEPA-QR – Structure technique expliquée' },
        { href: '/fr/wissen/iban-bic', label: 'IBAN & BIC pour GiroCode – Guide complet' },
        { href: '/fr/wissen/betrag-und-zweck', label: 'Montant & référence de paiement dans GiroCode' },
        { href: '/fr/wissen/rechnung', label: 'GiroCode sur les factures – Le guide complet' },
        { href: '/fr/wissen/banking-apps', label: "Applications bancaires compatibles GiroCode – Vue d'ensemble 2025" },
        { href: '/fr/wissen/scannen', label: 'Comment scanner un GiroCode – Guide complet iPhone & Android' },
      ]}
      locale="fr"
    >

      {/* ── Section 1 ───────────────────────────────────── */}
      <section aria-labelledby="definition-fr">
        <h2 id="definition-fr">Qu&apos;est-ce qu&apos;un GiroCode ?</h2>
        <p>
          Un <strong>GiroCode</strong> est un code QR standardisé selon la norme de
          l&apos;<strong>European Payments Council (EPC)</strong> qui encode toutes les
          informations nécessaires à un virement SEPA. L&apos;acronyme « EPC » fait référence à
          l&apos;organisme européen de réglementation des paiements électroniques qui a défini
          le format technique de ce code QR. En Allemagne, il est commercialement connu sous le
          nom de « GiroCode », mais dans d&apos;autres pays et contextes techniques, on parle
          aussi de <strong>SEPA-QR</strong>, <strong>EPC-QR</strong> ou simplement de{' '}
          <strong>code QR de paiement</strong>.
        </p>
        <p>
          Contrairement à d&apos;autres systèmes de paiement comme PayPal ou les applications
          mobiles propriétaires, le GiroCode est un standard ouvert, neutre et gratuit. Il ne
          nécessite aucune application tierce, aucun compte spécial et aucun service
          intermédiaire payant. Tout ce dont vous avez besoin, c&apos;est d&apos;un compte
          bancaire SEPA et d&apos;une application bancaire compatible.
        </p>

        <h3>Histoire et origine du GiroCode</h3>
        <p>
          Le GiroCode a été introduit en <strong>Allemagne en 2018</strong> par le Zentraler
          Kreditausschuss (ZKA), aujourd&apos;hui connu sous le nom de Die Deutsche Kreditwirtschaft
          (DK). Cette initiative visait à moderniser les processus de paiement par virement
          bancaire et à réduire les erreurs de saisie manuelle qui entraînaient des retards et
          des frais supplémentaires.
        </p>
        <p>
          Au niveau européen, le format technique a été défini par l&apos;<strong>
            European Payments Council (EPC)
          </strong>{' '}
          – l&apos;organisme de normalisation de l&apos;espace SEPA. L&apos;EPC a publié sa
          première spécification en 2012 et l&apos;a régulièrement mise à jour depuis lors.
          Actuellement, la version 002 du standard EPC est la plus répandue. Cette
          standardisation garantit qu&apos;un GiroCode créé en Allemagne peut être scanné et
          utilisé dans n&apos;importe quel pays de la zone SEPA.
        </p>

        <h3>Diffusion en Europe</h3>
        <p>
          Le GiroCode est aujourd&apos;hui reconnu et utilisé dans toute la zone SEPA, qui
          comprend les 27 pays de l&apos;Union européenne ainsi que plusieurs pays non membres
          comme la Suisse, la Norvège, l&apos;Islande et le Liechtenstein. En Allemagne,
          pratiquement toutes les grandes banques et caisses d&apos;épargne (Sparkasse,
          Volksbank, DKB, ING, Commerzbank, Deutsche Bank, etc.) supportent la lecture des
          GiroCodes via leurs applications mobiles. La France, l&apos;Autriche et les pays du
          Benelux ont également adopté le format EPC, parfois sous des noms légèrement
          différents.
        </p>
      </section>

      {/* ── Section 2 ───────────────────────────────────── */}
      <section aria-labelledby="fonctionnement-fr" className="mt-10">
        <h2 id="fonctionnement-fr">Comment fonctionne un GiroCode ?</h2>
        <p>
          Le fonctionnement d&apos;un GiroCode est remarquablement simple, tant pour
          l&apos;émetteur que pour le payeur. Voici le déroulement typique, étape par étape :
        </p>
        <ol>
          <li>
            <strong>Création du GiroCode :</strong> Le créateur de la facture (freelance,
            entreprise, association) saisit ses informations bancaires (IBAN, nom du
            bénéficiaire), le montant à payer et une référence de paiement (numéro de facture,
            par exemple). Un générateur comme notre{' '}
            <Link href="/fr" className="text-sky-400 hover:text-sky-300">
              GiroCode Generator gratuit
            </Link>{' '}
            transforme ces données en un code QR.
          </li>
          <li>
            <strong>Intégration sur la facture :</strong> Le code QR est imprimé dans le coin
            inférieur droit de la facture, ou affiché à l&apos;écran pour les factures
            numériques. Une taille minimale de 2×2 cm est recommandée pour une bonne lisibilité.
          </li>
          <li>
            <strong>Scan par le payeur :</strong> La personne qui souhaite payer ouvre
            l&apos;application de sa banque et utilise la fonction de scan de code QR (souvent
            accessible via un bouton « Virement » ou « Scanner »). Elle pointe son téléphone
            vers le GiroCode.
          </li>
          <li>
            <strong>Remplissage automatique :</strong> L&apos;application bancaire décode le
            GiroCode et pré-remplit automatiquement le formulaire de virement avec toutes les
            informations pertinentes : IBAN du bénéficiaire, montant, référence de paiement.
          </li>
          <li>
            <strong>Vérification par le payeur :</strong> Le payeur vérifie les informations
            pré-remplies – notamment le nom du bénéficiaire et le montant – pour s&apos;assurer
            que tout est correct.
          </li>
          <li>
            <strong>Confirmation et exécution :</strong> Le payeur confirme le virement via son
            mécanisme d&apos;authentification habituel (PIN, empreinte digitale, Face ID, TAN).
            Le virement SEPA est ensuite exécuté normalement.
          </li>
        </ol>

        <h3>Quelles données sont transmises ?</h3>
        <p>Un GiroCode peut contenir les informations suivantes :</p>
        <ul>
          <li>
            <strong>Service Tag :</strong> Toujours « BCD » – identifie le type de code QR
          </li>
          <li>
            <strong>Version :</strong> 001 ou 002 selon le standard EPC utilisé
          </li>
          <li>
            <strong>Type d&apos;encodage :</strong> UTF-8 (valeur : 1)
          </li>
          <li>
            <strong>Type de virement :</strong> SCT (SEPA Credit Transfer)
          </li>
          <li>
            <strong>BIC de la banque bénéficiaire :</strong> Optionnel depuis 2016
          </li>
          <li>
            <strong>Nom du bénéficiaire :</strong> Maximum 70 caractères (obligatoire)
          </li>
          <li>
            <strong>IBAN du bénéficiaire :</strong> Obligatoire
          </li>
          <li>
            <strong>Montant :</strong> Optionnel, au format EUR12.34
          </li>
          <li>
            <strong>Référence de paiement :</strong> Optionnel, maximum 140 caractères
          </li>
        </ul>

        <h3>Sécurité du GiroCode</h3>
        <p>
          Du point de vue de la sécurité, le GiroCode ne présente pas de risques particuliers
          par rapport à un virement bancaire traditionnel. L&apos;IBAN est une donnée
          semi-publique – il est déjà imprimé sur les chèques et les factures. Le GiroCode
          n&apos;autorise que des virements <em>sortants</em> de votre compte : il est
          impossible pour quelqu&apos;un d&apos;utiliser un GiroCode pour prélever de
          l&apos;argent sur votre compte. Seul vous pouvez confirmer un virement via votre
          application bancaire et votre authentification personnelle. Cependant, comme pour tout
          code QR, il convient de toujours vérifier les données pré-remplies avant de confirmer,
          notamment le nom du bénéficiaire et le montant.
        </p>
      </section>

      {/* ── Section 3 ───────────────────────────────────── */}
      <section aria-labelledby="avantages-fr" className="mt-10">
        <h2 id="avantages-fr">Avantages d&apos;un GiroCode</h2>

        <h3>Pour l&apos;émetteur de factures</h3>
        <p>
          Les entreprises, freelances et associations qui intègrent un GiroCode sur leurs
          factures bénéficient de nombreux avantages concrets :
        </p>
        <ul>
          <li>
            <strong>Réduction des erreurs de paiement :</strong> Les erreurs de saisie
            d&apos;IBAN sont l&apos;une des causes les plus fréquentes de virements incorrects
            ou rejetés. Avec un GiroCode, l&apos;IBAN est lu automatiquement, ce qui élimine
            pratiquement cette source d&apos;erreurs.
          </li>
          <li>
            <strong>Paiements plus rapides :</strong> Les clients qui reçoivent une facture avec
            GiroCode paient généralement plus vite, car le processus est plus simple et moins
            contraignant que la saisie manuelle.
          </li>
          <li>
            <strong>Meilleure réconciliation comptable :</strong> En incluant le numéro de
            facture dans la référence de paiement du GiroCode, vous êtes assuré que le libellé
            du virement reçu contient les informations correctes pour une réconciliation
            automatique.
          </li>
          <li>
            <strong>Image professionnelle :</strong> Un GiroCode sur une facture témoigne
            d&apos;un niveau de modernité et de professionnalisme qui laisse une bonne
            impression auprès des clients.
          </li>
          <li>
            <strong>Aucun coût supplémentaire :</strong> Contrairement à PayPal ou Stripe, le
            GiroCode ne génère aucune commission sur les transactions.
          </li>
          <li>
            <strong>Confidentialité :</strong> Aucune donnée n&apos;est transmise à des
            services tiers ; tout se passe entre vous et votre banque via le réseau SEPA.
          </li>
        </ul>

        <h3>Pour le payeur</h3>
        <p>
          Du point de vue de la personne qui paie, le GiroCode offre également des avantages
          significatifs :
        </p>
        <ul>
          <li>
            <strong>Simplicité et rapidité :</strong> Scanner un code QR prend 3 secondes au
            lieu de 2 minutes de saisie manuelle.
          </li>
          <li>
            <strong>Aucune erreur possible :</strong> Les champs sont remplis automatiquement,
            ce qui élimine le risque de transposer des chiffres ou de copier le mauvais IBAN.
          </li>
          <li>
            <strong>Pas d&apos;inscription requise :</strong> Contrairement à PayPal ou Venmo,
            il n&apos;est pas nécessaire de créer un compte ou d&apos;installer une application
            spécifique. Votre application bancaire existante suffit.
          </li>
          <li>
            <strong>Transparence complète :</strong> Toutes les informations sont visibles avant
            confirmation du paiement.
          </li>
        </ul>

        <h3>Comparaison avec la saisie manuelle de l&apos;IBAN</h3>
        <p>
          Saisir manuellement un IBAN de 27 caractères (comme un IBAN français) représente un
          risque d&apos;erreur non négligeable. Des études montrent que les erreurs de saisie
          d&apos;IBAN sont très fréquentes et peuvent conduire à des virements vers de mauvais
          comptes ou des rejets coûteux. Le GiroCode élimine ce risque en automatisant la
          lecture des données.
        </p>
      </section>

      {/* ── Section 4 ───────────────────────────────────── */}
      <section aria-labelledby="utilisateurs-fr" className="mt-10">
        <h2 id="utilisateurs-fr">Qui peut utiliser les GiroCodes ?</h2>
        <p>
          Le GiroCode est un standard ouvert et accessible à tous. Voici les principaux groupes
          d&apos;utilisateurs qui en tirent le plus grand bénéfice :
        </p>

        <h3>Freelances et travailleurs indépendants</h3>
        <p>
          Les indépendants – graphistes, développeurs web, consultants, photographes,
          rédacteurs, traducteurs – émettent régulièrement des factures à leurs clients. En
          ajoutant un GiroCode à leurs factures, ils réduisent les délais de paiement et les
          relances. Le client scanne simplement le code et paie instantanément depuis son
          application bancaire, sans avoir à chercher l&apos;IBAN sur la facture et à le saisir
          manuellement.
        </p>

        <h3>Petites et moyennes entreprises (PME)</h3>
        <p>
          Les PME qui émettent de nombreuses factures bénéficient particulièrement du
          GiroCode : les erreurs de paiement sont réduites, la réconciliation comptable est
          simplifiée et les délais de traitement sont raccourcis. De nombreux logiciels de
          comptabilité et de facturation comme{' '}
          <a
            href="https://www.awin1.com/cread.php?awinmid=15944&awinaffid=2793610"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="text-sky-400 hover:text-sky-300"
          >
            sevDesk
          </a>{' '}
          <span className="text-xs text-slate-500">(*)</span> intègrent maintenant
          automatiquement les GiroCodes dans les factures générées.
        </p>

        <h3>Associations et organisations</h3>
        <p>
          Les associations utilisent fréquemment les GiroCodes pour simplifier la collecte des
          cotisations annuelles ou la réception de dons. En incluant le numéro de membre dans la
          référence de paiement, l&apos;association peut automatiquement identifier qui a payé sa
          cotisation, sans travail manuel de réconciliation.
        </p>

        <h3>Particuliers</h3>
        <p>
          Même les particuliers peuvent utiliser les GiroCodes pour simplifier les échanges
          financiers entre amis ou membres de la famille : remboursement d&apos;un repas
          partagé, participation aux cadeaux communs, etc. Certaines applications comme Splitwise
          permettent même de générer des QR codes de paiement compatibles avec le standard EPC.
        </p>
      </section>

      {/* ── Section 5 ───────────────────────────────────── */}
      <section aria-labelledby="comparaison-fr" className="mt-10">
        <h2 id="comparaison-fr">GiroCode vs. autres méthodes de paiement</h2>
        <p>
          Pour mieux comprendre la valeur du GiroCode, voici une comparaison avec les
          principales alternatives de paiement disponibles pour les professionnels :
        </p>

        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-700">
          <table className="compare-table w-full text-sm">
            <thead>
              <tr>
                <th className="px-4 py-3">Critère</th>
                <th className="px-4 py-3">GiroCode</th>
                <th className="px-4 py-3">PayPal</th>
                <th className="px-4 py-3">Stripe</th>
                <th className="px-4 py-3">Prélèvement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              <tr>
                <td className="px-4 py-3 font-medium text-slate-200">Coûts par transaction</td>
                <td className="px-4 py-3" style={{color:'#22c55e', fontWeight:600}}>Gratuit</td>
                <td className="px-4 py-3" style={{color:'#ef4444'}}>1,9–3,4 % + 0,35 €</td>
                <td className="px-4 py-3" style={{color:'#ef4444'}}>1,5 % + 0,25 €</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>Gratuit / faible</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-4 py-3 font-medium text-slate-200">Confidentialité</td>
                <td className="px-4 py-3" style={{color:'#22c55e', fontWeight:600}}>Très élevée</td>
                <td className="px-4 py-3" style={{color:'#ef4444'}}>Faible (données tiers)</td>
                <td className="px-4 py-3" style={{color:'#f97316'}}>Moyenne</td>
                <td className="px-4 py-3" style={{color:'#22c55e'}}>Élevée</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-200">Inscription requise</td>
                <td className="px-4 py-3" style={{color:'#22c55e', fontWeight:600}}>Non</td>
                <td className="px-4 py-3" style={{color:'#ef4444'}}>Oui (les deux)</td>
                <td className="px-4 py-3" style={{color:'#f97316'}}>Oui (émetteur)</td>
                <td className="px-4 py-3" style={{color:'#f97316'}}>Mandat nécessaire</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-4 py-3 font-medium text-slate-200">Facilité d&apos;utilisation</td>
                <td className="px-4 py-3" style={{color:'#22c55e', fontWeight:600}}>Très simple (scan)</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>Simple (app)</td>
                <td className="px-4 py-3" style={{color:'#f97316'}}>Moyen (lien)</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>Automatique</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-200">Disponibilité</td>
                <td className="px-4 py-3" style={{color:'#22c55e', fontWeight:600}}>Zone SEPA</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>Mondial</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>Mondial</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>Zone SEPA</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-4 py-3 font-medium text-slate-200">Initiative</td>
                <td className="px-4 py-3" style={{color:'#22c55e', fontWeight:600}}>Payeur (push)</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>Payeur (push)</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>Payeur (push)</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>Créancier (pull)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Le GiroCode se distingue clairement par son coût nul, sa haute confidentialité et sa
          simplicité d&apos;utilisation. Son principal inconvénient est sa limitation géographique
          à la zone SEPA et la nécessité d&apos;avoir une application bancaire compatible.
        </p>
      </section>

      {/* ── Section 6 ───────────────────────────────────── */}
      <section aria-labelledby="europe-fr" className="mt-10">
        <h2 id="europe-fr">GiroCode dans différents pays européens</h2>
        <p>
          Bien que le standard EPC soit commun à toute l&apos;Europe, chaque pays a parfois
          développé sa propre marque ou ses propres adaptations :
        </p>

        <h3>Allemagne – GiroCode</h3>
        <p>
          En Allemagne, le standard EPC est commercialisé sous le nom de <strong>GiroCode</strong>{' '}
          depuis 2018. C&apos;est le pays où l&apos;adoption est la plus forte en Europe, avec
          une intégration quasi universelle dans les applications bancaires des grandes banques
          et caisses d&apos;épargne. La Sparkasse, DKB, ING-DiBa, Volksbank, Commerzbank et
          Deutsche Bank supportent toutes le scan de GiroCodes.
        </p>

        <h3>Autriche – Stuzza QR et EPS-QR</h3>
        <p>
          En Autriche, le même standard EPC est connu sous le nom de <strong>Stuzza-QR</strong>{' '}
          ou <strong>EPS-QR</strong>. La structure technique est identique au GiroCode allemand,
          ce qui signifie qu&apos;un GiroCode créé en Allemagne peut être scanné par une
          application bancaire autrichienne et vice versa.
        </p>

        <h3>Belgique</h3>
        <p>
          La Belgique utilise également le standard EPC pour les paiements par code QR. Le
          réseau Bancontact dispose de son propre QR code de paiement, mais pour les virements
          SEPA classiques, le format EPC est également supporté par la plupart des banques.
        </p>

        <h3>Suisse – QR-Bill (QR-Facture)</h3>
        <p>
          La Suisse a introduit en 2020 sa propre norme, le <strong>QR-Bill</strong> (ou
          QR-facture en français), qui remplace les anciens bulletins de versement orange et
          rose. Bien que la Suisse ne fasse pas partie de la zone SEPA, le QR-Bill utilise un
          format similaire au GiroCode mais avec quelques différences importantes : il utilise
          l&apos;IBAN suisse (commençant par CH), inclut une référence QR spécifique et a un
          gabarit visuel normalisé. Il n&apos;est donc pas directement interopérable avec le
          GiroCode européen.
        </p>

        <h3>France</h3>
        <p>
          En France, le standard EPC est reconnu mais son adoption grand public est encore
          moins avancée qu&apos;en Allemagne. Cependant, les banques françaises comme BNP
          Paribas, Crédit Agricole, Société Générale et La Banque Postale supportent le scan
          de codes QR SEPA via leurs applications. Les freelances et PME françaises qui utilisent
          des logiciels de facturation modernes peuvent intégrer facilement des GiroCodes dans
          leurs factures.
        </p>

        <h3>Pays-Bas – iDEAL QR</h3>
        <p>
          Les Pays-Bas disposent d&apos;iDEAL, leur propre système de paiement en ligne très
          populaire, qui propose également un format QR code. Cependant, le standard EPC/GiroCode
          est également supporté pour les virements SEPA classiques.
        </p>
      </section>

      {/* ── Section 7 – FAQ ───────────────────────────────── */}
      <section aria-labelledby="faq-fr" className="mt-10">
        <h2 id="faq-fr">Questions fréquentes (FAQ)</h2>

        <h3>1. Le GiroCode est-il gratuit ?</h3>
        <p>
          Oui, le GiroCode est entièrement gratuit à créer et à utiliser. Notre{' '}
          <Link href="/fr" className="text-sky-400 hover:text-sky-300">
            générateur de GiroCode
          </Link>{' '}
          est gratuit, sans inscription et respectueux de la vie privée. Les virements SEPA
          eux-mêmes sont également généralement gratuits au sein de la zone SEPA (les banques
          ne sont pas autorisées à facturer des frais supplémentaires pour les virements SEPA
          nationaux ou transfrontaliers selon la réglementation européenne).
        </p>

        <h3>2. Mon application bancaire supporte-t-elle les GiroCodes ?</h3>
        <p>
          La grande majorité des applications bancaires européennes modernes supportent le scan
          de GiroCodes. En Allemagne, cela inclut pratiquement toutes les banques : Sparkasse,
          Volksbank/Raiffeisenbank, DKB, ING, Commerzbank, Deutsche Bank, N26, etc. En France,
          les principales banques (BNP Paribas, Crédit Agricole, LCL, Société Générale, etc.)
          supportent également ce format via leurs applications mobiles. Consultez notre{' '}
          <Link
            href="/fr/wissen/banking-apps"
            className="text-sky-400 hover:text-sky-300"
          >
            guide des applications bancaires compatibles
          </Link>{' '}
          pour une liste complète.
        </p>

        <h3>3. Puis-je laisser le montant vide dans un GiroCode ?</h3>
        <p>
          Oui, le montant est optionnel dans un GiroCode. Si vous laissez le montant vide,
          le payeur devra saisir le montant manuellement dans son application bancaire. Cela
          peut être utile pour les dons (où chacun choisit son montant) ou pour les factures
          dont le montant peut varier. En revanche, pour les factures avec un montant précis,
          il est fortement recommandé d&apos;inclure le montant pour éviter les erreurs.
        </p>

        <h3>4. Quelle est la taille minimale d&apos;un GiroCode imprimé ?</h3>
        <p>
          Selon les recommandations du standard EPC, un GiroCode doit avoir une taille minimale
          de <strong>2 × 2 centimètres</strong> lorsqu&apos;il est imprimé. En dessous de cette
          taille, certaines applications bancaires peuvent avoir du mal à lire le code. Pour une
          lisibilité optimale, une taille de 3 × 3 cm est recommandée. Il est également
          important de maintenir une bonne qualité d&apos;impression et un contraste suffisant
          (noir sur blanc).
        </p>

        <h3>5. Un GiroCode fonctionne-t-il aussi pour les paiements internationaux ?</h3>
        <p>
          Le GiroCode est basé sur le standard SEPA Credit Transfer (SCT), ce qui signifie
          qu&apos;il fonctionne pour tous les paiements en euros dans la zone SEPA. La zone SEPA
          comprend les 27 pays de l&apos;UE plus la Suisse, la Norvège, l&apos;Islande, le
          Liechtenstein, Monaco, Saint-Marin, Andorre, le Vatican et le Royaume-Uni. Pour les
          paiements en dehors de la zone SEPA ou dans d&apos;autres devises, le GiroCode n&apos;est
          pas applicable.
        </p>

        <h3>6. Quelqu&apos;un peut-il m&apos;arnaquer avec un GiroCode ?</h3>
        <p>
          Le GiroCode ne peut être utilisé que pour initier un virement <em>sortant</em> de votre
          compte. Il est donc impossible pour quelqu&apos;un d&apos;utiliser un GiroCode pour
          prélever des fonds sur votre compte. Cependant, comme pour tout paiement, il faut
          rester vigilant : vérifiez toujours le nom du bénéficiaire et le montant avant de
          confirmer. Des escrocs pourraient théoriquement créer un GiroCode frauduleux menant
          vers leur propre compte – une pratique connue sous le nom de « quishing » (phishing
          via QR code). Soyez donc prudent avec les codes QR provenant de sources inconnues.
        </p>

        <h3>7. Comment inclure un GiroCode dans un PDF ?</h3>
        <p>
          La façon la plus simple d&apos;inclure un GiroCode dans un PDF est d&apos;utiliser un
          logiciel de facturation qui le génère automatiquement (comme sevDesk ou FastBill), ou
          d&apos;utiliser notre générateur gratuit pour créer l&apos;image PNG/SVG du code QR
          et de l&apos;insérer manuellement dans votre modèle de facture Word, LibreOffice ou
          InDesign.
        </p>

        <h3>8. Quelle est la différence entre GiroCode et PayNow ou autres QR codes bancaires ?</h3>
        <p>
          Il existe plusieurs standards de QR codes de paiement dans le monde : PayNow
          (Singapour), UPI QR (Inde), QR-Bill (Suisse), etc. Le GiroCode utilise le standard
          EPC spécifiquement conçu pour l&apos;espace SEPA européen. Ces standards ne sont pas
          interopérables entre eux – un QR code PayNow ne peut pas être scanné par une
          application bancaire européenne pour initier un virement SEPA.
        </p>

        <h3>9. Puis-je créer un GiroCode sans montant pour les dons ?</h3>
        <p>
          Absolument. Les associations et organisations à but non lucratif utilisent souvent des
          GiroCodes sans montant sur leurs supports de communication, leurs affiches ou leur
          site web. Cela permet aux donateurs potentiels de scanner le code et de choisir
          librement le montant de leur don. Vous pouvez toutefois pré-remplir une suggestion de
          montant si vous le souhaitez.
        </p>

        <h3>10. Mon GiroCode peut-il expirer ?</h3>
        <p>
          Non, les GiroCodes n&apos;ont pas de date d&apos;expiration. Un GiroCode généré
          aujourd&apos;hui sera toujours valide dans 10 ans, car il encode simplement des
          données statiques. Cependant, si votre IBAN change (par exemple, après un changement
          de banque), vous devrez créer un nouveau GiroCode avec le nouvel IBAN.
        </p>
      </section>

    </KnowledgeLayout>
  );
}
