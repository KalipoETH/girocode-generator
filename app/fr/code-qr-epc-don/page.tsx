import type { Metadata } from 'next';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'code-qr-epc-don';
const LOCALE = 'fr' as const;

export const metadata: Metadata = {
  title: 'Code QR EPC pour Dons – Collecte de fonds SEPA Gratuit 2026',
  description:
    'Créez un code QR EPC pour dons et collectes de fonds SEPA. Donateurs scannent et donnent sans frais. Pas de PayPal nécessaire.',
  alternates: seoAlternates(SLUG, LOCALE),
};

export default function CodeQrEpcDonPage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        locale: LOCALE,
        breadcrumbLabel: 'Code QR EPC pour dons',
        badge: 'Dons · Collecte de fonds · SEPA',
        h1: 'Code QR EPC pour Dons et Collectes de Fonds',
        shortAnswer:
          'Un code QR EPC pour les dons permet aux supporters de contribuer par virement SEPA en scannant simplement un QR code avec leur app bancaire. Contrairement à PayPal, il n\'y a aucun frais de transaction. Le montant peut rester vide pour laisser le donateur choisir sa contribution.',
        stats: [
          { value: '0 €', label: 'Frais de transaction' },
          { value: 'EPC069-12', label: 'Standard officiel' },
          { value: 'Libre', label: 'Montant optionnel' },
          { value: '36', label: 'Pays zone SEPA' },
        ],
        body: (
          <>
            <h2>Pourquoi utiliser un code QR EPC pour les dons?</h2>
            <p>
              Les méthodes de don traditionnelles comportent souvent des frais ou des barrières.
              PayPal prélève 1,9 à 3,4 % par transaction. Les virements manuels sont gratuits mais
              peu pratiques – les donateurs oublient, se trompent d&apos;IBAN ou abandonnent.
            </p>
            <p>
              Un <strong>code QR EPC pour les dons</strong> combine zéro frais (virement SEPA
              direct) et maximum de simplicité (scan et paiement en secondes). Imprimez le QR sur
              des flyers, affiches d&apos;événements ou votre site web.
            </p>

            <h2>QR EPC vs PayPal pour les dons</h2>
            <div className="not-prose my-6 overflow-x-auto rounded-xl border border-[#1f2431]">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#1f2431] bg-[#121318]">
                    <th className="px-4 py-3 font-bold text-[#e8eaf0]">Critère</th>
                    <th className="px-4 py-3 font-bold text-emerald-400">QR EPC</th>
                    <th className="px-4 py-3 font-bold text-slate-400">PayPal</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-[#1f2431]">
                    <td className="px-4 py-3 font-medium">Frais</td>
                    <td className="px-4 py-3 text-emerald-400">Gratuit, virement direct</td>
                    <td className="px-4 py-3">1,9–3,4 % de frais</td>
                  </tr>
                  <tr className="border-b border-[#1f2431]">
                    <td className="px-4 py-3 font-medium">Compte requis</td>
                    <td className="px-4 py-3 text-emerald-400">Non – tout compte bancaire</td>
                    <td className="px-4 py-3">Compte PayPal requis</td>
                  </tr>
                  <tr className="border-b border-[#1f2431]">
                    <td className="px-4 py-3 font-medium">Hors ligne</td>
                    <td className="px-4 py-3 text-emerald-400">Oui – imprimable sur affiches</td>
                    <td className="px-4 py-3">Paiement en ligne uniquement</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Montant libre</td>
                    <td className="px-4 py-3 text-emerald-400">Oui – laisser le montant vide</td>
                    <td className="px-4 py-3">Montants fixes uniquement</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Configurer un QR code de don</h2>
            <p>
              Entrez l&apos;IBAN et le nom de votre association ou campagne, laissez le montant
              vide pour les dons libres, ajoutez une référence comme « Don » et générez le code QR.
              Imprimez-le ou intégrez-le sur votre site web.
            </p>
          </>
        ),
        howTo: {
          name: 'Créer un code QR EPC pour les dons',
          headline: 'Créez votre QR code de don en 3 étapes',
          steps: [
            {
              title: 'Entrer l\'IBAN et le nom de l\'organisation',
              description:
                'Saisissez l\'IBAN et le nom de votre association, ONG ou campagne de collecte.',
            },
            {
              title: 'Laisser le montant vide pour les dons libres',
              description:
                'Laissez le champ montant vide pour que les donateurs choisissent leur contribution.',
            },
            {
              title: 'Imprimer ou partager le QR code',
              description:
                'Téléchargez le PNG et ajoutez-le à des flyers, affiches ou votre site web.',
            },
          ],
        },
        faqs: [
          {
            q: 'Les codes QR EPC pour dons sont-ils gratuits?',
            a: 'Oui. La création est gratuite et les virements SEPA n\'entraînent aucun frais pour le bénéficiaire, contrairement à PayPal.',
          },
          {
            q: 'Les donateurs peuvent-ils choisir leur montant?',
            a: 'Oui. Laissez le champ montant vide. Le donateur saisit son montant dans son app bancaire après le scan.',
          },
          {
            q: 'Le QR EPC est-il meilleur que PayPal pour les dons?',
            a: 'Pour les dons SEPA, oui: zéro frais, pas de compte PayPal requis, fonctionne sur supports imprimés et atteint toute personne avec un compte bancaire européen.',
          },
        ],
        ctas: [{ href: '/fr', label: 'Créer un code QR EPC pour dons →' }],
        relatedLinks: [
          { href: '/fr/spenden', label: 'GiroCode pour dons' },
          { href: '/fr/girocode-vs-paypal', label: 'GiroCode vs PayPal' },
          { href: '/fr/verein', label: 'GiroCode pour associations' },
        ],
      }}
    />
  );
}
