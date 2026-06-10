import type { Metadata } from 'next';
import { CountryEpcLanding, countryAlternates } from '../../../components/CountryEpcLanding';

const SLUG = 'epc-qr-code-austria';

export const metadata: Metadata = {
  title: 'EPC QR Code Generator Austria – Free SEPA QR (Stuzza) 2026',
  description:
    'Create EPC QR codes (Stuzza QR) for Austrian SEPA transfers free. Compatible with George, ELBA, BAWAG, Volksbank AT. No registration.',
  alternates: countryAlternates(SLUG),
};

export default function EpcQrCodeAustriaPage() {
  return (
    <CountryEpcLanding
      content={{
        slug: SLUG,
        breadcrumbLabel: 'EPC QR Code Austria',
        badge: 'Austria · Stuzza QR · EPC069-12',
        h1: 'EPC QR Code Generator for Austria (Stuzza QR)',
        shortAnswer:
          'In Austria, the EPC QR code is also known as the Stuzza QR code, named after the Austrian payment standards organization STUZZA. It follows the same EPC069-12 standard. Austrian IBANs start with AT and have 20 characters. All major Austrian banking apps (George by Erste Bank, ELBA by Raiffeisen, BAWAG Mobile) support this standard.',
        stats: [
          { value: 'AT', label: 'Austrian IBAN prefix' },
          { value: '20', label: 'Austrian IBAN length' },
          { value: 'EPC069-12', label: 'Official standard' },
          { value: 'Stuzza', label: 'Austrian brand name' },
        ],
        introSection: {
          title: 'EPC QR Codes in Austria (Stuzza QR)',
          body: (
            <>
              <p>
                In Austria, the EPC QR code is marketed under the name{' '}
                <strong>Stuzza QR code</strong>, named after{' '}
                <strong>STUZZA</strong> (Stabilisierungs- und Structurierungsfonds für den
                Zahlungsverkehr in Österreich) – the Austrian payment standards organization. Despite
                the different name, Stuzza QR codes follow the exact same{' '}
                <strong>EPC069-12 standard</strong> as GiroCodes in Germany and EPC QR codes in
                Belgium and the Netherlands.
              </p>
              <p>
                Austrian businesses, freelancers and associations use Stuzza QR codes on invoices,
                donation pages and event materials. When scanned with an Austrian banking app, the
                transfer form is pre-filled with IBAN, recipient name, amount and payment reference.
              </p>
              <h3>Austrian IBAN Format</h3>
              <p>
                Austrian IBANs start with <strong>AT</strong>, followed by a two-digit check number
                and sixteen digits. The full Austrian IBAN has <strong>20 characters</strong> (e.g.{' '}
                <code>AT611904300234573201</code>).
              </p>
              <h3>Which Austrian Banking Apps Support Stuzza QR Codes?</h3>
              <p>
                All major Austrian banks support Stuzza QR / EPC QR scanning: George (Erste Bank),
                ELBA (Raiffeisen), BAWAG Mobile, and Volksbank AT. The QR code works identically
                across all apps – only the brand name differs.
              </p>
            </>
          ),
        },
        banksHeadline: 'Austrian Banks Supporting Stuzza QR Codes',
        banks: [
          { name: 'Erste Bank', app: 'George' },
          { name: 'Raiffeisen', app: 'ELBA' },
          { name: 'BAWAG', app: 'BAWAG Mobile' },
          { name: 'Volksbank AT', app: 'Volksbank Mobile' },
        ],
        howToHeadline: 'How to Create an Austrian Stuzza QR Code',
        howToJsonLdName: 'Create an Austrian Stuzza QR Code',
        howToSteps: [
          {
            title: 'Enter your Austrian IBAN and name',
            description:
              'Open the free generator and enter your Austrian IBAN (starting with AT) and the recipient name as registered with your bank.',
          },
          {
            title: 'Add amount and payment reference',
            description:
              'Optionally enter the amount in EUR and a payment reference such as "Rechnung 2026-001". Both fields can be left blank.',
          },
          {
            title: 'Generate and add to your invoice',
            description:
              'Create the Stuzza QR / EPC QR code instantly. Add it to your invoice PDF or print it. Austrian payers scan it with George, ELBA or BAWAG Mobile.',
          },
        ],
        faqHeadline: 'FAQ – Stuzza QR Codes in Austria',
        faqs: [
          {
            q: 'Is Stuzza QR the same as EPC QR code?',
            a: 'Yes. Stuzza QR is the Austrian brand name for the EPC069-12 standard. It produces identical QR codes to GiroCode (Germany) and EPC QR codes (Belgium, Netherlands).',
          },
          {
            q: 'What is the Austrian IBAN format?',
            a: 'Austrian IBANs start with AT, followed by 2 check digits and 16 digits. Total length: 20 characters, e.g. AT611904300234573201.',
          },
          {
            q: 'Do Austrian banking apps support Stuzza QR codes?',
            a: 'Yes. George (Erste Bank), ELBA (Raiffeisen), BAWAG Mobile and Volksbank AT all support scanning Stuzza QR / EPC QR codes for SEPA credit transfers.',
          },
          {
            q: 'Can I use a Stuzza QR code on Austrian invoices?',
            a: 'Yes. Stuzza QR codes are standard on Austrian invoices. Place the QR code in the bottom-right corner at minimum 2×2 cm for reliable scanning.',
          },
        ],
        ctaText: 'Create Austrian Stuzza QR Code →',
        relatedLinks: [
          { href: '/en/erste-bank', label: 'GiroCode with Erste Bank (George)' },
          { href: '/en/epc-qr-code-belgium', label: 'EPC QR Code Belgium' },
          { href: '/en/wissen/girocode', label: 'What is a GiroCode?' },
          { href: '/en/sepa-credit-transfer-qr', label: 'SEPA Credit Transfer QR Code' },
        ],
      }}
    />
  );
}
