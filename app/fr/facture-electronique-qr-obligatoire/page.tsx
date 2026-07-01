import type { Metadata } from 'next';
import Link from 'next/link';
import { SeoContentLanding } from '@/components/SeoContentLanding';
import { SITE_URL } from '@/lib/siteConfig';

const SLUG = 'facture-electronique-qr-obligatoire';

const alternateUrls = {
  de: `${SITE_URL}/sepa-qr-pflicht`,
  en: `${SITE_URL}/en/mandatory-sepa-qr-invoice`,
  es: `${SITE_URL}/es/factura-electronica-qr-obligatorio`,
  fr: `${SITE_URL}/fr/${SLUG}`,
};

export const metadata: Metadata = {
  title: 'Le QR code SEPA est-il obligatoire ? Le point sur la situation (2026)',
  description:
    "Le QR code SEPA/EPC est-il obligatoire par la loi sur les factures ? Le point sur ViDA, la Slovénie et la véritable obligation allemande de facturation électronique.",
  alternates: {
    canonical: alternateUrls.fr,
    languages: {
      'x-default': alternateUrls.fr,
      ...alternateUrls,
    },
  },
};

export default function FactureElectroniqueQrObligatoirePage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        locale: 'fr',
        breadcrumbLabel: 'QR SEPA obligatoire – Vérification',
        badge: 'Vérification des faits · ViDA & QR SEPA',
        h1: 'Le QR code SEPA est-il obligatoire sur les factures ? Le point (2026)',
        shortAnswer:
          "Non. Ni ViDA ni aucune autre règle européenne n'impose aujourd'hui un QR code de paiement (SEPA-QR/EPC-QR) sur les factures. Ce qui existe réellement : une adoption volontaire en forte croissance, ainsi qu'une obligation bien réelle mais totalement différente en Allemagne, portant sur le format de la facture (XRechnung/ZUGFeRD, 2025-2028).",
        stats: [
          { value: 'Aucune connue', label: 'Loi UE imposant le QR code de paiement' },
          { value: '2016', label: 'Slovénie : ZDavPR (fiscalisation, pas de QR)' },
          { value: '2030', label: "Échéance ViDA facturation électronique (XML, pas de QR)" },
          { value: 'Volontaire', label: "Adoption du QR SEPA/GiroCode aujourd'hui" },
        ],
        body: (
          <>
            <h2>Ce qui est souvent affirmé – et ce qui s&apos;applique réellement</h2>
            <div className="not-prose overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#1f2431] text-left text-slate-300">
                    <th className="py-3 pr-4 font-semibold">Souvent affirmé</th>
                    <th className="py-3 font-semibold">Ce qui s&apos;applique réellement</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-[#1f2431]">
                    <td className="py-3 pr-4 font-medium text-slate-300">
                      « ViDA rend les QR codes SEPA obligatoires sur les factures dans
                      toute l&apos;UE »
                    </td>
                    <td className="py-3">
                      ViDA impose des factures électroniques structurées (XML selon la
                      norme EN&nbsp;16931) pour les transactions B2B transfrontalières à
                      partir du 1<sup>er</sup> juillet 2030. Le règlement ne mentionne nulle
                      part un QR code de paiement.
                    </td>
                  </tr>
                  <tr className="border-b border-[#1f2431]">
                    <td className="py-3 pr-4 font-medium text-slate-300">
                      « La Slovénie exige le QR SEPA depuis 2024 »
                    </td>
                    <td className="py-3">
                      La véritable norme slovène, la ZDavPR, est en vigueur depuis 2016 et
                      encadre la déclaration fiscale (fiscalisation) des factures – pas une
                      obligation de QR code de paiement.
                    </td>
                  </tr>
                  <tr className="border-b border-[#1f2431]">
                    <td className="py-3 pr-4 font-medium text-slate-300">
                      « La France et l&apos;Allemagne rendront le QR SEPA obligatoire entre
                      2026 et 2028 »
                    </td>
                    <td className="py-3">
                      Aucune base légale connue n&apos;impose un QR code de paiement.
                      L&apos;Allemagne et la France ont toutefois chacune une obligation
                      bien réelle, mais différente : l&apos;Allemagne impose{' '}
                      <Link
                        href="/wissen/rechnung"
                        className="text-sky-400 underline hover:text-sky-300"
                      >
                        une obligation de facturation électronique portant sur le format
                        de la facture
                      </Link>{' '}
                      (XRechnung/ZUGFeRD, 2025-2028, guide en allemand). La France instaure,
                      à partir de septembre 2026, l&apos;obligation de réception des
                      factures électroniques pour toutes les entreprises, avec une
                      obligation d&apos;émission pour les grandes et moyennes entreprises
                      (format Factur-X, UBL 2.1 ou CII, conforme à la norme EN 16931) –
                      étendue aux PME et micro-entreprises à partir de septembre 2027 (art.
                      153 de la loi de finances 2020, DGFiP).
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-300">
                      « Tous les pays de l&apos;UE doivent adopter le QR SEPA d&apos;ici
                      2030 »
                    </td>
                    <td className="py-3">
                      L&apos;échéance 2030 de ViDA concerne le <em>format</em> de la
                      facture électronique (XML), pas les QR codes de paiement.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Même sans obligation légale, les QR codes SEPA (GiroCodes) font gagner du
              temps : le destinataire scanne le code avec son application bancaire au lieu
              de saisir manuellement l&apos;IBAN et le montant. C&apos;est pourquoi de plus
              en plus d&apos;émetteurs de factures les adoptent volontairement,
              indépendamment de toute obligation légale.
            </p>
          </>
        ),
        faqs: [
          {
            q: 'Le QR code SEPA sera-t-il obligatoire sur les factures ?',
            a: "En l'état actuel, non. L'initiative ViDA de l'UE encadre les formats de facturation électronique structurés (XML selon la norme EN 16931), pas les QR codes de paiement. L'affirmation souvent citée d'une obligation « depuis 2024 » en Slovénie renvoie en réalité à une autre loi (ZDavPR, fiscalisation), pas à une obligation de QR code.",
          },
          {
            q: "Qu'en est-il de l'obligation allemande de facturation électronique ?",
            a: "Il s'agit d'un sujet réel, mais distinct : à partir de 2025-2028, l'Allemagne exige progressivement des factures électroniques structurées au format XRechnung ou ZUGFeRD. Cela concerne le format de la facture, pas un QR code de paiement. Voir notre guide en allemand « GiroCode auf Rechnungen » pour plus de détails.",
          },
          {
            q: 'Comment créer un QR code EPC conforme ?',
            a: 'Utilisez girocodegenerator.com/fr : saisissez IBAN, nom, montant et référence – gratuit, sans inscription, 100 % local dans le navigateur.',
          },
        ],
        ctas: [{ href: '/fr', label: 'Créer un QR code SEPA gratuitement →' }],
        relatedLinks: [
          { href: '/fr/code-qr-epc-facture', label: 'Code QR EPC sur Facture' },
          { href: '/sepa-qr-pflicht', label: 'Deutsche Version' },
          { href: '/en/mandatory-sepa-qr-invoice', label: 'English version' },
          { href: '/es/factura-electronica-qr-obligatorio', label: 'Versión en español' },
        ],
      }}
    />
  );
}
