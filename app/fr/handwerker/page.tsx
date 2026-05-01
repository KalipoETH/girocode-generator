import type { Metadata } from 'next';
import { UseCaseLanding } from '../../../components/UseCaseLanding';

const SLUG = 'handwerker';

export const metadata: Metadata = {
  title: 'GiroCode pour Artisans – Factures payées plus vite',
  description:
    "Factures d'artisans payées immédiatement : GiroCode sur la facture = paiement sur place, moins de relances, pas de saisie d'IBAN. Gratuit & sans inscription.",
  keywords:
    'girocode artisan, facture artisan qr code, sepa qr artisan, facture payée immédiatement',
  alternates: {
    canonical: `https://www.girocodegenerator.com/fr/${SLUG}`,
    languages: {
      'x-default': `https://www.girocodegenerator.com/${SLUG}`,
      de: `https://www.girocodegenerator.com/${SLUG}`,
      en: `https://www.girocodegenerator.com/en/${SLUG}`,
      fr: `https://www.girocodegenerator.com/fr/${SLUG}`,
      es: `https://www.girocodegenerator.com/es/${SLUG}`,
    },
  },
};

export default function HandwerkerFrPage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'fr',
        generatorHref: '/fr',
        homeHref: '/fr',
        homeLabel: 'Accueil',
        breadcrumbLabel: 'Artisans',
        badge: 'Pour Artisans & Entreprises',
        h1: "Factures d'artisans payées immédiatement",
        subtitle:
          "Imprimez le GiroCode directement sur le bon de livraison ou la facture PDF – votre client scanne avec son téléphone et paie avant que vous ne partiez. Plus d'attente.",
        problemHeadline: 'Le problème : le paiement arrive des semaines plus tard',
        problemIntro:
          "Dans l'artisanat, la trésorerie est essentielle. C'est pourtant là que beaucoup d'entreprises bloquent :",
        painPoints: [
          'Paiement des semaines plus tard – mais matériel et salaires sont dus tout de suite',
          'Factures papier perdues – le client ne se souvient plus',
          "Questions sur IBAN incorrect – gênant et chronophage",
        ],
        solutionHeadline: 'La solution : être payé avant même de remonter en camion',
        solutionIntro:
          "Avec un GiroCode sur la facture, vous clôturez l'intervention et encaissez immédiatement. Votre client scanne avec son appli bancaire – terminé.",
        benefits: [
          {
            icon: '📍',
            title: 'Être payé sur place',
            description:
              'Le client scanne dès la fin du chantier – vous repartez avec la facture déjà réglée.',
          },
          {
            icon: '⏱️',
            title: 'Facture PDF en 2 minutes',
            description:
              "Mentions obligatoires, logo, GiroCode, TVA – tout dans une facture A4 prête à imprimer ou envoyer.",
          },
          {
            icon: '📱',
            title: 'Le client paie immédiatement par téléphone',
            description:
              "Ouverture appli bancaire, scan, confirmation – l'argent est en route avant que vous ne montiez en cabine.",
          },
        ],
        stepsHeadline: 'Votre facture GiroCode en 3 étapes',
        steps: [
          {
            title: "Saisir les données du chantier",
            description:
              "IBAN, bénéficiaire, montant et référence (par ex. « Réparation chauffage 2026/123 ») dans le générateur.",
          },
          {
            title: 'Créer le PDF avec GiroCode',
            description:
              "Téléchargez votre logo, enregistrez vos mentions une seule fois – le générateur crée une facture PDF avec QR intégré.",
          },
          {
            title: 'Remettre & faire scanner',
            description:
              "Imprimez le PDF ou envoyez-le par email. Le client scanne avec son appli bancaire et valide en deux clics.",
          },
        ],
        faqHeadline: 'Questions fréquentes pour artisans',
        faq: [
          {
            question: 'Puis-je imprimer le GiroCode sur les bons de livraison ?',
            answer:
              'Oui. Téléchargez le QR code en PNG et placez-le sur n\u2019importe quel document – bon de livraison, reçu, rapport d\u2019entretien. Important : garder une taille minimale de 2x2 cm.',
          },
          {
            question: 'La facture PDF respecte-t-elle les obligations légales ?',
            answer:
              "Oui. Avec adresse, numéro de TVA, numéro de facture, date, description de prestation et totaux HT/TVA/TTC, le générateur crée une facture conforme. Le GiroCode est ajouté en supplément.",
          },
          {
            question: 'Et si le client ne peut pas scanner le GiroCode ?',
            answer:
              "Toutes les données (IBAN, montant, référence) sont aussi imprimées en clair sur la facture. Le client peut donc déclencher le virement manuellement – le QR code est toujours un confort supplémentaire.",
          },
          {
            question: 'Cela fonctionne-t-il aussi pour la clientèle B2B ?',
            answer:
              "Oui. Le GiroCode est conforme à la norme EPC et reconnu par toutes les banques SEPA – particuliers comme professionnels. Les services comptables apprécient les données sans erreur.",
          },
          {
            question: 'Les données clients et chantiers sont-elles sécurisées ?',
            answer:
              "Oui. Tout est traité uniquement dans votre navigateur. Ni l'IBAN, ni le logo, ni les données de facture ne quittent votre appareil – et rien n'est stocké.",
          },
        ],
        ctaHeadline: 'Prêt à être payé sur place ?',
        ctaText:
          "Créez votre première facture artisan avec GiroCode en 2 minutes – gratuit, sans inscription, en local dans votre navigateur.",
        ctaButton: 'Créer un GiroCode gratuit →',
      }}
    />
  );
}
