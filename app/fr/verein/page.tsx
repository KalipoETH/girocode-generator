import type { Metadata } from 'next';
import { UseCaseLanding } from '../../../components/UseCaseLanding';

const SLUG = 'verein';

export const metadata: Metadata = {
  title: 'GiroCode pour Associations – Cotisations faciles à collecter',
  description:
    "Les associations utilisent GiroCodes pour les cotisations, dons et événements. Gratuit, local, sans inscription.",
  keywords:
    'girocode association, cotisation qr code, sepa qr club, don association qr',
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

export default function VereinFrPage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'fr',
        generatorHref: '/fr',
        homeHref: '/fr',
        homeLabel: 'Accueil',
        breadcrumbLabel: 'Associations',
        badge: 'Pour Associations & Organisations',
        h1: 'Collecter cotisations & dons facilement',
        subtitle:
          "Avec un GiroCode sur vos appels à cotisation, flyers de dons et invitations à des événements, les membres paient à temps – sans erreur, sans travail supplémentaire pour le trésorier.",
        problemHeadline: "Le problème : la gestion des cotisations prend du temps",
        problemIntro:
          "Être trésorier bénévole est déjà un travail à plein temps. Ces trois tâches dévorent le plus de temps :",
        painPoints: [
          "Écrire des relances prend du temps – chaque cotisation doit être suivie manuellement",
          "Références de paiement incorrectes – difficile d'attribuer les virements",
          'Comptabilité complexe pour cotisations, dons et événements',
        ],
        solutionHeadline: "La solution : GiroCode pour les paiements associatifs",
        solutionIntro:
          "Imprimez le GiroCode sur les courriers aux membres, flyers ou affiches. Membres et donateurs scannent, paient – et la bonne référence est automatiquement présente.",
        benefits: [
          {
            icon: '⚡',
            title: 'Scan & paiement en 10 secondes',
            description:
              "Les membres paient juste après le scan – sans chercher de coordonnées, sans saisie manuelle.",
          },
          {
            icon: '🏷️',
            title: 'Référence automatique',
            description:
              "« Cotisation 2026 », « Don fête d'été » – la référence est encodée dans le QR code et transmise sans erreur.",
          },
          {
            icon: '📊',
            title: 'Attribution plus facile',
            description:
              "Des libellés clairs sur le relevé bancaire – la comptabilité se fait presque toute seule.",
          },
        ],
        stepsHeadline: 'Votre GiroCode associatif en 3 étapes',
        steps: [
          {
            title: 'Saisir le compte de l\u2019association',
            description:
              "Entrez le nom de l'association, l'IBAN et – si vous le connaissez – un montant (par ex. cotisation annuelle).",
          },
          {
            title: 'Définir la référence',
            description:
              "Indiquez une référence claire comme « Cotisation 2026 » ou « Don fête d'été » directement dans le code.",
          },
          {
            title: 'Imprimer & partager le code',
            description:
              "Placez le GiroCode sur les courriers, flyers ou affiches. Les membres scannent avec leur appli bancaire et valident le virement.",
          },
        ],
        faqHeadline: 'Questions fréquentes pour associations',
        faq: [
          {
            question: 'Peut-on utiliser le GiroCode sans montant fixe ?',
            answer:
              "Oui. Laissez simplement le champ « montant » vide – membres ou donateurs saisiront eux-mêmes la somme. Idéal pour les appels aux dons.",
          },
          {
            question: 'Le GiroCode convient-il pour les reçus de dons ?',
            answer:
              "Oui. Vous pouvez placer le GiroCode sur les flyers, affiches ou lettres de dons. Les reçus fiscaux sont émis comme d'habitude – le GiroCode facilite simplement le virement.",
          },
          {
            question: 'Faut-il s\u2019inscrire ou souscrire un abonnement ?',
            answer:
              "Non. Le générateur est 100% gratuit et fonctionne sans inscription. Aucun frais caché – même avec beaucoup de QR codes.",
          },
          {
            question: 'Les données de l\u2019association sont-elles sécurisées ?',
            answer:
              "Oui. Toutes les données sont traitées exclusivement localement dans votre navigateur. Votre IBAN, les données associatives et les montants ne quittent jamais votre appareil.",
          },
          {
            question: 'Peut-on utiliser le même code pour plusieurs membres ?',
            answer:
              "Oui, si la cotisation est identique pour tous. Pour une référence personnalisée (ex. numéro de membre), générez un QR code par membre.",
          },
        ],
        ctaHeadline: 'Prêts pour des paiements associatifs sans stress ?',
        ctaText:
          "Créez en quelques clics des GiroCodes pour cotisations, dons ou événements – gratuit, sans inscription.",
        ctaButton: 'Créer un GiroCode gratuit →',
      }}
    />
  );
}
