import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default:
      'GiroCode Generator – Generador SEPA-QR gratuito | girocodegenerator.com',
    template: '%s | GiroCode Generator',
  },
  description:
    'Generador de GiroCode (SEPA-QR / EPC) gratuito – 100% local en tu navegador, sin transmisión de datos. Incluye factura PDF con código QR integrado.',
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

