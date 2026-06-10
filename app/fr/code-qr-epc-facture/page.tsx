import type { Metadata } from 'next';
import Link from 'next/link';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'code-qr-epc-facture';
const LOCALE = 'fr' as const;

export const metadata: Metadata = {
  title: 'Code QR EPC sur Facture – Générateur Gratuit 2026',
  description:
    'Ajoutez un code QR EPC à vos factures pour des paiements SEPA instantanés. Clients scannent et paient en secondes. Gratuit, inclus générateur PDF.',
  alternates: seoAlternates(SLUG, LOCALE),
};

export default function CodeQrEpcFacturePage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        locale: LOCALE,
        breadcrumbLabel: 'Code QR EPC sur facture',
        badge: 'Factures · EPC069-12 · SEPA',
        h1: 'Code QR EPC sur Facture – Paiements Plus Rapides',
        shortAnswer:
          "Ajouter un code QR EPC à une facture permet aux clients de payer par virement SEPA en scannant avec leur app bancaire. L'IBAN, le montant et la référence sont pré-remplis automatiquement. Selon les recommandations EPC, le QR doit être placé en bas à droite de la facture, d'une taille minimale de 2×2 cm.",
        stats: [
          { value: '2×2 cm', label: 'Taille minimale du QR' },
          { value: 'EPC069-12', label: 'Standard officiel' },
          { value: '10 sec.', label: 'Temps de paiement moyen' },
          { value: '0 €', label: 'Frais de transaction' },
        ],
        body: (
          <>
            <h2>Pourquoi ajouter un code QR EPC sur une facture?</h2>
            <p>
              Les virements manuels sont lents et sujets aux erreurs. Les clients se trompent
              d&apos;IBAN, oublient la référence de paiement ou retardent le règlement. Un{' '}
              <strong>code QR EPC sur votre facture</strong> élimine ces problèmes: le client
              ouvre son app bancaire, scanne le code, vérifie les données pré-remplies et confirme
              le virement en quelques secondes.
            </p>

            <h2>Mentions obligatoires sur factures françaises</h2>
            <p>
              Le code QR EPC complète – sans remplacer – les mentions légales obligatoires sur
              une facture française:
            </p>
            <ul>
              <li>Numéro de facture et date d&apos;émission</li>
              <li>Identité du vendeur: SIREN, SIRET, numéro de TVA intracommunautaire</li>
              <li>Identité de l&apos;acheteur</li>
              <li>Description des biens ou services, montant HT, TVA et montant TTC</li>
              <li>IBAN et conditions de paiement</li>
            </ul>

            <h2>Comment placer le QR sur une facture</h2>
            <p>
              Selon les recommandations EPC, placez le code QR en{' '}
              <strong>coin inférieur droit</strong> de la facture, près des coordonnées bancaires:
            </p>
            <ul>
              <li>
                <strong>Taille minimale:</strong> 2 × 2 cm (3 × 3 cm recommandé pour l&apos;impression)
              </li>
              <li>
                <strong>Contraste:</strong> QR noir sur fond blanc
              </li>
              <li>
                <strong>Libellé:</strong> Ajoutez « Scannez pour payer » à côté du code
              </li>
            </ul>

            <h2>Générateur PDF avec QR intégré</h2>
            <p>
              Utilisez notre{' '}
              <Link href="/fr/rechnungs-editor">générateur de facture PDF</Link> pour créer une
              facture professionnelle avec le code QR EPC automatiquement intégré au bon
              emplacement – sans abonnement ni intégration comptable.
            </p>
          </>
        ),
        howTo: {
          name: 'Ajouter un code QR EPC à une facture',
          headline: 'Étape par étape: code QR EPC sur votre facture PDF',
          steps: [
            {
              title: 'Saisir les détails de la facture',
              description:
                'Entrez votre IBAN, nom, montant et référence de paiement (ex. numéro de facture) dans le générateur.',
            },
            {
              title: 'Générer le code QR EPC',
              description:
                'Cliquez sur Générer pour créer un code QR EPC069-12 validé. Téléchargez en PNG ou passez au générateur PDF.',
            },
            {
              title: 'Créer la facture PDF avec QR intégré',
              description:
                'Utilisez l\'éditeur de factures pour créer un PDF professionnel avec le QR en bas à droite.',
            },
            {
              title: 'Envoyer la facture au client',
              description:
                'Envoyez le PDF par e-mail. Le client scanne le QR avec son app bancaire et paie en secondes.',
            },
          ],
        },
        faqs: [
          {
            q: 'Où placer le code QR EPC sur une facture?',
            a: 'En coin inférieur droit, près des coordonnées bancaires. Taille minimale: 2×2 cm. Pour l\'impression, 3×3 cm est recommandé.',
          },
          {
            q: 'Le QR EPC remplace-t-il l\'IBAN sur la facture?',
            a: 'Non. L\'IBAN doit toujours figurer en texte sur la facture. Le QR code est un complément pratique pour le payeur.',
          },
          {
            q: 'Est-ce gratuit d\'ajouter un QR EPC aux factures?',
            a: 'Oui. La création sur girocodegenerator.com est entièrement gratuite, sans frais de transaction SEPA.',
          },
        ],
        ctas: [
          { href: '/fr/rechnungs-editor', label: 'Créer une facture avec QR EPC →' },
          { href: '/fr', label: 'Créer un code QR EPC →', primary: false },
        ],
        relatedLinks: [
          { href: '/fr/code-qr-epc-france', label: 'Code QR EPC France' },
          { href: '/fr/code-qr-sepa-freelance', label: 'Code QR SEPA pour freelances' },
          { href: '/fr/wissen/rechnung', label: 'GiroCode sur factures – guide complet' },
        ],
      }}
    />
  );
}
