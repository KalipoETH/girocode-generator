import type { Metadata } from 'next';
import ApiDocsBetaPage from '@/components/ApiDocsBetaPage';

export const metadata: Metadata = {
  title: 'GiroCode API – Documentation | Beta Access',
  description:
    'The GiroCode API documentation is currently in beta. Sign up for early access to the REST API.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/en/api-docs',
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

export default function ApiDocsEnPage() {
  return <ApiDocsBetaPage locale="en" />;
}
