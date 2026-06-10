import type { Metadata } from 'next';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'create-epc-qr-code';

export const metadata: Metadata = {
  title: 'Create EPC QR Code Free – Online Generator 2026',
  description:
    'Create an EPC QR code for SEPA payments free online. No registration, 100% local, instant download. Compatible with all European banking apps.',
  alternates: seoAlternates(SLUG),
};

export default function CreateEpcQrCodePage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        breadcrumbLabel: 'Create EPC QR Code',
        badge: 'EPC069-12 · SEPA · Free',
        h1: 'Create EPC QR Code Free – Instant & Online',
        shortAnswer:
          'Creating an EPC QR code takes under 10 seconds: Enter the recipient name and IBAN, optionally add amount and payment reference, click generate, and download your QR code as PNG. No registration required. All data stays in your browser.',
        stats: [
          { value: '10 sec.', label: 'Time to create' },
          { value: 'Free', label: 'No subscription' },
          { value: 'EPC069-12', label: 'Official standard' },
          { value: '36 countries', label: 'SEPA coverage' },
        ],
        body: (
          <>
            <h2>Create EPC QR Codes in Seconds</h2>
            <p>
              An <strong>EPC QR code</strong> is the fastest way to receive SEPA bank transfers.
              Whether you need a payment QR for an invoice, donation page or website – our free
              generator creates a compliant EPC069-12 code instantly in your browser.
            </p>
            <p>
              No account, no subscription, no data sharing. Enter your IBAN, generate, download –
              done.
            </p>
          </>
        ),
        howTo: {
          name: 'Create an EPC QR Code',
          headline: 'How to Create an EPC QR Code',
          steps: [
            {
              title: 'Enter recipient name and IBAN',
              description:
                'Open the generator and enter the account holder name and IBAN exactly as registered with your bank.',
            },
            {
              title: 'Add optional amount and payment reference',
              description:
                'Optionally enter the amount in EUR and a payment reference (e.g. invoice number). Leave blank for open amounts.',
            },
            {
              title: 'Click Generate and download PNG',
              description:
                'Click Generate to create your EPC QR code. Download as PNG or embed it in your invoice PDF.',
            },
          ],
        },
        faqs: [
          {
            q: 'How do I create an EPC QR code for free?',
            a: 'Open girocodegenerator.com, enter recipient name and IBAN, optionally add amount and reference, click Generate, and download your QR code as PNG. Completely free – no registration required.',
          },
          {
            q: 'What information do I need to create an EPC QR code?',
            a: 'You need the recipient name (max. 70 characters) and IBAN. Amount and payment reference are optional but recommended for invoices.',
          },
          {
            q: 'Can I create multiple EPC QR codes?',
            a: 'Yes. You can create unlimited EPC QR codes for free. Use the bulk generator for CSV-based batch creation.',
          },
          {
            q: 'Is my IBAN safe when creating an EPC QR code?',
            a: 'Yes. All data is processed 100% locally in your browser. No IBAN, amount or payment reference is transmitted to our servers.',
          },
          {
            q: 'How do I add an EPC QR code to my invoice?',
            a: 'Generate the QR code, then use our invoice PDF generator to embed it automatically in the bottom-right corner of your invoice (minimum 2×2 cm).',
          },
        ],
        ctas: [{ href: '/en', label: 'Create EPC QR Code Now →' }],
        relatedLinks: [
          { href: '/en/generate-sepa-qr-code', label: 'Generate SEPA QR Code' },
          { href: '/en/free-sepa-qr-code', label: 'Free SEPA QR Code' },
          { href: '/en/epc-qr-code-for-invoices', label: 'EPC QR Code for Invoices' },
        ],
      }}
    />
  );
}
