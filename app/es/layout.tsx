import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Generador Código QR SEPA – Gratis & Sin Registro 2026',
    template: '%s | GiroCode Generator',
  },
  description:
    '✅ Crea un código QR SEPA (GiroCode/EPC) en 10 segundos – gratis, sin registro, 100% local. Compatible con todas las apps bancarias europeas.',
  keywords: [
    'generador código QR SEPA',
    'crear QR SEPA gratis',
    'código QR transferencia SEPA',
    'GiroCode generador',
    'QR code SEPA España',
  ],
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es',
    languages: {
      'x-default': 'https://www.girocodegenerator.com',
      'de': 'https://www.girocodegenerator.com',
      'en': 'https://www.girocodegenerator.com/en',
      'fr': 'https://www.girocodegenerator.com/fr',
      'es': 'https://www.girocodegenerator.com/es',
    },
  },
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

