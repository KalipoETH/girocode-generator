import type { Metadata } from 'next';
import { CountryEpcLanding, countryAlternates } from '../../../components/CountryEpcLanding';

const SLUG = 'epc-qr-code-belgium';

export const metadata: Metadata = {
  title: 'EPC QR Code Generator Belgium – Free SEPA Payment QR 2026',
  description:
    'Create EPC QR codes for Belgian SEPA bank transfers free. Compatible with all Belgian banking apps: BNP Paribas Fortis, KBC, ING Belgium, Belfius. No registration required.',
  alternates: countryAlternates(SLUG),
};

export default function EpcQrCodeBelgiumPage() {
  return (
    <CountryEpcLanding
      content={{
        slug: SLUG,
        breadcrumbLabel: 'EPC QR Code Belgium',
        badge: 'Belgium · EPC069-12 · SEPA',
        h1: 'EPC QR Code Generator for Belgium',
        shortAnswer:
          'Belgium is one of the leading countries for EPC QR code adoption in Europe. Belgian banking apps including BNP Paribas Fortis Mobile, KBC Mobile, ING Banking, and Belfius Mobile all support EPC QR codes for SEPA credit transfers. Creating a Belgian EPC QR code requires a valid Belgian IBAN (starting with BE), recipient name, and optionally an amount in EUR.',
        stats: [
          { value: 'BE', label: 'Belgian IBAN prefix' },
          { value: '16', label: 'Belgian IBAN length' },
          { value: '4', label: 'Major Belgian banks supported' },
          { value: 'EPC069-12', label: 'Official standard' },
        ],
        introSection: {
          title: 'EPC QR Codes in Belgium',
          body: (
            <>
              <p>
                Belgium was among the first countries in Europe to adopt the{' '}
                <strong>EPC QR code standard</strong> for invoice payments. Following the European
                Payments Council&apos;s publication of the EPC069-12 guideline, Belgian banks
                integrated QR code scanning into their mobile banking apps, making it easy for
                businesses and individuals to receive SEPA payments by simply placing a QR code on
                invoices, donation pages or printed materials.
              </p>
              <p>
                Today, virtually all major Belgian retail banks support EPC QR code scanning in
                their mobile apps. When a payer scans the code, their banking app automatically
                fills in the recipient name, Belgian IBAN, amount and payment reference – reducing
                manual entry errors and speeding up payment processing.
              </p>
              <h3>Belgian IBAN Format</h3>
              <p>
                Belgian IBANs start with the country code <strong>BE</strong>, followed by a
                two-digit check number and twelve digits representing the bank and account number.
                The full Belgian IBAN has <strong>16 characters</strong> (e.g.{' '}
                <code>BE68539007547034</code>). When creating an EPC QR code for a Belgian account,
                enter the IBAN without spaces.
              </p>
              <h3>Which Belgian Banking Apps Support EPC QR Codes?</h3>
              <p>
                All four major Belgian banking groups support EPC QR code scanning: BNP Paribas
                Fortis (Easy Banking App), KBC (KBC Mobile), ING Belgium (ING Banking), and Belfius
                (Belfius Mobile). Smaller Belgian banks and fintech apps that support SEPA credit
                transfers generally support the same EPC069-12 standard.
              </p>
            </>
          ),
        },
        banksHeadline: 'Belgian Banks Supporting EPC QR Codes',
        banks: [
          { name: 'BNP Paribas Fortis', app: 'Easy Banking App' },
          { name: 'KBC', app: 'KBC Mobile' },
          { name: 'ING Belgium', app: 'ING Banking' },
          { name: 'Belfius', app: 'Belfius Mobile' },
        ],
        howToHeadline: 'How to Create a Belgian EPC QR Code',
        howToJsonLdName: 'Create a Belgian EPC QR Code',
        howToSteps: [
          {
            title: 'Enter your Belgian IBAN and name',
            description:
              'Open the free generator and enter your Belgian IBAN (starting with BE) and the recipient name as it appears on your bank account.',
          },
          {
            title: 'Add amount and payment reference',
            description:
              'Optionally enter the invoice amount in EUR and a payment reference such as "Invoice 2026-001". Both fields can be left blank for open donations.',
          },
          {
            title: 'Generate and add to your invoice',
            description:
              'Click Generate to create the EPC QR code instantly. Download as PNG or use the invoice PDF feature to embed it in the bottom-right corner of your invoice (minimum 2×2 cm).',
          },
        ],
        faqHeadline: 'FAQ – EPC QR Codes in Belgium',
        faqs: [
          {
            q: 'Do Belgian banking apps support EPC QR codes?',
            a: 'Yes. All major Belgian banking apps – BNP Paribas Fortis Mobile, KBC Mobile, ING Banking, and Belfius Mobile – support scanning EPC QR codes for SEPA credit transfers following the EPC069-12 standard.',
          },
          {
            q: 'What is the Belgian IBAN format?',
            a: 'Belgian IBANs start with BE, followed by 14 digits (2 check digits + 12 account digits). The total length is 16 characters, e.g. BE68539007547034.',
          },
          {
            q: 'Is the EPC QR code the same as GiroCode in Belgium?',
            a: 'Yes. GiroCode is the German brand name for the same EPC069-12 standard. In Belgium, the code is simply called EPC QR code or SEPA QR code. All produce identical QR codes.',
          },
          {
            q: 'Can I use an EPC QR code on Belgian invoices?',
            a: 'Yes. EPC QR codes are widely used on Belgian invoices. Place the QR code in the bottom-right corner at a minimum size of 2×2 cm. The payer scans it with their banking app to pay instantly.',
          },
        ],
        ctaText: 'Create Belgian EPC QR Code →',
        relatedLinks: [
          { href: '/en/epc-qr-code-netherlands', label: 'EPC QR Code Netherlands' },
          { href: '/en/epc-qr-code-austria', label: 'EPC QR Code Austria (Stuzza QR)' },
          { href: '/en/epc-qr-code-for-invoices', label: 'EPC QR Code for Invoices' },
          { href: '/en/wissen/girocode', label: 'What is a GiroCode?' },
        ],
      }}
    />
  );
}
