import type { Metadata } from 'next';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'mandatory-sepa-qr-invoice';

export const metadata: Metadata = {
  title: 'Mandatory SEPA QR Codes on Invoices – EU Regulation 2026',
  description:
    'SEPA QR codes are becoming mandatory on EU invoices. Learn which countries require them, when, and how to create compliant QR codes for free.',
  alternates: seoAlternates(SLUG),
};

export default function MandatorySepaQrInvoicePage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        breadcrumbLabel: 'Mandatory SEPA QR on Invoices',
        badge: 'ViDA · EU Regulation · 2026',
        h1: 'Mandatory SEPA QR Codes on EU Invoices – What You Need to Know',
        shortAnswer:
          "The EU's VAT in the Digital Age (ViDA) initiative is making SEPA QR codes mandatory on business invoices across Europe. Slovenia already requires them. France and Germany follow in 2026-2028. All other EU countries by 2030. Creating a compliant EPC QR code is free and takes 10 seconds.",
        stats: [
          { value: '2024', label: 'Slovenia: already mandatory' },
          { value: '2026-28', label: 'France & Germany' },
          { value: '2030', label: 'All EU countries (ViDA)' },
          { value: 'Free', label: 'Cost to comply' },
        ],
        body: (
          <>
            <h2>Which Countries Require SEPA QR Codes and When?</h2>
            <div className="not-prose overflow-x-auto">
              <table className="w-full min-w-[400px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#1f2431] text-left text-slate-300">
                    <th className="py-3 pr-4 font-semibold">Country</th>
                    <th className="py-3 pr-4 font-semibold">Mandatory from</th>
                    <th className="py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-[#1f2431]">
                    <td className="py-3 pr-4 font-medium text-slate-300">Slovenia</td>
                    <td className="py-3 pr-4">2024</td>
                    <td className="py-3">✅ Already mandatory</td>
                  </tr>
                  <tr className="border-b border-[#1f2431]">
                    <td className="py-3 pr-4 font-medium text-slate-300">Germany</td>
                    <td className="py-3 pr-4">2026-2028</td>
                    <td className="py-3">🔜 Coming soon</td>
                  </tr>
                  <tr className="border-b border-[#1f2431]">
                    <td className="py-3 pr-4 font-medium text-slate-300">France</td>
                    <td className="py-3 pr-4">2026-2028</td>
                    <td className="py-3">🔜 Coming soon</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-300">All EU</td>
                    <td className="py-3 pr-4">2030</td>
                    <td className="py-3">📅 ViDA deadline</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Prepare now by adding EPC QR codes to your invoices. Our free generator creates
              ViDA-compliant EPC069-12 codes in seconds.
            </p>
          </>
        ),
        faqs: [
          {
            q: 'Are SEPA QR codes mandatory on invoices?',
            a: "Yes, under the EU ViDA initiative. Slovenia already requires them. France and Germany follow in 2026-2028. All EU countries by 2030.",
          },
          {
            q: 'How do I create a compliant EPC QR code?',
            a: 'Use girocodegenerator.com to create an EPC069-12 compliant QR code. Enter IBAN, name, amount and reference – free, no registration.',
          },
          {
            q: 'When does Germany require SEPA QR codes on invoices?',
            a: 'Germany is expected to implement mandatory SEPA QR codes on business invoices between 2026 and 2028 as part of the ViDA initiative.',
          },
        ],
        ctas: [{ href: '/en', label: 'Create compliant EPC QR code now →' }],
        relatedLinks: [
          { href: '/en/epc-qr-code-for-invoices', label: 'EPC QR Code for Invoices' },
          { href: '/sepa-qr-pflicht', label: 'SEPA QR Pflicht (DE)' },
        ],
      }}
    />
  );
}
