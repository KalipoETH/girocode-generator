import type { Metadata } from 'next';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'generate-sepa-qr-code';

export const metadata: Metadata = {
  title: 'Generate SEPA QR Code Online – Free & Instant 2026',
  description:
    'Generate a SEPA QR code (EPC069-12) online for free. Enter IBAN and recipient name, generate instantly, download as PNG. No signup needed.',
  alternates: seoAlternates(SLUG),
};

export default function GenerateSepaQrCodePage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        breadcrumbLabel: 'Generate SEPA QR Code',
        badge: 'SEPA · EPC069-12 · Instant',
        h1: 'Generate SEPA QR Code Online – Free & Instant',
        shortAnswer:
          'Generating a SEPA QR code online is free and takes seconds. Enter the IBAN, recipient name, and optionally an amount, click generate, and your SEPA QR code (EPC standard) is ready to download or embed in your invoice PDF.',
        stats: [
          { value: '10 sec.', label: 'Generation time' },
          { value: 'Free', label: 'No signup' },
          { value: 'EPC069-12', label: 'SEPA standard' },
          { value: '100%', label: 'Local in browser' },
        ],
        body: (
          <>
            <h2>Generate SEPA QR Codes Instantly</h2>
            <p>
              SEPA QR codes (EPC QR codes) let payers scan and pay with their banking app – IBAN,
              amount and reference are pre-filled automatically. Our generator creates valid
              EPC069-12 codes for all 36 SEPA countries.
            </p>
          </>
        ),
        howTo: {
          name: 'Generate a SEPA QR Code',
          headline: 'How to Generate a SEPA QR Code',
          steps: [
            {
              title: 'Enter IBAN and recipient name',
              description: 'Provide the SEPA account IBAN and the registered account holder name.',
            },
            {
              title: 'Add amount and reference (optional)',
              description: 'Enter the payment amount and reference for invoice matching.',
            },
            {
              title: 'Generate and download',
              description: 'Click Generate and download your SEPA QR code as PNG instantly.',
            },
          ],
        },
        faqs: [
          {
            q: 'How do I generate a SEPA QR code online?',
            a: 'Enter IBAN and recipient name at girocodegenerator.com, click Generate, and download your SEPA QR code as PNG. Free, no signup.',
          },
          {
            q: 'Is SEPA QR code the same as EPC QR code?',
            a: 'Yes. SEPA QR code and EPC QR code refer to the same EPC069-12 standard. In Germany it is called GiroCode, in Austria Stuzza QR.',
          },
          {
            q: 'Can I generate SEPA QR codes for invoices?',
            a: 'Yes. Generate the QR code and use our invoice PDF feature to embed it on your invoice automatically.',
          },
        ],
        ctas: [{ href: '/en', label: 'Generate SEPA QR Code Now →' }],
        relatedLinks: [
          { href: '/en/create-epc-qr-code', label: 'Create EPC QR Code' },
          { href: '/en/sepa-qr-code-generator-online', label: 'SEPA QR Code Generator Online' },
        ],
      }}
    />
  );
}
