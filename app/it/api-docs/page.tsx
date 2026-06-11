import type { Metadata } from 'next';
import ApiDocsBetaPage from '@/components/ApiDocsBetaPage';

export const metadata: Metadata = {
  title: 'API GiroCode – Documentazione | Beta',
  description:
    'La documentazione completa dell\'API GiroCode è disponibile solo per gli utenti beta registrati.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/it/api-docs',
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

export default function ApiDocsItPage() {
  return <ApiDocsBetaPage locale="it" />;
}
