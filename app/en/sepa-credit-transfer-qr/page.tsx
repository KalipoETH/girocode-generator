import type { Metadata } from 'next';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'sepa-credit-transfer-qr';

export const metadata: Metadata = {
  title: 'SEPA Credit Transfer QR Code Generator – Free 2026',
  description:
    'Generate SEPA Credit Transfer QR codes (EPC069-12) free. For businesses, freelancers and associations. 100% local, no data sharing.',
  alternates: seoAlternates(SLUG),
};

export default function SepaCreditTransferQrPage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        breadcrumbLabel: 'SEPA Credit Transfer QR Code',
        badge: 'SEPA · EPC069-12 · SCT',
        h1: 'SEPA Credit Transfer QR Code Generator',
        shortAnswer:
          'A SEPA Credit Transfer QR code (technically an EPC QR code) encodes all data needed for a SEPA Credit Transfer (SCT): beneficiary name, IBAN, optional BIC, amount in EUR, and payment reference. The code follows the EPC069-12 standard and is supported by banking apps across all 36 SEPA countries.',
        stats: [
          { value: '36', label: 'SEPA countries' },
          { value: 'EPC069-12', label: 'Official standard' },
          { value: 'SCT', label: 'SEPA Credit Transfer' },
          { value: '100%', label: 'Free & local' },
        ],
        body: (
          <>
            <h2>What is a SEPA Credit Transfer QR Code?</h2>
            <p>
              A <strong>SEPA Credit Transfer QR code</strong> is a QR code that encodes all the
              information required to initiate a <strong>SEPA Credit Transfer (SCT)</strong> – the
              standard bank transfer mechanism across the Single Euro Payments Area. Technically, it
              follows the <strong>EPC069-12 standard</strong> defined by the European Payments
              Council and is also known as EPC QR code, GiroCode (Germany) or Stuzza QR (Austria).
            </p>
            <p>
              When scanned with a SEPA-capable banking app, the QR code pre-fills the transfer form
              with the beneficiary name, IBAN, optional BIC, amount in EUR and payment reference. The
              payer verifies the details and confirms – the transfer is initiated without manual data
              entry.
            </p>

            <h2>SEPA Credit Transfer QR Code Payload</h2>
            <p>
              The EPC069-12 payload contains exactly 11 lines of plain text, encoded as a QR code:
            </p>
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 text-xs text-slate-200 sm:text-sm">
              <code>{`BCD                      ← Service Tag
002                      ← Version (002 = BIC optional)
1                        ← Character Set (UTF-8)
SCT                      ← SEPA Credit Transfer
                         ← BIC (optional)
Max Mustermann           ← Beneficiary name (max 70 chars)
DE89370400440532013000   ← IBAN
EUR99.99                 ← Amount (EUR + amount)
                         ← Purpose Code (empty)
                         ← Structured reference (empty)
Invoice 2026-001         ← Payment reference (max 140 chars)`}</code>
            </pre>

            <h2>Who Uses SEPA Credit Transfer QR Codes?</h2>
            <ul>
              <li>
                <strong>Freelancers &amp; self-employed:</strong> Faster invoice payments, fewer IBAN
                typos
              </li>
              <li>
                <strong>Small businesses:</strong> Professional invoices with embedded payment QR
              </li>
              <li>
                <strong>Associations &amp; NGOs:</strong> Donation QR codes on flyers and websites
              </li>
              <li>
                <strong>Tradespeople:</strong> On-site invoice payment via QR scan
              </li>
              <li>
                <strong>Private sellers:</strong> eBay, marketplace and classified ad payments
              </li>
            </ul>

            <h2>SEPA Credit Transfer QR vs. Other Payment Methods</h2>
            <p>
              Unlike PayPal, credit cards or iDEAL, SEPA Credit Transfer QR codes require no merchant
              account, no API integration and charge zero transaction fees. They work offline on
              printed invoices, posters and PDFs. The trade-off: the payer must actively confirm the
              transfer in their banking app – there is no instant payment guarantee like with SEPA
              Instant (SCT Inst).
            </p>

            <h2>Countries Using SEPA Credit Transfer QR Codes</h2>
            <p>
              The EPC069-12 standard is valid across all 36 SEPA countries. Active adoption is highest
              in Germany (GiroCode), Austria (Stuzza QR), Belgium, the Netherlands and Finland. Any
              European bank account can receive payments via SEPA Credit Transfer QR code.
            </p>
          </>
        ),
        howTo: {
          name: 'Generate a SEPA Credit Transfer QR Code',
          headline: 'Create a SEPA Credit Transfer QR Code in 3 Steps',
          steps: [
            {
              title: 'Enter beneficiary IBAN and name',
              description:
                'Open the free generator and enter the recipient IBAN (any SEPA country) and beneficiary name. BIC is optional since SEPA migration 2016.',
            },
            {
              title: 'Add amount and payment reference',
              description:
                'Enter the transfer amount in EUR and an optional payment reference. Both fields can be left blank for open payments.',
            },
            {
              title: 'Generate and use the QR code',
              description:
                'Click Generate to create a validated EPC069-12 QR code. Download as PNG, embed in invoices or share digitally. 100% local – no data sent to servers.',
            },
          ],
        },
        faqs: [
          {
            q: 'Is a SEPA Credit Transfer QR code the same as an EPC QR code?',
            a: 'Yes. SEPA Credit Transfer QR code, EPC QR code and GiroCode all refer to the same EPC069-12 standard. The QR code encodes data for a SEPA Credit Transfer (SCT).',
          },
          {
            q: 'Which countries support SEPA Credit Transfer QR codes?',
            a: 'All 36 SEPA countries support the EPC069-12 standard. Active use is highest in Germany, Austria, Belgium, Netherlands and Finland.',
          },
          {
            q: 'Is the SEPA Credit Transfer QR generator free?',
            a: 'Yes. girocodegenerator.com is completely free – no registration, no subscription. All data is processed locally in your browser with no server transmission.',
          },
          {
            q: 'What is the difference between SCT and SCT Inst QR codes?',
            a: 'Standard SCT QR codes initiate regular SEPA credit transfers (1–2 business days). SCT Inst (instant) QR codes exist but are less common. Our generator creates standard SCT QR codes compatible with all banking apps.',
          },
        ],
        ctas: [{ href: '/en', label: 'Generate SEPA Credit Transfer QR Code →' }],
        relatedLinks: [
          { href: '/en/epc-qr-code-generator', label: 'EPC QR Code Generator' },
          { href: '/en/sepa-qr-code', label: 'SEPA QR Code Generator' },
          { href: '/en/wissen/epc-standard', label: 'EPC Standard Documentation' },
          { href: '/en/epc-qr-code-belgium', label: 'EPC QR Code Belgium' },
        ],
      }}
    />
  );
}
