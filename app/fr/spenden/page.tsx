import type { Metadata } from 'next';
import { UseCaseLanding } from '../../../components/UseCaseLanding';

const SLUG = 'spenden';

export const metadata: Metadata = {
  title: 'GiroCode pour Dons – Code QR SEPA pour collectes de fonds',
  description:
    "Plus de dons grâce à un scan simple : un GiroCode sur flyers, affiches et sites web permet aux donateurs de virer en 10 secondes – sans saisir l'IBAN.",
  keywords:
    'girocode don, qr code don, sepa qr collecte, ong qr code, fundraising qr',
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

export default function SpendenFrPage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'fr',
        generatorHref: '/fr',
        homeHref: '/fr',
        homeLabel: 'Accueil',
        breadcrumbLabel: 'Dons',
        badge: 'Pour Collectes de fonds & ONG',
        h1: 'Plus de dons grâce à un scan simple',
        subtitle:
          "Imprimez un GiroCode sur flyers, affiches ou page de don. « Je donnerai plus tard » devient « Je donne maintenant » – en dix secondes.",
        problemHeadline: 'Le problème : les bonnes intentions s\u2019évaporent',
        problemIntro:
          "Des études montrent : plus de 70% des personnes qui veulent donner abandonnent en cours de route. Ces trois obstacles en sont les causes principales :",
        painPoints: [
          'Les donateurs veulent donner – mais le chemin est trop compliqué',
          "Beaucoup abandonnent dès qu'il faut saisir l'IBAN",
          "La référence de paiement est oubliée – le don ne peut pas être attribué",
        ],
        solutionHeadline: 'La solution : le GiroCode abaisse fortement la barrière',
        solutionIntro:
          "Un seul QR code suffit. Les donateurs ouvrent leur appli bancaire, scannent, confirment – et le montant arrive sur votre compte avec la bonne référence.",
        benefits: [
          {
            icon: '⚡',
            title: 'Scan & don en 10 secondes',
            description:
              "Plus de recherche d'IBAN ni de saisie : un scan, un montant, c'est fait.",
          },
          {
            icon: '💸',
            title: 'Sans montant – les donateurs choisissent',
            description:
              "Laissez le montant vide. Le donateur saisit lui-même la somme dans son appli bancaire.",
          },
          {
            icon: '📰',
            title: 'Sur flyers & affiches',
            description:
              "Téléchargez le PNG et placez-le sur supports imprimés, site web, email ou publication sur réseaux sociaux.",
          },
        ],
        stepsHeadline: 'Votre GiroCode de don en 3 étapes',
        steps: [
          {
            title: 'Saisir le compte de don',
            description:
              "IBAN, bénéficiaire (association/ONG) et référence (par ex. « Don campagne 2026 ») dans le générateur.",
          },
          {
            title: 'Laisser le montant ouvert ou suggérer',
            description:
              "Laissez le champ vide pour des dons libres – ou indiquez un montant suggéré (par ex. 25 €) pour une campagne à somme fixe.",
          },
          {
            title: 'Partager & utiliser le QR code',
            description:
              "Placez le code sur affiche, flyer, site, email ou visuel réseaux sociaux. Les donateurs scannent avec leur appli bancaire.",
          },
        ],
        faqHeadline: 'Questions fréquentes – GiroCode pour les dons',
        faq: [
          {
            question: 'Faut-il un QR code différent pour chaque don ?',
            answer:
              "Non. Un seul QR code suffit pour toute une campagne – avec ou sans montant fixe. Pour distinguer plusieurs campagnes, créez un code par campagne avec sa propre référence.",
          },
          {
            question: 'Les donateurs peuvent-ils donner sans montant fixé ?',
            answer:
              "Oui. Si le montant est laissé vide, l'appli bancaire demande le montant au donateur. Idéal pour les dons libres.",
          },
          {
            question: 'Les dons via GiroCode sont-ils déductibles fiscalement ?',
            answer:
              "Oui, si votre organisation est reconnue d'intérêt général. Le don est un simple virement SEPA – il apparaît sur le reçu fiscal comme tout autre virement.",
          },
          {
            question: 'Cela fonctionne-t-il sur affiches et grands supports ?',
            answer:
              "Oui. Veillez à au moins 2x2 cm et bon contraste. Sur affiches, imprimez plus grand (5\u201310 cm) pour permettre le scan à plusieurs mètres.",
          },
          {
            question: 'Les données des donateurs sont-elles enregistrées ?',
            answer:
              "Non. Le générateur fonctionne entièrement en local dans votre navigateur – nous ne voyons ni vos données ni celles des donateurs. Seule la banque du donateur traite ses informations.",
          },
        ],
        ctaHeadline: 'Prêts pour plus de dons ?',
        ctaText:
          "Créez en 2 minutes le GiroCode de votre prochaine campagne – gratuit, sans inscription, prêt à imprimer sur flyer, affiche et site web.",
        ctaButton: 'Créer un GiroCode gratuit →',
      }}
    />
  );
}
