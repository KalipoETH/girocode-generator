import type { Metadata } from 'next';
import Link from 'next/link';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';

export const metadata: Metadata = {
  title: 'Comment scanner un GiroCode – Guide complet iPhone & Android',
  description:
    'Scanner un GiroCode avec votre application bancaire : guide étape par étape pour iPhone et Android, dépannage et conseils de sécurité.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/fr/wissen/scannen',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/scannen',
      'de': 'https://www.girocodegenerator.com/wissen/scannen',
      'en': 'https://www.girocodegenerator.com/en/wissen/scannen',
      'fr': 'https://www.girocodegenerator.com/fr/wissen/scannen',
      'es': 'https://www.girocodegenerator.com/es/wissen/scannen',
    },
  },
};

export default function WissenScannenPageFr() {
  return (
    <KnowledgeLayout
      breadcrumbCurrent="Comment scanner un GiroCode"
      badge="Pratique · Scanner un GiroCode"
      title="Comment scanner un GiroCode – Guide complet iPhone & Android"
      lead="Scanner un GiroCode pour effectuer un paiement ne prend que quelques secondes. Ce guide détaillé vous explique exactement comment procéder sur iPhone (iOS) et Android, avec des conseils de dépannage pour les situations difficiles."
      relatedArticles={[
        { href: '/fr/wissen/banking-apps', label: "Applications bancaires compatibles GiroCode – Vue d'ensemble 2025" },
        { href: '/fr/wissen/girocode', label: "Qu'est-ce qu'un GiroCode ?" },
        { href: '/fr/wissen/rechnung', label: 'GiroCode sur les factures – Guide complet' },
        { href: '/fr/wissen/iban-bic', label: 'IBAN & BIC pour GiroCode' },
        { href: '/fr/wissen/epc-standard', label: 'Norme EPC & SEPA-QR – Structure technique' },
      ]}
      locale="fr"
    >

      {/* ── Section 1 ── */}
      <section aria-labelledby="comment-ca-marche-fr">
        <h2 id="comment-ca-marche-fr">Scanner un GiroCode – Comment ça marche</h2>
        <p>
          Le scanning d&apos;un GiroCode est fondamentalement simple : votre application
          bancaire utilise la caméra de votre smartphone pour lire le code QR, extrait les
          données de paiement encodées (IBAN, montant, nom du bénéficiaire, référence) et
          pré-remplit automatiquement un formulaire de virement SEPA.
        </p>
        <p>
          Le point crucial est que <strong>le paiement ne se fait pas automatiquement</strong>.
          Vous devrez toujours vérifier les informations affichées et confirmer activement le
          virement avec votre méthode d&apos;authentification (PIN, empreinte digitale, Face
          ID, TAN). Cette étape de confirmation est une protection importante contre les
          paiements accidentels ou frauduleux.
        </p>

        <h3>Prérequis</h3>
        <p>Pour scanner un GiroCode, vous avez besoin de :</p>
        <ul>
          <li>
            Un <strong>smartphone</strong> (iPhone ou Android) avec une caméra fonctionnelle
          </li>
          <li>
            L&apos;<strong>application bancaire</strong> de votre banque, dans une version
            récente qui supporte le scan de GiroCodes (voir notre{' '}
            <Link href="/fr/wissen/banking-apps" className="text-sky-400 hover:text-sky-300">
              liste des applications compatibles
            </Link>
            )
          </li>
          <li>
            Un <strong>accès Internet</strong> (4G/5G ou Wi-Fi) pour que l&apos;application
            puisse initier le virement
          </li>
          <li>
            Un <strong>GiroCode lisible</strong> – imprimé clairement sur une facture ou
            affiché sur un écran
          </li>
        </ul>
      </section>

      {/* ── Section 2 ── */}
      <section aria-labelledby="iphone-fr" className="mt-10">
        <h2 id="iphone-fr">Scanner sur iPhone (iOS) – Étape par étape</h2>
        <p>
          Les iPhones (iOS 14 et ultérieur) disposent d&apos;un lecteur de QR code natif
          intégré dans l&apos;application Appareil photo. Cependant, pour les GiroCodes,
          il est préférable d&apos;utiliser directement votre application bancaire, car la
          simple lecture via l&apos;Appareil photo iOS affichera uniquement le texte brut du
          payload EPC, sans l&apos;initiation de paiement.
        </p>

        <h3>Méthode recommandée : Via l&apos;application bancaire</h3>
        <ol>
          <li>
            <strong>Ouvrez votre application bancaire</strong> (Sparkasse, ING, DKB, BNP
            Paribas, etc.) et authentifiez-vous.
          </li>
          <li>
            <strong>Naviguez vers la section « Virement »</strong> – dans la plupart des apps,
            c&apos;est dans la navigation principale ou sur l&apos;écran de votre compte
            (bouton « Virer » ou « Payer »).
          </li>
          <li>
            <strong>Cherchez l&apos;icône de scan</strong> – Elle ressemble généralement à un
            carré avec des coins, une caméra, ou elle est étiquetée « Scanner QR code » ou
            « GiroCode ». Elle peut se trouver dans le champ IBAN, en haut de l&apos;écran ou
            dans un menu secondaire.
          </li>
          <li>
            <strong>Accordez les permissions caméra</strong> si demandé – lors de la première
            utilisation, iOS vous demandera d&apos;autoriser l&apos;accès à la caméra. Appuyez
            sur « Autoriser ».
          </li>
          <li>
            <strong>Positionnez le GiroCode</strong> dans le cadre de la caméra. Tenez votre
            téléphone à environ 15–30 cm du code. L&apos;auto-focus s&apos;activera
            automatiquement. Assurez-vous que le code est bien éclairé (évitez les ombres et
            les reflets).
          </li>
          <li>
            <strong>Attendez la confirmation de lecture</strong> – l&apos;application émet
            généralement un son ou une vibration, et l&apos;écran passe au formulaire de
            virement pré-rempli.
          </li>
          <li>
            <strong>Vérifiez toutes les données :</strong>
            <ul>
              <li>Nom du bénéficiaire ✓</li>
              <li>IBAN (au moins les derniers chiffres) ✓</li>
              <li>Montant ✓</li>
              <li>Référence de paiement / libellé ✓</li>
            </ul>
          </li>
          <li>
            <strong>Confirmez le paiement</strong> en appuyant sur « Valider », « Confirmer »
            ou « Senden », puis authentifiez avec Face ID, Touch ID ou votre code PIN.
          </li>
        </ol>

        <h3>Conseil iPhone : Raccourci via le Centre de contrôle</h3>
        <p>
          Sur iPhone, vous pouvez ajouter un raccourci vers votre application bancaire dans le
          Centre de contrôle (accessible en glissant depuis le coin supérieur droit). Cela
          permet d&apos;ouvrir directement l&apos;app bancaire depuis n&apos;importe quel
          écran, sans avoir à la chercher dans la liste d&apos;applications.
        </p>
      </section>

      {/* ── Section 3 ── */}
      <section aria-labelledby="android-fr" className="mt-10">
        <h2 id="android-fr">Scanner sur Android – Étape par étape</h2>
        <p>
          Android offre également un lecteur de QR code natif via l&apos;application Appareil
          photo Google (Android 8 et ultérieur). Cependant, comme pour iOS, il est préférable
          d&apos;utiliser directement votre application bancaire pour initier un paiement via
          GiroCode.
        </p>

        <h3>Méthode recommandée : Via l&apos;application bancaire</h3>
        <ol>
          <li>
            <strong>Ouvrez l&apos;application de votre banque</strong> et connectez-vous.
          </li>
          <li>
            <strong>Accédez à la fonction « Virement »</strong> depuis l&apos;écran
            d&apos;accueil ou le menu de votre compte.
          </li>
          <li>
            <strong>Cherchez le bouton de scan QR</strong> – Sur Android, il peut apparaître
            comme une icône dans la barre d&apos;outils, dans le menu à trois points, ou
            directement à côté du champ de saisie de l&apos;IBAN.
          </li>
          <li>
            <strong>Autorisez l&apos;accès à la caméra</strong> si l&apos;application vous le
            demande. Sur Android, allez dans Paramètres → Applications → [Votre banque] →
            Autorisations → Caméra si l&apos;autorisation a été refusée précédemment.
          </li>
          <li>
            <strong>Scannez le GiroCode</strong> en pointant la caméra vers le code. Sur la
            plupart des appareils Android, le scan est automatique dès que le code est dans le
            champ de vision.
          </li>
          <li>
            <strong>Vérifiez le formulaire pré-rempli</strong> et assurez-vous que toutes les
            données sont correctes.
          </li>
          <li>
            <strong>Confirmez le virement</strong> avec votre PIN, empreinte digitale ou
            méthode TAN selon votre banque.
          </li>
        </ol>

        <h3>Différences entre fabricants Android</h3>
        <p>
          L&apos;interface des applications bancaires peut varier légèrement selon le fabricant
          de votre téléphone Android (Samsung, Google Pixel, Huawei, Xiaomi, etc.), mais le
          processus fondamental reste identique. Si vous ne trouvez pas le bouton de scan, :
        </p>
        <ul>
          <li>Cherchez dans les paramètres de virement ou le menu à trois points</li>
          <li>Consultez l&apos;aide intégrée de l&apos;application</li>
          <li>Visitez le site web de votre banque pour des tutoriels vidéo spécifiques</li>
        </ul>
      </section>

      {/* ── Section 4 ── */}
      <section aria-labelledby="depannage-fr" className="mt-10">
        <h2 id="depannage-fr">Dépannage – Problèmes courants et solutions</h2>

        <h3>Problème : Le code ne se scanne pas</h3>
        <p>Causes possibles et solutions :</p>
        <ul>
          <li>
            <strong>Éclairage insuffisant :</strong> Scannez dans un endroit bien éclairé.
            Vous pouvez activer la lampe torche de votre téléphone pour éclairer la facture
            imprimée.
          </li>
          <li>
            <strong>Distance incorrecte :</strong> Essayez de varier la distance entre 10 cm
            et 40 cm. La distance optimale dépend de la taille du code et de la résolution
            de votre caméra.
          </li>
          <li>
            <strong>Code trop petit :</strong> Si le GiroCode a une taille inférieure à 2 cm,
            il peut être difficile à scanner. Essayez de rapprocher votre téléphone ou
            demandez une version agrandie.
          </li>
          <li>
            <strong>Angle de la caméra :</strong> Assurez-vous que la caméra est
            perpendiculaire au code (pas d&apos;angle). Un angle prononcé peut rendre la
            lecture difficile.
          </li>
          <li>
            <strong>Reflets :</strong> Sur un écran d&apos;ordinateur ou une surface
            brillante, les reflets peuvent gêner la lecture. Réduisez la luminosité de
            l&apos;écran et changez l&apos;angle.
          </li>
        </ul>

        <h3>Problème : L&apos;application dit que le code est invalide</h3>
        <ul>
          <li>
            <strong>GiroCode mal créé :</strong> Le QR code peut avoir été généré avec des
            données incorrectes (IBAN invalide, format de montant incorrect, etc.). Contactez
            l&apos;émetteur de la facture.
          </li>
          <li>
            <strong>Code QR générique :</strong> Certaines applications confondent les
            GiroCodes avec d&apos;autres types de QR codes. Assurez-vous que le code scannée
            est bien un GiroCode (il doit commencer par « BCD » dans son contenu texte).
          </li>
        </ul>

        <h3>Problème : Les données pré-remplies sont incorrectes</h3>
        <p>
          Si les données pré-remplies ne correspondent pas à la facture (par exemple, mauvais
          montant ou mauvais bénéficiaire) :
        </p>
        <ul>
          <li>
            N&apos;effectuez pas le paiement.
          </li>
          <li>
            Contactez l&apos;émetteur de la facture pour lui signaler le problème.
          </li>
          <li>
            Il est possible que le GiroCode ait été créé avec des données incorrectes ou que
            le code ait été manipulé.
          </li>
        </ul>

        <h3>Problème : L&apos;application n&apos;a pas de scanner QR</h3>
        <p>
          Consultez notre{' '}
          <Link href="/fr/wissen/banking-apps" className="text-sky-400 hover:text-sky-300">
            guide des applications bancaires compatibles
          </Link>{' '}
          pour vérifier si votre banque supporte les GiroCodes et comment accéder à la
          fonctionnalité.
        </p>
      </section>

      {/* ── Section 5 ── */}
      <section aria-labelledby="qualite-fr" className="mt-10">
        <h2 id="qualite-fr">Exigences de qualité pour des GiroCodes lisibles</h2>
        <p>
          La lisibilité d&apos;un GiroCode dépend de plusieurs facteurs liés à sa création et
          à son support d&apos;impression.
        </p>

        <h3>Exigences pour les GiroCodes imprimés</h3>
        <ul>
          <li>
            <strong>Taille minimale :</strong> 2 × 2 cm (recommandation EPC). En pratique,
            3 × 3 cm est préférable.
          </li>
          <li>
            <strong>Résolution d&apos;impression :</strong> Minimum 300 DPI pour une
            impression de qualité standard.
          </li>
          <li>
            <strong>Contraste :</strong> Noir sur blanc (ou couleur sombre sur fond clair).
            Rapport de contraste minimum 3:1.
          </li>
          <li>
            <strong>Zone de tranquillité :</strong> Laisser une bordure blanche d&apos;au
            moins 4 modules tout autour du code.
          </li>
          <li>
            <strong>Format d&apos;image :</strong> PNG ou SVG (pas JPEG qui peut introduire
            des artefacts de compression).
          </li>
          <li>
            <strong>Papier :</strong> Papier blanc mat, pas de papier glacé (reflets) ni de
            papier très fin (transparence).
          </li>
        </ul>

        <h3>Exigences pour les GiroCodes numériques</h3>
        <ul>
          <li>
            <strong>Taille à l&apos;écran :</strong> Minimum 200 × 200 pixels pour les
            écrans Full HD. Idéalement 300 × 300 pixels ou plus.
          </li>
          <li>
            <strong>Luminosité de l&apos;écran :</strong> Augmentez la luminosité de votre
            écran au maximum pour faciliter le scan.
          </li>
          <li>
            <strong>Angle de visualisation :</strong> Les écrans AMOLED et OLED maintiennent
            un bon contraste sous différents angles, mais les écrans LCD peuvent perdre en
            lisibilité si le téléphone est tenu sous un angle prononcé.
          </li>
          <li>
            <strong>Anti-reflets :</strong> Les protections d&apos;écran anti-reflets
            facilitent le scan depuis un écran.
          </li>
        </ul>

        <h3>Niveau de correction d&apos;erreurs</h3>
        <p>
          La norme EPC exige le niveau de correction d&apos;erreurs <strong>M (15 %)</strong>.
          Cela signifie que le GiroCode peut être lu même si jusqu&apos;à 15 % de sa surface
          est endommagée, sale ou obstruée. C&apos;est suffisant pour la plupart des situations
          pratiques, mais évitez d&apos;imprimer des GiroCodes sur des supports qui pourraient
          se salir ou se déchirer facilement.
        </p>
      </section>

      {/* ── Section 6 ── */}
      <section aria-labelledby="numerique-fr" className="mt-10">
        <h2 id="numerique-fr">Scanner des GiroCodes numériquement (depuis un écran)</h2>
        <p>
          De plus en plus de factures sont envoyées uniquement par email ou accessibles via
          des portails en ligne. Il est parfaitement possible de scanner un GiroCode directement
          depuis l&apos;écran de votre ordinateur ou tablette.
        </p>

        <h3>Depuis un PDF sur ordinateur</h3>
        <ol>
          <li>
            Ouvrez le PDF de la facture sur votre ordinateur et trouvez le GiroCode.
          </li>
          <li>
            Agrandissez l&apos;affichage du GiroCode jusqu&apos;à ce qu&apos;il occupe une
            surface d&apos;au moins 5 × 5 cm sur votre écran.
          </li>
          <li>
            Augmentez la luminosité de votre écran au maximum.
          </li>
          <li>
            Ouvrez votre application bancaire sur votre smartphone et activez le scanner QR.
          </li>
          <li>
            Tenez votre smartphone à environ 20–30 cm de l&apos;écran de l&apos;ordinateur,
            perpendiculairement à lui.
          </li>
          <li>
            Le scan devrait fonctionner. Si les reflets de l&apos;écran gênent, inclinez
            légèrement l&apos;ordinateur ou changez votre angle de vue.
          </li>
        </ol>

        <h3>Depuis un email sur smartphone</h3>
        <p>
          Si vous recevez une facture par email directement sur votre smartphone, vous pouvez
          :
        </p>
        <ul>
          <li>
            <strong>Utiliser le multitâche :</strong> Sur iPhone et Android, vous pouvez
            avoir deux applications ouvertes en split-screen. Ouvrez votre email dans une
            moitié et votre application bancaire dans l&apos;autre. Mais la résolution peut
            être insuffisante.
          </li>
          <li>
            <strong>Méthode recommandée :</strong> Sur un deuxième appareil (tablette, second
            téléphone), ouvrez la facture et scannez avec votre smartphone principal.
          </li>
          <li>
            <strong>Imprimer d&apos;abord :</strong> Si possible, imprimez la facture et
            scannez le GiroCode imprimé – c&apos;est souvent la méthode la plus simple et
            la plus fiable.
          </li>
        </ul>
      </section>

      {/* ── Section 7 ── */}
      <section aria-labelledby="conseils-securite-fr" className="mt-10">
        <h2 id="conseils-securite-fr">Conseils de sécurité lors du scan</h2>

        <h3>La règle d&apos;or : vérifier avant de confirmer</h3>
        <p>
          Ne confirmez jamais un paiement sans avoir vérifié toutes les données pré-remplies.
          Cette vérification prend moins de 5 secondes mais peut vous éviter de sérieux
          problèmes. Vérifiez systématiquement :
        </p>
        <ul>
          <li>
            <strong>Le nom du bénéficiaire :</strong> Correspond-il exactement à l&apos;entreprise
            ou à la personne qui vous a envoyé la facture ?
          </li>
          <li>
            <strong>Le montant :</strong> Est-il identique à celui indiqué sur la facture ?
          </li>
          <li>
            <strong>La référence :</strong> Contient-elle le bon numéro de facture ?
          </li>
        </ul>

        <h3>Méfiez-vous des QR codes sur des supports physiques publics</h3>
        <p>
          Des escrocs peuvent coller de faux QR codes par-dessus des codes légitimes sur des
          affiches, des parkings, des distributeurs automatiques ou d&apos;autres équipements
          publics. Avant de scanner un QR code dans un lieu public, vérifiez visuellement
          qu&apos;il ne s&apos;agit pas d&apos;un autocollant rajouté par-dessus un code
          original.
        </p>

        <h3>Ne confirmez pas sous pression</h3>
        <p>
          Certaines arnaques utilisent l&apos;urgence pour pousser les victimes à payer
          rapidement sans vérifier. Prenez toujours le temps de vérifier un paiement, même
          si quelqu&apos;un vous met sous pression. Une vraie entreprise n&apos;exigera jamais
          un paiement immédiat sans vous laisser le temps de vérifier.
        </p>

        <h3>Reconnaître les signaux d&apos;alerte</h3>
        <p>Méfiez-vous si :</p>
        <ul>
          <li>Le nom du bénéficiaire ne correspond pas à l&apos;entreprise émettrice</li>
          <li>Le montant est différent de celui attendu</li>
          <li>
            La référence de paiement contient des informations personnelles inhabituelles
          </li>
          <li>
            Le GiroCode provient d&apos;un email avec une adresse suspecte ou inconnue
          </li>
          <li>
            On vous demande de scanner un QR code dans un contexte inhabituel (service client
            téléphonique, etc.)
          </li>
        </ul>
      </section>

      {/* ── Section 9 – FAQ ── */}
      <section aria-labelledby="faq-scannen-fr" className="mt-10">
        <h2 id="faq-scannen-fr">Questions fréquentes sur le scan des GiroCodes</h2>

        <h3>1. Puis-je scanner un GiroCode sans application bancaire ?</h3>
        <p>
          Un scanner de QR code générique peut lire et afficher le contenu texte d&apos;un
          GiroCode, mais il ne peut pas initier un paiement directement. Pour payer, vous
          devez obligatoirement utiliser l&apos;application de votre banque (ou sa version
          web avec un scanner intégré). Si votre banque ne dispose pas d&apos;un scanner QR,
          vous pouvez lire les données du code avec une app générique et les saisir
          manuellement dans votre formulaire de virement.
        </p>

        <h3>2. Le scan d&apos;un GiroCode coûte-t-il quelque chose ?</h3>
        <p>
          Non, scanner un GiroCode est entièrement gratuit. Le virement SEPA qui suit est
          également généralement gratuit dans la zone SEPA (les banques européennes ne sont
          pas autorisées à facturer des frais supplémentaires pour les virements SEPA
          standards selon la réglementation européenne).
        </p>

        <h3>3. Puis-je scanner un GiroCode depuis une photo ou une capture d&apos;écran ?</h3>
        <p>
          Cela dépend de l&apos;application bancaire utilisée. Certaines applications permettent
          d&apos;importer une image depuis la galerie photo au lieu d&apos;utiliser la caméra
          en direct. Si votre application ne supporte pas cette fonctionnalité, vous pouvez
          afficher la photo en plein écran sur votre ordinateur ou tablette et scanner
          l&apos;écran avec votre smartphone.
        </p>

        <h3>4. Que se passe-t-il si je scanne le même GiroCode deux fois ?</h3>
        <p>
          Si vous scannez le même GiroCode deux fois et confirmez le paiement les deux fois,
          vous effectuerez deux virements identiques. Il n&apos;existe pas de mécanisme
          automatique empêchant les doublons pour les GiroCodes. Soyez donc attentif à ne
          pas confirmer un paiement plusieurs fois.
        </p>

        <h3>5. Mon paiement via GiroCode est-il instantané ?</h3>
        <p>
          Non, un paiement par GiroCode est un virement SEPA standard (SCT), qui prend
          généralement 1 à 2 jours ouvrables pour être crédité sur le compte du bénéficiaire.
          Pour les paiements instantanés (crédités en 10 secondes), certaines banques
          proposent le virement SEPA instantané (SCT Inst), mais cela dépend de la
          compatibilité des deux banques concernées et peut générer des frais.
        </p>

        <h3>6. Puis-je modifier le montant ou la référence après le scan ?</h3>
        <p>
          Dans la plupart des applications bancaires, oui, vous pouvez modifier les données
          pré-remplies avant de confirmer. Par exemple, si le GiroCode ne contient pas de
          montant, vous devrez le saisir manuellement. Si vous souhaitez ajouter un
          commentaire à la référence, c&apos;est également possible dans certaines applications.
        </p>

        <h3>7. Que faire si mon bank rejette le virement après le scan ?</h3>
        <p>
          Si votre banque rejette le virement, les raisons les plus courantes sont : solde
          insuffisant, IBAN invalide dans le GiroCode, dépassement du plafond de virement
          journalier, ou problème technique. Vérifiez d&apos;abord votre solde, puis
          contactez votre banque pour obtenir plus d&apos;informations sur le motif du rejet.
        </p>

        <h3>8. Dois-je conserver la facture après avoir payé via GiroCode ?</h3>
        <p>
          Oui, la facture reste le document de référence pour la prestation ou le produit
          acheté, indépendamment du moyen de paiement. Conservez toujours vos factures,
          surtout pour les besoins comptables et fiscaux. Pour les professionnels, la durée
          légale de conservation des factures est de <strong>10 ans en France</strong>.
        </p>

        <h3>9. Un GiroCode peut-il être utilisé pour des paiements récurrents ?</h3>
        <p>
          Non, un GiroCode est un code unique encodant les données d&apos;une transaction
          spécifique. Pour les paiements récurrents (loyer mensuel, abonnements), il faudrait
          créer un nouveau GiroCode pour chaque paiement avec le bon numéro de facture et le
          bon montant. Les prélèvements automatiques (SEPA Direct Debit) sont mieux adaptés
          aux paiements récurrents.
        </p>

        <h3>10. Est-il possible de créer un GiroCode pour plusieurs bénéficiaires en même temps ?</h3>
        <p>
          Non, un GiroCode ne peut encoder qu&apos;un seul virement SEPA vers un seul
          bénéficiaire. Pour des paiements multiples, il faudrait créer un GiroCode séparé
          pour chaque bénéficiaire.
        </p>
      </section>

    </KnowledgeLayout>
  );
}
