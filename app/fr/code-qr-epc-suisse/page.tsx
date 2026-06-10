import type { Metadata } from 'next';
import { CountryEpcLanding, countryAlternates } from '../../../components/CountryEpcLanding';

const SLUG = 'code-qr-epc-suisse';
const LOCALE = 'fr' as const;

export const metadata: Metadata = {
  title: 'Code QR EPC Suisse – Virement SEPA vs QR-facture 2026',
  description:
    'Code QR EPC pour virements SEPA depuis la Suisse. Différence entre QR-facture suisse et code QR EPC expliquée. Gratuit, sans inscription.',
  alternates: countryAlternates(SLUG, LOCALE),
};

export default function CodeQrEpcSuissePage() {
  return (
    <CountryEpcLanding
      content={{
        slug: SLUG,
        locale: LOCALE,
        breadcrumbLabel: 'Code QR EPC Suisse',
        badge: 'Suisse · EPC069-12 · QR-facture',
        h1: 'Code QR EPC en Suisse – SEPA et QR-facture',
        shortAnswer:
          "La Suisse utilise deux systèmes QR différents: le QR-facture suisse (pour les paiements internes en CHF) et le code QR EPC (pour les virements SEPA en EUR). Pour envoyer de l'argent vers un pays SEPA depuis la Suisse, le code QR EPC (standard EPC069-12) est utilisé avec les IBAN européens en EUR.",
        stats: [
          { value: 'CHF / EUR', label: 'Devises selon le système' },
          { value: 'EPC069-12', label: 'Standard code QR EPC' },
          { value: 'ISO 20022', label: 'Standard QR-facture' },
          { value: '36', label: 'Pays zone SEPA' },
        ],
        introSection: {
          title: 'QR-facture suisse vs Code QR EPC – Comparaison',
          body: (
            <>
              <p>
                En Suisse, il est important de distinguer deux systèmes de paiement par QR code.
                Le <strong>QR-facture suisse</strong> (QR-Bill) sert aux paiements domestiques en
                francs suisses, tandis que le <strong>code QR EPC</strong> sert aux virements
                SEPA en euros vers des comptes européens.
              </p>
              <div className="not-prose my-6 overflow-x-auto rounded-xl border border-[#1f2431]">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[#1f2431] bg-[#121318]">
                      <th className="px-4 py-3 font-bold text-[#e8eaf0]" />
                      <th className="px-4 py-3 font-bold text-emerald-400">Code QR EPC</th>
                      <th className="px-4 py-3 font-bold text-slate-400">QR-facture suisse</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-[#1f2431]">
                      <td className="px-4 py-3 font-medium">Devise</td>
                      <td className="px-4 py-3 text-emerald-400">EUR</td>
                      <td className="px-4 py-3">CHF</td>
                    </tr>
                    <tr className="border-b border-[#1f2431]">
                      <td className="px-4 py-3 font-medium">Zone</td>
                      <td className="px-4 py-3 text-emerald-400">SEPA (36 pays)</td>
                      <td className="px-4 py-3">Suisse uniquement</td>
                    </tr>
                    <tr className="border-b border-[#1f2431]">
                      <td className="px-4 py-3 font-medium">Standard</td>
                      <td className="px-4 py-3 text-emerald-400">EPC069-12</td>
                      <td className="px-4 py-3">ISO 20022</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Usage</td>
                      <td className="px-4 py-3 text-emerald-400">Virements SEPA</td>
                      <td className="px-4 py-3">Paiements suisses</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Si vous recevez des paiements en EUR depuis la Suisse ou d&apos;autres pays SEPA,
                utilisez un code QR EPC avec votre IBAN européen en EUR. Pour les paiements
                domestiques suisses en CHF, le QR-facture suisse reste le standard approprié.
              </p>
            </>
          ),
        },
        banksHeadline: 'Banques suisses et virements SEPA',
        banks: [
          { name: 'UBS', app: 'UBS Mobile Banking' },
          { name: 'PostFinance', app: 'PostFinance App' },
          { name: 'Raiffeisen', app: 'Raiffeisen E-Banking' },
        ],
        howToHeadline: 'Comment créer un code QR EPC pour la Suisse',
        howToJsonLdName: 'Créer un code QR EPC pour virements SEPA depuis la Suisse',
        howToSteps: [
          {
            title: 'Utiliser un IBAN européen en EUR',
            description:
              'Pour les virements SEPA, utilisez un IBAN en EUR (ex. compte en Allemagne, France ou Luxembourg). Le QR-facture suisse ne remplace pas le code QR EPC pour les paiements SEPA.',
          },
          {
            title: 'Créer le code QR EPC',
            description:
              'Entrez l\'IBAN EUR, le nom du bénéficiaire, le montant et la référence dans le générateur gratuit.',
          },
          {
            title: 'Partager avec les payeurs suisses',
            description:
              'Les payeurs en Suisse scannent le code QR EPC avec leur app bancaire pour initier un virement SEPA en EUR.',
          },
        ],
        faqHeadline: 'FAQ – Code QR EPC en Suisse',
        faqs: [
          {
            q: 'Quelle est la différence entre QR-facture et code QR EPC?',
            a: 'Le QR-facture suisse (QR-Bill) sert aux paiements domestiques en CHF selon ISO 20022. Le code QR EPC sert aux virements SEPA en EUR selon EPC069-12. Ce sont deux systèmes différents.',
          },
          {
            q: 'Puis-je utiliser un code QR EPC pour recevoir des paiements depuis la Suisse?',
            a: 'Oui, si vous avez un compte bancaire en EUR dans la zone SEPA. Les payeurs suisses peuvent scanner le code QR EPC et effectuer un virement SEPA en EUR.',
          },
          {
            q: 'Le code QR EPC est-il gratuit?',
            a: 'Oui. La création sur girocodegenerator.com est gratuite, sans inscription ni partage de données.',
          },
        ],
        ctaText: 'Créer un code QR EPC →',
        ctaHref: '/fr',
        relatedLinks: [
          { href: '/fr/code-qr-epc-france', label: 'Code QR EPC France' },
          { href: '/fr/code-qr-epc-luxembourg', label: 'Code QR EPC Luxembourg' },
          { href: '/fr/wissen/girocode', label: 'Qu\'est-ce qu\'un GiroCode?' },
        ],
      }}
    />
  );
}
