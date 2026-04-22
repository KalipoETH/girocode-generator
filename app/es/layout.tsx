import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Generador GiroCode 2026 – Gratis & Sin Registro',
    template: '%s | GiroCode Generator',
  },
  description:
    '✅ GiroCode en 10 segundos – gratis, sin registro, 100% privacidad. Tus datos bancarios nunca salen de tu navegador. Crear SEPA-QR ahora →',
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

