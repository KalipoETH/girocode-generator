import type { Metadata } from 'next';
import { CountryEpcLanding, countryAlternates } from '../../../components/CountryEpcLanding';

const SLUG = 'epc-qr-code-finland';

export const metadata: Metadata = {
  title: 'EPC QR Code Generator Finland – Free SEPA Payment QR 2026',
  description:
    'Create EPC QR codes for Finnish SEPA transfers free. Compatible with Finnish banking apps: OP, Nordea, Danske Bank. No registration required.',
  alternates: countryAlternates(SLUG),
};

export default function EpcQrCodeFinlandPage() {
  return (
    <CountryEpcLanding
      content={{
        slug: SLUG,
        breadcrumbLabel: 'EPC QR Code Finland',
        badge: 'Finland · EPC069-12 · SEPA',
        h1: 'EPC QR Code Generator for Finland',
        shortAnswer:
          'Finland adopted EPC QR codes for SEPA payments alongside traditional Finnish banking methods. Finnish IBANs start with FI and have 18 characters. Major Finnish banks including OP, Nordea, and Danske Bank support EPC QR code scanning.',
        stats: [
          { value: 'FI', label: 'Finnish IBAN prefix' },
          { value: '18', label: 'Finnish IBAN length' },
          { value: 'EPC069-12', label: 'Official standard' },
          { value: '2017', label: 'EPC adoption year' },
        ],
        introSection: {
          title: 'EPC QR Codes in Finland',
          body: (
            <>
              <p>
                Finland adopted the <strong>EPC QR code standard</strong> in{' '}
                <strong>2017</strong>, integrating it alongside traditional Finnish payment methods
                such as online banking references and mobile payment apps. Finnish businesses,
                associations and freelancers increasingly use EPC QR codes on invoices to simplify
                SEPA credit transfers for their customers.
              </p>
              <p>
                The EPC069-12 standard is fully compatible with Finnish banking apps. When a payer
                scans an EPC QR code, their banking app automatically fills in the recipient IBAN,
                name, amount and payment reference – making invoice payments faster and more
                reliable.
              </p>
              <h3>Finnish IBAN Format</h3>
              <p>
                Finnish IBANs start with <strong>FI</strong>, followed by a two-digit check number
                and fourteen digits representing the bank and account number. The full Finnish IBAN
                has <strong>18 characters</strong> (e.g.{' '}
                <code>FI2112345600000785</code>).
              </p>
              <h3>Which Finnish Banking Apps Support EPC QR Codes?</h3>
              <p>
                The three largest Finnish banking groups – OP (Osuuspankki), Nordea Finland, and
                Danske Bank – all support EPC QR code scanning in their mobile banking apps. Smaller
                Finnish banks that support SEPA credit transfers generally accept the same standard.
              </p>
            </>
          ),
        },
        banksHeadline: 'Finnish Banks Supporting EPC QR Codes',
        banks: [
          { name: 'OP (Osuuspankki)', app: 'OP Mobile' },
          { name: 'Nordea Finland', app: 'Nordea Mobile' },
          { name: 'Danske Bank', app: 'Danske Mobile Banking' },
        ],
        howToHeadline: 'How to Create a Finnish EPC QR Code',
        howToJsonLdName: 'Create a Finnish EPC QR Code',
        howToSteps: [
          {
            title: 'Enter your Finnish IBAN and name',
            description:
              'Open the free generator and enter your Finnish IBAN (starting with FI) and the recipient name as registered with your bank.',
          },
          {
            title: 'Add amount and payment reference',
            description:
              'Enter the invoice amount in EUR and a reference such as an invoice number. Both fields are optional.',
          },
          {
            title: 'Generate and share',
            description:
              'Create the EPC QR code instantly and add it to your invoice PDF, email or website. Finnish payers scan it with OP Mobile, Nordea Mobile or Danske Mobile Banking.',
          },
        ],
        faqHeadline: 'FAQ – EPC QR Codes in Finland',
        faqs: [
          {
            q: 'Do Finnish banking apps support EPC QR codes?',
            a: 'Yes. OP Mobile, Nordea Mobile and Danske Mobile Banking all support scanning EPC QR codes for SEPA credit transfers following the EPC069-12 standard.',
          },
          {
            q: 'What is the Finnish IBAN format?',
            a: 'Finnish IBANs start with FI, followed by 2 check digits and 14 digits. Total length: 18 characters, e.g. FI2112345600000785.',
          },
          {
            q: 'Can I use EPC QR codes for Finnish invoices?',
            a: 'Yes. EPC QR codes are suitable for Finnish invoices. Place the QR code in the bottom-right corner at minimum 2×2 cm. The payer scans it with their banking app to initiate the SEPA transfer.',
          },
        ],
        ctaText: 'Create Finnish EPC QR Code →',
        relatedLinks: [
          { href: '/en/epc-qr-code-netherlands', label: 'EPC QR Code Netherlands' },
          { href: '/en/epc-qr-code-belgium', label: 'EPC QR Code Belgium' },
          { href: '/en/epc-qr-code-for-invoices', label: 'EPC QR Code for Invoices' },
          { href: '/en/wissen/girocode', label: 'What is a GiroCode?' },
        ],
      }}
    />
  );
}
