import type { Metadata } from 'next';
import { CountryEpcLanding, countryAlternates } from '../../../components/CountryEpcLanding';

const SLUG = 'code-qr-epc-luxembourg';
const LOCALE = 'fr' as const;

export const metadata: Metadata = {
  title: 'Générateur Code QR EPC Luxembourg – Virement SEPA Gratuit 2026',
  description:
    'Créez des codes QR EPC pour virements SEPA au Luxembourg. Compatible avec BGL BNP Paribas, Spuerkeess, ING Luxembourg. Gratuit.',
  alternates: countryAlternates(SLUG, LOCALE),
};

export default function CodeQrEpcLuxembourgPage() {
  return (
    <CountryEpcLanding
      content={{
        slug: SLUG,
        locale: LOCALE,
        breadcrumbLabel: 'Code QR EPC Luxembourg',
        badge: 'Luxembourg · EPC069-12 · SEPA',
        h1: 'Générateur de Code QR EPC pour le Luxembourg',
        shortAnswer:
          'Le Luxembourg fait partie de la zone SEPA et ses banques supportent le standard EPC069-12. Les IBAN luxembourgeois commencent par LU et comportent 20 caractères. Les principales banques luxembourgeoises incluent BGL BNP Paribas, Spuerkeess (BCEE) et ING Luxembourg.',
        stats: [
          { value: 'LU', label: 'Préfixe IBAN luxembourgeois' },
          { value: '20 caractères', label: 'Longueur IBAN Luxembourg' },
          { value: 'EPC069-12', label: 'Standard officiel' },
          { value: '2016', label: 'Migration SEPA complétée' },
        ],
        introSection: {
          title: 'Le code QR EPC au Luxembourg',
          body: (
            <>
              <p>
                Le Grand-Duché de Luxembourg est membre de la zone SEPA et ses banques supportent
                les virements SEPA via codes QR EPC. Les entreprises, freelances et associations
                luxembourgeois utilisent le code QR EPC sur leurs factures pour faciliter les
                paiements de leurs clients en zone euro.
              </p>
              <p>
                Le Luxembourg est un centre financier international: de nombreux comptes en EUR
                acceptent les virements SEPA standardisés via code QR, que le payeur soit au
                Luxembourg ou dans un autre pays SEPA.
              </p>
              <h3>Format IBAN luxembourgeois</h3>
              <p>
                Les IBAN luxembourgeois commencent par <strong>LU</strong>, suivis de 18
                caractères alphanumériques. Longueur totale: <strong>20 caractères</strong> (ex.{' '}
                <code>LU280019400644750000</code>).
              </p>
            </>
          ),
        },
        banksHeadline: 'Banques luxembourgeoises supportant le QR EPC',
        banks: [
          { name: 'Spuerkeess (BCEE)', app: 'Spuerkeess Mobile' },
          { name: 'BGL BNP Paribas', app: 'BGL BNP Paribas Mobile' },
          { name: 'ING Luxembourg', app: 'ING Luxembourg App' },
        ],
        howToHeadline: 'Comment créer un code QR EPC pour le Luxembourg',
        howToJsonLdName: 'Créer un code QR EPC pour le Luxembourg',
        howToSteps: [
          {
            title: 'Saisir IBAN et nom du bénéficiaire',
            description:
              'Entrez votre IBAN luxembourgeois (commençant par LU) et le nom du bénéficiaire.',
          },
          {
            title: 'Ajouter montant et référence',
            description:
              'Entrez optionnellement le montant en EUR et une référence de paiement.',
          },
          {
            title: 'Générer le code QR',
            description:
              'Téléchargez le code QR en PNG ou intégrez-le dans une facture PDF.',
          },
        ],
        faqHeadline: 'FAQ – Code QR EPC au Luxembourg',
        faqs: [
          {
            q: 'Les banques luxembourgeoises supportent-elles le QR EPC?',
            a: 'Oui. Spuerkeess, BGL BNP Paribas et ING Luxembourg supportent le scan de codes QR EPC pour les virements SEPA selon la norme EPC069-12.',
          },
          {
            q: 'Quel est le format IBAN luxembourgeois?',
            a: 'Les IBAN luxembourgeois commencent par LU, suivis de 18 caractères alphanumériques. La longueur totale est de 20 caractères.',
          },
          {
            q: 'Le code QR EPC est-il gratuit au Luxembourg?',
            a: 'Oui. La création sur girocodegenerator.com est gratuite et les virements SEPA n\'entraînent pas de frais de transaction pour le bénéficiaire.',
          },
        ],
        ctaText: 'Créer un code QR EPC →',
        ctaHref: '/fr',
        relatedLinks: [
          { href: '/fr/code-qr-epc-france', label: 'Code QR EPC France' },
          { href: '/fr/code-qr-epc-belgique', label: 'Code QR EPC Belgique' },
          { href: '/fr/code-qr-epc-suisse', label: 'Code QR EPC Suisse' },
        ],
      }}
    />
  );
}
