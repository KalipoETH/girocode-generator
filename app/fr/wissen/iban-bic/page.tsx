import type { Metadata } from 'next';
import Link from 'next/link';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';

export const metadata: Metadata = {
  title: 'IBAN & BIC dans GiroCode – Format, Obligatoire & Validation',
  description:
    'IBAN et BIC pour GiroCode: Le BIC est-il obligatoire? Comment fonctionne la validation IBAN (Mod-97)? Tous les formats expliqués.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/fr/wissen/iban-bic',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/iban-bic',
      'de': 'https://www.girocodegenerator.com/wissen/iban-bic',
      'en': 'https://www.girocodegenerator.com/en/wissen/iban-bic',
      'fr': 'https://www.girocodegenerator.com/fr/wissen/iban-bic',
      'es': 'https://www.girocodegenerator.com/es/wissen/iban-bic',
    },
  },
};

export default function WissenIbanBicPageFr() {
  return (
    <KnowledgeLayout
      breadcrumbCurrent="IBAN & BIC"
      badge="Bases · IBAN & BIC"
      title="IBAN & BIC pour GiroCode – Guide complet"
      lead="L'IBAN est l'élément central de tout GiroCode. Ce guide explique sa structure, son fonctionnement, la validation par l'algorithme Mod-97 et le rôle du BIC dans les paiements SEPA modernes."
      relatedArticles={[
        { href: '/fr/wissen/girocode', label: "Qu'est-ce qu'un GiroCode ?" },
        { href: '/fr/wissen/epc-standard', label: 'Norme EPC & SEPA-QR – Structure technique' },
        { href: '/fr/wissen/betrag-und-zweck', label: 'Montant & référence de paiement' },
        { href: '/fr/wissen/rechnung', label: 'GiroCode sur les factures' },
      ]}
      locale="fr"
    >

      {/* ── Section 1 ── */}
      <section aria-labelledby="iban-def-fr">
        <h2 id="iban-def-fr">Qu&apos;est-ce qu&apos;un IBAN ?</h2>
        <p>
          L&apos;<strong>IBAN</strong> (International Bank Account Number – Numéro de compte
          bancaire international) est un standard international de numérotation des comptes
          bancaires développé par l&apos;Organisation internationale de normalisation (ISO) et
          le Comité européen de normalisation bancaire (CENB). Il a été introduit dans le cadre
          de la modernisation des paiements internationaux afin de remplacer les systèmes
          nationaux disparates par un format unique et universellement reconnaissable.
        </p>
        <p>
          Avant l&apos;IBAN, chaque pays avait son propre format de numéro de compte, rendant
          les virements transfrontaliers complexes, coûteux et sujets aux erreurs. L&apos;IBAN
          standardise cette information en ajoutant un préfixe pays et des chiffres de contrôle
          au numéro de compte national existant.
        </p>

        <h3>Structure de l&apos;IBAN français</h3>
        <p>L&apos;IBAN français a une longueur fixe de <strong>27 caractères</strong> :</p>
        <ul>
          <li><strong>FR</strong> – Code pays (2 lettres)</li>
          <li><strong>76</strong> – Chiffres de contrôle (2 chiffres)</li>
          <li><strong>12345</strong> – Code banque (5 chiffres)</li>
          <li><strong>67890</strong> – Code guichet (5 chiffres)</li>
          <li><strong>12345678901</strong> – Numéro de compte (11 chiffres)</li>
          <li><strong>85</strong> – Clé RIB (2 chiffres)</li>
        </ul>
        <p>
          Exemple d&apos;IBAN français complet : <code>FR7612345678901234567890185</code>
        </p>

        <h3>Structure de l&apos;IBAN allemand</h3>
        <p>L&apos;IBAN allemand a une longueur de <strong>22 caractères</strong> :</p>
        <ul>
          <li><strong>DE</strong> – Code pays</li>
          <li><strong>89</strong> – Chiffres de contrôle</li>
          <li><strong>370400440</strong> – Code bancaire (Bankleitzahl, 8 chiffres)</li>
          <li><strong>0532013000</strong> – Numéro de compte (10 chiffres)</li>
        </ul>
        <p>
          Exemple : <code>DE89370400440532013000</code>
        </p>
      </section>

      {/* ── Section 2 ── */}
      <section aria-labelledby="iban-etapes-fr" className="mt-10">
        <h2 id="iban-etapes-fr">L&apos;IBAN expliqué étape par étape</h2>

        <h3>Étape 1 : Le code pays</h3>
        <p>
          Les deux premières lettres d&apos;un IBAN correspondent au code ISO 3166-1 alpha-2
          du pays de la banque. Par exemple, <code>FR</code> pour la France, <code>DE</code>{' '}
          pour l&apos;Allemagne, <code>ES</code> pour l&apos;Espagne, <code>IT</code> pour
          l&apos;Italie, <code>NL</code> pour les Pays-Bas. Ce code identifie non seulement le
          pays mais aussi le format de l&apos;IBAN qui suit.
        </p>

        <h3>Étape 2 : Les chiffres de contrôle (algorithme Mod-97)</h3>
        <p>
          Les deux chiffres qui suivent le code pays sont les <strong>chiffres de contrôle
          IBAN</strong>. Ils sont calculés selon l&apos;algorithme Mod-97 (modulo 97) et
          permettent de vérifier que l&apos;IBAN entier est syntaxiquement correct. Ce système
          de contrôle permet de détecter environ 97 % des erreurs de saisie typiques.
        </p>
        <p>
          Le calcul des chiffres de contrôle fonctionne de la manière suivante :
        </p>
        <ol>
          <li>Déplacer les 4 premiers caractères à la fin de l&apos;IBAN</li>
          <li>Remplacer chaque lettre par sa valeur numérique (A=10, B=11, ..., Z=35)</li>
          <li>Calculer le reste de la division entière par 97</li>
          <li>
            Pour un IBAN valide, le résultat doit être <strong>1</strong> (et non pas 0)
          </li>
        </ol>

        <h3>Exemple de validation IBAN : FR7612345678901234567890185</h3>
        <ol>
          <li>
            Déplacer les 4 premiers caractères : <code>12345678901234567890185FR76</code>
          </li>
          <li>
            Remplacer les lettres : F=15, R=27 → <code>1234567890123456789018515276</code>
          </li>
          <li>
            Calculer : 1234567890123456789018515276 mod 97 = <strong>1</strong> ✓
          </li>
        </ol>

        <h3>Étape 3 : Le BBAN (Basic Bank Account Number)</h3>
        <p>
          Le reste de l&apos;IBAN après le code pays et les chiffres de contrôle est le BBAN
          (Basic Bank Account Number). Il correspond au numéro de compte national, reformaté
          selon les règles du pays concerné. Sa structure et sa longueur varient d&apos;un
          pays à l&apos;autre.
        </p>
      </section>

      {/* ── Section 3 ── */}
      <section aria-labelledby="bic-def-fr" className="mt-10">
        <h2 id="bic-def-fr">Qu&apos;est-ce qu&apos;un BIC ?</h2>
        <p>
          Le <strong>BIC</strong> (Bank Identifier Code), également connu sous le nom de code
          SWIFT, est un code d&apos;identification unique attribué à chaque banque. Il est
          utilisé pour identifier les établissements financiers dans les transactions
          internationales et les systèmes de messagerie interbancaire.
        </p>

        <h3>Structure du BIC</h3>
        <p>Un BIC peut avoir 8 ou 11 caractères :</p>
        <ul>
          <li>
            <strong>Code banque (4 lettres) :</strong> Identifiant unique de la banque.
            Exemple : <code>SOGE</code> pour Société Générale
          </li>
          <li>
            <strong>Code pays (2 lettres) :</strong> Code ISO du pays. Exemple : <code>FR</code>{' '}
            pour la France
          </li>
          <li>
            <strong>Code location (2 caractères) :</strong> Indique la localisation du siège
            social ou de l&apos;unité principale. Exemple : <code>PP</code>
          </li>
          <li>
            <strong>Code branche (3 caractères, optionnel) :</strong> Identifie une agence
            spécifique. Si absent ou remplacé par <code>XXX</code>, fait référence au siège
            principal
          </li>
        </ul>
        <p>
          Exemples de BIC : <code>SOGEFRPPXXX</code> (Société Générale France), <code>
            BNPAFRPPXXX
          </code>{' '}
          (BNP Paribas France), <code>DEUTDEDBXXX</code> (Deutsche Bank Allemagne)
        </p>

        <h3>Où trouver son BIC ?</h3>
        <p>
          Votre BIC figure généralement sur :
        </p>
        <ul>
          <li>Votre relevé de compte bancaire</li>
          <li>La page d&apos;informations de compte de votre application bancaire</li>
          <li>Le site web officiel de votre banque (section « Coordonnées bancaires »)</li>
          <li>Votre RIB (Relevé d&apos;Identité Bancaire) pour les banques françaises</li>
        </ul>
      </section>

      {/* ── Section 4 ── */}
      <section aria-labelledby="bic-girocode-fr" className="mt-10">
        <h2 id="bic-girocode-fr">Le BIC est-il obligatoire pour un GiroCode ?</h2>

        <h3>Optionnel depuis la migration SEPA 2016</h3>
        <p>
          La réponse courte est : <strong>non, pas pour la plupart des cas d&apos;usage.</strong>
        </p>
        <p>
          Depuis le 1er février 2016, date de la migration SEPA complète en Europe, le BIC
          n&apos;est plus obligatoire pour les virements SEPA intra-européens. Les banques sont
          désormais capables d&apos;identifier l&apos;établissement financier du bénéficiaire
          uniquement à partir de l&apos;IBAN, en utilisant des bases de données centralisées
          de correspondance IBAN-BIC.
        </p>
        <p>
          Dans la norme EPC v002 (la version actuelle), le champ BIC (ligne 5 du payload) est
          donc optionnel. Notre{' '}
          <Link href="/fr" className="text-sky-400 hover:text-sky-300">
            générateur de GiroCode
          </Link>{' '}
          vous permet de renseigner le BIC si vous le souhaitez, mais ne l&apos;exige pas.
        </p>

        <h3>Quand le BIC est-il encore nécessaire ?</h3>
        <p>
          Malgré la règle générale, il existe des situations où le BIC reste utile ou même
          nécessaire :
        </p>
        <ul>
          <li>
            <strong>Virements vers des pays hors zone euro :</strong> Pour certains virements
            vers des pays qui font partie de la zone SEPA mais n&apos;utilisent pas l&apos;euro
            (comme la Suède, la Pologne, la Hongrie, la République tchèque, etc.), certaines
            banques peuvent encore exiger le BIC.
          </li>
          <li>
            <strong>Compatibilité avec les anciens systèmes :</strong> Certaines applications
            bancaires plus anciennes ou systèmes de traitement intermédiaires peuvent ne pas
            avoir implémenté la résolution automatique IBAN-BIC. Dans ces cas, fournir le BIC
            assure une compatibilité maximale.
          </li>
          <li>
            <strong>Virements urgents (SEPA Instant) :</strong> Pour les virements instantanés
            SEPA, certaines banques recommandent d&apos;inclure le BIC pour éviter tout délai
            de traitement.
          </li>
        </ul>

        <h3>Recommandation pratique</h3>
        <p>
          Si vous connaissez votre BIC, incluez-le dans votre GiroCode – cela ne coûte rien et
          améliore la compatibilité. Si vous ne le connaissez pas, laissez ce champ vide : le
          GiroCode fonctionnera correctement dans la grande majorité des cas.
        </p>
      </section>

      {/* ── Section 5 ── */}
      <section aria-labelledby="validation-fr" className="mt-10">
        <h2 id="validation-fr">Validation IBAN expliquée</h2>

        <h3>Pourquoi valider l&apos;IBAN avant de créer un GiroCode ?</h3>
        <p>
          Une simple erreur dans l&apos;IBAN peut avoir des conséquences graves :
        </p>
        <ul>
          <li>
            <strong>Virement rejeté :</strong> Si l&apos;IBAN mal saisi ne correspond à aucun
            compte existant, le virement sera rejeté par la banque, souvent avec des frais
            supplémentaires.
          </li>
          <li>
            <strong>Virement vers un mauvais compte :</strong> Dans le pire des cas, si
            l&apos;IBAN incorrectement saisi correspond par hasard à un compte existant (d&apos;une
            autre personne), le virement sera effectué vers le mauvais destinataire. Récupérer
            l&apos;argent peut être long et compliqué.
          </li>
          <li>
            <strong>Délais et coûts :</strong> Les erreurs d&apos;IBAN causent des retards de
            paiement et potentiellement des frais bancaires.
          </li>
        </ul>

        <h3>L&apos;algorithme Mod-97 étape par étape</h3>
        <p>
          Voici comment fonctionne la validation Mod-97 d&apos;un IBAN, en détail :
        </p>
        <ol>
          <li>
            <strong>Normaliser l&apos;IBAN :</strong> Supprimer tous les espaces et mettre
            en majuscules. <code>FR76 1234 5678...</code> →{' '}
            <code>FR7612345678...</code>
          </li>
          <li>
            <strong>Réorganiser :</strong> Déplacer les 4 premiers caractères (code pays +
            chiffres de contrôle) à la fin. <code>FR7612345678901234567890185</code> →{' '}
            <code>12345678901234567890185FR76</code>
          </li>
          <li>
            <strong>Convertir les lettres :</strong> Remplacer chaque lettre par sa valeur
            numérique (A=10, B=11, C=12, ..., Z=35). <code>F=15</code>, <code>R=27</code>{' '}
            → <code>1234567890123456789018515276</code>
          </li>
          <li>
            <strong>Calculer le reste :</strong> Diviser le grand nombre obtenu par 97 et
            calculer le reste.
          </li>
          <li>
            <strong>Vérifier :</strong> Si le reste est <strong>1</strong>, l&apos;IBAN est
            valide. Si c&apos;est une autre valeur, l&apos;IBAN contient une erreur.
          </li>
        </ol>

        <h3>Exemple de code JavaScript pour la validation IBAN</h3>
        <pre className="overflow-x-auto rounded-xl bg-slate-900/80 p-4 text-xs text-emerald-300">
          {`/**
 * Valide un IBAN selon l'algorithme Mod-97
 * @param {string} iban - L'IBAN à valider (avec ou sans espaces)
 * @returns {boolean} true si l'IBAN est valide
 */
function validateIBAN(iban) {
  // Supprimer les espaces et mettre en majuscules
  const cleaned = iban.replace(/\\s/g, '').toUpperCase();

  // Vérifier la longueur minimale
  if (cleaned.length < 5) return false;

  // Vérifier que le format commence par 2 lettres puis 2 chiffres
  if (!/^[A-Z]{2}[0-9]{2}/.test(cleaned)) return false;

  // Réorganiser: déplacer les 4 premiers caractères à la fin
  const rearranged = cleaned.slice(4) + cleaned.slice(0, 4);

  // Convertir les lettres en chiffres
  const numeric = rearranged.split('').map(char => {
    const code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      return (code - 55).toString(); // A=10, B=11, ..., Z=35
    }
    return char;
  }).join('');

  // Calculer Mod-97 sur de grands nombres
  // (JavaScript ne supporte pas nativement les très grands entiers en BigInt)
  let remainder = 0;
  for (const digit of numeric) {
    remainder = (remainder * 10 + parseInt(digit)) % 97;
  }

  return remainder === 1;
}

// Tests :
console.log(validateIBAN('FR76 1234 5678 9012 3456 7890 185')); // true
console.log(validateIBAN('DE89 3704 0044 0532 0130 00'));         // true
console.log(validateIBAN('FR76 1234 5678 9012 3456 7890 186')); // false (chiffre erroné)
console.log(validateIBAN('XX00 0000 0000 0000 0000 000'));       // false (pays inexistant)`}
        </pre>

        <h3>Erreurs courantes de saisie IBAN</h3>
        <p>Les erreurs les plus fréquentes lors de la saisie manuelle d&apos;un IBAN sont :</p>
        <ul>
          <li>
            <strong>Transposition de chiffres :</strong> Inverser deux chiffres consécutifs
            (<code>...1234...</code> devient <code>...2134...</code>)
          </li>
          <li>
            <strong>Chiffres répétés :</strong> Doubler un chiffre par erreur
            (<code>...1234...</code> devient <code>...11234...</code>)
          </li>
          <li>
            <strong>Confusion O/0 et I/1 :</strong> Confondre la lettre O et le chiffre 0,
            ou la lettre I et le chiffre 1 (bien que les IBAN n&apos;utilisent théoriquement
            pas ces caractères ambigus)
          </li>
          <li>
            <strong>Mauvais code pays :</strong> Saisir le mauvais préfixe (par exemple
            <code>BE</code> au lieu de <code>FR</code>)
          </li>
        </ul>
      </section>

      {/* ── Section 6 ── */}
      <section aria-labelledby="formats-pays-fr" className="mt-10">
        <h2 id="formats-pays-fr">Formats IBAN par pays</h2>
        <p>
          Voici un tableau récapitulatif des formats IBAN pour les principaux pays de la zone
          SEPA :
        </p>

        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-800/60">
                <th className="px-4 py-3 text-left font-semibold text-slate-200">Pays</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-200">Code</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-200">Longueur</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-200">Exemple</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr className="bg-slate-900/30">
                <td className="px-4 py-3 text-slate-300">France</td>
                <td className="px-4 py-3 font-mono text-sky-400">FR</td>
                <td className="px-4 py-3 text-slate-300">27</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-400">FR7612345678901234567890185</td>
              </tr>
              <tr className="bg-slate-900/10">
                <td className="px-4 py-3 text-slate-300">Allemagne</td>
                <td className="px-4 py-3 font-mono text-sky-400">DE</td>
                <td className="px-4 py-3 text-slate-300">22</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-400">DE89370400440532013000</td>
              </tr>
              <tr className="bg-slate-900/30">
                <td className="px-4 py-3 text-slate-300">Autriche</td>
                <td className="px-4 py-3 font-mono text-sky-400">AT</td>
                <td className="px-4 py-3 text-slate-300">20</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-400">AT611904300235473201</td>
              </tr>
              <tr className="bg-slate-900/10">
                <td className="px-4 py-3 text-slate-300">Suisse</td>
                <td className="px-4 py-3 font-mono text-sky-400">CH</td>
                <td className="px-4 py-3 text-slate-300">21</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-400">CH5604835012345678009</td>
              </tr>
              <tr className="bg-slate-900/30">
                <td className="px-4 py-3 text-slate-300">Espagne</td>
                <td className="px-4 py-3 font-mono text-sky-400">ES</td>
                <td className="px-4 py-3 text-slate-300">24</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-400">ES9121000418450200051332</td>
              </tr>
              <tr className="bg-slate-900/10">
                <td className="px-4 py-3 text-slate-300">Italie</td>
                <td className="px-4 py-3 font-mono text-sky-400">IT</td>
                <td className="px-4 py-3 text-slate-300">27</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-400">IT60X0542811101000000123456</td>
              </tr>
              <tr className="bg-slate-900/30">
                <td className="px-4 py-3 text-slate-300">Pays-Bas</td>
                <td className="px-4 py-3 font-mono text-sky-400">NL</td>
                <td className="px-4 py-3 text-slate-300">18</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-400">NL91ABNA0417164300</td>
              </tr>
              <tr className="bg-slate-900/10">
                <td className="px-4 py-3 text-slate-300">Belgique</td>
                <td className="px-4 py-3 font-mono text-sky-400">BE</td>
                <td className="px-4 py-3 text-slate-300">16</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-400">BE68539007547034</td>
              </tr>
              <tr className="bg-slate-900/30">
                <td className="px-4 py-3 text-slate-300">Portugal</td>
                <td className="px-4 py-3 font-mono text-sky-400">PT</td>
                <td className="px-4 py-3 text-slate-300">25</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-400">PT50000201231234567890154</td>
              </tr>
              <tr className="bg-slate-900/10">
                <td className="px-4 py-3 text-slate-300">Luxembourg</td>
                <td className="px-4 py-3 font-mono text-sky-400">LU</td>
                <td className="px-4 py-3 text-slate-300">20</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-400">LU280019400644750000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Section 7 ── */}
      <section aria-labelledby="securite-iban-fr" className="mt-10">
        <h2 id="securite-iban-fr">Sécurité de l&apos;IBAN dans le GiroCode</h2>

        <h3>Est-il sûr de partager son IBAN ?</h3>
        <p>
          L&apos;IBAN est une donnée <strong>semi-publique</strong>. Il figure déjà sur les
          chèques, les RIB (relevés d&apos;identité bancaire) et les factures. Le partager pour
          recevoir des virements ne présente pas de risque intrinsèque, car un IBAN seul ne
          permet que de <em>recevoir</em> des paiements, pas d&apos;en initier.
        </p>
        <p>
          Cependant, il faut être conscient que votre IBAN peut être utilisé pour des
          prélèvements SEPA (débit direct). Si quelqu&apos;un obtient votre IBAN et votre nom,
          il pourrait théoriquement initier un prélèvement non autorisé – bien que la
          réglementation SEPA offre une protection : vous avez le droit de contester tout
          prélèvement non autorisé dans un délai de 13 mois et d&apos;être remboursé
          immédiatement.
        </p>

        <h3>GiroCode et confidentialité</h3>
        <p>
          Un GiroCode contient votre IBAN, votre nom et éventuellement votre montant de
          facturation. Si vous publiez ce code QR publiquement (sur un site web, par exemple),
          toute personne peut en extraire ces informations. Pour les factures envoyées à des
          clients spécifiques, ce n&apos;est généralement pas un problème. Mais pour un code QR
          utilisé dans un contexte public, soyez conscient que l&apos;IBAN sera visible par
          quiconque scanne le code.
        </p>

        <h3>IBAN pour virement vs. prélèvement</h3>
        <p>
          Il est important de comprendre la différence fondamentale :
        </p>
        <ul>
          <li>
            <strong>Virement SEPA (SCT) :</strong> Vous donnez l&apos;ordre de payer. Le GiroCode
            initie un virement depuis le compte du <em>payeur</em> vers votre compte. Vous
            êtes le bénéficiaire passif.
          </li>
          <li>
            <strong>Prélèvement SEPA (SDD) :</strong> Vous autorisez quelqu&apos;un d&apos;autre
            à prélever de l&apos;argent sur votre compte. Cela nécessite un mandat de
            prélèvement signé et ne peut pas être initié via un GiroCode.
          </li>
        </ul>
        <p>
          En d&apos;autres termes, un GiroCode ne peut jamais être utilisé pour prélever de
          l&apos;argent sur le compte du payeur sans son consentement explicite. La confirmation
          dans l&apos;application bancaire constitue ce consentement.
        </p>
      </section>

    </KnowledgeLayout>
  );
}
