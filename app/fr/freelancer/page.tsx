import type { Metadata } from 'next';
import { UseCaseLanding } from '../../../components/UseCaseLanding';

const SLUG = 'freelancer';

export const metadata: Metadata = {
  title: 'GiroCode pour Freelances – Être payé plus vite 2026',
  description:
    "Les freelances sont payés plus vite avec GiroCode: moins de relances, moins d'erreurs, plus de professionnalisme. Gratuit & sans inscription.",
  keywords:
    'girocode freelance, facture freelance qr code, sepa qr freelance, payé plus vite freelance',
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

export default function FreelancerFrPage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'fr',
        generatorHref: '/fr',
        homeHref: '/fr',
        homeLabel: 'Accueil',
        breadcrumbLabel: 'Freelances',
        badge: 'Pour Freelances & Indépendants',
        h1: 'Être payé plus vite en tant que freelance',
        subtitle:
          "Avec un GiroCode sur votre facture, les clients paient en quelques secondes – sans saisir l'IBAN manuellement, sans erreur de frappe.",
        problemHeadline: 'Le problème : les paiements traînent',
        problemIntro:
          "Vous connaissez la situation : le travail est fait, la facture envoyée – mais l'argent se fait attendre. Ces trois problèmes coûtent le plus cher aux freelances :",
        painPoints: [
          "Les clients saisissent mal l'IBAN – le virement n'arrive jamais",
          "Les paiements arrivent toujours en retard – les relances vous font perdre du temps",
          'Apparence peu professionnelle – sans moyen de paiement clair sur la facture',
        ],
        solutionHeadline: 'La solution : un GiroCode sur chaque facture',
        solutionIntro:
          "Un seul QR code sur votre facture change tout. Votre client scanne – l'application bancaire remplit IBAN, montant et référence automatiquement.",
        benefits: [
          {
            icon: '⚡',
            title: 'Paiements 10x plus rapides',
            description:
              "Les clients paient dès la réception de la facture – sans report, sans recherche de coordonnées bancaires.",
          },
          {
            icon: '✅',
            title: 'Zéro erreur de frappe',
            description:
              "Plus de saisie manuelle. IBAN, montant et référence sont déjà dans le code QR.",
          },
          {
            icon: '💼',
            title: 'Apparence professionnelle',
            description:
              "Des factures modernes avec QR code donnent une image sérieuse et montrent que vous êtes à jour.",
          },
        ],
        stepsHeadline: 'Votre facture GiroCode en 3 étapes',
        steps: [
          {
            title: 'Saisir IBAN & détails de facture',
            description:
              "Entrez bénéficiaire, IBAN, montant et référence dans le générateur. Tout reste local dans votre navigateur.",
          },
          {
            title: 'Générer GiroCode & PDF',
            description:
              "Le générateur crée immédiatement le QR code et, en option, une facture PDF prête à envoyer avec le code intégré.",
          },
          {
            title: 'Envoyer la facture – le client scanne & paie',
            description:
              "Envoyez le PDF par email. Votre client scanne le code avec son application bancaire et valide le virement en deux clics.",
          },
        ],
        faqHeadline: 'Questions fréquentes des freelances',
        faq: [
          {
            question: "Le GiroCode sur une facture est-il conforme à la loi ?",
            answer:
              "Oui. Le GiroCode est un complément optionnel – votre facture doit toujours contenir les mentions légales obligatoires (adresse, numéro de TVA, numéro de facture, etc.). Le QR code facilite simplement le paiement pour vos clients.",
          },
          {
            question: 'Quelles applications bancaires peuvent scanner ma facture ?',
            answer:
              "Pratiquement toutes les applications bancaires de la zone SEPA : Sparkasse, Volksbank, ING, DKB, Comdirect, Deutsche Bank, Commerzbank, Postbank, N26 et bien d'autres prennent en charge la norme EPC.",
          },
          {
            question: "Y a-t-il des frais ou un abonnement ?",
            answer:
              "Non. Le générateur GiroCode est 100% gratuit et sans inscription. Seuls les frais SEPA habituels de votre banque s'appliquent, si elle en facture.",
          },
          {
            question: 'Mes données bancaires et clients sont-elles sécurisées ?',
            answer:
              "Oui. Toutes les données sont traitées exclusivement dans votre navigateur. Aucune transmission vers un serveur – ni votre IBAN ni les données clients ne quittent votre appareil.",
          },
          {
            question: 'Puis-je créer aussi des factures récurrentes ?',
            answer:
              "Oui. Vous pouvez générer autant de factures GiroCode que vous voulez. Pour des montants fixes, un seul QR code peut être réutilisé – idéal pour les forfaits mensuels.",
          },
        ],
        ctaHeadline: 'Prêt à être payé plus vite ?',
        ctaText:
          "Créez votre première facture GiroCode en 2 minutes – gratuit, sans inscription, 100% local dans votre navigateur.",
        ctaButton: 'Créer un GiroCode gratuit →',
      }}
    />
  );
}
