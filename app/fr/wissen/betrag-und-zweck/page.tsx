import type { Metadata } from 'next';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';

export const metadata: Metadata = {
  title: 'Montant & Référence de paiement dans GiroCode – Guide complet',
  description:
    'Comment saisir correctement le montant et la référence de paiement dans un GiroCode : format, limites, bonnes pratiques et exemples.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/fr/wissen/betrag-und-zweck',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/betrag-und-zweck',
      'de': 'https://www.girocodegenerator.com/wissen/betrag-und-zweck',
      'en': 'https://www.girocodegenerator.com/en/wissen/betrag-und-zweck',
      'fr': 'https://www.girocodegenerator.com/fr/wissen/betrag-und-zweck',
      'es': 'https://www.girocodegenerator.com/es/wissen/betrag-und-zweck',
    },
  },
};

export default function WissenBetragUndZweckPageFr() {
  return (
    <KnowledgeLayout
      breadcrumbCurrent="Montant & Référence de paiement"
      badge="Pratique · Montant & Référence"
      title="Montant & Référence de paiement dans GiroCode – Guide complet"
      lead="Dois-je inclure un montant dans mon GiroCode ? Que mettre dans la référence de paiement ? Ce guide répond à toutes les questions pratiques sur ces deux champs cruciaux pour des paiements sans erreur."
      relatedArticles={[
        { href: '/fr/wissen/girocode', label: "Qu'est-ce qu'un GiroCode ?" },
        { href: '/fr/wissen/epc-standard', label: 'Norme EPC – Structure technique du payload' },
        { href: '/fr/wissen/iban-bic', label: 'IBAN & BIC pour GiroCode' },
        { href: '/fr/wissen/rechnung', label: 'GiroCode sur les factures – Guide complet' },
        { href: '/fr/wissen/scannen', label: 'Comment scanner un GiroCode' },
      ]}
      locale="fr"
    >

      {/* ── Section 1 ── */}
      <section aria-labelledby="montant-fr">
        <h2 id="montant-fr">Le montant dans un GiroCode</h2>

        <h3>Format : EUR12.34</h3>
        <p>
          Dans la norme EPC, le montant d&apos;un GiroCode doit être encodé dans un format très
          précis : le code de devise <strong>EUR</strong> (en majuscules) suivi immédiatement du
          montant avec un <strong>point</strong> comme séparateur décimal. Il ne doit y avoir
          aucun espace entre <code>EUR</code> et le montant.
        </p>

        <p>Exemples de formats valides :</p>
        <ul>
          <li><code>EUR0.50</code> – 50 centimes d&apos;euro</li>
          <li><code>EUR12.34</code> – 12 euros et 34 centimes</li>
          <li><code>EUR1250.00</code> – 1 250 euros exactement</li>
          <li><code>EUR99999.99</code> – 99 999,99 euros</li>
        </ul>

        <p>Exemples de formats <strong>invalides</strong> (à éviter) :</p>
        <ul>
          <li><code>EUR 12.34</code> – espace entre EUR et le montant</li>
          <li><code>12.34 EUR</code> – EUR après le montant</li>
          <li><code>EUR12,34</code> – virgule au lieu du point décimal</li>
          <li><code>EUR12.345</code> – trois décimales (doit être exactement 2)</li>
          <li><code>€12.34</code> – symbole € au lieu de EUR</li>
        </ul>

        <h3>Le montant est-il obligatoire ?</h3>
        <p>
          <strong>Non, le montant est entièrement optionnel</strong> dans un GiroCode. Si vous
          ne renseignez pas de montant, le champ correspondant dans le payload EPC sera vide
          (ligne 8 vide). Le GiroCode sera tout à fait valide et fonctionnel – simplement, le
          payeur devra saisir manuellement le montant dans son application bancaire.
        </p>

        <h3>Que se passe-t-il sans montant ?</h3>
        <p>
          Lorsqu&apos;un GiroCode sans montant est scanné par une application bancaire, le
          comportement typique est le suivant :
        </p>
        <ul>
          <li>
            L&apos;application remplit automatiquement l&apos;IBAN du bénéficiaire, son nom et
            la référence de paiement
          </li>
          <li>
            Le champ « montant » reste vide ou à zéro, et le payeur est invité à le saisir
            manuellement
          </li>
          <li>
            Le payeur peut saisir n&apos;importe quel montant, y compris un montant différent
            de celui figurant sur la facture (risque d&apos;erreur ou de paiement partiel)
          </li>
        </ul>

        <h3>Montant maximum</h3>
        <p>
          La norme EPC autorise des montants jusqu&apos;à <strong>999 999 999,99 €</strong>
          (environ un milliard d&apos;euros). En pratique, les banques peuvent appliquer leurs
          propres limites de virement (généralement de l&apos;ordre de 25 000 € à 100 000 €
          pour les virements SEPA standards), mais le format du GiroCode lui-même ne fixe pas
          de limite inférieure à celle du standard EPC.
        </p>
      </section>

      {/* ── Section 2 ── */}
      <section aria-labelledby="sans-montant-fr" className="mt-10">
        <h2 id="sans-montant-fr">Avantages et inconvénients : GiroCode avec vs. sans montant</h2>

        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-800/60">
                <th className="px-4 py-3 text-left font-semibold text-slate-200">Aspect</th>
                <th className="px-4 py-3 text-left font-semibold text-emerald-400">Avec montant</th>
                <th className="px-4 py-3 text-left font-semibold text-sky-400">Sans montant</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr className="bg-slate-900/30">
                <td className="px-4 py-3 text-slate-300">Risque d&apos;erreur de montant</td>
                <td className="px-4 py-3 text-emerald-400">Très faible (automatique)</td>
                <td className="px-4 py-3 text-red-400">Élevé (saisie manuelle)</td>
              </tr>
              <tr className="bg-slate-900/10">
                <td className="px-4 py-3 text-slate-300">Flexibilité pour le payeur</td>
                <td className="px-4 py-3 text-red-400">Faible (montant fixe)</td>
                <td className="px-4 py-3 text-emerald-400">Totale (choix libre)</td>
              </tr>
              <tr className="bg-slate-900/30">
                <td className="px-4 py-3 text-slate-300">Cas d&apos;usage principal</td>
                <td className="px-4 py-3 text-slate-300">Factures précises</td>
                <td className="px-4 py-3 text-slate-300">Dons, abonnements variables</td>
              </tr>
              <tr className="bg-slate-900/10">
                <td className="px-4 py-3 text-slate-300">Rapidité de paiement</td>
                <td className="px-4 py-3 text-emerald-400">Maximum (aucune saisie)</td>
                <td className="px-4 py-3 text-yellow-400">Réduite (saisie du montant)</td>
              </tr>
              <tr className="bg-slate-900/30">
                <td className="px-4 py-3 text-slate-300">Taille du QR code</td>
                <td className="px-4 py-3 text-slate-300">Légèrement plus grand</td>
                <td className="px-4 py-3 text-slate-300">Légèrement plus petit</td>
              </tr>
              <tr className="bg-slate-900/10">
                <td className="px-4 py-3 text-slate-300">Réconciliation comptable</td>
                <td className="px-4 py-3 text-emerald-400">Automatique et fiable</td>
                <td className="px-4 py-3 text-yellow-400">Possible mais moins fiable</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Recommandation pratique</h3>
        <p>
          Pour les <strong>factures professionnelles</strong> avec un montant précis, incluez
          toujours le montant. Cela garantit que le paiement reçu correspond exactement au
          montant facturé et facilite la réconciliation comptable.
        </p>
        <p>
          Pour les <strong>associations</strong> (collecte de dons), les <strong>collectes
          informelles</strong> entre amis ou collègues, ou les situations où le montant est
          vraiment variable, un GiroCode sans montant est tout à fait approprié.
        </p>
      </section>

      {/* ── Section 3 ── */}
      <section aria-labelledby="reference-fr" className="mt-10">
        <h2 id="reference-fr">La référence de paiement dans un GiroCode</h2>

        <h3>Caractéristiques techniques</h3>
        <p>
          La référence de paiement (ou libellé) correspond à la ligne 11 du payload EPC. Elle
          présente les caractéristiques suivantes :
        </p>
        <ul>
          <li>
            <strong>Longueur maximale :</strong> 140 caractères (selon la norme EPC)
          </li>
          <li>
            <strong>Encodage :</strong> UTF-8 – les caractères accentués (é, è, ê, à, ü, ö, ä)
            et les caractères spéciaux courants sont supportés
          </li>
          <li>
            <strong>Optionnel :</strong> La référence peut être laissée vide, mais c&apos;est
            fortement déconseillé pour les contextes professionnels
          </li>
          <li>
            <strong>Traitement par la banque :</strong> La référence est transmise telle quelle
            dans le message de virement SEPA et apparaîtra dans le relevé bancaire du
            bénéficiaire
          </li>
        </ul>

        <h3>Que mettre dans la référence ?</h3>
        <p>
          La référence de paiement est l&apos;information qui permettra de retrouver facilement
          le paiement reçu et de l&apos;associer à la facture ou prestation correspondante.
          Voici les informations essentielles à inclure :
        </p>
        <ul>
          <li>
            <strong>Numéro de facture :</strong> L&apos;élément le plus important. Il doit être
            unique et permettre d&apos;identifier sans ambiguïté la facture concernée.
            Exemple : <code>Facture 2025-042</code>
          </li>
          <li>
            <strong>Date :</strong> La date de la facture peut aider à retrouver rapidement un
            document. Exemple : <code>Facture 042 du 15/03/2025</code>
          </li>
          <li>
            <strong>Description courte :</strong> Une brève description de la prestation ou du
            produit peut être utile. Exemple : <code>Facture 2025-042 – Développement web</code>
          </li>
        </ul>
      </section>

      {/* ── Section 4 ── */}
      <section aria-labelledby="bonnes-pratiques-fr" className="mt-10">
        <h2 id="bonnes-pratiques-fr">Bonnes pratiques pour les références de paiement</h2>

        <h3>Règle d&apos;or : toujours inclure le numéro de facture</h3>
        <p>
          La règle la plus importante est simple : incluez <strong>toujours</strong> le numéro
          de facture dans la référence de paiement. C&apos;est lui qui permettra à votre
          logiciel de comptabilité ou à vous-même de faire le lien entre un virement reçu et la
          facture correspondante.
        </p>
        <p>
          Sans numéro de facture dans le libellé, vous devrez vous fier au montant et à la date
          pour identifier le paiement – ce qui peut être ambiguë si vous avez plusieurs factures
          du même montant ou si un client paie en retard.
        </p>

        <h3>Structure recommandée</h3>
        <p>
          Une bonne référence de paiement suit une structure claire et cohérente. Voici quelques
          modèles recommandés :
        </p>
        <ul>
          <li>
            Format simple : <code>Facture [NUMÉRO]</code>
            <br />
            Exemple : <code>Facture 2025-042</code>
          </li>
          <li>
            Format avec date : <code>Facture [NUMÉRO] du [DATE]</code>
            <br />
            Exemple : <code>Facture 2025-042 du 15.03.2025</code>
          </li>
          <li>
            Format avec description : <code>Facture [NUMÉRO] – [DESCRIPTION]</code>
            <br />
            Exemple : <code>Facture 2025-042 – Conseil en stratégie digitale</code>
          </li>
          <li>
            Format pour associations : <code>Cotisation [ANNÉE] – Membre [NUMÉRO]</code>
            <br />
            Exemple : <code>Cotisation 2025 – Membre 1042</code>
          </li>
        </ul>

        <h3>Cohérence dans la numérotation des factures</h3>
        <p>
          Adopter un système de numérotation cohérent et chronologique pour vos factures est
          une bonne pratique comptable indépendante du GiroCode. Les formats les plus courants
          sont :
        </p>
        <ul>
          <li><code>2025-001</code>, <code>2025-002</code>, etc. (séquentiel annuel)</li>
          <li><code>2025-03-001</code>, <code>2025-03-002</code> (séquentiel mensuel)</li>
          <li><code>INV-2025-001</code> (avec préfixe)</li>
        </ul>
        <p>
          En France, la numérotation chronologique des factures est une <strong>obligation
          légale</strong> pour les professionnels assujettis à la TVA.
        </p>
      </section>

      {/* ── Section 5 ── */}
      <section aria-labelledby="erreurs-ref-fr" className="mt-10">
        <h2 id="erreurs-ref-fr">Erreurs courantes avec les références de paiement</h2>

        <h3>1. Référence trop longue</h3>
        <p>
          La limite de 140 caractères est suffisante pour la plupart des usages, mais certains
          utilisateurs tentent d&apos;inclure des descriptions très longues. Si la référence
          dépasse 140 caractères, le GiroCode sera invalide. Notre générateur tronque
          automatiquement la référence à 140 caractères avec un avertissement.
        </p>

        <h3>2. Référence vide</h3>
        <p>
          Envoyer un virement SEPA sans libellé est techniquement possible mais fortement
          déconseillé. Sans référence, il est très difficile de réconcilier les paiements reçus
          avec les factures correspondantes, surtout si vous recevez de nombreux paiements.
        </p>

        <h3>3. Référence non structurée et ambiguë</h3>
        <p>
          Utiliser des libellés vagues comme « Paiement », « Facture », « Règlement »
          (sans numéro) est une erreur fréquente. Ces libellés ne permettent pas
          d&apos;identifier le paiement de manière unique.
        </p>

        <h3>4. Numéros de facture incohérents</h3>
        <p>
          Si votre numérotation de facture n&apos;est pas cohérente ou ne suit pas une
          séquence logique, la réconciliation devient difficile même avec un GiroCode. Adoptez
          une convention de numérotation dès le début de votre activité.
        </p>

        <h3>5. Caractères spéciaux problématiques</h3>
        <p>
          Bien que l&apos;UTF-8 soit supporté, certains caractères très spéciaux (emoji,
          caractères cyrilliques, etc.) peuvent ne pas être correctement transmis par certains
          systèmes bancaires. Tenez-vous aux caractères latins standard et aux accents courants
          pour une compatibilité maximale.
        </p>
      </section>

      {/* ── Section 6 ── */}
      <section aria-labelledby="secteurs-fr" className="mt-10">
        <h2 id="secteurs-fr">Références de paiement pour différents secteurs</h2>

        <h3>Freelances et agences</h3>
        <p>
          Les freelances et les agences émettent généralement des factures pour des prestations
          de services spécifiques. Voici les recommandations :
        </p>
        <ul>
          <li>
            Inclure le numéro de facture et une courte description de la prestation
          </li>
          <li>
            Exemple : <code>Facture 2025-042 – Développement site web – Phase 2</code>
          </li>
          <li>
            Si vous travaillez pour plusieurs clients, vous pouvez ajouter le nom du client :
            <code>Facture 2025-042 – Dupont SA – Design graphique</code>
          </li>
        </ul>

        <h3>Artisans et prestataires de services</h3>
        <p>
          Les artisans (plombiers, électriciens, menuisiers, etc.) font souvent des chantiers
          identifiables par une adresse ou un type de travaux :
        </p>
        <ul>
          <li>
            <code>Facture 2025-015 – Rénovation salle de bain – 12 rue de la Paix</code>
          </li>
          <li>
            <code>Devis 2025-007 acompte 30%</code>
          </li>
        </ul>

        <h3>Associations</h3>
        <p>
          Les associations utilisent souvent les GiroCodes pour les cotisations et les dons.
          Des références spécifiques facilitent la gestion administrative :
        </p>
        <ul>
          <li>
            Cotisation annuelle : <code>Cotisation 2025 – Membre 1042 – Jean Dupont</code>
          </li>
          <li>
            Don : <code>Don 2025 – Projet Éducation – Reçu fiscal disponible</code>
          </li>
          <li>
            Inscription événement : <code>Inscription Gala 2025 – 2 places – Dupont</code>
          </li>
        </ul>

        <h3>Boutiques en ligne (e-commerce)</h3>
        <p>
          Les boutiques en ligne qui acceptent les virements SEPA peuvent utiliser des GiroCodes
          avec des références de commande :
        </p>
        <ul>
          <li>
            <code>Commande #CMD-2025-8734</code>
          </li>
          <li>
            <code>Règlement commande CMD-2025-8734 – Jean Dupont</code>
          </li>
        </ul>
        <p>
          Note : Pour l&apos;e-commerce, les virements SEPA avec GiroCode sont moins courants
          car ils ne permettent pas de vérifier automatiquement le paiement avant l&apos;envoi
          de la commande. Ils sont mieux adaptés aux transactions B2B ou aux contextes où la
          confiance est déjà établie.
        </p>

        <h3>Professions libérales (médecins, avocats, architectes)</h3>
        <p>
          Les professions libérales peuvent avoir des contraintes de confidentialité particulières
          (secret médical, etc.). Dans ce cas, des références neutres sont préférables :
        </p>
        <ul>
          <li>
            <code>Honoraires dossier 2025-042</code> (sans nom du patient/client)
          </li>
          <li>
            <code>Consultation du 15.03.2025 – Ref 2025-042</code>
          </li>
        </ul>
      </section>

      {/* ── Section 7 – Exemples pratiques ── */}
      <section aria-labelledby="exemples-fr" className="mt-10">
        <h2 id="exemples-fr">Exemples de GiroCodes complets</h2>

        <h3>Exemple 1 : Facture d&apos;un freelance développeur web</h3>
        <pre className="overflow-x-auto rounded-xl bg-slate-900/80 p-4 text-xs text-emerald-300">
          {`BCD
002
1
SCT
SOGEFRPPXXX
Marie Martin Développement
FR7612345678901234567890185
EUR2850.00

Facture 2025-042 – Développement application mobile`}
        </pre>

        <h3>Exemple 2 : Cotisation d&apos;association (sans montant fixe)</h3>
        <pre className="overflow-x-auto rounded-xl bg-slate-900/80 p-4 text-xs text-emerald-300">
          {`BCD
002
1
SCT

Association Sportive Les Aigles
FR7698765432100987654321012


Cotisation 2025 – Membre 247 – Pierre Durand`}
        </pre>

        <h3>Exemple 3 : Acompte avec description détaillée</h3>
        <pre className="overflow-x-auto rounded-xl bg-slate-900/80 p-4 text-xs text-emerald-300">
          {`BCD
002
1
SCT
BNPAFRPPXXX
Cabinet Architecture Renard
FR7630004000031234567890143
EUR5000.00

Acompte 50% – Devis 2025-018 – Rénovation bureau Paris 11e`}
        </pre>
      </section>

    </KnowledgeLayout>
  );
}
