import type { Metadata } from 'next';
import { CountryEpcLanding, countryAlternates } from '../../../components/CountryEpcLanding';

const SLUG = 'epc-qr-code-netherlands';

export const metadata: Metadata = {
  title: 'EPC QR Code Generator Netherlands – Free SEPA QR 2026',
  description:
    'Create EPC QR codes for Dutch SEPA bank transfers free. Compatible with ING Netherlands, ABN AMRO, Rabobank, SNS Bank. No registration.',
  alternates: countryAlternates(SLUG),
};

export default function EpcQrCodeNetherlandsPage() {
  return (
    <CountryEpcLanding
      content={{
        slug: SLUG,
        breadcrumbLabel: 'EPC QR Code Netherlands',
        badge: 'Netherlands · EPC069-12 · SEPA',
        h1: 'EPC QR Code Generator for the Netherlands',
        shortAnswer:
          'The Netherlands uses EPC QR codes (also called SEPA QR codes) for bank transfers. Dutch banking apps including ING, ABN AMRO, Rabobank, and SNS Bank support the EPC069-12 standard. Dutch IBANs start with NL and have 18 characters.',
        stats: [
          { value: 'NL', label: 'Dutch IBAN prefix' },
          { value: '18', label: 'Dutch IBAN length' },
          { value: '4', label: 'Major Dutch banks supported' },
          { value: '2016', label: 'SEPA migration completed' },
        ],
        introSection: {
          title: 'EPC QR Codes in the Netherlands',
          body: (
            <>
              <p>
                The Netherlands completed its full SEPA migration in <strong>2016</strong>, making
                SEPA credit transfers the standard for domestic and cross-border payments. Since
                then, Dutch banks have integrated <strong>EPC QR code scanning</strong> into their
                mobile banking apps, allowing businesses and freelancers to receive payments by
                placing a QR code on invoices, quotes or printed materials.
              </p>
              <p>
                EPC QR codes in the Netherlands follow the same <strong>EPC069-12 standard</strong>{' '}
                as in Germany, Belgium and Austria. When scanned, the banking app pre-fills the
                transfer form with IBAN, recipient name, amount and payment reference – eliminating
                manual typing and reducing payment errors.
              </p>
              <h3>Dutch IBAN Format</h3>
              <p>
                Dutch IBANs start with <strong>NL</strong>, followed by a two-digit check number
                and ten alphanumeric characters representing the bank and account. The full Dutch
                IBAN has <strong>18 characters</strong> (e.g.{' '}
                <code>NL91ABNA0417164300</code>).
              </p>
              <h3>EPC QR Code vs. iDEAL</h3>
              <p>
                <strong>iDEAL</strong> is a Dutch online payment system that requires checkout
                integration on a website. <strong>EPC QR codes</strong> are offline-first: they work
                on printed invoices, posters and PDFs without any online integration. For SEPA bank
                transfers, EPC QR codes are simpler, free and require no merchant account.
              </p>
            </>
          ),
        },
        banksHeadline: 'Dutch Banks Supporting EPC QR Codes',
        banks: [
          { name: 'ING Netherlands', app: 'ING Banking' },
          { name: 'ABN AMRO', app: 'ABN AMRO Banking' },
          { name: 'Rabobank', app: 'Rabo Banking App' },
          { name: 'SNS Bank', app: 'SNS Banking App' },
        ],
        howToHeadline: 'How to Create a Dutch EPC QR Code',
        howToJsonLdName: 'Create a Dutch EPC QR Code',
        howToSteps: [
          {
            title: 'Enter your Dutch IBAN and name',
            description:
              'Open the free generator and enter your Dutch IBAN (starting with NL) and the recipient name exactly as registered with your bank.',
          },
          {
            title: 'Add amount and reference (optional)',
            description:
              'Enter the invoice amount in EUR and a payment reference. Leave the amount blank if the payer should choose their own amount.',
          },
          {
            title: 'Download and place on your invoice',
            description:
              'Generate the EPC QR code and add it to your invoice PDF or print it. Dutch payers scan it with ING, ABN AMRO, Rabobank or SNS banking apps.',
          },
        ],
        faqHeadline: 'FAQ – EPC QR Codes in the Netherlands',
        faqs: [
          {
            q: 'Do Dutch banking apps support EPC QR codes?',
            a: 'Yes. ING Banking, ABN AMRO Banking, Rabo Banking App and SNS Banking App all support scanning EPC QR codes for SEPA credit transfers.',
          },
          {
            q: 'What is the Dutch IBAN format?',
            a: 'Dutch IBANs start with NL, followed by 2 check digits and 10 alphanumeric characters. Total length: 18 characters, e.g. NL91ABNA0417164300.',
          },
          {
            q: 'Can I use EPC QR codes in the Netherlands?',
            a: 'Yes. EPC QR codes are fully supported in the Netherlands and widely used on invoices and donation materials. They follow the EPC069-12 standard valid across all 36 SEPA countries.',
          },
          {
            q: 'What is iDEAL vs EPC QR code?',
            a: 'iDEAL is a Dutch online payment system requiring website checkout integration. EPC QR codes work offline on printed invoices and PDFs without any integration – ideal for SEPA bank transfers without transaction fees.',
          },
        ],
        ctaText: 'Create Dutch EPC QR Code →',
        relatedLinks: [
          { href: '/en/epc-qr-code-belgium', label: 'EPC QR Code Belgium' },
          { href: '/en/epc-qr-code-finland', label: 'EPC QR Code Finland' },
          { href: '/en/sepa-credit-transfer-qr', label: 'SEPA Credit Transfer QR Code' },
          { href: '/en/wissen/girocode', label: 'What is a GiroCode?' },
        ],
      }}
    />
  );
}
