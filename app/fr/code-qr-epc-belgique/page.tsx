import type { Metadata } from 'next';
import { CountryEpcLanding, countryAlternates } from '../../../components/CountryEpcLanding';

const SLUG = 'code-qr-epc-belgique';
const LOCALE = 'fr' as const;

export const metadata: Metadata = {
  title: 'Générateur Code QR EPC Belgique – Virement SEPA Gratuit 2026',
  description:
    'Créez un code QR EPC pour virements SEPA en Belgique gratuitement. Compatible avec BNP Paribas Fortis, KBC, ING Belgique, Belfius. Sans inscription.',
  alternates: countryAlternates(SLUG, LOCALE),
};

export default function CodeQrEpcBelgiquePage() {
  return (
    <CountryEpcLanding
      content={{
        slug: SLUG,
        locale: LOCALE,
        breadcrumbLabel: 'Code QR EPC Belgique',
        badge: 'Belgique · EPC069-12 · SEPA',
        h1: 'Générateur de Code QR EPC pour la Belgique',
        shortAnswer:
          "La Belgique est l'un des pays européens les plus avancés dans l'adoption des codes QR EPC. Les apps bancaires belges BNP Paribas Fortis Easy Banking, KBC Mobile, ING Banking et Belfius Mobile supportent tous le standard EPC069-12. Les IBAN belges commencent par BE et comportent 16 chiffres.",
        stats: [
          { value: 'BE', label: 'Préfixe IBAN belge' },
          { value: '16 chiffres', label: 'Longueur IBAN Belgique' },
          { value: 'EPC069-12', label: 'Standard officiel' },
          { value: '2016', label: 'Migration SEPA complétée' },
        ],
        introSection: {
          title: 'Le code QR EPC en Belgique',
          body: (
            <>
              <p>
                La Belgique a été l&apos;un des premiers pays à adopter le standard{' '}
                <strong>EPC069-12</strong> pour les paiements par facture. Les banques belges
                francophones et néerlandophones intègrent le scan QR dans leurs applications
                mobiles, facilitant les virements SEPA pour les entreprises, les associations et
                les particuliers.
              </p>
              <p>
                En Belgique francophone, le code QR EPC est utilisé sur les factures, les sites
                web de collecte de fonds et les supports imprimés. Le payeur scanne le code avec
                son app bancaire et confirme le virement en quelques secondes.
              </p>
              <h3>Format IBAN belge</h3>
              <p>
                Les IBAN belges commencent par <strong>BE</strong>, suivis de 14 chiffres (2
                chiffres de contrôle + 12 chiffres du compte). Longueur totale:{' '}
                <strong>16 caractères</strong> (ex. <code>BE68539007547034</code>).
              </p>
            </>
          ),
        },
        banksHeadline: 'Banques belges (francophones) supportant le QR EPC',
        banks: [
          { name: 'BNP Paribas Fortis', app: 'Easy Banking App' },
          { name: 'KBC', app: 'KBC Mobile' },
          { name: 'ING Belgique', app: 'ING Banking' },
          { name: 'Belfius', app: 'Belfius Mobile' },
        ],
        howToHeadline: 'Comment créer un code QR EPC pour la Belgique',
        howToJsonLdName: 'Créer un code QR EPC pour la Belgique',
        howToSteps: [
          {
            title: 'Saisir IBAN et nom du bénéficiaire',
            description:
              'Entrez votre IBAN belge (commençant par BE) et le nom du bénéficiaire dans le générateur gratuit.',
          },
          {
            title: 'Ajouter montant et référence',
            description:
              'Entrez optionnellement le montant en EUR et une référence de paiement comme « Facture 2026-001 ».',
          },
          {
            title: 'Générer et utiliser',
            description:
              'Téléchargez le code QR en PNG ou intégrez-le dans une facture PDF via notre éditeur de factures.',
          },
        ],
        faqHeadline: 'FAQ – Code QR EPC en Belgique',
        faqs: [
          {
            q: 'Les banques belges supportent-elles le code QR EPC?',
            a: 'Oui. Toutes les grandes banques belges – BNP Paribas Fortis, KBC, ING Belgique et Belfius – supportent le scan de codes QR EPC pour les virements SEPA selon la norme EPC069-12.',
          },
          {
            q: 'Quel est le format IBAN belge?',
            a: 'Les IBAN belges commencent par BE, suivis de 14 chiffres. La longueur totale est de 16 caractères, ex. BE68539007547034.',
          },
          {
            q: 'Le code QR EPC fonctionne-t-il en Belgique francophone?',
            a: 'Oui. Le code QR EPC fonctionne dans toute la Belgique, y compris en Wallonie et à Bruxelles. Les apps bancaires belges francophones supportent le même standard EPC069-12.',
          },
        ],
        ctaText: 'Créer un code QR EPC →',
        ctaHref: '/fr',
        relatedLinks: [
          { href: '/fr/code-qr-epc-france', label: 'Code QR EPC France' },
          { href: '/fr/code-qr-epc-luxembourg', label: 'Code QR EPC Luxembourg' },
          { href: '/fr/code-qr-epc-facture', label: 'Code QR EPC sur facture' },
        ],
      }}
    />
  );
}
