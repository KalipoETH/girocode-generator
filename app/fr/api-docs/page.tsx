import type { Metadata } from 'next';
import ApiDocsBetaPage from '@/components/ApiDocsBetaPage';

export const metadata: Metadata = {
  title: 'API GiroCode – Documentation | Accès Bêta',
  description:
    "La documentation API GiroCode est actuellement en bêta. Inscrivez-vous pour un accès anticipé à l'API REST.",
  alternates: {
    canonical: 'https://www.girocodegenerator.com/fr/api-docs',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/api-docs',
      de: 'https://www.girocodegenerator.com/api-docs',
      en: 'https://www.girocodegenerator.com/en/api-docs',
      fr: 'https://www.girocodegenerator.com/fr/api-docs',
      es: 'https://www.girocodegenerator.com/es/api-docs',
    },
  },
};

export default function ApiDocsFrPage() {
  return <ApiDocsBetaPage locale="fr" />;
}
