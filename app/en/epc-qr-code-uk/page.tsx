import type { Metadata } from 'next';
import { CountryEpcLanding, countryAlternates } from '../../../components/CountryEpcLanding';

const SLUG = 'epc-qr-code-uk';

export const metadata: Metadata = {
  title: 'EPC QR Code Generator UK – Free SEPA Payment QR 2026',
  description:
    'Create EPC QR codes for UK SEPA bank transfers free. UK businesses can use SEPA for EUR payments. Compatible with Barclays, HSBC, Lloyds, NatWest.',
  alternates: countryAlternates(SLUG),
};

export default function EpcQrCodeUkPage() {
  return (
    <CountryEpcLanding
      content={{
        slug: SLUG,
        breadcrumbLabel: 'EPC QR Code UK',
        badge: 'United Kingdom · SEPA · EPC069-12',
        h1: 'EPC QR Code Generator for UK Businesses',
        shortAnswer:
          'The United Kingdom remains part of the SEPA network in 2026, allowing UK businesses to send and receive EUR payments via SEPA Credit Transfer. EPC QR codes work for UK businesses with EUR-denominated accounts. UK IBANs start with GB and have 22 characters.',
        stats: [
          { value: 'GB', label: 'UK IBAN prefix' },
          { value: '22', label: 'UK IBAN length' },
          { value: 'SEPA', label: 'Network member' },
          { value: 'Free', label: 'Generator cost' },
        ],
        introSection: {
          title: 'EPC QR Codes for UK Businesses',
          body: (
            <>
              <p>
                UK businesses with EUR accounts can use <strong>EPC QR codes</strong> to receive
                SEPA payments from European customers. Scanning pre-fills IBAN, amount and reference
                in the payer&apos;s banking app – reducing errors and speeding up payment.
              </p>
            </>
          ),
        },
        banksHeadline: 'UK Banks Supporting SEPA Payments',
        banks: [
          { name: 'Barclays', app: 'Barclays Mobile Banking' },
          { name: 'HSBC', app: 'HSBC UK Mobile Banking' },
          { name: 'Lloyds Bank', app: 'Lloyds Bank Mobile Banking' },
          { name: 'NatWest', app: 'NatWest Mobile Banking' },
        ],
        howToHeadline: 'How to Create a UK EPC QR Code',
        howToJsonLdName: 'Create a UK EPC QR Code',
        howToSteps: [
          {
            title: 'Enter your GB IBAN and business name',
            description: 'Use your EUR-denominated UK IBAN (starting with GB, 22 characters).',
          },
          {
            title: 'Add amount and reference',
            description: 'Enter the invoice amount in EUR and payment reference.',
          },
          {
            title: 'Download and add to invoice',
            description: 'Generate the QR code and place it on your invoice PDF.',
          },
        ],
        faqHeadline: 'FAQ – EPC QR Codes in the UK',
        faqs: [
          {
            q: 'Can UK businesses use EPC QR codes?',
            a: 'Yes. UK businesses with EUR SEPA accounts can create and use EPC QR codes for receiving European payments.',
          },
          {
            q: 'Does the UK still support SEPA payments in 2026?',
            a: 'Yes. The United Kingdom remains part of the SEPA network for EUR credit transfers in 2026.',
          },
          {
            q: 'What is the UK IBAN format?',
            a: 'UK IBANs start with GB, followed by 2 check digits and 18 alphanumeric characters. Total length: 22 characters.',
          },
          {
            q: 'Do UK banking apps scan EPC QR codes?',
            a: 'Major UK banking apps including Barclays, HSBC, Lloyds and NatWest support SEPA QR scanning for EUR transfers.',
          },
        ],
        ctaText: 'Create UK EPC QR Code →',
        relatedLinks: [
          { href: '/en/epc-qr-code-ireland', label: 'EPC QR Code Ireland' },
          { href: '/en/create-epc-qr-code', label: 'Create EPC QR Code' },
        ],
      }}
    />
  );
}
