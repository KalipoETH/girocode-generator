import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'EPC QR Code Generator – Free GiroCode Creator | SEPA Payment QR',
    template: '%s | GiroCode Generator',
  },
  description:
    '✅ Create EPC QR codes (GiroCode) for SEPA payments free – no registration, 100% privacy, runs in your browser. Enter IBAN → Generate QR → Done. Includes invoice PDF.',
  keywords: [
    'EPC QR code generator',
    'SEPA QR code generator',
    'EPC QR code free',
    'GiroCode generator',
    'SEPA payment QR code',
  ],
  alternates: {
    canonical: 'https://girocodegenerator.com/en',
    languages: {
      'x-default': 'https://girocodegenerator.com',
      'de': 'https://girocodegenerator.com',
      'en': 'https://girocodegenerator.com/en',
      'fr': 'https://girocodegenerator.com/fr',
      'es': 'https://girocodegenerator.com/es',
      'it': 'https://girocodegenerator.com/it',
    },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

