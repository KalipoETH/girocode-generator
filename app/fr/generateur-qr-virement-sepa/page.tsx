import type { Metadata } from 'next';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'generateur-qr-virement-sepa';

export const metadata: Metadata = {
  title: 'Générateur QR Virement SEPA Gratuit – En Ligne 2026',
  description:
    'Générez un QR code pour virement SEPA (EPC069-12) gratuit en ligne. Saisissez IBAN et bénéficiaire, générez instantanément, téléchargez en PNG.',
  alternates: seoAlternates(SLUG, 'fr'),
};

export default function GenerateurQrVirementSepaPage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        locale: 'fr',
        breadcrumbLabel: 'Générateur QR Virement SEPA',
        badge: 'SEPA · EPC069-12 · Instantané',
        h1: 'Générateur QR Virement SEPA – Gratuit & Instantané',
        shortAnswer:
          'Générez un QR code pour virement SEPA gratuitement en ligne. Saisissez l\'IBAN et le nom du bénéficiaire, ajoutez optionnellement le montant, cliquez sur générer – votre QR code SEPA (norme EPC) est prêt à télécharger ou intégrer sur votre facture PDF.',
        stats: [
          { value: '10 sec.', label: 'Génération' },
          { value: 'Gratuit', label: 'Sans inscription' },
          { value: 'EPC069-12', label: 'Norme SEPA' },
          { value: '100%', label: 'Local' },
        ],
        body: (
          <>
            <h2>Générateur QR Virement SEPA</h2>
            <p>
              Le QR code virement SEPA permet à vos clients de payer en scannant avec leur app
              bancaire – IBAN, montant et référence pré-remplis automatiquement.
            </p>
          </>
        ),
        howTo: {
          name: 'Générer un QR virement SEPA',
          headline: 'Comment Générer un QR Virement SEPA',
          steps: [
            { title: 'Saisir IBAN et bénéficiaire', description: 'Nom et IBAN du compte SEPA.' },
            { title: 'Ajouter montant et référence', description: 'Montant EUR et référence de facture.' },
            { title: 'Générer et télécharger', description: 'Téléchargez le QR code en PNG.' },
          ],
        },
        faqs: [
          {
            q: 'Comment générer un QR code virement SEPA ?',
            a: 'Sur girocodegenerator.com/fr : saisissez IBAN et bénéficiaire, cliquez Générer, téléchargez le PNG. Gratuit.',
          },
          {
            q: 'Le QR SEPA est-il identique au QR EPC ?',
            a: 'Oui. QR SEPA et QR EPC suivent la même norme EPC069-12. En Allemagne on parle de GiroCode.',
          },
        ],
        ctas: [{ href: '/fr', label: 'Générer QR Virement SEPA →' }],
        relatedLinks: [
          { href: '/fr/creer-code-qr-epc', label: 'Créer Code QR EPC' },
          { href: '/fr/qr-code-sepa-gratuit', label: 'QR Code SEPA Gratuit' },
        ],
      }}
    />
  );
}
