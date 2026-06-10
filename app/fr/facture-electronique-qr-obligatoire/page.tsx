import type { Metadata } from 'next';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'facture-electronique-qr-obligatoire';

export const metadata: Metadata = {
  title: 'Facture Électronique QR Obligatoire en France 2026-2028',
  description:
    'La France rend les QR codes SEPA obligatoires sur les factures d\'ici 2026-2028 (initiative ViDA). Créez gratuitement des QR codes conformes maintenant.',
  alternates: seoAlternates(SLUG, 'fr'),
};

export default function FactureElectroniqueQrObligatoirePage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        locale: 'fr',
        breadcrumbLabel: 'QR Obligatoire sur Factures',
        badge: 'ViDA · France · 2026-2028',
        h1: 'QR Code EPC sur Factures – Bientôt Obligatoire en France',
        shortAnswer:
          "L'initiative ViDA (TVA à l'ère numérique) de l'UE rend les QR codes SEPA obligatoires sur les factures professionnelles. La France doit se conformer d'ici 2026-2028. La Slovénie les exige déjà. Créer un QR code EPC conforme est gratuit et prend 10 secondes.",
        stats: [
          { value: '2024', label: 'Slovénie: déjà obligatoire' },
          { value: '2026-28', label: 'France & Allemagne' },
          { value: '2030', label: 'Tous les pays UE (ViDA)' },
          { value: 'Gratuit', label: 'Coût de conformité' },
        ],
        body: (
          <>
            <h2>Préparez-vous à la Facture Électronique avec QR SEPA</h2>
            <p>
              La France introduira progressivement l&apos;obligation des QR codes SEPA sur les
              factures professionnelles dans le cadre de l&apos;initiative ViDA de l&apos;UE.
              Anticipez dès maintenant en ajoutant des codes QR EPC conformes à vos factures.
            </p>
          </>
        ),
        faqs: [
          {
            q: 'Le QR code SEPA sera-t-il obligatoire sur les factures en France ?',
            a: 'Oui, dans le cadre de ViDA. La France doit se conformer entre 2026 et 2028.',
          },
          {
            q: 'Comment créer un QR code EPC conforme ?',
            a: 'Utilisez girocodegenerator.com/fr : saisissez IBAN, nom, montant et référence – gratuit, sans inscription.',
          },
        ],
        ctas: [{ href: '/fr', label: 'Créer un QR code EPC conforme →' }],
        relatedLinks: [
          { href: '/fr/code-qr-epc-facture', label: 'Code QR EPC sur Facture' },
          { href: '/en/mandatory-sepa-qr-invoice', label: 'Mandatory SEPA QR (EN)' },
        ],
      }}
    />
  );
}
