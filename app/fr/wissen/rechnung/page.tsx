import type { Metadata } from 'next';
import Link from 'next/link';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';

export const metadata: Metadata = {
  title: 'GiroCode sur les factures – Le guide complet',
  description:
    'Comment ajouter un GiroCode à vos factures : placement, mentions légales et création de PDF avec QR code intégré.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/fr/wissen/rechnung',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/rechnung',
      'de': 'https://www.girocodegenerator.com/wissen/rechnung',
      'en': 'https://www.girocodegenerator.com/en/wissen/rechnung',
      'fr': 'https://www.girocodegenerator.com/fr/wissen/rechnung',
      'es': 'https://www.girocodegenerator.com/es/wissen/rechnung',
    },
  },
};

export default function WissenRechnungPageFr() {
  return (
    <KnowledgeLayout
      breadcrumbCurrent="GiroCode sur les factures"
      badge="Pratique · Facturation"
      title="GiroCode sur les factures – Le guide complet"
      lead="Ajouter un GiroCode à vos factures est l'une des meilleures façons d'accélérer les paiements et de réduire les erreurs. Ce guide couvre tout : les mentions légales obligatoires, le placement optimal du code QR et les outils pour l'automatiser."
      relatedArticles={[
        { href: '/fr/wissen/girocode', label: "Qu'est-ce qu'un GiroCode ?" },
        { href: '/fr/wissen/epc-standard', label: 'Norme EPC – Structure technique du payload' },
        { href: '/fr/wissen/betrag-und-zweck', label: 'Montant & référence de paiement' },
        { href: '/fr/wissen/banking-apps', label: 'Applications bancaires compatibles GiroCode' },
        { href: '/fr/wissen/scannen', label: 'Comment scanner un GiroCode' },
      ]}
      locale="fr"
    >

      {/* ── Section 1 ── */}
      <section aria-labelledby="pourquoi-rechnung-fr">
        <h2 id="pourquoi-rechnung-fr">Pourquoi utiliser un GiroCode sur les factures ?</h2>
        <p>
          La facture est le document central de toute transaction commerciale. C&apos;est le
          support sur lequel figurent les informations essentielles : qui doit payer, combien,
          à qui et pourquoi. L&apos;ajout d&apos;un GiroCode transforme cette facture statique
          en un outil de paiement actif.
        </p>
        <p>
          Les statistiques montrent que les factures avec GiroCode sont payées en moyenne
          <strong> 30 à 40 % plus rapidement</strong> que celles sans code QR. La raison est
          simple : le processus de paiement est réduit à quelques secondes pour le payeur –
          il scanne le code, vérifie les informations pré-remplies et confirme le virement.
          Plus besoin de chercher l&apos;IBAN dans un tiroir, de le saisir laborieusement sur
          un clavier, de trouver le montant exact et de taper le libellé.
        </p>
        <p>
          Pour vous en tant qu&apos;émetteur de factures, les avantages sont multiples :
        </p>
        <ul>
          <li>
            <strong>Délais de paiement réduits :</strong> Les clients paient plus vite quand
            c&apos;est facile.
          </li>
          <li>
            <strong>Moins d&apos;erreurs de paiement :</strong> L&apos;IBAN et le montant sont
            pré-remplis automatiquement, éliminant les risques de faute de frappe.
          </li>
          <li>
            <strong>Référence de paiement correcte :</strong> Le numéro de facture est
            automatiquement transmis dans le libellé du virement.
          </li>
          <li>
            <strong>Image professionnelle et moderne :</strong> Un GiroCode témoigne d&apos;un
            niveau de modernité qui valorise votre image professionnelle.
          </li>
          <li>
            <strong>Zéro frais supplémentaires :</strong> Contrairement aux solutions de
            paiement en ligne, le GiroCode ne génère aucune commission.
          </li>
        </ul>
      </section>

      {/* ── Section 2 ── */}
      <section aria-labelledby="mentions-legales-fr" className="mt-10">
        <h2 id="mentions-legales-fr">Mentions légales obligatoires sur une facture (France/UE)</h2>
        <p>
          Avant de s&apos;intéresser au GiroCode, rappelons les mentions légales obligatoires
          sur une facture en France. Ces obligations découlent du Code général des impôts et du
          Code de commerce.
        </p>

        <h3>Mentions obligatoires pour toutes les entreprises</h3>
        <ul>
          <li>
            <strong>Date d&apos;émission de la facture</strong>
          </li>
          <li>
            <strong>Numéro de facture</strong> (séquentiel et chronologique, sans rupture)
          </li>
          <li>
            <strong>Identité de l&apos;émetteur :</strong> Nom ou raison sociale, adresse
            complète, numéro SIRET/SIREN
          </li>
          <li>
            <strong>Identité du client :</strong> Nom ou raison sociale, adresse complète
          </li>
          <li>
            <strong>Description des prestations/produits :</strong> Dénomination précise,
            quantité, prix unitaire HT
          </li>
          <li>
            <strong>Taux de TVA applicable</strong> (ou mention d&apos;exonération)
          </li>
          <li>
            <strong>Montant total HT</strong>
          </li>
          <li>
            <strong>Montant de la TVA</strong> (ou mention d&apos;exonération)
          </li>
          <li>
            <strong>Montant total TTC</strong>
          </li>
          <li>
            <strong>Date d&apos;échéance de paiement</strong> et conditions de paiement
          </li>
          <li>
            <strong>Pénalités de retard</strong> (taux applicable, indemnité forfaitaire de
            recouvrement de 40 €)
          </li>
          <li>
            <strong>Coordonnées bancaires</strong> : RIB/IBAN pour les virements
          </li>
        </ul>

        <h3>Mentions supplémentaires selon le statut</h3>

        <h4>Numéro de TVA intracommunautaire</h4>
        <p>
          Si vous exercez des échanges avec des entreprises d&apos;autres pays de l&apos;UE,
          votre numéro de TVA intracommunautaire (format : FR + 2 chiffres + numéro SIREN) est
          obligatoire sur la facture, ainsi que celui de votre client.
        </p>

        <h4>Auto-entrepreneur et micro-entreprise (franchise en base de TVA)</h4>
        <p>
          Si vous bénéficiez de la franchise en base de TVA (seuils 2025 : 36 800 € pour les
          prestations de services, 91 900 € pour les ventes), vous devez obligatoirement faire
          apparaître la mention suivante sur toutes vos factures :
        </p>
        <div className="not-prose rounded-xl border border-amber-700/40 bg-amber-900/20 p-4">
          <p className="text-sm font-medium text-amber-300">
            Texte d&apos;exonération de TVA obligatoire :
          </p>
          <p className="mt-2 font-mono text-sm text-amber-200">
            &quot;TVA non applicable, article 293 B du CGI&quot;
          </p>
        </div>
        <p>
          Cette mention remplace l&apos;affichage de la TVA sur vos factures. N&apos;indiquez
          pas de TVA si vous bénéficiez de la franchise en base.
        </p>

        <h4>Professions réglementées</h4>
        <p>
          Certaines professions ont des obligations supplémentaires (avocats, médecins,
          architectes, etc.) : mention du barreau ou de l&apos;ordre professionnel, numéro
          d&apos;inscription, etc. Consultez votre ordre professionnel pour les spécificités
          applicables.
        </p>
      </section>

      {/* ── Section 3 ── */}
      <section aria-labelledby="placement-fr" className="mt-10">
        <h2 id="placement-fr">Où placer le GiroCode sur une facture ?</h2>

        <h3>Position recommandée : coin inférieur droit</h3>
        <p>
          La norme EPC ne prescrit pas de position spécifique pour le GiroCode sur une facture,
          mais la pratique standard en Allemagne et en Europe est de le placer dans le{' '}
          <strong>coin inférieur droit</strong> de la facture. Cette position présente plusieurs
          avantages :
        </p>
        <ul>
          <li>
            Elle ne perturbe pas la lecture linéaire de la facture (informations importantes
            en haut à gauche)
          </li>
          <li>
            Elle est facilement repérable visuellement
          </li>
          <li>
            Elle laisse de la place pour les informations légales et les conditions de paiement
          </li>
          <li>
            C&apos;est l&apos;emplacement que les payeurs ont appris à chercher
          </li>
        </ul>

        <h3>Alternatives acceptables</h3>
        <p>
          D&apos;autres positions sont également utilisées :
        </p>
        <ul>
          <li>
            <strong>Bas de page centré :</strong> Particulièrement adapté pour les factures
            mono-page avec un résumé des coordonnées bancaires centré
          </li>
          <li>
            <strong>À côté des coordonnées bancaires :</strong> Placer le GiroCode
            immédiatement à côté de l&apos;IBAN textuel renforce le lien visuel entre les deux
            informations
          </li>
          <li>
            <strong>Dans un encadré dédié :</strong> Un encadré intitulé « Paiement facile par
            code QR » peut attirer l&apos;attention et encourager l&apos;utilisation du
            GiroCode
          </li>
        </ul>

        <h3>Taille minimale : 2 × 2 cm</h3>
        <p>
          La norme EPC recommande une taille minimale de <strong>2 × 2 centimètres</strong>{' '}
          pour le GiroCode imprimé. En pratique, une taille de <strong>3 × 3 cm</strong> est
          préférable pour garantir la lisibilité avec tous les types de smartphones, y compris
          les appareils plus anciens ou les applis bancaires moins performantes.
        </p>

        <h3>Contraste et qualité d&apos;impression</h3>
        <p>
          Pour une lisibilité optimale, respectez ces règles :
        </p>
        <ul>
          <li>
            <strong>Fond blanc :</strong> Le GiroCode doit toujours être imprimé sur un fond
            blanc ou très clair. Évitez les fonds colorés, texturés ou avec des motifs.
          </li>
          <li>
            <strong>Zone de tranquillité :</strong> Laissez une marge blanche (zone de
            tranquillité) d&apos;au moins 4 modules (points du QR code) tout autour du code.
          </li>
          <li>
            <strong>Résolution minimale :</strong> Pour une impression en 300 DPI (qualité
            standard), le GiroCode doit faire au moins 236 × 236 pixels avant mise à l&apos;échelle.
          </li>
          <li>
            <strong>Évitez la compression JPEG :</strong> Les artefacts de compression JPEG
            peuvent rendre le code illisible. Utilisez le format PNG ou SVG pour les images.
          </li>
        </ul>

        <h3>Texte accompagnateur recommandé</h3>
        <p>
          Il est conseillé d&apos;ajouter un court texte à côté du GiroCode pour guider les
          payeurs qui ne le connaissent pas encore. Exemples :
        </p>
        <ul>
          <li>« Paiement rapide : scannez avec votre application bancaire »</li>
          <li>« Payez facilement avec votre banque – Scannez le QR code »</li>
          <li>« GiroCode – Paiement SEPA par code QR »</li>
        </ul>
      </section>

      {/* ── Section 4 ── */}
      <section aria-labelledby="logiciels-fr" className="mt-10">
        <h2 id="logiciels-fr">GiroCode dans différents logiciels de facturation</h2>
        <p>
          Il existe plusieurs façons d&apos;intégrer un GiroCode dans vos factures, du plus
          simple au plus automatisé :
        </p>

        <h3>
          sevDesk – Génération automatique de GiroCode{' '}
          <a
            href="https://www.awin1.com/cread.php?awinmid=15944&awinaffid=2793610"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="text-sky-400 hover:text-sky-300"
          >
            (essayer gratuitement *)
          </a>
        </h3>
        <p>
          sevDesk est l&apos;un des logiciels de comptabilité les plus populaires pour les
          freelances et PME en Europe germanophone. Il génère automatiquement un GiroCode
          conforme à la norme EPC sur toutes les factures exportées en PDF. Les données
          (IBAN, montant, numéro de facture) sont récupérées automatiquement depuis le profil
          de l&apos;entreprise et la facture en cours. Aucune action supplémentaire n&apos;est
          nécessaire – le GiroCode est inclus par défaut.
        </p>
        <p>
          sevDesk offre également des fonctionnalités avancées : suivi des paiements,
          relances automatiques, export comptable (DATEV, etc.) et intégration bancaire pour
          le rapprochement automatique des paiements reçus.
        </p>

        <h3>
          FastBill – Intégration GiroCode{' '}
          <a
            href="https://www.awin1.com/cread.php?awinmid=20766&awinaffid=2793610"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="text-sky-400 hover:text-sky-300"
          >
            (essayer gratuitement *)
          </a>
        </h3>
        <p>
          FastBill est une solution de facturation en ligne simple et rapide, particulièrement
          appréciée des freelances et des petites entreprises. L&apos;interface est intuitive
          et permet de créer une facture professionnelle en quelques minutes. FastBill intègre
          la génération de GiroCodes directement dans son module de facturation, avec
          placement automatique dans le PDF généré.
        </p>
        <p>
          FastBill propose également des fonctionnalités de gestion des dépenses, de suivi des
          projets et de reporting financier, ce qui en fait une solution complète pour les
          indépendants.
        </p>

        <h3>GiroCode Generator (notre solution) – Gratuit et local</h3>
        <p>
          Notre{' '}
          <Link href="/fr" className="text-sky-400 hover:text-sky-300">
            GiroCode Generator
          </Link>{' '}
          est une solution entièrement gratuite qui vous permet de créer des GiroCodes
          individuels sans inscription. Ses avantages :
        </p>
        <ul>
          <li>
            <strong>100 % gratuit, sans limite</strong>
          </li>
          <li>
            <strong>Aucune inscription requise</strong>
          </li>
          <li>
            <strong>Respectueux de la vie privée :</strong> Tout le calcul se fait localement
            dans votre navigateur, vos données bancaires ne sont jamais envoyées à un serveur
          </li>
          <li>
            <strong>Export PNG et SVG :</strong> Téléchargez l&apos;image du GiroCode et
            insérez-la dans votre modèle de facture Word, LibreOffice ou InDesign
          </li>
        </ul>
        <p>
          L&apos;inconvénient est que la création est manuelle pour chaque facture.
          Pour un volume important de factures, un logiciel de facturation avec GiroCode
          automatique comme sevDesk ou FastBill sera plus efficace.
        </p>
      </section>

      {/* ── Section 5 ── */}
      <section aria-labelledby="etapes-fr" className="mt-10">
        <h2 id="etapes-fr">Étape par étape : créer une facture avec GiroCode</h2>

        <h3>Méthode A : Avec un logiciel de facturation (recommandé)</h3>
        <ol>
          <li>
            <strong>Configurez votre profil :</strong> Dans le logiciel (sevDesk, FastBill...),
            saisissez vos coordonnées bancaires (IBAN, BIC) dans les paramètres du profil
            d&apos;entreprise.
          </li>
          <li>
            <strong>Activez la fonctionnalité GiroCode :</strong> Dans les paramètres de
            facturation, activez l&apos;option « Inclure GiroCode dans les factures PDF ».
          </li>
          <li>
            <strong>Créez votre facture normalement :</strong> Saisissez les lignes de produits
            ou services, le client, la date d&apos;échéance.
          </li>
          <li>
            <strong>Exportez en PDF :</strong> Le GiroCode sera automatiquement généré et
            placé dans le PDF avec les bonnes données.
          </li>
          <li>
            <strong>Envoyez la facture :</strong> Par email ou courrier, le GiroCode sera
            présent sur le document.
          </li>
        </ol>

        <h3>Méthode B : Manuellement avec notre générateur</h3>
        <ol>
          <li>
            <strong>Créez votre modèle de facture :</strong> Dans Word, LibreOffice Writer ou
            votre logiciel de PAO, créez un modèle avec toutes les mentions légales requises.
            Laissez un espace dans le coin inférieur droit pour le GiroCode (environ 3 × 3 cm).
          </li>
          <li>
            <strong>Remplissez les données de votre facture :</strong> Numéro de facture,
            client, lignes de prestation, montant total TTC.
          </li>
          <li>
            <strong>Ouvrez le GiroCode Generator :</strong> Accédez à{' '}
            <Link href="/fr" className="text-sky-400 hover:text-sky-300">
              notre générateur
            </Link>{' '}
            et renseignez votre IBAN, le montant TTC et le numéro de facture comme référence.
          </li>
          <li>
            <strong>Téléchargez le GiroCode :</strong> Exportez le code QR en PNG (300 DPI
            minimum) ou en SVG.
          </li>
          <li>
            <strong>Insérez dans votre facture :</strong> Insérez l&apos;image du GiroCode
            dans votre document dans l&apos;espace prévu.
          </li>
          <li>
            <strong>Exportez en PDF :</strong> Convertissez votre document en PDF et vérifiez
            que le GiroCode est clairement visible et lisible.
          </li>
          <li>
            <strong>Testez avant d&apos;envoyer :</strong> Scannez le GiroCode avec votre
            propre application bancaire pour vérifier que toutes les données sont correctes.
          </li>
        </ol>
      </section>

      {/* ── Section 6 – FAQ ── */}
      <section aria-labelledby="faq-rechnung-fr" className="mt-10">
        <h2 id="faq-rechnung-fr">Questions fréquentes sur le GiroCode et les factures</h2>

        <h3>1. Un GiroCode sur une facture est-il juridiquement contraignant ?</h3>
        <p>
          Non, le GiroCode est simplement un moyen de faciliter le paiement. Il n&apos;est pas
          lui-même un document juridique. C&apos;est la facture dans son ensemble qui est
          juridiquement contraignante. Le GiroCode encode les données de paiement pour
          simplifier la transaction, mais il ne remplace pas les mentions légales obligatoires
          sur la facture.
        </p>

        <h3>2. Puis-je inclure un GiroCode dans une facture électronique (e-facture) ?</h3>
        <p>
          Oui, absolument. Un GiroCode peut être intégré dans une facture PDF envoyée par email
          ou dans tout document numérique. Pour les factures affichées à l&apos;écran (par
          exemple, dans un portail client), le GiroCode peut être scanné directement depuis
          l&apos;écran du client. L&apos;e-facture structurée (format Factur-X, ZUGFeRD, UBL)
          peut également inclure des métadonnées de paiement compatibles avec la norme EPC.
        </p>

        <h3>3. Le client doit-il avoir une application bancaire pour utiliser le GiroCode ?</h3>
        <p>
          Oui, le GiroCode nécessite une application bancaire mobile compatible. Les clients
          qui utilisent uniquement la banque en ligne sur ordinateur ne peuvent pas utiliser
          directement le GiroCode. Cependant, ils peuvent toujours payer manuellement via
          les coordonnées bancaires IBAN/BIC figurant sur la facture. Le GiroCode est un
          complément, pas un remplacement des informations de paiement textuelles.
        </p>

        <h3>4. Mon IBAN sur la facture est-il sécurisé ?</h3>
        <p>
          L&apos;IBAN sur une facture est une donnée semi-publique, aussi bien en texte clair
          que dans le GiroCode. Les deux contiennent exactement la même information. Le
          GiroCode ne présente donc pas de risque de sécurité supplémentaire par rapport à la
          mention textuelle de l&apos;IBAN.
        </p>

        <h3>5. Dois-je inclure à la fois le GiroCode et l&apos;IBAN en clair ?</h3>
        <p>
          <strong>Oui, les deux sont recommandés.</strong> Le GiroCode facilite le paiement
          pour les clients avec une application bancaire compatible, mais tous les clients
          n&apos;ont pas cette possibilité. Les coordonnées bancaires textuelles (IBAN, BIC)
          doivent toujours être présentes sur la facture pour les clients qui préfèrent ou qui
          sont obligés de saisir manuellement les données.
        </p>

        <h3>6. Le GiroCode fonctionne-t-il pour les factures en devises autres que l&apos;euro ?</h3>
        <p>
          Non, le standard EPC GiroCode est spécifiquement conçu pour les virements SEPA en
          euros (SCT – SEPA Credit Transfer). Pour les paiements dans d&apos;autres devises
          ou vers des pays hors zone SEPA, il faudra utiliser d&apos;autres méthodes de
          paiement.
        </p>

        <h3>7. Puis-je utiliser un GiroCode pour des acomptes ?</h3>
        <p>
          Oui, vous pouvez créer un GiroCode spécifique pour un acompte. Encodez le montant
          de l&apos;acompte dans le GiroCode et indiquez clairement dans la référence de
          paiement qu&apos;il s&apos;agit d&apos;un acompte : par exemple{' '}
          <code>Acompte 50% – Devis 2025-018</code>.
        </p>

        <h3>8. Comment vérifier que mon GiroCode est correct avant d&apos;envoyer la facture ?</h3>
        <p>
          La meilleure façon est de scanner votre propre GiroCode avec l&apos;application
          de votre banque et de vérifier que toutes les données pré-remplies sont correctes :
          nom du bénéficiaire, IBAN, montant, référence. Ne confirmez pas le virement – il
          suffit d&apos;inspecter les données affichées. Notre générateur affiche également
          les données encodées dans le GiroCode directement sur la page pour une vérification
          visuelle rapide.
        </p>

        <h3>9. La taille du GiroCode affecte-t-elle les données encodées ?</h3>
        <p>
          Non, la taille du GiroCode n&apos;affecte pas les données encodées. Un GiroCode
          agrandi ou réduit contient exactement les mêmes informations. La taille affecte
          uniquement la lisibilité : un code trop petit peut être difficile à scanner avec
          certains appareils.
        </p>

        <h3>10. Mon logiciel de facturation génère-t-il des GiroCodes conformes à la norme EPC ?</h3>
        <p>
          C&apos;est une bonne question à poser à l&apos;éditeur de votre logiciel. La
          conformité à la norme EPC implique notamment : utilisation de la version 002, niveau
          de correction d&apos;erreurs M, encodage UTF-8, et format correct du montant
          (EUR12.34). Les logiciels reconnus comme sevDesk et FastBill génèrent des GiroCodes
          pleinement conformes.
        </p>
      </section>

    </KnowledgeLayout>
  );
}
