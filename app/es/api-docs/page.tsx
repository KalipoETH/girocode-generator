import type { Metadata } from 'next';
import ApiDocsBetaPage from '@/components/ApiDocsBetaPage';

export const metadata: Metadata = {
  title: 'API GiroCode – Documentación | Acceso Beta',
  description:
    'La documentación API de GiroCode está actualmente en beta. Regístrate para acceso anticipado a la API REST.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/api-docs',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/api-docs',
      de: 'https://www.girocodegenerator.com/api-docs',
      en: 'https://www.girocodegenerator.com/en/api-docs',
      fr: 'https://www.girocodegenerator.com/fr/api-docs',
      es: 'https://www.girocodegenerator.com/es/api-docs',
      it: 'https://www.girocodegenerator.com/it/api-docs',
    },
  },
};

export default function ApiDocsEsPage() {
  return <ApiDocsBetaPage locale="es" />;
}
