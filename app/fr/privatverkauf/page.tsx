import type { Metadata } from 'next';
import { UseCaseLanding } from '../../../components/UseCaseLanding';

const SLUG = 'privatverkauf';

export const metadata: Metadata = {
  title: 'GiroCode pour Ventes Privées – Petites annonces & plus',
  description:
    "Gérer les ventes privées en toute sécurité : GiroCode au lieu des frais PayPal – l'acheteur scanne avec son appli bancaire, vous recevez un virement SEPA garanti. Gratuit & sans inscription.",
  keywords:
    'girocode vente privee, leboncoin qr code, sepa qr particulier, petites annonces paiement sécurisé',
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

export default function PrivatverkaufFrPage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'fr',
        generatorHref: '/fr',
        homeHref: '/fr',
        homeLabel: 'Accueil',
        breadcrumbLabel: 'Ventes Privées',
        badge: 'Pour Ventes Privées & Petites Annonces',
        h1: 'Gérer les ventes privées facilement & en sécurité',
        subtitle:
          "Plus de frais PayPal ni de stress avec les espèces : envoyez à votre acheteur un GiroCode. Il scanne, vire – et vous voyez l'argent sur votre compte avant qu'il ne quitte la pièce.",
        problemHeadline: 'Le problème : les modes de paiement sont injustes ou risqués',
        problemIntro:
          "Sur les sites de petites annonces, vous perdez soit de l'argent soit votre patience. Ces trois points rendent les ventes privées agaçantes :",
        painPoints: [
          'PayPal prend des frais – et l\u2019option « Entre amis » exclut la protection acheteur',
          "Les acheteurs hésitent à saisir l'IBAN – fautes de frappe et retards",
          'Pas de système de paiement commun – chacun veut payer via un service différent',
        ],
        solutionHeadline: 'La solution : un virement SEPA – en mode malin',
        solutionIntro:
          "Envoyez simplement un GiroCode à l'acheteur. Il scanne avec l'appli bancaire de son choix, vous recevez un vrai virement SEPA – sans tiers, sans frais.",
        benefits: [
          {
            icon: '💰',
            title: 'Pas de frais comme PayPal',
            description:
              '2,9% + 35 ct ? Pas ici. Les virements SEPA en zone euro sont gratuits – vous recevez exactement le montant convenu.',
          },
          {
            icon: '🛡️',
            title: 'Virement SEPA sécurisé',
            description:
              "Le virement passe directement entre les banques. Pas de tiers, pas de comptes gelés, pas de chargebacks.",
          },
          {
            icon: '📲',
            title: 'L\u2019acheteur scanne avec son appli bancaire',
            description:
              "Peu importe la banque : Sparkasse, ING, Volksbank, DKB, N26 et autres scannent toutes le GiroCode.",
          },
        ],
        stepsHeadline: 'Votre vente privée sécurisée en 3 étapes',
        steps: [
          {
            title: 'Saisir les données',
            description:
              "Votre IBAN, votre nom (bénéficiaire), prix de vente et référence (par ex. « Vente vélo bleu ») dans le générateur.",
          },
          {
            title: "Envoyer le GiroCode à l'acheteur",
            description:
              "Téléchargez le QR code en PNG et envoyez-le via messagerie ou email – ou imprimez-le pour la remise en main propre.",
          },
          {
            title: 'Vérifier le virement & remettre',
            description:
              "L'acheteur scanne avec son appli bancaire et fait le virement immédiatement. Remettez l'objet uniquement quand le crédit apparaît sur votre compte – pas juste un SMS.",
          },
        ],
        faqHeadline: 'Questions fréquentes pour les particuliers',
        faq: [
          {
            question: 'Un virement SEPA est-il vraiment sûr pour le vendeur ?',
            answer:
              "Oui. Un virement SEPA exécuté ne peut pas être annulé unilatéralement par l'acheteur – contrairement à la protection PayPal. Mais attendez toujours de voir le crédit sur votre compte avant de remettre l'objet – pas juste une capture d'écran.",
          },
          {
            question: 'Combien de temps prend un virement SEPA pour une vente privée ?',
            answer:
              "Depuis 2025, le SEPA Instantané est obligatoire pour la plupart des banques européennes – l'argent arrive en 10 secondes. Pour un virement SEPA classique, comptez 1 jour ouvré.",
          },
          {
            question: "Et si l'acheteur saisit de mauvaises données ?",
            answer:
              "Avec un GiroCode, l'acheteur ne peut pas entrer de mauvaises données – IBAN, bénéficiaire et montant viennent du QR code. Plus de fautes de frappe.",
          },
          {
            question: "L'acheteur reçoit-il toutes mes coordonnées bancaires ?",
            answer:
              "Oui, votre nom et IBAN sont encodés dans le QR code – c'est nécessaire pour tout virement. Avec ces seules données, personne ne peut débiter votre compte.",
          },
          {
            question: "Puis-je intégrer le GiroCode directement dans l'annonce ?",
            answer:
              "Techniquement oui – mais nous recommandons de l'envoyer seulement après confirmation d'achat. Ainsi votre IBAN n'est pas visible publiquement sur la plateforme.",
          },
        ],
        ctaHeadline: 'Prêt pour des ventes privées équitables ?',
        ctaText:
          "Créez en 60 secondes un GiroCode pour votre prochaine vente – gratuit, sans inscription, sans frais.",
        ctaButton: 'Créer un GiroCode gratuit →',
      }}
    />
  );
}
