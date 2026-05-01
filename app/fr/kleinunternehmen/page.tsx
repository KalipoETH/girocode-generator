import type { Metadata } from 'next';
import { UseCaseLanding } from '../../../components/UseCaseLanding';

const SLUG = 'kleinunternehmen';

export const metadata: Metadata = {
  title: 'GiroCode pour Petites Entreprises – Factures professionnelles',
  description:
    "Factures professionnelles pour votre PME : GiroCode + facture PDF conforme UE en 2 minutes. Sans abonnement, sans logiciel – gratuit & sécurisé.",
  keywords:
    'girocode pme, facture pme qr code, sepa qr sarl, logiciel facturation gratuit',
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

export default function KleinunternehmenFrPage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'fr',
        generatorHref: '/fr',
        homeHref: '/fr',
        homeLabel: 'Accueil',
        breadcrumbLabel: 'Petites Entreprises',
        badge: 'Pour PME & SARL',
        h1: 'Factures professionnelles pour votre petite entreprise',
        subtitle:
          "Mentions obligatoires conformes, mise en page PDF soignée, GiroCode intégré – sans logiciel comptable coûteux ni abonnement mensuel.",
        problemHeadline: 'Le problème : facturer coûte temps et argent',
        problemIntro:
          "Les PME ont besoin de factures tous les jours – mais l'industrie les pousse vers des abonnements logiciels coûteux. Beaucoup de chefs d'entreprise souffrent de :",
        painPoints: [
          "Logiciel de facturation coûteux – abonnements mensuels pour des fonctions qu'on n'utilise jamais",
          "Peur des mentions obligatoires incorrectes – l'expert-comptable doit tout vérifier",
          "Des heures à rédiger des factures – copier-coller depuis des modèles Word",
        ],
        solutionHeadline: 'La solution : conforme, rapide et gratuit',
        solutionIntro:
          "Notre générateur crée une facture PDF conforme UE avec logo, GiroCode et toutes les mentions obligatoires – en 2 minutes et sans abonnement.",
        benefits: [
          {
            icon: '🆓',
            title: 'Gratuit – sans abonnement',
            description:
              "Aucun frais caché, pas de niveaux premium, aucune limitation – juste des factures professionnelles.",
          },
          {
            icon: '📋',
            title: 'Factures conformes UE',
            description:
              "Adresse, numéro de TVA, numéro de facture, date, description, totaux HT/TVA/TTC – tout y est.",
          },
          {
            icon: '⏱️',
            title: 'Facture en 2 minutes',
            description:
              "Saisir les données, charger le logo, le GiroCode est intégré automatiquement – télécharger le PDF et envoyer.",
          },
        ],
        stepsHeadline: 'Votre facture en 3 étapes',
        steps: [
          {
            title: 'Enregistrer vos données une seule fois',
            description:
              "Nom de l'entreprise, adresse, numéro de TVA, IBAN, logo – tout est gardé localement dans votre navigateur.",
          },
          {
            title: 'Saisir les données du chantier',
            description:
              "Bénéficiaire, prestation, montant HT et taux de TVA. Le générateur calcule le TTC et crée le GiroCode.",
          },
          {
            title: 'Générer le PDF & envoyer',
            description:
              "Téléchargez la facture A4 PDF avec GiroCode intégré et envoyez-la directement par email à votre client.",
          },
        ],
        faqHeadline: 'Questions fréquentes pour PME',
        faq: [
          {
            question: 'La facture respecte-t-elle vraiment les obligations légales ?',
            answer:
              "Oui, à condition de remplir tous les champs obligatoires : noms et adresses émetteur/destinataire, numéro de TVA ou SIRET, date, numéro de facture, description, total HT, taux et montant de TVA (ou mention de franchise en base), total TTC.",
          },
          {
            question: 'Cela fonctionne-t-il avec la franchise en base de TVA ?',
            answer:
              "Oui. Mettez le taux de TVA à 0% et ajoutez la mention « TVA non applicable, art. 293 B du CGI » dans la description. Vous pouvez l'enregistrer comme mention par défaut.",
          },
          {
            question: 'Où sont stockées mes données de facturation ?',
            answer:
              "Nulle part sur nos serveurs. Les données restent uniquement dans votre navigateur. Pour les conserver, sauvegardez le PDF localement ou dans votre cloud.",
          },
          {
            question: 'Puis-je utiliser une numérotation continue ?',
            answer:
              "Oui. Vous choisissez librement le numéro de facture (ex. « 2026-001 »). Veillez à ce que la numérotation soit continue – c'est une obligation légale.",
          },
          {
            question: "La facture est-elle conforme aux obligations d'archivage ?",
            answer:
              "Le PDF généré est non modifiable et donc adapté à l'archivage. Pour la conformité complète (système d'archivage, documentation des procédures), vous devez vous en charger – comme avec tout autre logiciel.",
          },
        ],
        ctaHeadline: 'Prêt pour des factures sans stress ?',
        ctaText:
          "Créez votre première facture GiroCode en 2 minutes – gratuit, sans abonnement, sans inscription. En local dans votre navigateur.",
        ctaButton: 'Créer un GiroCode gratuit →',
      }}
    />
  );
}
