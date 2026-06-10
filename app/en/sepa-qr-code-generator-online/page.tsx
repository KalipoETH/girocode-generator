import type { Metadata } from 'next';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'sepa-qr-code-generator-online';

export const metadata: Metadata = {
  title: 'SEPA QR Code Generator Online – Free & No Signup 2026',
  description:
    'Online SEPA QR code generator: Create EPC QR codes for bank transfers instantly. Free, no signup, 100% privacy. Works in any browser.',
  alternates: seoAlternates(SLUG),
};

export default function SepaQrCodeGeneratorOnlinePage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        breadcrumbLabel: 'SEPA QR Code Generator Online',
        badge: 'Online · Free · No Signup',
        h1: 'SEPA QR Code Generator Online – No Signup',
        shortAnswer:
          'Our online SEPA QR code generator creates EPC069-12 compliant payment QR codes in seconds. Works in any browser – Chrome, Firefox, Safari, Edge. No installation, no signup, 100% local processing.',
        stats: [
          { value: '0', label: 'Installation needed' },
          { value: 'Free', label: 'No signup' },
          { value: 'EPC069-12', label: 'Compliant output' },
          { value: '100%', label: 'Browser-based' },
        ],
        body: (
          <>
            <h2>Online SEPA QR Code Generator – Works Everywhere</h2>
            <p>
              Create SEPA payment QR codes directly in your browser – on desktop, tablet or mobile.
              No app download, no account creation. Enter IBAN, generate, download PNG.
            </p>
          </>
        ),
        howTo: {
          name: 'Use the Online SEPA QR Generator',
          headline: 'How to Use the Online Generator',
          steps: [
            {
              title: 'Open girocodegenerator.com in your browser',
              description: 'No installation required – works on any device with a modern browser.',
            },
            {
              title: 'Enter payment details',
              description: 'Recipient name, IBAN, and optional amount and payment reference.',
            },
            {
              title: 'Generate and download',
              description: 'Your SEPA QR code is ready instantly as a PNG download.',
            },
          ],
        },
        faqs: [
          {
            q: 'Do I need to install software?',
            a: 'No. The SEPA QR code generator runs entirely in your browser. No download or installation required.',
          },
          {
            q: 'Does it work on mobile?',
            a: 'Yes. The generator works on iPhone, Android and all modern mobile browsers.',
          },
          {
            q: 'Is signup required?',
            a: 'No signup, no account, no email required. Completely free to use.',
          },
        ],
        ctas: [{ href: '/en', label: 'Open Online Generator →' }],
        relatedLinks: [
          { href: '/en/free-sepa-qr-code', label: 'Free SEPA QR Code' },
          { href: '/en/create-epc-qr-code', label: 'Create EPC QR Code' },
        ],
      }}
    />
  );
}
