import type { Metadata } from 'next';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';

export const metadata: Metadata = {
  title: 'Norme EPC expliquée – Structure du code QR SEPA 2026',
  description:
    'La norme EPC pour GiroCodes: structure du payload ligne par ligne, versions 001/002, correction d\'erreurs et exemple JavaScript.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/fr/wissen/epc-standard',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/epc-standard',
      'de': 'https://www.girocodegenerator.com/wissen/epc-standard',
      'en': 'https://www.girocodegenerator.com/en/wissen/epc-standard',
      'fr': 'https://www.girocodegenerator.com/fr/wissen/epc-standard',
      'es': 'https://www.girocodegenerator.com/es/wissen/epc-standard',
    },
  },
};

export default function WissenEpcStandardPageFr() {
  return (
    <KnowledgeLayout
      breadcrumbCurrent="Norme EPC & SEPA-QR"
      badge="Technique · Standard EPC"
      title="Norme EPC & SEPA-QR – Structure technique expliquée"
      lead="La norme EPC définit précisément comment un virement SEPA est encodé dans un code QR. Ce guide explique ligne par ligne la structure du payload EPC, les différentes versions et les aspects techniques importants pour créer des GiroCodes valides."
      relatedArticles={[
        { href: '/fr/wissen/girocode', label: "Qu'est-ce qu'un GiroCode ? – Guide complet" },
        { href: '/fr/wissen/iban-bic', label: 'IBAN & BIC pour GiroCode – Guide complet' },
        { href: '/fr/wissen/betrag-und-zweck', label: 'Montant & référence de paiement dans GiroCode' },
        { href: '/fr/wissen/rechnung', label: 'GiroCode sur les factures' },
      ]}
      locale="fr"
    >

      {/* ── Section 1 ── */}
      <section aria-labelledby="epc-definition-fr">
        <h2 id="epc-definition-fr">Qu&apos;est-ce que la norme EPC ?</h2>
        <p>
          L&apos;<strong>European Payments Council (EPC)</strong> est l&apos;organisme de
          normalisation de l&apos;espace SEPA (Single Euro Payments Area). Fondé en 2002, l&apos;EPC
          rassemble des représentants des banques et des institutions financières de toute
          l&apos;Europe. Son rôle est de définir les règles, les standards et les pratiques qui
          permettent aux paiements électroniques en euros de fonctionner de manière harmonisée
          dans toute la zone SEPA.
        </p>
        <p>
          La norme EPC pour les codes QR de paiement a été publiée pour la première fois en
          <strong> 2012</strong>, sous la forme d&apos;un document de spécification technique
          intitulé « Quick Response Code – Guidelines to Enable the Data Capture for the
          Initiation of a Credit Transfer ». Ce document définit exactement comment les données
          d&apos;un virement SEPA doivent être encodées dans un code QR.
        </p>

        <h3>Pourquoi la norme EPC a-t-elle été introduite ?</h3>
        <p>
          Avant l&apos;introduction de la norme EPC, plusieurs banques et pays avaient développé
          leurs propres formats propriétaires de QR codes de paiement, ce qui créait une
          incompatibilité totale entre les différents systèmes. Un code QR créé par une banque
          française ne pouvait pas être scanné par l&apos;application d&apos;une banque
          allemande, et vice versa.
        </p>
        <p>
          La norme EPC a été créée pour résoudre ce problème en définissant un format commun,
          ouvert et interopérable pour toute la zone SEPA. Elle garantit qu&apos;un GiroCode
          créé en Finlande peut être scanné sans problème par une application bancaire espagnole,
          à condition que les deux pays utilisent le même standard EPC.
        </p>

        <h3>Adoption en Europe</h3>
        <p>
          Depuis sa publication, la norme EPC a été progressivement adoptée par les banques de
          toute l&apos;Europe. L&apos;Allemagne a été pionnière avec le lancement du{' '}
          <strong>GiroCode</strong> en 2018. L&apos;Autriche a suivi avec son{' '}
          <strong>Stuzza-QR</strong>, et de nombreux autres pays ont intégré le standard dans
          leurs applications bancaires mobiles. Aujourd&apos;hui, la norme EPC est reconnue et
          supportée dans la quasi-totalité de la zone SEPA.
        </p>
      </section>

      {/* ── Section 2 ── */}
      <section aria-labelledby="structure-fr" className="mt-10">
        <h2 id="structure-fr">La structure technique du payload EPC</h2>
        <p>
          Le contenu d&apos;un GiroCode (appelé « payload » en anglais) est un texte brut de
          plusieurs lignes, chaque ligne ayant une signification précise. Voici un exemple
          complet d&apos;un payload EPC valide :
        </p>

        <pre className="overflow-x-auto rounded-xl bg-slate-900/80 p-4 text-xs text-emerald-300">
          {`BCD
002
1
SCT
SOGEFRPPXXX
Jean Dupont SARL
FR7612345678901234567890185
EUR1250.00

Facture 2025-042
Règlement facture 2025-042 – Conseil informatique`}
        </pre>

        <p>Voici la signification de chaque ligne :</p>

        <h3>Ligne 1 : Service Tag – BCD</h3>
        <p>
          La première ligne contient toujours la valeur <code>BCD</code> (Business Card Data).
          C&apos;est un identifiant fixe qui indique aux applications bancaires qu&apos;il
          s&apos;agit bien d&apos;un QR code de paiement au format EPC. Si cette valeur est
          absente ou incorrecte, l&apos;application refusera de traiter le code.
        </p>

        <h3>Ligne 2 : Version – 001 ou 002</h3>
        <p>
          La deuxième ligne indique la version de la norme EPC utilisée. Deux versions existent :
        </p>
        <ul>
          <li>
            <strong>Version 001 :</strong> La version originale, qui exigeait le BIC de la
            banque bénéficiaire.
          </li>
          <li>
            <strong>Version 002 :</strong> La version actuelle (depuis 2016), où le BIC est
            devenu optionnel pour les virements intra-SEPA.
          </li>
        </ul>
        <p>
          La version 002 est aujourd&apos;hui recommandée pour tous les nouveaux GiroCodes.
        </p>

        <h3>Ligne 3 : Encodage des caractères – 1</h3>
        <p>
          Cette ligne spécifie le jeu de caractères utilisé. La valeur <code>1</code> correspond
          à <strong>UTF-8</strong>, ce qui permet l&apos;utilisation de caractères accentués et
          spéciaux comme é, è, ê, ü, ö, ä, etc. C&apos;est le seul encodage recommandé dans la
          norme actuelle.
        </p>

        <h3>Ligne 4 : Identification de la fonction – SCT</h3>
        <p>
          La valeur <code>SCT</code> signifie <strong>SEPA Credit Transfer</strong> (virement
          SEPA). C&apos;est le type de paiement défini dans le GiroCode. Actuellement, SCT est
          la seule valeur autorisée dans les GiroCodes standard.
        </p>

        <h3>Ligne 5 : BIC de la banque bénéficiaire (optionnel depuis 2016)</h3>
        <p>
          Le BIC (Business Identifier Code) identifie la banque du bénéficiaire. Depuis la
          migration SEPA complète en 2016, le BIC n&apos;est plus obligatoire pour les
          virements intra-SEPA – les banques peuvent identifier l&apos;établissement à partir
          de l&apos;IBAN seul. Cette ligne peut donc être laissée vide (ligne vide), mais si
          vous connaissez votre BIC, il est toujours recommandé de l&apos;inclure pour une
          compatibilité maximale avec les systèmes plus anciens. La longueur maximale est de
          11 caractères (format 8 ou 11 lettres).
        </p>

        <h3>Ligne 6 : Nom du bénéficiaire (max. 70 caractères)</h3>
        <p>
          Le nom du bénéficiaire est <strong>obligatoire</strong> et peut contenir jusqu&apos;à
          70 caractères. C&apos;est le nom qui s&apos;affichera dans l&apos;application bancaire
          du payeur pour identifier le destinataire du virement. Il doit correspondre au titulaire
          du compte bancaire indiqué par l&apos;IBAN. Utilisez votre nom complet ou la raison
          sociale de votre entreprise exactement comme elle apparaît sur votre relevé bancaire.
        </p>

        <h3>Ligne 7 : IBAN du bénéficiaire</h3>
        <p>
          L&apos;IBAN est <strong>obligatoire</strong>. Il doit être saisi sans espaces et dans
          le format standard international (code pays + chiffres de contrôle + BBAN). Exemples :
        </p>
        <ul>
          <li>IBAN français : FR7612345678901234567890185</li>
          <li>IBAN allemand : DE89370400440532013000</li>
          <li>IBAN autrichien : AT611904300235473201</li>
        </ul>
        <p>
          Notre générateur valide automatiquement l&apos;IBAN saisi via l&apos;algorithme Mod-97
          avant de générer le QR code.
        </p>

        <h3>Ligne 8 : Montant (format EUR12.34)</h3>
        <p>
          Le montant est <strong>optionnel</strong>. S&apos;il est inclus, il doit suivre le
          format précis <code>EUR</code> suivi du montant avec un point comme séparateur
          décimal. Exemples : <code>EUR12.34</code>, <code>EUR1250.00</code>,{' '}
          <code>EUR0.50</code>. Le montant maximum autorisé est de <strong>999 999 999,99 €</strong>.
          Si cette ligne est vide (pas de montant), le payeur devra saisir le montant
          manuellement.
        </p>

        <h3>Ligne 9 : Type d&apos;objet (généralement vide)</h3>
        <p>
          Cette ligne est réservée pour identifier le type d&apos;objet de paiement. Dans la
          pratique courante, elle est laissée vide. Les valeurs théoriquement possibles (pour
          une utilisation future standardisée) ne sont pas encore largement implémentées.
        </p>

        <h3>Ligne 10 : Référence structurée (optionnel)</h3>
        <p>
          Cette ligne peut contenir une référence structurée du type ISO 11649 (référence
          créancier). Elle est principalement utilisée dans les pays qui l&apos;ont
          standardisée (Belgique, Pays-Bas). Pour un usage général, elle est laissée vide et
          la référence libre (ligne 11) est utilisée à la place.
        </p>

        <h3>Ligne 11 : Référence de paiement / libellé (max. 140 caractères)</h3>
        <p>
          C&apos;est la <strong>référence libre</strong> du virement – ce qui apparaîtra dans
          le libellé de votre relevé bancaire. Maximum 140 caractères en UTF-8. Incluez
          toujours le numéro de facture ici pour faciliter la réconciliation comptable. Exemple :
          <code>Facture 2025-042 – Développement site web</code>.
        </p>
      </section>

      {/* ── Section 3 ── */}
      <section aria-labelledby="versions-fr" className="mt-10">
        <h2 id="versions-fr">Versions EPC comparées : 001 vs. 002</h2>
        <p>
          La principale différence entre les versions 001 et 002 de la norme EPC concerne le
          BIC :
        </p>

        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-800/60">
                <th className="px-4 py-3 text-left font-semibold text-slate-200">Caractéristique</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-200">Version 001</th>
                <th className="px-4 py-3 text-left font-semibold text-sky-300">Version 002</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr className="bg-slate-900/30">
                <td className="px-4 py-3 text-slate-300">BIC</td>
                <td className="px-4 py-3 text-red-400">Obligatoire</td>
                <td className="px-4 py-3 text-emerald-400">Optionnel</td>
              </tr>
              <tr className="bg-slate-900/10">
                <td className="px-4 py-3 text-slate-300">Année d&apos;introduction</td>
                <td className="px-4 py-3 text-slate-300">2012</td>
                <td className="px-4 py-3 text-slate-300">2016</td>
              </tr>
              <tr className="bg-slate-900/30">
                <td className="px-4 py-3 text-slate-300">Recommandé aujourd&apos;hui</td>
                <td className="px-4 py-3 text-red-400">Non</td>
                <td className="px-4 py-3 text-emerald-400">Oui</td>
              </tr>
              <tr className="bg-slate-900/10">
                <td className="px-4 py-3 text-slate-300">Compatibilité applications modernes</td>
                <td className="px-4 py-3 text-yellow-400">Partielle</td>
                <td className="px-4 py-3 text-emerald-400">Universelle</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Pour tous les nouveaux GiroCodes, utilisez la version 002. La version 001 est encore
          reconnue par la plupart des applications, mais son utilisation n&apos;est plus
          recommandée.
        </p>
      </section>

      {/* ── Section 4 ── */}
      <section aria-labelledby="correction-fr" className="mt-10">
        <h2 id="correction-fr">Correction d&apos;erreurs et qualité du QR code</h2>

        <h3>Niveau de correction d&apos;erreurs M (15 %)</h3>
        <p>
          La norme EPC spécifie que les GiroCodes doivent utiliser le niveau de correction
          d&apos;erreurs <strong>M (Medium)</strong>, qui permet de récupérer jusqu&apos;à
          <strong> 15 %</strong> de données endommagées. Les codes QR standard peuvent utiliser
          quatre niveaux de correction d&apos;erreurs :
        </p>
        <ul>
          <li><strong>L (Low) :</strong> 7 % – taille de code plus petite</li>
          <li><strong>M (Medium) :</strong> 15 % – <em>niveau requis pour les GiroCodes</em></li>
          <li><strong>Q (Quartile) :</strong> 25 %</li>
          <li><strong>H (High) :</strong> 30 % – taille de code la plus grande</li>
        </ul>

        <h3>Pourquoi le niveau M et pas H ?</h3>
        <p>
          Le niveau M représente un compromis optimal pour les GiroCodes :
        </p>
        <ul>
          <li>
            <strong>Plus de données dans le même espace :</strong> Un niveau de correction plus
            élevé (Q ou H) signifie que plus d&apos;espace est consacré à la redondance, ce qui
            se traduit par un code QR plus dense (plus de modules/points) pour la même quantité
            de données, ou par la nécessité d&apos;une plus grande taille d&apos;impression.
          </li>
          <li>
            <strong>Données critiques limitées :</strong> Les GiroCodes contiennent des données
            relativement courtes (IBAN, montant, référence) et n&apos;ont pas besoin du niveau
            de protection maximal.
          </li>
          <li>
            <strong>Lisibilité suffisante :</strong> 15 % de correction permet de lire le code
            même s&apos;il est légèrement endommagé, froissé ou partiellement obstrué.
          </li>
        </ul>

        <h3>Taille minimale recommandée</h3>
        <p>
          La norme EPC recommande une taille minimale de <strong>2 × 2 centimètres</strong>
          pour les GiroCodes imprimés. En pratique, une taille de 3 × 3 cm est préférable pour
          une lisibilité optimale avec tous les types de smartphones. Pour les impressions
          haute résolution (300 DPI et plus), la taille peut être réduite sans perte de
          lisibilité. Pour les affichages numériques, une taille de 200 × 200 pixels minimum
          est recommandée.
        </p>

        <h3>Contraste et couleur</h3>
        <p>
          La norme EPC exige un contraste suffisant entre les modules sombres et le fond clair.
          L&apos;idéal est noir (#000000) sur blanc (#FFFFFF). Des variations de couleur sont
          possibles (par exemple bleu foncé sur blanc), mais le rapport de contraste doit rester
          supérieur à 3:1 pour une lecture fiable. Évitez d&apos;imprimer un GiroCode sur un
          fond coloré ou texturé.
        </p>
      </section>

      {/* ── Section 5 ── */}
      <section aria-labelledby="implementation-fr" className="mt-10">
        <h2 id="implementation-fr">Implémentation technique : générer un payload EPC</h2>
        <p>
          Voici un exemple de fonction JavaScript qui génère un payload EPC valide à partir des
          données de paiement :
        </p>

        <pre className="overflow-x-auto rounded-xl bg-slate-900/80 p-4 text-xs text-emerald-300">
          {`/**
 * Génère un payload EPC (GiroCode) conforme à la norme v002
 * @param {Object} params - Les paramètres du virement
 * @returns {string} Le payload EPC sous forme de chaîne de caractères
 */
function generateEpcPayload({
  bic = '',          // BIC de la banque (optionnel en v002)
  name,              // Nom du bénéficiaire (obligatoire, max 70 chars)
  iban,              // IBAN du bénéficiaire (obligatoire)
  amount = '',       // Montant (optionnel, format EUR12.34)
  reference = '',    // Référence de paiement (max 140 chars)
}) {
  // Validation de base
  if (!name || name.length > 70) {
    throw new Error('Nom invalide (obligatoire, max 70 chars)');
  }
  if (!iban || !/^[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}$/.test(iban)) {
    throw new Error('IBAN invalide');
  }
  if (amount && !/^EUR[0-9]+\\.[0-9]{2}$/.test(amount)) {
    throw new Error('Montant invalide (format: EUR12.34)');
  }

  // Construction du payload ligne par ligne
  const lines = [
    'BCD',          // Ligne 1: Service Tag
    '002',          // Ligne 2: Version EPC
    '1',            // Ligne 3: Encodage UTF-8
    'SCT',          // Ligne 4: SEPA Credit Transfer
    bic,            // Ligne 5: BIC (optionnel)
    name,           // Ligne 6: Nom du bénéficiaire
    iban,           // Ligne 7: IBAN
    amount,         // Ligne 8: Montant
    '',             // Ligne 9: Type d'objet (vide)
    '',             // Ligne 10: Référence structurée (vide)
    reference,      // Ligne 11: Référence de paiement
  ];

  return lines.join('\\n');
}

// Exemple d'utilisation :
const payload = generateEpcPayload({
  bic: 'SOGEFRPPXXX',
  name: 'Jean Dupont SARL',
  iban: 'FR7612345678901234567890185',
  amount: 'EUR1250.00',
  reference: 'Facture 2025-042',
});

console.log(payload);
// → BCD\\n002\\n1\\nSCT\\nSOGEFRPPXXX\\nJean Dupont SARL\\n...`}
        </pre>

        <p>
          Une fois le payload généré, vous pouvez le passer à une bibliothèque de génération de
          QR code (comme <code>qrcode</code> pour Node.js) avec le niveau de correction
          d&apos;erreurs M pour obtenir le code QR final.
        </p>
      </section>

      {/* ── Section 6 ── */}
      <section aria-labelledby="erreurs-fr" className="mt-10">
        <h2 id="erreurs-fr">Erreurs courantes avec la norme EPC</h2>
        <p>
          Voici les erreurs les plus fréquentes lors de la création de GiroCodes conformes à la
          norme EPC :
        </p>

        <h3>1. IBAN avec espaces</h3>
        <p>
          L&apos;IBAN dans le payload EPC doit être saisi <strong>sans espaces</strong>. Un IBAN
          comme <code>FR76 1234 5678 9012 3456 7890 185</code> est invalide dans le payload –
          il doit être écrit <code>FR7612345678901234567890185</code>.
        </p>

        <h3>2. Format de montant incorrect</h3>
        <p>
          Le format du montant doit être exactement <code>EUR</code> suivi du montant avec un
          point décimal, sans espaces. <code>EUR 1250,00</code> ou <code>1250.00 EUR</code> sont
          incorrects. Le format valide est <code>EUR1250.00</code>.
        </p>

        <h3>3. Nom du bénéficiaire trop long</h3>
        <p>
          Le nom est limité à 70 caractères. Les noms d&apos;entreprises longs peuvent dépasser
          cette limite – utilisez une version abrégée si nécessaire.
        </p>

        <h3>4. Référence de paiement trop longue</h3>
        <p>
          La référence de paiement est limitée à 140 caractères. Les descriptions très longues
          doivent être raccourcies. Concentrez-vous sur l&apos;essentiel : numéro de facture et
          date.
        </p>

        <h3>5. Mauvais niveau de correction d&apos;erreurs</h3>
        <p>
          Si vous générez un QR code avec le niveau de correction L (7 %) au lieu de M (15 %),
          le code sera techniquement lisible mais ne sera pas conforme à la norme EPC. Certaines
          applications bancaires vérifient ce paramètre et peuvent refuser de traiter le code.
        </p>

        <h3>6. Caractères non supportés</h3>
        <p>
          Bien que UTF-8 soit supporté, certains caractères spéciaux peuvent poser des problèmes
          avec certaines applications bancaires. Il est recommandé de s&apos;en tenir aux
          caractères latins standard et aux accents courants (é, è, ê, à, ü, ö, etc.).
        </p>

        <h3>7. Mauvaise version</h3>
        <p>
          Utiliser la version 001 sans inclure de BIC entraîne un payload invalide. Si vous
          utilisez la version 001, le BIC est obligatoire. Préférez la version 002 qui rend le
          BIC optionnel.
        </p>
      </section>

    </KnowledgeLayout>
  );
}
