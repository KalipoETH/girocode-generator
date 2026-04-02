import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default:
      'Generador GiroCode – Gratis & Al Instante | SEPA-QR',
    template: '%s | GiroCode Generator',
  },
  description:
    '✅ Crea un GiroCode (SEPA-QR) en 10 segundos – 100% gratis, sin registro, en tu navegador. Introduce el IBAN → genera el QR → listo. Incluye factura PDF.',
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

