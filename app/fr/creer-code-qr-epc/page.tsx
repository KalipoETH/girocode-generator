import type { Metadata } from 'next';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'creer-code-qr-epc';

export const metadata: Metadata = {
  title: 'Créer un Code QR EPC Gratuit – En Ligne 2026',
  description:
    'Créer un code QR EPC pour virement SEPA gratuitement. Sans inscription, 100% local, téléchargement instantané. Compatible avec toutes les apps bancaires européennes.',
  alternates: seoAlternates(SLUG, 'fr'),
};

export default function CreerCodeQrEpcPage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        locale: 'fr',
        breadcrumbLabel: 'Créer Code QR EPC',
        badge: 'EPC069-12 · SEPA · Gratuit',
        h1: 'Créer un Code QR EPC Gratuitement – En Ligne',
        shortAnswer:
          "Créer un code QR EPC prend moins de 10 secondes: Saisissez le nom du bénéficiaire et l'IBAN, ajoutez optionnellement le montant et la référence, cliquez sur générer et téléchargez votre QR en PNG. Sans inscription. Toutes les données restent dans votre navigateur.",
        stats: [
          { value: '10 sec.', label: 'Temps de création' },
          { value: 'Gratuit', label: 'Sans abonnement' },
          { value: 'EPC069-12', label: 'Norme officielle' },
          { value: '36 pays', label: 'Couverture SEPA' },
        ],
        body: (
          <>
            <h2>Créer un Code QR EPC en Quelques Secondes</h2>
            <p>
              Le <strong>code QR EPC</strong> est le moyen le plus rapide de recevoir des virements
              SEPA. Idéal pour les factures, dons et paiements – générez un code conforme EPC069-12
              gratuitement dans votre navigateur.
            </p>
          </>
        ),
        howTo: {
          name: 'Créer un code QR EPC',
          headline: 'Comment Créer un Code QR EPC',
          steps: [
            {
              title: 'Saisir le nom du bénéficiaire et l\'IBAN',
              description: 'Entrez le nom du titulaire du compte et l\'IBAN exactement comme enregistré.',
            },
            {
              title: 'Ajouter montant et référence (optionnel)',
              description: 'Montant en EUR et référence de paiement (ex. numéro de facture).',
            },
            {
              title: 'Générer et télécharger en PNG',
              description: 'Cliquez sur Générer et téléchargez votre code QR EPC instantanément.',
            },
          ],
        },
        faqs: [
          {
            q: 'Comment créer un code QR EPC gratuitement ?',
            a: 'Ouvrez girocodegenerator.com/fr, saisissez le nom et l\'IBAN, cliquez sur Générer et téléchargez le QR en PNG. Gratuit, sans inscription.',
          },
          {
            q: 'Quelles informations faut-il pour un code QR EPC ?',
            a: 'Nom du bénéficiaire (max. 70 caractères) et IBAN. Montant et référence sont optionnels.',
          },
          {
            q: 'Mon IBAN est-il en sécurité ?',
            a: 'Oui. Toutes les données sont traitées 100% localement dans votre navigateur. Aucune transmission à nos serveurs.',
          },
        ],
        ctas: [{ href: '/fr', label: 'Créer un Code QR EPC →' }],
        relatedLinks: [
          { href: '/fr/generateur-qr-virement-sepa', label: 'Générateur QR Virement SEPA' },
          { href: '/fr/qr-code-sepa-gratuit', label: 'QR Code SEPA Gratuit' },
        ],
      }}
    />
  );
}
