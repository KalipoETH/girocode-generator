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
    canonical: 'https://www.girocodegenerator.com/en',
    languages: {
      'x-default': 'https://www.girocodegenerator.com',
      'de': 'https://www.girocodegenerator.com',
      'en': 'https://www.girocodegenerator.com/en',
      'fr': 'https://www.girocodegenerator.com/fr',
      'es': 'https://www.girocodegenerator.com/es',
    },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

