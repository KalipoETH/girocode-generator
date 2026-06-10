import type { Metadata } from 'next';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'epc-qr-code-for-invoices';

export const metadata: Metadata = {
  title: 'EPC QR Code for Invoices – Add SEPA Payment QR 2026',
  description:
    'Add EPC QR codes to invoices for instant SEPA payments. Customers scan and pay in seconds. Free generator, no registration, includes invoice PDF.',
  alternates: seoAlternates(SLUG),
};

export default function EpcQrCodeForInvoicesPage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        breadcrumbLabel: 'EPC QR Code for Invoices',
        badge: 'Invoices · EPC069-12 · SEPA',
        h1: 'EPC QR Code for Invoices – Get Paid Faster',
        shortAnswer:
          'Adding an EPC QR code to an invoice allows customers to pay by scanning with their banking app – IBAN, amount, and payment reference are pre-filled automatically. According to EPC guidelines, the QR code should be placed in the bottom right corner of the invoice and measure at least 2×2 cm for reliable scanning.',
        stats: [
          { value: '2×2 cm', label: 'Minimum QR size on invoices' },
          { value: 'EPC069-12', label: 'Official standard' },
          { value: '10 sec.', label: 'Average payment time' },
          { value: '0 €', label: 'Transaction fees' },
        ],
        body: (
          <>
            <h2>Why Add an EPC QR Code to Invoices?</h2>
            <p>
              Manual bank transfers are slow and error-prone. Customers mistype IBANs, forget payment
              references or delay payments because entering transfer details feels cumbersome. An{' '}
              <strong>EPC QR code on your invoice</strong> eliminates these problems: the customer
              opens their banking app, scans the code, verifies the pre-filled data and confirms the
              transfer – done in seconds.
            </p>
            <p>
              EPC QR codes work on both printed and digital invoices. They are free to create, require
              no merchant account and incur no transaction fees – unlike credit card or PayPal
              payments. For freelancers, small businesses and associations in the SEPA zone, EPC QR
              codes are the simplest way to get paid faster.
            </p>

            <h2>How to Place the QR Code on an Invoice</h2>
            <p>
              According to EPC guidelines and best practice across Europe, the EPC QR code should be
              placed in the <strong>bottom-right corner</strong> of the invoice, near the payment
              information section. Key placement rules:
            </p>
            <ul>
              <li>
                <strong>Minimum size:</strong> 2 × 2 cm (preferably 3 × 3 cm for printed invoices)
              </li>
              <li>
                <strong>Print resolution:</strong> At least 300 DPI for reliable scanning
              </li>
              <li>
                <strong>Contrast:</strong> Black QR code on white background – no coloured backgrounds
              </li>
              <li>
                <strong>Label:</strong> Add text such as &quot;Scan to pay&quot; or &quot;Pay by bank
                transfer&quot; next to the code
              </li>
            </ul>

            <h2>Required Invoice Information</h2>
            <p>
              An EPC QR code complements – but does not replace – the mandatory invoice fields. A
              valid invoice in the EU must still include:
            </p>
            <ul>
              <li>Invoice number and date</li>
              <li>Supplier and customer name and address</li>
              <li>Description of goods or services</li>
              <li>Net amount, VAT rate and VAT amount (if applicable)</li>
              <li>Total amount due</li>
              <li>IBAN and payment terms</li>
            </ul>
            <p>
              The EPC QR code encodes the IBAN, recipient name, amount and payment reference – making
              it easy for the payer to transfer the exact invoice amount with the correct reference.
            </p>

            <h2>Freelancer vs. Business Invoices</h2>
            <p>
              <strong>Freelancers</strong> benefit most from EPC QR codes: clients often pay late
              because manual IBAN entry is tedious. A QR code on a PDF invoice sent by email lets
              clients pay immediately from their phone.
            </p>
            <p>
              <strong>Businesses</strong> can embed EPC QR codes in their accounting software output
              or use our invoice PDF generator to create professional invoices with an embedded QR
              code – no subscription or integration required.
            </p>
          </>
        ),
        howTo: {
          name: 'Add an EPC QR Code to an Invoice',
          headline: 'Step-by-Step: EPC QR Code on Your Invoice PDF',
          steps: [
            {
              title: 'Enter invoice details in the generator',
              description:
                'Open girocodegenerator.com and enter your IBAN, name, invoice amount and payment reference (e.g. invoice number). All data stays local in your browser.',
            },
            {
              title: 'Generate the EPC QR code',
              description:
                'Click Generate to create a validated EPC069-12 QR code. Download as PNG or proceed to the invoice PDF feature.',
            },
            {
              title: 'Create invoice PDF with embedded QR',
              description:
                'Use the invoice editor to create a professional PDF with the QR code automatically placed in the bottom-right corner at the correct size.',
            },
            {
              title: 'Send the invoice to your customer',
              description:
                'Email the PDF invoice to your customer. They scan the QR code with their banking app and pay in seconds.',
            },
          ],
        },
        faqs: [
          {
            q: 'Where should I place the EPC QR code on an invoice?',
            a: 'Place the QR code in the bottom-right corner of the invoice, near the payment details. Minimum size: 2×2 cm. For printed invoices, 3×3 cm is recommended.',
          },
          {
            q: 'Can I add an EPC QR code to a digital PDF invoice?',
            a: 'Yes. Digital PDF invoices can include an EPC QR code. The customer scans it directly from their screen or prints the invoice.',
          },
          {
            q: 'Does the EPC QR code replace the IBAN on the invoice?',
            a: 'No. You should still show your IBAN in text form on the invoice. The QR code is an additional convenience for payers who prefer scanning.',
          },
          {
            q: 'Is it free to add an EPC QR code to invoices?',
            a: 'Yes. Creating EPC QR codes with girocodegenerator.com is completely free. There are no per-transaction fees for SEPA bank transfers.',
          },
        ],
        ctas: [
          { href: '/en', label: 'Create EPC QR Code for Invoice →' },
          { href: '/en/rechnungs-editor', label: 'Create Invoice with QR Code →', primary: false },
        ],
        relatedLinks: [
          { href: '/en/wissen/rechnung', label: 'GiroCode on Invoices – Complete Guide' },
          { href: '/en/epc-qr-code-for-freelancers', label: 'EPC QR Code for Freelancers' },
          { href: '/en/rechnungs-editor', label: 'Invoice PDF Generator' },
          { href: '/en/sepa-credit-transfer-qr', label: 'SEPA Credit Transfer QR Code' },
        ],
      }}
    />
  );
}
