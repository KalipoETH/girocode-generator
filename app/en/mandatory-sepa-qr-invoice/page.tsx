import type { Metadata } from 'next';
import Link from 'next/link';
import { SeoContentLanding } from '@/components/SeoContentLanding';
import { SITE_URL } from '@/lib/siteConfig';

const SLUG = 'mandatory-sepa-qr-invoice';

const alternateUrls = {
  de: `${SITE_URL}/sepa-qr-pflicht`,
  en: `${SITE_URL}/en/${SLUG}`,
  es: `${SITE_URL}/es/factura-electronica-qr-obligatorio`,
  fr: `${SITE_URL}/fr/facture-electronique-qr-obligatoire`,
};

export const metadata: Metadata = {
  title: 'Is the SEPA QR Code Mandatory? The Facts (2026)',
  description:
    'Is the SEPA/EPC QR code on invoices legally mandatory? The current facts on ViDA, Slovenia, and Germany\'s real e-invoicing mandate – explained honestly.',
  alternates: {
    canonical: alternateUrls.en,
    languages: {
      'x-default': alternateUrls.en,
      ...alternateUrls,
    },
  },
};

export default function MandatorySepaQrInvoicePage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        locale: 'en',
        breadcrumbLabel: 'SEPA QR Mandate – Fact Check',
        badge: 'Fact-Check · ViDA & SEPA-QR',
        h1: 'Is the SEPA QR Code Mandatory on Invoices? The Facts (2026)',
        shortAnswer:
          'No. Neither ViDA nor any other EU rule currently mandates a payment QR code (SEPA-QR/EPC-QR) on invoices. What does exist: growing voluntary adoption – plus a real but entirely different German law: the e-invoicing mandate for the invoice format itself (XRechnung/ZUGFeRD, 2025-2028).',
        stats: [
          { value: 'None known', label: 'EU laws mandating payment QR codes' },
          { value: '2016', label: 'Slovenia: ZDavPR (fiscalization, not QR)' },
          { value: '2030', label: "ViDA e-invoicing deadline (XML, not QR)" },
          { value: 'Voluntary', label: 'SEPA-QR/GiroCode adoption today' },
        ],
        body: (
          <>
            <h2>What&apos;s Often Claimed – And What Actually Applies</h2>
            <div className="not-prose overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#1f2431] text-left text-slate-300">
                    <th className="py-3 pr-4 font-semibold">Often claimed</th>
                    <th className="py-3 font-semibold">What actually applies</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-[#1f2431]">
                    <td className="py-3 pr-4 font-medium text-slate-300">
                      “ViDA makes SEPA QR codes mandatory on invoices EU-wide”
                    </td>
                    <td className="py-3">
                      ViDA mandates structured e-invoices (XML per EN 16931) for
                      cross-border B2B transactions from 1 July 2030. A payment QR code is
                      nowhere mentioned in the regulation.
                    </td>
                  </tr>
                  <tr className="border-b border-[#1f2431]">
                    <td className="py-3 pr-4 font-medium text-slate-300">
                      “Slovenia has required SEPA QR codes since 2024”
                    </td>
                    <td className="py-3">
                      Slovenia’s actual law, ZDavPR, has been in effect since 2016 and
                      governs tax reporting (fiscalization) of invoices – not a payment QR
                      code requirement.
                    </td>
                  </tr>
                  <tr className="border-b border-[#1f2431]">
                    <td className="py-3 pr-4 font-medium text-slate-300">
                      “Germany and France will require SEPA QR codes by 2026-2028”
                    </td>
                    <td className="py-3">
                      No legal basis for a payment QR code mandate is known to us. Germany
                      and France do have a real but different obligation: Germany requires
                      {' '}
                      <Link
                        href="/wissen/rechnung"
                        className="text-sky-400 underline hover:text-sky-300"
                      >
                        an e-invoicing mandate for the invoice format
                      </Link>{' '}
                      (XRechnung/ZUGFeRD, 2025-2028, German-language guide). France will
                      require all businesses to be able to receive e-invoices from September
                      2026, with an issuing mandate for large and medium-sized companies
                      (Factur-X, UBL 2.1, or CII format, EN 16931-compliant) – extending to
                      SMEs and micro-businesses from September 2027 (Art. 153 Finance Act
                      2020, DGFiP).
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-300">
                      “All EU countries must adopt SEPA QR codes by 2030”
                    </td>
                    <td className="py-3">
                      ViDA’s 2030 deadline concerns the e-invoicing <em>format</em> (XML),
                      not payment QR codes.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Even without a legal mandate, SEPA QR codes (GiroCodes) save time: recipients
              scan the code with their banking app instead of typing IBAN and amount by
              hand. That&apos;s why more and more invoice issuers adopt them voluntarily –
              regardless of any legal requirement.
            </p>
          </>
        ),
        faqs: [
          {
            q: 'Is the SEPA QR code mandatory on invoices?',
            a: "As things currently stand, no. The EU's ViDA initiative regulates structured e-invoice formats (XML per EN 16931), not payment QR codes. The often-cited \"mandatory since 2024\" claim about Slovenia refers to a different law (ZDavPR, fiscalization), not a QR code requirement.",
          },
          {
            q: "What about Germany's e-invoicing mandate?",
            a: 'That is a separate, real topic: starting 2025-2028, Germany requires structured e-invoices in XRechnung or ZUGFeRD format for domestic B2B. It concerns the invoice format, not a payment QR code. See our German-language guide, "GiroCode auf Rechnungen", for details.',
          },
          {
            q: 'How do I create a compliant EPC QR code?',
            a: 'Use girocodegenerator.com to create an EPC069-12 compliant QR code. Enter IBAN, name, amount and reference – free, no registration.',
          },
        ],
        ctas: [{ href: '/en', label: 'Create a SEPA QR code for free →' }],
        relatedLinks: [
          { href: '/en/epc-qr-code-for-invoices', label: 'EPC QR Code for Invoices' },
          { href: '/sepa-qr-pflicht', label: 'Deutsche Version' },
          { href: '/es/factura-electronica-qr-obligatorio', label: 'Versión en español' },
          { href: '/fr/facture-electronique-qr-obligatoire', label: 'Version française' },
        ],
      }}
    />
  );
}
