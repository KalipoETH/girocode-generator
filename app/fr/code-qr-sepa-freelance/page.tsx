import type { Metadata } from 'next';
import Link from 'next/link';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'code-qr-sepa-freelance';
const LOCALE = 'fr' as const;

export const metadata: Metadata = {
  title: 'Code QR SEPA pour Freelances – Factures Payées Plus Vite 2026',
  description:
    'Les freelances utilisent le code QR EPC sur leurs factures pour être payés plus rapidement. Clients scannent et paient en secondes. Gratuit.',
  alternates: seoAlternates(SLUG, LOCALE),
};

export default function CodeQrSepaFreelancePage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        locale: LOCALE,
        breadcrumbLabel: 'Code QR SEPA pour freelances',
        badge: 'Freelances · Indépendants · SEPA',
        h1: 'Code QR EPC pour Freelances – Paiements Plus Rapides',
        shortAnswer:
          "Les freelances ajoutent un code QR EPC à leurs factures pour que les clients paient en scannant avec leur app bancaire. L'IBAN, le montant et la référence sont pré-remplis automatiquement – fini les erreurs de saisie, les retards de paiement et les relances.",
        stats: [
          { value: '10 sec.', label: 'Temps de paiement client' },
          { value: '0 €', label: 'Frais pour vous et le client' },
          { value: 'EPC069-12', label: 'Standard officiel' },
          { value: '100%', label: 'Local – aucun partage de données' },
        ],
        body: (
          <>
            <h2>Le problème des paiements freelance</h2>
            <p>
              Chaque freelance connaît la frustration: le travail est fait, la facture envoyée –
              mais le paiement met des semaines. Trois problèmes courants:
            </p>
            <div className="not-prose my-6 space-y-3">
              {[
                {
                  title: 'Les clients se trompent dans votre IBAN',
                  desc: 'La saisie manuelle de l\'IBAN provoque des virements échoués. Vous perdez du temps à investiguer et renvoyer les coordonnées.',
                },
                {
                  title: 'Les paiements arrivent en retard',
                  desc: 'Saisir les coordonnées bancaires semble être un effort. Les clients repoussent le paiement – et vous devez relancer.',
                },
                {
                  title: 'Références de paiement incorrectes',
                  desc: 'Sans le bon numéro de facture dans la référence, vous ne pouvez pas rapprocher les paiements en comptabilité.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-xl border border-rose-500/20 bg-rose-500/5 p-4"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/15 text-rose-300"
                  >
                    ✕
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#e8eaf0]">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2>La solution: code QR EPC sur chaque facture</h2>
            <p>
              Un <strong>code QR EPC</strong> sur votre facture résout ces trois problèmes. Votre
              client ouvre son app bancaire, scanne le QR, et le formulaire de virement est
              pré-rempli avec votre IBAN, le montant exact et le numéro de facture. Il vérifie et
              confirme – paiement effectué en moins de 10 secondes.
            </p>

            <h2>Factures professionnelles avec QR intégré</h2>
            <p>
              Utilisez notre{' '}
              <Link href="/fr/rechnungs-editor">générateur de facture PDF</Link> pour créer des
              factures professionnelles avec un code QR EPC intégré en bas à droite. Envoyez le PDF
              par e-mail – votre client paie immédiatement.
            </p>
          </>
        ),
        howTo: {
          name: 'Ajouter un code QR EPC à une facture freelance',
          headline: 'Soyez payé plus vite en 3 étapes',
          steps: [
            {
              title: 'Saisir IBAN et détails de facture',
              description:
                'Entrez votre IBAN, nom, montant et numéro de facture comme référence de paiement.',
            },
            {
              title: 'Générer le QR ou la facture PDF',
              description:
                'Créez le QR en PNG ou utilisez le générateur PDF pour une facture prête à envoyer.',
            },
            {
              title: 'Envoyer au client et être payé',
              description:
                'Envoyez la facture PDF. Le client scanne le QR et paie en secondes – sans erreur d\'IBAN.',
            },
          ],
        },
        faqs: [
          {
            q: 'Le code QR EPC fonctionne-t-il pour les clients internationaux?',
            a: 'Oui, dans les 36 pays SEPA: France, Belgique, Allemagne, Espagne, Luxembourg et tous les autres membres SEPA.',
          },
          {
            q: 'Le générateur est-il gratuit pour les freelances?',
            a: 'Oui, entièrement gratuit. Sans inscription, sans abonnement, sans frais par transaction.',
          },
          {
            q: 'Puis-je inclure le numéro de facture dans le QR?',
            a: 'Oui. Entrez le numéro de facture dans le champ référence de paiement – il sera pré-rempli au scan.',
          },
        ],
        ctas: [
          { href: '/fr', label: 'Créer un code QR EPC →' },
          { href: '/fr/rechnungs-editor', label: 'Créer une facture PDF →', primary: false },
        ],
        relatedLinks: [
          { href: '/fr/freelancer', label: 'GiroCode pour freelances' },
          { href: '/fr/code-qr-epc-facture', label: 'Code QR EPC sur facture' },
          { href: '/fr/code-qr-epc-france', label: 'Code QR EPC France' },
        ],
      }}
    />
  );
}
