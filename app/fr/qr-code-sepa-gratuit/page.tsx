import type { Metadata } from 'next';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'qr-code-sepa-gratuit';

export const metadata: Metadata = {
  title: 'QR Code SEPA Gratuit – Sans Inscription 2026',
  description:
    'QR code SEPA (EPC) gratuit: Sans inscription, sans abonnement, sans partage de données. Créez des QR codes EPC directement dans votre navigateur.',
  alternates: seoAlternates(SLUG, 'fr'),
};

export default function QrCodeSepaGratuitPage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        locale: 'fr',
        breadcrumbLabel: 'QR Code SEPA Gratuit',
        badge: '100% Gratuit · Sans Inscription',
        h1: 'QR Code SEPA Gratuit – Sans Inscription',
        shortAnswer:
          'Créez des QR codes SEPA entièrement gratuits – sans inscription, sans abonnement, sans partage de données. Tout le traitement se fait localement dans votre navigateur.',
        stats: [
          { value: '0 €', label: 'Toujours gratuit' },
          { value: '0', label: 'Inscription requise' },
          { value: '100%', label: 'Confidentialité locale' },
          { value: '∞', label: 'QR codes illimités' },
        ],
        body: (
          <>
            <h2>Pourquoi Notre QR Code SEPA est Vraiment Gratuit</h2>
            <ul>
              <li>Sans frais d&apos;abonnement</li>
              <li>Sans compte requis</li>
              <li>Sans publicités</li>
              <li>Sans partage de données</li>
              <li>QR codes illimités</li>
            </ul>
          </>
        ),
        faqs: [
          {
            q: 'Le générateur QR SEPA est-il vraiment gratuit ?',
            a: 'Oui, entièrement gratuit – sans abonnement, sans frais cachés, sans inscription.',
          },
          {
            q: 'Mes données bancaires sont-elles partagées ?',
            a: 'Non. Tout est traité 100% localement dans votre navigateur.',
          },
        ],
        ctas: [{ href: '/fr', label: 'Créer QR Code SEPA Gratuit →' }],
        relatedLinks: [
          { href: '/fr/creer-code-qr-epc', label: 'Créer Code QR EPC' },
          { href: '/fr/facture-electronique-qr-obligatoire', label: 'QR Obligatoire sur Factures' },
        ],
      }}
    />
  );
}
