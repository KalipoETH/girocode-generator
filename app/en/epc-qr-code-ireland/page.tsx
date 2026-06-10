import type { Metadata } from 'next';
import { CountryEpcLanding, countryAlternates } from '../../../components/CountryEpcLanding';

const SLUG = 'epc-qr-code-ireland';

export const metadata: Metadata = {
  title: 'EPC QR Code Generator Ireland – Free SEPA QR 2026',
  description:
    'Create EPC QR codes for Irish SEPA payments free. Ireland uses EUR and is a full SEPA member. Compatible with AIB, Bank of Ireland, Ulster Bank.',
  alternates: countryAlternates(SLUG),
};

export default function EpcQrCodeIrelandPage() {
  return (
    <CountryEpcLanding
      content={{
        slug: SLUG,
        breadcrumbLabel: 'EPC QR Code Ireland',
        badge: 'Ireland · EUR · SEPA',
        h1: 'EPC QR Code Generator for Ireland',
        shortAnswer:
          'Ireland is a full SEPA member using EUR, making EPC QR codes ideal for Irish businesses and freelancers. Irish IBANs start with IE and have 22 characters. Major Irish banks including AIB, Bank of Ireland, and Ulster Bank support EPC QR scanning.',
        stats: [
          { value: 'IE', label: 'Irish IBAN prefix' },
          { value: '22', label: 'Irish IBAN length' },
          { value: 'EUR', label: 'Currency' },
          { value: 'Free', label: 'Generator cost' },
        ],
        introSection: {
          title: 'EPC QR Codes in Ireland',
          body: (
            <>
              <p>
                Irish businesses and freelancers can use <strong>EPC QR codes</strong> on invoices
                and payment requests. Customers scan with their banking app and pay via SEPA Credit
                Transfer – IBAN, amount and reference pre-filled automatically.
              </p>
            </>
          ),
        },
        banksHeadline: 'Irish Banks Supporting EPC QR Codes',
        banks: [
          { name: 'AIB', app: 'AIB Mobile' },
          { name: 'Bank of Ireland', app: 'Bank of Ireland Mobile' },
          { name: 'Ulster Bank / KBC Ireland', app: 'Ulster Bank / KBC App' },
        ],
        howToHeadline: 'How to Create an Irish EPC QR Code',
        howToJsonLdName: 'Create an Irish EPC QR Code',
        howToSteps: [
          {
            title: 'Enter your IE IBAN and name',
            description: 'Use your Irish IBAN (starting with IE, 22 characters) and account holder name.',
          },
          {
            title: 'Add amount and reference',
            description: 'Enter the payment amount in EUR and invoice reference.',
          },
          {
            title: 'Download and use on invoices',
            description: 'Generate the QR code and add it to your invoice PDF.',
          },
        ],
        faqHeadline: 'FAQ – EPC QR Codes in Ireland',
        faqs: [
          {
            q: 'Do Irish banks support EPC QR codes?',
            a: 'Yes. AIB, Bank of Ireland, Ulster Bank and KBC Ireland support EPC QR scanning in their mobile banking apps.',
          },
          {
            q: 'What is the Irish IBAN format?',
            a: 'Irish IBANs start with IE, followed by 2 check digits and 18 alphanumeric characters. Total length: 22 characters.',
          },
          {
            q: 'Can freelancers use EPC QR codes in Ireland?',
            a: 'Yes. EPC QR codes are ideal for Irish freelancers and small businesses to get paid faster via SEPA bank transfer.',
          },
        ],
        ctaText: 'Create Irish EPC QR Code →',
        relatedLinks: [
          { href: '/en/epc-qr-code-uk', label: 'EPC QR Code UK' },
          { href: '/en/create-epc-qr-code', label: 'Create EPC QR Code' },
        ],
      }}
    />
  );
}
