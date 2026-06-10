import type { Metadata } from 'next';
import Link from 'next/link';
import { CountryEpcLanding, countryAlternates } from '../../../components/CountryEpcLanding';

const SLUG = 'code-qr-epc-france';
const LOCALE = 'fr' as const;

export const metadata: Metadata = {
  title: 'Générateur Code QR EPC France – Virement SEPA Gratuit 2026',
  description:
    'Créez un code QR EPC pour virements SEPA en France gratuitement. Compatible avec toutes les apps bancaires françaises: BNP Paribas, Crédit Agricole, Société Générale, LCL, La Banque Postale.',
  alternates: countryAlternates(SLUG, LOCALE),
};

export default function CodeQrEpcFrancePage() {
  return (
    <CountryEpcLanding
      content={{
        slug: SLUG,
        locale: LOCALE,
        breadcrumbLabel: 'Code QR EPC France',
        badge: 'France · EPC069-12 · SEPA',
        h1: 'Générateur de Code QR EPC pour la France',
        shortAnswer:
          'Le code QR EPC (European Payments Council) est un standard européen pour les virements SEPA. En France, il est compatible avec les applications bancaires des principales banques: BNP Paribas, Crédit Agricole, Société Générale, LCL et La Banque Postale. Les IBAN français commencent par FR et comportent 27 caractères.',
        stats: [
          { value: 'FR', label: 'Préfixe IBAN français' },
          { value: '27 chiffres', label: 'Longueur IBAN France' },
          { value: 'EPC069-12', label: 'Standard officiel' },
          { value: '2016', label: 'Migration SEPA complétée' },
        ],
        introSection: {
          title: 'Le code QR EPC en France',
          body: (
            <>
              <p>
                La France fait partie de la zone SEPA depuis 2016. Les banques françaises ont
                intégré le scan de codes QR EPC dans leurs applications mobiles, permettant aux
                particuliers et aux entreprises de recevoir des virements SEPA en scannant
                simplement un code QR sur une facture, un site web ou un support imprimé.
              </p>
              <p>
                Lorsqu&apos;un payeur scanne le code, son application bancaire remplit
                automatiquement le nom du bénéficiaire, l&apos;IBAN français, le montant et la
                référence de paiement – réduisant les erreurs de saisie et accélérant les
                encaissements.
              </p>
              <h3>Format IBAN français</h3>
              <p>
                Les IBAN français commencent par <strong>FR</strong>, suivis de 25 caractères
                alphanumériques (2 chiffres de contrôle + 23 caractères du compte). La longueur
                totale est de <strong>27 caractères</strong> (ex.{' '}
                <code>FR7630006000011234567890189</code>).
              </p>
              <h3>Factures avec code QR EPC en France</h3>
              <p>
                Sur les factures françaises, le code QR EPC complète les mentions obligatoires
                sans les remplacer. Une facture conforme doit toujours inclure:
              </p>
              <ul>
                <li>Numéro de facture et date d&apos;émission</li>
                <li>Identité du vendeur (SIREN/SIRET, numéro de TVA intracommunautaire)</li>
                <li>Identité de l&apos;acheteur</li>
                <li>Description des biens ou services, montant HT, TVA et montant TTC</li>
                <li>IBAN et conditions de paiement</li>
              </ul>
              <p>
                Selon les recommandations EPC, placez le code QR en <strong>coin inférieur
                droit</strong> de la facture, avec une taille minimale de 2×2 cm. Utilisez notre{' '}
                <Link href="/fr/rechnungs-editor">générateur de facture PDF</Link> pour intégrer
                automatiquement le QR au bon emplacement.
              </p>
            </>
          ),
        },
        banksHeadline: 'Banques françaises supportant le code QR EPC',
        banks: [
          { name: 'BNP Paribas', app: 'BNP Paribas Mobile' },
          { name: 'Crédit Agricole', app: 'MA Banque' },
          { name: 'Société Générale', app: 'Société Générale' },
          { name: 'LCL', app: 'LCL Mes Comptes' },
          { name: 'La Banque Postale', app: "L'Appli Postale" },
        ],
        howToHeadline: 'Comment créer un code QR EPC pour la France',
        howToJsonLdName: 'Créer un code QR EPC pour la France',
        howToSteps: [
          {
            title: 'Saisir IBAN et nom du bénéficiaire',
            description:
              'Ouvrez le générateur gratuit et entrez votre IBAN français (commençant par FR) et le nom du bénéficiaire tel qu\'il apparaît sur votre compte bancaire.',
          },
          {
            title: 'Ajouter montant et référence',
            description:
              'Entrez optionnellement le montant en EUR et une référence de paiement (ex. numéro de facture). Les deux champs peuvent rester vides pour les dons ouverts.',
          },
          {
            title: 'Générer et intégrer sur la facture',
            description:
              'Cliquez sur Générer pour créer le code QR EPC instantanément. Téléchargez en PNG ou utilisez le générateur PDF pour l\'intégrer en bas à droite de votre facture.',
          },
        ],
        faqHeadline: 'FAQ – Code QR EPC en France',
        faqs: [
          {
            q: 'Les apps bancaires françaises supportent-elles le QR EPC?',
            a: 'Oui. Les principales applications bancaires françaises – BNP Paribas Mobile, MA Banque (Crédit Agricole), Société Générale, LCL Mes Comptes et L\'Appli Postale – supportent le scan de codes QR EPC pour les virements SEPA selon la norme EPC069-12.',
          },
          {
            q: 'Quel est le format IBAN français?',
            a: 'Les IBAN français commencent par FR, suivis de 25 caractères alphanumériques. La longueur totale est de 27 caractères, ex. FR7630006000011234567890189.',
          },
          {
            q: 'Peut-on utiliser un QR EPC sur une facture française?',
            a: 'Oui. Le code QR EPC est largement utilisé sur les factures françaises. Placez-le en coin inférieur droit, taille minimale 2×2 cm. Le client scanne avec son app bancaire pour payer instantanément.',
          },
          {
            q: 'Quelle est la différence entre GiroCode et code QR EPC?',
            a: 'GiroCode est le nom de marque allemand du code QR EPC. En Autriche il s\'appelle Stuzza QR, en France et en Belgique c\'est simplement code QR EPC ou QR SEPA. Tous suivent le même standard EPC069-12.',
          },
          {
            q: 'Le code QR EPC est-il gratuit en France?',
            a: 'Oui. La création de codes QR EPC sur girocodegenerator.com est entièrement gratuite. Les virements SEPA n\'entraînent aucun frais de transaction pour le bénéficiaire.',
          },
        ],
        ctaText: 'Créer un code QR EPC →',
        ctaHref: '/fr',
        relatedLinks: [
          { href: '/fr/code-qr-epc-belgique', label: 'Code QR EPC Belgique' },
          { href: '/fr/code-qr-epc-facture', label: 'Code QR EPC sur facture' },
          { href: '/fr/code-qr-sepa-freelance', label: 'Code QR SEPA pour freelances' },
          { href: '/fr/wissen/girocode', label: 'Qu\'est-ce qu\'un GiroCode?' },
        ],
      }}
    />
  );
}
